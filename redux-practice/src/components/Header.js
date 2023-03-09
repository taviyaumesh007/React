import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer);

  console.log("getData", getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px " }}>
        <Container>
          <NavLink className="text-decoration-none text-light mx-3" to="/">
            Add to Card
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              className="text-decoration-none text-light mx-3"
              to="/card"
            >
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={0}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AddShoppingCartIcon color="success" fontSize="large" />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card_details">
            <p>your card is empty</p>
          </div>
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
