"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(n,t,e){e.r(t);var c=e(439),r=e(791),o=e(689),u=e(577),i=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,r.useState)([]),e=(0,c.Z)(t,2),a=e[0],f=e[1];return(0,r.useEffect)((function(){(0,u.Hx)(n).then((function(n){return f(n.results)})).catch((function(n){return console.error("Error:",n)}))}),[n]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Reviews"}),a.map((function(n){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:n.author}),(0,i.jsx)("p",{children:n.content})]},n.id)}))]})}},577:function(n,t,e){e.d(t,{Hx:function(){return f},Xd:function(){return u},Y5:function(){return i},wr:function(){return o},xc:function(){return a}});var c="05a2fb56bd80310a95255105f59556f4",r="https://api.themoviedb.org/3",o=function(){var n="".concat(r,"/trending/all/day?api_key=").concat(c);return fetch(n).then((function(n){return n.json()}))},u=function(n){var t="".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n);return fetch(t).then((function(n){return n.json()}))},i=function(n){var t="".concat(r,"/movie/").concat(n,"?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},a=function(n){var t="".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},f=function(n){var t="".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=681.26de0d81.chunk.js.map