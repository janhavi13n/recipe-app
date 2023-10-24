import { Link } from "react-router-dom";
import "../styles/home.css";
import foodpic from "../assets/foodpic.PNG";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="d-flex align-items-center homepage">
        <div className="d-flex justify-content-around flex-column align-items-center first">
          <div style={{textAlign:"left"}}>
            <h1>Welcome to FLAVOR HUB!</h1> 
            <h2>Your culinary companion</h2>
            Explore a world of delectable recipes, cooking tips and gastronomic
            adventures, all in one place. Whether you're seasoned chef or a
            novice in the kitchen, our app is designed to inspire, guide and
            delight your taste buds. <br />
            Let your culinary journey begin here!
          </div>
          <button type="button" className="goBtn" title="Go To Recipes">
            <Link to="/recipes">Go To Recipes</Link>
          </button>
        </div>
        <div><img src={foodpic} className="img" /></div>
      </div>
    </div>
  );
};

export default Home;
