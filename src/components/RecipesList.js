import "../styles/recipe.css";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { HeartOutlined } from "@ant-design/icons";

export default function RecipesList({ recipes}) {
  const [showRecipeInfo, setShowRecipeInfo] = useState(false);
  const [ingredientIndex, setIngredientIndex] = useState(-1);
  console.log("IN Recipe List", recipes);

  return (
    <div className="d-flex justify-content-center flex-wrap mt-2">
     
      {recipes && recipes.length > 0 ? (
        recipes.map((a) => (
          <div
            className="d-flex flex-column align-items-center justify-content-between recipeCard"
            onClick={() => {
              setShowRecipeInfo(!showRecipeInfo);
              setIngredientIndex(a.id);
            }  
            }
          >
            <img src={a.image} alt=""></img>
            <p>{a.title}</p>
            {showRecipeInfo && ingredientIndex === a.id ? (
              <RecipeCard
                recipe={a}
                hideRecipeInfo={()=>{ setShowRecipeInfo(!showRecipeInfo);setIngredientIndex(-1);}}
              />
            ) : (
              ""
            )}
             <HeartOutlined />
          </div> 
         
          
        ))
      ) : (
        <></>
      )}
     
    </div>
  );
}