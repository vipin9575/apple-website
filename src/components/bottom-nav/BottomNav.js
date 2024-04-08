import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../../Theme";
import "./BottomNav.css";

export const BottomNav = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(navRef.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box ref={navRef} className={isSticky ? "sticky-nav" : ""} pt={2}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 3 }}
          px={{ xs: 1, sm: 3, md: 5, lg: 22 }}
          py={0}
        >
          <Grid item sx={{ flexGrow: 1 }}>
            <Box>
              <Typography
                sx={{
                  ...theme.navbarBottom.styleItemOne,
                }}
              >
                iPad
              </Typography>
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <Box>
              <Grid container spacing={{ xs: 3 }}>
                <Grid item>
                  <Box>
                    <Typography
                      sx={{
                        ...theme.navbar.largeScreenLinks,
                        opacity: "0.8",
                      }}
                    >
                      Overview
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <Typography sx={{ ...theme.navbar.largeScreenLinks }}>
                      Why iPad
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <Typography sx={{ ...theme.navbar.largeScreenLinks }}>
                      Tech Specs
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* expandIcon on medium and below screens */}
          <Grid item sx={{ display: { xs: "block", md: "none" } }}>
            <Box onClick={toggleAccordion}>
              <ExpandMoreIcon
                sx={{
                  transform: accordionOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  fontSize: "32px",
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography sx={{ ...theme.navbarBottom.styleBuyButton }}>
                Buy
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Use Collapse component for transitioning */}
        <Collapse in={accordionOpen} timeout="auto" unmountOnExit>
          <Accordion
            expanded={accordionOpen}
            elevation={0}
            sx={{
              display: {
                xs: "block",
                md: "none",

                zIndex: 9999,
              },
            }}
          >
            <AccordionSummary />
            <AccordionDetails>
              <Grid
                container
                spacing={2}
                sx={{
                  display: { xs: "block", md: "none" },
                  marginTop: "-80px",
                }}
                px={{ xs: 4 }}
              >
                {/* Content to display when accordion is expanded */}
                <Grid item xs={12}>
                  <Box>
                    <Typography
                      sx={{
                        ...theme.navbar.largeScreenLinks,
                        fontSize: "16px",
                        opacity: "0.8",
                      }}
                      pb={2}
                    >
                      Overview
                    </Typography>
                    <hr />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography
                      sx={{
                        ...theme.navbar.largeScreenLinks,
                        fontSize: "16px",
                      }}
                      pb={2}
                    >
                      Why iPad
                    </Typography>
                    <hr />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography
                      sx={{
                        ...theme.navbar.largeScreenLinks,
                        fontSize: "16px",
                      }}
                      pb={2}
                    >
                      Tech Specs
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Collapse>
      </Box>
    </>
  );
};
