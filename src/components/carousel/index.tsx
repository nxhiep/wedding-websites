'use client'

import isPropValid from '@emotion/is-prop-valid';
import Image from 'next/image';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { StyleSheetManager } from 'styled-components';

const MyCarousel = () => {
    const props: ReactElasticCarouselProps = {
        isRTL: false,
        showArrows: false,
        enableSwipe: false,
        enableMouseSwipe: false,
        autoPlaySpeed: 5000,
        enableAutoPlay: true,
    }
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <Carousel {...props}>
                { [1, 2, 3, 4, 5, 6].map(item => {
                    return (
                        <div key={'item-' + item} style={{ height: 500 }}>
                            <Image src={require(`../../app/images/photo${item}.jpg`)} alt={'Photo ' + item} style={{ height: 500, objectFit: 'cover' }} />
                        </div>
                    );
                }) }
            </Carousel>
        </StyleSheetManager>
    );
}

export default MyCarousel;