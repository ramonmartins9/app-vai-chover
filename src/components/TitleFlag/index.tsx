import React from "react";
import { VStack, Text } from "native-base";
import { flag } from "country-emoji";


interface IProps {
	title: string;
	country: string;
}

export const TitleFlag: React.FC<IProps> = (props) => {
	const { title, country } = props;

	return (
		<VStack w="70%" color="primary.500">
			<Text fontWeight="bold" fontSize="2xl">
				{title}
			</Text>
			<Text fontSize="xl">
				{flag(country)}
			</Text>
		</VStack>
	);
};
