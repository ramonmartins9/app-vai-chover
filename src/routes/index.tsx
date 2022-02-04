import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainStackNavigator from "./MainStackNavigator";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";

const App: React.FC = () => (
	<SafeAreaProvider>
		<NativeBaseProvider theme={theme}>
			<NavigationContainer>
				<MainStackNavigator />
			</NavigationContainer>
		</NativeBaseProvider>
	</SafeAreaProvider>
);

export default App;
