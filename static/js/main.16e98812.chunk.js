(this["webpackJsonpc2021-0308_breakingbad_react_api"]=this["webpackJsonpc2021-0308_breakingbad_react_api"]||[]).push([[0],{21:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(14),s=c.n(r),i=(c(21),c(5)),j=c.n(i),d=c(15),b=c(3),o=c(16),l=c.n(o),h=(c(41),c(0)),u=function(e){var t=e.item;return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-inner",children:[Object(h.jsx)("div",{className:"card-front",children:Object(h.jsx)("img",{src:t.img,alt:""})}),Object(h.jsxs)("div",{className:"card-back",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Birthday:"})," ",t.birthday]})]})]})]})})},O=function(e){var t=e.Items;return e.Isloading?Object(h.jsx)("h1",{children:"loading"}):Object(h.jsx)("section",{className:"cards",children:t.map((function(e){return Object(h.jsx)(u,{item:e,children:e.name},e.char_id)}))})};var m=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),s=Object(b.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(""),m=Object(b.a)(u,2);return m[0],m[1],Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://www.breakingbadapi.com/api/characters");case 2:t=e.sent,console.log(t.data),a(t.data),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"center head",children:"breaking bad tv show api"}),Object(h.jsx)(O,{IsLoading:i,Items:c})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.16e98812.chunk.js.map