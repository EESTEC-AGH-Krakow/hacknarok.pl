import styled from "styled-components";
import ParallaxBackground from "./LandingPage/ParallaxBackground";
import { Button } from "../components/Button";
import { RedLine } from "../components/Title";
import CountdownTimer from "../components/Countdown";

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
        margin-bottom: 60px;
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
    justify-content: center;

    @media only screen and (max-width: 600px) {
        flex: 0;
        max-width: 100px;
    }
`;

const Logo = styled.img`
    width: 200px;
    margin-top: -20px;

    @media only screen and (max-width: 600px) {
        max-width: 120px;
    }
`;

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Date = styled.h2`
    font-family: Montserrat;
    margin-bottom: 10px;
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

const Countdown = styled.h1`
    color: #ffffff;
    
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 300;
    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;
const Place = styled.p``;

const FormOpen = false;
const FormLink: string | undefined = "https://forms.gle/yg3CwS2Ed9RzZ9yX8";

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
                        <Date> 18-19 kwietnia</Date>
                        <RedLine />
                        {/* <Place>Lubicz Park</Place> */}
                        {/* <span><br></br> Zapisz się już dziś! Zapisy tylko do 16 marca! </span> */}
                        {FormOpen ? (
                            <Button
                                disabled={false}
                                onClick={() => window.open(FormLink)}
                            >
                                Zapisz się
                            </Button>
                        ) : (
                            <Button disabled={false} >Zapisy już wkrótce</Button>
                        )}
                    </EventPlaceInnerContainer>
                </EventPlaceContainer>
                <ApplyContainer
                    data-aos="fade-up"
                    data-aos-offset="1"
                    data-aos-delay="700"
                    data-aos-once
                >
                    <Countdown><CountdownTimer /></Countdown>
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
