import React from "react";
import { Box } from "native-base";
import { IPlace } from "~/requets/Place";
import { TouchableOpacity } from "react-native";
import { TitleFlag } from "..";

interface IProps {
	place?: IPlace;
	onSelected?: () => void;
}

export const PlaceCard: React.FC<IProps> = (props) => {
	const { place, onSelected } = props;
	const hasPlace = !!place && place.components.country && place.components.city;

	return (
		<TouchableOpacity onPress={onSelected} >
			<Box
				rounded="lg"
				p={2}
				my={4}
				bg="coolGray.300"
				shadow={2}
				display={!hasPlace ? "none" : "flex"}
			>
				{place && (
					<TitleFlag country={place.components.country_code} title={place.components.city}/>
				)}
			</Box>
		</TouchableOpacity>
	);
};
