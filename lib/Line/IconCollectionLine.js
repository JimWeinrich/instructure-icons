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

var IconCollectionLine = function (_Component) {
  _inherits(IconCollectionLine, _Component);

  function IconCollectionLine() {
    _classCallCheck(this, IconCollectionLine);

    return _possibleConstructorReturn(this, (IconCollectionLine.__proto__ || Object.getPrototypeOf(IconCollectionLine)).apply(this, arguments));
  }

  _createClass(IconCollectionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCollectionLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M0 1920V677.647h1242.353V1920H0zm112.941-112.941h1016.47V790.589H112.942v1016.47zm225.883-677.647h564.705V1016.47H338.824v112.94zm0 451.764h564.705v-112.94H338.824v112.94zm0-225.882v-112.941H790.7v112.941H338.824zm0-790.588V338.824h1242.352v1242.352h-225.882v-112.94h112.941V451.764H451.765v112.94H338.824zM677.68-.011h1242.353v1242.353h-225.882V1129.4h112.94V112.93H790.623V225.87H677.681V-.01z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCollectionLine;
}(_react.Component);

IconCollectionLine.displayName = 'IconCollectionLine';
exports.default = IconCollectionLine;