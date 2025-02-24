import React from "react";
import {} from "@ant-design/icons";
import { Progress } from "antd";

const Analytics = ({ allTransections }) => {
  //total tansactions
  const totalTransaction = allTransections.length;
  const totalIncomeTransactions = allTransections.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactions = allTransections.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalIncomePercent =
    (totalIncomeTransactions.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransactions.length / totalTransaction) * 100;
  const totalTurnOver = allTransections.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnOver = allTransections
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnOver = allTransections
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnOverPercent =
    (totalIncomeTurnOver / totalTurnOver) * 100;
  const totalExpenseTurnOverPercent =
    (totalExpenseTurnOver / totalTurnOver) * 100;
  const totalBalance = totalIncomeTurnOver - totalExpenseTurnOver;

  return (
    <div className="row m-3">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            Total Transactions : {totalTransaction}
          </div>
          <div className="card-body">
            <h5 className="text-success">
              Income Transactions: {totalIncomeTransactions.length}
            </h5>
            <h5 className="text-danger">
              Expense Transactions: {totalExpenseTransactions.length}
            </h5>
            <div>
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomePercent.toFixed(2)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpensePercent.toFixed(2)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Total TurnOver : {totalTurnOver}</div>
          <div className="card-body">
            <h5 className="text-success">
              Income TurnOver : {totalIncomeTurnOver}
            </h5>
            <h5 className="text-danger">
              Expense TurnOver: {totalExpenseTurnOver}
            </h5>
            <div>
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomeTurnOverPercent.toFixed(2)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpenseTurnOverPercent.toFixed(2)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shyam">
          <div className="card-header">Your Balance</div>
          <div className="card-body">
            <h3 className="text-success">
              Total Income : {totalIncomeTurnOver}
            </h3>
            <h3 className="text-danger">
              Total Expense : {totalExpenseTurnOver}
            </h3>

            <div>
              {}
              {totalBalance >= 0 ? (
                <h2 className="positive">Balance : {totalBalance}</h2>
              ) : (
                <h2 className="negative">Balance : {totalBalance}</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
