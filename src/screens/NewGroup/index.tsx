import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import HighLight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleForwardNavigation() {
    navigation.navigate("players", { group });
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
          onPress={handleForwardNavigation}
        />
      </Content>
    </Container>
  );
}
