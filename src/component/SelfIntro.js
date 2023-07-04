import * as React from "react";
import { styled, Grid, Paper, Box, Typography } from "@mui/material";
import "./intro.css";
import { imagePaste } from "./Config";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SelfIntro() {
  return (
    <Box>
      <Box>
        <Grid
          container
          column={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            width: "100%",
            height: "100vh",
            paddingTop: "0px",
            color: "black",
          }}
          className="intro"
        >
          <Grid
            item
            xs={6}
            sx={{
              color: "black",
              background: "transparent",
              height: "40vh",
              width: "100%",
              padding: "10% 0% 0% 10%",
            }}
          >
            <Box sx={{ width: "77%" }}>
              <Typography
                variant="h1"
                sx={{ fontFamily: "fangsong", fontWeight: "900" }}
              >
                HI, I'M
                <Typography
                  variant="h1"
                  sx={{
                    color: "#858585",
                    fontFamily: "fangsong",
                    fontWeight: "900",
                  }}
                >
                  RAJNI MAURYA
                </Typography>
              </Typography>

              <Typography
                variant="h5"
                sx={{ width: "80%", fontWeight: "bold" }}
                column={{ xs: 1, sm: 2, md: 3 }}
              >
                Frontend Developer in React Js.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
