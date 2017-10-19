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

var IconNumberedListLine = function (_Component) {
  _inherits(IconNumberedListLine, _Component);

  function IconNumberedListLine() {
    _classCallCheck(this, IconNumberedListLine);

    return _possibleConstructorReturn(this, (IconNumberedListLine.__proto__ || Object.getPrototypeOf(IconNumberedListLine)).apply(this, arguments));
  }

  _createClass(IconNumberedListLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNumberedListLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M333.414 775.364c28.8 64.037 15.36 136.546-35.916 194.033-46.531 52.179-105.6 115.426-147.388 160.037h188.725v112.942H56.482c-31.285 0-56.47-25.3-56.47-56.471v-39.53c0-14.456 5.533-28.46 15.585-38.964.113-.113 117.459-123.558 197.647-213.233 21.346-23.944 27.445-49.807 17.167-72.621-8.131-18.297-25.637-30.946-42.353-30.946-40.546 0-82.898 48.452-94.418 65.506L.01 792.983C7.804 781.237 80.425 677.67 188.058 677.67c61.78 0 118.814 38.4 145.356 97.694zm231.292-323.6v-112.94H1920v112.94H564.706zm0 564.707V903.529H1920v112.942H564.706zm0 564.705v-112.94H1920v112.94H564.706zM112.94 564.706V112.94H0V0h169.412c31.172 0 56.47 25.299 56.47 56.47v508.236h-112.94zm56.47 790.588c93.403 0 169.413 76.01 169.413 169.412 0 43.595-16.942 82.899-44.16 112.941 27.218 30.042 44.16 69.346 44.16 112.941 0 93.403-76.01 169.412-169.412 169.412H0v-112.941h169.412c31.059 0 56.47-25.412 56.47-56.47 0-31.06-25.411-56.471-56.47-56.471H0v-112.942h169.412c31.059 0 56.47-25.411 56.47-56.47 0-31.059-25.411-56.47-56.47-56.47H0v-112.942h169.412z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconNumberedListLine;
}(_react.Component);

IconNumberedListLine.displayName = 'IconNumberedListLine';
exports.default = IconNumberedListLine;