import{F as Le,S as X,i as Y,s as Z,G as ye,e as z,H as T,c as B,a as v,I as M,d as _,b as i,f as q,J as ee,g as L,K as b,L as C,M as Ee,N as $e,O as ze,q as N,o as S,P as Ae,E as W,Q as Be,w as G,x as R,y as J,B as K,v as Te,C as ue,R as Me,T as He,U as Fe,V as Oe,W as Ce,t as re,h as ne,l as fe,k as F,m as O,j as Ne,X as Se,Y as he,Z as Ie,_ as Pe,$ as de,a0 as Ve,a1 as se}from"../chunks/index-6f42d8d0.js";import{B as De}from"../chunks/base-125bc896.js";import{b as Q}from"../chunks/paths-396f020f.js";import{w as Ue}from"../chunks/index-de51bf0a.js";const qe=()=>{const l=Le("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},We={subscribe(l){return qe().page.subscribe(l)}};function Ge(l){let e,t;return{c(){e=T("path"),t=T("path"),this.h()},l(s){e=M(s,"path",{d:!0}),v(e).forEach(_),t=M(s,"path",{d:!0}),v(t).forEach(_),this.h()},h(){i(e,"d","M6.507 16.127A8.983 8.983 0 013 9c0-4.966 4.033-9 9-9 4.966 0 9 4.034 9 9 0 2.9-1.374 5.481-3.507 7.126l.003.003c-.996 1.038-.996 1.038-.996 2.83h-9c0-1.791 0-1.791-.996-2.83l.003-.003zm9.835-.962c-.667.702-.96 1.106-1.132 1.598-.07.198-.119.416-.152.695H8.941a3.132 3.132 0 00-.151-.695c-.173-.493-.465-.896-1.132-1.598a1.513 1.513 0 00-.235-.225A7.49 7.49 0 014.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.49 7.49 0 01-2.923 5.94 1.513 1.513 0 00-.235.225z"),i(t,"d","M16.5 17.5h-9v3.841c0 1.468 1.237 2.66 2.761 2.66h3.478c1.523 0 2.761-1.192 2.761-2.66V17.5zM15 19v2.341c0 .656-.58 1.16-1.261 1.16H10.26C9.582 22.5 9 21.996 9 21.34V19h6z")},m(s,r){L(s,e,r),L(s,t,r)},p:W,d(s){s&&_(e),s&&_(t)}}}function Re(l){let e,t,s,r,n,a;const o=l[7].default,u=ye(o,l,l[6],null),f=u||Ge();return{c(){e=z("button"),t=T("svg"),f&&f.c(),this.h()},l(c){e=B(c,"BUTTON",{"aria-pressed":!0,"aria-label":!0,class:!0});var d=v(e);t=M(d,"svg",{xmlns:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,"aria-label":!0,style:!0,class:!0});var $=v(t);f&&f.l($),$.forEach(_),d.forEach(_),this.h()},h(){i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"viewBox","0 0 24 24"),i(t,"fill-rule","evenodd"),i(t,"clip-rule","evenodd"),i(t,"stroke-linejoin","round"),i(t,"stroke-miterlimit","2"),i(t,"aria-label",l[1]),q(t,"width",l[2]),i(t,"class","svelte-1jhec4k"),ee(t,"svg-circle",l[3]),i(e,"aria-pressed",l[5]),i(e,"aria-label",l[0]),i(e,"class",s="svg-button "+l[4].join(" ")+" svelte-1jhec4k")},m(c,d){L(c,e,d),b(e,t),f&&f.m(t,null),r=!0,n||(a=[C(e,"click",l[8]),C(e,"mousedown",l[9]),C(e,"blur",l[10]),C(e,"mouseout",l[11])],n=!0)},p(c,[d]){u&&u.p&&(!r||d&64)&&Ee(u,o,c,c[6],r?ze(o,c[6],d,null):$e(c[6]),null),(!r||d&2)&&i(t,"aria-label",c[1]),(!r||d&4)&&q(t,"width",c[2]),d&8&&ee(t,"svg-circle",c[3]),(!r||d&32)&&i(e,"aria-pressed",c[5]),(!r||d&1)&&i(e,"aria-label",c[0]),(!r||d&16&&s!==(s="svg-button "+c[4].join(" ")+" svelte-1jhec4k"))&&i(e,"class",s)},i(c){r||(N(f,c),r=!0)},o(c){S(f,c),r=!1},d(c){c&&_(e),f&&f.d(c),n=!1,Ae(a)}}}function Je(l,e,t){let{$$slots:s={},$$scope:r}=e,n=!1,{buttonLabel:a}=e,{svgLabel:o}=e,{width:u="2em"}=e,{circle:f=!1}=e,{classes:c=[]}=e;function d(m){Be.call(this,l,m)}const $=()=>{t(5,n=!0)},g=()=>t(5,n=!1),p=()=>t(5,n=!1);return l.$$set=m=>{"buttonLabel"in m&&t(0,a=m.buttonLabel),"svgLabel"in m&&t(1,o=m.svgLabel),"width"in m&&t(2,u=m.width),"circle"in m&&t(3,f=m.circle),"classes"in m&&t(4,c=m.classes),"$$scope"in m&&t(6,r=m.$$scope)},[a,o,u,f,c,n,r,s,d,$,g,p]}class Ke extends X{constructor(e){super(),Y(this,e,Je,Re,Z,{buttonLabel:0,svgLabel:1,width:2,circle:3,classes:4})}}function _e(l){let e;return{c(){e=T("rect"),this.h()},l(t){e=M(t,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0}),v(e).forEach(_),this.h()},h(){i(e,"class","hamburger-mid svelte-t8c00g"),i(e,"x","0"),i(e,"y","11"),i(e,"height","3"),i(e,"width","24")},m(t,s){L(t,e,s)},d(t){t&&_(e)}}}function Qe(l){let e,t,s,r=!l[0]&&_e();return{c(){e=T("g"),t=T("rect"),r&&r.c(),s=T("rect"),this.h()},l(n){e=M(n,"g",{class:!0});var a=v(e);t=M(a,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0}),v(t).forEach(_),r&&r.l(a),s=M(a,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0}),v(s).forEach(_),a.forEach(_),this.h()},h(){i(t,"class","hamburger-top svelte-t8c00g"),i(t,"x","0"),i(t,"y","0"),i(t,"height","3"),i(t,"width","24"),i(s,"class","hamburger-bot svelte-t8c00g"),i(s,"x","0"),i(s,"y","21"),i(s,"height","3"),i(s,"width","24"),i(e,"class","hamburger svelte-t8c00g"),ee(e,"is-active",l[0])},m(n,a){L(n,e,a),b(e,t),r&&r.m(e,null),b(e,s)},p(n,a){n[0]?r&&(r.d(1),r=null):r||(r=_e(),r.c(),r.m(e,s)),a&1&&ee(e,"is-active",n[0])},d(n){n&&_(e),r&&r.d()}}}function Xe(l){let e,t;return e=new Ke({props:{classes:l[1],buttonLabel:"open navigation",svgLabel:"hamburger menu",circle:!1,$$slots:{default:[Qe]},$$scope:{ctx:l}}}),e.$on("click",l[2]),e.$on("click",l[3]),{c(){G(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){J(e,s,r),t=!0},p(s,[r]){const n={};r&2&&(n.classes=s[1]),r&17&&(n.$$scope={dirty:r,ctx:s}),e.$set(n)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function Ye(l,e,t){let{classes:s=[]}=e,{open:r=!1}=e;Te(()=>{t(0,r=!1)});const n=()=>{t(0,r=!r)};function a(o){Be.call(this,l,o)}return l.$$set=o=>{"classes"in o&&t(1,s=o.classes),"open"in o&&t(0,r=o.open)},[r,s,n,a]}class Ze extends X{constructor(e){super(),Y(this,e,Ye,Xe,Z,{classes:1,open:0})}}function xe(l){const e=l-1;return e*e*e+1}function me(l,{delay:e=0,duration:t=400,easing:s=xe}={}){const r=getComputedStyle(l),n=+r.opacity,a=parseFloat(r.height),o=parseFloat(r.paddingTop),u=parseFloat(r.paddingBottom),f=parseFloat(r.marginTop),c=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),$=parseFloat(r.borderBottomWidth);return{delay:e,duration:t,easing:s,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*n};height: ${g*a}px;padding-top: ${g*o}px;padding-bottom: ${g*u}px;margin-top: ${g*f}px;margin-bottom: ${g*c}px;border-top-width: ${g*d}px;border-bottom-width: ${g*$}px;`}}function pe(l){return Object.prototype.toString.call(l)==="[object Date]"}function le(l,e){if(l===e||l!==l)return()=>l;const t=typeof l;if(t!==typeof e||Array.isArray(l)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const s=e.map((r,n)=>le(l[n],r));return r=>s.map(n=>n(r))}if(t==="object"){if(!l||!e)throw new Error("Object cannot be null");if(pe(l)&&pe(e)){l=l.getTime(),e=e.getTime();const n=e-l;return a=>new Date(l+a*n)}const s=Object.keys(e),r={};return s.forEach(n=>{r[n]=le(l[n],e[n])}),n=>{const a={};return s.forEach(o=>{a[o]=r[o](n)}),a}}if(t==="number"){const s=e-l;return r=>l+r*s}throw new Error(`Cannot interpolate ${t} values`)}function ge(l,e={}){const t=Ue(l);let s,r=l;function n(a,o){if(l==null)return t.set(l=a),Promise.resolve();r=a;let u=s,f=!1,{delay:c=0,duration:d=400,easing:$=Fe,interpolate:g=le}=ue(ue({},e),o);if(d===0)return u&&(u.abort(),u=null),t.set(l=r),Promise.resolve();const p=Me()+c;let m;return s=He(k=>{if(k<p)return!0;f||(m=g(l,a),typeof d=="function"&&(d=d(l,a)),f=!0),u&&(u.abort(),u=null);const I=k-p;return I>d?(t.set(l=a),!1):(t.set(l=m($(I/d))),!0)}),s.promise}return{set:n,update:(a,o)=>n(a(r,l),o),subscribe:t.subscribe}}function et(l){let e,t,s,r,n;return{c(){e=z("button"),t=T("svg"),s=T("path"),this.h()},l(a){e=B(a,"BUTTON",{class:!0,"aria-pressed":!0});var o=v(e);t=M(o,"svg",{viewBox:!0,xmlns:!0,"stroke-linejoin":!0,class:!0});var u=v(t);s=M(u,"path",{d:!0}),v(s).forEach(_),u.forEach(_),o.forEach(_),this.h()},h(){i(s,"d","M13.525 1.212c-3.658-.498-7.33.876-9.734 3.629a10.95 10.95 0 00-2.579 8.684c.578 4.241 3.767 7.85 7.935 8.981.941.256 1.901.386 2.852.386l.154-.001a3.272 3.272 0 002.741-1.553 3.256 3.256 0 00.166-3.136l-.216-.453a2.09 2.09 0 01.102-2.083 2.183 2.183 0 012.806-.822l.449.214a3.24 3.24 0 001.417.326c1.778 0 3.247-1.45 3.274-3.232a10.834 10.834 0 00-.385-3.006c-1.132-4.167-4.741-7.356-8.982-7.934zm5.618 11.882l-.449-.214c-1.991-.956-4.433-.216-5.593 1.627-.804 1.281-.885 2.806-.222 4.185l.217.453c.164.342.144.723-.056 1.047a1.08 1.08 0 01-.919.521h-.122a8.768 8.768 0 01-2.282-.308c-3.336-.905-5.885-3.789-6.346-7.173-.349-2.565.384-5.036 2.062-6.959a8.715 8.715 0 017.799-2.902c3.384.461 6.268 3.011 7.173 6.346a8.68 8.68 0 01.307 2.404c-.013.879-.92 1.288-1.569.973zm-12.045-.005a1.635 1.635 0 11-.001 3.27 1.635 1.635 0 01.001-3.27zm0-4.357a1.635 1.635 0 11-.001 3.27 1.635 1.635 0 01.001-3.27zm7.625-3.267a1.634 1.634 0 110 3.269 1.634 1.634 0 010-3.269zm-4.357 0a1.634 1.634 0 110 3.269 1.634 1.634 0 010-3.269z"),i(t,"viewBox","0 0 24 24"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"stroke-linejoin","round"),i(t,"class","svelte-1m0sput"),i(e,"class","svgo-button svelte-1m0sput"),i(e,"aria-pressed",tt)},m(a,o){L(a,e,o),b(e,t),b(t,s),r||(n=C(e,"click",l[0]),r=!0)},p:W,i:W,o:W,d(a){a&&_(e),r=!1,n()}}}let tt=!1;function st(l){let e=1;return[()=>{e=(e+1)%3,document.documentElement.style.setProperty("--theme",`var(--theme-${e+1})`)}]}class lt extends X{constructor(e){super(),Y(this,e,st,et,Z,{})}}function be(l,e,t){const s=l.slice();return s[13]=e[t],s}function ve(l){let e,t,s,r,n,a;return{c(){e=z("li"),t=z("a"),s=re("Home"),this.h()},l(o){e=B(o,"LI",{class:!0});var u=v(e);t=B(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var f=v(t);s=ne(f,"Home"),f.forEach(_),u.forEach(_),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href",r=`${Q}/`),i(t,"class","svelte-10z8dsi"),i(e,"class","shadow-pop")},m(o,u){L(o,e,u),b(e,t),b(t,s),n||(a=C(t,"click",l[10]),n=!0)},p:W,d(o){o&&_(e),n=!1,a()}}}function ke(l){let e,t,s=l[13].label+"",r,n,a,o,u;return{c(){e=z("li"),t=z("a"),r=re(s),a=F(),this.h()},l(f){e=B(f,"LI",{});var c=v(e);t=B(c,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var d=v(t);r=ne(d,s),d.forEach(_),a=O(c),c.forEach(_),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href",n=`${Q}/${l[13].href}`),i(t,"class","svelte-10z8dsi")},m(f,c){L(f,e,c),b(e,t),b(t,r),b(e,a),o||(u=C(t,"click",l[11]),o=!0)},p(f,c){c&1&&s!==(s=f[13].label+"")&&Ne(r,s),c&1&&n!==(n=`${Q}/${f[13].href}`)&&i(t,"href",n)},d(f){f&&_(e),o=!1,u()}}}function we(l){let e,t=l[5].url.pathname!==`/${l[13].href}`&&ke(l);return{c(){t&&t.c(),e=fe()},l(s){t&&t.l(s),e=fe()},m(s,r){t&&t.m(s,r),L(s,e,r)},p(s,r){s[5].url.pathname!==`/${s[13].href}`?t?t.p(s,r):(t=ke(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&_(e)}}}function rt(l){let e,t,s,r,n,a,o,u,f,c,d,$,g,p,m,k,I,x,ae,H,D;u=new lt({});function je(h){l[9](h)}let ie={};l[1]!==void 0&&(ie.open=l[1]),c=new Ze({props:ie}),Oe.push(()=>Ce(c,"open",je)),c.$on("click",l[8]);let y=l[5].url.pathname!=="/"&&ve(l),P=l[0],E=[];for(let h=0;h<P.length;h+=1)E[h]=we(be(l,P,h));return{c(){e=z("div"),t=z("header"),s=z("div"),r=z("a"),n=z("img"),o=F(),G(u.$$.fragment),f=F(),G(c.$$.fragment),$=F(),g=z("nav"),p=z("ul"),m=z("h2"),k=re("Navigation"),I=F(),y&&y.c(),x=F();for(let h=0;h<E.length;h+=1)E[h].c();this.h()},l(h){e=B(h,"DIV",{class:!0});var A=v(e);t=B(A,"HEADER",{class:!0});var j=v(t);s=B(j,"DIV",{class:!0});var w=v(s);r=B(w,"A",{href:!0,id:!0,style:!0,class:!0});var U=v(r);n=B(U,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),U.forEach(_),o=O(w),R(u.$$.fragment,w),f=O(w),R(c.$$.fragment,w),w.forEach(_),$=O(j),g=B(j,"NAV",{style:!0,class:!0});var oe=v(g);p=B(oe,"UL",{class:!0});var V=v(p);m=B(V,"H2",{});var ce=v(m);k=ne(ce,"Navigation"),ce.forEach(_),I=O(V),y&&y.l(V),x=O(V);for(let te=0;te<E.length;te+=1)E[te].l(V);V.forEach(_),oe.forEach(_),j.forEach(_),A.forEach(_),this.h()},h(){Se(n.src,a=`${Q}/favicon.svg`)||i(n,"src",a),i(n,"alt","Logo"),i(n,"width","36"),i(n,"height","36"),i(n,"class","svelte-10z8dsi"),i(r,"href",`${Q}/`),i(r,"id","link-to-base"),q(r,"margin-right","auto"),i(r,"class","svelte-10z8dsi"),i(s,"class","header-options svelte-10z8dsi"),i(p,"class","unlist svelte-10z8dsi"),he(()=>l[12].call(p)),q(g,"height",Math.max(l[1]?l[2]*l[3]:l[2]*l[4],1)+"px"),i(g,"class","svelte-10z8dsi"),i(t,"class","svelte-10z8dsi"),i(e,"class","spacer svelte-10z8dsi")},m(h,A){L(h,e,A),b(e,t),b(t,s),b(s,r),b(r,n),b(s,o),J(u,s,null),b(s,f),J(c,s,null),b(t,$),b(t,g),b(g,p),b(p,m),b(m,k),b(p,I),y&&y.m(p,null),b(p,x);for(let j=0;j<E.length;j+=1)E[j].m(p,null);ae=Ie(p,l[12].bind(p)),D=!0},p(h,[A]){const j={};if(!d&&A&2&&(d=!0,j.open=h[1],Pe(()=>d=!1)),c.$set(j),h[5].url.pathname!=="/"?y?y.p(h,A):(y=ve(h),y.c(),y.m(p,x)):y&&(y.d(1),y=null),A&291){P=h[0];let w;for(w=0;w<P.length;w+=1){const U=be(h,P,w);E[w]?E[w].p(U,A):(E[w]=we(U),E[w].c(),E[w].m(p,null))}for(;w<E.length;w+=1)E[w].d(1);E.length=P.length}(!D||A&30)&&q(g,"height",Math.max(h[1]?h[2]*h[3]:h[2]*h[4],1)+"px")},i(h){D||(N(u.$$.fragment,h),N(c.$$.fragment,h),he(()=>{H||(H=de(p,me,{},!0)),H.run(1)}),D=!0)},o(h){S(u.$$.fragment,h),S(c.$$.fragment,h),H||(H=de(p,me,{},!1)),H.run(0),D=!1},d(h){h&&_(e),K(u),K(c),y&&y.d(),Ve(E,h),ae(),h&&H&&H.end()}}}function nt(l,e,t){let s,r,n;se(l,We,k=>t(5,n=k));let{links:a=[]}=e,o=!1,u=0;const f=ge(0,{duration:200});se(l,f,k=>t(3,s=k));const c=ge(0,{duration:200});se(l,c,k=>t(4,r=k));const d=()=>{f.update(k=>k?0:1),c.update(k=>k?0:1)};function $(k){o=k,t(1,o)}const g=()=>{t(1,o=!1),d()},p=()=>{t(1,o=!1),d()};function m(){u=this.clientHeight,t(2,u)}return l.$$set=k=>{"links"in k&&t(0,a=k.links)},[a,o,u,s,r,n,f,c,d,$,g,p,m]}class at extends X{constructor(e){super(),Y(this,e,nt,rt,Z,{links:0})}}function it(l){let e,t,s;e=new at({props:{links:l[0]}});const r=l[2].default,n=ye(r,l,l[3],null);return{c(){G(e.$$.fragment),t=F(),n&&n.c()},l(a){R(e.$$.fragment,a),t=O(a),n&&n.l(a)},m(a,o){J(e,a,o),L(a,t,o),n&&n.m(a,o),s=!0},p(a,o){n&&n.p&&(!s||o&8)&&Ee(n,r,a,a[3],s?ze(r,a[3],o,null):$e(a[3]),null)},i(a){s||(N(e.$$.fragment,a),N(n,a),s=!0)},o(a){S(e.$$.fragment,a),S(n,a),s=!1},d(a){K(e,a),a&&_(t),n&&n.d(a)}}}function ot(l){let e,t;return e=new De({props:{$$slots:{default:[it]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){J(e,s,r),t=!0},p(s,[r]){const n={};r&8&&(n.$$scope={dirty:r,ctx:s}),e.$set(n)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function ct(l,e,t){let{$$slots:s={},$$scope:r}=e;const n="Example";let a=[{href:"spotify-waveform",label:"Spotify Analyzer"}];return l.$$set=o=>{"$$scope"in o&&t(3,r=o.$$scope)},[a,n,s,r]}class _t extends X{constructor(e){super(),Y(this,e,ct,ot,Z,{title:1})}get title(){return this.$$.ctx[1]}}export{_t as default};
