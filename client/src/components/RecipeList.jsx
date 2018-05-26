import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

var RecipeList = (props) => {
  return (
    <div>
        <h3>CocoRecipe of the Day</h3>
        <div>{props.recipes}</div>
      <ul>
        {/* {props.recipes.map(recipe => <RecipeListItem recipe={recipe}/>)} */}
      </ul>
    </div>
  )
};

export default RecipeList;