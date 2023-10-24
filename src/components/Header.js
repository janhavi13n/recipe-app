import { Link } from "react-router-dom";
import "../styles/header.css";
import flavorHubIcon from "../assets/healthyfood-icon.svg";

const Header = ({
  submitHandler,
  updateHandler,
  error,
  input,
  searchVegDessert,
}) => {
  return (
    <>
     <div className="d-flex justify-content-between header1">
        <div className="fw-bold firstH">
          <Link to="/">
            <img width="45em" src={flavorHubIcon} alt="FlavorHub" />
            <h1>Flavor Hub</h1>
          </Link>
        </div>
        <div className="d-flex flex-column flex-wrap secondH">
          <h2>Search easy recipes to cook at home here...</h2>
          <form onSubmit={submitHandler}>
            <input
            className="recipeInput"
              type="text"
              value={input}
              placeholder="Enter recipe name..."
              onChange={updateHandler}
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
     
      <div className="d-flex justify-content-center">
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
        </div>
      </div>
    </>
  );
};
export default Header;
