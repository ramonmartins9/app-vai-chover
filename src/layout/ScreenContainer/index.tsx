import * as React from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import { Box } from "native-base";
import { observer } from "mobx-react-lite";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface IScreenContainerProps {
	hideKeyBoardOnScroll?: boolean;
	scrollable?: boolean;
	header?: JSX.Element;
}

interface IProps extends IScreenContainerProps {}

const ScreenContainer: React.FC<IProps> = (props) => {
	const {
		children,
		hideKeyBoardOnScroll,
		scrollable,
		header,
	} = props;
	const onScrollBegin = hideKeyBoardOnScroll ? Keyboard.dismiss : () => {};

	const safeAreaInsets = useSafeAreaInsets();

	const renderChildren = () => (
		<KeyboardAvoidingView
			style={[styles.container]}
			enabled
		>
			<Box
				flex={1}
				px={4}
			>
				{children}
			</Box>
		</KeyboardAvoidingView>
	);

	return (
		<Box h="100%" flex={1} >
			<Box
				h={`${safeAreaInsets.top}px`}
				backgroundColor="#001e47"
			>
				<StatusBar
					backgroundColor="#001e47"
					barStyle="light-content"
				/>
			</Box>
			{header}
			{scrollable ? (
				<ScrollView
					onScrollBeginDrag={onScrollBegin}
					style={[styles.container]}>
					{renderChildren()}
				</ScrollView>
			) : (
				<View style={[styles.container]}>{renderChildren()}</View>
			)}
		</Box>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
});

export default observer(ScreenContainer);
