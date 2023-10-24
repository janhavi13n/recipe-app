import "../styles/home.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import CuisineCarousel from "./CuisineCarousel";
import RecipesList from "./RecipesList";

const Main = () => {
  useEffect(() => {
    getRecipesList();
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const APP_API_KEY = "3c56849c84c24c50b0ccc44c05c1336c";
  const url = "https://api.spoonacular.com/recipes";

  const [recipesList, setRecipesList] = useState([]);
  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");

  const getRecipesList = async () => {
    const recipes = sessionStorage.getItem("recipes");
    if (recipes && recipes.length > 0) {
      setRecipesList(JSON.parse(recipes));
    } else {
      const api = await fetch(`${url}/random?apiKey=${APP_API_KEY}&number=20`);
      const data = await api.json();
      sessionStorage.setItem("recipes", JSON.stringify(data.recipes));
      setRecipesList(data.recipes);
    }
  };

  const getRecipesOnSearch = async (e) => {
    e.preventDefault();
    if(search !== "" && search.trim() !== "") {
      const api = await fetch(
        `${url}/complexSearch?apiKey=${APP_API_KEY}&number=20&query=${search}`
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
      `${url}/complexSearch?apiKey=${APP_API_KEY}&number=10&cuisine=${e}`
    );
    const recipes = await data.json();
    setRecipesList(recipes.results);
  };

  const getVegDessert = async (e) => {
    const type = sessionStorage.getItem(e);
    if (type) {
      setRecipesList(JSON.parse(type));
    } else {
      const api = await fetch(
        `${url}/random?apiKey=${APP_API_KEY}&number=5&tags=${e}`
      );
      const data = await api.json();
      sessionStorage.setItem(e , JSON.stringify(data.recipes));
      setRecipesList(data.recipes);
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
        windowSize={windowSize}
        submitHandler={getRecipesOnSearch}
        updateHandler={updateSearch}
        searchVegDessert={getVegDessert}
      />
      <CuisineCarousel windowSize={windowSize} getRecipesByCuisine={getRecipesByCuisine} />
      <RecipesList recipes={recipesList} />
    </div>
  );
};

export default Main;
