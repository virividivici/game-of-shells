(this["webpackJsonpgame-of-shells"]=this["webpackJsonpgame-of-shells"]||[]).push([[0],{14:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),l=t(7),r=t.n(l),s=(t(14),t.p,t(2)),o=(t(6),t(8),t(4)),h=t.n(o),u=t(0),i=function(e){var n=e.cups,t=Object(a.useState)(Math.floor(Math.random()*n.length)),c=Object(s.a)(t,2),l=c[0],r=c[1],o=Object(a.useState)(!1),i=Object(s.a)(o,2),f=i[0],j=i[1],_=Object(a.useState)(!1),m=Object(s.a)(_,2),b=m[0],O=m[1],x=Object(a.useState)("Press play to start"),d=Object(s.a)(x,2),p=d[0],S=d[1],v=Object(a.useState)([{x:0,y:100},{x:80,y:100},{x:160,y:100}]),g=Object(s.a)(v,2),G=g[0],y=g[1];var M=["shuffle3","shuffle2","shuffle1"],T=function(){j(!1),O(!0),y(function(){function e(e){return e.x=Math.floor(620*Math.random()),e.y=100,e}function n(e,n){return e.some((function(e){var t=e.x;return n.x>=t-80&&n.x<=t+80}))}return G.reduce((function(t,a){for(var c=Object.assign({},a),l=e(c);n(t,l);)l=e(c);return t.push(l),t}),[])}())};var B=n.map((function(e,n){return Object(u.jsx)("div",{role:"button",className:"".concat(h.a.cup," ").concat(b&&h.a[M[n]]),style:{transform:"translate(".concat(G[n].x,"px, ").concat(G[n].y,"px)")},onClick:function(){return j(e=n),void S(f===e&&l===e?"You wont!":"Try again");var e},children:f===n&&l===n?Object(u.jsx)("span",{children:" \ud83d\udc1a"}):f===n?Object(u.jsx)("span",{children:"\ud83e\udd80"}):Object(u.jsx)("span",{children:"?"})},n)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"The Games of Shells"}),Object(u.jsx)("h2",{children:p}),Object(u.jsx)("button",{className:h.a.playBtn,onClick:function(){O(!1);var e=Math.floor(Math.random()*n.length);r(e),j(e),T()},children:"Play"}),B]})};i.defaultProps={cups:["A","B","C"]};var f=t(9),j=t(3),_=t.n(j),m=function(e){Object(f.a)(e);var n=Object(a.useState)(null),t=Object(s.a)(n,2),c=t[0],l=t[1],r=Object(a.useState)(null),o=Object(s.a)(r,2),h=o[0],i=o[1],j=Object(a.useState)([[{x:140,hasShell:!1},{x:280,hasShell:!1},{x:420,hasShell:!1}]]),m=Object(s.a)(j,2),b=m[0],O=m[1],x=function(){return b.length-1},d=0;function p(){++d%3===0&&g()}var S=function(e,n){return e.some((function(e){var t=e.x;return n.x>=t-140&&n.x<=t+140}))};function v(){return b[b.length-1].reduce((function(e,n){var t=function(e,n){for(n.x=Math.floor(1100*Math.random());S(e,n);)n.x=Math.floor(1100*Math.random());return n}(e,Object.assign({},n));return e.push(t),e}),[])}function g(){if(6!==x()){var e=5===x()?function(e){var n=e.map((function(e){return e.x}));return e.map((function(e){var t=Math.floor(Math.random()*n.length);return e.x=n[t],n.splice(t,1),e}))}(b[0]):v();O(b.concat([e]))}}var G=function(e){return Object(u.jsx)("span",{className:"".concat(_.a.shell,"  \n        ").concat(h&&c===h?_.a.win:""," \n        ").concat(1===b.length&&b[0].some((function(e){return e.hasShell}))?_.a.show:"","\n        "),onAnimationEnd:g,children:"\ud83d\udc1a"})},y=b[b.length-1].map((function(e,n){return Object(u.jsx)("button",{className:_.a.cup,style:{transform:"translate(".concat(e.x,"px, 100px)")},onClick:function(){return i(n)},onTransitionEnd:p,children:e.hasShell&&Object(u.jsx)(G,{index:n})},n)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:_.a.playBtn,onClick:function(){d=0;var e=b[b.length-1];console.log("cups: ",e);var n=Math.floor(Math.random()*e.length),t=e.map((function(e,t){var a=Object.assign({},e);return a.hasShell=t===n,l(n),a}));O([t]),i(null)},children:"Play"}),Object(u.jsx)("h2",{children:h||c?h===c?"You won!":"Try again":"Play press to start"}),Object(u.jsx)("div",{className:_.a.screen,children:y})]})};t(17);var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"The Game of Shells"}),Object(u.jsx)(m,{})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,l=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),l(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),O()},3:function(e,n,t){e.exports={screen:"TheGameOfShells_screen__1wf2C",playBtn:"TheGameOfShells_playBtn__3N8nC",cup:"TheGameOfShells_cup__1yqM7",shell:"TheGameOfShells_shell__1vT1B",win:"TheGameOfShells_win__uj-2n",show:"TheGameOfShells_show__PSCo7",materialize:"TheGameOfShells_materialize__3BQSW",form__btn:"TheGameOfShells_form__btn__21G56"}},4:function(e,n,t){e.exports={container:"ShellGame_container__CH_P1",playBtn:"ShellGame_playBtn__2G3B4",cup:"ShellGame_cup__3IaeZ",shuffle1:"ShellGame_shuffle1__2uf0u",first:"ShellGame_first__35One",shuffle2:"ShellGame_shuffle2__2AEoQ",second:"ShellGame_second__3ZvQG",shuffle3:"ShellGame_shuffle3__2-ADs",third:"ShellGame_third__3g8AX"}}},[[18,1,2]]]);
//# sourceMappingURL=main.db141f08.chunk.js.map