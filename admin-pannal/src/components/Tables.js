import { Box } from "@mui/system";
import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProgressBar from "./ProgressBar";

export default function Tables() {
  function createData(PageName, Visitors, UniqueUser, BounceRate) {
    return { PageName, Visitors, UniqueUser, BounceRate };
  }
  const rows = [
    createData("/argon/", "4,569", 340, "46,53%"),
    createData("/argon/index.html", "3,985", 319, "46,53%"),
    createData("/argon/charts.html", "3,513", 294, "36,49%"),
    createData("/argon/tables.html", "2,050", 147, "50,87%"),
    createData("/argon/profile.html", "1,795", 190, "46,53%"),
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "1050px",
          position: "relative",
          left: "40px",
          top: "20px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>PAGE NAME</TableCell>
                <TableCell align="right">VISITORS</TableCell>
                <TableCell align="right">UNIQUE USERS</TableCell>
                <TableCell align="right">BOUNCE RATE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.PageName}</TableCell>
                  <TableCell align="right">{row.Visitors}</TableCell>
                  <TableCell align="right">{row.UniqueUser}</TableCell>
                  <TableCell align="right">{row.BounceRate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          width: "510px",
        }}
      >
        <ProgressBar />
      </Box>
    </div>
  );
}
