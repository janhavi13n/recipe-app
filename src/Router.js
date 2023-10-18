import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  Recipe  from "./components/Recipe";
import  Recipes  from "./components/Recipes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<Recipe />} />
    </Routes>
  );
}