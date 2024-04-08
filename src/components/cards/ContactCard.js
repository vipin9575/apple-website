import React from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const ContactCard = () => {
  const contactData = [
    {
      id: 1,
      title: "Free delivery and pickup",
      description: "Get free delivery or pickup at your Apple Store.",
      imageUrl:
        "https://www.apple.com/ac/globalfooter/8/en_IN/assets/ac-buystrip/shipping/icon_large.svg",
    },
    {
      id: 2,
      title: "Ways to buy",
      description: "Choose the way that′s right for you.",
      imageUrl:
        "https://www.apple.com/ac/globalfooter/8/en_IN/assets/ac-buystrip/financing/inr/icon_large.svg",
    },
    {
      id: 3,
      title: "Add that personal touch.",
      description:
        "Engrave a mix of emoji, names, initials and numbers. All for free.",
      imageUrl:
        "https://www.apple.com/ac/globalfooter/8/en_IN/assets/ac-buystrip/engraving/icon_large.svg",
    },
  ];

  return (
    <Grid container justifyContent="center" spacing={2} sx={{ mt: { xs: 12 } }}>
      {contactData.map((contact) => (
        <Grid item key={contact.id}>
          <Card
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 2 },
              maxWidth: "327px",
              backgroundColor: "#F5F5F7",
            }}
          >
            <Box>
              <img
                src={contact.imageUrl}
                alt="image"
                width="216px"
                height="56px"
              />
            </Box>
            <CardContent sx={{ textAlign: { xs: "center" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "21px" },
                  fontWeight: { xs: "600" },
                  letterSpacing: { xs: "0.192px" },
                  lineHeight: { xs: "1.5" },
                  mb: { xs: 1 },
                }}
              >
                {contact.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px" },
                  fontWeight: { xs: "400" },
                  letterSpacing: { xs: "0.12px" },
                  lineHeight: { xs: "1.5" },
                  px: { sm: 8, xs: 4 },
                  color: "#000000E0",
                }}
              >
                {contact.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                endIcon={<ChevronRightIcon color="primary" />}
                sx={{
                  letterSpacing: { xs: "-0.256px" },
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
