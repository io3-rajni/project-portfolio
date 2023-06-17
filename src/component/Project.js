import * as React from "react";
import { motion } from "framer-motion";
// import { MotionAnimate } from "react-motion-animate";
import { TextVariant } from "./TextVariant";
import { Grid, Box, Typography, container } from "@mui/material";
import { MiniProject, GitIcon } from "./Config";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

export default function Project() {
  console.log("bfhgfyvg", MiniProject);
  return (
    <>
      <Grid
        container
        spacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          margin: "0px",
          background: "#000",
          paddingLeft: "11rem",
        }}
      >
        <Grid xs={12}>
          <Box sx={{ paddingTop: "4%", width: "60%" }}>
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
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "50vh",
            flexWrap: "wrap",
            paddingRight: "5%",
            height: "129vh",
            justifyContent: "space-evenly",
          }}
        >
          {MiniProject?.map((item, i) => {
            console.log("item ", item);
            return (
              <>
                <Card
                  sx={{
                    maxWidth: 345,
                    width: "17rem",
                    background: "white",
                    boxShadow: " 1px 5px 88px 9px",
                    borderRadius: "25px",
                    marginTop: "5%",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item?.img}
                      alt="image"
                      sx={{
                        backgroundColor: "blue",
                        width: "17rem",
                        height: "15rem",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {item?.description}
                      </Typography>
                      {GitIcon?.map((item, i) => {
                        return (
                          <>
                            <Box
                              sx={{
                                height: "3rem",
                                background: "black",
                                borderRadius: "25px",
                              }}
                            >
                              <a href="https://github.com/io3-rajni">
                                <img
                                  src={item.img}
                                  backgroundColor="black"
                                  height="50rem"
                                />
                              </a>
                            </Box>
                          </>
                        );
                      })}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </>
            );
          })}
        </Box>
      </Grid>
    </>
  );
}
