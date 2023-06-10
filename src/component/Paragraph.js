import * as React from "react";
// import AdbIcon from "@mui/icons-material/Adb";
// import MenuIcon from "@mui/icons-material/Menu";
// import assets from "../assets/backgrounds/world-map.png";
import { Grid, Box, Typography, container } from "@mui/material";
export default function Paragraph() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "0px",
          width: "100%",
          background: "#F4F4F6",
          paddingLeft: "11rem",
        }}
      >
        <Grid xs={8} sx={{}}>
          <Box sx={{ paddingTop: "8%" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", color: "#b5b0b0" }}
            >
              INTRODUCTION
            </Typography>

            <Typography
              variant="h4"
              sx={{ paddingTop: "8px", fontWeight: "900", fontSize: "4rem" }}
            >
              Overview.
            </Typography>
            <Box sx={{ paddingTop: "4%" }}>
              <Typography
                variant="body"
                sx={{ color: "#b5b0b0", fontSize: "19px" }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis sapiente ipsum dolorum dicta eaque cumque inventore
                molestias, beatae ea quaerat alias accusamus voluptas autem!
                Alias odit voluptates in totam vitae dignissimos minus eaque
                culpa unde tempore dolore aperiam obcaecati voluptatum aliquam
                corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum
                doloribus.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
