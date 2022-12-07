import "./Product.css";
import React from "react";

function Product(props) {
  return (
    <div className="card">
      <img alt="" className="img" src={props.item.image}></img>
      <div className="description">
        <h2>{props.item.item}</h2>
        <h4>{"$" + props.item.price}</h4>
      </div>
    </div>
  );
}

export default Product;
