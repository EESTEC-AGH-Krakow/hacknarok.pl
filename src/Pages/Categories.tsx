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
                Nie ma znaczenia, czy jesteś weteranem programowania, czy dopiero zaczynasz swoją przygodę w tej dziedzinie - Kategoria Główna oferuje coś dla każdego. Od skomplikowanych problemów algorytmicznych, które będą testować Twoje umiejętności logicznego myślenia, po tworzenie zaawansowanych aplikacji, które wymagają nie tylko umiejętności technicznych, ale również kreatywności i innowacyjności.
Uczestnicy będą mieli wolność w wyborze technologii, co pozwala na pełną adaptację do wybranych zadań. Spodziewamy się zobaczyć projekty wykorzystujące najpopularniejsze i najnowocześniejsze technologie webowe i języki programowania, takie jak: React, React Native, Angular, Flutter, Python, Java, czy C#. Ta swoboda wyboru technologii nie tylko umożliwia uczestnikom pokazanie ich technicznego kunsztu, ale również zachęca do eksplorowania nowych obszarów i rozwijania swoich umiejętności.

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
                <FakeContent data-aos="fade-left">
                Kategoria "Embedded" otwiera drzwi do fascynującego świata systemów wbudowanych i Internetu Rzeczy (IoT). Jest to kraina, gdzie inżynieria spotyka się z innowacją, a kreatywność łączy się z techniczną precyzją.
Ta kategoria jest dedykowana pasjonatom systemów wbudowanych. Uczestnicy mają niepowtarzalną okazję do zaprezentowania swoich umiejętności w projektowaniu, programowaniu oraz integracji złożonych systemów opartych na mikrokontrolerach i mikroprocesorach. Wyzwania te będą stanowiły prawdziwe poligon doświadczalny dla umysłów inżynieryjnych, pragnących wykorzystać swoją wiedzę w praktycznych, często złożonych aplikacjach.
W tej kategorii, uczestnicy będą mogli zanurzyć się w świecie inteligentnych urządzeń, automatyzacji domowej, robotyki, i oczywiście, Internetu Rzeczy. Wyzwania te mogą obejmować wszystko - od tworzenia oprogramowania dla inteligentnych gadżetów, przez automatyzację procesów, po skomplikowane systemy robotyczne. To idealna arena dla tych, którzy pragną połączyć swoją pasję do technologii z realnymi, fizycznymi systemami.
W ramach tej kategorii, spodziewamy się głównie projektów wykonanych przy użyciu języków: C i C++. 
Organizator wydarzenia zapewnia: . Istnieje również możliwość… swojego sprzętu
Kategoria "Embedded" to nie tylko wyzwanie techniczne, ale również szansa na eksplorowanie nowych horyzontów w projektowaniu i implementacji systemów działających na rzeczywistym sprzęcie.

                </FakeContent>
            </TextContainerRight>
        </ParentsContainerRight>
        </>    
    );
}
