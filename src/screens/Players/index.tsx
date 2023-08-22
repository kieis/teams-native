import Header from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import HighLight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import { FlatList, Alert } from "react-native";
import { useEffect, useState } from "react";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { PlayerDTO } from "@storage/player/PlayerDTO";
import { AppError } from "@utils/AppError";
import * as playerStorage from "@storage/player";

type RouteParams = {
  group: string;
};

export default function Players() {
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState("Group A");
  const [players, setPlayers] = useState<PlayerDTO[]>([]);

  const route = useRoute();
  const { group: groupName } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (!playerName || playerName?.trim().length === 0) {
      return Alert.alert("New Player", "Please enter a member name.");
    }

    try {
      const player: PlayerDTO = {
        name: playerName,
        team: selectedGroup,
      };

      await playerStorage.createByGroup(player, groupName);
      await fetchPlayerByTeam();
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("New Member", err.message);
      }
      Alert.alert("New Member", "Can't create a new member.");
    }
  }

  async function fetchPlayerByTeam() {
    try {
      const playersByTeam = await playerStorage.getAllByGroupAndTeam(
        groupName,
        selectedGroup
      );
      setPlayers(playersByTeam);
    } catch (err) {
      Alert.alert("Fetch Members", "Can't fetch members.");
    }
  }

  function handleRemovePlayer(player: string) {}

  useEffect(() => {
    fetchPlayerByTeam();
  }, [selectedGroup]);

  return (
    <Container>
      <Header showBackButton />

      <HighLight title={groupName} subTitle="add members to separate teams" />
      <Form>
        <Input
          placeholder="Member name"
          autoCorrect={false}
          onChangeText={setPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
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
