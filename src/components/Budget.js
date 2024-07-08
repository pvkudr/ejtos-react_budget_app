import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, expenses, currency} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  // const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert("The apper limit for budget is 20 000");
      dispatch({
        type: 'SET_BUDGET',
        payload: 20000,
      });

    } else if (event.target.value < totalExpenses) {
      console.log('expenses =', totalExpenses);
      alert("The budget shoud not  be lower than the spending");
      dispatch({
        type: 'SET_BUDGET',
        payload: totalExpenses,
      });
    } else {
        dispatch({
      type: 'SET_BUDGET',
      payload: event.target.value,
  });
    }
  
    // setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        max="20000"
        value={budget}        
        onChange={handleBudgetChange}
        style={{ width: "150px" }}
      ></input>
    </div>
  );
};
export default Budget;
