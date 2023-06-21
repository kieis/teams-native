import Header from "@components/Header";
import { Container, Content, Icon } from "./styles";
import HighLight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight title="New group" subTitle="create a group to add members" />
        <Input placeholder="Group name" />
        <Button title="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
