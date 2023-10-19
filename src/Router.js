import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  Main  from "./components/Main";
import  RecipeCard  from "./components/RecipeCard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Main />} />
      <Route path="/recipes/:id" element={<RecipeCard />} />
    </Routes>
  );
}