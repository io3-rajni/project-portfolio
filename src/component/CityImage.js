import "./style.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Item from "@mui/material/Box";
import { tech } from "./Config";

const CityImage = () => {
  console.log("hgrhfgrfefgvfhdfw", tech);
  return (
    <>
      <Grid
        item
        container
        className="largeImg"
        sx={{ padding: " 12% 0px 0px 10%" }}
      >
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
        <Grid item xs={12}>
          {tech?.map((item, i) => {
            console.log("item", item);
            return (
              <Box>
                <img src={item?.img} />
                {/* <ballCanvas icons={item.icon} /> */}
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
};
export default CityImage;
