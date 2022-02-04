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

interface IProps {
	hideKeyBoardOnScroll?: boolean;
	scrollable?: boolean;
}

const ScreenContainer: React.FC<IProps> = (props) => {
	const {
		children,
		hideKeyBoardOnScroll,
		scrollable,
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
		<Box flex={1} >
			<Box
				h={`${safeAreaInsets.top}px`}
				backgroundColor="primary.500"
			>
				<StatusBar
					backgroundColor="primary.500"
					barStyle="dark-content"
				/>
			</Box>
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
