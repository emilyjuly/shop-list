import {Container, Subtitle, Content, ButtonContainer, AddListIcon, NoListContainer} from "./styles";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {ListCard} from "../../components/ListCard";
import {useCallback, useState} from "react";
import {FlatList} from "react-native";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {listGetAll} from "../../storage/lists/listGetAll";

export type ListItem = {
    id: string,
    title: string,
    createdAt: string,
};

export function MyLists() {
    const [list, setList] = useState<ListItem[]>([]);

    const navigation = useNavigation();

    async function fecthLists(): Promise<void> {
        try {
            const data: ListItem[] = await listGetAll();
            setList(data);
        } catch (e) {
            console.log(e);
        }
    }

    useFocusEffect(useCallback(() => {
        fecthLists()
    }, []));

    return (
        <Container>
            <Header title={'Minhas listas'} isShowGoBackBtn screen={'home'} />

            <Content>
                {list.length > 0 ?
                    <FlatList
                        data={list}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (<ListCard listData={item} onPress={() => navigation.navigate('list', {itemData: item})}/>)}
                        contentContainerStyle={{gap: 12, paddingBottom: 100}}/>
                    :
                    <NoListContainer>
                        <AddListIcon />
                        <Subtitle>Você ainda não possui listas</Subtitle>
                    </NoListContainer>
                }

                <ButtonContainer>
                    <Button text={"criar lista"} onPress={() => navigation.navigate('newList')} />
                </ButtonContainer>
            </Content>

        </Container>
    )
}


