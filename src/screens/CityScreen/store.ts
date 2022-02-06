import { makeAutoObservable } from "mobx";
import Place, { IPlace } from "../../requets/Place";
import { treatErrorMessage } from "../../resources/treatError";

export default class Store {
	public loading = false;
	public allPlaces: IPlace[] | [] = [];
	public place = new Place();
	public search = "";

	constructor() {
		makeAutoObservable(this);
		this.getAllPlaces();
	}

	public getAllPlaces = async () => {
		this.loading = true;
		try {
			this.allPlaces = await this.place.getAllPlaces(this.search);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			this.loading = false;
		}
	};
}
