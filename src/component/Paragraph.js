import * as React from "react";
import { motion } from "framer-motion";
import { TextVariant } from "./TextVariant";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
        <Grid xs={8}>
          <Box sx={{ paddingTop: "8%" }}>
            <motion.div variants={TextVariant()}>
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
            </motion.div>

            <Box sx={{ paddingTop: "4%" }}>
              <Typography
                variant="body"
                sx={{ color: "#b5b0b0", fontSize: "19px" }}
              >
                I am a Frontend Developer in ReactJS. I have
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* <ImagfdeList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Grid>
    </>
  );
}
