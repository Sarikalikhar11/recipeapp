
import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';
import RecipeItem from './components/RecipeItem';



function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  

  const APP_ID = "c25da38d";
  const APP_KEY = "bb169650d54eb21815483fa61c540a50";

  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
     
     <h1>Food Recipe 🍔🍩</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text" placeholder="Search for a Recipe...." className="app__input"
        value={query} onChange={(e) => setQuery(e.target.value)}/>
        <input className="app__submit" type="submit" value="Search"/>
      

      
      </form>
      <div className="app_recipes">
      { 
        recipes !== []  &&
        recipes.map((recipe) => {
          return <RecipeItem recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
