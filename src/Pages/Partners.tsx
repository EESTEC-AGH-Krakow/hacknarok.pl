import styled from "styled-components";



const PartnersContainer = styled.div`
    background-color: white;
    height: 100vh;
`;

const PartnersLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    align-items: center;
`;

const Logo = styled.img`
    padding-top:30px;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 1280px) {
        max-width: 25%;
        height: auto;
      }
`;


const Title = styled.h1`
  color: black;
  margin: 0px;
  font-family: Norse;
  font-size: 100px;
  text-align: center;
  padding-top: 30px;
  @media only screen and (max-width: 1200px) {
    font-size: 80px;
  }
`;


export default function About() {
  return (
    <PartnersContainer>
      <Title>NASI PARTNERZY</Title>
      <PartnersLogo>
        <Logo src="/../../public/partners/google.png" />
        <Logo src="/../../public/partners/allegro.png" />
        <Logo src="/../../public/partners/sabre.png" />
        <Logo src="/../../public/partners/ibm.png" />
        <Logo src="/../../public/partners/avsystem.png" />
        <Logo src="/../../public/partners/google.png" />
        <Logo src="/../../public/partners/allegro.png" />
        <Logo src="/../../public/partners/ibm.png" />
        <Logo src="/../../public/partners/google.png" />
        <Logo src="/../../public/partners/google.png" />
      </PartnersLogo>
    </PartnersContainer>
  );
}
