'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecipeListItem = function RecipeListItem(_ref) {
  var recipe = _ref.recipe;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { href: recipe.href },
      recipe.title
    ),
    _react2.default.createElement('img', { src: recipe.thumbnail })
  );
};

exports.default = RecipeListItem;