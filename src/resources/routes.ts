import ScreenRoute from "./ScreenRoute";

import { IHomeParams } from "../screens/HomeScreen";

const routes = {
	screens: {
		searchScreen: new ScreenRoute("SearchScreen"),
		homeScreen: new ScreenRoute<IHomeParams>("HomeScreen"),
		cityScreen: new ScreenRoute("CityScreen"),
	},
};

export default routes;
