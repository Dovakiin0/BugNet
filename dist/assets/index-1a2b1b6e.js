import{j as e,T as a,F as n,N as x,e as p,r as h}from"./index-a26ad9e4.js";import{B as m}from"./Bugs-835d127b.js";import{a as g}from"./axios-33fc3c8b.js";import{a as j,A as f,l as B}from"./index-0e8350a6.js";import{a as y,S as c}from"./Skeleton-6487c1d4.js";import{E as u,h as w}from"./Empty-c102110e.js";import{u as E}from"./useToast-05f70ec3.js";import{B as d}from"./chunk-6CSUKJP7-66c8703c.js";import{u as v}from"./useComments-18e4794d.js";const S=async()=>{const{data:r}=await g.get("/api/v1/bugs",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return r};function k(){return j(["bugs"],()=>S())}function A({}){const{isLoading:r,data:i,isError:t,error:l}=k(),{errorToast:o}=E();return t&&o("Error getting results"),e.jsx(e.Fragment,{children:e.jsxs(d,{margin:"10px",padding:"20px",rounded:10,width:"full",children:[e.jsx(a,{fontWeight:"bold",color:"primary.200",children:"Recent Bugs"}),e.jsx(y,{direction:"column",spacing:"4",padding:"10px",children:r?e.jsx(e.Fragment,{children:e.jsx(c,{height:"60px"})}):i.length>0?i.map(s=>s.status==="Open"&&e.jsx(m,{projectTitle:s.Project.title,author:s.User.username,...s},s.id)):e.jsx(u,{message:"Newly created bugs from across your projects will appear here"})})]})})}function N({comment:r}){return e.jsxs(n,{marginTop:"20px",gap:"5",align:"center",children:[e.jsx(f,{name:r.User.username,width:10,height:10}),e.jsxs(n,{flexDir:"column",children:[e.jsx(x,{to:`/bugs/${r.Bug.id}`,children:e.jsxs(a,{color:"primary.200",fontSize:"sm",_hover:{color:"purple.300"},children:[r.User.username," commented on #",r.Bug.id,"/",r.Bug.title," -- ",r.Bug.Project.title]})}),e.jsx(a,{color:"primary.300",fontSize:"xs",children:w(r.createdAt).fromNow()})]})]})}function T({}){const{data:r,isLoading:i}=v();let t,l=p();return h.useEffect(()=>{t=B("ws://localhost:3030/"),t.on("COMMENT_RESPONSE",o=>{l.invalidateQueries(["comment"])})},[t]),e.jsxs(d,{margin:"10px",padding:"20px",rounded:10,maxWidth:"400px",width:"400px",children:[e.jsx(a,{fontWeight:"bold",color:"primary.200",children:"Activities"}),i?e.jsx(e.Fragment,{children:e.jsx(c,{height:"60px"})}):r.length>0?r.map(o=>e.jsx(N,{comment:o})):e.jsx(u,{message:"Nothing new to show"})]})}function W({}){return e.jsx(e.Fragment,{children:e.jsxs(n,{flexGrow:"1",children:[e.jsx(A,{}),e.jsx(T,{})]})})}export{W as default};