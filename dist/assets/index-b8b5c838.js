import{f as Z,j as e,c as b,a as A,u as M,r as g,F as i,T as c,b as _,N as v,O as J,L as ee}from"./index-12b8f366.js";import{I as N,F,W as te,u as P,a as I,L as E,b as O,c as D,d as se}from"./useBugs-a8b3d017.js";import{a as y,u as B}from"./axios-2060c07b.js";import{u as re,a as R,l as ae,A as j}from"./index-93da6da0.js";import{u as S}from"./useToast-d182850c.js";import{h as ie,E as W}from"./Empty-40b4891d.js";import{G as $,F as oe,D as ne,a as ce,b as le,c as de,d as he,e as me}from"./index.esm-0ae0450b.js";import{u as pe,a as ue,M as H,b as U,c as Q,T as xe,d as ge,e as fe,f as je,g as ve,h as L,i as ye,N as C}from"./NormalTextField-e7364d49.js";import{B as w,F as Se,c as be,a as T,b as we,T as ze}from"./TextField-4ef5a4c0.js";import{B as f}from"./chunk-6CSUKJP7-a0ee61da.js";import{u as ke,a as Ne}from"./useProject-8e69bbe0.js";import{S as q,a as Le}from"./Skeleton-3606423e.js";import{T as G}from"./chunk-OMHV467B-78b14db0.js";import{I as Ce}from"./chunk-E77276RR-10c133fe.js";import"./index-db5668cd.js";var Te={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},Y=Z(function(t,a){const{placement:r="bottom-end",className:o,...n}=t,l=re(),h={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...Te[r],...l.badge};return e.jsx(b.div,{ref:a,...n,className:A("chakra-avatar__badge",o),__css:h})});Y.displayName="AvatarBadge";var z=b("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});z.displayName="Spacer";var V=s=>{const{className:t,...a}=s,r=pe();return e.jsx(b.hr,{"aria-orientation":"horizontal",className:A("chakra-menu__divider",t),...a,__css:r.divider})};V.displayName="MenuDivider";async function Ae(){try{const{data:s}=await y.get("/api/v1/auth/@me",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return s}catch(s){return s.response}}const Me=()=>R(["auth"],()=>Ae()),_e=[{name:"Home",path:"/",access:["admin","user"]},{name:"Kanban",path:"/kanban",access:["admin","user"]}];function Fe(s){return $({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(s)}async function Pe(){const{data:s}=await y.get("/api/v1/notification",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return s}async function Ie(s){const{data:t}=await y.post(`/api/v1/notification/${s}`,{},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return t}const Ee=()=>R(["notification"],Pe),Oe=()=>{const s=M();return B(Ie,{onSuccess:()=>{Promise.all([s.invalidateQueries(["project"]),s.invalidateQueries(["notification"])])}})};function De({user:s}){let[t,a]=g.useState([]);const{data:r,isSuccess:o,isLoading:n}=Ee(),l=Oe(),m=ue();let h=null;const{successToast:u}=S();g.useEffect(()=>{o&&a(r)},[o,n]),g.useEffect(()=>{h=ae("ws://localhost:3030"),h.on("TEAM_ADD_RESPONSE",d=>{if(d.To.id!==(s==null?void 0:s.id))return;a([d,...t]);const x=new Audio("/bell.mp3");x.muted=!0,x.play()})},[h]);const p=(d,x,k)=>{l.mutateAsync(d,{onSuccess:X=>{a(t.filter(K=>K.id!==X.id)),u(k==="Accepted"?"Invitation Accepted":"Invitation Rejected")}}),m.mutateAsync({pid:x,status:k})};return e.jsxs(H,{children:[e.jsx(U,{children:e.jsx(j,{icon:e.jsx(oe,{}),bg:"primary.900",children:(t==null?void 0:t.some(d=>!d.read))&&e.jsx(Y,{boxSize:"1em",bg:"red.500",borderColor:"primary.900"})})}),e.jsx(Q,{bg:"primary.800",border:"none",width:"400px",maxHeight:"350px",height:"350px",children:e.jsxs(i,{padding:"10px",flexDir:"column",gap:"3",children:[e.jsx(c,{color:"primary.200",fontSize:"sm",children:"Notifications"}),e.jsx(ne,{}),(t==null?void 0:t.length)>0?t.slice(0,5).map((d,x)=>!d.read&&e.jsx(Be,{notification:d,updateNotification:p},x)):e.jsx(i,{height:"200px",align:"center",justify:"center",children:e.jsx(c,{color:"primary.200",children:"No New Notification"})})]})})]})}function Be({updateNotification:s,notification:t,props:a}){return e.jsx(i,{...a,flexDir:"column",padding:"10px",rounded:"10",gap:"2",bg:"primary.700",children:e.jsxs(i,{gap:"2",align:"center",children:[e.jsxs(c,{fontSize:"sm",children:[t.message,e.jsx(c,{color:"primary.200",children:ie(t.createdAt).fromNow()})]}),e.jsx(z,{}),e.jsx(N,{size:"sm",icon:e.jsx(ce,{}),"aria-label":"tick",variant:"outline",color:"green.500",_hover:{bg:"green.500",color:"white"},onClick:()=>s(t.id,t.target_id,"Accepted")}),e.jsx(N,{size:"sm",icon:e.jsx(Fe,{}),"aria-label":"tick",variant:"outline",color:"red.500",_hover:{bg:"red.500",color:"white"},onClick:()=>s(t.id,t.target_id,"Rejected")})]})})}function Re(s){return $({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}}]})(s)}async function We(s){const{data:t}=await y.put("/api/v1/auth/",{...s},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return t}const $e=()=>{const s=M();return B(We,{onSuccess:()=>{s.invalidateQueries(["auth"])}})};function He({isOpen:s,onClose:t,user:a}){const[r,o]=g.useState(""),{mutate:n}=$e(),{successToast:l}=S(),m=["https://wow.zamimg.com/uploads/screenshots/small/661495.jpg","https://wow.zamimg.com/uploads/screenshots/small/661500.jpg","https://wow.zamimg.com/uploads/screenshots/small/661523.jpg","https://wow.zamimg.com/uploads/screenshots/small/661530.jpg","https://wow.zamimg.com/uploads/screenshots/small/661526.jpg","https://wow.zamimg.com/uploads/screenshots/small/661521.jpg","https://wow.zamimg.com/uploads/screenshots/small/661506.jpg","https://wow.zamimg.com/uploads/screenshots/small/661502.jpg","https://wow.zamimg.com/uploads/screenshots/small/661503.jpg"],h=()=>{n({avatar:r},{onSuccess:()=>{l("Avatar Updated Successfully"),t()}})};return e.jsx(F,{isOpen:s,onClose:()=>{o(""),t()},header:"Settings",children:e.jsxs(xe,{orientation:"vertical",variant:"soft-rounded",children:[e.jsx(ge,{children:e.jsx(fe,{_selected:{color:"white",bg:"brand.500"},color:"primary.200",children:"Profile"})}),e.jsx(je,{children:e.jsx(ve,{maxWidth:"600px",children:e.jsxs(i,{flexDir:"column",gap:"5",children:[e.jsx(c,{fontSize:"2xl",children:"Avatar"}),e.jsx(j,{name:a.username,size:"lg",src:r||a.avatar}),e.jsx(c,{fontSize:"2xl",children:"Set New Avatar"}),e.jsx(te,{spacing:"30px",children:m.map((u,p)=>e.jsx(j,{size:"xl",src:u,_hover:{cursor:"pointer"},onClick:()=>o(u)},p))}),e.jsx(w,{fontSize:"sm",size:"sm",colorScheme:"brand",isDisabled:r==="",onClick:h,children:"Save"})]})})})]})})}function Ue({user:s,logout:t}){const{isOpen:a,onClose:r,onOpen:o}=P();return e.jsxs(e.Fragment,{children:[e.jsx(He,{isOpen:a,onClose:r,user:s}),e.jsxs(H,{offset:[30,20],children:[e.jsx(U,{children:e.jsx(j,{bg:"primary.100",color:"black",name:s==null?void 0:s.username,src:s==null?void 0:s.avatar,width:10,height:10})}),e.jsxs(Q,{bg:"primary.700",border:"none",children:[e.jsxs(i,{margin:"10px",gap:"2",children:[e.jsxs(c,{color:"primary.300",fontSize:"sm",children:["Signed in as:"," "]}),e.jsx(c,{color:"primary.100",fontSize:"sm",fontWeight:"bold",children:s==null?void 0:s.username})]}),e.jsx(V,{color:"brand.200"}),e.jsx(L,{color:"primary.100",bg:"primary.700",_hover:{bg:"brand.500"},icon:e.jsx(Re,{size:"20"}),onClick:o,children:"Setttings"}),e.jsx(L,{color:"primary.100",_hover:{bg:"brand.500"},bg:"primary.700",icon:e.jsx(le,{size:"20"}),onClick:t,children:"Log Out"})]})]})]})}function Qe({children:s}){const{successToast:t}=S(),a=I(n=>n.user),r=_(),o=()=>{localStorage.removeItem("token"),r("/login"),t("Logged out successfully!")};return e.jsxs(i,{direction:"column",width:"full",maxHeight:"100vh",overflowY:"auto",children:[e.jsx(f,{bgColor:"primary.800",height:"60px",padding:"10px",children:e.jsxs(i,{align:"center",gap:"5",children:[_e.map((n,l)=>e.jsx(v,{to:n.path,children:e.jsx(c,{fontSize:"sm",fontWeight:"bold",_hover:{color:"primary.200"},children:n.name})},l)),e.jsx(z,{}),e.jsxs(i,{marginRight:10,align:"center",gap:"3",children:[e.jsx(De,{user:a}),e.jsx(Ue,{user:a,logout:o})]})]})}),s]})}function qe({}){const{isLoading:s,data:t,isError:a}=ke();return e.jsx(E,{spacing:3,children:s?e.jsx(q,{height:"20px"}):!a&&t.length>0?t==null?void 0:t.map(r=>e.jsx(O,{fontWeight:"bold",_hover:{color:"purple.300"},children:e.jsx(v,{to:`/project/${r.id}`,children:e.jsx(G,{label:r.title,placement:"right",children:e.jsxs(i,{align:"center",gap:"2",children:[e.jsx(D,{as:de}),e.jsx(c,{fontSize:"sm",_hover:{color:"purple.300"},children:r.title})]})})})},r.id)):e.jsx(W,{message:"Create new projects to get started"})})}const Ge={0:{color:"gray.300",title:"Low"},1:{color:"orange.300",title:"High"},2:{color:"red.300",title:"Critical"}};function Ye({bugList:s}){return e.jsx(E,{spacing:3,children:s.map(t=>e.jsx(O,{fontWeight:"bold",children:e.jsx(v,{to:`/bugs/${t.id}`,children:e.jsxs(i,{align:"center",children:[e.jsx(D,{as:he,color:Ge[t.priority].color}),e.jsx(G,{label:t.title,placement:"right",children:e.jsxs(c,{_hover:{color:"purple.300"},fontSize:"sm",children:["#",t.id,"/",t.title.length>25?`${t.title.slice(0,24)}..`:t.title]})})]})})},t.id))})}function Ve({isOpen:s,onClose:t}){const{mutateAsync:a,isLoading:r,isSuccess:o,isError:n}=Ne(),l={title:"",description:""},{successToast:m,errorToast:h}=S();function u(p,{setSubmitting:d}){a(p),o&&(m(`Project ${p.title} created successfully`),d(!1)),n&&h("Something went wrong!"),t()}return e.jsx(F,{isOpen:s,onClose:t,header:"Create New Project",children:e.jsx(Se,{initialValues:l,onSubmit:u,validationSchema:be({title:T().required("Project name is required"),description:T().required("Project description is required")}),children:({isSubmitting:p})=>e.jsx(we,{children:e.jsxs(i,{flexDirection:"column",gap:"5",children:[e.jsx(ze,{type:"text",name:"title",label:"Project Name",width:"600px",placeholder:"Enter project name"}),e.jsx(ye,{name:"description",label:"Project Description",placeholder:"Enter short project description"}),e.jsx(w,{disabled:r,type:"submit",colorScheme:"brand",fontSize:"md",size:"md",children:"Submit"})]})})})})}function Xe({}){const s=P(),{data:t,isLoading:a,isError:r}=se();return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{onClose:s.onClose,isOpen:s.isOpen}),e.jsxs(i,{flexDirection:"column",width:"400px",bgColor:"primary.800",height:"100vh",padding:"20px",overflow:"hidden",children:[e.jsx(v,{to:"/",children:e.jsxs(i,{justifyContent:"center",alignItems:"center",children:[e.jsx(f,{boxSize:"30px",marginRight:"20px",children:e.jsx(Ce,{src:"/LogoNoBack.png",alt:"logo"})}),e.jsx(c,{color:"primary.100",fontWeight:"extrabold",fontSize:"2xl",letterSpacing:"4px",children:"BUGNET"})]})}),e.jsxs(i,{marginTop:"50px",gap:"5",flexDir:"column",children:[e.jsx(c,{fontWeight:"bold",color:"primary.200",children:"Assigned Bugs"}),e.jsx(C,{placeholder:"Search Bugs"}),e.jsx(f,{overflowY:"auto",overflowX:"hidden",padding:"5px",height:"300px",maxHeight:"300px",children:a?e.jsx(Le,{children:e.jsx(q,{height:"20px"})}):!r&&(t==null?void 0:t.length)>0?e.jsx(Ye,{bugList:t}):e.jsx(W,{message:"No Bugs assigned to you yet!"})})]}),e.jsxs(i,{marginTop:"50px",gap:"5",flexDir:"column",children:[e.jsxs(i,{justify:"space-between",align:"center",children:[e.jsx(c,{fontWeight:"bold",color:"primary.200",children:"Projects"}),e.jsx(w,{leftIcon:e.jsx(me,{}),colorScheme:"brand",fontSize:"sm",size:"sm",onClick:s.onOpen,children:"Create New"})]}),e.jsx(C,{placeholder:"Search Projects"}),e.jsx(f,{overflowY:"auto",overflowX:"hidden",padding:"5px",maxHeight:"300px",children:e.jsx(qe,{})})]})]})]})}function Ke({}){return e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(Xe,{}),e.jsx(Qe,{children:e.jsx(J,{})})]})})}function Ze(s,t){if(Object.is(s,t))return!0;if(typeof s!="object"||s===null||typeof t!="object"||t===null)return!1;if(s instanceof Map&&t instanceof Map){if(s.size!==t.size)return!1;for(const[r,o]of s)if(!Object.is(o,t.get(r)))return!1;return!0}if(s instanceof Set&&t instanceof Set){if(s.size!==t.size)return!1;for(const r of s)if(!t.has(r))return!1;return!0}const a=Object.keys(s);if(a.length!==Object.keys(t).length)return!1;for(let r=0;r<a.length;r++)if(!Object.prototype.hasOwnProperty.call(t,a[r])||!Object.is(s[a[r]],t[a[r]]))return!1;return!0}function ut({}){const s=I(m=>m.setUser,Ze),t=_(),{data:a,isLoading:r,isError:o,isSuccess:n,error:l}=Me();return o&&console.log(l.response.message),n&&((a==null?void 0:a.status)===401?(localStorage.removeItem("token"),t("/login")):s(a)),r?e.jsx(ee,{}):e.jsx(Ke,{})}export{ut as default};