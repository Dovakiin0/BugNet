import{Q as r,U as a,r as u,V as c}from"./index-b57f6512.js";function l(t){const{theme:s}=r(),i=a();return u.useMemo(()=>c(s.direction,{...i,...t}),[t,s.direction,i])}function b(){const t=l();function s(o){t({title:"Success",description:o,status:"success",duration:5e3,isClosable:!0,position:"bottom-right"})}function i(o){t({title:"Warning",description:o,status:"warning",duration:5e3,isClosable:!0,position:"bottom-right"})}function e(o){t({title:"Error",description:o,status:"error",duration:5e3,isClosable:!0,position:"bottom-right"})}function n(o){t({title:"Info",description:o,status:"info",duration:5e3,isClosable:!0,position:"bottom-right"})}return{successToast:s,warningToast:i,errorToast:e,infoToast:n}}export{b as u};
