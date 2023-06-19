import {
  FormControl,
  TextField,
  Grid,
  Typography,
  Box,
  Input,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
// import Textarea from "@mui/Textarea";
const About = () => {
  const emailRegex = "[a-zA-Z0-9]+.[a-zA-Z0-9]+@gmail.com";
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState("");
  const handleEmail = (event) => {
    if (event?.target?.value.match(emailRegex)) {
      setEmail(event?.target?.value);
    } else {
      (event.target.value != emailRegex)("enter valid email");
    }
  };
  return (
    <>
      <Grid item container>
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
          {/* <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl> */}
          {/* <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="password" />
          </FormControl> */}
        </Grid>
        <FormControl sx={{ color: "white" }}>
          <FormLabel>Your Name</FormLabel>
          <TextField type="text" placeholder="What is your name">
            What is your name
          </TextField>
          <FormLabel>Your Email</FormLabel>
          <TextField
            type="email"
            placeholder="enter your email"
            name="email"
            value={email}
            onChange={(event) => handleEmail(event)}
          ></TextField>
          <FormLabel>Message</FormLabel>
          {/* <Textarea placeholder="Type anything…" minRows={2} />; */}
          {/* <Textarea /> */}
        </FormControl>
      </Grid>
    </>
  );
};
export default About;
