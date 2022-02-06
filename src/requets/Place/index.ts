import { makeAutoObservable } from "mobx";
import opencage from "opencage-api-client";
import { API_PLACE_URL } from "react-native-dotenv";

export interface IGeometry {
	country: string;
	lat: number;
	lng: number;
}

export interface IPlace {
	components: {
		country: string;
		city: string;
		country_code: string;
	};
	flag: string;
	geometry: IGeometry;
}

export default class Place {

	constructor() {
		makeAutoObservable(this);
	}

	public getAllPlaces = async (name: string): Promise<IPlace[]> => {
		const response = await opencage.geocode({
			q: name,
			key: API_PLACE_URL,
			no_annotations: 1,
			language: "pt",
		});

		return response.results;
	};
}
