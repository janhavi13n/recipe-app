import { Link } from "react-router-dom";
import "../styles/searchBar.css";

const SearchBar = ({ submitHandler, updateHandler, input }) => {
  const arrow = "<<< ";

  return (
    <>
      <div className="fw-bold float-start">
        <Link to="/">{arrow} Home</Link>
      </div>
      <h4>Search easy recipes to cook at home here...</h4>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          placeholder="Enter recipe name..."
          onChange={updateHandler}
          style={{ width: "24em", marginLeft: "6em" }}
        />
        <button className="btn1" onClick={submitHandler}>
          Search
        </button>
      </form>
    </>
  );
};
export default SearchBar;
