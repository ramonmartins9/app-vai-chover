import "moment/locale/pt-br";
import LocalizedStrings from "localized-strings";
import moment from "moment";

const strings = new LocalizedStrings({
	ptBR: {
		component: {
			inputSearch: {
				search: "Buscar",
			},
			weather: {
				icon: (iconName?: string) => `http://openweathermap.org/img/wn/${iconName}@2x.png`,
				averageTemp: (min?: number, max?: number) => `min ${min}° - max ${max}°`,
				convertUnixTime: (dt: number) =>  moment(new Date(dt * 1000)).format("dddd"),
			},
			emptyList: {
				home: "Não selecionou nenhuma cidade? Adicione agora!",
				city: "Algo deu errado!",
				search: "Sem nenhum registro de pesquisa!",
			},
		},
		screens: {
			home: {
				added: "Adicionar",
			},
			search: {
				title: "Buscar Cidades",
			},
		},
	},
});

export default strings;
