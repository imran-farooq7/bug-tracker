import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
interface Props {
	params: {
		id: string;
	};
}

export async function PATCH(req: NextRequest, { params }: Props) {
	const body = await req.json();
	const issue = await prisma.issue.findUnique({
		where: {
			id: params.id,
		},
	});

	if (!issue) {
		return NextResponse.json({ error: "not found" }, { status: 404 });
	}

	const updatedIssue = await prisma.issue.update({
		where: {
			id: issue.id,
		},
		data: {
			title: body.title,
			description: body.description,
		},
	});

	return NextResponse.json({ message: "updated issue" }, { status: 200 });
}
