import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const signAmount = props.transaction.amount > 0 ? "+" : "-";
  return (
    <li className={props.transaction.amount > 0 ? "plus" : "minus"}>
      {props.transaction.text}
      <span>
        {signAmount}${Math.abs(props.transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(props.transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
