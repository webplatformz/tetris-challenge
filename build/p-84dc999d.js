let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),c=new WeakMap,i=e=>"sc-"+e.o,u=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!u(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?$(null,l):l),o=s)};a(n);const c=$(e,null);return c.u=t,r.length>0&&(c.$=r),c},$=(e,t)=>({t:0,p:e,i:t,m:null,$:null}),p={},y=(t,n,l)=>{let o,r,a=n.$[l],c=0;if(null!==a.i)o=a.m=s.createTextNode(a.i);else if(o=a.m=s.createElement(a.p),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),a.$)for(c=0;c<a.$.length;++c)r=y(t,a,c),r&&o.appendChild(r);return o},d=(n,l)=>{const s=n.h,o=n.S||$(null,null),r=(e=>e&&e.p===p)(l)?l:f(null,null,l);t=s.tagName,r.p=null,r.t|=4,n.S=r,r.m=o.m=s.shadowRoot||s,e=s["s-sc"],((e,n)=>{const l=n.m=e.m,s=n.$,o=n.i;null===o?null!==s&&((e,n,l,s,o,r)=>{let a,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=r;++o)s[o]&&(a=y(null,l,o),a&&(s[o].m=a,c.insertBefore(a,null)))})(l,0,n,s,0,s.length-1):e.i!==o&&(l.data=o)})(o,r)},m=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},h=(e,t)=>{if(!(4&e.t))return m(e,e.M),N((()=>w(e,t)));e.t|=512},w=(e,t)=>{const n=e.k;return k(void 0,(()=>S(e,n,t)))},S=async(e,t,n)=>{const l=e.h,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.h,l=t.t,o=((e,t)=>{let n=i(t),l=L.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=c.get(e=e.head||e);o||c.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);b(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>g(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},b=(e,t)=>{try{t=t.render(),e.t|=2,d(e,t)}catch(t){T(t,e.h)}return null},g=e=>{const t=e.h,n=e.M;64&e.t||(e.t|=64,v(t),e.C(t),n||M()),e.g&&(e.g(),e.g=void 0),512&e.t&&F((()=>h(e,!1))),e.t&=-517},M=()=>{v(s.documentElement),F((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(l)))},k=(e,t)=>e&&e.then?e.then(t):t(),v=e=>e.classList.add("hydrated"),C=(e,t={})=>{const n=[],r=t.exclude||[],c=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),p=[];let y,d=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],j:t[2],P:t[3]},s=l.o,u=class extends HTMLElement{constructor(e){super(e),E(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),d?p.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=P(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){m(t,t.M=n);break}}(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=H(n)).then){const e=()=>{};s=await s,e()}const e=()=>{};try{new s(t)}catch(e){T(e)}e()}if(s.style){let e=s.style;const t=i(n);if(!L.has(t)){const l=()=>{};((e,t,n)=>{let l=L.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,L.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,r=()=>h(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return P(this).T}};l.A=e[0],r.includes(s)||c.get(s)||(n.push(s),c.define(s,u))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),d=!1,p.length?p.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(M,30)))},j=new WeakMap,P=e=>j.get(e),x=(e,t)=>j.set(t.k=e,t),E=(e,t)=>{const n={t:0,h:e,v:t,H:new Map};return n.T=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],j.set(e,n)},T=(e,t)=>(0,console.error)(e,t),A=new Map,H=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=A.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(A.set(n,e),e[t])),T)},L=new Map,O=[],R=[],U=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?F(q):o.raf(q))},W=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){T(e)}e.length=0},q=()=>{W(O),W(R),(n=O.length>0)&&o.raf(q)},F=e=>r().then(e),N=U(R,!0);export{p as H,C as b,f as h,r as p,x as r}