import styled from "styled-components/native";
import {Plus} from "phosphor-react-native";


export const Container = styled.TouchableOpacity`
    max-height: 50px;
    min-height: 50px;
    width: 100%;
    
    border-radius: 8px;
    
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    
    margin-top: auto;
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
    color: theme.COLORS.DARK_BLUE,
    weight: 'bold',
    size: theme.FONT_SIZE.XL,
}))``