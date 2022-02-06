import ScreenRoute from "./ScreenRoute";

import { IHomeParams } from "../screens/HomeScreen";
import { ICityParams } from "../screens/CityScreen";

const routes = {
	screens: {
		searchScreen: new ScreenRoute("SearchScreen"),
		homeScreen: new ScreenRoute<IHomeParams>("HomeScreen"),
		cityScreen: new ScreenRoute<ICityParams>("CityScreen"),
	},
};

export default routes;
