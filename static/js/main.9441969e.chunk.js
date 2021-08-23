(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{211:function(e,n,t){"use strict";t.r(n);var o=t(8),c=t(0),r=t.n(c),i=t(14),a=t.n(i),d=t(9),s=t(18);t(98);var l,b=t(217),u=t(213),j=t(216),x=t(58),p=t(59),O=t(4);function f(e){return Object(O.jsx)(p.a,{style:Object(x.a)({fontSize:"large"===e.size?48:24},e.style),spin:!0})}function g(e){var n=e.tip,t=e.size,o=e.delay,c=e.style,r=e.mask,i=void 0!==r&&r;return Object(O.jsx)(h,{className:"spinner-wrap",justify:"center",align:"middle",style:c,"data-mask":i,children:Object(O.jsx)(b.a,{children:Object(O.jsx)(u.a,{indicator:Object(O.jsx)(f,{size:t}),delay:o,tip:n,size:t})})})}g.defaultProps={tip:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4.",size:"large",delay:0,style:{},mask:!1};var m,h=Object(d.c)(j.a)(l||(l=Object(o.a)(["\n  background-color: ",";\n  height: 100vh;\n"])),(function(e){return e["data-mask"]?"rgba(0, 0, 0, 0.1)":"transparent"})),v=g,y=t(86);function S(e){return Object(O.jsx)(H,{children:e.children})}var w,T,k,z,I,E,D,_,C,N,F,J,R,L,A,M,Q,B,H=d.c.div(m||(m=Object(o.a)(["\n  width: 70%;\n  height: 800px;\n\n  min-width: 360px;\n  max-width: 700px;\n\n  position: relative;\n  background: white;\n  border-radius: 30px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  margin: 0 auto;\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"]))),P=r.a.memo(S),U=function(){var e=function(){var e=Object(c.useState)((new Date).toLocaleString()),n=Object(s.a)(e,2),t=n[0],o=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return o((new Date).toLocaleString())}),1e3);return function(){return clearInterval(e)}}),[]),t}();return Object(O.jsx)(W,{children:Object(O.jsx)(q,{children:e})})},W=d.c.div(w||(w=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 52px;\n  padding-bottom: 24px;\n  border-bottom: 3px solid #33bb77;\n"]))),q=d.c.div(T||(T=Object(o.a)(["\n  font-size: 26px;\n  color: #119955;\n  padding-left: 10px;\n"]))),G=r.a.memo(U),K=t(218),V=t(219),X=function(e){var n=e.toggleTodo,t=e.removeTodo,o=e.todo,c=o.id,r=o.text,i=o.dueDate,a=o.done;return Object(O.jsxs)(Z,{children:[Object(O.jsx)($,{done:a,onClick:function(){return function(e){return n(e)}(c)},children:a&&Object(O.jsx)(K.a,{})}),Object(O.jsx)(ee,{done:a,children:r}),Object(O.jsxs)(ne,{done:a,children:["Due Date ",i]}),Object(O.jsx)(Y,{onClick:function(){return function(e){return t(e)}(c)},children:Object(O.jsx)(V.a,{})})]})},Y=d.c.div(k||(k=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #119955;\n  font-size: 16px;\n"]))),Z=d.c.div(z||(z=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),Y),$=d.c.div(I||(I=Object(o.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 16px;\n  border: 1px solid #33bb77;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(e){return e.done&&Object(d.b)(E||(E=Object(o.a)(["\n      border: 1px solid #dddddd;\n      color: #dddddd;\n    "])))})),ee=d.c.div(D||(D=Object(o.a)(["\n  flex: 1;\n  font-size: 16px;\n  color: #119955;\n  ","\n"])),(function(e){return e.done&&Object(d.b)(_||(_=Object(o.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),ne=d.c.div(C||(C=Object(o.a)(["\n  flex: 1;\n  font-size: 16px;\n  color: #119955;\n  ","\n"])),(function(e){return e.done&&Object(d.b)(N||(N=Object(o.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),te=r.a.memo(X),oe=function(e){var n=e.toggleTodo,t=e.removeTodo,o=e.todos;return Object(O.jsx)(ce,{children:o&&o.map((function(e,o){return Object(O.jsx)(te,{toggleTodo:n,removeTodo:t,todo:e},o)}))})},ce=d.c.div(F||(F=Object(o.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]))),re=r.a.memo(oe),ie=t(220),ae=t(215),de=t(214),se=t(29),le=t.n(se),be=function(e){var n=e.nextId,t=e.validateInput,o=e.createTodo,r=Object(c.useState)(!1),i=Object(s.a)(r,2),a=i[0],d=i[1],l=Object(c.useState)(""),b=Object(s.a)(l,2),u=b[0],j=b[1],x=Object(c.useState)(""),p=Object(s.a)(x,2),f=p[0],g=p[1],m=Object(c.useState)(!1),h=Object(s.a)(m,2),v=h[0],y=h[1],S=Object(c.useState)(""),w=Object(s.a)(S,2),T=w[0],k=w[1],z=function(){return y(!v)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(je,{children:Object(O.jsxs)(xe,{onSubmit:function(e){if(e.preventDefault(),!t(u,f))return k("".concat(u?"\ub0a0\uc9dc\ub97c":"\uac12\uc744"," \uc785\ub825\ud574\uc8fc\uc138\uc694")),void z();o({id:n,text:u,done:!1,dueDate:f}),j(""),g(""),d(!1)},children:[Object(O.jsx)(pe,{autoFocus:!0,placeholder:"What's need to be done?",onChange:function(e){return j(e.target.value)},value:u,maxLength:20}),Object(O.jsx)(ue,{onClick:function(){return d(!a)},open:a,children:Object(O.jsx)(ie.a,{})})]})}),Object(O.jsx)(Oe,{onChange:function(e,n){return g(n)},value:""!==f?le()(f):null}),Object(O.jsx)(ae.a,{visible:v,onOk:z,onCancel:z,closable:!0,children:T})]})},ue=d.c.button(J||(J=Object(o.a)(["\n  background: #33bb77;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  left: 50%;\n  transform: translate(50%, 0%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),je=d.c.div(R||(R=Object(o.a)(["\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n"]))),xe=d.c.form(L||(L=Object(o.a)(["\n  display: flex;\n  background: #eeeeee;\n  padding-left: 40px;\n  padding-top: 36px;\n  padding-right: 60px;\n  padding-bottom: 36px;\n"]))),pe=d.c.input(A||(A=Object(o.a)(["\n  padding: 12px;\n  border: 1px solid #dddddd;\n  width: 100%;\n  outline: none;\n  font-size: 21px;\n  box-sizing: border-box;\n  color: #119955;\n  &::placeholder {\n    color: #dddddd;\n    font-size: 16px;\n  }\n"]))),Oe=Object(d.c)(de.a)(M||(M=Object(o.a)(["\n  padding: 24px 8px;\n"]))),fe=r.a.memo(be),ge=function(e){var n=e.todos.filter((function(e){return!e.done}));return Object(O.jsx)(me,{children:Object(O.jsxs)(he,{className:"tasks-left",children:[null===n||void 0===n?void 0:n.length," items left"]})})},me=d.c.div(Q||(Q=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n"]))),he=d.c.div(B||(B=Object(o.a)(["\n  color: #33bb77;\n  font-size: 18px;\n"]))),ve=r.a.memo(ge),ye=function(){var e=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(1),i=Object(s.a)(r,2),a=i[0],d=i[1];return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("todos");if(null!==e&&"[]"!==e){var n=JSON.parse(e);o(n),d(n[n.length-1].id+1)}}()}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(t))}),[t]),{nextId:a,todoState:t,validateInput:function(e,n){return!(!e||!n)},toggleTodo:function(e){t.map((function(n){return n.id===e&&(n.done=!n.done),n})),o(Object(y.a)(t))},removeTodo:function(e){var n=Object(y.a)(t);n.forEach((function(t,o){return t.id===e&&n.splice(o,1)})),o(n)},createTodo:function(e){d((function(e){return e+1})),o((function(n){return[].concat(Object(y.a)(n),[Object(x.a)(Object(x.a)({},e),{},{id:a})])}))}}}(),n=e.nextId,t=e.todoState,o=e.validateInput,r=e.toggleTodo,i=e.removeTodo,a=e.createTodo;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(P,{children:[Object(O.jsx)(G,{}),Object(O.jsx)(fe,{validateInput:o,createTodo:a,nextId:n}),Object(O.jsx)(re,{toggleTodo:r,removeTodo:i,todos:t}),Object(O.jsx)(ve,{todos:t})]})})};var Se,we=function(){var e=Object(c.useState)(!1),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(function(e){var n;try{n=window[e];var t="__storage_test__";return n.setItem(t,t),n.removeItem(t),!0}catch(o){return o instanceof DOMException&&(22===o.code||1014===o.code||"QuotaExceededError"===o.name||"NS_ERROR_DOM_QUOTA_REACHED"===o.name)&&n&&0!==n.length}}("localStorage")),i=Object(s.a)(r,1)[0];return setTimeout((function(){o(!0)}),1500),i?t?Object(O.jsx)(ye,{}):Object(O.jsx)(v,{mask:!0}):Object(O.jsx)("h1",{children:"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4"})},Te=Object(d.a)(Se||(Se=Object(o.a)(["\n  body {\n    background: #eeeeee;\n  }\n"])));a.a.render(Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Te,{}),Object(O.jsx)(we,{})]}),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.9441969e.chunk.js.map