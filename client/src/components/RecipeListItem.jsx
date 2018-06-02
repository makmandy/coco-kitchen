import React from 'react';

var RecipeListItem = ({recipe}) => {
  return (
  <li>
  <a href={recipe[1]}>{recipe[0]}</a>
  </li>
  )
};


export default RecipeListItem;
