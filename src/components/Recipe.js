import { useState, useEffect } from "react";
import "../styles/recipe.css";
import RecipeInfoModal from "./RecipeInfoModal";
import bookmark from "../assets/bookmark-icon.svg";
import bookmarkFill from "../assets/bookmarkFill-icon.svg";
import heart from "../assets/heart-icon.svg";
import heartFill from "../assets/heartFill-icon.svg";

const Recipe = ({ data }) => {
  useEffect(() => {
    getBookmarkedRecipes(data);
    getFavRecipes(data);
  }, [data]);

  const [showRecipeInfo, setShowRecipeInfo] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const getBookmarkedRecipes = (data) => {
    let bookmarkedRecipes = localStorage.getItem("bookmarkedRecipesIds");
    bookmarkedRecipes = bookmarkedRecipes?.split(",");
    if (bookmarkedRecipes?.includes(String(data.id))) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  };

  const getFavRecipes = (data) => {
    let favRecipes = localStorage.getItem("likedRecipesIds");
    favRecipes = favRecipes?.split(",");
    if (favRecipes?.includes(String(data.id))) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  };

  const addRecipe = (name, id) => {
    name === "bookmarkedRecipesIds" ? setIsBookmarked(true) : setIsFav(true);
    let recipes = localStorage.getItem(name);
    recipes = recipes?.split(",");
    recipes = [...new Set(recipes)];
    recipes.push(String(id));
    localStorage.setItem(name, String(recipes));
  };

  const removeRecipe = (name, id) => {
    name === "bookmarkedRecipesIds" ? setIsBookmarked(false) : setIsFav(false);
    let recipes = localStorage.getItem(name);
    recipes = recipes?.split(",");
    recipes = recipes.filter((i) => i !== String(id));
    localStorage.setItem(name, String(recipes));
  };

  const handleRecipeModal = () => {
    setShowRecipeInfo(!showRecipeInfo);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-between recipeCard">
      <img src={data.image} alt={data.image}></img>
      <p>{data.title}</p>
      <div className="d-flex align-items-center justify-content-between w-100 cc">
        <button className="btnFH" title="View recipe" onClick={handleRecipeModal}>
          View
        </button>
        {isBookmarked ? (
          <img
            src={bookmarkFill}
            alt="bookmarked" title="Remove from Bookmarks"
            onClick={() => removeRecipe("bookmarkedRecipesIds", data.id)}
          />
        ) : (
          <img
            src={bookmark}
            alt="not-bookmarked" title="Add to Bookmarks"
            onClick={() => addRecipe("bookmarkedRecipesIds", data.id)}
          />
        )}
        {isFav ? (
          <img
            src={heartFill}
            alt="liked" title="Unlike recipe"
            onClick={() => removeRecipe("likedRecipesIds", data.id)}
          />
        ) : (
          <img
            src={heart}
            alt="not-liked" title="Like recipe"
            onClick={() => addRecipe("likedRecipesIds", data.id)}
          />
        )}
      </div>
      {showRecipeInfo ? (
        <RecipeInfoModal recipe={data} hideRecipeInfo={handleRecipeModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Recipe;
