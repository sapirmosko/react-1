import "./Product.css";

function Product(props) {
  return (
    <div className="card" onClick={handleClick}>
      <img alt="" className="img" src={props.item.image}></img>
      <div className="description">
        <h2>{props.item.item}</h2>
        <h4>{props.item.price}</h4>
      </div>
    </div>
  );

  function handleClick() {
    props.onClick(props.item);
  }
}

export default Product;
