import Image from "next/image";
import Link from "next/link";
import ModeButton from "./Button";

interface IProps {
	root?: boolean
}

export default function NavBar({ root }: IProps) {

	return (
		<nav className="flex justify-between items-center my-5 w-full text-gray-900 dark:text-white text-xl">
			<Link href="/">
				<div className="flex justify-between items-center">
					<div>
						<Image
							src="/logo.svg"
							height={32}
							width={32}
							alt="Logo"
						/>
					</div>
					<h1 className="text-2xl ml-2">{!root ? "Thinh" : "Go back"}</h1>
				</div>
			</Link>
			<span className="">
				<ModeButton />
			</span>
		</nav>
	);
}
