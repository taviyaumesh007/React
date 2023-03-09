import React from "react";
import { Table } from "react-bootstrap";

const CardsDetails = () => {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center">CardsDetails</h1>
        <section className="container mt-3">
          <div className="d-flex">
            <div className="item_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>restaurant</strong>masala
                    </p>
                    <p>
                      <strong>price</strong>
                      300 rs
                    </p>
                    <p>
                      <strong>dishes</strong>north indian
                    </p>
                    <p>
                      <strong>total</strong>300rs
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>rating</strong>
                      <span>3.5</span>
                    </p>
                    <p>
                      <strong>order review</strong>
                      <span>good</span>
                    </p>
                    <p>
                      <strong>remove</strong>
                      <span>X</span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
