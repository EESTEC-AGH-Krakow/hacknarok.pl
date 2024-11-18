import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, IconButton, ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { PageWithRef } from "../LayoutWithNavbar";

const TabButton = styled.button<{
    isActive: boolean;
    isOnTopOfThePage: boolean;
}>`
    background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
    color: ${(props) =>
        props.isActive || props.isOnTopOfThePage ? "black" : "white"};

    box-sizing: border-box;
    text-transform: lowercase;
    font-family: Montserrat;
    border-radius: 100px;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
    outline: inherit;
    border: 0;

    transition: background-color 0.4s, border 0.4s, color 0.4s;

    :hover {
        background-color: #E8EEF8;
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

const TabsContainer = styled.div<{ isOnTopOfThePage: boolean }>`
    display: flex;
    gap: 5px;
    background-color: ${(props) =>
        props.isOnTopOfThePage ? "transparent" : "#13131397"};
    border-radius: 100px;
    padding: 0;

    transition: background-color 0.4s;
`;

const MenuButtonContainer = styled.div<{ isOnTopOfThePage: boolean }>`
    display: none;
    border-radius: 50%;

    @media screen and (max-width: 600px) {
        display: block;
        background-color: ${(props) =>
            props.isOnTopOfThePage ? "transparent" : "#13131397"};
    }
`;

const MenuButton = styled(IconButton)<{ isOnTopOfThePage: boolean }>`
    color: ${(props) =>
        props.isOnTopOfThePage ? "black" : "white !important"};

    //remove outline when navigated with keyboard
    :focus:not(:focus-visible) {
        outline: none;
    }
`;

const StyledDrawer = styled(SwipeableDrawer)`
    .MuiDrawer-paper {
        background-color: #242424;
        * {
            font-family: Montserrat !important;
        }
    }
`;

const DrawerHeader = styled.div`
    padding: 8px;
`;

const NavbarStyleChangeThreshold = 150;

interface NavbarProps {
    pages: Record<string, PageWithRef>;
    currentPage: string;
    onPageSelected: (pageName: string) => void;
}

export default function Navbar({
    pages,
    currentPage,
    onPageSelected,
}: NavbarProps) {
    const [isSidePanelOpen, setIsSidePanelOpen] = React.useState(false);

    const [isOnTopOfThePage, setIsOnTopOfThePage] = useState(true);

    const selectPage = (pageName: string) => {
        pages[pageName].ref.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });

        onPageSelected(pageName);
    };

    React.useEffect(() => {
        window.onscroll = () => {
            if (
                window.scrollY > NavbarStyleChangeThreshold &&
                isOnTopOfThePage
            ) {
                setIsOnTopOfThePage(false);
            }
            if (
                window.scrollY <= NavbarStyleChangeThreshold &&
                !isOnTopOfThePage
            ) {
                setIsOnTopOfThePage(true);
            }
        };

        return () => {
            window.onscroll = null;
        };
    });

    const toggleDrawer = (newState: boolean) => {
        if (isSidePanelOpen == newState) return;
        setIsSidePanelOpen(newState);
    };

    return (
        <>
            <Bar data-aos="fade-down" data-aos-offset="1" data-aos-once>
                <TabsContainer isOnTopOfThePage={isOnTopOfThePage}>
                    {Object.keys(pages).map((p) => (
                        <TabButton
                            key={p}
                            isActive={currentPage === p}
                            isOnTopOfThePage={isOnTopOfThePage}
                            onClick={() => selectPage(p)}
                        >
                            {p}
                        </TabButton>
                    ))}
                </TabsContainer>
                <MenuButtonContainer isOnTopOfThePage={isOnTopOfThePage}>
                    <MenuButton
                        aria-label="menu"
                        color="default"
                        isOnTopOfThePage={isOnTopOfThePage}
                        onClick={() => setIsSidePanelOpen(true)}
                    >
                        <MenuIcon style={{ fontSize: 30 }} />
                    </MenuButton>
                </MenuButtonContainer>
            </Bar>
            <StyledDrawer
                anchor="right"
                open={isSidePanelOpen}
                onOpen={() => toggleDrawer(true)}
                onClose={() => toggleDrawer(false)}
            >
                <DrawerHeader>
                    <IconButton onClick={() => toggleDrawer(false)}>
                        <ChevronRightIcon style={{ color: "white" }} />
                    </IconButton>
                </DrawerHeader>
                <Divider style={{ backgroundColor: "white" }} />
                <Box
                    sx={{
                        width: 300,
                    }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        {Object.keys(pages).map((pageName, index) => (
                            <ListItem key={pageName}>
                                <ListItemButton
                                    onClick={() => {
                                        setTimeout(() => {
                                            selectPage(pageName);
                                        }, 100);
                                    }}
                                >
                                    <ListItemIcon>
                                        {pages[pageName].page.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={pageName}
                                        style={{ color: "white" }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </StyledDrawer>
        </>
    );
}
