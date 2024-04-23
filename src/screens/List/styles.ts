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

export const ContainerInput = styled.View`
    justify-content: space-between;
    align-items: center;
    
    gap: 10px;
    margin-bottom: 10px;
    
    width: 100%;
`;

export const ListContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ListTextWhite = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ListTextGray = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;