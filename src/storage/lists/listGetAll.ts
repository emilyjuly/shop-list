import AsyncStorage from "@react-native-async-storage/async-storage";

import {LIST_COLLECTION} from "../storageConfig";
import {ListItemType} from "../../@types/types";

export async function listGetAll(): Promise<ListItemType[]> {
    try {
        const storedLists: string | null = await AsyncStorage.getItem(LIST_COLLECTION);
        return storedLists ? JSON.parse(storedLists) : []
    } catch (e) {
        throw e;
    }
}