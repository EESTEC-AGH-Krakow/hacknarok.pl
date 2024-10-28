import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import styled from "styled-components";
import {
    useProgressiveImage,
    useLoadImage,
} from "../../hooks/useProgressiveImage";
import hacknarokLogo from '../../../public/hacknarok_black.png';

const DisplaySnowflakes = true;

const Background = styled.div<{ offset: number }>`
    width: 100%;
    position: absolute;
    top: calc(${(props) => props.offset * 0.6}px);

    transition: all cubic-bezier(1, 0, 0, 1); //chosen very randomly but out of tested transitions it seemed the smoothest
`;

const Clouds = styled.img`
    width: 100%;
    min-width: 1600px;

    //these parameters are eyeballed. The idea is to make the clouds extend beyond the top of the screen,
    //so that the delay while scrolling doesn't show the background and instead shows part of the clouds
    margin-top: -420px;
    height: 1300px;
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

    background-color: #f1f0ee; //primary color of the clouds background so that the underneath matches
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
                    <Title>
                    <img 
                        src={hacknarokLogo} 
                        alt="Hacknarok Logo" 
                        style={{ 
                        width: '100px', 
                        height: 'auto', 
                        transform: 'scale(4.1)', // becouse of big background
                        transformOrigin: 'center' 
                        }} 
                    />
                    </Title>

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
