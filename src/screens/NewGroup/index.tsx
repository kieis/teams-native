import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import HighLight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as groupStorage from "@storage/group";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleCreate() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("New Group", "Please inform a group name.");
      }

      await groupStorage.create(group);
      navigation.navigate("players", { group });
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("New Group", err.message);
      }
      Alert.alert("New Group", "Can't create a new group.");
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight title="New group" subTitle="create a group to add members" />
        <Input placeholder="Group name" onChangeText={setGroup} />
        <Button
          title="Create"
          style={{ marginTop: 20 }}
          onPress={handleCreate}
        />
      </Content>
    </Container>
  );
}
