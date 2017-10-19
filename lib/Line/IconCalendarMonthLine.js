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

var IconCalendarMonthLine = function (_Component) {
  _inherits(IconCalendarMonthLine, _Component);

  function IconCalendarMonthLine() {
    _classCallCheck(this, IconCalendarMonthLine);

    return _possibleConstructorReturn(this, (IconCalendarMonthLine.__proto__ || Object.getPrototypeOf(IconCalendarMonthLine)).apply(this, arguments));
  }

  _createClass(IconCalendarMonthLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarMonthLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1637.706 112.941c93.403 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.41v-56.47c0-31.172 25.3-56.47 56.472-56.47s56.47 25.298 56.47 56.47v56.47h790.589v-56.47c0-31.172 25.299-56.47 56.47-56.47 31.172 0 56.47 25.298 56.47 56.47v56.47h169.413zm56.47 338.824V282.353c0-31.172-25.411-56.47-56.47-56.47h-169.412v56.47c0 31.172-25.3 56.471-56.47 56.471-31.172 0-56.471-25.299-56.471-56.47v-56.472H564.765v56.471c0 31.172-25.3 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.47v-56.472H282.412c-31.06 0-56.47 25.3-56.47 56.471v169.412h1468.234zM225.942 1807.058h1468.234V564.705H225.942v1242.353zm112.94-677.646V790.588h338.824v338.824H338.882zm112.942-112.941h112.941V903.53H451.824v112.941zm338.823 112.941V790.588h338.824v338.824H790.647zm112.941-112.941h112.941V903.53H903.588v112.941zm338.824 112.941V790.588h338.823v338.824h-338.823zm112.941-112.941h112.941V903.53h-112.941v112.941zM338.882 1581.177v-338.824h338.824v338.824H338.882zm112.942-112.942h112.941v-112.941H451.824v112.941zm338.823 112.942v-338.824h338.824v338.824H790.647zm112.941-112.942h112.941v-112.941H903.588v112.941zm338.824 112.942v-338.824h338.823v338.824h-338.823zm112.941-112.942h112.941v-112.941h-112.941v112.941z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCalendarMonthLine;
}(_react.Component);

IconCalendarMonthLine.displayName = 'IconCalendarMonthLine';
exports.default = IconCalendarMonthLine;