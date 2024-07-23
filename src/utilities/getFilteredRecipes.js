export const getFilteredRecipes = (recipes, searchTerm) => {
   return recipes.filter((recipe) => {
      console.log(recipe);
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
   }
   );
}