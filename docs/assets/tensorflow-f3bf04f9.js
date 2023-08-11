import{c as Mt}from"./_commonjsHelpers-edff4021.js";import{r as Zu}from"./___vite-browser-external_commonjs-proxy-4a6280a4.js";import{d as Qu,r as e1,e as t1,o as n1,c as r1,f as s1,_ as a1}from"./index-e2d53348.js";var i1={};(function(){var n;function e(h){var m=0;return function(){return m<h.length?{done:!1,value:h[m++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,m,b){return h==Array.prototype||h==Object.prototype||(h[m]=b.value),h};function r(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mt=="object"&&Mt];for(var m=0;m<h.length;++m){var b=h[m];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var s=r(this);function a(h,m){if(m)e:{var b=s;h=h.split(".");for(var I=0;I<h.length-1;I++){var R=h[I];if(!(R in b))break e;b=b[R]}h=h[h.length-1],I=b[h],m=m(I),m!=I&&m!=null&&t(b,h,{configurable:!0,writable:!0,value:m})}}a("Symbol",function(h){function m(M){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new b(I+(M||"")+"_"+R++,M)}function b(M,L){this.g=M,t(this,"description",{configurable:!0,writable:!0,value:L})}if(h)return h;b.prototype.toString=function(){return this.g};var I="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",R=0;return m}),a("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<m.length;b++){var I=s[m[b]];typeof I=="function"&&typeof I.prototype[h]!="function"&&t(I.prototype,h,{configurable:!0,writable:!0,value:function(){return i(e(this))}})}return h});function i(h){return h={next:h},h[Symbol.iterator]=function(){return this},h}function o(h){var m=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return m?m.call(h):{next:e(h)}}function u(h){if(!(h instanceof Array)){h=o(h);for(var m,b=[];!(m=h.next()).done;)b.push(m.value);h=b}return h}var c=typeof Object.create=="function"?Object.create:function(h){function m(){}return m.prototype=h,new m},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var p;e:{var g={a:!0},v={};try{v.__proto__=g,p=v.a;break e}catch{}p=!1}f=p?function(h,m){if(h.__proto__=m,h.__proto__!==m)throw new TypeError(h+" is not extensible");return h}:null}var S=f;function k(h,m){if(h.prototype=c(m.prototype),h.prototype.constructor=h,S)S(h,m);else for(var b in m)if(b!="prototype")if(Object.defineProperties){var I=Object.getOwnPropertyDescriptor(m,b);I&&Object.defineProperty(h,b,I)}else h[b]=m[b];h.ea=m.prototype}function E(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function F(h){if(h.l)throw new TypeError("Generator is already running");h.l=!0}E.prototype.o=function(h){this.h=h};function j(h,m){h.j={U:m,V:!0},h.g=h.m||h.s}E.prototype.return=function(h){this.j={return:h},this.g=this.s};function W(h,m,b){return h.g=b,{value:m}}function B(h){this.g=new E,this.h=h}function K(h,m){F(h.g);var b=h.g.i;return b?G(h,"return"in b?b.return:function(I){return{value:I,done:!0}},m,h.g.return):(h.g.return(m),Q(h))}function G(h,m,b,I){try{var R=m.call(h.g.i,b);if(!(R instanceof Object))throw new TypeError("Iterator result "+R+" is not an object");if(!R.done)return h.g.l=!1,R;var M=R.value}catch(L){return h.g.i=null,j(h.g,L),Q(h)}return h.g.i=null,I.call(h.g,M),Q(h)}function Q(h){for(;h.g.g;)try{var m=h.h(h.g);if(m)return h.g.l=!1,{value:m.value,done:!1}}catch(b){h.g.h=void 0,j(h.g,b)}if(h.g.l=!1,h.g.j){if(m=h.g.j,h.g.j=null,m.V)throw m.U;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function re(h){this.next=function(m){return F(h.g),h.g.i?m=G(h,h.g.i.next,m,h.g.o):(h.g.o(m),m=Q(h)),m},this.throw=function(m){return F(h.g),h.g.i?m=G(h,h.g.i.throw,m,h.g.o):(j(h.g,m),m=Q(h)),m},this.return=function(m){return K(h,m)},this[Symbol.iterator]=function(){return this}}function q(h,m){return m=new re(new B(m)),S&&h.prototype&&S(m,h.prototype),m}function te(h,m){h instanceof String&&(h+="");var b=0,I=!1,R={next:function(){if(!I&&b<h.length){var M=b++;return{value:m(M,h[M]),done:!1}}return I=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}var ue=typeof Object.assign=="function"?Object.assign:function(h,m){for(var b=1;b<arguments.length;b++){var I=arguments[b];if(I)for(var R in I)Object.prototype.hasOwnProperty.call(I,R)&&(h[R]=I[R])}return h};a("Object.assign",function(h){return h||ue}),a("Promise",function(h){function m(L){this.h=0,this.i=void 0,this.g=[],this.o=!1;var V=this.j();try{L(V.resolve,V.reject)}catch(X){V.reject(X)}}function b(){this.g=null}function I(L){return L instanceof m?L:new m(function(V){V(L)})}if(h)return h;b.prototype.h=function(L){if(this.g==null){this.g=[];var V=this;this.i(function(){V.l()})}this.g.push(L)};var R=s.setTimeout;b.prototype.i=function(L){R(L,0)},b.prototype.l=function(){for(;this.g&&this.g.length;){var L=this.g;this.g=[];for(var V=0;V<L.length;++V){var X=L[V];L[V]=null;try{X()}catch(ne){this.j(ne)}}}this.g=null},b.prototype.j=function(L){this.i(function(){throw L})},m.prototype.j=function(){function L(ne){return function(oe){X||(X=!0,ne.call(V,oe))}}var V=this,X=!1;return{resolve:L(this.C),reject:L(this.l)}},m.prototype.C=function(L){if(L===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(L instanceof m)this.F(L);else{e:switch(typeof L){case"object":var V=L!=null;break e;case"function":V=!0;break e;default:V=!1}V?this.u(L):this.m(L)}},m.prototype.u=function(L){var V=void 0;try{V=L.then}catch(X){this.l(X);return}typeof V=="function"?this.G(V,L):this.m(L)},m.prototype.l=function(L){this.s(2,L)},m.prototype.m=function(L){this.s(1,L)},m.prototype.s=function(L,V){if(this.h!=0)throw Error("Cannot settle("+L+", "+V+"): Promise already settled in state"+this.h);this.h=L,this.i=V,this.h===2&&this.D(),this.A()},m.prototype.D=function(){var L=this;R(function(){if(L.B()){var V=s.console;typeof V<"u"&&V.error(L.i)}},1)},m.prototype.B=function(){if(this.o)return!1;var L=s.CustomEvent,V=s.Event,X=s.dispatchEvent;return typeof X>"u"?!0:(typeof L=="function"?L=new L("unhandledrejection",{cancelable:!0}):typeof V=="function"?L=new V("unhandledrejection",{cancelable:!0}):(L=s.document.createEvent("CustomEvent"),L.initCustomEvent("unhandledrejection",!1,!0,L)),L.promise=this,L.reason=this.i,X(L))},m.prototype.A=function(){if(this.g!=null){for(var L=0;L<this.g.length;++L)M.h(this.g[L]);this.g=null}};var M=new b;return m.prototype.F=function(L){var V=this.j();L.J(V.resolve,V.reject)},m.prototype.G=function(L,V){var X=this.j();try{L.call(V,X.resolve,X.reject)}catch(ne){X.reject(ne)}},m.prototype.then=function(L,V){function X(de,le){return typeof de=="function"?function(se){try{ne(de(se))}catch(l){oe(l)}}:le}var ne,oe,we=new m(function(de,le){ne=de,oe=le});return this.J(X(L,ne),X(V,oe)),we},m.prototype.catch=function(L){return this.then(void 0,L)},m.prototype.J=function(L,V){function X(){switch(ne.h){case 1:L(ne.i);break;case 2:V(ne.i);break;default:throw Error("Unexpected state: "+ne.h)}}var ne=this;this.g==null?M.h(X):this.g.push(X),this.o=!0},m.resolve=I,m.reject=function(L){return new m(function(V,X){X(L)})},m.race=function(L){return new m(function(V,X){for(var ne=o(L),oe=ne.next();!oe.done;oe=ne.next())I(oe.value).J(V,X)})},m.all=function(L){var V=o(L),X=V.next();return X.done?I([]):new m(function(ne,oe){function we(se){return function(l){de[se]=l,le--,le==0&&ne(de)}}var de=[],le=0;do de.push(void 0),le++,I(X.value).J(we(de.length-1),oe),X=V.next();while(!X.done)})},m}),a("Object.is",function(h){return h||function(m,b){return m===b?m!==0||1/m===1/b:m!==m&&b!==b}}),a("Array.prototype.includes",function(h){return h||function(m,b){var I=this;I instanceof String&&(I=String(I));var R=I.length;for(b=b||0,0>b&&(b=Math.max(b+R,0));b<R;b++){var M=I[b];if(M===m||Object.is(M,m))return!0}return!1}}),a("String.prototype.includes",function(h){return h||function(m,b){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,b||0)!==-1}}),a("Array.prototype.keys",function(h){return h||function(){return te(this,function(m){return m})}});var Ne=this||self;function ie(h,m){h=h.split(".");var b=Ne;h[0]in b||typeof b.execScript>"u"||b.execScript("var "+h[0]);for(var I;h.length&&(I=h.shift());)h.length||m===void 0?b[I]&&b[I]!==Object.prototype[I]?b=b[I]:b=b[I]={}:b[I]=m}function ke(h,m){return m=String.fromCharCode.apply(null,m),h==null?m:h+m}var Pe,He=typeof TextDecoder<"u",ze,xt=typeof TextEncoder<"u";function dt(h){if(xt)h=(ze||(ze=new TextEncoder)).encode(h);else{var m=void 0;m=m===void 0?!1:m;for(var b=0,I=new Uint8Array(3*h.length),R=0;R<h.length;R++){var M=h.charCodeAt(R);if(128>M)I[b++]=M;else{if(2048>M)I[b++]=M>>6|192;else{if(55296<=M&&57343>=M){if(56319>=M&&R<h.length){var L=h.charCodeAt(++R);if(56320<=L&&57343>=L){M=1024*(M-55296)+L-56320+65536,I[b++]=M>>18|240,I[b++]=M>>12&63|128,I[b++]=M>>6&63|128,I[b++]=M&63|128;continue}else R--}if(m)throw Error("Found an unpaired surrogate");M=65533}I[b++]=M>>12|224,I[b++]=M>>6&63|128}I[b++]=M&63|128}}h=I.subarray(0,b)}return h}var Sn={},Ft=null;function Zr(h,m){m===void 0&&(m=0),es(),m=Sn[m];for(var b=Array(Math.floor(h.length/3)),I=m[64]||"",R=0,M=0;R<h.length-2;R+=3){var L=h[R],V=h[R+1],X=h[R+2],ne=m[L>>2];L=m[(L&3)<<4|V>>4],V=m[(V&15)<<2|X>>6],X=m[X&63],b[M++]=ne+L+V+X}switch(ne=0,X=I,h.length-R){case 2:ne=h[R+1],X=m[(ne&15)<<2]||I;case 1:h=h[R],b[M]=m[h>>2]+m[(h&3)<<4|ne>>4]+X+I}return b.join("")}function gr(h){var m=h.length,b=3*m/4;b%3?b=Math.floor(b):"=.".indexOf(h[m-1])!=-1&&(b="=.".indexOf(h[m-2])!=-1?b-2:b-1);var I=new Uint8Array(b),R=0;return Qr(h,function(M){I[R++]=M}),I.subarray(0,R)}function Qr(h,m){function b(X){for(;I<h.length;){var ne=h.charAt(I++),oe=Ft[ne];if(oe!=null)return oe;if(!/^[\s\xa0]*$/.test(ne))throw Error("Unknown base64 encoding at char: "+ne)}return X}es();for(var I=0;;){var R=b(-1),M=b(0),L=b(64),V=b(64);if(V===64&&R===-1)break;m(R<<2|M>>4),L!=64&&(m(M<<4&240|L>>2),V!=64&&m(L<<6&192|V))}}function es(){if(!Ft){Ft={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],b=0;5>b;b++){var I=h.concat(m[b].split(""));Sn[b]=I;for(var R=0;R<I.length;R++){var M=I[R];Ft[M]===void 0&&(Ft[M]=R)}}}}var Ct=typeof Uint8Array.prototype.slice=="function",yr;function Jn(h,m,b){return m===b?yr||(yr=new Uint8Array(0)):Ct?h.slice(m,b):new Uint8Array(h.subarray(m,b))}var mt=0,gt=0;function Ce(h,m){m=m===void 0?{}:m,m=m.v===void 0?!1:m.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=m,h&&on(this,h)}function on(h,m){m=m.constructor===Uint8Array?m:m.constructor===ArrayBuffer?new Uint8Array(m):m.constructor===Array?new Uint8Array(m):m.constructor===String?gr(m):m instanceof Uint8Array?new Uint8Array(m.buffer,m.byteOffset,m.byteLength):new Uint8Array(0),h.h=m,h.l=0,h.j=h.h.length,h.g=h.l}Ce.prototype.reset=function(){this.g=this.l};function xn(h){for(var m=128,b=0,I=0,R=0;4>R&&128<=m;R++)m=h.h[h.g++],b|=(m&127)<<7*R;if(128<=m&&(m=h.h[h.g++],b|=(m&127)<<28,I|=(m&127)>>4),128<=m)for(R=0;5>R&&128<=m;R++)m=h.h[h.g++],I|=(m&127)<<7*R+3;if(128>m)return h=b>>>0,m=I>>>0,(I=m&2147483648)&&(h=~h+1>>>0,m=~m>>>0,h==0&&(m=m+1>>>0)),h=4294967296*m+(h>>>0),I?-h:h;h.m=!0}Ce.prototype.i=function(){var h=this.h,m=h[this.g],b=m&127;return 128>m?(this.g+=1,b):(m=h[this.g+1],b|=(m&127)<<7,128>m?(this.g+=2,b):(m=h[this.g+2],b|=(m&127)<<14,128>m?(this.g+=3,b):(m=h[this.g+3],b|=(m&127)<<21,128>m?(this.g+=4,b):(m=h[this.g+4],b|=(m&15)<<28,128>m?(this.g+=5,b>>>0):(this.g+=5,128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&this.g++,b)))))},Ce.prototype.o=function(){var h=this.h[this.g],m=this.h[this.g+1],b=this.h[this.g+2],I=this.h[this.g+3];return this.g+=4,b=(h<<0|m<<8|b<<16|I<<24)>>>0,h=2*(b>>31)+1,m=b>>>23&255,b&=8388607,m==255?b?NaN:1/0*h:m==0?h*Math.pow(2,-149)*b:h*Math.pow(2,m-150)*(b+Math.pow(2,23))};var Zn=[];function yt(){this.g=new Uint8Array(64),this.h=0}yt.prototype.push=function(h){if(!(this.h+1<this.g.length)){var m=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(m)}this.g[this.h++]=h},yt.prototype.length=function(){return this.h},yt.prototype.end=function(){var h=this.g,m=this.h;return this.h=0,Jn(h,0,m)};function Et(h,m){for(;127<m;)h.push(m&127|128),m>>>=7;h.push(m)}function un(h){var m={},b=m.N===void 0?!1:m.N;this.o={v:m.v===void 0?!1:m.v},this.N=b,m=this.o,Zn.length?(b=Zn.pop(),m&&(b.v=m.v),h&&on(b,h),h=b):h=new Ce(h,m),this.g=h,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}un.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function nt(h){var m=h.g;if((m=m.g==m.j)||(m=h.j)||(m=h.g,m=m.m||0>m.g||m.g>m.j),m)return!1;h.m=h.g.g,m=h.g.i();var b=m&7;return b!=0&&b!=5&&b!=1&&b!=2&&b!=3&&b!=4?(h.j=!0,!1):(h.i=m,h.l=m>>>3,h.h=b,!0)}function kt(h){switch(h.h){case 0:if(h.h!=0)kt(h);else{for(h=h.g;h.h[h.g]&128;)h.g++;h.g++}break;case 1:h.h!=1?kt(h):(h=h.g,h.g+=8);break;case 2:if(h.h!=2)kt(h);else{var m=h.g.i();h=h.g,h.g+=m}break;case 5:h.h!=5?kt(h):(h=h.g,h.g+=4);break;case 3:m=h.l;do{if(!nt(h)){h.j=!0;break}if(h.h==4){h.l!=m&&(h.j=!0);break}kt(h)}while(1);break;default:h.j=!0}}function Qn(h,m,b){var I=h.g.j,R=h.g.i(),M=h.g.g+R;if(h.g.j=M,b(m,h),b=M-h.g.g,b!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+R+" bytes, instead read "+(R-b)+" bytes, either the data ended unexpectedly or the message misreported its own length");return h.g.g=M,h.g.j=I,m}function Be(h){return h.g.o()}function En(h){var m=h.g.i();h=h.g;var b=h.g;h.g+=m,h=h.h;var I;if(He)(I=Pe)||(I=Pe=new TextDecoder("utf-8",{fatal:!1})),I=I.decode(h.subarray(b,b+m));else{m=b+m;for(var R=[],M=null,L,V,X;b<m;)L=h[b++],128>L?R.push(L):224>L?b>=m?R.push(65533):(V=h[b++],194>L||(V&192)!==128?(b--,R.push(65533)):R.push((L&31)<<6|V&63)):240>L?b>=m-1?R.push(65533):(V=h[b++],(V&192)!==128||L===224&&160>V||L===237&&160<=V||((I=h[b++])&192)!==128?(b--,R.push(65533)):R.push((L&15)<<12|(V&63)<<6|I&63)):244>=L?b>=m-2?R.push(65533):(V=h[b++],(V&192)!==128||(L<<28)+(V-144)>>30||((I=h[b++])&192)!==128||((X=h[b++])&192)!==128?(b--,R.push(65533)):(L=(L&7)<<18|(V&63)<<12|(I&63)<<6|X&63,L-=65536,R.push((L>>10&1023)+55296,(L&1023)+56320))):R.push(65533),8192<=R.length&&(M=ke(M,R),R.length=0);I=ke(M,R)}return I}function br(h,m,b){var I=h.g.i();for(I=h.g.g+I;h.g.g<I;)b.push(m.call(h.g))}function wr(h,m){h.h==2?br(h,Ce.prototype.o,m):m.push(Be(h))}function Ut(){this.h=[],this.i=0,this.g=new yt}function bt(h,m){m.length!==0&&(h.h.push(m),h.i+=m.length)}function kn(h){var m=h.i+h.g.length();if(m===0)return new Uint8Array(0);m=new Uint8Array(m);for(var b=h.h,I=b.length,R=0,M=0;M<I;M++){var L=b[M];L.length!==0&&(m.set(L,R),R+=L.length)}return b=h.g,I=b.h,I!==0&&(m.set(b.g.subarray(0,I),R),b.h=0),h.h=[m],m}function rt(h,m,b){if(b!=null){Et(h.g,8*m+5),h=h.g;var I=b;I=(b=0>I?1:0)?-I:I,I===0?0<1/I?mt=gt=0:(gt=0,mt=2147483648):isNaN(I)?(gt=0,mt=2147483647):34028234663852886e22<I?(gt=0,mt=(b<<31|2139095040)>>>0):11754943508222875e-54>I?(I=Math.round(I/Math.pow(2,-149)),gt=0,mt=(b<<31|I)>>>0):(m=Math.floor(Math.log(I)/Math.LN2),I*=Math.pow(2,-m),I=Math.round(8388608*I),16777216<=I&&++m,gt=0,mt=(b<<31|m+127<<23|I&8388607)>>>0),b=mt,h.push(b>>>0&255),h.push(b>>>8&255),h.push(b>>>16&255),h.push(b>>>24&255)}}var _n=typeof Uint8Array=="function";function vr(h,m,b){if(h!=null)return typeof h=="object"?_n&&h instanceof Uint8Array?b(h):Nr(h,m,b):m(h)}function Nr(h,m,b){if(Array.isArray(h)){for(var I=Array(h.length),R=0;R<h.length;R++)I[R]=vr(h[R],m,b);return Array.isArray(h)&&h.W&&qe(I),I}I={};for(R in h)I[R]=vr(h[R],m,b);return I}function ts(h){return typeof h=="number"?isFinite(h)?h:String(h):h}var ns={W:{value:!0,configurable:!0}};function qe(h){return Array.isArray(h)&&!Object.isFrozen(h)&&Object.defineProperties(h,ns),h}var Re;function Le(h,m,b){var I=Re;Re=null,h||(h=I),I=this.constructor.ca,h||(h=I?[I]:[]),this.j=I?0:-1,this.m=this.g=null,this.h=h;e:{if(I=this.h.length,h=I-1,I&&(I=this.h[h],!(I===null||typeof I!="object"||Array.isArray(I)||_n&&I instanceof Uint8Array))){this.l=h-this.j,this.i=I;break e}m!==void 0&&-1<m?(this.l=Math.max(m,h+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(b)for(m=0;m<b.length;m++)h=b[m],h<this.l?(h+=this.j,(I=this.h[h])?qe(I):this.h[h]=Ze):($n(this),(I=this.i[h])?qe(I):this.i[h]=Ze)}var Ze=Object.freeze(qe([]));function $n(h){var m=h.l+h.j;h.h[m]||(h.i=h.h[m]={})}function Ee(h,m,b){return m===-1?null:b!==void 0&&b||m>=h.l?h.i?h.i[m]:void 0:h.h[m+h.j]}function In(h,m){var b=b===void 0?!1:b,I=Ee(h,m,b);return I==null&&(I=Ze),I===Ze&&(I=qe([]),ge(h,m,I,b)),I}function Tr(h){var m=In(h,3);if(h.m||(h.m={}),!h.m[3]){for(var b=0;b<m.length;b++)m[b]=+m[b];h.m[3]=!0}return m}function Rt(h,m,b){return h=Ee(h,m),h??b}function ut(h,m,b){return h=Ee(h,m),h=h==null?h:+h,h??(b===void 0?0:b)}function ge(h,m,b,I){I!==void 0&&I||m>=h.l?($n(h),h.i[m]=b):h.h[m+h.j]=b}function rs(h,m,b){if(b===-1)return null;if(h.g||(h.g={}),!h.g[b]){var I=Ee(h,b,!1);I&&(h.g[b]=new m(I))}return h.g[b]}function er(h,m){h.g||(h.g={});var b=h.g[1];if(!b){var I=In(h,1);b=[];for(var R=0;R<I.length;R++)b[R]=new m(I[R]);h.g[1]=b}return b}function An(h,m,b){var I=I===void 0?!1:I;h.g||(h.g={});var R=b&&Lt(b);h.g[m]=b,ge(h,m,R,I)}function On(h,m,b,I){var R=er(h,b);m=m||new b,h=In(h,1),I!=null?(R.splice(I,0,m),h.splice(I,0,Lt(m))):(R.push(m),h.push(Lt(m)))}Le.prototype.toJSON=function(){var h=Lt(this);return Nr(h,ts,Zr)};function Lt(h,m){if(h.g)for(var b in h.g){var I=h.g[b];if(Array.isArray(I))for(var R=0;R<I.length;R++)I[R]&&Lt(I[R]);else I&&Lt(I)}return h.h}Le.prototype.toString=function(){return Lt(this).toString()};function tr(h,m){if(h=h.o){bt(m,m.g.end());for(var b=0;b<h.length;b++)bt(m,h[b])}}function ct(h,m){if(m.h==4)return!1;var b=m.m;return kt(m),m.N||(m=Jn(m.g.h,b,m.g.g),(b=h.o)?b.push(m):h.o=[m]),!0}function Pt(h){Le.call(this,h,-1,Xs)}k(Pt,Le),Pt.prototype.getRows=function(){return Ee(this,1)},Pt.prototype.getCols=function(){return Ee(this,2)},Pt.prototype.getPackedDataList=function(){return Tr(this)},Pt.prototype.getLayout=function(){return Rt(this,4,0)};function ss(h,m){for(;nt(m);)switch(m.i){case 8:var b=m.g.i();ge(h,1,b);break;case 16:b=m.g.i(),ge(h,2,b);break;case 29:case 26:wr(m,h.getPackedDataList());break;case 32:b=xn(m.g),ge(h,4,b);break;default:if(!ct(h,m))return h}return h}var Xs=[3];function Ve(h,m){var b=void 0;return new(b||(b=Promise))(function(I,R){function M(X){try{V(m.next(X))}catch(ne){R(ne)}}function L(X){try{V(m.throw(X))}catch(ne){R(ne)}}function V(X){X.done?I(X.value):new b(function(ne){ne(X.value)}).then(M,L)}V((m=m.apply(h,void 0)).next())})}function Bt(h){Le.call(this,h)}k(Bt,Le);function as(h,m){for(;nt(m);)switch(m.i){case 8:var b=m.g.i();ge(h,1,b);break;case 21:b=Be(m),ge(h,2,b);break;case 26:b=En(m),ge(h,3,b);break;case 34:b=En(m),ge(h,4,b);break;default:if(!ct(h,m))return h}return h}function nr(h){Le.call(this,h,-1,is)}k(nr,Le),nr.prototype.addClassification=function(h,m){return On(this,h,Bt,m),this};var is=[1];function cn(h){Le.call(this,h)}k(cn,Le);function Ys(h,m){for(;nt(m);)switch(m.i){case 13:var b=Be(m);ge(h,1,b);break;case 21:b=Be(m),ge(h,2,b);break;case 29:b=Be(m),ge(h,3,b);break;case 37:b=Be(m),ge(h,4,b);break;case 45:b=Be(m),ge(h,5,b);break;default:if(!ct(h,m))return h}return h}function os(h){Le.call(this,h,-1,cs)}k(os,Le);function us(h){e:{var m=new os;for(h=new un(h);nt(h);)switch(h.i){case 10:var b=Qn(h,new cn,Ys);On(m,b,cn,void 0);break;default:if(!ct(m,h))break e}}return m}var cs=[1];function rr(h){Le.call(this,h)}k(rr,Le);function Wt(h){Le.call(this,h,-1,Zs)}k(Wt,Le),Wt.prototype.getVertexType=function(){return Rt(this,1,0)},Wt.prototype.getPrimitiveType=function(){return Rt(this,2,0)},Wt.prototype.getVertexBufferList=function(){return Tr(this)},Wt.prototype.getIndexBufferList=function(){return In(this,4)};function Js(h,m){for(;nt(m);)switch(m.i){case 8:var b=xn(m.g);ge(h,1,b);break;case 16:b=xn(m.g),ge(h,2,b);break;case 29:case 26:wr(m,h.getVertexBufferList());break;case 32:case 34:b=m;var I=h.getIndexBufferList();b.h==2?br(b,Ce.prototype.i,I):I.push(b.g.i());break;default:if(!ct(h,m))return h}return h}var Zs=[3,4];function sr(h){Le.call(this,h)}k(sr,Le),sr.prototype.getMesh=function(){return rs(this,Wt,1)},sr.prototype.getPoseTransformMatrix=function(){return rs(this,Pt,2)};function ls(h){e:{var m=new sr;for(h=new un(h);nt(h);)switch(h.i){case 10:var b=Qn(h,new Wt,Js);An(m,1,b);break;case 18:b=Qn(h,new Pt,ss),An(m,2,b);break;default:if(!ct(m,h))break e}}return m}function Sr(h,m,b){if(b=h.createShader(b===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(b,m),h.compileShader(b),!h.getShaderParameter(b,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(b));return b}function xr(h){return er(h,Bt).map(function(m){return{index:Rt(m,1,0),Y:ut(m,2),label:Ee(m,3)!=null?Rt(m,3,""):void 0,displayName:Ee(m,4)!=null?Rt(m,4,""):void 0}})}function Er(h){return{x:ut(h,1),y:ut(h,2),z:ut(h,3),visibility:Ee(h,4)!=null?ut(h,4):void 0}}function Dn(h,m){this.h=h,this.g=m,this.l=0}function ln(h,m,b){return lt(h,m),typeof h.g.canvas.transferToImageBitmap=="function"?Promise.resolve(h.g.canvas.transferToImageBitmap()):b?Promise.resolve(h.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.g.canvas):(h.i===void 0&&(h.i=document.createElement("canvas")),new Promise(function(I){h.i.height=h.g.canvas.height,h.i.width=h.g.canvas.width,h.i.getContext("2d",{}).drawImage(h.g.canvas,0,0,h.g.canvas.width,h.g.canvas.height),I(h.i)}))}function lt(h,m){var b=h.g;if(h.m===void 0){var I=Sr(b,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),R=Sr(b,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),M=b.createProgram();if(b.attachShader(M,I),b.attachShader(M,R),b.linkProgram(M),!b.getProgramParameter(M,b.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+b.getProgramInfoLog(M));I=h.m=M,b.useProgram(I),R=b.getUniformLocation(I,"sampler0"),h.j={I:b.getAttribLocation(I,"aVertex"),H:b.getAttribLocation(I,"aTex"),da:R},h.s=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,h.s),b.enableVertexAttribArray(h.j.I),b.vertexAttribPointer(h.j.I,2,b.FLOAT,!1,0,0),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,null),h.o=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,h.o),b.enableVertexAttribArray(h.j.H),b.vertexAttribPointer(h.j.H,2,b.FLOAT,!1,0,0),b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,null),b.uniform1i(R,0)}I=h.j,b.useProgram(h.m),b.canvas.width=m.width,b.canvas.height=m.height,b.viewport(0,0,m.width,m.height),b.activeTexture(b.TEXTURE0),h.h.bindTexture2d(m.glName),b.enableVertexAttribArray(I.I),b.bindBuffer(b.ARRAY_BUFFER,h.s),b.vertexAttribPointer(I.I,2,b.FLOAT,!1,0,0),b.enableVertexAttribArray(I.H),b.bindBuffer(b.ARRAY_BUFFER,h.o),b.vertexAttribPointer(I.H,2,b.FLOAT,!1,0,0),b.bindFramebuffer(b.DRAW_FRAMEBUFFER?b.DRAW_FRAMEBUFFER:b.FRAMEBUFFER,null),b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),b.colorMask(!0,!0,!0,!0),b.drawArrays(b.TRIANGLE_FAN,0,4),b.disableVertexAttribArray(I.I),b.disableVertexAttribArray(I.H),b.bindBuffer(b.ARRAY_BUFFER,null),h.h.bindTexture2d(0)}function Qs(h){this.g=h}var ea=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function hs(h,m){return m+h}function kr(h,m){window[h]=m}function st(h){var m=document.createElement("script");return m.setAttribute("src",h),m.setAttribute("crossorigin","anonymous"),new Promise(function(b){m.addEventListener("load",function(){b()},!1),m.addEventListener("error",function(){b()},!1),document.body.appendChild(m)})}function fs(){return Ve(this,function h(){return q(h,function(m){switch(m.g){case 1:return m.m=2,W(m,WebAssembly.instantiate(ea),4);case 4:m.g=3,m.m=0;break;case 2:return m.m=0,m.j=null,m.return(!1);case 3:return m.return(!0)}})})}function Kt(h){if(this.g=h,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=h&&h.locateFile||hs,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=m,h.options){m=o(Object.keys(h.options));for(var b=m.next();!b.done;b=m.next()){b=b.value;var I=h.options[b].default;I!==void 0&&(this.j[b]=typeof I=="function"?I():I)}}}n=Kt.prototype,n.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function ps(h,m){return h.g.files===void 0?[]:typeof h.g.files=="function"?h.g.files(m):h.g.files}function _r(h){return Ve(h,function m(){var b=this,I,R,M,L,V,X,ne,oe,we,de,le;return q(m,function(se){switch(se.g){case 1:return I=b,b.R?(R=ps(b,b.j),W(se,fs(),2)):se.return();case 2:if(M=se.h,typeof window=="object")return kr("createMediapipeSolutionsWasm",{locateFile:b.locateFile}),kr("createMediapipeSolutionsPackedAssets",{locateFile:b.locateFile}),X=R.filter(function(l){return l.data!==void 0}),ne=R.filter(function(l){return l.data===void 0}),oe=Promise.all(X.map(function(l){var y=hn(I,l.url);if(l.path!==void 0){var w=l.path;y=y.then(function(N){return I.overrideFile(w,N),Promise.resolve(N)})}return y})),we=Promise.all(ne.map(function(l){return l.simd===void 0||l.simd&&M||!l.simd&&!M?st(I.locateFile(l.url,I.S)):Promise.resolve()})).then(function(){return Ve(I,function l(){var y,w,N=this;return q(l,function($){if($.g==1)return y=window.createMediapipeSolutionsWasm,w=window.createMediapipeSolutionsPackedAssets,W($,y(w),2);N.h=$.h,$.g=0})})}),de=function(){return Ve(I,function l(){var y=this;return q(l,function(w){return y.g.graph&&y.g.graph.url?w=W(w,hn(y,y.g.graph.url),0):(w.g=0,w=void 0),w})})}(),W(se,Promise.all([we,oe,de]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return L=R.filter(function(l){return l.simd===void 0||l.simd&&M||!l.simd&&!M}).map(function(l){return I.locateFile(l.url,I.S)}),importScripts.apply(null,u(L)),W(se,createMediapipeSolutionsWasm(Module),6);case 6:b.h=se.h,b.l=new OffscreenCanvas(1,1),b.h.canvas=b.l,V=b.h.GL.createContext(b.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),b.h.GL.makeContextCurrent(V),se.g=4;break;case 7:if(b.l=document.createElement("canvas"),le=b.l.getContext("webgl2",{}),!le&&(le=b.l.getContext("webgl",{}),!le))return alert("Failed to create WebGL canvas context when passing video frame."),se.return();b.D=le,b.h.canvas=b.l,b.h.createContext(b.l,!0,!0,{});case 4:b.i=new b.h.SolutionWasm,b.R=!1,se.g=0}})})}function ta(h){return Ve(h,function m(){var b=this,I,R,M,L,V,X,ne,oe;return q(m,function(we){if(we.g==1){if(b.g.graph&&b.g.graph.url&&b.P===b.g.graph.url)return we.return();if(b.o=!0,!b.g.graph||!b.g.graph.url){we.g=2;return}return b.P=b.g.graph.url,W(we,hn(b,b.g.graph.url),3)}for(we.g!=2&&(I=we.h,b.i.loadGraph(I)),R=o(Object.keys(b.B)),M=R.next();!M.done;M=R.next())L=M.value,b.i.overrideFile(L,b.B[L]);if(b.B={},b.g.listeners)for(V=o(b.g.listeners),X=V.next();!X.done;X=V.next())ne=X.value,ra(b,ne);oe=b.j,b.j={},b.setOptions(oe),we.g=0})})}n.reset=function(){return Ve(this,function h(){var m=this;return q(h,function(b){m.i&&(m.i.reset(),m.m={},m.s={}),b.g=0})})},n.setOptions=function(h,m){var b=this;if(m=m||this.g.options){for(var I=[],R=[],M={},L=o(Object.keys(h)),V=L.next();!V.done;M={K:M.K,L:M.L},V=L.next()){var X=V.value;X in this.j&&this.j[X]===h[X]||(this.j[X]=h[X],V=m[X],V!==void 0&&(V.onChange&&(M.K=V.onChange,M.L=h[X],I.push(function(ne){return function(){return Ve(b,function oe(){var we,de=this;return q(oe,function(le){if(le.g==1)return W(le,ne.K(ne.L),2);we=le.h,we===!0&&(de.o=!0),le.g=0})})}}(M))),V.graphOptionXref&&(X={valueNumber:V.type===1?h[X]:0,valueBoolean:V.type===0?h[X]:!1,valueString:V.type===2?h[X]:""},V=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),V.graphOptionXref),X),R.push(V))))}(I.length!==0||R.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(R),this.u=(this.u===void 0?[]:this.u).concat(I))}};function na(h){return Ve(h,function m(){var b=this,I,R,M,L,V,X,ne;return q(m,function(oe){switch(oe.g){case 1:if(!b.o)return oe.return();if(!b.u){oe.g=2;break}I=o(b.u),R=I.next();case 3:if(R.done){oe.g=5;break}return M=R.value,W(oe,M(),4);case 4:R=I.next(),oe.g=3;break;case 5:b.u=void 0;case 2:if(b.A){for(L=new b.h.GraphOptionChangeRequestList,V=o(b.A),X=V.next();!X.done;X=V.next())ne=X.value,L.push_back(ne);b.i.changeOptions(L),L.delete(),b.A=void 0}b.o=!1,oe.g=0}})})}n.initialize=function(){return Ve(this,function h(){var m=this;return q(h,function(b){return b.g==1?W(b,_r(m),2):b.g!=3?W(b,ta(m),3):W(b,na(m),0)})})};function hn(h,m){return Ve(h,function b(){var I=this,R,M;return q(b,function(L){return m in I.F?L.return(I.F[m]):(R=I.locateFile(m,""),M=fetch(R).then(function(V){return V.arrayBuffer()}),I.F[m]=M,L.return(M))})})}n.overrideFile=function(h,m){this.i?this.i.overrideFile(h,m):this.B[h]=m},n.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},n.send=function(h,m){return Ve(this,function b(){var I=this,R,M,L,V,X,ne,oe,we,de;return q(b,function(le){switch(le.g){case 1:return I.g.inputs?(R=1e3*(m??performance.now()),W(le,I.C,2)):le.return();case 2:return W(le,I.initialize(),3);case 3:for(M=new I.h.PacketDataList,L=o(Object.keys(h)),V=L.next();!V.done;V=L.next())if(X=V.value,ne=I.g.inputs[X]){e:{var se=I,l=h[X];switch(ne.type){case"video":var y=se.m[ne.stream];if(y||(y=new Dn(se.h,se.D),se.m[ne.stream]=y),se=y,se.l===0&&(se.l=se.h.createTexture()),typeof HTMLVideoElement<"u"&&l instanceof HTMLVideoElement){var w=l.videoWidth;y=l.videoHeight}else typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement?(w=l.naturalWidth,y=l.naturalHeight):(w=l.width,y=l.height);y={glName:se.l,width:w,height:y},w=se.g,w.canvas.width=y.width,w.canvas.height=y.height,w.activeTexture(w.TEXTURE0),se.h.bindTexture2d(se.l),w.texImage2D(w.TEXTURE_2D,0,w.RGBA,w.RGBA,w.UNSIGNED_BYTE,l),se.h.bindTexture2d(0),se=y;break e;case"detections":for(y=se.m[ne.stream],y||(y=new Qs(se.h),se.m[ne.stream]=y),se=y,se.data||(se.data=new se.g.DetectionListData),se.data.reset(l.length),y=0;y<l.length;++y){w=l[y];var N=se.data,$=N.setBoundingBox,x=y,A=w.T,D=new rr;ge(D,1,A.Z),ge(D,2,A.$),ge(D,3,A.height),ge(D,4,A.width),ge(D,5,A.rotation),ge(D,6,A.X);var P=A=new Ut;rt(P,1,Ee(D,1)),rt(P,2,Ee(D,2)),rt(P,3,Ee(D,3)),rt(P,4,Ee(D,4)),rt(P,5,Ee(D,5));var z=Ee(D,6);if(z!=null&&z!=null){Et(P.g,48);var H=P.g,Y=z;z=0>Y,Y=Math.abs(Y);var Z=Y>>>0;for(Y=Math.floor((Y-Z)/4294967296),Y>>>=0,z&&(Y=~Y>>>0,Z=(~Z>>>0)+1,4294967295<Z&&(Z=0,Y++,4294967295<Y&&(Y=0))),mt=Z,gt=Y,z=mt,Z=gt;0<Z||127<z;)H.push(z&127|128),z=(z>>>7|Z<<25)>>>0,Z>>>=7;H.push(z)}if(tr(D,P),A=kn(A),$.call(N,x,A),w.O)for(N=0;N<w.O.length;++N)D=w.O[N],P=!!D.visibility,$=se.data,x=$.addNormalizedLandmark,A=y,D=Object.assign(Object.assign({},D),{visibility:P?D.visibility:0}),P=new cn,ge(P,1,D.x),ge(P,2,D.y),ge(P,3,D.z),D.visibility&&ge(P,4,D.visibility),H=D=new Ut,rt(H,1,Ee(P,1)),rt(H,2,Ee(P,2)),rt(H,3,Ee(P,3)),rt(H,4,Ee(P,4)),rt(H,5,Ee(P,5)),tr(P,H),D=kn(D),x.call($,A,D);if(w.M)for(N=0;N<w.M.length;++N){if($=se.data,x=$.addClassification,A=y,D=w.M[N],P=new Bt,ge(P,2,D.Y),D.index&&ge(P,1,D.index),D.label&&ge(P,3,D.label),D.displayName&&ge(P,4,D.displayName),H=D=new Ut,Z=Ee(P,1),Z!=null&&Z!=null)if(Et(H.g,8),z=H.g,0<=Z)Et(z,Z);else{for(Y=0;9>Y;Y++)z.push(Z&127|128),Z>>=7;z.push(1)}rt(H,2,Ee(P,2)),z=Ee(P,3),z!=null&&(z=dt(z),Et(H.g,26),Et(H.g,z.length),bt(H,H.g.end()),bt(H,z)),z=Ee(P,4),z!=null&&(z=dt(z),Et(H.g,34),Et(H.g,z.length),bt(H,H.g.end()),bt(H,z)),tr(P,H),D=kn(D),x.call($,A,D)}}se=se.data;break e;default:se={}}}switch(oe=se,we=ne.stream,ne.type){case"video":M.pushTexture2d(Object.assign(Object.assign({},oe),{stream:we,timestamp:R}));break;case"detections":de=oe,de.stream=we,de.timestamp=R,M.pushDetectionList(de);break;default:throw Error("Unknown input config type: '"+ne.type+"'")}}return I.i.send(M),W(le,I.C,4);case 4:M.delete(),le.g=0}})})};function ds(h,m,b){return Ve(h,function I(){var R,M,L,V,X,ne,oe=this,we,de,le,se,l,y,w,N;return q(I,function($){switch($.g){case 1:if(!b)return $.return(m);for(R={},M=0,L=o(Object.keys(b)),V=L.next();!V.done;V=L.next())X=V.value,ne=b[X],typeof ne!="string"&&ne.type==="texture"&&m[ne.stream]!==void 0&&++M;1<M&&(oe.G=!1),we=o(Object.keys(b)),V=we.next();case 2:if(V.done){$.g=4;break}if(de=V.value,le=b[de],typeof le=="string")return w=R,N=de,W($,ms(oe,de,m[le]),14);if(se=m[le.stream],le.type==="detection_list"){if(se){for(var x=se.getRectList(),A=se.getLandmarksList(),D=se.getClassificationsList(),P=[],z=0;z<x.size();++z){var H=x.get(z);e:{var Y=new rr;for(H=new un(H);nt(H);)switch(H.i){case 13:var Z=Be(H);ge(Y,1,Z);break;case 21:Z=Be(H),ge(Y,2,Z);break;case 29:Z=Be(H),ge(Y,3,Z);break;case 37:Z=Be(H),ge(Y,4,Z);break;case 45:Z=Be(H),ge(Y,5,Z);break;case 48:Z=xn(H.g),ge(Y,6,Z);break;default:if(!ct(Y,H))break e}}Y={Z:ut(Y,1),$:ut(Y,2),height:ut(Y,3),width:ut(Y,4),rotation:ut(Y,5,0),X:Rt(Y,6,0)},H=er(us(A.get(z)),cn).map(Er);var ee=D.get(z);e:for(Z=new nr,ee=new un(ee);nt(ee);)switch(ee.i){case 10:Z.addClassification(Qn(ee,new Bt,as));break;default:if(!ct(Z,ee))break e}Y={T:Y,O:H,M:xr(Z)},P.push(Y)}x=P}else x=[];R[de]=x,$.g=7;break}if(le.type==="proto_list"){if(se){for(x=Array(se.size()),A=0;A<se.size();A++)x[A]=se.get(A);se.delete()}else x=[];R[de]=x,$.g=7;break}if(se===void 0){$.g=3;break}if(le.type==="float_list"){R[de]=se,$.g=7;break}if(le.type==="proto"){R[de]=se,$.g=7;break}if(le.type!=="texture")throw Error("Unknown output config type: '"+le.type+"'");return l=oe.s[de],l||(l=new Dn(oe.h,oe.D),oe.s[de]=l),W($,ln(l,se,oe.G),13);case 13:y=$.h,R[de]=y;case 7:le.transform&&R[de]&&(R[de]=le.transform(R[de])),$.g=3;break;case 14:w[N]=$.h;case 3:V=we.next(),$.g=2;break;case 4:return $.return(R)}})})}function ms(h,m,b){return Ve(h,function I(){var R=this,M;return q(I,function(L){return typeof b=="number"||b instanceof Uint8Array||b instanceof R.h.Uint8BlobList?L.return(b):b instanceof R.h.Texture2dDataOut?(M=R.s[m],M||(M=new Dn(R.h,R.D),R.s[m]=M),L.return(ln(M,b,R.G))):L.return(void 0)})})}function ra(h,m){for(var b=m.name||"$",I=[].concat(u(m.wants)),R=new h.h.StringList,M=o(m.wants),L=M.next();!L.done;L=M.next())R.push_back(L.value);M=h.h.PacketListener.implement({onResults:function(V){for(var X={},ne=0;ne<m.wants.length;++ne)X[I[ne]]=V.get(ne);var oe=h.listeners[b];oe&&(h.C=ds(h,X,m.outs).then(function(we){we=oe(we);for(var de=0;de<m.wants.length;++de){var le=X[I[de]];typeof le=="object"&&le.hasOwnProperty&&le.hasOwnProperty("delete")&&le.delete()}we&&(h.C=we)}))}}),h.i.attachMultiListener(R,M),R.delete()}n.onResults=function(h,m){this.listeners[m||"$"]=h},ie("Solution",Kt),ie("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function sa(h){h=ls(h);var m=h.getMesh();if(!m)return h;var b=new Float32Array(m.getVertexBufferList());m.getVertexBufferList=function(){return b};var I=new Uint32Array(m.getIndexBufferList());return m.getIndexBufferList=function(){return I},h}var $r={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(h){return h.map(sa)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(h){return h.map(function(m){return er(us(m),cn).map(Er)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},Ir=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Ar=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Or=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Dr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Fr=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Cr=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],gs=[].concat(u(Ir),u(Ar),u(Or),u(Dr),u(Fr),u(Cr));function ys(h){h=h||{},h=Object.assign(Object.assign({},$r),h),this.g=new Kt(h)}n=ys.prototype,n.close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(h){this.g.onResults(h)},n.initialize=function(){return Ve(this,function h(){var m=this;return q(h,function(b){return W(b,m.g.initialize(),0)})})},n.reset=function(){this.g.reset()},n.send=function(h){return Ve(this,function m(){var b=this;return q(m,function(I){return W(I,b.g.send(h),0)})})},n.setOptions=function(h){this.g.setOptions(h)},ie("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),ie("FaceMesh",ys),ie("FACEMESH_LIPS",Ir),ie("FACEMESH_LEFT_EYE",Ar),ie("FACEMESH_LEFT_EYEBROW",Or),ie("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),ie("FACEMESH_RIGHT_EYE",Dr),ie("FACEMESH_RIGHT_EYEBROW",Fr),ie("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),ie("FACEMESH_FACE_OVAL",Cr),ie("FACEMESH_CONTOURS",gs),ie("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),ie("matrixDataToMatrix",function(h){for(var m=h.getCols(),b=h.getRows(),I=h.getPackedDataList(),R=[],M=0;M<b;M++)R.push(Array(m));for(M=0;M<b;M++)for(var L=0;L<m;L++){var V=h.getLayout()===1?M*m+L:L*b+M;R[M][L]=I[V]}return R}),ie("VERSION","0.4.1633559619")}).call(Mt);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o1=1e-7,u1=1e-4;class c1{refCount(e){return it("refCount")}incRef(e){return it("incRef")}timerAvailable(){return!0}time(e){return it("time")}read(e){return it("read")}readSync(e){return it("readSync")}readToGPU(e,t){return it("readToGPU")}numDataIds(){return it("numDataIds")}disposeData(e,t){return it("disposeData")}write(e,t,r){return it("write")}move(e,t,r,s,a){return it("move")}createTensorFromGPUData(e,t,r){return it("createTensorFromGPUData")}memory(){return it("memory")}floatPrecision(){return it("floatPrecision")}epsilon(){return this.floatPrecision()===32?o1:u1}dispose(){return it("dispose")}}function it(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function St(n,e,t=""){_(Jt(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function pr(n){_(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function We(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function l1(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==null&&e[t]!==null&&n[t]!==e[t])return!1;return!0}function Jt(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function zr(n){return n%1===0}function Ns(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function Ms(n,e){const t=e.length;return n=n==null?e.map((r,s)=>s):[].concat(n),_(n.every(r=>r>=-t&&r<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),_(n.every(r=>zr(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?t+r:r)}function h1(n,e){const t=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||s?null:Ms(e,n).sort();let i=0;for(let o=0;o<n.length;++o){if(a!=null){if(a[i]===o&&n[o]!==1)throw new Error(`Can't squeeze axis ${o} since its dim '${n[o]}' is not 1`);(a[i]==null||a[i]>o)&&n[o]===1&&(t.push(n[o]),r.push(o)),a[i]<=o&&i++}n[o]!==1&&(t.push(n[o]),r.push(o))}return{newShape:t,keptDims:r}}function f1(n,e){return yo(n,e)}function yo(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function p1(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function d1(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Ta(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function m1(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function ai(n){return typeof n=="string"||n instanceof String}function g1(n){return typeof n=="boolean"}function y1(n){return typeof n=="number"}function zs(n){return Array.isArray(n)?zs(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":y1(n)?"float32":ai(n)?"string":g1(n)?"bool":"float32"}function Sa(n){return!!(n&&n.constructor&&n.call&&n.apply)}function ii(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let r=e-3;r>=0;--r)t[r]=t[r+1]*n[r+1];return t}function bo(n,e,t,r=!1){const s=new Array;if(e.length===1){const a=e[0]*(r?2:1);for(let i=0;i<a;i++)s[i]=t[n+i]}else{const a=e[0],i=e.slice(1),o=i.reduce((u,c)=>u*c)*(r?2:1);for(let u=0;u<a;u++)s[u]=bo(n+u*o,i,t,r)}return s}function xa(n,e,t=!1){if(n.length===0)return e[0];const r=n.reduce((s,a)=>s*a)*(t?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return bo(0,n,e,t)}function wo(n,e){const t=oi(n,e);for(let r=0;r<t.length;r++)t[r]=1;return t}function oi(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function pt(n){n.forEach(e=>{_(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function zn(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ai="tfjsflags";class b1{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=w1,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(be().getBool("IS_TEST")||be().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];be().getBool("IS_TEST")||be().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(zn(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Ai in e&&e[Ai].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=N1(s,a)})}}function w1(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...r)=>(v1(e,r[0],r[1]),r.join("="))),e}function v1(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function N1(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function be(){return vo}let vo=null;function T1(n){vo=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ia;function No(){if(ia==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");ia=n}return ia}function S1(){const n=No();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function ui(n,e){const t=S1();if(t.has(n))return t.get(n);{const r=e();return t.set(n,r),t.get(n)}}const x1="Abs",E1="Acos",k1="Acosh",To="Add",_1="AddN",$1="All",I1="Any",A1="ArgMax",O1="ArgMin",D1="Asin",F1="Asinh",C1="Atan",R1="Atanh",L1="Atan2",P1="AvgPool",B1="AvgPool3D",j1="BatchMatMul",M1="BatchToSpaceND",z1="Bincount",V1="BitwiseAnd",U1="BroadcastArgs",So="Cast",W1="Ceil",K1="ClipByValue",G1="Complex",H1="ComplexAbs",q1="Concat",X1="Conv2D",Y1="Conv2DBackpropFilter",J1="Conv2DBackpropInput",Z1="Conv3D",Q1="Conv3DBackpropInputV2",e2="Cos",t2="Cosh",n2="Cumprod",r2="Cumsum",s2="CropAndResize",a2="DenseBincount",i2="DepthToSpace",o2="DepthwiseConv2dNative",u2="DepthwiseConv2dNativeBackpropFilter",c2="DepthwiseConv2dNativeBackpropInput",l2="Diag",h2="Dilation2D",f2="Draw",p2="RealDiv",d2="Einsum",m2="Elu",g2="Erf",y2="Equal",b2="Exp",w2="ExpandDims",v2="Expm1",N2="FFT",T2="Fill",S2="FlipLeftRight",x2="Floor",E2="FloorDiv",k2="FusedBatchNorm",_2="GatherV2",$2="GatherNd",I2="Greater",A2="GreaterEqual",xo="Identity",O2="IFFT",D2="Imag",F2="IsFinite",C2="IsInf",R2="IsNan",L2="LeakyRelu",P2="Less",B2="LessEqual",j2="LinSpace",M2="Log",z2="Log1p",V2="LogicalAnd",U2="LogicalNot",W2="LogicalOr",K2="LRN",G2="Max",H2="Maximum",q2="MaxPool",X2="MaxPool3D",Y2="MaxPoolWithArgmax",J2="Mean",Z2="Min",Q2="Minimum",ec="MirrorPad",tc="Mod",nc="Multinomial",rc="Multiply",sc="Neg",ac="NotEqual",ic="NonMaxSuppressionV3",oc="NonMaxSuppressionV4",uc="NonMaxSuppressionV5",cc="OnesLike",lc="OneHot",hc="Pack",fc="PadV2",pc="Pow",dc="Prelu",mc="Prod",gc="RaggedGather",yc="RaggedRange",bc="RaggedTensorToTensor",wc="Range",vc="Real",Nc="Reciprocal",Tc="Relu",Sc="Reshape",xc="ResizeNearestNeighbor",Ec="ResizeBilinear",kc="Relu6",_c="Reverse",$c="Round",Ic="Rsqrt",Ac="ScatterNd",Oc="TensorScatterUpdate",Dc="SearchSorted",Fc="Select",Cc="Selu",Rc="Slice",Lc="Sin",Pc="Sinh",Bc="Sign",jc="Sigmoid",Mc="Softplus",zc="Sqrt",Vc="Sum",Uc="SpaceToBatchND",Wc="SplitV",Kc="Softmax",Gc="SparseFillEmptyRows",Hc="SparseReshape",qc="SparseSegmentMean",Xc="SparseSegmentSum",Yc="SparseToDense",Jc="SquaredDifference",Zc="StaticRegexReplace",Qc="StridedSlice",el="StringNGrams",tl="StringSplit",nl="StringToHashBucketFast",rl="Sub",sl="Tan",al="Tanh",Eo="Tile",il="TopK",ol="Transform",oa="Transpose",ul="Unique",cl="Unpack",ll="UnsortedSegmentSum",hl="ZerosLike",fl="Step",Oi="FromPixels",pl="RotateWithOffset",Di="_FusedMatMul",Fi="FusedConv2D",Ci="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rr(...n){be().getBool("IS_TEST")||be().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ko=ui("kernelRegistry",()=>new Map),dl=ui("gradRegistry",()=>new Map);function ks(n,e){const t=ml(n,e);return ko.get(t)}function Ri(n){return dl.get(n)}function Li(n){const e=ko.entries(),t=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[a,i]=s,[o]=a.split("_");o===n&&t.push(i)}return t}function ml(n,e){return`${e}_${n}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _o(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gl(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function $o(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Vr(n)),be().getBool("DEBUG")&&p1(n,e),gl(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let r=0;r<t.length;++r)Math.round(n[r])!==0&&(t[r]=1);return t}else throw new Error(`Unknown data type ${e}`)}function _s(){return be().platform.now()}function yl(n,e="utf-8"){return e=e||"utf-8",be().platform.encode(n,e)}function Pi(n,e="utf-8"){return e=e||"utf-8",be().platform.decode(n,e)}function Tt(n){return be().platform.isTypedArray!=null?be().platform.isTypedArray(n):_o(n)}function Vr(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||zn(n)||n==null||Tt(n)&&t)e.push(n);else if(Array.isArray(n)||Tt(n))for(let r=0;r<n.length;++r)Vr(n[r],e,t);else{let r=-1;for(const s of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)Vr(n[s],e,t)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bl{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new vl)}profileKernel(e,t,r){let s;const a=()=>{s=r()};let i;const o=_s();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(a);else{a();for(const c of s)c.dataSync();i=Promise.resolve({kernelMs:_s()-o})}if(be().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<s.length;c++){const f=s[c];f.data().then(p=>{wl(p,f.dtype,e)})}return{kernelName:e,outputs:s,inputs:t,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:r,timeMs:s,inputs:a,extraInfo:i}=e;r.forEach(o=>{Promise.all([o.data(),s,i]).then(u=>{this.logger.logKernelProfile(t,o,u[0],u[1],a,u[2])})})}}function wl(n,e,t){if(e!=="float32")return!1;for(let r=0;r<n.length;r++){const s=n[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${t}'`),!0}return!1}class vl{logKernelProfile(e,t,r,s,a,i){const o=typeof s=="number"?Ns(`${s}ms`,9):s.error,u=Ns(e,25),c=t.rank,f=t.size,p=Ns(t.shape.toString(),14);let g="";for(const v in a){const S=a[v];if(S!=null){const k=S.shape||t.shape,E=k.length;g+=`${v}: ${E}D ${E>0?k:""} `}}console.log(`%c${u}	%c${o}	%c${c}D ${p}	%c${f}	%c${g}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nl(n,e,t){const r={},s={};for(let u=0;u<e.length;u++)r[e[u].id]=!0;for(let u=0;u<n.length;u++){const c=n[u],f=c.inputs;for(const p in f){const g=f[p];let v=!1;for(let S=0;S<e.length;S++)if(r[g.id]){c.outputs.forEach(k=>r[k.id]=!0),v=!0,s[c.id]=!0;break}if(v)break}}const a={};a[t.id]=!0;const i={};for(let u=n.length-1;u>=0;u--){const c=n[u],f=c.inputs;for(let p=0;p<c.outputs.length;p++)if(a[c.outputs[p].id]){for(const g in f)a[f[g].id]=!0,i[c.id]=!0;break}}const o=[];for(let u=0;u<n.length;u++){const c=n[u];if(s[c.id]&&i[c.id]){const f={};for(const g in c.inputs){const v=c.inputs[g];r[v.id]&&(f[g]=v)}const p=Object.assign({},c);p.inputs=f,p.outputs=c.outputs,o.push(p)}}return o}function Tl(n,e,t,r){for(let s=e.length-1;s>=0;s--){const a=e[s],i=[];if(a.outputs.forEach(u=>{const c=n[u.id];c!=null?i.push(c):i.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const o=a.gradient(i);for(const u in a.inputs){if(!(u in o))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(o)}.`);const c=t(()=>o[u]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${c.dtype}'`);const f=a.inputs[u];if(!Jt(c.shape,f.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${u}' has shape '${c.shape}', which does not match the shape of the input '${f.shape}'`);if(n[f.id]==null)n[f.id]=c;else{const p=n[f.id];n[f.id]=r(p,c),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bi=20,Lr=3,ua=7;function Sl(n,e,t,r){const s=ii(e),a=xl(n,e,t,s),i=e.length,o=Ts(n,e,t,s,a),u=["Tensor"];return r&&(u.push(`  dtype: ${t}`),u.push(`  rank: ${i}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(o.map(c=>"    "+c).join(`
`)),u.join(`
`)}function xl(n,e,t,r){const s=We(e),a=r[r.length-1],i=new Array(a).fill(0),o=e.length,u=t==="complex64"?jr(n):n;if(o>1)for(let c=0;c<s/a;c++){const f=c*a;for(let p=0;p<a;p++)i[p]=Math.max(i[p],Br(u[f+p],0,t).length)}return i}function Br(n,e,t){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(ua))} + ${parseFloat(n[1].toFixed(ua))}j`:ai(n)?r=`'${n}'`:t==="bool"?r=Io(n):r=parseFloat(n.toFixed(ua)).toString(),Ns(r,e)}function Io(n){return n===0?"false":"true"}function Ts(n,e,t,r,s,a=!0){const i=t==="complex64"?2:1,o=e[0],u=e.length;if(u===0){if(t==="complex64"){const k=jr(n);return[Br(k[0],0,t)]}return t==="bool"?[Io(n[0])]:[n[0].toString()]}if(u===1){if(o>Bi){const E=Lr*i;let F=Array.from(n.slice(0,E)),j=Array.from(n.slice((o-Lr)*i,o*i));return t==="complex64"&&(F=jr(F),j=jr(j)),["["+F.map((W,B)=>Br(W,s[B],t)).join(", ")+", ..., "+j.map((W,B)=>Br(W,s[o-Lr+B],t)).join(", ")+"]"]}return["["+(t==="complex64"?jr(n):Array.from(n)).map((E,F)=>Br(E,s[F],t)).join(", ")+"]"]}const c=e.slice(1),f=r.slice(1),p=r[0]*i,g=[];if(o>Bi){for(let k=0;k<Lr;k++){const E=k*p,F=E+p;g.push(...Ts(n.slice(E,F),c,t,f,s,!1))}g.push("...");for(let k=o-Lr;k<o;k++){const E=k*p,F=E+p;g.push(...Ts(n.slice(E,F),c,t,f,s,k===o-1))}}else for(let k=0;k<o;k++){const E=k*p,F=E+p;g.push(...Ts(n.slice(E,F),c,t,f,s,k===o-1))}const v=u===2?",":"";g[0]="["+(o>0?g[0]+v:"");for(let k=1;k<g.length-1;k++)g[k]=" "+g[k]+v;let S=`,
`;for(let k=2;k<u;k++)S+=`
`;return g[g.length-1]=" "+g[g.length-1]+"]"+(a?"":S),g}function jr(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ea{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=We(e),r!=null){const s=r.length;_(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||yo(t,this.size),this.strides=ii(e)}set(e,...t){t.length===0&&(t=[0]),_(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const r=this.locToIndex(t);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const s of e){if(s<0||s>=this.shape[t]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}t++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return _t().makeTensor(this.values,this.shape,this.dtype)}}let _t=null,ir=null;function El(n){_t=n}function kl(n){ir=n}class Ae{constructor(e,t,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=We(e),this.strides=ii(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return ir.buffer(this.shape,this.dtype,e)}bufferSync(){return ir.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return xa(this.shape,e,this.dtype==="complex64")}arraySync(){return xa(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=_t().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(r=>Pi(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),_t().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=_t().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>Pi(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await _t().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(_t().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return ir.print(this,e)}clone(){return this.throwIfDisposed(),ir.clone(this)}toString(e=!1){const t=this.dataSync();return Sl(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ir.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),_t().makeVariable(this,e,t,r)}}Object.defineProperty(Ae,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function _l(){return ui("Tensor",()=>Ae)}_l();class $s extends Ae{constructor(e,t,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Jt(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);_t().disposeTensor(this),this.dataId=e.dataId,_t().incRef(this,null)}dispose(){_t().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty($s,Symbol.hasInstance,{value:n=>n instanceof Ae&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ji;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(ji||(ji={}));var ka;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(ka||(ka={}));var _a;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(_a||(_a={}));var $a;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})($a||($a={}));var Ia;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Ia||(Ia={}));const $l={float32:$a,int32:ka,bool:_a,complex64:Ia};function Il(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return $l[n][e]}function Ao(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Oo(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fe(n,e){if(n.dtype===e.dtype)return[n,e];const t=Il(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function Al(n,e){_(n.dtype===e.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${e.dtype}) input must match`)}function Do(n){const e=[];return Fo(n,e,new Set),e}function Fo(n,e,t){if(n==null)return;if(n instanceof Ae){e.push(n);return}if(!Ol(n))return;const r=n;for(const s in r){const a=r[s];t.has(a)||(t.add(a),Fo(a,e,t))}}function Ol(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ca(n){return n.kernelName!=null}class Mi{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class lr{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Mi}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(Rr(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:r}=this.initializeBackend(e);if(!(r?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new bl(this.backendInstance),!0}setupRegisteredKernels(){Li(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Li(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=t.factory();if(r&&!(r instanceof c1)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(i=>s<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Rr(`Initialization of backend ${e} failed`),Rr(i.stack||i.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Rr(`Initialization of backend ${e} failed`),Rr(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const r=this.state.tensorInfo.get(t),s=r.backend,a=this.readSync(t),i=s.refCount(t);s.disposeData(t,!0),r.backend=e,e.move(t,a,r.shape,r.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=t(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,t,r){e();try{const s=r();return t(),s}catch(s){throw t(),s}}nextTensorId(){return lr.nextTensorId++}nextVariableId(){return lr.nextVariableId++}clone(e){const t=C.runKernel(xo,{x:e}),r={x:e},s=i=>({x:()=>{const o="float32",u={x:i},c={dtype:o};return C.runKernel(So,u,c)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[t],s,a,{}),t}runKernel(e,t,r){if(this.backendName==null&&this.backend,!(ks(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){const s=this.backend.numDataIds();let a=0;r.forEach(u=>{a+=u.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=s-t-a-i;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,r=[];const s=this.isTapeOn(),a=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName==null&&this.backend;let u;const c=ca(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(ca(e)){const{kernelName:S,inputs:k,attrs:E}=e;this.backendName==null&&this.backend;const F=ks(S,this.backendName);_(F!=null,()=>`Cannot find registered kernel '${S}' for backend '${this.backendName}'`),o=()=>{const j=this.backend.numDataIds();u=F.kernelFunc({inputs:k,attrs:E,backend:this.backend});const W=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(S,j,W);const B=W.map(K=>K.rank!=null?K:this.makeTensorFromTensorInfo(K));if(s){const K=this.getTensorsForGradient(S,k,B);r=this.saveTensorsForBackwardMode(K)}return B}}else{const{forwardFunc:S}=e,k=E=>{s&&(r=E.map(F=>this.keep(this.clone(F))))};o=()=>{const E=this.backend.numDataIds();u=this.tidy(()=>S(this.backend,k));const F=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,E,F),F}}const{inputs:f,attrs:p}=e,g=ca(e)?null:e.backwardsFunc;let v;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=o():(v=this.profiler.profileKernel(c,f,()=>o()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(v),t=v.outputs)}),s&&this.addTapeNode(c,f,t,g,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map(S=>f[S]!=null?f[S].shape:null),outputShapes:t.map(S=>S.shape),kernelTimeMs:v.timeMs,extraInfo:v.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,t,r){const s=Ri(e);if(s!=null){const a=s.inputsToSave||[],i=s.outputsToSave||[];let o;s.saveAllInputs?(_(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),o=Object.keys(t).map(c=>t[c])):o=a.map(c=>t[c]);const u=r.filter((c,f)=>i[f]);return o.concat(u)}return[]}makeTensor(e,t,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=e;r==="string"&&ai(e[0])&&(a=e.map(u=>yl(u)));const i=s.write(a,t,r),o=new Ae(t,r,i,this.nextTensorId());if(this.trackTensor(o,s),r==="string"){const u=this.state.tensorInfo.get(i),c=m1(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return o}makeTensorFromDataId(e,t,r,s){r=r||"float32";const a={dataId:e,shape:t,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(e,t){const{dataId:r,shape:s,dtype:a}=e,i=new Ae(s,a,r,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const a=new $s(e,t,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*Ta(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof $s||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*Ta(e.dtype);this.state.numBytes-=r}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,r,s,a,i){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:a},u=Ri(e);u!=null&&(s=u.gradFunc),s!=null&&(o.gradient=c=>(c=c.map((f,p)=>{if(f==null){const g=r[p],v=oi(g.size,g.dtype);return this.makeTensor(v,g.shape,g.dtype)}return f}),s(c.length>1?c:c[0],a,i))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Do(e),r=new Set(t.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const i=this.state.activeScope.track[a];!i.kept&&!r.has(i.id)&&i.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(e,t,r,s=!1){if(_(t.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));_(a instanceof Ae,()=>"The result y returned by f() must be a tensor.");const i=Nl(this.state.activeTape,t,a);if(!s&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const o={};o[a.id]=r??Dl(a.shape),Tl(o,i,c=>this.tidy(c),Fl);const u=t.map(c=>o[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const f of c.saved)f.dispose()}),this.state.activeTape=null),{value:a,grads:u}})}customGrad(e){return _(Sa(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{_(t.every(o=>o instanceof Ae),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};t.forEach((o,u)=>{s[u]=o});const a=(o,u)=>(r=e(...t,u),_(r.value instanceof Ae,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),_(Sa(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),i=(o,u)=>{const c=r.gradFunc(o,u),f=Array.isArray(c)?c:[c];_(f.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),_(f.every(g=>g instanceof Ae),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return f.forEach((g,v)=>{p[v]=()=>g}),p};return this.runKernelFunc({forwardFunc:a,backwardsFunc:i,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=_s(),r=await this.backend.time(e);return r.wallMs=_s()-t,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Mi;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}lr.nextTensorId=0;lr.nextVariableId=0;function Dl(n){const e=wo(We(n),"float32");return C.makeTensor(e,n,"float32")}function Co(){const n=No();if(n._tfengine==null){const e=new b1(n);n._tfengine=new lr(e)}return T1(n._tfengine.ENV),El(()=>n._tfengine),n._tfengine}const C=Co();function Fl(n,e){const t={a:n,b:e};return C.runKernel(To,t)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cl(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tt=be();tt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});tt.registerFlag("IS_BROWSER",()=>Cl());tt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");tt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));tt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));tt.registerFlag("PROD",()=>!1);tt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>tt.getBool("DEBUG"));tt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);tt.registerFlag("IS_TEST",()=>!1);tt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>tt.getBool("DEBUG"));tt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);tt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);tt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vn(n,e){let t=n;if(Tt(n))return e==="string"?[]:[n.length];if(Ao(n)){const s=n.channels||"RGBA";return[n.height,n.width*s.length]}else if(Oo(n))return[n.buffer.size/(e==null?4:Ta(e))];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(t)||Tt(t)&&e!=="string";)r.push(t.length),t=t[0];return Array.isArray(n)&&be().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ro(n,r,[]),r}function Ro(n,e,t){if(t=t||[],!Array.isArray(n)&&!Tt(n)){_(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}_(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),_(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const r=e.slice(1);for(let s=0;s<n.length;++s)Ro(n[s],r,t.concat(s))}function zi(n,e,t,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${r}' must be ${n} tensor, but got ${e} tensor`)}}function T(n,e,t,r="numeric"){if(n instanceof Ae)return zi(r,n.dtype,e,t),n;let s=zs(n);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),zi(r,s,e,t),n==null||!Tt(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const u=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${u}'`)}const a=vn(n,s);!Tt(n)&&!Array.isArray(n)&&(n=[n]);const o=s!=="string"?$o(n,s):Vr(n,[],!0);return C.makeTensor(o,a,s)}function Is(n,e,t,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((a,i)=>T(a,`${e}[${i}]`,t,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lo="__op";function O(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const r=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+Lo;const s=(...a)=>{C.startScope(t);try{const i=r(...a);return zn(i)&&console.error("Cannot return a Promise inside of tidy."),C.endScope(i),i}catch(i){throw C.endScope(null),i}};return Object.defineProperty(s,"name",{value:t,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rl(n,e){const t=T(n,"real","complex"),r=T(e,"imag","complex");St(t.shape,r.shape,`real and imag shapes, ${t.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:t,imag:r};return C.runKernel(G1,s)}const bn=O({complex_:Rl});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nn(n,e,t,r){if(r==null)r=zs(n);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Oo(n)||Ao(n)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return C.backend.createTensorFromGPUData(n,e||t,r)}if(!Tt(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){pt(e);const s=We(e),a=We(t);_(s===a,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${a}`);for(let i=0;i<t.length;++i){const o=t[i],u=i===t.length-1?o!==We(e.slice(i)):!0;_(t[i]===e[i]||!u,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!Tt(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=r!=="string"?$o(n,r):Vr(n,[],!0),C.makeTensor(n,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zt(n,e,t){const r=vn(n,t);return Nn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Aa={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Ot{static join(e){return new Ot(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>Tt(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let r=0;r<e.length;r++){const s=e[r];r!==e.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=t+s.byteLength;this.shards.push({buffer:s,start:t,end:a}),t=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const s=t-e,a=new ArrayBuffer(s),i=new Uint8Array(a);let o=0;for(let u=r;u<this.shards.length;u++){const c=this.shards[u],p=e+o-c.start,g=o,S=Math.min(t,c.end)-c.start,k=new Uint8Array(c.buffer,p,S-p);if(i.set(k,g),o+=k.length,t<c.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(s){return e<s.start?-1:e>=s.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=Ll(this.shards,t);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function Ll(n,e){let t=0,r=n.length;for(;t<=r;){const s=Math.floor((r-t)/2)+t,a=e(n[s]);if(a===0)return s;a<0?r=s:t=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const As=4;async function Pl(n,e){const t=[],r=[],s=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<s.length;++i){const o=s[i],u=Array.isArray(n)?n[i].tensor:n[o];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${o}': ${u.dtype}`);const c={name:o,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const f=new Promise(async p=>{const g=await u.bytes(),v=g.reduce((E,F)=>E+F.length,0)+As*g.length,S=new Uint8Array(v);let k=0;for(let E=0;E<g.length;E++){const F=g[E],j=new Uint8Array(new Uint32Array([F.length]).buffer);S.set(j,k),k+=As,S.set(F,k),k+=F.length}p(S)});r.push(f)}else r.push(u.data());e!=null&&(c.group=e),t.push(c)}const a=await Promise.all(r);return{data:Bl(a),specs:t}}function Po(n,e){const t=new Ot(n),r={};let s,a=0;for(const i of e){const o=i.name,u=i.dtype,c=i.shape,f=We(c);let p;if("quantization"in i){const g=i.quantization;if(g.dtype==="uint8"||g.dtype==="uint16"){if(!("min"in g&&"scale"in g))throw new Error(`Weight ${i.name} with quantization ${g.dtype} doesn't have corresponding metadata min and scale.`)}else if(g.dtype==="float16"){if(u!=="float32")throw new Error(`Weight ${i.name} is quantized with ${g.dtype} which only supports weights of type float32 not ${u}.`)}else throw new Error(`Weight ${i.name} has unknown quantization dtype ${g.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const v=Aa[g.dtype],S=t.slice(a,a+f*v),k=g.dtype==="uint8"?new Uint8Array(S):new Uint16Array(S);if(u==="float32")if(g.dtype==="uint8"||g.dtype==="uint16"){p=new Float32Array(k.length);for(let E=0;E<k.length;E++){const F=k[E];p[E]=F*g.scale+g.min}}else if(g.dtype==="float16")s===void 0&&(s=Kl()),p=s(k);else throw new Error(`Unsupported quantization type ${g.dtype} for weight type float32.`);else if(u==="int32"){if(g.dtype!=="uint8"&&g.dtype!=="uint16")throw new Error(`Unsupported quantization type ${g.dtype} for weight type int32.`);p=new Int32Array(k.length);for(let E=0;E<k.length;E++){const F=k[E];p[E]=Math.round(F*g.scale+g.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${u}`);a+=f*v}else if(u==="string"){const g=We(i.shape);p=[];for(let v=0;v<g;v++){const S=new Uint32Array(t.slice(a,a+As))[0];a+=As;const k=new Uint8Array(t.slice(a,a+S));p.push(k),a+=S}}else{const g=Aa[u],v=t.slice(a,a+f*g);if(u==="float32")p=new Float32Array(v);else if(u==="int32")p=new Int32Array(v);else if(u==="bool")p=new Uint8Array(v);else if(u==="complex64"){p=new Float32Array(v);const S=new Float32Array(p.length/2),k=new Float32Array(p.length/2);for(let j=0;j<S.length;j++)S[j]=p[j*2],k[j]=p[j*2+1];const E=zt(S,c,"float32"),F=zt(k,c,"float32");r[o]=bn(E,F),E.dispose(),F.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${u}`);a+=f*g}u!=="complex64"&&(r[o]=zt(p,c,u))}return r}function Bl(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(a=>{if(e+=a.byteLength,t.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(e);let s=0;return t.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const ci=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Vi(n){return ci?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function jl(n){if(ci)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let r=0,s=e.length;r<s;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function Ml(n){if(ci){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let r=0;r<e.length;++r)t.set([e.charCodeAt(r)],r);return t.buffer}function zl(n){return Ot.join(n)}function Ui(n){const e="/";for(n=n.trim();n.endsWith(e);)n=n.slice(0,n.length-1);const t=n.split(e);return t[t.length-1]}function Bo(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(t.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function jo(n,e,t){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=t}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(r.initializerSignature=n.initializerSignature),r}async function li(n,e){let t,r;return n.weightsManifest!=null&&([t,r]=await e(n.weightsManifest)),jo(n,t,r)}function Xr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Vi(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Vi(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Ot(n.weightData).byteLength}}function Mo(n){const e=[];for(const t of n)e.push(...t.weights);return e}function Vl(){const n=t=>{let r=t<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function Ul(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function Wl(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function Kl(){const n=Vl(),e=Ul(),t=Wl();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let i=0;i<r.length;i++){const o=r[i],u=n[t[o>>10]+(o&1023)]+e[o>>10];a[i]=u}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ie{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ie.instance==null&&(Ie.instance=new Ie),Ie.instance}static registerSaveRouter(e){Ie.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Ie.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Ie.getHandlers(e,"save")}static getLoadHandlers(e,t){return Ie.getHandlers(e,"load",t)}static getHandlers(e,t,r){const s=[];return(t==="load"?Ie.getInstance().loadRouters:Ie.getInstance().saveRouters).forEach(i=>{const o=i(e,r);o!==null&&s.push(o)}),s}}const Gl=n=>Ie.registerSaveRouter(n),Hl=n=>Ie.registerLoadRouter(n),ql=n=>Ie.getSaveHandlers(n),Xl=(n,e)=>Ie.getLoadHandlers(n,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oa="tensorflowjs",Da=1,Bn="models_store",dn="model_info_store";function zo(){if(!be().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Fa(n){const e=n.result;e.createObjectStore(Bn,{keyPath:"modelPath"}),e.createObjectStore(dn,{keyPath:"modelPath"})}class Vn{constructor(e){if(this.indexedDB=zo(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((r,s)=>{const a=this.indexedDB.open(Oa,Da);a.onupgradeneeded=()=>Fa(a),a.onsuccess=()=>{const i=a.result;if(t==null){const o=i.transaction(Bn,"readonly"),c=o.objectStore(Bn).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(c.result.modelArtifacts)},c.onerror=f=>(i.close(),s(c.error)),o.oncomplete=()=>i.close()}else{t.weightData=Ot.join(t.weightData);const o=Xr(t),u=i.transaction(dn,"readwrite");let c=u.objectStore(dn),f;try{f=c.put({modelPath:this.modelPath,modelArtifactsInfo:o})}catch(g){return s(g)}let p;f.onsuccess=()=>{p=i.transaction(Bn,"readwrite");const g=p.objectStore(Bn);let v;try{v=g.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:o})}catch(S){return s(S)}v.onsuccess=()=>r({modelArtifactsInfo:o}),v.onerror=S=>{c=u.objectStore(dn);const k=c.delete(this.modelPath);k.onsuccess=()=>(i.close(),s(v.error)),k.onerror=E=>(i.close(),s(v.error))}},f.onerror=g=>(i.close(),s(f.error)),u.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},a.onerror=i=>s(a.error)})}}Vn.URL_SCHEME="indexeddb://";const Vo=n=>be().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Vn.URL_SCHEME)?Yl(n.slice(Vn.URL_SCHEME.length)):null;Ie.registerSaveRouter(Vo);Ie.registerLoadRouter(Vo);function Yl(n){return new Vn(n)}function Jl(n){return n.startsWith(Vn.URL_SCHEME)?n.slice(Vn.URL_SCHEME.length):n}class Zl{constructor(){this.indexedDB=zo()}async listModels(){return new Promise((e,t)=>{const r=this.indexedDB.open(Oa,Da);r.onupgradeneeded=()=>Fa(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(dn,"readonly"),o=a.objectStore(dn).getAll();o.onsuccess=()=>{const u={};for(const c of o.result)u[c.modelPath]=c.modelArtifactsInfo;e(u)},o.onerror=u=>(s.close(),t(o.error)),a.oncomplete=()=>s.close()},r.onerror=s=>t(r.error)})}async removeModel(e){return e=Jl(e),new Promise((t,r)=>{const s=this.indexedDB.open(Oa,Da);s.onupgradeneeded=()=>Fa(s),s.onsuccess=()=>{const a=s.result,i=a.transaction(dn,"readwrite"),o=i.objectStore(dn),u=o.get(e);let c;u.onsuccess=()=>{if(u.result==null)return a.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const f=o.delete(e),p=()=>{c=a.transaction(Bn,"readwrite");const v=c.objectStore(Bn).delete(e);v.onsuccess=()=>t(u.result.modelArtifactsInfo),v.onerror=S=>r(u.error)};f.onsuccess=p,f.onerror=g=>(p(),a.close(),r(u.error))}},u.onerror=f=>(a.close(),r(u.error)),i.oncomplete=()=>{c==null?a.close():c.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qt="/",or="tensorflowjs_models",Uo="info",Ql="model_topology",e3="weight_specs",t3="weight_data",n3="model_metadata";function Wo(n){return{info:[or,n,Uo].join(qt),topology:[or,n,Ql].join(qt),weightSpecs:[or,n,e3].join(qt),weightData:[or,n,t3].join(qt),modelMetadata:[or,n,n3].join(qt)}}function Ko(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function r3(n){const e=n.split(qt);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(qt)}function s3(n){return n.startsWith(Un.URL_SCHEME)?n.slice(Un.URL_SCHEME.length):n}class Un{constructor(e){if(!be().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Wo(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=Xr(e),a=Ot.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,jl(a));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:s}}catch{throw Ko(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const o=JSON.parse(a);t.format=o.format,t.generatedBy=o.generatedBy,t.convertedBy=o.convertedBy,o.signature!=null&&(t.signature=o.signature),o.userDefinedMetadata!=null&&(t.userDefinedMetadata=o.userDefinedMetadata),o.modelInitializer!=null&&(t.modelInitializer=o.modelInitializer),o.initializerSignature!=null&&(t.initializerSignature=o.initializerSignature),o.trainingConfig!=null&&(t.trainingConfig=o.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Ml(i),t}}Un.URL_SCHEME="localstorage://";const Go=n=>be().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Un.URL_SCHEME)?a3(n.slice(Un.URL_SCHEME.length)):null;Ie.registerSaveRouter(Go);Ie.registerLoadRouter(Go);function a3(n){return new Un(n)}class i3{constructor(){_(be().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),_(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=or+qt,r=qt+Uo;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(t)&&a.endsWith(r)){const i=r3(a);e[i]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=s3(e);const t=Wo(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(t.info));return Ko(t),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ur="://";class Ye{constructor(){this.managers={}}static getInstance(){return Ye.instance==null&&(Ye.instance=new Ye),Ye.instance}static registerManager(e,t){_(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(ur)&&(e=e.slice(0,e.indexOf(ur))),_(e.length>0,()=>"scheme must not be an empty string.");const r=Ye.getInstance();_(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=t}static getManager(e){const t=Ye.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Ye.getInstance().managers)}}function Ss(n){if(n.indexOf(ur)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Ye.getSchemes().join(",")}`);return{scheme:n.split(ur)[0],path:n.split(ur)[1]}}async function Ho(n,e,t=!1){_(n!==e,()=>`Old path and new path are the same: '${n}'`);const r=Ie.getLoadHandlers(n);_(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),_(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const s=r[0],a=Ie.getSaveHandlers(e);_(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),_(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const i=a[0],o=Ss(n).scheme,u=Ss(n).path,c=o===Ss(n).scheme,f=await s.load();t&&c&&await Ye.getManager(o).removeModel(u);const p=await i.save(f);return t&&!c&&await Ye.getManager(o).removeModel(u),p.modelArtifactsInfo}async function o3(){const n=Ye.getSchemes(),e={};for(const t of n){const r=await Ye.getManager(t).listModels();for(const s in r){const a=t+ur+s;e[a]=r[s]}}return e}async function u3(n){const e=Ss(n);return Ye.getManager(e.scheme).removeModel(e.path)}async function c3(n,e){return Ho(n,e,!1)}async function l3(n,e){return Ho(n,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class h3{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!be().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return _o(e)}}if(be().get("IS_BROWSER")){be().setPlatform("browser",new h3);try{Ye.registerManager(Un.URL_SCHEME,new i3)}catch{}try{Ye.registerManager(Vn.URL_SCHEME,new Zl)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f3={importFetch:()=>require("node-fetch")};let la;class p3{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return be().global.fetch!=null?be().global.fetch(e,t):(la==null&&(la=f3.importFetch()),la(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}be().get("IS_NODE")&&!be().get("IS_BROWSER")&&be().setPlatform("node",new p3);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(n,e="float32",t){return e=e||"float32",pt(n),new Ea(n,e,t)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d3(n,e){const t=T(n,"x","cast");if(!d1(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:t},s={dtype:e};return C.runKernel(So,r,s)}const De=O({cast_:d3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m3(n){const t={x:T(n,"x","clone","string_or_numeric")};return C.runKernel(xo,t)}const mn=O({clone_:m3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qo(n,e=!1){console.log(n.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Co();const g3={buffer:Zt,cast:De,clone:mn,print:qo};kl(g3);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function me(n,e){return C.tidy(n,e)}function Oe(n){Do(n).forEach(t=>t.dispose())}function jt(n){return C.keep(n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y3(n,e){let t=T(n,"a","add"),r=T(e,"b","add");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(To,s)}const ae=O({add_:y3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b3(n,e){let t=T(n,"a","floorDiv"),r=T(e,"b","floorDiv");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(E2,s)}const Xo=O({floorDiv_:b3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w3(n,e){let t=T(n,"a","div"),r=T(e,"b","div");if([t,r]=Fe(t,r),t.dtype==="int32"&&r.dtype==="int32")return Xo(t,r);const s={a:t,b:r},a={};return C.runKernel(p2,s,a)}const ye=O({div_:w3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v3(n,e){let t=T(n,"a","mul"),r=T(e,"b","mul");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(rc,s)}const J=O({mul_:v3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N3(n){const e=T(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return C.runKernel(H1,t)}else{const t={x:e};return C.runKernel(x1,t)}}const ht=O({abs_:N3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T3(n){const t={x:T(n,"x","acos")};return C.runKernel(E1,t)}const S3=O({acos_:T3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x3(n){const t={x:T(n,"x","acosh")};return C.runKernel(k1,t)}const E3=O({acosh_:x3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k3(n){_(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),_(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const e=n.map((s,a)=>T(s,`tensors${a}`,"addN")),t=e[0];e.forEach(s=>{if(s.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(s=>{if(!Jt(s.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return C.runKernel(_1,r)}const _3=O({addN_:k3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $3(n,e=null,t=!1){const s={x:T(n,"x","all","bool")},a={axis:e,keepDims:t};return C.runKernel($1,s,a)}const I3=O({all_:$3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A3(n,e=null,t=!1){const s={x:T(n,"x","any","bool")},a={axis:e,keepDims:t};return C.runKernel(I1,s,a)}const O3=O({any_:A3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D3(n,e=0){const r={x:T(n,"x","argMax")},s={axis:e};return C.runKernel(A1,r,s)}const F3=O({argMax_:D3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C3(n,e=0){const r={x:T(n,"x","argMin")},s={axis:e};return C.runKernel(O1,r,s)}const R3=O({argMin_:C3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L3(n){const t={x:T(n,"x","asin")};return C.runKernel(D1,t)}const P3=O({asin_:L3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B3(n){const t={x:T(n,"x","asinh")};return C.runKernel(F1,t)}const j3=O({asinh_:B3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M3(n){const t={x:T(n,"x","atan")};return C.runKernel(C1,t)}const z3=O({atan_:M3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V3(n,e){let t=T(n,"a","atan2"),r=T(e,"b","atan2");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(L1,s)}const U3=O({atan2_:V3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W3(n){const t={x:T(n,"x","atanh")};return C.runKernel(R1,t)}const K3=O({atanh_:W3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G3(n,e,t,r,s,a,i="channelsLast"){const[o,u]=Ur(e);let c;if(i==="channelsLast")c=[o,u,n[3],n[3]];else if(i==="channelsFirst")c=[o,u,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return hi(n,c,t,r,s,a,!1,i)}function hi(n,e,t,r,s,a,i=!1,o="channelsLast"){let[u,c,f,p]=[-1,-1,-1,-1];if(o==="channelsLast")[u,c,f,p]=n;else if(o==="channelsFirst")[u,p,c,f]=n;else throw new Error(`Unknown dataFormat ${o}`);const[g,v,,S]=e,[k,E]=Ur(t),[F,j]=Ur(r),W=Ca(g,F),B=Ca(v,j),{padInfo:K,outHeight:G,outWidth:Q}=X3(s,c,f,k,E,W,B,a,o),re=i?S*p:S;let q;return o==="channelsFirst"?q=[u,re,G,Q]:o==="channelsLast"&&(q=[u,G,Q,re]),{batchSize:u,dataFormat:o,inHeight:c,inWidth:f,inChannels:p,outHeight:G,outWidth:Q,outChannels:re,padInfo:K,strideHeight:k,strideWidth:E,filterHeight:g,filterWidth:v,effectiveFilterHeight:W,effectiveFilterWidth:B,dilationHeight:F,dilationWidth:j,inShape:n,outShape:q,filterShape:e}}function H3(n,e,t,r,s){r==null&&(r=q3(n,e,t));const a=n[0],i=n[1],o=Os((a-e+2*r)/t+1,s),u=Os((i-e+2*r)/t+1,s);return[o,u]}function q3(n,e,t,r=1){const s=Ca(e,r);return Math.floor((n[0]*(t-1)-t+s)/2)}function Ur(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Ca(n,e){return e<=1?n:n+(n-1)*(e-1)}function X3(n,e,t,r,s,a,i,o,u){let c,f,p;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const v=H3([e,t],a,r,n,o);f=v[0],p=v[1]}else if(n==="same"){f=Math.ceil(e/r),p=Math.ceil(t/s);const g=Math.max(0,(f-1)*r+a-e),v=Math.max(0,(p-1)*s+i-t),S=Math.floor(g/2),k=g-S,E=Math.floor(v/2),F=v-E;c={top:S,bottom:k,left:E,right:F,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((e-a+1)/r),p=Math.ceil((t-i+1)/s);else if(typeof n=="object"){const g=u==="channelsLast"?n[1][0]:n[2][0],v=u==="channelsLast"?n[1][1]:n[2][1],S=u==="channelsLast"?n[2][0]:n[3][0],k=u==="channelsLast"?n[2][1]:n[3][1];c={top:g,bottom:v,left:S,right:k,type:g===0&&v===0&&S===0&&k===0?"VALID":"EXPLICIT"},f=Os((e-a+g+v)/r+1,o),p=Os((t-i+S+k)/s+1,o)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:f,outWidth:p}}function Os(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function Ds(n){const[e,t,r]=Ur(n);return e===1&&t===1&&r===1}function Tn(n,e){return Ds(n)||Ds(e)}function hr(n){return Ur(n).every(e=>e>0)}function Dt(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")_(zr(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{_(zr(s),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${s}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y3(n,e){const r={x:T(n,"x","reshape","string_or_numeric")},s={shape:e};return C.runKernel(Sc,r,s)}const U=O({reshape_:Y3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J3(n,e,t,r,s){const a=T(n,"x","avgPool","float32"),i=1;_(Tn(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let o=a,u=!1;a.rank===3&&(u=!0,o=U(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),Dt("avgPool",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s};let p=C.runKernel(P1,c,f);return p=De(p,a.dtype),u?U(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Yo=O({avgPool_:J3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z3(n,e,t,r,s,a="NDHWC"){const i=T(n,"x","avgPool3d","float32");let o=i,u=!1;i.rank===4&&(u=!0,o=U(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(o.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${o.rank}.`),_(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),_(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),Dt("avgPool3d",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s,dataFormat:a};let p=C.runKernel(B1,c,f);return p=De(p,o.dtype),u?U(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Q3=O({avgPool3d_:Z3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e4(n,e=0){_(n.length>=1,()=>"Pass at least one tensor to concat");const t=Is(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),t.length===1)return mn(t[0]);const r=t,s={axis:e};return C.runKernel(q1,r,s)}const Ke=O({concat_:e4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t4(n,e,t=!1,r=!1){let s=T(n,"a","matMul"),a=T(e,"b","matMul");[s,a]=Fe(s,a);const i={a:s,b:a},o={transposeA:t,transposeB:r};return C.runKernel(j1,i,o)}const Se=O({matMul_:t4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n4(n){const t={x:T(n,"x","sigmoid","float32")};return C.runKernel(jc,t)}const Mn=O({sigmoid_:n4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r4(n,e,t){const r=T(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:e,size:t};return C.runKernel(Rc,s,a)}const fe=O({slice_:r4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s4(n){const t={x:T(n,"x","tanh","float32")};return C.runKernel(al,t)}const Ra=O({tanh_:s4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a4(n,e,t,r,s,a){const i=T(n,"forgetBias","basicLSTMCell"),o=T(e,"lstmKernel","basicLSTMCell"),u=T(t,"lstmBias","basicLSTMCell"),c=T(r,"data","basicLSTMCell"),f=T(s,"c","basicLSTMCell"),p=T(a,"h","basicLSTMCell"),g=Ke([c,p],1),v=Se(g,o),S=ae(v,u),k=S.shape[0],E=S.shape[1]/4,F=[k,E],j=fe(S,[0,0],F),W=fe(S,[0,E],F),B=fe(S,[0,E*2],F),K=fe(S,[0,E*3],F),G=ae(J(Mn(j),Ra(W)),J(f,Mn(ae(i,B)))),Q=J(Ra(G),Mn(K));return[G,Q]}const i4=O({basicLSTMCell_:a4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o4(n,e,t){const r=T(n,"x","batchToSpaceND"),s=e.reduce((o,u)=>o*u);_(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),_(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),_(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const a={x:r},i={blockShape:e,crops:t};return C.runKernel(M1,a,i)}const Jo=O({batchToSpaceND_:o4});function u4(n){let e;return n.rank===0||n.rank===1?e=U(n,[1,1,1,n.size]):n.rank===2?e=U(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=U(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c4(n,e,t,r,s,a){a==null&&(a=.001);const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;r!=null&&(f=T(r,"offset","batchNorm")),_(o.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(f==null||o.rank===f.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(c==null||o.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const g={x:u4(i),scale:c,offset:f,mean:o,variance:u},v={varianceEpsilon:a},S=C.runKernel(k2,g,v);return U(S,i.shape)}const Vs=O({batchNorm_:c4});function l4(n,e,t,r,s,a){const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;return r!=null&&(f=T(r,"offset","batchNorm")),_(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),_(o.rank===2||o.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${o.rank}.`),_(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&_(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),f!=null&&_(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`),Vs(i,o,u,f,c,a)}const h4=O({batchNorm2d_:l4});function f4(n,e,t,r,s,a){const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;return r!=null&&(f=T(r,"offset","batchNorm")),_(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),_(o.rank===3||o.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${o.rank}.`),_(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&_(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),f!=null&&_(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`),Vs(i,o,u,f,c,a)}const p4=O({batchNorm3d_:f4});function d4(n,e,t,r,s,a){const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;return r!=null&&(f=T(r,"offset","batchNorm")),_(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),_(o.rank===4||o.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${o.rank}.`),_(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&_(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),f!=null&&_(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`),Vs(i,o,u,f,c,a)}const m4=O({batchNorm4d_:d4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g4(n,e,t){const r=T(n,"x","bincount"),s=T(e,"weights","bincount");_(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},i={size:t};return C.runKernel(z1,a,i)}const Zo=O({bincount_:g4});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y4(n,e){const t=T(n,"x","bitwiseAnd"),r=T(e,"y","bitwiseAnd");if(!Jt(t.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${r.shape}`);if(t.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${r.dtype}`);const s={a:t,b:r};return C.runKernel(V1,s)}const b4=O({bitwiseAnd_:y4});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w4(n,e){const t=T(n,"s0","broadcastArgs","int32"),r=T(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:t,s1:r};return C.runKernel(U1,s)}const v4=O({broadcastArgs_:w4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N4(n,e){let t=T(n,"broadcastTo","x");const r=t.shape;if(pt(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const c=t.shape.slice();for(;c.length<e.length;)c.unshift(1);t=U(t,c)}const s=t.shape,a=Array.from(e);for(let c=e.length-1;c>=0;c--)if(s[c]===e[c])a[c]=1;else if(t.shape[c]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(a.map((c,f)=>c>1?f:-1).filter(c=>c>=0).length===0)return mn(t);const o={x:t},u={reps:a};return C.runKernel(Eo,o,u)}const xs=O({broadcastTo_:N4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T4(n){const t={x:T(n,"x","ceil","float32")};return C.runKernel(W1,t)}const S4=O({ceil_:T4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yr(n,e,t){pt(n),t=t||zs(e);const r={shape:n,value:e,dtype:t};return C.runKernel(T2,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x4(n,e,t){const r=T(n,"x","clipByValue");if(_(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return Yr(r.shape,e,r.dtype);const s={x:r},a={clipValueMin:e,clipValueMax:t};return C.runKernel(K1,s,a)}const Qo=O({clipByValue_:x4});function E4(n){return Ke(n,0)}const k4=O({concat1d_:E4});function _4(n,e){return Ke(n,e)}const $4=O({concat2d_:_4});function I4(n,e){return Ke(n,e)}const A4=O({concat3d_:I4});function O4(n,e){return Ke(n,e)}const D4=O({concat4d_:O4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F4(n,e,t,r,s="NHWC",a=[1,1],i){const o=T(n,"x","conv2d","float32"),u=T(e,"filter","conv2d","float32");let c=o,f=!1;o.rank===3&&(f=!0,c=U(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),_(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Dt("conv2d",r,i);const p=s==="NHWC"?c.shape[3]:c.shape[1];_(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),_(Tn(t,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),_(hr(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),_(hr(t),()=>"Error in conv2D: Strides should be larger than 0.");const g={x:c,filter:u},v={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i},S=C.runKernel(X1,g,v);return f?U(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const Us=O({conv2d_:F4});function C4(n,e,t,r,s="NWC",a=1,i){const o=T(n,"x","conv1d"),u=T(e,"filter","conv1d");let c=o,f=!1;o.rank===2&&(f=!0,c=U(o,[1,o.shape[0],o.shape[1]])),_(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),_(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Dt("conv1d",r,i),_(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),_(Tn(t,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${a}'`),_(hr(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),_(hr(t),()=>"Error in conv1D: Stride should be larger than 0."),_(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const p=U(u,[1,u.shape[0],u.shape[1],u.shape[2]]),g=U(c,[c.shape[0],1,c.shape[1],c.shape[2]]),E=Us(g,p,[1,t],r,"NHWC",[1,a],i);return f?U(E,[E.shape[2],E.shape[3]]):U(E,[E.shape[0],E.shape[2],E.shape[3]])}const R4=O({conv1d_:C4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L4(n,e,t,r,s,a="NHWC",i){_(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let o=n,u=e,c=!1;e.rank===3&&(c=!0,u=U(e,[1,e.shape[0],e.shape[1],e.shape[2]]),o=[1,n[0],n[1],n[2]]),_(o.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${o.length}.`),_(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),_(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const f=a==="NHWC"?o[3]:o[1],p=a==="NHWC"?u.shape[3]:u.shape[1];_(f===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${t.shape[2]}.`),_(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),Dt("conv2dDerInput",s,i);const g={dy:u,filter:t},v={strides:r,pad:s,dataFormat:a,dimRoundingMode:i,inputShape:o},S=C.runKernel(J1,g,v);return c?U(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const eu=O({conv2DBackpropInput_:L4});function P4(n,e,t,r,s,a){const i=T(n,"x","conv2dTranspose"),o=T(e,"filter","conv2dTranspose");return eu(t,i,o,r,s,"NHWC",a)}const B4=O({conv2dTranspose_:P4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j4(n,e,t,r,s="NDHWC",a=[1,1,1]){const i=T(n,"x","conv3d"),o=T(e,"filter","conv3d");let u=i,c=!1;i.rank===4&&(c=!0,u=U(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),_(o.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${o.rank}.`),_(u.shape[4]===o.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${o.shape[3]}.`),_(Tn(t,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),_(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),_(hr(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),_(hr(t),()=>"Error in conv3D: Strides should be larger than 0.");const f={x:u,filter:o},p={strides:t,pad:r,dataFormat:s,dilations:a},g=C.runKernel(Z1,f,p);return c?U(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const M4=O({conv3d_:j4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z4(n,e,t,r,s){_(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let a=n,i=e,o=!1;e.rank===4&&(o=!0,i=U(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,n[0],n[1],n[2],n[3]]);const u=a[4],c=i.shape[4];_(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),_(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),_(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),_(u===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${t.shape[3]}.`),_(c===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${t.shape[4]}.`);const f={dy:i,filter:t},p={pad:s,strides:r,inputShape:a},g=C.runKernel(Q1,f,p);return o?U(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const V4=O({conv3DBackpropInput_:z4});function U4(n,e,t,r,s){const a=T(n,"x","conv3dTranspose"),i=T(e,"filter","conv3dTranspose");return V4(t,a,i,r,s)}const W4=O({conv3dTranspose_:U4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K4(n){const t={x:T(n,"x","cos","float32")};return C.runKernel(e2,t)}const G4=O({cos_:K4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H4(n){const t={x:T(n,"x","cosh","float32")};return C.runKernel(t2,t)}const q4=O({cosh_:H4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X4(n,e=0,t=!1,r=!1){const a={x:T(n,"x","cumprod")},i={axis:e,exclusive:t,reverse:r};return C.runKernel(n2,a,i)}const Y4=O({cumprod_:X4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J4(n,e=0,t=!1,r=!1){const a={x:T(n,"x","cumsum")},i={axis:e,exclusive:t,reverse:r};return C.runKernel(r2,a,i)}const Z4=O({cumsum_:J4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q4(n,e,t,r=!1){const s=T(n,"x","denseBincount"),a=T(e,"weights","denseBincount");_(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),_(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const i={x:s,weights:a},o={size:t,binaryOutput:r};return C.runKernel(a2,i,o)}const eh=O({denseBincount_:Q4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function th(n,e,t="NHWC"){const r=T(n,"x","depthToSpace","float32"),s=t==="NHWC"?r.shape[1]:r.shape[2],a=t==="NHWC"?r.shape[2]:r.shape[3],i=t==="NHWC"?r.shape[3]:r.shape[1];_(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),_(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e}  for depthToSpace with input shape
    ${r.shape}`),_(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e} for depthToSpace with input shape
        ${r.shape}`),_(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${r.shape}`);const o={x:r},u={blockSize:e,dataFormat:t};return C.runKernel(i2,o,u)}const nh=O({depthToSpace_:th});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rh(n,e,t,r,s="NHWC",a=[1,1],i){const o=T(n,"x","depthwiseConv2d","float32"),u=T(e,"filter","depthwiseConv2d","float32");let c=o,f=!1;o.rank===3&&(f=!0,c=U(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),_(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const p=s==="NHWC"?c.shape[3]:c.shape[1];_(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),Dt("depthwiseConv2d",r,i);const g={x:c,filter:u},v={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i},S=C.runKernel(o2,g,v);return f?U(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const fi=O({depthwiseConv2d_:rh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sh(n){const t={x:T(n,"x","diag")};return C.runKernel(l2,t)}const ah=O({diag_:sh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ih(n,e,t,r,s=[1,1],a="NHWC"){const i=T(n,"x","dilation2d"),o=T(e,"filter","dilation2d");_(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),_(o.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${o.rank}.`),_(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let u=i,c=!1;i.rank===3&&(u=U(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),_(u.shape[3]===o.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${o.shape[2]}`);const f={x:u,filter:o},p={strides:t,pad:r,dilations:s},g=C.runKernel(h2,f,p);return c?U(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const oh=O({dilation2d_:ih});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uh(n,e){const t=[];for(let r=0;r<e.length;r++){const s=n[n.length-r-1],a=e.length-r-1,i=e[a];(s==null||s===1&&i>1)&&t.unshift(a)}return t}function Me(n,e){const t=Math.max(n.length,e.length),r=new Array(t);for(let s=0;s<t;s++){let a=n[n.length-s-1];a==null&&(a=1);let i=e[e.length-s-1];if(i==null&&(i=1),a===1)r[t-s-1]=i;else if(i===1)r[t-s-1]=a;else if(a!==i){const o=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(o)}else r[t-s-1]=a}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ch(n,e){let t=T(n,"a","equal","string_or_numeric"),r=T(e,"b","equal","string_or_numeric");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(y2,s)}const tu=O({equal_:ch});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lh(n,e,t){const r=T(e,"a","where"),s=T(t,"b","where"),a=T(n,"condition","where","bool"),i=Me(Me(a.shape,r.shape),s.shape),o=xs(a,i),u=xs(r,i),c=xs(s,i),f={condition:o,t:u,e:c};return C.runKernel(Fc,f)}const gn=O({where_:lh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hh(n){const t={x:T(n,"x","zerosLike")};return C.runKernel(hl,t)}const ft=O({zerosLike_:hh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fh(n,e){let t=T(n,"a","div"),r=T(e,"b","div");[t,r]=Fe(t,r);const s=ye(t,r),a=ft(s),i=tu(r,a);return gn(i,a,s)}const ph=O({divNoNan_:fh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dh(n,e){const t=T(n,"t1","dot"),r=T(e,"t2","dot");_((t.rank===1||t.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${r.rank}.`);const s=t.rank===1?t.size:t.shape[1],a=r.rank===1?r.size:r.shape[0];if(_(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),t.rank===1&&r.rank===1){const i=U(t,[1,-1]),o=U(r,[-1,1]),u=Se(i,o);return U(u,[])}else if(t.rank===1&&r.rank===2){const i=U(t,[1,-1]),o=U(r,[r.shape[0],r.shape[1]]),u=Se(i,o);return U(u,[u.size])}else if(t.rank===2&&r.rank===1){const i=U(r,[-1,1]),o=Se(t,i);return U(o,[o.size])}else{const i=U(r,[r.shape[0],r.shape[1]]);return Se(t,i)}}const mh=O({dot_:dh});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gh(n,...e){const t=e.map((s,a)=>T(s,`tensors${a}`,"einsum")),r={equation:n};return C.runKernel(d2,t,r)}const yh=O({einsum_:gh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bh(n){const t={x:T(n,"x","elu","float32")};return C.runKernel(m2,t)}const nu=O({elu_:bh});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wh(n,e){const t=T(n,"x","ensureShape","string_or_numeric");if(!l1(t.shape,e))throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);return n}const vh=O({ensureShape_:wh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nh(n){let e=T(n,"x","erf");_(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=De(e,"float32"));const t={x:e};return C.runKernel(g2,t)}const Th=O({erf_:Nh});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sh(n,e,t){const r=n.length+e.length,s=[];let a=0,i=0;for(let o=0;o<r;o++)t.indexOf(o)===-1?s.push(n[a++]):s.push(e[i++]);return s}function Ws(n,e){const t=e.map(r=>1);return Sh(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xh(n,e=null,t=!1){const s={x:T(n,"x","max")},a={reductionIndices:e,keepDims:t};return C.runKernel(G2,s,a)}const cr=O({max_:xh});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eh(n,e=null,t=!1){const s={x:T(n,"x","min")},a={axis:e,keepDims:t};return C.runKernel(Z2,s,a)}const La=O({min_:Eh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kh(n,e){let t=T(n,"base","pow"),r=T(e,"exp","pow");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(pc,s)}const Wr=O({pow_:kh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ve(n,e){if((Tt(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Tt(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Nn(n,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _h(n){const t={x:T(n,"x","sqrt","float32")};return C.runKernel(zc,t)}const Qt=O({sqrt_:_h});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $h(n){const e=T(n,"x","square"),t={};return C.runKernel("Square",{x:e},t)}const It=O({square_:$h});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(n,e=null,t=!1){let r=T(n,"x","sum");r.dtype==="bool"&&(r=De(r,"int32"));const s={x:r},a={axis:e,keepDims:t};return C.runKernel(Vc,s,a)}const $e=O({sum_:Ih});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ah(n,e="euclidean",t=null,r=!1){n=T(n,"x","norm");const s=ru(n,e,t);let a=s.shape;if(r){const i=Ms(t,n.shape);a=Ws(s.shape,i)}return U(s,a)}function ru(n,e,t=null){if(n.rank===0)return ht(n);if(n.rank!==1&&t===null)return ru(U(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return $e(ht(n),t);if(e===1/0)return cr(ht(n),t);if(e===-1/0)return La(ht(n),t);if(e==="euclidean"||e===2)return Qt($e(Wr(ht(n),ve(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return cr($e(ht(n),t[0]),t[1]-1);if(e===1/0)return cr($e(ht(n),t[1]),t[0]);if(e===-1/0)return La($e(ht(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return Qt($e(It(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const Ks=O({norm_:Ah});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oh(n,e=null,t=!1){return Ks(n,"euclidean",e,t)}const Dh=O({euclideanNorm_:Oh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fh(n){const t={x:T(n,"x","exp")};return C.runKernel(b2,t)}const en=O({exp_:Fh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ch(n,e=0){const t=T(n,"x","expandDims","string_or_numeric");_(e<=t.rank,()=>"Axis must be <= rank of the tensor");const r={input:t},s={dim:e};return C.runKernel(w2,r,s)}const $t=O({expandDims_:Ch});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rh(n){const t={x:T(n,"x","expm1")};return C.runKernel(v2,t)}const Lh=O({expm1_:Rh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(n,e){const t=T(n,"x","tile","string_or_numeric");_(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const r={x:t},s={reps:e};return C.runKernel(Eo,r,s)}const Mr=O({tile_:Ph});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bh(n,e,t,r="float32"){e==null&&(e=n);const s=Zt([n,e],r),a=n<=e?n:e;for(let o=0;o<a;++o)s.set(1,o,o);const i=U(s.toTensor(),[n,e]);if(t==null)return i;if(t.length===1)return Mr($t(i,0),[t[0],1,1]);if(t.length===2)return Mr($t($t(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return Mr($t($t($t(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const su=O({eye_:Bh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jh(n){const t={x:T(n,"x","floor","float32")};return C.runKernel(x2,t)}const au=O({floor_:jh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mh(n,e,t=0,r=0){const s=T(n,"x","gather"),a=T(e,"indices","gather","int32"),i={x:s,indices:a},o={axis:t,batchDims:r};return C.runKernel(_2,i,o)}const iu=O({gather_:Mh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zh(n,e){let t=T(n,"a","greater","string_or_numeric"),r=T(e,"b","greater","string_or_numeric");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(I2,s)}const Gs=O({greater_:zh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vh(n,e){let t=T(n,"a","greaterEqual","string_or_numeric"),r=T(e,"b","greaterEqual","string_or_numeric");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(A2,s)}const ou=O({greaterEqual_:Vh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(n){const t={input:T(n,"input","imag")};return C.runKernel(D2,t)}const Hs=O({imag_:Uh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wh(n){const t={x:T(n,"x","isFinite")};return C.runKernel(F2,t)}const Kh=O({isFinite_:Wh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gh(n){const t={x:T(n,"x","isInf")};return C.runKernel(C2,t)}const Hh=O({isInf_:Gh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qh(n){const t={x:T(n,"x","isNaN")};return C.runKernel(R2,t)}const Xh=O({isNaN_:qh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yh(n,e=.2){const r={x:T(n,"x","leakyRelu")},s={alpha:e};return C.runKernel(L2,r,s)}const uu=O({leakyRelu_:Yh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(n,e){let t=T(n,"a","less","string_or_numeric"),r=T(e,"b","less","string_or_numeric");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(P2,s)}const Pa=O({less_:Jh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zh(n,e){let t=T(n,"a","lessEqual","string_or_numeric"),r=T(e,"b","lessEqual","string_or_numeric");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(B2,s)}const pi=O({lessEqual_:Zh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qh(n,e,t){if(t<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:e,num:t};return C.runKernel(j2,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ef(n,e=5,t=1,r=1,s=.5){const a=T(n,"x","localResponseNormalization");_(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),_(zr(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=a,o=!1;a.rank===3&&(o=!0,i=U(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:i},c={depthRadius:e,bias:t,alpha:r,beta:s},f=C.runKernel(K2,u,c);return o?U(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const tf=O({localResponseNormalization_:ef});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(n){const t={x:T(n,"x","log","float32")};return C.runKernel(M2,t)}const Kr=O({log_:nf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rf(n){const t={x:T(n,"x","log1p")};return C.runKernel(z2,t)}const cu=O({log1p_:rf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sf(n,e){_(Sa(n),()=>"The f passed in variableGrads(f) must be a function"),_(e==null||Array.isArray(e)&&e.every(c=>c instanceof $s),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const c in C.registeredVariables)e.push(C.registeredVariables[c])}const r=t?e.filter(c=>!c.trainable):null,s=e.length;e=e.filter(c=>c.trainable),_(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const a=!0,{value:i,grads:o}=C.gradients(n,e,null,a);_(o.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),_(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const u={};return e.forEach((c,f)=>{o[f]!=null&&(u[c.name]=o[f])}),r!=null&&r.forEach(c=>u[c.name]=null),{value:i,grads:u}}function tn(n){return C.customGrad(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function af(n){const t={x:T(n,"x","neg")};return C.runKernel(sc,t)}const Vt=O({neg_:af});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function of(n){const t={x:T(n,"x","softplus")};return C.runKernel(Mc,t)}const lu=O({softplus_:of});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(n){const e=T(n,"x","logSigmoid");return tn(r=>({value:Vt(lu(Vt(r))),gradFunc:i=>J(i,Mn(Vt(r)))}))(e)}const cf=O({logSigmoid_:uf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lf(n,e){let t=T(n,"a","sub"),r=T(e,"b","sub");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(rl,s)}const pe=O({sub_:lf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hf(n,e=-1){const t=T(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return tn((s,a)=>{const o=cr(s,e,!0),u=pe(s,o),c=pe(De(u,"float32"),Kr($e(en(u),e,!0)));return a([c]),{value:c,gradFunc:(p,g)=>{const[v]=g,S=!0,k=en(v);return pe(p,J($e(p,e,S),k))}}})(t)}const ff=O({logSoftmax_:hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pf(n,e=null,t=!1){const r=T(n,"x","logSumExp"),s=Ms(e,r.shape),a=cr(r,s,!0),i=pe(r,a),o=en(i),u=$e(o,s),c=Kr(u),f=ae(U(a,c.shape),c);if(t){const p=Ws(f.shape,s);return U(f,p)}return f}const hu=O({logSumExp_:pf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function df(n,e){const t=T(n,"a","logicalAnd","bool"),r=T(e,"b","logicalAnd","bool");Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(V2,s)}const Fs=O({logicalAnd_:df});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(n){const t={x:T(n,"x","logicalNot","bool")};return C.runKernel(U2,t)}const fu=O({logicalNot_:mf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(n,e){const t=T(n,"a","logicalOr","bool"),r=T(e,"b","logicalOr","bool");Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(W2,s)}const pu=O({logicalOr_:gf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yf(n,e){const t=T(n,"a","logicalXor","bool"),r=T(e,"b","logicalXor","bool");return Me(t.shape,r.shape),Fs(pu(n,e),fu(Fs(n,e)))}const bf=O({logicalXor_:yf});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ws=2147483648;function wf(n,e,t="left"){const r=T(n,"sortedSequence","searchSorted"),s=T(e,"values","searchSorted"),a=r.shape[r.shape.length-1],i=s.shape[s.shape.length-1],o=U(r,[-1,a]),u=U(s,[-1,i]);if(o.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(o.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(We(u.shape)>=ws)throw new Error(`values tensor size must less than ${ws}`);if(o.shape[1]>=ws)throw new Error(`trailing dim_size must less than ${ws} for int32 output type, was ${o.shape[1]}`);const c={sortedSequence:o,values:u},f={side:t};return C.runKernel(Dc,c,f)}const di=O({searchSorted_:wf});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vf(n,e){return di(n,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nf(n,e,t,r,s){const a=T(n,"x","maxPool"),i=1;let o=a,u=!1;a.rank===3&&(u=!0,o=U(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),_(Tn(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),Dt("maxPool",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s},p=C.runKernel(q2,c,f);return u?U(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const du=O({maxPool_:Nf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tf(n,e=[1,1,1],t,r,s,a="NDHWC"){const i=T(n,"x","maxPool3d");let o=i,u=!1;i.rank===4&&(u=!0,o=U(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(o.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${o.rank}.`),_(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Dt("maxPool3d",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s,dataFormat:a},p=C.runKernel(X2,c,f);return u?U(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Sf=O({maxPool3d_:Tf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xf(n,e,t,r,s=!1){const i={x:T(n,"x","maxPoolWithArgmax")},o={filterSize:e,strides:t,pad:r,includeBatchInIndex:s},u=C.runKernel(Y2,i,o);return{result:u[0],indexes:u[1]}}const Ef=O({maxPoolWithArgmax_:xf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(n,e){let t=T(n,"a","maximum"),r=T(e,"b","maximum");[t,r]=Fe(t,r),t.dtype==="bool"&&(t=De(t,"int32"),r=De(r,"int32")),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(H2,s)}const mu=O({maximum_:kf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _f(n,e=null,t=!1){const s={x:T(n,"x","mean")},a={axis:e,keepDims:t};return C.runKernel(J2,s,a)}const Cs=O({mean_:_f});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fr(n,e="float32"){if(pt(n),e==="complex64"){const r=fr(n,"float32"),s=fr(n,"float32");return bn(r,s)}const t=oi(We(n),e);return C.makeTensor(t,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jn(n,e="float32"){if(pt(n),e==="complex64"){const r=jn(n,"float32"),s=fr(n,"float32");return bn(r,s)}const t=wo(We(n),e);return C.makeTensor(t,n,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(n,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=T(n,"x","meshgrid",n instanceof Ae?n.dtype:"float32");if(e===void 0)return[r];let s=T(e,"y","meshgrid",e instanceof Ae?e.dtype:"float32");const a=We(r.shape),i=We(s.shape);return t==="xy"?(r=U(r,[1,-1]),s=U(s,[-1,1]),[Se(jn([i,1],r.dtype),r),Se(s,jn([1,a],s.dtype))]):(r=U(r,[-1,1]),s=U(s,[1,-1]),[Se(r,jn([1,i],r.dtype)),Se(jn([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function If(n,e){let t=T(n,"a","minimum"),r=T(e,"b","minimum");[t,r]=Fe(t,r),t.dtype==="bool"&&(t=De(t,"int32"),r=De(r,"int32")),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(Q2,s)}const Rs=O({minimum_:If});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Af(n,e,t){_(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const r=T(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");_(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const s=t==="reflect"?1:0;for(let o=0;o<r.rank;o++)_(e[o].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_(e[o][0]>=0&&e[o][0]<=r.shape[o]-s&&e[o][1]>=0&&e[o][1]<=r.shape[o]-s,()=>`Padding in dimension ${o} cannot be greater than or equal to ${r.shape[o]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:e,mode:t},i={x:r};return C.runKernel(ec,i,a)}const Of=O({mirrorPad_:Af});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(n,e){let t=T(n,"a","mod"),r=T(e,"b","mod");[t,r]=Fe(t,r);const s={a:t,b:r};return C.runKernel(tc,s)}const Ff=O({mod_:Df});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(n,e=null,t=!1){n=T(n,"x","moments");const r=Ms(e,n.shape),s=Cs(n,r,t);let a=s.shape;t||(a=Ws(s.shape,r));const i=It(pe(De(n,"float32"),U(s,a))),o=Cs(i,r,t);return{mean:s,variance:o}}const Rf=O({moments_:Cf});function Lf(n,e,t,r){const s=T(e,"data","multiRNNCell"),a=Is(t,"c","multiRNNCell"),i=Is(r,"h","multiRNNCell");let o=s;const u=[];for(let p=0;p<n.length;p++){const g=n[p](o,a[p],i[p]);u.push(g[0]),u.push(g[1]),o=g[1]}const c=[],f=[];for(let p=0;p<u.length;p+=2)c.push(u[p]),f.push(u[p+1]);return[c,f]}const Pf=O({multiRNNCell_:Lf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bf(n,e,t,r=!1){const s=T(n,"logits","multinomial"),a=s.size,i=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);t=t||Math.random();const u={logits:i===1?U(s,[1,-1]):s},c={numSamples:e,seed:t,normalized:r},f=C.runKernel(nc,u,c);return i===1?U(f,[f.size]):f}const jf=O({multinomial_:Bf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(n,e){let t=T(n,"a","notEqual","string_or_numeric"),r=T(e,"b","notEqual","string_or_numeric");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r};return C.runKernel(ac,s)}const gu=O({notEqual_:Mf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(n,e,t=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const i={indices:T(n,"indices","oneHot","int32")},o={dtype:s,depth:e,onValue:t,offValue:r};return C.runKernel(lc,i,o)}const Vf=O({oneHot_:zf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uf(n){const t={x:T(n,"x","onesLike")};return C.runKernel(cc,t)}const Wf=O({onesLike_:Uf});function Kf(n,e){const t=T(n,"v1","outerProduct"),r=T(e,"v2","outerProduct");_(t.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${r.rank}.`);const s=U(t,[-1,1]),a=U(r,[1,-1]);return Se(s,a)}const Gf=O({outerProduct_:Kf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hf(n,e,t=0){const r=T(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:t},a={x:r};return C.runKernel(fc,a,s)}const Jr=O({pad_:Hf});function qf(n,e,t=0){return _(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),Jr(n,[e],t)}const Xf=O({pad1d_:qf});function Yf(n,e,t=0){return _(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Jr(n,e,t)}const Jf=O({pad2d_:Yf});function Zf(n,e,t=0){return _(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Jr(n,e,t)}const Qf=O({pad3d_:Zf});function ep(n,e,t=0){return _(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Jr(n,e,t)}const tp=O({pad4d_:ep});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(n,e,t){const r=T(n,"x","spaceToBatchND");_(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),_(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),_(r.shape.reduce((i,o,u)=>u>0&&u<=e.length?i&&(o+t[u-1][0]+t[u-1][1])%e[u-1]===0:i,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},a={blockShape:e,paddings:t};return C.runKernel(Uc,s,a)}const yu=O({spaceToBatchND_:np});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rp(n,e,t,r,s,a,i){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const o=T(n,"x","maxPool");let u=o,c=!1;o.rank===3&&(c=!0,u=U(o,[1,o.shape[0],o.shape[1],o.shape[2]])),_(Tn(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const f=G3(u.shape,e,a,s,r),p=[f.dilationHeight,f.dilationWidth];let g;r==="same"?g=ap([f.filterHeight,f.filterWidth],p):g=[[0,0],[0,0]];const v=p[0]===1&&p[1]===1,[S,k]=sp([f.inHeight,f.inWidth],p,g),E=v?r:"valid",F=v?u:yu(u,p,S),W=(t==="avg"?()=>Yo(F,e,a,E,i):()=>du(F,e,a,E,i))(),B=v?W:Jo(W,p,k);return c?U(B,[B.shape[1],B.shape[2],B.shape[3]]):B}function sp(n,e,t){const r=t.map(f=>f[0]),s=t.map(f=>f[1]),a=n.concat(r,s),i=e.map((f,p)=>(f-a[p]%f)%f),o=s.map((f,p)=>f+i[p]),u=e.map((f,p)=>[r[p],o[p]]),c=e.map((f,p)=>[0,i[p]]);return[u,c]}function ap(n,e){const r=n.map((i,o)=>i+(i-1)*(e[o]-1)).map(i=>i-1),s=r.map(i=>Math.floor(i/2)),a=r.map((i,o)=>i-s[o]);return r.map((i,o)=>[s[o],a[o]])}const ip=O({pool_:rp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function op(n,e){const t=T(n,"x","prelu"),r=T(e,"alpha","prelu"),s={x:t,alpha:r};return C.runKernel(dc,s)}const bu=O({prelu_:op});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function up(n,e=null,t=!1){let r=T(n,"x","prod");r.dtype==="bool"&&(r=De(r,"int32"));const s={x:r},a={axis:e,keepDims:t};return C.runKernel(mc,s,a)}const cp=O({prod_:up});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lp(n,e,t,r){const s=n.map((f,p)=>T(f,`tensors${p}`,"raggedGather","int32")),a=T(e,"paramsDenseValues","raggedGather"),i=T(t,"indices","raggedGather","int32"),o={paramsNestedSplits:s,paramsDenseValues:a,indices:i},u={outputRaggedRank:r},c=C.runKernel(gc,o,u);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}const hp=O({raggedGather_:lp});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fp(n,e,t){const r=T(n,"starts","raggedRange"),s=T(e,"limits","raggedRange",r.dtype),a=T(t,"deltas","raggedRange",r.dtype),i={starts:r,limits:s,deltas:a},o=C.runKernel(yc,i);return{rtNestedSplits:o[0],rtDenseValues:o[1]}}const pp=O({raggedRange_:fp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dp(n,e,t,r,s){const a=T(n,"shape","raggedTensorToTensor","int32"),i=T(e,"values","raggedTensorToTensor"),o=T(t,"defaultValue","raggedTensorToTensor",i.dtype),u=r.map((p,g)=>T(p,`tensors${g}`,"raggedTensorToTensor","int32")),c={shape:a,values:i,defaultValue:o,rowPartitionTensors:u},f={rowPartitionTypes:s};return C.runKernel(bc,c,f)}const mp=O({raggedTensorToTensor_:dp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gp(n,e,t){pt(n);const r=We(n);let s=null;if(t==null||t==="float32")s=new Float32Array(r);else if(t==="int32")s=new Int32Array(r);else if(t==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${t}`);for(let a=0;a<r;a++)s[a]=e();return C.makeTensor(s,n,t)}const yp=O({rand_:gp});var Ba={},bp={get exports(){return Ba},set exports(n){Ba=n}};(function(n){(function(e,t,r){function s(u){var c=this,f=o();c.next=function(){var p=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=p-(c.c=p|0)},c.c=1,c.s0=f(" "),c.s1=f(" "),c.s2=f(" "),c.s0-=f(u),c.s0<0&&(c.s0+=1),c.s1-=f(u),c.s1<0&&(c.s1+=1),c.s2-=f(u),c.s2<0&&(c.s2+=1),f=null}function a(u,c){return c.c=u.c,c.s0=u.s0,c.s1=u.s1,c.s2=u.s2,c}function i(u,c){var f=new s(u),p=c&&c.state,g=f.next;return g.int32=function(){return f.next()*4294967296|0},g.double=function(){return g()+(g()*2097152|0)*11102230246251565e-32},g.quick=g,p&&(typeof p=="object"&&a(p,f),g.state=function(){return a(f,{})}),g}function o(){var u=4022871197,c=function(f){f=String(f);for(var p=0;p<f.length;p++){u+=f.charCodeAt(p);var g=.02519603282416938*u;u=g>>>0,g-=u,g*=u,u=g>>>0,g-=u,u+=g*4294967296}return(u>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.alea=i})(Mt,n,!1)})(bp);var ja={},wp={get exports(){return ja},set exports(n){ja=n}};(function(n){(function(e,t,r){function s(o){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},o===(o|0)?u.x=o:c+=o;for(var f=0;f<c.length+64;f++)u.x^=c.charCodeAt(f)|0,u.next()}function a(o,u){return u.x=o.x,u.y=o.y,u.z=o.z,u.w=o.w,u}function i(o,u){var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var g=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(g+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xor128=i})(Mt,n,!1)})(wp);var Ma={},vp={get exports(){return Ma},set exports(n){Ma=n}};(function(n){(function(e,t,r){function s(o){var u=this,c="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,o===(o|0)?u.x=o:c+=o;for(var f=0;f<c.length+64;f++)u.x^=c.charCodeAt(f)|0,f==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(o,u){return u.x=o.x,u.y=o.y,u.z=o.z,u.w=o.w,u.v=o.v,u.d=o.d,u}function i(o,u){var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var g=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(g+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xorwow=i})(Mt,n,!1)})(vp);var za={},Np={get exports(){return za},set exports(n){za=n}};(function(n){(function(e,t,r){function s(o){var u=this;u.next=function(){var f=u.x,p=u.i,g,v;return g=f[p],g^=g>>>7,v=g^g<<24,g=f[p+1&7],v^=g^g>>>10,g=f[p+3&7],v^=g^g>>>3,g=f[p+4&7],v^=g^g<<7,g=f[p+7&7],g=g^g<<13,v^=g^g<<9,f[p]=v,u.i=p+1&7,v};function c(f,p){var g,v=[];if(p===(p|0))v[0]=p;else for(p=""+p,g=0;g<p.length;++g)v[g&7]=v[g&7]<<15^p.charCodeAt(g)+v[g+1&7]<<13;for(;v.length<8;)v.push(0);for(g=0;g<8&&v[g]===0;++g);for(g==8?v[7]=-1:v[g],f.x=v,f.i=0,g=256;g>0;--g)f.next()}c(u,o)}function a(o,u){return u.x=o.x.slice(),u.i=o.i,u}function i(o,u){o==null&&(o=+new Date);var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var g=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(g+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(f.x&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xorshift7=i})(Mt,n,!1)})(Np);var Va={},Tp={get exports(){return Va},set exports(n){Va=n}};(function(n){(function(e,t,r){function s(o){var u=this;u.next=function(){var f=u.w,p=u.X,g=u.i,v,S;return u.w=f=f+1640531527|0,S=p[g+34&127],v=p[g=g+1&127],S^=S<<13,v^=v<<17,S^=S>>>15,v^=v>>>12,S=p[g]=S^v,u.i=g,S+(f^f>>>16)|0};function c(f,p){var g,v,S,k,E,F=[],j=128;for(p===(p|0)?(v=p,p=null):(p=p+"\0",v=0,j=Math.max(j,p.length)),S=0,k=-32;k<j;++k)p&&(v^=p.charCodeAt((k+32)%p.length)),k===0&&(E=v),v^=v<<10,v^=v>>>15,v^=v<<4,v^=v>>>13,k>=0&&(E=E+1640531527|0,g=F[k&127]^=v+E,S=g==0?S+1:0);for(S>=128&&(F[(p&&p.length||0)&127]=-1),S=127,k=4*128;k>0;--k)v=F[S+34&127],g=F[S=S+1&127],v^=v<<13,g^=g<<17,v^=v>>>15,g^=g>>>12,F[S]=v^g;f.w=E,f.X=F,f.i=S}c(u,o)}function a(o,u){return u.i=o.i,u.w=o.w,u.X=o.X.slice(),u}function i(o,u){o==null&&(o=+new Date);var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var g=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(g+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(f.X&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.xor4096=i})(Mt,n,!1)})(Tp);var Ua={},Sp={get exports(){return Ua},set exports(n){Ua=n}};(function(n){(function(e,t,r){function s(o){var u=this,c="";u.next=function(){var p=u.b,g=u.c,v=u.d,S=u.a;return p=p<<25^p>>>7^g,g=g-v|0,v=v<<24^v>>>8^S,S=S-p|0,u.b=p=p<<20^p>>>12^g,u.c=g=g-v|0,u.d=v<<16^g>>>16^S,u.a=S-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,o===Math.floor(o)?(u.a=o/4294967296|0,u.b=o|0):c+=o;for(var f=0;f<c.length+20;f++)u.b^=c.charCodeAt(f)|0,u.next()}function a(o,u){return u.a=o.a,u.b=o.b,u.c=o.c,u.d=o.d,u}function i(o,u){var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var g=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(g+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:r&&r.amd?r(function(){return i}):this.tychei=i})(Mt,n,!1)})(Sp);var Wa={},xp={get exports(){return Wa},set exports(n){Wa=n}};(function(n){(function(e,t,r){var s=256,a=6,i=52,o="random",u=r.pow(s,a),c=r.pow(2,i),f=c*2,p=s-1,g;function v(B,K,G){var Q=[];K=K==!0?{entropy:!0}:K||{};var re=F(E(K.entropy?[B,W(t)]:B??j(),3),Q),q=new S(Q),te=function(){for(var ue=q.g(a),Ne=u,ie=0;ue<c;)ue=(ue+ie)*s,Ne*=s,ie=q.g(1);for(;ue>=f;)ue/=2,Ne/=2,ie>>>=1;return(ue+ie)/Ne};return te.int32=function(){return q.g(4)|0},te.quick=function(){return q.g(4)/4294967296},te.double=te,F(W(q.S),t),(K.pass||G||function(ue,Ne,ie,ke){return ke&&(ke.S&&k(ke,q),ue.state=function(){return k(q,{})}),ie?(r[o]=ue,Ne):ue})(te,re,"global"in K?K.global:this==r,K.state)}function S(B){var K,G=B.length,Q=this,re=0,q=Q.i=Q.j=0,te=Q.S=[];for(G||(B=[G++]);re<s;)te[re]=re++;for(re=0;re<s;re++)te[re]=te[q=p&q+B[re%G]+(K=te[re])],te[q]=K;(Q.g=function(ue){for(var Ne,ie=0,ke=Q.i,Pe=Q.j,He=Q.S;ue--;)Ne=He[ke=p&ke+1],ie=ie*s+He[p&(He[ke]=He[Pe=p&Pe+Ne])+(He[Pe]=Ne)];return Q.i=ke,Q.j=Pe,ie})(s)}function k(B,K){return K.i=B.i,K.j=B.j,K.S=B.S.slice(),K}function E(B,K){var G=[],Q=typeof B,re;if(K&&Q=="object")for(re in B)try{G.push(E(B[re],K-1))}catch{}return G.length?G:Q=="string"?B:B+"\0"}function F(B,K){for(var G=B+"",Q,re=0;re<G.length;)K[p&re]=p&(Q^=K[p&re]*19)+G.charCodeAt(re++);return W(K)}function j(){try{var B;return g&&(B=g.randomBytes)?B=B(s):(B=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(B)),W(B)}catch{var K=e.navigator,G=K&&K.plugins;return[+new Date,e,G,e.screen,W(t)]}}function W(B){return String.fromCharCode.apply(0,B)}if(F(r.random(),t),n.exports){n.exports=v;try{g=Zu}catch{}}else r["seed"+o]=v})(typeof self<"u"?self:Mt,[],Math)})(xp);var Ep=Ba,kp=ja,_p=Ma,$p=za,Ip=Va,Ap=Ua,qn=Wa;qn.alea=Ep;qn.xor128=kp;qn.xorwow=_p;qn.xorshift7=$p;qn.xor4096=Ip;qn.tychei=Ap;var mi=qn;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gi{constructor(e,t,r,s,a){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=a||Math.random();this.random=mi.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,t,r=!1;for(;!r;){let s,a,i;do s=2*this.random()-1,a=2*this.random()-1,i=s*s+a*a;while(i>=1||i===0);const o=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*s*o,t=this.mean+this.stdDev*a*o,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class Op{constructor(e,t,r,s){this.alpha=e,this.beta=1/t,this.dtype=r;const a=s||Math.random();this.randu=mi.alea(a.toString()),this.randn=new gi(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,r,s,a,i;for(;;){do s=this.randn.nextValue(),i=1+this.c*s;while(i<=0);if(i*=i*i,e=s*s,t=1-.331*e*e,r=.5*e+this.d*(1-i+Math.log(i)),a=this.randu(),a<t||Math.log(a)<r)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class Dp{constructor(e=0,t=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=mi.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(n,e,t=1,r="float32",s){if(pt(n),t==null&&(t=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new Op(e,t,r,s),i=Zt(n,r);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const Cp=O({randomGamma_:Fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(n,e=0,t=1,r,s){if(pt(n),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new gi(e,t,r,!1,s),i=Zt(n,r);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const wu=O({randomNormal_:Rp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(n,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return wu(n,0,1,e,t)}const Pp=O({randomStandardNormal_:Lp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(n,e=0,t=1,r="float32",s){pt(n);const a=Zt(n,r),i=new Dp(e,t,null,s);for(let o=0;o<a.values.length;o++)a.values[o]=i.nextValue();return a.toTensor()}const yi=O({randomUniform_:Bp});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jp(n,e,t,r){return yi(n,e,t,"int32",r)}const Mp=O({randomUniformInt_:jp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gr(n,e,t=1,r="float32"){if(t===0)throw new Error("Cannot have a step of zero");const s={start:n,stop:e,step:t,dtype:r};return C.runKernel(wc,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zp(n){const t={input:T(n,"input","real")};return C.runKernel(vc,t)}const Hr=O({real_:zp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(n){const t={x:T(n,"x","reciprocal")};return C.runKernel(Nc,t)}const Up=O({reciprocal_:Vp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wp(n){const t={x:T(n,"x","relu")};return C.runKernel(Tc,t)}const qs=O({relu_:Wp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kp(n){const t={x:T(n,"x","relu6")};return C.runKernel(kc,t)}const vu=O({relu6_:Kp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(n,e){const r={x:T(n,"x","reverse")},s={dims:e};return C.runKernel(_c,r,s)}const Wn=O({reverse_:Gp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(n){const e=T(n,"x","reverse");return _(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Wn(e,0)}const qp=O({reverse1d_:Hp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(n,e){const t=T(n,"x","reverse");return _(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),Wn(t,e)}const Yp=O({reverse2d_:Xp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jp(n,e){const t=T(n,"x","reverse");return _(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),Wn(t,e)}const Zp=O({reverse3d_:Jp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qp(n,e){const t=T(n,"x","reverse");return _(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),Wn(t,e)}const e0=O({reverse4d_:Qp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t0(n){const t={x:T(n,"x","round")};return C.runKernel($c,t)}const Nu=O({round_:t0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n0(n){const t={x:T(n,"x","rsqrt","float32")};return C.runKernel(Ic,t)}const r0=O({rsqrt_:n0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(n){const t={x:T(n,"x","selu")};return C.runKernel(Cc,t)}const a0=O({selu_:s0});function i0(n,e,t,r,s,a=[1,1],i="NHWC"){const o=T(n,"x","separableConv2d"),u=T(e,"depthwiseFilter","separableConv2d"),c=T(t,"pointwiseFilter","separableConv2d");let f=o,p=!1;if(o.rank===3&&(p=!0,f=U(o,[1,o.shape[0],o.shape[1],o.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");_(f.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`),_(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),_(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),_(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),_(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const g=u.shape[2],v=u.shape[3];_(c.shape[2]===g*v,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${g*v}, but got ${c.shape[2]}.`);const S=fi(f,u,r,s,i,a),E=Us(S,c,1,"valid",i);return p?U(E,[E.shape[1],E.shape[2],E.shape[3]]):E}const o0=O({separableConv2d_:i0});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function u0(n,e){const t=T(n,"x","setdiff1d"),r=T(e,"y","setdiff1d");_(t.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${r.dtype}).`),_(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),_(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await t.data(),a=await r.data(),i=new Set(a);let o=0;for(let f=0;f<s.length;f++)i.has(s[f])||o++;const u=new Ea([o],t.dtype),c=new Ea([o],"int32");for(let f=0,p=0;f<s.length;f++)i.has(s[f])||(u.values[p]=s[f],c.values[p]=f,p++);return[u.toTensor(),c.toTensor()]}const c0=u0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l0(n){const t={x:T(n,"x","sign")};return C.runKernel(Bc,t)}const h0=O({sign_:l0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n){const t={x:T(n,"x","sin","float32")};return C.runKernel(Lc,t)}const p0=O({sin_:f0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(n){const t={x:T(n,"x","sinh")};return C.runKernel(Pc,t)}const m0=O({sinh_:d0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g0(n,e,t){const r=T(n,"x","slice1d");return _(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),fe(r,[e],[t])}const y0=O({slice1d_:g0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b0(n,e,t){const r=T(n,"x","slice2d");return _(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),fe(r,e,t)}const w0=O({slice2d_:b0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v0(n,e,t){const r=T(n,"x","slice3d");return _(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),fe(r,e,t)}const N0=O({slice3d_:v0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T0(n,e,t){const r=T(n,"x","slice4d");return _(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),fe(r,e,t)}const S0=O({slice4d_:T0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x0(n,e=-1){const t=T(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const r={logits:t},s={dim:e};return C.runKernel(Kc,r,s)}const E0=O({softmax_:x0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k0(n){_(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return C.runKernel(N2,e)}const bi=O({fft_:k0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _0(n){_(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return C.runKernel(O2,e)}const Ls=O({ifft_:_0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $0(n){const e=n.shape[n.shape.length-1],t=n.size/e;let r;if(e<=2){const s=U(n,[t,e]);r=Ls(s)}else{const s=[t,2*(e-1)],a=U(Hr(n),[t,e]),i=U(Hs(n),[t,e]),o=Wn(fe(a,[0,1],[t,e-2]),1),u=J(Wn(fe(i,[0,1],[t,e-2]),1),ve(-1)),c=Ke([a,o],1),f=Ke([i,u],1),p=U(bn(c,f),[s[0],s[1]]);r=Ls(p)}if(r=Hr(r),n.rank===3&&n.shape[0]!==0){const s=r,a=n.shape[0];r=U(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const Tu=O({irfft_:$0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I0(n,e,t=0){const s={x:T(n,"x","split")},a={numOrSizeSplits:e,axis:t};return C.runKernel(Wc,s,a)}const qr=O({split_:I0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A0(n,e){_(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const r=n.size/t;let s;if(e!=null&&e<t){const S=n.shape.map(E=>0),k=n.shape.map(E=>E);k[n.shape.length-1]=e,s=fe(n,S,k),t=e}else if(e!=null&&e>t){const S=n.shape.map(k=>k);S[n.shape.length-1]=e-t,s=Ke([n,fr(S)],n.shape.length-1),t=e}else s=n;const a=ft(s),i=U(bn(s,a),[r,t]),o=bi(i),u=Math.floor(t/2)+1,c=Hr(o),f=Hs(o),p=qr(c,[u,t-u],c.shape.length-1),g=qr(f,[u,t-u],f.shape.length-1),v=s.shape.slice();return v[s.shape.length-1]=u,U(bn(p[0],g[0]),v)}const wi=O({rfft_:A0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O0(n,e){let t=T(n,"a","squaredDifference"),r=T(e,"b","squaredDifference");[t,r]=Fe(t,r),Me(t.shape,r.shape);const s={a:t,b:r},a={};return C.runKernel(Jc,s,a)}const Su=O({squaredDifference_:O0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D0(n,e){const t=T(n,"x","squeeze","string_or_numeric");return U(t,h1(t.shape,e).newShape)}const je=O({squeeze_:D0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F0(n,e=0){const t=Is(n,"tensors","stack","string_or_numeric");_(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&_(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const r=t,s={axis:e};return C.runKernel(hc,r,s)}const nn=O({stack_:F0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C0(n,e=0){const r={x:T(n,"x","step")},s={alpha:e};return C.runKernel(fl,r,s)}const xu=O({step_:C0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R0(n,e,t,r,s=0,a=0,i=0,o=0,u=0){const f={x:T(n,"x","stridedSlice","string_or_numeric")},p={begin:e,end:t,strides:r,beginMask:s,endMask:a,ellipsisMask:i,newAxisMask:o,shrinkAxisMask:u};return C.runKernel(Qc,f,p)}const L0=O({stridedSlice_:R0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P0(n){const t={x:T(n,"x","tan","float32")};return C.runKernel(sl,t)}const B0=O({tan_:P0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Je(n,e){pr(n);const t=vn(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Nn(n,null,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(n,e,t){if(pr(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=vn(n,t);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Nn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eu(n,e,t){if(pr(n),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=vn(n,t);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Nn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j0(n,e,t){if(pr(n),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=vn(n,t);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Nn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M0(n,e,t){if(pr(n),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=vn(n,t);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Nn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(n,e,t){if(pr(n),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=vn(n,t);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Nn(n,e,r,t)}function V0(n,e,t){const r=e.rank>1?e.shape[e.rank-1]:1,s=e.rank>1?e.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${s}.`;if(t.rank<s)throw new Error(a+` update.rank < ${s}. `);if(n.length<r+(t.rank-s))throw new Error(a+` Output shape length < ${r+(t.rank-s)}`);if(t.rank!==s+n.length-r)throw new Error(a+` update.rank != ${s+n.length-r}`);for(let i=0;i<s;++i)if(t.shape[i]!==e.shape[i])throw new Error(a+` updates.shape[${i}] (${t.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<t.rank-s;++i)if(t.shape[i+s]!==n[i+r])throw new Error(a+` updates.shape[${i+s}] (${t.shape[i+s]}) != shape[${i+s}] (${n[i+s]})`)}function ku(n,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}V0(t,e,n)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(n,e,t){const r=T(n,"tensor","tensorScatterupdate"),s=T(e,"indices","tensorScatterupdate","int32"),a=T(t,"updates","tensorScatterupdate");if(ku(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const i={tensor:r,indices:s,updates:a},o={};return C.runKernel(Oc,i,o)}const W0=O({tensorScatterUpdate_:U0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K0(n,e=1,t=!0){const r=T(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${e}`);const a={x:r},i={k:e,sorted:t},[o,u]=C.runKernel(il,a,i);return{values:o,indices:u}}const G0=O({topk_:K0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H0(n,e=0,t=1,r,s){if(pt(n),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new gi(e,t,r,!0,s),i=Zt(n,r);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const q0=O({truncatedNormal_:H0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X0(n,e=0){const t=T(n,"x","unique","string_or_numeric");_(t.rank>0,()=>"The input tensor must be at least 1D");const r={x:t},s={axis:e},[a,i]=C.runKernel(ul,r,s);return{values:a,indices:i}}const Y0=O({unique_:X0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J0(n,e,t){const r=T(n,"x","unsortedSegmentSum"),s=T(e,"segmentIds","unsortedSegmentSum","int32");_(zr(t),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},i={numSegments:t};return C.runKernel(ll,a,i)}const Z0=O({unsortedSegmentSum_:J0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q0(n,e=0){const t=T(n,"x","unstack","string_or_numeric");_(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const r={value:t},s={axis:e};return C.runKernel(cl,r,s)}const Xn=O({unstack_:Q0});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(n,e){return di(n,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(n,e=!0,t,r){return C.makeVariable(n,e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(n,e){const t=[];for(let a=0;a<e.length;a++)e[a]&&t.push(a);const r=Zt(n,"int32"),s=Zt([t.length,n.length],"int32");for(let a=0;a<t.length;a++){const i=r.indexToLoc(t[a]),o=a*n.length;s.values.set(i,o)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function rd(n){const e=T(n,"condition","whereAsync","bool"),t=await e.data(),r=nd(e.shape,t);return n!==e&&e.dispose(),r}const _u=rd;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function sd(n,e,t){const r=T(n,"tensor","boolMask"),s=T(e,"mask","boolMask","bool"),a=t??0,i=s.rank,o=r.shape;_(i>0,()=>"mask cannot be scalar"),St(o.slice(a,a+i),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let k=a;k<a+i;k++)u*=o[k];const c=o.slice(0,a).concat([u],o.slice(a+i)),f=U(r,c),p=U(s,[-1]),g=await _u(p),v=je(g,[1]),S=iu(f,v,a);return n!==r&&r.dispose(),e!==s&&s.dispose(),v.dispose(),f.dispose(),p.dispose(),g.dispose(),S}const ad=sd;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(n,e,t){const r=T(n,"x","transpose");if(e==null&&(e=r.shape.map((i,o)=>o).reverse()),_(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(i=>{_(i>=0&&i<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:e};return r.dtype==="complex64"?me(()=>{let i=Hr(r),o=Hs(r);return i=C.runKernel(oa,{x:i},a),o=C.runKernel(oa,{x:o},a),t&&(o=Vt(o)),bn(i,o)}):C.runKernel(oa,s,a)}const Ka=O({transpose_:id});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(n,e,t,r,s=!0){const a=T(n,"v","movingAverage"),i=T(e,"x","movingAverage"),o=T(t,"decay","movingAverage");Al(a,i),_(Jt(a.shape,i.shape),()=>"Shape mismatch in v and x");const u=ve(1),c=pe(u,o);let f=J(pe(i,a),c);if(s){_(r!=null,()=>"When using zeroDebias: true, step is required.");const p=T(r,"step","movingAverage");f=ye(f,pe(u,Wr(o,p)))}return ae(a,f)}const ud=O({movingAverage_:od});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(n,e,t){pt(t);const r=T(n,"indices","scatterND","int32"),s=T(e,"updates","scatterND");ku(s,r,t);const a={indices:r,updates:s},i={shape:t};return C.runKernel(Ac,a,i)}const ld=O({scatterND_:cd});function hd(n,e,t,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const s=n.rank>0?n.shape[0]:1,a=n.rank>1?n.shape[1]:1;if(t.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${a}.`);const i=e.size;if(!(e.rank===0||e.rank===1&&i===s))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(n,e,t,r=0){pt(t);const s=T(n,"sparseIndices","sparseToDense","int32"),a=T(e,"sparseValues","sparseToDense","string_or_numeric"),i=T(r,"defaultValue","sparseToDense",a.dtype);hd(s,a,t,i);const o={sparseIndices:s,sparseValues:a,defaultValue:i},u={outputShape:t};return C.runKernel(Yc,o,u)}const pd=O({sparseToDense_:fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(n,e){const t=T(e,"indices","gatherND","int32"),s={params:T(n,"x","gatherND","string_or_numeric"),indices:t};return C.runKernel($2,s)}const md=O({gatherND_:dd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(n,e){if(e==null)return n.shape.slice();if(Jt(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let r=0;r<n.shape.length;r++)e[r]==null&&n.shape[r]!=null?t.push(n.shape[r]):t.push(e[r]);return t}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(n,e,t,r){const s=T(n,"x","dropout");if(_(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),_(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof Ae?s.clone():s;const a=gd(s,t),i=1-e,o=ye(au(ae(yi(a,0,1,"float32",r),i)),i);return J(s,o)}const bd=O({dropout_:yd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $u(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function vi(n,e,t){const r=1-n%2,s=new Float32Array(n);for(let a=0;a<n;++a){const i=2*Math.PI*a/(n+r-1);s[a]=e-t*Math.cos(i)}return Je(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function wd(n,e,t=1){const r=T(n,"predictions","inTopK"),s=T(e,"targets","inTopK");_(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),_(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),St(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];_(t>0&&t<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${t}`);const i=await r.data(),o=await s.data(),[u,c]=[i.length/a,a],f=f1("bool",u);for(let p=0;p<u;p++){const g=p*c,v=i.subarray(g,g+c),S=[];for(let k=0;k<v.length;k++)S.push({value:v[k],index:k});S.sort((k,E)=>E.value-k.value),f[p]=0;for(let k=0;k<t;k++)if(S[k].index===o[p]){f[p]=1;break}}return n!==r&&r.dispose(),e!==s&&s.dispose(),zt(f,s.shape,"bool")}const vd=wd;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(n,e,t,r,s,a="NHWC",i){let o=n;n.rank===3&&(o=U(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let u=e;u.rank===3&&(u=U(e,[1,e.shape[0],e.shape[1],e.shape[2]])),_(o.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${o.shape}.`),_(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),_(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const c=a==="NHWC"?o.shape[3]:o.shape[1],f=a==="NHWC"?u.shape[3]:u.shape[1];_(c===t[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${t[2]}.`),_(f===t[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${t[3]}).`),Dt("conv2dDerFilter",s,i);const p={x:o,dy:u},g={strides:r,pad:s,dataFormat:a,dimRoundingMode:i,filterShape:t};return C.runKernel(Y1,p,g)}const Td=O({conv2DBackpropFilter_:Nd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ni(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return J(n,xu(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Ti(n,e){let t=e;const r=uh(n.shape,e.shape);return r.length>0&&(t=$e(t,r)),U(t,n.shape)}function Si(n,e,t,r){if(e==="linear")return n;if(e==="relu")return qs(n);if(e==="elu")return nu(n);if(e==="relu6")return vu(n);if(e==="prelu")return bu(n,t);if(e==="leakyrelu")return uu(n,r);if(e==="sigmoid")return Mn(n);throw new Error(`Unknown fused activation ${e}.`)}const xi=(n,e)=>!(n>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sd({x:n,filter:e,strides:t,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:i,bias:o,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:f}){if(u=u||"linear",xi(C.state.gradientDepth,u)===!1){_(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let G=Us(n,e,t,r,s,a,i);return o!=null&&(G=ae(G,o)),Si(G,u,c,f)}const p=T(n,"x","conv2d","float32"),g=T(e,"filter","conv2d","float32");let v=p,S=!1;p.rank===3&&(S=!0,v=U(p,[1,p.shape[0],p.shape[1],p.shape[2]])),_(v.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${v.rank}.`),_(g.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${g.rank}.`),Dt("fused conv2d",r,i);const k=s==="NHWC"?v.shape[3]:v.shape[1];_(g.shape[2]===k,()=>`Error in conv2d: depth of input (${k}) must match input depth for filter ${g.shape[2]}.`),_(Tn(t,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`);const E=hi(v.shape,g.shape,t,a,r,i);let F;o!=null&&(F=T(o,"bias","fused conv2d"),[F]=Fe(F,p),s==="NHWC"?Me(E.outShape,F.shape):(_(F.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${F.shape.length}.`),_(F.shape.length===0||F.shape[0]===E.outChannels||F.shape[0]===1,()=>`Error in fused conv2d: bias shape (${F.shape}) is not compatible with the number of output channels (${E.outChannels})`)));let j;if(c!=null){const G=c.shape;if(_(G.length<=1||G.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${G.length}.`),G.length===1)_(G[0]===1||G[0]===E.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${G}) is not compatible with the number of output channels (${E.outChannels}).`);else if(G.length===3)try{Me(G,E.outShape)}catch{const re=`Error in fused conv2d: PReLU activation weights (${G}) is not compatible with the output shape of the conv2d (${E.outShape}).`;throw Error(re)}j=T(c,"prelu weights","fused conv2d")}const W=(G,Q)=>{_(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[re,q,te,ue]=Q,Ne=Ni(G,te,u);_(Ds(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const ie=eu(q.shape,Ne,re,t,r),ke=Td(q,Ne,re.shape,t,r),Pe=[ie,ke];if(ue!=null){const He=Ti(ue,Ne);Pe.push(He)}return Pe},B={x:v,filter:g,bias:F,preluActivationWeights:j},K={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i,activation:u,leakyreluAlpha:f};return o==null?tn((Q,re,q)=>{let te=C.runKernel(Fi,B,K);return q([re,Q,te]),S&&(te=U(te,[te.shape[1],te.shape[2],te.shape[3]])),{value:te,gradFunc:W}})(v,g):tn((Q,re,q,te)=>{let ue=C.runKernel(Fi,B,K);return te([re,Q,ue,q]),S&&(ue=U(ue,[ue.shape[1],ue.shape[2],ue.shape[3]])),{value:ue,gradFunc:W}})(v,g,F)}const xd=O({fusedConv2d_:Sd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(n,e,t,r,s,a=[1,1],i){let o=n;n.rank===3&&(o=U(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let u=e;u.rank===3&&(u=U(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={x:o,dy:u},f={strides:r,pad:s,dimRoundingMode:i,dilations:a,filterShape:t};return C.runKernel(u2,c,f)}const kd=O({depthwiseConv2dNativeBackpropFilter_:Ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _d(n,e,t,r,s,a=[1,1],i){let o=e,u=!1;e.rank===3&&(u=!0,o=U(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={dy:o,filter:t},f={strides:r,pad:s,dimRoundingMode:i,dilations:a,inputShape:n},p=C.runKernel(c2,c,f);return u?U(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const $d=O({depthwiseConv2dNativeBackpropInput_:_d});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id({x:n,filter:e,strides:t,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:i,bias:o,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:f}){if(xi(C.state.gradientDepth,u)===!1){let K=fi(n,e,t,r,s,a,i);return o!=null&&(K=ae(K,o)),Si(K,u,c,f)}const p=T(n,"x","depthwiseConv2d","float32"),g=T(e,"filter","depthwiseConv2d","float32");let v=p,S=!1;p.rank===3&&(S=!0,v=U(p,[1,p.shape[0],p.shape[1],p.shape[2]])),_(v.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${v.rank}.`),_(g.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${g.rank}.`),_(v.shape[3]===g.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${v.shape[3]}) must match the inChannels dimension in filter ${g.shape[2]}.`),a==null&&(a=[1,1]),_(Tn(t,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),Dt("fused depthwiseConv2d",r,i);const k=hi(v.shape,g.shape,t,a,r,i,!0);let E;o!=null&&(E=T(o,"bias","fused conv2d"),[E]=Fe(E,p),Me(k.outShape,E.shape));let F;c!=null&&(F=T(c,"prelu weights","fused depthwiseConv2d"));const j=(K,G)=>{_(Ds(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[Q,re,q,te]=G,ue=Ni(K,q,u),Ne=$d(re.shape,ue,Q,t,r,a,i),ie=kd(re,ue,Q.shape,t,r,a,i);if(te!=null){const ke=Ti(E,ue);return[Ne,ie,ke]}return[Ne,ie]},W={x:v,filter:g,bias:E,preluActivationWeights:F},B={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i,activation:u,leakyreluAlpha:f};return o==null?tn((G,Q,re)=>{let q=C.runKernel(Ci,W,B);return re([Q,G,q]),S&&(q=U(q,[q.shape[1],q.shape[2],q.shape[3]])),{value:q,gradFunc:j}})(v,g):tn((G,Q,re,q)=>{let te=C.runKernel(Ci,W,B);return q([Q,G,te,re]),S&&(te=U(te,[te.shape[1],te.shape[2],te.shape[3]])),{value:te,gradFunc:j}})(v,g,E)}const Ad=O({fusedDepthwiseConv2d_:Id});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Od({a:n,b:e,transposeA:t=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:i,leakyreluAlpha:o=.2}){if(xi(C.state.gradientDepth,a)===!1){let ue=Se(n,e,t,r);return s!=null&&(ue=ae(ue,s)),Si(ue,a,i,o)}let u=T(n,"a","fused matMul"),c=T(e,"b","fused matMul");[u,c]=Fe(u,c);const f=t?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?c.shape[c.rank-1]:c.shape[c.rank-2],g=t?u.shape[u.rank-1]:u.shape[u.rank-2],v=r?c.shape[c.rank-2]:c.shape[c.rank-1],S=u.shape.slice(0,-2),k=c.shape.slice(0,-2),E=We(S),F=We(k);_(f===p,()=>`Error in fused matMul: inner shapes (${f}) and (${p}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${t} and transposeB=${r} must match.`);const W=Me(u.shape.slice(0,-2),c.shape.slice(0,-2)).concat([g,v]),B=t?U(u,[E,f,g]):U(u,[E,g,f]),K=r?U(c,[F,v,p]):U(c,[F,p,v]);let G;s!=null&&(G=T(s,"bias","fused matMul"),[G]=Fe(G,u),Me(W,G.shape));let Q;i!=null&&(Q=T(i,"prelu weights","fused matMul"));const re=(ue,Ne)=>{const[ie,ke,Pe,He]=Ne,ze=Ni(U(ue,Pe.shape),Pe,a);let xt,dt;if(!t&&!r?(xt=Se(ze,ke,!1,!0),dt=Se(ie,ze,!0,!1)):!t&&r?(xt=Se(ze,ke,!1,!1),dt=Se(ze,ie,!0,!1)):t&&!r?(xt=Se(ke,ze,!1,!0),dt=Se(ie,ze,!1,!1)):(xt=Se(ke,ze,!0,!0),dt=Se(ze,ie,!0,!0)),s!=null){const Sn=Ti(He,ze);return[xt,dt,Sn]}else return[xt,dt]},q={a:B,b:K,bias:G,preluActivationWeights:Q},te={transposeA:t,transposeB:r,activation:a,leakyreluAlpha:o};return s==null?tn((Ne,ie,ke)=>{const Pe=C.runKernel(Di,q,te);return ke([Ne,ie,Pe]),{value:U(Pe,W),gradFunc:re}})(B,K):tn((Ne,ie,ke,Pe)=>{const He=C.runKernel(Di,q,te);return Pe([Ne,ie,He,ke]),{value:U(He,W),gradFunc:re}})(B,K,G)}const Dd=O({fusedMatMul_:Od});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fd=Object.freeze(Object.defineProperty({__proto__:null,conv2d:xd,depthwiseConv2d:Ad,matMul:Dd},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(n){return vi(n,.54,.46)}const Rd=O({hammingWindow_:Cd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(n){return vi(n,.5,.5)}const Iu=O({hannWindow_:Ld});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(n,e,t,r=!1,s=0){let a=0;const i=[];for(;a+e<=n.size;)i.push(fe(n,a,e)),a+=t;if(r)for(;a<n.size;){const o=a+e-n.size,u=Ke([fe(n,a,e-o),Yr([o],s)]);i.push(u),a+=t}return i.length===0?yn([],[0,e]):U(Ke(i),[i.length,e])}const Au=O({frame_:Pd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bd(n,e,t,r,s=Iu){r==null&&(r=$u(e));const a=Au(n,e,t),i=J(a,s(e));return wi(i,r)}const jd=O({stft_:Bd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Md(n,e,t,r,s="bilinear",a=0){const i=T(n,"image","cropAndResize"),o=T(e,"boxes","cropAndResize","float32"),u=T(t,"boxInd","cropAndResize","int32"),c=o.shape[0];_(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),_(o.rank===2&&o.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${o.shape}.`),_(u.rank===1&&u.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${o.shape}.`),_(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),_(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),_(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const f={image:i,boxes:o,boxInd:u},p={method:s,extrapolationValue:a,cropSize:r};return C.runKernel(s2,f,p)}const zd=O({cropAndResize_:Md});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vd(n){const e=T(n,"image","flipLeftRight","float32");_(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return C.runKernel(S2,t,{})}const Ud=O({flipLeftRight_:Vd});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wd(n){const e=T(n,"image","grayscaleToRGB"),t=e.rank-1,r=e.shape[t];_(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),_(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,t),s[t]=3,Mr(e,s)}const Kd=O({grayscaleToRGB_:Wd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(n,e,t=0,r=.5){const s=T(n,"image","rotateWithOffset","float32");_(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},i={radians:e,fillValue:t,center:r};return C.runKernel(pl,a,i)}const Hd=O({rotateWithOffset_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dr(n,e,t,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const i=n.shape[0];return t=Math.min(t,i),_(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),_(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),_(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),_(e.rank===1,()=>"scores must be a 1D tensor"),_(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),_(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:t,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY){const a=T(n,"boxes","nonMaxSuppression","float32"),i=T(e,"scores","nonMaxSuppression","float32"),o=dr(a,i,t,r,s);t=o.maxOutputSize,r=o.iouThreshold,s=o.scoreThreshold;const u={maxOutputSize:t,iouThreshold:r,scoreThreshold:s};return C.runKernel(ic,{boxes:a,scores:i},u)}const Xd=O({nonMaxSuppression_:qd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yd(n,e,t){const r=Jd(n,e,t),s=r<0?-(r+1):r;n.splice(s,0,e)}function Jd(n,e,t){return Qd(n,e,t||Zd)}function Zd(n,e){return n>e?1:n<e?-1:0}function Qd(n,e,t){let r=0,s=n.length,a=0,i=!1;for(;r<s;){a=r+(s-r>>>1);const o=t(e,n[a]);o>0?r=a+1:(s=a,i=!o)}return i?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(n,e,t,r,s){return Ei(n,e,t,r,s,0)}function tm(n,e,t,r,s,a){return Ei(n,e,t,r,s,0,!1,a,!0)}function nm(n,e,t,r,s,a){return Ei(n,e,t,r,s,a,!0)}function Ei(n,e,t,r,s,a,i=!1,o=!1,u=!1){const c=[];for(let E=0;E<e.length;E++)e[E]>s&&c.push({score:e[E],boxIndex:E,suppressBeginIndex:0});c.sort(Wi);const f=a>0?-.5/a:0,p=[],g=[];for(;p.length<t&&c.length>0;){const E=c.pop(),{score:F,boxIndex:j,suppressBeginIndex:W}=E;if(F<s)break;let B=!1;for(let K=p.length-1;K>=W;--K){const G=rm(n,j,p[K]);if(G>=r){B=!0;break}if(E.score=E.score*sm(r,f,G),E.score<=s)break}E.suppressBeginIndex=p.length,B||(E.score===F?(p.push(j),g.push(E.score)):E.score>s&&Yd(c,E,Wi))}const v=p.length,S=t-v;o&&S>0&&(p.push(...new Array(S).fill(0)),g.push(...new Array(S).fill(0)));const k={selectedIndices:p};return i&&(k.selectedScores=g),u&&(k.validOutputs=v),k}function rm(n,e,t){const r=n.subarray(e*4,e*4+4),s=n.subarray(t*4,t*4+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),o=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(s[0],s[2]),f=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),g=Math.max(s[1],s[3]),v=(o-a)*(u-i),S=(p-c)*(g-f);if(v<=0||S<=0)return 0;const k=Math.max(a,c),E=Math.max(i,f),F=Math.min(o,p),j=Math.min(u,g),W=Math.max(F-k,0)*Math.max(j-E,0);return W/(v+S-W)}function sm(n,e,t){const r=Math.exp(e*t*t);return t<=n?r:0}function Wi(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function am(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY){const a=T(n,"boxes","nonMaxSuppressionAsync"),i=T(e,"scores","nonMaxSuppressionAsync"),o=dr(a,i,t,r,s);t=o.maxOutputSize,r=o.iouThreshold,s=o.scoreThreshold;const u=await Promise.all([a.data(),i.data()]),c=u[0],f=u[1],{selectedIndices:p}=em(c,f,t,r,s);return a!==n&&a.dispose(),i!==e&&i.dispose(),Je(p,"int32")}const im=am;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const i=T(n,"boxes","nonMaxSuppression"),o=T(e,"scores","nonMaxSuppression"),u=dr(i,o,t,r,s,a);t=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c={boxes:i,scores:o},f={maxOutputSize:t,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},p=C.runKernel(uc,c,f);return{selectedIndices:p[0],selectedScores:p[1]}}const um=O({nonMaxSuppressionWithScore_:om});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function cm(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const i=T(n,"boxes","nonMaxSuppressionAsync"),o=T(e,"scores","nonMaxSuppressionAsync"),u=dr(i,o,t,r,s,a);t=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c=await Promise.all([i.data(),o.data()]),f=c[0],p=c[1],{selectedIndices:g,selectedScores:v}=nm(f,p,t,r,s,a);return i!==n&&i.dispose(),o!==e&&o.dispose(),{selectedIndices:Je(g,"int32"),selectedScores:Je(v)}}const lm=cm;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const i=T(n,"boxes","nonMaxSuppression"),o=T(e,"scores","nonMaxSuppression"),u=dr(i,o,t,r,s,null),c=u.maxOutputSize,f=u.iouThreshold,p=u.scoreThreshold,g={boxes:i,scores:o},v={maxOutputSize:c,iouThreshold:f,scoreThreshold:p,padToMaxOutputSize:a},S=C.runKernel(oc,g,v);return{selectedIndices:S[0],validOutputs:S[1]}}const fm=O({nonMaxSuppressionPadded_:hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function pm(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const i=T(n,"boxes","nonMaxSuppressionAsync"),o=T(e,"scores","nonMaxSuppressionAsync"),u=dr(i,o,t,r,s,null),c=u.maxOutputSize,f=u.iouThreshold,p=u.scoreThreshold,[g,v]=await Promise.all([i.data(),o.data()]),{selectedIndices:S,validOutputs:k}=tm(g,v,c,f,p,a);return i!==n&&i.dispose(),o!==e&&o.dispose(),{selectedIndices:Je(S,"int32"),validOutputs:ve(k,"int32")}}const dm=pm;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mm(n,e,t=!1,r=!1){const s=T(n,"images","resizeBilinear");_(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),_(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),_(r===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,i=!1;s.rank===3&&(i=!0,a=U(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const o={images:a},u={alignCorners:t,halfPixelCenters:r,size:e},c=C.runKernel(Ec,o,u);return i?U(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const gm=O({resizeBilinear_:mm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(n,e,t=!1,r=!1){const s=T(n,"images","resizeNearestNeighbor");_(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),_(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),_(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),_(r===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,i=!1;s.rank===3&&(i=!0,a=U(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const o={images:a},u={alignCorners:t,halfPixelCenters:r,size:e},c=C.runKernel(xc,o,u);return i?U(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const bm=O({resizeNearestNeighbor_:ym});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(n,e="binary",t=!1,r=.5){const s=T(n,"image","threshold"),a=.2989,i=.587,o=.114,u=s.shape[0]*s.shape[1];let c=J(Je([r]),255),f,p,g,v;if(_(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),_(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),_(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),_(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[f,p,g]=qr(s,[1,1,1],-1);const E=J(f,a),F=J(p,i),j=J(g,o);v=ae(ae(E,F),j)}else v=n;if(e==="otsu"){const E=Zo(De(Nu(v),"int32"),zt([]),256);c=vm(E,u)}const S=t?pi(v,c):Gs(v,c);return De(J(S,255),"int32")}function vm(n,e){let t=Je([-1]),r=Je([0]),s=Je([0]),a,i,o,u,c,f;for(let p=0;p<n.size-1;p++){a=fe(n,0,p+1),i=fe(n,p+1),c=ye($e(a),e),f=ye($e(i),e);const g=$e(J(a,Gr(0,a.size)));o=ye(g,$e(a));const v=Yr(i.shape,a.size),S=ae(Gr(0,i.size),v),k=J(i,S);u=ye($e(k),$e(i));const E=pe(o,u),F=pe(o,u),j=J(c,f);s=J(J(j,E),F);const W=Gs(s,r);r=gn(W,s,r),t=gn(W,Je([p]),t)}return t}const Nm=O({threshold_:wm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tm(n,e,t="nearest",r="constant",s=0,a){const i=T(n,"image","transform","float32"),o=T(e,"transforms","transform","float32");_(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),_(o.rank===2&&(o.shape[0]===i.shape[0]||o.shape[0]===1)&&o.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),_(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const u={image:i,transforms:o},c={interpolation:t,fillMode:r,fillValue:s,outputShape:a};return C.runKernel(ol,u,c)}const Sm=O({transform_:Tm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(n,e,t){const r=T(n,"a","bandPart");_(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,i]=r.shape.slice(-2);let o,u;typeof e=="number"?(_(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),_(e<=a,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`),o=T(e<0?a:e,"numLower","bandPart")):(_(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),o=gn(Pa(e,0),a,Rs(e,a))),typeof t=="number"?(_(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),_(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),u=T(t<0?i:t,"numUpper","bandPart")):(_(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),u=gn(Pa(t,0),i,Rs(t,i)));const c=U(Gr(0,a,1,"int32"),[-1,1]),f=Gr(0,i,1,"int32"),p=pe(c,f),g=Fs(pi(p,o),ou(p,Vt(u))),v=fr([a,i],r.dtype);return U(nn(Xn(U(r,[-1,a,i])).map(S=>gn(g,S,v))),s)}const Em=O({bandPart_:xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(n){let e;if(Array.isArray(n)){e=!1,_(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=n[0].shape[0];for(let a=1;a<n.length;++a)_(n[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[a].shape[0]} vs. ${s})`)}else e=!0,n=qr(n,n.shape[0],0).map(s=>je(s,[0]));_(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],r=n;for(let s=0;s<n.length;++s)t.push(C.tidy(()=>{let a=r[s];if(s>0)for(let i=0;i<s;++i){const o=J($e(J(t[i],a)),t[i]);a=pe(a,o)}return ye(a,Ks(a,"euclidean"))}));return e?nn(t,0):t}const _m=O({gramSchmidt_:km});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(n,e=!1){if(_(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Ki(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((u,c)=>u*c),r=Xn(U(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),s=[],a=[];r.forEach(u=>{const[c,f]=Ki(u,e);s.push(c),a.push(f)});const i=U(nn(s,0),n.shape),o=U(nn(a,0),n.shape);return[i,o]}}function Ki(n,e=!1){return C.tidy(()=>{_(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],r=n.shape[1];let s=su(t),a=mn(n);const i=yn([[1]],[1,1]);let o=mn(i);const u=t>=r?r:t;for(let c=0;c<u;++c){const f=a,p=o,g=s;[o,a,s]=C.tidy(()=>{const v=fe(a,[c,c],[t-c,1]),S=Ks(v),k=fe(a,[c,c],[1,1]),E=gn(Gs(k,0),yn([[-1]]),yn([[1]])),F=pe(k,J(E,S)),j=ye(v,F);j.shape[0]===1?o=mn(i):o=Ke([i,fe(j,[1,0],[j.shape[0]-1,j.shape[1]])],0);const W=Vt(ye(Se(E,F),S)),B=fe(a,[c,0],[t-c,r]),K=J(W,o),G=Ka(o);if(c===0)a=pe(B,Se(K,Se(G,B)));else{const q=pe(B,Se(K,Se(G,B)));a=Ke([fe(a,[0,0],[c,r]),q],0)}const Q=Ka(K),re=fe(s,[0,c],[t,s.shape[1]-c]);if(c===0)s=pe(re,Se(Se(re,o),Q));else{const q=pe(re,Se(Se(re,o),Q));s=Ke([fe(s,[0,0],[t,c]),q],1)}return[o,a,s]}),Oe([f,p,g])}return!e&&t>r&&(s=fe(s,[0,0],[t,r]),a=fe(a,[0,0],[r,r])),[s,a]})}const Im=O({qr_:$m});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var et;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(et||(et={}));function Am(n,e,t=et.SUM_BY_NONZERO_WEIGHTS){const r=T(n,"losses","computeWeightedLoss");let s=null;e!=null&&(s=T(e,"weights","computeWeightedLoss"));const a=s==null?r:J(r,s);if(t===et.NONE)return a;if(t===et.SUM)return $e(a);if(t===et.MEAN){if(s==null)return Cs(a);{const i=r.size/s.size,o=ye($e(a),$e(s));return i>1?ye(o,ve(i)):o}}if(t===et.SUM_BY_NONZERO_WEIGHTS){if(s==null)return ye($e(a),ve(r.size));{const i=J(s,jn(r.shape)),o=De($e(gu(i,ve(0))),"float32");return ye($e(a),o)}}throw Error(`Unknown reduction: ${t}`)}const an=O({computeWeightedLoss_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(n,e,t,r=et.SUM_BY_NONZERO_WEIGHTS){const s=T(n,"labels","absoluteDifference"),a=T(e,"predictions","absoluteDifference");let i=null;t!=null&&(i=T(t,"weights","absoluteDifference")),St(s.shape,a.shape,"Error in absoluteDifference: ");const o=ht(pe(s,a));return an(o,i,r)}const Dm=O({absoluteDifference_:Om});function Fm(n,e,t,r,s=et.SUM_BY_NONZERO_WEIGHTS){const a=T(n,"labels","cosineDistance"),i=T(e,"predictions","cosineDistance");let o=null;r!=null&&(o=T(r,"weights","cosineDistance")),St(a.shape,i.shape,"Error in cosineDistance: ");const u=ve(1),c=pe(u,$e(J(a,i),t,!0));return an(c,o,s)}const Cm=O({cosineDistance_:Fm});function Rm(n,e,t,r=et.SUM_BY_NONZERO_WEIGHTS){let s=T(n,"labels","hingeLoss");const a=T(e,"predictions","hingeLoss");let i=null;t!=null&&(i=T(t,"weights","hingeLoss")),St(s.shape,a.shape,"Error in hingeLoss: ");const o=ve(1);s=pe(J(ve(2),s),o);const u=qs(pe(o,J(s,a)));return an(u,i,r)}const Lm=O({hingeLoss_:Rm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(n,e,t,r=1,s=et.SUM_BY_NONZERO_WEIGHTS){const a=T(n,"labels","huberLoss"),i=T(e,"predictions","huberLoss");let o=null;t!=null&&(o=T(t,"weights","huberLoss")),St(a.shape,i.shape,"Error in huberLoss: ");const u=ve(r),c=ht(pe(i,a)),f=Rs(c,u),p=pe(c,f),g=ae(J(ve(.5),It(f)),J(u,p));return an(g,o,s)}const Bm=O({huberLoss_:Pm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jm(n,e,t,r=1e-7,s=et.SUM_BY_NONZERO_WEIGHTS){const a=T(n,"labels","logLoss"),i=T(e,"predictions","logLoss");let o=null;t!=null&&(o=T(t,"weights","logLoss")),St(a.shape,i.shape,"Error in logLoss: ");const u=ve(1),c=ve(r),f=Vt(J(a,Kr(ae(i,c)))),p=J(pe(u,a),Kr(ae(pe(u,i),c))),g=pe(f,p);return an(g,o,s)}const Mm=O({logLoss_:jm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(n,e,t,r=et.SUM_BY_NONZERO_WEIGHTS){const s=T(n,"labels","meanSquaredError"),a=T(e,"predictions","meanSquaredError");let i=null;t!=null&&(i=T(t,"weights","meanSquaredError")),St(s.shape,a.shape,"Error in meanSquaredError: ");const o=Su(s,a);return an(o,i,r)}const Vm=O({meanSquaredError_:zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Um(n,e){const t=T(n,"labels","sigmoidCrossEntropyWithLogits"),r=T(e,"logits","sigmoidCrossEntropyWithLogits");St(t.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=qs(r),a=J(r,t),i=cu(en(Vt(ht(r))));return ae(pe(s,a),i)}function Wm(n,e,t,r=0,s=et.SUM_BY_NONZERO_WEIGHTS){let a=T(n,"multiClassLabels","sigmoidCrossEntropy");const i=T(e,"logits","sigmoidCrossEntropy");let o=null;if(t!=null&&(o=T(t,"weights","sigmoidCrossEntropy")),St(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){const c=ve(r),f=ve(1),p=ve(.5);a=ae(J(a,pe(f,c)),J(p,c))}const u=Um(a,i);return an(u,o,s)}const Km=O({sigmoidCrossEntropy_:Wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gm(n,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return tn((s,a,i)=>{const u=hu(a,[t],!0),c=pe(De(a,"float32"),u);i([s,c]);const f=Vt(J(c,s));return{value:$e(f,[t]),gradFunc:(v,S)=>{const[k,E]=S,F=Ws(v.shape,[t]);return[J(U(v,F),pe(De(k,"float32"),en(E))),J(U(v,F),pe(en(E),De(k,"float32")))]}}})(n,e)}function Hm(n,e,t,r=0,s=et.SUM_BY_NONZERO_WEIGHTS){let a=T(n,"onehotLabels","softmaxCrossEntropy");const i=T(e,"logits","softmaxCrossEntropy");let o=null;if(t!=null&&(o=T(t,"weights","softmaxCrossEntropy")),St(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){const c=ve(r),f=ve(1),p=ve(a.shape[1]);a=ae(J(a,pe(f,c)),ye(c,p))}const u=Gm(a,i);return an(u,o,s)}const qm=O({softmaxCrossEntropy_:Hm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xm(n,e,t,r){const s=T(n,"indices","sparseFillEmptyRows","int32"),a=T(e,"values","sparseFillEmptyRows"),i=T(t,"denseShape","sparseFillEmptyRows","int32"),o=T(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(o.rank!==0)throw new Error(`Default value should be a scalar but received shape ${o.shape}`);const u={indices:s,values:a,denseShape:i,defaultValue:o},c=C.runKernel(Gc,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const Ym=O({sparseFillEmptyRows_:Xm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(n,e,t){const r=T(n,"inputIndices","sparseReshape","int32"),s=T(e,"inputShape","sparseReshape","int32"),a=T(t,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const i={inputIndices:r,inputShape:s,newShape:a},o=C.runKernel(Hc,i);return{outputIndices:o[0],outputShape:o[1]}}const Zm=O({sparseReshape_:Jm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(n,e,t){const r=T(n,"data","sparseSegmentMean"),s=T(e,"indices","sparseSegmentMean","int32"),a=T(t,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const i={data:r,indices:s,segmentIds:a};return C.runKernel(qc,i)}const eg=O({sparseSegmentMean_:Qm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(n,e,t){const r=T(n,"data","sparseSegmentSum"),s=T(e,"indices","sparseSegmentSum","int32"),a=T(t,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const i={data:r,indices:s,segmentIds:a};return C.runKernel(Xc,i)}const ng=O({sparseSegmentSum_:tg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(n,e,t,r,s,a,i,o){const u=T(n,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const c=T(e,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const f={separator:t,nGramWidths:r,leftPad:s,rightPad:a,padWidth:i,preserveShortSequences:o},p={data:u,dataSplits:c},g=C.runKernel(el,p,f);return{nGrams:g[0],nGramsSplits:g[1]}}const sg=O({stringNGrams_:rg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(n,e,t=!0){const r=T(n,"input","stringSplit","string"),s=T(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:t},i={input:r,delimiter:s},o=C.runKernel(tl,i,a);return{indices:o[0],values:o[1],shape:o[2]}}const ig=O({stringSplit_:ag});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(n,e){const t=T(n,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const s={input:t};return C.runKernel(nl,s,r)}const ug=O({stringToHashBucketFast_:og});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(n,e,t,r=!0){const s=T(n,"input","staticRegexReplace","string"),a={pattern:e,rewrite:t,replaceGlobal:r};return C.runKernel(Zc,{x:s},a)}const lg=O({staticRegexReplace_:cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hg={fft:bi,ifft:Ls,rfft:wi,irfft:Tu},fg={hammingWindow:Rd,hannWindow:Iu,frame:Au,stft:jd},mr={flipLeftRight:Ud,grayscaleToRGB:Kd,resizeNearestNeighbor:bm,resizeBilinear:gm,rotateWithOffset:Hd,cropAndResize:zd,nonMaxSuppression:Xd,nonMaxSuppressionAsync:im,nonMaxSuppressionWithScore:um,nonMaxSuppressionWithScoreAsync:lm,nonMaxSuppressionPadded:fm,nonMaxSuppressionPaddedAsync:dm,threshold:Nm,transform:Sm},pg={bandPart:Em,gramSchmidt:_m,qr:Im},dg={absoluteDifference:Dm,computeWeightedLoss:an,cosineDistance:Cm,hingeLoss:Lm,huberLoss:Bm,logLoss:Mm,meanSquaredError:Vm,sigmoidCrossEntropy:Km,softmaxCrossEntropy:qm},mg={sparseFillEmptyRows:Ym,sparseReshape:Zm,sparseSegmentMean:eg,sparseSegmentSum:ng},gg={stringNGrams:sg,stringSplit:ig,stringToHashBucketFast:ug,staticRegexReplace:lg};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yg=new Map,bg=new Map;class wg{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class Ln{constructor(){this.classNameMap={}}static getMap(){return Ln.instance==null&&(Ln.instance=new Ln),Ln.instance}static register(e){Ln.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function vg(n,e,t){_(n.className!=null,()=>"Class being registered does not have the static className property defined."),_(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),_(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=n.className);const r=t,s=e+">"+r;return Ln.register(n),yg.set(s,n),bg.set(n,s),n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yn extends wg{minimize(e,t=!1,r){const{value:s,grads:a}=this.computeGradients(e,r);if(r!=null){const i=r.map(o=>({name:o.name,tensor:a[o.name]}));this.applyGradients(i)}else this.applyGradients(a);return Oe(a),t?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return sf(e,t)}dispose(){this.iterations_!=null&&Oe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ve(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Yn,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ng extends Yn{static get className(){return"Adadelta"}constructor(e,t,r=null){super(),this.learningRate=e,this.rho=t,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r],i=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:me(()=>ft(a).variable(i))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:me(()=>ft(a).variable(i))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const u=this.accumulatedGrads[s].variable,c=this.accumulatedUpdates[s].variable;me(()=>{const f=ae(J(u,this.rho),J(It(o),1-this.rho)),p=J(ye(Qt(ae(c,this.epsilon)),Qt(ae(u,this.epsilon))),o),g=ae(J(c,this.rho),J(It(p),1-this.rho));u.assign(f),c.assign(g);const v=ae(J(p,-this.learningRate),a);a.assign(v)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Oe(this.accumulatedGrads.map(e=>e.variable)),Oe(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,t).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(t,t*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tg extends Yn{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:me(()=>Yr(a.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const o=this.accumulatedGrads[s].variable;me(()=>{const u=ae(o,It(i));o.assign(u);const c=ae(J(ye(i,Qt(ae(u,C.backend.epsilon()))),-this.learningRate),a);a.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Oe(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sg extends Yn{static get className(){return"Adam"}constructor(e,t,r,s=null){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],me(()=>{this.accBeta1=ve(t).variable(),this.accBeta2=ve(r).variable()}),s==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);me(()=>{const r=pe(1,this.accBeta1),s=pe(1,this.accBeta2);t.forEach((a,i)=>{const o=C.registeredVariables[a],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${a}/m`,variable:me(()=>ft(o).variable(u))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${a}/v`,variable:me(()=>ft(o).variable(u))});const c=Array.isArray(e)?e[i].tensor:e[a];if(c==null)return;const f=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,g=ae(J(f,this.beta1),J(c,1-this.beta1)),v=ae(J(p,this.beta2),J(It(c),1-this.beta2)),S=ye(g,r),k=ye(v,s);f.assign(g),p.assign(v);const E=ae(J(ye(S,ae(Qt(k),this.epsilon)),-this.learningRate),o);o.assign(E)}),this.accBeta1.assign(J(this.accBeta1,this.beta1)),this.accBeta2.assign(J(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Oe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Oe(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),me(()=>{this.accBeta1.assign(Wr(this.beta1,this.iterations_+1)),this.accBeta2.assign(Wr(this.beta2,this.iterations_+1))});const t=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,t).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xg extends Yn{static get className(){return"Adamax"}constructor(e,t,r,s=null,a=0){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=s,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],me(()=>{this.iteration=ve(0).variable(),this.accBeta1=ve(t).variable()}),s==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);me(()=>{const r=pe(1,this.accBeta1),s=ye(-this.learningRate,ae(J(this.iteration,this.decay),1));t.forEach((a,i)=>{const o=C.registeredVariables[a],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${a}/m`,variable:ft(o).variable(u)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${a}/v`,variable:ft(o).variable(u)});const c=Array.isArray(e)?e[i].tensor:e[a];if(c==null)return;const f=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,g=ae(J(f,this.beta1),J(c,1-this.beta1)),v=J(p,this.beta2),S=ht(c),k=mu(v,S);f.assign(g),p.assign(k);const E=ae(J(ye(s,r),ye(g,ae(k,this.epsilon))),o);o.assign(E)}),this.iteration.assign(ae(this.iteration,1)),this.accBeta1.assign(J(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Oe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Oe(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ou extends Yn{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const i=C.registeredVariables[r];me(()=>{const o=ae(J(this.c,a),i);i.assign(o)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=jt(ve(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Eg extends Ou{static get className(){return"Momentum"}constructor(e,t,r=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=r,this.accumulations=[],this.m=ve(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:me(()=>ft(a).variable(!1))});const i=this.accumulations[s].variable,o=Array.isArray(e)?e[s].tensor:e[r];o!=null&&me(()=>{let u;const c=ae(J(this.m,i),o);this.useNesterov?u=ae(J(this.c,ae(o,J(c,this.m))),a):u=ae(J(this.c,c),a),i.assign(c),a.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Oe(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kg extends Yn{static get className(){return"RMSProp"}constructor(e,t=.9,r=0,s=null,a=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,s==null&&(this.epsilon=C.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r],i=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:me(()=>ft(a).variable(i))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:me(()=>ft(a).variable(i))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:me(()=>ft(a).variable(i))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const u=this.accumulatedMeanSquares[s].variable,c=this.accumulatedMoments[s].variable;me(()=>{const f=ae(J(u,this.decay),J(It(o),1-this.decay));if(this.centered){const p=this.accumulatedMeanGrads[s].variable,g=ae(J(p,this.decay),J(o,1-this.decay)),v=ye(J(o,this.learningRate),Qt(pe(f,ae(It(g),this.epsilon)))),S=ae(J(c,this.momentum),v);u.assign(f),p.assign(g),c.assign(S);const k=pe(a,S);a.assign(k)}else{const p=ae(J(u,this.decay),J(It(o),1-this.decay)),g=ae(J(c,this.momentum),ye(J(o,this.learningRate),Qt(ae(p,this.epsilon))));u.assign(p),c.assign(g);const v=pe(a,g);a.assign(v)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Oe(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Oe(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Oe(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,t).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(t,t*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _g=[Ng,Tg,Sg,xg,Eg,kg,Ou];function $g(){for(const n of _g)vg(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ig="model",Ag=".json",Og=".weights.bin";function Gi(n){return new Promise(e=>setTimeout(e)).then(n)}class Kn{constructor(e){if(!be().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Kn.URL_SCHEME)&&(e=e.slice(Kn.URL_SCHEME.length)),(e==null||e.length===0)&&(e=Ig),this.modelJsonFileName=e+Ag,this.weightDataFileName=e+Og}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=Ot.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=Bo(e,s),i=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=i,await Gi(()=>o.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=r,await Gi(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Xr(e)}}}}Kn.URL_SCHEME="downloads://";class Dg{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),i=a.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const u=li(a,c=>this.loadWeights(c));e(u)},r.onerror=s=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const t=[],r=[];for(const i of e)t.push(...i.weights),r.push(...i.paths);const s=this.checkManifestAndWeightFiles(e),a=r.map(i=>this.loadWeightsFile(i,s[i]));return Promise.all(a).then(i=>[t,i])}loadWeightsFile(e,t){return new Promise((r,s)=>{const a=new FileReader;a.onload=i=>{const o=i.target.result;r(o)},a.onerror=i=>s(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],r=this.weightsFiles.map(a=>Ui(a.name)),s={};for(const a of e)a.paths.forEach(i=>{const o=Ui(i);if(t.indexOf(o)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(t.push(o),r.indexOf(o)===-1)throw new Error(`Weight file with basename '${o}' is not provided.`);s[i]=this.weightsFiles[r.indexOf(o)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const Fg=n=>be().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Kn.URL_SCHEME)?Cg(n.slice(Kn.URL_SCHEME.length)):null;Ie.registerSaveRouter(Fg);function Cg(n="model"){return new Kn(n)}function Rg(n){return new Dg(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hi(n,e,t,r){i(n),t=t??0,r=r??1,o(t,r);let s=0;const a=u=>(u.then(c=>{const f=t+ ++s/n.length*(r-t);return e(f),c}),u);function i(u){_(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function o(u,c){_(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),_(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),_(c>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${c}`)}return Promise.all(n.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Du(n,e){e==null&&(e={});const t=e.fetchFunc==null?be().platform.fetch:e.fetchFunc,r=n.map(p=>t(p,e.requestInit,{isBinary:!0})),s=0,a=.5,o=(e.onProgress==null?await Promise.all(r):await Hi(r,e.onProgress,s,a)).map(p=>p.arrayBuffer()),u=.5,c=1;return e.onProgress==null?await Promise.all(o):await Hi(o,e.onProgress,u,c)}async function Lg(n,e="",t,r){return Fu(i=>Du(i,{requestInit:r}))(n,e,t)}function Fu(n){return async(e,t="",r)=>{const s=e.map(()=>!1),a={},i=r!=null?r.map(()=>!1):[],o=[];if(e.forEach((v,S)=>{let k=0;v.weights.forEach(E=>{const F="quantization"in E?E.quantization.dtype:E.dtype,j=Aa[F]*We(E.shape),W=()=>{s[S]=!0,a[S]==null&&(a[S]=[]),a[S].push({manifestEntry:E,groupOffset:k,sizeBytes:j})};r!=null?r.forEach((B,K)=>{B===E.name&&(W(),i[K]=!0)}):W(),o.push(E.name),k+=j})}),!i.every(v=>v)){const v=r.filter((S,k)=>!i[k]);throw new Error(`Could not find weights in manifest with names: ${v.join(", ")}. 
Manifest JSON has weights with names: ${o.join(", ")}.`)}const u=s.reduce((v,S,k)=>(S&&v.push(k),v),[]),c=[];u.forEach(v=>{e[v].paths.forEach(S=>{const k=t+(t.endsWith("/")?"":"/")+S;c.push(k)})});const f=await n(c),p={};let g=0;return u.forEach(v=>{const S=e[v].paths.length,k=new Ot(f.slice(g,g+S));a[v].forEach(F=>{const j=k.slice(F.groupOffset,F.groupOffset+F.sizeBytes),W=Po(j,[F.manifestEntry]);for(const B in W)p[B]=W[B]}),g+=S}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pg="application/octet-stream",Bg="application/json";class ki{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(_(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=be().platform.fetch,_(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&_(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=Bo(e,r);if(t.body.append("model.json",new Blob([JSON.stringify(s)],{type:Bg}),"model.json"),e.weightData!=null){const i=Ot.join(e.weightData);t.body.append("model.weights.bin",new Blob([i],{type:Pg}),"model.weights.bin")}const a=await this.fetch(this.path,t);if(a.ok)return{modelArtifactsInfo:Xr(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const r=t.modelTopology,s=t.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return li(t,a=>this.loadWeights(a))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=jg(t),a=this.weightPathPrefix||r,i=Mo(e),o=[],u=[];for(const f of e)for(const p of f.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(p)):o.push(a+p+s);this.weightUrlConverter&&o.push(...await Promise.all(u));const c=await Du(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,c]}}ki.URL_SCHEME_REGEX=/^https?:\/\//;function jg(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),r=n.substring(0,e),s=t>e?n.substring(t):"";return[r+"/",s]}function Ga(n){return n.match(ki.URL_SCHEME_REGEX)!=null}const Cu=(n,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(r=>Ga(r)):t=Ga(n),t)return _i(n,e)}return null};Ie.registerSaveRouter(Cu);Ie.registerLoadRouter(Cu);function _i(n,e){return new ki(n,e)}function Mg(n,e){return _i(n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ha{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Ru{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class zg{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function Vg(n,e,t,r){const s=arguments;return new zg(Lu(...s))}function Lu(n,e,t,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new ha(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ha({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ha({modelTopology:n,weightSpecs:e,weightData:t,trainingConfig:r}))}function Ug(n){return new Ru(n)}function Wg(n){return new Ru(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pu=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Ot,browserFiles:Rg,browserHTTPRequest:Mg,concatenateArrayBuffers:zl,copyModel:c3,decodeWeights:Po,encodeWeights:Pl,fromMemory:Vg,fromMemorySync:Lu,getLoadHandlers:Xl,getModelArtifactsForJSON:li,getModelArtifactsForJSONSync:jo,getModelArtifactsInfoForJSON:Xr,getSaveHandlers:ql,getWeightSpecs:Mo,http:_i,isHTTPScheme:Ga,listModels:o3,loadWeights:Lg,moveModel:l3,registerLoadRouter:Hl,registerSaveRouter:Gl,removeModel:u3,weightsLoaderFactory:Fu,withSaveHandler:Ug,withSaveHandlerSync:Wg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Cn,qi=!1;function Kg(n,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,r=!1,s=!1,a=!1,i=!1,o=!1;if(n.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)a=!0;else if(n.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)o=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(ks(Oi,C.backendName)!=null){const S={pixels:n},k={numChannels:e};return C.runKernel(Oi,S,k)}const[c,f]=s?[n.videoWidth,n.videoHeight]:[n.width,n.height];let p;if(i)p=n.getContext("2d").getImageData(0,0,c,f).data;else if(r||t)p=n.data;else if(a||s||o){if(Cn==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Cn=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Cn=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Cn.canvas.width=c,Cn.canvas.height=f,Cn.drawImage(n,0,0,c,f),p=Cn.getImageData(0,0,c,f).data}let g;if(e===4)g=new Int32Array(p);else{const S=c*f;g=new Int32Array(S*e);for(let k=0;k<S;k++)for(let E=0;E<e;++E)g[k*e+E]=p[k*4+E]}return Eu(g,[f,c,e],"int32")}function Gg(n){if(n.rank!==2&&n.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const e=n.rank===2?1:n.shape[2];if(e>4||e===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);if(n.dtype!=="float32"&&n.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`)}async function Bu(n,e){let t=T(n,"img","toPixels");if(!(n instanceof Ae)){const c=t;t=De(c,"int32"),c.dispose()}Gg(t);const[r,s]=t.shape.slice(0,2),a=t.rank===2?1:t.shape[2],i=await t.data(),o=t.dtype==="float32"?255:1,u=new Uint8ClampedArray(s*r*4);for(let c=0;c<r*s;++c){const f=[0,0,0,255];for(let g=0;g<a;g++){const v=i[c*a+g];if(t.dtype==="float32"){if(v<0||v>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${v}.`)}else if(t.dtype==="int32"&&(v<0||v>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${v}.`);a===1?(f[0]=v*o,f[1]=v*o,f[2]=v*o):f[g]=v*o}const p=c*4;u[p+0]=Math.round(f[0]),u[p+1]=Math.round(f[1]),u[p+2]=Math.round(f[2]),u[p+3]=Math.round(f[3])}if(e!=null){qi||ks(f2,C.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),qi=!0),e.width=s,e.height=r;const c=e.getContext("2d"),f=new ImageData(u,s,r);c.putImageData(f,0,0)}return t!==n&&t.dispose(),u}const ju=O({fromPixels_:Kg});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */$g();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hg=be();Hg.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var vt;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(vt||(vt={}));var Xi;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Xi||(Xi={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qg={};function Mu(n){return qg[n]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d(n,e,t,r,s){const a=e.inputParams[n];if(a&&a.inputIndexStart!==void 0){const o=a.inputIndexStart,u=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?o+1:a.inputIndexEnd,c=o<0?e.inputNames.length+o:o;if(a.type==="tensor")return Ue(e.inputNames[c],t,r,s);if(a.type==="tensors"){const g=e.inputs.slice(o,u);return e.inputNames.slice(o,u).filter((S,k)=>{var E;return((E=g[k])===null||E===void 0?void 0:E.op)!=="NoOp"}).map(S=>Ue(S,t,r,s))}const f=Ue(e.inputNames[c],t,r,s),p=f.dataSync();return a.type==="number"?p[0]:xa(f.shape,p)}const i=e.attrParams[n];return i&&i.value}function Ue(n,e,t,r){const[s,a]=ot(n,t);if(r!=null){const o=r.getHashTableHandleByName(s);if(o!=null)return o}const i=t.currentContextIds.find(o=>!!e[Ps(s,o)]);return i!==void 0?e[Ps(s,i)][a]:void 0}function Yi(n,e,t){return e[Ps(n,t.currentContextId)]}function Gt(n,e){const[t,r,s]=ot(n,e);return[Ps(t,e&&e.currentContextId),r,s]}function Ps(n,e){return e?`${n}-${e}`:n}function ot(n,e){if(n==="")return["",0,void 0];const t=e!=null&&e.parseNodeNameCache!=null;if(t){const a=e.parseNodeNameCache.get(n);if(a!=null)return a}const r=n.split(":");let s;if(r.length===1)s=[n,0,void 0];else{const a=r[0],i=r.length===3?r[1]:void 0,o=Number(r[r.length-1]);s=[a,o,i]}return t&&e.parseNodeNameCache.set(n,s),s}function Es(n,e,t){let r=d("pad",n,e,t);if(r==="explicit"){r=d("explicitPaddings",n,e,t);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function Ht(n){return n.kept?n:mn(n)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xg=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Yg=Object.freeze(Object.defineProperty({__proto__:null,json:Xg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jg=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Zg=Object.freeze(Object.defineProperty({__proto__:null,json:Jg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qg=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],e6=Object.freeze(Object.defineProperty({__proto__:null,json:Qg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t6=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],n6=Object.freeze(Object.defineProperty({__proto__:null,json:t6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r6=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],s6=Object.freeze(Object.defineProperty({__proto__:null,json:r6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a6=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],i6=Object.freeze(Object.defineProperty({__proto__:null,json:a6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o6=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],u6=Object.freeze(Object.defineProperty({__proto__:null,json:o6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c6=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],l6=Object.freeze(Object.defineProperty({__proto__:null,json:c6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h6=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],f6=Object.freeze(Object.defineProperty({__proto__:null,json:h6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p6=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],d6=Object.freeze(Object.defineProperty({__proto__:null,json:p6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m6=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],g6=Object.freeze(Object.defineProperty({__proto__:null,json:m6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y6=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],b6=Object.freeze(Object.defineProperty({__proto__:null,json:y6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w6=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],v6=Object.freeze(Object.defineProperty({__proto__:null,json:w6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N6=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],T6=Object.freeze(Object.defineProperty({__proto__:null,json:N6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const S6=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],x6=Object.freeze(Object.defineProperty({__proto__:null,json:S6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E6=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],k6=Object.freeze(Object.defineProperty({__proto__:null,json:E6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _6=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],$6=Object.freeze(Object.defineProperty({__proto__:null,json:_6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I6=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],A6=Object.freeze(Object.defineProperty({__proto__:null,json:I6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O6=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],D6=Object.freeze(Object.defineProperty({__proto__:null,json:O6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ji{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[Yg,Zg,e6,n6,s6,i6,u6,l6,f6,d6,g6,b6,v6,T6,x6,k6,$6,A6,D6],t=[].concat(...e.map(r=>r.json));this.opMappers=t.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(e,t={}){const r=e.node,s=[],a=[],i=[],o=r.reduce((k,E)=>(k[E.name]=this.mapNode(E),E.op.startsWith("Placeholder")?s.push(k[E.name]):E.op==="Const"?a.push(k[E.name]):(E.input==null||E.input.length===0)&&i.push(k[E.name]),k),{});let u=[];const c=[];let f={},p={};t!=null&&(f=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));const g=Object.keys(o);g.forEach(k=>{const E=o[k];E.inputNames.forEach((F,j)=>{const[W,,B]=Gt(F),K=o[W];if(K.outputs!=null){const G=K.outputs.indexOf(B);if(G!==-1){const Q=`${W}:${G}`;E.inputNames[j]=Q}}E.inputs.push(K),K.children.push(E)})}),Object.keys(p).length===0?g.forEach(k=>{const E=o[k];E.children.length===0&&c.push(E)}):Object.keys(p).forEach(k=>{const[E]=Gt(k),F=o[E];F!=null&&(F.signatureKey=p[k],c.push(F))}),Object.keys(f).length>0?Object.keys(f).forEach(k=>{const[E]=Gt(k),F=o[E];F&&(F.signatureKey=f[k],u.push(F))}):u=s;let v={};e.library!=null&&e.library.function!=null&&(v=e.library.function.reduce((k,E)=>(k[E.signature.name]=this.mapFunction(E),k),{}));const S={nodes:o,inputs:u,outputs:c,weights:a,placeholders:s,signature:t,functions:v};return i.length>0&&(S.initNodes=i),S}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,r)=>(t[e[r].name]=r,t),{})}mapNode(e){const t=Mu(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(r.inputParams=t.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),t.attrs!=null&&(r.attrParams=t.attrs.reduce((s,a)=>{const i=a.type;let o;switch(a.type){case"string":o=Ha(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ha(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":o=ei(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=ei(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":o=Xa(e.attr,a.tfName,a.defaultValue||0),o===void 0&&a.tfDeprecatedName&&(o=Xa(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":o=Qa(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Qa(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":o=qa(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=qa(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":o=ni(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=ni(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":o=Za(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Za(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":o=ti(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=ti(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":o=Ya(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ya(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":o=Ja(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ja(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":o=Zi(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Zi(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return s[a.name]={value:o,type:i},s},{})),r}mapFunction(e){const t=e.nodeDef,r=[],s=[];let a={};t!=null&&(a=t.reduce((p,g)=>(p[g.name]=this.mapNode(g),g.op==="Const"&&s.push(p[g.name]),p),{}));const i=[],o=[];e.signature.inputArg.forEach(p=>{const[g]=Gt(p.name),v={name:g,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:$i(p.type),type:"dtype"}},children:[]};v.signatureKey=p.name,i.push(v),a[g]=v}),Object.keys(a).forEach(p=>{const g=a[p];g.inputNames.forEach((v,S)=>{const[k,,E]=Gt(v),F=a[k];if(F.outputs!=null){const j=F.outputs.indexOf(E);if(j!==-1){const W=`${k}:${j}`;g.inputNames[S]=W}}g.inputs.push(F),F.children.push(g)})});const c=e.ret;e.signature.outputArg.forEach(p=>{const[g,v]=Gt(c[p.name]),S=a[g];S!=null&&(S.defaultOutput=v,o.push(S))});const f=this.mapArgsToSignature(e);return{nodes:a,inputs:i,outputs:o,weights:s,placeholders:r,signature:f}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r),t),{}),outputs:e.signature.outputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r,e.ret),t),{})}}mapArgToTensorInfo(e,t){let r=e.name;return t!=null&&(r=t[r]),{name:r,dtype:e.type}}}function F6(n){const e=be().global;if(typeof e.atob<"u")return e.atob(n);if(typeof Buffer<"u")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function zu(n,e){const t=Array.isArray(n)?String.fromCharCode.apply(null,n):F6(n);return e?t:t.toLowerCase()}function Ha(n,e,t,r=!1){const s=n[e];return s!=null?zu(s.s,r):t}function qa(n,e,t){const r=n[e];return r?r.b:t}function Xa(n,e,t){const r=n[e]||{},s=r.i!=null?r.i:r.f!=null?r.f:t;return typeof s=="number"?s:parseInt(s,10)}function $i(n){switch(typeof n=="string"&&(n=vt[n]),n){case vt.DT_FLOAT:case vt.DT_HALF:return"float32";case vt.DT_INT32:case vt.DT_INT64:case vt.DT_INT8:case vt.DT_UINT8:return"int32";case vt.DT_BOOL:return"bool";case vt.DT_DOUBLE:return"float32";case vt.DT_STRING:return"string";default:return null}}function Zi(n,e,t){const r=n[e];return r&&r.func?r.func.name:t}function Ya(n,e,t){const r=n[e];return r&&r.type?$i(r.type):t}function Ja(n,e,t){const r=n[e];return r&&r.list&&r.list.type?r.list.type.map(s=>$i(s)):t}function Vu(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Za(n,e,t){const r=n[e];return r&&r.shape?Vu(r.shape):t}function Qa(n,e,t){const r=n[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):t}function ei(n,e,t,r=!1){const s=n[e];return s&&s.list&&s.list.s?s.list.s.map(a=>zu(a,r)):t}function ti(n,e,t){const r=n[e];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Vu(s)):t}function ni(n,e,t){const r=n[e];return r&&r.list&&r.list.b?r.list.b:t}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class C6{constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(s=>this.getInput(s)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(e){return Ue(e,this.tensorMap,this.context)}getAttr(e,t){const r=this.node.rawAttrs[e];if(r.tensor!=null)return Ue(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Xa(this.node.rawAttrs,e,t);if(r.s!=null)return Ha(this.node.rawAttrs,e,t);if(r.b!=null)return qa(this.node.rawAttrs,e,t);if(r.shape!=null)return Za(this.node.rawAttrs,e,t);if(r.type!=null)return Ya(this.node.rawAttrs,e,t);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Qa(this.node.rawAttrs,e,t);if(r.list.s!=null)return ei(this.node.rawAttrs,e,t);if(r.list.shape!=null)return ti(this.node.rawAttrs,e,t);if(r.list.b!=null)return ni(this.node.rawAttrs,e,t);if(r.list.type!=null)return Ja(this.node.rawAttrs,e,t)}return t}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ge=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Lo,abs:ht,acos:S3,acosh:E3,add:ae,addN:_3,all:I3,any:O3,argMax:F3,argMin:R3,asin:P3,asinh:j3,atan:z3,atan2:U3,atanh:K3,avgPool:Yo,avgPool3d:Q3,basicLSTMCell:i4,batchNorm:Vs,batchNorm2d:h4,batchNorm3d:p4,batchNorm4d:m4,batchToSpaceND:Jo,bincount:Zo,bitwiseAnd:b4,booleanMaskAsync:ad,broadcastArgs:v4,broadcastTo:xs,buffer:Zt,cast:De,ceil:S4,clipByValue:Qo,clone:mn,complex:bn,concat:Ke,concat1d:k4,concat2d:$4,concat3d:A4,concat4d:D4,conv1d:R4,conv2d:Us,conv2dTranspose:B4,conv3d:M4,conv3dTranspose:W4,cos:G4,cosh:q4,cosineWindow:vi,cumprod:Y4,cumsum:Z4,denseBincount:eh,depthToSpace:nh,depthwiseConv2d:fi,diag:ah,dilation2d:oh,div:ye,divNoNan:ph,dot:mh,dropout:bd,einsum:yh,elu:nu,enclosingPowerOfTwo:$u,ensureShape:vh,equal:tu,erf:Th,euclideanNorm:Dh,exp:en,expandDims:$t,expm1:Lh,eye:su,fft:bi,fill:Yr,floor:au,floorDiv:Xo,fused:Fd,gather:iu,gatherND:md,greater:Gs,greaterEqual:ou,ifft:Ls,imag:Hs,image:mr,inTopKAsync:vd,irfft:Tu,isFinite:Kh,isInf:Hh,isNaN:Xh,leakyRelu:uu,less:Pa,lessEqual:pi,linalg:pg,linspace:Qh,localResponseNormalization:tf,log:Kr,log1p:cu,logSigmoid:cf,logSoftmax:ff,logSumExp:hu,logicalAnd:Fs,logicalNot:fu,logicalOr:pu,logicalXor:bf,losses:dg,lowerBound:vf,matMul:Se,max:cr,maxPool:du,maxPool3d:Sf,maxPoolWithArgmax:Ef,maximum:mu,mean:Cs,meshgrid:$f,min:La,minimum:Rs,mirrorPad:Of,mod:Ff,moments:Rf,movingAverage:ud,mul:J,multiRNNCell:Pf,multinomial:jf,neg:Vt,norm:Ks,notEqual:gu,oneHot:Vf,ones:jn,onesLike:Wf,op:O,outerProduct:Gf,pad:Jr,pad1d:Xf,pad2d:Jf,pad3d:Qf,pad4d:tp,pool:ip,pow:Wr,prelu:bu,print:qo,prod:cp,raggedGather:hp,raggedRange:pp,raggedTensorToTensor:mp,rand:yp,randomGamma:Cp,randomNormal:wu,randomStandardNormal:Pp,randomUniform:yi,randomUniformInt:Mp,range:Gr,real:Hr,reciprocal:Up,relu:qs,relu6:vu,reshape:U,reverse:Wn,reverse1d:qp,reverse2d:Yp,reverse3d:Zp,reverse4d:e0,rfft:wi,round:Nu,rsqrt:r0,scalar:ve,scatterND:ld,searchSorted:di,selu:a0,separableConv2d:o0,setdiff1dAsync:c0,sigmoid:Mn,sign:h0,signal:fg,sin:p0,sinh:m0,slice:fe,slice1d:y0,slice2d:w0,slice3d:N0,slice4d:S0,softmax:E0,softplus:lu,spaceToBatchND:yu,sparse:mg,sparseToDense:pd,spectral:hg,split:qr,sqrt:Qt,square:It,squaredDifference:Su,squeeze:je,stack:nn,step:xu,stridedSlice:L0,string:gg,sub:pe,sum:$e,tan:B0,tanh:Ra,tensor:zt,tensor1d:Je,tensor2d:yn,tensor3d:Eu,tensor4d:j0,tensor5d:M0,tensor6d:z0,tensorScatterUpdate:W0,tile:Mr,topk:G0,transpose:Ka,truncatedNormal:q0,unique:Y0,unsortedSegmentSum:Z0,unstack:Xn,upperBound:ed,variable:td,where:gn,whereAsync:_u,zeros:fr,zerosLike:ft},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R6=(n,e,t,r=Ge)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(d("a",n,e,t),d("b",n,e,t))];case"AddN":return[r.addN(d("tensors",n,e,t))];case"FloorMod":case"Mod":return[r.mod(d("a",n,e,t),d("b",n,e,t))];case"Mul":return[r.mul(d("a",n,e,t),d("b",n,e,t))];case"RealDiv":case"Div":return[r.div(d("a",n,e,t),d("b",n,e,t))];case"DivNoNan":return[r.divNoNan(d("a",n,e,t),d("b",n,e,t))];case"FloorDiv":return[r.floorDiv(d("a",n,e,t),d("b",n,e,t))];case"Sub":return[r.sub(d("a",n,e,t),d("b",n,e,t))];case"Minimum":return[r.minimum(d("a",n,e,t),d("b",n,e,t))];case"Maximum":return[r.maximum(d("a",n,e,t),d("b",n,e,t))];case"Pow":return[r.pow(d("a",n,e,t),d("b",n,e,t))];case"SquaredDifference":return[r.squaredDifference(d("a",n,e,t),d("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L6=(n,e,t,r=Ge)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(d("x",n,e,t))];case"Acos":return[r.acos(d("x",n,e,t))];case"Acosh":return[r.acosh(d("x",n,e,t))];case"Asin":return[r.asin(d("x",n,e,t))];case"Asinh":return[r.asinh(d("x",n,e,t))];case"Atan":return[r.atan(d("x",n,e,t))];case"Atan2":return[r.atan2(d("x",n,e,t),d("y",n,e,t))];case"Atanh":return[r.atanh(d("x",n,e,t))];case"Ceil":return[r.ceil(d("x",n,e,t))];case"Complex":return[r.complex(d("real",n,e,t),d("imag",n,e,t))];case"Cos":return[r.cos(d("x",n,e,t))];case"Cosh":return[r.cosh(d("x",n,e,t))];case"Elu":return[r.elu(d("x",n,e,t))];case"Erf":return[r.erf(d("x",n,e,t))];case"Exp":return[r.exp(d("x",n,e,t))];case"Expm1":return[r.expm1(d("x",n,e,t))];case"Floor":return[r.floor(d("x",n,e,t))];case"Log":return[r.log(d("x",n,e,t))];case"Log1p":return[r.log1p(d("x",n,e,t))];case"Imag":return[r.imag(d("x",n,e,t))];case"Neg":return[r.neg(d("x",n,e,t))];case"Reciprocal":return[r.reciprocal(d("x",n,e,t))];case"Real":return[r.real(d("x",n,e,t))];case"Relu":return[r.relu(d("x",n,e,t))];case"Round":return[r.round(d("x",n,e,t))];case"Selu":return[r.selu(d("x",n,e,t))];case"Sigmoid":return[r.sigmoid(d("x",n,e,t))];case"Sin":return[r.sin(d("x",n,e,t))];case"Sign":return[r.sign(d("x",n,e,t))];case"Sinh":return[r.sinh(d("x",n,e,t))];case"Softplus":return[r.softplus(d("x",n,e,t))];case"Sqrt":return[r.sqrt(d("x",n,e,t))];case"Square":return[r.square(d("x",n,e,t))];case"Tanh":return[r.tanh(d("x",n,e,t))];case"Tan":return[r.tan(d("x",n,e,t))];case"ClipByValue":return[r.clipByValue(d("x",n,e,t),d("clipValueMin",n,e,t),d("clipValueMax",n,e,t))];case"Relu6":return[r.relu6(d("x",n,e,t))];case"Rsqrt":return[r.rsqrt(Ue(n.inputNames[0],e,t))];case"LeakyRelu":return[r.leakyRelu(d("x",n,e,t),d("alpha",n,e,t))];case"Prelu":return[r.prelu(d("x",n,e,t),d("alpha",n,e,t))];case"IsNan":return[r.isNaN(Ue(n.inputNames[0],e,t))];case"IsInf":return[r.isInf(Ue(n.inputNames[0],e,t))];case"IsFinite":return[r.isFinite(Ue(n.inputNames[0],e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nt(n,e,t=""){if(!(typeof n=="number"||typeof e=="number")){_(n.length===e.length,()=>t+` Shapes ${n} and ${e} must match`);for(let r=0;r<n.length;r++){const s=n[r],a=e[r];_(s<0||a<0||s===a,()=>t+` Shapes ${n} and ${e} must match`)}}}function Qi(n){return!(typeof n=="number"||n.some(e=>e<0))}function Pr(n,e,t){let r=ri(n,t);const s=!Qi(r);if(s&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&e.forEach(a=>{r=ri(a.shape,r)}),!Qi(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function ri(n,e){if(typeof n=="number")return e;if(typeof e=="number")return n;if(n.length!==e.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${e}`);const t=[];for(let r=0;r<n.length;++r){const s=n[r],a=e[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${n} vs. ${e}`);t[r]=s>=0?s:a}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class P6{constructor(e,t,r,s,a,i,o){this.name=e,this.dtype=t,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=i,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=ve(0),jt(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),Nt(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=t,jt(t),r.written=!0,this.tensors[e]=r}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((r,s)=>this.write(r,t[s]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let s=0;s<this.size();s++)e.push(s)}if(e.length===0)return zt([],[0].concat(this.elementShape));const r=this.readMany(e);return Nt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),nn(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return zt([],[0].concat(this.elementShape));const t=[];for(let s=0;s<this.size();s++)t.push(s);const r=this.readMany(t);return Nt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Ke(r,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,Xn(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let r=0;const s=e.map(u=>(r+=u,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:t.size/r,i=[];me(()=>{t=U(t,[1,r,a]);for(let u=0;u<e.length;++u){const f=[0,u===0?0:s[u-1],0],p=[1,e[u],a];i[u]=U(fe(t,f,p),this.elementShape)}return i});const o=[];for(let u=0;u<e.length;u++)o[u]=u;this.writeMany(o,i)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gn{get id(){return this.idTensor.id}constructor(e,t,r,s=-1){this.tensors=e,this.elementShape=t,this.elementDtype=r,e!=null&&e.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);Nt(t,a.shape,"TensorList shape mismatch: "),jt(a)}),this.idTensor=ve(0),this.maxNumElements=s,jt(this.idTensor)}copy(){return new Gn([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,r=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Nt(e,this.elementShape,"TensorList shape mismatch: ");const s=Pr(this.elementShape,this.tensors,e);return me(()=>{const a=this.tensors.map(i=>U(i,s));return nn(a,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=Pr(this.elementShape,this.tensors,e),s=this.tensors.pop();return s.kept=!1,Nt(s.shape,e,"TensorList shape mismatch: "),U(s,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Nt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");jt(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new Gn([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)t.tensors[r]=this.tensors[r];return t}getItem(e,t,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);Nt(this.tensors[e].shape,t,"TensorList shape mismatch: ");const s=Pr(this.elementShape,this.tensors,t);return U(this.tensors[e],s)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Nt(this.elementShape,t.shape,"TensorList shape mismatch: "),jt(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,r){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);Nt(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const s=Pr(this.elementShape,this.tensors,r);return e.length===0?zt([],[0].concat(s)):me(()=>{const a=e.map(i=>U(this.tensors[i],s));return nn(a,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Nt(this.elementShape,t,"TensorList shape mismatch: ");const r=Pr(this.elementShape,this.tensors,t);return this.size()===0?zt([],[0].concat(r)):me(()=>{const s=this.tensors.map(a=>U(a,r));return Ke(s,0)})}}function B6(n,e,t){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==t)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${t}`);const s=n.shape.slice(1);Nt(s,e,"TensorList shape mismatch: ");const a=Xn(n);return new Gn(a,e,r)}function j6(n,e,t,r){return new Gn([],n,e,r)}function M6(n,e,t,r){if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const s=Math.max(...e);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new Gn([],t,n.dtype,r),i=Xn(n,0);return e.forEach((o,u)=>{a.setItem(o,i[u])}),a}function z6(n,e,t){let r=0;const s=e.map(f=>(r+=f,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const a=n.shape.slice(1),i=ri(a,t),o=r===0?0:n.size/r,u=me(()=>{const f=[];n=U(n,[1,r,o]);for(let p=0;p<e.length;++p){const v=[0,p===0?0:s[p-1],0],S=[1,e[p],o];f[p]=U(fe(n,v,S),i)}return n.dispose(),f}),c=new Gn([],t,n.dtype,e.length);for(let f=0;f<u.length;f++)c.setItem(f,u[f]);return c}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V6=async(n,e,t)=>{switch(n.op){case"If":case"StatelessIf":{const r=d("thenBranch",n,e,t),s=d("elseBranch",n,e,t),a=d("cond",n,e,t),i=d("args",n,e,t);return(await a.data())[0]?t.functionMap[r].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap):t.functionMap[s].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const r=d("body",n,e,t),s=d("cond",n,e,t),a=d("args",n,e,t),i=await t.functionMap[s].executeFunctionAsync(a,t.tensorArrayMap,t.tensorListMap),o=a.map(f=>f.id);let u=await i[0].data();i.forEach(f=>{!f.kept&&o.indexOf(f.id)===-1&&f.dispose()});let c=a;for(;u[0];){const f=c;c=await t.functionMap[r].executeFunctionAsync(c,t.tensorArrayMap,t.tensorListMap);const p=c.map(v=>v.id);f.forEach(v=>{!v.kept&&o.indexOf(v.id)===-1&&p.indexOf(v.id)===-1&&v.dispose()});const g=await t.functionMap[s].executeFunctionAsync(c,t.tensorArrayMap,t.tensorListMap);u=await g[0].data(),g.forEach(v=>{!v.kept&&o.indexOf(v.id)===-1&&p.indexOf(v.id)===-1&&v.dispose()})}return c}case"LoopCond":{const r=d("pred",n,e,t);return[Ht(r)]}case"Switch":{const r=d("pred",n,e,t);let s=d("data",n,e,t);return s.kept||(s=Ht(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=n.inputNames.find(s=>Ue(s,e,t)!==void 0);if(r){const s=Ue(r,e,t);return[Ht(s)]}return}case"Enter":{const r=d("frameName",n,e,t),s=d("tensor",n,e,t);return t.enterFrame(r),[Ht(s)]}case"Exit":{const r=d("tensor",n,e,t);return t.exitFrame(),[Ht(r)]}case"NextIteration":{const r=d("tensor",n,e,t);return t.nextIteration(),[Ht(r)]}case"TensorArrayV3":{const r=d("size",n,e,t),s=d("dtype",n,e,t),a=d("elementShape",n,e,t),i=d("dynamicSize",n,e,t),o=d("clearAfterRead",n,e,t),u=d("identicalElementShapes",n,e,t),c=d("name",n,e,t),f=new P6(c,s,r,a,u,i,o);return t.addTensorArray(f),[f.idTensor,ve(1)]}case"TensorArrayWriteV3":{const r=d("tensorArrayId",n,e,t),s=d("index",n,e,t),a=d("tensor",n,e,t),i=t.getTensorArray(r.id);return i.write(s,a),[i.idTensor]}case"TensorArrayReadV3":{const r=d("tensorArrayId",n,e,t),s=d("index",n,e,t);return[t.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=d("tensorArrayId",n,e,t),s=d("indices",n,e,t),a=d("dtype",n,e,t);return[t.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=d("tensorArrayId",n,e,t),s=d("indices",n,e,t),a=d("tensor",n,e,t),i=t.getTensorArray(r.id);return i.scatter(s,a),[i.idTensor]}case"TensorArrayConcatV3":{const r=d("tensorArrayId",n,e,t),s=t.getTensorArray(r.id),a=d("dtype",n,e,t);return[s.concat(a)]}case"TensorArraySplitV3":{const r=d("tensorArrayId",n,e,t),s=d("tensor",n,e,t),a=d("lengths",n,e,t),i=t.getTensorArray(r.id);return i.split(a,s),[i.idTensor]}case"TensorArraySizeV3":{const r=d("tensorArrayId",n,e,t),s=t.getTensorArray(r.id);return[ve(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=d("tensorArrayId",n,e,t),s=t.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=d("tensorListId",n,e,t),s=d("index",n,e,t),a=d("tensor",n,e,t),i=t.getTensorList(r.id);return i.setItem(s,a),[i.idTensor]}case"TensorListGetItem":{const r=d("tensorListId",n,e,t),s=d("index",n,e,t),a=d("elementShape",n,e,t),i=d("elementDType",n,e,t);return[t.getTensorList(r.id).getItem(s,a,i)]}case"TensorListScatterV2":case"TensorListScatter":{const r=d("indices",n,e,t),s=d("tensor",n,e,t),a=d("elementShape",n,e,t),i=d("numElements",n,e,t),o=M6(s,r,a,i);return t.addTensorList(o),[o.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=d("elementShape",n,e,t),s=d("elementDType",n,e,t);let a;n.op==="TensorListReserve"?a="numElements":a="maxNumElements";const i=d(a,n,e,t),o=n.op==="TensorListReserve"?-1:i,u=j6(r,s,i,o);return t.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=d("tensorListId",n,e,t),s=d("indices",n,e,t),a=d("elementShape",n,e,t),i=d("elementDType",n,e,t);return[t.getTensorList(r.id).gather(s,i,a)]}case"TensorListStack":{const r=d("tensorListId",n,e,t),s=d("elementShape",n,e,t),a=d("elementDType",n,e,t),i=d("numElements",n,e,t);return[t.getTensorList(r.id).stack(s,a,i)]}case"TensorListFromTensor":{const r=d("tensor",n,e,t),s=d("elementShape",n,e,t),a=d("elementDType",n,e,t),i=B6(r,s,a);return t.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=d("tensorListId",n,e,t),s=t.getTensorList(r.id),a=d("dtype",n,e,t),i=d("elementShape",n,e,t);return[s.concat(a,i)]}case"TensorListPushBack":{const r=d("tensorListId",n,e,t),s=d("tensor",n,e,t),a=t.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=d("tensorListId",n,e,t),s=d("elementShape",n,e,t),a=d("elementDType",n,e,t);return[t.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=d("tensor",n,e,t),s=d("elementShape",n,e,t),a=d("lengths",n,e,t),i=z6(r,a,s);return t.addTensorList(i),[i.idTensor]}case"TensorListLength":{const r=d("tensorListId",n,e,t),s=t.getTensorList(r.id);return[ve(s.size(),"int32")]}case"TensorListResize":{const r=d("tensorListId",n,e,t),s=d("size",n,e,t),i=t.getTensorList(r.id).resize(s);return t.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eo(n,e,t){const[r,s]=d("fusedOps",n,e,t),a=r==="biasadd",i=!a,o=s==="prelu",u=r==="fusedbatchnorm",c=d("numArgs",n,e,t);if(a){if(o&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&a&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const f=d("strides",n,e,t),p=Es(n,e,t),g=d("dataFormat",n,e,t).toUpperCase(),v=d("dilations",n,e,t);let[S,k]=d("args",n,e,t);i&&(k=S,S=void 0);const E=d("leakyreluAlpha",n,e,t);return{stride:f,pad:p,dataFormat:g,dilations:v,biasArg:S,preluArg:k,activationFunc:s,leakyreluAlpha:E}}const U6=(n,e,t,r=Ge)=>{switch(n.op){case"Conv1D":{const s=d("stride",n,e,t),a=d("pad",n,e,t),i=d("dataFormat",n,e,t).toUpperCase(),o=d("dilation",n,e,t);return[r.conv1d(d("x",n,e,t),d("filter",n,e,t),s,a,i,o)]}case"Conv2D":{const s=d("strides",n,e,t),a=Es(n,e,t),i=d("dataFormat",n,e,t).toUpperCase(),o=d("dilations",n,e,t);return[r.conv2d(d("x",n,e,t),d("filter",n,e,t),[s[1],s[2]],a,i,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:i,dilations:o,biasArg:u,preluArg:c,activationFunc:f,leakyreluAlpha:p}=eo(n,e,t);return[r.fused.conv2d({x:d("x",n,e,t),filter:d("filter",n,e,t),strides:[s[1],s[2]],pad:a,dataFormat:i,dilations:[o[1],o[2]],bias:u,activation:f,preluActivationWeights:c,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:i,dilations:o,biasArg:u,preluArg:c,activationFunc:f,leakyreluAlpha:p}=eo(n,e,t);return[r.fused.depthwiseConv2d({x:d("x",n,e,t),filter:d("filter",n,e,t),strides:[s[1],s[2]],pad:a,dataFormat:i,dilations:[o[1],o[2]],bias:u,activation:f,preluActivationWeights:c,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=d("outputShape",n,e,t),a=d("strides",n,e,t),i=Es(n,e,t);return[r.conv2dTranspose(d("x",n,e,t),d("filter",n,e,t),s,[a[1],a[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=d("strides",n,e,t),a=Es(n,e,t),i=d("dilations",n,e,t),o=d("dataFormat",n,e,t).toUpperCase();return[r.depthwiseConv2d(d("input",n,e,t),d("filter",n,e,t),[s[1],s[2]],a,o,[i[1],i[2]])]}case"Conv3D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("dataFormat",n,e,t).toUpperCase(),o=d("dilations",n,e,t);return[r.conv3d(d("x",n,e,t),d("filter",n,e,t),[s[1],s[2],s[3]],a,i,[o[1],o[2],o[3]])]}case"AvgPool":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.avgPool(d("x",n,e,t),[i[1],i[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.maxPool(d("x",n,e,t),[i[1],i[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t),o=d("includeBatchInIndex",n,e,t),{result:u,indexes:c}=r.maxPoolWithArgmax(d("x",n,e,t),[i[1],i[2]],[s[1],s[2]],a,o);return[u,c]}case"AvgPool3D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.avgPool3d(d("x",n,e,t),[i[1],i[2],i[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.maxPool3d(d("x",n,e,t),[i[1],i[2],i[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("dilations",n,e,t),o=s[1],u=s[2],c=i[1],f=i[2];return[r.dilation2d(d("x",n,e,t),d("filter",n,e,t),[o,u],a,[c,f],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W6=(n,e,t,r=Ge)=>{switch(n.op){case"Fill":{const s=d("shape",n,e,t),a=d("dtype",n,e,t),i=d("value",n,e,t);return[r.fill(s,i,a)]}case"LinSpace":{const s=d("start",n,e,t),a=d("stop",n,e,t),i=d("num",n,e,t);return[r.linspace(s,a,i)]}case"Multinomial":{const s=d("logits",n,e,t),a=d("numSamples",n,e,t),i=d("seed",n,e,t);return[r.multinomial(s,a,i)]}case"OneHot":{const s=d("indices",n,e,t),a=d("depth",n,e,t),i=d("onValue",n,e,t),o=d("offValue",n,e,t),u=d("dtype",n,e,t);return[r.oneHot(s,a,i,o,u)]}case"Ones":return[r.ones(d("shape",n,e,t),d("dtype",n,e,t))];case"OnesLike":return[r.onesLike(d("x",n,e,t))];case"RandomStandardNormal":return[r.randomStandardNormal(d("shape",n,e,t),d("dtype",n,e,t),d("seed",n,e,t))];case"RandomUniform":return[r.randomUniform(d("shape",n,e,t),d("minval",n,e,t),d("maxval",n,e,t),d("dtype",n,e,t))];case"RandomUniformInt":return[r.randomUniformInt(d("shape",n,e,t),d("minval",n,e,t),d("maxval",n,e,t),d("seed",n,e,t))];case"Range":{const s=d("start",n,e,t),a=d("stop",n,e,t),i=d("step",n,e,t);return[r.range(s,a,i,d("dtype",n,e,t))]}case"TruncatedNormal":{const s=d("shape",n,e,t),a=d("mean",n,e,t),i=d("stdDev",n,e,t),o=d("seed",n,e,t);return[r.truncatedNormal(s,a,i,d("dtype",n,e,t),o)]}case"Zeros":return[r.zeros(d("shape",n,e,t),d("dtype",n,e,t))];case"ZerosLike":return[r.zerosLike(d("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fa(n,e,t){const r=d("boxes",n,e,t),s=d("scores",n,e,t),a=d("maxOutputSize",n,e,t),i=d("iouThreshold",n,e,t),o=d("scoreThreshold",n,e,t),u=d("softNmsSigma",n,e,t);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:i,scoreThreshold:o,softNmsSigma:u}}const K6=async(n,e,t,r,s=Ge)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:c,softNmsSigma:f}=fa(n,e,t),p=await s.image.nonMaxSuppressionWithScoreAsync(a,i,o,u,c,f);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:c}=fa(n,e,t),f=d("padToMaxOutputSize",n,e,t),p=await s.image.nonMaxSuppressionPaddedAsync(a,i,o,u,c,f);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:c}=fa(n,e,t);return[await s.image.nonMaxSuppressionAsync(a,i,o,u,c)]}case"Where":{const a=s.cast(d("condition",n,e,t),"bool"),i=[await s.whereAsync(a)];return a.dispose(),i}case"ListDiff":return s.setdiff1dAsync(d("x",n,e,t),d("y",n,e,t));default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G6=(n,e,t,r=Ge)=>{switch(n.op){case"LowerBound":{const s=d("sortedSequence",n,e,t),a=d("values",n,e,t);return[r.lowerBound(s,a)]}case"TopKV2":{const s=d("x",n,e,t),a=d("k",n,e,t),i=d("sorted",n,e,t),o=r.topk(s,a,i);return[o.values,o.indices]}case"UpperBound":{const s=d("sortedSequence",n,e,t),a=d("values",n,e,t);return[r.upperBound(s,a)]}case"Unique":{const s=d("x",n,e,t),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=d("x",n,e,t),a=d("axis",n,e,t),i=r.unique(s,a);return[i.values,i.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H6=(n,e,t,r=Ge)=>{switch(n.op){case"Const":return e[n.name];case"PlaceholderWithDefault":const s=d("default",n,e,t);return[Ue(n.name,e,t)||s];case"Placeholder":return[Ue(n.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const f=d("x",n,e,t);return[Ht(f)]}case"IdentityN":return d("x",n,e,t).map(f=>Ht(f));case"Snapshot":const a=d("x",n,e,t);return[Ht(a)];case"Shape":return[r.tensor1d(d("x",n,e,t).shape,"int32")];case"ShapeN":return d("x",n,e,t).map(f=>r.tensor1d(f.shape));case"Size":return[r.scalar(d("x",n,e,t).size,"int32")];case"Rank":return[r.scalar(d("x",n,e,t).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const i=d("x",n,e,t),o=d("data",n,e,t),u=d("message",n,e,t),c=d("summarize",n,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let f=0;f<o.length;f++)console.log(Array.prototype.slice.call(o[f].dataSync()).slice(0,c));return[i];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class q6{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=ve(0),this.tensorMap=new Map,jt(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return ve(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),me(()=>{const s=Xn(t),a=r.length,i=s.length;_(a===i,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${i} elements.`);for(let o=0;o<a;o++){const u=r[o],c=s[o];jt(c),this.tensorMap.set(u,c)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return me(()=>{const s=[];for(let a=0;a<r.length;a++){const i=r[a],o=this.findWithDefault(i,t);s.push(o)}return nn(s)})}findWithDefault(e,t){const r=this.tensorMap.get(e);return r??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X6=async(n,e,t,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(n.name);if(s!=null)return[s];{const a=d("keyDType",n,e,t),i=d("valueDType",n,e,t),o=new q6(a,i);return r.addHashTable(n.name,o),[o.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=d("tableHandle",n,e,t,r),a=d("keys",n,e,t),i=d("values",n,e,t);return[await r.getHashTableById(s.id).import(a,i)]}case"LookupTableFind":case"LookupTableFindV2":{const s=d("tableHandle",n,e,t,r),a=d("keys",n,e,t),i=d("defaultValue",n,e,t);return[await r.getHashTableById(s.id).find(a,i)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=d("tableHandle",n,e,t,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y6=(n,e,t,r=Ge)=>{switch(n.op){case"ResizeBilinear":{const s=d("images",n,e,t),a=d("size",n,e,t),i=d("alignCorners",n,e,t),o=d("halfPixelCenters",n,e,t);return[r.image.resizeBilinear(s,[a[0],a[1]],i,o)]}case"ResizeNearestNeighbor":{const s=d("images",n,e,t),a=d("size",n,e,t),i=d("alignCorners",n,e,t),o=d("halfPixelCenters",n,e,t);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],i,o)]}case"CropAndResize":{const s=d("image",n,e,t),a=d("boxes",n,e,t),i=d("boxInd",n,e,t),o=d("cropSize",n,e,t),u=d("method",n,e,t),c=d("extrapolationValue",n,e,t);return[r.image.cropAndResize(s,a,i,o,u,c)]}case"ImageProjectiveTransformV3":{const s=d("images",n,e,t),a=d("transforms",n,e,t),i=d("outputShape",n,e,t),o=d("fillValue",n,e,t),u=d("interpolation",n,e,t),c=d("fillMode",n,e,t);return[r.image.transform(s,a,u.toLowerCase(),c.toLowerCase(),o,i)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J6=(n,e,t,r=Ge)=>{switch(n.op){case"Equal":return[r.equal(d("a",n,e,t),d("b",n,e,t))];case"NotEqual":return[r.notEqual(d("a",n,e,t),d("b",n,e,t))];case"Greater":return[r.greater(d("a",n,e,t),d("b",n,e,t))];case"GreaterEqual":return[r.greaterEqual(d("a",n,e,t),d("b",n,e,t))];case"Less":return[r.less(d("a",n,e,t),d("b",n,e,t))];case"LessEqual":return[r.lessEqual(d("a",n,e,t),d("b",n,e,t))];case"LogicalAnd":return[r.logicalAnd(d("a",n,e,t),d("b",n,e,t))];case"LogicalNot":return[r.logicalNot(d("a",n,e,t))];case"LogicalOr":return[r.logicalOr(d("a",n,e,t),d("b",n,e,t))];case"Select":case"SelectV2":return[r.where(d("condition",n,e,t),d("a",n,e,t),d("b",n,e,t))];case"BitwiseAnd":return[r.bitwiseAnd(d("a",n,e,t),d("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z6=(n,e,t,r=Ge)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(d("a",n,e,t),d("b",n,e,t),d("transposeA",n,e,t),d("transposeB",n,e,t))];case"Einsum":return[r.einsum(d("equation",n,e,t),...d("tensors",n,e,t))];case"Transpose":return[r.transpose(d("x",n,e,t),d("perm",n,e,t))];case"_FusedMatMul":const[s,a]=d("fusedOps",n,e,t),i=s==="biasadd",o=a==="prelu",u=d("numArgs",n,e,t),c=d("leakyreluAlpha",n,e,t);if(i){if(o&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[f,p]=d("args",n,e,t);return[r.fused.matMul({a:d("a",n,e,t),b:d("b",n,e,t),transposeA:d("transposeA",n,e,t),transposeB:d("transposeB",n,e,t),bias:f,activation:a,preluActivationWeights:p,leakyreluAlpha:c})];case"MatrixBandPart":return[r.linalg.bandPart(d("a",n,e,t),d("numLower",n,e,t),d("numUpper",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q6=(n,e,t,r=Ge)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(d("x",n,e,t),d("axis",n,e,t),d("keepDims",n,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(d("x",n,e,t),d("mean",n,e,t),d("variance",n,e,t),d("offset",n,e,t),d("scale",n,e,t),d("epsilon",n,e,t))];case"FusedBatchNormV3":return[r.batchNorm(d("x",n,e,t),d("mean",n,e,t),d("variance",n,e,t),d("offset",n,e,t),d("scale",n,e,t),d("epsilon",n,e,t))];case"LRN":return[r.localResponseNormalization(d("x",n,e,t),d("radius",n,e,t),d("bias",n,e,t),d("alpha",n,e,t),d("beta",n,e,t))];case"Softmax":return[r.softmax(d("x",n,e,t))];case"LogSoftmax":return[r.logSoftmax(d("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e5=(n,e,t,r=Ge)=>{switch(n.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(d("paramsNestedSplits",n,e,t),d("paramsDenseValues",n,e,t),d("indices",n,e,t),d("outputRaggedRank",n,e,t));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(d("starts",n,e,t),d("limits",n,e,t),d("splits",n,e,t));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(d("shape",n,e,t),d("values",n,e,t),d("defaultValue",n,e,t),d("rowPartitionTensors",n,e,t),d("rowPartitionTypes",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t5=(n,e,t,r=Ge)=>{switch(n.op){case"Max":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.max(d("x",n,e,t),o,u)]}case"Mean":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.mean(d("x",n,e,t),o,u)]}case"Min":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.min(d("x",n,e,t),o,u)]}case"Sum":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.sum(d("x",n,e,t),o,u)]}case"All":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.all(d("x",n,e,t),o,u)]}case"Any":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.any(d("x",n,e,t),o,u)]}case"ArgMax":{const o=d("axis",n,e,t);return[r.argMax(d("x",n,e,t),o)]}case"ArgMin":{const o=d("axis",n,e,t);return[r.argMin(d("x",n,e,t),o)]}case"Prod":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.prod(d("x",n,e,t),o,u)]}case"Cumprod":{const o=d("axis",n,e,t),u=d("exclusive",n,e,t),c=d("reverse",n,e,t);return[r.cumprod(d("x",n,e,t),o,u,c)]}case"Cumsum":{const o=d("axis",n,e,t),u=d("exclusive",n,e,t),c=d("reverse",n,e,t);return[r.cumsum(d("x",n,e,t),o,u,c)]}case"Bincount":const s=d("x",n,e,t),a=d("weights",n,e,t),i=d("size",n,e,t);return[r.bincount(s,a,i)];case"DenseBincount":{const o=d("x",n,e,t),u=d("weights",n,e,t),c=d("size",n,e,t),f=d("binaryOutput",n,e,t);return[r.denseBincount(o,u,c,f)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n5=(n,e,t,r=Ge)=>{switch(n.op){case"ConcatV2":case"Concat":{const s=d("n",n,e,t),a=d("axis",n,e,t);let i=d("tensors",n,e,t);return i=i.slice(0,s),[r.concat(i,a)]}case"Gather":{const s=d("x",n,e,t),a=d("indices",n,e,t);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=d("axis",n,e,t),a=d("batchDims",n,e,t),i=d("x",n,e,t),o=d("indices",n,e,t);return[r.gather(i,r.cast(o,"int32"),s,a)]}case"Reverse":{const s=d("dims",n,e,t),a=[];for(let o=0;o<s.length;o++)s[o]&&a.push(o);const i=d("x",n,e,t);return[r.reverse(i,a)]}case"ReverseV2":{const s=d("axis",n,e,t),a=d("x",n,e,t);return[r.reverse(a,s)]}case"Slice":{const s=d("begin",n,e,t),a=d("size",n,e,t);return[r.slice(d("x",n,e,t),s,a)]}case"StridedSlice":{const s=d("begin",n,e,t),a=d("end",n,e,t),i=d("strides",n,e,t),o=d("beginMask",n,e,t),u=d("endMask",n,e,t),c=d("ellipsisMask",n,e,t),f=d("newAxisMask",n,e,t),p=d("shrinkAxisMask",n,e,t),g=d("x",n,e,t);return[r.stridedSlice(g,s,a,i,o,u,c,f,p)]}case"Pack":return me(()=>{const s=d("axis",n,e,t),a=d("tensors",n,e,t),i=a[0].shape,o=r.squeeze(a[0]).shape,u=a.map(c=>{const f=Jt(c.shape,i);if(!f&&!Jt(r.squeeze(c).shape,o))throw new Error("the input tensors shape does not match");return f?c:r.reshape(c,i)});return[r.stack(u,s)]});case"Unpack":{const s=d("axis",n,e,t),a=d("tensor",n,e,t);return r.unstack(a,s)}case"Tile":{const s=d("reps",n,e,t);return[r.tile(d("x",n,e,t),s)]}case"Split":case"SplitV":{const s=d("axis",n,e,t),a=d("numOrSizeSplits",n,e,t),i=d("x",n,e,t);return r.split(i,a,s)}case"ScatterNd":{const s=d("indices",n,e,t),a=d("values",n,e,t),i=d("shape",n,e,t);return[r.scatterND(s,a,i)]}case"GatherNd":{const s=d("x",n,e,t),a=d("indices",n,e,t);return[r.gatherND(s,a)]}case"SparseToDense":{const s=d("sparseIndices",n,e,t),a=d("outputShape",n,e,t),i=d("sparseValues",n,e,t),o=d("defaultValue",n,e,t);return[r.sparseToDense(s,i,a,i.dtype===o.dtype?o:r.cast(o,i.dtype))]}case"TensorScatterUpdate":{const s=d("indices",n,e,t),a=d("values",n,e,t),i=d("tensor",n,e,t);return[r.tensorScatterUpdate(i,s,a)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r5=(n,e,t,r=Ge)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:i,reverseIndexMap:o}=r.sparse.sparseFillEmptyRows(d("indices",n,e,t),d("values",n,e,t),d("denseShape",n,e,t),d("defaultValue",n,e,t));return[s,a,i,o]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(d("inputIndices",n,e,t),d("inputShape",n,e,t),d("newShape",n,e,t));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(d("data",n,e,t),d("indices",n,e,t),d("segmentIds",n,e,t))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(d("data",n,e,t),d("indices",n,e,t),d("segmentIds",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s5=(n,e,t,r=Ge)=>{switch(n.op){case"FFT":return[r.fft(d("x",n,e,t))];case"IFFT":return[r.ifft(d("x",n,e,t))];case"RFFT":return[r.rfft(d("x",n,e,t))];case"IRFFT":return[r.irfft(d("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a5=(n,e,t,r=Ge)=>{switch(n.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(d("input",n,e,t),d("pattern",n,e,t),d("rewrite",n,e,t),d("replaceGlobal",n,e,t))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(d("data",n,e,t),d("dataSplits",n,e,t),d("separator",n,e,t),d("nGramWidths",n,e,t),d("leftPad",n,e,t),d("rightPad",n,e,t),d("padWidth",n,e,t),d("preserveShortSequences",n,e,t));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:i}=r.string.stringSplit(d("input",n,e,t),d("delimiter",n,e,t),d("skipEmpty",n,e,t));return[s,a,i]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(d("input",n,e,t),d("numBuckets",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i5=(n,e,t,r=Ge)=>{switch(n.op){case"Cast":return[r.cast(d("x",n,e,t),d("dtype",n,e,t))];case"ExpandDims":{const s=d("axis",n,e,t);return[r.expandDims(d("x",n,e,t),s)]}case"Squeeze":{const s=d("axis",n,e,t);return[r.squeeze(d("x",n,e,t),s)]}case"Reshape":return[r.reshape(d("x",n,e,t),d("shape",n,e,t))];case"EnsureShape":return[r.ensureShape(d("x",n,e,t),d("shape",n,e,t))];case"MirrorPad":return[r.mirrorPad(d("x",n,e,t),d("padding",n,e,t),d("mode",n,e,t))];case"PadV2":case"Pad":return[r.pad(d("x",n,e,t),d("padding",n,e,t),d("constantValue",n,e,t))];case"SpaceToBatchND":{const s=d("blockShape",n,e,t),a=d("paddings",n,e,t);return[r.spaceToBatchND(d("x",n,e,t),s,a)]}case"BatchToSpaceND":{const s=d("blockShape",n,e,t),a=d("crops",n,e,t);return[r.batchToSpaceND(d("x",n,e,t),s,a)]}case"DepthToSpace":{const s=d("blockSize",n,e,t),a=d("dataFormat",n,e,t).toUpperCase();return[r.depthToSpace(d("x",n,e,t),s,a)]}case"BroadcastTo":return[r.broadcastTo(d("x",n,e,t),d("shape",n,e,t))];case"BroadcastArgs":return[r.broadcastArgs(d("s0",n,e,t),d("s1",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(n,e,t,r,s=me){const a=((i,o,u)=>{switch(i.category){case"arithmetic":return s(()=>R6(i,o,u));case"basic_math":return s(()=>L6(i,o,u));case"control":return V6(i,o,u);case"convolution":return s(()=>U6(i,o,u));case"creation":return s(()=>W6(i,o,u));case"dynamic":return K6(i,o,u);case"evaluation":return s(()=>G6(i,o,u));case"image":return s(()=>Y6(i,o,u));case"graph":return s(()=>H6(i,o,u));case"logical":return s(()=>J6(i,o,u));case"matrices":return s(()=>Z6(i,o,u));case"normalization":return s(()=>Q6(i,o,u));case"ragged":return s(()=>e5(i,o,u));case"reduction":return s(()=>t5(i,o,u));case"slice_join":return s(()=>n5(i,o,u));case"sparse":return s(()=>r5(i,o,u));case"spectral":return s(()=>s5(i,o,u));case"string":return s(()=>a5(i,o,u));case"transformation":return s(()=>i5(i,o,u));case"hash_table":return X6(i,o,u,r);case"custom":const c=Mu(i.op);if(c&&c.customExecutor)return c.customExecutor(new C6(i,o,u));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,e,t);return zn(a)?a.then(i=>[].concat(i)):[].concat(a)}class no{constructor(e={},t={},r={},s={},a){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const r=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro(n,e,t,r){const s=new Set,a=[];let i=null,o=null;const u=new Set,c=new Set(Object.keys(n).map(g=>ot(g)[0]));r=r||[];const f=new Set(r.map(g=>ot(g.name)[0])),p=[...e];for(;p.length>0;){const g=p.pop();if((Pn(g)||d5(g)||m5(g))&&i==null&&(i=g,o=i.children.map(v=>v.name).filter(v=>s.has(v))),s.add(g.name),t[g.name]==null&&!c.has(g.name)&&!f.has(g.name)){if(g.inputs.length===0){a.push(g.name);continue}g.inputs.forEach(v=>{u.has(v.name)||(u.add(v.name),p.push(v))})}}return{inputs:n,outputs:e,usedNodes:s,missingInputs:a,dynamicNode:i,syncInputs:o}}function o5(n,e){const{usedNodes:t,inputs:r}=e,s=Object.keys(r).map(E=>ot(E)[0]).map(E=>n.nodes[E]),a=n.initNodes||[],i=E=>t.has(typeof E=="string"?E:E.name);function o(E){return[...new Map(E.map(F=>[F.name,F])).values()]}const u=o([...s,...n.weights,...a]).filter(i),c=o([...u,...Object.values(n.nodes)]).filter(i),f=new Map(c.map(E=>[E.name,E])),p={};for(const E of c){p[E.name]=p[E.name]||0;for(const F of E.children)i(F)||(p[F.name]=Number.POSITIVE_INFINITY),p[F.name]=(p[F.name]||0)+1}const g=Object.entries(p).filter(([,E])=>E===0).map(([E])=>E),v=[...g];for(;g.length>0;){const E=g.pop(),F=f.get(E);for(const j of F.children.filter(i))--p[j.name]===0&&(v.push(j.name),g.push(j.name))}const S=v.map(E=>f.get(E)),k=u5(S,u);return c5(k,u),k}function u5(n,e){const t=new Map(n.map(i=>[i.name,i])),r=e.map(i=>i.name),s=new Set(r);for(;r.length>0;){const i=r.pop(),o=t.get(i);for(const u of o.children)!t.has(u.name)||s.has(u.name)||(s.add(u.name),r.push(u.name))}return n.filter(i=>s.has(i.name))}class vs extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function c5(n,e){const t=new Map(n.map((o,u)=>[o.name,u])),r=new Set(e.map(o=>o.name)),s=o=>r.has(typeof o=="string"?o:o.name),a=new Set(n.map(o=>o.name)),i=o=>a.has(typeof o=="string"?o:o.name);for(const o of n){for(const u of o.children.filter(i)){if(!t.has(u.name))throw new vs(`Child ${u.name} of node ${o.name} is unreachable.`);if(t.get(o.name)>t.get(u.name))throw new vs(`Node ${o.name} is scheduled to run after its child ${u.name}.`)}if(!s(o))for(const u of o.inputs){if(!t.has(u.name))throw new vs(`Input ${u.name} of node ${o.name} is unreachable.`);if(t.get(u.name)>t.get(o.name))throw new vs(`Node ${o.name} is scheduled to run before its input ${u.name}.`)}}}function l5(n){const e=new Map(n.map((o,u)=>[o.name,u])),t=Number.MAX_SAFE_INTEGER,r=n.map((o,u)=>Pn(o)?t:u),s=o=>{const u=r[e.get(o.name)];return u??-1},a=n.map((o,u)=>o.children.map(s).reduce((c,f)=>Math.max(c,f),r[u])),i=new Map;for(let o=0;o<n.length;++o){const u=a[o];if(u===t)continue;const c=n[o],f=n[u];i.has(f.name)||i.set(f.name,[]),i.get(f.name).push(c)}return i}const h5=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),f5=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),p5=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function Pn(n){return h5.has(n.op)}function d5(n){return f5.has(n.op)}function m5(n){return p5.has(n.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bs{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(r=>e[r].map(s=>s.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new Bs(e.functions[r],this)})}getCompilationKey(e,t){const r=e.map(a=>a.name).sort(),s=t.map(a=>a.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(e,t){const r=ro(e,t,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:i}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(s.length>0){const c=t.map(p=>p.name),f=Object.keys(e);throw new Error(`Cannot compute the outputs [${c}] from the provided inputs [${f}]. Missing the following inputs: [${s}]`)}const o=o5(this.graph,r),u=l5(o);return{orderedNodes:o,nodeLiveUntilMap:u}}cloneAndKeepTensor(e){if(e==null)return null;const t=e.clone();return jt(t),t}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,r])=>[t,this.cloneTensorList(r)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const s=r.map(g=>this.graph.nodes[ot(g)[0]]),a=t.map(g=>ot(g)[0]),i=new Set(a);let o=a.map(g=>this.graph.nodes[g]);o.length===0&&(o=this._outputs);const u=this.getCompilationKey(s,o);let c=this.compiledMap.get(u);c==null&&(c=this.compile(e,o),this.compiledMap.set(u,c));try{this.keepIntermediateTensors=be().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(g){this.keepIntermediateTensors=!1,console.warn(g.message)}const f={},p={};return me(()=>{const g=new no(this.weightMap,f,p,this.functionExecutorMap,this.parseNodeNameCache),v=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(F=>{const[j,W]=ot(F,g),B=[];B[W]=e[F],v[j]=B,this.keepIntermediateTensors&&(this.clonedTensorsMap[j]=this.cloneTensorList(B))});const S=this.getFrozenTensorIds(v),{orderedNodes:k,nodeLiveUntilMap:E}=c;for(const F of k){if(v[F.name])continue;const j=to(F,v,g,this._resourceManager);if(zn(j))throw new Error(`The execution of the op '${F.op}' returned a promise. Please use model.executeAsync() instead.`);v[F.name]=j,this.keepIntermediateTensors&&(this.clonedTensorsMap[F.name]=this.cloneTensorList(j)),this.checkTensorForDisposalWithNodeLiveUntilInfo(F,v,g,S,i,E.get(F.name))}return this.parent==null&&g.dispose(S),t.map(F=>Ue(F,v,g))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(s=>s.id)));return new Set(t)}checkTensorForDisposal(e,t,r,s,a,i,o){if(!(Pn(t)||i.has(e))){for(const u of r[e])u!=null&&(o[u.id]=(o[u.id]||0)+t.children.length);for(const u of t.inputs){if(Pn(u))continue;const c=Yi(u.name,r,s);if(c!=null)for(const f of c){if(!f||f.kept||a.has(f.id))continue;const p=o[f.id];p===1?(f.dispose(),delete o[f.id]):p!=null&&o[f.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,r,s,a,i){function o(u){return Pn(u)||a.has(u.name)}if(!(Pn(e)||i==null))for(const u of i){if(o(u))continue;const c=Yi(u.name,t,r);for(const f of c)!f||f.kept||s.has(f.id)||f.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,r=!1,s={},a={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=be().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(g){this.keepIntermediateTensors=!1,console.warn(g.message)}const i=new no(this.weightMap,s,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const o=await this.executeWithControlFlow(e,i,t,r),u=t.map(g=>Ue(g,o,i)),c=u.map(g=>g.id),f=Object.keys(e).map(g=>e[g].id),p=new Set([...c,...f,...this.weightIds]);return Object.values(o).forEach(g=>{g.forEach(v=>{v&&!v.isDisposed&&!p.has(v.id)&&v.dispose()})}),this.parent==null&&i.dispose(p),u}async executeFunctionAsync(e,t,r){const s=e.reduce((a,i,o)=>(a[this.inputs[o].name]=i,a),{});return this._executeAsync(s,this.outputNodes,!0,t,r)}async executeWithControlFlow(e,t,r,s){const a=Object.keys(e),i=a.map(B=>this.graph.nodes[ot(B)[0]]),o=r.map(B=>ot(B)[0]),u=new Set(o);let c=o.map(B=>this.graph.nodes[B]);c.length===0&&(c=this._outputs);const{usedNodes:f,missingInputs:p,dynamicNode:g,syncInputs:v}=ro(e,c,this.weightMap,this._initNodes),S=[...i,...this.graph.weights,...this._initNodes||[]].map(B=>({node:B,contexts:t.currentContext})),k=Object.assign({},this.weightMap);Object.keys(e).forEach(B=>{const[K,G]=ot(B),Q=[];Q[G]=e[B],k[K]=Q});const E={},F=this.getFrozenTensorIds(k),j={};for(;S.length>0;){const B=this.processStack(i,S,t,k,j,F,u,E,f);await Promise.all(B)}g==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const W=c.filter(B=>!Pn(B)&&!Ue(B.name,k,t)).map(B=>B.name);if(W.length>0){let B="";throw g!=null&&(B=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${v}]`),new Error(`Cannot compute the outputs [${W}] from the provided inputs [${a}]. Consider providing the following inputs: [${p}]. ${B}`)}return k}processStack(e,t,r,s,a,i,o,u,c){const f=[];for(;t.length>0;){const p=t.pop();r.currentContext=p.contexts;let g="";if(p.node.op==="Enter"&&d("isConstant",p.node,s,r)&&([g]=Gt(p.node.name,r)),s[p.node.name]==null){const v=to(p.node,s,r,this._resourceManager);g||([g]=Gt(p.node.name,r));const S=r.currentContext;zn(v)?f.push(v.then(k=>(s[g]=k,this.keepIntermediateTensors&&(this.clonedTensorsMap[g]=this.cloneTensorList(k)),r.currentContext=S,this.checkTensorForDisposal(g,p.node,s,r,i,o,u),this.processChildNodes(p.node,t,r,s,a,c),k))):(s[g]=v,this.keepIntermediateTensors&&(this.clonedTensorsMap[g]=this.cloneTensorList(v)),this.checkTensorForDisposal(g,p.node,s,r,i,o,u),this.processChildNodes(p.node,t,r,s,a,c))}else this.processChildNodes(p.node,t,r,s,a,c)}return f}processChildNodes(e,t,r,s,a,i){e.children.forEach(o=>{const[u]=Gt(o.name,r);a[u]||!i.has(o.name)||(o.op==="Merge"?o.inputNames.some(c=>!!Ue(c,s,r))&&(a[u]=!0,t.push({contexts:r.currentContext,node:o})):o.inputNames.every(c=>!!Ue(c,s,r))&&(a[u]=!0,t.push({contexts:r.currentContext,node:o})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const r=e[t],[s]=ot(t),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const i=a.attrParams.shape.value,o=i.length===r.shape.length&&r.shape.every((u,c)=>i[c]===-1||i[c]===u);_(o,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${i}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&_(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var t,r;const s={};for(const a in e){const i=(r=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||r===void 0?void 0:r[a];i!=null?s[i.name]=e[a]:s[a]=e[a]}return s}checkInputs(e){const t=Object.keys(e).filter(r=>{const[s]=ot(r);return this.graph.nodes[s]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var r,s;const a=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[t];return a!=null?a.name:t},{})}checkOutputs(e){e.forEach(t=>{const[r]=ot(t);if(!this.graph.nodes[r])throw new Error(`The output '${t}' is not found in the graph`)})}}class g5{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y5="?tfjs-format=file",b5="model.json";class w5{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},r=Pu){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=r,t==null&&(this.loadOptions={}),this.resourceManager=new g5}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return zn(e)?e.then(t=>this.loadSync(t)):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(r=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}this.signature=r,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const s=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new Bs(Ji.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(s),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=Ji.Instance.transformGraph(e.modelInitializer);this.initializer=new Bs(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const t=e instanceof Ae?[e]:e,r={};return t.forEach((s,a)=>r[this.structuredOutputKeys[a]]=s),r}return e}predict(e,t){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,t){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var t;if(!(e instanceof Ae)&&!Array.isArray(e)){const a=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(a!=null)for(const i in a){const o=a[i];o.resourceId!=null&&(e[i]=this.resourceIdToCapturedInput[o.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((a,i)=>{var o,u,c;const f=(c=(u=(o=this.signature)===null||o===void 0?void 0:o.inputs)===null||u===void 0?void 0:u[i])===null||c===void 0?void 0:c.resourceId;return f!=null?a[i]=this.resourceIdToCapturedInput[f]:a[i]=e[s++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const t=this.initializerSignature.outputs,r=Object.keys(t);for(let s=0;s<r.length;s++){const a=r[s],i=t[a];this.resourceIdToCapturedInput[i.resourceId]=e[s]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=this.executor.execute(e,t);return r.length>1?r:r[0]}async executeAsync(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=await this.executor.executeAsync(e,t);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,r)=>(t[r]=[e[r]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Oe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function Uu(n,e={},t=Pu){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof n=="string"&&(n=v5(n));const r=new w5(n,e,t);return await r.load(),r}function v5(n){return n.endsWith("/")||(n=n+"/"),`${n}${b5}${y5}`}/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var At=function(){return At=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n},At.apply(this,arguments)};function Xt(n,e,t,r){return new(t||(t=Promise))(function(s,a){function i(c){try{u(r.next(c))}catch(f){a(f)}}function o(c){try{u(r.throw(c))}catch(f){a(f)}}function u(c){var f;c.done?s(c.value):(f=c.value,f instanceof t?f:new t(function(p){p(f)})).then(i,o)}u((r=r.apply(n,e||[])).next())})}function Yt(n,e){var t,r,s,a,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(u){return function(c){return function(f){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return i.label++,{value:f[1],done:!1};case 5:i.label++,r=f[1],f=[0];continue;case 7:f=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!((s=s.length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){i=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){i.label=f[1];break}if(f[0]===6&&i.label<s[1]){i.label=s[1],s=f;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(f);break}s[2]&&i.ops.pop(),i.trys.pop();continue}f=e.call(n,i)}catch(p){f=[6,p],r=0}finally{t=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,c])}}}function pn(n){var e=n.map(function(t){return t[0]});return e.push(n[n.length-1][1]),e}var Wu={lips:pn([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:pn([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:pn([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:pn([[474,475],[475,476],[476,477],[477,474]]),rightEye:pn([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:pn([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:pn([[469,470],[470,471],[471,472],[472,469]]),faceOval:pn([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},N5=[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]],T5=Object.entries(Wu).map(function(n){var e=n[0];return n[1].map(function(t){return[t,e]})}).flat(),Ku=new Map(T5);function si(n){for(var e={locationData:{relativeKeypoints:[]}},t=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,s=Number.MAX_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER,i=0;i<n.length;++i){var o=n[i];t=Math.min(t,o.x),r=Math.max(r,o.x),s=Math.min(s,o.y),a=Math.max(a,o.y),e.locationData.relativeKeypoints.push({x:o.x,y:o.y})}return e.locationData.relativeBoundingBox={xMin:t,yMin:s,xMax:r,yMax:a,width:r-t,height:a-s},e}var pa={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},S5=function(){function n(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new i1.FaceMesh({locateFile:function(r,s){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceMeshSolution.setOptions({refineLandmarks:e.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:e.maxFaces}),this.faceMeshSolution.onResults(function(r){if(t.height=r.image.height,t.width=r.image.width,t.faces=[],r.multiFaceLandmarks!==null)for(var s=r.multiFaceLandmarks,a=0;a<s.length;a++){var i=t.translateOutput(s[a]);t.faces.push({keypoints:i,box:si(i).locationData.relativeBoundingBox})}})}return n.prototype.translateOutput=function(e){var t=this;return e.map(function(r,s){var a={x:r.x*t.width,y:r.y*t.height,z:r.z*t.width},i=Ku.get(s);return i!=null&&(a.name=i),a})},n.prototype.estimateFaces=function(e,t){return Xt(this,void 0,void 0,function(){var r,s;return Yt(this,function(a){switch(a.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Ae?(s=ImageData.bind,[4,Bu(e)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,a.label=3;case 3:return e=r,[4,this.faceMeshSolution.send({image:e})];case 4:return a.sent(),[2,this.faces]}})})},n.prototype.dispose=function(){this.faceMeshSolution.close()},n.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.faceMeshSolution.initialize()},n}();function x5(n){return Xt(this,void 0,void 0,function(){var e,t;return Yt(this,function(r){switch(r.label){case 0:return e=function(s){if(s==null)return At({},pa);var a=At({},s);return a.runtime="mediapipe",a.maxFaces==null&&(a.maxFaces=pa.maxFaces),a.refineLandmarks==null&&(a.refineLandmarks=pa.refineLandmarks),a}(n),[4,(t=new S5(e)).initialize()];case 1:return r.sent(),[2,t]}})})}var da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E5={};(function(){var n;function e(l){var y=0;return function(){return y<l.length?{done:!1,value:l[y++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,y,w){return l==Array.prototype||l==Object.prototype||(l[y]=w.value),l},r=function(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof da=="object"&&da];for(var y=0;y<l.length;++y){var w=l[y];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}(this);function s(l,y){if(y)e:{var w=r;l=l.split(".");for(var N=0;N<l.length-1;N++){var $=l[N];if(!($ in w))break e;w=w[$]}(y=y(N=w[l=l[l.length-1]]))!=N&&y!=null&&t(w,l,{configurable:!0,writable:!0,value:y})}}function a(l){return(l={next:l})[Symbol.iterator]=function(){return this},l}function i(l){var y=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return y?y.call(l):{next:e(l)}}function o(l){if(!(l instanceof Array)){l=i(l);for(var y,w=[];!(y=l.next()).done;)w.push(y.value);l=w}return l}s("Symbol",function(l){function y($,x){this.g=$,t(this,"description",{configurable:!0,writable:!0,value:x})}if(l)return l;y.prototype.toString=function(){return this.g};var w="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",N=0;return function $(x){if(this instanceof $)throw new TypeError("Symbol is not a constructor");return new y(w+(x||"")+"_"+N++,x)}}),s("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var y="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),w=0;w<y.length;w++){var N=r[y[w]];typeof N=="function"&&typeof N.prototype[l]!="function"&&t(N.prototype,l,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return l});var u,c=typeof Object.create=="function"?Object.create:function(l){function y(){}return y.prototype=l,new y};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var f;e:{var p={};try{p.__proto__={a:!0},f=p.a;break e}catch{}f=!1}u=f?function(l,y){if(l.__proto__=y,l.__proto__!==y)throw new TypeError(l+" is not extensible");return l}:null}var g=u;function v(l,y){if(l.prototype=c(y.prototype),l.prototype.constructor=l,g)g(l,y);else for(var w in y)if(w!="prototype")if(Object.defineProperties){var N=Object.getOwnPropertyDescriptor(y,w);N&&Object.defineProperty(l,w,N)}else l[w]=y[w];l.na=y.prototype}function S(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function k(l){if(l.l)throw new TypeError("Generator is already running");l.l=!0}function E(l,y){l.j={da:y,ea:!0},l.g=l.o||l.u}function F(l,y,w){return l.g=w,{value:y}}function j(l){this.g=new S,this.h=l}function W(l,y,w,N){try{var $=y.call(l.g.i,w);if(!($ instanceof Object))throw new TypeError("Iterator result "+$+" is not an object");if(!$.done)return l.g.l=!1,$;var x=$.value}catch(A){return l.g.i=null,E(l.g,A),B(l)}return l.g.i=null,N.call(l.g,x),B(l)}function B(l){for(;l.g.g;)try{var y=l.h(l.g);if(y)return l.g.l=!1,{value:y.value,done:!1}}catch(w){l.g.h=void 0,E(l.g,w)}if(l.g.l=!1,l.g.j){if(y=l.g.j,l.g.j=null,y.ea)throw y.da;return{value:y.return,done:!0}}return{value:void 0,done:!0}}function K(l){this.next=function(y){return k(l.g),l.g.i?y=W(l,l.g.i.next,y,l.g.s):(l.g.s(y),y=B(l)),y},this.throw=function(y){return k(l.g),l.g.i?y=W(l,l.g.i.throw,y,l.g.s):(E(l.g,y),y=B(l)),y},this.return=function(y){return function(w,N){k(w.g);var $=w.g.i;return $?W(w,"return"in $?$.return:function(x){return{value:x,done:!0}},N,w.g.return):(w.g.return(N),B(w))}(l,y)},this[Symbol.iterator]=function(){return this}}function G(l){return function(y){function w($){return y.next($)}function N($){return y.throw($)}return new Promise(function($,x){(function A(D){D.done?$(D.value):Promise.resolve(D.value).then(w,N).then(A,x)})(y.next())})}(new K(new j(l)))}S.prototype.s=function(l){this.h=l},S.prototype.return=function(l){this.j={return:l},this.g=this.u},s("Promise",function(l){function y(A){this.h=0,this.i=void 0,this.g=[],this.s=!1;var D=this.j();try{A(D.resolve,D.reject)}catch(P){D.reject(P)}}function w(){this.g=null}function N(A){return A instanceof y?A:new y(function(D){D(A)})}if(l)return l;w.prototype.h=function(A){if(this.g==null){this.g=[];var D=this;this.i(function(){D.l()})}this.g.push(A)};var $=r.setTimeout;w.prototype.i=function(A){$(A,0)},w.prototype.l=function(){for(;this.g&&this.g.length;){var A=this.g;this.g=[];for(var D=0;D<A.length;++D){var P=A[D];A[D]=null;try{P()}catch(z){this.j(z)}}}this.g=null},w.prototype.j=function(A){this.i(function(){throw A})},y.prototype.j=function(){function A(z){return function(H){P||(P=!0,z.call(D,H))}}var D=this,P=!1;return{resolve:A(this.D),reject:A(this.l)}},y.prototype.D=function(A){if(A===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(A instanceof y)this.H(A);else{e:switch(typeof A){case"object":var D=A!=null;break e;case"function":D=!0;break e;default:D=!1}D?this.A(A):this.o(A)}},y.prototype.A=function(A){var D=void 0;try{D=A.then}catch(P){return void this.l(P)}typeof D=="function"?this.I(D,A):this.o(A)},y.prototype.l=function(A){this.u(2,A)},y.prototype.o=function(A){this.u(1,A)},y.prototype.u=function(A,D){if(this.h!=0)throw Error("Cannot settle("+A+", "+D+"): Promise already settled in state"+this.h);this.h=A,this.i=D,this.h===2&&this.G(),this.B()},y.prototype.G=function(){var A=this;$(function(){if(A.C()){var D=r.console;D!==void 0&&D.error(A.i)}},1)},y.prototype.C=function(){if(this.s)return!1;var A=r.CustomEvent,D=r.Event,P=r.dispatchEvent;return P===void 0||(typeof A=="function"?A=new A("unhandledrejection",{cancelable:!0}):typeof D=="function"?A=new D("unhandledrejection",{cancelable:!0}):(A=r.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,A),A.promise=this,A.reason=this.i,P(A))},y.prototype.B=function(){if(this.g!=null){for(var A=0;A<this.g.length;++A)x.h(this.g[A]);this.g=null}};var x=new w;return y.prototype.H=function(A){var D=this.j();A.M(D.resolve,D.reject)},y.prototype.I=function(A,D){var P=this.j();try{A.call(D,P.resolve,P.reject)}catch(z){P.reject(z)}},y.prototype.then=function(A,D){function P(Z,ee){return typeof Z=="function"?function(ce){try{z(Z(ce))}catch(he){H(he)}}:ee}var z,H,Y=new y(function(Z,ee){z=Z,H=ee});return this.M(P(A,z),P(D,H)),Y},y.prototype.catch=function(A){return this.then(void 0,A)},y.prototype.M=function(A,D){function P(){switch(z.h){case 1:A(z.i);break;case 2:D(z.i);break;default:throw Error("Unexpected state: "+z.h)}}var z=this;this.g==null?x.h(P):this.g.push(P),this.s=!0},y.resolve=N,y.reject=function(A){return new y(function(D,P){P(A)})},y.race=function(A){return new y(function(D,P){for(var z=i(A),H=z.next();!H.done;H=z.next())N(H.value).M(D,P)})},y.all=function(A){var D=i(A),P=D.next();return P.done?N([]):new y(function(z,H){function Y(ce){return function(he){Z[ce]=he,--ee==0&&z(Z)}}var Z=[],ee=0;do Z.push(void 0),ee++,N(P.value).M(Y(Z.length-1),H),P=D.next();while(!P.done)})},y});var Q=typeof Object.assign=="function"?Object.assign:function(l,y){for(var w=1;w<arguments.length;w++){var N=arguments[w];if(N)for(var $ in N)Object.prototype.hasOwnProperty.call(N,$)&&(l[$]=N[$])}return l};s("Object.assign",function(l){return l||Q}),s("Object.is",function(l){return l||function(y,w){return y===w?y!==0||1/y==1/w:y!=y&&w!=w}}),s("Array.prototype.includes",function(l){return l||function(y,w){var N=this;N instanceof String&&(N=String(N));var $=N.length;for(0>(w=w||0)&&(w=Math.max(w+$,0));w<$;w++){var x=N[w];if(x===y||Object.is(x,y))return!0}return!1}}),s("String.prototype.includes",function(l){return l||function(y,w){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(y instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(y,w||0)!==-1}}),s("Array.prototype.keys",function(l){return l||function(){return function(y,w){y instanceof String&&(y+="");var N=0,$=!1,x={next:function(){if(!$&&N<y.length){var A=N++;return{value:w(A,y[A]),done:!1}}return $=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}(this,function(y){return y})}});var re=this||self;function q(l,y){l=l.split(".");var w,N=re;for((l[0]in N)||N.execScript===void 0||N.execScript("var "+l[0]);l.length&&(w=l.shift());)l.length||y===void 0?N=N[w]&&N[w]!==Object.prototype[w]?N[w]:N[w]={}:N[w]=y}function te(){throw Error("Invalid UTF8")}function ue(l,y){return y=String.fromCharCode.apply(null,y),l==null?y:l+y}var Ne,ie,ke=typeof TextDecoder<"u",Pe=typeof TextEncoder<"u",He={},ze=null;function xt(l){var y;y===void 0&&(y=0),Sn(),y=He[y];for(var w=Array(Math.floor(l.length/3)),N=y[64]||"",$=0,x=0;$<l.length-2;$+=3){var A=l[$],D=l[$+1],P=l[$+2],z=y[A>>2];A=y[(3&A)<<4|D>>4],D=y[(15&D)<<2|P>>6],P=y[63&P],w[x++]=z+A+D+P}switch(z=0,P=N,l.length-$){case 2:P=y[(15&(z=l[$+1]))<<2]||N;case 1:l=l[$],w[x]=y[l>>2]+y[(3&l)<<4|z>>4]+P+N}return w.join("")}function dt(l){var y=l.length,w=3*y/4;w%3?w=Math.floor(w):"=.".indexOf(l[y-1])!=-1&&(w="=.".indexOf(l[y-2])!=-1?w-2:w-1);var N=new Uint8Array(w),$=0;return function(x,A){function D(ee){for(;P<x.length;){var ce=x.charAt(P++),he=ze[ce];if(he!=null)return he;if(!/^[\s\xa0]*$/.test(ce))throw Error("Unknown base64 encoding at char: "+ce)}return ee}Sn();for(var P=0;;){var z=D(-1),H=D(0),Y=D(64),Z=D(64);if(Z===64&&z===-1)break;A(z<<2|H>>4),Y!=64&&(A(H<<4&240|Y>>2),Z!=64&&A(Y<<6&192|Z))}}(l,function(x){N[$++]=x}),$!==w?N.subarray(0,$):N}function Sn(){if(!ze){ze={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),y=["+/=","+/","-_=","-_.","-_"],w=0;5>w;w++){var N=l.concat(y[w].split(""));He[w]=N;for(var $=0;$<N.length;$++){var x=N[$];ze[x]===void 0&&(ze[x]=$)}}}}var Ft,Zr=typeof Uint8Array=="function";function gr(l){return Zr&&l!=null&&l instanceof Uint8Array}function Qr(l){if(this.L=l,l!==null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}var es=typeof Uint8Array.prototype.slice=="function",Ct=0;function yr(l,y){return Error("Invalid wire type: "+l+" (at position "+y+")")}function Jn(){return Error("Failed to read varint, encoding is invalid.")}function mt(l,y){y=(y=y===void 0?{}:y).v!==void 0&&y.v,this.h=null,this.g=this.i=this.j=0,this.v=y,l&&gt(this,l)}function gt(l,y){l.h=function(w,N){if(w.constructor===Uint8Array)return w;if(w.constructor===ArrayBuffer)return new Uint8Array(w);if(w.constructor===Array)return new Uint8Array(w);if(w.constructor===String)return dt(w);if(w.constructor===Qr)return!N&&(N=w.L)&&N.constructor===Uint8Array?N:(N=(N=w.L)==null||gr(N)?N:typeof N=="string"?dt(N):null,(w=w.L=N)?new Uint8Array(w):Ft||(Ft=new Uint8Array(0)));if(w instanceof Uint8Array)return new Uint8Array(w.buffer,w.byteOffset,w.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(y,l.v),l.j=0,l.i=l.h.length,l.g=l.j}function Ce(l){if(l.g>l.i)throw Error("Tried to read past the end of the data "+l.g+" > "+l.i)}function on(l){var y=l.h,w=y[l.g],N=127&w;if(128>w)return l.g+=1,Ce(l),N;if(N|=(127&(w=y[l.g+1]))<<7,128>w)return l.g+=2,Ce(l),N;if(N|=(127&(w=y[l.g+2]))<<14,128>w)return l.g+=3,Ce(l),N;if(N|=(127&(w=y[l.g+3]))<<21,128>w)return l.g+=4,Ce(l),N;if(w=y[l.g+4],l.g+=5,N|=(15&w)<<28,128>w)return Ce(l),N;if(128<=y[l.g++]&&128<=y[l.g++]&&128<=y[l.g++]&&128<=y[l.g++]&&128<=y[l.g++])throw Jn();return Ce(l),N}mt.prototype.reset=function(){this.g=this.j};var xn=[];function Zn(){this.g=[]}function yt(l,y){for(;127<y;)l.g.push(127&y|128),y>>>=7;l.g.push(y)}function Et(l){var y={},w=y.W!==void 0&&y.W;this.l={v:y.v!==void 0&&y.v},this.W=w,y=this.l,xn.length?(w=xn.pop(),y&&(w.v=y.v),l&&gt(w,l),l=w):l=new mt(l,y),this.g=l,this.j=this.g.g,this.h=this.i=-1}function un(l){var y=l.g;if(y.g==y.i)return!1;l.j=l.g.g;var w=on(l.g)>>>0;if(y=w>>>3,!(0<=(w&=7)&&5>=w))throw yr(w,l.j);if(1>y)throw Error("Invalid field number: "+y+" (at position "+l.j+")");return l.i=y,l.h=w,!0}function nt(l){switch(l.h){case 0:if(l.h!=0)nt(l);else e:{for(var y=(l=l.g).g,w=y+10;y<w;)if(!(128&l.h[y++])){l.g=y,Ce(l);break e}throw Jn()}break;case 1:(l=l.g).g+=8,Ce(l);break;case 2:l.h!=2?nt(l):(y=on(l.g)>>>0,(l=l.g).g+=y,Ce(l));break;case 5:(l=l.g).g+=4,Ce(l);break;case 3:for(y=l.i;;){if(!un(l))throw Error("Unmatched start-group tag: stream EOF");if(l.h==4){if(l.i!=y)throw Error("Unmatched end-group tag");break}nt(l)}break;default:throw yr(l.h,l.j)}}Zn.prototype.length=function(){return this.g.length},Zn.prototype.end=function(){var l=this.g;return this.g=[],l},Et.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var kt=[];function Qn(){this.i=[],this.h=0,this.g=new Zn}function Be(l,y){y.length!==0&&(l.i.push(y),l.h+=y.length)}var En=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function br(l,y){Object.isFrozen(l)||(En?l[En]|=y:l.N!==void 0?l.N|=y:Object.defineProperties(l,{N:{value:y,configurable:!0,writable:!0,enumerable:!1}}))}function wr(l){var y;return(y=En?l[En]:l.N)==null?0:y}function Ut(l){return br(l,1),l}function bt(l){return!!Array.isArray(l)&&!!(2&wr(l))}function kn(l){if(!Array.isArray(l))throw Error("cannot mark non-array as immutable");br(l,2)}function rt(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var _n=Object.freeze(Ut([]));function vr(l){if(bt(l.m))throw Error("Cannot mutate an immutable Message")}var Nr,ts=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function ns(l){return{value:l,configurable:!1,writable:!1,enumerable:!1}}function qe(l,y,w){return y===-1?null:y>=l.i?l.g?l.g[y]:void 0:w!==void 0&&w&&l.g&&(w=l.g[y])!=null?w:l.m[y+l.h]}function Re(l,y,w,N){N=N!==void 0&&N,vr(l),y<l.i&&!N?l.m[y+l.h]=w:(l.g||(l.g=l.m[l.i+l.h]={}))[y]=w}function Le(l,y,w,N){w=w===void 0||w;var $=qe(l,y,N=N!==void 0&&N);return $==null&&($=_n),bt(l.m)?w&&(kn($),Object.freeze($)):($===_n||bt($))&&Re(l,y,$=Ut($.slice()),N),$}function Ze(l,y,w){return(l=(l=qe(l,y))==null?l:+l)==null?w===void 0?0:w:l}function $n(l,y,w,N){l.j||(l.j={});var $=bt(l.m),x=l.j[w];if(!x){N=Le(l,w,!0,N!==void 0&&N),x=[],$=$||bt(N);for(var A=0;A<N.length;A++)x[A]=new y(N[A]),$&&kn(x[A].m);$&&(kn(x),Object.freeze(x)),l.j[w]=x}return x}function Ee(l,y,w,N,$){var x=x!==void 0&&x;return vr(l),x=$n(l,w,y,x),w=N||new w,l=Le(l,y),$!=null?(x.splice($,0,w),l.splice($,0,w.m)):(x.push(w),l.push(w.m)),w}function In(l,y){return(l=qe(l,y))==null?0:l}function Tr(l,y){return(l=qe(l,y))==null?"":l}function Rt(l){var y=rs;return ge(l,y=y===void 0?er:y)}function ut(l,y){if(l!=null){if(Array.isArray(l))l=ge(l,y);else if(rt(l)){var w,N={};for(w in l)N[w]=ut(l[w],y);l=N}else l=y(l);return l}}function ge(l,y){for(var w=l.slice(),N=0;N<w.length;N++)w[N]=ut(w[N],y);return Array.isArray(l)&&1&wr(l)&&Ut(w),w}function rs(l){return l&&typeof l=="object"&&l.toJSON?l.toJSON():(l=function(y){switch(typeof y){case"number":return isFinite(y)?y:String(y);case"object":if(y&&!Array.isArray(y)){if(gr(y))return xt(y);if(y instanceof Qr){var w=y.L;return w=w==null||typeof w=="string"?w:Zr&&w instanceof Uint8Array?xt(w):null,(y.L=w)||""}}}return y}(l),Array.isArray(l)?Rt(l):l)}function er(l){return gr(l)?new Uint8Array(l):l}function An(l,y,w){l||(l=Nr),Nr=null;var N=this.constructor.h;if(l||(l=N?[N]:[]),this.h=(N?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=l,l=(N=this.m.length)-1,N&&rt(N=this.m[l])?(this.i=l-this.h,this.g=N):y!==void 0&&-1<y?(this.i=Math.max(y,l+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,w)for(y=0;y<w.length;y++)if((l=w[y])<this.i)l+=this.h,(N=this.m[l])?Array.isArray(N)&&Ut(N):this.m[l]=_n;else{var $=(N=this.g||(this.g=this.m[this.i+this.h]={}))[l];$?Array.isArray($)&&Ut($):N[l]=_n}}function On(){An.apply(this,arguments)}if(An.prototype.toJSON=function(){return Rt(this.m)},An.prototype.toString=function(){return this.m.toString()},v(On,An),ts){var Lt={};Object.defineProperties(On,(Lt[Symbol.hasInstance]=ns(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Lt))}function tr(l,y,w){if(w){var N,$={};for(N in w){var x=w[N],A=x.ha;A||($.F=x.la||x.fa.P,x.aa?($.U=as(x.aa),A=function(D){return function(P,z,H){return D.F(P,z,H,D.U)}}($)):x.ca?($.T=nr(x.X.g,x.ca),A=function(D){return function(P,z,H){return D.F(P,z,H,D.T)}}($)):A=$.F,x.ha=A),A(y,l,x.X),$={F:$.F,U:$.U,T:$.T}}}(function(D,P){if(P=P.ba){Be(D,D.g.end());for(var z=0;z<P.length;z++)Be(D,P[z])}})(y,l)}var ct=Symbol();function Pt(l,y,w){return l[ct]||(l[ct]=function(N,$){return y(N,$,w)})}function ss(l){var y=l[ct];if(!y){var w=ls(l);y=function(N,$){return Sr(N,$,w)},l[ct]=y}return y}function Xs(l){var y=function($){var x=$.aa;return x?ss(x):(x=$.ka)?Pt($.X.g,x,$.ca):void 0}(l),w=l.X,N=l.fa.O;return y?function($,x){return N($,x,w,y)}:function($,x){return N($,x,w)}}function Ve(l,y,w,N,$,x){var A=0;for((l=l()).length&&typeof l[0]!="number"&&(w(y,l[0]),A++);A<l.length;){w=l[A++];for(var D=A+1;D<l.length&&typeof l[D]!="number";)D++;var P=l[A++];switch(D-=A){case 0:N(y,w,P);break;case 1:N(y,w,P,l[A++]);break;case 2:$(y,w,P,l[A++],l[A++]);break;case 3:D=l[A++];var z=l[A++],H=l[A++];Array.isArray(H)?$(y,w,P,D,z,H):x(y,w,P,D,z,H);break;case 4:x(y,w,P,l[A++],l[A++],l[A++],l[A++]);break;default:throw Error("unexpected number of binary field arguments: "+D)}}return y}var Bt=Symbol();function as(l){var y=l[Bt];if(!y){var w=cs(l);y=function(N,$){return Er(N,$,w)},l[Bt]=y}return y}function nr(l,y){var w=l[Bt];return w||(w=function(N,$){return tr(N,$,y)},l[Bt]=w),w}var is=Symbol();function cn(l,y){l.push(y)}function Ys(l,y,w){l.push(y,w.P)}function os(l,y,w,N,$){var x=as($),A=w.P;l.push(y,function(D,P,z){return A(D,P,z,N,x)})}function us(l,y,w,N,$,x){var A=nr(N,x),D=w.P;l.push(y,function(P,z,H){return D(P,z,H,N,A)})}function cs(l){var y=l[is];return y||Ve(l,l[is]=[],cn,Ys,os,us)}var rr=Symbol();function Wt(l,y){l[0]=y}function Js(l,y,w,N){var $=w.O;l[y]=N?function(x,A,D){return $(x,A,D,N)}:$}function Zs(l,y,w,N,$,x){var A=w.O,D=ss($);l[y]=function(P,z,H){return A(P,z,H,N,D,x)}}function sr(l,y,w,N,$,x,A){var D=w.O,P=Pt(N,$,x);l[y]=function(z,H,Y){return D(z,H,Y,N,P,A)}}function ls(l){var y=l[rr];return y||Ve(l,l[rr]={},Wt,Js,Zs,sr)}function Sr(l,y,w){for(;un(y)&&y.h!=4;){var N=y.i,$=w[N];if(!$){var x=w[0];x&&(x=x[N])&&($=w[N]=Xs(x))}if(!($&&$(y,l,N)||($=y,N=l,x=$.j,nt($),$.W))){var A=$.g.h;$=x===($=$.g.g)?Ft||(Ft=new Uint8Array(0)):es?A.slice(x,$):new Uint8Array(A.subarray(x,$)),(x=N.ba)?x.push($):N.ba=[$]}}return l}function xr(l,y,w){if(kt.length){var N=kt.pop();l&&(gt(N.g,l),N.i=-1,N.h=-1),l=N}else l=new Et(l);try{return Sr(new y,l,ls(w))}finally{(y=l.g).h=null,y.j=0,y.i=0,y.g=0,y.v=!1,l.i=-1,l.h=-1,100>kt.length&&kt.push(l)}}function Er(l,y,w){for(var N=w.length,$=N%2==1,x=$?1:0;x<N;x+=2)(0,w[x+1])(y,l,w[x]);tr(l,y,$?w[0]:void 0)}function Dn(l,y){var w=new Qn;Er(l,w,cs(y)),Be(w,w.g.end()),l=new Uint8Array(w.h);for(var N=(y=w.i).length,$=0,x=0;x<N;x++){var A=y[x];l.set(A,$),$+=A.length}return w.i=[l],l}function ln(l,y){return{O:l,P:y}}var lt=ln(function(l,y,w){if(l.h!==5)return!1;var N=(l=l.g).h[l.g],$=l.h[l.g+1],x=l.h[l.g+2],A=l.h[l.g+3];return l.g+=4,Ce(l),l=2*(($=(N<<0|$<<8|x<<16|A<<24)>>>0)>>31)+1,N=$>>>23&255,$&=8388607,Re(y,w,N==255?$?NaN:1/0*l:N==0?l*Math.pow(2,-149)*$:l*Math.pow(2,N-150)*($+Math.pow(2,23))),!0},function(l,y,w){if((y=qe(y,w))!=null){yt(l.g,8*w+5),l=l.g;var N=y;(N=(w=0>N?1:0)?-N:N)===0?0<1/N?Ct=0:Ct=2147483648:isNaN(N)?Ct=2147483647:34028234663852886e22<N?Ct=(w<<31|2139095040)>>>0:11754943508222875e-54>N?(N=Math.round(N/Math.pow(2,-149)),Ct=(w<<31|N)>>>0):(y=Math.floor(Math.log(N)/Math.LN2),N*=Math.pow(2,-y),16777216<=(N=Math.round(8388608*N))&&++y,Ct=(w<<31|y+127<<23|8388607&N)>>>0),w=Ct,l.g.push(w>>>0&255),l.g.push(w>>>8&255),l.g.push(w>>>16&255),l.g.push(w>>>24&255)}}),Qs=ln(function(l,y,w){if(l.h!==0)return!1;for(var N=l.g,$=128,x=0,A=l=0;4>A&&128<=$;A++)$=N.h[N.g++],Ce(N),x|=(127&$)<<7*A;if(128<=$&&($=N.h[N.g++],Ce(N),x|=(127&$)<<28,l|=(127&$)>>4),128<=$)for(A=0;5>A&&128<=$;A++)$=N.h[N.g++],Ce(N),l|=(127&$)<<7*A+3;if(!(128>$))throw Jn();return N=x>>>0,(l=2147483648&($=l>>>0))&&($=~$>>>0,(N=1+~N>>>0)==0&&($=$+1>>>0)),N=4294967296*$+(N>>>0),Re(y,w,l?-N:N),!0},function(l,y,w){if((y=qe(y,w))!=null&&y!=null){yt(l.g,8*w),l=l.g;var N=y;for(w=0>N,y=(N=Math.abs(N))>>>0,N=Math.floor((N-y)/4294967296),N>>>=0,w&&(N=~N>>>0,4294967295<(y=1+(~y>>>0))&&(y=0,4294967295<++N&&(N=0))),w=Ct=y,y=N;0<y||127<w;)l.g.push(127&w|128),w=(w>>>7|y<<25)>>>0,y>>>=7;l.g.push(w)}}),ea=ln(function(l,y,w){return l.h===0&&(Re(y,w,on(l.g)),!0)},function(l,y,w){if((y=qe(y,w))!=null&&y!=null)if(yt(l.g,8*w),l=l.g,0<=(w=y))yt(l,w);else{for(y=0;9>y;y++)l.g.push(127&w|128),w>>=7;l.g.push(1)}}),hs=ln(function(l,y,w){if(l.h!==2)return!1;var N,$=on(l.g)>>>0,x=(l=l.g).g;if(l.g+=$,Ce(l),l=l.h,ke)(N=Ne)||(N=Ne=new TextDecoder("utf-8",{fatal:!0})),N=N.decode(l.subarray(x,x+$));else{$=x+$;for(var A,D,P,z=[],H=null;x<$;)128>(A=l[x++])?z.push(A):224>A?x>=$?te():(D=l[x++],194>A||(192&D)!=128?(x--,te()):z.push((31&A)<<6|63&D)):240>A?x>=$-1?te():(192&(D=l[x++]))!=128||A===224&&160>D||A===237&&160<=D||(192&(N=l[x++]))!=128?(x--,te()):z.push((15&A)<<12|(63&D)<<6|63&N):244>=A?x>=$-2?te():(192&(D=l[x++]))!=128||D-144+(A<<28)>>30||(192&(N=l[x++]))!=128||(192&(P=l[x++]))!=128?(x--,te()):(A=(7&A)<<18|(63&D)<<12|(63&N)<<6|63&P,A-=65536,z.push(55296+(A>>10&1023),56320+(1023&A))):te(),8192<=z.length&&(H=ue(H,z),z.length=0);N=ue(H,z)}return Re(y,w,N),!0},function(l,y,w){if((y=qe(y,w))!=null){var N=!1;if(N=N!==void 0&&N,Pe){if(N&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(y))throw Error("Found an unpaired surrogate");y=(ie||(ie=new TextEncoder)).encode(y)}else{for(var $=0,x=new Uint8Array(3*y.length),A=0;A<y.length;A++){var D=y.charCodeAt(A);if(128>D)x[$++]=D;else{if(2048>D)x[$++]=D>>6|192;else{if(55296<=D&&57343>=D){if(56319>=D&&A<y.length){var P=y.charCodeAt(++A);if(56320<=P&&57343>=P){D=1024*(D-55296)+P-56320+65536,x[$++]=D>>18|240,x[$++]=D>>12&63|128,x[$++]=D>>6&63|128,x[$++]=63&D|128;continue}A--}if(N)throw Error("Found an unpaired surrogate");D=65533}x[$++]=D>>12|224,x[$++]=D>>6&63|128}x[$++]=63&D|128}}y=x.subarray(0,$)}yt(l.g,8*w+2),yt(l.g,y.length),Be(l,l.g.end()),Be(l,y)}}),kr=ln(function(l,y,w,N,$){if(l.h!==2)return!1;y=Ee(y,w,N),w=l.g.i,N=on(l.g)>>>0;var x=l.g.g+N,A=x-w;if(0>=A&&(l.g.i=x,$(y,l),A=x-l.g.g),A)throw Error("Message parsing ended unexpectedly. Expected to read "+N+" bytes, instead read "+(N-A)+" bytes, either the data ended unexpectedly or the message misreported its own length");return l.g.g=x,l.g.i=w,!0},function(l,y,w,N,$){if((y=$n(y,N,w))!=null)for(N=0;N<y.length;N++){var x=l;yt(x.g,8*w+2);var A=x.g.end();Be(x,A),A.push(x.h),x=A,$(y[N],l),A=l;var D=x.pop();for(D=A.h+A.g.length()-D;127<D;)x.push(127&D|128),D>>>=7,A.h++;x.push(D),A.h++}});function st(){On.apply(this,arguments)}if(v(st,On),ts){var fs={};Object.defineProperties(st,(fs[Symbol.hasInstance]=ns(Object[Symbol.hasInstance]),fs))}function Kt(l){st.call(this,l)}function ps(){return[1,ea,2,lt,3,hs,4,hs]}function _r(l){st.call(this,l,-1,na)}function ta(){return[1,kr,Kt,ps]}v(Kt,st),v(_r,st),_r.prototype.addClassification=function(l,y){return Ee(this,1,Kt,l,y),this};var na=[1];function hn(l){st.call(this,l)}function ds(){return[1,lt,2,lt,3,lt,4,lt,5,lt]}function ms(l){st.call(this,l,-1,sa)}function ra(){return[1,kr,hn,ds]}v(hn,st),v(ms,st);var sa=[1];function $r(l){st.call(this,l)}function Ir(){return[1,lt,2,lt,3,lt,4,lt,5,lt,6,Qs]}v($r,st);var Ar=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Or=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Dr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Fr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Cr=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],gs=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],ys=[].concat(o(Ar),o(Or),o(Dr),o(Fr),o(Cr),o(gs));function h(l,y,w){if(w=l.createShader(w===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(w,y),l.compileShader(w),!l.getShaderParameter(w,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(w));return w}function m(l){return $n(l,Kt,1).map(function(y){return{index:In(y,1),ga:Ze(y,2),label:qe(y,3)!=null?Tr(y,3):void 0,displayName:qe(y,4)!=null?Tr(y,4):void 0}})}function b(l){return{x:Ze(l,1),y:Ze(l,2),z:Ze(l,3),visibility:qe(l,4)!=null?Ze(l,4):void 0}}function I(l,y){this.h=l,this.g=y,this.l=0}function R(l,y,w){return function(N,$){var x=N.g;if(N.o===void 0){var A=h(x,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),D=h(x,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=x.createProgram();if(x.attachShader(P,A),x.attachShader(P,D),x.linkProgram(P),!x.getProgramParameter(P,x.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+x.getProgramInfoLog(P));A=N.o=P,x.useProgram(A),D=x.getUniformLocation(A,"sampler0"),N.j={K:x.getAttribLocation(A,"aVertex"),J:x.getAttribLocation(A,"aTex"),ma:D},N.u=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,N.u),x.enableVertexAttribArray(N.j.K),x.vertexAttribPointer(N.j.K,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),N.s=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,N.s),x.enableVertexAttribArray(N.j.J),x.vertexAttribPointer(N.j.J,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),x.uniform1i(D,0)}A=N.j,x.useProgram(N.o),x.canvas.width=$.width,x.canvas.height=$.height,x.viewport(0,0,$.width,$.height),x.activeTexture(x.TEXTURE0),N.h.bindTexture2d($.glName),x.enableVertexAttribArray(A.K),x.bindBuffer(x.ARRAY_BUFFER,N.u),x.vertexAttribPointer(A.K,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(A.J),x.bindBuffer(x.ARRAY_BUFFER,N.s),x.vertexAttribPointer(A.J,2,x.FLOAT,!1,0,0),x.bindFramebuffer(x.DRAW_FRAMEBUFFER?x.DRAW_FRAMEBUFFER:x.FRAMEBUFFER,null),x.clearColor(0,0,0,0),x.clear(x.COLOR_BUFFER_BIT),x.colorMask(!0,!0,!0,!0),x.drawArrays(x.TRIANGLE_FAN,0,4),x.disableVertexAttribArray(A.K),x.disableVertexAttribArray(A.J),x.bindBuffer(x.ARRAY_BUFFER,null),N.h.bindTexture2d(0)}(l,y),typeof l.g.canvas.transferToImageBitmap=="function"?Promise.resolve(l.g.canvas.transferToImageBitmap()):w?Promise.resolve(l.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.g.canvas):(l.i===void 0&&(l.i=document.createElement("canvas")),new Promise(function(N){l.i.height=l.g.canvas.height,l.i.width=l.g.canvas.width,l.i.getContext("2d",{}).drawImage(l.g.canvas,0,0,l.g.canvas.width,l.g.canvas.height),N(l.i)}))}function M(l){this.g=l}var L=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function V(l,y){return y+l}function X(l,y){window[l]=y}function ne(l){if(this.g=l,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=l&&l.locateFile||V,typeof window=="object")var y=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");y=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=y,l.options)for(var w=(y=i(Object.keys(l.options))).next();!w.done;w=y.next()){w=w.value;var N=l.options[w].default;N!==void 0&&(this.j[w]=typeof N=="function"?N():N)}}function oe(l){var y,w,N,$,x,A,D,P,z,H,Y;return G(function(Z){switch(Z.g){case 1:return l.Z?(y=l.g.files===void 0?[]:typeof l.g.files=="function"?l.g.files(l.j):l.g.files,F(Z,G(function(ee){switch(ee.g){case 1:return ee.o=2,F(ee,WebAssembly.instantiate(L),4);case 4:ee.g=3,ee.o=0;break;case 2:return ee.o=0,ee.j=null,ee.return(!1);case 3:return ee.return(!0)}}),2)):Z.return();case 2:if(w=Z.h,typeof window=="object")return X("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),X("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),A=y.filter(function(ee){return ee.data!==void 0}),D=y.filter(function(ee){return ee.data===void 0}),P=Promise.all(A.map(function(ee){var ce=we(l,ee.url);if(ee.path!==void 0){var he=ee.path;ce=ce.then(function(xe){return l.overrideFile(he,xe),Promise.resolve(xe)})}return ce})),z=Promise.all(D.map(function(ee){return ee.simd===void 0||ee.simd&&w||!ee.simd&&!w?function(ce){var he=document.createElement("script");return he.setAttribute("src",ce),he.setAttribute("crossorigin","anonymous"),new Promise(function(xe){he.addEventListener("load",function(){xe()},!1),he.addEventListener("error",function(){xe()},!1),document.body.appendChild(he)})}(l.locateFile(ee.url,l.$)):Promise.resolve()})).then(function(){var ee,ce,he;return G(function(xe){if(xe.g==1)return ee=window.createMediapipeSolutionsWasm,ce=window.createMediapipeSolutionsPackedAssets,he=l,F(xe,ee(ce),2);he.h=xe.h,xe.g=0})}),H=G(function(ee){return l.g.graph&&l.g.graph.url?ee=F(ee,we(l,l.g.graph.url),0):(ee.g=0,ee=void 0),ee}),F(Z,Promise.all([z,P,H]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return N=y.filter(function(ee){return ee.simd===void 0||ee.simd&&w||!ee.simd&&!w}).map(function(ee){return l.locateFile(ee.url,l.$)}),importScripts.apply(null,o(N)),$=l,F(Z,createMediapipeSolutionsWasm(Module),6);case 6:$.h=Z.h,l.l=new OffscreenCanvas(1,1),l.h.canvas=l.l,x=l.h.GL.createContext(l.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),l.h.GL.makeContextCurrent(x),Z.g=4;break;case 7:if(l.l=document.createElement("canvas"),!(Y=l.l.getContext("webgl2",{}))&&!(Y=l.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),Z.return();l.G=Y,l.h.canvas=l.l,l.h.createContext(l.l,!0,!0,{});case 4:l.i=new l.h.SolutionWasm,l.Z=!1,Z.g=0}})}function we(l,y){var w,N;return G(function($){return y in l.H?$.return(l.H[y]):(w=l.locateFile(y,""),N=fetch(w).then(function(x){return x.arrayBuffer()}),l.H[y]=N,$.return(N))})}function de(l,y,w){var N,$,x,A,D,P,z,H,Y,Z,ee,ce,he,xe;return G(function(_e){switch(_e.g){case 1:if(!w)return _e.return(y);for(N={},$=0,x=i(Object.keys(w)),A=x.next();!A.done;A=x.next())D=A.value,typeof(P=w[D])!="string"&&P.type==="texture"&&y[P.stream]!==void 0&&++$;1<$&&(l.I=!1),z=i(Object.keys(w)),A=z.next();case 2:if(A.done){_e.g=4;break}if(H=A.value,typeof(Y=w[H])=="string")return he=N,xe=H,F(_e,function(Fn,Ii,ar){var bs;return G(function(aa){return typeof ar=="number"||ar instanceof Uint8Array||ar instanceof Fn.h.Uint8BlobList?aa.return(ar):ar instanceof Fn.h.Texture2dDataOut?((bs=Fn.u[Ii])||(bs=new I(Fn.h,Fn.G),Fn.u[Ii]=bs),aa.return(R(bs,ar,Fn.I))):aa.return(void 0)})}(l,H,y[Y]),14);if(Z=y[Y.stream],Y.type==="detection_list"){if(Z){for(var Qe=Z.getRectList(),wt=Z.getLandmarksList(),at=Z.getClassificationsList(),Te=[],Xe=0;Xe<Qe.size();++Xe){var fn=xr(Qe.get(Xe),$r,Ir);fn={boundingBox:{xCenter:Ze(fn,1),yCenter:Ze(fn,2),height:Ze(fn,3),width:Ze(fn,4),rotation:Ze(fn,5,0),rectId:In(fn,6)},landmarks:$n(xr(wt.get(Xe),ms,ra),hn,1).map(b),V:m(xr(at.get(Xe),_r,ta))},Te.push(fn)}Qe=Te}else Qe=[];N[H]=Qe,_e.g=7;break}if(Y.type==="proto_list"){if(Z){for(Qe=Array(Z.size()),wt=0;wt<Z.size();wt++)Qe[wt]=Z.get(wt);Z.delete()}else Qe=[];N[H]=Qe,_e.g=7;break}if(Z===void 0){_e.g=3;break}if(Y.type==="float_list"){N[H]=Z,_e.g=7;break}if(Y.type==="proto"){N[H]=Z,_e.g=7;break}if(Y.type!=="texture")throw Error("Unknown output config type: '"+Y.type+"'");return(ee=l.u[H])||(ee=new I(l.h,l.G),l.u[H]=ee),F(_e,R(ee,Z,l.I),13);case 13:ce=_e.h,N[H]=ce;case 7:Y.transform&&N[H]&&(N[H]=Y.transform(N[H])),_e.g=3;break;case 14:he[xe]=_e.h;case 3:A=z.next(),_e.g=2;break;case 4:return _e.return(N)}})}function le(l,y){for(var w=y.name||"$",N=[].concat(o(y.wants)),$=new l.h.StringList,x=i(y.wants),A=x.next();!A.done;A=x.next())$.push_back(A.value);x=l.h.PacketListener.implement({onResults:function(D){for(var P={},z=0;z<y.wants.length;++z)P[N[z]]=D.get(z);var H=l.listeners[w];H&&(l.D=de(l,P,y.outs).then(function(Y){Y=H(Y);for(var Z=0;Z<y.wants.length;++Z){var ee=P[N[Z]];typeof ee=="object"&&ee.hasOwnProperty&&ee.hasOwnProperty("delete")&&ee.delete()}Y&&(l.D=Y)}))}}),l.i.attachMultiListener($,x),$.delete()}function se(l){var y=this;l=l||{};var w={url:"face_detection_short.binarypb"},N={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new ne({locateFile:l.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:w,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function($){var x,A,D,P,z;return G(function(H){switch(H.g){case 1:x=i($==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),A=x.next();case 2:if(A.done){H.g=4;break}return D=A.value,P="third_party/mediapipe/modules/face_detection/"+D,F(H,we(y.g,D),5);case 5:z=H.h,y.g.overrideFile(P,z),A=x.next(),H.g=2;break;case 4:return w.url=$==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",N.graphOptionXref.calculatorName=$==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",H.return(!0)}})}},minDetectionConfidence:N}})}(n=ne.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},n.reset=function(){var l=this;return G(function(y){l.i&&(l.i.reset(),l.o={},l.u={}),y.g=0})},n.setOptions=function(l,y){var w=this;if(y=y||this.g.options){for(var N=[],$=[],x={},A=i(Object.keys(l)),D=A.next();!D.done;x={R:x.R,S:x.S},D=A.next()){var P=D.value;P in this.j&&this.j[P]===l[P]||(this.j[P]=l[P],(D=y[P])!==void 0&&(D.onChange&&(x.R=D.onChange,x.S=l[P],N.push(function(z){return function(){return G(function(H){if(H.g==1)return F(H,z.R(z.S),2);H.h===!0&&(w.s=!0),H.g=0})}}(x))),D.graphOptionXref&&(P={valueNumber:D.type===1?l[P]:0,valueBoolean:D.type===0&&l[P],valueString:D.type===2?l[P]:""},D=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),D.graphOptionXref),P),$.push(D))))}N.length===0&&$.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat($),this.A=(this.A===void 0?[]:this.A).concat(N))}},n.initialize=function(){var l=this;return G(function(y){return y.g==1?F(y,oe(l),2):y.g!=3?F(y,function(w){var N,$,x,A,D,P,z,H;return G(function(Y){if(Y.g==1)return w.g.graph&&w.g.graph.url&&w.Y===w.g.graph.url?Y.return():(w.s=!0,w.g.graph&&w.g.graph.url?(w.Y=w.g.graph.url,F(Y,we(w,w.g.graph.url),3)):void(Y.g=2));for(Y.g!=2&&(N=Y.h,w.i.loadGraph(N)),$=i(Object.keys(w.C)),x=$.next();!x.done;x=$.next())A=x.value,w.i.overrideFile(A,w.C[A]);if(w.C={},w.g.listeners)for(D=i(w.g.listeners),P=D.next();!P.done;P=D.next())z=P.value,le(w,z);H=w.j,w.j={},w.setOptions(H),Y.g=0})}(l),3):F(y,function(w){var N,$,x,A,D,P;return G(function(z){switch(z.g){case 1:if(!w.s)return z.return();if(!w.A){z.g=2;break}N=i(w.A),$=N.next();case 3:if($.done){z.g=5;break}return F(z,(0,$.value)(),4);case 4:$=N.next(),z.g=3;break;case 5:w.A=void 0;case 2:if(w.B){for(x=new w.h.GraphOptionChangeRequestList,A=i(w.B),D=A.next();!D.done;D=A.next())P=D.value,x.push_back(P);w.i.changeOptions(x),x.delete(),w.B=void 0}w.s=!1,z.g=0}})}(l),0)})},n.overrideFile=function(l,y){this.i?this.i.overrideFile(l,y):this.C[l]=y},n.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},n.send=function(l,y){var w,N,$,x,A,D,P,z,H,Y=this;return G(function(Z){switch(Z.g){case 1:return Y.g.inputs?(w=1e3*(y??performance.now()),F(Z,Y.D,2)):Z.return();case 2:return F(Z,Y.initialize(),3);case 3:for(N=new Y.h.PacketDataList,$=i(Object.keys(l)),x=$.next();!x.done;x=$.next())if(A=x.value,D=Y.g.inputs[A]){e:{var ee=l[A];switch(D.type){case"video":var ce=Y.o[D.stream];if(ce||(ce=new I(Y.h,Y.G),Y.o[D.stream]=ce),ce.l===0&&(ce.l=ce.h.createTexture()),typeof HTMLVideoElement<"u"&&ee instanceof HTMLVideoElement)var he=ee.videoWidth,xe=ee.videoHeight;else typeof HTMLImageElement<"u"&&ee instanceof HTMLImageElement?(he=ee.naturalWidth,xe=ee.naturalHeight):(he=ee.width,xe=ee.height);xe={glName:ce.l,width:he,height:xe},(he=ce.g).canvas.width=xe.width,he.canvas.height=xe.height,he.activeTexture(he.TEXTURE0),ce.h.bindTexture2d(ce.l),he.texImage2D(he.TEXTURE_2D,0,he.RGBA,he.RGBA,he.UNSIGNED_BYTE,ee),ce.h.bindTexture2d(0),ce=xe;break e;case"detections":for((ce=Y.o[D.stream])||(ce=new M(Y.h),Y.o[D.stream]=ce),ce.data||(ce.data=new ce.g.DetectionListData),ce.data.reset(ee.length),xe=0;xe<ee.length;++xe){he=ee[xe];var _e=ce.data,Qe=_e.setBoundingBox,wt=xe,at=he.boundingBox,Te=new $r;if(Re(Te,1,at.xCenter),Re(Te,2,at.yCenter),Re(Te,3,at.height),Re(Te,4,at.width),Re(Te,5,at.rotation),Re(Te,6,at.rectId),at=Dn(Te,Ir),Qe.call(_e,wt,at),he.landmarks)for(_e=0;_e<he.landmarks.length;++_e){var Xe=!!(Te=he.landmarks[_e]).visibility;wt=(Qe=ce.data).addNormalizedLandmark,at=xe,Te=Object.assign(Object.assign({},Te),{visibility:Xe?Te.visibility:0}),Re(Xe=new hn,1,Te.x),Re(Xe,2,Te.y),Re(Xe,3,Te.z),Te.visibility&&Re(Xe,4,Te.visibility),Te=Dn(Xe,ds),wt.call(Qe,at,Te)}if(he.V)for(_e=0;_e<he.V.length;++_e)wt=(Qe=ce.data).addClassification,at=xe,Te=he.V[_e],Re(Xe=new Kt,2,Te.ga),Te.index&&Re(Xe,1,Te.index),Te.label&&Re(Xe,3,Te.label),Te.displayName&&Re(Xe,4,Te.displayName),Te=Dn(Xe,ps),wt.call(Qe,at,Te)}ce=ce.data;break e;default:ce={}}}switch(P=ce,z=D.stream,D.type){case"video":N.pushTexture2d(Object.assign(Object.assign({},P),{stream:z,timestamp:w}));break;case"detections":(H=P).stream=z,H.timestamp=w,N.pushDetectionList(H);break;default:throw Error("Unknown input config type: '"+D.type+"'")}}return Y.i.send(N),F(Z,Y.D,4);case 4:N.delete(),Z.g=0}})},n.onResults=function(l,y){this.listeners[y||"$"]=l},q("Solution",ne),q("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(n=se.prototype).close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(l){this.g.onResults(l)},n.initialize=function(){var l=this;return G(function(y){return F(y,l.g.initialize(),0)})},n.reset=function(){this.g.reset()},n.send=function(l){var y=this;return G(function(w){return F(w,y.g.send(l),0)})},n.setOptions=function(l){this.g.setOptions(l)},q("FaceDetection",se),q("FACEDETECTION_LIPS",Ar),q("FACEDETECTION_LEFT_EYE",Or),q("FACEDETECTION_LEFT_EYEBROW",Dr),q("FACEDETECTION_RIGHT_EYE",Fr),q("FACEDETECTION_RIGHT_EYEBROW",Cr),q("FACEDETECTION_FACE_OVAL",gs),q("FACEDETECTION_CONTOURS",ys),q("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),q("VERSION","0.4.1646425229")}).call(da);var wn=function(){return wn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n},wn.apply(this,arguments)};function rn(n,e,t,r){return new(t||(t=Promise))(function(s,a){function i(c){try{u(r.next(c))}catch(f){a(f)}}function o(c){try{u(r.throw(c))}catch(f){a(f)}}function u(c){var f;c.done?s(c.value):(f=c.value,f instanceof t?f:new t(function(p){p(f)})).then(i,o)}u((r=r.apply(n,e||[])).next())})}function sn(n,e){var t,r,s,a,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(u){return function(c){return function(f){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return i.label++,{value:f[1],done:!1};case 5:i.label++,r=f[1],f=[0];continue;case 7:f=i.ops.pop(),i.trys.pop();continue;default:if(!((s=(s=i.trys).length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){i=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){i.label=f[1];break}if(f[0]===6&&i.label<s[1]){i.label=s[1],s=f;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(f);break}s[2]&&i.ops.pop(),i.trys.pop();continue}f=e.call(n,i)}catch(p){f=[6,p],r=0}finally{t=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,c])}}}var Gu=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],ma={modelType:"short",runtime:"mediapipe",maxFaces:1},k5=function(){function n(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new E5.FaceDetection({locateFile:function(r,s){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:e.modelType}),this.faceDetectorSolution.onResults(function(r){if(t.height=r.image.height,t.width=r.image.width,t.faces=[],r.detections!==null)for(var s=0,a=r.detections;s<a.length;s++){var i=a[s];t.faces.push(t.normalizedToAbsolute(i.landmarks,{xMin:u=(o=i.boundingBox).xCenter-o.width/2,xMax:u+o.width,yMin:c=o.yCenter-o.height/2,yMax:c+o.height,width:o.width,height:o.height}))}var o,u,c})}return n.prototype.normalizedToAbsolute=function(e,t){var r=this;return{keypoints:e.map(function(s,a){return{x:s.x*r.width,y:s.y*r.height,name:Gu[a]}}),box:{xMin:t.xMin*this.width,yMin:t.yMin*this.height,xMax:t.xMax*this.width,yMax:t.yMax*this.height,width:t.width*this.width,height:t.height*this.height}}},n.prototype.estimateFaces=function(e,t){return rn(this,void 0,void 0,function(){var r,s;return sn(this,function(a){switch(a.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Ae?(s=ImageData.bind,[4,Bu(e)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,a.label=3;case 3:return e=r,[4,this.faceDetectorSolution.send({image:e})];case 4:return a.sent(),[2,this.faces]}})})},n.prototype.dispose=function(){this.faceDetectorSolution.close()},n.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},n}();function _5(n){return rn(this,void 0,void 0,function(){var e,t;return sn(this,function(r){switch(r.label){case 0:return e=function(s){if(s==null)return wn({},ma);var a=wn({},s);return a.runtime="mediapipe",a.modelType==null&&(a.modelType=ma.modelType),a.maxFaces==null&&(a.maxFaces=ma.maxFaces),a}(n),[4,(t=new k5(e)).initialize()];case 1:return r.sent(),[2,t]}})})}function Hu(n){return n instanceof Ae?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function qu(n){return n instanceof Ae?n:ju(n)}function ga(n,e){_(n.width!==0,function(){return e+" width cannot be 0."}),_(n.height!==0,function(){return e+" height cannot be 0."})}function $5(n,e,t){var r=e.outputTensorSize,s=e.keepAspectRatio,a=e.borderMode,i=e.outputTensorFloatRange,o=Hu(n),u=function(g,v){return v?{xCenter:v.xCenter*g.width,yCenter:v.yCenter*g.height,width:v.width*g.width,height:v.height*g.height,rotation:v.rotation}:{xCenter:.5*g.width,yCenter:.5*g.height,width:g.width,height:g.height,rotation:0}}(o,t),c=function(g,v,S){if(S===void 0&&(S=!1),!S)return{top:0,left:0,right:0,bottom:0};var k=v.height,E=v.width;ga(v,"targetSize"),ga(g,"roi");var F,j,W=k/E,B=g.height/g.width,K=0,G=0;return W>B?(F=g.width,j=g.width*W,G=(1-B/W)/2):(F=g.height/W,j=g.height,K=(1-W/B)/2),g.width=F,g.height=j,{top:G,left:K,right:K,bottom:G}}(u,r,s),f=function(g,v,S,k){var E=g.width,F=g.height,j=k?-1:1,W=Math.cos(g.rotation),B=Math.sin(g.rotation),K=g.xCenter,G=g.yCenter,Q=1/v,re=1/S,q=new Array(16);return q[0]=E*W*j*Q,q[1]=-F*B*Q,q[2]=0,q[3]=(-.5*E*W*j+.5*F*B+K)*Q,q[4]=E*B*j*re,q[5]=F*W*re,q[6]=0,q[7]=(-.5*F*W-.5*E*B*j+G)*re,q[8]=0,q[9]=0,q[10]=E*Q,q[11]=0,q[12]=0,q[13]=0,q[14]=0,q[15]=1,function(te){if(te.length!==16)throw new Error("Array length must be 16 but got "+te.length);return[[te[0],te[1],te[2],te[3]],[te[4],te[5],te[6],te[7]],[te[8],te[9],te[10],te[11]],[te[12],te[13],te[14],te[15]]]}(q)}(u,o.width,o.height,!1),p=me(function(){var g=qu(n),v=yn(function(E,F,j){return ga(j,"inputResolution"),[1/j.width*E[0][0]*F.width,1/j.height*E[0][1]*F.width,E[0][3]*F.width,1/j.width*E[1][0]*F.height,1/j.height*E[1][1]*F.height,E[1][3]*F.height,0,0]}(f,o,r),[1,8]),S=a==="zero"?"constant":"nearest",k=mr.transform($t(De(g,"float32")),v,"bilinear",S,0,[r.height,r.width]);return i!=null?function(E,F){var j=function(W,B,K,G){var Q=(G-K)/255;return{scale:Q,offset:K-0*Q}}(0,0,F[0],F[1]);return me(function(){return ae(J(E,j.scale),j.offset)})}(k,i):k});return{imageTensor:p,padding:c,transformationMatrix:f}}function so(n){n.reduceBoxesInLowestLayer==null&&(n.reduceBoxesInLowestLayer=!1),n.interpolatedScaleAspectRatio==null&&(n.interpolatedScaleAspectRatio=1),n.fixedAnchorSize==null&&(n.fixedAnchorSize=!1);for(var e=[],t=0;t<n.numLayers;){for(var r=[],s=[],a=[],i=[],o=t;o<n.strides.length&&n.strides[o]===n.strides[t];){var u=ao(n.minScale,n.maxScale,o,n.strides.length);if(o===0&&n.reduceBoxesInLowestLayer)a.push(1),a.push(2),a.push(.5),i.push(.1),i.push(u),i.push(u);else{for(var c=0;c<n.aspectRatios.length;++c)a.push(n.aspectRatios[c]),i.push(u);if(n.interpolatedScaleAspectRatio>0){var f=o===n.strides.length-1?1:ao(n.minScale,n.maxScale,o+1,n.strides.length);i.push(Math.sqrt(u*f)),a.push(n.interpolatedScaleAspectRatio)}}o++}for(var p=0;p<a.length;++p){var g=Math.sqrt(a[p]);r.push(i[p]/g),s.push(i[p]*g)}var v=0,S=0;if(n.featureMapHeight.length>0)v=n.featureMapHeight[t],S=n.featureMapWidth[t];else{var k=n.strides[t];v=Math.ceil(n.inputSizeHeight/k),S=Math.ceil(n.inputSizeWidth/k)}for(var E=0;E<v;++E)for(var F=0;F<S;++F)for(var j=0;j<r.length;++j){var W={xCenter:(F+n.anchorOffsetX)/S,yCenter:(E+n.anchorOffsetY)/v,width:0,height:0};n.fixedAnchorSize?(W.width=1,W.height=1):(W.width=s[j],W.height=r[j]),e.push(W)}t=o}return e}function ao(n,e,t,r){return r===1?.5*(n+e):n+(e-n)*t/(r-1)}function io(n,e){var t=e[0],r=e[1];return[t*n[0]+r*n[1]+n[3],t*n[4]+r*n[5]+n[7]]}function I5(n,e,t,r){return rn(this,void 0,void 0,function(){var s,a,i,o,u;return sn(this,function(c){switch(c.label){case 0:return n.sort(function(f,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,f.score)}),s=yn(n.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),a=Je(n.map(function(f){return f.score[0]})),[4,mr.nonMaxSuppressionAsync(s,a,e,t)];case 1:return[4,(i=c.sent()).array()];case 2:return o=c.sent(),u=n.filter(function(f,p){return o.indexOf(p)>-1}),Oe([s,a,i]),[2,u]}})})}function A5(n,e,t){return rn(this,void 0,void 0,function(){var r,s,a,i,o;return sn(this,function(u){switch(u.label){case 0:return r=n[0],s=n[1],a=function(c,f,p){return me(function(){var g,v,S,k;p.reverseOutputOrder?(v=je(fe(c,[0,p.boxCoordOffset+0],[-1,1])),g=je(fe(c,[0,p.boxCoordOffset+1],[-1,1])),k=je(fe(c,[0,p.boxCoordOffset+2],[-1,1])),S=je(fe(c,[0,p.boxCoordOffset+3],[-1,1]))):(g=je(fe(c,[0,p.boxCoordOffset+0],[-1,1])),v=je(fe(c,[0,p.boxCoordOffset+1],[-1,1])),S=je(fe(c,[0,p.boxCoordOffset+2],[-1,1])),k=je(fe(c,[0,p.boxCoordOffset+3],[-1,1]))),v=ae(J(ye(v,p.xScale),f.w),f.x),g=ae(J(ye(g,p.yScale),f.h),f.y),p.applyExponentialOnBoxSize?(S=J(en(ye(S,p.hScale)),f.h),k=J(en(ye(k,p.wScale)),f.w)):(S=J(ye(S,p.hScale),f.h),k=J(ye(k,p.wScale),f.h));var E=pe(g,ye(S,2)),F=pe(v,ye(k,2)),j=ae(g,ye(S,2)),W=ae(v,ye(k,2)),B=Ke([U(E,[p.numBoxes,1]),U(F,[p.numBoxes,1]),U(j,[p.numBoxes,1]),U(W,[p.numBoxes,1])],1);if(p.numKeypoints)for(var K=0;K<p.numKeypoints;++K){var G=p.keypointCoordOffset+K*p.numValuesPerKeypoint,Q=void 0,re=void 0;p.reverseOutputOrder?(Q=je(fe(c,[0,G],[-1,1])),re=je(fe(c,[0,G+1],[-1,1]))):(re=je(fe(c,[0,G],[-1,1])),Q=je(fe(c,[0,G+1],[-1,1])));var q=ae(J(ye(Q,p.xScale),f.w),f.x),te=ae(J(ye(re,p.yScale),f.h),f.y);B=Ke([B,U(q,[p.numBoxes,1]),U(te,[p.numBoxes,1])],1)}return B})}(s,e,t),i=me(function(){var c=r;return t.sigmoidScore?(t.scoreClippingThresh!=null&&(c=Qo(r,-t.scoreClippingThresh,t.scoreClippingThresh)),c=Mn(c)):c}),[4,O5(a,i,t)];case 1:return o=u.sent(),Oe([a,i]),[2,o]}})})}function O5(n,e,t){return rn(this,void 0,void 0,function(){var r,s,a,i,o,u,c,f,p,g,v,S;return sn(this,function(k){switch(k.label){case 0:return r=[],[4,n.data()];case 1:return s=k.sent(),[4,e.data()];case 2:for(a=k.sent(),i=0;i<t.numBoxes;++i)if(!(t.minScoreThresh!=null&&a[i]<t.minScoreThresh||(o=i*t.numCoords,u=D5(s[o+0],s[o+1],s[o+2],s[o+3],a[i],t.flipVertically,i),(c=u.locationData.relativeBoundingBox).width<0||c.height<0))){if(t.numKeypoints>0)for((f=u.locationData).relativeKeypoints=[],p=t.numKeypoints*t.numValuesPerKeypoint,g=0;g<p;g+=t.numValuesPerKeypoint)v=o+t.keypointCoordOffset+g,S={x:s[v+0],y:t.flipVertically?1-s[v+1]:s[v+1]},f.relativeKeypoints.push(S);r.push(u)}return[2,r]}})})}function D5(n,e,t,r,s,a,i){return{score:[s],ind:i,locationData:{relativeBoundingBox:{xMin:e,yMin:a?1-t:n,xMax:r,yMax:a?1-n:t,width:r-e,height:t-n}}}}var js,F5={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},C5={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},ya={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},R5={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},L5={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},P5={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},B5={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},j5=function(){function n(e,t,r){this.detectorModel=t,this.maxFaces=r,e==="full"?(this.imageToTensorConfig=B5,this.tensorsToDetectionConfig=L5,this.anchors=so(C5)):(this.imageToTensorConfig=P5,this.tensorsToDetectionConfig=R5,this.anchors=so(F5));var s=Je(this.anchors.map(function(u){return u.width})),a=Je(this.anchors.map(function(u){return u.height})),i=Je(this.anchors.map(function(u){return u.xCenter})),o=Je(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:i,y:o,w:s,h:a}}return n.prototype.dispose=function(){this.detectorModel.dispose(),Oe([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},n.prototype.reset=function(){},n.prototype.detectFaces=function(e,t){return t===void 0&&(t=!1),rn(this,void 0,void 0,function(){var r,s,a,i,o,u,c,f,p,g,v;return sn(this,function(S){switch(S.label){case 0:return e==null?(this.reset(),[2,[]]):(r=me(function(){var k=De(qu(e),"float32");return t&&(k=je(mr.flipLeftRight($t(k,0)),[0])),k}),s=$5(r,this.imageToTensorConfig),a=s.imageTensor,i=s.transformationMatrix,o=this.detectorModel.execute(a,"Identity:0"),u=function(k){return me(function(){var E=function(W){return me(function(){return[fe(W,[0,0,0],[1,-1,1]),fe(W,[0,0,1],[1,-1,-1])]})}(k),F=E[0],j=E[1];return{boxes:je(j),logits:je(F)}})}(o),c=u.boxes,[4,A5([f=u.logits,c],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=S.sent()).length===0?(Oe([r,a,o,f,c]),[2,p]):[4,I5(p,this.maxFaces,.3)];case 2:return g=S.sent(),v=function(k,E){k===void 0&&(k=[]);var F,j=(F=E,[].concat.apply([],F));return k.forEach(function(W){var B=W.locationData;B.relativeKeypoints.forEach(function(te){var ue=io(j,[te.x,te.y]),Ne=ue[0],ie=ue[1];te.x=Ne,te.y=ie});var K=B.relativeBoundingBox,G=Number.MAX_VALUE,Q=Number.MAX_VALUE,re=Number.MIN_VALUE,q=Number.MIN_VALUE;[[K.xMin,K.yMin],[K.xMin+K.width,K.yMin],[K.xMin+K.width,K.yMin+K.height],[K.xMin,K.yMin+K.height]].forEach(function(te){var ue=io(j,te),Ne=ue[0],ie=ue[1];G=Math.min(G,Ne),re=Math.max(re,Ne),Q=Math.min(Q,ie),q=Math.max(q,ie)}),B.relativeBoundingBox={xMin:G,xMax:re,yMin:Q,yMax:q,width:re-G,height:q-Q}}),k}(g,i),Oe([r,a,o,f,c]),[2,v]}})})},n.prototype.estimateFaces=function(e,t){return rn(this,void 0,void 0,function(){var r,s;return sn(this,function(a){return r=Hu(e),s=!!t&&t.flipHorizontal,[2,this.detectFaces(e,s).then(function(i){return i.map(function(o){for(var u=o.locationData.relativeKeypoints.map(function(S,k){return wn(wn({},S),{x:S.x*r.width,y:S.y*r.height,name:Gu[k]})}),c=o.locationData.relativeBoundingBox,f=0,p=["width","xMax","xMin"];f<p.length;f++)c[p[f]]*=r.width;for(var g=0,v=["height","yMax","yMin"];g<v.length;g++)c[v[g]]*=r.height;return{keypoints:u,box:c}})})]})})},n}();function M5(n){return rn(this,void 0,void 0,function(){var e,t,r;return sn(this,function(s){switch(s.label){case 0:return e=function(a){if(a==null)return wn({},ya);var i=wn({},a);return i.modelType==null&&(i.modelType=ya.modelType),i.maxFaces==null&&(i.maxFaces=ya.maxFaces),i.detectorModelUrl==null&&(i.modelType==="full"?i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),i}(n),t=typeof e.detectorModelUrl=="string"&&e.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,Uu(e.detectorModelUrl,{fromTFHub:t})];case 1:return r=s.sent(),[2,new j5(e.modelType,r,e.maxFaces)]}})})}function z5(n,e){return rn(this,void 0,void 0,function(){var t,r;return sn(this,function(s){if(n===js.MediaPipeFaceDetector){if(r=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,M5(t)];if(t.runtime==="mediapipe")return[2,_5(t)];r=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(n+" is not a supported model name.")})})}function ba(n){return n.width*n.height}function oo(n){var e=n.xCenter-n.width/2,t=e+n.width,r=n.yCenter-n.height/2;return{xMin:e,xMax:t,yMin:r,yMax:r+n.height,width:n.width,height:n.height}}function V5(n,e){var t=oo(n),r=oo(e);if(!function(i,o){return!(i.xMax<o.xMin||o.xMax<i.xMin||i.yMax<o.yMin||o.yMax<i.yMin)}(t,r))return 0;var s=ba(function(i,o){var u=Math.max(i.xMin,o.xMin),c=Math.min(i.xMax,o.xMax),f=Math.max(i.yMin,o.yMin),p=Math.min(i.yMax,o.yMax);return{xMin:u,xMax:c,yMin:f,yMax:p,width:Math.max(c-u,0),height:Math.max(p-f,0)}}(t,r)),a=ba(t)+ba(r)-s;return a>0?s/a:0}function U5(n,e,t,r){var s=n.width,a=n.height,i=r?-1:1,o=Math.cos(n.rotation),u=Math.sin(n.rotation),c=n.xCenter,f=n.yCenter,p=1/e,g=1/t,v=new Array(16);return v[0]=s*o*i*p,v[1]=-a*u*p,v[2]=0,v[3]=(-.5*s*o*i+.5*a*u+c)*p,v[4]=s*u*i*g,v[5]=a*o*g,v[6]=0,v[7]=(-.5*a*o-.5*s*u*i+f)*g,v[8]=0,v[9]=0,v[10]=s*p,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,function(S){if(S.length!==16)throw new Error("Array length must be 16 but got "+S.length);return[[S[0],S[1],S[2],S[3]],[S[4],S[5],S[6],S[7]],[S[8],S[9],S[10],S[11]],[S[12],S[13],S[14],S[15]]]}(v)}function Xu(n){return n instanceof Ae?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function Yu(n){return n-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function Ju(n){return n instanceof Ae?n:ju(n)}function wa(n,e){_(n.width!==0,function(){return e+" width cannot be 0."}),_(n.height!==0,function(){return e+" height cannot be 0."})}function W5(n,e){var t=function(r,s,a,i){var o=s-r,u=i-a;if(o===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var c=u/o;return{scale:c,offset:a-r*c}}(0,255,e[0],e[1]);return me(function(){return ae(J(n,t.scale),t.offset)})}function K5(n,e,t){var r=e.outputTensorSize,s=e.keepAspectRatio,a=e.borderMode,i=e.outputTensorFloatRange,o=Xu(n),u=function(g,v){return v?{xCenter:v.xCenter*g.width,yCenter:v.yCenter*g.height,width:v.width*g.width,height:v.height*g.height,rotation:v.rotation}:{xCenter:.5*g.width,yCenter:.5*g.height,width:g.width,height:g.height,rotation:0}}(o,t),c=function(g,v,S){if(S===void 0&&(S=!1),!S)return{top:0,left:0,right:0,bottom:0};var k=v.height,E=v.width;wa(v,"targetSize"),wa(g,"roi");var F,j,W=k/E,B=g.height/g.width,K=0,G=0;return W>B?(F=g.width,j=g.width*W,G=(1-B/W)/2):(F=g.height/W,j=g.height,K=(1-W/B)/2),g.width=F,g.height=j,{top:G,left:K,right:K,bottom:G}}(u,r,s),f=U5(u,o.width,o.height,!1),p=me(function(){var g=Ju(n),v=yn(function(E,F,j){return wa(j,"inputResolution"),[1/j.width*E[0][0]*F.width,1/j.height*E[0][1]*F.width,E[0][3]*F.width,1/j.width*E[1][0]*F.height,1/j.height*E[1][1]*F.height,E[1][3]*F.height,0,0]}(f,o,r),[1,8]),S=a==="zero"?"constant":"nearest",k=mr.transform($t(De(g,"float32")),v,"bilinear",S,0,[r.height,r.width]);return i!=null?W5(k,i):k});return{imageTensor:p,padding:c,transformationMatrix:f}}function uo(n){return{xCenter:n.xMin+n.width/2,yCenter:n.yMin+n.height/2,width:n.width,height:n.height}}function co(n){var e=n.relativeKeypoints;if(e.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var t=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,a=Number.MIN_VALUE;return e.forEach(function(i){t=Math.min(t,i.x),s=Math.max(s,i.x),r=Math.min(r,i.y),a=Math.max(a,i.y)}),{xCenter:(t+s)/2,yCenter:(r+a)/2,width:s-t,height:a-r}}function lo(n,e,t,r,s){var a=t==="rect"?function(i,o,u){var c,f=i.locationData;if(o==="boundingbox")c=uo(f.boundingBox);else{c=co(f);var p=u.width,g=u.height;c.xCenter=Math.round(c.xCenter*p),c.yCenter=Math.round(c.yCenter*g),c.width=Math.round(c.width*p),c.height=Math.round(c.height*g)}return c}(n,e,r):function(i,o){var u=i.locationData;return o==="boundingbox"?uo(u.relativeBoundingBox):co(u)}(n,e);return s&&(a.rotation=function(i,o,u){var c,f=i.locationData,p=u.rotationVectorStartKeypointIndex,g=u.rotationVectorEndKeypointIndex;c=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var v=f.relativeKeypoints[p].x*o.width,S=f.relativeKeypoints[p].y*o.height,k=f.relativeKeypoints[g].x*o.width,E=f.relativeKeypoints[g].y*o.height;return Yu(c-Math.atan2(-(E-S),k-v))}(n,r,s)),a}function G5(n,e,t){for(var r=0;r<e.length;++r){var s=e[r],a=t[n[r]];a.x=s.x,a.y=s.y}}function H5(n,e,t,r){if(typeof e=="string"){if(e==="copy")for(var s=0;s<t.length;++s)r[n[s]].z=t[s].z}else{var a=function(i,o){for(var u=0,c=0;c<o.length;++c)u+=i[o[c]].z;return u/o.length}(r,e);for(s=0;s<n.length;++s)r[n[s]].z=a}}function q5(n,e){for(var t=function(o){var u=[].concat.apply([],o.map(function(v){return v.indexesMapping}));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var c=u[0],f=u[0],p=new Set(u);p.forEach(function(v){c=Math.min(c,v),f=Math.max(f,v)});var g=p.size;if(c!==0)throw new Error("Indexes are expected to start with 0 instead of "+c);if(f+1!==g)throw new Error("Indexes should have no gaps but "+(f-g+1)+" indexes are missing");return g}(e),r=new Array(t).fill(null).map(Object),s=0;s<n.length;++s){var a=n[s],i=e[s];if(a.length!==i.indexesMapping.length)throw new Error("There are "+a.length+" refinement landmarks while mapping has "+i.indexesMapping.length);G5(i.indexesMapping,a,r),H5(i.indexesMapping,i.zRefinement,a,r)}return r}function X5(n,e){return n.map(function(t){var r=At(At({},t),{x:t.x*e.width,y:t.y*e.height});return t.z!=null&&(r.z=t.z*e.width),r})}function Y5(n,e){return n==="none"?e:function(t){return 1/(1+Math.exp(-t))}(e)}function Rn(n,e,t,r){return Xt(this,void 0,void 0,function(){var s,a,i,o,u,c,f,p;return Yt(this,function(g){switch(g.label){case 0:return t=t||e.flipHorizontally||!1,r=r||e.flipVertically||!1,s=n.size,a=s/e.numLandmarks,[4,n.data()];case 1:for(i=g.sent(),o=[],u=0;u<e.numLandmarks;++u)c=u*a,(p={x:0,y:0}).x=t?e.inputImageWidth-i[c]:i[c],a>1&&(p.y=r?e.inputImageHeight-i[c+1]:i[c+1]),a>2&&(p.z=i[c+2]),a>3&&(p.score=Y5(e.visibilityActivation,i[c+3])),o.push(p);for(f=0;f<o.length;++f)(p=o[f]).x=p.x/e.inputImageWidth,p.y=p.y/e.inputImageHeight,p.z=p.z/e.inputImageWidth/(e.normalizeZ||1);return[2,o]}})})}function ho(n,e,t){var r=n.width,s=n.height,a=n.rotation;if(t.rotation==null&&t.rotationDegree==null||(a=function(f,p){return p.rotation!=null?f+=p.rotation:p.rotationDegree!=null&&(f+=Math.PI*p.rotationDegree/180),Yu(f)}(a,t)),a===0)n.xCenter=n.xCenter+r*t.shiftX,n.yCenter=n.yCenter+s*t.shiftY;else{var i=(e.width*r*t.shiftX*Math.cos(a)-e.height*s*t.shiftY*Math.sin(a))/e.width,o=(e.width*r*t.shiftX*Math.sin(a)+e.height*s*t.shiftY*Math.cos(a))/e.height;n.xCenter=n.xCenter+i,n.yCenter=n.yCenter+o}if(t.squareLong){var u=Math.max(r*e.width,s*e.height);r=u/e.width,s=u/e.height}else if(t.squareShort){var c=Math.min(r*e.width,s*e.height);r=c/e.width,s=c/e.height}return n.width=r*t.scaleX,n.height=s*t.scaleY,n}(js||(js={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var va={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},Na={flipHorizontal:!1,staticImageMode:!1},fo={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5,squareLong:!0},J5={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1],borderMode:"replicate"},po={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Z5={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},mo={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},go={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Q5={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},ey={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},ty={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},ny={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},ry={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},sy={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},Hn,ay=function(){function n(e,t,r,s){this.detector=e,this.landmarkModel=t,this.maxFaces=r,this.withAttention=s,this.prevFaceRectsFromLandmarks=null}return n.prototype.estimateFaces=function(e,t){return Xt(this,void 0,void 0,function(){var r,s,a,i,o,u,c,f,p,g,v,S,k,E=this;return Yt(this,function(F){switch(F.label){case 0:return r=function(B){if(B==null)return At({},Na);var K=At({},B);return K.flipHorizontal==null&&(K.flipHorizontal=Na.flipHorizontal),K.staticImageMode==null&&(K.staticImageMode=Na.staticImageMode),K}(t),e==null?(this.reset(),[2,[]]):(s=Xu(e),a=me(function(){var B=De(Ju(e),"float32");return r.flipHorizontal&&(B=je(mr.flipLeftRight($t(B,0)),[0])),B}),i=this.prevFaceRectsFromLandmarks,r.staticImageMode||i==null||i.length<this.maxFaces?[4,this.detector.detectFaces(a,!1)]:[3,2]);case 1:return(u=F.sent()).length===0?(this.reset(),a.dispose(),[2,[]]):(o=u.map(function(B){return E.faceDetectionFrontDetectionToRoi(B,s)}),[3,3]);case 2:o=[],F.label=3;case 3:return j=.5,W=[],[o,i||[]].forEach(function(B){return B.forEach(function(K){(W=W.filter(function(G){return V5(K,G)<=j})).push(K)})}),c=W,[4,Promise.all(c.map(function(B){return E.faceLandmark(B,a)}))];case 4:for(f=F.sent(),p=[],this.prevFaceRectsFromLandmarks=[],g=0;g<f.length;++g)(v=f[g])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(v,s)),(S=X5(v,s))!=null&&S.forEach(function(B,K){var G=Ku.get(K);G!=null&&(B.name=G)}),k=si(S),p.push({keypoints:S,box:k.locationData.relativeBoundingBox}));return a.dispose(),[2,p]}var j,W})})},n.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},n.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},n.prototype.faceDetectionFrontDetectionToRoi=function(e,t){return ho(lo(e,"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),t,fo)},n.prototype.faceLandmark=function(e,t){return Xt(this,void 0,void 0,function(){var r,s,a,i,o,u,c;return Yt(this,function(f){switch(f.label){case 0:return r=K5(t,J5,e).imageTensor,s=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),a=this.landmarkModel.execute(r,s),i=a[0],o=a.slice(1),[4,i.data()];case 1:return f.sent()[0]<.5?(Oe(a),Oe(r),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(o)]:[3,3];case 2:return u=f.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(o)];case 4:u=f.sent(),f.label=5;case 5:return c=function(p,g,v){v===void 0&&(v={ignoreRotation:!1});for(var S=[],k=0,E=p;k<E.length;k++){var F=E[k],j=F.x-.5,W=F.y-.5,B=v.ignoreRotation?0:g.rotation,K=Math.cos(B)*j-Math.sin(B)*W,G=Math.sin(B)*j+Math.cos(B)*W;K=K*g.width+g.xCenter,G=G*g.height+g.yCenter;var Q=F.z*g.width,re=At({},F);re.x=K,re.y=G,re.z=Q,S.push(re)}return S}(u,e),Oe(a),Oe(r),[2,c]}})})},n.prototype.tensorsToFaceLandmarks=function(e){return Xt(this,void 0,void 0,function(){return Yt(this,function(t){return[2,Rn(e[0],po)]})})},n.prototype.tensorsToFaceLandmarksWithAttention=function(e){return Xt(this,void 0,void 0,function(){var t,r,s,a,i,o;return Yt(this,function(u){switch(u.label){case 0:return[4,Rn(e[0],po)];case 1:return t=u.sent(),[4,Rn(e[1],Z5)];case 2:return r=u.sent(),[4,Rn(e[3],mo)];case 3:return s=u.sent(),[4,Rn(e[5],mo)];case 4:return a=u.sent(),[4,Rn(e[4],go)];case 5:return i=u.sent(),[4,Rn(e[2],go)];case 6:return o=u.sent(),[2,q5([t,r,s,a,i,o],[Q5,ey,ty,ny,ry,sy])]}})})},n.prototype.faceLandmarksToRoi=function(e,t){return ho(lo(si(e),"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),t,fo)},n}();function iy(n){return Xt(this,void 0,void 0,function(){var e,t,r,s;return Yt(this,function(a){switch(a.label){case 0:return e=function(i){if(i==null)return At({},va);var o=At({},i);return o.runtime="tfjs",o.maxFaces==null&&(o.maxFaces=va.maxFaces),o.refineLandmarks==null&&(o.refineLandmarks=va.refineLandmarks),o.landmarkModelUrl==null&&(o.landmarkModelUrl=o.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),o}(n),t=typeof e.landmarkModelUrl=="string"&&e.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Uu(e.landmarkModelUrl,{fromTFHub:t})];case 1:return r=a.sent(),[4,z5(js.MediaPipeFaceDetector,{modelType:"short",maxFaces:e.maxFaces,detectorModelUrl:e.detectorModelUrl,runtime:e.runtime})];case 2:return s=a.sent(),[2,new ay(s,r,e.maxFaces,e.refineLandmarks)]}})})}function oy(n,e){return Xt(this,void 0,void 0,function(){var t,r;return Yt(this,function(s){if(n===Hn.MediaPipeFaceMesh){if(r=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,iy(t)];if(t.runtime==="mediapipe")return[2,x5(t)];r=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(n+" is not a supported model name.")})})}(function(n){n.MediaPipeFaceMesh="MediaPipeFaceMesh"})(Hn||(Hn={}));var uy=Object.freeze({__proto__:null,getKeypointIndexByContour:function(n){if(n===Hn.MediaPipeFaceMesh)return Wu;throw new Error("Model "+n+" is not supported.")},getAdjacentPairs:function(n){if(n===Hn.MediaPipeFaceMesh)return N5;throw new Error("Model "+n+" is not supported.")}});const cy=""+new URL("a-60999c42.jpg",import.meta.url).href,ly={class:"cc"},hy=Qu({__name:"tensorflow",setup(n){const e=e1(),t=[127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255],r={lips:"#E0E0E0",leftEye:"#30FF30",leftEyebrow:"#30FF30",leftIris:"#30FF30",rightEye:"#FF3030",rightEyebrow:"#FF3030",rightIris:"#FF3030",faceOval:"#E0E0E0"};return t1(async()=>{const s=e.value.getContext("2d");function a(o,u){s.beginPath(),o.forEach((c,f)=>{f===0?s.moveTo(c.x,c.y):s.lineTo(c.x,c.y)}),u&&s.closePath(),s.stroke()}const i=new Image;i.src=cy,i.onload=async()=>{e.value.width=i.width,e.value.height=i.height,s.drawImage(i,0,0,i.width,i.height);const o=Hn.MediaPipeFaceMesh,c=await(await oy(o,{runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh"})).estimateFaces(i);c.forEach(p=>{s.beginPath(),s.strokeStyle="#f00",s.fillStyle="#f00",s.lineWidth=1,s.rect(p.box.xMin,p.box.yMin,p.box.width,p.box.height),s.stroke(),s.closePath(),p.keypoints.forEach(g=>{s.beginPath(),s.arc(g.x,g.y,3,0,2*Math.PI),s.fill()});for(let g=0;g<t.length/3;g++){const v=[t[g*3],t[g*3+1],t[g*3+2]].map(S=>p.keypoints[S]);a(v,!0)}});const f=uy.getKeypointIndexByContour(Hn.MediaPipeFaceMesh);for(const[p,g]of Object.entries(f)){s.strokeStyle=r[p],s.lineWidth=3;const v=g.map(S=>c[0].keypoints[S]);v.every(S=>S!=null)&&a(v,!0)}s.strokeStyle="#ff0",s.lineWidth=3}}),(s,a)=>(n1(),r1("div",ly,[s1("canvas",{ref_key:"canvas",ref:e,class:"absolute w-100% h-100%"},null,512)]))}});const my=a1(hy,[["__scopeId","data-v-7981364e"]]);export{my as default};
