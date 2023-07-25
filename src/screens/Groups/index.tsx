import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Teams" subTitle="Play with your team" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message="Empty List" />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button title="Create new group" onPress={handleNewGroup} />
    </Container>
  );
}
