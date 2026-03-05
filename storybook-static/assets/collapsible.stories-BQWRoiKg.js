import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as x,a as h,b as C}from"./index-Czyi7blE.js";import{c as f}from"./utils-BQHNewu7.js";import{B as i}from"./button-CDO6d7nF.js";import{C as b}from"./chevron-down-CAlhvgsy.js";import"./iframe-Rx79IEKF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lITTl-kJ.js";import"./index-Dsp8fLas.js";import"./index-B6LOqO5i.js";import"./index-DYlsXwkA.js";import"./index-DR3mEe0V.js";import"./index-LHNt3CwB.js";import"./createLucideIcon-Dh1ik17d.js";function p({...s}){return e.jsx(x,{"data-slot":"collapsible",...s})}function c({...s}){return e.jsx(h,{"data-slot":"collapsible-trigger",...s})}function d({...s}){return e.jsx(C,{"data-slot":"collapsible-content",...s})}p.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};c.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};d.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const t=({trigger:s,children:m,classNameContent:u,title:g})=>e.jsxs(p,{className:"data-[state=open]:bg-muted rounded-md",children:[e.jsx(c,{asChild:!0,children:s||e.jsx("div",{className:"text-sm font-medium",children:e.jsxs(i,{variant:"ghost",className:"group w-full",children:[!s&&g||"Collapsible",e.jsx(b,{className:"ml-auto group-data-[state=open]:rotate-180"})]})})}),e.jsx(d,{className:f("flex flex-col items-start gap-2 p-2.5 pt-0 text-sm",u),children:m})]});t.__docgenInfo={description:"",methods:[],displayName:"BaseCollapsible",props:{trigger:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},classNameContent:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"UI/Collapsible",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"ข้อความบนปุ่ม trigger เมื่อไม่ได้ใช้ trigger แบบกำหนดเอง"},classNameContent:{control:"text",description:"คลาส CSS เพิ่มเติมสำหรับ content"}}},r={args:{title:"คลิกเพื่อเปิด/ปิด",children:e.jsx("p",{children:"นี่คือเนื้อหาภายใน collapsible สามารถใส่ข้อความหรือ component อื่นได้"})}},l={args:{title:"รายละเอียดการจัดส่ง",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"จัดส่งฟรีเมื่อซื้อครบ 500 บาท"}),e.jsx("p",{children:"ระยะเวลาจัดส่ง 2-5 วันทำการ"})]})}},a={args:{children:null},render:()=>e.jsx(t,{trigger:e.jsxs(i,{variant:"outline",className:"w-full justify-between",children:["แสดงข้อมูลเพิ่มเติม",e.jsx("span",{className:"ml-2",children:"▼"})]}),children:e.jsx("p",{children:"เนื้อหานี้ใช้ปุ่ม trigger แบบกำหนดเอง"})})},n={args:{children:e.jsx("p",{children:'เมื่อไม่ระบุ title จะแสดง "Collapsible" เป็นค่าเริ่มต้น'})}},o={args:{children:null},render:()=>e.jsxs("div",{className:"flex w-[350px] flex-col gap-2",children:[e.jsx(t,{title:"คำถามที่ 1",children:e.jsx("p",{children:"คำตอบสำหรับคำถามแรก"})}),e.jsx(t,{title:"คำถามที่ 2",children:e.jsx("p",{children:"คำตอบสำหรับคำถามที่สอง"})}),e.jsx(t,{title:"คำถามที่ 3",children:e.jsx("p",{children:"คำตอบสำหรับคำถามที่สาม"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "คลิกเพื่อเปิด/ปิด",
    children: <p>
        นี่คือเนื้อหาภายใน collapsible สามารถใส่ข้อความหรือ component อื่นได้
      </p>
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "รายละเอียดการจัดส่ง",
    children: <div className="space-y-2">
        <p>จัดส่งฟรีเมื่อซื้อครบ 500 บาท</p>
        <p>ระยะเวลาจัดส่ง 2-5 วันทำการ</p>
      </div>
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <BaseCollapsible trigger={<Button variant="outline" className="w-full justify-between">
          แสดงข้อมูลเพิ่มเติม
          <span className="ml-2">▼</span>
        </Button>}>
      <p>เนื้อหานี้ใช้ปุ่ม trigger แบบกำหนดเอง</p>
    </BaseCollapsible>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p>เมื่อไม่ระบุ title จะแสดง "Collapsible" เป็นค่าเริ่มต้น</p>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div className="flex w-[350px] flex-col gap-2">
      <BaseCollapsible title="คำถามที่ 1">
        <p>คำตอบสำหรับคำถามแรก</p>
      </BaseCollapsible>
      <BaseCollapsible title="คำถามที่ 2">
        <p>คำตอบสำหรับคำถามที่สอง</p>
      </BaseCollapsible>
      <BaseCollapsible title="คำถามที่ 3">
        <p>คำตอบสำหรับคำถามที่สาม</p>
      </BaseCollapsible>
    </div>
}`,...o.parameters?.docs?.source}}};const W=["Default","WithTitle","CustomTrigger","DefaultTitle","Multiple"];export{a as CustomTrigger,r as Default,n as DefaultTitle,o as Multiple,l as WithTitle,W as __namedExportsOrder,M as default};
