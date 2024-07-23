export const addRecipe = (recipe) => {
   return {
      type: "favoriteRecipes/ADD_FAVOURITE",
      payload: recipe
   }
}

export const removeRecipe = (recipe) => {
   return {
      type: "favoriteRecipes/REMOVE_FAVOURITE",
      payload: recipe
   }
}

const initialState = [];
export const favouriteRecipesReducer = (favouriteRecipes = initialState, action) => {
   switch (action.type) {
      case "favoriteRecipes/ADD_FAVOURITE":
         return [...favouriteRecipes, action.payload];
      case "favoriteRecipes/REMOVE_FAVOURITE":
         return favouriteRecipes.filter(recipe => recipe.id !== action.payload.id);
      default:
         return favouriteRecipes;
   }
}