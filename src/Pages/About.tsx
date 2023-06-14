import styled from "styled-components";
import { UnderlinedTitle } from "../components/Title";
import { useProgressiveImage } from "../hooks/useProgressiveImage";

const ParentsContainer = styled.div`
    position: relative;
    margin-top: 40px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const ImgContainer = styled.div`
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

const TextContainer = styled.div`
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

const FakeContent = styled.div`
    box-sizing: border-box;
    text-align: justify;
`;

export default function About() {
    const laptopImg = useProgressiveImage(
        "laptop.png",
        "laptop_thumb_5.png",
        "laptop_thumb_10.png"
    );

    return (
        <ParentsContainer>
            <ImgContainer data-aos="fade-up">
                <Image src={laptopImg}></Image>
            </ImgContainer>
            <TextContainer>
                <div data-aos="fade-right">
                    <UnderlinedTitle
                        text="CZY JESTEŚ GOTÓW NA WYZWANIE?"
                        textColor="light"
                        align="flex-start"
                    />
                </div>
                <FakeContent data-aos="fade-right">
                    Chwyć klawiaturę w dłoń i wyrusz w 24-godzinną podróż po
                    świecie kodu. Tu walka odbywa się z wykorzystaniem siły
                    linijek kodu, które napiszesz razem z Twoim zespołem. Czy
                    uda Ci się stworzyć coś niepowtarzalnego? Dołącz do
                    wydarzenia i przekonaj się sam! W trakcie hackathonu Twoja
                    przestrzeń zamieni się w arenę z atmosferą sprzyjającą
                    niemal boskim, twórczym siłom. Obecni mentorzy będą gotowi
                    znaleźć wyjaśnienie na każdą wątpliwość. Nie przegap okazji
                    i zapisz się już dziś!
                </FakeContent>
            </TextContainer>
        </ParentsContainer>
    );
}
