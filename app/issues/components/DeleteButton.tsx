"use client";
import Spinner from "@/app/components/Spinner";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
	id: string;
};
const DeleteButton = ({ id }: Props) => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const onDelete = async () => {
		try {
			setLoading(true);
			await axios.delete(`/api/issues/${id}`);
			router.push("/issues");
			router.refresh();
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<AlertDialog.Root>
				<AlertDialog.Trigger>
					<Button size={"4"} radius="large" color="red" disabled={loading}>
						Delete
						{loading && <Spinner />}
					</Button>
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Title>Confirm Delete</AlertDialog.Title>
					<AlertDialog.Description>
						Are sure you want to delete this issue? this cannot be undone.
					</AlertDialog.Description>
					<Flex mt={"4"} gap={"4"}>
						<AlertDialog.Cancel>
							<Button variant="soft" color="gray">
								Cancel
							</Button>
						</AlertDialog.Cancel>
						<AlertDialog.Action>
							<Button color="red" onClick={onDelete}>
								Delete
							</Button>
						</AlertDialog.Action>
					</Flex>
				</AlertDialog.Content>
			</AlertDialog.Root>
			<AlertDialog.Root open={error}>
				<AlertDialog.Content>
					<AlertDialog.Title>Error</AlertDialog.Title>
					<AlertDialog.Description>
						This issue can not be deleted
					</AlertDialog.Description>
					<Button
						variant="soft"
						color="gray"
						onClick={() => setError(false)}
						mt={"4"}
					>
						Ok
					</Button>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</>
	);
};
export default DeleteButton;
