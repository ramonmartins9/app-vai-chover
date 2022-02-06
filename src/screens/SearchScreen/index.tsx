import React from "react";
import { Box, FlatList } from "native-base";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { InputSearch, WeatherCard, Loader } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import Store from "./store";
import useScreenNavigator from "../../hooks/useScreenNavigator";
import routes from "../../resources/routes";


const SearchScreen: React.FC = () => {

	const navigator = useScreenNavigator();
	const store = useLocalObservable(() => new Store());

	const goToHomeScreen = (lat: number, lng: number) => (
		navigator.push(routes.screens.homeScreen.getRoute({ lat, lng }))
	);


	return (
		<ScreenNavbarContainer >
			<Loader isLoading={store.loading}>
				<InputSearch
					onChangeText={store.onChangeText}
					value={store.search}
					onSearch={() => store.getAllPlaces(store.search)}
				/>
				<Box h="89%">
					<FlatList
						data={store.allPlaces}
						keyExtractor={(item) => item.id}
						renderItem={(item) => (
							<WeatherCard
								onSelected={() => goToHomeScreen(item.item.geometry.lat, item.item.geometry.lng)}
								place={item.item}
							/>
						)}
					/>
				</Box>
			</Loader>
		</ScreenNavbarContainer>
	);
};

export default observer(SearchScreen);
