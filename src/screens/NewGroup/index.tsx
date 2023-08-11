import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import HighLight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export default function NewGroup() {
  const navigation = useNavigation();

  function handleForwardNavigation() {
    navigation.navigate("players", { group: "Tech" });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight title="New group" subTitle="create a group to add members" />
        <Input placeholder="Group name" />
        <Button
          title="Create"
          style={{ marginTop: 20 }}
          onPress={handleForwardNavigation}
        />
      </Content>
    </Container>
  );
}
