import { Table, TableColumnHeaderCell, TableCell } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./components/IssueActions";

const LoadingIssues = () => {
	const issues = [1, 2, 3, 4];
	return (
		<div className="px-4 space-y-4 max-w-7xl">
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
						<Table.Row key={issue}>
							<TableCell>
								<Skeleton />
								<div className="block md:hidden">
									<Skeleton />
								</div>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								<Skeleton />
							</TableCell>
							<TableCell className="hidden md:table-cell">
								<Skeleton />
							</TableCell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
	);
};
export default LoadingIssues;
