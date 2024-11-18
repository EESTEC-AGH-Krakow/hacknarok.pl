import styled from "styled-components";
import { Button } from "../components/Button";
import { UnderlinedTitle } from "../components/Title";
import { useProgressiveImage } from "../hooks/useProgressiveImage";

const ParentsContainer = styled.div`
    margin-top: 100px;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(
        --background-color
    ); //needed for mix-blend-mode to work on the img

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Image = styled.img`
    box-sizing: border-box;
    height: 100%;
    mix-blend-mode: lighten;

    mask-image: radial-gradient(
        circle at 140% 70%,
        transparent 40%,
        #00000034 60%,
        rgba(0, 0, 0, 1) 100%
    );

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: initial;

        mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            transparent 80%
        );
    }
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 400px;
    right: 200px;

    @media only screen and (max-width: 600px) {
        position: relative;
        left: auto;
        right: auto;
        margin: 0;
        width: 80%;
        min-width: initial;
    }
`;

const FakeContent = styled.div`
    box-sizing: border-box;
    text-align: justify;
`;

const ShowOnMapButton = styled(Button)`
    margin-top: 50px;
`;

export default function Map() {
    const mapImg = useProgressiveImage(
        "jak_dojechac_zloty.png",
        // "map_thumb_5.png",
        // "map_thumb_10.png"
    );

    return (
        <ParentsContainer>
            <ImgContainer data-aos="fade-up">
                <Image src={mapImg}></Image>
            </ImgContainer>
            <TextContainer>
                <div data-aos="fade-left">
                    <UnderlinedTitle
                        text="Jak dojechać?"
                        textColor="light"
                        align="flex-end"
                    />
                </div>
                <FakeContent data-aos="fade-left">
                Wydarzenie odbędzie się w Krakowskim Parku Technologicznym, 
                który wspiera nas od pierwszej edycji. KPT to najbardziej 
                kompletny one-stop-shop dla biznesu w Polsce, gdzie przedsiębiorcy, 
                naukowcy i samorządowcy tworzą ekosystem rozwoju małopolskiej gospodarki. 
                Biurowiec zlokalizowany jest przy ul. Podole 60, na terenie krakowskiej dzielnicy Dębniki. 
                Niedaleko znajduje się przystanek autobusowy i tramwajowy Czerwone Maki P+R. 
                Nie zapewniamy parkingu uczestnikom wydarzenia. 
                Samochód będzie można zaparkować w miarę dostępności miejsc parkingowych nieopodal obiektu
                </FakeContent>
                <ShowOnMapButton
                    data-aos="fade-up"
                    onClick={() => {
                        window.open(
                            "https://goo.gl/maps/1pCQR5vRVgAHndsx8?coh=178571&entry=tt"
                        );
                    }}
                >
                    Pokaż na mapie
                </ShowOnMapButton>
            </TextContainer>
        </ParentsContainer>
    );
}
