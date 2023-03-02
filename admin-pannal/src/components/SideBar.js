import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dashboard from "../img/dashboard.png";
import icons from "../img/icons.png";
import maps from "../img/maps.png";
import userProfile from "../img/user-profile.png";
import tables from "../img/tables.png";
import login from "../img/login.png";
import register from "../img/register.png";
import gettingStarted from "../img/getting-started.png";
import foundation from "../img/foundation.png";
import components from "../img/components.png";
import blueLogo from "../img/blue logo.png";
import NavBar from "./NavBar";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;

export default function SideBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinkStyle = ({ isActive }) => {
    {
      console.log(isActive);
    }
    return {
      background: isActive ? "#F5F5F5" : "#FFFFFF",
      width: isActive ? "200px" : "none",
      height: isActive ? "38px" : "none",
    };
  };

  const drawer = (
    <div
      sx={{
        width: "250px",
      }}
    >
      <Toolbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={blueLogo} alt="" />
      </Box>
      <List>
        <ListItem>
          <ListItemButton>
            <NavLink style={navLinkStyle} className="underline-remove" to={"/"}>
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={Dashboard} alt="" />
                </ListItemIcon>
                <ListItemText>dashboard</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink
              style={navLinkStyle}
              className="underline-remove"
              to={"/icons"}
            >
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={icons} alt="" />
                </ListItemIcon>
                <ListItemText>Icons</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink
              style={navLinkStyle}
              className="underline-remove"
              to={"/maps"}
            >
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={maps} alt="" />
                </ListItemIcon>
                <ListItemText>Maps</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink
              style={navLinkStyle}
              className="underline-remove"
              to={"/user-profile"}
            >
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={userProfile} alt="" />
                </ListItemIcon>
                <ListItemText>User profile</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink
              style={navLinkStyle}
              className="underline-remove"
              to={"/tables"}
            >
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={tables} alt="" />
                </ListItemIcon>
                <ListItemText>Tables</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink
              style={navLinkStyle}
              className="underline-remove"
              to={"/log-in"}
            >
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={login} alt="" />
                </ListItemIcon>
                <ListItemText>Login</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <NavLink
              style={navLinkStyle}
              className="underline-remove"
              to={"/register"}
            >
              <Box className="side-bar">
                <ListItemIcon>
                  <img src={register} alt="" />
                </ListItemIcon>
                <ListItemText>Register</ListItemText>
              </Box>
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        sx={{
          width: "185px",
          margin: "23px",
        }}
      />
      <Typography variant="h6" noWrap component="div">
        DOCUMENTATION
      </Typography>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={gettingStarted} alt="" />
            </ListItemIcon>
            <ListItemText
              sx={{
                minWidth: "110px",
              }}
            >
              Getting started
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={foundation} alt="" />
            </ListItemIcon>
            <ListItemText
              sx={{
                minWidth: "110px",
              }}
            >
              Foundation
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={components} alt="" />
            </ListItemIcon>
            <ListItemText
              sx={{
                minWidth: "110px",
              }}
            >
              Components
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRight: "none",
                background: "#FFFFFF",
                boxShadow: "0px 0px 32px rgba(136, 152, 170, 0.15)",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <NavBar />
      </Box>
    </div>
  );
}
