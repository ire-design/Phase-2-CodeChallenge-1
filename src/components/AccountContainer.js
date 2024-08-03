import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, setTransactions, setSearchTerm}) {
  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !==id))
  }

  return (
    <div>
      <Search setSearchTerm={setSearchTerm}/>
      <AddTransactionForm setTransactions={setTransactions} transactions={transactions}/>
      <TransactionsList transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
