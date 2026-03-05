import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as p}from"./button-CDO6d7nF.js";import{r as b}from"./iframe-Rx79IEKF.js";import{c as r}from"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./createLucideIcon-Dh1ik17d.js";import"./index-DYlsXwkA.js";import"./preload-helper-PPVm8Dsz.js";function h({className:a,...t}){return e.jsx("div",{"data-slot":"card",className:r("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...t})}function f({className:a,...t}){return e.jsx("div",{"data-slot":"card-header",className:r("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...t})}function g({className:a,...t}){return e.jsx("div",{"data-slot":"card-title",className:r("leading-none font-semibold",a),...t})}function x({className:a,...t}){return e.jsx("div",{"data-slot":"card-description",className:r("text-muted-foreground text-sm",a),...t})}function C({className:a,...t}){return e.jsx("div",{"data-slot":"card-action",className:r("col-start-2 row-span-2 row-start-1 self-start justify-self-end",a),...t})}function N({className:a,...t}){return e.jsx("div",{"data-slot":"card-content",className:r("px-6",a),...t})}function w({className:a,...t}){return e.jsx("div",{"data-slot":"card-footer",className:r("flex items-center px-6 [.border-t]:pt-6",a),...t})}h.__docgenInfo={description:"",methods:[],displayName:"Card"};f.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};w.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};g.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};C.__docgenInfo={description:"",methods:[],displayName:"CardAction"};x.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};N.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const y=b.forwardRef(({className:a,title:t,description:n,extra:o,children:u,footer:m,noPadding:j,...R},v)=>{const _=t!=null||n!=null||o!=null;return e.jsxs(h,{ref:v,className:r(a),...R,children:[_&&e.jsxs(f,{className:o?"has-data-[slot=card-action]":"",children:[(t!=null||n!=null)&&e.jsxs(e.Fragment,{children:[t!=null&&e.jsx(g,{children:t}),n!=null&&e.jsx(x,{children:n})]}),o!=null&&e.jsx(C,{children:o})]}),u!=null&&e.jsx(N,{className:r(j&&"p-0"),children:u}),m!=null&&e.jsx(w,{children:m})]})});y.__docgenInfo={description:"",methods:[],displayName:"BaseCard",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},extra:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},noPadding:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const A={title:"UI/Card",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"หัวข้อการ์ด"},description:{control:"text",description:"คำอธิบายใต้หัวข้อ"},noPadding:{control:"boolean",description:"ปิด padding ของ content"}}},s={args:{title:"Card Title",description:"Card description goes here.",children:"Card content area. You can put any content inside."}},d={args:{title:"Card with Action",description:"This card has an action button in the header.",extra:e.jsx(p,{variant:"ghost",size:"icon-xs",children:"⋯"}),children:"Content with header action."}},i={args:{title:"Card with Footer",description:"Card that includes a footer section.",children:"Main content of the card.",footer:e.jsxs("div",{className:"flex justify-end gap-2 w-full",children:[e.jsx(p,{variant:"outline",children:"Cancel"}),e.jsx(p,{variant:"default",children:"Save"})]}),className:"min-w-96 max-w-sm"}},c={args:{title:"Card without content padding",noPadding:!0,children:e.jsx("div",{className:"rounded-b-lg bg-muted/50 p-4",children:"Content with custom padding / full-width layout."})}},l={args:{children:"Card with only content, no header or footer."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card Title",
    description: "Card description goes here.",
    children: "Card content area. You can put any content inside."
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card with Action",
    description: "This card has an action button in the header.",
    extra: <Button variant="ghost" size="icon-xs">⋯</Button>,
    children: "Content with header action."
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card with Footer",
    description: "Card that includes a footer section.",
    children: "Main content of the card.",
    footer: <div className="flex justify-end gap-2 w-full">
        <Button variant="outline">Cancel</Button>
        <Button variant="default">Save</Button>
      </div>,
    className: "min-w-96 max-w-sm"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card without content padding",
    noPadding: true,
    children: <div className="rounded-b-lg bg-muted/50 p-4">
        Content with custom padding / full-width layout.
      </div>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card with only content, no header or footer."
  }
}`,...l.parameters?.docs?.source}}};const D=["Default","WithExtra","WithFooter","NoPadding","Minimal"];export{s as Default,l as Minimal,c as NoPadding,d as WithExtra,i as WithFooter,D as __namedExportsOrder,A as default};
