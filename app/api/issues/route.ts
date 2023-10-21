import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const createIssue = await prisma.issue.create({
		data: {
			title: body.title,
			description: body.description,
		},
	});

	return NextResponse.json(createIssue, { status: 201 });
}
