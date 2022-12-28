import { useEffect, useState } from "react";
import styled from "styled-components";

const Background = styled.div<{ offset: number }>`
  width: 100%;
  position: absolute;
  top: calc(${(props) => props.offset * 0.6}px);
  height: 500px;
  overflow-x: hidden;
  overflow-y: visible;
`;

const Clouds = styled.img<{ offset: number }>`
  --offset-reduced: calc(${(props) => props.offset * 0.6}px);
  width: 100%;
  position: absolute;
  top: var(--offset-reduced);
  min-width: 1600px;
  height: calc(700px - var(--offset-reduced));
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Title = styled.h1`
  position: relative;
  color: black;
  font-family: Norse;
  font-size: 100px;
`;

const MountainsContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

//Screen blend mode makes the mountains nicely blend into the background
const MountainsScreenLayer = styled.img`
  width: 100%;
  mix-blend-mode: screen;
  min-width: 1600px;
`;

//Hard overlay so that there is no screening effect on the clouds
const MountainsHardOverlay = styled.img`
  position: absolute;
  mask-image: linear-gradient(180deg, black 20%, transparent 70%);
  width: 100%;
  min-width: 1600px;
`;

const MountainBackdrop = styled.div`
  --height: 80%;
  position: absolute;
  width: 100%;
  height: var(--height);
  top: calc(100% - var(--height));
  background-color: var(--background-color);
`;

const FakeContent = styled.div`
  width: 600px;
  height: 200vh;
  background-color: aquamarine;
`;

const Content = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
`;

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

const ParallaxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Page>
        <ParallaxContainer>
          <Clouds src="/clouds.jpg" offset={offset} />
          <MountainsContainer>
            <MountainBackdrop />
            <MountainsScreenLayer src="/mountains_sum_overlay.png" />
            <MountainsHardOverlay src="/mountains_sum_overlay.png" />
          </MountainsContainer>
        </ParallaxContainer>
        <Content />
      </Page>
      <FakeContent />
    </>
  );
}

export default App;
