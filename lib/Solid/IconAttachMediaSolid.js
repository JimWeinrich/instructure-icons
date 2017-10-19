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

var IconAttachMediaSolid = function (_Component) {
  _inherits(IconAttachMediaSolid, _Component);

  function IconAttachMediaSolid() {
    _classCallCheck(this, IconAttachMediaSolid);

    return _possibleConstructorReturn(this, (IconAttachMediaSolid.__proto__ || Object.getPrototypeOf(IconAttachMediaSolid)).apply(this, arguments));
  }

  _createClass(IconAttachMediaSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAttachMediaSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M.208 244.954c704.307-200.207 1350.804.104 1350.804.104v480.54l-201.972 60.716v459.99C527.97 1362.13 0 1199.91 0 1199.91V245.058l.208-.104zm752.36 607.784l210.899-123.923-210.898-124.13L541.775 480.76v496.004l210.794-124.027zm517.821 46.518L1920 707.04v712.403c-.104 105.76-84.587 191.8-188.376 191.8-103.892 0-188.272-86.143-188.272-192.111 0-105.968 84.38-192.216 188.272-192.216 30.618 0 59.16 8.095 84.588 21.38V846.013l-442.035 130.773v604.048h-.83c-4.359 102.024-86.455 183.809-187.441 183.809-103.893 0-188.376-86.144-188.376-192.216 0-105.864 84.483-192.112 188.376-192.112 30.513 0 58.951 8.095 84.483 21.38V899.256z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconAttachMediaSolid;
}(_react.Component);

IconAttachMediaSolid.displayName = 'IconAttachMediaSolid';
exports.default = IconAttachMediaSolid;