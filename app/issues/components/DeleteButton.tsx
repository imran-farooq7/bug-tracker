"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
	id: string;
};
const DeleteButton = ({ id }: Props) => {
	const router = useRouter();
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button size={"4"} radius="large" color="red">
					Delete
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
						<Button
							color="red"
							onClick={async () => {
								await axios.delete(`/api/issues/${id}`);
								router.push("/issues");
								router.refresh();
							}}
						>
							Delete
						</Button>
					</AlertDialog.Action>
				</Flex>
			</AlertDialog.Content>
		</AlertDialog.Root>
	);
};
export default DeleteButton;
