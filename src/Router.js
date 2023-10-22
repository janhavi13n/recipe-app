import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  Main  from "./components/Main";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Main />} />
    </Routes>
  );
}