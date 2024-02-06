import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLoadImage } from "../hooks/useProgressiveImage";

const CoordinatorCardImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CoordinatorCardDiv = styled.div`
    border-top: 1px solid #B6D7F2;
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
        border: 1px solid #B6D7F2;
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

export interface CoordinatorCardProps {
    src: string;
    name: string;
    position: string;
    animationDelay: number;
    placeholderSrc: string;
    email: string;
}

function CoordinatorImage({
    src,
    placeholderSrc,
}: {
    src: string;
    placeholderSrc: string;
}) {
    const [useFullImages, setUseFullImages] = useState(false);
    const full = useLoadImage(src);

    useEffect(() => {
        const imageUpscaleDelay = 10000;
        setTimeout(() => setUseFullImages(true), imageUpscaleDelay);
    });

    return (
        <CoordinatorCardImage
            src={(useFullImages && full) || placeholderSrc}
            placeholder={placeholderSrc}
        />
    );
}

export default function CoordinatorCard({
    src,
    email,
    name,
    position,
    animationDelay,
    placeholderSrc,
}: CoordinatorCardProps) {
    return (
        <Grid item lg={2} md={3} sm={4} xs={6}>
            <InnerDiv data-aos="fade-up" data-aos-delay={animationDelay}>
                <CoordinatorCardDiv>
                    <CoordinatorImage
                        src={src}
                        placeholderSrc={placeholderSrc}
                    />
                    <Overlay>
                        <ThumbnailName>{name}</ThumbnailName>
                    </Overlay>
                </CoordinatorCardDiv>
                <DetailsDiv>
                    <p>{name}</p>
                    <PositionText>{email}</PositionText>
                    <PositionText>{position}</PositionText>
                </DetailsDiv>
            </InnerDiv>
        </Grid>
    );
}
