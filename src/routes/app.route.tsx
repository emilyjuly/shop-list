import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {MyLists} from "../screens/MyLists";
import {List} from "../screens/List";
import {NewList} from "../screens/NewList";
import {Home} from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName={"home"}>
            <Screen name={"home"} component={Home} />
            <Screen name={"myLists"} component={MyLists} />
            <Screen name={"list"} component={List} />
            <Screen name={"newList"} component={NewList} />
        </Navigator>
    );
}