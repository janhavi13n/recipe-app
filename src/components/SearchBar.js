import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/searchBar.css';

const SearchBar = ({ onChangeSearch, search }) => {
    const arrow = "<"
  return (
    <div>
      <div style={{ float: "left" }}>
        <Link to="/">{arrow}</Link> 
        Home
      </div>
      <div>
        <h4>Search easy recipes to cook at home here...</h4>
        <input
          onChange={onChangeSearch}
          //value={search}
          placeholder="Enter recipe name..."
          type="search"
          style={{ width: "400px" }}
        />
      </div>
    </div>
  );
};
export default SearchBar;