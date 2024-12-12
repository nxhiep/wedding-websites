import Album from "@/components/album";
import MyAudioPlayer from "@/components/audioPlayer";
import MyCarousel from "@/components/carousel";
import CoupleWidget from "@/components/coupleWidget";
import Guestbook from "@/components/guestbook";
import HappyWedding from "@/components/happyWedding";
import Header from "@/components/header";
import Space from "@/components/space";
import StaticWidgets from "@/components/staticWidget";
import Thanks from "@/components/thanks";
import WeddingEvent from "@/components/weddingEvent";
import Config from "@/config";
import { Metadata } from "next";

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
		<body>
			<Header />
			<main className="main">
				<MyAudioPlayer />
				<MyCarousel />
				<Space />
				<CoupleWidget />
				<Space />
				<WeddingEvent />
				<Space />
				<Album />
				{/* <Space />
				<Guestbook /> */}
				<Space />
				<HappyWedding />
				<Space />
				<Thanks />
			</main>
			{/* <StaticWidgets /> */}
		</body>
	);
}
