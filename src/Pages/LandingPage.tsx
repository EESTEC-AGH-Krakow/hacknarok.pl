import styled from "styled-components";
import ParallaxBackground from "./LandingPage/ParallaxBackground";
import { Button } from "../components/Button";

const Content = styled.div`
    position: relative;
    margin-top: -80px;
    width: 80%;
    height: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 600px) {
        height: 450px;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 50px;
    }
`;

const ApplyContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media only screen and (max-width: 600px) {
        flex: 0;
        margin: 20px;
    }

    span {
        font-size: 18px;
    }
`;

const EventPlaceContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media only screen and (max-width: 600px) {
        flex: 0;
    }
`;

const EventPlaceInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        margin-top: 0;

        @media only screen and (max-width: 600px) {
            font-size: 20px;
            margin: 0;
        }
    }
`;

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 600px) {
        flex: 0;
    }
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
`;

function LandingPage() {
    return (
        <Page>
            <ParallaxBackground />
            <Content>
                <EventPlaceContainer>
                    <EventPlaceInnerContainer
                        data-aos="fade-up"
                        data-aos-offset="1"
                        data-aos-delay="500"
                        data-aos-once
                    >
                        <h2>23-24 marca</h2>
                        <span>Krakowski Park Technologiczny</span>
                    </EventPlaceInnerContainer>
                </EventPlaceContainer>
                <ApplyContainer
                    data-aos="fade-up"
                    data-aos-offset="1"
                    data-aos-delay="700"
                    data-aos-once
                >
                    <span>Zapisy do 17.01</span>
                    <Button>Zapisz się</Button>
                </ApplyContainer>
                <LogoContainer>
                    <Logo
                        src="/logo_eestec.png"
                        data-aos="fade-up"
                        data-aos-offset="1"
                        data-aos-delay="900"
                        data-aos-once
                    />
                </LogoContainer>
            </Content>
        </Page>
    );
}

export default LandingPage;
