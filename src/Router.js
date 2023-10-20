import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  Main  from "./components/Main";
import  RecipeInfoModal  from "./components/RecipeInfoModal";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Main />} />
      <Route path="/recipeInfo" element={<RecipeInfoModal />} />
    </Routes>
  );
}