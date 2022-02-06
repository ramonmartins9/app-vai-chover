import React from "react";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { Loader, WeatherCard } from "../../components";
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

	const goToSearchScreen = () => (
		navigator.push(routes.screens.searchScreen.getRoute({}))
	);

	const goToCityScreen = (lat?: number, lng?: number) => (
		navigator.push(routes.screens.cityScreen.getRoute({ lat, lng }))
	);

	return (
		<ScreenNavbarContainer>
			<Loader isLoading={store.loading}>
				{store.currentWeather && (
					<WeatherCard
						currentWeather={store.currentWeather}
						onSelected={() => goToCityScreen(store.currentWeather?.coord.lat, store.currentWeather?.coord.lon)}
					/>
				)}
				<Button mt={8} colorScheme="secondary" onPress={goToSearchScreen}>
					<Text color="primary.500">
						{strings.screens.home.added}
					</Text>
				</Button>
			</Loader>
		</ScreenNavbarContainer>
	);
};

export default observer(HomeScreen);
