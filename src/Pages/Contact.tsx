import { Grid } from "@mui/material";
import styled from "styled-components";
import CoordinatorCard, {
    CoordinatorCardProps,
} from "../components/CoordinatorCard";
import Footer from "../components/Footer";
import { UnderlinedTitle } from "../components/Title";
import { Visibility } from "@mui/icons-material";

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
            name: "Adrianna Solińska",
            email: "adrianna.solinska@hacknarok.pl",
            position: "Koordynator ds. Promocji",
            src: "img/coordinators/hack11/grey.webp",
            placeholderSrc: "",
            animationDelay: 0,
        },
        {
            name: "Amelia Ciecierska",
            email: "amelia.ciecierska@hacknarok.pl",
            position: "Koordynator ds. Logistyki i Barteru",
            src: "img/coordinators/hack11/grey.webp",
            placeholderSrc: "",
            animationDelay: 100,
        },
        {
            name: "Kamil Buczyński",
            email: "kamil.buczynski@hacknarok.pl",
            position: "Koordynator Główny",
            src: "img/coordinators/hack11/grey.webp",
            placeholderSrc: "",
            animationDelay: 200,
        },
        {
            name: "Szymon Mikołajczyk",
            email: "szymon.mikolajczyk@hacknarok.pl",
            position: "Koordynator ds. Kontaktu z Uczestnikami i Administracji",
            src: "img/coordinators/hack11/grey.webp",
            placeholderSrc: "",
            animationDelay: 300,
        },
        {
            name: "Seweryn Tasior",
            email: "seweryn.tasior@hacknarok.pl",
            position: "Koordynator ds. Fundraisingu",
            src: "img/coordinators/hack11/grey.webp",
            placeholderSrc: "",
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
