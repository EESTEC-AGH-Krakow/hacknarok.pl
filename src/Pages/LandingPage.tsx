import styled from "styled-components";
import ParallaxBackground from "./LandingPage/ParallaxBackground";

const Content = styled.div`
  position: relative;
  margin-top: -80px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and (max-width: 600px) {
    height: 450px;
  }
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

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

function LandingPage() {
  return (
    <Page>
      <ParallaxBackground />
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
  );
}

export default LandingPage;
