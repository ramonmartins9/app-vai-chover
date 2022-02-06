import React from "react";
import { FlatList } from "native-base";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { InputSearch, WeatherCard } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import Store from "./store";


const CityScreen: React.FC = () => {

	const store = useLocalObservable(() => new Store());

	return (
		<ScreenNavbarContainer>
			<InputSearch />
			<FlatList
				data={store.allPlaces}
				keyExtractor={(item) => item.id}
				refreshing={store.loading}
				onEndReachedThreshold={0.4}
				showsVerticalScrollIndicator={false}
				renderItem={(item) => (
					<WeatherCard place={item.item} />
				)}
			/>
		</ScreenNavbarContainer>
	);
};

export default observer(CityScreen);
