(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(t,n,e){t.exports=e(68)},49:function(t,n,e){},56:function(t,n){},58:function(t,n){},68:function(t,n,e){"use strict";e.r(n);var r=e(0),i=e.n(r),o=e(37),a=e.n(o),c=(e(49),e(18)),u=e(2),l=e(3),d=e(15),s=e(16),f=e(19),m=e(17),g=e(20);function p(){var t=Object(u.a)(["\n  color: #404040;\n  width: 135pt;\n  padding-left: 3pt;\n  margin-right: 10pt;\n  font-size: 13t;\n  height: 17pt;\n  border: 1px solid lightgray;\n"]);return p=function(){return t},t}var b=l.a.input(p()),v=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(g.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement(b,this.props)}}]),n}(i.a.Component);function h(){var t=Object(u.a)(["\n  padding-left: 3pt;\n  font-size: 13t;\n  height: 20pt;\n  border: 1px solid lightgray;\n  background: linear-gradient(white, lightgray);\n  outline: none;\n  color: #404040;\n  &:hover {\n    background: linear-gradient(white, #d0ffd0);\n  }\n"]);return h=function(){return t},t}var O=l.a.button(h()),E=function(t){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(g.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement(O,this.props)}}]),n}(i.a.Component),y=e(5),j=function(){return Math.round(Math.random()*Number.MAX_SAFE_INTEGER)};function w(){var t=Object(u.a)(["\n  position: absolute;\n  margin-top: -18pt;\n  font-size: 20pt;\n  margin-left: 175pt;\n  cursor: pointer;\n  color: gray;\n  &:hover {\n    color: black;\n  }\n"]);return w=function(){return t},t}function k(){var t=Object(u.a)(["\n  color: #404040;\n  padding: 5pt;\n  border-bottom: 1pt solid lightgray;\n"]);return k=function(){return t},t}var I=l.a.div(k()),x=l.a.div(w()),_=Object(y.b)(null,function(t){return{removeItem:function(n){return t(function(t){return{type:"REMOVE_ITEM",id:t}}(n))},moveItemToNextBoard:function(n){return t(function(t){return{type:"MOVE_ITEM_TO_NEXT_BOARD",id:t}}(n))}}})(function(t){return i.a.createElement(I,null,i.a.createElement("span",{onClick:function(){return t.removeItem(t.id)}},t.children),i.a.createElement(x,{onClick:function(){return t.moveItemToNextBoard(t.id)}},"\u2192"))});function S(){var t=Object(u.a)(["\n  position: absolute;\n  margin-left: 191pt;\n  cursor: pointer;\n  color: gray;\n  &:hover {\n    color: red;\n  }\n"]);return S=function(){return t},t}function A(){var t=Object(u.a)(["\n  margin-top: auto;\n"]);return A=function(){return t},t}function M(){var t=Object(u.a)(["\n  align-self: flex-start;\n  font-size: 16pt;\n  text-align: center;\n  border-bottom: 1pt solid gray;\n  padding-bottom: 16pt;\n  height: 10pt;\n  width: 200pt;\n  color: #404040;\n"]);return M=function(){return t},t}function N(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20pt;\n  margin-right: 10pt;\n  width: 200pt;\n  height: 400pt;\n  border: 1pt solid lightgray;\n  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);\n  padding: 10pt;\n  background: linear-gradient(to bottom right, white, #f0f0f0);\n"]);return N=function(){return t},t}var T=l.a.div(N()),B=l.a.div(M()),D=l.a.div(A()),R=l.a.div(S()),C=Object(y.b)(null,function(t,n){return{addItem:function(e){return t(function(t,n){return{type:"ADD_ITEM",boardId:n,id:j(),title:t}}(e,n.id))},removeBoard:function(){return t({type:"REMOVE_BOARD",id:n.id})}}})(function(t){var n=Object(r.useState)(""),e=Object(c.a)(n,2),o=e[0],a=e[1],u=function(){t.addItem(o),a("")},l=t.items&&t.items.map(function(t){return i.a.createElement(_,{key:t.id,id:t.id},t.title)});return i.a.createElement(T,null,i.a.createElement(B,null,t.children),i.a.createElement(R,{onClick:t.removeBoard},"X"),l,i.a.createElement(D,null,i.a.createElement(v,{value:o,onChange:function(t){return a(t.target.value)},onKeyPress:function(t){return"Enter"===t.key&&u()}}),i.a.createElement(E,{onClick:u},"Add item")))});function J(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n"]);return J=function(){return t},t}var V=l.a.div(J());function W(){var t=Object(u.a)(["\n  display: inline-block;\n  padding: 40pt;\n  display: flex;\n  flex-direction: column;\n  margin: 20pt;\n"]);return W=function(){return t},t}var z=l.a.div(W()),X=Object(y.b)(function(t){return{boards:t.boards}},function(t){return{addBoard:function(n){return t((e=n,{type:"ADD_BOARD",id:j(),title:e}));var e}}})(function(t){var n=Object(r.useState)(""),e=Object(c.a)(n,2),o=e[0],a=e[1],u=t.boards&&t.boards.map(function(t){return i.a.createElement(C,{key:t.id,id:t.id,items:t.items},t.title)}),l=function(){t.addBoard(o),a("")};return i.a.createElement(z,null,i.a.createElement(V,null,i.a.createElement(v,{value:o,onChange:function(t){return a(t.target.value)},onKeyPress:function(t){return"Enter"===t.key&&l()}}),i.a.createElement("div",{style:{marginTop:"50pt"}}),i.a.createElement(E,{onClick:l},"Add board")),i.a.createElement(V,null,u))}),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}var P=e(8),F=e(12),G=e(22),Q=JSON.parse(localStorage.getItem("state")),U=Q||[],$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_BOARD":var e=Object(G.a)(t).concat([{title:n.title,id:n.id}]);return localStorage.setItem("state",JSON.stringify(e)),e;case"REMOVE_BOARD":return e=t.filter(function(t){return t.id!==n.id}),localStorage.setItem("state",JSON.stringify(e)),e;case"ADD_ITEM":return e=t.map(function(t){if(t.id===n.boardId){var e=t.items?t.items:[],r=Object(G.a)(e).concat([{title:n.title,id:n.id}]);return Object(F.a)({},t,{items:r})}return t}),localStorage.setItem("state",JSON.stringify(e)),e;case"REMOVE_ITEM":return e=t.map(function(t){return Object(F.a)({},t,{items:t.items?t.items.filter(function(t){return t.id!==n.id}):[]})}),localStorage.setItem("state",JSON.stringify(e)),e;case"MOVE_ITEM_TO_NEXT_BOARD":var r;return e=t.map(function(t){t.items&&t.items.map(function(t){return t.id===n.id&&(r=t),null});var e=t.items?t.items.filter(function(t){return t.id!==n.id}):[];return r&&e.length===(t.items?t.items.length:0)&&(e=Object(G.a)(e).concat([r]),r=null),Object(F.a)({},t,{items:e})}),localStorage.setItem("state",JSON.stringify(e)),e;case"RENAME_BOARD":return e=t.map(function(t){return t.id===n.id?Object(F.a)({},t.id,{title:n.title}):t}),localStorage.setItem("state",JSON.stringify(e)),e;default:return t}},q=Object(P.b)({boards:$}),H=Object(P.c)(q);a.a.render(i.a.createElement(y.a,{store:H},i.a.createElement(X,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/flower",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/flower","/service-worker.js");K?(function(t){fetch(t).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):L(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):L(t)})}}()}},[[44,2,1]]]);
//# sourceMappingURL=main.6a1f193f.chunk.js.map