import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ProgressBar() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  function createData(Referral, Visitors, UniqueUser) {
    return { Referral, Visitors, UniqueUser };
  }
  const rows = [
    createData("Facebook", "1,480", 10),
    createData("Facebook", "5,480", 70),
    createData("Google", "4,807", 80),
    createData("Instagram", "3,678", 75),
    createData("Twitter", "2,645", 30),
  ];
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          left: "50px",
        }}
      >
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "510px", width: 0 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>PAGE NAME</TableCell>
                <TableCell>VISITORS</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell padding={0} align="left">
                    {row.Referral}
                  </TableCell>
                  <TableCell align="left">{row.Visitors}</TableCell>
                  <TableCell align="left">
                    {row.UniqueUser}
                    <BorderLinearProgress
                      variant="determinate"
                      value={row.UniqueUser}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
