import{S as j,i as F,s as G,e as g,w as X,c as q,a as k,x as Z,d as n,f as ee,b as d,g as p,y as J,q as L,o as O,B as U,G as ae,H as oe,E as ie,P as re,Y as M,k as y,a0 as ne,m as H,I as w,R as ue,Z as S,_ as V,$ as Y,t as B,h as Q,j as le}from"../chunks/index-c195f927.js";import{b as fe}from"../chunks/paths-396f020f.js";import{B as me}from"../chunks/buttonBase-4d1fd433.js";function ce(o){let e;return{c(){e=ae("path"),this.h()},l(i){e=oe(i,"path",{d:!0}),k(e).forEach(n),this.h()},h(){d(e,"d","M12.929.545A1.09 1.09 0 0011.043.54l-9.53 16.361a1.088 1.088 0 00.942 1.639h18.989a1.09 1.09 0 00.944-1.637L12.928.544z")},m(i,l){p(i,e,l)},p:ie,d(i){i&&n(e)}}}function pe(o){let e,i,l;return i=new me({props:{buttonLabel:"To Top",svgLabel:"arrow up",circle:!0,$$slots:{default:[ce]},$$scope:{ctx:o}}}),i.$on("click",o[1]),{c(){e=g("div"),X(i.$$.fragment),this.h()},l(s){e=q(s,"DIV",{style:!0,class:!0});var a=k(e);Z(i.$$.fragment,a),a.forEach(n),this.h()},h(){ee(e,"visibility",o[0]?"visible":"hidden"),d(e,"class","svelte-1s9tm7b")},m(s,a){p(s,e,a),J(i,e,null),l=!0},p(s,[a]){const r={};a&4&&(r.$$scope={dirty:a,ctx:s}),i.$set(r),(!l||a&1)&&ee(e,"visibility",s[0]?"visible":"hidden")},i(s){l||(L(i.$$.fragment,s),l=!0)},o(s){O(i.$$.fragment,s),l=!1},d(s){s&&n(e),U(i)}}}function _e(o,e,i){let{visible:l=!1}=e;const s=()=>{scrollTo({top:0})};return o.$$set=a=>{"visible"in a&&i(0,l=a.visible)},[l,s]}class de extends j{constructor(e){super(),F(this,e,_e,pe,G,{visible:0})}}const he=o=>({}),te=o=>({}),ve=o=>({}),se=o=>({});function be(o){let e,i,l;return{c(){e=g("header"),i=g("h1"),l=B(o[0]),this.h()},l(s){e=q(s,"HEADER",{class:!0});var a=k(e);i=q(a,"H1",{class:!0});var r=k(i);l=Q(r,o[0]),r.forEach(n),a.forEach(n),this.h()},h(){d(i,"class","stack"),d(e,"class","dark contrast svelte-1q3s8tw")},m(s,a){p(s,e,a),w(e,i),w(i,l)},p(s,a){a&1&&le(l,s[0])},d(s){s&&n(e)}}}function ge(o){let e,i,l,s,a;return{c(){e=g("h2"),i=B("Theme Colors"),l=y(),s=g("p"),a=B(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptas maiores dicta\r
			exercitationem nihil quae enim similique porro esse corporis rem quisquam, illum quaerat alias\r
			tenetur illo vitae dignissimos natus nobis quasi ipsa eum eveniet repellendus suscipit. Quam\r
			aspernatur voluptate minus vitae temporibus animi eius soluta doloremque earum quae ea\r
			molestiae, quia quod inventore, dolorem facere asperiores quis ipsam odit? Quas atque esse\r
			libero doloribus nobis vel quo id itaque, dignissimos nam suscipit deleniti magni ratione\r
			repellendus beatae repudiandae. Optio odio eveniet provident ab iste vitae illum illo\r
			exercitationem maxime impedit debitis porro assumenda, magnam fugiat molestiae necessitatibus\r
			quas nihil.`),this.h()},l(r){e=q(r,"H2",{});var m=k(e);i=Q(m,"Theme Colors"),m.forEach(n),l=H(r),s=q(r,"P",{class:!0});var _=k(s);a=Q(_,`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptas maiores dicta\r
			exercitationem nihil quae enim similique porro esse corporis rem quisquam, illum quaerat alias\r
			tenetur illo vitae dignissimos natus nobis quasi ipsa eum eveniet repellendus suscipit. Quam\r
			aspernatur voluptate minus vitae temporibus animi eius soluta doloremque earum quae ea\r
			molestiae, quia quod inventore, dolorem facere asperiores quis ipsam odit? Quas atque esse\r
			libero doloribus nobis vel quo id itaque, dignissimos nam suscipit deleniti magni ratione\r
			repellendus beatae repudiandae. Optio odio eveniet provident ab iste vitae illum illo\r
			exercitationem maxime impedit debitis porro assumenda, magnam fugiat molestiae necessitatibus\r
			quas nihil.`),_.forEach(n),this.h()},h(){d(s,"class","box")},m(r,m){p(r,e,m),w(e,i),p(r,l,m),p(r,s,m),w(s,a)},p:ie,d(r){r&&n(e),r&&n(l),r&&n(s)}}}function qe(o){let e=!1,i=()=>{e=!1},l,s,a,r,m,_,f,c,T,R,A,E,h,C,W;re(o[4]),document.title=m=o[0];const D=o[3].header,N=M(D,o,o[2],se),v=N||be(o),K=o[3].default,P=M(K,o,o[2],null),$=P||ge(),z=o[3].footer,b=M(z,o,o[2],te);return E=new de({props:{visible:o[1]>50}}),{c(){s=g("link"),a=g("link"),r=g("link"),_=y(),v&&v.c(),f=y(),c=g("main"),$&&$.c(),T=y(),R=g("footer"),b&&b.c(),A=y(),X(E.$$.fragment),this.h()},l(t){const u=ne('[data-svelte="svelte-gzq4ss"]',document.head);s=q(u,"LINK",{rel:!0,href:!0}),a=q(u,"LINK",{rel:!0,href:!0,crossorigin:!0}),r=q(u,"LINK",{href:!0,rel:!0}),u.forEach(n),_=H(t),v&&v.l(t),f=H(t),c=q(t,"MAIN",{class:!0});var I=k(c);$&&$.l(I),I.forEach(n),T=H(t),R=q(t,"FOOTER",{class:!0});var x=k(R);b&&b.l(x),x.forEach(n),A=H(t),Z(E.$$.fragment,t),this.h()},h(){d(s,"rel","preconnect"),d(s,"href","https://fonts.googleapis.com"),d(a,"rel","preconnect"),d(a,"href","https://fonts.gstatic.com"),d(a,"crossorigin",""),d(r,"href","https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"),d(r,"rel","stylesheet"),d(c,"class","stack"),d(R,"class","svelte-1q3s8tw")},m(t,u){w(document.head,s),w(document.head,a),w(document.head,r),p(t,_,u),v&&v.m(t,u),p(t,f,u),p(t,c,u),$&&$.m(c,null),p(t,T,u),p(t,R,u),b&&b.m(R,null),p(t,A,u),J(E,t,u),h=!0,C||(W=ue(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(i,100),o[4]()}),C=!0)},p(t,[u]){u&2&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,t[1]),l=setTimeout(i,100)),(!h||u&1)&&m!==(m=t[0])&&(document.title=m),N?N.p&&(!h||u&4)&&S(N,D,t,t[2],h?Y(D,t[2],u,ve):V(t[2]),se):v&&v.p&&(!h||u&1)&&v.p(t,h?u:-1),P&&P.p&&(!h||u&4)&&S(P,K,t,t[2],h?Y(K,t[2],u,null):V(t[2]),null),b&&b.p&&(!h||u&4)&&S(b,z,t,t[2],h?Y(z,t[2],u,he):V(t[2]),te);const I={};u&2&&(I.visible=t[1]>50),E.$set(I)},i(t){h||(L(v,t),L($,t),L(b,t),L(E.$$.fragment,t),h=!0)},o(t){O(v,t),O($,t),O(b,t),O(E.$$.fragment,t),h=!1},d(t){n(s),n(a),n(r),t&&n(_),v&&v.d(t),t&&n(f),t&&n(c),$&&$.d(t),t&&n(T),t&&n(R),b&&b.d(t),t&&n(A),U(E,t),C=!1,W()}}}function $e(o,e,i){let{$$slots:l={},$$scope:s}=e,{title:a="Placeholder"}=e,r=0;function m(){i(1,r=window.pageYOffset)}return o.$$set=_=>{"title"in _&&i(0,a=_.title),"$$scope"in _&&i(2,s=_.$$scope)},[a,r,s,l,m]}class ke extends j{constructor(e){super(),F(this,e,$e,qe,G,{title:0})}}function we(o){let e,i=o[1].message+"",l,s,a,r,m,_;return{c(){e=g("div"),l=B(i),s=y(),a=g("br"),r=y(),m=g("a"),_=B("Return to Homepage"),this.h()},l(f){e=q(f,"DIV",{class:!0});var c=k(e);l=Q(c,i),c.forEach(n),s=H(f),a=q(f,"BR",{}),r=H(f),m=q(f,"A",{href:!0});var T=k(m);_=Q(T,"Return to Homepage"),T.forEach(n),this.h()},h(){d(e,"class","svelte-o1ccox"),d(m,"href",fe+"/")},m(f,c){p(f,e,c),w(e,l),p(f,s,c),p(f,a,c),p(f,r,c),p(f,m,c),w(m,_)},p(f,c){c&2&&i!==(i=f[1].message+"")&&le(l,i)},d(f){f&&n(e),f&&n(s),f&&n(a),f&&n(r),f&&n(m)}}}function Ee(o){let e,i;return e=new ke({props:{title:"ERROR: "+o[0],$$slots:{default:[we]},$$scope:{ctx:o}}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,s){J(e,l,s),i=!0},p(l,[s]){const a={};s&1&&(a.title="ERROR: "+l[0]),s&6&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){i||(L(e.$$.fragment,l),i=!0)},o(l){O(e.$$.fragment,l),i=!1},d(l){U(e,l)}}}const Le=({error:o,status:e})=>({props:{error:o,status:e}});function Te(o,e,i){let{status:l=404}=e,{error:s}=e;return o.$$set=a=>{"status"in a&&i(0,l=a.status),"error"in a&&i(1,s=a.error)},[l,s]}class Oe extends j{constructor(e){super(),F(this,e,Te,Ee,G,{status:0,error:1})}}export{Oe as default,Le as load};
