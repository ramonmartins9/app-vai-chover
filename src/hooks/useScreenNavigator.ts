import { StackActions, useNavigation } from "@react-navigation/native";

import { IScreenRoute } from "../resources/ScreenRoute";

const useScreenNavigator = () => {
	const navigation = useNavigation();

	const push = <T>(route: IScreenRoute<T>) => {
		navigation.dispatch(StackActions.push(route.route, route.param || {}));
	};

	const replace = <T>(route: IScreenRoute<T>) => {
		navigation.dispatch(StackActions.replace(route.route, route.param || {}));
	};

	const popToTop = () => {
		navigation.dispatch(StackActions.popToTop());
	};

	const goBack = () => navigation.goBack();

	return {
		push,
		replace,
		popToTop,
		goBack,
	};
};

export default useScreenNavigator;
