import{u as a,a as r}from"./axios-bf91d915.js";import{u as o}from"./index-edf1aac6.js";import{a as c}from"./index-4c505b39.js";async function s(){const{data:t}=await r.get("/api/v1/projects",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return t}async function n(t){const{data:e}=await r.get(`/api/v1/projects/${t}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return e}async function u(t){const{data:e}=await r.post("/api/v1/projects",t,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return e}async function i(t){const{data:e}=await r.put(`/api/v1/projects/${t.pid}`,{...t.values},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return e}const l=()=>c(["project"],()=>s()),g=t=>c(["project",t],()=>n(t)),h=()=>{const t=o();return a(i,{onSuccess:e=>{t.invalidateQueries(["project",e.id])}})},y=()=>{const t=o();return a(u,{onSuccess:()=>{t.invalidateQueries(["project"])}})};export{y as a,h as b,g as c,l as u};
