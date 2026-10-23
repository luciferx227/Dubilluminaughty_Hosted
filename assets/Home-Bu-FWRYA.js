import{j as e,r as S,w as D,L as w}from"./jsx-runtime-BJ62wsWU.js";import{C as L}from"./Crown-Dhiiv0WX.js";import{R as H,S as F,s as I}from"./meta-DsZILh8c.js";import{T as M}from"./Tilt-UAQghfD9.js";import{W as X}from"./Wordmark-Bx4-nYEm.js";import{r as G}from"./rental-C4mDTUsS.js";import{u as V,f as Z}from"./shows-BXH-TNtp.js";import{s as N}from"./site-Vb9NfKDo.js";function z({flipped:c=!1}){return e.jsxs("div",{className:`flex flex-col items-center gap-1 ${c?"rotate-180":""}`,"aria-hidden":"true",children:[e.jsx(L,{rings:!1,className:"h-5 w-auto text-brass"}),e.jsx("span",{className:"font-mono text-[0.5rem] leading-none tracking-[0.1em] text-brass/70",children:"33"})]})}function J({className:c}){return e.jsxs("div",{className:`neu-card relative isolate aspect-[2.5/3.5] overflow-hidden rounded-[7%] ${c??""}`,children:[e.jsx("div",{className:"pointer-events-none absolute inset-[5%] rounded-[5%] border border-brass/15"}),e.jsx("div",{className:"absolute left-[7%] top-[6%]",children:e.jsx(z,{})}),e.jsx("div",{className:"absolute bottom-[6%] right-[7%]",children:e.jsx(z,{flipped:!0})}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-[7%] px-[12%]",children:[e.jsx(L,{pulse:!0,className:"h-auto w-[72%] text-ink drop-shadow-[0_6px_18px_oklch(10%_0_0/0.8)]"}),e.jsx(X,{decorative:!0,fluid:!0,className:"text-ink"})]}),e.jsx("div",{className:"neu-card-sheen"}),e.jsx("div",{className:"neu-card-rim"})]})}const K="78.3%";function Q(){return e.jsxs("div",{className:"relative mx-auto aspect-[7/9] w-full max-w-[21rem] sm:max-w-[42rem]",children:[e.jsx("div",{"aria-hidden":"true",className:"absolute left-1/2 top-[5%] h-[73%] w-[80%] -translate-x-1/2 rounded-full border border-brass/25"}),e.jsx("div",{"aria-hidden":"true",className:"absolute left-1/2 top-[14%] h-[56%] w-[84%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-brass)_0%,transparent_68%)] opacity-25 blur-2xl"}),e.jsx("div",{"data-hero-card":!0,className:"card-bob absolute left-1/2 top-[2%] w-[70%] -translate-x-1/2",children:e.jsx(M,{max:9,restX:3,restY:-9,children:e.jsx(J,{})})}),e.jsx("div",{"aria-hidden":"true",style:{top:K},className:"absolute left-1/2 h-16 w-[86%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,oklch(80%_0.1_85/0.32),transparent_70%)] blur-md"})]})}const ee="modulepreload",te=function(c){return"/Dubilluminaughty_Hosted/"+c},Y={},ae=function(t,r,_){let h=Promise.resolve();if(r&&r.length>0){let j=function(n){return Promise.all(n.map(i=>Promise.resolve(i).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),a=d?.nonce||d?.getAttribute("nonce");h=j(r.map(n=>{if(n=te(n),n in Y)return;Y[n]=!0;const i=n.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":ee,i||(o.as="script"),o.crossOrigin="",o.href=n,a&&o.setAttribute("nonce",a),document.head.appendChild(o),i)return new Promise((x,v)=>{o.addEventListener("load",x),o.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${n}`)))})}))}function f(d){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=d,window.dispatchEvent(a),!a.defaultPrevented)throw d}return h.then(d=>{for(const a of d||[])a.status==="rejected"&&f(a.reason);return t().catch(f)})},se=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,re=`
precision highp float;
varying vec2 vUv;

uniform sampler2D tCard;
uniform float uTime;
uniform float uAspect;
uniform float uWaterY;     // waterline, 0..1 from top
uniform float uCardTop;    // card top, 0..1 from top
uniform float uCardHalf;   // card half-width in uv
uniform float uCardX;      // card centre x in uv
uniform vec3  uBrass;
uniform vec2  uPointer;    // uv, or (-1,-1) when away
uniform float uBpm;
uniform float uOctaves;    // 3.0 fine pointer, 2.0 coarse

/* Travelling surface detail. */
float waves(vec2 p, float t) {
  float w  = sin(p.x * 9.0  + t * 0.8) * 0.50;
  w += sin(p.x * 21.0 - p.y * 6.0 + t * 1.4) * 0.28;
  if (uOctaves > 2.5) {
    w += sin(p.x * 37.0 + p.y * 11.0 - t * 2.0) * 0.13;
  }
  return w;
}

/*
  Beat-driven rings.

  Each beat spawns a ring that expands and decays. Index 0 is the newest.
  Amplitude varies per ring so the set reads like levels rather than a
  metronome, and every fourth beat lands harder.
*/
float pings(vec2 p, vec2 origin, float beat) {
  vec2 d2 = (p - origin) * vec2(1.0, 2.3);
  float d = length(d2);
  float sum = 0.0;

  for (int i = 0; i < 6; i++) {
    float age = fract(beat) + float(i);          // age in beats
    float r = age * 0.23;                        // expansion per beat
    // Shell thins as it travels, the way a real ring spreads.
    float ring = exp(-pow((d - r) * (26.0 - age * 2.4), 2.0));

    float idx = floor(beat) - float(i);
    float bar = mod(idx, 4.0) < 0.5 ? 1.6 : 1.0; // downbeat hits harder
    float lvl = 0.55 + 0.45 * sin(idx * 1.7);    // per-ring level

    sum += ring * exp(-age * 0.45) * bar * lvl;
  }
  return sum;
}

void main() {
  /* Flip v. WebGL's UV origin is bottom-left, but every uniform here is
     derived from getBoundingClientRect, which is top-left. Without this the
     sky renders at the bottom and the water at the top. */
  vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
  float t = uTime;
  float beat = t * uBpm / 60.0;

  // Low swell on the beat — the bass you feel rather than see.
  float swell = pow(1.0 - fract(beat), 3.0);

  vec3 col;

  if (uv.y < uWaterY) {
    /* ---- Sky ---- */
    float toHorizon = (uWaterY - uv.y) / uWaterY;   // 0 at horizon, 1 at top
    col = vec3(0.028, 0.028, 0.034);
    col += uBrass * exp(-toHorizon * 3.4) * (0.42 + swell * 0.12);
    // haze band sitting on the horizon
    col += uBrass * exp(-toHorizon * 14.0) * 0.5;
    // the lit horizon itself — tight, bright, full width
    col += uBrass * exp(-toHorizon * 90.0) * (1.5 + swell * 0.5);
  } else {
    /* ---- Water ---- */
    float depth = (uv.y - uWaterY) / max(1.0 - uWaterY, 0.0001); // 0..1
    float persp = 1.0 / (0.16 + depth * 1.75);
    vec2 p = vec2((uv.x - 0.5) * persp * uAspect + 0.5, depth);

    float disp = waves(p, t) * 0.010 * (0.3 + depth);
    float ping = pings(p, vec2(uCardX, 0.0), beat);
    disp += ping * 0.028;

    if (uPointer.x >= 0.0) {
      disp += pings(p, vec2(uPointer.x, 0.0), beat * 1.25) * 0.016;
    }

    col = vec3(0.03, 0.03, 0.037);

    /* Reflection: mirror about the waterline, compressed with depth. */
    float srcY = uWaterY - (uv.y - uWaterY) * 1.08;
    float cardH = max(uWaterY - uCardTop, 0.0001);
    vec2 cardUv;
    cardUv.x = (uv.x - uCardX) / (uCardHalf * 2.0) + 0.5 + disp * 1.5;
    cardUv.y = (srcY - uCardTop) / cardH + disp * 1.6;

    if (cardUv.x > 0.0 && cardUv.x < 1.0 && cardUv.y > 0.0 && cardUv.y < 1.0) {
      vec4 card = texture2D(tCard, cardUv);
      float fade = exp(-depth * 3.4) * 0.6;
      col = mix(col, card.rgb, card.a * fade);
    }

    // Horizon light bleeding into the water.
    col += uBrass * exp(-depth * 6.0) * (0.55 + swell * 0.18);
    col += uBrass * exp(-depth * 60.0) * 1.2; // the waterline edge

    /* Specular streaks.

       The highlights run HORIZONTALLY, as light on a flat surface does —
       banded along y and only wobbled by the waves, then thresholded hard so
       they come out as separate lit lines rather than a sheen. This is what
       reads as water in the reference. */
    float band = sin(p.y * 64.0 + waves(p, t) * 2.6 + t * 0.5);
    float streak = smoothstep(0.80, 1.0, band) * exp(-depth * 2.1);
    col += uBrass * streak * 0.85;

    // The rings, lit, and widened into the same horizontal language.
    float ringLight = smoothstep(0.2, 0.9, ping);
    col += uBrass * ringLight * (0.75 + streak * 1.2);
  }

  // Soft edges so the panel has no seams.
  float edge = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x);
  edge *= smoothstep(1.0, 0.88, uv.y);

  gl_FragColor = vec4(col * edge, edge);
}
`;function ne({className:c,cardSelector:t,fallbackWaterY:r=.78,bpm:_=124}){const h=S.useRef(null),[f,d]=S.useState(!1);return S.useEffect(()=>{const a=h.current;if(!a||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let j=()=>{},n=!1;return ae(async()=>{const{Renderer:i,Program:u,Mesh:o,Triangle:x,Texture:v}=await import("./index-CR_d822e.js");return{Renderer:i,Program:u,Mesh:o,Triangle:x,Texture:v}},[]).then(({Renderer:i,Program:u,Mesh:o,Triangle:x,Texture:v})=>{if(n)return;let y;try{y=new i({alpha:!0,dpr:Math.min(window.devicePixelRatio,2)})}catch{return}const l=y.gl;l.canvas.style.width="100%",l.canvas.style.height="100%",l.canvas.style.display="block",a.appendChild(l.canvas);const P=new v(l,{generateMipmaps:!1}),k=new Image;k.onload=()=>{P.image=k,n||d(!0)},k.src="/Dubilluminaughty_Hosted/brand/card-face.svg";const $=window.matchMedia("(pointer: fine)").matches?3:2,m=new u(l,{vertex:se,fragment:re,transparent:!0,uniforms:{tCard:{value:P},uTime:{value:0},uAspect:{value:1},uWaterY:{value:r},uCardTop:{value:.1},uCardHalf:{value:.18},uCardX:{value:.5},uBrass:{value:[.86,.69,.32]},uPointer:{value:[-1,-1]},uBpm:{value:_},uOctaves:{value:$}}}),q=new o(l,{geometry:new x(l),program:m}),R=()=>{const s=a.getBoundingClientRect();y.setSize(s.width,s.height),m.uniforms.uAspect.value=s.width/Math.max(s.height,1);const p=document.querySelector(t);if(p&&s.height>0){const b=p.getBoundingClientRect();m.uniforms.uWaterY.value=(b.bottom-s.top)/s.height,m.uniforms.uCardTop.value=(b.top-s.top)/s.height,m.uniforms.uCardHalf.value=b.width/2/s.width,m.uniforms.uCardX.value=(b.left+b.width/2-s.left)/s.width}};R();const C=new ResizeObserver(R);C.observe(a);const B=document.querySelector(t);B&&C.observe(B);const W=s=>{const p=a.getBoundingClientRect();m.uniforms.uPointer.value=[(s.clientX-p.left)/p.width,(s.clientY-p.top)/p.height]},A=()=>{m.uniforms.uPointer.value=[-1,-1]};a.parentElement?.addEventListener("pointermove",W),a.parentElement?.addEventListener("pointerleave",A);let E=0,g=!0;const O=performance.now(),T=()=>{g&&(E=requestAnimationFrame(T),m.uniforms.uTime.value=(performance.now()-O)/1e3,y.render({scene:q}))},U=new IntersectionObserver(([s])=>{s.isIntersecting&&!g?(g=!0,T()):s.isIntersecting||(g=!1,cancelAnimationFrame(E))},{threshold:0});U.observe(a),T(),j=()=>{g=!1,cancelAnimationFrame(E),C.disconnect(),U.disconnect(),a.parentElement?.removeEventListener("pointermove",W),a.parentElement?.removeEventListener("pointerleave",A),l.canvas.remove(),l.getExtension("WEBGL_lose_context")?.loseContext()}}),()=>{n=!0,j()}},[t,r,_]),e.jsxs("div",{"aria-hidden":"true",className:c,children:[!f&&e.jsxs("div",{className:"absolute inset-x-0 bottom-0",style:{top:`${r*100}%`},children:[e.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent"}),e.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_bottom,oklch(80%_0.09_85/0.1),transparent_55%)]"})]}),e.jsx("div",{ref:h,className:`absolute inset-0 transition-opacity duration-700 ${f?"opacity-100":"opacity-0"}`})]})}const he=()=>I({path:"/"}),fe=D(function(){const t=V()[0];return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"relative isolate overflow-hidden border-b border-line",children:[e.jsxs("div",{className:"pointer-events-none absolute inset-0 -z-20",children:[e.jsx("div",{className:"absolute inset-x-0 top-[18%] bottom-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_48%,oklch(62%_0.11_72/0.5),transparent_72%)]"}),e.jsx(H,{className:"hero-rings absolute left-1/2 top-[40%] h-[110vmax] w-[110vmax] -translate-x-1/2 -translate-y-1/2 text-brass opacity-[0.16]"}),e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_26%,var(--color-surface)_78%)]"})]}),e.jsx(ne,{className:"pointer-events-none absolute inset-0 -z-10",cardSelector:"[data-hero-card]"}),e.jsxs("div",{className:"mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 pb-12 pt-10",children:[e.jsxs("h1",{className:"sr-only",children:[N.name," — ",N.tagline]}),e.jsx("ul",{className:"u-label mb-6 flex flex-wrap gap-x-5 gap-y-1 sm:absolute sm:left-5 sm:top-10 sm:block sm:space-y-1.5","aria-label":"What we do",children:["Shows","Equipment rental","Creative co-operative"].map(r=>e.jsxs("li",{children:["/ ",r]},r))}),e.jsx(Q,{}),e.jsxs("div",{className:"mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between",children:[e.jsxs("div",{className:"max-w-md",children:[e.jsx("p",{className:"u-display text-[clamp(1.9rem,5.6vw,3.4rem)] text-ink",children:N.ethos}),e.jsx("p",{className:"mt-4 text-pretty leading-relaxed text-ink-dim",children:N.description}),e.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[e.jsx(w,{to:"/shows",viewTransition:!0,className:"rounded-sm bg-brass px-6 py-3 font-medium text-brass-ink transition-colors duration-[var(--duration-fast)] hover:bg-brass-deep",children:"Shows"}),e.jsx(w,{to:"/rental",viewTransition:!0,className:"rounded-sm border border-line px-6 py-3 transition-colors duration-[var(--duration-fast)] hover:border-brass hover:text-brass",children:"Rent equipment"})]})]}),t&&e.jsxs(w,{to:`/shows/${t.slug}`,viewTransition:!0,className:"neu-card group flex items-center gap-4 rounded-md p-3 pr-5 transition-colors duration-[var(--duration-base)] hover:text-brass sm:max-w-xs",children:[e.jsx("span",{className:"grid h-12 w-9 shrink-0 place-items-center rounded-sm border border-brass/25 bg-surface/60",children:e.jsx(L,{rings:!1,className:"h-6 w-auto text-brass"})}),e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"u-label block",children:"Next show"}),e.jsx("span",{className:"mt-0.5 block truncate font-display text-lg uppercase leading-none tracking-tight",children:t.title}),e.jsxs("span",{className:"mt-1 block font-mono text-xs text-ink-faint","data-numeric":!0,children:[e.jsx("time",{dateTime:t.startsAt,children:Z(t.startsAt)})," · ",t.city]})]})]})]})]})]}),e.jsxs("div",{className:"mx-auto max-w-6xl px-5",children:[e.jsxs("section",{className:"py-16","aria-labelledby":"next-show",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-4",children:[e.jsx("h2",{id:"next-show",className:"u-label",children:"Next show"}),e.jsx("div",{className:"u-rule flex-1"})]}),t?e.jsxs(w,{to:`/shows/${t.slug}`,className:"group relative block overflow-hidden rounded-sm border border-line p-7 transition-colors duration-[var(--duration-base)] hover:border-brass sm:p-10",children:[e.jsx(H,{className:"pointer-events-none absolute -right-28 -top-28 h-80 w-80 text-brass opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-20"}),e.jsx("p",{className:"u-display text-[clamp(1.9rem,5.5vw,3.5rem)] text-ink transition-colors group-hover:text-brass",children:t.title}),e.jsxs("p",{className:"mt-4 font-mono text-sm text-ink-dim","data-numeric":!0,children:[e.jsx("time",{dateTime:t.startsAt,children:new Date(t.startsAt).toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"long",year:"numeric"})}),e.jsx("span",{className:"mx-2 text-ink-faint",children:"/"}),t.venue,", ",t.city]}),t.lineup.length>0&&e.jsx("p",{className:"mt-2 text-sm text-ink-faint",children:t.lineup.join(" · ")})]}):e.jsx("p",{className:"text-ink-dim",children:"Nothing announced yet."})]}),e.jsxs("section",{className:"py-16","aria-labelledby":"rental-teaser",children:[e.jsxs("div",{className:"mb-5 flex items-center gap-4",children:[e.jsx("h2",{id:"rental-teaser",className:"u-label",children:"Equipment rental"}),e.jsx("div",{className:"u-rule flex-1"})]}),e.jsx("ul",{className:"grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3",children:G.map(r=>e.jsx("li",{children:e.jsxs(w,{to:`/rental/${r.slug}`,className:"flex h-full flex-col bg-surface p-5 transition-colors duration-[var(--duration-fast)] hover:bg-surface-raised",children:[e.jsx("span",{className:"font-medium",children:r.name}),e.jsx("span",{className:"mt-1 text-sm text-ink-dim",children:r.summary})]})},r.slug))})]}),e.jsx("div",{className:"pb-4",children:e.jsx(F,{step:"step 3+ — collective strip, philosophy pull-quote, flyer gallery"})})]})]})});export{fe as default,he as meta};
