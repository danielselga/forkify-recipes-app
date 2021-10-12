import { API_URL } from "./config"
import { getJSON } from "./helper"

export const state = {
    recipe: {}, // This object will recive the data from the AJAX request and we can export.
    search: {
      query: '',
      result: []
    }
}

export const loadRecipe = async (id) => {
   try {
    const {data} = await getJSON(`${API_URL}/${id}`)
    const {recipe} = data

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
      throw err
   }
}

export const loadSearchResults = async (query) => {
  try {
    state.search.query = query
    const { data } = await getJSON(`${API_URL}?search=${query}`) // Remember ever we get a promise returned we need to use await.
    const { recipes } = data
    
    state.search.result = recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      }
    })
  } catch(err) {
    throw err
  }
}