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
                    "Przykro nam, ale Hacknarök to konkurs drużynowy. Musisz posiadać drużynę by wziąć udział. Drużyny mogą składać się z 2 do 4 osób."
                }
            />
            <FaqAccordion
                question={"Czy będą nagrody?"}
                answer={
                    "Oczywiście! Na naszym hackathonie możesz wygrać nie tylko wieczną chwałę!"
                }
            />
            <FaqAccordion
                question={"Czy udział jest płatny?"}
                answer={"Nie, za wzięcie udziału nie zapłacisz ani grosza."}
            />
            <FaqAccordion
                question={"Jaki jest temat konkursu?"}
                answer={
                    "Podczas ceremoniii otwarcia, przed rozpoczęciem wydarzenia zostanie podany temat wszystkim uczestnikom. Będzie on na tyle uniwersalny, że każdy poczuje się komfortowo pisząc kod w wybranej przez siebie technologii."
                }
            />
            <FaqAccordion
                question={"Kto może wziąć udział w Hacknaröku?"}
                answer={
                    "Zasady są proste. W naszym konkursie mogą wziąć udział tylko osoby pełnoletnie. Nie musisz studiować na Akademii Górniczo-Hutniczej ani nawet w Krakowie, ale musisz posiadać aktualny status studenta."
                }
            />
            <FaqAccordion
                question={"Jak mam zgłosić chęć wzięcia udziału w Hacknaröku?"}
                answer={
                    "Gdy otwarte zostaną zapisy, na tej stronie oraz w wydarzeniu na Facebooku pojawią się odnośniki do formularza aplikacyjnego."
                }
            />
            <FaqAccordion
                question={"Jak mogę edytować swój formularz zgłoszeniowy?"}
                answer={
                    "Jeśli jest coś ważnego, czego nie umieściłeś w swojej aplikacji, napisz do nas na Facebooku albo wyślij maila na adres kontakt@hacknarok.pl."
                }
            />
            <FaqAccordion
                question={"Czy mogę wziąć udział jeśli nie jestem studentem?"}
                answer={
                    "Do wzięcia udziału będzie potrzebny jedynie Twój komputer oraz dużo zapału do pracy."
                }
            />
            <FaqAccordion
                question={"Co zrobić jeśli nie ma tu mojego pytania?"}
                answer={
                    "Możesz do nas napisać na Facebooku albo wysłać maila na adres kontakt@hacknarok.pl. Z chęcią odpowiemy na Twoje pytania!"
                }
            />
        </Content>
    );
}
