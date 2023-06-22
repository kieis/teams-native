import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconVariantStyleProps = "primary" | "secondary";

interface ButtonIconStyleProps {
  variant?: ButtonIconVariantStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(
  ({ theme, variant }) => {
    const variantColor = (): string => {
      switch (variant) {
        case "primary":
          return theme.COLORS.GREEN_700;
        case "secondary":
          return theme.COLORS.RED_DARK;
        default:
          return theme.COLORS.GREEN_700;
      }
    };

    return {
      color: variantColor(),
      size: 24,
    };
  }
)``;
