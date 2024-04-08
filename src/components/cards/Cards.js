import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import cardData from "./CardData";

export function Cards() {
  return (
    <>
      <Grid
        container
        sx={{
          mt: { lg: 16, xs: 10 },
          gap: { lg: 2, xs: 0 },
          pl: { lg: 0, sm: 5, xs: 0 },
          justifyContent: { lg: "space-evenly", md: "start" },
        }}
      >
        {cardData.map((item, index) => (
          <Grid item lg={5}>
            <Box key={index}>
              {/* #f5f5f7 */}
              <Card
                elevation={0}
                sx={{ backgroundColor: "#f5f5f7", p: { xs: 2 } }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: { sm: "none", xs: "block", textAlign: "center" },
                    }}
                  >
                    <img src={item.imageSrc} alt="image" />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      mb: { sm: 4, xs: 2 },
                      justifyContent: { xs: "center", sm: "normal" },
                    }}
                  >
                    <Box sx={{ display: { sm: "block", xs: "none" } }}>
                      <img src={item.imageSrc} alt="image" />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { md: "52px", sm: "44px", xs: "28px" },
                          fontWeight: { xs: 600 },
                          lineHeight: { xs: "1.1" },
                          letterSpacing: { xs: "0.176px" },
                          ml: { sm: 2, xs: 0 },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { md: "19px", xs: "16px" },
                      fontWeight: { xs: 400 },
                      lineHeight: { xs: "1.4" },
                      letterSpacing: { xs: "0.176px" },
                      textAlign: { sm: "start", xs: "center" },
                      maxWidth: { sm: "576px", xs: "auto" },
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    sx={{ justifyContent: { sm: "start", xs: "center" } }}
                  >
                    <Grid item>
                      <Button
                        size="small"
                        endIcon={<ChevronRightIcon color="primary" />}
                        sx={{
                          fontSize: { xs: "16px" },
                          fontWeight: { xs: 400 },
                          letterSpacing: { xs: "0.176px" },
                          textTransform: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {item.buttonLabel}
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
