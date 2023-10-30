import prisma from "@/prisma/client";
import {
	Button,
	Table,
	TableCell,
	TableColumnHeaderCell,
	TableRow,
} from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = async () => {
	const issues = await prisma.issue.findMany();
	// console.log(issues);
	return (
		<div className="max-w-7xl px-4 space-y-4">
			<Button>
				<Link href="/issues/new">New Issue</Link>
			</Button>
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
								{issue.title}
								<div className="block md:hidden">{issue.status}</div>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{issue.status}
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
