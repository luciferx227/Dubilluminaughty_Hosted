import{w as a,a as i,j as t,M as l,b as c,S as d,c as m,O as h,d as u,i as o}from"./jsx-runtime-Bkk2Fv7_.js";const x=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"}],f=`/*
  -------------------------------------------------------------------
  Five words are stamped on the back of every pin we make, and printed
  at the bottom of every page you have been on.

  Type their initials. Anywhere.
  -------------------------------------------------------------------
*/
(function(){try{
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
}catch(e){}})()`;function y({children:n}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("meta",{name:"theme-color",content:"#0a0a0b"}),t.jsx(l,{}),t.jsx(c,{}),t.jsx("script",{dangerouslySetInnerHTML:{__html:f}})]}),t.jsxs("body",{children:[n,t.jsx(d,{}),t.jsx(m,{})]})]})}const g=a(function(){return t.jsx(h,{})}),v=i(function(){const e=u(),s=o(e)?`${e.status} ${e.statusText}`:"Something broke",r=o(e)?e.data:e instanceof Error?e.message:"Unknown error";return t.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-16",children:[t.jsx("h1",{className:"font-[family-name:var(--font-display)] text-3xl",children:s}),t.jsx("p",{className:"mt-3 text-[var(--color-ink-dim)]",children:String(r)}),t.jsx("a",{href:"/",className:"mt-6 inline-block underline underline-offset-4",children:"Back to the start"})]})});export{v as ErrorBoundary,y as Layout,g as default,x as links};
