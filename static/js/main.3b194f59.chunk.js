(this.webpackJsonptestdev=this.webpackJsonptestdev||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(12),s=c.n(r),i=(c(28),c(29),c(10)),j=c(2),l=c(13),o=c(14),b=c(16),u=c(15),d=(c(30),c.p+"static/media/logo.0c68e09f.png"),O=(c(31),c(1)),h=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsx)("nav",{className:"nav",children:Object(O.jsxs)("ul",{className:"ul",children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/",exact:!0,activeClassName:"active",children:"Exchange Rates"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/calc",children:"Converter"})})]})})}}]),c}(n.a.Component),p=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"header-logo",children:Object(O.jsx)("img",{src:d,alt:""})}),Object(O.jsx)(h,{})]})}}]),c}(n.a.Component),v=Object(a.lazy)((function(){return c.e(4).then(c.bind(null,45))})),x=Object(a.lazy)((function(){return c.e(3).then(c.bind(null,46))}));var f=function(){return Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)(i.a,{basename:"/TestDev",children:[Object(O.jsx)(p,{}),Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)("div",{className:"loading",children:"Loading..."}),children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(O.jsx)(j.a,{path:"/calc",component:x})]})})]})})},m=c(22),T=c(21),y=c(4),N={date:"",currencyRate:{},dataToConvert:"UAH"},g={inputNumber:"",inputFrom:"",inputTo:""},E=Object(T.a)({rates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return Object(y.a)(Object(y.a)({},e),{},{date:t.payload});case"SET_CURRENCY":return Object(y.a)(Object(y.a)({},e),{},{currencyRate:t.payload});case"SET_INPUT_DATA":return Object(y.a)(Object(y.a)({},e),{},{dataToConvert:t.payload});default:return e}},calc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INPUT_NUMBER":return Object(y.a)(Object(y.a)({},e),{},{inputNumber:t.payload});case"SET_INPUT_FROM":return Object(y.a)(Object(y.a)({},e),{},{inputFrom:t.payload});case"SET_INPUT_TO":return Object(y.a)(Object(y.a)({},e),{},{inputTo:t.payload});default:return e}}}),_=Object(T.b)(E);s.a.render(Object(O.jsx)(m.a,{store:_,children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3b194f59.chunk.js.map