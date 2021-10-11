import recipeView from './views/recipeView.js';
import * as model from './model.js'
import 'core-js/stable'

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => { 
  try {
    const id = window.location.hash.slice(1) // Using this method we can get the hash url and manipulate it. // Spliting out the Hash for use in fetch method.
    console.log(id)

    if(!id) return;
    recipeView.renderSpinner()

    // 1) Loading Recipe
    await model.loadRecipe(id) // We need to use await heare becouse this funtions will return a promise. Its a async function waiting othen async function.

    // 2)rendering recipe
    recipeView.render(model.state.recipe)
    
  } catch (err) {
      throw err
  }
}

controlRecipes()

const init = () => {
  recipeView.addHandlerRender(controlRecipes)
}

init()