import{r as u,j as e,a as t}from"./index.cf32f622.js";function f(a){return window.go.main.App.CreateUser(a)}function S(){const[a,d]=u.exports.useState({}),[c,p]=u.exports.useState(!0),[h,y]=u.exports.useState({name:!1,email:!1}),[g,b]=u.exports.useState([]);function x(n){return n.map(l=>l&&new Date(l).toISOString())}const r=n=>{const l=n.target.name;let i=n.target.value;Number(i)&&(i=Number(i)),d(o=>({...o,[l]:i}))},N=n=>{const l=n.target.name;let i=n.target.value;(!isNaN(i)||i==="")&&(i=Number(i),d(o=>({...o,[l]:i===""?null:Number(i)})))},v=n=>{const l=n.target.value,i=n.target.name;(!l||l.match(/^\d{1,}(\.\d{0,2})?$/))&&d(o=>{const s={...o,[i]:l};if(s.weight>0&&s.height>0){p(!1);let m=Math.round(s.weight/Math.pow(s.height,2)*100)/100;return{...s,imc:m}}else return p(!0),{...s,imc:0}})};function E(){const n=[];let l={name:!1,email:!1};if(a.name||(n.push("Nome \xE9 requerido"),l.name=!0),a.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a.email)||n.push("Email inv\xE1lido"):(n.push("Email \xE9 requerido"),l.email=!0),y(l),n.length>0)throw new Error(n.join("; "))}return e("div",{children:t("form",{onSubmit:n=>{n.preventDefault();try{E();const s=[a.birth_date,a.assessment_date],m=x(s),F={...a,birth_date:m[0],assessment_date:m[1]};f(F),d({}),b([])}catch(s){const m=s.message.split("; ");b(m)}const l=[a.birth_date,a.assessment_date],i=x(l),o={...a,birth_date:i[0],assessment_date:i[1]};f(o),d({})},children:[g.length>0&&e("div",{className:"error-messages",children:e("ul",{children:g.map((n,l)=>t("li",{children:["* ",n]},l))})}),e("div",{className:"input-table",children:t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Nome *"}),e("input",{id:"name",type:"text",name:"name",placeholder:"Digite seu nome completo",value:a.name||"",onChange:r,className:`input-box ${h.name===!0?"empty":""}`})]})}),t("div",{className:"input-table",children:[t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Email *"}),e("input",{id:"email",type:"text",name:"email",placeholder:"Ex.: seuemail@exemplo.com",value:a.email||"",onChange:r,className:`input-box ${h.email===!0?"empty":""}`})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Data de Nascimento"}),e("input",{id:"birth_date",type:"date",name:"birth_date",placeholder:"Somente n\xFAmeros",value:a.birth_date||"",onChange:r,className:"input-box"})]})]}),t("div",{className:"input-table",children:[t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Endere\xE7o"}),e("input",{id:"address",type:"text",name:"address",placeholder:"Digite seu endere\xE7o",value:a.address||"",onChange:r,className:"input-box"})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"N\xFAmero"}),e("input",{id:"address_number",type:"text",name:"address_number",placeholder:"N\xFAmero do endere\xE7o",value:a.address_number||"",onChange:N,className:"input-box"})]})]}),t("div",{className:"input-table",children:[t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"CEP"}),e("input",{id:"cep",type:"text",name:"cep",placeholder:"Somente n\xFAmeros",value:a.cep||"",onChange:N,className:"input-box"})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"gender",children:"G\xEAnero"}),t("select",{id:"gender",name:"gender",value:a.gender||"",onChange:r,className:"input-box",children:[e("option",{value:"Masculino",children:"Masculino"}),e("option",{value:"Feminino",children:"Feminino"}),e("option",{value:"Neutro",children:"Neutro"})]})]})]}),t("div",{className:"input-table",children:[t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Profiss\xE3o"}),e("input",{id:"profession",type:"text",name:"profession",placeholder:"Sua profiss\xE3o",value:a.profession||"",onChange:r,className:"input-box"})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"M\xE9dico"}),e("input",{id:"doctor",type:"text",name:"doctor",placeholder:"Seu m\xE9dico",value:a.doctor||"",onChange:r,className:"input-box"})]})]}),t("div",{className:"input-table",children:[t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Peso (kg)"}),e("input",{id:"weight",type:"text",name:"weight",placeholder:"Ex.: 75.3",value:a.weight||"",onChange:v,className:"input-box"})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Altura (m)"}),e("input",{id:"height",type:"text",name:"height",placeholder:"Ex.: 1.75",value:a.height||"",onChange:v,className:"input-box"})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"IMC"}),e("input",{id:"imc",type:"text",name:"imc",placeholder:"Calculado automaticamente",value:a.imc||"",className:`input-box ${c===!0?"disabled":""}`,disabled:c})]})]}),t("div",{className:"input-table",children:[t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Polissonografia Tipo"}),e("input",{id:"polysonnography",type:"text",name:"polysonnography",placeholder:"Tipo da Polissonografia",value:a.polysonnography||"",onChange:r,className:"input-box"})]}),t("div",{className:"input-group",children:[e("label",{htmlFor:"fname",children:"Data da avalia\xE7\xE3o"}),e("input",{id:"assessment_date",type:"date",name:"assessment_date",placeholder:"Somente n\xFAmeros",value:a.assessment_date||"",onChange:r,className:"input-box"})]})]}),e("button",{type:"submit",children:"Salvar"})]})})}export{S as default};
