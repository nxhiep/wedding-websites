'use client';

import { ImagesConfig } from "@/config/images";
import ImageData from "@/models/imageData";
import { Utils } from "@/utils";
import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import MyTitle from "../myTitle";
import AlbumDialog from "./albumDialog";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const allImages = ImagesConfig.getAllAlbums();
const imagesXS = Object.values(allImages).reduce<ImageData[]>((prev, next) => {
    const item = next.find((a) => a.type === 'xs');
    if(item) {
        return [ ...prev, item];
    }
    return prev;
}, []);
const imagesLG = Object.values(allImages).reduce<ImageData[]>((prev, next) => {
    const item = next.find((a) => a.type === 'lg');
    if(item) {
        return [ ...prev, item];
    }
    return prev;
}, []);

const Album = () => {
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [images, setImages] = useState<Image[]>([]);
    useEffect(() => {
        const previewImages = imagesXS.slice(0, 15);
        Utils.shuffle(previewImages);
        setImages(previewImages.map((item) => {
            return {
                src: item.url,
                width: item.width,
                height: item.height,
                isSelected: false,
                alt: item.name
            }
        }));
    }, []);
    return (
        <ThemeProvider theme={darkTheme}>
            <div id="Album">
                <MyTitle
                    title="Album ảnh cưới"
                    description=""
                />
                <Container>
                    <Gallery 
                        images={images} 
                        maxRows={2} 
                        enableImageSelection={false} 
                        onClick={(_, item) => setCurrentImage(item.alt ?? '')}
                    />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Button variant="contained" onClick={() => setCurrentImage('')}>TẤT CẢ HÌNH ẢNH</Button>
                </div>
                </Container>
                { typeof currentImage === 'string' && (
                    <AlbumDialog 
                        imagesSmall={imagesXS}
                        imagesBig={imagesLG}
                        initialActiveIndex={imagesLG.findIndex((a) => a.name === currentImage)} 
                        onHide={() => setCurrentImage(null)}
                    />
                ) }
            </div>
        </ThemeProvider>
    );
}

export default Album;