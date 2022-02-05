import React from "react";
import { Text } from "native-base";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import strings from "../../resources/strings";
import { InputSearch, WeatherCard } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import Store from "./store";


const HomeScreen: React.FC = () => {

	const home = strings.screens.home;
	const store = useLocalObservable(() => new Store());

	React.useEffect(() => {
		store.getCurrentWeather();
	}, []);

	return (
		<ScreenNavbarContainer>
			<InputSearch />
			<WeatherCard />
			<Text>{home.title}</Text>
		</ScreenNavbarContainer>
	);
};

export default observer(HomeScreen);
