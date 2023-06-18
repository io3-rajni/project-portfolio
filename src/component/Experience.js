import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";
import "./Exprience.css";
import { experienceData } from "./Config";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  return (
    <>
      {/* <Typography component="img" className="bigImage"> */}
      <VerticalTimeline className="bigImage" sx={{ width: "100%" }}>
        {experienceData?.map((item, i) => {
          console.log("Experience", item);
          return <ExperienceCard key={i} item={item} />;
        })}
      </VerticalTimeline>
      {/* </Typography> */}
    </>
  );
};
export default Experience;
