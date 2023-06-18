import Groups from "@screens/Groups";
import theme from "@theme/index";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <Groups />
    </ThemeProvider>
  );
}
