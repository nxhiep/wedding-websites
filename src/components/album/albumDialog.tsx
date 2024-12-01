'use client';

import ImageData from '@/models/imageData';
import isPropValid from '@emotion/is-prop-valid';
import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { StyleSheetManager } from 'styled-components';
import ReactElasticCarousel, { ReactElasticCarouselProps } from '../react-elastic-carousel';

const AlbumDialog:FC<({ images: ImageData[], initialActiveIndex: number, onHide: () => void })> = ({ images, initialActiveIndex, onHide }) => {
    const props: ReactElasticCarouselProps = {
        isRTL: false,
        showArrows: true,
        enableSwipe: false,
        enableMouseSwipe: false,
        pagination: false,
        enableAutoPlay: true,
        autoPlaySpeed: 5000,
        initialActiveIndex: initialActiveIndex < 0 ? 0 : initialActiveIndex,
        onChange: (item, index) => {
            console.log("item", item, index)
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
                        {images.map((image, index) => {
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
                <Button variant='contained' onClick={() => {
                    ref.current?.goTo(3);
                }}>
                    Test
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={onHide} variant="outlined">Đóng</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlbumDialog;