import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./MainTop.css";

export const MainTop = () => {
  return (
    <>
      {/* first grid container */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={15}
        px={{ xs: 5 }}
      >
        <Grid item sm={6} xs={10}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/hero/hero__ecv967jz1y82_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{ marginLeft: { lg: "-220px", md: "-140px", sm: "-80px" } }}
        >
          <Grid container alignItems="center" flexDirection="column">
            <Grid item>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/hero/logo__w73ifx9hw766_large.png"
                  alt="image"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "42px", md: "56px", lg: "64px" },
                    fontWeight: "600",
                    lineHeight: "1.12",
                  }}
                >
                  Lovable.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "42px", md: "56px", lg: "64px" },
                    fontWeight: "600",
                    lineHeight: "1.12",
                  }}
                >
                  Drawable.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "42px", md: "56px", lg: "64px" },
                    fontWeight: "600",
                    lineHeight: "1.12",
                  }}
                >
                  Magical.
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ mt: { md: 4, sm: 1, xs: 2 } }}>
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "19px" },
                    fontWeight: "400",
                    lineHeight: "1.12",
                    color: "#474748",
                  }}
                >
                  From ₹39900.00*
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ mt: { md: 4, sm: 1, xs: 2 } }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "19px" },
                    fontWeight: "400",
                    lineHeight: "1.12",
                    color: "#0066CC",
                  }}
                  mr={1}
                >
                  Watch the film
                </Typography>
                <PlayCircleOutlineIcon sx={{ color: "#0066CC" }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* second grid container */}
      <Grid
        container
        justifyContent="center"
        flexDirection="column"
        rowSpacing={-4}
        sx={{ position: "relative" }}
      >
        <Grid
          item
          sx={{
            position: "absolute",
            top: { lg: "240px", md: "180px", sm: "140px", xs: "110px" },
            textAlign: "center",
            width: "100%",
          }}
        >
          <Grid container alignItems="center" flexDirection="column">
            <Grid item>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "28px",
                      sm: "36px",
                      md: "48px",
                      lg: "64px",
                    },
                    fontWeight: "700",
                    letterSpacing: "-1.5px",
                  }}
                >
                  All screen. All colourful.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "28px",
                      sm: "36px",
                      md: "48px",
                      lg: "64px",
                    },
                    fontWeight: "700",
                    letterSpacing: "-1.5px",
                  }}
                >
                  Jot it down. Type it up.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "28px",
                      sm: "36px",
                      md: "48px",
                      lg: "64px",
                    },
                    fontWeight: "700",
                    letterSpacing: "-1.5px",
                  }}
                >
                  Take it with you.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/features/features__eycgjbkikqky_large.jpg"
              alt="image"
              width="100%"
              className="img-responsive"
            />
          </Box>
        </Grid>
      </Grid>

      {/* third grid container */}
      <Grid
        container
        sx={{ px: { md: 20, sm: 10, xs: 4 }, mt: { sm: 20, xs: 15 } }}
      >
        <Grid item>
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { lg: "96px", md: "72px", sm: "64px", xs: "48px" },
                fontWeight: { xs: 700 },
                lineHeight: { xs: 1.04 },
                letterSpacing: { xs: "-2.5px" },
                mb: { sm: 6, xs: 4 },
              }}
            >
              Meet the <br /> redesigned iPad.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "576px" },
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "17px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
              }}
            >
              The all-new iPad is colourfully reimagined to be more capable,
              more intuitive and even more fun. With a new
              <span style={{ color: "#000" }}> all-screen design</span>,
              27.69-centimetre (10.9“) Liquid Retina display and four gorgeous
              colours, iPad delivers a powerful way to get things done, create
              and stay connected. <sup>1</sup>
              Add on essential accessories designed just for iPad and enjoy
              endless versatility for everything you love to do.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* fourth grid container */}
      <Grid
        container
        justifyContent="center"
        sx={{ mt: { xs: 16 }, px: { md: 5, xs: 1 }, position: "relative" }}
      >
        <Grid
          item
          sx={{
            top: { lg: 350, md: 280, sm: 0, xs: -60 },
            left: { lg: 140, md: 40, sm: 0, xs: 18 },
            position: "absolute",
          }}
        >
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/design/fan_snipe1__hwdacd4al3iy_large.png"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item sx={{}}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/design/fan__e9709q800z6u_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            top: { lg: 900, md: 800, sm: 660, xs: 80 },
            right: { lg: 220, md: 120, sm: 60, xs: 240 },
            position: "absolute",
          }}
        >
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/design/fan_snipe2__bxnf7i3t3542_large.png"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            top: { lg: 1560, md: 1490, sm: 1200, xs: 480 },
            left: { lg: 280, md: 150, sm: 80, xs: 40 },
            position: "absolute",
          }}
        >
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/design/fan_snipe3__d54xka548oae_medium.png"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>

      {/* fifth grid container */}
      <Grid
        container
        justifyContent="center"
        columnGap={6}
        sx={{ mt: { sm: 2, xs: 8 }, px: { xs: 2 } }}
      >
        <Grid item md={6} sm={6} pl={4}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/design/modular_endframe__fzkum3tfzzma_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item sm={4}>
          <Grid
            container
            justifyContent="center"
            flexDirection="column"
            rowGap={2}
          >
            <Grid item>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/design/modular_icon__fk8y9la21dme_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  maxWidth: { xs: "327px" },
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: { sm: "21px", xs: "17px" },
                    fontWeight: { xs: 600 },
                    lineHeight: { xs: "1.3" },
                    letterSpacing: { xs: "0.176px" },
                    color: "#86868b",
                  }}
                >
                  Draw, paint and write with{" "}
                  <span style={{ color: "#000" }}>Apple Pencil</span>.Type
                  comfortably, use a trackpad and enjoy content with the
                  versatile two-piece design of the
                  <span style={{ color: "#000" }}>
                    {" "}
                    Magic Keyboard Folio
                  </span>. <sup>2</sup> You can use familiar keyboard shortcuts
                  or the click-anywhere trackpad. And get an incredible typing
                  experience.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/design/snap_endframe__da3oqry1mk66_large.jpg"
                  alt="image"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
            <Grid item sx={{ mt: { sm: -1, xs: -8 } }}>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/design/modular_snipe__cqwmlrs6flzm_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* sixth grid container */}
      <Grid
        container
        // justifyContent="center"
        sx={{
          px: { lg: 10, md: 6, sm: 6, xs: 2 },
          mt: { md: 16, xs: 10 },

          columnGap: { lg: 2, md: 6 },
          justifyContent: { md: "center", xs: "start" },
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sx={{ order: { lg: 1, md: 2 }, mb: { md: 0, xs: 4 } }}
        >
          <Grid
            container
            justifyContent="center"
            flexDirection="column"
            rowGap={2}
          >
            <Grid item>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/design/multiple_apps_icon__fmoopapnluq2_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  maxWidth: { md: "247px", xs: "656px" },
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontSize: { sm: "21px", xs: "17px" },
                    fontWeight: { xs: 600 },
                    lineHeight: { xs: "1.3" },
                    letterSpacing: { xs: "0.176px" },
                    color: "#86868b",
                  }}
                >
                  <span style={{ color: "#000" }}>iPadOS</span> brings it all
                  together and makes everything on iPad feel smooth and easy.
                  Run your favourite apps side by side, edit and share photos
                  with others, and get to all your files.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <Typography
                  sx={{
                    color: "#0066CC",
                    fontSize: { sm: "21px", xs: "17px" },
                    fontWeight: { xs: 600 },
                    lineHeight: { xs: "1.3" },
                    letterSpacing: { xs: "0.176px" },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Learn more
                  <Box display="flex">
                    about iPadOS
                    <KeyboardArrowRightIcon />
                  </Box>
                </Typography>
              </Box>
              <Box sx={{ display: { md: "none", xs: "block" } }}>
                <Typography
                  sx={{
                    color: "#0066CC",
                    fontSize: { sm: "21px", xs: "17px" },
                    fontWeight: { xs: 600 },
                    lineHeight: { xs: "1.3" },
                    letterSpacing: { xs: "0.176px" },
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Learn more about iPadOS
                  <KeyboardArrowRightIcon />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} md={7} sx={{ order: { lg: 2, md: 1 } }}>
          <Grid container alignItems="center" flexDirection="column">
            <Grid item>
              <Box>
                <img
                  src="https://www.apple.com/in/ipad-10.9/images/overview/design/multiple_apps__figbbueogiqi_large.jpg"
                  alt="image"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ ml: { sm: 30, xs: 15 } }}>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/design/multiple_apps_snipe__exkxqmalkd8i_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* seventh grid container */}
      <Grid
        container
        sx={{
          px: { lg: 21, sm: 10, xs: 0 },
          justifyContent: { lg: "start", sm: "center", xs: "end" },
          my: { sm: 10, xs: 6 },
        }}
      >
        <Grid item lg={10} xs={8}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/design/file_locations__b2aqmoimi8ly_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>

      {/* eight grid container */}
      <Grid
        container
        sx={{ px: { md: 20, sm: 10, xs: 4 }, mt: { sm: 20, xs: 15 } }}
      >
        <Grid item>
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { lg: "90px", md: "72px", sm: "64px", xs: "48px" },
                fontWeight: { xs: 700 },
                lineHeight: { xs: 1.04 },
                letterSpacing: { xs: "-2.5px" },
                mb: { sm: 6, xs: 4 },
                display: { sm: "block", xs: "none" },
              }}
            >
              Make quick work <br /> of your work.
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { lg: "96px", md: "72px", sm: "64px", xs: "48px" },
                fontWeight: { xs: 700 },
                lineHeight: { xs: 1.04 },
                letterSpacing: { xs: "-2.5px" },
                mb: { sm: 6, xs: 4 },
                display: { sm: "none", xs: "block" },
              }}
            >
              Make quick work of your work.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "630px" },
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "18px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
              }}
            >
              Get things done — all on one device.{" "}
              <span style={{ color: "#000" }}>
                Take notes, collaborate and work seamlessly
              </span>{" "}
              between apps. From pie charts to pie recipes, iPad is designed for
              all kinds of productivity.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* ninth grid container */}
      <Grid
        container
        sx={{
          my: { sm: 10, xs: 5 },
          justifyContent: { sm: "start", xs: "end" },
          alignItems: { sm: "center" },
          gap: { xs: 2 },
          px: { lg: 18, md: 10, sm: 4, xs: 0 },
        }}
      >
        <Grid item lg={8} sm={8} xs={10} order={{ sm: 1, xs: 2 }}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/get-things-done/collaborate__d8727hjzrey6_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item lg={2} sm={2} xs={6} order={{ sm: 2, xs: 1 }}>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/get-things-done/collaborate_snipe__gfsyatdsle6a_large.png"
              alt="image"
            />
          </Box>
        </Grid>
      </Grid>

      {/* tenth grid container */}
      <Grid
        container
        justifyContent="center"
        sx={{
          px: { lg: 2, sm: 18, xs: 4 },
          my: { xs: 8 },
          rowGap: { lg: 2, xs: 8 },
        }}
      >
        <Grid item lg={8} sx={{ px: { lg: 2 }, order: { lg: 1, xs: 2 } }}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/get-things-done/chip__czit3dxc9s4m_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item lg={5} sx={{ pl: { lg: 16 }, order: { lg: 2, xs: 1 } }}>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/get-things-done/chip_icon__ekf0l92h760y_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "17px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
                maxWidth: { lg: "350px", xs: "456px" },
                mt: { xs: 2 },
              }}
            >
              The <span style={{ color: "#000" }}>A14 Bionic chip</span>{" "}
              delivers power and performance for any activity. Edit a 4K video
              in iMovie, plan a globetrotting vacation with friends or play a
              graphics-intensive game. With all-day battery life, you can do it
              all without skipping a beat.3
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={7} sx={{ mt: { lg: 10 }, order: { lg: 3, xs: 4 } }}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/get-things-done/accessories__f2fb2sj3wyum_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item lg={6} sx={{ mr: { lg: 36 }, order: { lg: 4, xs: 3 } }}>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/get-things-done/keyboard_icon__iaavo3h3y06e_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "17px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
                maxWidth: { lg: "350px", xs: "456px" },
                mt: { xs: 2 },
              }}
            >
              Edit a spreadsheet, finesse a Keynote presentation and take
              amazing notes. The Magic Keyboard Folio gives you a comfortable{" "}
              <span style={{ color: "#000" }}>typing</span> experience and a{" "}
              <span style={{ color: "#000" }}>trackpad</span> for precise
              tasks.2
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* eleventh grid container */}
      <Grid
        container
        sx={{ px: { md: 20, sm: 10, xs: 4 }, my: { sm: 20, xs: 15 } }}
      >
        <Grid item>
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: { lg: "90px", md: "72px", sm: "64px", xs: "48px" },
                fontWeight: { xs: 700 },
                lineHeight: { xs: 1.04 },
                letterSpacing: { xs: "-2.5px" },
                mb: { sm: 6, xs: 4 },
                display: { sm: "block", xs: "none" },
              }}
            >
              Create to your <br />
              heart’s content.
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { lg: "96px", md: "72px", sm: "64px", xs: "48px" },
                fontWeight: { xs: 700 },
                lineHeight: { xs: 1.04 },
                letterSpacing: { xs: "-2.5px" },
                mb: { sm: 6, xs: 4 },
                display: { sm: "none", xs: "block" },
              }}
            >
              Create to your heart’s content.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "630px" },
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "18px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
              }}
            >
              <span style={{ color: "#000" }}>
                Express yourself, draw and brainstorm
              </span>{" "}
              on a flexible creative powerhouse. The stunning 27.69-centimetre
              (10.9″) Liquid Retina display makes an incredible canvas. So you
              can doodle, take notes, mark up documents and a lot more with
              Apple Pencil.2
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* twelveth grid container */}
      <Grid
        container
        sx={{ my: { sm: 10, xs: 6 }, justifyContent: { xs: "center" } }}
      >
        <Grid item>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/create/draw__etgriu0tlfgy_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/create/draw_snipe__e64filk52qie_large.png"
              alt="image"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
