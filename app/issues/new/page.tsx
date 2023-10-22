"use client";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
	return (
		<div className="max-w-lg mx-auto space-y-6 flex flex-col">
			<TextField.Root className="rounded-3xl p-2">
				<TextField.Input placeholder="Title" />
			</TextField.Root>
			<SimpleMDE />
			<Button className="w-full" size={"4"} radius="full">
				Submit New Issue
			</Button>
		</div>
	);
};
export default NewIssuePage;
