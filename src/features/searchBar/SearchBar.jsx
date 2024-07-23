import { setSearchBar, clearSearchBar } from './searchBarSlice.js';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'

const SearchBar = ({ searchTerm, dispatch }) => {

   const onSearchHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchBar(userInput));
   }

   const onClearSearchHandler = () => {
      dispatch(clearSearchBar());
   }

   return (
      <div id="search-container">
         <img id="search-icon" alt="" src={searchIconUrl} />
         <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={onSearchHandler}
            placeholder="Search recipes"
         />
         {searchTerm && (
            <button
               onClick={onClearSearchHandler}
               type="button"
               id="search-clear-button"
            >
               <img src={clearIconUrl} alt="" />
            </button>
         )}
      </div>
   );
}

export default SearchBar;