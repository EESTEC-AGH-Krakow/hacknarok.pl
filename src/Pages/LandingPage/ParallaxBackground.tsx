import { useState, useEffect } from "react";
import styled from "styled-components";

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
`;

//Screen blend mode makes the mountains nicely blend into the background
const MountainsScreenLayer = styled.img`
    width: 100%;
    mix-blend-mode: screen;
`;

//Hard overlay so that there is no screening effect on the clouds
const MountainsHardOverlay = styled.img`
    position: absolute;
    mask-image: linear-gradient(180deg, black 20%, transparent 70%);
    width: 100%;
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

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <ParallaxContainer>
            <Background offset={offset}>
                <Clouds src="/clouds.jpg" />
                <TitleContainer
                    data-aos="fade-up"
                    data-aos-offset="1"
                    data-aos-delay="500"
                    data-aos-once
                >
                    <Title>Hacknarök</Title>
                </TitleContainer>
            </Background>
            <MountainsContainer>
                <MountainBackdrop />
                <MountainsScreenLayer src="/mountains_sum_overlay.png" />
                <MountainsHardOverlay src="/mountains_sum_overlay.png" />
            </MountainsContainer>
        </ParallaxContainer>
    );
}

export default ParallaxBackground;
