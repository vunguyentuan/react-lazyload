webpackJsonp([2],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){return(Math.random().toString(36)+"00000000000000000").slice(2,10)}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(18),l=r(s),c=n(24),p=r(c),d=n(35),f=r(d),h=n(34),v=r(h),m=function(e){function t(){o(this,t),e.call(this);var n=i();this.state={arr:[0,1,2,3,4,5,6,7].map(function(e){return{uniqueId:n,once:[6,7].indexOf(e)>-1}})}}return a(t,e),t.prototype.handleClick=function(){var e=i();this.setState({arr:this.state.arr.map(function(t){return u({},t,{uniqueId:e})})})},t.prototype.render=function(){return l["default"].createElement("div",{className:"wrapper overflow-wrapper"},l["default"].createElement("div",{className:"op"},l["default"].createElement("a",{className:"update-btn button-secondary pure-button",onClick:this.handleClick.bind(this)},"Update"),l["default"].createElement("p",{className:"desc"},"Clicking this button will make all ",l["default"].createElement("code",null,"Widgets")," in ",l["default"].createElement("strong",null," visible area "),"reload data from server."),l["default"].createElement("p",{className:"desc"},"Pay attention to ",l["default"].createElement("code",null,"props from parent")," block in ",l["default"].createElement("code",null,"Widget")," to identify how LazyLoad works.")),l["default"].createElement("h1",null,"LazyLoad in Overflow Container"),l["default"].createElement("div",{className:"widget-list overflow"},this.state.arr.map(function(e,t){return l["default"].createElement(f["default"],{once:e.once,key:t,wheel:!0,scroll:!1},l["default"].createElement(v["default"],{once:e.once,id:e.uniqueId}))})))},t}(s.Component);p["default"].render(l["default"].createElement(m,null),document.getElementById("container"))}]);
//# sourceMappingURL=overflow.js.map