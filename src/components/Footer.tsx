import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex justify-around items-start text-gray-900 dark:text-gray-400">
			<div className="flex flex-col">
				<Link href="/">Home</Link>
				<Link href="/about" className="mt-2">
					About
				</Link>
			</div>
			<div className="flex flex-col">
				<Link href="https://github.com/CutieCat6778">Github</Link>
				<Link href="https://instagram.com/txzje" className="mt-2">
					Instagram
				</Link>
				<Link
					href="https://discordapp.com/users/924351368897106061"
					className="mt-2"
				>
					Instagram
				</Link>
			</div>
			<div className="flex flex-col">
				<Link href="https://github.com/CutieCat6778/thinh.tech">
					Source code
				</Link>
			</div>
		</footer>
	);
}
