import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import DeleteButton from "../components/DeleteButton";
// import SimpleMdeReact from "react-simplemde-editor";

interface Props {
	params: {
		id: string;
	};
}
const IssueDetail = async ({ params }: Props) => {
	const issue = await prisma.issue.findUnique({
		where: {
			id: params.id,
		},
	});
	// console.log(issue);
	if (!issue) notFound();
	return (
		<Grid columns={{ initial: "1", md: "5" }} gapY={"2"} gapX={"4"}>
			<Box className="col-span-3">
				<Heading>{issue.title}</Heading>
				<Flex className="space-x-3" my={"2"}>
					<IssueStatusBadge status={issue.status} />
					<Text>{issue.createdAt.toDateString()}</Text>
				</Flex>

				<Card className="prose">
					<Markdown>{issue.description}</Markdown>
				</Card>
			</Box>
			<Box ml={"1"}>
				<Flex gap={"4"} direction={"column"}>
					<Button size={"4"} radius="large">
						<Link href={`./${issue.id}/edit`}>Edit</Link>
					</Button>
					<DeleteButton id={issue.id} />
				</Flex>
			</Box>
		</Grid>
	);
};
export default IssueDetail;
