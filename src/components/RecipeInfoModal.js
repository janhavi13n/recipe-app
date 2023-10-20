import "../styles/recipe.css";
import check from "../assets/checkSquare-icon.svg";
import uncheck from "../assets/xSquare-icon.svg";

const RecipeInfoModal = ({ recipe, hideRecipeInfo }) => {
  console.log("IN Recipe modal", recipe);
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="d-flex flex-wrap section1">
          <img src={recipe.image} alt={recipe.title} />
          <div className="d-flex flex-column align-items-start headings">
            <h4>{recipe.title}</h4>
            <p style={{ color: recipe.vegan ? "green" : "red" }}>
              Vegan :{" "}
              {recipe.vegan ? (
                <img src={check} alt="" />
                ) : (
                  <img src={uncheck} alt="" />
              )}
            </p>
            <p style={{ color: recipe.dairyFree ? "green" : "red" }}>
              Dairy Free :{" "}
              {recipe.dairyFree ? (
                <img src={check} alt="" />
                ) : (
                  <img src={uncheck} alt="" />
              )}
            </p>
            <p style={{ color: recipe.gutenFree ? "green" : "red" }}>
              Gluten Free :{" "}
              {recipe.gutenFree ? (
                <img src={check} alt="" />
                ) : (
                  <img src={uncheck} alt="" />
              )}
            </p>
            <p style={{ color: recipe.vegetarian ? "green" : "red" }}>
              Vegetarian :{" "}
              {recipe.vegetarian ? (
                <img src={check} alt="" />
              ) : (
                <img src={uncheck} alt="" />
              )}
            </p>
          </div>
        </div>

   
        {recipe.extendedIngredients?.length > 0 && ( <><h4 className="text-start">Ingredients </h4>
        <ol className="text-start">
          {recipe.extendedIngredients.map((q, ind) => (
            <li key={ind}>{q.original}</li>
          ))}
        </ol></>)}
           
       
       
        {recipe.analyzedInstructions[0] && ( <><h4 className="text-start">Instructions </h4>
        <ol className="text-start">
          {recipe.analyzedInstructions[0].steps.map((q, ind) => (
            <li key={ind}>{q.step}</li>
          ))}
        </ol></>)}
        <button className="btn1" onClick={hideRecipeInfo}>
          Close
        </button>
      </div>
    </>
  );
};

export default RecipeInfoModal;
