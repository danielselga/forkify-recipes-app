import recipeView from './views/recipeView.js';
import * as model from './model.js'
import 'core-js/stable'

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
      alert(err)
  }
}

controlRecipes()

window.addEventListener('hashchange', controlRecipes) // This eventListener we can catch the hash change in the browser.

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes)) // Using for each to trigger functions.