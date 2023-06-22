import Header from "@components/Header";
import { Container, Form } from "./styles";
import HighLight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";

export default function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight title="Group name" subTitle="add members to separate teams" />
      <Form>
        <Input placeholder="Member name" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
