'use client'

import { JSONData } from '@/repositories/json';
import isPropValid from '@emotion/is-prop-valid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { FC } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { StyleSheetManager } from 'styled-components';

const AlbumsCarousel:FC<({ onSelectImage: (name: string) => void })> = ({ onSelectImage }) => {
    const data = JSONData.getAllAlbums();
    const props: ReactElasticCarouselProps = {
        isRTL: false,
        showArrows: true,
        enableSwipe: false,
        enableMouseSwipe: false,
        pagination: false,
        enableAutoPlay: true,
        renderArrow: (props) => {
            return (
                <div style={{
                    position: 'absolute',
                    top: 'calc(50% - 25px)',
                    color: 'white',
                    zIndex: 2,
                    width: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    left: props.type === 'PREV' ? 0 : undefined,
                    right: props.type === 'NEXT' ? 0 : undefined,
                }} onClick={props.onClick}>
                    {props.type === 'NEXT' ? (
                        <ArrowForwardIosIcon color='inherit' />
                    ) : (
                        <ArrowBackIosIcon color='inherit' />
                    )}
                </div>
            );
        }
    }
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <Carousel {...props}>
                {Object.keys(data).map(name => {
                    const list = data[name];
                    const item = data[name]?.find((a) => a.type === 'xs');
                    if(list && item) {
                        return (
                            <div key={'preview-item-' + name} className='album-carousel-item'>
                                <div className='banner-slider'>
                                    <Image 
                                        src={item.url} 
                                        alt={'Photo ' + item.name} 
                                        width={item.width} height={item.height} 
                                        style={{ 
                                            width: item.width, height: item.height, objectFit: 'cover' 
                                        }} 
                                        priority 
                                        onClick={() => onSelectImage(name)}
                                    />
                                </div>
                            </div>
                        );
                    }
                })}
            </Carousel>
        </StyleSheetManager>
    );
}

export default AlbumsCarousel;