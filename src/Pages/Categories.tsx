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

const ParentsContainerRight = styled.div`
    position: relative;
    margin-top: 40px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
const ImgContainer = styled.div<{ alignRight?: boolean }>`
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    right: ${props => (props.alignRight ? '0' : 'auto')};
    left: ${props => (props.alignRight ? 'auto' : '0')};
    width: 100%;
    height: 100%;
    background-color: var(
        --background-color
    ); //needed for mix-blend-mode to work on the img

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;
const ImgContainerRight = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 60%;
    top: 0;
    left: calc(40% - 100px);
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;
const ImageRight = styled.img`
    box-sizing: border-box;
    height: 100%;
    mix-blend-mode: lighten;

    mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 50%,
        transparent 100%
    );

    @media only screen and (max-width: 600px) {
        min-width: initial;
    }
`;
const Image = styled.img`
    box-sizing: border-box;
    width: 100%;
    min-width: 600px;
    overflow: hidden;

    mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 1) 50%,
        transparent 100%
    );

    @media only screen and (max-width: 600px) {
        min-width: initial;
    }
`;
const TextContainerRight = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 40%;
    margin-right: 100px;
    right: 100px;
    float: left;
    left: 100px;

    @media only screen and (max-width: 600px) {
        position: relative;
        left: auto;
        right: auto;
        margin: 0;
        width: 80%;
    }
`;
const TextContainer = styled.div<{ alignRight?: boolean }>`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 400px;
    right: ${props => (props.alignRight ? '200px' : 'auto')};
    left: ${props => (props.alignRight ? 'auto' : '200px')};

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
const FakeContentRight = styled.div`
    box-sizing: border-box;
    text-align: justify;
`;

const ShowOnMapButton = styled(Button)`
    margin-top: 50px;
`;

export default function Categories() {
    const mapImgog = useProgressiveImage(
        "ogolna.png",
        // "map_thumb_5.png",
        // "map_thumb_10.png"
    );
    const mapImgem = useProgressiveImage(
        "embedded.png",
        // "map_thumb_5.png",
        // "map_thumb_10.png"
    );

    return (
        <>
        <ParentsContainer>
            <ImgContainer data-aos="fade-up">
                <ImageRight src={mapImgog}></ImageRight>
            </ImgContainer>
            <TextContainer alignRight>
                <div data-aos="fade-left">
                    <UnderlinedTitle
                        text="Kategoria Programistyczna"
                        textColor="light"
                        align="flex-end"
                    />
                </div>
                <FakeContent data-aos="fade-left">

                Niezależnie od tego, czy jesteś doświadczonym programistą czy dopiero zaczynasz swoją przygodę z kodowaniem, kategoria główna  - Programistyczna oferuje coś dla każdego. Zaprasza do pokonania wyzwań, począwszy od skomplikowanych problemów algorytmicznych, które sprawdzą Twoje umiejętności logicznego myślenia, aż po tworzenie zaawansowanych aplikacji, które wymagają nie tylko umiejętności technicznych, ale również kreatywności i innowacyjnego podejścia.
Uczestnicy mają pełną swobodę w wyborze technologii, co pozwala dostosować się do wielu zadań. Oczekujemy, że projekty będą wykorzystywać najpopularniejsze i najnowocześniejsze technologie webowe oraz różnorodne języki programowania, takie jak React, React Native, Angular, Flutter, Python, Java czy C#. Ta elastyczność nie tylko umożliwia uczestnikom wykazanie się technicznym kunsztem, ale także zachęca do eksploracji nowych obszarów i rozwijania swoich umiejętności.


                </FakeContent>
            </TextContainer>
        </ParentsContainer>
        <ParentsContainerRight>
            <ImgContainerRight data-aos="fade-up">
                <Image src={mapImgem}></Image>
            </ImgContainerRight>
            <TextContainerRight >
                <div data-aos="fade-left">
                    <UnderlinedTitle
                        text="Kategoria Embedded"
                        textColor="light"
                        align="flex-end"
                    />
                </div>
                <FakeContentRight data-aos="fade-right">
                Kategoria Embedded otwiera drzwi do fascynującego świata systemów wbudowanych i Internetu Rzeczy (IoT), gdzie technologia splata się z rzeczywistością poprzez zastosowanie różnorodnych czujników, modułów Bluetooth, GPS, WiFi czy też magistrali CAN. To miejsce, gdzie inżynieria spotyka się z innowacją, a kreatywność łączy się z techniczną precyzją.
Dedykowana pasjonatom systemów wbudowanych, kategoria oferuje wyjątkową okazję do demonstracji umiejętności w projektowaniu, programowaniu i integracji skomplikowanych systemów opartych na mikroprocesorach. Wyzwania, jakie stawia, stanowią prawdziwe pole doświadczalne dla umysłów inżynieryjnych, pragnących wykorzystać swoją wiedzę w praktycznych, często złożonych aplikacjach. Mogą obejmować szeroki zakres tematyczny, począwszy od tworzenia oprogramowania dla inteligentnych urządzeń, poprzez automatyzację procesów, aż po rozwinięte systemy robotyczne. To idealne miejsce dla entuzjastów, którzy pragną połączyć swoją pasję do technologii z realnymi, fizycznymi systemami. W ramach tej kategorii, projekty powinny być głównie realizowane przy użyciu języków programowania takich jak C i C++.


                </FakeContentRight>
            </TextContainerRight>
        </ParentsContainerRight>
        </>    
    );
}
