import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(["Group 1", "Group 2"]);

  return (
    <Container>
      <Header />
      <Highlight title="Teams" subTitle="Play with your team" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
