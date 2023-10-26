import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  Main  from "./components/Main";

export function Router() {
  return (
    <Routes>
      <Route  path={process.env.PUBLIC_URL+"/"} element={<Home />} />
      <Route path={process.env.PUBLIC_URL+"/recipes"} element={<Main />} />
    </Routes>
  );
}