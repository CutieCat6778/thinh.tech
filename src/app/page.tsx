import Divider from "@/components/Divider";
import NavBar from "@/components/NavigationBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full">
			<NavBar />
			<div className="my-10 sm:mx-20 mx-0">
				<header>
					<h1>Hi, my name is Thinh</h1>
					<h2 className="mt-2 font-normal">
						I'm a hobbist that loves to programm and develope
						computer stuff. My dream is to lead the world with the
						latest technology!
					</h2>
					<button className="">Read more about me!</button>
					<Divider />
				</header>
				<section>
					<div>
						<h1 className="mb-4">Knowledgebase</h1>
						<span>
							I'm a self-taught web developer. My main programming language, that I feel the most comfortable with is javascript. I have more then 4 years experience in this language and most of my github project are writen with javascript!
						</span>
						<Exprience />
					</div>
					<div className="mt-10">
						<h1>Contact</h1>
						<div className="my-2">
							<span>
								I'm currently a student, so kinda busy. I will
								try my best to answer all email and message
								within 2-3 days. I have a very random life so
								yeah, it is hilarious 🤣
							</span>
							<div>
								<Link href="mailto:thinh@thinh.tech">
									<button>thinh@thinh.tech</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<Divider />
				<footer className="flex justify-around items-start text-gray-900 dark:text-gray-400">
					<div className="flex flex-col">
						<Link href="/">Home</Link>
						<Link href="/about" className="mt-2">
							About
						</Link>
					</div>
					<div className="flex flex-col">
						<Link href="https://github.com/CutieCat6778">
							Github
						</Link>
						<Link
							href="https://instagram.com/txzje"
							className="mt-2"
						>
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
			</div>
		</main>
	);
}

export function Exprience() {
	return (
		<div className="mt-4">
			<ul className="mx-auto block sm:grid max-w-full w-full grid-cols-3 gap-x-5">
				<li>
					<input
						className="peer sr-only"
						type="radio"
						value="yes"
						name="answer"
						id="yes"
						checked
					/>
					<label
						className="flex justify-center cursor-pointer rounded-t-md text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white px-1 transition-all duration-500 ease-in-out"
						htmlFor="yes"
					>
						Languages
					</label>
					<div className="w-full text-white dark:text-gray-900 rowdies bg-gray-900 rounded-b-md dark:bg-white transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-0">
						<Divider margin="0" />
						<div className="flex flex-col justify-center p-1">
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/js.svg"
									height={32}
									width={32}
									alt="Javascript Logo"
								/>
								<span className="ml-1">Javascript</span>
							</span>
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/ts.svg"
									height={32}
									width={32}
									alt="Typescript Logo"
								/>
								<span className="ml-1">Typescript</span>
							</span>
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/go.svg"
									height={32}
									width={32}
									alt="GoLang Logo"
								/>
								<span className="ml-1">GoLang</span>
							</span>
						</div>
					</div>
				</li>
				<li className="hidden sm:block">
					<input
						className="peer sr-only"
						type="radio"
						value="no"
						name="answer"
						id="no"
					/>
					<label
						className="flex justify-center cursor-pointer rounded-t-md text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white px-1 transition-all duration-500 ease-in-out"
						htmlFor="no"
					>
						Frameworks
					</label>
					<div className="w-full text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white rounded-b-md transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0">
						<Divider margin="0" />
						<div className="flex flex-col justify-center p-1">
							<span className="mx-2 my-2 items-center hidden dark:flex">
								<Image
									src="/next.svg"
									height={32}
									width={32}
									alt="Next Logo"
								/>
								<span className="ml-1">Next.js</span>
							</span>
							<span className="mx-2 my-2 flex items-center dark:hidden">
								<Image
									src="/next_white.svg"
									height={32}
									width={32}
									alt="Next Logo"
								/>
								<span className="ml-1">Next.js</span>
							</span>
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/nest.svg"
									height={32}
									width={32}
									alt="Javascript Logo"
								/>
								<span className="ml-1">Nest.js</span>
							</span>
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/go.svg"
									height={32}
									width={32}
									alt="Javascript Logo"
								/>
								<span className="ml-1">Gin Gonic</span>
							</span>
						</div>
					</div>
				</li>
				<li className="hidden sm:block">
					<input
						className="peer sr-only"
						type="radio"
						value="yesno"
						name="answer"
						id="yesno"
					/>
					<label
						className="flex justify-center cursor-pointer rounded-t-md text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white px-1 transition-all duration-500 ease-in-out"
						htmlFor="yesno"
					>
						Skills
					</label>
					<div className="w-full text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white rounded-b-md transition-all duration-500 ease-in-out -translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-0">
						<Divider margin="0" />
						<div className="flex flex-col justify-center p-1">
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/linux.svg"
									height={32}
									width={32}
									alt="Linux Logo"
								/>
								<span className="ml-1">Linux</span>
							</span>
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/api.svg"
									height={32}
									width={32}
									alt="Api Logo"
								/>
								<span className="ml-1">REST-API</span>
							</span>
							<span className="mx-2 my-2 flex items-center">
								<Image
									src="/container.svg"
									height={32}
									width={32}
									alt="Container Logo"
								/>
								<span className="ml-1">Container</span>
							</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
