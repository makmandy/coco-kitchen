'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RecipeListItem = require('./RecipeListItem.jsx');

var _RecipeListItem2 = _interopRequireDefault(_RecipeListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecipeList = function RecipeList(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'CocoRecipe of the Day'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.recipes
    ),
    _react2.default.createElement('ul', null)
  );
};

exports.default = RecipeList;