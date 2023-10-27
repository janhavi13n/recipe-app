import "../styles/recipe.css";
import check from "../assets/checkSquare-icon.svg";
import uncheck from "../assets/xSquare-icon.svg";

const RecipeInfoModal = ({ recipe, hideRecipeInfo }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="modal-content">
        <div className="d-flex flex-wrap section1">
          <img src={recipe.image} alt={recipe.title} />
          <div className="d-flex flex-column align-items-start headings">
            <h4>{recipe.title}</h4>
            <div className="d-flex justify-content-between w-100">
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
            </div>

            <div className="d-flex justify-content-between w-100">
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

            <label>Time to cook: {recipe.readyInMinutes} Min</label>
          </div>
        </div>
        {recipe.extendedIngredients?.length > 0 && (
          <>
            <h4 className="text-start modal-title">Ingredients</h4>
            <ol className="text-start">
              {recipe.extendedIngredients.map((q, ind) => (
                <li key={ind}>{q.original}</li>
              ))}
            </ol>
          </>
        )}

        {recipe.analyzedInstructions[0] && (
          <>
            <h4 className="text-start modal-title">Instructions</h4>
            <ol className="text-start">
              {recipe.analyzedInstructions[0].steps.map((q, ind) => (
                <li key={ind}>{q.step}</li>
              ))}
            </ol>
          </>
        )}</div>
       <div className="modal-footer">
          <button className="btnFH" title="Close" onClick={hideRecipeInfo}>Close</button>
        </div> 
      </div>
    </>
  );
};

export default RecipeInfoModal;