import{u as o,a as n}from"./axios-2060c07b.js";import{u as a}from"./index-12b8f366.js";import{a as s}from"./index-93da6da0.js";async function u(){const{data:e}=await n.get("/api/v1/bugs/comment/recent",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return e}async function i(e){const{data:t}=await n.post(`/api/v1/bugs/comment/${e.bid}`,{content:e.content},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return t}async function c(e){const{data:t}=await n.delete(`/api/v1/bugs/comment/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return t}function d(){return s(["comment"],u)}function f(){const e=a();return o(i,{onSuccess:(t,r)=>{e.invalidateQueries(["bugs",r.bid])}})}function b(){const e=a();return o(c,{onSuccess:()=>{e.invalidateQueries(["bugs"])}})}export{b as a,f as b,d as u};