"use strict";(self.webpackChunkProyecto3=self.webpackChunkProyecto3||[]).push([[843],{9838:(M,m,n)=>{n.r(m),n.d(m,{ForgotModule:()=>C});var u=n(6895),l=n(6806),r=n(4006),o=n(4650),s=n(2542),d=n(9101),f=n(3546),c=n(9549),p=n(4144);const h=[{path:"",component:(()=>{class t{constructor(e,i,g){this.formBuild=e,this.authService=i,this.route=g}ngOnInit(){this.forgotForm=this.formBuild.group({email:["",r.kI.email]})}onForgot(){this.authService.forgotPassword(this.forgotForm.value.email).then(()=>this.route.navigate(["/login"])).catch(e=>console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.qu),o.Y36(s.e),o.Y36(l.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-forgot"]],decls:20,vars:1,consts:[[1,"container-fluid","d-flex","justify-content-center","align-items-center"],[1,"d-md-flex","pb-md-1","w-25","w-auto","shadow"],[1,"logo","col-md-7"],["src","../../../../../assets/logo_server.png","alt",""],[1,"d-flex","flex-column","justify-content-center","col-md-5"],[1,"header"],["novalidate","",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["type","email","matInput","","placeholder","Ex. example@example.com","value","","formControlName","email","required",""],["mat-flat-button","","color","primary",1,"w-100"],[1,"footer"],["routerLink","/login"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2),o._UZ(3,"img",3),o.qZA(),o.TgZ(4,"div",4)(5,"h2",5)(6,"span"),o._uU(7,"Login"),o.qZA(),o._uU(8," your account"),o.qZA(),o.TgZ(9,"form",6),o.NdJ("ngSubmit",function(){return i.onForgot()}),o.TgZ(10,"mat-form-field",7)(11,"mat-label"),o._uU(12,"Enter your Email Account"),o.qZA(),o._UZ(13,"input",8),o.qZA(),o.TgZ(14,"button",9),o._uU(15,"Send"),o.qZA()(),o.TgZ(16,"h2",10)(17,"a",11)(18,"span"),o._uU(19,"SignIn"),o.qZA()()()()()()),2&e&&(o.xp6(9),o.Q6J("formGroup",i.forgotForm))},dependencies:[l.yS,d.lW,f.a8,c.KE,c.hX,p.Nt,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".container-fluid[_ngcontent-%COMP%]{height:100vh}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}p[_ngcontent-%COMP%]{display:flex;justify-content:end;margin-top:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#673ab7}.footer[_ngcontent-%COMP%]{margin-top:10px}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#673ab7;text-decoration:none}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(h),l.Bz]}),t})();var F=n(456);let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,v,F.m]}),t})()}}]);