import{F as ze,S as K,i as R,s as G,G as $e,e as E,H as z,c as L,a as p,I as A,d as h,b as o,f as Q,J as Y,g as B,K as _,L as te,M as ke,N as we,O as ye,q as M,o as T,E as W,P as Ee,w as N,x as O,y as S,B as V,v as Ae,C as ie,Q as Be,R as Me,T as je,U as He,t as le,h as se,l as oe,k as P,m as I,j as Te,V as ce,W as qe,n as Ce,p as Fe,X as ue,Y as Pe,Z as x,_ as Ie,$ as Ne,a0 as Oe}from"../chunks/index-2f204da9.js";import{b as X}from"../chunks/paths-396f020f.js";import{B as Se}from"../chunks/base-8ac4cfcc.js";import{w as Ve}from"../chunks/index-9c179107.js";const De=()=>{const s=ze("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},Ue={subscribe(s){return De().page.subscribe(s)}};function We(s){let e,t;return{c(){e=z("path"),t=z("path"),this.h()},l(l){e=A(l,"path",{d:!0}),p(e).forEach(h),t=A(l,"path",{d:!0}),p(t).forEach(h),this.h()},h(){o(e,"d","M6.507 16.127A8.983 8.983 0 013 9c0-4.966 4.033-9 9-9 4.966 0 9 4.034 9 9 0 2.9-1.374 5.481-3.507 7.126l.003.003c-.996 1.038-.996 1.038-.996 2.83h-9c0-1.791 0-1.791-.996-2.83l.003-.003zm9.835-.962c-.667.702-.96 1.106-1.132 1.598-.07.198-.119.416-.152.695H8.941a3.132 3.132 0 00-.151-.695c-.173-.493-.465-.896-1.132-1.598a1.513 1.513 0 00-.235-.225A7.49 7.49 0 014.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.49 7.49 0 01-2.923 5.94 1.513 1.513 0 00-.235.225z"),o(t,"d","M16.5 17.5h-9v3.841c0 1.468 1.237 2.66 2.761 2.66h3.478c1.523 0 2.761-1.192 2.761-2.66V17.5zM15 19v2.341c0 .656-.58 1.16-1.261 1.16H10.26C9.582 22.5 9 21.996 9 21.34V19h6z")},m(l,r){B(l,e,r),B(l,t,r)},p:W,d(l){l&&h(e),l&&h(t)}}}function Ke(s){let e,t,l,r,n,a;const i=s[6].default,m=$e(i,s,s[5],null),f=m||We();return{c(){e=E("button"),t=z("svg"),f&&f.c(),this.h()},l(u){e=L(u,"BUTTON",{"aria-pressed":!0,"aria-label":!0,class:!0});var c=p(e);t=A(c,"svg",{xmlns:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,"aria-label":!0,style:!0,class:!0});var y=p(t);f&&f.l(y),y.forEach(h),c.forEach(h),this.h()},h(){o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 24 24"),o(t,"fill-rule","evenodd"),o(t,"clip-rule","evenodd"),o(t,"stroke-linejoin","round"),o(t,"stroke-miterlimit","2"),o(t,"aria-label",s[1]),Q(t,"width",s[2]),o(t,"class","svelte-chefua"),Y(t,"svg-circle",s[3]),o(e,"aria-pressed",Re),o(e,"aria-label",s[0]),o(e,"class",l="svg-button "+s[4].join(" ")+" svelte-chefua")},m(u,c){B(u,e,c),_(e,t),f&&f.m(t,null),r=!0,n||(a=te(e,"click",s[7]),n=!0)},p(u,[c]){m&&m.p&&(!r||c&32)&&ke(m,i,u,u[5],r?ye(i,u[5],c,null):we(u[5]),null),(!r||c&2)&&o(t,"aria-label",u[1]),(!r||c&4)&&Q(t,"width",u[2]),c&8&&Y(t,"svg-circle",u[3]),(!r||c&1)&&o(e,"aria-label",u[0]),(!r||c&16&&l!==(l="svg-button "+u[4].join(" ")+" svelte-chefua"))&&o(e,"class",l)},i(u){r||(M(f,u),r=!0)},o(u){T(f,u),r=!1},d(u){u&&h(e),f&&f.d(u),n=!1,a()}}}let Re=!1;function Ge(s,e,t){let{$$slots:l={},$$scope:r}=e,{buttonLabel:n}=e,{svgLabel:a}=e,{width:i="2em"}=e,{circle:m=!1}=e,{classes:f=[]}=e;function u(c){Ee.call(this,s,c)}return s.$$set=c=>{"buttonLabel"in c&&t(0,n=c.buttonLabel),"svgLabel"in c&&t(1,a=c.svgLabel),"width"in c&&t(2,i=c.width),"circle"in c&&t(3,m=c.circle),"classes"in c&&t(4,f=c.classes),"$$scope"in c&&t(5,r=c.$$scope)},[n,a,i,m,f,r,l,u]}class Le extends K{constructor(e){super(),R(this,e,Ge,Ke,G,{buttonLabel:0,svgLabel:1,width:2,circle:3,classes:4})}}function fe(s){let e;return{c(){e=z("rect"),this.h()},l(t){e=A(t,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0}),p(e).forEach(h),this.h()},h(){o(e,"class","hamburger-mid svelte-t8c00g"),o(e,"x","0"),o(e,"y","11"),o(e,"height","3"),o(e,"width","24")},m(t,l){B(t,e,l)},d(t){t&&h(e)}}}function Je(s){let e,t,l,r=!s[0]&&fe();return{c(){e=z("g"),t=z("rect"),r&&r.c(),l=z("rect"),this.h()},l(n){e=A(n,"g",{class:!0});var a=p(e);t=A(a,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0}),p(t).forEach(h),r&&r.l(a),l=A(a,"rect",{class:!0,x:!0,y:!0,height:!0,width:!0}),p(l).forEach(h),a.forEach(h),this.h()},h(){o(t,"class","hamburger-top svelte-t8c00g"),o(t,"x","0"),o(t,"y","0"),o(t,"height","3"),o(t,"width","24"),o(l,"class","hamburger-bot svelte-t8c00g"),o(l,"x","0"),o(l,"y","21"),o(l,"height","3"),o(l,"width","24"),o(e,"class","hamburger svelte-t8c00g"),Y(e,"is-active",s[0])},m(n,a){B(n,e,a),_(e,t),r&&r.m(e,null),_(e,l)},p(n,a){n[0]?r&&(r.d(1),r=null):r||(r=fe(),r.c(),r.m(e,l)),a&1&&Y(e,"is-active",n[0])},d(n){n&&h(e),r&&r.d()}}}function Qe(s){let e,t;return e=new Le({props:{classes:s[1],buttonLabel:"open navigation",svgLabel:"hamburger menu",$$slots:{default:[Je]},$$scope:{ctx:s}}}),e.$on("click",s[2]),e.$on("click",s[3]),{c(){N(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,r){S(e,l,r),t=!0},p(l,[r]){const n={};r&2&&(n.classes=l[1]),r&17&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function Xe(s,e,t){let{classes:l=[]}=e,{open:r=!1}=e;Ae(()=>{t(0,r=!1)});const n=()=>{t(0,r=!r)};function a(i){Ee.call(this,s,i)}return s.$$set=i=>{"classes"in i&&t(1,l=i.classes),"open"in i&&t(0,r=i.open)},[r,l,n,a]}class Ye extends K{constructor(e){super(),R(this,e,Xe,Qe,G,{classes:1,open:0})}}function Ze(s){let e,t,l,r,n;return{c(){e=z("svg"),t=z("path"),l=z("path"),r=z("circle"),n=z("path"),this.h()},l(a){e=A(a,"svg",{xmlns:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,"aria-label":!0,class:!0});var i=p(e);t=A(i,"path",{d:!0,fill:!0}),p(t).forEach(h),l=A(i,"path",{d:!0,fill:!0}),p(l).forEach(h),r=A(i,"circle",{cx:!0,cy:!0,r:!0,transform:!0,fill:!0}),p(r).forEach(h),n=A(i,"path",{d:!0,fill:!0}),p(n).forEach(h),i.forEach(h),this.h()},h(){o(t,"d","M24 3.403A3.405 3.405 0 0020.597 0H3.403A3.405 3.405 0 000 3.403v17.194A3.405 3.405 0 003.403 24h17.194A3.405 3.405 0 0024 20.597V3.403z"),o(t,"fill","var(--theme, #678bff)"),o(l,"d","M5.476 4.833a7.578 7.578 0 016.216-3.24 7.578 7.578 0 016.282 3.334 7.578 7.578 0 01-6.217 3.242 7.578 7.578 0 01-6.281-3.336z"),o(l,"fill","#fff"),o(r,"cx","11.725"),o(r,"cy","4.881"),o(r,"r","2.2"),o(r,"transform","matrix(.92237 0 0 .92237 .91 .379)"),o(r,"fill","black"),o(n,"d","M9.138 12.291a.443.443 0 01.017.078c.008.097-.007.212-.04.345l-1.432 5.995c-.284 1.17-.023 2.125.568 2.792.58.655 1.5 1.04 2.602 1.04 1.155 0 2.514-.429 3.64-1.38l6.238-5.336c.719-.647 1.044-1.368.684-2.05v-.001c-.373-.705-1.237-.843-1.984-.22l-.004.003a1588.016 1588.016 0 00-6.838 5.86c-.46.394-1.046.577-1.418.577-.289 0-.553-.07-.705-.284-.182-.256-.201-.657-.06-1.232l1.404-5.807c.42-1.713-.797-3.171-2.533-3.171-.67 0-1.3.27-1.896.771L3.006 14.01l-.013.01c-.749.691-.657 1.482-.273 1.94.396.472 1.166.671 1.895.063L8.498 12.7c.155-.136.278-.24.386-.317.08-.057.136-.098.207-.098.014 0 .035.003.047.005z"),o(n,"fill","black"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox","0 0 24 24"),o(e,"fill-rule","evenodd"),o(e,"clip-rule","evenodd"),o(e,"stroke-linejoin","round"),o(e,"stroke-miterlimit","2"),o(e,"aria-label","Illumincrotty logo, a cursive letter i dotted with an eyeball "),o(e,"class","svelte-1f2z7l3")},m(a,i){B(a,e,i),_(e,t),_(e,l),_(e,r),_(e,n)},p:W,i:W,o:W,d(a){a&&h(e)}}}function xe(s){return[]}class et extends K{constructor(e){super(),R(this,e,xe,Ze,G,{})}}function tt(s){const e=s-1;return e*e*e+1}function he(s,{delay:e=0,duration:t=400,easing:l=tt}={}){const r=getComputedStyle(s),n=+r.opacity,a=parseFloat(r.height),i=parseFloat(r.paddingTop),m=parseFloat(r.paddingBottom),f=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),c=parseFloat(r.borderTopWidth),y=parseFloat(r.borderBottomWidth);return{delay:e,duration:t,easing:l,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*n};height: ${$*a}px;padding-top: ${$*i}px;padding-bottom: ${$*m}px;margin-top: ${$*f}px;margin-bottom: ${$*u}px;border-top-width: ${$*c}px;border-bottom-width: ${$*y}px;`}}function de(s){return Object.prototype.toString.call(s)==="[object Date]"}function ee(s,e){if(s===e||s!==s)return()=>s;const t=typeof s;if(t!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const l=e.map((r,n)=>ee(s[n],r));return r=>l.map(n=>n(r))}if(t==="object"){if(!s||!e)throw new Error("Object cannot be null");if(de(s)&&de(e)){s=s.getTime(),e=e.getTime();const n=e-s;return a=>new Date(s+a*n)}const l=Object.keys(e),r={};return l.forEach(n=>{r[n]=ee(s[n],e[n])}),n=>{const a={};return l.forEach(i=>{a[i]=r[i](n)}),a}}if(t==="number"){const l=e-s;return r=>s+r*l}throw new Error(`Cannot interpolate ${t} values`)}function me(s,e={}){const t=Ve(s);let l,r=s;function n(a,i){if(s==null)return t.set(s=a),Promise.resolve();r=a;let m=l,f=!1,{delay:u=0,duration:c=400,easing:y=je,interpolate:$=ee}=ie(ie({},e),i);if(c===0)return m&&(m.abort(),m=null),t.set(s=r),Promise.resolve();const F=Be()+u;let q;return l=Me(b=>{if(b<F)return!0;f||(q=$(s,a),typeof c=="function"&&(c=c(s,a)),f=!0),m&&(m.abort(),m=null);const j=b-F;return j>c?(t.set(s=a),!1):(t.set(s=q(y(j/c))),!0)}),l.promise}return{set:n,update:(a,i)=>n(a(r,s),i),subscribe:t.subscribe}}function lt(s){let e;return{c(){e=z("path"),this.h()},l(t){e=A(t,"path",{d:!0}),p(e).forEach(h),this.h()},h(){o(e,"d","M13.525 1.212c-3.658-.498-7.33.876-9.734 3.629a10.95 10.95 0 00-2.579 8.684c.578 4.241 3.767 7.85 7.935 8.981.941.256 1.901.386 2.852.386l.154-.001a3.272 3.272 0 002.741-1.553 3.256 3.256 0 00.166-3.136l-.216-.453a2.09 2.09 0 01.102-2.083 2.183 2.183 0 012.806-.822l.449.214a3.24 3.24 0 001.417.326c1.778 0 3.247-1.45 3.274-3.232a10.834 10.834 0 00-.385-3.006c-1.132-4.167-4.741-7.356-8.982-7.934zm5.618 11.882l-.449-.214c-1.991-.956-4.433-.216-5.593 1.627-.804 1.281-.885 2.806-.222 4.185l.217.453c.164.342.144.723-.056 1.047a1.08 1.08 0 01-.919.521h-.122a8.768 8.768 0 01-2.282-.308c-3.336-.905-5.885-3.789-6.346-7.173-.349-2.565.384-5.036 2.062-6.959a8.715 8.715 0 017.799-2.902c3.384.461 6.268 3.011 7.173 6.346a8.68 8.68 0 01.307 2.404c-.013.879-.92 1.288-1.569.973zm-12.045-.005a1.635 1.635 0 11-.001 3.27 1.635 1.635 0 01.001-3.27zm0-4.357a1.635 1.635 0 11-.001 3.27 1.635 1.635 0 01.001-3.27zm7.625-3.267a1.634 1.634 0 110 3.269 1.634 1.634 0 010-3.269zm-4.357 0a1.634 1.634 0 110 3.269 1.634 1.634 0 010-3.269z")},m(t,l){B(t,e,l)},p:W,d(t){t&&h(e)}}}function st(s){let e,t;return e=new Le({props:{buttonLabel:"Change Page Color Palette",svgLabel:"Paint Palette Icon",$$slots:{default:[lt]},$$scope:{ctx:s}}}),e.$on("click",s[0]),{c(){N(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,r){S(e,l,r),t=!0},p(l,[r]){const n={};r&4&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){V(e,l)}}}function rt(s){let e=1;return[()=>{e=(e+1)%3,document.documentElement.style.setProperty("--theme",`var(--theme-${e+1})`)}]}class nt extends K{constructor(e){super(),R(this,e,rt,st,G,{})}}function _e(s,e,t){const l=s.slice();return l[13]=e[t],l}function pe(s){let e,t,l;function r(a){s[9](a)}let n={};return s[1]!==void 0&&(n.open=s[1]),e=new Ye({props:n}),Ie.push(()=>Ne(e,"open",r)),e.$on("click",s[8]),{c(){N(e.$$.fragment)},l(a){O(e.$$.fragment,a)},m(a,i){S(e,a,i),l=!0},p(a,i){const m={};!t&&i&2&&(t=!0,m.open=a[1],He(()=>t=!1)),e.$set(m)},i(a){l||(M(e.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),l=!1},d(a){V(e,a)}}}function ge(s){let e,t,l,r,n,a;return{c(){e=E("li"),t=E("a"),l=le("Home"),this.h()},l(i){e=L(i,"LI",{class:!0});var m=p(e);t=L(m,"A",{"sveltekit:prefetch":!0,href:!0});var f=p(t);l=se(f,"Home"),f.forEach(h),m.forEach(h),this.h()},h(){o(t,"sveltekit:prefetch",""),o(t,"href",r=`${X}/`),o(e,"class","shadow-pop")},m(i,m){B(i,e,m),_(e,t),_(t,l),n||(a=te(t,"click",s[10]),n=!0)},p:W,d(i){i&&h(e),n=!1,a()}}}function be(s){let e,t,l=s[13].label+"",r,n,a,i,m;return{c(){e=E("li"),t=E("a"),r=le(l),a=P(),this.h()},l(f){e=L(f,"LI",{});var u=p(e);t=L(u,"A",{"sveltekit:prefetch":!0,href:!0});var c=p(t);r=se(c,l),c.forEach(h),a=I(u),u.forEach(h),this.h()},h(){var f;o(t,"sveltekit:prefetch",""),o(t,"href",n=(f=s[13])!=null&&f.external?`${s[13].href}`:`${X}/${s[13].href}`)},m(f,u){B(f,e,u),_(e,t),_(t,r),_(e,a),i||(m=te(t,"click",s[11]),i=!0)},p(f,u){var c;u&1&&l!==(l=f[13].label+"")&&Te(r,l),u&1&&n!==(n=(c=f[13])!=null&&c.external?`${f[13].href}`:`${X}/${f[13].href}`)&&o(t,"href",n)},d(f){f&&h(e),i=!1,m()}}}function ve(s){let e,t=s[5].url.pathname!==`/${s[13].href}`&&be(s);return{c(){t&&t.c(),e=oe()},l(l){t&&t.l(l),e=oe()},m(l,r){t&&t.m(l,r),B(l,e,r)},p(l,r){l[5].url.pathname!==`/${l[13].href}`?t?t.p(l,r):(t=be(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&h(e)}}}function at(s){let e,t,l,r,n,a,i,m,f,u,c,y,$,F,q,b,j,J;n=new et({}),i=new nt({});let v=s[0].length&&pe(s),k=s[5].url.pathname!=="/"&&ge(s),D=s[0],w=[];for(let d=0;d<D.length;d+=1)w[d]=ve(_e(s,D,d));return{c(){e=E("div"),t=E("header"),l=E("div"),r=E("a"),N(n.$$.fragment),a=P(),N(i.$$.fragment),m=P(),v&&v.c(),f=P(),u=E("nav"),c=E("ul"),y=E("h2"),$=le("Navigation"),F=P(),k&&k.c(),q=P();for(let d=0;d<w.length;d+=1)w[d].c();this.h()},l(d){e=L(d,"DIV",{class:!0});var H=p(e);t=L(H,"HEADER",{class:!0});var g=p(t);l=L(g,"DIV",{class:!0});var C=p(l);r=L(C,"A",{href:!0,id:!0,style:!0,class:!0});var re=p(r);O(n.$$.fragment,re),re.forEach(h),a=I(C),O(i.$$.fragment,C),m=I(C),v&&v.l(C),C.forEach(h),f=I(g),u=L(g,"NAV",{style:!0,class:!0});var ne=p(u);c=L(ne,"UL",{class:!0});var U=p(c);y=L(U,"H2",{});var ae=p(y);$=se(ae,"Navigation"),ae.forEach(h),F=I(U),k&&k.l(U),q=I(U);for(let Z=0;Z<w.length;Z+=1)w[Z].l(U);U.forEach(h),ne.forEach(h),g.forEach(h),H.forEach(h),this.h()},h(){o(r,"href",`${X}/`),o(r,"id","link-to-base"),Q(r,"margin-right","auto"),o(r,"class","svelte-1yqeloo"),o(l,"class","header-options svelte-1yqeloo"),o(c,"class","unlist svelte-1yqeloo"),ce(()=>s[12].call(c)),Q(u,"height",Math.max(s[1]?s[2]*s[3]:s[2]*s[4],1)+"px"),o(u,"class","svelte-1yqeloo"),o(t,"class","svelte-1yqeloo"),o(e,"class","spacer svelte-1yqeloo")},m(d,H){B(d,e,H),_(e,t),_(t,l),_(l,r),S(n,r,null),_(l,a),S(i,l,null),_(l,m),v&&v.m(l,null),_(t,f),_(t,u),_(u,c),_(c,y),_(y,$),_(c,F),k&&k.m(c,null),_(c,q);for(let g=0;g<w.length;g+=1)w[g].m(c,null);b=qe(c,s[12].bind(c)),J=!0},p(d,[H]){if(d[0].length?v?(v.p(d,H),H&1&&M(v,1)):(v=pe(d),v.c(),M(v,1),v.m(l,null)):v&&(Ce(),T(v,1,1,()=>{v=null}),Fe()),d[5].url.pathname!=="/"?k?k.p(d,H):(k=ge(d),k.c(),k.m(c,q)):k&&(k.d(1),k=null),H&291){D=d[0];let g;for(g=0;g<D.length;g+=1){const C=_e(d,D,g);w[g]?w[g].p(C,H):(w[g]=ve(C),w[g].c(),w[g].m(c,null))}for(;g<w.length;g+=1)w[g].d(1);w.length=D.length}(!J||H&30)&&Q(u,"height",Math.max(d[1]?d[2]*d[3]:d[2]*d[4],1)+"px")},i(d){J||(M(n.$$.fragment,d),M(i.$$.fragment,d),M(v),ce(()=>{j||(j=ue(c,he,{},!0)),j.run(1)}),J=!0)},o(d){T(n.$$.fragment,d),T(i.$$.fragment,d),T(v),j||(j=ue(c,he,{},!1)),j.run(0),J=!1},d(d){d&&h(e),V(n),V(i),v&&v.d(),k&&k.d(),Pe(w,d),b(),d&&j&&j.end()}}}function it(s,e,t){let l,r,n;x(s,Ue,b=>t(5,n=b));let{links:a=[]}=e,i=!1,m=0;const f=me(0,{duration:200});x(s,f,b=>t(3,l=b));const u=me(0,{duration:200});x(s,u,b=>t(4,r=b));const c=()=>{f.update(b=>b?0:1),u.update(b=>b?0:1)};function y(b){i=b,t(1,i)}const $=()=>{t(1,i=!1),c()},F=()=>{t(1,i=!1),c()};function q(){m=this.clientHeight,t(2,m)}return s.$$set=b=>{"links"in b&&t(0,a=b.links)},[a,i,m,l,r,n,f,u,c,y,$,F,q]}class ot extends K{constructor(e){super(),R(this,e,it,at,G,{links:0})}}function ct(s){let e,t,l;e=new ot({props:{links:s[0]}});const r=s[2].default,n=$e(r,s,s[3],null);return{c(){N(e.$$.fragment),t=P(),n&&n.c()},l(a){O(e.$$.fragment,a),t=I(a),n&&n.l(a)},m(a,i){S(e,a,i),B(a,t,i),n&&n.m(a,i),l=!0},p(a,i){n&&n.p&&(!l||i&8)&&ke(n,r,a,a[3],l?ye(r,a[3],i,null):we(a[3]),null)},i(a){l||(M(e.$$.fragment,a),M(n,a),l=!0)},o(a){T(e.$$.fragment,a),T(n,a),l=!1},d(a){V(e,a),a&&h(t),n&&n.d(a)}}}function ut(s){let e,t,l,r;return l=new Se({props:{$$slots:{default:[ct]},$$scope:{ctx:s}}}),{c(){e=E("link"),t=P(),N(l.$$.fragment),this.h()},l(n){const a=Oe('[data-svelte="svelte-8umjz8"]',document.head);e=L(a,"LINK",{rel:!0,type:!0,href:!0}),a.forEach(h),t=I(n),O(l.$$.fragment,n),this.h()},h(){o(e,"rel","icon"),o(e,"type","image/svg"),o(e,"href",`${X}/favicon.svg`)},m(n,a){_(document.head,e),B(n,t,a),S(l,n,a),r=!0},p(n,[a]){const i={};a&8&&(i.$$scope={dirty:a,ctx:n}),l.$set(i)},i(n){r||(M(l.$$.fragment,n),r=!0)},o(n){T(l.$$.fragment,n),r=!1},d(n){h(e),n&&h(t),V(l,n)}}}function ft(s,e,t){let{$$slots:l={},$$scope:r}=e;const n="Example";let a=[{href:"https://illumincrotty.github.io/spotify-waveform/",label:"Spotify Data Analysis",external:!0}];return s.$$set=i=>{"$$scope"in i&&t(3,r=i.$$scope)},[a,n,l,r]}class pt extends K{constructor(e){super(),R(this,e,ft,ut,G,{title:1})}get title(){return this.$$.ctx[1]}}export{pt as default};
