"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(n,t,e){e.r(t);var c=e(439),r=e(791),o=e(689),u=e(87),i=e(577),a=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,o.TH)(),e=(0,r.useState)([]),f=(0,c.Z)(e,2),s=f[0],h=f[1];return(0,r.useEffect)((function(){(0,i.Hx)(n).then((function(n){return h(n.results)})).catch((function(n){return console.error("Error:",n)}))}),[n]),(0,a.jsxs)("div",{children:[s.map((function(n){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:n.author}),(0,a.jsx)("p",{children:n.content})]},n.id)})),(0,a.jsx)(u.rU,{to:"/movies/".concat(n),state:{from:t},children:"Go back to Movie Details"})]})}},577:function(n,t,e){e.d(t,{Hx:function(){return f},Xd:function(){return u},Y5:function(){return i},wr:function(){return o},xc:function(){return a}});var c="05a2fb56bd80310a95255105f59556f4",r="https://api.themoviedb.org/3",o=function(){var n="".concat(r,"/trending/all/day?api_key=").concat(c);return fetch(n).then((function(n){return n.json()}))},u=function(n){var t="".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n);return fetch(t).then((function(n){return n.json()}))},i=function(n){var t="".concat(r,"/movie/").concat(n,"?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},a=function(n){var t="".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))},f=function(n){var t="".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c);return fetch(t).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=681.33b73d8e.chunk.js.map