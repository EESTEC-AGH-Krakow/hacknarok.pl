import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Background = styled.div<{offset: number}>`
  width: 100%;
  position: absolute;
  top: calc(${props => props.offset * 0.6}px);
  height: 500px;
  overflow-x: hidden;
  overflow-y: visible;
`

const Clouds = styled.img`
  width: 100%;
  position: absolute;
  min-width: 1300px;
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`

const Title = styled.h1`
  position: relative;
  color: black;
  font-family: Norse;
  font-size: 100px;
`


const MountainsContainer = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 1000px;
  aspect-ratio: 3.305/1;
`

//Screen blend mode makes the mountains nicely blend into the background
const MountainsScreenLayer = styled.img`
  width: 100%;
  position: absolute;
  mix-blend-mode: screen;
`

//Hard overlay so that there is no screening effect on the clouds
const MountainsHardOverlay = styled.img`
  width: 100%;
  position: absolute;
  mask-image: linear-gradient(180deg, black 20%, transparent 70%);
`

const MountainBackdrop = styled.div`
  position:absolute;
  top: 20%;
  height: 80%;
  width: 100%;
  background-color: var(--background-color);
`

const FakeContent = styled.div`
  width: 100%;
  height: 200vh;
`

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Background offset={offset}>
        <Clouds src="/clouds.jpg"/>
        <TitleContainer>
          <Title>Hacknarök</Title>
        </TitleContainer>
      </Background>
      <MountainsContainer>
        <MountainBackdrop/>
        <MountainsScreenLayer src="/mountains_sum_overlay.png"/>
        <MountainsHardOverlay src="/mountains_sum_overlay.png"/>
      </MountainsContainer>
      <FakeContent/>
    </>
  )
}

export default App
