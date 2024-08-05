import React, {useState, useEffect} from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([])/* arr to hold transaction data */
  const [searchTerm, setSearchTerm] = useState("")/* string for search input */

  useEffect(() => {
    fetch('https://json-server-p456.onrender.com/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
  },[])

  /* youtube- case insensitive searchTerm */
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
      transactions = {filteredTransactions}
      setTransactions = {setTransactions}
      setSearchTerm = {setSearchTerm}
      />
    </div>
  );
}

export default App;
