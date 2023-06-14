import * as React from "react";
import { motion } from "framer-motion";
import { TextVariant } from "./TextVariant";
import { Grid, Box, Typography, container } from "@mui/material";
// import { CompanyCard } from "./Config";
export default function Project() {
  // console.log("bfhgfyvg", CompanyCard);
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
        <Grid xs={12}>
          <Box sx={{ paddingTop: "8%", width: "60%" }}>
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
                sx={{ color: "#fff", fontSize: "19px", width: "40%" }}
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
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <Box
                sx={{
                  width: "20rem",
                  height: "20vh",
                  // backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    width: "10rem",
                    height: "20vh",
                    backgroundColor: "Blue",
                  }}
                ></Typography>
                <Typography
                  sx={{
                    width: "10rem",
                    height: "20vh",
                    backgroundColor: "green",
                  }}
                ></Typography>
              </Box>
            </Grid>
            {/* <Grid xs={6}>
              <>3</>
            </Grid>
            <Grid xs={6}>
              <>4</>
            </Grid> */}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
