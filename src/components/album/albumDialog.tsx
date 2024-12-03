'use client';

import ImageData from '@/models/imageData';
import isPropValid from '@emotion/is-prop-valid';
import { ArrowBackIos, ArrowForwardIos, Close, Fullscreen, Pause, PlayArrow } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { StyleSheetManager } from 'styled-components';
import ReactElasticCarousel, { ReactElasticCarouselProps } from '../react-elastic-carousel';

const AlbumDialog:FC<({ 
    imagesSmall: ImageData[], 
    imagesBig: ImageData[], 
    initialActiveIndex: number, 
    onHide: () => void 
})> = ({ imagesBig, imagesSmall, initialActiveIndex, onHide }) => {
    const imageWidth = 100;
    const gapSpacing = 12;
    const [playing, setPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(initialActiveIndex < 0 ? 0 : initialActiveIndex);
    const props: ReactElasticCarouselProps = {
        isRTL: false,
        showArrows: true,
        enableSwipe: false,
        enableMouseSwipe: false,
        pagination: false,
        enableAutoPlay: playing,
        autoPlaySpeed: 10000,
        initialActiveIndex: currentIndex,
        onChange: (_, index) => {
            setCurrentIndex(index);
            scrollRef.current?.scrollTo({
                top: 0,
                left: index * imageWidth,
                behavior: 'smooth'
            });
        },
        renderArrow: (props) => {
            return (
                <div style={{
                    position: 'absolute',
                    top: 'calc(50% - 25px)',
                    color: 'white',
                    zIndex: 2,
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    left: props.type === 'PREV' ? 0 : undefined,
                    right: props.type === 'NEXT' ? 0 : undefined,
                    backgroundColor: '#0000003b',
                    borderRadius: 50,
                }} onClick={props.onClick}>
                    {props.type === 'NEXT' ? (
                        <ArrowForwardIos color='inherit' />
                    ) : (
                        <ArrowBackIos color='inherit' />
                    )}
                </div>
            );
        }
    }
    const carouselRef = useRef<ReactElasticCarousel>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const handle = useFullScreenHandle();
    return (
        <Dialog open={true} fullScreen maxWidth="xl">
            <DialogTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 100 }}>
                    {currentIndex + 1}/{imagesBig.length}
                </div>
                <div>Tất cả hình ảnh</div>
                <IconButton onClick={onHide}><Close /></IconButton>
            </DialogTitle>
            <DialogContent>
                <StyleSheetManager shouldForwardProp={isPropValid}>
                    <ReactElasticCarousel {...props} ref={carouselRef}>
                        {imagesBig.map((image, index) => {
                            return (
                            <div key={'album-item-' + image.name + '-' + index}>
                                    <FullScreen handle={handle}>
                                        <Image
                                            src={image.url} 
                                            alt={'Album photo ' + image.name} 
                                            width={image.width}
                                            height={image.height}
                                            style={{
                                                width: '100%', 
                                                height: 500, 
                                            }} 
                                            priority
                                        />
                                    </FullScreen>
                                </div>
                            );
                        })}
                    </ReactElasticCarousel>
                </StyleSheetManager>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton onClick={() => {
                        setPlaying(!playing);
                    }}>{playing ? <Pause /> : <PlayArrow /> }</IconButton>
                    <IconButton onClick={async () => {
                        await handle.enter();
                        setPlaying(false);
                    }}><Fullscreen /></IconButton>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', gap: gapSpacing }} ref={scrollRef}>
                    {
                        imagesSmall.map((image, index) => {
                            const active = currentIndex === index;
                            return (
                                <div key={'card-image-' + image.name + index} onClick={() => {
                                    carouselRef.current?.goTo(index);
                                }}>
                                    <Image 
                                        src={image.url} 
                                        alt={image.name} 
                                        width={imageWidth} 
                                        height={image.height * imageWidth / image.width}
                                        style={{ 
                                            width: imageWidth,
                                            height: imageWidth,
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            border: active ? '4px solid white' : '4px'
                                        }} 
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onHide} variant="outlined">Đóng</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlbumDialog;