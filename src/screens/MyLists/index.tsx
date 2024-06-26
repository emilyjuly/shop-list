import {Container, Content, ButtonContainer} from "./styles";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {ListCard} from "../../components/ListCard";
import {useCallback, useState} from "react";
import {FlatList} from "react-native";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {listGetAll} from "../../storage/lists/listGetAll";
import {Empty} from "../../components/Empty";
import {ListItemType} from "../../@types/types";

export function MyLists() {
    const [list, setList] = useState<ListItemType[]>([]);

    const navigation = useNavigation();

    async function fecthLists(): Promise<void> {
        try {
            const data: ListItemType[] = await listGetAll();
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
                {list.length > 0
                    ?
                    <FlatList
                        data={list}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <ListCard listData={item} onPress={() => navigation.navigate('list', {itemData: item})}/>
                        )}
                        contentContainerStyle={{gap: 12, paddingBottom: 100}}/>
                    :
                    <Empty text={'Você ainda não possui listas'}/>
                }

                <ButtonContainer>
                    <Button text={"criar lista"} onPress={() => navigation.navigate('newList')} />
                </ButtonContainer>
            </Content>

        </Container>
    )
}


