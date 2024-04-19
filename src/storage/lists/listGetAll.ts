import AsyncStorage from "@react-native-async-storage/async-storage";

import {LIST_COLLETION} from "../storageConfig";

export async function listGetAll(): Promise<string[]> {
    try {
        const storedLists: string | null = await AsyncStorage.getItem(LIST_COLLETION);

        return storedLists ? JSON.parse(storedLists) : []
    } catch (e) {
        throw e;
    }
}