import { Link } from "react-router-dom";
import "../styles/header.css";
import flavorHubIcon from "../assets/healthyfood-icon.svg";

const Header = ({ submitHandler, updateHandler, error, input, searchVegDessert }) => {
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
          <button
            className="btnFH"
            title="Search recipes"
            onClick={submitHandler}
          >
            Search
          </button>
         
        </form> 
        <label className="text-danger">{error}</label>
      </div>
      <div className="d-flex">
        <div
          className="fw-bold content"
          title="Vegetarian Picks"
          onClick={() => searchVegDessert("vegetarian")}
        >
          Vegetarian Picks
        </div>
        <div
          className="fw-bold content"
          title="Dessert Picks"
          onClick={() => searchVegDessert("dessert")}
        >
          Dessert Picks
        </div>
        <div className="fw-bold" title="Home">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
