import "../styles/home.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import CuisineCarousel from "./CuisineCarousel";
import RecipesList from "./RecipesList";

const Main = () => {
  useEffect(() => {
    getRecipesList();
  }, []);

  const APP_API_KEY = "3c56849c84c24c50b0ccc44c05c1336c";
  const url = "https://api.spoonacular.com/recipes";

  const [recipesList, setRecipesList] = useState([]);
  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");

  const getRecipesList = async () => {
    const recipes = localStorage.getItem("recipes");
    if (recipes && recipes.length > 0) {
      setRecipesList(JSON.parse(recipes));
    } else {
      const api = await fetch(`${url}/random?apiKey=${APP_API_KEY}&number=30`);
      const data = await api.json();
      localStorage.setItem("recipes", JSON.stringify(data.recipes));
      setRecipesList(data.recipes);
    }
  };

  const getRecipesOnSearch = async (e) => {
    e.preventDefault();
    if(search !== "" && search.trim() !== "") {
      const api = await fetch(
        `${url}/complexSearch?apiKey=${APP_API_KEY}&query=${search}`
      );
      const data = await api.json();
      setRecipesList(data.results);
      setSearch("");
      setErr("");
    } else {
      setErr("Please enter recipe");
    }
  };

  const getRecipesByCuisine = async (e) => {
    const data = await fetch(
      `${url}/complexSearch?apiKey=${APP_API_KEY}&cuisine=${e}`
    );
    const recipes = await data.json();
    setRecipesList(recipes.results);
  };

  const getVegDessert = async (e) => {
    if (e === "vegetarian") {
      const veg = localStorage.getItem("veggie");
      if (veg) {
        setRecipesList(JSON.parse(veg));
      } else {
        const api1 = await fetch(
          `${url}/random?apiKey=${APP_API_KEY}&number=30&tags=${e}`
        );
        const data = await api1.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setRecipesList(data.recipes);
      }
    } else if (e === "dessert") {
      const des = localStorage.getItem("dessert");
      if (des) {
        setRecipesList(JSON.parse(des));
      } else {
        const api2 = await fetch(
          `${url}/random?apiKey=${APP_API_KEY}&number=30&tags=${e}`
        );
        const data = await api2.json();
        localStorage.setItem("dessert", JSON.stringify(data.recipes));
        setRecipesList(data.recipes);
      }
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="recipePage">
      <Header
        input={search}
        error={err}
        submitHandler={getRecipesOnSearch}
        updateHandler={updateSearch}
        searchVegDessert={getVegDessert}
      />
      <CuisineCarousel getRecipesByCuisine={getRecipesByCuisine} />
      <RecipesList recipes={recipesList} />
    </div>
  );
};

export default Main;
