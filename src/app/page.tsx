
import MyCarousel from "@/components/carousel";
import Config from "@/config";
import WebTitle from "@/components/webTitle";
import { Metadata } from "next";
import StaticWidgets from "@/components/staticWidget";
import CoupleWidget from "@/components/coupleWidget";
import Space from "@/components/space";
import WeddingEvent from "@/components/weddingEvent";
import Guestbook from "@/components/guestbook";
import HappyWedding from "@/components/happyWedding";
import Thanks from "@/components/thanks";
import Album from "@/components/album";
import MyAudioPlayer from "@/components/audioPlayer";
import Menu from "@/components/menu";

export const metadata: Metadata = {
	title: Config.title,
	description: Config.description,
	keywords: [Config.title, Config.description].join(' ').toLowerCase(),
	authors: {
		name: "Hiepnx",
		url: "https://github.com/nxhiep"
	},
	
}

export default function Home() {
	return (
		<body 
		style={{ display: 'none' }}
		>
			<header className="header">
				<div className="header-bg">
					<WebTitle size={35} />
				</div>
				<Menu />
			</header>
			<main className="main">
				<MyAudioPlayer />
				<MyCarousel />
				<Space />
				<CoupleWidget />
				<Space />
				<WeddingEvent />
				<Space />
				<Album />
				<Space />
				<Guestbook />
				<Space />
				<HappyWedding />
				<Space />
				<Thanks />
			</main>
			<StaticWidgets />
			{/* <footer className="footer">
				Footer
			</footer> */}
		</body>
	);
}
