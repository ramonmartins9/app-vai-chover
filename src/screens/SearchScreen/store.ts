import { makeAutoObservable, runInAction } from "mobx";
import Place, { IPlace } from "../../requets/Place";
import { treatErrorMessage } from "../../resources/treatError";

export default class Store {
	public loading = false;
	public allPlaces: IPlace[] | [] = [];
	public place = new Place();
	public search = "";

	constructor() {
		makeAutoObservable(this);
		this.getAllPlaces("Salvador");
	}

	public onChangeText = (text: string) => {
		runInAction(() => this.search = text);
	};

	public getAllPlaces = async (name: string) => {
		runInAction(() => this.loading = true);
		try {
			const response = await this.place.getAllPlaces(name);
			runInAction(() => this.allPlaces = response);
		} catch (e) {
			treatErrorMessage(e);
		} finally {
			runInAction(() => this.loading = false);
		}
	};
}
