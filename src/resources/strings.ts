import LocalizedStrings from "localized-strings";

const strings = new LocalizedStrings({
	ptBR: {
		component: {
			inputSearch: {
				search: "Buscar",
			},
			weather: {
				icon: (iconName?: string) => `http://openweathermap.org/img/wn/${iconName}@2x.png`,
				averageTemp: (min?: number, max?: number) => `min ${min}° - max ${max}°`,
			},
		},
		screens: {
			home: {
				added: "Adicionar",
			},
		},
	},
});

export default strings;
