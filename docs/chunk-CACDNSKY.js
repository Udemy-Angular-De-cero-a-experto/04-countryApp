import{E as v,H as N,J as R,a as x,b as f,c as b,d as p,e as y,f as g,g as a,h as E,i as C,j as m,k as i,l as o,m as c,n as S,o as M,p as P,q as r,r as d,s as _,t as B,u as I,v as T,w,x as F,y as D,z as j}from"./chunk-C7V3TXHM.js";var O=(()=>{class e{http;apiUrl="https://restcountries.com/v3.1";constructor(n){this.http=n}searchCapital(n){let t=`${this.apiUrl}/capital/${n}`;return this.http.get(t)}static \u0275fac=function(t){return new(t||e)(b(j))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function G(e,u){e&1&&(i(0,"div",2),r(1,` No hay pa\xEDses que mostrar
`),o())}function J(e,u){if(e&1&&(i(0,"tr")(1,"td"),r(2),o(),i(3,"td",5),c(4,"img",6),o(),i(5,"td",5),c(6,"img",7),o(),i(7,"td"),r(8),o(),i(9,"td"),r(10),o(),i(11,"td",8),r(12),_(13,"number"),o(),i(14,"td")(15,"a",9),r(16,"Ver m\xE1s"),o()()()),e&2){let n=u.$implicit,t=u.index;a(2),d(t+1),a(2),m("src",n.flags.svg,g)("alt",n.flags.alt),a(2),m("src",n.flags.svg,g)("alt",n.name.common),a(2),d(n.name.common),a(2),d(n.capital),a(2),d(B(13,8,n.population))}}function K(e,u){if(e&1&&(i(0,"table",3)(1,"thead")(2,"tr")(3,"th"),r(4,"#"),o(),i(5,"th"),r(6,"Icono"),o(),i(7,"th"),r(8,"Bandera"),o(),i(9,"th"),r(10,"Nombre"),o(),i(11,"th"),r(12,"Capital"),o(),i(13,"th"),r(14,"Poblaci\xF3n"),o(),c(15,"th"),o()(),i(16,"tbody"),C(17,J,17,10,"tr",4),o()()),e&2){let n=M();a(17),m("ngForOf",n.countries)}}var k=(()=>{class e{countries=[];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"ps-3","align-middle"],["width","15px",3,"src","alt"],["width","35px",3,"src","alt"],[1,"text-end"],["href","#"]],template:function(t,l){if(t&1&&C(0,G,2,0,"div",1)(1,K,18,1,"ng-template",null,0,I),t&2){let h=P(2);m("ngIf",l.countries.length===0)("ngIfElse",h)}},dependencies:[T,w,F],encapsulation:2})}return e})();var U=(()=>{class e{countriesServices;countries=[];constructor(n){this.countriesServices=n}searchByCapital(n){this.countriesServices.searchCapital(n).subscribe(t=>{this.countries=t})}static \u0275fac=function(t){return new(t||e)(E(O))};static \u0275cmp=p({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],[3,"OnValue","placeholder"],[3,"countries"]],template:function(t,l){t&1&&(i(0,"h2"),r(1,"Por Capital"),o(),c(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("OnValue",function(H){return l.searchByCapital(H)}),o()()(),i(6,"div",0)(7,"div",1),c(8,"hr")(9,"countries-table",3),o()()),t&2&&(a(5),m("placeholder","Buscar por capital..."),a(4),m("countries",l.countries))},dependencies:[N,k]})}return e})();var V=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-by-country-page"]],decls:2,vars:0,template:function(t,l){t&1&&(i(0,"p"),r(1,"by-country-page works!"),o())}})}return e})();var $=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-by-region-page"]],decls:2,vars:0,template:function(t,l){t&1&&(i(0,"p"),r(1,"by-region-page works!"),o())}})}return e})();var z=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-country-page"]],decls:2,vars:0,template:function(t,l){t&1&&(i(0,"p"),r(1,"country-page works!"),o())}})}return e})();var Q=[{path:"by-capital",component:U},{path:"by-country",component:V},{path:"by-region",component:$},{path:"by/:id",component:z},{path:"**",redirectTo:"by-capital"}],q=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=f({imports:[v.forChild(Q),v]})}return e})();var Ee=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=f({imports:[D,q,R]})}return e})();export{Ee as CountriesModule};
