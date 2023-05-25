import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { useState, RefObject } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import useIsIntersecting from "../hooks/useIsInViewport";

const TabButtonBase = css`
    box-sizing: border-box;
    text-transform: lowercase;
    font-family: Montserrat;
    border-radius: 100px;
    font-size: 16px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 5px;
    outline: inherit;
    border: 1px solid transparent;

    :hover {
        background-color: rgba(180, 180, 180, 0.932);
        border-color: transparent;
        outline: inherit;
    }

    //display outline only if navigated with keyboard
    :focus:not(:focus-visible) {
        outline: none;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const TabButtonOnTopOfPage = css<{ isActive: boolean }>`
    ${TabButtonBase}
    background-color: ${(props) => (props.isActive ? "white" : "transparent")};

    color: black;
`;

const TabButtonScrolled = css<{ isActive: boolean }>`
    ${TabButtonBase}
    background-color: ${(props) => (!props.isActive ? "#13131397" : "white")};

    border: 1px solid;
    border-color: ${(props) => (!props.isActive ? "white" : "black")};

    color: ${(props) => (!props.isActive ? "white" : "black")};
`;

const TabButton = styled.button<{
    isActive: boolean;
    isOnTopOfThePage: boolean;
}>`
    ${TabButtonBase}

    ${(props) =>
        props.isOnTopOfThePage ? TabButtonOnTopOfPage : TabButtonScrolled}

    transition: background-color 0.4s, border 0.4s, color 0.4s;
`;

const Bar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 30px;
    z-index: 1;
    display: flex;
    flex-direction: row;
`;

const TabsContainer = styled.div``;
const MenuButtonContainer = styled.div`
    display: none;
    @media screen and (max-width: 600px) {
        display: block;
    }
`;

interface NavbarProps {
    pageRefs: Record<string, RefObject<HTMLInputElement>>;
    currentPage: string;
    onPageSelected: (pageName: string) => void;
}

export default function Navbar({
    pageRefs,
    currentPage,
    onPageSelected,
}: NavbarProps) {
    const [state, setState] = React.useState(false);

    const [isOnTopOfThePage, setIsOnTopOfThePage] = useState(true);

    const selectPage = (pageName: string) => {
        pageRefs[pageName].current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });

        onPageSelected(pageName);
    };

    React.useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 500 && isOnTopOfThePage) {
                setIsOnTopOfThePage(false);
            }
            if (window.scrollY <= 500 && !isOnTopOfThePage) {
                setIsOnTopOfThePage(true);
            }
        };

        return () => {
            window.onscroll = null;
        };
    });

    const toggleDrawer = (newState: boolean) => {
        if (state == newState) return;
        setState(newState);
    };

    return (
        <>
            <Bar>
                <TabsContainer>
                    {Object.keys(pageRefs).map((p) => (
                        <TabButton
                            isActive={currentPage === p}
                            isOnTopOfThePage={isOnTopOfThePage}
                            onClick={() => selectPage(p)}
                        >
                            {p}
                        </TabButton>
                    ))}
                </TabsContainer>
                <MenuButtonContainer>
                    <IconButton
                        aria-label="menu"
                        color="default"
                        onClick={() => setState(true)}
                    >
                        <MenuIcon style={{ fontSize: 30 }} />
                    </IconButton>
                </MenuButtonContainer>
            </Bar>
            <SwipeableDrawer
                anchor="right"
                open={state}
                onOpen={() => toggleDrawer(true)}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        {Object.keys(pageRefs).map((pageName, index) => (
                            <ListItem key={pageName}>
                                <ListItemButton
                                    onClick={() => selectPage(pageName)}
                                >
                                    <ListItemText primary={pageName} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    );
}
