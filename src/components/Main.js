import "../styles/page.css";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipesList from "./RecipesList";

const Main = () => {
  const [recipesList, setRecipesList] = useState([]);
  const [search, setSearch] = useState("");

  const APP_API_KEY = "3c56849c84c24c50b0ccc44c05c1336c";

  useEffect(() => {
    getRecipesList();
  }, []);

  const getRecipesList = async () => {
    const recipes = localStorage.getItem("recipesList1");
    if (recipes && recipes.length > 0) {
      setRecipesList(JSON.parse(recipes));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${APP_API_KEY}&number=24`
      );
      const data = await api.json();
      localStorage.setItem("recipesList1", JSON.stringify(data.recipes));
      setRecipesList(data.recipes);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value); 
  };

  const getRecipesOnSearch = async (e) => {
    e.preventDefault(); 
    const api =await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_API_KEY}&query=${search}`
    );
    const data = await api.json();
    setRecipesList(data.results);
    setSearch(search);
  };
  
  return (
    <div className="recipePage">
      <SearchBar submitHandler={getRecipesOnSearch} input={search} updateHandler={updateSearch}/>
      <RecipesList recipes={recipesList}/>
    </div>
  );
};

export default Main;
