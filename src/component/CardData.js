import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardConfig } from "./CardConfig";

export default function CardData() {
  console.log("data config", CardConfig);
  return (
    <>
      {CardConfig?.map((item, i) => {
        console.log("item ", item);
        return (
          <Card sx={{ maxWidth: 345, background: "black" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item?.img}
                alt="image"
                backGround="black"
                sx={{ width: "5rem", height: "5rem" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
