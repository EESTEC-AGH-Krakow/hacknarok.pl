import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { UnderlinedTitle } from "../components/Title";

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

const CarouselContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export default function Gallery() {
    const carouselContainerRef = useRef<HTMLDivElement>(null);
    const images = Array.from({ length: 26 }, (_, i) => i + 1);
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
            <div data-aos="fade-up">
                <UnderlinedTitle
                    text="Galeria"
                    textColor="light"
                    align="center"
                />
            </div>
            <CarouselContainer ref={carouselContainerRef} data-aos="fade-up">
                <Carousel
                    infiniteLoop
                    centerMode
                    showArrows
                    showStatus={false}
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
                        <img src="img/galery-hack9/1.webp" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/2.webp" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/3.webp" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/4.webp" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/5.webp" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/1.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/2.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/3.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/4.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/5.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/6.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/7.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/8.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/9.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/10.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/11.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/12.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/13.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/14.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/15.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/16.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/17.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/18.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/19.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/20.jpg" />
                    </div>
                    <div>
                        <img src="img/galery-hack9/21.jpg" />
                    </div>
                </Carousel>
            </CarouselContainer>
        </Content>
    );
}
