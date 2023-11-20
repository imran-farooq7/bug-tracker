"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useEffect, useState } from "react";

type Props = {};
const AssigneeSelect = (props: Props) => {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		const getUsers = async () => {
			const res = await fetch("http://localhost:3000/api/users");
			const data = await res.json();
			// console.log(data, "users from server");
			setUsers(data.users);
		};
		getUsers();
	}, []);
	// console.log(users, "users from server");
	return (
		<Select.Root>
			<Select.Trigger placeholder="Assign..." />
			<Select.Content>
				<Select.Group>
					<Select.Label>Suggestions</Select.Label>
					{users.map((user: User) => {
						return (
							<Select.Item value={user.name!} key={user.id}>
								{user.name}
							</Select.Item>
						);
					})}
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
};
export default AssigneeSelect;
