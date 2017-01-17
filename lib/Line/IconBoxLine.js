'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconBoxLine = function (_Component) {
  _inherits(IconBoxLine, _Component);

  function IconBoxLine() {
    _classCallCheck(this, IconBoxLine);

    return _possibleConstructorReturn(this, (IconBoxLine.__proto__ || Object.getPrototypeOf(IconBoxLine)).apply(this, arguments));
  }

  _createClass(IconBoxLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconBoxLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M400 0H80C35.84 0 0 35.84 0 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zM400 1440H80c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm-1680-80h160V560H160v800zM560 320h800V160H560v160zm1040 1040h160V560h-160v800zM560 1760h800v-160H560v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconBoxLine;
}(_react.Component);

exports.default = IconBoxLine;