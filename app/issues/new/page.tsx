"use client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import SimpleMDE from "react-simplemde-editor";
interface IssueForm {
	title: string;
	description: string;
}

const NewIssuePage = () => {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();
	return (
		<form
			className="max-w-lg mx-auto space-y-6 flex flex-col"
			onSubmit={handleSubmit(async (data) => {
				await axios.post("/api/issues", data);
				router.push("/issues");
			})}
		>
			<TextField.Root className="rounded-3xl p-2">
				<TextField.Input placeholder="Title" {...register("title")} />
			</TextField.Root>
			<Controller
				name="description"
				control={control}
				render={({ field }) => (
					<SimpleMDE placeholder="Description" {...field} />
				)}
			/>

			<Button className="w-full" size={"4"} radius="full">
				Submit New Issue
			</Button>
		</form>
	);
};
export default NewIssuePage;
