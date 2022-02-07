import React from "react";
import { Text, Center } from "native-base";

interface IProps {
	text: string;
}

export const EmptyList: React.FC<IProps> = (props) => {
	const { text } = props;

	return (
		<Center p={2} mt={4}>
			<Text textAlign="center" fontWeight="bold" color="primary.500" fontSize="md">
				{text}
			</Text>
		</Center>
	);
};
