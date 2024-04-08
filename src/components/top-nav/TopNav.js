import React, { useState } from "react";
import { Box, Grid, Typography, Drawer, styled } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import theme from "../../Theme";
import DrawerContent from "./DrawerContent";
import DrawerContentHamburger from "./DrawerContentHamburger";

const links = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

export const TopNav = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [hamburgerDrawerOpen, setHamburgerDrawerOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState(null);
  const [newDrawerOpen, setNewDrawerOpen] = useState(false);

  const handleNavDrawerOpen = (link) => {
    setCurrentLink(link);
    setNavDrawerOpen(true);
  };

  const handleNavDrawerClose = () => {
    setNavDrawerOpen(false);
  };

  const handleHamburgerDrawerOpen = () => {
    setHamburgerDrawerOpen(true);
  };

  const handleHamburgerDrawerClose = () => {
    setHamburgerDrawerOpen(false);
  };

  const handleNewDrawerOpen = (link) => {
    setCurrentLink(link);
    setNewDrawerOpen(true);
  };

  const handleNewDrawerClose = () => {
    setNewDrawerOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          zIndex: 9999,
          backgroundColor:
            navDrawerOpen || hamburgerDrawerOpen ? "#FAFAFC" : "transparent",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 4 }}
          px={{ xs: 1, sm: 3, md: 5, lg: 22 }}
          py={1}
        >
          <Grid item>
            <Box>
              {!hamburgerDrawerOpen && !newDrawerOpen && (
                <Box>
                  <AppleIcon sx={{ ...theme.navbar.customIcon }} />
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              {links.map((link, index) => (
                <Grid
                  item
                  key={index}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Box onMouseEnter={() => handleNavDrawerOpen(link)}>
                    <Typography sx={{ ...theme.navbar.largeScreenLinks }}>
                      {link}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            {!hamburgerDrawerOpen && !newDrawerOpen && (
              <Box>
                <SearchIcon
                  color="action"
                  sx={{ ...theme.navbar.customIcon }}
                />
              </Box>
            )}
          </Grid>
          <Grid item>
            {!hamburgerDrawerOpen && !newDrawerOpen && (
              <Box>
                <WorkOutlineIcon
                  color="action"
                  sx={{ ...theme.navbar.customIcon }}
                />
              </Box>
            )}
          </Grid>
          {/* Hamburger icon for medium screens and below */}
          {!newDrawerOpen ? (
            <Grid item sx={{ display: { xs: "block", md: "none" } }}>
              <Box
                onClick={
                  hamburgerDrawerOpen
                    ? handleHamburgerDrawerClose
                    : handleHamburgerDrawerOpen
                }
              >
                {hamburgerDrawerOpen ? (
                  <CloseIcon
                    color="action"
                    sx={{ ...theme.navbar.customIcon }}
                  />
                ) : (
                  <MenuIcon
                    color="action"
                    sx={{ ...theme.navbar.customIcon }}
                  />
                )}
              </Box>
            </Grid>
          ) : (
            <Grid item sx={{ display: { xs: "block", md: "none" } }}>
              <Box
                onClick={
                  newDrawerOpen ? handleNewDrawerClose : handleNewDrawerOpen
                }
              >
                {newDrawerOpen ? (
                  <CloseIcon
                    color="action"
                    sx={{ ...theme.navbar.customIcon }}
                  />
                ) : (
                  <MenuIcon
                    color="action"
                    sx={{ ...theme.navbar.customIcon }}
                  />
                )}
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      {/* Drawer for large screen */}
      <Drawer
        anchor="top"
        open={navDrawerOpen}
        onClose={handleNavDrawerClose}
        transitionDuration={700}
        elevation={0}
        PaperProps={{
          sx: {
            backgroundColor: "#FAFAFC",
            cursor: "pointer",
          },
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 10 }}
          my={10}
          px={{ xs: 1, sm: 3, md: 5, lg: 23 }}
          onMouseLeave={handleNavDrawerClose}
        >
          <DrawerContent link={currentLink} />
        </Grid>
      </Drawer>
      {/* Drawer for small screen */}
      <Drawer
        anchor="top"
        open={hamburgerDrawerOpen}
        onClose={handleHamburgerDrawerClose}
        transitionDuration={700}
        elevation={0}
        PaperProps={{
          sx: {
            backgroundColor: "#FAFAFC",
          },
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Grid
          container
          direction="column"
          px={{ xs: 1, sm: 3, md: 5, lg: 23 }}
          my={8}
        >
          {links.map((link, index) => (
            <Grid item key={index}>
              <Box
                onClick={() => {
                  setCurrentLink(link);
                  setHamburgerDrawerOpen(false);
                  handleNewDrawerOpen(link);
                }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  "&:hover": {
                    "& .arrow": {
                      visibility: "visible",
                      opacity: 1,
                    },
                  },
                }}
              >
                <Typography sx={{ ...theme.navbar.smallScreenLinks }}>
                  {link}
                </Typography>
                <KeyboardArrowRightIcon
                  className="arrow"
                  sx={{
                    visibility: "hidden",
                    opacity: 0,
                    transition: "visibility 0s, opacity 0.5s linear",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Drawer>
      {/* Drawer for hamburger content screen */}
      <Drawer
        anchor="right"
        open={newDrawerOpen}
        onClose={handleNewDrawerClose}
        transitionDuration={500}
        elevation={0}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#FAFAFC",
            cursor: "pointer",
          },
        }}
        ModalProps={{
          sx: {
            position: "absolute",
          },
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Grid container rowGap={{ xs: 5 }} my={10} px={{ xs: 8, lg: 23 }}>
          <DrawerContentHamburger link={currentLink} />
        </Grid>
      </Drawer>
    </>
  );
};
