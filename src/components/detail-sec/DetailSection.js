import React from "react";
import { Typography, Box, Breadcrumbs, Link } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const DetailSection = () => {
  return (
    <>
      <Box sx={{ px: { lg: 19, md: 9 } }}>
        <hr />
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 }, mt: { xs: 2 } }}
        >
          *Listed pricing is Maximum Retail Price (inclusive of all taxes).
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          ◊The displays have rounded corners. When measured diagonally as a
          rectangle, the iPad Pro 12.9″ screen is 32.77 cm (12.9″), the iPad Pro
          11″ screen is 27.96 cm (11″), the iPad Air and iPad (10th generation)
          screens are 27.58 cm (10.86″), and the iPad mini screen is 21.08 cm
          (8.3″). Actual viewable area is less.
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          ◊◊Data plan is required. 5G, LTE and Wi-Fi calling are available in
          selected markets and through selected carriers. Speeds are based on
          theoretical throughput and vary based on site conditions and carrier.
          For details on 5G and LTE support, contact your carrier and see{" "}
          <a href="#" style={{ color: "#767677" }}>
            apple.com/in/ipad/cellular
          </a>
          .
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          ◊◊◊USB-C to Apple Pencil Adapter is required to work with iPad (10th
          generation).
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          1. The display has rounded corners. When measured diagonally as a
          rectangle, the iPad screen is 27.58 centimetres (10.86″). Actual
          viewable area is less.
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          2. Apple Pencil (1st generation), Magic Keyboard Folio, Smart Folio
          and other accessories are sold separately and are subject to
          availability. USB‑C to Apple Pencil Adapter is required to work with
          iPad (10th generation).
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          3. Battery life varies by use and configuration. See
          <a href="#" style={{ color: "#767677" }}>
            {" "}
            apple.com/in/batteries
          </a>{" "}
          for more information.
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 } }}
        >
          Some features may not be available for countries or all regions.{" "}
          <a href="#" style={{ color: "#767677" }}>
            View the complete list
          </a>
          .
        </Typography>
        <Typography
          variant="caption"
          display="block"
          color="#999999"
          sx={{ lineHeight: { xs: 1.3 }, mb: { xs: 1 }, mb: { xs: 2 } }}
        >
          Apps are available on the App Store. Title availability is subject to
          change.
        </Typography>
        <hr />
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
          sx={{ mt: { xs: 2 } }}
        >
          <Link color="inherit" href="#">
            <AppleIcon sx={{ mt: 0.5 }} />
          </Link>
          <Typography variant="body2" color="textSecondary">
            iPad
          </Typography>
          <Typography variant="body2" color="textSecondary">
            iPad 10.9"
          </Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
};
