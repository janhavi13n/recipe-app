import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "../styles/recipe.css";

const CuisineCarousel = ({ getRecipesByCuisine }) => {
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

  const [selected, setSelected] = useState("");

  const arrowStyles = {
    background: "black",
    borderRadius: "50%",
    paddingTop: "1px",
  };

  const Arrow = (props) => {
    const { className, onClick } = props;
    let tooltipTxt = "";
    if (props.className === "slick-arrow slick-prev") {
      tooltipTxt = "Previous";
    } else {
      tooltipTxt = "Next";
    }
    return (
      <div
        className={className}
        title={tooltipTxt}
        style={arrowStyles}
        onClick={onClick}
      />
    );
  };

  const renderSlides = () =>
    cuisine.map((e, index) => (
      <div key={index}>
        <span
          className="fw-bold cuisine"
          title={e}
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
        <Slider
          dots={true}
          slidesToShow={6}
          slidesToScroll={2}
          nextArrow={<Arrow />}
          prevArrow={<Arrow />}
        >
          {renderSlides()}
        </Slider>
      </div>
      <h4>{selected}</h4>
    </>
  );
};

export default CuisineCarousel;
