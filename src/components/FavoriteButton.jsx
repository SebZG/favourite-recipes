const FavoriteButton = ({ children, onClickHandler, icon }) => {
   return (
      <button className="favorite-button" onClick={onClickHandler}>
         <img className="heart-icon" src={icon} alt="" />
         {children}
      </button>
   )
}

export default FavoriteButton;