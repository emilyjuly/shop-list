import {Container, ContainerInput, Content, Subtitle, Title} from "./styles";
import {Header} from "../../components/Header";
import {useNavigation, useRoute} from "@react-navigation/native";
import {TextInput} from "../../components/TextInput";
import {ButtonAdd} from "../../components/ButtonAdd";
import {Button} from "../../components/Button";
import uuid from "react-native-uuid";
import {ListItem} from "../MyLists";
import {listCreate} from "../../storage/lists/listCreate";
import {AppError} from "../../util/AppError";
import {Alert} from "react-native";
import {listDelete} from "../../storage/lists/listDelete";

export function List() {
    const route = useRoute();
    const itemData = route.params?.itemData || {};
    const navigation = useNavigation()

    async function handleDeleteList(id: string): Promise<void> {
        try {
            await listDelete(id);
            navigation.navigate('myLists');
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro na exclusão de lista', error.message);
            }
            console.log(error);
        }
    }
    return (
        <Container>
            <Header title={'Lista'} isShowGoBackBtn />
            <Content>
                <Title>{itemData.title}</Title>
                <Subtitle>Adicione itens a lista de compras</Subtitle>

                <ContainerInput style={{gap: 10}}>
                    <TextInput placeholder={'Adicione um novo item'}/>
                    <ButtonAdd showAddIcon={true} />
                </ContainerInput>
            </Content>
            <Button variant={'DANGER'} text={'apagar lista'} onPress={() => handleDeleteList(itemData.id)} />
        </Container>
    )
}