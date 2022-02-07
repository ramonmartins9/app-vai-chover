import { makeAutoObservable, runInAction } from "mobx";
import Weather, { ICurrentWeather } from "../../requets/Weather";
import { treatErrorMessage } from "../../resources/treatError";

export default class Store {
	public loading = false;
	public weather = new Weather();
	public currentWeather: ICurrentWeather | null = null;

	constructor(onSet: () => void, lat?: number, lon?: number) {
		makeAutoObservable(this);
		this.getCurrentWeather(onSet, lat, lon);
	}

	public getCurrentWeather = async (onSet: () => void, lat?: number, lng?: number) => {
		runInAction(() => this.loading = true);
		try {
			const response = await this.weather.getCurrentWeather(lat, lng);
			runInAction(() => this.currentWeather = response);
			onSet();
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			runInAction(() => this.loading = false);
		}
	};
}
