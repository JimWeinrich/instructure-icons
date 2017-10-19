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

var IconAppleLine = function (_Component) {
  _inherits(IconAppleLine, _Component);

  function IconAppleLine() {
    _classCallCheck(this, IconAppleLine);

    return _possibleConstructorReturn(this, (IconAppleLine.__proto__ || Object.getPrototypeOf(IconAppleLine)).apply(this, arguments));
  }

  _createClass(IconAppleLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAppleLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1688.457 1334.185l48.563 20.377-16.3 50.26c-13.472 43.47-52.3 154.746-128.144 267.947-72.335 107.768-162.217 242.024-314.246 244.854-71.769 1.811-117.615-19.81-159.613-38.262-39.96-17.66-74.26-32.828-131.086-32.828-60.11 0-96.448 15.735-138.558 34.073-39.507 17.207-84.335 36.677-146.482 39.28-2.83.114-5.66.114-8.264.114-147.274 0-249.608-150.897-317.755-251.306-173.65-256.174-272.474-680.11-113.653-961.528 86.598-153.614 244.174-250.627 411.258-253.117 65.09-.906 124.974 19.47 176.594 39.846 8.83-119.88 65.883-231.722 125.087-303.944C1061.89 84.448 1206.448 7.245 1327.573 2.264L1380.664 0l5.547 52.865c13.923 131.766-31.47 278.7-121.238 393.146-1.359 1.585-2.944 2.717-4.189 4.302 14.943-.566 29.885-1.698 45.394-.226 67.694 2.83 245.646 28.64 362.016 202.176l31.583 47.205-47.318 31.47c-40.752 25.81-165.839 118.748-164.141 293.077 1.924 220.742 179.876 301.68 200.14 310.17zm-189.95 275.531c49.581-73.92 81.277-146.708 99.276-195.271-76.637-45.96-220.628-162.443-222.666-389.411-1.698-180.103 97.24-294.662 165.613-352.168-85.353-92.598-195.385-107.88-242.816-109.918-73.694-7.81-144.331 21.282-207.157 46.639-47.432 19.13-88.297 35.545-126.22 35.545-32.375 0-66.335-10.98-101.654-24.791l-5.433-.453-.227-1.698c-7.471-3.056-14.942-6-22.64-9.056C785 588.984 730.55 562.608 676.102 567.25c-127.125 1.924-247.684 76.863-314.586 195.61-144.897 256.627-23.658 647.057 108.787 842.215 70.41 103.805 145.123 206.365 227.76 201.724 40.978-1.698 69.505-14.15 105.843-29.885 46.865-20.49 100.07-43.582 183.725-43.582 80.712 0 131.765 22.527 176.82 42.45 37.242 16.527 68.146 30.451 111.729 28.64 86.372-1.585 146.708-81.731 222.326-194.706zM1063.474 261.607c-46.525 56.827-95.994 150.784-101.088 247.457 84.674-12.678 165.273-71.769 213.61-133.01 58.411-74.374 93.39-164.821 98.824-251.42-76.524 20.49-158.707 72.449-211.233 136.86l-.113.113z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconAppleLine;
}(_react.Component);

IconAppleLine.displayName = 'IconAppleLine';
exports.default = IconAppleLine;