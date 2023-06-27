import { TouchableOpacityProps } from "react-native";
import { ButtonIconVariantStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconProps extends TouchableOpacityProps {
  variant?: ButtonIconVariantStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}
//useTheme => context
export default function ButtonIcon({
  variant,
  icon,
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} variant={variant} />
    </Container>
  );
}
