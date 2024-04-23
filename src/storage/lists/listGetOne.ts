import {listGetAll} from "./listGetAll";
import {ListItemType} from "../../@types/types";

export async function listGetOne(id: string): Promise<ListItemType | []> {
    try {
        const storedLists: ListItemType[] = await listGetAll();

        const list: ListItemType[] = storedLists.filter((item: ListItemType): boolean => item.id === id)
        return list[0] ? list[0] : []
    } catch (e) {
        throw e;
    }
}