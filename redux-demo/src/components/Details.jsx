import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../components/Scroll.css";

export default function Details() {
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem("myToken");
  let mytoken = " ";

  console.log(userData);
  if (token) {
    const obj = JSON.parse(token);
    mytoken = obj.token;
  }
  useEffect(() => {
    axios
      .get(
        "https://messagingtest.vitelglobal.com/nodejs/web/company/633596e889f931c123c31802",
        {
          headers: {
            authorization: `${mytoken}`,
          },
        }
      )
      .then((response) => {
        console.log("sdfsdfdfd++++++++", response.data.usersData);
        setUserData(response.data.usersData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        color: "black",
        background: "rgb(210 210 210 / 57%)",
      }}
    >
      <Box>
        <Typography variant="h1">USER DETAILS</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "800px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            overflow: "overlay",
          }}
        >
          {/* background-image: linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%); */}
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    height: "80px",
                    boxShadow: "20px 20px 50px 10px #51515191 inset",
                  }}
                >
                  <TableCell sx={{ color: "black" }}>FirstName</TableCell>
                  <TableCell sx={{ color: "black" }}>LastName</TableCell>
                  <TableCell sx={{ color: "black" }}>Email</TableCell>
                  <TableCell sx={{ color: "black" }}>Address</TableCell>
                  <TableCell sx={{ color: "black" }}>MobileNo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      height: "60px",
                    }}
                  >
                    <TableCell sx={{ color: "black" }}>
                      {item.first_name}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {item.last_name}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {item.user_email}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {item.user_address}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {item.user_mobile_no}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
