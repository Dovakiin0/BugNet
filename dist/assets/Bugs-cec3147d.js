import{j as r,F as e,N as s,T as o}from"./index-f429a3a2.js";import{h as x}from"./Empty-add6c56a.js";import{B as h}from"./chunk-6CSUKJP7-63a6ae26.js";function f({id:i,title:t,projectId:c,projectTitle:a,author:d,createdAt:p,priority:l}){const n={0:{color:"gray.300",title:"Low"},1:{color:"orange.300",title:"High"},2:{color:"red.300",title:"Critical"}};return r.jsx(h,{padding:"10px",bg:"primary.800",rounded:"10",children:r.jsx(e,{gap:"5",align:"center",children:r.jsxs(e,{flexDir:"column",gap:"1",children:[r.jsxs(e,{gap:"2",align:"center",children:[r.jsx(s,{to:`/bugs/${i}`,children:r.jsxs(o,{fontWeight:"bold",fontSize:"md",_hover:{color:"purple.300"},children:["#",i,"/",t]})}),r.jsx(s,{to:`/project/${c}`,children:r.jsxs(o,{fontWeight:"bold",fontSize:"sm",color:"primary.200",_hover:{color:"purple.300"},children:["-- ",a," |"]})}),r.jsx(o,{color:n[l].color,children:n[l].title})]}),r.jsxs(e,{gap:"3",align:"center",children:[r.jsx(o,{fontSize:"sm",color:"primary.200",children:"Opened by:"}),r.jsx(o,{fontSize:"sm",children:d}),r.jsx(o,{fontSize:"sm",color:"primary.200",children:x(p).fromNow()})]})]})})})}export{f as B};
