import React from "react";
import { Input, Button, HStack } from "native-base";
import strings from "../../resources/strings";

interface IProps {
	value?: string;
	onChangeText?: (value: string) => void;
	placeHolder?: string;
	disabled?: boolean;
}
export const InputSearch: React.FC<IProps> = (props) => {
	const { value, onChangeText, placeHolder, disabled } = props;
	const inputSearch = strings.component.inputSearch;

	return (
		<HStack>
			<Input
				placeholder={placeHolder}
				onChangeText={onChangeText}
				value={value}
				isDisabled={disabled}
			/>
			<Button>{inputSearch.search}</Button>
		</HStack>
	);
};
