"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{221:function(n,t,e){e.r(t);var c=e(439),r=e(791),o=e(87),u=e(577),i=e(184);t.default=function(){var n=(0,r.useState)(""),t=(0,c.Z)(n,2),e=t[0],a=t[1],f=(0,r.useState)([]),h=(0,c.Z)(f,2),s=h[0],v=h[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",value:e,onChange:function(n){return a(n.target.value)}}),(0,i.jsx)("button",{onClick:function(){(0,u.Xd)(e).then((function(n){return v(n.results)})).catch((function(n){return console.error("Error:",n)}))},children:"Search"}),s.map((function(n){return(0,i.jsx)(o.rU,{to:"/movies/".concat(n.id),children:(0,i.jsx)("div",{children:(0,i.jsx)("h3",{children:n.title})})},n.id)}))]})}},577:function(n,t,e){e.d(t,{Hx:function(){return f},Xd:function(){return u},Y5:function(){return i},wr:function(){return o},xc:function(){return a}});var c="05a2fb56bd80310a95255105f59556f4",r="https://api.themoviedb.org/3",o=function(){var n="".concat(r,"/trending/all/day?api_key=").concat(c);return fetch(n).then((function(n){return n.json()}))},u=function(n){var t="".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n);return fetch(t).then((function(n){return n.json()}))},i=function(n){var t="".concat(r,"/movie/").concat(n,"?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},a=function(n){var t="".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},f=function(n){var t="".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=221.16658987.chunk.js.map