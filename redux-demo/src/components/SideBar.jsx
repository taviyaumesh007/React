import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from "@mui/icons-material/Business";
import ReportIcon from "@mui/icons-material/Report";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Tables from "./Tables";
import AddIcon from "@mui/icons-material/Add";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const SideBar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("myToken");
    navigate({ pathname: "/log-in" });
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: "white",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div"></Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box sx={{ background: "#111828", height: "100vh" }}>
            <Box sx={{ overflow: "auto" }}>
              <List
                sx={{
                  color: "white",
                }}
              >
                {["Company", "Report"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? (
                          <BusinessIcon sx={{ color: pink[50] }} />
                        ) : (
                          <ReportIcon sx={{ color: pink[50] }} />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box sx={{ background: "#111828" }}>
            <Button onClick={logoutHandler} sx={{ color: "#9C3F41" }}>
              <LogoutOutlinedIcon />
              LogOut
            </Button>
          </Box>
        </Drawer>

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            background: "#EFEDE7",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* table box */}
          <Box component="main" sx={{ flexGrow: 1, p: 3, width: "90%" }}>
            <Toolbar />
            <Box
              sx={{
                background: "#FFFFFF",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              {/* serch Box */}
              {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      renderInput={(params) => (
                        <TextField
                          label="Search"
                          value={searchData}
                          position="end"
                          variant="standard"
                          onChange={handleSearch}
                        />
                      )}
                    />
                  </Stack>
                </Box>
                <Box>
                  <AddIcon />
                </Box>
              </Box> */}
              {/* tables */}
              <Box sx={{ paddingTop: "20px" }}>
                <Tables />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SideBar;
