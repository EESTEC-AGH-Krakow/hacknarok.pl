import { Grid } from "@mui/material";
import styled from "styled-components";

const CoordinatorCardImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CoordinatorCardDiv = styled.div`
    border-top: 1px solid #941c2f;
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    aspect-ratio: 1;
    background-color: #010101b7;

    transition: background-color 0.3s;

    :hover {
        background-color: transparent;
    }
`;

const DetailsDiv = styled.div`
    padding: 10px;
`;

const PositionText = styled.p`
    font-size: 14px;
`;

const ThumbnailName = styled.span``;

const InnerDiv = styled.div`
    position: relative;
    text-align: center;

    ${DetailsDiv} {
        margin-top: -60px;
        transition: margin 0.3s;
        visibility: hidden;
    }

    :hover {
        border: 1px solid #941c2f;
        border-top: 0;
        background-color: rgba(0, 0, 0, 0.2);

        ${DetailsDiv} {
            display: block;
            margin-top: 0px;
            visibility: visible;
        }

        ${ThumbnailName} {
            display: none;
        }
    }
`;

interface CoordinatorCardProps {
    src: string;
    name: string;
    position: string;
}

export default function CoordinatorCard({
    src,
    name,
    position,
}: CoordinatorCardProps) {
    return (
        <Grid item lg={2} md={3} sm={4} xs={6}>
            <InnerDiv>
                <CoordinatorCardDiv>
                    <CoordinatorCardImage src={src} />
                    <Overlay>
                        <ThumbnailName>{name}</ThumbnailName>
                    </Overlay>
                </CoordinatorCardDiv>
                <DetailsDiv>
                    <p>{name}</p>
                    <PositionText>{position}</PositionText>
                </DetailsDiv>
            </InnerDiv>
        </Grid>
    );
}
