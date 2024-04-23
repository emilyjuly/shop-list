import styled from "styled-components/native";

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