import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Grid, Typography, Box } from "@mui/material";
import "react-vertical-timeline-component/style.min.css";

import "./Exprience.css";
import { experienceData } from "./Config";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  return (
    <>
      <Grid sx={{ backgroundColor: "#000" }}>
        <Grid item xs={12} sx={{ padding: " 6% 0px 0px 8%" }}>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", color: "#b5b0b0" }}
            >
              WHAT I'VE DONE SO FAR
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
              Work Experience.
            </Typography>
          </Box>
        </Grid>
        <VerticalTimeline className="bigImage" sx={{ width: "100%" }}>
          {experienceData?.map((item, i) => {
            console.log("Experience", item);
            return <ExperienceCard key={i} item={item} />;
          })}
        </VerticalTimeline>
      </Grid>
    </>
  );
};
export default Experience;
