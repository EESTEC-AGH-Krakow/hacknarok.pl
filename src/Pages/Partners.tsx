import styled from "styled-components";


const PartnersContainer = styled.div`
    background-color: white;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogosGrid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  column-gap: 100px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 50%;
  }
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


const Title = styled.h1`
  color: black;
  margin-top: 100px;
  margin-bottom: 60px;
  font-family: Norse;
  font-size: 60px;
  text-align: center;
  padding-top: 30px;
`;
// f2 jest super i pozwala zmieniac nazwe automatycznie

export default function About() {
  return (
    <PartnersContainer>
      <Title>NASI PARTNERZY</Title>
      <LogosGrid>
        <LogoContainer ><Logo src="/../../public/partners/google.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/allegro.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/sabre.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/ibm.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/avsystem.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/google.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/allegro.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/ibm.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/google.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/ibm.png" /></LogoContainer>
      </LogosGrid>
      <Title>PATRONI MEDIALNI</Title>
      <LogosGrid>
        <LogoContainer ><Logo src="/../../public/partners/google.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/allegro.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/sabre.png" /></LogoContainer>
        <LogoContainer ><Logo src="/../../public/partners/ibm.png" /></LogoContainer>
      </LogosGrid>
    </PartnersContainer>
  );
}
