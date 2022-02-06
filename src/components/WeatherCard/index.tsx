import React from "react";
import { VStack, Text, Box, HStack, Image } from "native-base";
import { ICurrentWeather } from "~/requets/Weather";
import strings from "../../resources/strings";
import { TouchableOpacity } from "react-native";
import { TitleFlag } from "..";


interface IProps {
	currentWeather?: ICurrentWeather;
	onSelected?: () => void;
}

export const WeatherCard: React.FC<IProps> = (props) => {
	const { onSelected, currentWeather } = props;
	const weather = strings.component.weather;

	return (
		<TouchableOpacity onPress={onSelected} >
			<Box
				rounded="lg"
				p={2}
				my={4}
				bg="coolGray.300"
				shadow={2}
			>
				{currentWeather && (
					<>
						<Box flexDirection="row" alignItems="center" justifyContent="space-between">
							<TitleFlag
								title={currentWeather.name.toUpperCase()}
								country={currentWeather.sys.country}
							/>
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
									<Image w={10} h={10} alt="weather" source={{ uri: weather.icon(currentWeather?.weather[0].icon) }} />
								</HStack>
								<Text fontSize="sm">
									{weather.averageTemp(currentWeather.main.temp_min, currentWeather.main.temp_max).toUpperCase()}
								</Text>
							</VStack>
						</Box>
					</>
				)}
			</Box>
		</TouchableOpacity>
	);
};
