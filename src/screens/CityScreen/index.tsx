import React from "react";
import ScreenNavbarContainer from "../../layout/ScreenNavbarContainer";
import { Loader, CityCard } from "../../components";
import { observer, useLocalObservable } from "mobx-react-lite";
import useScreenNavigator from "../../hooks/useScreenNavigator";
import Store from "./store";

export interface ICityParams {
	lat?: number;
	lng?: number;
}

interface IProps extends ScreenDefaultProps<ICityParams> { }

const CityScreen: React.FC<IProps> = (props) => {

	const { route } = props;
	const navigator = useScreenNavigator();
	const store = useLocalObservable(() => new Store(route.params?.lat, route.params?.lng));

	const onBackPress = () => (
		navigator.goBack()
	);

	return (
		<ScreenNavbarContainer
			navbar={{
				onBackPress,
				title: store.currentWeather?.name,
			}}
			screenContainer={{
				scrollable: true,
			}}
		>
			<Loader isLoading={store.weatherDailyLoading}>
				{store.weatherDaily.map((daily, index) => (
					<CityCard
						key={index}
						weather={daily.weather[0]}
						dt={daily.dt}
					/>
				))}
			</Loader>
		</ScreenNavbarContainer>
	);
};

export default observer(CityScreen);
