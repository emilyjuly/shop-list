import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIST_COLLECTION } from '../storageConfig';
import { listGetAll } from './listGetAll';
import { AppError } from '../../util/AppError';
import {ListItemType} from "../../@types/types";

export async function listCreate(newList: ListItemType): Promise<void> {
    try {
        const storedLists: ListItemType[] = await listGetAll();

        const listAlreadyExists: boolean = storedLists
            .map((item: ListItemType) => item.title)
            .includes(newList.title);

        if (listAlreadyExists) {
            throw new AppError('Já existe uma lista com este nome.');
        }

        const newStorage: string = JSON.stringify([...storedLists, newList]);
        await AsyncStorage.setItem(LIST_COLLECTION, newStorage);
    } catch (error) {
        throw error;
    }
}