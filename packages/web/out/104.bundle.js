"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[104],{42104:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var a=t(2784),r=t(28364),o=t(50730),i=t(46062),A=t.n(i),l=t(44036),c=t.n(l),s=t(96793),u=t.n(s),f=t(17892),h=t.n(f),p=t(11173),b=t.n(p),d=t(42464),g=t.n(d),E=t(96451),m={};m.styleTagTransform=g(),m.setAttributes=h(),m.insert=u().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=b(),A()(E.Z,m);const C=E.Z&&E.Z.locals?E.Z.locals:void 0;var v=t(43859),y=t(13721),w=t(50948),x=t(24832),_=t(46067),B=t(36526),k=t(28319),Z=function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function A(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,A)}l((a=a.apply(e,n||[])).next())}))},N=function(e,n){var t,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:A(0),throw:A(1),return:A(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function A(o){return function(A){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e],a=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,A])}}};t(48033);const S=function(){var e=(0,a.useState)("## 使用最方便的博客语法吧"),n=e[0],t=e[1],i=(0,a.useState)(""),A=i[0],l=i[1],c=(0,_.E)(),s=c.get().loading,u=(0,B.Ee)(),f=(0,k.o)().key;return(0,a.useEffect)((function(){f?Z(void 0,void 0,void 0,(function(){var e;return N(this,(function(n){switch(n.label){case 0:return[4,c.tryGetArticle({articleKey:f})];case 1:return e=n.sent().article,l(e.title),t(e.content),[2]}}))})):(v.ZP.warn("不知道是哪篇文章."),u.goTo("/blog"))}),[]),f?s?a.createElement(y.Z,null):a.createElement("div",{className:C.baseContainer},a.createElement("div",{className:C.title},a.createElement(w.Z,{prefix:"标题: ",placeholder:"请输入你的标题",bordered:!1,value:A,onChange:function(e){l(e.target.value)}})),a.createElement("div",{className:C.container},a.createElement(o.fk,{className:C.left,value:n,options:{mode:"markdown",theme:"bespin"},onBeforeChange:function(e,n,a){t(a)},onChange:function(e,n,t){}}),a.createElement(r.D,{className:C.right},n)),a.createElement("div",{className:C.bottomBar},a.createElement(x.Z,{onClick:function(){return Z(void 0,void 0,void 0,(function(){return N(this,(function(e){switch(e.label){case 0:return A?[3,1]:(v.ZP.warn("忘记写标题了.."),[3,3]);case 1:return[4,c.tryEditArticle({articleKey:f,new:{title:A,content:n}})];case 2:e.sent(),u.goTo("/blog/article",{key:f}),e.label=3;case 3:return[2]}}))}))}},"更新"))):null}},96451:(e,n,t)=>{t.d(n,{Z:()=>A});var a=t(40272),r=t.n(a),o=t(82609),i=t.n(o)()(r());i.push([e.id,".baseContainer_aefe7 {\n  height: calc(100vh - 48px);\n}\n.baseContainer_aefe7 .title_d978c {\n  margin: 0 12px;\n  border: none;\n}\n.baseContainer_aefe7 .container_e4a9a {\n  height: calc(100% - 100px);\n  position: relative;\n  margin-top: 12px;\n  margin: 0 24px;\n}\n.baseContainer_aefe7 .container_e4a9a .left_eebf5 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  border-right: 2px solid #474744;\n}\n.baseContainer_aefe7 .container_e4a9a .left_eebf5 .CodeMirror {\n  height: 100%;\n}\n.baseContainer_aefe7 .container_e4a9a .right_f2266 {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  background: #28211c;\n  padding: 12px;\n}\n.baseContainer_aefe7 .bottomBar_de1ba {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px;\n}\n","",{version:3,sources:["webpack://./src/pages/blog/article/edit/index.less"],names:[],mappings:"AAAA;EACE,0BAAA;AACF;AAFA;EAGI,cAAA;EACA,YAAA;AAEJ;AANA;EAQI,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;AACJ;AAZA;EAaQ,kBAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;EACA,+BAAA;AAER;AApBA;EAqBY,YAAA;AAEZ;AAvBA;EA2BM,kBAAA;EACA,SAAA;EACA,MAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;AADN;AAhCA;EAqCI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAFJ",sourcesContent:[".baseContainer{\n  height: calc(100vh - 48px);\n  .title{\n    margin: 0 12px;\n    border:none;\n  }\n\n  .container{\n    height: calc(100% - 100px);\n    position: relative;\n    margin-top: 12px;\n    margin: 0 24px;\n    .left{\n        position: absolute;\n        left: 0;\n        top:0;\n        width: 50%;\n        height:100%;\n        border-right: 2px solid #474744;\n        :global{\n          .CodeMirror {\n            height:100%;\n          }\n        }\n  \n    }\n    .right{\n      position: absolute;\n      left: 50%;\n      top:0;\n      width: 50%;\n      height:100%;\n      background: #28211c;\n      padding: 12px;\n    }\n  }\n  .bottomBar{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 12px;\n  }\n}\n"],sourceRoot:""}]),i.locals={baseContainer:"baseContainer_aefe7",title:"title_d978c",container:"container_e4a9a",left:"left_eebf5",right:"right_f2266",bottomBar:"bottomBar_de1ba"};const A=i}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEIsV0FBWUwsRUFBSzRCLElBQUssQ0FBRXBDLE1BQU9BLEVBQU9ILFFBQVNBLE1BQ3pHLEtBQUssRUFDREYsRUFBR2hCLE9BQ0gyQixFQUFXUyxLQUFLLGdCQUFpQixDQUFFUCxJQUFLQSxJQUN4Q2IsRUFBR2pCLE1BQVEsRUFDZixLQUFLLEVBQUcsTUFBTyxDQUFDLFlBR25CLFFBbENWLE8sb0VDeEVYMkQsRSxNQUEwQixHQUE0QixLQUUxREEsRUFBd0I1QyxLQUFLLENBQUM2QyxFQUFPQyxHQUFJLHcwQkFBeTBCLEdBQUcsQ0FBQyxRQUFVLEVBQUUsUUFBVSxDQUFDLHNEQUFzRCxNQUFRLEdBQUcsU0FBVyxrVkFBa1YsZUFBaUIsQ0FBQyw2d0JBQTZ3QixXQUFhLE1BRXZsRUYsRUFBd0JHLE9BQVMsQ0FDaEMsY0FBaUIsc0JBQ2pCLE1BQVMsY0FDVCxVQUFhLGtCQUNiLEtBQVEsYUFDUixNQUFTLGNBQ1QsVUFBYSxtQkFFZCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3NyYy9wYWdlcy9ibG9nL2FydGljbGUvZWRpdC9pbmRleC5sZXNzPzI5ZTMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3BhZ2VzL2Jsb2cvYXJ0aWNsZS9lZGl0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvYmxvZy9hcnRpY2xlL2VkaXQvaW5kZXgubGVzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkIGFzIENvZGVNaXJyb3IgfSBmcm9tICdyZWFjdC1jb2RlbWlycm9yMic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5sZXNzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgbWVzc2FnZSwgU3BpbiB9IGZyb20gJ2FudGQnO1xyXG5yZXF1aXJlKCdjb2RlbWlycm9yL21vZGUvbWFya2Rvd24vbWFya2Rvd24nKTtcclxuaW1wb3J0IHsgdXNlQ29tcG9uZW50U3RhdGUgYXMgdXNlQXJ0aWNsZVN0YXRlIH0gZnJvbSAnQC9ldmVudHMvYXJ0aWNsZS9zdGF0ZSc7XHJcbmltcG9ydCB7IHVzZUNvbXBvbmVudFN0YXRlIGFzIHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnQC9nbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IGdldFNlYXJjaCB9IGZyb20gJ0AvdXRpbHMvdXJsJztcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKCcjIyDkvb/nlKjmnIDmlrnkvr/nmoTljZrlrqLor63ms5XlkKcnKSwgY29udGVudCA9IF9hWzBdLCBzZXRDb250ZW50ID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSgnJyksIHRpdGxlID0gX2JbMF0sIHNldFRpdGxlID0gX2JbMV07XHJcbiAgICB2YXIgYXJ0aWNsZUhvb2sgPSB1c2VBcnRpY2xlU3RhdGUoKTtcclxuICAgIHZhciBsb2FkaW5nID0gYXJ0aWNsZUhvb2suZ2V0KCkubG9hZGluZztcclxuICAgIHZhciBnbG9iYWxIb29rID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuICAgIHZhciBrZXkgPSBnZXRTZWFyY2goKS5rZXk7XHJcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFydGljbGU7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGFydGljbGVIb29rLnRyeUdldEFydGljbGUoeyBhcnRpY2xlS2V5OiBrZXkgfSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUgPSAoX2Euc2VudCgpKS5hcnRpY2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKGFydGljbGUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQoYXJ0aWNsZS5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLndhcm4oJ+S4jeefpemBk+aYr+WTquevh+aWh+eroC4nKTtcclxuICAgICAgICAgICAgZ2xvYmFsSG9vay5nb1RvKCcvYmxvZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW4sIG51bGwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuYmFzZUNvbnRhaW5lciB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy50aXRsZSB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHByZWZpeDogXCJcXHU2ODA3XFx1OTg5ODogXCIsIHBsYWNlaG9sZGVyOiBcIlxcdThCRjdcXHU4RjkzXFx1NTE2NVxcdTRGNjBcXHU3Njg0XFx1NjgwN1xcdTk4OThcIiwgYm9yZGVyZWQ6IGZhbHNlLCB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gfSkpLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5jb250YWluZXIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2RlTWlycm9yLCB7IGNsYXNzTmFtZTogc3R5bGVzLmxlZnQsIHZhbHVlOiBjb250ZW50LCBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ21hcmtkb3duJyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2Jlc3BpbidcclxuICAgICAgICAgICAgICAgIH0sIG9uQmVmb3JlQ2hhbmdlOiBmdW5jdGlvbiAoZWRpdG9yLCBkYXRhLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlZGl0b3IsIGRhdGEsIHZhbHVlKSB7IH0gfSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RNYXJrZG93biwgeyBjbGFzc05hbWU6IHN0eWxlcy5yaWdodCB9LCBjb250ZW50KSksXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmJvdHRvbUJhciB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRpdGxlKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLndhcm4oJ+W/mOiusOWGmeagh+mimOS6hi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGFydGljbGVIb29rLnRyeUVkaXRBcnRpY2xlKHsgYXJ0aWNsZUtleToga2V5LCBuZXc6IHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50IH0gfSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxIb29rLmdvVG8oXCIvYmxvZy9hcnRpY2xlXCIsIHsga2V5OiBrZXkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pOyB9IH0sIFwiXFx1NjZGNFxcdTY1QjBcIikpKSk7XHJcbn0pO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5iYXNlQ29udGFpbmVyX2FlZmU3IHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xcbn1cXG4uYmFzZUNvbnRhaW5lcl9hZWZlNyAudGl0bGVfZDk3OGMge1xcbiAgbWFyZ2luOiAwIDEycHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5iYXNlQ29udGFpbmVyX2FlZmU3IC5jb250YWluZXJfZTRhOWEge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgbWFyZ2luOiAwIDI0cHg7XFxufVxcbi5iYXNlQ29udGFpbmVyX2FlZmU3IC5jb250YWluZXJfZTRhOWEgLmxlZnRfZWViZjUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNDc0NzQ0O1xcbn1cXG4uYmFzZUNvbnRhaW5lcl9hZWZlNyAuY29udGFpbmVyX2U0YTlhIC5sZWZ0X2VlYmY1IC5Db2RlTWlycm9yIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJhc2VDb250YWluZXJfYWVmZTcgLmNvbnRhaW5lcl9lNGE5YSAucmlnaHRfZjIyNjYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMyODIxMWM7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG4uYmFzZUNvbnRhaW5lcl9hZWZlNyAuYm90dG9tQmFyX2RlMWJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDEycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9ibG9nL2FydGljbGUvZWRpdC9pbmRleC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQUE7QUFDRjtBQUZBO0VBR0ksY0FBQTtFQUNBLFlBQUE7QUFFSjtBQU5BO0VBUUksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBWkE7RUFhUSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUVSO0FBcEJBO0VBcUJZLFlBQUE7QUFFWjtBQXZCQTtFQTJCTSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFETjtBQWhDQTtFQXFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmFzZUNvbnRhaW5lcntcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xcbiAgLnRpdGxle1xcbiAgICBtYXJnaW46IDAgMTJweDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICB9XFxuXFxuICAuY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBtYXJnaW46IDAgMjRweDtcXG4gICAgLmxlZnR7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOjA7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNDc0NzQ0O1xcbiAgICAgICAgOmdsb2JhbHtcXG4gICAgICAgICAgLkNvZGVNaXJyb3Ige1xcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICBcXG4gICAgfVxcbiAgICAucmlnaHR7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0b3A6MDtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGhlaWdodDoxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6ICMyODIxMWM7XFxuICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgfVxcbiAgfVxcbiAgLmJvdHRvbUJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTJweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmFzZUNvbnRhaW5lclwiOiBcImJhc2VDb250YWluZXJfYWVmZTdcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlX2Q5NzhjXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyX2U0YTlhXCIsXG5cdFwibGVmdFwiOiBcImxlZnRfZWViZjVcIixcblx0XCJyaWdodFwiOiBcInJpZ2h0X2YyMjY2XCIsXG5cdFwiYm90dG9tQmFyXCI6IFwiYm90dG9tQmFyX2RlMWJhXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJvcHRpb25zIiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJzZXRBdHRyaWJ1dGVzIiwiaW5zZXJ0IiwiZG9tQVBJIiwiaW5zZXJ0U3R5bGVFbGVtZW50IiwidW5kZWZpbmVkIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwidCIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJyZXF1aXJlIiwiX2EiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiX2IiLCJ0aXRsZSIsInNldFRpdGxlIiwiYXJ0aWNsZUhvb2siLCJ1c2VBcnRpY2xlU3RhdGUiLCJsb2FkaW5nIiwiZ2V0IiwiZ2xvYmFsSG9vayIsInVzZUdsb2JhbFN0YXRlIiwia2V5IiwiZ2V0U2VhcmNoIiwidXNlRWZmZWN0IiwiYXJ0aWNsZSIsInRyeUdldEFydGljbGUiLCJhcnRpY2xlS2V5IiwibWVzc2FnZSIsImdvVG8iLCJSZWFjdCIsIlNwaW4iLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJJbnB1dCIsInByZWZpeCIsInBsYWNlaG9sZGVyIiwiYm9yZGVyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsIkNvZGVNaXJyb3IiLCJtb2RlIiwidGhlbWUiLCJvbkJlZm9yZUNoYW5nZSIsImVkaXRvciIsImRhdGEiLCJSZWFjdE1hcmtkb3duIiwiQnV0dG9uIiwib25DbGljayIsInRyeUVkaXRBcnRpY2xlIiwibmV3IiwiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJtb2R1bGUiLCJpZCIsImxvY2FscyJdLCJzb3VyY2VSb290IjoiIn0=