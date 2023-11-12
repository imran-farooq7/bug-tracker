import { Box } from "@radix-ui/themes";
// import { Controller } from "react-hook-form";
import Skeleton from "react-loading-skeleton";

const FormSkeleton = () => {
	return (
		<Box className="max-w-xl">
			<Skeleton height="2rem" />
			<Skeleton height="20rem" />
		</Box>
	);
};
export default FormSkeleton;
