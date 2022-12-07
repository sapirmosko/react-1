import Form from "./Form";

const Expense = (props) => {
  const saveDataHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(data);
  };

  return <Form onSaveData={saveDataHandler}></Form>;
};

export default Expense;
