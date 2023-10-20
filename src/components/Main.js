import "../styles/page.css";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipesList from "./RecipesList";
import CuisineCarousel from "./CuisineCarousel"

const Main = () => {  
  useEffect(() => {
    getRecipesList();
  }, []);

  const APP_API_KEY = "3c56849c84c24c50b0ccc44c05c1336c";
  const url = "https://api.spoonacular.com/recipes";

  const [recipesList, setRecipesList] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipesList = async () => {
    const recipes = localStorage.getItem("recipesList1");
    if (recipes && recipes.length > 0) {
      setRecipesList(JSON.parse(recipes));
    } else {
      const api = await fetch(`${url}/random?apiKey=${APP_API_KEY}&number=24`);
      const data = await api.json();
      localStorage.setItem("recipesList1", JSON.stringify(data.recipes));
      setRecipesList(data.recipes);
    }
  };

  const getRecipesOnSearch = async (e) => {
    e.preventDefault();
    const api = await fetch(`${url}/complexSearch?apiKey=${APP_API_KEY}&query=${search}`);
    const data = await api.json();
    setRecipesList(data.results);
    setSearch(search);
  };

  // const getRecipesByCuisine = async (name) => {
  //   const data = await fetch(`${url}/complexSearch?apiKey=${APP_API_KEY}&cuisine=${name}`);
  //   const recipes = await data.json();
  //   setRecipesList(recipes.results);
  // };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="recipePage">
      <SearchBar
        input={search}
        submitHandler={getRecipesOnSearch}
        updateHandler={updateSearch}
      />
      <CuisineCarousel />
      <RecipesList recipes={recipesList} />
    </div>
  );
};

export default Main;
