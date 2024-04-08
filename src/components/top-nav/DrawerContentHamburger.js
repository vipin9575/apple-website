import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const DrawerContentHamburger = ({ link }) => {
  switch (link) {
    case "Store":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Shop the Latest
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Mac
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Watch
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Accessories
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Quick Links
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Find a Store
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Order Status
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Ways to Buy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop Special Stores
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Education
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Business
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "Mac":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore Mac
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore All Mac
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                MacBook Air
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                MacBook Pro
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iMac
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Mac mini
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Mac Studio
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Mac Pro
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={2}>
                Displays
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Compare Mac
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Maac Does That
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop Mac
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop Mac
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Mac Accessories
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Ways to Buy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                More from Mac
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Mac Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AppleCare+ for Mac
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                macOS Sonoma
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apps by Apple
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Continuity
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iCloud+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Mac for Business
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Education
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "iPad":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore iPad
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore All iPad
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad Air
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad Pro
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad mini
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad Studio
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Pencil
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={2}>
                Keyboards
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Compare iPad
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Why iPad
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop iPad
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop iPad
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iPad Accessories
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Ways to Buy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                More from iPad
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iPad Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AppleCare+ for iPad
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iPadOS 17
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apps by Apple
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iCloud+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Education
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "iPhone":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore iPhone
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore All iPhone
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone 15 Pro
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone 15
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone 14
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone 13
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={2}>
                iPhone SE
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Compare iPhone
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Switch from Android
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop iPhone
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop iPhone
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iPhone Accessories
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Trade In
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Ways to Buy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                More from iPhone
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iPhone Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AppleCare+ for iPhone
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iOS 17
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apps by Apple
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iPhone Privacy
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                iCloud+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Wallet
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Siri
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "Watch":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore Watch
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore All Apple Watch
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Watch Series 9
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Watch Ultra 2
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Watch SE
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={2}>
                Apple Watch Nike
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Compare Watch
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Why Apple Watch
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop Watch
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop Apple Watch
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Watch Strapes
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Watch Accessories
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Ways to Buy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                More from Watch
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Watch Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AppleCare+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                watchOS 10
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apps by Apple
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "AirPods":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore AirPods
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore All AirPods
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                AirPods Pro 2nd generation
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                AirPods 2nd generation
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                AirPods 3rd generation
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={2}>
                AirPods Max
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Compare AirPods
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop AirPods
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop AirPods
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AirPods Accessories
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                More from AirPods
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AirPods Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AppleCare+ for Headphones
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Music
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "TV & Home":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore TV & Home
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore TV & Home
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple TV 4K
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                HomePod
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                HomePod mini
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop TV & Home
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop Apple TV 4K
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop HomePod
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop HomePod mini
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Shop Siri Remote
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                TV & Home Accessories
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                More from TV & Home
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple TV Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                HomePod Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AppleCare+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple TV app
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple TV+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Home app
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Music
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Siri
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AirPlay
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "Entertainment":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore Entertainment
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Explore Entertainment
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple one
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple TV+
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Music
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Arcade
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Podcasts
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Books
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Store
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple TV+ Support
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple Music Support
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "Accessories":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Shop Accessories
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Shop All Accessories
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Mac
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Apple Watch
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                AirPods
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                TV & Home
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore Accessories
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Made by Apple
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                AirTag
              </Typography>
            </Box>
          </Grid>
        </>
      );
    case "Support":
      return (
        <>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Explore Support
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPhone
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Mac
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                iPad
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Watch
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                AirPods
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={1}>
                Music
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }} mb={2}>
                TV
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={1}>
                Explore Support
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Get Help
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Community
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Check Coverage
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Repair
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#76767B" }} mb={2}>
                Helpful Topics
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Get AppleCare+
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Apple ID & Password
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Billings & Subscriptions
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Find My
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }} mb={1}>
                Accessibility
              </Typography>
            </Box>
          </Grid>
        </>
      );

    default:
      return null;
  }
};

export default DrawerContentHamburger;
