"use strict";(self.webpackChunkProyecto3=self.webpackChunkProyecto3||[]).push([[727],{6727:(Z,l,o)=>{o.r(l),o.d(l,{RegisterModule:()=>M});var c=o(6895),s=o(6806),r=o(4006),t=o(4650),g=o(2542),d=o(9101),f=o(3546),m=o(9549),p=o(4144);const h=[{path:"",component:(()=>{class e{constructor(n,i,u){this.formBuilder=n,this.authService=i,this.route=u}ngOnInit(){this.registerForm=this.formBuilder.group({email:["",r.kI.email],password:["",r.kI.required]})}onCreate(){this.authService.createAccount(this.registerForm.value.email,this.registerForm.value.password).then(()=>{this.route.navigate(["features"])}).catch(n=>console.log(n.message))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(g.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:24,vars:1,consts:[[1,"container-fluid","d-flex","justify-content-center","align-items-center"],[1,"d-md-flex","pb-md-1","w-25","w-auto","shadow"],[1,"logo","col-md-7"],["src","../../../../../assets/logo_server.png","alt",""],[1,"d-flex","flex-column","justify-content-center","col-md-5"],[1,"header"],["novalidate","",1,"",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["type","email","matInput","","placeholder","Email","value","","formControlName","email","required",""],["type","password","matInput","","placeholder","Password","value","","formControlName","password","required",""],["mat-flat-button","","color","primary",1,"w-100"],[1,"footer"],["routerLink","/login"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"h2",5)(6,"span"),t._uU(7,"Create"),t.qZA(),t._uU(8," a new account"),t.qZA(),t.TgZ(9,"form",6),t.NdJ("ngSubmit",function(){return i.onCreate()}),t.TgZ(10,"mat-form-field",7)(11,"mat-label"),t._uU(12,"User Name"),t.qZA(),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"mat-form-field",7)(15,"mat-label"),t._uU(16,"Enter Password"),t.qZA(),t._UZ(17,"input",9),t.qZA(),t.TgZ(18,"button",10),t._uU(19,"Create Account"),t.qZA()(),t.TgZ(20,"h2",11)(21,"a",12)(22,"span"),t._uU(23,"SignIn"),t.qZA()()()()()()),2&n&&(t.xp6(9),t.Q6J("formGroup",i.registerForm))},dependencies:[s.yS,d.lW,f.a8,m.KE,m.hX,p.Nt,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".container-fluid[_ngcontent-%COMP%]{height:100vh}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}p[_ngcontent-%COMP%]{display:flex;justify-content:end;margin-top:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#673ab7}.footer[_ngcontent-%COMP%]{margin-top:10px}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#673ab7;text-decoration:none}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(h),s.Bz]}),e})();var v=o(456);let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,C,v.m]}),e})()}}]);