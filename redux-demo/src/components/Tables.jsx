import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Popover } from "@mui/material";
import { Box } from "@mui/system";
import Form from "./Form";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const Tables = () => {
  const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
  const [edit, setEdit] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(anchorEl);

  useEffect(() => {
    edit && setAnchorEl(null);
  }, [edit]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  console.log("edit", edit);

  const open = Boolean(anchorEl);
  console.log("open", open);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#F3F4F6" }}>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">MOBILE NO</TableCell>
              <TableCell align="right">ADDRESS</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  {
                    <>
                      <Button
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </Button>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(false)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "200px",
                          }}
                        >
                          <Button>
                            <VisibilityRoundedIcon />
                            View All
                          </Button>
                          <Button onClick={handleEdit}>
                            <BusinessRoundedIcon />
                            Edit Company
                          </Button>
                          <Button>
                            <DeleteRoundedIcon />
                            Delete Company
                          </Button>
                        </Box>
                      </Popover>
                    </>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Form handleClose={handleClose} open={edit} />
    </div>
  );
};

export default Tables;
