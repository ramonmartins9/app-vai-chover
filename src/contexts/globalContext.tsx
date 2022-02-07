import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import Authstore from "../stores/Authstore";

interface IGlobalStore {
	authStore: Authstore;
}

const GlobalStoreContext = React.createContext<IGlobalStore | null>(null);

export const GlobalStoreProvider: React.FC = observer((props) => {
	const { children } = props;
	const authStore = useLocalObservable(() => new Authstore());

	return (
		<GlobalStoreContext.Provider value={{ authStore }}>
			{children}
		</GlobalStoreContext.Provider>
	);
});

export const useGlobalStore = () => {
	const store = React.useContext(GlobalStoreContext);
	if (!store) {
		throw new Error("Cannot Access Store outside it's context");
	}
	return store;
};
