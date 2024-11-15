import Config from "@/config";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: Config.title,
	description: Config.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
