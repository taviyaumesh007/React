import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  console.log("data----", data);

  const { id } = useParams();
  // console.log("id", id);

  const getData = useSelector((state) => state.cartreducer.carts);
  console.log("getData---", getData);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const history = useNavigate();

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center">CardsDetails</h1>
        <section className="container mt-3">
          <div className="d-flex">
            {data.map((currelm) => {
              return (
                <>
                  <div className="item_img">
                    <img src={currelm.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>restaurant</strong>
                            {currelm.rname}
                          </p>
                          <p>
                            <strong>price</strong>
                            {currelm.price}
                          </p>
                          <p>
                            <strong>dishes</strong>
                            {currelm.address}
                          </p>
                          <p>
                            <strong>total</strong>300rs
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>rating</strong>
                            <span>{currelm.rating}</span>
                          </p>
                          <p>
                            <strong>order review</strong>
                            <span>{currelm.somedata}</span>
                          </p>
                          <p>
                            <strong>remove</strong>
                            <span onClick={(ele) => dlt(ele.id)}>X</span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
