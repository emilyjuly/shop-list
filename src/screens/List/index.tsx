import {
    Container,
    ContainerInput,
    Content,
    ListContent,
    ListTextGray,
    ListTextWhite,
} from "./styles";
import {Header} from "../../components/Header";
import {useNavigation, useRoute} from "@react-navigation/native";
import {TextInput} from "../../components/TextInput";
import {ButtonAdd} from "../../components/ButtonAdd";
import {Button} from "../../components/Button";
import {AppError} from "../../util/AppError";
import {Alert, FlatList} from "react-native";
import {listDelete} from "../../storage/lists/listDelete";
import {itemCreateByList} from "../../storage/items/itemCreateByList";
import React, {useEffect, useState} from "react";
import {listGetOne} from "../../storage/lists/listGetOne";
import {ListItem} from "../../components/ListItem";
import {itemCheckByList} from "../../storage/items/itemCheckByList";
import {itemDeleteByList} from "../../storage/items/itemDeleteByList";
import uuid from "react-native-uuid";
import {ItemType, ListItemType} from "../../@types/types";
import {Empty} from "../../components/Empty";
import {Subtitle, Title} from "../../styles/globalStyles";

export function List() {
    const route = useRoute();
    const itemData = route.params?.itemData || {};
    const navigation = useNavigation();
    const [textInput, setTextInput] = useState('');
    const [listDetails, setListDetails] = useState<ListItemType | []>(null);


    useEffect((): void => {
        const fetchListDetails = async (): Promise<void> => {
            try {
                const details: ListItemType | [] = await listGetOne(itemData.id);
                setListDetails(details);
            } catch (error) {
                console.error('Error fetching list details:', error);
            }
        };

        fetchListDetails();

    }, [itemData.id]);

    async function handleDeleteList(): Promise<void> {
        try {
            await listDelete(itemData.id);
            navigation.navigate('myLists');
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro na exclusão de lista', error.message);
            }
            console.log(error);
        }
    }

    async function handleAddItem(): Promise<void> {
        try {
            const newId: string = uuid.v4() as string;

            const newItem: ItemType = {
                id: newId,
                name: textInput,
                isMarked: false,
            }
            await itemCreateByList(itemData.id, newItem);
            const updatedListDetails: ListItemType | [] = await listGetOne(itemData.id);
            setListDetails(updatedListDetails);
        } catch (error) {

        }

        setTextInput('')
    }

    async function handleCheckItem(itemIdToCheck: string, listId: string): Promise<void> {
        try {
            await itemCheckByList(itemIdToCheck, listId);
            const updatedListDetails: ListItemType | [] = await listGetOne(itemData.id);
            setListDetails(updatedListDetails);
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Marcar um item', error.message);
            } else {
                console.log(error);
            }
        }
    }

    async function handleDeleteItem(itemIdToDelete: string, listId: string): Promise<void> {
        try {
            await itemDeleteByList(itemIdToDelete, listId);
            const updatedListDetails: ListItemType | [] = await listGetOne(itemData.id);
            setListDetails(updatedListDetails);
        } catch (error) {
            if (error instanceof AppError) {
                return Alert.alert('Deletar item', error.message);
            }
            console.log(error);
        }
    }

    return (
        <Container>
            <Header title={'Lista'} isShowGoBackBtn/>
            <Content>
                {listDetails && (
                    <>
                        <Title>{listDetails.title}</Title>
                        <Subtitle>Adicione itens a lista de compras</Subtitle>
                        <ContainerInput>
                            <TextInput
                                placeholder={'Adicione um novo item'}
                                onChangeText={setTextInput}
                                value={textInput}
                            />
                            <ButtonAdd showAddIcon={true} onPress={handleAddItem}/>
                        </ContainerInput>
                        <ListContent>
                            <ListTextWhite>Compras</ListTextWhite>
                            <ListTextGray>{`Itens: ${listDetails.items.length}`}</ListTextGray>
                        </ListContent>
                        {
                            listDetails.items.length > 0
                                ?
                                <FlatList
                                    data={listDetails.items.sort()}
                                    renderItem={({item}) => (
                                        <ListItem
                                            itemData={item}
                                            onDelete={() => handleDeleteItem(item.id, itemData.id)}
                                            onCheck={() => handleCheckItem(item.id, itemData.id)}
                                        />
                                    )}/>
                                :
                                <Empty text={'Você ainda não itens na sua lista'}/>
                        }

                    </>
                )}
            </Content>
            <Button variant={'DANGER'} text={'apagar lista'} onPress={() => handleDeleteList()}/>
        </Container>
    )
}