let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?y(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=y(e,null);return i.u=t,r.length>0&&(i.$=r),i},y=(e,t)=>({t:0,p:e,i:t,m:null,$:null,u:null}),p={},d=(e,t,n,l,s,o)=>{if(n!==l){let r=R(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=h(n),o=h(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else{const c=f(l);if((r||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&o||s)&&!c&&e.setAttribute(t,l=!0===l?"":l)}}},m=/\s/,h=e=>e?e.split(m):[],w=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||u,r=t.u||u;for(l in r)d(s,l,o[l],r[l],n,t.t)},S=(t,n,l)=>{let o,r,c=n.$[l],i=0;if(null!==c.i)o=c.m=s.createTextNode(c.i);else if(o=c.m=s.createElement(c.p),w(null,c,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=S(t,c,i),r&&o.appendChild(r);return o},b=(n,l)=>{const s=n.h,o=n.S||y(null,null),r=(e=>e&&e.p===p)(l)?l:$(null,null,l);t=s.tagName,r.p=null,r.t|=4,n.S=r,r.m=o.m=s.shadowRoot||s,e=s["s-sc"],((e,n)=>{const l=n.m=e.m,s=n.$,o=n.i;null===o?(w(e,n,!1),null!==s&&((e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=S(null,l,o),c&&(s[o].m=c,i.insertBefore(c,null)))})(l,0,n,s,0,s.length-1)):e.i!==o&&(l.data=o)})(o,r)},g=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},M=(e,t)=>{if(!(4&e.t))return g(e,e.M),G((()=>j(e,t)));e.t|=512},j=(e,t)=>{const n=e.j;return x(void 0,(()=>k(e,n,t)))},k=async(e,t,n)=>{const l=e.h,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.h,l=t.t,o=((e,t)=>{let n=a(t),l=F.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);v(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>C(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},v=(e,t)=>{try{t=t.render(),e.t|=2,b(e,t)}catch(t){U(t,e.h)}return null},C=e=>{const t=e.h,n=e.M;64&e.t||(e.t|=64,E(t),e.v(t),n||P()),e.g&&(e.g(),e.g=void 0),512&e.t&&D((()=>M(e,!1))),e.t&=-517},P=()=>{E(s.documentElement),D((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(l)))},x=(e,t)=>e&&e.then?e.then(t):t(),E=e=>e.classList.add("hydrated"),O=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),y=[];let p,d=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]},s=l.o,u=class extends HTMLElement{constructor(e){super(e),L(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),d?y.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=A(e),n=t.k,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){g(t,t.M=n);break}}(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=q(n)).then){const e=()=>{};s=await s,e()}const e=()=>{};try{new s(t)}catch(e){U(e)}e()}if(s.style){let e=s.style;const t=a(n);if(!F.has(t)){const l=()=>{};((e,t,n)=>{let l=F.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,F.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,r=()=>M(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return A(this).O}};l.T=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,u))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),d=!1,y.length?y.map((e=>e.connectedCallback())):o.jmp((()=>p=setTimeout(P,30)))},T=new WeakMap,A=e=>T.get(e),H=(e,t)=>T.set(t.j=e,t),L=(e,t)=>{const n={t:0,h:e,k:t,A:new Map};return n.O=new Promise((e=>n.v=e)),e["s-p"]=[],e["s-rc"]=[],T.set(e,n)},R=(e,t)=>t in e,U=(e,t)=>(0,console.error)(e,t),W=new Map,q=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=W.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(W.set(n,e),e[t])),U)},F=new Map,N=[],V=[],_=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?D(B):o.raf(B))},z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){U(e)}e.length=0},B=()=>{z(N),z(V),(n=N.length>0)&&o.raf(B)},D=e=>r().then(e),G=_(V,!0);export{p as H,O as b,$ as h,r as p,H as r}