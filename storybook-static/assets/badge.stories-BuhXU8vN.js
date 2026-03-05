import{j as m}from"./jsx-runtime-u17CrQMm.js";import"./iframe-Rx79IEKF.js";import{c as v}from"./index-LHNt3CwB.js";import{c as p}from"./utils-BQHNewu7.js";import{S as g}from"./index-DYlsXwkA.js";import"./preload-helper-PPVm8Dsz.js";const b=v("inline-flex items-center justify-center rounded-lg border border-transparent px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",ghost:"[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",link:"text-primary underline-offset-4 [a&]:hover:underline",number:"rounded-full bg-primary text-primary-foreground","number-outline":"rounded-full border border-border","number-destructive":"rounded-full border border-destructive  bg-destructive text-white [a&]:hover:bg-destructive/90"}},defaultVariants:{variant:"default"}});function i({className:d,variant:o="default",asChild:c=!1,...u}){const l=c?g:"span";return m.jsx(l,{"data-slot":"badge","data-variant":o,className:p(b({variant:o}),d),...u})}i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const N={title:"UI/Badge",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link","number","number-outline","number-destructive"],description:"รูปแบบของ Badge"}}},e={args:{children:"Badge",variant:"default"}},r={args:{children:"Secondary",variant:"secondary"}},a={args:{children:"Destructive",variant:"destructive"}},t={args:{children:"3",variant:"number"}},n={args:{children:"5",variant:"number-outline"}},s={args:{children:"99",variant:"number-destructive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "3",
    variant: "number"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "5",
    variant: "number-outline"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "99",
    variant: "number-destructive"
  }
}`,...s.parameters?.docs?.source}}};const w=["Default","Secondary","Destructive","Number","NumberOutline","NumberDestructive"];export{e as Default,a as Destructive,t as Number,s as NumberDestructive,n as NumberOutline,r as Secondary,w as __namedExportsOrder,N as default};
