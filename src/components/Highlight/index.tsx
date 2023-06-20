import { Container, SubTitle, Title } from "./styles";

interface HighLighProps {
  title: string;
  subTitle: string;
}

export default function HighLight({ title, subTitle }: HighLighProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
