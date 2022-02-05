import { makeAutoObservable } from "mobx";
import Weather, { ICurrentWeather } from "../../requets/AllWeathers";
import { treatErrorMessage } from "../../resources/treatError";

export default class Store {
	public loading = false;
	public homeData: [] | null = null;
	public currentWeather: ICurrentWeather | null = null;
	public weather = new Weather();

	constructor() {
		makeAutoObservable(this);
	}

	public getCurrentWeather = async () => {
		this.loading = true;
		try {
			this.currentWeather = await this.weather.getCurrentWeather(35, 25);
			console.log(this.currentWeather);
		} catch (e) {
			console.log(treatErrorMessage(e));
		} finally {
			this.loading = false;
		}
	};
}
