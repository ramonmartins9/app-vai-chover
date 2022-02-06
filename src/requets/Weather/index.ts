import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_WEATHER_URL } from "react-native-dotenv";

export interface IWeather {
	main: string;
	description: string;
	icon: string;
}

export interface ICoord {
	lon: number;
	lat: number;
}

export interface IMain {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	min: number;
	max: number;
	pressure: number;
	humidity: number;
}

export interface ICurrentWeather {
	daily: any;
	weather: IWeather[];
	main: IMain;
	coord: ICoord;
	sys: {
		country: string;
	};
	name: string;
}

export interface IWeatherDay {
	dt: number;
	weather: IWeather[];
	temp: IMain;
}

export default class Weather {

	constructor() {
		makeAutoObservable(this);
	}

	public getCurrentWeather = async (lat?: number, lon?: number): Promise<ICurrentWeather> => {

		const response = await axios.get<ICurrentWeather>("http://api.openweathermap.org/data/2.5/weather", {
			params: {
				lat,
				lon,
				appid: API_WEATHER_URL,
				lang: "pt",
				units: "metric",
			},
		});

		return response.data;
	};


	public getCurrentWeatherDaily = async (lat?: number, lon?: number): Promise<IWeatherDay[]> => {

		const response = await axios.get<ICurrentWeather>("https://api.openweathermap.org/data/2.5/onecall", {
			params: {
				lat,
				lon,
				appid: API_WEATHER_URL,
				lang: "pt",
			},
		});

		return response.data.daily;
	};
}
