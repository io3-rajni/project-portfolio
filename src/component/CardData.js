import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

import { CardConfig } from "./Config";

export default function CardData() {
  console.log("data config", CardConfig);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          // marginLeft: "4.9rem",
          justifyContent: "space-evenly",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          backgroundColor: "#F4F4F6",
        }}
      >
        {CardConfig?.map((item, i) => {
          console.log("item ", item);
          return (
            <Card
              sx={{
                maxWidth: 345,
                width: "17rem",
                background: "black",
                boxShadow: " 1px 5px 88px 9px",
                borderRadius: "25px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item?.img}
                  alt="image"
                  sx={{
                    width: "5rem",
                    height: "5rem",
                    padding: "58px 0px 1px 6rem",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingTop: "4rem",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white", width: "29%" }}
                  >
                    {item?.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
