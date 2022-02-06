import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";

import HomeScreen from "../../screens/HomeScreen";
import CityScreen from "../../screens/CityScreen";
import SearchScreen from "../../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="HomeScreen" component={HomeScreen} />
		<Stack.Screen name="SearchScreen" component={SearchScreen} />
		<Stack.Screen name="CityScreen" component={CityScreen} />
	</Stack.Navigator>
);

export default observer(MainStackNavigator);
