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

var IconMiniArrowLeftSolid = function (_Component) {
  _inherits(IconMiniArrowLeftSolid, _Component);

  function IconMiniArrowLeftSolid() {
    _classCallCheck(this, IconMiniArrowLeftSolid);

    return _possibleConstructorReturn(this, (IconMiniArrowLeftSolid.__proto__ || Object.getPrototypeOf(IconMiniArrowLeftSolid)).apply(this, arguments));
  }

  _createClass(IconMiniArrowLeftSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMiniArrowLeftSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M694.018 926.244c-27.296 18.796-27.3 49.268 0 68.067l509.835 351.074c27.297 18.796 49.425 7.18 49.425-25.96V601.13c0-33.133-22.125-44.758-49.425-25.96L694.018 926.245z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMiniArrowLeftSolid;
}(_react.Component);

IconMiniArrowLeftSolid.displayName = 'IconMiniArrowLeftSolid';
exports.default = IconMiniArrowLeftSolid;