import * as React from "react";
import {
	Center,
	Flex,
	IBoxProps,
	Pressable,
	Text,
	ITextProps,
} from "native-base";
import Logo from "../../assets/logo.svg";
import colors from "../../theme/colors";

export interface INavbarProps {
	title?: string;
	titleProps?: ITextProps;
	onBackPress?: () => void;
	boxProps?: IBoxProps;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
	const {
		title,
		titleProps,
		onBackPress,
		boxProps,
	} = props;

	return (
		<Flex
			{...boxProps}
			bg={colors.primary[500]}
			justifyContent="center"
			alignItems="center"
			px={2}
			py={2}
		>
			<Center w="100%" position="relative">
				{onBackPress && (
					<Pressable
						onPress={onBackPress}
						position="absolute"
						left={2}
					>
						{
							"<"
						}
					</Pressable>
				)}
				{
					title ? (
						<Text
							fontSize="lg"
							fontWeight="bold"
							py={4}
							color={colors.secondary[500]}
							{...titleProps}
						>
							{title}
						</Text>
					) : (
						<Logo width={50} height={50}/>
					)}
			</Center>
		</Flex>
	);
};
