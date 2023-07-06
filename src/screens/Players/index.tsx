import Header from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import HighLight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

export default function Players() {
  const [selectedGroup, setSelectedGroup] = useState("Group A");
  const [players, setPlayers] = useState<string[]>([]);

  function handleAddPlayer(player: string) {}

  function handleRemovePlayer(player: string) {}

  return (
    <Container>
      <Header showBackButton />

      <HighLight title="Group name" subTitle="add members to separate teams" />
      <Form>
        <Input placeholder="Member name" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Group A", "Group B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedGroup}
              onPress={() => setSelectedGroup(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Have no members at this group" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remove Member" variant="secondary" />
    </Container>
  );
}
