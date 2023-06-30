import { Container, FilterStyleProps, Title } from "./styles";

interface FilterProps extends FilterStyleProps {
  title: string;
}

export default function Filter({
  title,
  isActive = false,
  ...rest
}: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
