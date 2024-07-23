import '../App.css';

// import { SearchBar} from "../features/searchBar/SearchBar.jsx";
// import FavoriteRecipes from "../features/favoriteRecipes/FavoriteRecipes.jsx";
import AllRecipes from "../features/allRecipes/AllRecipes.jsx";

import { getFilteredRecipes } from '../utilities/getFilteredRecipes.js';

function App({ state, dispatch }) {

	const visibleAllRecipes = getFilteredRecipes(
		state.allRecipes,
		state.searchTerm
	);

	return (
		<main>
			<section>
				{/* TODO: Add search bar */}
			</section>
			<section>
				{/* TODO: Add favorite recipes */}
			</section>
			<hr />
			<section>
				<AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
			</section>
		</main>
	);
}

export default App;

// export const getFilteredRecipes = (recipes, searchTerm) => {
//    return recipes.filter((recipe) => {
//       console.log(recipe);
//       return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//    }
//    );
// }