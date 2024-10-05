
import MyCarousel from "@/components/carousel";
import Config from "@/config";
import Head from "next/head";
import Image from "next/image";
import heartIcon from "./images/heart.svg";

export default function Home() {
	
	return (
		<body>
			<Head>
				<title>{Config.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<meta name="title" content={Config.title} />
				<meta name="description" content={Config.description} />
				<meta name="keywords" content={[Config.title, Config.description].join(' ').toLowerCase()} />
				<meta name="author" content="Hiepnx" />
			</Head>
			<header className="header">
				<div className="header-title great-vibes">
					{Config.menName}
					&nbsp;&nbsp;
					<Image
						priority
						src={heartIcon}
						alt="Love"
					/>
					&nbsp;&nbsp;
					{Config.womenName}
				</div>
				<div className="menu">
					<a>Cặp đôi</a>
					<a>Sự kiện cưới</a>
					<a>Album Hình Cưới</a>
					<a>Sổ Lưu Bút</a>
					<a>Mừng cưới</a>
				</div>
			</header>
			<main className="main">
				<MyCarousel />
			</main>
			<footer className="footer">
				Footer
			</footer>
		</body>
	);
}
