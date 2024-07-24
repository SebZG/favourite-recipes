import { setSearchBar, clearSearchBar } from './searchBarSlice.js';

const searchIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'

const SearchBar = ({ searchTerm, dispatch }) => {
   console.log(searchTerm);

   const onSearchHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchBar(userInput));
   }

   const onClearSearchHandler = () => {
      dispatch(clearSearchBar());
   }

   return (
      <div id="search-container">
         <img id="search-icon" alt="" src={searchIconURL} />
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
               <img src={clearIconURL} alt="" />
            </button>
         )}
      </div>
   );
}

export default SearchBar;