import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { UnderlinedTitle } from "../components/Title";

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
    margin-left: 10px;
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

const MainPartnerGridItem = styled(Grid).attrs(() => ({
    item: true,
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
}))`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AssaPartnerGridItem = styled(Grid).attrs(() => ({
    item: true,
    lg: 4,
    md: 6,
    sm: 8,
    xs: 12,
}))`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MainPartnerLogoContainer = styled(LogoContainer)`
    width: 100%;
    height: 100%;
`;

const MainPartnerLogo = styled(Logo)`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

const partnerLogoPaths = [
    "partners/APTIV.png",
    "partners/CodeEurope.png",
    "partners/Kraków.jpg",
    "partners/Pega.png",
    "partners/Remitly.png",
    "partners/KPT.jpg",
    "partners/AVSystem.png",
    "partners/Sabre.png",
];

const mediaPatronsLogoPaths = [
    "media/Crossweb.png",
    "media/dailyweb.png",
    "media/Devmentor.png",
    "media/HackYeah.png",
    "media/KMS.png",
    "media/krakow.jpg",
    "media/KSAF.png",
    "media/MagazynProgramista.jpg",
    "media/NFJ.png",
    "media/OpenSecurity.png",
    "media/Perspektywy.jpg",
    "media/Radio1.7.png",
    "media/SOLID.Jobs.png",
    "media/TeoriaBiznesu.pl.png",
    "media/URSS.png",
];

const mediaPatronsUrls = [
    "https://crossweb.pl/",
    "https://dailyweb.pl/",
    "https://devmentor.pl/",
    "https://hackyeah.pl/",
    "https://kms.org.pl/",
    "https://krakow.pl/",
    "https://ksaf.pl/",
    "https://programistamag.pl/",
    "https://nofluffjobs.com/",
    "https://opensecurity.pl/",
    "https://perspektywy.pl/",
    "https://radio17.pl/",
    "https://solid.jobs/",
    "https://teoriabiznesu.pl/",
    "https://samorzad.agh.edu.pl/",
];

const AssaLogo = styled(Logo)`
    width: 200%; // Increase the width
    height: 200%; // Increase the height
`;

const AssaLogoContainer = styled(LogoContainer)`
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%; // Keep the width
    height: 100%; // Keep the height
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
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
            <div data-aos="fade-up">
                <UnderlinedTitle
                    text="Zaufali nam"
                    textColor="dark"
                    align="center"
                />
            </div>
            <GridContainer>
                <PartnersGridContainer>
                    <MainPartnerGridItem>
                        <MainPartnerLogoContainer>
                            <MainPartnerLogo src="partners/Sprout.png" data-aos="fade-up" />
                        </MainPartnerLogoContainer>
                    </MainPartnerGridItem>
                </PartnersGridContainer>
            </GridContainer>
            <div data-aos="fade-up">
                <UnderlinedTitle
                    text="Zaufali nam"
                    textColor="dark"
                    align="center"
                />
            </div>
            <GridContainer>
                <PartnersGridContainer>
                    <AssaPartnerGridItem>
                        <AssaLogoContainer>
                            <AssaLogo src="partners/ASSA.jpg" data-aos="fade-up" />
                        </AssaLogoContainer>
                    </AssaPartnerGridItem>
                </PartnersGridContainer>
                <PartnersGridContainer>
                    {partnerLogoPaths.map((logoPath) => (
                        <PartnersGridItem key={logoPath}>
                            <LogoContainer>
                                <Logo src={logoPath} data-aos="fade-up" />
                            </LogoContainer>
                        </PartnersGridItem>
                    ))}
                </PartnersGridContainer>
            </GridContainer>
            <div data-aos="fade-up">
                <UnderlinedTitle
                    text="Patroni medialni"
                    textColor="dark"
                    align="center"
                />
            </div>
            <GridContainer>
                <PartnersGridContainer>
                    {mediaPatronsLogoPaths.map((logoPath, index) => (
                        <PartnersGridItem key={logoPath}>
                            <LogoContainer>
                                <a href={mediaPatronsUrls[index]} target="_blank" rel="noopener noreferrer">
                                    <Logo src={logoPath} data-aos="fade-up" />
                                </a>
                            </LogoContainer>
                        </PartnersGridItem>
                    ))}
                </PartnersGridContainer>
            </GridContainer>
        </PartnersContainer>
    );
}
