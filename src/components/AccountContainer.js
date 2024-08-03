import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, setTransactions, setSearchTerm}) {
  return (
    <div>
      <Search setSearchTerm={setSearchTerm}/>
      <AddTransactionForm setTransactions={setTransactions}/>
      <TransactionsList transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default AccountContainer;
