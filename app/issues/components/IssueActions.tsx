import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssuesFilter from "./IssuesFilter";

const IssueActions = () => {
	return (
		<Flex justify={"between"}>
			<IssuesFilter />
			<Button>
				<Link href="/issues/new">New Issue</Link>
			</Button>
		</Flex>
	);
};
export default IssueActions;
