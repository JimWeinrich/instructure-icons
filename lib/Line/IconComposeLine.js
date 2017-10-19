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

var IconComposeLine = function (_Component) {
  _inherits(IconComposeLine, _Component);

  function IconComposeLine() {
    _classCallCheck(this, IconComposeLine);

    return _possibleConstructorReturn(this, (IconComposeLine.__proto__ || Object.getPrototypeOf(IconComposeLine)).apply(this, arguments));
  }

  _createClass(IconComposeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconComposeLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1875.702 250.836c58.997 59.097 58.997 155.27 0 214.266L1666.184 674.62l-349.432-349.332-818.778 818.778 277.91 277.91 723.514-723.414 71.422 71.422-857.367 857.266-526.018 105.164 105.264-525.917 952.63-952.63 209.519-209.519C1483.437 15.76 1521.522 0 1562.03 0h.101c40.51 0 78.494 15.76 106.982 44.348l206.588 206.488zM704.462 1493.397l-277.91-277.91-40.711 40.813-69.503 347.413 347.412-69.503 40.712-40.813zm52.803-259.24l-71.422-71.422 624.716-624.716 71.422 71.422-624.716 624.716zM1804.28 393.68c19.598-19.7 19.598-51.723 0-71.523L1597.692 115.77c-9.597-9.597-22.225-14.749-35.56-14.749h-.1c-13.538 0-26.165 5.253-35.762 14.75l-84.757 84.756-53.34 53.34 278.011 277.909L1804.28 393.68zM1515.32 1818.979v-721.494h101.021V1920H0V303.66h909.191V404.68h-808.17V1818.98H1515.32z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconComposeLine;
}(_react.Component);

IconComposeLine.displayName = 'IconComposeLine';
exports.default = IconComposeLine;