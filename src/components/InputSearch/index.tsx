import React from "react";
import { Input, Button, HStack, Text } from "native-base";
import strings from "../../resources/strings";

interface IProps {
	value?: string;
	onChangeText?: (value: string) => void;
	placeHolder?: string;
	disabled?: boolean;
	onSearch?: () => void;
}
export const InputSearch: React.FC<IProps> = (props) => {
	const { value, onSearch, onChangeText, placeHolder, disabled } = props;
	const inputSearch = strings.component.inputSearch;

	return (
		<HStack
			mt={2}
			justifyContent="center"
			space={2}
			borderRadius="md"
			w="100%"
			bg="primary.500"
			p={4}
		>
			<Input
				w="80%"
				bg="white"
				placeholder={placeHolder}
				onChangeText={onChangeText}
				value={value}
				isDisabled={disabled}
			/>
			<Button colorScheme="secondary" onPress={onSearch}>
				<Text color="primary.500">
					{inputSearch.search}
				</Text>
			</Button>
		</HStack>
	);
};
