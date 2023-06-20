import { TouchableOpacityProps } from "react-native";
import { ButtonVariantStyleProps, Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariantStyleProps;
}

export default function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
