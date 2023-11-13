"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
	id: string;
};
const DeleteButton = ({ id }: Props) => {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger>
				<Button size={"4"} radius="large" color="red">
					<Link href={`./${id}/edit`}>Delete</Link>
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
						<Button color="red">Delete issue</Button>
					</AlertDialog.Action>
				</Flex>
			</AlertDialog.Content>
		</AlertDialog.Root>
	);
};
export default DeleteButton;
