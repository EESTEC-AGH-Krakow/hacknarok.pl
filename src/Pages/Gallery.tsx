import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Title } from "../components/Title";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useRef, useState } from "react";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    @media only screen and (max-width: 600px) {
        height: initial;
        padding-bottom: 60px;
    }
`;

const TopPageSpacer = styled.div`
    height: 100px;

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`;

const CenteredTitle = styled(Title)`
    text-align: center;
    color: white;
`;

const CarouselContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export default function Gallery() {
    const carouselContainerRef = useRef<HTMLDivElement>(null);

    const [centerSlidePercentage, setCenterSlidePercentage] = useState(60);

    useEffect(() => {
        if (!carouselContainerRef.current) return; // wait for the elementRef to be available
        const resizeObserver = new ResizeObserver(([entry]) => {
            const size = entry.contentBoxSize;

            setCenterSlidePercentage(
                getCenterSlidePercentage(size[0].inlineSize, size[0].blockSize)
            );
        });
        resizeObserver.observe(carouselContainerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const getCenterSlidePercentage = (
        containerWidth: number,
        containerHeight: number
    ) => {
        const result = (containerHeight / containerWidth) * 100;

        if (result > 90) return 90;

        if (result < 60) return 60;

        return result;
    };

    return (
        <Content>
            <TopPageSpacer />
            <CenteredTitle>Galeria</CenteredTitle>
            <CarouselContainer ref={carouselContainerRef}>
                <Carousel
                    infiniteLoop
                    centerMode
                    showArrows
                    showStatus
                    showIndicators
                    centerSlidePercentage={centerSlidePercentage}
                    showThumbs={false}
                    useKeyboardArrows
                    autoPlay
                    stopOnHover={true}
                    dynamicHeight={true}
                    swipeable
                    emulateTouch
                    interval={5000}
                >
                    <div>
                        <img src="img/1.webp" />
                    </div>
                    <div>
                        <img src="img/2.webp" />
                    </div>
                    <div>
                        <img src="img/3.webp" />
                    </div>
                    <div>
                        <img src="img/4.webp" />
                    </div>
                    <div>
                        <img src="img/5.webp" />
                    </div>
                    <div>
                        <img src="img/6.webp" />
                    </div>
                </Carousel>
            </CarouselContainer>
        </Content>
    );
}
