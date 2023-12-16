import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "./IssueStatusBadge";

type Props = {};
const LatestIssues = async (props: Props) => {
	const issues = await prisma.issue.findMany({
		orderBy: {
			createdAt: "desc",
		},
		take: 5,
		include: {
			assignedToUser: true,
		},
	});
	return (
		<Card>
			<Heading size={"4"} mb={"2"}>
				Latest Issues
			</Heading>
			<Table.Root>
				<Table.Body>
					{issues.map((issue) => {
						return (
							<Table.Row key={issue.id}>
								<Table.Cell>
									<Flex justify={"between"}>
										<Flex direction={"column"} align={"start"} gap={"2"}>
											<Link href={`/issues/${issue.id}`}>{issue.title}</Link>
											<IssueStatusBadge status={issue.status} />
										</Flex>
										{issue.assignedToUserId && (
											<Avatar
												fallback={"?"}
												src={issue.assignedToUser?.image!}
												size={"3"}
												radius="full"
											/>
										)}
									</Flex>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table.Root>
		</Card>
	);
};
export default LatestIssues;
