'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconComposeSolid = function (_Component) {
  _inherits(IconComposeSolid, _Component);

  function IconComposeSolid() {
    _classCallCheck(this, IconComposeSolid);

    return _possibleConstructorReturn(this, (IconComposeSolid.__proto__ || Object.getPrototypeOf(IconComposeSolid)).apply(this, arguments));
  }

  _createClass(IconComposeSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconComposeSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M757.123 1638.778a96.94 96.94 0 0 0 49.056-26.208l825.792-825.216v1083.648h-1632v-1632h1108.704l-837.6 838.368a96.377 96.377 0 0 0-26.304 49.056l-99.84 499.2c-6.24 31.488 3.552 64.032 26.208 86.784 18.24 18.144 42.72 28.128 67.968 28.128 6.24 0 12.48-.672 18.816-1.92l499.2-99.84zM1843.22 237.13a143.766 143.766 0 0 1 42.144 101.76c0 38.4-15.264 74.88-42.144 101.76l-199.68 198.72-905.376 905.28-499.104 99.84 99.84-499.2 905.28-905.28L1442.9 40.33c54.624-53.76 149.76-53.76 203.52 0l196.8 196.8zm-1152 1219.2l38.304-38.4-264-264-38.304 38.4-66.24 330.24 330.24-66.24zM1775.06 372.49c8.64-8.64 14.304-21.12 14.304-33.6 0-13.44-5.664-24.96-14.304-34.56l-195.84-195.84c-9.696-8.64-21.12-14.4-34.56-14.4-12.48 0-24.96 5.76-33.6 14.4l-131.52 131.52 264 264 131.52-131.52zM780.5 1171.21l593.28-593.28-68.256-68.16-593.184 593.28 68.16 68.16z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconComposeSolid;
}(_react.Component);

IconComposeSolid.displayName = 'IconComposeSolid';
exports.default = IconComposeSolid;