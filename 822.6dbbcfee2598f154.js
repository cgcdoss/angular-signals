"use strict";(self.webpackChunkangular_signals=self.webpackChunkangular_signals||[]).push([[822],{9150:(C,i,n)=>{n.r(i),n.d(i,{FindCepComponent:()=>h});var a=n(4755),l=n(3144),e=n(3020),s=n(5030),u=n(9646),g=n(4004),_=n(8675);let h=(()=>{class p{constructor(){this._http=(0,e.f3M)(l.eN),this.title=(0,e.tdS)("angular-signals"),this.teste=(0,e.tdS)({nome:"teste",sobrenome:"tal"}),this.cep=(0,e.tdS)("01001000"),this.obterCep$=(0,e.Flj)(()=>8!==this.cep().length?(0,u.of)("Digite um CEP v\xe1lido"):this._http.get(`https://viacep.com.br/ws/${this.cep()}/json/`).pipe((0,g.U)(t=>t.erro?"Houve um erro":t),(0,_.O)("Carregando..."))),this.title.set("Busca de CE"),this.title.update(t=>t+"P"),setTimeout(()=>{this.teste.mutate(t=>t.nome="Teste!")},3e3),(0,e.cEC)(()=>{console.log("mudou >>>>>>>>>",this.cep())})}get sobrenome(){return this.teste().sobrenome}}return p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-find-cep"]],standalone:!0,features:[e.jDz],decls:11,vars:10,consts:[[2,"font-size","14px"],["type","text","maxlength","8",3,"ngModel","ngModelChange"],["ngSrc","assets/cep.jpg","alt","explica\xe7\xe3o sobre CEP","width","513","height","384","priority",""]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.TgZ(2,"span",0),e._uU(3),e.qZA()(),e.TgZ(4,"input",1),e.NdJ("ngModelChange",function(m){return o.cep.set(m)}),e.qZA(),e._uU(5),e.TgZ(6,"pre"),e._uU(7),e.ALo(8,"json"),e.ALo(9,"async"),e.qZA(),e._UZ(10,"img",2)),2&t&&(e.xp6(1),e.hij(" ",o.title()," "),e.xp6(2),e.AsE("",o.teste().nome," ",o.sobrenome,""),e.xp6(1),e.Q6J("ngModel",o.cep()),e.xp6(1),e.hij("\n",o.cep()," "),e.xp6(2),e.Oqu(e.lcZ(8,6,e.lcZ(9,8,o.obterCep$()))))},dependencies:[a.ez,a.Ov,a.Ts,s.u5,s.Fj,s.JJ,s.nD,s.On,a.Zd],styles:["pre[_ngcontent-%COMP%]{background-color:#1f1f1f}"],changeDetection:0}),p})()}}]);