import prisma from "@/prisma/client";
import { Table, TableCell, TableColumnHeaderCell } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssueActions from "./components/IssueActions";
import IssuesFilter from "./components/IssuesFilter";
import { Status } from "@prisma/client";

interface Props {
	searchParams: {
		status: Status;
	};
}
const IssuesPage = async ({ searchParams }: Props) => {
	const { status } = searchParams;
	const statuses = Object.values(Status);
	const validStatus = statuses.includes(status)
		? searchParams.status
		: undefined;
	const issues = await prisma.issue.findMany({
		where: {
			status: validStatus,
		},
	});
	// await delay(2000);
	// console.log(issues);
	return (
		<div className="max-w-7xl px-4 space-y-4">
			<IssueActions />
			{/* <IssuesFilter /> */}
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<TableColumnHeaderCell>Issue</TableColumnHeaderCell>
						<TableColumnHeaderCell className="hidden md:table-cell">
							Status
						</TableColumnHeaderCell>
						<TableColumnHeaderCell className="hidden md:table-cell">
							Created
						</TableColumnHeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{issues.map((issue) => (
						<Table.Row key={issue.id}>
							<TableCell>
								<Link href={`issues/${issue.id}`}>{issue.title}</Link>
								<div className="block md:hidden">
									<IssueStatusBadge status={issue.status} />
								</div>
							</TableCell>

							<TableCell className="hidden md:table-cell">
								<IssueStatusBadge status={issue.status} />
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{issue.createdAt.toDateString()}
							</TableCell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
	);
};
export default IssuesPage;
