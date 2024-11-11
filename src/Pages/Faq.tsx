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
                question={"Czy Hacknarök jest dla mnie?"}
                answer={
                    "Oczywiście! Hacknarök jest dla każdego, kto pasjonuje się programowaniem, uwielbia wyzwania i chce rozwijać swoje umiejętności. Nasz maraton programistyczny jest otwarty dla uczestników o różnym stopniu zaawansowania, począwszy od początkujących programistów po doświadczonych developerów. Zapraszamy miłośników kreatywnego, logicznego myślenia, rozwiązywania problemów i wdrażania innowacyjnych pomysłów."
                }
            />
            <FaqAccordion
                question={"Czy mogę zgłosić się bez drużyny?"}
                answer={
                    "Przykro nam, ale Hacknarök to konkurs drużynowy. Musisz zebrać drużynę, by wziąć udział. Spróbuj zachęcić swoich znajomych!."
                }
            />
            <FaqAccordion
                question={"Ile osób może liczyć zespół?"}
                answer={
                    "Drużyny mogą liczyć od 3 do 4 osób dla kategorii programistycznej i 4 osoby dla kategorii mobilnej rozszerzonej rzeczywistości."
                }
            />
            <FaqAccordion
                question={"Czy będą nagrody?"}
                answer={
                    "Pewnie, że tak! Przy współpracy z naszymi partnerami zapewnimy, aby śmiałkowie którzy przetrwają Ragnarok zostali odpowiednio docenieni!"
                }
            />
            <FaqAccordion
                question={"Czy udział jest płatny?"}
                answer={"Nie, zarówno w Hackathonie, jak i we wszystkich pobocznych atrakcjach. Warunkiem uczestnictwa jest otrzymanie maila z potwierdzeniem wyboru waszego zespołu."}
            />
            <FaqAccordion
                question={"Jaki jest temat konkursu?"}
                answer={
                    "Dla każdej kategorii będzie inny temat konkursu. Podczas ceremonii otwarcia, przed rozpoczęciem wydarzenia zostanie podany temat wszystkim uczestnikom. Będzie on na tyle uniwersalny, że każdy poczuje się komfortowo pisząc kod w wybranej przez siebie technologii"
                }
            />
            <FaqAccordion
                question={"Kto może wziąć udział?"}
                answer={
                    "Uczestnikami konkursu muszą być pełnoletnie osoby z ważnym statusem studenta lub legitymacją szkolną. Natomiast na samo wydarzenie zapraszamy wszystkich zainteresowanych, niezależnie od wieku."
                }
            />
            <FaqAccordion
                question={"Jak można zgłosić chęć uczestnictwa?"}
                answer={
                    "Po zapoznaniu się z regulaminem wydarzenia, możesz przejść do wypełnienia formularza aplikacyjnego. Prosimy o dokładne wypełnianie formularza aplikacyjnego, w tej części to my chcemy dowiedzieć się więcej o Was! Jeśli Wasza drużyna zostanie wybrana, dostaniecie maila z potwierdzeniem udziału w Hackathonie."
                }
            />
            <FaqAccordion
                question={"Czy można edytować swój formularz zgłoszeniowy?"}
                answer={
                    "Jeśli pominęliście ważną część w swojej aplikacji, albo zaszły jakieś zmiany napiszcie do nas niezwłocznie na Facebook’u lub wyślijcie maila na adres: kontakt@hacknarok.pl."
                }
            />
            <FaqAccordion
                question={"Co muszę mieć ze sobą?"}
                answer={
                    "Przede wszystkim – pozytywne nastawienie i motywację do działania. Na pewno przyda się laptop/komputer stacjonarny i zasilacz, w razie kryzysu – powerbanki. Jeśli cenisz sobie komfort pracy, weź ze sobą drugi monitor. Warto też mieć założone konto na platformie GitHub. Pamiętaj o tym, że to 24-godzinny maraton programistyczny, dlatego zabierz ze sobą śpiwór/koc i poduszkę, przyda się gdy Twój organizm będzie potrzebował regeneracyjnej drzemki. Jedzenie również będzie zapewnione na miejscu. Dla uczestników przewidziano obiad, kolację i śniadanie. Pomiędzy posiłkami w wyznaczonych miejscach będą przekąski, zupki instant, kawa, herbata, napoje."
                }
            />
            <FaqAccordion
                question={"Na czym polega wsparcie mentorów na wydarzeniu?"}
                answer={
                    "Mentorzy wspierają zespoły czysto technicznie lub motywacyjnie. Są to osoby z wieloletnim doświadczeniem – nauczyciele akademiccy z AGH, przedstawiciele firm IT, reprezentanci kół naukowych."
                }
            />
            <FaqAccordion
                question={"Co zrobić jeśli nie ma tu mojego pytania?"}
                answer={
                    "Nie stresuj się, napisz do nas na Facebook’u lub na adres: kontakt@hacknarok.pl. Chętnie odpowiemy na wszystkie pytania!"
                }
            />
        </Content>
    );
}
