export interface IScreenRoute<ParamType> {
	route: string;
	param: ParamType;
}

export default class ScreenRoute<ParamType = Record<string, never>> {
	private readonly screenName: string;

	constructor(screenName: string) {
		this.screenName = screenName;
	}

	public getRoute(parameter: ParamType): IScreenRoute<ParamType> {
		return {
			route: this.screenName,
			param: JSON.parse(JSON.stringify(parameter)),
		};
	}

	public getRouteWithCallback(parameter: ParamType): IScreenRoute<ParamType> {
		return {
			route: this.screenName,
			param: parameter,
		};
	}

	public getScreenName(): string {
		return this.screenName;
	}
}
