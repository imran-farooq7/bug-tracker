import prisma from "@/prisma/client";
import IssuesDetails from "./components/IssuesDetails";
import LatestIssues from "./components/LatestIssues";
import IssueChart from "./components/IssueChart";

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
		<div>
			<LatestIssues />
			<IssueChart
				open={openIssues}
				closed={closedIssues}
				inProgress={progressIssues}
			/>
		</div>
	);
}
