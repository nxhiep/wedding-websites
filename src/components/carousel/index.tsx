'use client'

import isPropValid from '@emotion/is-prop-valid';
import Image from 'next/image';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { StyleSheetManager } from 'styled-components';
import WebTitle from '../webTitle';
import Config from '@/config';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';
import LoadingWidget from '../loadingWidget';

const MyCarousel = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);
    if(!loaded) {
        return <LoadingWidget />
    }
    const carouselHeight = window.innerHeight - 200;
    const props: ReactElasticCarouselProps = {
        isRTL: false,
        showArrows: true,
        enableSwipe: false,
        enableMouseSwipe: false,
        pagination: false,
        // autoPlaySpeed: 5000,
        // enableAutoPlay: true,
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
                    right: props.type === 'NEXT' ? 0 : undefined
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
        <div style={{ position: 'relative' }}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <Carousel {...props}>
                    {[1, 2, 3, 4, 5, 6].map(item => {
                        return (
                            <div key={'item-' + item} className='banner-carousel-item'>
                                <div className='banner-slider'>
                                    <Image src={require(`../../app/images/photo${item}.jpg`)} alt={'Photo ' + item} style={{ width: '100%', height: carouselHeight, objectFit: 'cover' }} priority />
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </StyleSheetManager>
            <div style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%', top: 0, left: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 'calc(100% - 50px)' }}>
                    <WebTitle size={70} color='white' />
                    <div style={{ fontSize: 30, color: 'white', textAlign: 'center', letterSpacing: 5, marginBottom: 50 }}>{Config.description}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Countdown
                            date={1736150400000}
                            className='my-count-down'
                            renderer={(props) => {
                                return (
                                    <div className='count-down-content'>
                                        <div>
                                            <div>{props.days}</div>
                                            <div>Ngày</div>
                                        </div>
                                        <div>
                                            <div>{props.hours}</div>
                                            <div>Giờ</div>
                                        </div>
                                        <div>
                                            <div>{props.minutes}</div>
                                            <div>Phút</div>
                                        </div>
                                        <div>
                                            <div>{props.seconds}</div>
                                            <div>Giây</div>
                                        </div>
                                    </div>
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCarousel;