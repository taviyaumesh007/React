import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const [price, setPrice] = useState(0);
  console.log("price", price);

  const getData = useSelector((state) => state.cartreducer.carts);

  console.log("getData", getData);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    console.log(id);
  };

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

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
            badgeContent={getData.length}
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
          {getData.length ? (
            <div className="card_details">
              <Table>
                <thead>
                  <tr>
                    <th>photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((elm) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/cart/${elm.id}`}
                              onClick={handleClose}
                            >
                              <img
                                style={{ width: "100px", height: "100px" }}
                                src={elm.imgdata}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{elm.rname}</p>
                            <p>price:{elm.price}</p>
                            <p>qnty:{elm.qnty}</p>
                            <p
                              style={{
                                background: "red",
                                color: "whitesmoke",
                                width: "20px",
                                padding: "5px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => dlt(e.id)}
                            >
                              X
                            </p>
                          </td>
                          <td>
                            <p
                              style={{
                                background: "red",
                                color: "whitesmoke",
                                width: "20px",
                                padding: "5px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => dlt(e.id)}
                            >
                              X
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total : {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details">
              <p>Item Not Selected</p>
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
