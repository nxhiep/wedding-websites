
import MyCarousel from "@/components/carousel";
import Config from "@/config";
import WebTitle from "@/components/webTitle";
import { Metadata } from "next";
import StaticWidgets from "@/components/staticWidget";
import CoupleWidget from "@/components/coupleWidget";
import Space from "@/components/space";
import WeddingEvent from "@/components/weddingEvent";
import Guestbook from "@/components/guestbook";
import { Album } from "@mui/icons-material";
import HappyWedding from "@/components/happyWedding";
import Thanks from "@/components/thanks";

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
			<header className="header">
				<div className="header-bg">
					<WebTitle size={35} />
				</div>
				<div className="menu">
					<a href="#CoupleWidget">Cặp đôi</a>
					<a href="#WeddingEvent">Sự kiện cưới</a>
					<a href="#Album">Album Hình Cưới</a>
					<a href="#Guestbook">Sổ Lưu Bút</a>
					<a href="#HappyWedding">Mừng cưới</a>
				</div>
			</header>
			<main className="main">
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
			<footer className="footer">
				Footer
			</footer>
		</body>
	);
}
