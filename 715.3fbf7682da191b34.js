"use strict";(self.webpackChunkangular_signals=self.webpackChunkangular_signals||[]).push([[715],{7715:(T,u,l)=>{l.r(u),l.d(u,{TicTacToeComponent:()=>f});var d=l(4755),t=l(3020);function g(a,s){if(1&a){const n=t.EpF();t.ynx(0),t._uU(1),t.TgZ(2,"button",5),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.reset())}),t._uU(3,"Recome\xe7ar"),t.qZA(),t.BQk()}if(2&a){const n=s.ngIf;t.xp6(1),t.hij(" ",-1===n?"Deu velha!":"Jogador "+n+" venceu!"," ")}}function m(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){const i=t.CHM(n).index,c=t.oxw().index,r=t.oxw();return t.KtG(r.chooseBox(c,i))}),t._uU(1),t.qZA()}if(2&a){const n=s.$implicit;t.xp6(1),t.hij(" ",n," ")}}function _(a,s){if(1&a&&(t.TgZ(0,"div",6),t.YNc(1,m,2,1,"div",7),t.qZA()),2&a){const n=s.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngForOf",n)("ngForTrackBy",e.trackByFunction)}}function h(a,s){if(1&a&&t._uU(0),2&a){const n=t.oxw();t.hij(" Jogador ",n.actualPlayer(),"\n")}}let f=(()=>{class a{constructor(){this.trackByFunction=(n,e)=>e,this.actualPlayer=(0,t.tdS)(1),this.game=(0,t.tdS)([["","",""],["","",""],["","",""]]),this.lastMovement=(0,t.tdS)({}),this.someoneWins=(0,t.Flj)(()=>{const n=this.lastMovement();if(void 0===n.x||void 0===n.y)return;const e=this.game(),o=e[n.x][n.y];return e[n.x][0]===o&&e[n.x][1]===o&&e[n.x][2]===o||e[0][n.y]===o&&e[1][n.y]===o&&e[2][n.y]===o||e[0][0]===o&&e[1][1]===o&&e[2][2]===o||e[2][0]===o&&e[1][1]===o&&e[0][2]===o?"X"===o?1:2:9===e.flat().filter(c=>!!c).length?-1:void 0}),this.againstBot=(0,t.tdS)(!1),this.alreadyPlayed=(0,t.Flj)(()=>this.game().flat().filter(n=>!!n).length>0)}chooseBox(n,e,o){const i=this.someoneWins(),c=!!this.game()[n][e];i||c||this.againstBot()&&!o&&2===this.actualPlayer()||(this.game.mutate(r=>r[n][e]=1===this.actualPlayer()?"X":"O"),this.actualPlayer.update(r=>1===r?2:1),this.lastMovement.set({x:n,y:e}),this.againstBot()&&!this.someoneWins()&&2===this.actualPlayer()&&setTimeout(()=>this._botPlays(),1e3))}reset(){this.game.set([["","",""],["","",""],["","",""]]),this.actualPlayer.set(1),this.lastMovement.set({})}toggleBot(){this.againstBot.update(n=>!n)}_botPlays(){const{x:n,y:e}=this._getBestMovement();if(void 0!==n&&void 0!==e)return void this.chooseBox(n,e,!0);const o=()=>({x:Math.floor(3*Math.random()),y:Math.floor(3*Math.random())});let i=o();for(;""!==this.game()[i.x][i.y];)i=o();this.chooseBox(i.x,i.y,!0)}_getBestMovement(){return this._preventPlayerWin()}_preventPlayerWin(){let e,o;return this.game().find(i=>i.find(c=>"X"===c))&&(this.game().find(i=>i.find(c=>"X"===c))?.filter(i=>"X"===i).length||0)>1&&(e=this.game().indexOf(this.game().find(i=>i.find(c=>"X"===c))||[]),o=this.game().find(i=>i.find(c=>"X"===c))?.indexOf(""),o=-1===o?void 0:o),{x:e,y:o}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tic-tac-toe"]],standalone:!0,features:[t.jDz],decls:16,vars:9,consts:[[4,"ngIf","ngIfElse"],["class","row",4,"ngFor","ngForOf","ngForTrackBy"],[2,"text-align","center","margin-top","2rem"],["type","checkbox",3,"disabled","change"],["currentPlayer",""],[3,"click"],[1,"row"],["class","column",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"column",3,"click"]],template:function(n,e){if(1&n&&(t.TgZ(0,"h1"),t._uU(1,"Jogo da velha"),t.qZA(),t.TgZ(2,"h2"),t.YNc(3,g,4,1,"ng-container",0),t._uU(4," \xa0\n"),t.qZA(),t.TgZ(5,"main"),t.YNc(6,_,2,2,"div",1),t.qZA(),t.TgZ(7,"div",2)(8,"label")(9,"input",3),t.NdJ("change",function(){return e.toggleBot()}),t.qZA(),t._uU(10," Contra o bot? "),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"sub"),t._uU(13,"Por enquanto o bot est\xe1 escolhendo aleatoriamente"),t.qZA()(),t.YNc(14,h,1,1,"ng-template",null,4,t.W1O)),2&n){const o=t.MAs(15);t.xp6(3),t.Q6J("ngIf",e.someoneWins())("ngIfElse",o),t.xp6(2),t.ekj("wins",e.someoneWins()>0)("draw",-1===e.someoneWins()),t.xp6(1),t.Q6J("ngForOf",e.game())("ngForTrackBy",e.trackByFunction),t.xp6(3),t.Q6J("disabled",e.alreadyPlayed())}},dependencies:[d.O5,d.ax],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;font-family:cursive}main[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}main.wins[_ngcontent-%COMP%]{background-color:green}main.draw[_ngcontent-%COMP%]{background-color:orange}main[_ngcontent-%COMP%]:where(.wins, .draw)[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{cursor:default}.row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%]:nth-child(1), .row[_ngcontent-%COMP%]:nth-child(2){border-bottom:4px solid #aaa}.column[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:64px;height:64px;cursor:pointer;font-size:46px}.column[_ngcontent-%COMP%]:nth-child(1), .column[_ngcontent-%COMP%]:nth-child(2){border-right:4px solid #aaa}"],changeDetection:0}),a})()}}]);