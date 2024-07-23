import allRecipesData from "../../data.js";

export const loadData = () => {
   return {
      type: "allRecipes/LOAD_DATA",
      payload: allRecipesData
   }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
   switch (action.type) {
      case "allRecipes/LOAD_DATA":
         return action.payload;
      case "favoriteRecipes/ADD_FAVOURITE":
         return allRecipes.filter(recipe => recipe.id !== action.payload.id);
      case "favoriteRecipes/REMOVE_FAVOURITE":
         return [...allRecipes, action.payload];
      default:
         return allRecipes;
   }
}