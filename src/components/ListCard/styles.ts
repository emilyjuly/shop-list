import styled from "styled-components/native";
import {Basket} from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
    position: relative;
    min-height: 125px;
    max-height: 125px;
    
    width: 100%;
    border-radius: 12px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    padding: 16px 24px;
`;

export const CardTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const CardDate = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
`;

export const CardIcon = styled(Basket).attrs(({ theme }) => ({
    color: theme.COLORS.DARK_BLUE,
    weight: 'regular',
    size: theme.FONT_SIZE.XL,
}))`
    position: absolute;
    right: 24px;
    top: 20px;
`;