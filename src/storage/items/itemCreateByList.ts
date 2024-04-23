import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLECTION } from "../storageConfig";
import {listGetAll} from "../lists/listGetAll";
import {AppError} from "../../util/AppError";
import {ItemType, ListItemType} from "../../@types/types";

export async function itemCreateByList(listId: string, newItem: ItemType): Promise<void> {
    try {
        const storedLists: ListItemType[] = await listGetAll();

        const selectedList: ListItemType | undefined = storedLists.find((item: ListItemType): boolean => item.id === listId);

        if (!selectedList) {
            throw new AppError("Lista não encontrada.");
        }

        selectedList.items.push(newItem);

        const newStorage: string = JSON.stringify(storedLists);
        await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    } catch (e) {
        throw e;
    }
}