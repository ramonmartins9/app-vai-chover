export interface IError {
	message: string;
}

export const treatErrorMessage = (errorMessage: any): string => {
	if (errorMessage && typeof errorMessage === "object") {
		return JSON.stringify(errorMessage);
	}

	if (errorMessage && typeof errorMessage === "string") {
		return errorMessage;
	}

	return `${JSON.stringify(errorMessage)}`;
};
