"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiBugBeetleFill } from "react-icons/pi";
import { useSession } from "next-auth/react";
import { Avatar, DropdownMenu, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import Spinner from "./components/Spinner";

const Navbar = () => {
	const pathName = usePathname();
	const { data: session, status } = useSession();
	console.log(session);

	console.log(status, "status from session");

	return (
		<nav className="flex items-center h-16 px-8 justify-between mb-5 border-b">
			<Flex>
				<Link href="/" className="text-3xl">
					<PiBugBeetleFill />
				</Link>
				<ul className="flex items-center space-x-5 text-gray-500 ">
					<li className="hover:text-gray-900">
						{/* <Link
						href="/dashboard"
						className={`${pathName.includes("dashboard") ? "underline" : ""}`}
					>
						Dashboard
					</Link> */}
					</li>
					<li className="hover:text-gray-900">
						<Link
							href="/issues"
							className={`${pathName.includes("issues") ? "underline" : ""}`}
						>
							Issues
						</Link>
					</li>
				</ul>
			</Flex>
			{status === "loading" && <Spinner />}
			{status === "authenticated" && (
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Avatar
							src={session.user!.image!}
							fallback="?"
							radius="full"
							className="hover:cursor-pointer"
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Label>{session.user?.email}</DropdownMenu.Label>
						<DropdownMenu.Item>
							<Link href={"/api/auth/signout"} className="w-full">
								Log out
							</Link>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			)}
			{status === "unauthenticated" && (
				<Link href={"/api/auth/signin"}>Log In</Link>
			)}
		</nav>
	);
};
export default Navbar;
