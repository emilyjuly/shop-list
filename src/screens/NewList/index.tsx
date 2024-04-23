import {ButtonContainer, Container, Content, ListIcon} from "./styles";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {TextInput} from "../../components/TextInput";
import {useState} from "react";
import uuid from 'react-native-uuid';
import {listCreate} from "../../storage/lists/listCreate";
import {useNavigation} from "@react-navigation/native";
import {AppError} from "../../util/AppError";
import {Alert} from "react-native";
import {ListItemType} from "../../@types/types";
import {Subtitle, Title} from "../../styles/globalStyles";

export function NewList() {
    const [textInput, setTextInput] = useState<string>('');
    const navigation = useNavigation();

    async function handleCreateList(listName: string): Promise<void> {
        const newId: string = uuid.v4() as string;
        const newDate: Date = new Date() as Date;

        const newList: ListItemType = {
            id: newId,
            title: listName,
            createdAt: newDate.toLocaleDateString(),
            items: []
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