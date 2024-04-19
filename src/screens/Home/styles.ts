import styled from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${(props) => props.theme.COLORS.DARK_BLUE};
`;

export const Content = styled.View`
    flex: 1;
    margin-top: 20px;
    width: 100%;
    
    padding: 0 16px 24px;
`;

export const HomeTitle = styled.Text`
    text-align: center;
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: 60px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const Subtitle = styled.Text`
    text-align: center;
    
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-top: 10px;
`;

export const ButtonContainer = styled.View`
    margin-top: 32px;
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
