import { Container, Message } from "./styles";

export default function ListEmpty({ message }: { message: string }) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
