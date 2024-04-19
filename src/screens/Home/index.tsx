import {Container, Content, HomeTitle, ImageContainer, Subtitle} from "./styles";
import {Image, Dimensions} from "react-native";
import {Button} from "../../components/Button";
import {ButtonContainer} from "./styles";
import {useNavigation} from "@react-navigation/native";

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

export function Home() {
    const navigation = useNavigation();

    return (
        <Container>
            <Content>
                <HomeTitle>Shop list</HomeTitle>
                <Subtitle>Faça a sua lista de compras!</Subtitle>
                <ButtonContainer style={{gap: 10}}>
                    <Button text={"ver listas"} onPress={() => navigation.navigate('myLists')} />
                    <Button text={"criar lista"} onPress={() => navigation.navigate('newList')} />
                </ButtonContainer>
                <ImageContainer>
                    <Image
                        source={require('../../assets/home-image.png')}
                        style={{ width: windowWidth, height: windowHeight }}
                        resizeMode="contain"
                    />
                </ImageContainer>
            </Content>
        </Container>
    )
}