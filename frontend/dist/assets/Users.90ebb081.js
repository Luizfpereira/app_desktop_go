import{r,j as e,A as u,F as i,a as n}from"./index.867f79d0.js";var g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};const v=g;var x=function(t,a){return e(u,{...t,ref:a,icon:v})},N=r.exports.forwardRef(x);const y=N;function b(s){const{name:t,age:a,email:c,address:d,city:o,state:h}=s.user,[l,f]=r.exports.useState(!1);function m(){var p=document.querySelector(".card-frame");p.classList.toggle("card-frame-expanded"),f(!l)}return e(i,{children:n("div",{className:"card-frame",children:[n("div",{className:"container-left",children:[e("div",{className:"top",children:t}),e("div",{className:"bottom",children:l?e(i,{children:n("div",{children:[n("p",{className:"internal-info",children:[e("span",{style:{fontWeight:"bold"},children:"Idade: "}),a]}),n("p",{className:"internal-info",children:[e("span",{style:{fontWeight:"bold"},children:"Email: "}),c]}),n("p",{className:"internal-info",children:[e("span",{style:{fontWeight:"bold"},children:"Endere\xE7o: "}),d]}),n("p",{className:"internal-info",children:[e("span",{style:{fontWeight:"bold"},children:"Cidade: "}),o]}),n("p",{className:"internal-info",children:[e("span",{style:{fontWeight:"bold"},children:"Estado: "}),h]})]})}):e(i,{children:n("p",{children:[a," anos"]})})})]}),e("div",{className:"container-right",children:e("i",{children:e(y,{onClick:m})})})]})})}const w={name:"Patr\xEDcia",age:27,email:"patricia@example.com",address:"Rua das Neves, 246",city:"Teresina",state:"PI"};function E(){return e("div",{children:e(b,{user:w})})}export{E as default};
