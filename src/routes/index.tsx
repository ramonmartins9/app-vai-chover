import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainStackNavigator from "./MainStackNavigator";

const App: React.FC = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
);

export default App;
