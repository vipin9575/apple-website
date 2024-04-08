import React from "react";
import {
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccDetailSection.css";

export const AccDetailSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box sx={{ display: { md: "block", xs: "none" }, mt: { xs: 2 } }}>
        <Grid
          container
          justifyContent="center"
          columnGap={13}
          className="acc-detail-section"
        >
          <Grid item>
            <Box>
              <Typography component="h4">Shop and Learn</Typography>
              <Typography component="p">Store</Typography>
              <Typography component="p">Mac</Typography>
              <Typography component="p">iPad</Typography>
              <Typography component="p">iPhone</Typography>
              <Typography component="p">Watch</Typography>
              <Typography component="p">AirPods</Typography>
              <Typography component="p">TV & Home</Typography>
              <Typography component="p">AirTag</Typography>
              <Typography component="p">Accessories</Typography>
              <Typography component="p">Gift Cards</Typography>
            </Box>
            <Box>
              <Typography component="h4">Apple Wallet</Typography>
              <Typography component="p">wallet</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography component="h4">Account</Typography>
              <Typography component="p">Manage Your Apple ID</Typography>
              <Typography component="p">Apple Store Account</Typography>
              <Typography component="p">iCloud.com</Typography>
            </Box>
            <Box>
              <Typography component="h4">Entertainment</Typography>
              <Typography component="p">Apple One</Typography>
              <Typography component="p">Apple TV+</Typography>
              <Typography component="p">Apple Music</Typography>
              <Typography component="p">Apple Arcade</Typography>
              <Typography component="p">Apple Podcasts</Typography>
              <Typography component="p">Apple Books</Typography>
              <Typography component="p">App Store</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography component="h4">Apple Store</Typography>
              <Typography component="p">Find a Store</Typography>
              <Typography component="p">Genius Bar</Typography>
              <Typography component="p">Today at Apple</Typography>
              <Typography component="p">Apple Camp</Typography>
              <Typography component="p">Apple Trade In</Typography>
              <Typography component="p">Ways to Buy</Typography>
              <Typography component="p">Recycling Programme</Typography>
              <Typography component="p">Order Status</Typography>
              <Typography component="p">Shopping Help</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography component="h4">For Business</Typography>
              <Typography component="p">Apple and Business</Typography>
              <Typography component="p">Shop for Business</Typography>
            </Box>
            <Box>
              <Typography component="h4">For Education</Typography>
              <Typography component="p">Apple and Education</Typography>
              <Typography component="p">Shop for Education</Typography>
              <Typography component="p">Shop for University</Typography>
            </Box>
            <Box>
              <Typography component="h4">For Healthcare</Typography>
              <Typography component="p">Apple in Healthcare</Typography>
              <Typography component="p">Health on Apple Watch</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography component="h4">Apple Values</Typography>
              <Typography component="p">Accessibility</Typography>
              <Typography component="p">Education</Typography>
              <Typography component="p">Environmente</Typography>
              <Typography component="p">Privacy</Typography>
              <Typography component="p">Supplier Responsibility</Typography>
            </Box>
            <Box>
              <Typography component="h4">About Apple</Typography>
              <Typography component="p">Newsroom</Typography>
              <Typography component="p">Apple Leadership</Typography>
              <Typography component="p">Career Opportunities</Typography>
              <Typography component="p">Investors</Typography>
              <Typography component="p">Ethics & Compliance</Typography>
              <Typography component="p">Events</Typography>
              <Typography component="p">Contact Apple</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" }, mt: { xs: 2 } }}>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography component="h4">Shop and Learn</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Store</Typography>
            <Typography component="p">Mac</Typography>
            <Typography component="p">iPad</Typography>
            <Typography component="p">iPhone</Typography>
            <Typography component="p">Watch</Typography>
            <Typography component="p">AirPods</Typography>
            <Typography component="p">TV & Home</Typography>
            <Typography component="p">AirTag</Typography>
            <Typography component="p">Accessories</Typography>
            <Typography component="p">Gift Cards</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography component="h4">Apple Wallet</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">wallet</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography component="h4">Account</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Manage Your Apple ID</Typography>
            <Typography component="p">Apple Store Account</Typography>
            <Typography component="p">iCloud.com</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography component="h4">Entertainment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Apple One</Typography>
            <Typography component="p">Apple TV+</Typography>
            <Typography component="p">Apple Music</Typography>
            <Typography component="p">Apple Arcade</Typography>
            <Typography component="p">Apple Podcasts</Typography>
            <Typography component="p">Apple Books</Typography>
            <Typography component="p">App Store</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography component="h4">Apple Store</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Find a Store</Typography>
            <Typography component="p">Genius Bar</Typography>
            <Typography component="p">Today at Apple</Typography>
            <Typography component="p">Apple Camp</Typography>
            <Typography component="p">Apple Trade In</Typography>
            <Typography component="p">Ways to Buy</Typography>
            <Typography component="p">Recycling Programme</Typography>
            <Typography component="p">Order Status</Typography>
            <Typography component="p">Shopping Help</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography component="h4">For Business</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Apple and Business</Typography>
            <Typography component="p">Shop for Business</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography component="h4">For Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Apple and Education</Typography>
            <Typography component="p">Shop for Education</Typography>
            <Typography component="p">Shop for University</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography component="h4">For Healthcare</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Apple in Healthcare</Typography>
            <Typography component="p">Health on Apple Watch</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography component="h4">Apple Values</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Accessibility</Typography>
            <Typography component="p">Education</Typography>
            <Typography component="p">Environmente</Typography>
            <Typography component="p">Privacy</Typography>
            <Typography component="p">Supplier Responsibility</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{ backgroundColor: "#F5F5F7" }}
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
          className="acc-detail-section-one"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography component="h4">About Apple</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">Newsroom</Typography>
            <Typography component="p">Apple Leadership</Typography>
            <Typography component="p">Career Opportunities</Typography>
            <Typography component="p">Investors</Typography>
            <Typography component="p">Ethics & Compliance</Typography>
            <Typography component="p">Events</Typography>
            <Typography component="p">Contact Apple</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
