import AsyncStorage from '@react-native-async-storage/async-storage';

import {LIST_COLLECTION} from '../storageConfig';
import {listGetAll} from "../lists/listGetAll";
import {ItemType, ListItemType} from "../../@types/types";

export async function itemDeleteByList(itemIdToDelete: string, listId: string): Promise<void> {
    try {
        const storedLists: ListItemType[] = await listGetAll();

        const filteredList: ListItemType[] = storedLists.filter((list: ListItemType): boolean => list.id === listId);

        filteredList[0].items = filteredList[0].items.filter((item: ItemType): boolean => item.id !== itemIdToDelete);

        const newStorage: string = JSON.stringify([...storedLists]);

        await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    } catch (error) {
        throw error;
    }
}