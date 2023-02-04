import Image from "next/image";
import Link from "next/link";
import ModeButton from "./Button";

export default function NavBar() {
	return (
		<Link href="/">
			<nav className="flex justify-between items-center my-5 w-full text-gray-900 dark:text-white text-xl">
				<span className="flex justify-between items-center">
					<div>
						<Image
							src="/logo.svg"
							height={32}
							width={32}
							alt="Logo"
						/>
					</div>
					<h1 className="text-2xl ml-2">Thinh</h1>
				</span>
				<span className="">
					<ModeButton />
				</span>
			</nav>
		</Link>
	);
}
