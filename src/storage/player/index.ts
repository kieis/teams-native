import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/config";
import { AppError } from "@utils/AppError";
import { PlayerDTO } from "./PlayerDTO";

export async function getAllByGroup(group: string): Promise<PlayerDTO[]> {
  try {
    const collection = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${group}`
    );
    return collection ? JSON.parse(collection) : [];
  } catch (err) {
    throw err;
  }
}

export async function getAllByGroupAndTeam(
  group: string,
  team: string
): Promise<PlayerDTO[]> {
  try {
    const collection = await getAllByGroup(group);
    const players = collection.filter((player) => player.team === team);
    return players;
  } catch (err) {
    throw err;
  }
}

export async function createByGroup(player: PlayerDTO, group: string) {
  try {
    const collection = await getAllByGroup(group);
    const alreadyExist = collection.filter(
      (playerCollection) => playerCollection.name === player.name
    );

    if (alreadyExist.length > 0) {
      throw new AppError(`Item(${player}) already exists in the collection.`);
    }

    collection.push(player);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(collection)
    );
  } catch (err) {
    throw err;
  }
}
