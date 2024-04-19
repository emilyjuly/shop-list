import {InputContainer} from "./styles";
import {TextInputProps} from "react-native";
import {useTheme} from "styled-components/native";

type InputProps = TextInputProps & {
    placeholder?: string;
}
export function TextInput({ placeholder, ...rest }: InputProps) {
    const { COLORS } = useTheme();

    return (
        <InputContainer
            placeholder={placeholder}
            placeholderTextColor={COLORS.GRAY_600}
            {...rest}
        />
    )
}