import "../styles/recipe.css";
import { useState, useEffect } from "react";
import RecipeInfoModal from "./RecipeInfoModal";
import heart from "../assets/heart-icon.svg";
import heartFill from "../assets/heartFill-icon.svg";
import bookmark from "../assets/bookmark-icon.svg";
import bookmarkFill from "../assets/bookmarkFill-icon.svg";

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

  const bookmarkAddedRecipe = (id) => {
    setIsBookmarked(true);
    let bookmarkedRecipes = localStorage.getItem("bookmarkedRecipesIds");
    bookmarkedRecipes = bookmarkedRecipes?.split(",");
    bookmarkedRecipes = [...new Set(bookmarkedRecipes)];
    bookmarkedRecipes.push(String(id));
    localStorage.setItem("bookmarkedRecipesIds", String(bookmarkedRecipes));
  };

  const bookmarkRemoveRecipe = (id) => {
    setIsBookmarked(false);
    let bookmarkedRecipes = localStorage.getItem("bookmarkedRecipesIds");
    bookmarkedRecipes = bookmarkedRecipes?.split(",");
    bookmarkedRecipes = bookmarkedRecipes.filter((i) => i !== String(id));
    localStorage.setItem("bookmarkedRecipesIds", String(bookmarkedRecipes));
  };

  const likeRecipe = (id) => {
    setIsFav(true);
    var favRecipes = localStorage.getItem("likedRecipesIds");
    favRecipes = favRecipes?.split(",");
    favRecipes = [...new Set(favRecipes)];
    favRecipes.push(String(id));
    localStorage.setItem("likedRecipesIds", String(favRecipes));
  };

  const unlikeRecipe = (id) => {
    setIsFav(false);
    var favRecipes = localStorage.getItem("likedRecipesIds");
    favRecipes = favRecipes?.split(",");
    favRecipes = favRecipes.filter((i) => i !== String(id));
    localStorage.setItem("likedRecipesIds", String(favRecipes));
  };

  const handleRecipeModal = () => {
    setShowRecipeInfo(!showRecipeInfo);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-between recipeCard">
      <img src={data.image} alt={data.image}></img>
      <p>{data.title}</p>
      <div className="d-flex align-items-center justify-content-between w-100 cc">
        <button className="btn1" onClick={handleRecipeModal}>
          View
        </button>
        {isBookmarked ? (
          <img
            src={bookmarkFill}
            alt="bookmarked"
            onClick={() => bookmarkRemoveRecipe(data.id)}
          />
        ) : (
          <img
            src={bookmark}
            alt="not-bookmarked"
            onClick={() => bookmarkAddedRecipe(data.id)}
          />
        )}
        {isFav ? (
          <img
            src={heartFill}
            alt="liked"
            onClick={() => unlikeRecipe(data.id)}
          />
        ) : (
          <img
            src={heart}
            alt="not-liked"
            onClick={() => likeRecipe(data.id)}
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
