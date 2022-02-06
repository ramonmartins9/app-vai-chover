import React from "react";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { WeatherCard } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import Store from "./store";
import useScreenNavigator from "../../hooks/useScreenNavigator";
import routes from "../../resources/routes";
import { Button, Text } from "native-base";
import strings from "../../resources/strings";

export interface IHomeParams {
	lat?: number;
	lng?: number;
}

interface IProps extends ScreenDefaultProps<IHomeParams> { }

const HomeScreen: React.FC<IProps> = (props) => {

	const { route } = props;
	const navigator = useScreenNavigator();
	const store = useLocalObservable(() => new Store(route.params?.lat, route.params?.lng));

	const goToSearcScreen = () => (
		navigator.push(routes.screens.searchScreen.getRoute({}))
	);

	return (
		<ScreenNavbarContainer>
			{store.currentWeather && (
				<WeatherCard currentWeather={store.currentWeather} />
			)}
			<Button mt={8} colorScheme="secondary" onPress={goToSearcScreen}>
				<Text color="primary.500">
					{strings.screens.home.added}
				</Text>
			</Button>
		</ScreenNavbarContainer>
	);
};

export default observer(HomeScreen);
