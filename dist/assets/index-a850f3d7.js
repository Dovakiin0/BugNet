import{u as F,j as e,F as t,T as n,r as f,a7 as _,L as q,N as G}from"./index-edf1aac6.js";import{m as C,D as H,S as T,r as L,T as D,A as K,P as Y,c as J,d as X,a as Z,e as ee,f as se,g as re}from"./AvatarChip-0eaf0d0c.js";import{h as oe,i as te,g as ne,D as ie,e as ae}from"./index.esm-fdbff71f.js";import{u as I}from"./useToast-a4b8a2c8.js";import{u as U,a as E}from"./axios-bf91d915.js";import{a as le,b as ce}from"./useComments-6830dadf.js";import{u as O,I as N,j as de,F as ue,U as pe,b as P,a as ge,k as me,m as he,W as xe}from"./useBugs-1e4c3b2f.js";import{B as g}from"./chunk-6CSUKJP7-d42b8060.js";import{A as je,l as be}from"./index-4c505b39.js";import{F as fe,c as ye,a as Se,b as Ce,T as ve,B as S}from"./TextField-b8e4caf1.js";import"./index-71349aa2.js";async function ke(r){const{data:i}=await E.post("/api/v1/bugs/assignee",r,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return i}async function we(r){const{data:i}=await E.delete(`/api/v1/bugs/assignee/${r}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});return i}const Ae=()=>{const r=F();return U(ke,{onSuccess:(i,a)=>{Promise.all([r.invalidateQueries(["bugs",i.bugId]),r.invalidateQueries(["bugs","@me","assigned"])])}})},ze=()=>{const r=F();return U(we,{onSuccess:(i,a)=>{r.invalidateQueries(["bugs"])}})};function Be({comment:r,user:i}){const{isOpen:a,onClose:c,onOpen:d}=O(),{successToast:x}=I(),u=le(),j=m=>{u.mutateAsync(m,{onSuccess:()=>{x("Comment deleted successfully"),c()}})};return e.jsxs(g,{bg:"primary.800",padding:"20px",rounded:"10",gap:"5",children:[e.jsxs(t,{justify:"space-between",children:[e.jsx(g,{flexGrow:"1",children:e.jsx(C.Markdown,{wrapperElement:{"data-color-mode":"dark"},source:r.content,style:{whiteSpace:"pre-wrap",background:"none",color:"white"}},r.id)}),r.User.id===(i==null?void 0:i.id)&&e.jsx(t,{align:"center",flexDir:"column",children:e.jsx(H,{isOpen:a,onClose:()=>c(),onConfirm:()=>j(r.id),children:e.jsx(N,{"aria-label":"Delete",bg:"primary.800",color:"red.300",_hover:{bg:"primary.900"},icon:e.jsx(oe,{}),onClick:()=>d()})})})]}),e.jsxs(t,{gap:"3",align:"center",marginTop:"10px",children:[e.jsx(je,{src:r.User.avatar,name:r.User.username,size:"sm"}),e.jsx(n,{fontSize:"sm",children:r.User.username}),e.jsx(n,{color:"primary.200",fontSize:"sm",children:new Date(r.createdAt).toDateString()})]})]},r.id)}function De({isOpen:r,onClose:i,data:a}){const c={title:a.title},[d,x]=f.useState(a.categoryId),[u,j]=f.useState(a.priority),{successToast:m,errorToast:v}=I(),[y,k]=f.useState(a.description),{mutateAsync:s}=de();function w(l,{setSubmitting:h}){let z={id:a.id,title:l.title,description:y,priority:u,categoryId:d};s(z,{onSuccess:()=>{m("Bug updated successfully")},onError:()=>{v("Error updating bug")}}),h(!1),i()}const b=l=>{if(l.target.value==="")return x(null);x(l.target.value)},A=l=>{j(l.target.value)};return e.jsx(ue,{isOpen:r,onClose:i,header:"Edit Bug",children:e.jsx(fe,{initialValues:c,onSubmit:w,validationSchema:ye({title:Se().required("Bug Title is required")}),children:({isSubmitting:l})=>e.jsx(Ce,{children:e.jsxs(t,{flexDirection:"column",gap:"5",maxWidth:"900px",children:[e.jsx(ve,{type:"text",name:"title",label:"Bug Title",width:"500px",placeholder:"Enter a short yet descriptive title for the bug"}),e.jsxs(t,{align:"center",gap:"3",children:[e.jsxs(g,{children:[e.jsx(n,{children:"Assign Category"}),e.jsxs(T,{name:"categoryId",fontSize:"sm",width:"250px",onChange:b,defaultValue:d==null?void 0:d.toString(),children:[e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:"",children:"Assign Category for bug"}),a.Project.Category.map(h=>e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:h.id,children:h.title},h.id))]})]}),e.jsxs(g,{children:[e.jsx(n,{children:"Set Priority"}),e.jsxs(T,{name:"pririty",fontSize:"sm",width:"250px",onChange:A,defaultValue:u==null?void 0:u.toString(),children:[e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:0,children:"Low"}),e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:1,children:"High"}),e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:2,children:"Critical"})]})]})]}),e.jsxs(g,{children:[e.jsx(n,{children:"Bug Description"}),e.jsxs(n,{fontSize:"sm",color:"primary.200",children:["A Good Bug description should include:",e.jsxs(pe,{children:[e.jsx(P,{children:"Detailed description of the bug"}),e.jsx(P,{children:"Steps to reproduce the behaviour"}),e.jsx(P,{children:"Expected vs Actual output"})]})]})]}),e.jsx(g,{width:"900px",children:e.jsx(C,{"data-color-mode":"dark",value:y,onChange:k,height:500,previewOptions:{rehypePlugins:[L]},preview:"edit"})}),e.jsxs(t,{gap:"1",children:[e.jsx(n,{fontSize:"sm",color:"primary.200",children:"You are editing this bug on Project"}),e.jsxs(n,{fontSize:"sm",fontWeight:"bold",children:[": ",a.Project.title]})]}),e.jsx(S,{disabled:l,type:"submit",colorScheme:"brand",fontSize:"md",size:"md",children:"Submit"})]})})})})}function $e({}){var M;const r=O(),i=O();let a=be("ws://bugnet.onrender.com");const{id:c}=_(),[d,x]=f.useState(""),[u,j]=f.useState(null),m=ge(o=>o.user),v=ce(),y=Ae(),k=ze(),{data:s,isLoading:w}=me(Number(c)),{successToast:b,errorToast:A}=I(),{mutateAsync:l}=he(),h={0:{color:"gray.300",title:"Low"},1:{color:"orange.300",title:"High"},2:{color:"red.300",title:"Critical"}},z=o=>{if(o.target.value==="")return j(null);j(Number(o.target.value))},R=()=>{if(u!==null){let o={bugId:Number(c),memberId:u};y.mutateAsync(o,{onSuccess:()=>{b("Member assigned successfully"),r.onClose()},onError:({response:p})=>{A(p.data.message)}})}},$=o=>{k.mutateAsync(o,{onSuccess:()=>{b("Member removed successfully")}})},Q=()=>{let o={bid:Number(c),content:d};v.mutateAsync(o,{onSuccess:p=>{a.emit("COMMENT",p)}}),x("")},V=()=>{let o=s.Board.Kanban.Board.filter(B=>B.title==="Backlog")[0].id,p=s.Board.Kanban.Board.filter(B=>B.title==="Completed")[0].id,W={id:c,status:s.status==="Open"?"Closed":"Open",boardId:s.status==="Open"?p:o};l(W,{onSuccess:()=>{b("Bug Updated Successfully")}})};return e.jsx(t,{flexDir:"column",children:w?e.jsx(q,{}):e.jsxs(e.Fragment,{children:[e.jsx(De,{isOpen:i.isOpen,onClose:i.onClose,data:s}),e.jsx(g,{bg:"brand.800",padding:"30px",children:e.jsx(t,{flexDir:"column",children:e.jsx(G,{to:`/project/${s.Project.id}`,children:e.jsxs(t,{align:"center",gap:"3",children:[e.jsx(te,{}),e.jsx(n,{fontSize:"2xl",children:s.Project.title})]})})})}),e.jsxs(t,{padding:"50px",flexDir:"column",children:[e.jsxs(t,{align:"center",gap:"3",children:[e.jsxs(n,{fontSize:"4xl",color:"primary.200",children:["#",s.id]}),e.jsxs(t,{gap:"3",align:"center",children:[e.jsx(n,{fontSize:"4xl",children:s.title}),e.jsx(N,{icon:e.jsx(ne,{}),"aria-label":"bug-edit-btn",bg:"primary.900",color:"primary.100",_hover:{bg:"primary.800",color:"primary.200"},onClick:i.onOpen})]})]}),e.jsxs(t,{gap:"3",align:"center",children:[e.jsx(n,{fontSize:"lg",color:"primary.200",children:"Opened by :"}),e.jsx(n,{fontSize:"lg",children:s.User.username}),e.jsx(n,{color:"primary.200",fontSize:"lg",children:new Date(s.createdAt).toDateString()}),e.jsx(n,{fontSize:"lg",color:h[s.priority].color,children:h[s.priority].title}),e.jsx(D,{size:"lg",colorScheme:s.status==="Open"?"green":"red",borderRadius:"full",variant:"subtle",children:s.status}),s.categoryId!==null?e.jsx(D,{size:"lg",colorScheme:"brand",borderRadius:"full",variant:"solid",children:(M=s.Category)==null?void 0:M.title}):""]})]}),e.jsxs(t,{paddingLeft:"50px",marginRight:"50px",justify:"space-between",gap:"5",children:[e.jsxs(t,{flexDir:"column",gap:"3",width:"full",children:[e.jsx(g,{bg:"primary.800",padding:"20px",rounded:"10",children:e.jsx(C.Markdown,{source:s.description===""?"*No Description*":s.description,style:{whiteSpace:"pre-wrap",background:"none",color:"white"}})}),e.jsx(ie,{}),e.jsxs(t,{margin:"20px",flexDir:"column",gap:"5",children:[e.jsx(n,{fontSize:"2xl",color:"primary.200",children:"Comments"}),s.Comment.map(o=>e.jsx(Be,{comment:o,user:m})),e.jsx(C,{"data-color-mode":"dark",value:d,onChange:x,previewOptions:{rehypePlugins:[L]}}),e.jsxs(t,{gap:"3",children:[e.jsx(S,{colorScheme:"brand",fontSize:"sm",size:"sm",onClick:Q,children:"Comment"}),s.openedBy===(m==null?void 0:m.id)&&e.jsx(S,{colorScheme:s.status==="Open"?"red":"green",fontSize:"sm",size:"sm",onClick:V,children:s.status==="Open"?"Close Bug":"Reopen Bug"})]})]})]}),e.jsxs(t,{flexDir:"column",gap:"4",width:"400px",children:[e.jsxs(g,{children:[e.jsx(n,{fontSize:"xl",color:"primary.200",children:"Assignee"}),e.jsx(n,{fontSize:"sm",color:"primary.200",children:"You can add upto 4 member"})]}),e.jsxs(xe,{children:[s.Assignee.map((o,p)=>e.jsx(K,{src:o.Member.User.avatar,label:o.Member.User.username,onDelete:()=>$(o.id),props:{bg:"primary.900"}},p)),e.jsxs(Y,{isOpen:r.isOpen,onClose:r.onClose,placement:"bottom",children:[e.jsx(J,{children:e.jsxs(D,{size:"lg",variant:"subtle",colorScheme:"gray",borderRadius:"full",_hover:{cursor:"pointer"},onClick:r.onOpen,children:[e.jsx(X,{boxSize:"12px",as:ae}),e.jsx(Z,{children:"Add"})]},"sm")}),e.jsxs(ee,{bg:"primary.900",border:"none",children:[e.jsx(se,{}),e.jsxs(re,{as:t,flexDir:"column",gap:"3",children:[e.jsx(n,{children:"Assign to"}),e.jsxs(T,{name:"memberId",fontSize:"sm",onChange:z,children:[e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:"",children:"Assign member to this bug"}),s.Project.Member.map(o=>!s.Assignee.some(p=>p.Member.User.id===o.User.id)&&e.jsx("option",{style:{backgroundColor:"black",color:"white"},value:o.id,children:o.User.username},o.id))]}),e.jsx(S,{colorScheme:"brand",fontSize:"sm",size:"sm",onClick:R,children:"Add"})]})]})]})]})]})]})]})})}export{$e as default};
