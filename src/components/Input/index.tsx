import { TextInputProps } from "react-native";
import { Container } from "./styles";
//import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {}

export default function Input({ ...rest }: InputProps) {
  //const theme = useTheme(); another way to use theme

  return <Container {...rest} />;
}
