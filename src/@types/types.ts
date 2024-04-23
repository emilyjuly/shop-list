export type ListItemType = {
    id: string,
    title: string,
    createdAt: string,
    items: ItemType[]
};

export type ItemType = {
    id: string,
    name: string,
    isMarked: boolean,
}