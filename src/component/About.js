// import { Label } from "@mui/icons-material";
import {
  FormControl,
  TextField,
  Grid,
  Typography,
  Box,
  Input,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
// import Textarea from "@mui/Textarea";
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
      <Grid item container spacing={1} sx={{ backgroundColor: "black" }}>
        <Grid item xs={12} sx={{ padding: " 8% 0px 0px 8%" }}>
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
                color: "white",
              }}
            >
              Contact.
            </Typography>
          </Box>
        </Grid>
        <Box component="form" sx={{}} noValidate autoComplete="off">
          <div>
            <Typography variant="h5">Your Name</Typography>

            <TextField
              id="outlined-password-input"
              label="Your Name"
              type="text"
              autoComplete="name"
            />
          </div>
          <div>
            <Typography variant="h5">Your </Typography>

            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="on"
            />
          </div>
          <div>
            <Typography variant="h5">Message</Typography>

            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              // placeholder="Minimum 3 rows"
            ></TextareaAutosize>
          </div>
        </Box>
      </Grid>
    </>
  );
};
export default About;
