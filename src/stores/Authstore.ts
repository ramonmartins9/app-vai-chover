import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { treatErrorMessage } from "../resources/treatError";

import { ICurrentWeather } from "../requets/Weather";

export default class Authstore {

	public selectedCitys: ICurrentWeather[] = [];
	public mainLoading = false;
	private CURRENT_USER_KEY = "vaichover-currentUser";

	constructor() {
		makeAutoObservable(this);
	}

	public pushSelectCity = async (weather: ICurrentWeather) => {
		this.selectedCitys.push(weather);
		this.setSelectedCity(this.selectedCitys);
	};

	public setSelectedCity = async (selectedCitys: ICurrentWeather[]) => {
		if (selectedCitys) {
			await this.saveSelectedCity(selectedCitys);
			runInAction(() => this.selectedCitys = selectedCitys);
		} else {
			await AsyncStorage.removeItem(this.CURRENT_USER_KEY);
		}
	};

	public saveSelectedCity = async (selectedCitys: ICurrentWeather[]) => {
		try {
			await AsyncStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(selectedCitys));
		} catch (e) {
			treatErrorMessage(e);
		}
	};

	public getData = async () => {
		runInAction(() => this.mainLoading = true);
		try {
			const selectedCitysString = await AsyncStorage.getItem(this.CURRENT_USER_KEY);

			const selecteds = selectedCitysString
				? JSON.parse(selectedCitysString)
				: null;

			this.setSelectedCity(selecteds);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			runInAction(() => this.mainLoading = false);
		}
	};
}

export const authstore = new Authstore();
