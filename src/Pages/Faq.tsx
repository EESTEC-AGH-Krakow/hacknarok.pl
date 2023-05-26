import styled from "styled-components";
import FaqAccordion from "../components/FaqAccordion";
import { UnderlinedTitle } from "../components/Title";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    padding-bottom: 60px;
    overflow: hidden;
`;

const TopPageSpacer = styled.div`
    height: 100px;

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`;

export default function Faq() {
    return (
        <Content>
            <TopPageSpacer />
            <div data-aos="fade-up">
                <UnderlinedTitle text="FAQ" textColor="light" align="center" />
            </div>
            <FaqAccordion
                question={"Czy mogę zgłosić się bez drużyny?"}
                answer={
                    "Lorem ipsum sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit."
                }
            />
            <FaqAccordion
                question={"Jakie będą nagrody?"}
                answer={
                    "Lorem ipsum sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit."
                }
            />
            <FaqAccordion
                question={"Czy udział jest płatny?"}
                answer={
                    "Lorem ipsum sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit."
                }
            />
            <FaqAccordion
                question={"Jaki jest temat konkursu?"}
                answer={
                    "Lorem ipsum sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit."
                }
            />
            <FaqAccordion
                question={"Czy mogę wziąć udział jeśli nie jestem studentem?"}
                answer={
                    "Lorem ipsum sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit. Etiam sit dolor amet, consectetur adipiscing elit."
                }
            />
        </Content>
    );
}
