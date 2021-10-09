export const state = {
    recipe: {}, // This object will recive the data from the AJAX request and we can export.
}

export const loadRecipe = async (id) => {
   try {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const data = await res.json()

    if(!res.ok) throw new Error(`${data.message} (${res.status})`)
    let {recipe} = data.data

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

    console.error(state.recipe)
   } catch (err) {
       console.log(err)
   }

}