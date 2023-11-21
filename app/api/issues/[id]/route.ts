import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
interface Props {
	params: {
		id: string;
	};
}

export async function PATCH(req: NextRequest, { params }: Props) {
	// const session = await getServerSession(authOptions);
	// if (!session) return NextResponse.json({}, { status: 401 });
	const body = await req.json();
	if (body.assignedToUserId) {
		const user = await prisma.user.findUnique({
			where: {
				id: body.assignedToUserId,
			},
		});
		if (!user) {
			return NextResponse.json({ error: "invalid user" }, { status: 400 });
		}
	}
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
			assignedToUserId: body.assignedToUserId,
		},
	});

	return NextResponse.json({ message: "updated issue" }, { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: Props) {
	// const body = await req.json();
	const session = await getServerSession(authOptions);
	if (!session) return NextResponse.json({}, { status: 401 });
	await prisma.issue.delete({
		where: {
			id: params.id,
		},
	});

	return NextResponse.json({ message: "deleted issue" }, { status: 200 });
}
