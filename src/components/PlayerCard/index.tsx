import ButtonIcon from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

export default function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon icon="close" variant="secondary" onPress={onRemove} />
    </Container>
  );
}
