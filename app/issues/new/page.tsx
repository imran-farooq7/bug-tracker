"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
	return (
		<div className="max-w-lg mx-auto space-y-6 flex flex-col">
			<TextField.Root className="rounded-3xl p-2">
				<TextField.Input placeholder="Title" />
			</TextField.Root>
			<TextArea placeholder="Description" rows={5} cols={10} />
			<Button className="w-full" size={"4"} radius="full">
				Submit New Issue
			</Button>
		</div>
	);
};
export default NewIssuePage;
