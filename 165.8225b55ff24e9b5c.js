"use strict";(self.webpackChunkangular_signals=self.webpackChunkangular_signals||[]).push([[165],{3165:(p,s,a)=>{a.r(s),a.d(s,{DateDifferenceComponent:()=>f});var o=a(4755),e=a(3020);let f=(()=>{class i{constructor(){this.begin=(0,e.tdS)(""),this.end=(0,e.tdS)(""),this.difference=(0,e.Flj)(()=>{const n=new Date(this.begin()+"T00:00:00"),t=new Date(this.end()+"T00:00:00");return!this.begin()||!this.end()||t.getFullYear()<1900||n.getFullYear()<1900?"":"Diferen\xe7a em dias: "+(t.getTime()-n.getTime())/1e3/60/60/24})}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-date-difference"]],standalone:!0,features:[e.jDz],decls:11,vars:1,consts:[[1,"form"],[1,"form-group"],["type","date",3,"input"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label"),e._uU(3,"De"),e.qZA(),e.TgZ(4,"input",2),e.NdJ("input",function(r){return t.begin.set(r.target.value)}),e.qZA()(),e.TgZ(5,"div",1)(6,"label"),e._uU(7,"At\xe9"),e.qZA(),e.TgZ(8,"input",2),e.NdJ("input",function(r){return t.end.set(r.target.value)}),e.qZA()(),e.TgZ(9,"div",1),e._uU(10),e.qZA()()),2&n&&(e.xp6(10),e.hij(" ",t.difference()," "))},dependencies:[o.ez],styles:[".form[_ngcontent-%COMP%]{display:flex;gap:16px}.form-group[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}"],changeDetection:0}),i})()}}]);