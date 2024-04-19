import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ListPlus} from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    
    background-color: ${(props) => props.theme.COLORS.DARK_BLUE};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    
    padding: 0 16px 24px;
`;

export const Subtitle = styled.Text`
    text-align: center;
    
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
    margin-top: 32px;
`;

export const AddListIcon = styled(ListPlus).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    weight: 'regular',
    size: 80,
}))``;

export const NoListContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

