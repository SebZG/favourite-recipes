import { legacy_createStore as createStore, combineReducers } from "redux";

import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchBarReducer } from "../features/searchBar/searchBarSlice";

export const store = createStore(combineReducers({
   allRecipes: allRecipesReducer,
   favoriteRecipes: favoriteRecipesReducer,
   searchBar: searchBarReducer
}));