import styled from "styled-components";

const ParentsContainer = styled.div`
    margin-top: 100px;
    min-height: 100vh;
    width: 100%;
    display: flex;
`;

const ImgContainer = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: 100vh;
    float: left;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Image = styled.img`
    box-sizing: border-box;
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    width: 50%;
    float: left;
    padding: 50px;
    height: 100vh;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const HeaderContainer = styled.div`
    box-sizing: border-box;
    padding-bottom: 50px;
`;

const FakeContent = styled.div`
    box-sizing: border-box;
`;

export default function About() {
    return (
        <ParentsContainer>
            <TextContainer>
                <HeaderContainer>CZY JESTEŚ GOTOW NA WYZWANIE?</HeaderContainer>
                <FakeContent>
                    Na bardzo wazne i wymagajace wyzwanie. Ale spokojnie, bedzie
                    ekstra. To iscie nordyckie wyzwanie. Trwa w sumie 24h, ale
                    to mordeczko odespisz sobie potem.
                </FakeContent>
            </TextContainer>
            <ImgContainer>
                <Image src="laptop.png"></Image>
            </ImgContainer>
        </ParentsContainer>
    );
}
