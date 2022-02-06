import { makeAutoObservable, runInAction } from "mobx";
import Weather, { ICurrentWeather } from "../../requets/Weather";
import { treatErrorMessage } from "../../resources/treatError";

export default class Store {
	public loading = false;
	public currentWeather: ICurrentWeather | null = null;
	public weather = new Weather();

	constructor(lat?: number, lon?: number) {
		makeAutoObservable(this);
		this.getCurrentWeather(lat, lon);
	}

	public getCurrentWeather = async (lat?: number, lng?: number) => {
		runInAction(() => this.loading = true);
		try {
			const response = await this.weather.getCurrentWeather(lat, lng);
			runInAction(() => this.currentWeather = response);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			runInAction(() => this.loading = false);
		}
	};
}
