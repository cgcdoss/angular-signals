"use strict";(self.webpackChunkangular_signals=self.webpackChunkangular_signals||[]).push([[750],{8750:(D,c,o)=>{o.r(c),o.d(c,{CounterComponent:()=>N});var t=o(3020),f=o(5855),a=o(1566),m=o(9751),h=o(3532);function p(n=0,i,e=a.P){let u=-1;return null!=i&&((0,h.K)(i)?e=i:u=i),new m.y(s=>{let r=function g(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;r<0&&(r=0);let x=0;return e.schedule(function(){s.closed||(s.next(x++),0<=u?this.schedule(void 0,u):s.complete())},r)})}var Z=o(7272),l=o(5698),C=o(4482),T=o(5403),j=o(5032),O=o(9718),U=o(5577),z=o(8421);function d(n,i){return i?e=>(0,Z.z)(i.pipe((0,l.q)(1),function A(){return(0,C.e)((n,i)=>{n.subscribe((0,T.x)(i,j.Z))})}()),e.pipe(d(n))):(0,U.z)((e,u)=>(0,z.Xf)(n(e,u)).pipe((0,l.q)(1),(0,O.h)(e)))}var F=o(4004),P=o(8746);let N=(()=>{class n{constructor(){this.state=(0,t.tdS)({counter:0},{equal:(e,u)=>e.counter===u.counter}),this.double=(0,t.Flj)(()=>2*this.state().counter),this.triple=(0,t.Flj)(()=>this.double()/2*3),this.evenOrOdd=(0,t.Flj)(()=>({counter:this.state().counter%2==0?"Par":"\xcdmpar",double:this.double()%2==0?"Par":"\xcdmpar",triple:this.triple()%2==0?"Par":"\xcdmpar"})),this.timer=(0,f.O4)(function v(n=0,i=a.z){return n<0&&(n=0),p(n,n,i)}(50).pipe(function y(n,i=a.z){const e=p(n,i);return d(()=>e)}(2e3),(0,F.U)(e=>2*e),(0,l.q)(101),(0,P.x)(()=>console.log("finalizou"))),{initialValue:-1}),(0,t.cEC)(e=>{console.log(this.state()),e(()=>console.log("limpou efeito"))})}increment(){this.state.mutate(e=>e.counter++)}static{this.\u0275fac=function(u){return new(u||n)}}static{this.\u0275cmp=t.Xpm({type:n,selectors:[["app-counter"]],standalone:!0,features:[t.jDz],decls:18,vars:7,consts:[[3,"click"],[2,"margin-top","1rem",3,"click"]],template:function(u,s){1&u&&(t.TgZ(0,"p"),t._uU(1,"counter works!"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return s.increment()}),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"div"),t._uU(7),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.TgZ(10,"div"),t._uU(11),t.TgZ(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"div"),t._uU(15),t.qZA(),t.TgZ(16,"button",1),t.NdJ("click",function(){return s.state.set({counter:0})}),t._uU(17,"Resetar"),t.qZA()),2&u&&(t.xp6(3),t.Oqu(s.state().counter),t.xp6(2),t.hij("\xa0",s.evenOrOdd().counter,""),t.xp6(2),t.hij(" ",s.double()," "),t.xp6(2),t.hij("\xa0",s.evenOrOdd().double,""),t.xp6(2),t.hij(" ",s.triple()," "),t.xp6(2),t.hij("\xa0",s.evenOrOdd().triple,""),t.xp6(2),t.hij(" Timer dobrado: ",s.timer(),"\n"))},styles:["button[_ngcontent-%COMP%]{padding:8px;cursor:pointer}"],changeDetection:0})}}return n})()}}]);