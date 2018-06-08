import React from 'react';

var RecipeListItem = ({recipe}) => {
  return (
    <div className="card">
      <div className="card-content">
      <p>{recipe.title}</p>
      </div>
    <footer className="card-footer">
      <p className="card-footer-item">
            <a href={recipe.href}>see recipe</a>
      </p>
      <p className="card-footer-item">
        <a href="#">add to faves</a>
      </p>
    </footer>
    <p>
      
    </p>
    </div>
  )
};

export default RecipeListItem;
