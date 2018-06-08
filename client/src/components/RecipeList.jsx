import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const renderRecipeList = (props) => {
  if (props.recipes === null) {
    return null;
  }
  return (
    <div className="container">
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          {props.recipes.map((recipe, id) => <RecipeListItem key={id} recipe={recipe} />)}
        </div>
        <div className="column"></div>
      </div>
    </div>
  )
};

const RecipeList = (props) => {
  return renderRecipeList(props);
};

export default RecipeList;
