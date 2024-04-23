import { useState } from 'react';
import {
    Container,
    CheckboxButton,
    DeleteButton,
    DeleteIcon,
    Title,
} from './styles';
import {ItemType} from "../../@types/types";

type ListItemProps = {
    itemData: ItemType;
    onDelete: () => void;
    onCheck: () => void;
};

export function ListItem({ itemData, onCheck, onDelete }: ListItemProps) {
    const [isChecked, setChecked] = useState<boolean>(itemData.isMarked);

    return (
        <Container style={isChecked && { opacity: 0.4 }}>
            <CheckboxButton
                value={isChecked}
                onValueChange={(): void => {
                    setChecked((state: boolean) => !state);
                    onCheck();
                }}
            />
            <Title
                onPress={(): void => {
                    setChecked((state: boolean) => !state);
                    onCheck();
                }}
                style={isChecked && { textDecorationLine: 'line-through' }}
            >
                {itemData.name}
            </Title>
            <DeleteButton onPress={onDelete}>
                <DeleteIcon />
            </DeleteButton>
        </Container>
    );
}