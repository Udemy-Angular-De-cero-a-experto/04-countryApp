import{A as s,B as l,C as d,D as u,E as a,F as f,G as M,I as C,J as g,b as e,d as c,e as r,k as n,l as p,m}from"./chunk-C7V3TXHM.js";var y=[{path:"about",component:f},{path:"contact",component:M},{path:"countries",loadChildren:()=>import("./chunk-CACDNSKY.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],A=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o});static \u0275inj=e({imports:[a.forRoot(y),a]})}return o})();var b=(()=>{class o{title="countryApp";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=c({type:o,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,w){t&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,C]})}return o})();var v=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[b]});static \u0275inj=e({imports:[d,A,s,g]})}return o})();l().bootstrapModule(v,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));