import prisma from "@/prisma/client";
import {
	Button,
	Table,
	TableCell,
	TableColumnHeaderCell,
	TableRow,
} from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";
import IssueActions from "./components/IssueActions";

const IssuesPage = async () => {
	const issues = await prisma.issue.findMany();
	// await delay(2000);
	// console.log(issues);
	return (
		<div className="max-w-7xl px-4 space-y-4">
			<IssueActions />
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
