!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var r="object"==typeof exports?e(require("react")):e(t.react);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist",r(r.s=7)}([function(e,r){e.exports=t},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),a=[];function u(t){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],l=r[c]||0,f="".concat(c," ").concat(l);r[c]=l+1;var s=u(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:f,updater:d(p,e),references:1}),n.push(f)}return n}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,s=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function b(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,y=0;function d(t,e){var r,n,o;if(e.singleton){var i=y++;r=m||(m=l(e)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=l(e),n=b.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=u(r[n]);a[o].references--}for(var i=c(t,e),l=0;l<r.length;l++){var f=u(r[l]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}r=i}}}},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var a,u,c;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},function(t,e,r){var n=r(1),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},function(t,e,r){(e=r(2)(!1)).push([t.i,'form .error-msg{padding:3px;background:rgba(255,255,255,.3);color:#f40000;line-height:17px;position:absolute}form .has-error input{border:solid #f40000 1px;transition:all .3s}form .has-error input:focus{border:solid #f40000 1px;box-shadow:0px 0px 4px red}form table{width:100%}form table tr{height:0;transition:height 2s}form table tr td{padding-bottom:10px}form table tr td:first-child{width:100px}@media screen and (max-width: 540px){form table tr td:first-child{width:10px;white-space:nowrap;text-align:left}}form table tr[type=textarea] td{vertical-align:top;padding-top:10px}form table .control-label{text-align:right;width:100%;padding-top:0px !important;margin-bottom:0px !important;padding-top:0 !important;padding-right:20px}@media screen and (max-width: 540px){form table .control-label{padding-right:15px}}form table .control-label.required:after{content:"*";display:inline;color:red;position:absolute;margin-left:5px}form table .form-group{margin-bottom:0 !important;width:100%}form table [name=my-fName]{max-width:300px}form table [name=my-lName]{max-width:300px}form table [name=my-quantity],form table [name=my-amount]{max-width:100px}form table [name=my-phone]{max-width:200px}form table [name=my-address]{max-width:500px}form table [name=my-deliver]{max-width:300px}form table [name=my-time]{max-width:150px}form table input[type=checkbox]{height:20px;width:20px;xxopacity:0}form table textarea{resize:none;height:70px !important;text-overflow:ellipsis;resize:none}form table label.radio{margin:3px 30px 0px 0;display:inline-block;cursor:pointer;font-weight:500}form table label.radio input[type=radio]{position:relative;float:left;margin:4px 4px 0 0;cursor:pointer}form table .radio+.radio{margin-top:3px}form table .popover{font-weight:700;white-space:nowrap}form table .header{position:relative;text-align:center}form table .header hr{background:#000;display:inline-block;width:calc(50% - 80px);margin:0;border-bottom:solid #000 1px}form table .header span{position:relative;bottom:-4px;width:110px;padding:0px 4px;display:inline-block}',""]),t.exports=e},function(t,e,r){var n=r(1),o=r(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},function(t,e,r){(e=r(2)(!1)).push([t.i,"form .glyphicon-ok,form .glyphicon-remove{display:none}form .has-feedback .form-control{padding-right:25.5px}form .has-success .glyphicon-ok,form .has-error .glyphicon-remove{display:block}form input[type=checkbox]~.glyphicon-ok,form input[type=checkbox]~.glyphicon-remove,form .radio~.glyphicon-ok,form .radio~.glyphicon-remove,form select~.glyphicon-ok,form select~.glyphicon-remove{display:none !important}",""]),t.exports=e},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=function(t,e){var r=document.createElement("div");return r.className="error-msg",r.innerText="",t.appendChild(r),{show:function(t){r.innerText=t},hide:function(){r.innerText=""}}};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l,f,s=(l=/^(\d{1}-)?\d{3}-\d{3}-\d{4}$/,f=/^.*[a-z].*$/,{validate:function(t){var e={};return Object.keys(t).map((function(r){e[r]=t[r].current.validate()})),e},getData:function(t,e){var r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e.object);return t.map((function(t){e.show[t.name]||(r[t.name]=void 0)})),r},exists:function(t){return null!=t&&""!=t},containsChars:function(t){return t&&f.test(t)},isPhone:function(t){return!t||l.test(t)}});function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,j(n.key),n)}}function d(t,e){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=w(t);if(e){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,r){return(e=j(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===p(e)?e:String(e)}var x={required:"Required",phone:"Format is xxx-xxx-xxxx",containsChars:"Cannot contain characters"},P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,n,a=h(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),O(g(e=a.call(this,t)),"onBlur",(function(){e.ttip.hide()})),O(g(e),"onChange",(function(t){var r=b(e.props.strategy.getEvent(t),2),n=r[0],o=r[1];e.setState({value:o}),e.props.change(n,o,e.validate(o))})),O(g(e),"onWatch",(function(){var t=e.props.error;e.props.submitted&&(t?e.ttip.show(x[t]):e.ttip.hide())})),e.elem=o.a.createRef(),e.state={value:e.props.value},e}return e=u,(r=[{key:"validate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.value;return this.props.strategy.validate(this.props.required,t)}},{key:"componentDidMount",value:function(){this.ttip=i(this.elem.current),this.tooltipParams={onKeyUp:this.onWatch,onFocus:this.onWatch,onBlur:this.onBlur}}},{key:"componentWillReceiveProps",value:function(t){this.setState({value:t.value})}},{key:"render",value:function(){var t=["form-group has-feedback"];this.props.submitted&&t.push(this.props.error?"has-error":"has-success");var e={type:this.props.tag||"text",name:this.props.name,onChange:this.onChange,value:this.state.value};return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("label",{className:"control-label "+(this.props.required?"required":"")},this.props.label)),o.a.createElement("td",null,o.a.createElement("div",{ref:this.elem,className:t.join(" "),name:"my-".concat(this.props.name)},this.props.strategy.html(e,this.tooltipParams,this.props.options))))}}])&&y(e.prototype,r),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(o.a.Component);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,I(n.key),n)}}function _(t,e){return(_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=N(t);if(e){var o=N(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e,r){return(e=I(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===S(e)?e:String(e)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(a,t);var e,r,n,i=R(a);function a(){var t;E(this,a);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return D(C(t=i.call.apply(i,[this].concat(r))),"getEvent",(function(t){return[t.target.name,t.target.value]})),D(C(t),"validate",(function(){return""})),t}return e=a,(r=[{key:"render",value:function(){return o.a.createElement("td",{colSpan:"2"},o.a.createElement("div",{className:"header"},o.a.createElement("hr",null),o.a.createElement("span",null,this.props.label),o.a.createElement("hr",null)))}}])&&k(e.prototype,r),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o.a.Component);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,H(n.key),n)}}function F(t,e){return(F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=z(t);if(e){var o=z(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return U(this,r)}}function U(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return W(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t,e,r){return(e=H(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function H(t){var e=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===q(e)?e:String(e)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(a,t);var e,r,n,i=L(a);function a(){var t;B(this,a);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return $(W(t=i.call.apply(i,[this].concat(r))),"getEvent",(function(t){return[t.target.name,t.target.value]})),$(W(t),"validate",(function(){return""})),t}return e=a,(r=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("label",{className:"control-label"},this.props.label)),o.a.createElement("td",null,this.props.value))}}])&&A(e.prototype,r),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o.a.Component);function K(){return(K=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var V={getEvent:function(t){return[t.target.name,t.target.value]},format:function(t){return t},validate:function(t,e){return t&&!s.exists(e)?"required":""},html:function(t,e){return o.a.createElement("input",K({className:"form-control"},t,e))}};function G(){return(G=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var Q={getEvent:function(t){return[t.target.name,t.target.value]},format:function(t){return t},validate:function(t,e){return t&&!s.exists(e)?"required":""},html:function(t,e){return o.a.createElement("input",G({className:"form-control"},t,e,{type:"number",min:"1"}))}};function X(){return(X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var Y={getEvent:function(t){return[t.target.name,t.target.value]},format:function(t){return isNaN(t)?t:11==t.length?t.substr(0,1)+"-"+t.substr(1,3)+"-"+t.substr(4,3)+"-"+t.substr(7,4):10==t.length?t.substr(0,3)+"-"+t.substr(3,3)+"-"+t.substr(6,4):t},validate:function(t,e){return t&&!s.exists(e)?"required":s.containsChars(e)?"containsChars":s.isPhone(e)?"":"phone"},html:function(t,e){return o.a.createElement("input",X({className:"form-control"},t,e,{type:"text"}))}};function Z(){return(Z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var tt={getEvent:function(t){return[t.target.name,t.target.checked]},format:function(t){return t},validate:function(t,e){return t&&!Validation.exists(e)?"required":""},html:function(t){return o.a.createElement("input",Z({},t,{className:"form-group",type:"checkbox",checked:t.value,autoComplete:"off"}))}};function et(){return(et=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var rt={getEvent:function(t){return[t.target.name,t.target.value]},format:function(t){return t},validate:function(t,e){return t&&!s.exists(e)?"required":""},html:function(t,e,r){return o.a.createElement("select",et({},t,{className:"form-control"}),r.map((function(t){return o.a.createElement("option",{key:t.id,value:t.id},t.label)})))}};function nt(){return(nt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var ot={getEvent:function(t){return[t.target.name,t.target.value]},format:function(t){return t},validate:function(t,e){return t&&!s.exists(e)?"required":""},html:function(t,e){return o.a.createElement("textarea",nt({className:"form-control"},t,e))}};function it(){return(it=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var at={getEvent:function(t){return[t.target.name,"true"===t.target.value]},format:function(t){return t},validate:function(t,e){return""},html:function(t,e,r){return o.a.createElement(o.a.Fragment,null,r&&r.map((function(e){return o.a.createElement("label",{key:e.label,className:"radio"},o.a.createElement("input",it({type:"radio",id:e.label},t,{value:e.value,checked:t.value==e.value})),e.label)})))}};function ut(){return(ut=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,pt(n.key),n)}}function ft(t,e,r){return e&&lt(t.prototype,e),r&&lt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function st(t,e,r){return(e=pt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function pt(t){var e=function(t,e){if("object"!==ct(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==ct(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===ct(e)?e:String(e)}var bt=ft((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));st(bt,"create",o.a.forwardRef((function(t,e){return"label"==t.tag?o.a.createElement(J,ut({ref:e},t)):"header"==t.tag?o.a.createElement(M,ut({ref:e},t)):o.a.createElement(P,ut({ref:e},t,{strategy:bt.getStrategy(t.tag)}))}))),st(bt,"getStrategy",(function(t){switch(t){case"text":return V;case"phone":return Y;case"number":return Q;case"select":return rt;case"checkbox":return tt;case"textarea":return ot;case"radio":return at}}));var mt=bt;r(3),r(5);function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(){return(dt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function ht(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(r),!0).forEach((function(e){St(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ht(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function gt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Et(n.key),n)}}function wt(t,e){return(wt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Pt(t);if(e){var o=Pt(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return jt(this,r)}}function jt(t,e){if(e&&("object"===yt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return xt(t)}function xt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Pt(t){return(Pt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function St(t,e,r){return(e=Et(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Et(t){var e=function(t,e){if("object"!==yt(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==yt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===yt(e)?e:String(e)}var kt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&wt(t,e)}(a,t);var e,r,n,i=Ot(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),St(xt(e=i.call(this,t)),"state",{object:e.props.object,submitted:!1,errors:{},show:{}}),St(xt(e),"refList",{}),St(xt(e),"validate",(function(){e.setState({errors:s.validate(e.refList)})})),St(xt(e),"onSubmit",(function(t){if(t.preventDefault(),e.setState({submitted:!0}),e.props.fields.every((function(t){return!e.state.show[t.name]||""==e.state.errors[t.name]}))){var r=s.getData(e.props.fields,e.state);e.props.onSuccess(r,(function(){e.setState({submitted:!1})}))}})),St(xt(e),"showIf",(function(){e.props.fields.map((function(t){var r=e.state.object[t.name],n=e.state.show[t.name];if(t.showIf){var o=t.showIf,i=o.test;o.target.map((function(t){e.state.show[t]=!!n&&i(r)}))}}))})),St(xt(e),"change",(function(t,r,n){e.state.object[t]=r,e.showIf();var o=vt(vt({},e.state.object),{},St({},t,r)),i=(n=vt(vt({},e.state.errors),{},St({},t,n)),e.state.submitted);e.setState({object:o,errors:n,submitted:i})})),St(xt(e),"renderField",(function(t){var r=mt.create;return o.a.createElement("tr",{key:t.name,type:t.tag,className:e.state.show[t.name]?"":"hide"},o.a.createElement(r,dt({},t,{ref:e.refList[t.name],value:e.state.object[t.name],error:e.state.errors[t.name],submitted:e.state.submitted,change:e.change})))})),e.init(),e}return e=a,(r=[{key:"componentDidMount",value:function(){this.validate(),this.showIf()}},{key:"init",value:function(){var t=this;this.props.fields.map((function(e){if(t.refList[e.name]=o.a.createRef(),e.showIf){var r=e.showIf,n=r.target,i=r.test;"function"!=typeof i&&(e.showIf.test=function(t){return t==i}),"string"==typeof n&&(e.showIf.target=[n]),void 0===t.state.show[e.name]&&(t.state.show[e.name]=!0)}else t.state.show[e.name]=!0}))}},{key:"componentWillReceiveProps",value:function(t){var e=this;this.setState({object:t.object},(function(){e.validate(),e.showIf(),e.setState({submitted:!1})}))}},{key:"render",value:function(){var t=this;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("table",null,o.a.createElement("tbody",null,this.props.fields&&this.props.fields.map((function(e){return t.renderField(e)})))),o.a.createElement("div",{className:"text-right"},this.props.children))}}])&&gt(e.prototype,r),n&&gt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o.a.Component);e.default=kt}])}));