export const setSearchBar = (term) => {
   return {
      type: "searchBar/SET_SEARCH_TERM",
      payload: term
   }
}

export const clearSearchBar = () => {
   return {
      type: "searchBar/CLEAR_SEARCH_TERM",
   }
}

const initialState = "";
export const searchBarReducer = (searchTerm = initialState, action) => {
   switch (action.type) {
      case "searchBar/SET_SEARCH_TERM":
         return action.payload;
      case "searchBar/CLEAR_SEARCH_TERM":
         return "";
      default:
         return searchTerm;
   }
}