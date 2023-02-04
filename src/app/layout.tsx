import "./globals.css";
import { Rowdies } from "@next/font/google";
const rowdies = Rowdies({
	subsets: ["latin"],
	variable: "--rowdies",
	weight: "400",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`layout ${rowdies.variable}`}>
				<div className="layout-child">{children}</div>
			</body>
		</html>
	);
}
