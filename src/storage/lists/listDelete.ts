import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLETION } from "../storageConfig";
import {ListItem} from "../../screens/MyLists";
import {listGetAll} from "./listGetAll";

export async function listDelete(id: string): Promise<void> {
    try {
        const storedLists: string[] = await listGetAll();

        const newLists = storedLists.filter((item: ListItem) => item.id !== id);

        if (newLists.length > 0) {
            const newStorage: string = JSON.stringify(newLists);
            await AsyncStorage.clear()
            await AsyncStorage.setItem(LIST_COLLETION, newStorage);
        } else {
            const newStorage: string = JSON.stringify([]);
            await AsyncStorage.clear()
            await AsyncStorage.setItem(LIST_COLLETION, newStorage);
        }

    } catch (e) {
        throw e;
    }
}