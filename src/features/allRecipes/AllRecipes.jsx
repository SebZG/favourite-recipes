import { useEffect } from "react";

import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { loadData } from "./allRecipesSlice";

import FavoriteButton from "../../components/FavouriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg"

const AllRecipes = ({ allRecipes, dispatch }) => {

   useEffect(() => {
      dispatch(loadData());
   }, []);

   const onAddRecipeHandlder = (recipe) => {
      dispatch(addRecipe(recipe));
   }

   return (
      <div className="recipes-container">
         {allRecipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe}>
               <FavoriteButton
                  onClickHandler={() => onAddRecipeHandlder(recipe)}
                  icon={favoriteIconURL}
               >
                  Add to Favorites
               </FavoriteButton>
            </Recipe>
         ))}
      </div>
   )
}

export default AllRecipes;