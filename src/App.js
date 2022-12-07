import "./App.css";
import { products, options } from "./MockData";
import Expense from "./components/Expense";
import React, { useState } from "react";
import Items from "./components/Items";
import Select from "react-select";

function App() {
  const [expenses, setExpenses] = useState(products);
  const [filterBy, setFilterBy] = useState();
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterItems = (event) => {
    setFilterBy(event.value);
  };

  return (
    <div className="main">
      <Expense onAddExpense={addExpenseHandler}></Expense>
      <Select options={options} onChange={filterItems} />
      <Items select={filterBy} expenses={expenses}></Items>
    </div>
  );
}

export default App;
