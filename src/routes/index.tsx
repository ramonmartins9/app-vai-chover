import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import MainStackNavigator from "./MainStackNavigator";
import { NativeBaseProvider } from "native-base";
import { GlobalStoreProvider } from "../contexts/globalContext";
import theme from "../theme";

LogBox.ignoreAllLogs();

const App: React.FC = () => (
	<SafeAreaProvider>
		<NativeBaseProvider theme={theme}>
			<GlobalStoreProvider>
				<NavigationContainer>
					<MainStackNavigator />
				</NavigationContainer>
			</GlobalStoreProvider>
		</NativeBaseProvider>
	</SafeAreaProvider>
);

export default App;
