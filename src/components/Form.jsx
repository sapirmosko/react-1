import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChanged = (e) => {
    setTitle(e.target.value);
  };

  const amountChanged = (e) => {
    setAmount(e.target.value);
  };

  const dateChanged = (e) => {
    setDate(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const data = {
      item: title,
      price: amount,
      date: new Date(date),
    };
    if (data.item !== "" && data.price !== "") {
      props.onSaveData(data);
    }
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <form className="form" onSubmit={submitHandle}>
      <div className="inputs">
        <div className="row">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChanged}></input>
        </div>
        <div className="row">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChanged}></input>
        </div>
        <div className="row">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChanged}></input>
        </div>
      </div>
      <div className="divButton">
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
