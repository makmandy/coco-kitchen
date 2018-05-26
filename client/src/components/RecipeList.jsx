import React from 'react';

var RecipeList = ({recipes}) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe) => {
          <RecipeListItem recipe={recipe}/>
        })}
      </ul>
    </div>
  )
};

export default RecipeList;