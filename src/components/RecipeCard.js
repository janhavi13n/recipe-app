import "../styles/recipe.css";
import { CheckSquareTwoTone, CloseSquareTwoTone } from "@ant-design/icons";

const RecipeCard = ({ recipe, hideRecipeInfo }) => {
  console.log("IN Recipe Card", recipe, recipe.analyzedInstructions[0].steps);
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="section1">
          <img src={recipe.image} alt={recipe.title} />
          <div className="headings">
            <h4>{recipe.title}</h4>
            <p style={{ color: recipe.vegan ? "green" : "red" }}>
              Vegan :{" "}
              {recipe.vegan ? (
                <CheckSquareTwoTone twoToneColor="#28cb28" />
              ) : (
                <CloseSquareTwoTone twoToneColor="red" />
              )}
            </p>
            <p style={{ color: recipe.dairyFree ? "green" : "red" }}>
              Dairy Free :{" "}
              {recipe.dairyFree ? (
                <CheckSquareTwoTone twoToneColor="#28cb28" />
              ) : (
                <CloseSquareTwoTone twoToneColor="red" />
              )}
            </p>
            <p style={{ color: recipe.gutenFree ? "green" : "red" }}>
              Gluten Free :{" "}
              {recipe.gutenFree ? (
                <CheckSquareTwoTone twoToneColor="#28cb28" />
              ) : (
                <CloseSquareTwoTone twoToneColor="red" />
              )}
            </p>
            <p style={{ color: recipe.vegetarian ? "green" : "red" }}>
              Vegetarian :{" "}
              {recipe.vegetarian ? (
                <CheckSquareTwoTone twoToneColor="#28cb28" />
              ) : (
                <CloseSquareTwoTone twoToneColor="red" />
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

export default RecipeCard;
