import '../styles/home.css';
import foodpic from "../assets/foodpic.PNG";
import foodIcon from "../assets/healthyfood-icon.svg";
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
      {/* <img width="60em" src={foodIcon} alt="heartIcon" /> */}<h1>Welcome to FLAVOR HUB!</h1> <h2>Your culinary companion</h2> 
          Explore a world of delectable recipes, cooking tips and gastronomic
          adventures, all in one place. Whether you're seasoned chef or a novice
          in the kitchen, our app is designed to inspire, guide and delight your
          taste buds. <br />
          Let your culinary journey begin here!
        </p>
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
