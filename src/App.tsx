import { useEffect, useState } from "react";
import styled from "styled-components";

const Background = styled.div<{ offset: number }>`
  --offset-reduced: calc(${(props) => props.offset * 0.6}px);
  width: 100%;
  position: absolute;
  top: var(--offset-reduced);
  height: calc(700px - var(--offset-reduced));
  overflow-x: hidden;
  overflow-y: hidden;
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

const FakeContent = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  margin-top: -80px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`;

const ContentInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const ApplyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    font-size: 18px;
  }

  button {
    margin-top: 10px;
    font-family: Norse;
    font-size: 24px;
    background-color: white;
    color: black;
    border-radius: 15px;
    padding: 10px 30px 10px 30px;
  }
`;

const EventPlaceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EventPlaceInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-top: 0;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.img`
  width: 200px;
  margin-top: -20px;
`;

const ParallaxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
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
          <Background offset={offset}>
            <Clouds src="/clouds.jpg" />
            <TitleContainer>
              <Title>Hacknarök</Title>
            </TitleContainer>
          </Background>
          <MountainsContainer>
            <MountainBackdrop />
            <MountainsScreenLayer src="/mountains_sum_overlay.png" />
            <MountainsHardOverlay src="/mountains_sum_overlay.png" />
          </MountainsContainer>
        </ParallaxContainer>
        <Content>
          <ContentInner>
            <EventPlaceContainer>
              <EventPlaceInnerContainer>
                <h2>23-24 marca</h2>
                <span>Krakowski Park Technologiczny</span>
              </EventPlaceInnerContainer>
            </EventPlaceContainer>
            <ApplyContainer>
              <span>Zapisy do 17.01</span>
              <button>Zapisz się</button>
            </ApplyContainer>
            <LogoContainer>
              <Logo src="/logo_eestec.png" />
            </LogoContainer>
          </ContentInner>
        </Content>
      </Page>
      <FakeContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
        diam tincidunt, rhoncus tortor vitae, rutrum dolor. Curabitur et feugiat
        velit. Morbi nec erat nisl.
      </FakeContent>
    </>
  );
}

export default App;
