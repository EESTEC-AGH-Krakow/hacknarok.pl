import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const PartnersContainer = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: 0;
`;

const Logo = styled.img`
    max-width: 100%;
    max-height: 50%;
`;

const GridContainer = styled.div`
    width: 80%;
    margin-bottom: 100px;
`;

const TopPageSpacer = styled.div`
    height: 100px;

    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`;

const Title = styled.h1`
    color: black;
    margin-bottom: 60px;
    font-family: Norse;
    font-size: 60px;
    text-align: center;

    @media only screen and (max-width: 600px) {
        font-size: 40px;
    }
`;

const partnerLogoPaths = [
    "partners/hid_aa.jpg",
    "partners/capgemini.png",
    "partners/allegro.jpg",
    "partners/dd.png",
    "partners/ge.png",
    "partners/remitly.png",
    "partners/ig.png",
    "partners/kpt.jpg",
    "partners/sabre.png",
    "partners/nokia.png",
    "partners/oracle.png",
    "partners/pga.png",
    "partners/hitachi.png",
    "partners/krakow.jpg",
];

const mediaPatronsLogoPaths = [
    "media/4p.png",
    "media/bulldogjob.png",
    "media/pb.png",
    "media/iet.png",
    "media/studentnews.png",
    "media/programista.jpg",
    "media/porozmawiajmy.jpg",
    "media/wrss.png",
];

function PartnersGridContainer({ children }: PropsWithChildren) {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={10}
            columnSpacing={10}
        >
            {children}
        </Grid>
    );
}

function PartnersGridItem({ children }: PropsWithChildren) {
    return (
        <Grid item lg={2} md={3} sm={4} xs={6}>
            {children}
        </Grid>
    );
}

export default function Partners() {
    return (
        <PartnersContainer>
            <TopPageSpacer />
            <Title>NASI PARTNERZY</Title>
            <GridContainer>
                <PartnersGridContainer>
                    {partnerLogoPaths.map((logoPath) => (
                        <PartnersGridItem key={logoPath}>
                            <LogoContainer>
                                <Logo src={logoPath} />
                            </LogoContainer>
                        </PartnersGridItem>
                    ))}
                </PartnersGridContainer>
            </GridContainer>
            <Title>PATRONI MEDIALNI</Title>
            <GridContainer>
                <PartnersGridContainer>
                    {mediaPatronsLogoPaths.map((logoPath) => (
                        <PartnersGridItem key={logoPath}>
                            <LogoContainer>
                                <Logo src={logoPath} />
                            </LogoContainer>
                        </PartnersGridItem>
                    ))}
                </PartnersGridContainer>
            </GridContainer>
        </PartnersContainer>
    );
}
