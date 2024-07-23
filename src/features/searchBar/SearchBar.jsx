import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'

const SearchBar = ({ searchTerm, dispatch }) => {

   const onSearchHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchTerm(userInput));
   }

   const onClearSearchHandler = () => {
      dispatch(clearSearchTerm());
   }

   return (
      <div id="search-container">
         <img id="search-icon" src={searchIconUrl} alt="" />
         <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={onSearchHandler}
            placeholder='Search recipes'
         />
         {searchTerm.length > 0 && (
            <button
               onClick={onClearSearchHandler}
               type="button"
               id="search-clear-button"

            >
               <img src={clearIconUrl} alt="" />
            </button>
         )}
      </div >
   );
}

export default SearchBar;