import foodpic from "../assets/foodpic.PNG";
import foodheart from "../assets/foodheart.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ margin: "12% 25em" }}
    >
      <div className="d-flex justify-content-between flex-column align-items-center" style={{  marginRight: "4em" }}>
        <p style={{ textAlign: "left" }}>
          <h5>Welcome to FLAVOR HUB: Your culinary companion</h5>
          Explore a world of delectable recipes, cooking tips and gastronomic
          adventures, all in one place. Whether you're seasoned chef or a novice
          in the kitchen, our app is designed to inspire, guide and delight your
          taste buds. <br />
          Let your culinary journey begin here!
        </p>
          <img src={foodheart} height="140px" width="170px"></img>
          <button type="button" className="btn btn-warning" style={{height: "3em", marginTop: "1em"}}>
          <Link to="/recipes">Go To Recipes</Link> 
          </button>
      </div>
      <div>
        <img src={foodpic} height="500px" width="500px" style={{borderRadius:"40px"}}/>
      </div>
    </div>
  );
};

export default Home;
