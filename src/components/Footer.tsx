import { Grid } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 1px solid #ffffff;
    width: 100%;
    padding: 20px;
    margin-top: 60px;
`;

const FooterLogo = styled.img`
    height: 80px;
`;

const MailtoLink = styled.a`
    color: inherit;
    text-decoration: underline;

    :hover {
        color: inherit;
    }
`;
export default function Footer() {
    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={5}
                columnSpacing={5}
            >
                <Grid item lg={2} md={3} sm={6} xs={12} textAlign={"center"}>
                    <MailtoLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="regulamin_hack_9.pdf"
                    >
                        regulamin
                    </MailtoLink>
                </Grid>
                <Grid item lg={2} md={3} sm={6} xs={12} textAlign={"center"}>
                    <MailtoLink href="mailto:kontakt@hacknarok.pl">
                        kontakt@hacknarok.pl
                    </MailtoLink>
                </Grid>
                <Grid item lg={2} md={3} sm={6} xs={12} textAlign={"center"}>
                    <FooterLogo src="logo_eestec.png" />
                </Grid>
                <Grid item lg={2} md={3} sm={6} xs={12} textAlign={"center"}>
                    <FooterLogo src="favicon-hack9.png" />
                </Grid>
            </Grid>
        </Container>
    );
}
