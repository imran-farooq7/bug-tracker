"use client";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

// import SimpleMDE from "react-simplemde-editor";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
	ssr: false,
});
interface IssueForm {
	title: string;
	description: string;
}
interface Props {
	issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IssueForm>();
	const onSubmit = handleSubmit(async (data) => {
		try {
			setLoading(true);
			await axios.post("/api/issues", data);
			router.push("/issues");
		} catch (error) {}
	});
	return (
		<form
			className="max-w-lg mx-auto space-y-6 flex flex-col"
			onSubmit={onSubmit}
		>
			<TextField.Root className="rounded-3xl p-2">
				<TextField.Input
					placeholder="Title"
					{...register("title", { required: "title is required" })}
					defaultValue={issue?.title}
				/>
			</TextField.Root>
			<Controller
				name="description"
				control={control}
				defaultValue={issue?.description}
				render={({ field }) => (
					<SimpleMDE placeholder="Description" {...field} />
				)}
				rules={{ required: "Description" }}
			/>

			<Button className="w-full" size={"4"} radius="full" disabled={loading}>
				Submit New Issue {loading && <Spinner />}
			</Button>
		</form>
	);
};
export default IssueForm;
