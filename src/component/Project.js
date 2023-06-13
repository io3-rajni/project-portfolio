import * as React from "react";
import { motion } from "framer-motion";
import { TextVariant } from "./TextVariant";
import { Grid, Box, Typography, container } from "@mui/material";
import { CompanyCard } from "./Config";
export default function Project() {
  console.log("bfhgfyvg", CompanyCard);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0px",
          width: "100%",
          height: "100vh",
          background: "#000",
          paddingLeft: "11rem",
        }}
      >
        <Grid xs={8}>
          <Box sx={{ paddingTop: "8%" }}>
            <motion.div variants={TextVariant()}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "700", color: "#fff" }}
              >
                CASE STUDIES
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  paddingTop: "8px",
                  fontWeight: "900",
                  fontSize: "4rem",
                  color: "#fff",
                }}
              >
                Projects.
              </Typography>
            </motion.div>

            <Box sx={{ paddingTop: "4%" }}>
              <Typography
                variant="body"
                sx={{ color: "#fff", fontSize: "19px" }}
              >
                These projects demonstrate my expertise with practical examples
                of some of my work, including brief descriptions and links to
                code repositories and live demos. They showcase my ability to
                tackle intricate challenges, adapt to various technologies, and
                efficiently oversee projects.
              </Typography>
            </Box>
          </Box>
        </Grid>
        {CompanyCard?.map((item, i) => {
          console.log("item", item);
          return (
            <Box>
              <Typography>{item?.img}</Typography>
            </Box>
          );
        })}
      </Grid>
    </>
  );
}
