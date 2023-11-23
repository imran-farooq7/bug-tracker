"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type Props = {
	id: string;
	assignId: string;
};
const AssigneeSelect = ({ id, assignId }: Props) => {
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
	const handleAssignIssue = (user: string) => {
		// console.log(user, "user id");
		axios
			.patch(`/api/issues/${id}`, {
				assignedToUserId: user,
			})
			.catch(() => {
				toast.error("Changes could not be applied");
			});
	};
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
	// console.log(users, "users from server");s

	return (
		<>
			<Select.Root onValueChange={handleAssignIssue} defaultValue={assignId}>
				<Select.Trigger placeholder="Assign..." />
				<Select.Content>
					<Select.Group>
						<Select.Label>Suggestions</Select.Label>

						{users?.map((user: User) => {
							return (
								<Select.Item value={user.id!} key={user.id}>
									{user.name}
								</Select.Item>
							);
						})}
					</Select.Group>
				</Select.Content>
			</Select.Root>
			<Toaster />
		</>
	);
};
export default AssigneeSelect;
