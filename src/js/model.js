import { API_URL } from "./config"
import { getJSON } from "./helper"

export const state = {
    recipe: {}, // This object will recive the data from the AJAX request and we can export.
}

export const loadRecipe = async (id) => {
   try {
    const {data} = await getJSON(API_URL+id)
    const {recipe} = data
    console.log(recipe)

    state.recipe = { // Creating a new object to format under_score_case to camelCase.
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cookingTime,
      ingredients: recipe.ingredients
    }
   } catch (err) {
       console.error(err)
   }
}