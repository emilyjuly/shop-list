import AsyncStorage from '@react-native-async-storage/async-storage';

import {LIST_COLLECTION} from '../storageConfig';
import {listGetAll} from "../lists/listGetAll";
import {ItemType, ListItemType} from "../../@types/types";

export async function itemCheckByList(itemIdToCheck: string, listId: string): Promise<void> {
    try {
        let storedLists: ListItemType[] = await listGetAll();

        const selectedListIndex: number = storedLists.findIndex((list: ListItemType): boolean => list.id === listId);

        if (selectedListIndex === -1) {
            throw new Error('Lista não encontrada');
        }

        const selectedList: ListItemType = storedLists[selectedListIndex];

        const updatedItems: ItemType[] = selectedList.items.map((item: ItemType) =>
            item.id === itemIdToCheck ? { ...item, isMarked: !item.isMarked } : item);

        storedLists[selectedListIndex] = {...selectedList, items: updatedItems};

        const newStorage: string = JSON.stringify(storedLists);
        await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    } catch (error) {
        throw error;
    }
}
