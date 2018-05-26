import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const renderRecipeList = (props) => {
  if (props.recipes === null) {
    return null;
  }
  return (
    <ul>
      some coco-containing recipes
    {props.recipes.map(recipe => <RecipeListItem recipe={recipe} />)}
    </ul>
  );
};

const RecipeList = (props) => {
  return renderRecipeList(props);
};

export default RecipeList;
