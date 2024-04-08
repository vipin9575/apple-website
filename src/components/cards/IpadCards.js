import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import theme from "../../Theme";

export const IpadCards = () => {
  return (
    <Grid container justifyContent="center">
      {/* first grid item */}
      <Grid item>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "210px",
          }}
        >
          <Box sx={{ mb: { xs: 2 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro__c8cwfx6evqgm_large.png"
              alt="image"
            />
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro_swatches__ev9n1tmtg8gi_large.png"
              alt="image"
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
              }}
            >
              iPad Pro
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              The ultimate iPad experience with the most advanced technology.
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              From ₹81900.00*
            </Typography>
            <Button sx={{ ...theme.navbarBottom.styleBuyButton }}>Buy</Button>
          </CardContent>
          <CardActions sx={{ borderBottom: "1px solid #ccc" }}>
            <Button
              size="small"
              endIcon={<ChevronRightIcon color="primary" />}
              sx={{
                letterSpacing: { xs: " -0.256px" },
              }}
            >
              Learn more
            </Button>
          </CardActions>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
              }}
            >
              32.77 cm or <br /> 27.96 cm
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              (12.9″) Liquid Retina XDR <br /> display or <br /> (11″) Liquid
              Retina display◊
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              ProMotion technology
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              P3 wide colour
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              Anti-reflective coating
            </Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Box>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m2__fe9jxfp0b82m_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                M2 chip
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Ultra Wide <br />
                front camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                TrueDepth camera <br />
                system
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_dual_lens_1__d6i1ailzbb8m_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Wide camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                10MP Ultra Wide camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                4K video, ProRes
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_face__vp0sedg5lmaq_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Face ID
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_thunderbolt_usb_c__dr8q9qvwe1aq_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                USB‑C connector <br /> with support for
                <br />
                Thunderbolt / USB 4
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                5G capable◊◊
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Apple Pencil <br />
                (2nd generation)
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Supports Apple Pencil <br /> (USB‑C)
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Magic <br /> Keyboard
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* second grid item */}
      <Grid item>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "210px",
          }}
        >
          <Box sx={{ mb: { xs: 2 }, mt: { xs: 3 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_air__o7xv886z01e2_large.png"
              alt="image"
            />
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_air_swatches__p311im14bzuy_large.png"
              alt="image"
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
              }}
            >
              iPad Air
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              Serious performance in a thin and light design.
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              From ₹59900.00*
            </Typography>
            <Button sx={{ ...theme.navbarBottom.styleBuyButton }}>Buy</Button>
          </CardContent>
          <CardActions sx={{ borderBottom: "1px solid #ccc" }}>
            <Button
              size="small"
              endIcon={<ChevronRightIcon color="primary" />}
              sx={{
                letterSpacing: { xs: " -0.256px" },
              }}
            >
              Learn more
            </Button>
          </CardActions>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
                mb: { xs: 6 },
              }}
            >
              27.69 cm
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 5 },
              }}
            >
              (10.9″) Liquid Retina display◊
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              -
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              P3 wide colour
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              Anti-reflective coating
            </Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Box>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m1__c8wjw7gzq2y6_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                M1 chip
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Ultra Wide <br />
                front camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 7 },
                }}
              >
                -
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_single_lens_6__e03emcvk2cuq_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Wide camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                -
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                4K video
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Touch ID in top button
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_usb_c__dtav07hlkas2_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 8 },
                }}
              >
                USB‑C connector
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                5G capable◊◊
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Apple Pencil <br />
                (2nd generation)
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Supports Apple Pencil <br /> (USB‑C)
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Magic <br /> Keyboard
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* third grid item */}
      <Grid item>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "210px",
          }}
        >
          <Box sx={{ mb: { xs: 2 }, mt: { xs: 3 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_9__fnu1ny10hze6_large.png"
              alt="image"
            />
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_9_swatches__byd83myql22q_large.png"
              alt="image"
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
                mb: { xs: 1 },
              }}
            >
              iPad
              <Typography sx={{ fontSize: { xs: "12px" } }}>
                10th generation
              </Typography>
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              The ultimate iPad experience with the most advanced technology.
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              From ₹81900.00*
            </Typography>
            <Button sx={{ ...theme.navbarBottom.styleBuyButton }}>Buy</Button>
          </CardContent>
          <CardActions sx={{ borderBottom: "1px solid #ccc" }}>
            <Button
              size="small"
              endIcon={<ChevronRightIcon color="primary" />}
              sx={{
                letterSpacing: { xs: " -0.256px" },
              }}
            >
              Learn more
            </Button>
          </CardActions>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
                mb: { xs: 6 },
              }}
            >
              27.69 cm
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 5 },
              }}
            >
              (10.9″) Liquid Retina display◊
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              -
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              sRGB colour
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              -
            </Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Box>
              <img
                src="https://apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_a14__ek20bqisjy82_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                A14 Bionic chip
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_landscape__bsdt4h72w98i_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Landscape 12MP Ultra Wide <br /> front camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 8 },
                }}
              >
                -
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_single_lens_6__e03emcvk2cuq_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Wide camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                -
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                4K video
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Touch ID in top button
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_usb_c__dtav07hlkas2_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 8 },
                }}
              >
                USB‑C connector
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                5G capable◊◊
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Apple Pencil <br />
                (USB‑C)
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Supports Apple Pencil <br /> (1st generation)◊◊◊
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Magic <br /> Keyboard Folio
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* fourth grid item */}
      <Grid item>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "210px",
          }}
        >
          <Box sx={{ mb: { xs: 2 }, mt: { xs: 3 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_2__bnhv3wzs1tle_large.png"
              alt="image"
            />
          </Box>
          <Box sx={{ mb: { xs: 2 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro_swatches__ev9n1tmtg8gi_large.png"
              alt="image"
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
                mb: { xs: 1 },
              }}
            >
              iPad
              <Typography sx={{ fontSize: { xs: "12px" } }}>
                9th generation
              </Typography>
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              All the essentials in the most affordable iPad.
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              From ₹32900.00*
            </Typography>
            <Button sx={{ ...theme.navbarBottom.styleBuyButton }}>Buy</Button>
          </CardContent>
          <CardActions sx={{ borderBottom: "1px solid #ccc" }}>
            <Button
              size="small"
              endIcon={<ChevronRightIcon color="primary" />}
              sx={{
                letterSpacing: { xs: " -0.256px" },
              }}
            >
              Learn more
            </Button>
          </CardActions>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
                mb: { xs: 5 },
              }}
            >
              25.91 cm
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 6 },
              }}
            >
              (10.2″) Retina display
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              -
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              sRGB colour
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              -
            </Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Box>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_a13__c6oko0hr9laq_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                A13 Bionic chip
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Ultra Wide <br /> front camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 7 },
                }}
              >
                -
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_single_lens_3__giqpcnwpyuai_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                8MP Wide camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                -
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                1080p video
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_touch__edmweo23dkia_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Touch ID in Home button
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_lightning__zak5kvysdpem_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 8 },
                }}
              >
                Lightning connector
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_4g__fzb9emuxa4yi_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                4G LTE cellular◊◊
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_1stgen__den0hxwmlvo2_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Apple Pencil (1st generation)
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 7 },
                }}
              >
                .
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_smart__fz9elcrttoq6_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports <br /> Smart Keyboard
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* fifth grid item */}
      <Grid item>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "210px",
          }}
        >
          <Box sx={{ mb: { xs: 2 }, mt: { xs: 7 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_mini__chf568xn8i1y_large.png"
              alt="image"
            />
          </Box>
          <Box sx={{ mb: { lg: 3 } }}>
            <img
              src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_mini_swatches__canrshdqidqq_large.png"
              alt="image"
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
              }}
            >
              iPad mini
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              The full iPad experience designed to fit in one hand.
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
              }}
            >
              From ₹49900.00*
            </Typography>
            <Button sx={{ ...theme.navbarBottom.styleBuyButton }}>Buy</Button>
          </CardContent>
          <CardActions sx={{ borderBottom: "1px solid #ccc" }}>
            <Button
              size="small"
              endIcon={<ChevronRightIcon color="primary" />}
              sx={{
                letterSpacing: { lg: " -0.256px" },
              }}
            >
              Learn more
            </Button>
          </CardActions>

          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                ...theme.iPadCards.type1,
                mb: { xs: 5 },
              }}
            >
              21.08 cm
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 5 },
              }}
            >
              (8.3″) Liquid Retina display◊
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              -
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              P3 wide colour
            </Typography>
            <Typography
              sx={{
                ...theme.iPadCards.type2,
                mb: { xs: 1 },
              }}
            >
              Anti-reflective coating
            </Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Box>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_a15__d7eq47ychcwi_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                A15 Bionic chip
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Ultra Wide <br />
                front camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 8 },
                }}
              >
                -
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_single_lens_7__eiopkbtv5kcy_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                12MP Wide camera
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                -
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                4K video
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                Touch ID in top button
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_usb_c__dtav07hlkas2_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 8 },
                }}
              >
                USB‑C connector
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 4 },
                }}
              >
                5G capable◊◊
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports Apple Pencil <br />
                (2nd generation)
              </Typography>
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                  mb: { xs: 5 },
                }}
              >
                Supports Apple Pencil <br /> (USB‑C)
              </Typography>
              <img
                src="https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_bluetooth__dbr0pyxio2uu_large.png"
                alt="image"
              />
              <Typography
                sx={{
                  ...theme.iPadCards.type2,
                }}
              >
                Supports <br /> Bluetooth keyboards
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
