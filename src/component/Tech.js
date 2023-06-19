import "./style.css";
import * as React from "react";

import { Grid, Typography, Box } from "@mui/material";
import { tech } from "./Config";
import BallCanvas from "./canvas/Ball";

const CityImage = () => {
  console.log("hgrhfgrfefgvfhdfw", tech);
  return (
    <>
      <Grid item container className="largeImg">
        <Grid item xs={12} sx={{ padding: " 8% 0px 0px 8%" }}>
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
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",

            justifyContent: "space-evenly",
          }}
          direction={"row"}
        >
          {tech?.map((item, i) => {
            console.log("item", item);
            return (
              <Grid
                xs={12}
                sm={12}
                md={2}
                sx={{ width: "12rem", height: "12rem" }}
              >
                <BallCanvas icon={item.img} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default CityImage;
