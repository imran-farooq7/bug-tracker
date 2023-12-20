import prisma from "@/prisma/client";
import IssuesDetails from "./components/IssuesDetails";
import LatestIssues from "./components/LatestIssues";
import IssueChart from "./components/IssueChart";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
	const openIssues = await prisma.issue.count({
		where: {
			status: "OPEN",
		},
	});
	const progressIssues = await prisma.issue.count({
		where: {
			status: "IN_PROGRESS",
		},
	});
	const closedIssues = await prisma.issue.count({
		where: {
			status: "CLOSED",
		},
	});
	return (
		<Grid columns={{ initial: "1", md: "2" }} gap={"5"} mt={"7"}>
			<Flex direction={"column"} gap={"5"}>
				<IssuesDetails
					open={openIssues}
					closed={closedIssues}
					inProgress={progressIssues}
				/>
				<IssueChart
					open={openIssues}
					closed={closedIssues}
					inProgress={progressIssues}
				/>
			</Flex>
			<LatestIssues />
		</Grid>
	);
}
