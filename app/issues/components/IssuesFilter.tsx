"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

type Props = {};
const statuses: {
	label: string;
	value?: Status;
}[] = [
	{ label: "All" },
	{ label: "Open", value: "OPEN" },
	{ label: "Closed", value: "CLOSED" },
	{ label: "In Progress", value: "IN_PROGRESS" },
];
const IssuesFilter = (props: Props) => {
	const router = useRouter();
	return (
		<Select.Root
			onValueChange={(status) => {
				const query = status ? `?status=${status}` : "";
				router.push(`/issues${query}`);
			}}
		>
			<Select.Trigger placeholder="Filter by status" />
			<Select.Content>
				{statuses.map((status) => (
					<Select.Item key={status.value} value={status.value || "All"}>
						{status.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	);
};
export default IssuesFilter;
