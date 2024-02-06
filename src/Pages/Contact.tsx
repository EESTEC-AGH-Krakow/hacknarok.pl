import { Grid } from "@mui/material";
import styled from "styled-components";
import CoordinatorCard, {
    CoordinatorCardProps,
} from "../components/CoordinatorCard";
import Footer from "../components/Footer";
import { UnderlinedTitle } from "../components/Title";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
`;

const TopPageSpacer = styled.div`
    height: 100px;

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`;

const GridContainer = styled.div`
    margin-top: 100px;
    min-height: 400px;
    width: 100%;
`;

const InternalGridContainer = styled.div`
    margin-left: 30px;
    margin-right: 30px;
`;

const FlexSpacer = styled.div`
    flex: 1;
`;

export default function Contact() {
    const coordinators: CoordinatorCardProps[] = [
        {
            name: "Konrad Maciejewski",
            email: "konrad.maciejewski@hacknarok.pl",
            position: "Koordynator ds. Promocji",
            src: "img/coordinators/hack8/konrad.JPG",
            placeholderSrc: "img/coordinators/julia_thumb_10.jpg",
            animationDelay: 0,
        },
        {
            name: "Jakub Kłoczko",
            email: "jakub.kloczko@hacknarok.pl",
            position: "Koordynator ds. Logistyki i Barteru",
            src: "img/coordinators/hack8/jakub.JPG",
            placeholderSrc: "img/coordinators/kacper_thumb_10.jpg",
            animationDelay: 100,
        },
        {
            name: "Angelika Żyła",
            email: "angelika.zyla@hacknarok.pl",
            position: "Koordynatorka Główna",
            src: "img/coordinators/hack8/angelika.JPG",
            placeholderSrc: "img/coordinators/natalia_thumb_10.jpg",
            animationDelay: 200,
        },
        {
            name: "Adrian Jaśkowiec",
            email: "adrian.jaskowiec@hacknarok.pl",
            position: "Koordynator ds. Kontaktu z Uczestnikami i Administracji",
            src: "img/coordinators/hack8/adrian.JPG",
            placeholderSrc: "img/coordinators/mikolaj_thumb_10.jpg",
            animationDelay: 300,
        },
        {
            name: "Wiktoria Góralczyk",
            email: "wiktoria.goralczyk@hacknarok.pl",
            position: "Koordynatorka ds. Fundraisingu",
            src: "img/coordinators/hack8/wiktoria.JPG",
            placeholderSrc: "img/coordinators/klaudia_thumb_10.jpg",
            animationDelay: 400,
        },
    ];

    return (
        <Content>
            <TopPageSpacer />
            <div data-aos="fade-up">
                <UnderlinedTitle
                    text="Kontakt"
                    textColor="light"
                    align="center"
                />
            </div>
            <GridContainer>
                <InternalGridContainer>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="baseline"
                        rowSpacing={5}
                        columnSpacing={5}
                    >
                        {coordinators.map((coordinator) => (
                            <CoordinatorCard
                                key={coordinator.name}
                                {...coordinator}
                            />
                        ))}
                    </Grid>
                </InternalGridContainer>
            </GridContainer>
            <FlexSpacer />
            <Footer />
        </Content>
    );
}
