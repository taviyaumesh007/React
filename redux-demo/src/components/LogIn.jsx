import React, { useState } from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { pink } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const LogIn = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const navigate = useNavigate();

  const logInForm = (credentials) => {
    console.log("credentials", credentials);
    const url =
      "https://messagingtest.vitelglobal.com/nodejs/web/user/login/admin";

    return axios.post(url, credentials);
  };

  const [logIn, setLogIn] = useState({
    user_email: "admin@gmail.com",
    user_password: "Admin@123",
  });
  console.log(logIn);

  console.log("errorMsg======", errorMsg);
  console.log("successMsg======", successMsg);
  const handleSubmit = (event) => {
    event.preventDefault();
    logInForm(logIn)
      .then((response) => {
        const {
          data: {
            message,
            user: { token },
          },
        } = response;

        localStorage.setItem("myToken", JSON.stringify({ token }));
        navigate({ pathname: "/comanydetails" });
        setSuccessMsg(message);
        // setErrorMsg(null);
      })
      .catch((error) => {
        const {
          error: {
            data: { message },
          },
        } = error;
        navigate({ pathname: "/log-in" });
        setErrorMsg(message);
        // setSuccessMsg(null);
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setLogIn({ ...logIn, [name]: value });
  };

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
              name="user_email"
              value={logIn.user_email}
              variant="outlined"
              sx={{
                width: "200px",
              }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="user_password"
              value={logIn.user_password}
              variant="outlined"
              onChange={handleChange}
            />
          </Box>
          {successMsg && <Alert severity="success">{successMsg}</Alert>}
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

          {/* Button */}
          <Box sx={{ padding: "20px" }}>
            <Link>
              <Button
                onClick={handleSubmit}
                sx={{ padding: "9px 250px 10px 250px" }}
                variant="contained"
              >
                Sign In
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LogIn;
