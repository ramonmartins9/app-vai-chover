import React from "react";
import { VStack, Text, Box, HStack, Image } from "native-base";
import { IWeather } from "~/requets/Weather";
import strings from "../../resources/strings";

interface IProps {
	weather?: IWeather;
	dt: number;
}

export const CityCard: React.FC<IProps> = (props) => {
	const { weather, dt } = props;
	const weatherStrings = strings.component.weather;

	return (
		<Box
			rounded="lg"
			p={2}
			my={4}
			bg="coolGray.300"
			shadow={2}
		>
			{weather && (
				<Box mt={3} justifyContent="flex-start">
					<Text color="secondary.500" fontSize="2xl">
						{strings.component.weather.convertUnixTime(dt)}
					</Text>
					<VStack>
						<HStack alignItems="center" space={2} >
							<Text color="secondary.500" fontWeight="bold" fontSize="md">
								{weather.description.toUpperCase()}
							</Text>
							<Image w={10} h={10} alt="weather" source={{ uri: weatherStrings.icon(weather.icon) }} />
						</HStack>
					</VStack>
				</Box>
			)}
		</Box>
	);
};
