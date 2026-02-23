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

const NokiaPartnerGridItem = styled(Grid).attrs(() => ({
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
    "partners/NORDIC.png",
    "partners/AUTODESK.png",
    "partners/AVSYSTEM.svg",
    "partners/HITACHI.png",
    "partners/NOKIA.png",
    "partners/ASSAABLOY.png"

];
const partnerUrls = [
    "",
    "",
    "",
    // "https://www.aptiv.com/pl",
    // "https://www.krakow.pl/",
    // "https://www.remitly.com/pl/pl",
    //"https://www.kpt.krakow.pl",
    // "https://www.nokia.com/",
    ""

];

const mediaPatronsLogoPaths = [
    "media/Crossweb.png",
    "media/grupa_student.png",
    "media/bis.png",
    "media/URSS.png",
    "media/Radio1.7.png",
    "media/colorful_media.png",
    "media/KMS_logo.png",
    "media/logopp3.jpg",
    "media/KSAF.png",
    "media/bitehack.png"
];

const mediaPatronsUrls = [
    "https://crossweb.pl/",
    "http://studentnews.pl/",
    "https://bis.agh.edu.pl/",
    "https://samorzad.agh.edu.pl/",
    "https://radio17.pl/",
    "https://www.colorfulmedia.pl/",
    "https://kms.org.pl/",
    "https://podprad.pl/",
    "https://ksaf.pl/",
    "https://bitehack.best.krakow.pl/"
];

const AssaLogo = styled(Logo)`
    width: 200%; // Increase the width
    height: 200%; // Increase the height
`;

const NokiaLogo = styled(Logo)`
    width: 70%; // Increase the width
    height: 70%; // Increase the height
`;

const AceLogo = styled(Logo)`
    width: 200%;
    height: 200%;
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

const NokiaLogoContainer = styled(LogoContainer)`
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
            marginY={1}
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
function MainPartnersGridItem({ children }: PropsWithChildren) {
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
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
                    text="Partnerzy"
                    textColor="dark"
                    align="center"
                />
            </div>
            <GridContainer>
                <PartnersGridContainer>
                    {partnerLogoPaths.map((logoPath, index) => (
                        <MainPartnersGridItem key={logoPath}>
                            <a href={partnerUrls[index]} target="_blank" rel="noopener noreferrer">
                                <LogoContainer>
                                    <Logo src={logoPath} data-aos="fade-up" />
                                </LogoContainer>
                            </a>
                        </MainPartnersGridItem>
                    ))}
                    <MainPartnersGridItem>
                        <a href={"https://www.aceofspace.co/?utm_source=google&utm_medium=cpc&utm_campaign=PM%20-%20Wynajem%20biura%20(wszystkie%20lokalizacje)&utm_id=21875145971&gad_source=1&gad_campaignid=21904770236&gbraid=0AAAAA-ZywUkOnaxZ90fE490fGZeF0xq5n&gclid=Cj0KCQiAhtvMBhDBARIsAL26pjFRy0NhMU0NV2RqknyviTZsAfz0_czreMjNPOsX8vothyDZSKtu_CEaAjVWEALw_wcB"} target="_blank" rel="noopener noreferrer">
                            <LogoContainer>
                                <AceLogo src="partners/ACE.svg" data-aos="fade-up" />
                            </LogoContainer>
                        </a>
                    </MainPartnersGridItem>
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
