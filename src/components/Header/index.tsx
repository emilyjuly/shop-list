import {Container, GoBackBtn, GoBackIcon, PageTitle} from "./styles";
import {useNavigation} from "@react-navigation/native";

type HeaderProps = {
    title: string;
    isShowGoBackBtn?: boolean;
    screen?: string;
};

export function Header({ title, isShowGoBackBtn = false, screen = 'myLists' }: HeaderProps) {
    const navigation = useNavigation();

    return (
        <Container>
            {isShowGoBackBtn &&
                <GoBackBtn onPress={() => navigation.navigate(screen)}>
                    <GoBackIcon />
                </GoBackBtn>
            }
            <PageTitle>{title}</PageTitle>
        </Container>
    )
}