import { css, styled } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonVariantStyleProps = "primary" | "secondary";

type ButtonStyleProps = {
  variant?: ButtonVariantStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return theme.COLORS.GREEN_700;
      case "secondary":
        return theme.COLORS.RED_DARK;
      default:
        return theme.COLORS.GREEN_700;
    }
  }};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
