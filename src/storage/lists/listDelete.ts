import AsyncStorage from '@react-native-async-storage/async-storage';

import { LIST_COLLECTION } from '../storageConfig';
import { listGetAll } from './listGetAll';
import {ListItemType} from "../../@types/types";

export async function listDelete(idToDelete: string): Promise<void> {
    try {
        const storedLists: ListItemType[] = await listGetAll();

        const filteredList: ListItemType[] = storedLists.filter(
            (item: ListItemType): boolean => item.id !== idToDelete
        );

        const newStorage: string = JSON.stringify(filteredList);

        await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    } catch (error) {
        throw error;
    }
}