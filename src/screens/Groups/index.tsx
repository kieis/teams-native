import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com sua turma" />
    </Container>
  );
}
