import styled from "styled-components";
import { Title } from "../components/Title";
import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import CoordinatorCard from "../components/CoordinatorCard";

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

const CenteredTitle = styled(Title)`
    text-align: center;
    color: white;
`;

const GridContainer = styled.div`
    margin-top: 100px;
    padding-left: 30px;
    padding-right: 30px;
`;

const FlexSpacer = styled.div`
    flex: 1;
`;

export default function Contact() {
    return (
        <Content>
            <TopPageSpacer />
            <CenteredTitle data-aos="fade-up">KONTAKT</CenteredTitle>
            <GridContainer>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="baseline"
                    rowSpacing={5}
                    columnSpacing={5}
                >
                    <CoordinatorCard
                        name="Julia Zajchowska"
                        position="Koordynator ds. Promocji"
                        src="img/coordinators/julia.jpg"
                        animationDelay={0}
                    />
                    <CoordinatorCard
                        name="Kacper Iwicki"
                        position="Koordynator ds. Kontaktu z uczestnikami"
                        src="img/coordinators/kacper.jpg"
                        animationDelay={100}
                    />
                    <CoordinatorCard
                        name="Natalia Fitowska"
                        position="Koordynator Główny"
                        src="img/coordinators/natalia.jpg"
                        animationDelay={200}
                    />
                    <CoordinatorCard
                        name="Mikołaj Wyka"
                        position="Koordynator ds. Logistyki"
                        src="img/coordinators/mikolaj.jpg"
                        animationDelay={300}
                    />
                    <CoordinatorCard
                        name="Klaudia Dyl"
                        position="Koordynator ds. Pozyskiwania funduszy"
                        src="img/coordinators/klaudia.jpg"
                        animationDelay={400}
                    />
                </Grid>
            </GridContainer>
            <FlexSpacer />
            <Footer />
        </Content>
    );
}
