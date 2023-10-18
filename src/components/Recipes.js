import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipesList from "./RecipesList";

const Recipes = () => {
    
const onChangeSearch =()=>{
    console.log("Search...")
}
    return (
      <div style={{width: "100%",
        maxWidth: "1000px",
        margin: "5em auto"}}>
    
        <SearchBar onChangeSearch={onChangeSearch}/>
            

        <RecipesList  />
      </div>
    );
  };
  
  export default Recipes;