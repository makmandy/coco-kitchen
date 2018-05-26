import React from 'react';

var RecipeListItem = ({recipe}) => {
  return (
  <li>
    <a href={recipe.href}>{recipe.title}</a>
    <img src={recipe.thumbnail}/>
  </li>
  )
};

export default RecipeListItem;