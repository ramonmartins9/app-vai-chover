import React from "react";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { Loader, WeatherCard, EmptyList } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import Store from "./store";
import useScreenNavigator from "../../hooks/useScreenNavigator";
import routes from "../../resources/routes";
import { Button, Text } from "native-base";
import strings from "../../resources/strings";
import { useGlobalStore } from "../../contexts/globalContext";

export interface IHomeParams {
	lat?: number;
	lng?: number;
}

interface IProps extends ScreenDefaultProps<IHomeParams> { }

const HomeScreen: React.FC<IProps> = (props) => {

	const { route } = props;
	const navigator = useScreenNavigator();
	const store = useLocalObservable(() => new Store(() => onSetSelectedsCitys(), route.params?.lat, route.params?.lng));
	const globalStore = useGlobalStore();

	const { authStore } = globalStore;


	const goToSearchScreen = () => (
		navigator.push(routes.screens.searchScreen.getRoute({}))
	);

	const onSetSelectedsCitys = () => {
		if (store.currentWeather) {
			authStore.pushSelectCity(store.currentWeather);
		}
	};

	const goToCityScreen = (lat?: number, lng?: number) => (
		navigator.push(routes.screens.cityScreen.getRoute({ lat, lng }))
	);

	React.useEffect(() => {
		authStore.getData();
	}, []);

	return (
		<ScreenNavbarContainer
			screenContainer={{
				scrollable: true,
			}}
		>
			<Loader isLoading={authStore.mainLoading}>
				{authStore.selectedCitys.length > 0 ? (
					authStore.selectedCitys.map((city) => (
						<WeatherCard
							key={city.coord.lat}
							currentWeather={city}
							onSelected={() => goToCityScreen(city.coord.lat, city.coord.lon)}
						/>
					))
				) : (
					<EmptyList text={strings.component.emptyList.home} />
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
