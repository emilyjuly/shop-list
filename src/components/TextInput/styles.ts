import styled from "styled-components/native";
import {TextInput} from "react-native";

export const InputContainer = styled(TextInput)`
    min-height: 50px;
    max-height: 50px;
    
    width: 100%;
    
    border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_600}`};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    
    padding: 12px 8px;
    
    border-radius: 4px;
`;