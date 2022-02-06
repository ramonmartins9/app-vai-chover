import React from "react";
import { Box, Center, Skeleton, VStack } from "native-base";

interface IProps {
	isLoading: boolean;
}
export const Loader: React.FC<IProps> = (props) => {
	const { children, isLoading } = props;
	return (
		<Box>
			{isLoading
				? (
					<Center >
						<VStack w="100%" space={4} rounded="md">
							<Skeleton mt={4} h="20" />
							<Skeleton h="20" />
							<Skeleton h="20" />
							<Skeleton h="20" />
							<Skeleton h="20" />
							<Skeleton h="20" />
						</VStack>
					</Center>
				)
				: children
			}
		</Box>
	);
};
