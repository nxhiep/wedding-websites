'use client';

import { ImagesConfig } from "@/config/images";
import MyTitle from "../myTitle";
import { Gallery, Image as ImageObj } from "react-grid-gallery";
import { Button, Container, Dialog, DialogActions, DialogContent, useMediaQuery, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

function shuffle(array: any[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

const Album = () => {
    const [images, setImages] = useState<ImageObj[]>([]);
    useEffect(() => {
        const list = ImagesConfig.albums.map((item) => {
            return {
                src: item.url,
                width: item.w,
                height: item.h,
                isSelected: false,
            }
        });
        shuffle(list);
        setImages(list);
    }, []);
    const [openImage, setOpenImage] = useState<ImageObj | null>(null);
    return (
        <div id="Album">
            <MyTitle
                title="Album ảnh cưới"
                description=""
            />
            <Container>
                <Gallery images={images} onClick={(index, item) => {
                    setOpenImage(item);
                }} />
            </Container>
            { openImage && (
                <Dialog open={true} maxWidth="xl">
                    <DialogContent>
                        <MyImage item={openImage} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenImage(null)} variant="outlined">Đóng</Button>
                    </DialogActions>
                </Dialog>
            ) }
        </div>
    );
}

const MyImage:FC<({ item: ImageObj  })> = ({ item }) => {
    const c = item.width > item.height;
    const width = c ? '100%' : `${(item.width / item.height) * 100 - 6}%`;
    const height = c ? `${(item.height / item.width) * 100}%` : '100%';
    return <Image style={{ width: width, height: height, margin: 'auto', display: 'block' }} src={item.src} width={item.width} height={item.height} alt={item.src} loading="lazy" />
}

export default Album;