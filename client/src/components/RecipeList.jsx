import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const renderRecipeList = (props) => {
  if (props.recipes === null) {
    return null;
  }
  return (
    <ul>
    {props.recipes.map((recipe, id) => <RecipeListItem key={id} recipe={recipe} />)}
    </ul>
  );
};

const RecipeList = (props) => {
  return renderRecipeList(props);
};


export default RecipeList;
