import '../styles/home.css';
import foodpic from "../assets/foodpic.PNG";
import foodheart from "../assets/foodheart.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='qq'>
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ margin: "12% 15%" }}
    >
      <div className="d-flex justify-content-between flex-column align-items-center" style={{  marginRight: "4em" }}>
        <p style={{ textAlign: "left" }}>
          <h1>Welcome to FLAVOR HUB!</h1> <h3>Your culinary companion</h3>
          Explore a world of delectable recipes, cooking tips and gastronomic
          adventures, all in one place. Whether you're seasoned chef or a novice
          in the kitchen, our app is designed to inspire, guide and delight your
          taste buds. <br />
          Let your culinary journey begin here!
        </p>
          {/* <img src={foodheart} height="140px" width="170px"></img> */}
          <button type="button" className="goBtn">
          <Link to="/recipes">Go To Recipes</Link> 
          </button>
      </div>
      <div>
        <img src={foodpic} className='img'/>
      </div>
    </div></div>
  );
};

export default Home;
