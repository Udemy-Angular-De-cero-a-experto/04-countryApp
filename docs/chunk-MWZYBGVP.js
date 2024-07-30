import{A as M,B as G,C as y,D as L,E as J,F as K,J as Q,L as V,M as W,N as $,Q as S,R as _,T as X,a as j,b as O,c as N,d as q,e as z,f as B,g as A,h as u,i as P,j as b,k as r,l as f,m,n as c,o as i,p as n,q as s,r as C,s as g,t as T,u as o,v as l,w as U,x as H,y as R,z as D}from"./chunk-5HRHIC47.js";var v=(()=>{class t{http;apiUrl="https://restcountries.com/v3.1";constructor(e){this.http=e}getCountriesRequest(e){return this.http.get(e).pipe(N(a=>j([])))}searchCountryByAlphaCode(e){let a=`${this.apiUrl}/alpha/${e}`;return this.http.get(a).pipe(O(p=>p.length>0?p[0]:null),N(p=>j(null)))}searchCapital(e){let a=`${this.apiUrl}/capital/${e}`;return this.getCountriesRequest(a)}searchCountry(e){let a=`${this.apiUrl}/name/${e}`;return this.getCountriesRequest(a)}searchRegion(e){let a=`${this.apiUrl}/region/${e}`;return this.getCountriesRequest(a)}static \u0275fac=function(a){return new(a||t)(A(K))};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ae=t=>["/countries/by",t];function le(t,d){t&1&&(i(0,"div",2),o(1,` No hay pa\xEDses que mostrar
`),n())}function ce(t,d){if(t&1&&(i(0,"tr")(1,"td"),o(2),n(),i(3,"td",5),s(4,"img",6),n(),i(5,"td",5),s(6,"img",7),n(),i(7,"td"),o(8),n(),i(9,"td"),o(10),n(),i(11,"td",8),o(12),R(13,"number"),n(),i(14,"td")(15,"a",9),o(16,"+Info"),n()()()),t&2){let e=d.$implicit,a=d.index;r(2),l(a+1),r(2),c("src",e.flags.svg,b)("alt",e.flags.alt),r(2),c("src",e.flags.svg,b)("alt",e.name.common),r(2),l(e.name.common),r(2),l(e.capital),r(2),l(D(13,9,e.population)),r(3),c("routerLink",H(11,ae,e.cca3))}}function se(t,d){if(t&1&&(i(0,"table",3)(1,"thead")(2,"tr")(3,"th"),o(4,"#"),n(),i(5,"th"),o(6,"Icono"),n(),i(7,"th"),o(8,"Bandera"),n(),i(9,"th"),o(10,"Nombre"),n(),i(11,"th"),o(12,"Capital"),n(),i(13,"th"),o(14,"Poblaci\xF3n"),n(),s(15,"th"),n()(),i(16,"tbody"),m(17,ce,17,13,"tr",4),n()()),t&2){let e=g();r(17),c("ngForOf",e.countries)}}var E=(()=>{class t{countries=[];static \u0275fac=function(a){return new(a||t)};static \u0275cmp=u({type:t,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"ps-3","align-middle"],[1,"icono",3,"src","alt"],[1,"bandera",3,"src","alt"],[1,"text-end","pe-5"],[3,"routerLink"]],template:function(a,p){if(a&1&&m(0,le,2,0,"div",1)(1,se,18,1,"ng-template",null,0,M),a&2){let h=T(2);c("ngIf",p.countries.length===0)("ngIfElse",h)}},dependencies:[G,y,W,L],styles:[".icono[_ngcontent-%COMP%]{width:15px}.bandera[_ngcontent-%COMP%]{width:35px}"]})}return t})();function pe(t,d){if(t&1&&s(0,"countries-table",5),t&2){let e=g();c("countries",e.countries)}}function me(t,d){t&1&&s(0,"shared-loading-spinner")}var ee=(()=>{class t{countriesService;countries=[];isLoading=!1;constructor(e){this.countriesService=e}searchByCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(a=>{this.countries=a,this.isLoading=!1})}static \u0275fac=function(a){return new(a||t)(f(v))};static \u0275cmp=u({type:t,selectors:[["countries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],[3,"onDebounce","placeholder"],[3,"countries",4,"ngIf"],[4,"ngIf"],[3,"countries"]],template:function(a,p){a&1&&(i(0,"h2"),o(1,"Por Capital"),n(),s(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),C("onDebounce",function(I){return p.searchByCapital(I)}),n()()(),i(6,"div",0)(7,"div",1),s(8,"hr"),m(9,pe,1,1,"countries-table",3),n()(),m(10,me,1,0,"shared-loading-spinner",4)),a&2&&(r(5),c("placeholder","Buscar por capital..."),r(4),c("ngIf",!p.isLoading),r(),c("ngIf",p.isLoading))},dependencies:[y,S,_,E]})}return t})();function de(t,d){if(t&1&&s(0,"countries-table",5),t&2){let e=g();c("countries",e.countries)}}function ue(t,d){t&1&&s(0,"shared-loading-spinner")}var te=(()=>{class t{countriesService;countries=[];isLoading=!1;constructor(e){this.countriesService=e}searchByCountry(e){this.isLoading=!0,this.countriesService.searchCountry(e).subscribe(a=>{this.countries=a,this.isLoading=!1})}static \u0275fac=function(a){return new(a||t)(f(v))};static \u0275cmp=u({type:t,selectors:[["countries-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],[3,"onDebounce","placeholder"],[3,"countries",4,"ngIf"],[4,"ngIf"],[3,"countries"]],template:function(a,p){a&1&&(i(0,"h2"),o(1,"Por Pa\xEDs"),n(),s(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),C("onDebounce",function(I){return p.searchByCountry(I)}),n()()(),i(6,"div",0)(7,"div",1),s(8,"hr"),m(9,de,1,1,"countries-table",3),n()(),m(10,ue,1,0,"shared-loading-spinner",4)),a&2&&(r(5),c("placeholder","Buscar por pa\xEDs..."),r(4),c("ngIf",!p.isLoading),r(),c("ngIf",p.isLoading))},dependencies:[y,S,_,E]})}return t})();function fe(t,d){if(t&1&&s(0,"countries-table",5),t&2){let e=g();c("countries",e.countries)}}function ge(t,d){t&1&&s(0,"shared-loading-spinner")}var ne=(()=>{class t{countriesService;countries=[];isLoading=!1;constructor(e){this.countriesService=e}searchByRegion(e){this.isLoading=!0,this.countriesService.searchRegion(e).subscribe(a=>{this.countries=a,this.isLoading=!1})}static \u0275fac=function(a){return new(a||t)(f(v))};static \u0275cmp=u({type:t,selectors:[["countries-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],[3,"onDebounce","placeholder"],[3,"countries",4,"ngIf"],[4,"ngIf"],[3,"countries"]],template:function(a,p){a&1&&(i(0,"h2"),o(1,"Por Regi\xF3n"),n(),s(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),C("onDebounce",function(I){return p.searchByRegion(I)}),n()()(),i(6,"div",0)(7,"div",1),s(8,"hr"),m(9,fe,1,1,"countries-table",3),n()(),m(10,ge,1,0,"shared-loading-spinner",4)),a&2&&(r(5),c("placeholder","Buscar por regi\xF3n..."),r(4),c("ngIf",!p.isLoading),r(),c("ngIf",p.isLoading))},dependencies:[y,S,_,E]})}return t})();function ye(t,d){t&1&&(i(0,"div",2),o(1," Espere, por favor. "),n())}function ve(t,d){if(t&1&&(i(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),o(4,"Pa\xEDs: "),i(5,"strong"),o(6),n()()(),s(7,"hr"),n(),i(8,"div",3)(9,"div",5)(10,"h3"),o(11,"Bandera"),n(),s(12,"img",6),n(),i(13,"div",7)(14,"h3"),o(15,"Informaci\xF3n"),n(),i(16,"ul",8)(17,"li",9)(18,"strong"),o(19,"Poblaci\xF3n:"),n(),o(20),R(21,"number"),n(),i(22,"li",9)(23,"strong"),o(24,"C\xF3digo:"),n(),o(25),n()()()(),i(26,"div",10)(27,"div",7)(28,"h3"),o(29,"Traducciones"),n(),i(30,"div",11)(31,"span",12),o(32),n(),i(33,"span",12),o(34),n(),i(35,"span",12),o(36),n(),i(37,"span",12),o(38),n(),i(39,"span",12),o(40),n(),i(41,"span",12),o(42),n(),i(43,"span",12),o(44),n(),i(45,"span",12),o(46),n(),i(47,"span",12),o(48),n(),i(49,"span",12),o(50),n(),i(51,"span",12),o(52),n(),i(53,"span",12),o(54),n(),i(55,"span",12),o(56),n(),i(57,"span",12),o(58),n(),i(59,"span",12),o(60),n(),i(61,"span",12),o(62),n(),i(63,"span",12),o(64),n(),i(65,"span",12),o(66),n(),i(67,"span",12),o(68),n(),i(69,"span",12),o(70),n(),i(71,"span",12),o(72),n(),i(73,"span",12),o(74),n(),i(75,"span",12),o(76),n(),i(77,"span",12),o(78),n(),i(79,"span",12),o(80),n()()()()()),t&2){let e=g();r(6),l(e.country.name.common),r(6),c("src",e.country.flags.svg,b)("alt",e.country.name.common),r(8),U(" ",D(21,30,e.country.population)," "),r(5),U(" ",e.country.cca3," "),r(7),l(e.country.translations.ara.official),r(2),l(e.country.translations.ces.official),r(2),l(e.country.translations.ces.official),r(2),l(e.country.translations.cym.official),r(2),l(e.country.translations.deu.official),r(2),l(e.country.translations.est.official),r(2),l(e.country.translations.fin.official),r(2),l(e.country.translations.fra.official),r(2),l(e.country.translations.hrv.official),r(2),l(e.country.translations.hun.official),r(2),l(e.country.translations.ita.official),r(2),l(e.country.translations.jpn.official),r(2),l(e.country.translations.kor.official),r(2),l(e.country.translations.nld.official),r(2),l(e.country.translations.per.official),r(2),l(e.country.translations.pol.official),r(2),l(e.country.translations.por.official),r(2),l(e.country.translations.rus.official),r(2),l(e.country.translations.svk.official),r(2),l(e.country.translations.spa.official),r(2),l(e.country.translations.srp.official),r(2),l(e.country.translations.swe.official),r(2),l(e.country.translations.tur.official),r(2),l(e.country.translations.urd.official),r(2),l(e.country.translations.zho.official)}}var ie=(()=>{class t{activatedRoute;countriesService;router;country;constructor(e,a,p){this.activatedRoute=e,this.countriesService=a,this.router=p}ngOnInit(){this.activatedRoute.params.pipe(q(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}static \u0275fac=function(a){return new(a||t)(f(Q),f(v),f(V))};static \u0275cmp=u({type:t,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(a,p){if(a&1&&m(0,ye,2,0,"ng-template",null,0,M)(2,ve,81,32,"div",1),a&2){let h=T(1);r(2),c("ngIf",p.country)("ngIfElse",h)}},dependencies:[y,L]})}return t})();var xe=[{path:"by-capital",component:ee},{path:"by-country",component:te},{path:"by-region",component:ne},{path:"by/:id",component:ie},{path:"**",redirectTo:"by-capital"}],oe=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[$.forChild(xe),$]})}return t})();var Ge=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[J,oe,X]})}return t})();export{Ge as CountriesModule};