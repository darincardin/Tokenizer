(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("./util.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Tokenizer = /*#__PURE__*/_createClass(function Tokenizer(elem, opts) {
  var _this = this;
  _classCallCheck(this, Tokenizer);
  _defineProperty(this, "HTML", "\n\t\t\t\t<div class=\"tokenizer\" >\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input  class='form-control' type=\"text\" value=\"\" />\n\t\t\t\t\t\t".concat(this.getAddBtn(), "\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"tokens\"></div>\n\t\t\t\t</div>\n"));
  _defineProperty(this, "elem", null);
  _defineProperty(this, "props", null);
  _defineProperty(this, "onAdd", function () {
    var val = _this.elem.find('input').val().trim();
    if (_this.isValid(val)) {
      _this.elem.find('input').val("");
      _this.props.tokens.push(val);
      _this.update();
    }
  });
  _defineProperty(this, "onRemove", function (i) {
    _this.props.tokens.splice(i, 1);
    _this.update();
  });
  _defineProperty(this, "onKeyDown", function (e) {
    return _this.onEnter(e);
  });
  _defineProperty(this, "render", function () {
    _this.update();
    _this.elem.find('button').click(_this.onAdd);
    _this.elem.find('input').keydown(_this.onKeyDown);
  });
  _defineProperty(this, "update", function () {
    var tokens = [];
    _this.props.tokens.forEach(function (v, i) {
      var TOKEN = $(_this.getToken(v));
      TOKEN.click(function () {
        _this.onRemove(i);
      });
      tokens.push(TOKEN);
    });
    _this.elem.find('.tokens').html(tokens);
  });
  if (!opts || !opts.tokens) this.throwRequiredError();
  this.elem = elem;
  this.props = opts; //$.extend(true, opts, util.defaults, opts);	

  this.elem.html(this.HTML);
  this.render();
});
Object.assign(Tokenizer.prototype, _util["default"].functions);
$.fn.tokenizer = function (opts) {
  return new Tokenizer(this, opts);
};

},{"./util.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var util = {
  defaults: {
    allowDupes: false
  },
  functions: {
    onEnter: function onEnter(e) {
      if (e.key == "Enter") this.onAdd();
    },
    throwRequiredError: function throwRequiredError() {
      throw new Error("Tokenizer: tokens option required!");
    },
    isValid: function isValid(v) {
      if (v == undefined || v == "") return false;
      if (this.props.allowDupes) return true;
      return !this.props.tokens.includes(v);
    },
    getAddBtn: function getAddBtn() {
      return "<button type=\"text\" class=\"btn btn-primary\" >\n\t\t\t\t\t\t<span>Add</span><i className=\"glyphicon glyphicon-ban-circle\"></i>\n\t\t\t        </button>";
    },
    getToken: function getToken(v) {
      return "<span  class=\"token\" >\n\t\t\t\t\t\t\t<span>".concat(v, "</span>\n\t\t\t\t\t\t\t<i class=\"close-btn glyphicon glyphicon-remove\" >X</i> \n\t\t\t\t\t </span>");
    }
  }
};
var _default = util;
exports["default"] = _default;

},{}]},{},[1]);
