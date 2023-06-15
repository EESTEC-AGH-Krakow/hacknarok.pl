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
            name: "Julia Zajchowska",
            position: "Koordynator ds. Promocji",
            src: "img/coordinators/julia.jpg",
            placeholderSrc: "img/coordinators/julia_thumb_10.jpg",
            animationDelay: 0,
        },
        {
            name: "Kacper Iwicki",
            position: "Koordynator ds. Logistyki i Barteru",
            src: "img/coordinators/kacper.jpg",
            placeholderSrc: "img/coordinators/kacper_thumb_10.jpg",
            animationDelay: 100,
        },
        {
            name: "Natalia Fitowska",
            position: "Koordynator Główny",
            src: "img/coordinators/natalia.jpg",
            placeholderSrc: "img/coordinators/natalia_thumb_10.jpg",
            animationDelay: 200,
        },
        {
            name: "Mikołaj Wyka",
            position: "Koordynator ds. Kontaktu z Uczestnikami i Administracji",
            src: "img/coordinators/mikolaj.jpg",
            placeholderSrc: "img/coordinators/mikolaj_thumb_10.jpg",
            animationDelay: 300,
        },
        {
            name: "Klaudia Dyl",
            position: "Koordynator ds. Pozyskiwania funduszy",
            src: "img/coordinators/klaudia.jpg",
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
