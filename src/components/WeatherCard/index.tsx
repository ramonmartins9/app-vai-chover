import React from "react";
import { VStack, Text, Box, HStack, Image } from "native-base";
import { IPlace } from "~/requets/Place";
import { ICurrentWeather } from "~/requets/Weather";
import strings from "../../resources/strings";
import { TouchableOpacity } from "react-native";
import { flag } from "country-emoji";


interface IProps {
	place?: IPlace;
	currentWeather?: ICurrentWeather;
	onSelected?: () => void;
}

export const WeatherCard: React.FC<IProps> = (props) => {
	const { place, onSelected, currentWeather } = props;
	const weather = strings.component.weather;
	const hasPlace = !!place && place.components.country && place.components.city;

	return (
		<TouchableOpacity onPress={onSelected} >
			<Box
				rounded="lg"
				p={2}
				my={4}
				bg="coolGray.100"
				shadow={2}
				display={!hasPlace && !currentWeather? "none" : "flex"}
			>
				{currentWeather && (
					<>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<VStack color="primary.500">
								<Text fontWeight="bold" fontSize="3xl">
									{currentWeather.name.toUpperCase()}
								</Text>
								<Text fontSize="xl">
									{flag(currentWeather.sys.country)}
								</Text>
							</VStack>
							<Text color="secondary.500" fontSize="2xl" >
								{currentWeather.main.temp}°
							</Text>
						</Box>
						<Box flexDirection="row" mt={3} justifyContent="space-between">
							<VStack>
								<HStack alignItems="center" space={2} >
									<Text color="secondary.500" fontWeight="bold" fontSize="md">
										{currentWeather.weather[0].description.toUpperCase()}
									</Text>
									<Image w={10} h={10} source={{ uri: weather.icon(currentWeather?.weather[0].icon) }} />
								</HStack>
								<Text fontSize="sm">
									{weather.averageTemp(currentWeather.main.temp_min, currentWeather.main.temp_max).toUpperCase()}
								</Text>
							</VStack>
						</Box>
					</>
				)}
				{place && (
					<VStack color="primary.500">
						<Text fontWeight="bold" fontSize="3xl">
							{place.components.city}
						</Text>
						<Text fontSize="xl">
							{flag(place.components.country_code)}
						</Text>
					</VStack>
				)}
			</Box>
		</TouchableOpacity>
	);
};
