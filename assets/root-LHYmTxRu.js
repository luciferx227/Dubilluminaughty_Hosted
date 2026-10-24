import{w as a,b as i,j as t,M as l,c,S as d,d as m,O as h,e as u,i as s}from"./jsx-runtime-DH52GnWj.js";const p=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"}],f=`(function(){try{
var trim=function(v){
  if(v.slice(-10)==='index.html')v=v.slice(0,-10);
  while(v.length>1&&v.charAt(v.length-1)==='/')v=v.slice(0,-1);
  return v;
};
if(trim(location.pathname)!==trim(${JSON.stringify("/Dubilluminaughty_Hosted/")}))return;
if(sessionStorage.getItem('dbl.gate'))return;
var s=document.createElement('style');
s.id='gate-curtain';
s.textContent='body::after{content:"";position:fixed;inset:0;z-index:90;background:var(--color-gate);pointer-events:none}html,body{overflow:hidden}';
document.head.appendChild(s);
window.__dblGate=1;
setTimeout(function(){if(window.__dblGate===1){window.__dblGate=0;s.remove()}},4000);
}catch(e){}})()`;function g({children:n}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("meta",{name:"theme-color",content:"#0a0a0b"}),t.jsx(l,{}),t.jsx(c,{}),t.jsx("script",{dangerouslySetInnerHTML:{__html:f}})]}),t.jsxs("body",{children:[n,t.jsx(d,{}),t.jsx(m,{})]})]})}const y=a(function(){return t.jsx(h,{})}),v=i(function(){const e=u(),o=s(e)?`${e.status} ${e.statusText}`:"Something broke",r=s(e)?e.data:e instanceof Error?e.message:"Unknown error";return t.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-16",children:[t.jsx("h1",{className:"font-[family-name:var(--font-display)] text-3xl",children:o}),t.jsx("p",{className:"mt-3 text-[var(--color-ink-dim)]",children:String(r)}),t.jsx("a",{href:"/",className:"mt-6 inline-block underline underline-offset-4",children:"Back to the start"})]})});export{v as ErrorBoundary,g as Layout,y as default,p as links};
