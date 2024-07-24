import { legacy_createStore as createStore, combineReducers } from "redux";

import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchBarReducer } from "../features/searchBar/searchBarSlice.js";

export const store = createStore(combineReducers({
   allRecipes: allRecipesReducer,
   favoriteRecipes: favoriteRecipesReducer,
   searchTerm: searchBarReducer
}));