import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import CardsData from "./CardsData";

const Cards = () => {
  const [data, setData] = useState(CardsData);

  console.log("data====", data);
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to card project</h2>
      <div className="row d-flex justify-content-center align-item-center mt-2">
        {data.map((cardItem, cardId) => {
          return (
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img
                variant="top"
                src={cardItem.imgdata}
                style={{ height: "250px", width: "265px" }}
              />
              <Card.Body>
                <Card.Title>{cardItem.rname}</Card.Title>
                <Card.Text>{cardItem.address}</Card.Text>
                <Card.Text>Rs:{cardItem.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
