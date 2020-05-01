"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); 
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tokenizer = /*#__PURE__*/function (_React$Component) {
  _inherits(Tokenizer, _React$Component);

  var _super = _createSuper(Tokenizer);

  function Tokenizer() {
    var _this;

    _classCallCheck(this, Tokenizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: "",
      className: ""
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        value: e.currentTarget.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEnter", function (e) {
      if (e.key == "Enter") _this.onAdd();
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function () {
      var has = _this.props.tokens.includes(_this.state.value);

      if (_this.state.value && !has) {
        _this.props.onChange(_this.props.name, [].concat(_toConsumableArray(_this.props.tokens), [_this.state.value]));

        _this.setState({
          value: "",
          className: ""
        });
      } else _this.setState({
        className: 'invalid'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (r) {
      var tokens = _this.props.tokens;
      var i = tokens.findIndex(function (i) {
        return i == r;
      });
      tokens.splice(i, 1);

      _this.props.onChange(_this.props.name, tokens);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "tokenizer"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Tags",
        className: "form-control",
        type: "text",
        value: _this.state.value,
        onChange: _this.onChange,
        onKeyDown: _this.onEnter
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "text",
        className: "btn btn-primary " + _this.state.className,
        onMouseDown: _this.onAdd
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Add"), /*#__PURE__*/_react["default"].createElement("i", {
        className: "glyphicon glyphicon-ban-circle"
      }))), _this.props.tokens.map(function (i) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: "token"
        }, i, /*#__PURE__*/_react["default"].createElement("i", {
          onClick: function onClick() {
            return _this.onDelete(i);
          }
        }, "x"));
      }));
    });

    return _this;
  }

  return Tokenizer;
}(_react["default"].Component);

Tokenizer.propTypes = {
  name: _propTypes["default"].any.isRequired,
  tokens: _propTypes["default"].any.isRequired,
  onChange: _propTypes["default"].any.isRequired
};
var _default = Tokenizer;
exports["default"] = _default;