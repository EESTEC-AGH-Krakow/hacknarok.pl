import {
    Typography,
    AccordionDetails,
    Accordion,
    AccordionSummary,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    margin-bottom: 20px;
`;

const StyledAccordion = styled(Accordion)`
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: white !important;
    border-top: 1px solid #B6D7F2;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
    color: white !important;
    height: 55px;

    p {
        font-family: Montserrat;
    }
`;

const StyledIcon = styled(ExpandMoreIcon)`
    color: white;
`;

const Text = styled.span`
    font-family: Montserrat;
`;

interface FaqAccordionProps {
    question: string;
    answer: string;
}

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded((isExpanded) => !isExpanded);
    };

    return (
        <Container data-aos="fade-up-left">
            <StyledAccordion expanded={expanded} onChange={handleChange}>
                <StyledAccordionSummary
                    expandIcon={<StyledIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Text>{question}</Text>
                </StyledAccordionSummary>
                <AccordionDetails>
                    <Text>{answer}</Text>
                </AccordionDetails>
            </StyledAccordion>
        </Container>
    );
}
