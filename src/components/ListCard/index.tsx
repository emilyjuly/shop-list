import {CardDate, CardIcon, CardTitle, Container} from "./styles";
import {TouchableOpacityProps} from "react-native";
import {ListItem} from "../../screens/MyLists";

type ListCardProps = TouchableOpacityProps & {
    listData: ListItem
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