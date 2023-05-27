import styled from "styled-components";

const UnderlinedTitleContainer = styled.div<{
    align: "flex-start" | "center" | "flex-end";
}>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.align};
    margin-bottom: 50px;
`;

export const RedLine = styled.div`
    width: 100px;
    border-top: 2px solid #941c2f;
    height: 1px;
    margin-top: 7px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Title = styled.h1<{ textColor: "light" | "dark" }>`
    color: ${({ textColor }) => (textColor === "light" ? "white" : "black")};
    font-family: Norse;
    margin: 0;
    font-size: 60px;

    @media only screen and (max-width: 600px) {
        font-size: 40px;
    }
`;

interface UnderlinedTitleProps {
    text: string;
    textColor: "light" | "dark";
    align: "flex-start" | "center" | "flex-end";
}

export function UnderlinedTitle({
    text,
    textColor,
    align,
}: UnderlinedTitleProps) {
    return (
        <UnderlinedTitleContainer align={align}>
            <Title textColor={textColor}>{text}</Title>
            <RedLine />
        </UnderlinedTitleContainer>
    );
}
