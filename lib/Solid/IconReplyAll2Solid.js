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

var IconReplyAll2Solid = function (_Component) {
  _inherits(IconReplyAll2Solid, _Component);

  function IconReplyAll2Solid() {
    _classCallCheck(this, IconReplyAll2Solid);

    return _possibleConstructorReturn(this, (IconReplyAll2Solid.__proto__ || Object.getPrototypeOf(IconReplyAll2Solid)).apply(this, arguments));
  }

  _createClass(IconReplyAll2Solid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconReplyAll2Solid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M988.128 681.707c508.8 0 922.667 413.866 922.667 922.666v90.667H1697.46v-90.667c0-391.146-318.186-709.333-709.333-709.333h-100.16l307.627 307.733-150.827 150.827-564.8-564.8 564.8-564.8 150.827 150.827-306.88 306.88h99.413zm-272.501-306.88L301.653 788.8l413.974 413.973L564.8 1353.6 0 788.8 564.8 224l150.827 150.827z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconReplyAll2Solid;
}(_react.Component);

IconReplyAll2Solid.displayName = 'IconReplyAll2Solid';
exports.default = IconReplyAll2Solid;