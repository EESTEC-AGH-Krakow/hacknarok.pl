import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import styled from "styled-components";
import {
    useProgressiveImage,
    useLoadImage,
} from "../../hooks/useProgressiveImage";

const DisplaySnowflakes = true;

const Background = styled.div<{ offset: number }>`
    width: 100%;
    position: absolute;
    top: calc(${(props) => props.offset * 0.6}px);
`;

const Clouds = styled.img`
    width: 100%;
    min-width: 1600px;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const Title = styled.h1`
    color: black;
    font-family: Norse;
    font-size: 100px;

    @media only screen and (max-width: 600px) {
        font-size: 80px;
    }
`;

const MountainsContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    min-width: 1200px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        height: 50%;
        object-fit: contain;
    }
`;

//Screen blend mode makes the mountains nicely blend into the background
const MountainsScreenLayer = styled.img`
    width: 100%;
    mix-blend-mode: screen;

    @media only screen and (max-width: 600px) {
        height: 100%;
        width: fit-content;
    }
`;

//Hard overlay so that there is no screening effect on the clouds
const MountainsHardOverlay = styled.img`
    position: absolute;
    mask-image: linear-gradient(180deg, black 20%, transparent 70%);
    width: 100%;

    @media only screen and (max-width: 600px) {
        height: 100%;
        width: fit-content;
    }
`;

const MountainBackdrop = styled.div`
    --height: 80%;
    position: absolute;
    width: 100%;
    height: var(--height);
    top: calc(100% - var(--height));
    background-color: var(--background-color);
`;

const ParallaxContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    user-select: none;
`;

function ParallaxBackground() {
    const [offset, setOffset] = useState(0);

    const cloudsImg = useProgressiveImage(
        "/clouds.jpg",
        "/clouds_thumb_10.jpg"
    );

    const mountainsImg = useProgressiveImage(
        "/mountains_sum_overlay.png",
        "/mountains_sum_overlay_thumb_5.png",
        "/mountains_sum_overlay_thumb_10.png"
    );

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // without below methods on mobile there are too many and too fast snowflakes
    const getFarSnowFlakeCount = (): number => {
        return window.outerWidth * 0.7;
    };

    const getCloseSnowFlakeCount = (): number => {
        return window.outerWidth * 0.05;
    };

    const getSnowSpeed = (): [number, number] => {
        return [
            (window.outerWidth / 1920) * 1.0,
            (window.outerWidth / 1920) * 3.0,
        ];
    };

    return (
        <ParallaxContainer>
            <Background offset={offset}>
                <Clouds src={cloudsImg} />
                <TitleContainer
                    data-aos="fade-up"
                    data-aos-offset="1"
                    data-aos-delay="500"
                    data-aos-once
                >
                    <Title>Hacknarök</Title>
                </TitleContainer>
                {DisplaySnowflakes && (
                    <Snowfall
                        color="white"
                        snowflakeCount={getFarSnowFlakeCount()}
                        radius={[0.3, 1.5]}
                        speed={getSnowSpeed()}
                    />
                )}
            </Background>
            <MountainsContainer>
                <MountainBackdrop />
                <MountainsScreenLayer src={mountainsImg} />
                <MountainsHardOverlay src={mountainsImg} />
            </MountainsContainer>
            {DisplaySnowflakes && (
                <Snowfall
                    color="white"
                    snowflakeCount={getCloseSnowFlakeCount()}
                    style={{ height: "70%" }}
                    radius={[1, 3]}
                    speed={getSnowSpeed()}
                />
            )}
        </ParallaxContainer>
    );
}

export default ParallaxBackground;
