import styled from "styled-components/native";

export type ButtonVariant = 'PRIMARY' | 'DANGER';

type ButtonStylesProps = {
    variant: ButtonVariant;
}

export const Container = styled.TouchableOpacity<ButtonStylesProps>`
    max-height: 55px;
    min-height: 55px;
    
    width: 100%;
    
    border-radius: 8px;
    
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.LIGHT_GREEN : theme.COLORS.RED};
    
    margin-top: auto;
`;

export const BtnText = styled.Text<ButtonStylesProps>`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme, variant }) => variant === 'DANGER' ? theme.COLORS.WHITE : theme.COLORS.DARK_BLUE};
`;