'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svgToJsx = require('svg-to-jsx');

var _svgToJsx2 = _interopRequireDefault(_svgToJsx);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineSVG = function (_React$Component) {
  _inherits(InlineSVG, _React$Component);

  function InlineSVG(props) {
    _classCallCheck(this, InlineSVG);

    var _this = _possibleConstructorReturn(this, (InlineSVG.__proto__ || Object.getPrototypeOf(InlineSVG)).call(this));

    _this.titleId = _shortid2.default.generate();
    _this.descId = _shortid2.default.generate();
    return _this;
  }

  _createClass(InlineSVG, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = this.props.title;

      return title ? _react2.default.createElement(
        'title',
        { id: this.titleId },
        title
      ) : null;
    }
  }, {
    key: 'renderDesc',
    value: function renderDesc(desc) {
      return desc ? _react2.default.createElement(
        'desc',
        { id: this.descId },
        desc
      ) : null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent(children, src) {
      if (src) {
        return _react2.default.createElement('g', { role: 'presentation', dangerouslySetInnerHTML: { __html: (0, _svgToJsx2.default)(src) } });
      } else {
        return _react2.default.createElement(
          'g',
          { role: 'presentation' },
          children
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          desc = _props.desc,
          focusable = _props.focusable,
          children = _props.children,
          src = _props.src,
          props = _objectWithoutProperties(_props, ['title', 'desc', 'focusable', 'children', 'src']);

      return _react2.default.createElement(
        'svg',
        _extends({}, parseAttributes(src), props, {
          'aria-hidden': title ? null : 'true',
          'aria-labelledby': this.labelledBy,
          role: this.role,
          focusable: focusable }),
        this.renderTitle(),
        this.renderDesc(desc),
        this.renderContent(children, src)
      );
    }
  }, {
    key: 'role',
    get: function get() {
      if (this.props.title) {
        return 'img';
      } else {
        return 'presentation';
      }
    }
  }, {
    key: 'labelledBy',
    get: function get() {
      var ids = [];

      if (this.props.title) {
        ids.push(this.titleId);
      }

      if (this.props.desc) {
        ids.push(this.descId);
      }

      return ids.length > 0 ? ids.join(' ') : null;
    }
  }]);

  return InlineSVG;
}(_react2.default.Component);

InlineSVG.propTypes = {
  children: _propTypes2.default.node,
  src: _propTypes2.default.string,
  title: _propTypes2.default.string,
  desc: _propTypes2.default.string,
  focusable: _propTypes2.default.bool
};
InlineSVG.defaultProps = {
  focusable: false
};
InlineSVG.displayName = 'InlineSVG';
exports.default = InlineSVG;


function parseAttributes(src) {
  var attributes = {};
  var SVGAttributesRegExp = /<svg\s+([^>]*)\s*>/;
  var namesAndValuesRegExp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;

  if (typeof src === 'string') {
    var attributesMatches = SVGAttributesRegExp.exec(src);
    var attributesString = attributesMatches ? attributesMatches[1] : '';

    var match = namesAndValuesRegExp.exec(attributesString);

    while (match != null) {
      if (['xmlns', 'xmlns:xlink', 'version'].indexOf(match[1]) === -1) {
        attributes[match[1]] = match[2] || (match[3] ? match[3] : match[4] ? match[4] : match[5]) || match[1];
      }
      match = namesAndValuesRegExp.exec(attributesString);
    }
  }

  return attributes;
}