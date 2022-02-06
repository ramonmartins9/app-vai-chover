import { makeAutoObservable, runInAction } from "mobx";
import Weather, { ICurrentWeather, IWeather, IWeatherDay } from "../../requets/Weather";
import { treatErrorMessage } from "../../resources/treatError";

export default class Store {
	public weatherLoading = false;
	public weatherDailyLoading = false;
	public weatherDaily: IWeatherDay[] | [] = [];
	public fiveCurrentWeather: IWeather[] | [] = [];
	public currentWeather: ICurrentWeather | null = null;
	public weather = new Weather();

	constructor(lat?: number, lon?: number) {
		makeAutoObservable(this);
		this.getCurrentWeatherDaily(lat, lon);
		this.getCurrentWeather(lat, lon);
	}

	public getCurrentWeatherDaily = async (lat?: number, lng?: number) => {
		runInAction(() => this.weatherLoading = true);
		try {
			this.weatherDaily = await this.weather.getCurrentWeatherDaily(lat, lng);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			runInAction(() => this.weatherLoading = false);
		}
	};

	public getCurrentWeather = async (lat?: number, lng?: number) => {
		runInAction(() => this.weatherDailyLoading = true);
		try {
			this.currentWeather = await this.weather.getCurrentWeather(lat, lng);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			runInAction(() => this.weatherDailyLoading = false);
		}
	};
}
