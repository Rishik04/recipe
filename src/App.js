import './App.css';
import { useState, useEffect } from 'react';
import Recipes from './components/Recipes'
import { BrowserRouter as Router, matchPath, Route, Switch } from 'react-router-dom';
import { Ingredients } from './components/Ingredients';
function App() {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);
  const [term, setTerm] = useState('Indian');
  const [search, setSearch] = useState('');
  // const [placeholder, setPlaceholder] = useState('Nothing');
  useEffect(() => {
    const Recipe = async () => {
      const request = await fetch(`https://api.edamam.com/search?q=${term}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await request.json();
      setRecipe(data.hits);
      // console.log();
      setLoading(false);
    };
    Recipe();
  }, [term])
  const searches = (e) => {
    setSearch(e.target.value);
  }
  const query = (e) => {
    e.preventDefault();
    setTerm(search);
    setLoading(true);
  }
  // const Required=()=>{
  //   recipe.recipe.ingredientLines.map(ingredientLines);
  // }
  return (
    <div className="App">
      <form onSubmit={query}>
        <input type="text" value={search} onChange={searches} className="Search my-3" placeholder="Search Cuisine or Dish..." />
        <button type="submit" className="btn btn-default Button px-2 mx-2">Search Recipes</button>
      </form>
      <h4>Numbers of Recipe found {recipe.length}</h4>
      <div className="container text-center">
      <div>
        <div className="row">
      <Router>
        <Switch>
          <Route path="/" exact>
            {loading ?
              <div className="my-3 content">
                <h3>Please Wait...</h3>
                <img src="assets/images/loader.gif" alt="" />
              </div>
              : recipe.map(recipe => (
                <Recipes title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
              ))}
          </Route>
          <Route exact path="/Ingredients/:id">
            {recipe.map(recipe => (<Ingredients ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} image={recipe.recipe.image} title={recipe.recipe.label} />))}
          </Route>
        </Switch>
      </Router>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
