import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Popover, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form from "./Form";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import axios from "axios";
import {
  Navigate,
  Route,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

const Tables = () => {
  const [edit, setEdit] = useState(false);

  const [apiData, setApiData] = useState([]);
  const [apiData1, setApiData1] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [companyData, setCompanyData] = useState([]);
  const [dataId, setDataId] = useState();

  const [filteredData, setFilteredData] = useState();

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
  // useEffect(() => {
  //   // console.log(apiData, "++++++++++++++++++++++++++++++++++");
  //   const filtered = apiData.filter((item) => item.company_name);
  //   console.log("filtered++++", filtered);
  // }, [filteredData, apiData]);

  // const handleSearch = (e) => {
  //   const inputValue = e.target.value.toLowerCase();
  //   setFilteredData(inputValue);
  //   console.log(filteredData);
  //   const newdata = apiData.filter((item) => {
  //     item.company_name.toLowerCase().includes(inputValue);
  //     console.log();
  //   });
  //   console.log("newdata", newdata);
  // };

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setFilteredData(inputValue);
    const newData = apiData.filter((item) =>
      item.company_name.toLowerCase().includes(inputValue)
    );
    console.log("newData", newData);
    // do something with the filtered data
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div sx={{ boxShadow: "none !important" }}>
      <Box sx={{ float: "left" }}>
        <TextField
          label="Search"
          value={filteredData}
          position="end"
          variant="standard"
          onChange={(e) => handleSearch(e)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#F3F4F6" }}>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>MOBILE NO</TableCell>
              <TableCell>ADDRESS</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              ? apiData
                  .filter((item) =>
                    item.company_name
                      .toLowerCase()
                      .includes(filteredData.toLowerCase())
                  )
                  .map((row, index) => {
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.company_name}
                        </TableCell>
                        <TableCell>{row.company_email}</TableCell>
                        <TableCell>{row.company_mobile_no}</TableCell>
                        <TableCell>{row.company_address}</TableCell>
                        <TableCell>{row._id}</TableCell>
                        <TableCell>
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
                                  <Link
                                    style={{
                                      textDecoration: "none",
                                    }}
                                    to={"/userdeatils"}
                                  >
                                    <Button
                                      sx={{
                                        width: "197px",
                                        color: "black",
                                        background: "white",
                                        boxShadow: "none",
                                        borderRadius: "10px",
                                        "&:hover": {
                                          background: "#1976D2",
                                          boxShadow:
                                            "inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);",
                                          color: "whitesmoke",
                                        },
                                      }}
                                    >
                                      <VisibilityRoundedIcon />
                                      <Typography> View All</Typography>
                                    </Button>
                                  </Link>
                                  <Link
                                    style={{
                                      textDecoration: "none",
                                    }}
                                  >
                                    <Button
                                      sx={{
                                        width: "197px",
                                        color: "black",
                                        background: "white",
                                        boxShadow: "none",
                                        borderRadius: "10px",
                                        "&:hover": {
                                          background: "#1976D2",
                                          boxShadow:
                                            "inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);",
                                          color: "whitesmoke",
                                        },
                                      }}
                                      aria-describedby={id}
                                      variant="contained"
                                      onClick={() => handleClickNew()}
                                    >
                                      <BusinessRoundedIcon />
                                      Edit Company
                                    </Button>
                                  </Link>
                                  <Link
                                    style={{
                                      textDecoration: "none",
                                    }}
                                  >
                                    <Button
                                      sx={{
                                        width: "197px",
                                        color: "black",
                                        background: "white",
                                        boxShadow: "none",
                                        borderRadius: "10px",
                                        "&:hover": {
                                          background: "#1976D2",
                                          boxShadow:
                                            "inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);",
                                          color: "whitesmoke",
                                        },
                                      }}
                                    >
                                      <DeleteRoundedIcon />
                                      Delete Company
                                    </Button>
                                  </Link>
                                </Box>
                              </Popover>
                            </>
                          }
                        </TableCell>
                      </TableRow>
                    );
                  })
              : apiData.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.company_name}
                      </TableCell>
                      <TableCell>{row.company_email}</TableCell>
                      <TableCell>{row.company_mobile_no}</TableCell>
                      <TableCell>{row.company_address}</TableCell>
                      <TableCell>{row._id}</TableCell>
                      <TableCell>
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
                                <Link
                                  style={{
                                    textDecoration: "none",
                                  }}
                                  to={"/userdeatils"}
                                >
                                  <Button
                                    sx={{
                                      width: "197px",
                                      color: "black",
                                      background: "white",
                                      boxShadow: "none",
                                      borderRadius: "10px",
                                      "&:hover": {
                                        background: "#1976D2",
                                        boxShadow:
                                          "inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);",
                                        color: "whitesmoke",
                                      },
                                    }}
                                  >
                                    <VisibilityRoundedIcon />
                                    <Typography> View All</Typography>
                                  </Button>
                                </Link>
                                <Link
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <Button
                                    sx={{
                                      width: "197px",
                                      color: "black",
                                      background: "white",
                                      boxShadow: "none",
                                      borderRadius: "10px",
                                      "&:hover": {
                                        background: "#1976D2",
                                        boxShadow:
                                          "inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);",
                                        color: "whitesmoke",
                                      },
                                    }}
                                    aria-describedby={id}
                                    variant="contained"
                                    onClick={() => handleClickNew()}
                                  >
                                    <BusinessRoundedIcon />
                                    Edit Company
                                  </Button>
                                </Link>
                                <Link
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <Button
                                    sx={{
                                      width: "197px",
                                      color: "black",
                                      background: "white",
                                      boxShadow: "none",
                                      borderRadius: "10px",
                                      "&:hover": {
                                        background: "#1976D2",
                                        boxShadow:
                                          "inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);",
                                        color: "whitesmoke",
                                      },
                                    }}
                                  >
                                    <DeleteRoundedIcon />
                                    Delete Company
                                  </Button>
                                </Link>
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
