import{h as j,r as b,j as e,F as s,N as l,T as a}from"./index-a26ad9e4.js";import{F as S,c as y,a as c,b as v,T as m,B as d}from"./TextField-1185120d.js";import{u as w,a as T}from"./axios-33fc3c8b.js";import{u as k}from"./useToast-05f70ec3.js";import{D as z,f as B}from"./index.esm-c5e417dc.js";import{u as E}from"./useOauth-50523859.js";import{B as u}from"./chunk-6CSUKJP7-66c8703c.js";import{I as F}from"./chunk-E77276RR-ba875d3c.js";async function L(r){const{data:o}=await T.post("/api/v1/auth/",r);return o}const D=()=>w(L);function U({}){const{successToast:r,errorToast:o}=k(),n=j(),{mutateAsync:h}=D(),x={email:"",password:""};b.useEffect(()=>{localStorage.getItem("token")&&n("/",{replace:!0})});function p(t,{setSubmitting:f}){h(t,{onSuccess:i=>{localStorage.setItem("token",i.token),r("Logged in Successfully!"),n("/")},onError:({response:i})=>{o(i.data.message)}}),f(!1)}const g=()=>{E().call("http://localhost:3030/api/v1/auth/github")};return e.jsxs(s,{justify:"center",align:"center",height:"100vh",flexDir:"column",gap:"10",children:[e.jsx(s,{children:e.jsx(l,{to:"/",children:e.jsxs(s,{justifyContent:"center",alignItems:"center",children:[e.jsx(u,{boxSize:"30px",marginRight:"20px",children:e.jsx(F,{src:"/LogoNoBack.png",alt:"logo"})}),e.jsx(a,{color:"primary.100",fontWeight:"extrabold",fontSize:"2xl",letterSpacing:"4px",children:"BUGNET"})]})})}),e.jsxs(s,{width:"500px",height:"500px",bg:"primary.800",padding:"20px",flexDir:"column",gap:"10",children:[e.jsxs(u,{children:[e.jsx(a,{fontSize:"3xl",fontWeight:"bold",children:"Login"}),e.jsxs(s,{gap:"2",children:[e.jsxs(a,{color:"primary.200",fontSize:"sm",children:["Don't have an account?"," "]}),e.jsx(l,{to:"/register",children:e.jsx(a,{fontSize:"sm",_hover:{borderBottom:"1px solid white"},children:"Register"})})]})]}),e.jsx(S,{initialValues:x,onSubmit:p,validationSchema:y({email:c().email().required("Email is required"),password:c().min(8).max(16).required("Password is required")}),children:({isSubmitting:t})=>e.jsx(v,{children:e.jsxs(s,{flexDirection:"column",gap:"5",children:[e.jsx(m,{type:"text",name:"email",label:"Email",placeholder:"Your email address"}),e.jsx(m,{type:"password",name:"password",label:"Password",placeholder:"Your password"}),e.jsx(d,{disabled:t,type:"submit",colorScheme:"brand",fontSize:"md",size:"md",children:"Submit"})]})})}),e.jsx(z,{}),e.jsx(d,{bg:"primary.800",_hover:{bg:"primary.900"},leftIcon:e.jsx(B,{}),onClick:g,children:"Login With Github"})]})]})}export{U as default};