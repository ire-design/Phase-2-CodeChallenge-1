import React from "react";

function Search({setSearchTerm}) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        // onChange={() => console.log("Searching...")}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
