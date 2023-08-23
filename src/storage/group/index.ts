import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/config";
import { AppError } from "@utils/AppError";

export async function getAll(): Promise<string[]> {
  try {
    const collection = await AsyncStorage.getItem(GROUP_COLLECTION);
    return collection ? JSON.parse(collection) : [];
  } catch (err) {
    throw err;
  }
}

export async function create(name: string) {
  try {
    const collection = await getAll();
    const alreadyExist = collection.includes(name);

    if (alreadyExist) {
      throw new AppError(`Item(${name}) already exists in the collection.`);
    }

    collection.push(name);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(collection));
  } catch (err) {
    throw err;
  }
}

export async function remove(name: string) {
  try {
    const collection = await getAll();
    const filtered = collection.filter((group) => group !== name);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filtered));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${name}`);
  } catch (err) {
    throw err;
  }
}
