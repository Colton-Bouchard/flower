(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(59),a=e.n(o),c=(e(74),e(12)),u=e(2),l=e(3),d=e(25),s=e(26),f=e(29),p=e(27),g=e(30);function m(){var n=Object(u.a)(["\n  color: #404040;\n  width: 135pt;\n  padding-left: 3pt;\n  margin-right: 10pt;\n  font-size: 13t;\n  height: 17pt;\n  border: 1px solid lightgray;\n"]);return m=function(){return n},n}var b=l.a.input(m()),v=function(n){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(b,this.props)}}]),t}(i.a.Component);function h(){var n=Object(u.a)(["\n  padding-left: 3pt;\n  font-size: 13t;\n  height: 20pt;\n  border: 1px solid lightgray;\n  background: linear-gradient(white, lightgray);\n  outline: none;\n  color: #404040;\n  &:hover {\n    background: linear-gradient(white, #d0ffd0);\n  }\n"]);return h=function(){return n},n}var O=l.a.button(h()),E=function(n){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(O,this.props)}}]),t}(i.a.Component),j=e(4),y=function(){return Math.round(Math.random()*Number.MAX_SAFE_INTEGER)},w=e(10);function k(){var n=Object(u.a)(["\n  position: absolute;\n  margin-top: -18pt;\n  font-size: 17pt;\n  margin-left: 175pt;\n  cursor: pointer;\n  color: lightgray;\n  &:hover {\n    color: #f88;\n  }\n"]);return k=function(){return n},n}function I(){var n=Object(u.a)(["\n  color: #404040;\n  padding: 5pt;\n  border-bottom: 1pt solid lightgray;\n"]);return I=function(){return n},n}var x=l.a.div(I()),S=l.a.div(k()),D=Object(j.b)(null,function(n){return{removeItem:function(t){return n(function(n){return{type:"REMOVE_ITEM",id:n}}(t))}}})(function(n){return i.a.createElement(w.b,{draggableId:n.id+"",index:n.index},function(t,e){return i.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),i.a.createElement(x,null,i.a.createElement("span",null,n.children),i.a.createElement(S,{onClick:function(){return n.removeItem(n.id)}},"\ud83d\udfa9")))})});function R(){var n=Object(u.a)(["\n  position: absolute;\n  margin-left: 185pt;\n  margin-top: -5pt;\n  font-size: 20pt;\n  cursor: pointer;\n  color: #888;\n  &:hover {\n    color: #f88;\n  }\n"]);return R=function(){return n},n}function A(){var n=Object(u.a)(["\n  margin-top: auto;\n"]);return A=function(){return n},n}function M(){var n=Object(u.a)(["\n  align-self: flex-start;\n  font-size: 16pt;\n  text-align: center;\n  border: none;\n  border-bottom: 1pt solid gray;\n  padding-top: 4pt;\n  padding-bottom: 12pt;\n  height: 10pt;\n  width: 200pt;\n  color: #404040;\n  background-color: inherit;\n  outline: none;\n"]);return M=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20pt;\n  margin-right: 10pt;\n  width: 200pt;\n  height: 400pt;\n  border: 1pt solid lightgray;\n  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);\n  padding: 10pt;\n  background: linear-gradient(to bottom right, white, #f0f0f0);\n"]);return B=function(){return n},n}var _=l.a.div(B()),N=l.a.input(M()),C=l.a.div(A()),T=l.a.div(R()),J=Object(j.b)(null,function(n,t){return{renameBoard:function(e){return n(function(n,t){return{type:"RENAME_BOARD",id:n,title:t}}(t.id,e))},addItem:function(e){return n(function(n,t){return{type:"ADD_ITEM",boardId:t,id:y(),title:n}}(e,t.id))},removeBoard:function(){return n({type:"REMOVE_BOARD",id:t.id})}}})(function(n){var t=Object(r.useState)(""),e=Object(c.a)(t,2),o=e[0],a=e[1],u=Object(r.useState)(!1),l=Object(c.a)(u,2),d=l[0],s=l[1],f=Object(r.useState)(n.title),p=Object(c.a)(f,2),g=p[0],m=p[1],b=i.a.createRef(),h=function(){n.addItem(o),a("")};Object(r.useEffect)(function(){return b.current.focus()},[d]);var O=n.items&&n.items.map(function(n,t){return i.a.createElement(D,{key:n.id,id:n.id,index:t},n.title)});return i.a.createElement(_,null,i.a.createElement("div",{onClick:function(){return d?null:s(!0)}},i.a.createElement(N,{value:g,onChange:function(n){return m(n.target.value)},onKeyPress:function(t){return"Enter"===t.key&&(n.renameBoard(g),void s(!1))},disabled:!d,innerRef:b})),i.a.createElement(T,{onClick:n.removeBoard},"\u2a2f"),i.a.createElement(w.c,{droppableId:n.id+"",type:"BOARD"},function(n,t){return i.a.createElement("div",Object.assign({ref:n.innerRef,style:{}},n.droppableProps),O,n.placeholder)}),i.a.createElement(C,null,i.a.createElement(v,{value:o,onChange:function(n){return a(n.target.value)},onKeyPress:function(n){return"Enter"===n.key&&h()}}),i.a.createElement(E,{onClick:h},"Add item")))});function P(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n"]);return P=function(){return n},n}var V=l.a.div(P());function z(){var n=Object(u.a)(["\n  display: inline-block;\n  padding: 40pt;\n  display: flex;\n  flex-direction: column;\n  margin: 20pt;\n"]);return z=function(){return n},n}var W=l.a.div(z()),K=function(){},L=function(){},U=function(){},F=Object(j.b)(function(n){return{boards:n.boards}},function(n){return{addBoard:function(t){return n((e=t,{type:"ADD_BOARD",id:y(),title:e}));var e},moveItem:function(t,e){return n({type:"MOVE_ITEM",source:t,destination:e})}}})(function(n){var t=Object(r.useState)(""),e=Object(c.a)(t,2),o=e[0],a=e[1],u=n.boards&&n.boards.map(function(n){return i.a.createElement(J,{key:n.id,id:n.id,items:n.items,title:n.title})}),l=function(){n.addBoard(o),a("")};return i.a.createElement(w.a,{onBeforeDragStart:K,onDragStart:L,onDragUpdate:U,onDragEnd:function(t){t.destination&&n.moveItem(t.source,t.destination)}},i.a.createElement(W,null,i.a.createElement(V,null,i.a.createElement(v,{value:o,onChange:function(n){return a(n.target.value)},onKeyPress:function(n){return"Enter"===n.key&&l()}}),i.a.createElement("div",{style:{marginTop:"50pt"}}),i.a.createElement(E,{onClick:l},"Add board")),i.a.createElement(V,null,u)))}),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}var Q=e(9),X=e(13),$=e(39),q=JSON.parse(localStorage.getItem("state")),Y=q||[],Z=function(n,t,e){return[].concat(e.slice(0,t),n,e.slice(t,e.length))},nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOARD":var e=Object($.a)(n).concat([{title:t.title,id:t.id}]);return localStorage.setItem("state",JSON.stringify(e)),e;case"REMOVE_BOARD":return e=n.filter(function(n){return n.id!==t.id}),localStorage.setItem("state",JSON.stringify(e)),e;case"ADD_ITEM":return e=n.map(function(n){if(n.id===t.boardId){var e=n.items?n.items:[],r=Object($.a)(e).concat([{title:t.title,id:t.id}]);return Object(X.a)({},n,{items:r})}return n}),localStorage.setItem("state",JSON.stringify(e)),e;case"REMOVE_ITEM":return e=n.map(function(n){return Object(X.a)({},n,{items:n.items?n.items.filter(function(n){return n.id!==t.id}):[]})}),localStorage.setItem("state",JSON.stringify(e)),e;case"RENAME_BOARD":return e=n.map(function(n){return n.id===t.id?Object(X.a)({},n,{title:t.title}):n}),localStorage.setItem("state",JSON.stringify(e)),e;case"MOVE_ITEM":var r;return e=(e=n.map(function(n){return t.source.droppableId===n.id+""?(r=n.items[t.source.index],Object(X.a)({},n,{items:n.items.filter(function(n,e){return e!==t.source.index})})):n})).map(function(n){return t.destination.droppableId===n.id+""?Object(X.a)({},n,{items:Z(r,t.destination.index,n.items)}):n}),localStorage.setItem("state",JSON.stringify(e)),e;default:return n}},tn=Object(Q.b)({boards:nn}),en=Object(Q.c)(tn);a.a.render(i.a.createElement(j.a,{store:en},i.a.createElement(F,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/flower",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/flower","/service-worker.js");G?(function(n){fetch(n).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):H(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):H(n)})}}()},69:function(n,t,e){n.exports=e(125)},74:function(n,t,e){},81:function(n,t){},83:function(n,t){}},[[69,2,1]]]);
//# sourceMappingURL=main.540e8727.chunk.js.map