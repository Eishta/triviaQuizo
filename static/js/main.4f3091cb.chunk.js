(this["webpackJsonptrivia-quizo"]=this["webpackJsonptrivia-quizo"]||[]).push([[0],{31:function(e,t,n){e.exports=n(61)},36:function(e,t,n){},42:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),s=n.n(c),o=(n(36),n(22)),u=n(23),i=n(30),l=n(28),d=n(29),b=n(4),p=(n(42),n(6)),E=n(25),f=n.n(E),m=function(){return function(e){e({type:"FETCH_QUESTIONS"}),f.a.get("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple").then((function(t){var n;e({type:"FETCH_QUESTIONS_SUCCESS",results:(n=t).data.results,questions:g(n.data.results,"question"),correct_answer:g(n.data.results,"correct_answer"),options:n.data.results.map((function(e){return R([e.correct_answer].concat(Object(p.a)(e.incorrect_answers)))}))}),e(v()),e(S()),e(y())})).catch((function(t){return e({type:"FETCH_QUESTIONS_FAIL",error:t})}))}},O=function(e){return{type:"UPDATE_RESPONSE",index:e}},S=function(){return{type:"RESET_RESPONSE"}},y=function(){return{type:"RESET_SCORE"}},v=function(){return{type:"RESET_ANSWER"}},g=function(e,t){return e.map((function(e){return e[t]}))},R=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e},j=Object(b.b)((function(e){return{questions:e.quizReducer.questions,correct_answer:e.quizReducer.correct_answer,options:e.quizReducer.options,answer:e.answerReducer.answer,responses:e.responsesReducer.responses,score:e.scoreReducer.score}}),(function(e){return{getQuestions:function(){return e(m())},updateAnswer:function(t,n){return e(function(e,t){return{type:"UPDATE_ANSWER",answer:e,index:t}}(t,n))},updateResponseAndScore:function(t){return e(function(e){return function(t){t(O(e)),t({type:"UPDATE_SCORE"})}}(t))},updateResponse:function(t){return e(O(t))}}}))((function(e){var t=e.questions,n=e.correct_answer,c=e.options,s=e.getQuestions,o=e.updateAnswer,u=e.updateResponseAndScore,i=e.answer,l=e.updateResponse,b=e.responses,p=e.score,E=Object(r.useState)(0),f=Object(d.a)(E,2),m=f[0],O=f[1],S=function(e){o(e.target.value,m),console.log(e.target.value,e.target.name)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{class:"centered-element"},t.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{class:"btn-group-vertical",role:"group","aria-label":"Basic example",onClick:function(e){O(e.target.value)}},a.a.createElement("button",{type:"button",class:"btn ".concat(0==m?"btn-primary":"btn-secondary"),value:0},"1"),a.a.createElement("button",{type:"button",class:"btn ".concat(1==m?"btn-primary":"btn-secondary"),value:1},"2"),a.a.createElement("button",{type:"button",class:"btn ".concat(2==m?"btn-primary":"btn-secondary"),value:2},"3"),a.a.createElement("button",{type:"button",class:"btn ".concat(3==m?"btn-primary":"btn-secondary"),value:3},"4"),a.a.createElement("button",{type:"button",class:"btn ".concat(4==m?"btn-primary":"btn-secondary"),value:4},"5")),a.a.createElement("div",{class:"card"},a.a.createElement("div",{class:"card-body"},a.a.createElement("h5",{class:"card-title"},"Question no. ",+m+1),a.a.createElement("p",{class:"card-text"},t?t[m]:null),a.a.createElement("div",{class:"gridDisplay"},c?c[m].map((function(e){return a.a.createElement("span",null,a.a.createElement("input",{type:"radio",onChange:S,disabled:b[m],value:e,name:"answer",checked:e===i[m]})," ",e)})):null)),a.a.createElement("div",null,a.a.createElement("button",{class:"btn btn-secondary submit",disabled:!i[m]||b[m],onClick:function(){i[m]===n[m]?u(m):l(m)}},"Submit"),4!=m?a.a.createElement("button",{class:"btn btn-secondary submit",onClick:function(){4!==m&&O(+m+1)}},"Next "):null))):"is Loading ...."),a.a.createElement("div",null,a.a.createElement("div",{class:"card result"},a.a.createElement("div",{class:"card-body"},"Score: ",p,"/",5),5===b.filter((function(e){return e})).length?a.a.createElement("button",{class:"btn btn-secondary resetButton",onClick:function(){O(0),s()}},"Reset"):null)))})),h=(n(60),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.getQuestions()}},{key:"render",value:function(){return a.a.createElement("div",{className:"back"},a.a.createElement(j,null))}}]),n}(a.a.Component)),w=Object(b.b)(null,(function(e){return{getQuestions:function(){return e(m())}}}))(h),_=n(3),T=n(1),C={isLoading:!1,questions:[],responses:[],score:0,answer:new Array(5)},A=Object(_.c)({quizReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUESTIONS":return Object(T.a)(Object(T.a)({},e),{},{isLoading:!0});case"FETCH_QUESTIONS_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{questions:t.questions,correct_answer:t.correct_answer,options:t.options,isLoading:!1});case"FETCH_QUESTIONS_FAIL":return Object(T.a)(Object(T.a)({},e),{},{err:t.err,isLoading:!1});default:return e}},responsesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{responses:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_RESPONSE":var n=Object(p.a)(e.responses);return n[t.index]=!0,Object(T.a)(Object(T.a)({},e),{},{responses:n});case"RESET_RESPONSE":return Object(T.a)(Object(T.a)({},e),{},{responses:[]});default:return e}},scoreReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{score:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SCORE":return Object(T.a)(Object(T.a)({},e),{},{score:e.score+1});case"RESET_SCORE":return Object(T.a)(Object(T.a)({},e),{},{score:0});default:return e}},answerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{answer:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ANSWER":var n=Object(p.a)(e.answer);return n[t.index]=t.answer,Object(T.a)(Object(T.a)({},e),{},{answer:n});case"RESET_ANSWER":return Object(T.a)(Object(T.a)({},e),{},{answer:[]});default:return e}}}),N=n(26),q=n(27),U=n.n(q),Q=Object(_.d)(A,Object(_.a)(U.a,N.a));s.a.render(a.a.createElement(b.a,{store:Q},a.a.createElement(w,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4f3091cb.chunk.js.map