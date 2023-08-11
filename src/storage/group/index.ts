import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/config";

export async function getAll(): Promise<string[]> {
  const collection = await AsyncStorage.getItem(GROUP_COLLECTION);
  return collection ? JSON.parse(collection) : [];
}

export async function create(name: string) {
  try {
    const collection = await getAll();
    collection.push(name);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(collection));
  } catch (err) {
    throw err;
  }
}
