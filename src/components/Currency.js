import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  // const [newBudget, setNewBudget] = useState(budget);
  const handleCurrencyChange = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event,
    });
    console.log("currency", currency);
  };

  return (
    <div className="alert alert-success">
      <div className="input-group-prepend"></div>
      <span>Currancy </span>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={(event) => handleCurrencyChange(event.target.value)}
      >
        <option value="$" name="dollar" className="list-group-item list-group-item-success">
          $ Dollar
        </option>
        <option defaultValue value="£" name="pound" className="list-group-item list-group-item-success">
          £ Pound
        </option>
        <option value="€" name="euro"className="list-group-item list-group-item-success">
          € Euro
        </option>
        <option value="₹" name="ruppee"className="list-group-item list-group-item-success">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};
export default Currency;
