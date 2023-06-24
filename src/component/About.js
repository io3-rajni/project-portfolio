// import { Label } from "@mui/icons-material";
import {
  FormControl,
  TextField,
  Grid,
  Typography,
  Box,
  Input,
  TextareaAutosize,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
// import Stack from "@mui/material/Stack";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";
import "./TextArea.css";
const About = () => {
  // const emailRegex = "[a-zA-Z0-9]+.[a-zA-Z0-9]+@gmail.com";
  // const [email, setEmail] = useState();
  // const [showError, setShowError] = useState("");
  // const handleEmail = (event) => {
  //   if (event?.target?.value.match(emailRegex)) {
  //     setEmail(event?.target?.value);
  //   } else {
  //     setShowError("Enter Valid Email");
  //   }
  // };
  // console.log("ShowError", showError);
  return (
    <>
      <Grid
        item
        container
        spacing={1}
        sx={{ backgroundColor: "black", height: "153vh" }}
      >
        <Box
          sx={{
            width: "60%",
            backgroundColor: "#292929",
            marginTop: "5%",
            padding: " 1% 0px 0px 6%",
            marginLeft: "10%",
            borderRadius: "35px",
            boxShadow: "5px 0px 6px 3px white",
            height: "123vh",
          }}
          className="mainContainer"
        >
          <Grid item xs={12} sx={{ paddingTop: "4%" }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "700", color: "#b5b0b0" }}
              >
                GET IN TOUCH
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  paddingTop: "8px",
                  fontWeight: "900",
                  fontSize: "4rem",
                  color: "#D4D4D8",
                }}
              >
                Contact.
              </Typography>
            </Box>
          </Grid>
          <Box component="form" noValidate autoComplete="on">
            <div>
              <Typography
                variant="h5"
                sx={{ color: "#D4D4D8", paddingTop: "5%" }}
              >
                Your Name
              </Typography>

              <TextField
                id="outlined-text-input"
                label="Your Name"
                type="text"
                autoComplete="name"
                color="info"
                placeholder="Enter You Name"
                sx={{
                  width: " 80%",
                  backgroundColor: "#C7C7C7",
                  borderRadius: "10px",

                  marginTop: "5%",
                  color: "white",
                  boxShadow: "6px 4px 8px 2px #fff",
                }}
              />
            </div>
            <div>
              <Typography
                variant="h5"
                sx={{ color: "#D4D4D8", paddingTop: "5%" }}
              >
                Your Email{" "}
              </Typography>

              <TextField
                id="outlined-text-input"
                label="Email"
                type="email"
                autoComplete="on"
                placeholder="Enter You Email"
                sx={{
                  width: " 80%",
                  backgroundColor: "#C7C7C7",
                  borderRadius: "10px",
                  marginTop: "5%",
                  color: "white",
                  boxShadow: "6px 4px 8px 2px #fff",
                }}
              />
            </div>
            <div>
              <Typography
                variant="h5"
                sx={{
                  color: "#D4D4D8",
                  paddingTop: "5%",
                }}
              >
                Message
              </Typography>
              <Box sx={{}}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="what is your Massage"
                  className="textArea"
                />
              </Box>
            </div>
            <Stack direction="row" spacing={2} sx={{ marginTop: "3rem" }}>
              <Button
                variant="contained"
                endIcon={<DraftsRoundedIcon />}
                sx={{
                  backgroundColor: "#C7C7C7",
                  color: "#000",
                  boxShadow: "6px 4px 8px 2px #fff",
                  border: "1px solid black",
                  width: "7rem",
                }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default About;
