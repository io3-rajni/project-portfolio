import "./style.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Item from "@mui/material/Box";

const CityImage = () => {
  return (
    <>
      <Grid container className="largeImg" sx={{ padding: " 12% 0px 0px 10%" }}>
        <Grid item xs={12}>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", color: "#b5b0b0" }}
            >
              MY SKILLS
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                paddingTop: "8px",
                fontWeight: "900",
                fontSize: "4rem",
                color: "white",
              }}
            >
              Technologies.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
};
export default CityImage;
