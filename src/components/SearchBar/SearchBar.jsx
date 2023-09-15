import React from "react";
import "./SearchBar.css";

function SearchBar({ setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SearchBar;
