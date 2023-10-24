import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/recipe.css";

const CuisineCarousel = ({ getRecipesByCuisine, windowSize }) => {
  
  let items = Math.floor(windowSize?.innerWidth/300);

  const cuisine = [
    "Indian",
    "Chinese",
    "Italian",
    "American",
    "Thai",
    "Japanese",
    "Spanish",
    "Mexican",
    "African",
    "European",
    "French",
    "German",
    "Irish",
    "Mediterranean",
    "Korean",
  ];

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
          onClick={() => getRecipesByCuisine(e)}
        >
          {e}
        </span>
      </div>
    ));

  return (
    <>
      <div className="cuisineCarousel">
        <Slider
          slidesToShow={items}
          slidesToScroll={2}
          nextArrow={<Arrow />}
          prevArrow={<Arrow />}
        >
          {renderSlides()}
        </Slider>
      </div>
    </>
  );
};

export default CuisineCarousel;
