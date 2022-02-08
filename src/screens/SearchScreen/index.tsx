import React from "react";
import { Box, FlatList } from "native-base";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { InputSearch, PlaceCard, Loader, EmptyList } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import Store from "./store";
import useScreenNavigator from "../../hooks/useScreenNavigator";
import routes from "../../resources/routes";
import strings from "../../resources/strings";
import { Dimensions } from "react-native";


const SearchScreen: React.FC = () => {

	const navigator = useScreenNavigator();
	const store = useLocalObservable(() => new Store());

	const goToHomeScreen = (lat: number, lng: number) => (
		navigator.push(routes.screens.homeScreen.getRoute({ lat, lng }))
	);

	const onBackPress = () => (
		navigator.goBack()
	);
	const screenHeight = Dimensions.get("window").height;

	return (
		<ScreenNavbarContainer
			navbar={{
				onBackPress,
				title: strings.screens.search.title,
			}}
		>
			<Loader isLoading={store.loading}>
				<InputSearch
					onChangeText={store.onChangeText}
					value={store.search}
					onSearch={() => store.getAllPlaces(store.search)}
				/>
				<Box h={screenHeight - 180}>
					<FlatList
						data={store.allPlaces}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						renderItem={(item) => (
							<PlaceCard
								key={item.item}
								onSelected={() => goToHomeScreen(item.item.geometry.lat, item.item.geometry.lng)}
								place={item.item}
							/>
						)}
						ListEmptyComponent={<EmptyList text={strings.component.emptyList.search}/>}
					/>
				</Box>
			</Loader>
		</ScreenNavbarContainer>
	);
};

export default observer(SearchScreen);
