"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[451],{451:function(n,t,e){e.r(t);var c=e(439),r=e(791),o=e(87),i=e(577),u=e(184);t.default=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1];return(0,r.useEffect)((function(){(0,i.wr)().then((function(n){return a(n.results)})).catch((function(n){return console.error("Error:",n)}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Trending Movies"}),e.map((function(n){return(0,u.jsx)("div",{children:(0,u.jsx)(o.rU,{to:"/movies/".concat(n.id),children:(0,u.jsx)("h3",{children:n.title})})},n.id)}))]})}},577:function(n,t,e){e.d(t,{Hx:function(){return f},Xd:function(){return i},Y5:function(){return u},wr:function(){return o},xc:function(){return a}});var c="05a2fb56bd80310a95255105f59556f4",r="https://api.themoviedb.org/3",o=function(){var n="".concat(r,"/trending/all/day?api_key=").concat(c);return fetch(n).then((function(n){return n.json()}))},i=function(n){var t="".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n);return fetch(t).then((function(n){return n.json()}))},u=function(n){var t="".concat(r,"/movie/").concat(n,"?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},a=function(n){var t="".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},f=function(n){var t="".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=451.250df07c.chunk.js.map