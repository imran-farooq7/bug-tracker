import Link from "next/link";
import { PiBugBeetleFill } from "react-icons/pi";

const Navbar = () => {
	return (
		<nav className="flex items-center h-14 px-8 justify-between mb-5 border-b">
			<Link href="/" className="text-3xl">
				<PiBugBeetleFill />
			</Link>
			<ul className="flex items-center space-x-5 text-gray-500 ">
				<li className="hover:text-gray-900">
					<Link href="/">Dashboard</Link>
				</li>
				<li className="hover:text-gray-900">
					<Link href="/issues">Issues</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
