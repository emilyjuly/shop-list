import {CardDate, CardIcon, CardTitle, Container} from "./styles";
import {TouchableOpacityProps} from "react-native";
import {ListItemType} from "../../@types/types";

type ListCardProps = TouchableOpacityProps & {
    listData: ListItemType
};

export function ListCard({ listData, ...rest }: ListCardProps) {

    return (
        <Container {...rest}>
            <CardTitle>{ listData.title }</CardTitle>
            <CardDate>{`Criada em: ${listData.createdAt}`}</CardDate>
            <CardIcon />
        </Container>
    )
}