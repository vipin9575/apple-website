import React from "react";
import "./Footer.css";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Button,
  Breadcrumbs,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Cards } from "../cards/Cards";
import { IpadCards } from "../cards/IpadCards";
import { ContactCard } from "../cards/ContactCard";
import { DetailSection } from "../detail-sec/DetailSection";
import { AccDetailSection } from "../footer-acc-detail/AccDetailSection";

export const Footer = () => {
  return (
    <>
      <div className="bgColor">
        {/* paper component */}
        <Box>
          <Paper
            sx={{ borderRadius: "24px", px: { sm: 2, xs: 5 } }}
            elevation={0}
          >
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              sx={{ pt: { xs: 10 } }}
            >
              <Grid item sx={{ mb: { md: 0, xs: 4 } }}>
                <Grid
                  container
                  flexDirection="column"
                  sx={{
                    alignItems: { md: "start", xs: "center" },
                    rowGap: { xs: 2 },
                  }}
                >
                  <Grid item>
                    <Box>
                      <img
                        src="https://www.apple.com/v/ipad-10.9/c/images/overview/ar/ar_icon__f1ug37tsrwq6_large.png"
                        alt="image"
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "56px", sm: "44px", xs: "36px" },
                          fontWeight: { xs: 600 },
                          lineHeight: { xs: "1.1" },
                          letterSpacing: { xs: "0.176px" },
                        }}
                      >
                        Use AR to <br /> view iPad.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "19px", sm: "18px", xs: "16px" },
                          fontWeight: { xs: 400 },
                          lineHeight: { xs: "1.4" },
                          letterSpacing: { xs: "0.176px" },
                          textAlign: { lg: "start", xs: "center" },
                        }}
                      >
                        Open this page using Safari on <br /> your iPhone or
                        iPad.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box>
                  <img
                    src="https://www.apple.com/v/ipad-10.9/c/images/overview/ar/ar_ipad_silver__gh7qtof6d5ay_large.jpg"
                    alt="image"
                    width="100%"
                    height="auto"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* card component */}
        <Box>
          <Cards />
        </Box>

        {/* paper with card component */}
        <Box>
          <Paper
            sx={{
              borderRadius: "24px",
              py: { sm: 8, xs: 4 },
              px: { sm: 4, xs: 2 },
              mt: { md: 10 },
            }}
            elevation={0}
          >
            {/* first grid container */}
            <Grid
              container
              flexDirection="column"
              alignItems="center"
              sx={{ mb: { xs: 8 } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: { md: "52px", sm: "44px", xs: "24px" },
                    fontWeight: { xs: 600 },
                    lineHeight: { xs: "1.1" },
                    letterSpacing: { xs: "0.176px" },
                    mb: { md: 4 },
                    textAlign: { sm: "start", xs: "center" },
                  }}
                >
                  Which iPad is right for you?
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  sx={{ justifyContent: { sm: "start", xs: "center" } }}
                >
                  <Grid item>
                    <Button
                      size="large"
                      endIcon={<ChevronRightIcon color="primary" />}
                      sx={{
                        fontSize: { sm: "21px", xs: "16px" },
                        fontWeight: { xs: 400 },
                        letterSpacing: { xs: "0.176px" },
                        textTransform: "none",
                        "&:hover": { textDecoration: "underline" },
                        mr: { md: 4, xs: 0 },
                      }}
                    >
                      Compare all iPad models
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="large"
                      endIcon={<ChevronRightIcon color="primary" />}
                      sx={{
                        fontSize: { sm: "21px", xs: "16px" },
                        fontWeight: { xs: 400 },
                        letterSpacing: { xs: "0.176px" },
                        textTransform: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Shop iPad
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* second grid container - iPads card */}
            <Box>
              <IpadCards />
            </Box>
          </Paper>
        </Box>

        {/* another card component */}
        <Box>
          <ContactCard />
        </Box>

        {/* detailing section */}
        <Box>
          <DetailSection />
        </Box>

        {/* footer details accordion */}
        <Box>
          <AccDetailSection />
        </Box>

        {/* footer end */}
        <Box sx={{ px: { lg: 19, md: 9 }, mt: { xs: 5 } }}>
          <Typography
            sx={{ color: "#767677", fontSize: { xs: "13px" }, mb: { xs: 2 } }}
          >
            More ways to shop:{" "}
            <a href="#" style={{ color: "#0A6CCE" }}>
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" style={{ color: "#0A6CCE" }}>
              other retailer
            </a>{" "}
            near you. Or call 000800 040 1966.
          </Typography>

          <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <hr />
          </Box>

          <Grid container justifyContent="space-between" sx={{ mt: { xs: 2 } }}>
            <Grid item order={{ xs: 2, md: 1 }}>
              <Typography
                sx={{ color: "#767677", fontSize: { sm: "13px", xs: "12px" } }}
              >
                Copyright © 2024 Apple Inc. All rights reserved.
              </Typography>
            </Grid>
            <Grid item order={{ xs: 3, md: 2 }} sx={{ mr: { md: 20 } }}>
              <Breadcrumbs aria-label="breadcrumb" separator={null}>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  |
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  Terms of Use
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  |
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  Sales Policy
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  |
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  Legal
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  |
                </Typography>
                <Typography
                  sx={{
                    color: "#767677",
                    fontSize: { sm: "13px", xs: "12px" },
                  }}
                >
                  Site Map
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item order={{ xs: 1, md: 3 }} sx={{ mb: { sm: 0, xs: 2 } }}>
              <Typography sx={{ color: "#767677", fontSize: { xs: "13px" } }}>
                India
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
