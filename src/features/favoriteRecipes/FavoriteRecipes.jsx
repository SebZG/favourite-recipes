import FavoriteButton from "../../components/FavoriteButton.jsx";
import Recipe from "../../components/Recipe.jsx";

import { removeRecipe } from "./favoriteRecipesSlice";

const unfavoriteIconURL = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

const FavoriteRecipe = ({ favoriteRecipes, dispatch }) => {

   const onRemoveRecipeHandler = (recipe) => {
      dispatch(removeRecipe(recipe));
   }

   const createRecipeComponent = (recipe) => {
      return (
         <Recipe key={recipe.id} recipe={recipe} >
            <FavoriteButton
               onClickHandler={() => onRemoveRecipeHandler(recipe)}
               icon={unfavoriteIconURL}
            >
               Remove Favorite
            </FavoriteButton>
         </Recipe>
      )
   }

   return (
      <div id="favorite-recipes" className="recipes-container">
         {favoriteRecipes.map(createRecipeComponent)}
      </div>
   )
}

export default FavoriteRecipe;