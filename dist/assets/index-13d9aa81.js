import{a9 as t,r as o,j as r}from"./index-12b8f366.js";import{B as a}from"./chunk-6CSUKJP7-a0ee61da.js";function s(){const{search:e}=t();return o.useMemo(()=>new URLSearchParams(e),[e])}function u(){const e=s();return window.opener.authenticateCallback(e.get("token")),window.close(),r.jsx(a,{children:"Success"})}export{u as default};
