import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import HighLight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as groupStorage from "@storage/group";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleCreate() {
    try {
      await groupStorage.create(group);
      navigation.navigate("players", { group });
    } catch (err) {
      console.error(err);
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
