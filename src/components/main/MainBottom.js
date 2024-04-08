import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./MainTop.css";

export const MainBottom = () => {
  return (
    <>
      {/* 13th grid container */}
      <Grid
        container
        sx={{
          justifyContent: { xs: "space-around" },
          alignItems: { xs: "center" },
          rowGap: { xs: 8 },
          px: { xs: 2 },
          my: { xs: 6 },
        }}
      >
        <Grid item md={7} order={{ md: 1, xs: 2 }} sx={{ ml: { lg: -10 } }}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/create/audio__gfu442tp2iie_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item md={4} order={{ md: 2, xs: 1 }}>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/create/audio_icon__ft4xfuj0a2em_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "17px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.3" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
                maxWidth: { md: "285px", xs: "456px" },
                mt: { xs: 2 },
              }}
            >
              Record and refine from anywhere with high-quality built-in{" "}
              <span style={{ color: "#000" }}>mics</span> and{" "}
              <span style={{ color: "#000" }}> landscape stereo speakers</span>.
              Start a podcast, compose a beat, score a film — your creative
              projects sound fantastic.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* 14th grid container */}
      <Grid
        container
        alignItems="center"
        columnGap={6}
        sx={{ my: { xs: 6 }, px: { lg: 0, xs: 2 } }}
        rowGap={4}
      >
        <Grid
          item
          sm={7}
          pl={4}
          sx={{ ml: { lg: -20 } }}
          order={{ sm: 1, xs: 2 }}
        >
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/create/camera__f13edjpwgmi6_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item sm={3} order={{ sm: 1, xs: 1 }}>
          <Grid
            container
            justifyContent="center"
            flexDirection="column"
            rowGap={2}
          >
            <Grid item>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/create/camera_icon__bsltyrlo2pw2_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  maxWidth: { xs: "287px" },
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
                  Shoot content with the{" "}
                  <span style={{ color: "#111" }}>12MP Wide back camera</span>.
                  Snap and retouch photos, edit videos in 4K, and scan and mark
                  up documents — all on iPad.
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
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/create/camera_snipe__fnef1ezxusq6_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* 15th grid container */}
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
              Get in touch. <br />
              Stay in frame.
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
              Get in touch. Stay in frame.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "596px" },
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
              With the new{" "}
              <span style={{ color: "#111" }}>
                landscape 12MP Ultra Wide front camera
              </span>
              , you’ll be perfectly in frame whether you’re on a FaceTime call,
              attending a video conference or recording a selfie. And with
              <span style={{ color: "#111" }}>Centre Stage</span>, the camera
              automatically adjusts to keep you centred in the shot.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* 16th grid container - video  */}
      {/* video access denied */}

      {/* 17th grid container */}
      <Grid
        container
        sx={{
          justifyContent: { xs: "center" },
          rowGap: { xs: 4 },
          my: { xs: 6 },
          px: { sm: 8, xs: 2 },
        }}
      >
        <Grid item order={{ sm: 1, xs: 2 }}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/connect/stream__e847ej5vdz6m_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item order={{ sm: 2, xs: 1 }}>
          <Box
            sx={{
              maxWidth: { xs: "530px" },
              mr: { md: 60 },
            }}
          >
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/connect/stream_icon__dsfi5we0eqye_large.png"
              alt="image"
            />
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
              Download files, play games online and stream movies with{" "}
              <span style={{ color: "#111" }}>Wi-Fi 6</span> . And when you’re
              away from Wi-Fi, you can access fast cellular connections. Watch.
              Lea
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* 18th grid container */}
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
              Watch. Learn. <br />
              And level up.
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
              Watch. Learn. And level up.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "516px" },
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
              Dive into your favourite shows, apps and games on the beautiful
              27.69-centimetre (10.9″) <br /> Liquid Retina display. And with{" "}
              <span style={{ color: "#111" }}>True Tone</span> technology, it’s
              comfortable to view in any light.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* 19th grid container */}
      <Grid
        container
        sx={{
          justifyContent: { xs: "center" },
          my: { xs: 10 },
          px: { sm: 20, xs: 2 },
        }}
      >
        <Grid item>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/watch-learn-play/display__bd96ehphmno2_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>

      {/* 20th grid container */}
      <Grid
        container
        sx={{
          justifyContent: { md: "end", xs: "center" },
          alignItems: { xs: "center" },
          columnGap: { xs: 2 },
          rowGap: { xs: 4 },
          px: { md: 2, sm: 10, xs: 4 },
          my: { xs: 6 },
        }}
      >
        <Grid item>
          <Box
            sx={{
              maxWidth: { md: "350px", xs: "540px" },
            }}
          >
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/watch-learn-play/ar_icon__f1ug37tsrwq6_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "18px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
                mt: { xs: 4 },
              }}
            >
              Learn a new language with Duolingo, enrol in a MasterClass and
              take your lessons to the next level with immersive{" "}
              <span style={{ color: "#111" }}>AR experiences</span>. You can
              learn just about anything with iPad.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Grid container sx={{ justifyContent: { xs: "end" } }}>
            <Grid item order={{ sm: 1, xs: 2 }}>
              <Box>
                <img
                  src="	https://www.apple.com/v/ipad-10.9/c/images/overview/watch-learn-play/ar__dgn4k4jpves2_large.jpg"
                  alt="image"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
            <Grid item sx={{ mr: { sm: 20 } }} order={{ sm: 2, xs: 1 }}>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/watch-learn-play/ar_snipe__faco4sd28mye_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* 21th grid container */}
      <Grid
        container
        sx={{
          justifyContent: { md: "end", xs: "center" },
          alignItems: { xs: "center" },
          columnGap: { xs: 4 },
          rowGap: { xs: 4 },
          px: { md: 2, sm: 10, xs: 4 },
          my: { xs: 6 },
        }}
      >
        <Grid item>
          <Box
            sx={{
              maxWidth: { md: "320px", xs: "540px" },
              mb: { md: 28 },
            }}
          >
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/watch-learn-play/games_icon__c3g0tnirjhkm_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "18px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
                mt: { xs: 2 },
              }}
            >
              Play graphics-intensive games. Invite friends to join in with{" "}
              <span style={{ color: "#111" }}>SharePlay</span>. You can also
              pair your favourite gaming controller with iPad.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/watch-learn-play/games__efnfyn7nggqe_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>

      {/* 22th grid container */}
      <Grid container sx={{ px: { md: 20, sm: 10, xs: 4 }, my: { xs: 15 } }}>
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
              Jot for joy. <br />
              Type with ease.
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
              Jot for joy. Type with ease.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "516px" },
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
              Expand what you can do with everyday essentials designed just for
              iPad, like <span style={{ color: "#111" }}> Apple Pencil</span>{" "}
              and the{" "}
              <span style={{ color: "#111" }}>Magic Keyboard Folio</span>. Add a
              colourful Smart Folio for front and back protection. And connect
              to drives, docks, cameras and more using USB‑C.2
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* 23rd grid container */}
      <Grid
        container
        sx={{
          justifyContent: { xs: "center" },
          alignItems: { xs: "end" },
          columnGap: { xs: 2 },
          rowGap: { xs: 4 },
          px: { md: 2, sm: 10, xs: 4 },
          my: { xs: 6 },
        }}
      >
        <Grid item md={6}>
          <Grid container sx={{ justifyContent: { xs: "end" } }}>
            <Grid item order={{ sm: 2 }}>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/ipad-accessories/pencil__ez27hx0dg0om_large.jpg"
                  alt="image"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
            <Grid item sx={{ mr: { sm: 20 } }} order={{ sm: 1 }}>
              <Box>
                <img
                  src="https://www.apple.com/v/ipad-10.9/c/images/overview/ipad-accessories/pencil_snipe__bsags2z7duvm_large.png"
                  alt="image"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            sx={{
              maxWidth: { md: "280px", xs: "540px" },
              mb: { md: 12 },
            }}
          >
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/ipad-accessories/pencil_icon__d8whkzvineoi_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "18px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.176px" },
                color: "#86868b",
                mt: { xs: 2 },
              }}
            >
              <span style={{ color: "#111" }}>Apple Pencil</span> is great for
              taking notes, journaling, and all kinds of drawing and
              illustrating. It delivers pixel‑perfect precision and
              imperceptible lag. So it’s as natural to use as a pencil.
            </Typography>
            <Box sx={{ display: { md: "block", xs: "none" }, mt: { xs: 2 } }}>
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
                Learn more about
                <Box display="flex">
                  Apple Pencil
                  <KeyboardArrowRightIcon />
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                mt: { xs: 4 },
              }}
            >
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
                Learn more about Apple Pencil
                <KeyboardArrowRightIcon />
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 24rth grid container */}
      {/* image not accessible */}

      {/* 25th grid container */}
      <Grid container justifyContent="end">
        <Grid item>
          <Box
            sx={{
              maxWidth: { md: "366px", xs: "540px" },
              mr: { md: 20 },
              my: { md: 10, xs: 10 },
              px: { xs: 2 },
            }}
          >
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/ipad-accessories/folio_icon__l4z3yxb8nmaa_large.png"
              alt="image"
            />
            <Typography
              component="p"
              sx={{
                fontSize: { sm: "21px", xs: "18px" },
                fontWeight: { xs: 600 },
                lineHeight: { xs: "1.4" },
                letterSpacing: { xs: "0.096px" },
                color: "#86868b",
                mt: { xs: 2 },
              }}
            >
              Type comfortably and use a trackpad for precision tasks, like
              editing a spreadsheet, with the Magic Keyboard Folio. Quickly
              adjust the volume or search for a file using the 14‑key function
              row. The versatile design features two pieces that attach
              magnetically: a detachable keyboard and a protective back panel
              with an adjustable stand for flexible viewing.
            </Typography>
            <Box sx={{ display: { md: "block", xs: "none" }, mt: { xs: 2 } }}>
              <Typography
                sx={{
                  color: "#0066CC",
                  fontSize: { sm: "20px", xs: "17px" },
                  fontWeight: { xs: 600 },
                  lineHeight: { xs: "1.3" },
                  letterSpacing: { xs: "0.116px" },
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Learn more about keyboards
                <Box display="flex">
                  for iPad
                  <KeyboardArrowRightIcon />
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                mt: { xs: 4 },
              }}
            >
              <Typography
                sx={{
                  color: "#0066CC",
                  fontSize: { sm: "20px", xs: "17px" },
                  fontWeight: { xs: 600 },
                  lineHeight: { xs: "1.3" },
                  letterSpacing: { xs: "0.116px" },
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Learn more about keyboards for iPad
                <KeyboardArrowRightIcon />
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 26th grid container */}
      <Grid
        container
        sx={{
          mr: { md: 20 },
          my: { xs: 15 },
          justifyContent: { sm: "center", xs: "start" },
          px: { xs: 4 },
        }}
      >
        <Grid item sx={{ mr: { md: 60 } }}>
          <Box>
            <img
              src="https://www.apple.com/v/ipad-10.9/c/images/overview/ipad-accessories/folio_snipe__e6wizliaojki_large.png"
              alt="image"
            />
          </Box>
        </Grid>
      </Grid>

      {/* 27th grid container */}
      <Grid container sx={{ px: { md: 20, sm: 10, xs: 2 }, my: { xs: 15 } }}>
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
              Amazing apps? <br />
              Apps‑olutely.
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
              Amazing apps? Apps‑olutely.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "516px" },
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
              iPad comes with powerful and capable apps like Photos, Maps,
              Messages, Mail and Safari. And with over a million{" "}
              <span style={{ color: "#111" }}>apps on the App</span>
              Store designed just for iPad, you’ll find the right app for
              anything you want to do. Manage a project with Trello, collaborate
              on the infinite canvas of Freeform or finish your term paper with
              Microsoft Word.
            </Typography>
            <Box
              sx={{
                mt: { xs: 2 },
              }}
            >
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
                Discover apps on the App Store
                <CallMadeIcon />
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 28th grid container */}
      <Grid
        container
        sx={{
          justifyContent: { xs: "center" },
          mb: { xs: 8 },
          rowGap: { xs: 4 },
        }}
      >
        <Grid item sx={{ mt: { lg: 170 } }} order={{ lg: 1, xs: 2 }}>
          <Box
            sx={{
              maxWidth: { xs: "164px" },
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "12px" },
                fontWeight: { xs: 400 },
                lineHeight: { xs: "1.3" },
                letterSpacing: { xs: "0.176px" },
                color: "#888",
              }}
            >
              Shown above: Freeform, Procreate, Apple Books, Microsoft Word,
              Microsoft Excel with Webex Meetings
            </Typography>
          </Box>
        </Grid>
        <Grid item order={{ lg: 2, xs: 1 }}>
          <Box>
            <img
              src="https://www.apple.com/in/ipad-10.9/images/overview/apps/apps__cy66efj5b9yu_large.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
