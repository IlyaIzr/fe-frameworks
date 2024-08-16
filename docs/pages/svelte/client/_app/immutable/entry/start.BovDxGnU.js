import{o as Se,t as ke}from"../chunks/scheduler.Cjckziim.js";import{S as ct,a as lt,b as ft,H as q,N as Y,r as ne,o as Ae,P as Oe,f as Qe,g as Re,c as de,i as $e,s as Te,d as J,e as B,h as et}from"../chunks/singletons.BooCY_V0.js";new URL("sveltekit-internal://");function bt(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function Et(e){return e.split("%25").map(decodeURI).join("%25")}function St(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}function Pe({href:e}){return e.split("#")[0]}const kt=["href","pathname","search","toString","toJSON"];function At(e,a,c){const o=new URL(e);Object.defineProperty(o,"searchParams",{value:new Proxy(o.searchParams,{get(u,f){if(f==="get"||f==="getAll"||f==="has")return l=>(c(l),u[f](l));a();const y=Reflect.get(u,f);return typeof y=="function"?y.bind(u):y}}),enumerable:!0,configurable:!0});for(const u of kt)Object.defineProperty(o,u,{get(){return a(),e[u]},enumerable:!0,configurable:!0});return Ot(o),o}function Ot(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json",$t=".html__data.json";function Pt(e){return e.endsWith(".html")?e.replace(/\.html$/,$t):e.replace(/\/$/,"")+Rt}function It(...e){let a=5381;for(const c of e)if(typeof c=="string"){let o=c.length;for(;o;)a=a*33^c.charCodeAt(--o)}else if(ArrayBuffer.isView(c)){const o=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);let u=o.length;for(;u;)a=a*33^o[--u]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const ut=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:a?.method||"GET")!=="GET"&&ae.delete(Ce(e)),ut(e,a));const ae=new Map;function xt(e){const a=atob(e),c=new Uint8Array(a.length);for(let o=0;o<a.length;o++)c[o]=a.charCodeAt(o);return c.buffer}function jt(e,a){const c=Ce(e,a),o=document.querySelector(c);if(o?.textContent){let{body:u,...f}=JSON.parse(o.textContent);const y=o.getAttribute("data-ttl");return y&&ae.set(c,{body:u,init:f,ttl:1e3*Number(y)}),o.getAttribute("data-b64")!==null&&(u=xt(u)),Promise.resolve(new Response(u,f))}return window.fetch(e,a)}function Lt(e,a,c){if(ae.size>0){const o=Ce(e,c),u=ae.get(o);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(c?.cache))return new Response(u.body,u.init);ae.delete(o)}}return window.fetch(a,c)}function Ce(e,a){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a?.headers||a?.body){const u=[];a.headers&&u.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&u.push(a.body),o+=`[data-hash="${It(...u)}"]`}return o}const Nt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ut(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ct(e).map(o=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(u)return a.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return a.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const y=o.split(/\[(.+?)\](?!\])/);return"/"+y.map((_,s)=>{if(s%2){if(_.startsWith("x+"))return Ie(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Ie(String.fromCharCode(..._.slice(2).split("-").map(U=>parseInt(U,16))));const h=Nt.exec(_);if(!h)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,P,E,$]=h;return a.push({name:E,matcher:$,optional:!!v,rest:!!P,chained:P?s===1&&y[0]==="":!1}),P?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Ie(_)}).join("")}).join("")}/?$`),params:a}}function Tt(e){return!/^\([^)]+\)$/.test(e)}function Ct(e){return e.slice(1).split("/").filter(Tt)}function Dt(e,a,c){const o={},u=e.slice(1),f=u.filter(l=>l!==void 0);let y=0;for(let l=0;l<a.length;l+=1){const _=a[l];let s=u[l-y];if(_.chained&&_.rest&&y&&(s=u.slice(l-y,l+1).filter(h=>h).join("/"),y=0),s===void 0){_.rest&&(o[_.name]="");continue}if(!_.matcher||c[_.matcher](s)){o[_.name]=s;const h=a[l+1],v=u[l+1];h&&!h.rest&&h.optional&&v&&_.chained&&(y=0),!h&&!v&&Object.keys(o).length===f.length&&(y=0);continue}if(_.optional&&_.chained){y++;continue}return}if(!y)return o}function Ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Mt({nodes:e,server_loads:a,dictionary:c,matchers:o}){const u=new Set(a);return Object.entries(c).map(([l,[_,s,h]])=>{const{pattern:v,params:P}=Ut(l),E={id:l,exec:$=>{const U=v.exec($);if(U)return Dt(U,P,o)},errors:[1,...h||[]].map($=>e[$]),layouts:[0,...s||[]].map(y),leaf:f(_)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function f(l){const _=l<0;return _&&(l=~l),[_,e[l]]}function y(l){return l===void 0?l:[u.has(l),e[l]]}}function De(e,a=JSON.parse){try{return a(sessionStorage[e])}catch{}}function xe(e,a,c=JSON.stringify){const o=c(a);try{sessionStorage[e]=o}catch{}}class je extends Error{constructor(a,c){super(a),this.name="DevalueError",this.path=c.join("")}}function tt(e){return Object(e)!==e}const Ft=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vt(e){const a=Object.getPrototypeOf(e);return a===Object.prototype||a===null||Object.getOwnPropertyNames(a).sort().join("\0")===Ft}function Bt(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ht(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function Z(e){let a="",c=0;const o=e.length;for(let u=0;u<o;u+=1){const f=e[u],y=Ht(f);y&&(a+=e.slice(c,u)+y,c=u+1)}return`"${c===0?e:a+e.slice(c)}"`}const Me=-1,dt=-2,pt=-3,ht=-4,_t=-5,Fe=-6;function qt(e,a){return gt(JSON.parse(e),a)}function gt(e,a){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const c=e,o=Array(c.length);function u(f,y=!1){if(f===Me)return;if(f===pt)return NaN;if(f===ht)return 1/0;if(f===_t)return-1/0;if(f===Fe)return-0;if(y)throw new Error("Invalid input");if(f in o)return o[f];const l=c[f];if(!l||typeof l!="object")o[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const _=l[0],s=a?.[_];if(s)return o[f]=s(u(l[1]));switch(_){case"Date":o[f]=new Date(l[1]);break;case"Set":const h=new Set;o[f]=h;for(let E=1;E<l.length;E+=1)h.add(u(l[E]));break;case"Map":const v=new Map;o[f]=v;for(let E=1;E<l.length;E+=2)v.set(u(l[E]),u(l[E+1]));break;case"RegExp":o[f]=new RegExp(l[1],l[2]);break;case"Object":o[f]=Object(l[1]);break;case"BigInt":o[f]=BigInt(l[1]);break;case"null":const P=Object.create(null);o[f]=P;for(let E=1;E<l.length;E+=2)P[l[E]]=u(l[E+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(l.length);o[f]=_;for(let s=0;s<l.length;s+=1){const h=l[s];h!==dt&&(_[s]=u(h))}}else{const _={};o[f]=_;for(const s in l){const h=l[s];_[s]=u(h)}}return o[f]}return u(0)}function Jt(e,a){const c=[],o=new Map,u=[];for(const s in a)u.push({key:s,fn:a[s]});const f=[];let y=0;function l(s){if(typeof s=="function")throw new je("Cannot stringify a function",f);if(o.has(s))return o.get(s);if(s===void 0)return Me;if(Number.isNaN(s))return pt;if(s===1/0)return ht;if(s===-1/0)return _t;if(s===0&&1/s<0)return Fe;const h=y++;o.set(s,h);for(const{key:P,fn:E}of u){const $=E(s);if($)return c[h]=`["${P}",${l($)}]`,h}let v="";if(tt(s))v=Le(s);else switch(Bt(s)){case"Number":case"String":case"Boolean":v=`["Object",${Le(s)}]`;break;case"BigInt":v=`["BigInt",${s}]`;break;case"Date":v=`["Date","${!isNaN(s.getDate())?s.toISOString():""}"]`;break;case"RegExp":const{source:$,flags:U}=s;v=U?`["RegExp",${Z($)},"${U}"]`:`["RegExp",${Z($)}]`;break;case"Array":v="[";for(let R=0;R<s.length;R+=1)R>0&&(v+=","),R in s?(f.push(`[${R}]`),v+=l(s[R]),f.pop()):v+=dt;v+="]";break;case"Set":v='["Set"';for(const R of s)v+=`,${l(R)}`;v+="]";break;case"Map":v='["Map"';for(const[R,F]of s)f.push(`.get(${tt(R)?Le(R):"..."})`),v+=`,${l(R)},${l(F)}`,f.pop();v+="]";break;default:if(!Vt(s))throw new je("Cannot stringify arbitrary non-POJOs",f);if(Object.getOwnPropertySymbols(s).length>0)throw new je("Cannot stringify POJOs with symbolic keys",f);if(Object.getPrototypeOf(s)===null){v='["null"';for(const R in s)f.push(`.${R}`),v+=`,${Z(R)},${l(s[R])}`,f.pop();v+="]"}else{v="{";let R=!1;for(const F in s)R&&(v+=","),R=!0,f.push(`.${F}`),v+=`${Z(F)}:${l(s[F])}`,f.pop();v+="}"}}return c[h]=v,h}const _=l(e);return _<0?`${_}`:`[${c.join(",")}]`}function Le(e){const a=typeof e;return a==="string"?Z(e):e instanceof String?Z(e.toString()):e===void 0?Me.toString():e===0&&1/e<0?Fe.toString():a==="bigint"?`["BigInt","${e}"]`:String(e)}const mt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...mt];const Gt=new Set([...mt]);[...Gt];function Kt(e){return e.filter(a=>a!=null)}class _e{constructor(a,c){this.status=a,typeof c=="string"?this.body={message:c}:c?this.body=c:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}}class nt{constructor(a,c){this.status=a,this.location=c}}class Ve extends Error{constructor(a,c,o){super(o),this.status=a,this.text=c}}const Yt="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function pe(e){return e instanceof _e||e instanceof Ve?e.status:500}function Wt(e){return e instanceof Ve?e.text:"Internal Error"}const W=De(ct)??{},re=De(lt,qt)??{},oe=De(ft)??{},rt=history.pushState,he=history.replaceState;function Ne(e){W[e]=Te()}function at(e,a){let c=e+1;for(;W[c];)delete W[c],c+=1;for(c=a+1;oe[c];)delete oe[c],c+=1}function z(e){return location.href=e.href,new Promise(()=>{})}function ot(){}function Xt(e,a){const c=Mt(e),o=e.nodes[0],u=e.nodes[1];o(),u();const f=document.documentElement,y=[],l=[];let _=null;const s={before_navigate:[],on_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},v=!1,P=!1,E=!0,$=!1,U=!1,R=!1,F=!1,se=!1,V,N=history.state?.[q],M=history.state?.[Y];N||(N=M=Date.now(),he.call(history,{...history.state,[q]:N,[Y]:M},"",location.href));const ge=W[N];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let j,X,me;async function Be(){if(await(me||=Promise.resolve()),!me)return;me=null;const n=ee(h.url,!0);_=null;const t=X={},r=n&&await we(n);t===X&&(r&&(r.type==="redirect"?await ie(new URL(r.location,h.url).href,{},1,t):(r.props.page!==void 0&&(j=r.props.page),V.$set(r.props))),y.length=0)}function He(n){l.some(t=>t?.snapshot)&&(oe[n]=l.map(t=>t?.snapshot?.capture()))}function qe(n){oe[n]?.forEach((t,r)=>{l[r]?.snapshot?.restore(t)})}function Je(){Ne(N),xe(ct,W),He(M),xe(ft,oe),xe(lt,re,Jt)}async function ie(n,t,r,i){return fe({type:"goto",url:ne(n),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,redirect_count:r,nav_token:i,accept:()=>{t.invalidateAll&&(se=!0)}})}async function Ge(n){return _={id:n.id,promise:we(n).then(t=>(t.type==="loaded"&&t.state.error&&(_=null),t))},_.promise}async function ce(n){const t=c.find(r=>r.exec(We(n)));t&&await Promise.all([...t.layouts,t.leaf].map(r=>r?.[1]()))}function Ke(n){h=n.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),j=n.props.page,V=new e.root({target:a,props:{...n.props,stores:J,components:l},hydrate:!0}),qe(M);const r={from:null,to:{params:h.params,route:{id:h.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};s.after_navigate.forEach(i=>i(r)),P=!0}async function Q({url:n,params:t,branch:r,status:i,error:d,route:p,form:g}){let m="never";for(const O of r)O?.slash!==void 0&&(m=O.slash);n.pathname=bt(n.pathname,m),n.search=n.search;const S={type:"loaded",state:{url:n,params:t,branch:r,error:d,route:p},props:{constructors:Kt(r).map(O=>O.node.component),page:j}};g!==void 0&&(S.props.form=g);let w={},I=!j,L=0;for(let O=0;O<Math.max(r.length,h.branch.length);O+=1){const k=r[O],T=h.branch[O];k?.data!==T?.data&&(I=!0),k&&(w={...w,...k.data},I&&(S.props[`data_${L}`]=w),L+=1)}return(!h.url||n.href!==h.url.href||h.error!==d||g!==void 0&&g!==j.form||I)&&(S.props.page={error:d,params:t,route:{id:p?.id??null},state:{},status:i,url:new URL(n),form:g??null,data:I?w:j.data}),S}async function ye({loader:n,parent:t,url:r,params:i,route:d,server_data_node:p}){let g=null,m=!0;const S={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},w=await n();if(w.universal?.load){let I=function(...b){for(const O of b){const{href:k}=new URL(O,r);S.dependencies.add(k)}};const L={route:new Proxy(d,{get:(b,O)=>(m&&(S.route=!0),b[O])}),params:new Proxy(i,{get:(b,O)=>(m&&S.params.add(O),b[O])}),data:p?.data??null,url:At(r,()=>{m&&(S.url=!0)},b=>{m&&S.search_params.add(b)}),async fetch(b,O){let k;b instanceof Request?(k=b.url,O={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...O}):k=b;const T=new URL(k,r);return m&&I(T.href),T.origin===r.origin&&(k=T.href.slice(r.origin.length)),P?Lt(k,T.href,O):jt(k,O)},setHeaders:()=>{},depends:I,parent(){return m&&(S.parent=!0),t()},untrack(b){m=!1;try{return b()}finally{m=!0}}};g=await w.universal.load.call(null,L)??null}return{node:w,loader:n,server:p,universal:w.universal?.load?{type:"data",data:g,uses:S}:null,data:g??p?.data??null,slash:r.pathname===B||r.pathname===B+"/"?"always":w.universal?.trailingSlash??p?.slash}}function Ye(n,t,r,i,d,p){if(se)return!0;if(!d)return!1;if(d.parent&&n||d.route&&t||d.url&&r)return!0;for(const g of d.search_params)if(i.has(g))return!0;for(const g of d.params)if(p[g]!==h.params[g])return!0;for(const g of d.dependencies)if(y.some(m=>m(new URL(g))))return!0;return!1}function ve(n,t){return n?.type==="data"?n:n?.type==="skip"?t??null:null}function vt(n,t){if(!n)return new Set(t.searchParams.keys());const r=new Set([...n.searchParams.keys(),...t.searchParams.keys()]);for(const i of r){const d=n.searchParams.getAll(i),p=t.searchParams.getAll(i);d.every(g=>p.includes(g))&&p.every(g=>d.includes(g))&&r.delete(i)}return r}async function we({id:n,invalidating:t,url:r,params:i,route:d}){if(_?.id===n)return _.promise;const{errors:p,layouts:g,leaf:m}=d,S=[...g,m];p.forEach(A=>A?.().catch(()=>{})),S.forEach(A=>A?.[1]().catch(()=>{}));let w=null;const I=h.url?n!==h.url.pathname+h.url.search:!1,L=h.route?d.id!==h.route.id:!1,b=vt(h.url,r);let O=!1;const k=S.map((A,x)=>{const C=h.branch[x],D=!!A?.[0]&&(C?.loader!==A[1]||Ye(O,L,I,b,C.server?.uses,i));return D&&(O=!0),D});if(k.some(Boolean)){try{w=await st(r,k)}catch(A){return le({status:pe(A),error:await te(A,{url:r,params:i,route:{id:d.id}}),url:r,route:d})}if(w.type==="redirect")return w}const T=w?.nodes;let H=!1;const G=S.map(async(A,x)=>{if(!A)return;const C=h.branch[x],D=T?.[x];if((!D||D.type==="skip")&&A[1]===C?.loader&&!Ye(H,L,I,b,C.universal?.uses,i))return C;if(H=!0,D?.type==="error")throw D;return ye({loader:A[1],url:r,params:i,route:d,parent:async()=>{const be={};for(let Ee=0;Ee<x;Ee+=1)Object.assign(be,(await G[Ee])?.data);return be},server_data_node:ve(D===void 0&&A[0]?{type:"skip"}:D??null,A[0]?C?.server:void 0)})});for(const A of G)A.catch(()=>{});const K=[];for(let A=0;A<S.length;A+=1)if(S[A])try{K.push(await G[A])}catch(x){if(x instanceof nt)return{type:"redirect",location:x.location};let C=pe(x),D;if(T?.includes(x))C=x.status??C,D=x.error;else if(x instanceof _e)D=x.body;else{if(await J.updated.check())return await z(r);D=await te(x,{params:i,url:r,route:{id:d.id}})}const ue=await ze(A,K,p);return ue?await Q({url:r,params:i,branch:K.slice(0,ue.idx).concat(ue.node),status:C,error:D,route:d}):await Ze(r,{id:d.id},D,C)}else K.push(void 0);return await Q({url:r,params:i,branch:K,status:200,error:null,route:d,form:t?void 0:null})}async function ze(n,t,r){for(;n--;)if(r[n]){let i=n;for(;!t[i];)i-=1;try{return{idx:i+1,node:{node:await r[n](),loader:r[n],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:n,error:t,url:r,route:i}){const d={};let p=null;if(e.server_loads[0]===0)try{const w=await st(r,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;p=w.nodes[0]??null}catch{(r.origin!==Ae||r.pathname!==location.pathname||v)&&await z(r)}const m=await ye({loader:o,url:r,params:d,route:i,parent:()=>Promise.resolve({}),server_data_node:ve(p)}),S={node:await u(),loader:u,universal:null,server:null,data:null};return await Q({url:r,params:d,branch:[m,S],status:n,error:t,route:null})}function ee(n,t){if($e(n,B))return;const r=We(n.pathname);for(const i of c){const d=i.exec(r);if(d)return{id:n.pathname+n.search,invalidating:t,route:i,params:St(d),url:n}}}function We(n){return Et(n.slice(B.length)||"/")}function Xe({url:n,type:t,intent:r,delta:i}){let d=!1;const p=it(h,r,n,t);i!==void 0&&(p.navigation.delta=i);const g={...p.navigation,cancel:()=>{d=!0,p.reject(new Error("navigation was cancelled"))}};return U||s.before_navigate.forEach(m=>m(g)),d?null:p}async function fe({type:n,url:t,popped:r,keepfocus:i,noscroll:d,replace_state:p,redirect_count:g=0,nav_token:m={},accept:S=ot,block:w=ot}){const I=ee(t,!1),L=Xe({url:t,type:n,delta:r?.delta,intent:I});if(!L){w();return}const b=N,O=M;S(),U=!0,P&&J.navigating.set(L.navigation),X=m;let k=I&&await we(I);if(!k){if($e(t,B))return await z(t);k=await Ze(t,{id:null},await te(new Ve(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=I?.url||t,X!==m)return L.reject(new Error("navigation was aborted")),!1;if(k.type==="redirect")if(g>=20)k=await le({status:500,error:await te(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(k.location,t).href,{},g+1,m),!1;else k.props.page.status>=400&&await J.updated.check()&&await z(t);y.length=0,se=!1,$=!0,Ne(b),He(O),k.props.page.url.pathname!==t.pathname&&(t.pathname=k.props.page.url.pathname);const T=r?r.state:{};if(!r){const A=p?0:1,x={[q]:N+=A,[Y]:M+=A};(p?he:rt).call(history,x,"",t),p||at(N,M)}if(re[N]=T,_=null,k.props.page.state=T,P){h=k.state,k.props.page&&(k.props.page.url=t);const A=(await Promise.all(s.on_navigate.map(x=>x(L.navigation)))).filter(x=>typeof x=="function");if(A.length>0){let x=function(){s.after_navigate=s.after_navigate.filter(C=>!A.includes(C))};A.push(x),s.after_navigate.push(...A)}V.$set(k.props),F=!0}else Ke(k);const{activeElement:H}=document;await ke();const G=r?r.scroll:d?Te():null;if(E){const A=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));G?scrollTo(G.x,G.y):A?A.scrollIntoView():scrollTo(0,0)}const K=document.activeElement!==H&&document.activeElement!==document.body;!i&&!K&&Ue(),E=!0,k.props.page&&(j=k.props.page),U=!1,n==="popstate"&&qe(M),L.fulfil(void 0),s.after_navigate.forEach(A=>A(L.navigation)),J.navigating.set(null),$=!1}async function Ze(n,t,r,i){return n.origin===Ae&&n.pathname===location.pathname&&!v?await le({status:i,error:r,url:n,route:t}):await z(n)}function wt(){let n;f.addEventListener("mousemove",p=>{const g=p.target;clearTimeout(n),n=setTimeout(()=>{i(g,2)},20)});function t(p){i(p.composedPath()[0],1)}f.addEventListener("mousedown",t),f.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver(p=>{for(const g of p)g.isIntersecting&&(ce(g.target.href),r.unobserve(g.target))},{threshold:0});function i(p,g){const m=Qe(p,f);if(!m)return;const{url:S,external:w,download:I}=Re(m,B);if(w||I)return;const L=de(m);if(!L.reload)if(g<=L.preload_data){const b=ee(S,!1);b&&Ge(b)}else g<=L.preload_code&&ce(S.pathname)}function d(){r.disconnect();for(const p of f.querySelectorAll("a")){const{url:g,external:m,download:S}=Re(p,B);if(m||S)continue;const w=de(p);w.reload||(w.preload_code===et.viewport&&r.observe(p),w.preload_code===et.eager&&ce(g.pathname))}}s.after_navigate.push(d),d()}function te(n,t){if(n instanceof _e)return n.body;const r=pe(n),i=Wt(n);return e.hooks.handleError({error:n,event:t,status:r,message:i})??{message:i}}return{after_navigate:n=>{Se(()=>(s.after_navigate.push(n),()=>{const t=s.after_navigate.indexOf(n);s.after_navigate.splice(t,1)}))},before_navigate:n=>{Se(()=>(s.before_navigate.push(n),()=>{const t=s.before_navigate.indexOf(n);s.before_navigate.splice(t,1)}))},on_navigate:n=>{Se(()=>(s.on_navigate.push(n),()=>{const t=s.on_navigate.indexOf(n);s.on_navigate.splice(t,1)}))},disable_scroll_handling:()=>{($||!P)&&(E=!1)},goto:(n,t={})=>(n=ne(n),n.origin!==Ae?Promise.reject(new Error("goto: invalid URL")):ie(n,t,0)),invalidate:n=>{if(typeof n=="function")y.push(n);else{const{href:t}=new URL(n,location.href);y.push(r=>r.href===t)}return Be()},invalidate_all:()=>(se=!0,Be()),preload_data:async n=>{const t=ne(n),r=ee(t,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);const i=await Ge(r);if(i.type==="redirect")return{type:i.type,location:i.location};const{status:d,data:p}=i.props.page??j;return{type:i.type,status:d,data:p}},preload_code:n=>ce(n),push_state:(n,t)=>{const r={[q]:N+=1,[Y]:M,[Oe]:j.url.href};rt.call(history,r,"",ne(n)),j={...j,state:t},V.$set({page:j}),re[N]=t,at(N,M)},replace_state:(n,t)=>{const r={[q]:N,[Y]:M,[Oe]:j.url.href};he.call(history,r,"",ne(n)),j={...j,state:t},V.$set({page:j}),re[N]=t},apply_action:async n=>{if(n.type==="error"){const t=new URL(location.href),{branch:r,route:i}=h;if(!i)return;const d=await ze(h.branch.length,r,i.errors);if(d){const p=await Q({url:t,params:h.params,branch:r.slice(0,d.idx).concat(d.node),status:n.status??500,error:n.error,route:i});h=p.state,V.$set(p.props),ke().then(Ue)}}else n.type==="redirect"?ie(n.location,{invalidateAll:!0},0):(V.$set({form:null,page:{...j,form:n.data,status:n.status}}),await ke(),V.$set({form:n.data}),n.type==="success"&&Ue())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Je(),!U){const i=it(h,void 0,null,"leave"),d={...i.navigation,cancel:()=>{r=!0,i.reject(new Error("navigation was cancelled"))}};s.before_navigate.forEach(p=>p(d))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Je()}),navigator.connection?.saveData||wt(),f.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Qe(t.composedPath()[0],f);if(!r)return;const{url:i,external:d,target:p,download:g}=Re(r,B);if(!i)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const m=de(r);if(!(r instanceof SVGAElement)&&i.protocol!==location.protocol&&!(i.protocol==="https:"||i.protocol==="http:")||g)return;if(d||m.reload){Xe({url:i,type:"link"})?U=!0:t.preventDefault();return}const[w,I]=i.href.split("#");if(I!==void 0&&w===Pe(location)){if(h.url.hash===i.hash){t.preventDefault(),r.ownerDocument.getElementById(I)?.scrollIntoView();return}if(R=!0,Ne(N),n(i),!m.replace_state)return;R=!1}t.preventDefault(),fe({type:"link",url:i,keepfocus:m.keepfocus,noscroll:m.noscroll,replace_state:m.replace_state??i.href===location.href})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),i=t.submitter;if((i?.formMethod||r.method)!=="get")return;const p=new URL(i?.hasAttribute("formaction")&&i?.formAction||r.action);if($e(p,B))return;const g=t.target,m=de(g);if(m.reload)return;t.preventDefault(),t.stopPropagation();const S=new FormData(g),w=i?.getAttribute("name");w&&S.append(w,i?.getAttribute("value")??""),p.search=new URLSearchParams(S).toString(),fe({type:"form",url:p,keepfocus:m.keepfocus,noscroll:m.noscroll,replace_state:m.replace_state??p.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[q]){const r=t.state[q];if(X={},r===N)return;const i=W[r],d=re[r]??{},p=new URL(t.state[Oe]??location.href),g=t.state[Y],m=Pe(location)===Pe(h.url);if(g===M&&(F||m)){n(p),W[N]=Te(),i&&scrollTo(i.x,i.y),d!==j.state&&(j={...j,state:d},V.$set({page:j})),N=r;return}const w=r-N;await fe({type:"popstate",url:p,popped:{state:d,scroll:i,delta:w},accept:()=>{N=r,M=g},block:()=>{history.go(-w)},nav_token:X})}else if(!R){const r=new URL(location.href);n(r)}}),addEventListener("hashchange",()=>{R&&(R=!1,he.call(history,{...history.state,[q]:++N,[Y]:M},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&J.navigating.set(null)});function n(t){h.url=t,J.page.set({...j,url:t}),J.page.notify()}},_hydrate:async({status:n=200,error:t,node_ids:r,params:i,route:d,data:p,form:g})=>{v=!0;const m=new URL(location.href);({params:i={},route:d={id:null}}=ee(m,!1)||{});let S;try{const w=r.map(async(b,O)=>{const k=p[O];return k?.uses&&(k.uses=yt(k.uses)),ye({loader:e.nodes[b],url:m,params:i,route:d,parent:async()=>{const T={};for(let H=0;H<O;H+=1)Object.assign(T,(await w[H]).data);return T},server_data_node:ve(k)})}),I=await Promise.all(w),L=c.find(({id:b})=>b===d.id);if(L){const b=L.layouts;for(let O=0;O<b.length;O++)b[O]||I.splice(O,0,void 0)}S=await Q({url:m,params:i,branch:I,status:n,error:t,form:g,route:L??null})}catch(w){if(w instanceof nt){await z(new URL(w.location,location.href));return}S=await le({status:pe(w),error:await te(w,{url:m,params:i,route:d}),url:m,route:d})}S.props.page&&(S.props.page.state={}),Ke(S)}}}async function st(e,a){const c=new URL(e);c.pathname=Pt(e.pathname),e.pathname.endsWith("/")&&c.searchParams.append(zt,"1"),c.searchParams.append(Yt,a.map(u=>u?"1":"0").join(""));const o=await ut(c.href);if(o.headers.get("content-type")?.includes("text/html")&&await z(e),!o.ok)throw new _e(o.status,await o.json());return new Promise(async u=>{const f=new Map,y=o.body.getReader(),l=new TextDecoder;function _(h){return gt(h,{Promise:v=>new Promise((P,E)=>{f.set(v,{fulfil:P,reject:E})})})}let s="";for(;;){const{done:h,value:v}=await y.read();if(h&&!s)break;for(s+=!v&&s?`
`:l.decode(v);;){const P=s.indexOf(`
`);if(P===-1)break;const E=JSON.parse(s.slice(0,P));if(s=s.slice(P+1),E.type==="redirect")return u(E);if(E.type==="data")E.nodes?.forEach($=>{$?.type==="data"&&($.uses=yt($.uses),$.data=_($.data))}),u(E);else if(E.type==="chunk"){const{id:$,data:U,error:R}=E,F=f.get($);f.delete($),R?F.reject(_(R)):F.fulfil(_(U))}}}})}function yt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Ue(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,c=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),c!==null?a.setAttribute("tabindex",c):a.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const u=[];for(let f=0;f<o.rangeCount;f+=1)u.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===u.length){for(let f=0;f<o.rangeCount;f+=1){const y=u[f],l=o.getRangeAt(f);if(y.commonAncestorContainer!==l.commonAncestorContainer||y.startContainer!==l.startContainer||y.endContainer!==l.endContainer||y.startOffset!==l.startOffset||y.endOffset!==l.endOffset)return}o.removeAllRanges()}})}}}function it(e,a,c,o){let u,f;const y=new Promise((_,s)=>{u=_,f=s});return y.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:c&&{params:a?.params??null,route:{id:a?.route?.id??null},url:c},willUnload:!a,type:o,complete:y},fulfil:u,reject:f}}async function en(e,a,c){const o=Xt(e,a);c?await o._hydrate(c):o.goto(location.href,{replaceState:!0}),o._start_router()}export{en as start};
