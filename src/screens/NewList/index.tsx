import {ButtonContainer, Container, Content, ListIcon, Subtitle, Title} from "./styles";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {TextInput} from "../../components/TextInput";
import {useState} from "react";
import uuid from 'react-native-uuid';
import {ListItem} from "../MyLists";
import {listCreate} from "../../storage/lists/listCreate";
import {useNavigation} from "@react-navigation/native";
import {AppError} from "../../util/AppError";
import {Alert} from "react-native";

export function NewList() {
    const [textInput, setTextInput] = useState('');
    const navigation = useNavigation();

    async function handleCreateList(listName: string): Promise<void> {
        const newId = uuid.v4() as string;
        const newDate = new Date() as Date;

        const newList: ListItem = {
            id: newId,
            title: listName,
            createdAt: newDate.toLocaleDateString(),
        };

        setTextInput('');

        try {
            await listCreate(newList);
            navigation.navigate('myLists');
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro na criação de lista', error.message);

            }
            console.log(error);
        }

        setTextInput('');
    }

    return (
        <Container>
            <Header title={'Nova lista'} isShowGoBackBtn />

            <Content style={{ gap: 10 }}>
                <ListIcon />
                <Title>Nova Lista</Title>
                <Subtitle>Crie uma nova lista para adicionar items</Subtitle>

                <TextInput
                    placeholder={'Nome da sua lista'}
                    onChangeText={setTextInput}
                    value={textInput}
                />
                <ButtonContainer>
                    <Button text={'Criar'} onPress={() => handleCreateList(textInput)} />
                </ButtonContainer>
            </Content>
        </Container>
    )
}