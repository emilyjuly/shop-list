import {StatusBar} from "expo-status-bar";
import {ThemeProvider} from "styled-components";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import theme from "./src/styles/theme/defaultTheme";
import {Routes} from "./src/routes";
import {Text} from "react-native";

export default function App() {
    const [fontLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
    });
    return (
        <ThemeProvider theme={theme}>
            <StatusBar style="light"/>
            {fontLoaded ? (
                <Routes/>
            ) : (
                <Text>Não foi possível carregar o conteúdo.</Text>
            )}
        </ThemeProvider>
    );
}
