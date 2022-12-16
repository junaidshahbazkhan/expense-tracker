import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const context = useContext(GlobalContext);
  const amount = context.transactions.map((transaction) => transaction.amount);
  const totalAmount = amount.reduce((total, num) => total + num, 0).toFixed(2);
  return (
    <>
      <div className="container">
        <h4>Your Balance</h4>
        <h1>${totalAmount}</h1>
      </div>
    </>
  );
};
export default Balance;
