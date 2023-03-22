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


export default function Partners() {
  const partnerLogoPaths = ["public/partners/hid_aa.jpg", "public/partners/capgemini.png", "public/partners/allegro.jpg", "public/partners/dd.png", "public/partners/ge.png", "public/partners/remitly.png", "public/partners/ig.png", "public/partners/kpt.jpg", "public/partners/sabre.png", "public/partners/nokia.png", "public/partners/oracle.png", "public/partners/pga.png", "public/partners/hitachi.png", "public/partners/krakow.jpg"];
  const mediaPatronsLogoPaths = ["public/media/4p.png", "public/media/bulldogjob.png", "public/media/pb.png", "public/media/iet.png", "public/media/studentnews.png", "public/media/programista.jpg", "public/media/porozmawiajmy.jpg", "public/media/wrss.png"];

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
            <Grid item md={3} sm={4} xs={6}>
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
            <Grid item md={3} sm={4} xs={6}>
              <LogoContainer><Logo src={logoPath} /></LogoContainer>
            </Grid>
          )}
        </Grid>
      </GridContainer>
    </PartnersContainer >
  );
}
