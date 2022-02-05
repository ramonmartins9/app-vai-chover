import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "react-native-dotenv";

export interface IWeather {
	main: string;
	description: string;
}

export interface ICurrentWeather {
	weather: IWeather[];
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
}

export default class Weather {

	constructor() {
		makeAutoObservable(this);
	}

	public getCurrentWeather = async (lat: number, lon: number): Promise<ICurrentWeather> => {

		const response = await axios.get<ICurrentWeather>("http://api.openweathermap.org/data/2.5/weather", {
			params: {
				lat,
				lon,
				appid: API_URL,
				lang: "pt",
				units: "metric",
			},
		});

		return response.data;
	};
}
