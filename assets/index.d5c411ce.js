import{d as $,i as d,c as f,a as g,s as w,t as b,b as y,e as _,u as k,f as u,F as S}from"./index.88b9702d.js";function h(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=h(e[n]))&&(t&&(t+=" "),t+=r);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function o(){for(var e,n,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(n=h(e))&&(t&&(t+=" "),t+=n);return t}const C=b('<button type="button"></button>');function F(e){return(()=>{const n=C.cloneNode(!0);return n.$$click=()=>e.onClick(),d(n,()=>e.children),f(r=>{const t=o("bg-[#262F36] rounded-full size-12 font-semibold transition-all","ui-selected:bg-[#7C8898] ui-selected:text-white ui-selected:hover:bg-[#FC7613] ui-selected:hover:ui-selected:text-white","hover:bg-[#FC7613] hover:text-white"),s=o(e.selected&&"selected");return t!==r._v$&&g(n,r._v$=t),s!==r._v$2&&w(n,"data-ui-state",r._v$2=s),r},{_v$:void 0,_v$2:void 0}),n})()}$(["click"]);const A=(e,n=0)=>{const r=[];for(let t=0;t<e;t++)r.push(t+n);return r},N=b('<main class="min-h-screen bg-background-dark text-white grid place-items-center"><form class="bg-background-primary rounded-[2rem] p-8 w-100 space-y-4"><div class="bg-background-light rounded-full size-12 text-center items-center leading-12"><i class="i-ph-star-fill text-text-orange">star</i></div><h1 class="text-2xl font-semibold">How did we do?</h1><p class="text-text-gray">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p><div class="flex justify-between text-text-gray"></div><button type="submit">submit</button></form></main>');function j(){const[e,n]=y(0),r=_(e),t=k(),s=i=>{i.preventDefault(),e&&t(`/submit/${e()}`)};return(()=>{const i=N.cloneNode(!0),a=i.firstChild,m=a.firstChild,v=m.nextSibling,x=v.nextSibling,c=x.nextSibling,p=c.nextSibling;return a.addEventListener("submit",s),d(c,u(S,{get each(){return A(5,1)},children:l=>u(F,{get selected(){return r(l)},onClick:()=>n(l),children:l})})),f(()=>g(p,o("bg-text-orange text-white py-3 w-full rounded-full uppercase text-lg transition-all","hover:bg-white hover:text-text-orange"))),i})()}export{j as default};