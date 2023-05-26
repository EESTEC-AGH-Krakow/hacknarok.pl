import styled from "styled-components";
import { UnderlinedTitle } from "../components/Title";

const ParentsContainer = styled.div`
    position: relative;
    margin-top: 100px;
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
    float: left;
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
    return (
        <ParentsContainer>
            <TextContainer>
                <div data-aos="fade-right">
                    <UnderlinedTitle
                        text="CZY JESTEŚ GOTÓW NA WYZWANIE?"
                        textColor="light"
                        align="flex-start"
                    />
                </div>
                <FakeContent data-aos="fade-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus magna neque, vulputate sed placerat eget, dignissim
                    eu neque. Nulla facilisi. Aliquam vulputate varius cursus.
                    Proin et pretium velit. Pellentesque imperdiet risus
                    suscipit elit maximus sollicitudin ut tristique odio. Donec
                    iaculis consectetur risus eu molestie. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Donec at nibh posuere, imperdiet nunc ac, finibus
                    neque.
                </FakeContent>
            </TextContainer>
            <ImgContainer data-aos="fade-up">
                <Image src="laptop.png"></Image>
            </ImgContainer>
        </ParentsContainer>
    );
}
