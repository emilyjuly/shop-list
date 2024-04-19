import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {CaretLeft} from "phosphor-react-native";

export const Container = styled.View`
    justify-content: center;
    
    height: 100px;
    width: 100%;
`;
export const PageTitle = styled.Text`
    text-align: center;
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    letter-spacing: 1px;
`;

export const GoBackBtn = styled(TouchableOpacity)`
    padding: 8px;    
    justify-content: flex-start;
    width: 10%;
`;

export const GoBackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    weight: 'bold',
    size: theme.FONT_SIZE.XL,
}))``;