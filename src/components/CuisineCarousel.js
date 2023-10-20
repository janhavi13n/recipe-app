import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "../styles/recipe.css";

const CuisineCarousel = ({ getRecipesByCuisine }) => {
  const [selected, setSelected] = useState("");

  const cuisine = [
    "Indian",
    "Chinese",
    "Italian",
    "American",
    "Thai",
    "Japanese",
    "Spanish",
    "Mexican",
    "Vietnamese",
    "Asian",
    " African",
    "British",
    "Cajun",
    "Caribbean",
    "European",
    "French",
    "German",
    "Greek",
    "Irish",
    "Jewish",
    "Mediterranean",
    "Nordic",
    "Southern",
    "Korean",
  ];

  // document.querySelector(".slick-arrow")?.style.color = "black";

  const renderSlides = () =>
    cuisine.map((e) => (
      <div key={e}>
        <span
          className="cuisine"
          onClick={() => {
            getRecipesByCuisine(e);
            setSelected(e);
          }}
        >
          {e}
        </span>
      </div>
    ));

  return (
    <>
      <div className="cuisineCarousel">
        <Slider dots={true} slidesToShow={6} slidesToScroll={2}>
          {renderSlides()}
        </Slider>
      </div>
      <h4>{selected}</h4>
    </>
  );
};

export default CuisineCarousel;
