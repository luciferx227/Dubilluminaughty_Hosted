import{w as a,a as i,j as e,M as c,b as l,S as m,c as d,O as h,d as u,i as r}from"./jsx-runtime-Bkk2Fv7_.js";const g=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"}],f=`/*
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
}catch(e){}})()`,p=`(function(){try{
var t=localStorage.getItem('dbl.theme');
if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);
}catch(e){}})()`;function y({children:n}){return e.jsxs("html",{lang:"en",suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#0b0b0b",media:"(prefers-color-scheme: dark)"}),e.jsx("meta",{name:"theme-color",content:"#f4f4f4",media:"(prefers-color-scheme: light)"}),e.jsx(c,{}),e.jsx(l,{}),e.jsx("script",{dangerouslySetInnerHTML:{__html:p}}),e.jsx("script",{dangerouslySetInnerHTML:{__html:f}})]}),e.jsxs("body",{children:[n,e.jsx(m,{}),e.jsx(d,{})]})]})}const v=a(function(){return e.jsx(h,{})}),w=i(function(){const t=u(),o=r(t)?`${t.status} ${t.statusText}`:"Something broke",s=r(t)?t.data:t instanceof Error?t.message:"Unknown error";return e.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-16",children:[e.jsx("h1",{className:"font-[family-name:var(--font-display)] text-3xl",children:o}),e.jsx("p",{className:"mt-3 text-[var(--color-ink-dim)]",children:String(s)}),e.jsx("a",{href:"/",className:"mt-6 inline-block underline underline-offset-4",children:"Back to the start"})]})});export{w as ErrorBoundary,y as Layout,v as default,g as links};
