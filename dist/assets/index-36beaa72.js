import{i as O,r as m,l as ee,j as e,c as _,q as ie,p as xt,B as P,b as T,a1 as je,f as $,n as He,o as qe,$ as ft,a as U,F as j,T as g,e as ve,L as gt,a6 as bt}from"./index-5dcf5472.js";import{b as yt,c as jt}from"./useProject-ac125dee.js";import{G as vt,f as We,e as ce,g as Ct,D as kt}from"./index.esm-8f302178.js";import{B as ze}from"./Bugs-1f55c8ff.js";import{E as _e}from"./Empty-be08d8eb.js";import{e as St,f as wt,M as Pt,b as Tt,c as It,d as Dt,N as de,g as Bt,h as Et,T as zt}from"./NormalTextField-dfcdeace.js";import{a as Ae,S as Z}from"./Skeleton-33f7bcf9.js";import{i as _t,m as ue,F as Qe,c as Ye,a as he,b as Xe,T as Je,B as H}from"./TextField-48ebbc10.js";import{l as At,k as Lt,F as Ce,U as Ft,e as le,d as ke,m as Mt,g as K,I as Ze}from"./useBugs-feb0087c.js";import{u as Se}from"./useToast-f9200fab.js";import{S as me,m as Nt,r as Rt,T as pe,a as xe,D as Ot,b as Kt,W as Le,P as Fe,c as Me,d as Ne,e as Re,f as Oe,g as Ke,A as $t}from"./AvatarChip-8284511c.js";import{B as E}from"./chunk-6CSUKJP7-77e68efb.js";import{g as Ut,a as et,l as Gt}from"./index-7a9b0291.js";import{a as te,u as tt}from"./axios-8ed68b65.js";function Vt(t){const{value:s,defaultValue:n,onChange:o,shouldUpdate:r=(f,S)=>f!==S}=t,a=O(o),l=O(r),[c,p]=m.useState(n),d=s!==void 0,u=d?s:c,b=O(f=>{const x=typeof f=="function"?f(u):f;l(u,x)&&(d||p(x),a(x))},[d,a,u,l]);return[u,b]}var[ns,Ht]=ee({name:"CheckboxGroupContext",strict:!1});function qt(t){return e.jsx(_.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...t,children:e.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function Wt(t){return e.jsx(_.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...t,children:e.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Qt(t){const{isIndeterminate:s,isChecked:n,...o}=t,r=s?Wt:qt;return n||s?e.jsx(_.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsx(r,{...o})}):null}var Yt={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},$e=!1,q=null,M=!1,fe=!1,ge=new Set;function we(t,s){ge.forEach(n=>n(t,s))}var Xt=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function Jt(t){return!(t.metaKey||!Xt&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function Ue(t){M=!0,Jt(t)&&(q="keyboard",we("keyboard",t))}function R(t){if(q="pointer",t.type==="mousedown"||t.type==="pointerdown"){M=!0;const s=t.composedPath?t.composedPath()[0]:t.target;let n=!1;try{n=s.matches(":focus-visible")}catch{}if(n)return;we("pointer",t)}}function Zt(t){return t.mozInputSource===0&&t.isTrusted?!0:t.detail===0&&!t.pointerType}function en(t){Zt(t)&&(M=!0,q="virtual")}function tn(t){t.target===window||t.target===document||(!M&&!fe&&(q="virtual",we("virtual",t)),M=!1,fe=!1)}function nn(){M=!1,fe=!0}function Ge(){return q!=="pointer"}function sn(){if(typeof window>"u"||$e)return;const{focus:t}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){M=!0,t.apply(this,n)},document.addEventListener("keydown",Ue,!0),document.addEventListener("keyup",Ue,!0),document.addEventListener("click",en,!0),window.addEventListener("focus",tn,!0),window.addEventListener("blur",nn,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",R,!0),document.addEventListener("pointermove",R,!0),document.addEventListener("pointerup",R,!0)):(document.addEventListener("mousedown",R,!0),document.addEventListener("mousemove",R,!0),document.addEventListener("mouseup",R,!0)),$e=!0}function on(t){sn(),t(Ge());const s=()=>t(Ge());return ge.add(s),()=>{ge.delete(s)}}function rn(t,s=[]){const n=Object.assign({},t);for(const o of s)o in n&&delete n[o];return n}function an(t={}){const s=_t(t),{isDisabled:n,isReadOnly:o,isRequired:r,isInvalid:a,id:l,onBlur:c,onFocus:p,"aria-describedby":d}=s,{defaultChecked:u,isChecked:b,isFocusable:f,onChange:S,isIndeterminate:x,name:w,value:i,tabIndex:C=void 0,"aria-label":v,"aria-labelledby":k,"aria-invalid":y,...I}=t,D=rn(I,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),z=O(S),G=O(c),W=O(p),[Q,lt]=m.useState(!1),[V,Y]=m.useState(!1),[oe,Pe]=m.useState(!1),[re,N]=m.useState(!1);m.useEffect(()=>on(lt),[]);const A=m.useRef(null),[Te,ct]=m.useState(!0),[dt,X]=m.useState(!!u),ae=b!==void 0,B=ae?b:dt,Ie=m.useCallback(h=>{if(o||n){h.preventDefault();return}ae||X(B?h.target.checked:x?!0:h.target.checked),z==null||z(h)},[o,n,B,ae,x,z]);ie(()=>{A.current&&(A.current.indeterminate=Boolean(x))},[x]),xt(()=>{n&&Y(!1)},[n,Y]),ie(()=>{const h=A.current;h!=null&&h.form&&(h.form.onreset=()=>{X(!!u)})},[]);const De=n&&!f,Be=m.useCallback(h=>{h.key===" "&&N(!0)},[N]),Ee=m.useCallback(h=>{h.key===" "&&N(!1)},[N]);ie(()=>{if(!A.current)return;A.current.checked!==B&&X(A.current.checked)},[A.current]);const ut=m.useCallback((h={},L=null)=>{const F=J=>{V&&J.preventDefault(),N(!0)};return{...h,ref:L,"data-active":P(re),"data-hover":P(oe),"data-checked":P(B),"data-focus":P(V),"data-focus-visible":P(V&&Q),"data-indeterminate":P(x),"data-disabled":P(n),"data-invalid":P(a),"data-readonly":P(o),"aria-hidden":!0,onMouseDown:T(h.onMouseDown,F),onMouseUp:T(h.onMouseUp,()=>N(!1)),onMouseEnter:T(h.onMouseEnter,()=>Pe(!0)),onMouseLeave:T(h.onMouseLeave,()=>Pe(!1))}},[re,B,n,V,Q,oe,x,a,o]),ht=m.useCallback((h={},L=null)=>({...D,...h,ref:ue(L,F=>{F&&ct(F.tagName==="LABEL")}),onClick:T(h.onClick,()=>{var F;Te||((F=A.current)==null||F.click(),requestAnimationFrame(()=>{var J;(J=A.current)==null||J.focus()}))}),"data-disabled":P(n),"data-checked":P(B),"data-invalid":P(a)}),[D,n,B,a,Te]),mt=m.useCallback((h={},L=null)=>({...h,ref:ue(A,L),type:"checkbox",name:w,value:i,id:l,tabIndex:C,onChange:T(h.onChange,Ie),onBlur:T(h.onBlur,G,()=>Y(!1)),onFocus:T(h.onFocus,W,()=>Y(!0)),onKeyDown:T(h.onKeyDown,Be),onKeyUp:T(h.onKeyUp,Ee),required:r,checked:B,disabled:De,readOnly:o,"aria-label":v,"aria-labelledby":k,"aria-invalid":y?Boolean(y):a,"aria-describedby":d,"aria-disabled":n,style:Yt}),[w,i,l,Ie,G,W,Be,Ee,r,B,De,o,v,k,y,a,d,n,C]),pt=m.useCallback((h={},L=null)=>({...h,ref:L,onMouseDown:T(h.onMouseDown,Ve),onTouchStart:T(h.onTouchStart,Ve),"data-disabled":P(n),"data-checked":P(B),"data-invalid":P(a)}),[B,n,a]);return{state:{isInvalid:a,isFocused:V,isChecked:B,isActive:re,isHovered:oe,isIndeterminate:x,isDisabled:n,isReadOnly:o,isRequired:r},getRootProps:ht,getCheckboxProps:ut,getInputProps:mt,getLabelProps:pt,htmlProps:D}}function Ve(t){t.preventDefault(),t.stopPropagation()}var ln={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},cn={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},dn=je({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),un=je({from:{opacity:0},to:{opacity:1}}),hn=je({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),nt=$(function(s,n){const o=Ht(),r={...o,...s},a=He("Checkbox",r),l=qe(s),{spacing:c="0.5rem",className:p,children:d,iconColor:u,iconSize:b,icon:f=e.jsx(Qt,{}),isChecked:S,isDisabled:x=o==null?void 0:o.isDisabled,onChange:w,inputProps:i,...C}=l;let v=S;o!=null&&o.value&&l.value&&(v=o.value.includes(l.value));let k=w;o!=null&&o.onChange&&l.value&&(k=ft(o.onChange,w));const{state:y,getInputProps:I,getCheckboxProps:D,getLabelProps:z,getRootProps:G}=an({...C,isDisabled:x,isChecked:v,onChange:k}),W=m.useMemo(()=>({animation:y.isIndeterminate?`${un} 20ms linear, ${hn} 200ms linear`:`${dn} 200ms linear`,fontSize:b,color:u,...a.icon}),[u,b,,y.isIndeterminate,a.icon]),Q=m.cloneElement(f,{__css:W,isIndeterminate:y.isIndeterminate,isChecked:y.isChecked});return e.jsxs(_.label,{__css:{...cn,...a.container},className:U("chakra-checkbox",p),...G(),children:[e.jsx("input",{className:"chakra-checkbox__input",...I(i,n)}),e.jsx(_.span,{__css:{...ln,...a.control},className:"chakra-checkbox__control",...D(),children:Q}),d&&e.jsx(_.span,{className:"chakra-checkbox__label",...z(),__css:{marginStart:c,...a.label},children:d})]})});nt.displayName="Checkbox";var[mn,pn,xn,fn]=St();function gn(t){var s;const{defaultIndex:n,onChange:o,index:r,isManual:a,isLazy:l,lazyBehavior:c="unmount",orientation:p="horizontal",direction:d="ltr",...u}=t,[b,f]=m.useState(n??0),[S,x]=Vt({defaultValue:n??0,value:r,onChange:o});m.useEffect(()=>{r!=null&&f(r)},[r]);const w=xn(),i=m.useId();return{id:`tabs-${(s=t.id)!=null?s:i}`,selectedIndex:S,focusedIndex:b,setSelectedIndex:x,setFocusedIndex:f,isManual:a,isLazy:l,lazyBehavior:c,orientation:p,descendants:w,direction:d,htmlProps:u}}var[bn,ne]=ee({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function yn(t){const{focusedIndex:s,orientation:n,direction:o}=ne(),r=pn(),a=m.useCallback(l=>{const c=()=>{var v;const k=r.nextEnabled(s);k&&((v=k.node)==null||v.focus())},p=()=>{var v;const k=r.prevEnabled(s);k&&((v=k.node)==null||v.focus())},d=()=>{var v;const k=r.firstEnabled();k&&((v=k.node)==null||v.focus())},u=()=>{var v;const k=r.lastEnabled();k&&((v=k.node)==null||v.focus())},b=n==="horizontal",f=n==="vertical",S=l.key,x=o==="ltr"?"ArrowLeft":"ArrowRight",w=o==="ltr"?"ArrowRight":"ArrowLeft",C={[x]:()=>b&&p(),[w]:()=>b&&c(),ArrowDown:()=>f&&c(),ArrowUp:()=>f&&p(),Home:d,End:u}[S];C&&(l.preventDefault(),C(l))},[r,s,n,o]);return{...t,role:"tablist","aria-orientation":n,onKeyDown:T(t.onKeyDown,a)}}function jn(t){const{isDisabled:s,isFocusable:n,...o}=t,{setSelectedIndex:r,isManual:a,id:l,setFocusedIndex:c,selectedIndex:p}=ne(),{index:d,register:u}=fn({disabled:s&&!n}),b=d===p,f=()=>{r(d)},S=()=>{c(d),!a&&!(s&&n)&&r(d)},x=wt({...o,ref:ue(u,t.ref),isDisabled:s,isFocusable:n,onClick:T(t.onClick,f)}),w="button";return{...x,id:st(l,d),role:"tab",tabIndex:b?0:-1,type:w,"aria-selected":b,"aria-controls":ot(l,d),onFocus:s?void 0:T(t.onFocus,S)}}var[vn,Cn]=ee({});function kn(t){const s=ne(),{id:n,selectedIndex:o}=s,a=Ut(t.children).map((l,c)=>m.createElement(vn,{key:c,value:{isSelected:c===o,id:ot(n,c),tabId:st(n,c),selectedIndex:o}},l));return{...t,children:a}}function Sn(t){const{children:s,...n}=t,{isLazy:o,lazyBehavior:r}=ne(),{isSelected:a,id:l,tabId:c}=Cn(),p=m.useRef(!1);a&&(p.current=!0);const d=At({wasSelected:p.current,isSelected:a,enabled:o,mode:r});return{tabIndex:0,...n,children:d?s:null,role:"tabpanel","aria-labelledby":c,hidden:!a,id:l}}function st(t,s){return`${t}--tab-${s}`}function ot(t,s){return`${t}--tabpanel-${s}`}var[wn,se]=ee({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),rt=$(function(s,n){const o=He("Tabs",s),{children:r,className:a,...l}=qe(s),{htmlProps:c,descendants:p,...d}=gn(l),u=m.useMemo(()=>d,[d]),{isFitted:b,...f}=c;return e.jsx(mn,{value:p,children:e.jsx(bn,{value:u,children:e.jsx(wn,{value:o,children:e.jsx(_.div,{className:U("chakra-tabs",a),ref:n,...f,__css:o.root,children:r})})})})});rt.displayName="Tabs";var at=$(function(s,n){const o=yn({...s,ref:n}),a={display:"flex",...se().tablist};return e.jsx(_.div,{...o,className:U("chakra-tabs__tablist",s.className),__css:a})});at.displayName="TabList";var be=$(function(s,n){const o=Sn({...s,ref:n}),r=se();return e.jsx(_.div,{outline:"0",...o,className:U("chakra-tabs__tab-panel",s.className),__css:r.tabpanel})});be.displayName="TabPanel";var it=$(function(s,n){const o=kn(s),r=se();return e.jsx(_.div,{...o,width:"100%",ref:n,className:U("chakra-tabs__tab-panels",s.className),__css:r.tabpanels})});it.displayName="TabPanels";var ye=$(function(s,n){const o=se(),r=jn({...s,ref:n}),a={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...o.tab};return e.jsx(_.button,{...r,className:U("chakra-tabs__tab",s.className),__css:a})});ye.displayName="Tab";function Pn(t){return vt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(t)}function Tn({isOpen:t,onClose:s,project:n}){const o={title:""},[r,a]=m.useState(null),[l,c]=m.useState(0),{successToast:p,errorToast:d}=Se(),[u,b]=m.useState(`### Bug Description

### Steps to Reproduce
1. 
2. 
3. 
### Expected Output

### Actual Output

`),{mutateAsync:f}=Lt();function S(i,{setSubmitting:C}){let v=n.Kanban.Board.filter(y=>y.title==="Backlog")[0].id,k={title:i.title,projectId:n.id,description:u,priority:l,categoryId:r,boardId:v};f(k,{onSuccess:()=>{p(`Bug ${i.title} created successfully`)},onError:()=>{d("Error creating bug")}}),C(!1),s()}const x=i=>{if(i.target.value==="")return a(null);a(i.target.value)},w=i=>{c(i.target.value)};return e.jsx(Ce,{isOpen:t,onClose:s,header:"Create New Bug",children:e.jsx(Qe,{initialValues:o,onSubmit:S,validationSchema:Ye({title:he().required("Bug Title is required")}),children:({isSubmitting:i})=>e.jsx(Xe,{children:e.jsxs(j,{flexDirection:"column",gap:"5",maxWidth:"900px",children:[e.jsx(Je,{type:"text",name:"title",label:"Bug Title",width:"500px",placeholder:"Enter a short yet descriptive title for the bug"}),e.jsxs(j,{align:"center",gap:"3",children:[e.jsxs(E,{children:[e.jsx(g,{children:"Assign Category"}),e.jsxs(me,{name:"categoryId",fontSize:"sm",width:"250px",onChange:x,children:[e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:"",children:"Assign Category for bug"}),n.Category.map(C=>e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:C.id,children:C.title},C.id))]})]}),e.jsxs(E,{children:[e.jsx(g,{children:"Set Priority"}),e.jsxs(me,{name:"pririty",fontSize:"sm",width:"250px",onChange:w,children:[e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:0,children:"Low"}),e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:1,children:"High"}),e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:2,children:"Critical"})]})]})]}),e.jsxs(E,{children:[e.jsx(g,{children:"Bug Description"}),e.jsxs(g,{fontSize:"sm",color:"primary.200",children:["A Good Bug description should include:",e.jsxs(Ft,{children:[e.jsx(le,{children:"Detailed description of the bug"}),e.jsx(le,{children:"Steps to reproduce the behaviour"}),e.jsx(le,{children:"Expected vs Actual output"})]})]})]}),e.jsx(E,{width:"900px",children:e.jsx(Nt,{"data-color-mode":"dark",value:u,onChange:b,height:500,previewOptions:{rehypePlugins:[Rt]},preview:"edit"})}),e.jsxs(j,{gap:"1",children:[e.jsx(g,{fontSize:"sm",color:"primary.200",children:"You are creating this bug on Project"}),e.jsxs(g,{fontSize:"sm",fontWeight:"bold",children:[": ",n.title]})]}),e.jsx(H,{disabled:i,type:"submit",colorScheme:"brand",fontSize:"md",size:"md",children:"Submit"})]})})})})}async function In(){return await te.get("/api/v1/github/repo",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})}async function Dn({repo:t}){return await te.get(`/api/v1/github/issue/${t}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})}const Bn=()=>et(["repos"],()=>In()),En=t=>et(["issues",t],()=>Dn(t),{enabled:t.enabled});function zn({isOpen:t,onClose:s,pid:n,project:o}){var k;const[r,a]=m.useState(null),[l,c]=m.useState(null),p=ke(y=>y.user),d=Bn(),u=ve(),b=Mt(),{successToast:f,errorToast:S}=Se(),x=En({repo:r,enabled:r!==null}),w=y=>{y.target.value!=="none"&&(a(y.target.value),c(null),Promise.all([u.invalidateQueries(["repos"]),u.invalidateQueries(["issues"])]))},i=(y,I)=>{c(D=>({...D,[I.title]:{checked:y.target.checked,title:I.title,description:I.body===null?"":I.body}}))},C=y=>{if(y.preventDefault(),l===null){S("No Issues Selected");return}let I=o.Kanban.Board.filter(z=>z.title==="Backlog")[0].id,D=[];Object.keys(l).map((z,G)=>{l[z].checked&&D.push({projectId:n,title:l[z].title,description:l[z].description,boardId:I})}),b.mutateAsync({pid:n,payload:D},{onSuccess:()=>{f("All Bugs imported Successfully"),s()}})},v=()=>{};return e.jsx(Ce,{isOpen:t,onClose:s,header:"Import Issues from Github",children:p!=null&&p.Github?e.jsxs(j,{flexDir:"column",gap:"5",maxWidth:"900px",marginTop:"5",children:[e.jsxs(E,{children:[e.jsx(g,{color:"primary.200",size:"sm",marginBottom:"5px",children:"Select Repository"}),e.jsxs(me,{name:"repo",fontSize:"sm",width:"600px",onChange:w,children:[e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:"none",children:"Select your repo"}),d.data&&d.data.data.items.map((y,I)=>e.jsx("option",{value:y.name,style:{backgroundColor:"black",color:"white"},children:y.full_name},I))]})]}),e.jsxs(E,{children:[e.jsx(g,{color:"primary.200",size:"sm",marginBottom:"5px",children:"Select all Issues that you want to import"}),r===null?e.jsx(j,{flexDir:"column",gap:"2",border:"1px solid gray",rounded:"10",padding:"10px",borderStyle:"dotted",height:"500px",maxHeight:"500px",overflowY:"auto",justify:"center",align:"center",children:e.jsx(g,{color:"primary.200",children:"Select a repository"})}):e.jsx(j,{flexDir:"column",gap:"2",border:"1px solid gray",rounded:"10",padding:"10px",borderStyle:"dotted",height:"500px",maxHeight:"500px",overflowY:"auto",children:x.isLoading?e.jsx(gt,{}):x.data&&((k=x.data)==null?void 0:k.data.length)>0?x.data.data.map((y,I)=>e.jsx(nt,{colorScheme:"brand",onChange:D=>i(D,y),children:e.jsx(g,{fontSize:"sm",children:y.title})},I)):e.jsx(g,{color:"primary.200",children:"No Issues found"})})]}),e.jsx(H,{type:"submit",colorScheme:"brand",fontSize:"md",size:"md",onClick:C,children:"Import"})]}):e.jsxs(j,{align:"center",justify:"center",height:"90vh",width:"full",children:[e.jsx(H,{bg:"primary.500",_hover:{bg:"primary.900"},leftIcon:e.jsx(We,{}),onClick:v,width:"200px",children:"Connect Github"})," "]})})}function _n({isLoading:t,project:s}){const n=K(),o=K();return e.jsxs(e.Fragment,{children:[e.jsx(Tn,{isOpen:n.isOpen,onClose:n.onClose,project:s}),e.jsx(zn,{project:s,isOpen:o.isOpen,onClose:o.onClose,pid:s.id}),e.jsxs(E,{rounded:10,width:"full",children:[e.jsxs(j,{justify:"space-between",margin:"10px",children:[e.jsx(g,{fontSize:"xl",children:"BUGS"}),e.jsxs(j,{align:"center",gap:"3",children:[e.jsxs(Pt,{children:[e.jsx(Tt,{children:e.jsx(Ze,{bg:"primary.900",color:"primary.100",icon:e.jsx(Pn,{}),"aria-label":"bug-menu",_hover:{bg:"primary.800"}})}),e.jsx(It,{bg:"primary.700",border:"none",children:e.jsx(Dt,{color:"primary.100",bg:"primary.700",_hover:{bg:"brand.500"},icon:e.jsx(We,{size:"20"}),onClick:o.onOpen,children:"Import from Github"})})]}),e.jsx(H,{leftIcon:e.jsx(ce,{}),colorScheme:"brand",fontSize:"sm",size:"sm",onClick:n.onOpen,children:"Create New"})]})]}),e.jsx(E,{margin:"10px",children:e.jsx(de,{placeholder:"Search in this project",size:"md"})}),e.jsxs(rt,{isFitted:!0,size:"sm",variant:"soft-rounded",children:[e.jsxs(at,{children:[e.jsx(ye,{_selected:{bg:"green.500",color:"white"},children:"Open"}),e.jsx(ye,{_selected:{bg:"red.500",color:"white"},children:"Closed"})]}),e.jsxs(it,{children:[e.jsx(be,{children:e.jsx(Ae,{direction:"column",spacing:"4",padding:"10px",children:t?e.jsx(Z,{height:"40px"}):s.Bug.length>0?s.Bug.map(r=>r.status==="Open"&&e.jsx(ze,{projectTitle:s.title,author:r.User.username,...r},r.id)):e.jsx(_e,{message:"Create a new bug to get started!"})})}),e.jsx(be,{children:e.jsx(Ae,{direction:"column",spacing:"4",padding:"10px",children:t?e.jsx(Z,{height:"40px"}):s.Bug.length>0?s.Bug.map(r=>r.status==="Closed"&&e.jsx(ze,{projectTitle:s.title,author:r.User.username,...r},r.id)):e.jsx(_e,{message:"Create a new bug to get started!"})})})]})]})]})]})}function An({key:t,label:s,onDelete:n,colorScheme:o,isOwner:r=!0}){const{isOpen:a,onClose:l,onOpen:c}=K();return e.jsxs(pe,{size:"lg",borderRadius:"full",variant:"solid",colorScheme:o,children:[e.jsx(xe,{children:s}),r&&e.jsx(Ot,{isOpen:a,onClose:l,onConfirm:n,children:e.jsx(Kt,{onClick:c})})]},t)}async function Ln(t){const{data:s}=await te.post(`/api/v1/categories/${t.pid}`,{title:t.title},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return s}async function Fn(t){const{data:s}=await te.delete(`/api/v1/categories/${t}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return s}const Mn=()=>{const t=ve();return tt(Fn,{onSuccess:(s,n,o)=>{t.invalidateQueries(["project",n])}})},Nn=()=>{const t=ve();return tt(Ln,{onSuccess:(s,n)=>{t.invalidateQueries(["project",s.projectId])}})};function Rn({categories:t,teams:s,pid:n,isOwner:o}){const r=K(),a=K();let l=Gt("ws://localhost:3030");const c=ke(i=>i.user),p=Nn(),d=Mn(),u=Bt(),b=Et(),f=i=>{i.key==="Enter"&&i.target.value!==""&&(p.mutateAsync({pid:n,title:i.target.value}),r.onClose(),i.target.value="")},S=i=>{d.mutateAsync(i)},x=i=>{i.key==="Enter"&&i.target.value!==""&&(u.mutateAsync({pid:n,email:i.target.value},{onSuccess:C=>{let v={...C,From:{id:c==null?void 0:c.id,username:c==null?void 0:c.username}};l.emit("TEAM_ADD",v)}}),a.onClose(),i.target.value="")},w=i=>{b.mutateAsync(i)};return e.jsxs(E,{children:[e.jsx(j,{flexDir:"column",align:"center",children:e.jsxs(j,{width:"30em",flexDir:"column",gap:"5",children:[e.jsx(g,{fontSize:"2xl",children:"Project Settings"}),e.jsxs(E,{children:[e.jsx(g,{fontSize:"xl",children:"Categories"}),e.jsx(g,{fontSize:"sm",color:"primary.200",children:"Create multiple categories that can represents your team roles or bugs categories"})]}),e.jsxs(Le,{children:[t.length>0&&t.map((i,C)=>e.jsx(An,{isOwner:o,label:i.title,onDelete:()=>{S(i.id)},colorScheme:"brand"},C)),o&&e.jsxs(Fe,{isOpen:r.isOpen,onClose:r.onClose,placement:"bottom",children:[e.jsx(Me,{children:e.jsxs(pe,{size:"lg",variant:"subtle",colorScheme:"gray",borderRadius:"full",_hover:{cursor:"pointer"},onClick:r.onOpen,children:[e.jsx(Ne,{boxSize:"12px",as:ce}),e.jsx(xe,{children:"Add"})]},"sm")}),e.jsxs(Re,{bg:"primary.900",border:"none",children:[e.jsx(Oe,{}),e.jsxs(Ke,{as:j,flexDir:"column",gap:"3",children:[e.jsx(g,{children:"Category Title"}),e.jsx(de,{type:"text",placeholder:"Enter category name",onKeyDown:f})]})]})]})]})]})}),e.jsx(j,{flexDir:"column",align:"center",marginTop:"50px",children:e.jsxs(j,{width:"30em",flexDir:"column",gap:"5",children:[e.jsxs(E,{children:[e.jsx(g,{fontSize:"xl",children:"Teams"}),e.jsx(g,{fontSize:"sm",color:"primary.200",children:"Add members to your project team"})]}),e.jsxs(Le,{children:[s.length>0&&s.map((i,C)=>e.jsx($t,{status:i.status,isOwner:o,label:i.User.username,src:i.src,onDelete:()=>{w(i.id)}},C)),o&&e.jsxs(Fe,{isOpen:a.isOpen,onClose:a.onClose,placement:"bottom",children:[e.jsx(Me,{children:e.jsxs(pe,{size:"lg",variant:"subtle",colorScheme:"gray",borderRadius:"full",_hover:{cursor:"pointer"},onClick:a.onOpen,children:[e.jsx(Ne,{boxSize:"12px",as:ce}),e.jsx(xe,{children:"Add"})]},"sm")}),e.jsxs(Re,{bg:"primary.900",border:"none",children:[e.jsx(Oe,{}),e.jsxs(Ke,{as:j,flexDir:"column",gap:"3",children:[e.jsx(g,{children:"Team"}),e.jsx(de,{type:"text",placeholder:"Enter email address of the User",onKeyDown:x})]})]})]})]})]})})]})}function On({isOpen:t,onClose:s,data:n}){const{mutateAsync:o,isLoading:r,isSuccess:a,isError:l}=yt(),c={title:n==null?void 0:n.title,description:n==null?void 0:n.description},{successToast:p,errorToast:d}=Se();function u(b,{setSubmitting:f}){let S={pid:n.id,values:b};o(S),a&&(p("Project created successfully"),f(!1)),l&&d("Something went wrong!"),s()}return e.jsx(Ce,{isOpen:t,onClose:s,header:"Edit Project",children:e.jsx(Qe,{initialValues:c,onSubmit:u,validationSchema:Ye({title:he().required("Project name is required"),description:he().required("Project description is required")}),children:({isSubmitting:b})=>e.jsx(Xe,{children:e.jsxs(j,{flexDirection:"column",gap:"5",children:[e.jsx(Je,{type:"text",name:"title",label:"Project Name",width:"600px",placeholder:"Enter project name"}),e.jsx(zt,{name:"description",label:"Project Description",placeholder:"Enter short project description"}),e.jsx(H,{disabled:r,type:"submit",colorScheme:"brand",fontSize:"md",size:"md",children:"Submit"})]})})})})}function ss({}){const t=K(),{id:s}=bt(),{data:n,isLoading:o,isError:r}=jt(Number(s)),a=ke(u=>u.user),l=(n==null?void 0:n.ownerId)===(a==null?void 0:a.id),c=n==null?void 0:n.Bug.filter(u=>u.priority===2).length,p=n==null?void 0:n.Bug.filter(u=>u.priority===1).length,d=n==null?void 0:n.Bug.filter(u=>u.priority===0).length;return e.jsxs(j,{flexDir:"column",gap:"10",children:[e.jsx(On,{isOpen:t.isOpen,onClose:t.onClose,data:n}),e.jsx(E,{bg:"brand.800",children:o?e.jsx(Z,{height:"50px"}):!r&&e.jsxs(j,{align:"center",justify:"space-between",height:200,children:[e.jsxs(j,{margin:"100px",flexDir:"column",children:[e.jsxs(j,{gap:"3",align:"center",children:[e.jsx(g,{fontSize:"4xl",children:n.title}),e.jsx(Ze,{icon:e.jsx(Ct,{}),bg:"none",color:"primary.100",_hover:{bg:"none",color:"primary.300"},"aria-label":"edit-btn",onClick:t.onOpen})]}),e.jsx(g,{fontSize:"sm",children:n.description})]}),e.jsxs(j,{margin:"100px",gap:"10",children:[e.jsxs(j,{align:"center",flexDir:"column",children:[e.jsx(g,{fontSize:"",color:"primary.100",children:"Critical"}),e.jsx(g,{fontSize:"5xl",color:"red.500",children:c})]}),e.jsxs(j,{align:"center",flexDir:"column",children:[e.jsx(g,{fontSize:"",color:"primary.100",children:"High"}),e.jsx(g,{fontSize:"5xl",color:"orange.300",children:p})]}),e.jsxs(j,{align:"center",flexDir:"column",children:[e.jsx(g,{fontSize:"",color:"primary.100",children:"Low"}),e.jsx(g,{fontSize:"5xl",color:"gray.300",children:d})]})]})]})}),e.jsx(j,{gap:"5",children:o?e.jsx(Z,{height:"50px"}):e.jsxs(e.Fragment,{children:[e.jsx(_n,{isLoading:o,project:n}),e.jsx(kt,{orientation:"vertical",height:"50vh"}),e.jsx(Rn,{categories:n.Category,teams:n.Member,pid:n.id,isOwner:l})]})})]})}export{ss as default};
