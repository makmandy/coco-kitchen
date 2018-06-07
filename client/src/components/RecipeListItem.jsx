import React from 'react';

var RecipeListItem = ({recipe}) => {
  return (
    <div className="card">
      <div className="card-content">
      <p>{recipe[0]}</p>
      </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          <a href={recipe[1]}>see recipe</a>
        </span>
      </p>
      <p className="card-footer-item">
        <span>
          <a href="#">add to faves</a>
        </span>
      </p>
    </footer>
    <p></p>
    </div>
  )
};

export default RecipeListItem;
