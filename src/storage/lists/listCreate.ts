import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLETION } from "../storageConfig";
import {ListItem} from "../../screens/MyLists";
import {listGetAll} from "./listGetAll";
import {AppError} from "../../util/AppError";

export async function listCreate(newList: ListItem): Promise<void> {
    try {
        const storedLists: string[] = await listGetAll();

        const isListNameAlreadyUsed = storedLists.map((item: ListItem) => item.title).includes(newList.title);

        if (isListNameAlreadyUsed) {
            throw new AppError(
                'Já existe uma lista com esse nome. Por favor, tente outro.'
            );
        }

        if (newList.title === '') {
            throw new AppError(
                'Por favor, informe o nome da lista.'
            );
        }

        const newStorage: string = JSON.stringify([...storedLists, newList]);
        await AsyncStorage.setItem(LIST_COLLETION, newStorage);

    } catch (e) {
        throw e;
    }
}