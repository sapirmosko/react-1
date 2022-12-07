import Product from "./Product";

const Items = (props) => {
  return (
    <div id="products" className="products">
      {props.select
        ? props.expenses
            .filter((element) => element.item === props.select)
            .map((element) => <Product item={element}></Product>)
        : props.expenses.map((element) => <Product item={element}></Product>)}
    </div>
  );
};

export default Items;
