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
import axios from "axios";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";

const Tables = () => {
  const [edit, setEdit] = useState(false);

  const [apiData, setApiData] = useState([]);
  const [apiData1, setApiData1] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [companyData, setCompanyData] = useState([]);
  const [dataId, setDataId] = useState();

  // API Calls
  const history = useNavigate();
  const location = useLocation();

  const getData = async () => {
    const token = localStorage.getItem("myToken");
    let mytoken = " ";

    if (token) {
      const obj = JSON.parse(token);
      mytoken = obj.token;
    }

    axios
      .get("https://messagingtest.vitelglobal.com/nodejs/web/company", {
        headers: {
          authorization: `${mytoken}`,
        },
      })
      .then((response) => {
        setApiData(response.data.companyData);
      })
      .catch((error) => {});
    const tokenString = localStorage.getItem("myToken");
    if (!tokenString) {
      <Navigate to="/log-in" />;
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    edit && setAnchorEl(null);
  }, [edit]);

  const handleClickNow = (event, ids, datas) => {
    setAnchorEl(event.currentTarget);
    setDataId(ids);
    setApiData1(datas);
  };

  const handleClickNew = () => {
    const rowDatas = apiData1;
    if (rowDatas._id === dataId) {
    }

    setEdit(true);
    setCompanyData(rowDatas);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setEdit(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div sx={{ boxShadow: "none !important" }}>
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
            {apiData.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.company_name}
                  </TableCell>
                  <TableCell align="right">{row.company_email}</TableCell>
                  <TableCell align="right">{row.company_mobile_no}</TableCell>
                  <TableCell align="right">{row.company_address}</TableCell>
                  <TableCell align="right">{row._id}</TableCell>
                  <TableCell align="right">
                    {
                      <>
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          onClick={(e) => handleClickNow(e, row._id, row)}
                        >
                          <MoreVertIcon />
                        </Button>
                        <Popover
                          sx={{ boxShadow: "none !important" }}
                          // id={id}
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

                            <Button
                              aria-describedby={id}
                              variant="contained"
                              onClick={() => handleClickNew()}
                            >
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Form
        getData={getData}
        companyApi={companyData}
        handleClose={handleClose}
        open={edit}
        data={apiData}
      />
    </div>
  );
};

export default Tables;
