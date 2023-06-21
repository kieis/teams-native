import Header from "@components/Header";
import { Container } from "./styles";
import HighLight from "@components/Highlight";

export default function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight title="Group name" subTitle="add members to separate teams" />
    </Container>
  );
}
