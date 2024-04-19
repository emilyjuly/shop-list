import {AddIcon, Container} from "./styles";
import {TouchableOpacityProps} from "react-native";

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
    return (
        <Container
            {...rest}
        >
            <AddIcon />
        </Container>
    )
}