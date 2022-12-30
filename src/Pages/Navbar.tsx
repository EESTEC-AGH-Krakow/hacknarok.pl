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

const TabButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "white" : "transparent")};
  color: black;
  text-transform: lowercase;
  font-family: Montserrat;
  border-radius: 100px;
  font-weight: 800;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 5px;

  border-color: transparent;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
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

const TabsContainer = styled.div``;
const MenuButtonContainer = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

interface NavbarProps {
  pageRefs: Record<string, RefObject<HTMLInputElement>>;
}

export default function Navbar({ pageRefs }: NavbarProps) {
  const [selectedPage, setSelectedPage] = useState(Object.keys(pageRefs)[0]);

  const [state, setState] = React.useState(false);

  const selectPage = (pageName: string) => {
    pageRefs[pageName].current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    setSelectedPage(pageName);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Object.keys(pageRefs).map((pageName, index) => (
          <ListItem key={pageName}>
            <ListItemButton onClick={() => selectPage(pageName)}>
              <ListItemText primary={pageName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Bar>
        <TabsContainer>
          {Object.keys(pageRefs).map((p) => (
            <TabButton
              isActive={selectedPage === p}
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
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}
