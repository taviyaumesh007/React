import React from "react";

import { Box, Typography, Avatar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Perfomence from "./Perfomence";
import jessicaJones from "../img/jessica-jones.png";
import barChart from "../img/bar-chart.png";
import piChart from "../img/pi-chart.png";
import sales from "../img/sales.png";
import awsm from "../img/awsm.png";
import upArrow from "../img/up-arrow.png";
import downArrow from "../img/down-arrow.png";
import Dashboard from "../pages/Dashboard";

export default function NavBar() {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const perfomenceData = [
    {
      title: "TRAFFIC",
      count: "350,897",
      chart: barChart,
      arrow: upArrow,
      percentage: "3.48%",
      month: "Since last month",
    },
    {
      title: "NEW USERS",
      count: "2,356",
      chart: piChart,
      arrow: downArrow,
      percentage: "3.48%",
      month: "Since last month",
    },
    {
      title: "SALES",
      count: "924",
      chart: sales,
      arrow: downArrow,
      percentage: "1.10%",
      month: "Since last month",
    },
    {
      title: "PERFORMANCE",
      count: "49,65%",
      chart: awsm,
      arrow: upArrow,
      percentage: "12%",
      month: "Since last month",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          width: "1663px",
          height: "381px",
          background: "linear-gradient(90deg, #5E72E4 0%, #825EE4 100%)",
        }}
      >
        <Box className="nav-bar">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22px",
              color: "#FFFFFF",
            }}
            noWrap
            component="div"
          >
            DASHBOARD
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                paddingRight: "10px",
              }}
            >
              <Search
                sx={{
                  border: "2px solid #FFFFFF",
                  borderRadius: "25.5px",
                  height: "47px",
                  width: "315px !important",
                  background:
                    "linear-gradient(90deg, #5E72E4 0%, #825EE4 100%)",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon
                    sx={{
                      color: "#FFFFFF",
                    }}
                  />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{
                    display: "flex",
                    color: "#FFFFFF",
                  }}
                  placeholder="Search"
                />
              </Search>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "5px",
              }}
            >
              <Avatar alt="Remy Sharp" src={jessicaJones} />
              <Typography
                sx={{
                  color: "#FFFFFF",
                }}
              >
                Jessica Jones
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {perfomenceData.map((item, index) => {
            return (
              <Perfomence
                key={index}
                title={item.title}
                count={item.count}
                chart={item.chart}
                arrow={item.arrow}
                percentage={item.percentage}
                month={item.month}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
}
