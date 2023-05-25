import styled from "styled-components";
import { Title } from "../components/Title";
import { Button } from "../components/Button";

const ParentsContainer = styled.div`
    margin-top: 100px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    left: 0;
    height: 100%;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Image = styled.img`
    box-sizing: border-box;
    height: 100%;

    mask-image: radial-gradient(
        circle at 140% 70%,
        transparent 40%,
        #00000034 60%,
        rgba(0, 0, 0, 1) 100%
    );
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin-left: 100px;
    right: 200px;
    float: left;

    @media only screen and (max-width: 600px) {
        position: relative;
        left: auto;
        right: auto;
        margin: 0;
        width: 80%;
    }
`;

const HeaderContainer = styled(Title)`
    color: white;
    text-align: center;
`;

const FakeContent = styled.div`
    box-sizing: border-box;
    text-align: justify;
`;

const ShowOnMapButton = styled(Button)`
    margin-top: 50px;
`;

export default function Map() {
    return (
        <ParentsContainer>
            <ImgContainer>
                <Image src="map.png"></Image>
            </ImgContainer>
            <TextContainer>
                <HeaderContainer>Jak dojechać?</HeaderContainer>
                <FakeContent>
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
                <ShowOnMapButton
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
