"use strict";(self.webpackChunkangular_signals=self.webpackChunkangular_signals||[]).push([[149],{4149:(p,r,o)=>{o.r(r),o.d(r,{default:()=>d});var e=o(3020);let l=(()=>{class i{constructor(){this._elementRef=(0,e.f3M)(e.SBq),this.clicked=new e.vpe}onMouseEnter(){this._elementRef.nativeElement.style.display="block",this._elementRef.nativeElement.style.backgroundColor="yellow"}onMouseLeave(){this._elementRef.nativeElement.style.display="",this._elementRef.nativeElement.style.backgroundColor=""}onClick(){this.clicked.emit("clicou")}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=e.lG2({type:i,selectors:[["","appDirectiveTest",""]],hostVars:2,hostBindings:function(t,n){1&t&&e.NdJ("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()})("click",function(){return n.onClick()}),2&t&&e.Udp("color",n.appDirectiveTest)},inputs:{appDirectiveTest:"appDirectiveTest"},outputs:{clicked:"clicked"},standalone:!0})}}return i})(),a=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=e.Xpm({type:i,selectors:[["app-child"]],standalone:!0,features:[e.jDz,e.zW0([{directive:l,inputs:["appDirectiveTest","colorDirective"],outputs:["clicked","hasClicked"]}])],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"child works!"),e.qZA())}})}}return i})();const d=(()=>{class i{constructor(){this.expanded=!1,this.fontSize="16px",this.cursor="pointer"}onClick(){console.log("clicou"),this.expanded=!this.expanded,this.fontSize=this.expanded?"24px":"16px"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=e.Xpm({type:i,selectors:[["app-test-directive"]],hostVars:7,hostBindings:function(t,n){2&t&&(e.uIk("aria-expanded",n.expanded),e.Udp("font-size",n.fontSize)("cursor",n.cursor),e.ekj("expanded",n.expanded))},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[3,"colorDirective","hasClicked"],["appDirectiveTest","green",3,"clicked"]],template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"test-directive works!"),e.qZA(),e.TgZ(2,"app-child",0),e.NdJ("hasClicked",function(){return n.onClick()}),e.qZA(),e.TgZ(3,"p",1),e.NdJ("clicked",function(){return n.onClick()}),e._uU(4,"Teste 2"),e.qZA()),2&t&&(e.xp6(2),e.Q6J("colorDirective","red"))},dependencies:[a,l]})}}return i})()}}]);