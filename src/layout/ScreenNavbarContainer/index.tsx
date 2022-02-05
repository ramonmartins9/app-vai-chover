import * as React from "react";
import { observer } from "mobx-react-lite";

import { Navbar, INavbarProps } from "../../components";
import ScreenContainer, { IScreenContainerProps } from "../ScreenContainer";

interface Props {
	navbar?: INavbarProps;
	screenContainer?: IScreenContainerProps;
}

const ScreenNavbarContainer: React.FC<Props> = (props) => {
	const {
		navbar,
		screenContainer,
		children,
	} = props;

	return (
		<>
			<ScreenContainer
				{...screenContainer}
				header={(
					<Navbar {...navbar} />
				)}
			>
				{children}
			</ScreenContainer>
		</>
	);
};

export default observer(ScreenNavbarContainer);
