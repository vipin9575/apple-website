import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  navbar: {
    largeScreenLinks: {
      color: "rgba(0, 0, 0, .8)",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1,
      cursor: "pointer",
    },
    smallScreenLinks: {
      color: "rgba(0, 0, 0, .8)",
      fontSize: "24px",
      fontWeight: 700,
      cursor: "pointer",
      marginBottom: "10px",
      paddingLeft: "20px",
    },
    customIcon: {
      fontSize: "20px",
      cursor: "pointer",
    },
    customFontSize: {
      font12: "12px",
      font36: "36px",
    },
  },

  navbarBottom: {
    styleItemOne: {
      fontSize: "21px",
      fontWeight: "600",
      lineHeight: "1.15",
      color: "#222",
      cursor: "pointer",
    },

    styleBuyButton: {
      fontSize: "12px",
      borderRadius: "960px",
      textAlign: "center",
      backgroundColor: "#147CE5",
      fontWeight: "400",
      color: "#fff",
      textTransform: "none",
      padding: "3px 13px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#5799DB", // Lighter color for hover
      },
    },
  },
  iPadCards: {
    type1: {
      color: "#1d1d1f",
      fontSize: { xs: "21px" },
      fontWeight: { xs: 600 },
      lineHeight: { xs: 1.17 },
      letterSpacing: { xs: " 0.144px" },
      mb: { xs: 3 },
    },
    type2: {
      color: "#1d1d1f",
      fontSize: { xs: "12px" },
      fontWeight: { xs: 400 },
      lineHeight: { xs: 1.4 },
      letterSpacing: { xs: " -0.206px" },
      mb: { xs: 2 },
    },
  },
});

export default theme;
