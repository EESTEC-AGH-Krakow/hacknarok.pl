import { Grid } from "@mui/material";
import styled from "styled-components";



const PartnersContainer = styled.div`
    background-color: white;
    min-height: 100vh;
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
`

const GridContainer = styled.div`
  width: 70%;
  margin-bottom: 100px;
`

const TopPageSpacer = styled.div`
  height: 100px;
  
  @media only screen and (max-width: 600px) {
    height: 60px;
  }
`

const Title = styled.h1`
  color: black;
  margin-bottom: 60px;
  font-family: Norse;
  font-size: 60px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`


export default function About() {
  const partnerLogoPaths = ["public/partners/google.png", "public/partners/ibm.png", "public/partners/allegro.png", "public/partners/avsystem.png", "public/partners/sabre.png"];
  const mediaPatronsLogoPaths = ["public/partners/google.png", "public/partners/ibm.png", "public/partners/allegro.png", "public/partners/avsystem.png", "public/partners/sabre.png"];

  return (
    <PartnersContainer>
      <TopPageSpacer />
      <Title>NASI PARTNERZY</Title>
      <GridContainer>
        <Grid container justifyContent="center"
          alignItems="center"
          rowSpacing={5}
          columnSpacing={5}>
          {partnerLogoPaths.map(logoPath =>
            <Grid item md={4} sm={6} xs={6}>
              <LogoContainer><Logo src={logoPath} /></LogoContainer>
            </Grid>
          )}
        </Grid>
      </GridContainer>
      <Title>PATRONI MEDIALNI</Title>
      <GridContainer>
        <Grid container justifyContent="center"
          alignItems="center"
          rowSpacing={5}
          columnSpacing={5}>
          {mediaPatronsLogoPaths.map(logoPath =>
            <Grid item md={4} sm={6} xs={6}>
              <LogoContainer><Logo src={logoPath} /></LogoContainer>
            </Grid>
          )}
        </Grid>
      </GridContainer>
    </PartnersContainer >
  );
}
