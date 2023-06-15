import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import Groups from "./src/screens/Groups";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" translucent />
      <Groups />
    </Fragment>
  );
}
