import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ListDashes} from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    
    background-color: ${(props) => props.theme.COLORS.DARK_BLUE};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin-top: 50px;
    
    padding: 0 16px 24px;
`;

export const Title = styled.Text`
    text-align: center;
    
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
    text-align: center;
    
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonContainer = styled.View`
    width: 100%;
`;

export const ListIcon = styled(ListDashes).attrs(({ theme }) => ({
    color: theme.COLORS.LIGHT_GREEN,
    weight: 'regular',
    size: 80,
}))``;