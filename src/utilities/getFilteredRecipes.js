export const getFilteredRecipes = (recipes, searchTerm) => {
   if (!searchTerm || searchTerm.trim() === "") {
      return [];
   }

   return recipes.filter((recipe) => {
      console.log(recipe);
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
   }
   );
}