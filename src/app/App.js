import '../App.css';

import SearchBar from "../features/searchBar/SearchBar.jsx";
import FavoriteRecipes from "../features/favoriteRecipes/FavoriteRecipes.jsx";
import AllRecipes from "../features/allRecipes/AllRecipes.jsx";

import { getFilteredRecipes } from '../utilities/getFilteredRecipes.js';

function App({ state, dispatch }) {

	const visibleAllRecipes = getFilteredRecipes(
		state.allRecipes,
		state.searchTerm
	);

	const visibleFavoriteRecipes = getFilteredRecipes(
		state.favoriteRecipes,
		state.searchTerm
	);

	return (
		<main>
			<section>
				<SearchBar searchTerm={state.searchTerm} dispatch={dispatch} />
			</section>
			<section>
				<h2>Favorite Recipes</h2>
				<FavoriteRecipes
					favoriteRecipes={visibleFavoriteRecipes}
					dispatch={dispatch}
				/>
			</section>
			<hr />
			<section>
				<h2>All Recipes</h2>
				<AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
			</section>
		</main>
	);
}

export default App;