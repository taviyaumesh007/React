import React from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { pink } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LogIn = () => {
  return (
    <div className="log-in">
      <Box
        sx={{
          width: 600,
          height: 450,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* LOCK ICON */}
          <Box
            sx={{
              background: "#0FBD81",
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              margin: "20px",
            }}
          >
            <LockOutlinedIcon sx={{ color: pink[50] }} />
          </Box>
          {/* ADDMIN */}
          <Box>
            <h1>Admin Sign In</h1>
          </Box>
          {/* Input Box */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "65ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-disabled"
              label="Email Address"
              variant="outlined"
              sx={{
                width: "200px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>
          {/* Button */}
          <Box sx={{ padding: "20px" }}>
            <Button
              sx={{ padding: "9px 250px 10px 250px" }}
              variant="contained"
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LogIn;
