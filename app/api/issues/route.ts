import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
	const session = await getServerSession(authOptions);

	if (session) {
		const body = await request.json();
		const createIssue = await prisma.issue.create({
			data: {
				title: body.title,
				description: body.description,
			},
		});

		return NextResponse.json(createIssue, { status: 201 });
	} else {
		return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
	}
}
