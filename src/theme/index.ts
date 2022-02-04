import { extendTheme } from "native-base";

import colors from "./colors";
import * as components from "./components";

const theme = extendTheme({
	colors,
	components: {
		...components,
	},
});

export default theme;
