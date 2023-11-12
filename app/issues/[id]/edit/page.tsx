import prisma from "@/prisma/client";
import IssueForm from "../../components/IssueForm";
import { notFound } from "next/navigation";
interface Props {
	params: {
		id: string;
	};
}

const EditIssuePage = async ({ params }: Props) => {
	const issue = await prisma.issue.findUnique({
		where: {
			id: params.id,
		},
	});
	if (!issue) return notFound();
	// console.log(issue);
	return <IssueForm issue={issue} />;
};
export default EditIssuePage;
