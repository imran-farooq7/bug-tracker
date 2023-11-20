"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

type Props = {};
const AssigneeSelect = (props: Props) => {
	const {
		data: users,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["users"],
		queryFn: () =>
			axios
				.get("http://localhost:3000/api/users")
				.then((res) => res.data.users),
		staleTime: 60 * 1000,
	});
	// const [users, setUsers] = useState<User[]>([]);
	// useEffect(() => {
	// 	const getUsers = async () => {
	// 		// /const res = await fetch();
	// 		const data = await res.json();
	// 		// console.log(data, "users from server");
	// 		setUsers(data.users);
	// 	};
	// 	getUsers();
	// }, []);
	console.log(users, "users from server");
	return (
		<Select.Root>
			<Select.Trigger placeholder="Assign..." />
			<Select.Content>
				<Select.Group>
					<Select.Label>Suggestions</Select.Label>
					{users?.map((user: User) => {
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
