(this["webpackJsonpbatt-man"]=this["webpackJsonpbatt-man"]||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),i=c.n(s),r=(c(25),c(4)),l=c(8),o=c(2),j=c(0);function d(e){var t=Object(n.useContext)(p),c=t.devices,a=t.setDevices,s=t.getDevices,i=t.darkTheme,r=g(),o=function(e){a((function(t){return t.filter((function(t){return t.id!==e}))})),localStorage.removeItem("device-".concat(e))},d=function(){return i?"bg-dark text-white":""};return Object(j.jsxs)("div",{className:"devices-table",children:[Object(j.jsx)("h3",{children:"Devices:"}),r>666?Object(j.jsxs)("table",{className:"table "+d(),children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Room"}),Object(j.jsx)("th",{children:"Expires"}),"home"!==e.page&&Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:c&&c.map((function(t){return Object(j.jsxs)("tr",{className:"device",children:[Object(j.jsx)("td",{children:t.type}),Object(j.jsx)("td",{children:t.name||"no name"}),Object(j.jsx)("td",{children:t.room}),t.exp?Object(j.jsxs)("td",{className:"exp",children:[t.exp,Object(j.jsx)("span",{className:"exp-tooltip",children:Object(j.jsxs)("button",{type:"button",className:"btn btn-danger",title:"Remove Battery",onClick:function(){return function(e){var t={id:e.id,type:e.type,name:e.name,room:e.room,exp:""};localStorage.setItem("device-".concat(e.id),JSON.stringify(t)),s()}(t)},children:["Pop ",Object(j.jsx)("i",{className:"fa fa-battery"})]})})]}):Object(j.jsx)("td",{children:"no batteries"}),"home"!==e.page&&Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)(l.b,{to:"/forms/update/device/"+t.id,className:"btn btn-primary",children:"Update"}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return o(t.id)},children:"Delete"})]})})]},t.id)}))})]}):c&&c.map((function(t){return Object(j.jsx)("table",{className:"table "+d(),children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"Type:"})}),Object(j.jsx)("td",{children:t.type})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"Name:"})}),Object(j.jsx)("td",{children:t.name})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"Room:"})}),Object(j.jsx)("td",{children:t.room})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"Expires:"})}),Object(j.jsx)("td",{children:t.exp||"no batteries"})]}),"home"!==e.page&&Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"Actions:"})}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)(l.b,{to:"/forms/update/device/"+t.id,className:"btn btn-primary",children:"Update"}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return o(t.id)},children:"Delete"})]})})]})]})})}))]})}function b(){return Object(j.jsxs)("div",{className:"home p-4",children:[Object(j.jsx)("h3",{className:"display-6 mt-4",children:"Welcome to BattMan - The Battery Manager"}),Object(j.jsx)("div",{className:"devices-table",children:Object(j.jsx)(d,{page:"home"})})]})}var u=c(20),h=c(35);function m(){var e=Object(n.useContext)(p).setDevices,t=Object(n.useContext)(O),c=t.months,a=t.years,s=t.deviceTypes,i=t.roomTypes,l=g(),o=Object(n.useState)(""),d=Object(r.a)(o,2),b=d[0],m=d[1],x=Object(n.useState)(""),v=Object(r.a)(x,2),f=v[0],N=v[1],y=Object(n.useState)(""),C=Object(r.a)(y,2),S=C[0],w=C[1],F=Object(n.useState)(""),D=Object(r.a)(F,2),T=D[0],k=D[1],B=Object(n.useState)(""),E=Object(r.a)(B,2),M=E[0],R=E[1],A=function(e){return m(e.target.value)},J=function(e){return N(e.target.value)},P=function(e){return w(e.target.value)},I=function(e){return k(e.target.value)},L=function(e){return R(e.target.value)};return Object(j.jsxs)("div",{className:"form",children:[l>666?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-type",children:"Device type:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-type",value:b,onChange:A,children:[Object(j.jsx)("option",{}),s.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-name",children:"Device name (optional):"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"device-name",value:f,onChange:J})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-room",children:"Room this device is in:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-room",value:S,onChange:P,children:[Object(j.jsx)("option",{}),i.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"battery-exp",children:"Battery expiration date (optional):"}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-month",value:T,onChange:I,children:[Object(j.jsx)("option",{children:"Month"}),c.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-year",value:M,onChange:L,children:[Object(j.jsx)("option",{children:"Year"}),a.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-type",children:"Device type:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-type",value:b,onChange:A,children:[Object(j.jsx)("option",{}),s.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-name",children:"Device name (optional):"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"device-name",value:f,onChange:J}),Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-room",children:"Room this device is in:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-room",value:S,onChange:P,children:[Object(j.jsx)("option",{}),i.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"battery-exp",children:"Battery expiration date (optional):"}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-month",value:T,onChange:I,children:[Object(j.jsx)("option",{children:"Month"}),c.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-year",value:M,onChange:L,children:[Object(j.jsx)("option",{children:"Year"}),a.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsx)("div",{className:"d-grid",children:Object(j.jsx)("button",{className:"btn btn-lg btn-primary",onClick:function(){var t={id:Object(h.a)(),type:b,name:f,room:S,exp:T+" "+M};e((function(e){return[].concat(Object(u.a)(e),[t])})),localStorage.setItem("device-".concat(t.id),JSON.stringify(t)),m(""),N(""),w(""),k(""),R(""),console.log("localStorage:",localStorage)},children:"Add Device"})})]})}function x(e){var t=Object(n.useContext)(p),c=t.devices,a=t.getDevices,s=Object(n.useContext)(O),i=s.months,l=s.years,o=s.deviceTypes,d=s.roomTypes,b=g(),u=Object(n.useState)(""),h=Object(r.a)(u,2),m=h[0],x=h[1],v=Object(n.useState)(""),f=Object(r.a)(v,2),N=f[0],y=f[1],C=Object(n.useState)(""),S=Object(r.a)(C,2),w=S[0],F=S[1],D=Object(n.useState)(""),T=Object(r.a)(D,2),k=T[0],B=T[1],E=Object(n.useState)(""),M=Object(r.a)(E,2),R=M[0],A=M[1],J=function(e){return x(e.target.value)},P=function(e){return y(e.target.value)},I=function(e){return F(e.target.value)},L=function(e){return B(e.target.value)},U=function(e){return A(e.target.value)};Object(n.useEffect)((function(){var t=c.find((function(t){return t.id===e.match.params.id}));x(t.type),y(t.name),F(t.room),""!==t.exp&&(B(t.exp.slice(0,3)),A(t.exp.slice(-4)))}),[c,e.match.params.id]);return Object(j.jsxs)("div",{className:"form",children:[b>666?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-type",children:"Device type:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-type",value:m,onChange:J,children:[Object(j.jsx)("option",{}),o.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-name",children:"Device name (optional):"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"device-name",value:N,onChange:P})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-room",children:"Room this device is in:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-room",value:w,onChange:I,children:[Object(j.jsx)("option",{}),d.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"battery-exp",children:"Battery expiration date (optional):"}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-month",value:k,onChange:L,children:[Object(j.jsx)("option",{children:"Month"}),i.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-year",value:R,onChange:U,children:[Object(j.jsx)("option",{children:"Year"}),l.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-type",children:"Device type:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-type",value:m,onChange:J,children:[Object(j.jsx)("option",{}),o.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-name",children:"Device name (optional):"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"device-name",value:N,onChange:P}),Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"device-room",children:"Room this device is in:"}),Object(j.jsxs)("select",{className:"form-select",id:"device-room",value:w,onChange:I,children:[Object(j.jsx)("option",{}),d.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsx)("label",{className:"input-group-text bg-white",htmlFor:"battery-exp",children:"Battery expiration date (optional):"}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-month",value:k,onChange:L,children:[Object(j.jsx)("option",{children:"Month"}),i.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsxs)("select",{className:"form-select",id:"battery-exp-year",value:R,onChange:U,children:[Object(j.jsx)("option",{children:"Year"}),l.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]})]}),Object(j.jsx)("div",{className:"d-grid",children:Object(j.jsx)("button",{className:"btn btn-lg btn-primary",onClick:function(){var t={id:e.match.params.id,type:m,name:N,room:w,exp:k+" "+R};localStorage.setItem("device-".concat(e.match.params.id),JSON.stringify(t)),a(),x(""),y(""),F(""),B(""),A(""),console.log("localStorage:",localStorage)},children:"Update Device"})})]})}c(32);var p=Object(n.createContext)(null),O=Object(n.createContext)(null);function v(){return window.innerWidth}function g(){var e=Object(n.useState)(v()),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a(v())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}function f(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),u=i[0],h=i[1],v=function(){var e=[];for(var t in localStorage)/device/.test(t)&&e.push(JSON.parse(localStorage.getItem(t)));a(e)};Object(n.useEffect)((function(){v()}),[]);var g=Object(n.useMemo)((function(){return{devices:c,setDevices:a,getDevices:v,darkTheme:u}}),[c,u]),f={months:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],years:[2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],deviceTypes:["Remote","Pedal","Handheld","Flashlight","Watch","Clock","Other"],roomTypes:["Living Room","Kitchen","Bedroom","Bathroom","Garage","Office","Other"]};return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"container-fluid",style:function(){var e=document.getElementsByTagName("body")[0];return e.style.backgroundColor=u?"#000":"#fff",{backgroundColor:u?"#000":"#fff",color:u?"#fff":"#000"}}(),children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-10 col-lg-11",children:Object(j.jsx)("h1",{className:"display-1",children:"BattMan"})}),Object(j.jsx)("div",{className:"col-2 col-lg-1",children:Object(j.jsx)("button",{className:"btn btn-theme "+(u?"btn-light":"btn-dark"),title:"Toggle Dark Theme",onClick:function(){return h((function(e){return!e}))},children:u?Object(j.jsx)("i",{className:"fa fa-sun-o"}):Object(j.jsx)("i",{className:"fa fa-moon-o"})})})]}),Object(j.jsxs)("nav",{className:"btn-group",children:[Object(j.jsx)(l.b,{to:"/",className:"btn btn-light",children:"Home"}),Object(j.jsx)(l.b,{to:"/table/devices",className:"btn btn-light",children:"Edit Devices"}),Object(j.jsx)(l.b,{to:"/forms/add/device",className:"btn btn-light",children:"Add Device"})]}),Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(p.Provider,{value:g,children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(o.a,{path:"/table/devices",component:d}),Object(j.jsxs)(O.Provider,{value:f,children:[Object(j.jsx)(o.a,{path:"/forms/add/device",component:m}),Object(j.jsx)(o.a,{path:"/forms/update/device/:id",component:x})]})]})})]})})}var N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.4a7c7f52.chunk.js.map