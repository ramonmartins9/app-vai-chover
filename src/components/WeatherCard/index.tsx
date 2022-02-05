import React from "react";
import { VStack, Text, Box } from "native-base";
import Logo from "../../assets/logo.svg";

interface IProps { }

export const WeatherCard: React.FC<IProps> = (props) => {
	// eslint-disable-next-line no-empty-pattern
	const { } = props;

	return (
		<Box
			rounded="lg"
			p={2}
			my={4}
			bg="coolGray.100"
			shadow={2}
		>
			<Box flexDirection="row" justifyContent="space-between">
				<VStack color="primary.500">
					<Text fontWeight="bold" fontSize="3xl">
						Salvador
					</Text>
					<Text fontSize="md">
						Brasil
					</Text>
				</VStack>
				<Text color="secondary.500" fontSize="2xl" >
					18°
				</Text>
			</Box>
			<Box flexDirection="row" mt={3} justifyContent="space-between">
				<VStack>
					<Text color="secondary.500" fontWeight="bold" fontSize="md">
						Ensolarado
					</Text>
					<Text fontSize="sm">
						min 34° - max 40°
					</Text>
				</VStack>
				<Logo width={20} height={20}/>
			</Box>
		</Box>
	);
};
