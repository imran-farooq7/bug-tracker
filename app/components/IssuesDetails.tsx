import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
	open: number;
	inProgress: number;
	closed: number;
}
const IssuesDetails = ({ open, inProgress, closed }: Props) => {
	const issues: { label: string; value: number; status: Status }[] = [
		{
			label: "Open Issues",
			value: open,
			status: "OPEN",
		},
		{
			label: "In progress Issues",
			value: inProgress,
			status: "IN_PROGRESS",
		},
		{
			label: "Closed Issues",
			value: closed,
			status: "CLOSED",
		},
	];
	return (
		<Flex>
			{issues.map((issue) => (
				<Card key={issue.label}>
					<Flex direction={"column"}>
						<Text>{issue.label}</Text>
						<Text size={"5"} className="font-bold">
							{issue.value}
						</Text>
					</Flex>
				</Card>
			))}
		</Flex>
	);
};
export default IssuesDetails;
