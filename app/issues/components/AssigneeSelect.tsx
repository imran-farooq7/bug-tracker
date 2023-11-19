"use client";
import { Select } from "@radix-ui/themes";

type Props = {};
const AssigneeSelect = (props: Props) => {
	return (
		<Select.Root>
			<Select.Trigger placeholder="Assign..." />
			<Select.Content>
				<Select.Group>
					<Select.Label>Suggestions</Select.Label>
					<Select.Item value="1">Imran</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
};
export default AssigneeSelect;
