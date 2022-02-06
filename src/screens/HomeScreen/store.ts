import { makeAutoObservable } from "mobx";
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
		this.loading = true;
		try {
			this.currentWeather = await this.weather.getCurrentWeather(lat, lng);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			this.loading = false;
		}
	};
}
