'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RecipeListItem = require('./RecipeListItem.jsx');

var _RecipeListItem2 = _interopRequireDefault(_RecipeListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderRecipeList = function renderRecipeList(props) {
  if (props.recipes === null) {
    return null;
  }
  return _react2.default.createElement(
    'ul',
    null,
    'some coco-containing recipes',
    props.recipes.map(function (recipe) {
      return _react2.default.createElement(_RecipeListItem2.default, { recipe: recipe });
    })
  );
};

var RecipeList = function RecipeList(props) {
  return renderRecipeList(props);
};

exports.default = RecipeList;