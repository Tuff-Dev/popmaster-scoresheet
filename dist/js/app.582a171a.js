(function(t){function e(e){for(var o,u,c=e[0],i=e[1],a=e[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},s=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var o=n("9751"),r=n("ad21"),s=(n("e7f5"),n("2877")),u=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,"023a8e02",null);e["default"]=u.exports},1050:function(t,e,n){},"14e3":function(t,e,n){},"156b":function(t,e,n){"use strict";var o=n("1050"),r=n.n(o);r.a},"2ec9":function(t,e,n){"use strict";var o=n("14e3"),r=n.n(o);r.a},3797:function(t,e,n){},4207:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("RoundButtons",{on:{changeRound:function(e){return t.changeRound(e)}}}),n("Round",{directives:[{name:"show",rawName:"v-show",value:1===t.round,expression:"round === 1"}],staticClass:"round-1"}),n("Round",{directives:[{name:"show",rawName:"v-show",value:2===t.round,expression:"round === 2"}],staticClass:"round-2"})],1)},s=[],u=n("0418"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"round-buttons"},[n("div",{staticClass:"round-buttons__button"},[n("button",{staticClass:"btn round-1 active",on:{click:function(e){return t.updateRound("round-1")}}},[t._v("Round 1")])]),n("div",{staticClass:"round-buttons__button"},[n("button",{staticClass:"btn round-2",on:{click:function(e){return t.updateRound("round-2")}}},[t._v("Round 2")])])])},i=[],a={data:function(){return{activeButton:"round-1"}},methods:{updateRound:function(t){this.activeButton=t,"round-1"===this.activeButton?(document.querySelector(".btn.round-1").classList.add("active"),document.querySelector(".btn.round-2").classList.remove("active")):(document.querySelector(".btn.round-1").classList.remove("active"),document.querySelector(".btn.round-2").classList.add("active")),console.log("Emitting Round Change"),this.$emit("changeRound",this.activeButton)}}},d=a,l=(n("8c77"),n("2877")),f=Object(l["a"])(d,c,i,!1,null,null,null),h=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scorecard"},[n("div",{staticClass:"scorecard__panel"},[n("div",{staticClass:"scorecard_line-splitter"}),t._l(t.currentQuestionNumber,(function(e){return n("Question",{key:e,attrs:{questionNumber:e},on:{scoreChanged:function(n){return t.scoreChanged(e-1,n)}}})}))],2),n("div",{staticClass:"scorecard__total"},[t._v("Total: "),n("strong",[t._v(t._s(t.totalScore))])])])},p=[],b=(n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question",on:{click:t.toggleScore}},[n("span",{staticClass:"question__number"},[t.bonusQuestion?n("span",[t._v("*")]):t._e(),t._v(t._s(t.questionNumber))]),n("span",{staticClass:"question__score"},[t._v(t._s(t.answered?t.score:""))])])}),m=[],_=(n("a9e3"),{props:{questionNumber:{type:Number}},data:function(){return{answered:!1,answeredCorrect:!1,bonusQuestion:!1,score:0}},created:function(){3!==this.questionNumber&&6!==this.questionNumber&&9!==this.questionNumber||(this.bonusQuestion=!0)},watch:{answered:function(){this.toggleCorrect()},answeredCorrect:function(){this.toggleCorrect()}},methods:{toggleScore:function(){this.answered=!0,this.answeredCorrect=!this.answeredCorrect},toggleCorrect:function(){this.answeredCorrect?this.bonusQuestion?this.score=6:this.score=3:this.score=0,this.$emit("scoreChanged",this.score)}}}),g=_,C=(n("156b"),Object(l["a"])(g,b,m,!1,null,"5077dc4c",null)),w=C.exports,y={components:{Question:w},data:function(){return{currentQuestionNumber:1,scores:[0],totalScore:0}},methods:{scoreChanged:function(t,e){this.scores[t]=e;var n=function(t,e){return t+e};this.totalScore=this.scores.reduce(n),this.currentQuestionNumber<10&&(this.currentQuestionNumber=this.scores.length+1)}}},R=y,O=(n("2ec9"),Object(l["a"])(R,v,p,!1,null,"5792084b",null)),S=O.exports,j={name:"App",components:{Header:u["default"],RoundButtons:h,Round:S},data:function(){return{round:1}},methods:{changeRound:function(t){console.log("Round Changed"),"round-1"===t?(console.log("Loading Round 1"),this.round=1):(console.log("Loading Round 2"),this.round=2)}}},x=j,q=(n("5c0b"),Object(l["a"])(x,r,s,!1,null,null,null)),N=q.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("c58b"),r=n.n(o);r.a},"8c77":function(t,e,n){"use strict";var o=n("4207"),r=n.n(o);r.a},9751:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h1",{},[t._v("PopMaster")]),n("h2",{staticClass:"light-text"},[t._v("Scoresheet")])])}]},ad21:function(t,e,n){"use strict";var o=n("e504"),r=n.n(o);e["default"]=r.a},c58b:function(t,e,n){},e504:function(t,e){},e7f5:function(t,e,n){"use strict";var o=n("3797"),r=n.n(o);r.a}});
//# sourceMappingURL=app.582a171a.js.map