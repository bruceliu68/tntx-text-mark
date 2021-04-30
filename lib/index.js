"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Highlighter;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _highlightWordsCore = require("highlight-words-core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Highlighter.propTypes = {
  activeClassName: _propTypes["default"].string,
  activeIndex: _propTypes["default"].number,
  activeStyle: _propTypes["default"].object,
  autoEscape: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  findChunks: _propTypes["default"].func,
  highlightClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  highlightStyle: _propTypes["default"].object,
  highlightTag: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func, _propTypes["default"].string]),
  sanitize: _propTypes["default"].func,
  searchWords: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(RegExp)])).isRequired,
  textToHighlight: _propTypes["default"].string.isRequired,
  unhighlightClassName: _propTypes["default"].string,
  unhighlightStyle: _propTypes["default"].object
};
/**
 * Highlights all occurrences of search terms (searchText) within a string (textToHighlight).
 * This function returns an array of strings and <span>s (wrapping highlighted words).
 */

function Highlighter(_ref) {
  var _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "" : _ref$activeClassName,
      _ref$activeIndex = _ref.activeIndex,
      activeIndex = _ref$activeIndex === void 0 ? -1 : _ref$activeIndex,
      activeStyle = _ref.activeStyle,
      autoEscape = _ref.autoEscape,
      _ref$caseSensitive = _ref.caseSensitive,
      caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive,
      className = _ref.className,
      findChunks = _ref.findChunks,
      _ref$highlightClassNa = _ref.highlightClassName,
      highlightClassName = _ref$highlightClassNa === void 0 ? "" : _ref$highlightClassNa,
      _ref$highlightStyle = _ref.highlightStyle,
      highlightStyle = _ref$highlightStyle === void 0 ? {} : _ref$highlightStyle,
      _ref$highlightTag = _ref.highlightTag,
      highlightTag = _ref$highlightTag === void 0 ? "mark" : _ref$highlightTag,
      sanitize = _ref.sanitize,
      searchWords = _ref.searchWords,
      textToHighlight = _ref.textToHighlight,
      _ref$unhighlightClass = _ref.unhighlightClassName,
      unhighlightClassName = _ref$unhighlightClass === void 0 ? "" : _ref$unhighlightClass,
      unhighlightStyle = _ref.unhighlightStyle,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["activeClassName", "activeIndex", "activeStyle", "autoEscape", "caseSensitive", "className", "findChunks", "highlightClassName", "highlightStyle", "highlightTag", "sanitize", "searchWords", "textToHighlight", "unhighlightClassName", "unhighlightStyle"]);
  var chunks = (0, _highlightWordsCore.findAll)({
    autoEscape: autoEscape,
    caseSensitive: caseSensitive,
    findChunks: findChunks,
    sanitize: sanitize,
    searchWords: searchWords,
    textToHighlight: textToHighlight
  });
  var HighlightTag = highlightTag;
  var highlightIndex = -1;
  var highlightClassNames = "";
  var highlightStyles;

  var lowercaseProps = function lowercaseProps(object) {
    var mapped = {};

    for (var key in object) {
      mapped[key.toLowerCase()] = object[key];
    }

    return mapped;
  };

  var memoizedLowercaseProps = (0, _memoizeOne["default"])(lowercaseProps);
  return (0, _react.createElement)("span", _objectSpread({
    className: className
  }, rest, {
    children: chunks.map(function (chunk, index) {
      var text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

      if (chunk.highlight) {
        highlightIndex++;
        var highlightClass;

        if ((0, _typeof2["default"])(highlightClassName) === "object") {
          if (!caseSensitive) {
            highlightClassName = memoizedLowercaseProps(highlightClassName);
            highlightClass = highlightClassName[text.toLowerCase()];
          } else {
            highlightClass = highlightClassName[text];
          }
        } else {
          highlightClass = highlightClassName;
        }

        var isActive = highlightIndex === +activeIndex;
        highlightClassNames = "".concat(highlightClass, " ").concat(isActive ? activeClassName : "");
        highlightStyles = isActive === true && activeStyle != null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
        var props = {
          children: text,
          className: highlightClassNames,
          key: index,
          style: highlightStyles
        }; // Don't attach arbitrary props to DOM elements; this triggers React DEV warnings (https://fb.me/react-unknown-prop)
        // Only pass through the highlightIndex attribute for custom components.

        if (typeof HighlightTag !== "string") {
          props.highlightIndex = highlightIndex;
        }

        return (0, _react.createElement)(HighlightTag, props);
      } else {
        return (0, _react.createElement)("span", {
          children: text,
          className: unhighlightClassName,
          key: index,
          style: unhighlightStyle
        });
      }
    })
  }));
}