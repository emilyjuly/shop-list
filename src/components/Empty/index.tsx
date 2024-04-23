import React from "react";
import {Container} from "./styles";
import {Subtitle} from "../../styles/globalStyles"
import {Image} from "react-native";

type EmptyProps = {
    text: string,
}

export function Empty({text}: EmptyProps) {

    return (
        <Container>
            <Image
                source={require('../../assets/empty-image.png')}
                style={{width: 200, height: 200}}
                resizeMode="contain"
            />
            <Subtitle>{text}</Subtitle>
        </Container>
    )
}