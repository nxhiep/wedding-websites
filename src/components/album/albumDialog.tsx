'use client';

import ImageData from '@/models/imageData';
import isPropValid from '@emotion/is-prop-valid';
import { Close } from '@mui/icons-material';
import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import ReactElasticCarousel, { ReactElasticCarouselProps } from '../react-elastic-carousel';

const AlbumDialog:FC<({ 
    imagesSmall: ImageData[], 
    imagesBig: ImageData[], 
    initialActiveIndex: number, 
    onHide: () => void 
})> = ({ imagesBig, imagesSmall, initialActiveIndex, onHide }) => {
    const imageWidth = 100;
    const [currentIndex, setCurrentIndex] = useState(initialActiveIndex < 0 ? 0 : initialActiveIndex);
    const props: ReactElasticCarouselProps = {
        isRTL: false,
        showArrows: true,
        enableSwipe: false,
        enableMouseSwipe: false,
        pagination: false,
        enableAutoPlay: true,
        autoPlaySpeed: 10000,
        initialActiveIndex: currentIndex,
        onChange: (_, index) => {
            setCurrentIndex(index);
        }
    }
    const ref = useRef<ReactElasticCarousel>(null);
    return (
        <Dialog open={true} fullScreen maxWidth="xl">
            <DialogTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 50 }}></div>
                <div>Tất cả hình ảnh</div>
                <IconButton onClick={onHide}><Close /></IconButton>
            </DialogTitle>
            <DialogContent>
                <StyleSheetManager shouldForwardProp={isPropValid}>
                    <ReactElasticCarousel {...props} ref={ref}>
                        {imagesBig.map((image, index) => {
                            return (
                            <div key={'album-item-' + image.name + '-' + index}>
                                    <div>
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
                                    </div>
                                </div>
                            );
                        })}
                    </ReactElasticCarousel>
                </StyleSheetManager>
                <div style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', gap: 12 }}>
                    {
                        imagesSmall.map((image, index) => {
                            const active = currentIndex === index;
                            return (
                                <div key={'card-image-' + image.name + index} onClick={() => {
                                    setCurrentIndex(index);
                                    ref.current?.goTo(index);
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
                                            border: active ? '2px solid #ddd' : '2px'
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