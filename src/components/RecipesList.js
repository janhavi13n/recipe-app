import "../styles/recipe.css";
import Recipe from "./Recipe";

const RecipesList = ({ recipes }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap mt-2">
      {recipes && recipes.length > 0 ? (
        recipes.map((a) => <Recipe data={a} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default RecipesList;