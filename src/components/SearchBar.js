import { Link } from "react-router-dom";
import "../styles/searchBar.css";
import flavorHubIcon from "../assets/healthyfood-icon.svg";

const SearchBar = ({ submitHandler, updateHandler, input }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="fw-bold">
        <img width="45em" src={flavorHubIcon} alt="FlavorHub" />{" "}
        <h1>Flavor Hub</h1>
      </div>
      <div className="d-flex flex-column">
        <h2>Search easy recipes to cook at home here...</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={input}
            placeholder="Enter recipe name..."
            onChange={updateHandler}
            style={{ width: "24em", marginLeft: "3em" }}
          />
          <button className="btn1" onClick={submitHandler}>
            Search
          </button>
        </form>
      </div>
      <div className="fw-bold">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default SearchBar;
