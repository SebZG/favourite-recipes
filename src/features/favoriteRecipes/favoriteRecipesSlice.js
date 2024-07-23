export const addRecipe = (recipe) => {
   return {
      type: "favoriteRecipes/ADD_FAVORITE",
      payload: recipe
   }
}

export const removeRecipe = (recipe) => {
   return {
      type: "favoriteRecipes/REMOVE_FAVORITE",
      payload: recipe
   }
}

const initialState = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialState, action) => {
   switch (action.type) {
      case "favoriteRecipes/ADD_FAVORITE":
         return [...favoriteRecipes, action.payload];
      case "favoriteRecipes/REMOVE_FAVORITE":
         return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id);
      default:
         return favoriteRecipes;
   }
}