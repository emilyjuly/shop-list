import styled from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    
    background-color: ${(props) => props.theme.COLORS.DARK_BLUE};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 20px;
    
    padding: 0 16px 24px;
`;

export const Title = styled.Text`
    text-align: center;
    
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
    text-align: center;
    
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 30px;
`;

export const ContainerInput = styled.View`
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
`;