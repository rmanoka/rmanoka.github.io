!function(){"use strict";var e,r,t,_,n,i,u,c,o,a,p,f,l={},b={};function __webpack_require__(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,loaded:!1,exports:{}},_=!0;try{l[e](t,t.exports,__webpack_require__),_=!1}finally{_&&delete b[e]}return t.loaded=!0,t.exports}__webpack_require__.m=l,e=[],__webpack_require__.O=function(r,t,_,n){if(t){n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[t,_,n];return}for(var u=1/0,i=0;i<e.length;i++){for(var t=e[i][0],_=e[i][1],n=e[i][2],c=!0,o=0;o<t.length;o++)u>=n&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](t[o])})?t.splice(o--,1):(c=!1,n<u&&(u=n));if(c){e.splice(i--,1);var a=_()}}return a},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,{a:r}),r},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},__webpack_require__.t=function(e,_){if(1&_&&(e=this(e)),8&_||"object"==typeof e&&e&&(4&_&&e.__esModule||16&_&&"function"==typeof e.then))return e;var n=Object.create(null);__webpack_require__.r(n);var i={};r=r||[null,t({}),t([]),t(t)];for(var u=2&_&&e;"object"==typeof u&&!~r.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach(function(r){i[r]=function(){return e[r]}});return i.default=function(){return e},__webpack_require__.d(n,i),n},__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(r,t){return __webpack_require__.f[t](e,r),r},[]))},__webpack_require__.u=function(e){return 546===e?"static/chunks/546-b199333b010d8efc.js":"static/chunks/"+e+"."+({28:"56e29d274edb2deb",96:"abe841beef7e3a29",297:"f3e2c0be20249eed",303:"a44e70af212c86f0",355:"1201c46fbc8b3cfa",758:"40b06fe87637fab5"})[e]+".js"},__webpack_require__.miniCssF=function(e){return"static/css/"+({185:"9ff2e2f8513c1e8f",303:"431944509084d071"})[e]+".css"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},_={},n="_N_E:",__webpack_require__.l=function(e,r,t,i){if(_[e]){_[e].push(r);return}if(void 0!==t)for(var u,c,o=document.getElementsByTagName("script"),a=0;a<o.length;a++){var p=o[a];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+t){u=p;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,__webpack_require__.nc&&u.setAttribute("nonce",__webpack_require__.nc),u.setAttribute("data-webpack",n+t),u.src=__webpack_require__.tu(e)),_[e]=[r];var onScriptComplete=function(r,t){u.onerror=u.onload=null,clearTimeout(f);var n=_[e];if(delete _[e],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach(function(e){return e(t)}),r)return r(t)},f=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=onScriptComplete.bind(null,u.onerror),u.onload=onScriptComplete.bind(null,u.onload),c&&document.head.appendChild(u)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},__webpack_require__.tt=function(){return void 0===i&&(i={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("nextjs#bundler",i))),i},__webpack_require__.tu=function(e){return __webpack_require__.tt().createScriptURL(e)},__webpack_require__.p="/dg-agent/_next/",u=function(e,r,t,_){var n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=function(i){if(n.onerror=n.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,o=Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=u,o.request=c,n.parentNode.removeChild(n),_(o)}},n.href=r,document.head.appendChild(n),n},c=function(e,r){for(var t=document.getElementsByTagName("link"),_=0;_<t.length;_++){var n=t[_],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===r))return n}for(var u=document.getElementsByTagName("style"),_=0;_<u.length;_++){var n=u[_],i=n.getAttribute("data-href");if(i===e||i===r)return n}},o={272:0},__webpack_require__.f.miniCss=function(e,r){o[e]?r.push(o[e]):0!==o[e]&&({303:1})[e]&&r.push(o[e]=new Promise(function(r,t){var _=__webpack_require__.miniCssF(e),n=__webpack_require__.p+_;if(c(_,n))return r();u(e,n,r,t)}).then(function(){o[e]=0},function(r){throw delete o[e],r}))},a={272:0},__webpack_require__.f.j=function(e,r){var t=__webpack_require__.o(a,e)?a[e]:void 0;if(0!==t){if(t)r.push(t[2]);else if(272!=e){var _=new Promise(function(r,_){t=a[e]=[r,_]});r.push(t[2]=_);var n=__webpack_require__.p+__webpack_require__.u(e),i=Error();__webpack_require__.l(n,function(r){if(__webpack_require__.o(a,e)&&(0!==(t=a[e])&&(a[e]=void 0),t)){var _=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+_+": "+n+")",i.name="ChunkLoadError",i.type=_,i.request=n,t[1](i)}},"chunk-"+e,e)}else a[e]=0}},__webpack_require__.O.j=function(e){return 0===a[e]},p=function(e,r){var t,_,n=r[0],i=r[1],u=r[2],c=0;if(n.some(function(e){return 0!==a[e]})){for(t in i)__webpack_require__.o(i,t)&&(__webpack_require__.m[t]=i[t]);if(u)var o=u(__webpack_require__)}for(e&&e(r);c<n.length;c++)_=n[c],__webpack_require__.o(a,_)&&a[_]&&a[_][0](),a[_]=0;return __webpack_require__.O(o)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(p.bind(null,0)),f.push=p.bind(null,f.push.bind(f))}();