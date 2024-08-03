import React from "react";

function Transaction({ transaction, setTransactions }) {
  const handleDelete = () => {
    fetch(`http://localhost:8001/transactions/${transaction.id}`, {
      method: "DELETE"
    }).then(() => {
      setTransactions(prevTransactions =>
        prevTransactions.filter(t => t.id !== transaction.id)
      );
    });
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDelete} className="ui button red">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
