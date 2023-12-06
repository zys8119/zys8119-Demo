import{c as Le}from"./_commonjsHelpers-edff4021.js";import{r as B1}from"./___vite-browser-external_commonjs-proxy-4a6280a4.js";import{d as j1,r as z1,h as V1,o as M1,c as U1,a as K1,_ as W1}from"./index-b01273ef.js";var H1={};(function(){var e;function t(h){var d=0;return function(){return d<h.length?{done:!1,value:h[d++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,d,y){return h==Array.prototype||h==Object.prototype||(h[d]=y.value),h};function r(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Le=="object"&&Le];for(var d=0;d<h.length;++d){var y=h[d];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=r(this);function a(h,d){if(d)t:{var y=s;h=h.split(".");for(var k=0;k<h.length-1;k++){var L=h[k];if(!(L in y))break t;y=y[L]}h=h[h.length-1],k=y[h],d=d(k),d!=k&&d!=null&&n(y,h,{configurable:!0,writable:!0,value:d})}}a("Symbol",function(h){function d(V){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new y(k+(V||"")+"_"+L++,V)}function y(V,R){this.g=V,n(this,"description",{configurable:!0,writable:!0,value:R})}if(h)return h;y.prototype.toString=function(){return this.g};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",L=0;return d}),a("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),y=0;y<d.length;y++){var k=s[d[y]];typeof k=="function"&&typeof k.prototype[h]!="function"&&n(k.prototype,h,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return h});function o(h){return h={next:h},h[Symbol.iterator]=function(){return this},h}function i(h){var d=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return d?d.call(h):{next:t(h)}}function u(h){if(!(h instanceof Array)){h=i(h);for(var d,y=[];!(d=h.next()).done;)y.push(d.value);h=y}return h}var l=typeof Object.create=="function"?Object.create:function(h){function d(){}return d.prototype=h,new d},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var p;t:{var b={a:!0},v={};try{v.__proto__=b,p=v.a;break t}catch{}p=!1}f=p?function(h,d){if(h.__proto__=d,h.__proto__!==d)throw new TypeError(h+" is not extensible");return h}:null}var S=f;function $(h,d){if(h.prototype=l(d.prototype),h.prototype.constructor=h,S)S(h,d);else for(var y in d)if(y!="prototype")if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(d,y);k&&Object.defineProperty(h,y,k)}else h[y]=d[y];h.ea=d.prototype}function I(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function F(h){if(h.l)throw new TypeError("Generator is already running");h.l=!0}I.prototype.o=function(h){this.h=h};function G(h,d){h.j={U:d,V:!0},h.g=h.m||h.s}I.prototype.return=function(h){this.j={return:h},this.g=this.s};function j(h,d,y){return h.g=y,{value:d}}function B(h){this.g=new I,this.h=h}function z(h,d){F(h.g);var y=h.g.i;return y?U(h,"return"in y?y.return:function(k){return{value:k,done:!0}},d,h.g.return):(h.g.return(d),Z(h))}function U(h,d,y,k){try{var L=d.call(h.g.i,y);if(!(L instanceof Object))throw new TypeError("Iterator result "+L+" is not an object");if(!L.done)return h.g.l=!1,L;var V=L.value}catch(R){return h.g.i=null,G(h.g,R),Z(h)}return h.g.i=null,k.call(h.g,V),Z(h)}function Z(h){for(;h.g.g;)try{var d=h.h(h.g);if(d)return h.g.l=!1,{value:d.value,done:!1}}catch(y){h.g.h=void 0,G(h.g,y)}if(h.g.l=!1,h.g.j){if(d=h.g.j,h.g.j=null,d.V)throw d.U;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function nt(h){this.next=function(d){return F(h.g),h.g.i?d=U(h,h.g.i.next,d,h.g.o):(h.g.o(d),d=Z(h)),d},this.throw=function(d){return F(h.g),h.g.i?d=U(h,h.g.i.throw,d,h.g.o):(G(h.g,d),d=Z(h)),d},this.return=function(d){return z(h,d)},this[Symbol.iterator]=function(){return this}}function q(h,d){return d=new nt(new B(d)),S&&h.prototype&&S(d,h.prototype),d}function tt(h,d){h instanceof String&&(h+="");var y=0,k=!1,L={next:function(){if(!k&&y<h.length){var V=y++;return{value:d(V,h[V]),done:!1}}return k=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}var it=typeof Object.assign=="function"?Object.assign:function(h,d){for(var y=1;y<arguments.length;y++){var k=arguments[y];if(k)for(var L in k)Object.prototype.hasOwnProperty.call(k,L)&&(h[L]=k[L])}return h};a("Object.assign",function(h){return h||it}),a("Promise",function(h){function d(R){this.h=0,this.i=void 0,this.g=[],this.o=!1;var K=this.j();try{R(K.resolve,K.reject)}catch(X){K.reject(X)}}function y(){this.g=null}function k(R){return R instanceof d?R:new d(function(K){K(R)})}if(h)return h;y.prototype.h=function(R){if(this.g==null){this.g=[];var K=this;this.i(function(){K.l()})}this.g.push(R)};var L=s.setTimeout;y.prototype.i=function(R){L(R,0)},y.prototype.l=function(){for(;this.g&&this.g.length;){var R=this.g;this.g=[];for(var K=0;K<R.length;++K){var X=R[K];R[K]=null;try{X()}catch(et){this.j(et)}}}this.g=null},y.prototype.j=function(R){this.i(function(){throw R})},d.prototype.j=function(){function R(et){return function(ot){X||(X=!0,et.call(K,ot))}}var K=this,X=!1;return{resolve:R(this.C),reject:R(this.l)}},d.prototype.C=function(R){if(R===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof d)this.F(R);else{t:switch(typeof R){case"object":var K=R!=null;break t;case"function":K=!0;break t;default:K=!1}K?this.u(R):this.m(R)}},d.prototype.u=function(R){var K=void 0;try{K=R.then}catch(X){this.l(X);return}typeof K=="function"?this.G(K,R):this.m(R)},d.prototype.l=function(R){this.s(2,R)},d.prototype.m=function(R){this.s(1,R)},d.prototype.s=function(R,K){if(this.h!=0)throw Error("Cannot settle("+R+", "+K+"): Promise already settled in state"+this.h);this.h=R,this.i=K,this.h===2&&this.D(),this.A()},d.prototype.D=function(){var R=this;L(function(){if(R.B()){var K=s.console;typeof K<"u"&&K.error(R.i)}},1)},d.prototype.B=function(){if(this.o)return!1;var R=s.CustomEvent,K=s.Event,X=s.dispatchEvent;return typeof X>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof K=="function"?R=new K("unhandledrejection",{cancelable:!0}):(R=s.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.i,X(R))},d.prototype.A=function(){if(this.g!=null){for(var R=0;R<this.g.length;++R)V.h(this.g[R]);this.g=null}};var V=new y;return d.prototype.F=function(R){var K=this.j();R.J(K.resolve,K.reject)},d.prototype.G=function(R,K){var X=this.j();try{R.call(K,X.resolve,X.reject)}catch(et){X.reject(et)}},d.prototype.then=function(R,K){function X(ft,ct){return typeof ft=="function"?function(rt){try{et(ft(rt))}catch(c){ot(c)}}:ct}var et,ot,dt=new d(function(ft,ct){et=ft,ot=ct});return this.J(X(R,et),X(K,ot)),dt},d.prototype.catch=function(R){return this.then(void 0,R)},d.prototype.J=function(R,K){function X(){switch(et.h){case 1:R(et.i);break;case 2:K(et.i);break;default:throw Error("Unexpected state: "+et.h)}}var et=this;this.g==null?V.h(X):this.g.push(X),this.o=!0},d.resolve=k,d.reject=function(R){return new d(function(K,X){X(R)})},d.race=function(R){return new d(function(K,X){for(var et=i(R),ot=et.next();!ot.done;ot=et.next())k(ot.value).J(K,X)})},d.all=function(R){var K=i(R),X=K.next();return X.done?k([]):new d(function(et,ot){function dt(rt){return function(c){ft[rt]=c,ct--,ct==0&&et(ft)}}var ft=[],ct=0;do ft.push(void 0),ct++,k(X.value).J(dt(ft.length-1),ot),X=K.next();while(!X.done)})},d}),a("Object.is",function(h){return h||function(d,y){return d===y?d!==0||1/d===1/y:d!==d&&y!==y}}),a("Array.prototype.includes",function(h){return h||function(d,y){var k=this;k instanceof String&&(k=String(k));var L=k.length;for(y=y||0,0>y&&(y=Math.max(y+L,0));y<L;y++){var V=k[y];if(V===d||Object.is(V,d))return!0}return!1}}),a("String.prototype.includes",function(h){return h||function(d,y){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,y||0)!==-1}}),a("Array.prototype.keys",function(h){return h||function(){return tt(this,function(d){return d})}});var yt=this||self;function at(h,d){h=h.split(".");var y=yt;h[0]in y||typeof y.execScript>"u"||y.execScript("var "+h[0]);for(var k;h.length&&(k=h.shift());)h.length||d===void 0?y[k]&&y[k]!==Object.prototype[k]?y=y[k]:y=y[k]={}:y[k]=d}function Et(h,d){return d=String.fromCharCode.apply(null,d),h==null?d:h+d}var Rt,Kt=typeof TextDecoder<"u",zt,ve=typeof TextEncoder<"u";function le(h){if(ve)h=(zt||(zt=new TextEncoder)).encode(h);else{var d=void 0;d=d===void 0?!1:d;for(var y=0,k=new Uint8Array(3*h.length),L=0;L<h.length;L++){var V=h.charCodeAt(L);if(128>V)k[y++]=V;else{if(2048>V)k[y++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&L<h.length){var R=h.charCodeAt(++L);if(56320<=R&&57343>=R){V=1024*(V-55296)+R-56320+65536,k[y++]=V>>18|240,k[y++]=V>>12&63|128,k[y++]=V>>6&63|128,k[y++]=V&63|128;continue}else L--}if(d)throw Error("Found an unpaired surrogate");V=65533}k[y++]=V>>12|224,k[y++]=V>>6&63|128}k[y++]=V&63|128}}h=k.subarray(0,y)}return h}var yn={},_e=null;function jr(h,d){d===void 0&&(d=0),Vr(),d=yn[d];for(var y=Array(Math.floor(h.length/3)),k=d[64]||"",L=0,V=0;L<h.length-2;L+=3){var R=h[L],K=h[L+1],X=h[L+2],et=d[R>>2];R=d[(R&3)<<4|K>>4],K=d[(K&15)<<2|X>>6],X=d[X&63],y[V++]=et+R+K+X}switch(et=0,X=k,h.length-L){case 2:et=h[L+1],X=d[(et&15)<<2]||k;case 1:h=h[L],y[V]=d[h>>2]+d[(h&3)<<4|et>>4]+X+k}return y.join("")}function ir(h){var d=h.length,y=3*d/4;y%3?y=Math.floor(y):"=.".indexOf(h[d-1])!=-1&&(y="=.".indexOf(h[d-2])!=-1?y-2:y-1);var k=new Uint8Array(y),L=0;return zr(h,function(V){k[L++]=V}),k.subarray(0,L)}function zr(h,d){function y(X){for(;k<h.length;){var et=h.charAt(k++),ot=_e[et];if(ot!=null)return ot;if(!/^[\s\xa0]*$/.test(et))throw Error("Unknown base64 encoding at char: "+et)}return X}Vr();for(var k=0;;){var L=y(-1),V=y(0),R=y(64),K=y(64);if(K===64&&L===-1)break;d(L<<2|V>>4),R!=64&&(d(V<<4&240|R>>2),K!=64&&d(R<<6&192|K))}}function Vr(){if(!_e){_e={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],y=0;5>y;y++){var k=h.concat(d[y].split(""));yn[y]=k;for(var L=0;L<k.length;L++){var V=k[L];_e[V]===void 0&&(_e[V]=L)}}}}var $e=typeof Uint8Array.prototype.slice=="function",ur;function Vn(h,d,y){return d===y?ur||(ur=new Uint8Array(0)):$e?h.slice(d,y):new Uint8Array(h.subarray(d,y))}var he=0,fe=0;function Dt(h,d){d=d===void 0?{}:d,d=d.v===void 0?!1:d.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=d,h&&Qe(this,h)}function Qe(h,d){d=d.constructor===Uint8Array?d:d.constructor===ArrayBuffer?new Uint8Array(d):d.constructor===Array?new Uint8Array(d):d.constructor===String?ir(d):d instanceof Uint8Array?new Uint8Array(d.buffer,d.byteOffset,d.byteLength):new Uint8Array(0),h.h=d,h.l=0,h.j=h.h.length,h.g=h.l}Dt.prototype.reset=function(){this.g=this.l};function bn(h){for(var d=128,y=0,k=0,L=0;4>L&&128<=d;L++)d=h.h[h.g++],y|=(d&127)<<7*L;if(128<=d&&(d=h.h[h.g++],y|=(d&127)<<28,k|=(d&127)>>4),128<=d)for(L=0;5>L&&128<=d;L++)d=h.h[h.g++],k|=(d&127)<<7*L+3;if(128>d)return h=y>>>0,d=k>>>0,(k=d&2147483648)&&(h=~h+1>>>0,d=~d>>>0,h==0&&(d=d+1>>>0)),h=4294967296*d+(h>>>0),k?-h:h;h.m=!0}Dt.prototype.i=function(){var h=this.h,d=h[this.g],y=d&127;return 128>d?(this.g+=1,y):(d=h[this.g+1],y|=(d&127)<<7,128>d?(this.g+=2,y):(d=h[this.g+2],y|=(d&127)<<14,128>d?(this.g+=3,y):(d=h[this.g+3],y|=(d&127)<<21,128>d?(this.g+=4,y):(d=h[this.g+4],y|=(d&15)<<28,128>d?(this.g+=5,y>>>0):(this.g+=5,128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&this.g++,y)))))},Dt.prototype.o=function(){var h=this.h[this.g],d=this.h[this.g+1],y=this.h[this.g+2],k=this.h[this.g+3];return this.g+=4,y=(h<<0|d<<8|y<<16|k<<24)>>>0,h=2*(y>>31)+1,d=y>>>23&255,y&=8388607,d==255?y?NaN:1/0*h:d==0?h*Math.pow(2,-149)*y:h*Math.pow(2,d-150)*(y+Math.pow(2,23))};var Mn=[];function pe(){this.g=new Uint8Array(64),this.h=0}pe.prototype.push=function(h){if(!(this.h+1<this.g.length)){var d=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(d)}this.g[this.h++]=h},pe.prototype.length=function(){return this.h},pe.prototype.end=function(){var h=this.g,d=this.h;return this.h=0,Vn(h,0,d)};function Te(h,d){for(;127<d;)h.push(d&127|128),d>>>=7;h.push(d)}function tn(h){var d={},y=d.N===void 0?!1:d.N;this.o={v:d.v===void 0?!1:d.v},this.N=y,d=this.o,Mn.length?(y=Mn.pop(),d&&(y.v=d.v),h&&Qe(y,h),h=y):h=new Dt(h,d),this.g=h,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}tn.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function te(h){var d=h.g;if((d=d.g==d.j)||(d=h.j)||(d=h.g,d=d.m||0>d.g||d.g>d.j),d)return!1;h.m=h.g.g,d=h.g.i();var y=d&7;return y!=0&&y!=5&&y!=1&&y!=2&&y!=3&&y!=4?(h.j=!0,!1):(h.i=d,h.l=d>>>3,h.h=y,!0)}function Ne(h){switch(h.h){case 0:if(h.h!=0)Ne(h);else{for(h=h.g;h.h[h.g]&128;)h.g++;h.g++}break;case 1:h.h!=1?Ne(h):(h=h.g,h.g+=8);break;case 2:if(h.h!=2)Ne(h);else{var d=h.g.i();h=h.g,h.g+=d}break;case 5:h.h!=5?Ne(h):(h=h.g,h.g+=4);break;case 3:d=h.l;do{if(!te(h)){h.j=!0;break}if(h.h==4){h.l!=d&&(h.j=!0);break}Ne(h)}while(1);break;default:h.j=!0}}function Un(h,d,y){var k=h.g.j,L=h.g.i(),V=h.g.g+L;if(h.g.j=V,y(d,h),y=V-h.g.g,y!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+L+" bytes, instead read "+(L-y)+" bytes, either the data ended unexpectedly or the message misreported its own length");return h.g.g=V,h.g.j=k,d}function Pt(h){return h.g.o()}function wn(h){var d=h.g.i();h=h.g;var y=h.g;h.g+=d,h=h.h;var k;if(Kt)(k=Rt)||(k=Rt=new TextDecoder("utf-8",{fatal:!1})),k=k.decode(h.subarray(y,y+d));else{d=y+d;for(var L=[],V=null,R,K,X;y<d;)R=h[y++],128>R?L.push(R):224>R?y>=d?L.push(65533):(K=h[y++],194>R||(K&192)!==128?(y--,L.push(65533)):L.push((R&31)<<6|K&63)):240>R?y>=d-1?L.push(65533):(K=h[y++],(K&192)!==128||R===224&&160>K||R===237&&160<=K||((k=h[y++])&192)!==128?(y--,L.push(65533)):L.push((R&15)<<12|(K&63)<<6|k&63)):244>=R?y>=d-2?L.push(65533):(K=h[y++],(K&192)!==128||(R<<28)+(K-144)>>30||((k=h[y++])&192)!==128||((X=h[y++])&192)!==128?(y--,L.push(65533)):(R=(R&7)<<18|(K&63)<<12|(k&63)<<6|X&63,R-=65536,L.push((R>>10&1023)+55296,(R&1023)+56320))):L.push(65533),8192<=L.length&&(V=Et(V,L),L.length=0);k=Et(V,L)}return k}function cr(h,d,y){var k=h.g.i();for(k=h.g.g+k;h.g.g<k;)y.push(d.call(h.g))}function lr(h,d){h.h==2?cr(h,Dt.prototype.o,d):d.push(Pt(h))}function Be(){this.h=[],this.i=0,this.g=new pe}function de(h,d){d.length!==0&&(h.h.push(d),h.i+=d.length)}function vn(h){var d=h.i+h.g.length();if(d===0)return new Uint8Array(0);d=new Uint8Array(d);for(var y=h.h,k=y.length,L=0,V=0;V<k;V++){var R=y[V];R.length!==0&&(d.set(R,L),L+=R.length)}return y=h.g,k=y.h,k!==0&&(d.set(y.g.subarray(0,k),L),y.h=0),h.h=[d],d}function ee(h,d,y){if(y!=null){Te(h.g,8*d+5),h=h.g;var k=y;k=(y=0>k?1:0)?-k:k,k===0?0<1/k?he=fe=0:(fe=0,he=2147483648):isNaN(k)?(fe=0,he=2147483647):34028234663852886e22<k?(fe=0,he=(y<<31|2139095040)>>>0):11754943508222875e-54>k?(k=Math.round(k/Math.pow(2,-149)),fe=0,he=(y<<31|k)>>>0):(d=Math.floor(Math.log(k)/Math.LN2),k*=Math.pow(2,-d),k=Math.round(8388608*k),16777216<=k&&++d,fe=0,he=(y<<31|d+127<<23|k&8388607)>>>0),y=he,h.push(y>>>0&255),h.push(y>>>8&255),h.push(y>>>16&255),h.push(y>>>24&255)}}var Tn=typeof Uint8Array=="function";function hr(h,d,y){if(h!=null)return typeof h=="object"?Tn&&h instanceof Uint8Array?y(h):fr(h,d,y):d(h)}function fr(h,d,y){if(Array.isArray(h)){for(var k=Array(h.length),L=0;L<h.length;L++)k[L]=hr(h[L],d,y);return Array.isArray(h)&&h.W&&Wt(k),k}k={};for(L in h)k[L]=hr(h[L],d,y);return k}function Mr(h){return typeof h=="number"?isFinite(h)?h:String(h):h}var Ur={W:{value:!0,configurable:!0}};function Wt(h){return Array.isArray(h)&&!Object.isFrozen(h)&&Object.defineProperties(h,Ur),h}var Ft;function Ct(h,d,y){var k=Ft;Ft=null,h||(h=k),k=this.constructor.ca,h||(h=k?[k]:[]),this.j=k?0:-1,this.m=this.g=null,this.h=h;t:{if(k=this.h.length,h=k-1,k&&(k=this.h[h],!(k===null||typeof k!="object"||Array.isArray(k)||Tn&&k instanceof Uint8Array))){this.l=h-this.j,this.i=k;break t}d!==void 0&&-1<d?(this.l=Math.max(d,h+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(y)for(d=0;d<y.length;d++)h=y[d],h<this.l?(h+=this.j,(k=this.h[h])?Wt(k):this.h[h]=Jt):(Nn(this),(k=this.i[h])?Wt(k):this.i[h]=Jt)}var Jt=Object.freeze(Wt([]));function Nn(h){var d=h.l+h.j;h.h[d]||(h.i=h.h[d]={})}function St(h,d,y){return d===-1?null:y!==void 0&&y||d>=h.l?h.i?h.i[d]:void 0:h.h[d+h.j]}function Sn(h,d){var y=y===void 0?!1:y,k=St(h,d,y);return k==null&&(k=Jt),k===Jt&&(k=Wt([]),pt(h,d,k,y)),k}function pr(h){var d=Sn(h,3);if(h.m||(h.m={}),!h.m[3]){for(var y=0;y<d.length;y++)d[y]=+d[y];h.m[3]=!0}return d}function Ae(h,d,y){return h=St(h,d),h??y}function oe(h,d,y){return h=St(h,d),h=h==null?h:+h,h??(y===void 0?0:y)}function pt(h,d,y,k){k!==void 0&&k||d>=h.l?(Nn(h),h.i[d]=y):h.h[d+h.j]=y}function Kr(h,d,y){if(y===-1)return null;if(h.g||(h.g={}),!h.g[y]){var k=St(h,y,!1);k&&(h.g[y]=new d(k))}return h.g[y]}function Kn(h,d){h.g||(h.g={});var y=h.g[1];if(!y){var k=Sn(h,1);y=[];for(var L=0;L<k.length;L++)y[L]=new d(k[L]);h.g[1]=y}return y}function xn(h,d,y){var k=k===void 0?!1:k;h.g||(h.g={});var L=y&&Ie(y);h.g[d]=y,pt(h,d,L,k)}function En(h,d,y,k){var L=Kn(h,y);d=d||new y,h=Sn(h,1),k!=null?(L.splice(k,0,d),h.splice(k,0,Ie(d))):(L.push(d),h.push(Ie(d)))}Ct.prototype.toJSON=function(){var h=Ie(this);return fr(h,Mr,jr)};function Ie(h,d){if(h.g)for(var y in h.g){var k=h.g[y];if(Array.isArray(k))for(var L=0;L<k.length;L++)k[L]&&Ie(k[L]);else k&&Ie(k)}return h.h}Ct.prototype.toString=function(){return Ie(this).toString()};function Wn(h,d){if(h=h.o){de(d,d.g.end());for(var y=0;y<h.length;y++)de(d,h[y])}}function ie(h,d){if(d.h==4)return!1;var y=d.m;return Ne(d),d.N||(d=Vn(d.g.h,y,d.g.g),(y=h.o)?y.push(d):h.o=[d]),!0}function Oe(h){Ct.call(this,h,-1,Ls)}$(Oe,Ct),Oe.prototype.getRows=function(){return St(this,1)},Oe.prototype.getCols=function(){return St(this,2)},Oe.prototype.getPackedDataList=function(){return pr(this)},Oe.prototype.getLayout=function(){return Ae(this,4,0)};function Wr(h,d){for(;te(d);)switch(d.i){case 8:var y=d.g.i();pt(h,1,y);break;case 16:y=d.g.i(),pt(h,2,y);break;case 29:case 26:lr(d,h.getPackedDataList());break;case 32:y=bn(d.g),pt(h,4,y);break;default:if(!ie(h,d))return h}return h}var Ls=[3];function Vt(h,d){var y=void 0;return new(y||(y=Promise))(function(k,L){function V(X){try{K(d.next(X))}catch(et){L(et)}}function R(X){try{K(d.throw(X))}catch(et){L(et)}}function K(X){X.done?k(X.value):new y(function(et){et(X.value)}).then(V,R)}K((d=d.apply(h,void 0)).next())})}function De(h){Ct.call(this,h)}$(De,Ct);function Hr(h,d){for(;te(d);)switch(d.i){case 8:var y=d.g.i();pt(h,1,y);break;case 21:y=Pt(d),pt(h,2,y);break;case 26:y=wn(d),pt(h,3,y);break;case 34:y=wn(d),pt(h,4,y);break;default:if(!ie(h,d))return h}return h}function Hn(h){Ct.call(this,h,-1,Gr)}$(Hn,Ct),Hn.prototype.addClassification=function(h,d){return En(this,h,De,d),this};var Gr=[1];function en(h){Ct.call(this,h)}$(en,Ct);function Rs(h,d){for(;te(d);)switch(d.i){case 13:var y=Pt(d);pt(h,1,y);break;case 21:y=Pt(d),pt(h,2,y);break;case 29:y=Pt(d),pt(h,3,y);break;case 37:y=Pt(d),pt(h,4,y);break;case 45:y=Pt(d),pt(h,5,y);break;default:if(!ie(h,d))return h}return h}function qr(h){Ct.call(this,h,-1,Yr)}$(qr,Ct);function Xr(h){t:{var d=new qr;for(h=new tn(h);te(h);)switch(h.i){case 10:var y=Un(h,new en,Rs);En(d,y,en,void 0);break;default:if(!ie(d,h))break t}}return d}var Yr=[1];function Gn(h){Ct.call(this,h)}$(Gn,Ct);function je(h){Ct.call(this,h,-1,Bs)}$(je,Ct),je.prototype.getVertexType=function(){return Ae(this,1,0)},je.prototype.getPrimitiveType=function(){return Ae(this,2,0)},je.prototype.getVertexBufferList=function(){return pr(this)},je.prototype.getIndexBufferList=function(){return Sn(this,4)};function Ps(h,d){for(;te(d);)switch(d.i){case 8:var y=bn(d.g);pt(h,1,y);break;case 16:y=bn(d.g),pt(h,2,y);break;case 29:case 26:lr(d,h.getVertexBufferList());break;case 32:case 34:y=d;var k=h.getIndexBufferList();y.h==2?cr(y,Dt.prototype.i,k):k.push(y.g.i());break;default:if(!ie(h,d))return h}return h}var Bs=[3,4];function qn(h){Ct.call(this,h)}$(qn,Ct),qn.prototype.getMesh=function(){return Kr(this,je,1)},qn.prototype.getPoseTransformMatrix=function(){return Kr(this,Oe,2)};function Jr(h){t:{var d=new qn;for(h=new tn(h);te(h);)switch(h.i){case 10:var y=Un(h,new je,Ps);xn(d,1,y);break;case 18:y=Un(h,new Oe,Wr),xn(d,2,y);break;default:if(!ie(d,h))break t}}return d}function dr(h,d,y){if(y=h.createShader(y===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(y,d),h.compileShader(y),!h.getShaderParameter(y,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(y));return y}function mr(h){return Kn(h,De).map(function(d){return{index:Ae(d,1,0),Y:oe(d,2),label:St(d,3)!=null?Ae(d,3,""):void 0,displayName:St(d,4)!=null?Ae(d,4,""):void 0}})}function gr(h){return{x:oe(h,1),y:oe(h,2),z:oe(h,3),visibility:St(h,4)!=null?oe(h,4):void 0}}function kn(h,d){this.h=h,this.g=d,this.l=0}function nn(h,d,y){return ue(h,d),typeof h.g.canvas.transferToImageBitmap=="function"?Promise.resolve(h.g.canvas.transferToImageBitmap()):y?Promise.resolve(h.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.g.canvas):(h.i===void 0&&(h.i=document.createElement("canvas")),new Promise(function(k){h.i.height=h.g.canvas.height,h.i.width=h.g.canvas.width,h.i.getContext("2d",{}).drawImage(h.g.canvas,0,0,h.g.canvas.width,h.g.canvas.height),k(h.i)}))}function ue(h,d){var y=h.g;if(h.m===void 0){var k=dr(y,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),L=dr(y,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),V=y.createProgram();if(y.attachShader(V,k),y.attachShader(V,L),y.linkProgram(V),!y.getProgramParameter(V,y.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+y.getProgramInfoLog(V));k=h.m=V,y.useProgram(k),L=y.getUniformLocation(k,"sampler0"),h.j={I:y.getAttribLocation(k,"aVertex"),H:y.getAttribLocation(k,"aTex"),da:L},h.s=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,h.s),y.enableVertexAttribArray(h.j.I),y.vertexAttribPointer(h.j.I,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),h.o=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,h.o),y.enableVertexAttribArray(h.j.H),y.vertexAttribPointer(h.j.H,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),y.uniform1i(L,0)}k=h.j,y.useProgram(h.m),y.canvas.width=d.width,y.canvas.height=d.height,y.viewport(0,0,d.width,d.height),y.activeTexture(y.TEXTURE0),h.h.bindTexture2d(d.glName),y.enableVertexAttribArray(k.I),y.bindBuffer(y.ARRAY_BUFFER,h.s),y.vertexAttribPointer(k.I,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray(k.H),y.bindBuffer(y.ARRAY_BUFFER,h.o),y.vertexAttribPointer(k.H,2,y.FLOAT,!1,0,0),y.bindFramebuffer(y.DRAW_FRAMEBUFFER?y.DRAW_FRAMEBUFFER:y.FRAMEBUFFER,null),y.clearColor(0,0,0,0),y.clear(y.COLOR_BUFFER_BIT),y.colorMask(!0,!0,!0,!0),y.drawArrays(y.TRIANGLE_FAN,0,4),y.disableVertexAttribArray(k.I),y.disableVertexAttribArray(k.H),y.bindBuffer(y.ARRAY_BUFFER,null),h.h.bindTexture2d(0)}function js(h){this.g=h}var zs=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Zr(h,d){return d+h}function yr(h,d){window[h]=d}function ne(h){var d=document.createElement("script");return d.setAttribute("src",h),d.setAttribute("crossorigin","anonymous"),new Promise(function(y){d.addEventListener("load",function(){y()},!1),d.addEventListener("error",function(){y()},!1),document.body.appendChild(d)})}function Qr(){return Vt(this,function h(){return q(h,function(d){switch(d.g){case 1:return d.m=2,j(d,WebAssembly.instantiate(zs),4);case 4:d.g=3,d.m=0;break;case 2:return d.m=0,d.j=null,d.return(!1);case 3:return d.return(!0)}})})}function ze(h){if(this.g=h,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=h&&h.locateFile||Zr,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=d,h.options){d=i(Object.keys(h.options));for(var y=d.next();!y.done;y=d.next()){y=y.value;var k=h.options[y].default;k!==void 0&&(this.j[y]=typeof k=="function"?k():k)}}}e=ze.prototype,e.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function ts(h,d){return h.g.files===void 0?[]:typeof h.g.files=="function"?h.g.files(d):h.g.files}function br(h){return Vt(h,function d(){var y=this,k,L,V,R,K,X,et,ot,dt,ft,ct;return q(d,function(rt){switch(rt.g){case 1:return k=y,y.R?(L=ts(y,y.j),j(rt,Qr(),2)):rt.return();case 2:if(V=rt.h,typeof window=="object")return yr("createMediapipeSolutionsWasm",{locateFile:y.locateFile}),yr("createMediapipeSolutionsPackedAssets",{locateFile:y.locateFile}),X=L.filter(function(c){return c.data!==void 0}),et=L.filter(function(c){return c.data===void 0}),ot=Promise.all(X.map(function(c){var g=rn(k,c.url);if(c.path!==void 0){var w=c.path;g=g.then(function(T){return k.overrideFile(w,T),Promise.resolve(T)})}return g})),dt=Promise.all(et.map(function(c){return c.simd===void 0||c.simd&&V||!c.simd&&!V?ne(k.locateFile(c.url,k.S)):Promise.resolve()})).then(function(){return Vt(k,function c(){var g,w,T=this;return q(c,function(E){if(E.g==1)return g=window.createMediapipeSolutionsWasm,w=window.createMediapipeSolutionsPackedAssets,j(E,g(w),2);T.h=E.h,E.g=0})})}),ft=function(){return Vt(k,function c(){var g=this;return q(c,function(w){return g.g.graph&&g.g.graph.url?w=j(w,rn(g,g.g.graph.url),0):(w.g=0,w=void 0),w})})}(),j(rt,Promise.all([dt,ot,ft]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return R=L.filter(function(c){return c.simd===void 0||c.simd&&V||!c.simd&&!V}).map(function(c){return k.locateFile(c.url,k.S)}),importScripts.apply(null,u(R)),j(rt,createMediapipeSolutionsWasm(Module),6);case 6:y.h=rt.h,y.l=new OffscreenCanvas(1,1),y.h.canvas=y.l,K=y.h.GL.createContext(y.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),y.h.GL.makeContextCurrent(K),rt.g=4;break;case 7:if(y.l=document.createElement("canvas"),ct=y.l.getContext("webgl2",{}),!ct&&(ct=y.l.getContext("webgl",{}),!ct))return alert("Failed to create WebGL canvas context when passing video frame."),rt.return();y.D=ct,y.h.canvas=y.l,y.h.createContext(y.l,!0,!0,{});case 4:y.i=new y.h.SolutionWasm,y.R=!1,rt.g=0}})})}function Vs(h){return Vt(h,function d(){var y=this,k,L,V,R,K,X,et,ot;return q(d,function(dt){if(dt.g==1){if(y.g.graph&&y.g.graph.url&&y.P===y.g.graph.url)return dt.return();if(y.o=!0,!y.g.graph||!y.g.graph.url){dt.g=2;return}return y.P=y.g.graph.url,j(dt,rn(y,y.g.graph.url),3)}for(dt.g!=2&&(k=dt.h,y.i.loadGraph(k)),L=i(Object.keys(y.B)),V=L.next();!V.done;V=L.next())R=V.value,y.i.overrideFile(R,y.B[R]);if(y.B={},y.g.listeners)for(K=i(y.g.listeners),X=K.next();!X.done;X=K.next())et=X.value,Us(y,et);ot=y.j,y.j={},y.setOptions(ot),dt.g=0})})}e.reset=function(){return Vt(this,function h(){var d=this;return q(h,function(y){d.i&&(d.i.reset(),d.m={},d.s={}),y.g=0})})},e.setOptions=function(h,d){var y=this;if(d=d||this.g.options){for(var k=[],L=[],V={},R=i(Object.keys(h)),K=R.next();!K.done;V={K:V.K,L:V.L},K=R.next()){var X=K.value;X in this.j&&this.j[X]===h[X]||(this.j[X]=h[X],K=d[X],K!==void 0&&(K.onChange&&(V.K=K.onChange,V.L=h[X],k.push(function(et){return function(){return Vt(y,function ot(){var dt,ft=this;return q(ot,function(ct){if(ct.g==1)return j(ct,et.K(et.L),2);dt=ct.h,dt===!0&&(ft.o=!0),ct.g=0})})}}(V))),K.graphOptionXref&&(X={valueNumber:K.type===1?h[X]:0,valueBoolean:K.type===0?h[X]:!1,valueString:K.type===2?h[X]:""},K=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),K.graphOptionXref),X),L.push(K))))}(k.length!==0||L.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(L),this.u=(this.u===void 0?[]:this.u).concat(k))}};function Ms(h){return Vt(h,function d(){var y=this,k,L,V,R,K,X,et;return q(d,function(ot){switch(ot.g){case 1:if(!y.o)return ot.return();if(!y.u){ot.g=2;break}k=i(y.u),L=k.next();case 3:if(L.done){ot.g=5;break}return V=L.value,j(ot,V(),4);case 4:L=k.next(),ot.g=3;break;case 5:y.u=void 0;case 2:if(y.A){for(R=new y.h.GraphOptionChangeRequestList,K=i(y.A),X=K.next();!X.done;X=K.next())et=X.value,R.push_back(et);y.i.changeOptions(R),R.delete(),y.A=void 0}y.o=!1,ot.g=0}})})}e.initialize=function(){return Vt(this,function h(){var d=this;return q(h,function(y){return y.g==1?j(y,br(d),2):y.g!=3?j(y,Vs(d),3):j(y,Ms(d),0)})})};function rn(h,d){return Vt(h,function y(){var k=this,L,V;return q(y,function(R){return d in k.F?R.return(k.F[d]):(L=k.locateFile(d,""),V=fetch(L).then(function(K){return K.arrayBuffer()}),k.F[d]=V,R.return(V))})})}e.overrideFile=function(h,d){this.i?this.i.overrideFile(h,d):this.B[h]=d},e.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},e.send=function(h,d){return Vt(this,function y(){var k=this,L,V,R,K,X,et,ot,dt,ft;return q(y,function(ct){switch(ct.g){case 1:return k.g.inputs?(L=1e3*(d??performance.now()),j(ct,k.C,2)):ct.return();case 2:return j(ct,k.initialize(),3);case 3:for(V=new k.h.PacketDataList,R=i(Object.keys(h)),K=R.next();!K.done;K=R.next())if(X=K.value,et=k.g.inputs[X]){t:{var rt=k,c=h[X];switch(et.type){case"video":var g=rt.m[et.stream];if(g||(g=new kn(rt.h,rt.D),rt.m[et.stream]=g),rt=g,rt.l===0&&(rt.l=rt.h.createTexture()),typeof HTMLVideoElement<"u"&&c instanceof HTMLVideoElement){var w=c.videoWidth;g=c.videoHeight}else typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement?(w=c.naturalWidth,g=c.naturalHeight):(w=c.width,g=c.height);g={glName:rt.l,width:w,height:g},w=rt.g,w.canvas.width=g.width,w.canvas.height=g.height,w.activeTexture(w.TEXTURE0),rt.h.bindTexture2d(rt.l),w.texImage2D(w.TEXTURE_2D,0,w.RGBA,w.RGBA,w.UNSIGNED_BYTE,c),rt.h.bindTexture2d(0),rt=g;break t;case"detections":for(g=rt.m[et.stream],g||(g=new js(rt.h),rt.m[et.stream]=g),rt=g,rt.data||(rt.data=new rt.g.DetectionListData),rt.data.reset(c.length),g=0;g<c.length;++g){w=c[g];var T=rt.data,E=T.setBoundingBox,x=g,_=w.T,D=new Gn;pt(D,1,_.Z),pt(D,2,_.$),pt(D,3,_.height),pt(D,4,_.width),pt(D,5,_.rotation),pt(D,6,_.X);var P=_=new Be;ee(P,1,St(D,1)),ee(P,2,St(D,2)),ee(P,3,St(D,3)),ee(P,4,St(D,4)),ee(P,5,St(D,5));var M=St(D,6);if(M!=null&&M!=null){Te(P.g,48);var H=P.g,Y=M;M=0>Y,Y=Math.abs(Y);var J=Y>>>0;for(Y=Math.floor((Y-J)/4294967296),Y>>>=0,M&&(Y=~Y>>>0,J=(~J>>>0)+1,4294967295<J&&(J=0,Y++,4294967295<Y&&(Y=0))),he=J,fe=Y,M=he,J=fe;0<J||127<M;)H.push(M&127|128),M=(M>>>7|J<<25)>>>0,J>>>=7;H.push(M)}if(Wn(D,P),_=vn(_),E.call(T,x,_),w.O)for(T=0;T<w.O.length;++T)D=w.O[T],P=!!D.visibility,E=rt.data,x=E.addNormalizedLandmark,_=g,D=Object.assign(Object.assign({},D),{visibility:P?D.visibility:0}),P=new en,pt(P,1,D.x),pt(P,2,D.y),pt(P,3,D.z),D.visibility&&pt(P,4,D.visibility),H=D=new Be,ee(H,1,St(P,1)),ee(H,2,St(P,2)),ee(H,3,St(P,3)),ee(H,4,St(P,4)),ee(H,5,St(P,5)),Wn(P,H),D=vn(D),x.call(E,_,D);if(w.M)for(T=0;T<w.M.length;++T){if(E=rt.data,x=E.addClassification,_=g,D=w.M[T],P=new De,pt(P,2,D.Y),D.index&&pt(P,1,D.index),D.label&&pt(P,3,D.label),D.displayName&&pt(P,4,D.displayName),H=D=new Be,J=St(P,1),J!=null&&J!=null)if(Te(H.g,8),M=H.g,0<=J)Te(M,J);else{for(Y=0;9>Y;Y++)M.push(J&127|128),J>>=7;M.push(1)}ee(H,2,St(P,2)),M=St(P,3),M!=null&&(M=le(M),Te(H.g,26),Te(H.g,M.length),de(H,H.g.end()),de(H,M)),M=St(P,4),M!=null&&(M=le(M),Te(H.g,34),Te(H.g,M.length),de(H,H.g.end()),de(H,M)),Wn(P,H),D=vn(D),x.call(E,_,D)}}rt=rt.data;break t;default:rt={}}}switch(ot=rt,dt=et.stream,et.type){case"video":V.pushTexture2d(Object.assign(Object.assign({},ot),{stream:dt,timestamp:L}));break;case"detections":ft=ot,ft.stream=dt,ft.timestamp=L,V.pushDetectionList(ft);break;default:throw Error("Unknown input config type: '"+et.type+"'")}}return k.i.send(V),j(ct,k.C,4);case 4:V.delete(),ct.g=0}})})};function es(h,d,y){return Vt(h,function k(){var L,V,R,K,X,et,ot=this,dt,ft,ct,rt,c,g,w,T;return q(k,function(E){switch(E.g){case 1:if(!y)return E.return(d);for(L={},V=0,R=i(Object.keys(y)),K=R.next();!K.done;K=R.next())X=K.value,et=y[X],typeof et!="string"&&et.type==="texture"&&d[et.stream]!==void 0&&++V;1<V&&(ot.G=!1),dt=i(Object.keys(y)),K=dt.next();case 2:if(K.done){E.g=4;break}if(ft=K.value,ct=y[ft],typeof ct=="string")return w=L,T=ft,j(E,ns(ot,ft,d[ct]),14);if(rt=d[ct.stream],ct.type==="detection_list"){if(rt){for(var x=rt.getRectList(),_=rt.getLandmarksList(),D=rt.getClassificationsList(),P=[],M=0;M<x.size();++M){var H=x.get(M);t:{var Y=new Gn;for(H=new tn(H);te(H);)switch(H.i){case 13:var J=Pt(H);pt(Y,1,J);break;case 21:J=Pt(H),pt(Y,2,J);break;case 29:J=Pt(H),pt(Y,3,J);break;case 37:J=Pt(H),pt(Y,4,J);break;case 45:J=Pt(H),pt(Y,5,J);break;case 48:J=bn(H.g),pt(Y,6,J);break;default:if(!ie(Y,H))break t}}Y={Z:oe(Y,1),$:oe(Y,2),height:oe(Y,3),width:oe(Y,4),rotation:oe(Y,5,0),X:Ae(Y,6,0)},H=Kn(Xr(_.get(M)),en).map(gr);var Q=D.get(M);t:for(J=new Hn,Q=new tn(Q);te(Q);)switch(Q.i){case 10:J.addClassification(Un(Q,new De,Hr));break;default:if(!ie(J,Q))break t}Y={T:Y,O:H,M:mr(J)},P.push(Y)}x=P}else x=[];L[ft]=x,E.g=7;break}if(ct.type==="proto_list"){if(rt){for(x=Array(rt.size()),_=0;_<rt.size();_++)x[_]=rt.get(_);rt.delete()}else x=[];L[ft]=x,E.g=7;break}if(rt===void 0){E.g=3;break}if(ct.type==="float_list"){L[ft]=rt,E.g=7;break}if(ct.type==="proto"){L[ft]=rt,E.g=7;break}if(ct.type!=="texture")throw Error("Unknown output config type: '"+ct.type+"'");return c=ot.s[ft],c||(c=new kn(ot.h,ot.D),ot.s[ft]=c),j(E,nn(c,rt,ot.G),13);case 13:g=E.h,L[ft]=g;case 7:ct.transform&&L[ft]&&(L[ft]=ct.transform(L[ft])),E.g=3;break;case 14:w[T]=E.h;case 3:K=dt.next(),E.g=2;break;case 4:return E.return(L)}})})}function ns(h,d,y){return Vt(h,function k(){var L=this,V;return q(k,function(R){return typeof y=="number"||y instanceof Uint8Array||y instanceof L.h.Uint8BlobList?R.return(y):y instanceof L.h.Texture2dDataOut?(V=L.s[d],V||(V=new kn(L.h,L.D),L.s[d]=V),R.return(nn(V,y,L.G))):R.return(void 0)})})}function Us(h,d){for(var y=d.name||"$",k=[].concat(u(d.wants)),L=new h.h.StringList,V=i(d.wants),R=V.next();!R.done;R=V.next())L.push_back(R.value);V=h.h.PacketListener.implement({onResults:function(K){for(var X={},et=0;et<d.wants.length;++et)X[k[et]]=K.get(et);var ot=h.listeners[y];ot&&(h.C=es(h,X,d.outs).then(function(dt){dt=ot(dt);for(var ft=0;ft<d.wants.length;++ft){var ct=X[k[ft]];typeof ct=="object"&&ct.hasOwnProperty&&ct.hasOwnProperty("delete")&&ct.delete()}dt&&(h.C=dt)}))}}),h.i.attachMultiListener(L,V),L.delete()}e.onResults=function(h,d){this.listeners[d||"$"]=h},at("Solution",ze),at("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ks(h){h=Jr(h);var d=h.getMesh();if(!d)return h;var y=new Float32Array(d.getVertexBufferList());d.getVertexBufferList=function(){return y};var k=new Uint32Array(d.getIndexBufferList());return d.getIndexBufferList=function(){return k},h}var wr={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(h){return h.map(Ks)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(h){return h.map(function(d){return Kn(Xr(d),en).map(gr)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},vr=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Tr=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Nr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Sr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],xr=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Er=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],rs=[].concat(u(vr),u(Tr),u(Nr),u(Sr),u(xr),u(Er));function ss(h){h=h||{},h=Object.assign(Object.assign({},wr),h),this.g=new ze(h)}e=ss.prototype,e.close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(h){this.g.onResults(h)},e.initialize=function(){return Vt(this,function h(){var d=this;return q(h,function(y){return j(y,d.g.initialize(),0)})})},e.reset=function(){this.g.reset()},e.send=function(h){return Vt(this,function d(){var y=this;return q(d,function(k){return j(k,y.g.send(h),0)})})},e.setOptions=function(h){this.g.setOptions(h)},at("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),at("FaceMesh",ss),at("FACEMESH_LIPS",vr),at("FACEMESH_LEFT_EYE",Tr),at("FACEMESH_LEFT_EYEBROW",Nr),at("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),at("FACEMESH_RIGHT_EYE",Sr),at("FACEMESH_RIGHT_EYEBROW",xr),at("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),at("FACEMESH_FACE_OVAL",Er),at("FACEMESH_CONTOURS",rs),at("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),at("matrixDataToMatrix",function(h){for(var d=h.getCols(),y=h.getRows(),k=h.getPackedDataList(),L=[],V=0;V<y;V++)L.push(Array(d));for(V=0;V<y;V++)for(var R=0;R<d;R++){var K=h.getLayout()===1?V*d+R:R*y+V;L[V][R]=k[K]}return L}),at("VERSION","0.4.1633559619")}).call(Le);/**
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
 */const G1=1e-7,q1=1e-4;class X1{refCount(t){return ce("refCount")}incRef(t){return ce("incRef")}timerAvailable(){return!0}time(t){return ce("time")}read(t){return ce("read")}readSync(t){return ce("readSync")}readToGPU(t,n){return ce("readToGPU")}numDataIds(){return ce("numDataIds")}disposeData(t,n){return ce("disposeData")}write(t,n,r){return ce("write")}move(t,n,r,s,a){return ce("move")}memory(){return ce("memory")}floatPrecision(){return ce("floatPrecision")}epsilon(){return this.floatPrecision()===32?G1:q1}dispose(){return ce("dispose")}}function ce(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function A(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function we(e,t,n=""){A(hn(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function sr(e){A(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function xs(e,t=[],n=!1){if(t==null&&(t=[]),Array.isArray(e)||Pe(e)&&!n)for(let r=0;r<e.length;++r)xs(e[r],t,n);else t.push(e);return t}function Mt(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function hn(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Dr(e){return e%1===0}function is(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Es(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),A(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),A(e.every(r=>Dr(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function Y1(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||s?null:Es(t,e).sort();let o=0;for(let i=0;i<e.length;++i){if(a!=null){if(a[o]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(a[o]==null||a[o]>i)&&e[i]===1&&(n.push(e[i]),r.push(i)),a[o]<=i&&o++}e[i]!==1&&(n.push(e[i]),r.push(i))}return{newShape:n,keptDims:r}}function J1(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Z1(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Q1(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function t2(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function Pe(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function vo(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function e2(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Wa(e){return typeof e=="string"||e instanceof String}function n2(e){return typeof e=="boolean"}function r2(e){return typeof e=="number"}function Ha(e){return Array.isArray(e)?Ha(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":r2(e)?"float32":Wa(e)?"string":n2(e)?"bool":"float32"}function To(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Ga(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function oi(e,t,n,r=!1){const s=new Array;if(t.length===1){const a=t[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=n[e+o]}else{const a=t[0],o=t.slice(1),i=o.reduce((u,l)=>u*l)*(r?2:1);for(let u=0;u<a;u++)s[u]=oi(e+u*i,o,n,r)}return s}function ua(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,a)=>s*a)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return oi(0,e,t,n)}function ii(e,t){const n=qa(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function qa(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function ui(e){e.forEach(t=>{A(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function tr(e){return e&&e.then&&typeof e.then=="function"}/**
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
 */const No="tfjsflags";class s2{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=a2,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(gt().getBool("IS_TEST")||gt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];gt().getBool("IS_TEST")||gt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(tr(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);No in t&&t[No].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=i2(s,a)})}}function a2(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(o2(t,r[0],r[1]),r.join("="))),t}function o2(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function i2(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function gt(){return ci}let ci=null;function u2(e){ci=e}/**
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
 */let Hs;function li(){if(Hs==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Hs=e}return Hs}function c2(){const e=li();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function Xa(e,t){const n=c2();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const l2="Abs",h2="Acos",f2="Acosh",hi="Add",p2="AddN",d2="All",m2="Any",g2="ArgMax",y2="ArgMin",b2="Asin",w2="Asinh",v2="Atan",T2="Atanh",N2="Atan2",S2="AvgPool",x2="AvgPool3D",E2="BatchMatMul",k2="BatchToSpaceND",_2="Bincount",$2="BroadcastArgs",fi="Cast",A2="Ceil",I2="ClipByValue",O2="Complex",D2="ComplexAbs",F2="Concat",C2="Conv2D",L2="Conv2DBackpropFilter",R2="Conv2DBackpropInput",P2="Conv3D",B2="Conv3DBackpropInputV2",j2="Cos",z2="Cosh",V2="Cumprod",M2="Cumsum",U2="CropAndResize",K2="DenseBincount",W2="DepthToSpace",H2="DepthwiseConv2dNative",G2="DepthwiseConv2dNativeBackpropFilter",q2="DepthwiseConv2dNativeBackpropInput",X2="Diag",Y2="Dilation2D",J2="RealDiv",Z2="Einsum",Q2="Elu",tu="Erf",eu="Equal",nu="Exp",ru="ExpandDims",su="Expm1",au="FFT",ou="Fill",iu="FlipLeftRight",uu="Floor",cu="FloorDiv",lu="FusedBatchNorm",hu="GatherV2",fu="GatherNd",pu="Greater",du="GreaterEqual",pi="Identity",mu="IFFT",gu="Imag",yu="IsFinite",bu="IsInf",wu="IsNan",vu="LeakyRelu",Tu="Less",Nu="LessEqual",Su="LinSpace",xu="Log",Eu="Log1p",ku="LogicalAnd",_u="LogicalNot",$u="LogicalOr",Au="LRN",Iu="Max",Ou="Maximum",Du="MaxPool",Fu="MaxPool3D",Cu="MaxPoolWithArgmax",Lu="Mean",Ru="Min",Pu="Minimum",Bu="MirrorPad",ju="Mod",zu="Multinomial",Vu="Multiply",Mu="Neg",Uu="NotEqual",Ku="NonMaxSuppressionV3",Wu="NonMaxSuppressionV4",Hu="NonMaxSuppressionV5",Gu="OnesLike",qu="OneHot",Xu="Pack",Yu="PadV2",Ju="Pow",Zu="Prelu",Qu="Prod",t3="RaggedGather",e3="RaggedTensorToTensor",n3="Range",r3="Real",s3="Reciprocal",a3="Relu",o3="Reshape",i3="ResizeNearestNeighbor",u3="ResizeBilinear",c3="Relu6",l3="Reverse",h3="Round",f3="Rsqrt",p3="ScatterNd",d3="SearchSorted",m3="Select",g3="Selu",y3="Slice",b3="Sin",w3="Sinh",v3="Sign",T3="Sigmoid",N3="Softplus",S3="Sqrt",x3="Sum",E3="SpaceToBatchND",k3="SplitV",_3="Softmax",$3="SparseFillEmptyRows",A3="SparseReshape",I3="SparseSegmentMean",O3="SparseSegmentSum",D3="SparseToDense",F3="SquaredDifference",C3="StridedSlice",L3="StringNGrams",R3="StringSplit",P3="StringToHashBucketFast",B3="Sub",j3="Tan",z3="Tanh",di="Tile",V3="TopK",M3="Transform",Gs="Transpose",U3="Unique",K3="Unpack",W3="UnsortedSegmentSum",H3="ZerosLike",G3="Step",So="FromPixels",q3="RotateWithOffset",xo="_FusedMatMul",Eo="FusedConv2D",ko="FusedDepthwiseConv2D";/**
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
 */function kr(...e){gt().getBool("IS_TEST")||gt().getBool("PROD")||console.warn(...e)}/**
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
 */const mi=Xa("kernelRegistry",()=>new Map),X3=Xa("gradRegistry",()=>new Map);function ca(e,t){const n=Y3(e,t);return mi.get(n)}function _o(e){return X3.get(e)}function $o(e){const t=mi.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===e&&n.push(o)}return n}function Y3(e,t){return`${t}_${e}`}/**
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
 */function J3(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function gi(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=xs(e)),gt().getBool("DEBUG")&&Q1(e,t),J3(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function fs(){return gt().platform.now()}function Z3(e,t="utf-8"){return t=t||"utf-8",gt().platform.encode(e,t)}function Ao(e,t="utf-8"){return t=t||"utf-8",gt().platform.decode(e,t)}/**
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
 */class Q3{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new ec)}profileKernel(t,n,r){let s;const a=()=>{s=r()};let o;const i=fs();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const l of s)l.dataSync();o=Promise.resolve({kernelMs:fs()-i})}if(gt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const f=s[l];f.data().then(p=>{tc(p,f.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:o.then(l=>l.kernelMs),extraInfo:o.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:a,extraInfo:o}=t;r.forEach(i=>{Promise.all([i.data(),s,o]).then(u=>{this.logger.logKernelProfile(n,i,u[0],u[1],a,u[2])})})}}function tc(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class ec{logKernelProfile(t,n,r,s,a,o){const i=typeof s=="number"?is(`${s}ms`,9):s.error,u=is(t,25),l=n.rank,f=n.size,p=is(n.shape.toString(),14);let b="";for(const v in a){const S=a[v];if(S!=null){const $=S.shape||n.shape,I=$.length;b+=`${v}: ${I}D ${I>0?$:""} `}}console.log(`%c${u}	%c${i}	%c${l}D ${p}	%c${f}	%c${b}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
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
 */function nc(e,t,n){const r={},s={};for(let u=0;u<t.length;u++)r[t[u].id]=!0;for(let u=0;u<e.length;u++){const l=e[u],f=l.inputs;for(const p in f){const b=f[p];let v=!1;for(let S=0;S<t.length;S++)if(r[b.id]){l.outputs.forEach($=>r[$.id]=!0),v=!0,s[l.id]=!0;break}if(v)break}}const a={};a[n.id]=!0;const o={};for(let u=e.length-1;u>=0;u--){const l=e[u],f=l.inputs;for(let p=0;p<l.outputs.length;p++)if(a[l.outputs[p].id]){for(const b in f)a[f[b].id]=!0,o[l.id]=!0;break}}const i=[];for(let u=0;u<e.length;u++){const l=e[u];if(s[l.id]&&o[l.id]){const f={};for(const b in l.inputs){const v=l.inputs[b];r[v.id]&&(f[b]=v)}const p=Object.assign({},l);p.inputs=f,p.outputs=l.outputs,i.push(p)}}return i}function rc(e,t,n,r){for(let s=t.length-1;s>=0;s--){const a=t[s],o=[];if(a.outputs.forEach(u=>{const l=e[u.id];l!=null?o.push(l):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const u in a.inputs){if(!(u in i))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(i)}.`);const l=n(()=>i[u]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);const f=a.inputs[u];if(!hn(l.shape,f.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${f.shape}'`);if(e[f.id]==null)e[f.id]=l;else{const p=e[f.id];e[f.id]=r(p,l),p.dispose()}}}}/**
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
 */const Io=20,_r=3,qs=7;function sc(e,t,n,r){const s=Ga(t),a=ac(e,t,n,s),o=t.length,i=us(e,t,n,s,a),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map(l=>"    "+l).join(`
`)),u.join(`
`)}function ac(e,t,n,r){const s=Mt(t),a=r[r.length-1],o=new Array(a).fill(0),i=t.length,u=n==="complex64"?Ir(e):e;if(i>1)for(let l=0;l<s/a;l++){const f=l*a;for(let p=0;p<a;p++)o[p]=Math.max(o[p],Ar(u[f+p],0,n).length)}return o}function Ar(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(qs))} + ${parseFloat(e[1].toFixed(qs))}j`:Wa(e)?r=`'${e}'`:n==="bool"?r=yi(e):r=parseFloat(e.toFixed(qs)).toString(),is(r,t)}function yi(e){return e===0?"false":"true"}function us(e,t,n,r,s,a=!0){const o=n==="complex64"?2:1,i=t[0],u=t.length;if(u===0){if(n==="complex64"){const $=Ir(e);return[Ar($[0],0,n)]}return n==="bool"?[yi(e[0])]:[e[0].toString()]}if(u===1){if(i>Io){const I=_r*o;let F=Array.from(e.slice(0,I)),G=Array.from(e.slice((i-_r)*o,i*o));return n==="complex64"&&(F=Ir(F),G=Ir(G)),["["+F.map((j,B)=>Ar(j,s[B],n)).join(", ")+", ..., "+G.map((j,B)=>Ar(j,s[i-_r+B],n)).join(", ")+"]"]}return["["+(n==="complex64"?Ir(e):Array.from(e)).map((I,F)=>Ar(I,s[F],n)).join(", ")+"]"]}const l=t.slice(1),f=r.slice(1),p=r[0]*o,b=[];if(i>Io){for(let $=0;$<_r;$++){const I=$*p,F=I+p;b.push(...us(e.slice(I,F),l,n,f,s,!1))}b.push("...");for(let $=i-_r;$<i;$++){const I=$*p,F=I+p;b.push(...us(e.slice(I,F),l,n,f,s,$===i-1))}}else for(let $=0;$<i;$++){const I=$*p,F=I+p;b.push(...us(e.slice(I,F),l,n,f,s,$===i-1))}const v=u===2?",":"";b[0]="["+b[0]+v;for(let $=1;$<b.length-1;$++)b[$]=" "+b[$]+v;let S=`,
`;for(let $=2;$<u;$++)S+=`
`;return b[b.length-1]=" "+b[b.length-1]+"]"+(a?"":S),b}function Ir(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
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
 */class la{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=Mt(t),r!=null){const s=r.length;A(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Z1(n,this.size),this.strides=Ga(t)}set(t,...n){n.length===0&&(n=[0]),A(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const a=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(a)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return Se().makeTensor(this.values,this.shape,this.dtype)}}let Se=null,Yn=null;function oc(e){Se=e}function ic(e){Yn=e}class At{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=Mt(t),this.strides=Ga(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Yn.buffer(this.shape,this.dtype,t)}bufferSync(){return Yn.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return ua(this.shape,t,this.dtype==="complex64")}arraySync(){return ua(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Se().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>Ao(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Se().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Se().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>Ao(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Se().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Se().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Yn.print(this,t)}clone(){return this.throwIfDisposed(),Yn.clone(this)}toString(t=!1){const n=this.dataSync();return sc(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Yn.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),Se().makeVariable(this,t,n,r)}}Object.defineProperty(At,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function uc(){return Xa("Tensor",()=>At)}uc();class ha extends At{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!hn(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Se().disposeTensor(this),this.dataId=t.dataId,Se().incRef(this,null)}dispose(){Se().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(ha,Symbol.hasInstance,{value:e=>e instanceof At&&e.assign!=null&&e.assign instanceof Function});/**
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
 */var Oo;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Oo||(Oo={}));var fa;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(fa||(fa={}));var pa;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(pa||(pa={}));var da;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(da||(da={}));var ma;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(ma||(ma={}));const cc={float32:da,int32:fa,bool:pa,complex64:ma};function lc(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return cc[e][t]}/**
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
 */function Ot(e,t){if(e.dtype===t.dtype)return[e,t];const n=lc(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function hc(e,t){A(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function bi(e){const t=[];return wi(e,t,new Set),t}function wi(e,t,n){if(e==null)return;if(e instanceof At){t.push(e);return}if(!fc(e))return;const r=e;for(const s in r){const a=r[s];n.has(a)||(n.add(a),wi(a,t,n))}}function fc(e){return Array.isArray(e)||typeof e=="object"}/**
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
 */function Xs(e){return e.kernelName!=null}class Do{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class er{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Do}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(kr(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Q3(this.backendInstance),!0}setupRegisteredKernels(){$o(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){$o(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof X1)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,kr(`Initialization of backend ${t} failed`),kr(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return kr(`Initialization of backend ${t} failed`),kr(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,a=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return er.nextTensorId++}nextVariableId(){return er.nextVariableId++}clone(t){const n=C.runKernel(pi,{x:t}),r={x:t},s=o=>({x:()=>{const i="float32",u={x:o},l={dtype:i};return C.runKernel(fi,u,l)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,a,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(ca(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let a=0;r.forEach(u=>{a+=u.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let u;const l=Xs(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Xs(t)){const{kernelName:S,inputs:$,attrs:I}=t;this.backendName==null&&this.backend;const F=ca(S,this.backendName);A(F!=null,()=>`Cannot find registered kernel '${S}' for backend '${this.backendName}'`),i=()=>{const G=this.backend.numDataIds();u=F.kernelFunc({inputs:$,attrs:I,backend:this.backend});const j=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(S,G,j);const B=j.map(z=>z.rank!=null?z:this.makeTensorFromTensorInfo(z));if(s){const z=this.getTensorsForGradient(S,$,B);r=this.saveTensorsForBackwardMode(z)}return B}}else{const{forwardFunc:S}=t,$=I=>{s&&(r=I.map(F=>this.keep(this.clone(F))))};i=()=>{const I=this.backend.numDataIds();u=this.tidy(()=>S(this.backend,$));const F=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,I,F),F}}const{inputs:f,attrs:p}=t,b=Xs(t)?null:t.backwardsFunc;let v;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(v=this.profiler.profileKernel(l,f,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(v),n=v.outputs)}),s&&this.addTapeNode(l,f,n,b,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map(S=>f[S]!=null?f[S].shape:null),outputShapes:n.map(S=>S.shape),kernelTimeMs:v.timeMs,extraInfo:v.extraInfo}),Array.isArray(u)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=_o(t);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let i;s.saveAllInputs?(A(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(l=>n[l])):i=a.map(l=>n[l]);const u=r.filter((l,f)=>o[f]);return i.concat(u)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=t;r==="string"&&Wa(t[0])&&(a=t.map(u=>Z3(u)));const o=s.write(a,n,r),i=new At(n,r,o,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const u=this.state.tensorInfo.get(o),l=e2(a);this.state.numBytes+=l-u.bytes,u.bytes=l}return i}makeTensorFromDataId(t,n,r,s){r=r||"float32";const a={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:a}=t,o=new At(s,a,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const a=new ha(t,n,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*vo(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof ha||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*vo(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:a},u=_o(t);u!=null&&(s=u.gradFunc),s!=null&&(i.gradient=l=>(l=l.map((f,p)=>{if(f==null){const b=r[p],v=qa(b.size,b.dtype);return this.makeTensor(v,b.shape,b.dtype)}return f}),s(l.length>1?l:l[0],a,o))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=bi(t),r=new Set(n.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(t,n,r,s=!1){if(A(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));A(a instanceof At,()=>"The result y returned by f() must be a tensor.");const o=nc(this.state.activeTape,n,a);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=r??pc(a.shape),rc(i,o,l=>this.tidy(l),dc);const u=n.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const f of l.saved)f.dispose()}),this.state.activeTape=null),{value:a,grads:u}})}customGrad(t){return A(To(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{A(n.every(i=>i instanceof At),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,u)=>{s[u]=i});const a=(i,u)=>(r=t(...n,u),A(r.value instanceof At,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),A(To(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,u)=>{const l=r.gradFunc(i,u),f=Array.isArray(l)?l:[l];A(f.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),A(f.every(b=>b instanceof At),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return f.forEach((b,v)=>{p[v]=()=>b}),p};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=fs(),r=await this.backend.time(t);return r.wallMs=fs()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Do;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}er.nextTensorId=0;er.nextVariableId=0;function pc(e){const t=ii(Mt(e),"float32");return C.makeTensor(t,e,"float32")}function vi(){const e=li();if(e._tfengine==null){const t=new s2(e);e._tfengine=new er(t)}return u2(e._tfengine.ENV),oc(()=>e._tfengine),e._tfengine}const C=vi();function dc(e,t){const n={a:e,b:t};return C.runKernel(hi,n)}/**
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
 */function mc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
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
 */const ae=gt();ae.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ae.registerFlag("IS_BROWSER",()=>mc());ae.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ae.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ae.registerFlag("PROD",()=>!1);ae.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ae.getBool("DEBUG"));ae.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ae.registerFlag("IS_TEST",()=>!1);ae.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);ae.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ae.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);ae.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ae.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
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
 */function dn(e,t){let n=e;if(Pe(e))return t==="string"?[]:[e.length];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||Pe(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&gt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ti(e,r,[]),r}function Ti(e,t,n){if(n=n||[],!Array.isArray(e)&&!Pe(e)){A(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}A(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),A(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)Ti(e[s],r,n.concat(s))}function Fo(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function N(e,t,n,r="numeric"){if(e instanceof At)return Fo(r,e.dtype,t,n),e;let s=Ha(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Fo(r,s,t,n),e==null||!Pe(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const u=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${u}'`)}const a=dn(e,s);!Pe(e)&&!Array.isArray(e)&&(e=[e]);const i=s!=="string"?gi(e,s):xs(e,[],!0);return C.makeTensor(i,a,s)}function ps(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((a,o)=>N(a,`${t}[${o}]`,n,r))}/**
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
 */const Ni="__op";function O(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Ni;const s=(...a)=>{C.startScope(n);try{const o=r(...a);return tr(o)&&console.error("Cannot return a Promise inside of tidy."),C.endScope(o),o}catch(o){throw C.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
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
 */function gc(e,t){const n=N(e,"real","complex"),r=N(t,"imag","complex");we(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return C.runKernel(O2,s)}const fn=O({complex_:gc});/**
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
 */function mn(e,t,n,r){if(r==null&&(r=Ha(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Pe(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ui(t);const s=Mt(t),a=Mt(n);A(s===a,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<n.length;++o){const i=n[o],u=o===n.length-1?i!==Mt(t.slice(o)):!0;A(n[o]===t[o]||!u,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Pe(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?gi(e,r):xs(e,[],!0),C.makeTensor(e,t,r)}/**
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
 */function Re(e,t,n){const r=dn(e,n);return mn(e,t,r,n)}/**
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
 */const ga={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
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
 */const ds=4;async function yc(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);for(let o=0;o<s.length;++o){const i=s[o],u=Array.isArray(e)?e[o].tensor:e[i];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${u.dtype}`);const l={name:i,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const f=new Promise(async p=>{const b=await u.bytes(),v=b.reduce((I,F)=>I+F.length,0)+ds*b.length,S=new Uint8Array(v);let $=0;for(let I=0;I<b.length;I++){const F=b[I],G=new Uint8Array(new Uint32Array([F.length]).buffer);S.set(G,$),$+=ds,S.set(F,$),$+=F.length}p(S)});r.push(f)}else r.push(u.data());t!=null&&(l.group=t),n.push(l)}const a=await Promise.all(r);return{data:bc(a),specs:n}}function Si(e,t){const n={};let r,s=0;for(const a of t){const o=a.name,i=a.dtype,u=a.shape,l=Mt(u);let f;if("quantization"in a){const p=a.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${a.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(i!=="float32")throw new Error(`Weight ${a.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${i}.`)}else throw new Error(`Weight ${a.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const b=ga[p.dtype],v=e.slice(s,s+l*b),S=p.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(i==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){f=new Float32Array(S.length);for(let $=0;$<S.length;$++){const I=S[$];f[$]=I*p.scale+p.min}}else if(p.dtype==="float16")r===void 0&&(r=xc()),f=r(S);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(i==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);f=new Int32Array(S.length);for(let $=0;$<S.length;$++){const I=S[$];f[$]=Math.round(I*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${i}`);s+=l*b}else if(i==="string"){const p=Mt(a.shape);f=[];for(let b=0;b<p;b++){const v=new Uint32Array(e.slice(s,s+ds))[0];s+=ds;const S=new Uint8Array(e.slice(s,s+v));f.push(S),s+=v}}else{const p=ga[i],b=e.slice(s,s+l*p);if(i==="float32")f=new Float32Array(b);else if(i==="int32")f=new Int32Array(b);else if(i==="bool")f=new Uint8Array(b);else if(i==="complex64"){f=new Float32Array(b);const v=new Float32Array(f.length/2),S=new Float32Array(f.length/2);for(let F=0;F<v.length;F++)v[F]=f[F*2],S[F]=f[F*2+1];const $=Re(v,u,"float32"),I=Re(S,u,"float32");n[o]=fn($,I),$.dispose(),I.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${i}`);s+=l*p}i!=="complex64"&&(n[o]=Re(f,u,i))}return n}function bc(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(a=>{if(t+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const Ya=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Co(e){return Ya?Buffer.byteLength(e):new Blob([e]).size}function wc(e){if(Ya)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function vc(e){if(Ya){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function Ja(e){if(e.length===1)return e[0];let t=0;e.forEach(s=>{t+=s.byteLength});const n=new Uint8Array(t);let r=0;return e.forEach(s=>{n.set(new Uint8Array(s),r),r+=s.byteLength}),n.buffer}function Lo(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function xi(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function Ei(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),r}async function Za(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),Ei(e,n,r)}function Pr(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Co(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Co(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function ki(e){const t=[];for(const n of e)t.push(...n.weights);return t}function Tc(){const e=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Nc(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Sc(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function xc(){const e=Tc(),t=Nc(),n=Sc();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const i=r[o],u=e[n[i>>10]+(i&1023)]+t[i>>10];a[o]=u}return new Float32Array(s)}}/**
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
 */class $t{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return $t.instance==null&&($t.instance=new $t),$t.instance}static registerSaveRouter(t){$t.getInstance().saveRouters.push(t)}static registerLoadRouter(t){$t.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return $t.getHandlers(t,"save")}static getLoadHandlers(t,n){return $t.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?$t.getInstance().loadRouters:$t.getInstance().saveRouters).forEach(o=>{const i=o(t,r);i!==null&&s.push(i)}),s}}const Ec=e=>$t.registerSaveRouter(e),kc=e=>$t.registerLoadRouter(e),_c=e=>$t.getSaveHandlers(e),$c=(e,t)=>$t.getLoadHandlers(e,t);/**
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
 */const ya="tensorflowjs",ba=1,In="models_store",on="model_info_store";function _i(){if(!gt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function wa(e){const t=e.result;t.createObjectStore(In,{keyPath:"modelPath"}),t.createObjectStore(on,{keyPath:"modelPath"})}class Fn{constructor(t){if(this.indexedDB=_i(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const a=this.indexedDB.open(ya,ba);a.onupgradeneeded=()=>wa(a),a.onsuccess=()=>{const o=a.result;if(n==null){const i=o.transaction(In,"readonly"),l=i.objectStore(In).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=f=>(o.close(),s(l.error)),i.oncomplete=()=>o.close()}else{const i=Pr(n),u=o.transaction(on,"readwrite");let l=u.objectStore(on);const f=l.put({modelPath:this.modelPath,modelArtifactsInfo:i});let p;f.onsuccess=()=>{p=o.transaction(In,"readwrite");const v=p.objectStore(In).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i});v.onsuccess=()=>r({modelArtifactsInfo:i}),v.onerror=S=>{l=u.objectStore(on);const $=l.delete(this.modelPath);$.onsuccess=()=>(o.close(),s(v.error)),$.onerror=I=>(o.close(),s(v.error))}},f.onerror=b=>(o.close(),s(f.error)),u.oncomplete=()=>{p==null?o.close():p.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}Fn.URL_SCHEME="indexeddb://";const $i=e=>gt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Fn.URL_SCHEME)?Ac(e.slice(Fn.URL_SCHEME.length)):null;$t.registerSaveRouter($i);$t.registerLoadRouter($i);function Ac(e){return new Fn(e)}function Ic(e){return e.startsWith(Fn.URL_SCHEME)?e.slice(Fn.URL_SCHEME.length):e}class Oc{constructor(){this.indexedDB=_i()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(ya,ba);r.onupgradeneeded=()=>wa(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(on,"readonly"),i=a.objectStore(on).getAll();i.onsuccess=()=>{const u={};for(const l of i.result)u[l.modelPath]=l.modelArtifactsInfo;t(u)},i.onerror=u=>(s.close(),n(i.error)),a.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=Ic(t),new Promise((n,r)=>{const s=this.indexedDB.open(ya,ba);s.onupgradeneeded=()=>wa(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(on,"readwrite"),i=o.objectStore(on),u=i.get(t);let l;u.onsuccess=()=>{if(u.result==null)return a.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const f=i.delete(t),p=()=>{l=a.transaction(In,"readwrite");const v=l.objectStore(In).delete(t);v.onsuccess=()=>n(u.result.modelArtifactsInfo),v.onerror=S=>r(u.error)};f.onsuccess=p,f.onerror=b=>(p(),a.close(),r(u.error))}},u.onerror=f=>(a.close(),r(u.error)),o.oncomplete=()=>{l==null?a.close():l.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
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
 */const Me="/",Jn="tensorflowjs_models",Ai="info",Dc="model_topology",Fc="weight_specs",Cc="weight_data",Lc="model_metadata";function Ii(e){return{info:[Jn,e,Ai].join(Me),topology:[Jn,e,Dc].join(Me),weightSpecs:[Jn,e,Fc].join(Me),weightData:[Jn,e,Cc].join(Me),modelMetadata:[Jn,e,Lc].join(Me)}}function Oi(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Rc(e){const t=e.split(Me);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Me)}function Pc(e){return e.startsWith(Cn.URL_SCHEME)?e.slice(Cn.URL_SCHEME.length):e}class Cn{constructor(t){if(!gt().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Ii(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=Pr(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,wc(t.weightData));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:s}}catch{throw Oi(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=vc(o),n}}Cn.URL_SCHEME="localstorage://";const Di=e=>gt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Cn.URL_SCHEME)?Bc(e.slice(Cn.URL_SCHEME.length)):null;$t.registerSaveRouter(Di);$t.registerLoadRouter(Di);function Bc(e){return new Cn(e)}class jc{constructor(){A(gt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),A(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=Jn+Me,r=Me+Ai;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(n)&&a.endsWith(r)){const o=Rc(a);t[o]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){t=Pc(t);const n=Ii(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return Oi(n),r}}/**
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
 */const Zn="://";class qt{constructor(){this.managers={}}static getInstance(){return qt.instance==null&&(qt.instance=new qt),qt.instance}static registerManager(t,n){A(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Zn)&&(t=t.slice(0,t.indexOf(Zn))),A(t.length>0,()=>"scheme must not be an empty string.");const r=qt.getInstance();A(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=qt.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(qt.getInstance().managers)}}function cs(e){if(e.indexOf(Zn)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${qt.getSchemes().join(",")}`);return{scheme:e.split(Zn)[0],path:e.split(Zn)[1]}}async function Fi(e,t,n=!1){A(e!==t,()=>`Old path and new path are the same: '${e}'`);const r=$t.getLoadHandlers(e);A(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),A(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);const s=r[0],a=$t.getSaveHandlers(t);A(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),A(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const o=a[0],i=cs(e).scheme,u=cs(e).path,l=i===cs(e).scheme,f=await s.load();n&&l&&await qt.getManager(i).removeModel(u);const p=await o.save(f);return n&&!l&&await qt.getManager(i).removeModel(u),p.modelArtifactsInfo}async function zc(){const e=qt.getSchemes(),t={};for(const n of e){const r=await qt.getManager(n).listModels();for(const s in r){const a=n+Zn+s;t[a]=r[s]}}return t}async function Vc(e){const t=cs(e);return qt.getManager(t.scheme).removeModel(t.path)}async function Mc(e,t){return Fi(e,t,!1)}async function Uc(e,t){return Fi(e,t,!0)}/**
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
 */class Kc{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(!window||!gt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(gt().get("IS_BROWSER")){gt().setPlatform("browser",new Kc);try{qt.registerManager(Cn.URL_SCHEME,new jc)}catch{}try{qt.registerManager(Fn.URL_SCHEME,new Oc)}catch{}}/**
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
 */const Wc={importFetch:()=>require("node-fetch")};let Ys;class Hc{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return gt().global.fetch!=null?gt().global.fetch(t,n):(Ys==null&&(Ys=Wc.importFetch()),Ys(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}}gt().get("IS_NODE")&&!gt().get("IS_BROWSER")&&gt().setPlatform("node",new Hc);/**
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
 */function He(e,t="float32",n){return t=t||"float32",ui(e),new la(e,t,n)}/**
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
 */function Gc(e,t){const n=N(e,"x","cast");if(!t2(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return C.runKernel(fi,r,s)}const It=O({cast_:Gc});/**
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
 */function qc(e){const n={x:N(e,"x","clone","string_or_numeric")};return C.runKernel(pi,n)}const cn=O({clone_:qc});/**
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
 */function Ci(e,t=!1){console.log(e.toString(t))}/**
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
 */vi();const Xc={buffer:He,cast:It,clone:cn,print:Ci};ic(Xc);/**
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
 */const Yc="model",Jc=".json",Zc=".weights.bin";function Ro(e){return new Promise(t=>setTimeout(t)).then(e)}class Ln{constructor(t){if(!gt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Ln.URL_SCHEME)&&(t=t.slice(Ln.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Yc),this.modelJsonFileName=t+Jc,this.weightDataFileName=t+Zc}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=xi(t,r),a=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=a,await Ro(()=>o.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const i=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;i.download=this.weightDataFileName,i.href=n,await Ro(()=>i.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Pr(t)}}}}Ln.URL_SCHEME="downloads://";class Qc{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:o});return}const u=Za(a,l=>this.loadWeights(l));t(u)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const n=[],r=[];for(const o of t)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(t),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[n,Ja(o)])}loadWeightsFile(t,n){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;r(i)},a.onerror=o=>s(`Failed to weights data from file of path '${t}'.`),a.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],r=this.weightsFiles.map(a=>Lo(a.name)),s={};for(const a of t)a.paths.forEach(o=>{const i=Lo(o);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const tl=e=>gt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ln.URL_SCHEME)?el(e.slice(Ln.URL_SCHEME.length)):null;$t.registerSaveRouter(tl);function el(e="model"){return new Ln(e)}function nl(e){return new Qc(e)}/**
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
 */function Po(e,t,n,r){o(e),n=n??0,r=r??1,i(n,r);let s=0;const a=u=>(u.then(l=>{const f=n+ ++s/e.length*(r-n);return t(f),l}),u);function o(u){A(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function i(u,l){A(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),A(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),A(l>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${l}`)}return Promise.all(e.map(a))}/**
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
 */async function Li(e,t){t==null&&(t={});const n=t.fetchFunc==null?gt().platform.fetch:t.fetchFunc,r=e.map(p=>n(p,t.requestInit,{isBinary:!0})),s=0,a=.5,i=(t.onProgress==null?await Promise.all(r):await Po(r,t.onProgress,s,a)).map(p=>p.arrayBuffer()),u=.5,l=1;return t.onProgress==null?await Promise.all(i):await Po(i,t.onProgress,u,l)}async function rl(e,t="",n,r){return Ri(o=>Li(o,{requestInit:r}))(e,t,n)}function Ri(e){return async(t,n="",r)=>{const s=t.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],i=[];if(t.forEach((v,S)=>{let $=0;v.weights.forEach(I=>{const F="quantization"in I?I.quantization.dtype:I.dtype,G=ga[F]*Mt(I.shape),j=()=>{s[S]=!0,a[S]==null&&(a[S]=[]),a[S].push({manifestEntry:I,groupOffset:$,sizeBytes:G})};r!=null?r.forEach((B,z)=>{B===I.name&&(j(),o[z]=!0)}):j(),i.push(I.name),$+=G})}),!o.every(v=>v)){const v=r.filter((S,$)=>!o[$]);throw new Error(`Could not find weights in manifest with names: ${v.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const u=s.reduce((v,S,$)=>(S&&v.push($),v),[]),l=[];u.forEach(v=>{t[v].paths.forEach(S=>{const $=n+(n.endsWith("/")?"":"/")+S;l.push($)})});const f=await e(l),p={};let b=0;return u.forEach(v=>{const S=t[v].paths.length;let $=0;for(let B=0;B<S;B++)$+=f[b+B].byteLength;const I=new ArrayBuffer($),F=new Uint8Array(I);let G=0;for(let B=0;B<S;B++){const z=new Uint8Array(f[b+B]);F.set(z,G),G+=z.byteLength}a[v].forEach(B=>{const z=I.slice(B.groupOffset,B.groupOffset+B.sizeBytes),U=Si(z,[B.manifestEntry]);for(const Z in U)p[Z]=U[Z]}),b+=S}),p}}/**
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
 */const sl="application/octet-stream",al="application/json";class Qa{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(A(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=gt().platform.fetch,A(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&A(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=xi(t,r);n.body.append("model.json",new Blob([JSON.stringify(s)],{type:al}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:sl}),"model.weights.bin");const a=await this.fetch(this.path,n);if(a.ok)return{modelArtifactsInfo:Pr(t),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Za(n,a=>this.loadWeights(a))}async loadWeights(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=ol(n),a=this.weightPathPrefix||r,o=ki(t),i=[],u=[];for(const f of t)for(const p of f.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(p)):i.push(a+p+s);this.weightUrlConverter&&i.push(...await Promise.all(u));const l=await Li(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,Ja(l)]}}Qa.URL_SCHEME_REGEX=/^https?:\/\//;function ol(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}function va(e){return e.match(Qa.URL_SCHEME_REGEX)!=null}const Pi=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>va(r)):n=va(e),n)return to(e,t)}return null};$t.registerSaveRouter(Pi);$t.registerLoadRouter(Pi);function to(e,t){return new Qa(e,t)}function il(e,t){return to(e,t)}/**
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
 */class Js{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Bi{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class ul{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function cl(e,t,n,r){const s=arguments;return new ul(ji(...s))}function ji(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Js(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Js({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Js({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function ll(e){return new Bi(e)}function hl(e){return new Bi(e)}/**
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
 */const zi=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:nl,browserHTTPRequest:il,concatenateArrayBuffers:Ja,copyModel:Mc,decodeWeights:Si,encodeWeights:yc,fromMemory:cl,fromMemorySync:ji,getLoadHandlers:$c,getModelArtifactsForJSON:Za,getModelArtifactsForJSONSync:Ei,getModelArtifactsInfoForJSON:Pr,getSaveHandlers:_c,getWeightSpecs:ki,http:to,isHTTPScheme:va,listModels:zc,loadWeights:rl,moveModel:Uc,registerLoadRouter:kc,registerSaveRouter:Ec,removeModel:Vc,weightsLoaderFactory:Ri,withSaveHandler:ll,withSaveHandlerSync:hl},Symbol.toStringTag,{value:"Module"}));/**
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
 */function fl(e,t,n=!1,r=!1){let s=N(e,"a","matMul"),a=N(t,"b","matMul");[s,a]=Ot(s,a);const o={a:s,b:a},i={transposeA:n,transposeB:r};return C.runKernel(E2,o,i)}const vt=O({matMul_:fl});/**
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
 */function pl(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const o={indices:N(e,"indices","oneHot","int32")},i={dtype:s,depth:t,onValue:n,offValue:r};return C.runKernel(qu,o,i)}const dl=O({oneHot_:pl});/**
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
 */function Lt(e,t){return C.tidy(e,t)}function Ce(e){bi(e).forEach(n=>n.dispose())}function un(e){return C.keep(e)}/**
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
 */function ml(e){const n={input:N(e,"input","imag")};return C.runKernel(gu,n)}const ks=O({imag_:ml});/**
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
 */function gl(e){const n={x:N(e,"x","neg")};return C.runKernel(Mu,n)}const We=O({neg_:gl});/**
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
 */function yl(e){const n={input:N(e,"input","real")};return C.runKernel(r3,n)}const Fr=O({real_:yl});/**
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
 */function bl(e,t,n){const r=N(e,"x","transpose");if(t==null&&(t=r.shape.map((o,i)=>i).reverse()),A(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(o=>{A(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:t};return r.dtype==="complex64"?Lt(()=>{let o=Fr(r),i=ks(r);return o=C.runKernel(Gs,{x:o},a),i=C.runKernel(Gs,{x:i},a),n&&(i=We(i)),fn(o,i)}):C.runKernel(Gs,s,a)}const Ta=O({transpose_:bl});/**
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
 */function wl(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],a=t.length-r-1,o=t[a];(s==null||s===1&&o>1)&&n.unshift(a)}return n}function jt(e,t){const n=[],r=Math.max(e.length,t.length);for(let s=0;s<r;s++){let a=e[e.length-s-1];a==null&&(a=1);let o=t[t.length-s-1];if(o==null&&(o=1),a===1)n.unshift(o);else if(o===1)n.unshift(a);else if(a!==o){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else n.unshift(a)}return n}/**
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
 */function Vi(e,t,n){if(sr(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=dn(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return mn(e,t,r,n)}/**
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
 */let $n;function vl(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)a=!0;else if(e.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(ca(So,C.backendName)!=null){const S={pixels:e},$={numChannels:t};return C.runKernel(So,S,$)}const[l,f]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let p;if(o)p=e.getContext("2d").getImageData(0,0,l,f).data;else if(r||n)p=e.data;else if(a||s||i){if($n==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")$n=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else $n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});$n.canvas.width=l,$n.canvas.height=f,$n.drawImage(e,0,0,l,f),p=$n.getImageData(0,0,l,f).data}let b;if(t===4)b=new Int32Array(p);else{const S=l*f;b=new Int32Array(S*t);for(let $=0;$<S;$++)for(let I=0;I<t;++I)b[$*t+I]=p[$*4+I]}return Vi(b,[f,l,t],"int32")}async function Mi(e,t){let n=N(e,"img","toPixels");if(!(e instanceof At)){const l=n;n=It(l,"int32"),l.dispose()}if(n.rank!==2&&n.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,s]=n.shape.slice(0,2),a=n.rank===2?1:n.shape[2];if(a>4||a===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${a}`);if(n.dtype!=="float32"&&n.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const o=await n.data(),i=n.dtype==="float32"?255:1,u=new Uint8ClampedArray(s*r*4);for(let l=0;l<r*s;++l){const f=[0,0,0,255];for(let b=0;b<a;b++){const v=o[l*a+b];if(n.dtype==="float32"){if(v<0||v>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${v}.`)}else if(n.dtype==="int32"&&(v<0||v>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${v}.`);a===1?(f[0]=v*i,f[1]=v*i,f[2]=v*i):f[b]=v*i}const p=l*4;u[p+0]=Math.round(f[0]),u[p+1]=Math.round(f[1]),u[p+2]=Math.round(f[2]),u[p+3]=Math.round(f[3])}if(t!=null){t.width=s,t.height=r;const l=t.getContext("2d"),f=new ImageData(u,s,r);l.putImageData(f,0,0)}return n!==e&&n.dispose(),u}const Ui=O({fromPixels_:vl});function Tl(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(a+` update.rank != ${s+e.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==t.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==e[o+r])throw new Error(a+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${e[o+s]})`)}function Nl(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Tl(n,t,e)}/**
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
 */function Sl(e,t){let n=N(e,"a","add"),r=N(t,"b","add");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(hi,s)}const xt=O({add_:Sl});/**
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
 */function xl(e,t){let n=N(e,"a","floorDiv"),r=N(t,"b","floorDiv");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(cu,s)}const Ki=O({floorDiv_:xl});/**
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
 */function El(e,t){let n=N(e,"a","div"),r=N(t,"b","div");if([n,r]=Ot(n,r),n.dtype==="int32"&&r.dtype==="int32")return Ki(n,r);const s={a:n,b:r},a={};return C.runKernel(J2,s,a)}const Nt=O({div_:El});/**
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
 */function kl(e,t){let n=N(e,"a","mul"),r=N(t,"b","mul");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(Vu,s)}const st=O({mul_:kl});/**
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
 */function _l(e){const t=N(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return C.runKernel(D2,n)}else{const n={x:t};return C.runKernel(l2,n)}}const ye=O({abs_:_l});/**
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
 */function $l(e){const n={x:N(e,"x","acos")};return C.runKernel(h2,n)}const Al=O({acos_:$l});/**
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
 */function Il(e){const n={x:N(e,"x","acosh")};return C.runKernel(f2,n)}const Ol=O({acosh_:Il});/**
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
 */function Dl(e){A(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),A(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((s,a)=>N(s,`tensors${a}`,"addN")),n=t[0];t.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!hn(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return C.runKernel(p2,r)}const Fl=O({addN_:Dl});/**
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
 */function Cl(e,t=null,n=!1){const s={x:N(e,"x","all","bool")},a={axis:t,keepDims:n};return C.runKernel(d2,s,a)}const Ll=O({all_:Cl});/**
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
 */function Rl(e,t=null,n=!1){const s={x:N(e,"x","any","bool")},a={axis:t,keepDims:n};return C.runKernel(m2,s,a)}const Pl=O({any_:Rl});/**
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
 */function Bl(e,t=0){const r={x:N(e,"x","argMax")},s={axis:t};return C.runKernel(g2,r,s)}const jl=O({argMax_:Bl});/**
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
 */function zl(e,t=0){const r={x:N(e,"x","argMin")},s={axis:t};return C.runKernel(y2,r,s)}const Vl=O({argMin_:zl});/**
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
 */function Ml(e){const n={x:N(e,"x","asin")};return C.runKernel(b2,n)}const Ul=O({asin_:Ml});/**
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
 */function Kl(e){const n={x:N(e,"x","asinh")};return C.runKernel(w2,n)}const Wl=O({asinh_:Kl});/**
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
 */function Hl(e){const n={x:N(e,"x","atan")};return C.runKernel(v2,n)}const Gl=O({atan_:Hl});/**
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
 */function ql(e,t){let n=N(e,"a","atan2"),r=N(t,"b","atan2");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(N2,s)}const Xl=O({atan2_:ql});/**
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
 */function Yl(e){const n={x:N(e,"x","atanh")};return C.runKernel(T2,n)}const Jl=O({atanh_:Yl});/**
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
 */function Zl(e,t,n,r,s,a,o="channelsLast"){const[i,u]=ms(t);let l;if(o==="channelsLast")l=[i,u,e[3],e[3]];else if(o==="channelsFirst")l=[i,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${o}`);return eo(e,l,n,r,s,a,!1,o)}function eo(e,t,n,r,s,a,o=!1,i="channelsLast"){let[u,l,f,p]=[-1,-1,-1,-1];if(i==="channelsLast")[u,l,f,p]=e;else if(i==="channelsFirst")[u,p,l,f]=e;else throw new Error(`Unknown dataFormat ${i}`);const[b,v,,S]=t,[$,I]=ms(n),[F,G]=ms(r),j=Na(b,F),B=Na(v,G),{padInfo:z,outHeight:U,outWidth:Z}=e4(s,l,f,$,I,j,B,a,i),nt=o?S*p:S;let q;return i==="channelsFirst"?q=[u,nt,U,Z]:i==="channelsLast"&&(q=[u,U,Z,nt]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:f,inChannels:p,outHeight:U,outWidth:Z,outChannels:nt,padInfo:z,strideHeight:$,strideWidth:I,filterHeight:b,filterWidth:v,effectiveFilterHeight:j,effectiveFilterWidth:B,dilationHeight:F,dilationWidth:G,inShape:e,outShape:q,filterShape:t}}function Ql(e,t,n,r,s){r==null&&(r=t4(e,t,n));const a=e[0],o=e[1],i=gs((a-t+2*r)/n+1,s),u=gs((o-t+2*r)/n+1,s);return[i,u]}function t4(e,t,n,r=1){const s=Na(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function ms(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Na(e,t){return t<=1?e:e+(e-1)*(t-1)}function e4(e,t,n,r,s,a,o,i,u){let l,f,p;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const v=Ql([t,n],a,r,e,i);f=v[0],p=v[1]}else if(e==="same"){f=Math.ceil(t/r),p=Math.ceil(n/s);const b=Math.max(0,(f-1)*r+a-t),v=Math.max(0,(p-1)*s+o-n),S=Math.floor(b/2),$=b-S,I=Math.floor(v/2),F=v-I;l={top:S,bottom:$,left:I,right:F,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((t-a+1)/r),p=Math.ceil((n-o+1)/s);else if(typeof e=="object"){const b=u==="channelsLast"?e[1][0]:e[2][0],v=u==="channelsLast"?e[1][1]:e[2][1],S=u==="channelsLast"?e[2][0]:e[3][0],$=u==="channelsLast"?e[2][1]:e[3][1];l={top:b,bottom:v,left:S,right:$,type:b===0&&v===0&&S===0&&$===0?"VALID":"EXPLICIT"},f=gs((t-a+b+v)/r+1,i),p=gs((n-o+S+$)/s+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:f,outWidth:p}}function gs(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function ys(e){const[t,n,r]=ms(e);return t===1&&n===1&&r===1}function gn(e,t){return ys(e)||ys(t)}function ke(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")A(Dr(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{A(Dr(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
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
 */function n4(e,t){const r={x:N(e,"x","reshape","string_or_numeric")},s={shape:t};return C.runKernel(o3,r,s)}const W=O({reshape_:n4});/**
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
 */function r4(e,t,n,r,s){const a=N(e,"x","avgPool","float32"),o=1;A(gn(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let i=a,u=!1;a.rank===3&&(u=!0,i=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),A(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),ke("avgPool",r,s);const l={x:i},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let p=C.runKernel(S2,l,f);return p=It(p,a.dtype),u?W(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Wi=O({avgPool_:r4});/**
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
 */function s4(e,t,n,r,s,a="NDHWC"){const o=N(e,"x","avgPool3d","float32");let i=o,u=!1;o.rank===4&&(u=!0,i=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),A(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),A(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),ke("avgPool3d",r,s);const l={x:i},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:a};let p=C.runKernel(x2,l,f);return p=It(p,i.dtype),u?W(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const a4=O({avgPool3d_:s4});/**
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
 */function o4(e,t=0){A(e.length>=1,()=>"Pass at least one tensor to concat");const n=ps(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),n.length===1)return cn(n[0]);const r=n,s={axis:t};return C.runKernel(F2,r,s)}const Ut=O({concat_:o4});/**
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
 */function i4(e){const n={x:N(e,"x","sigmoid","float32")};return C.runKernel(T3,n)}const Dn=O({sigmoid_:i4});/**
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
 */function u4(e,t,n){const r=N(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:t,size:n};return C.runKernel(y3,s,a)}const ht=O({slice_:u4});/**
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
 */function c4(e){const n={x:N(e,"x","tanh","float32")};return C.runKernel(z3,n)}const Sa=O({tanh_:c4});/**
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
 */function l4(e,t,n,r,s,a){const o=N(e,"forgetBias","basicLSTMCell"),i=N(t,"lstmKernel","basicLSTMCell"),u=N(n,"lstmBias","basicLSTMCell"),l=N(r,"data","basicLSTMCell"),f=N(s,"c","basicLSTMCell"),p=N(a,"h","basicLSTMCell"),b=Ut([l,p],1),v=vt(b,i),S=xt(v,u),$=S.shape[0],I=S.shape[1]/4,F=[$,I],G=ht(S,[0,0],F),j=ht(S,[0,I],F),B=ht(S,[0,I*2],F),z=ht(S,[0,I*3],F),U=xt(st(Dn(G),Sa(j)),st(f,Dn(xt(o,B)))),Z=st(Sa(U),Dn(z));return[U,Z]}const h4=O({basicLSTMCell_:l4});/**
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
 */function f4(e,t,n){const r=N(e,"x","batchToSpaceND"),s=t.reduce((i,u)=>i*u);A(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),A(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),A(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const a={x:r},o={blockShape:t,crops:n};return C.runKernel(k2,a,o)}const Hi=O({batchToSpaceND_:f4});function p4(e){let t;return e.rank===0||e.rank===1?t=W(e,[1,1,1,e.size]):e.rank===2?t=W(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
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
 */function d4(e,t,n,r,s,a){a==null&&(a=.001);const o=N(e,"x","batchNorm"),i=N(t,"mean","batchNorm"),u=N(n,"variance","batchNorm");let l;s!=null&&(l=N(s,"scale","batchNorm"));let f;r!=null&&(f=N(r,"offset","batchNorm")),A(i.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),A(f==null||i.rank===f.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),A(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const b={x:p4(o),scale:l,offset:f,mean:i,variance:u},v={varianceEpsilon:a},S=C.runKernel(lu,b,v);return W(S,o.shape)}const _s=O({batchNorm_:d4});function m4(e,t,n,r,s,a){const o=N(e,"x","batchNorm"),i=N(t,"mean","batchNorm"),u=N(n,"variance","batchNorm");let l;s!=null&&(l=N(s,"scale","batchNorm"));let f;return r!=null&&(f=N(r,"offset","batchNorm")),A(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),A(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),A(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),l!=null&&A(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),f!=null&&A(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`),_s(o,i,u,f,l,a)}const g4=O({batchNorm2d_:m4});function y4(e,t,n,r,s,a){const o=N(e,"x","batchNorm"),i=N(t,"mean","batchNorm"),u=N(n,"variance","batchNorm");let l;s!=null&&(l=N(s,"scale","batchNorm"));let f;return r!=null&&(f=N(r,"offset","batchNorm")),A(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),A(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),A(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),l!=null&&A(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),f!=null&&A(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`),_s(o,i,u,f,l,a)}const b4=O({batchNorm3d_:y4});function w4(e,t,n,r,s,a){const o=N(e,"x","batchNorm"),i=N(t,"mean","batchNorm"),u=N(n,"variance","batchNorm");let l;s!=null&&(l=N(s,"scale","batchNorm"));let f;return r!=null&&(f=N(r,"offset","batchNorm")),A(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),A(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),A(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),l!=null&&A(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),f!=null&&A(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`),_s(o,i,u,f,l,a)}const v4=O({batchNorm4d_:w4});/**
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
 */function T4(e,t,n){const r=N(e,"x","bincount"),s=N(t,"weights","bincount");A(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),A(n>=0,()=>`size must be non-negative, but got ${n}.`),A(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:n};return C.runKernel(_2,a,o)}const Gi=O({bincount_:T4});/**
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
 */function N4(e,t){const n=N(e,"s0","broadcastArgs","int32"),r=N(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return C.runKernel($2,s)}const S4=O({broadcastArgs_:N4});/**
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
 */function x4(e,t){let n=N(e,"broadcastTo","x");const r=n.shape;if(t.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=W(n,l)}const s=n.shape,a=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])a[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((l,f)=>l>1?f:-1).filter(l=>l>=0).length===0)return cn(n);const i={x:n},u={reps:a};return C.runKernel(di,i,u)}const ls=O({broadcastTo_:x4});/**
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
 */function E4(e){const n={x:N(e,"x","ceil","float32")};return C.runKernel(A2,n)}const k4=O({ceil_:E4});/**
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
 */function $s(e,t,n){const r={shape:e,value:t,dtype:n};return C.runKernel(ou,{},r)}/**
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
 */function _4(e,t,n){const r=N(e,"x","clipByValue");if(A(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return $s(r.shape,t,r.dtype);const s={x:r},a={clipValueMin:t,clipValueMax:n};return C.runKernel(I2,s,a)}const qi=O({clipByValue_:_4});function $4(e){return Ut(e,0)}const A4=O({concat1d_:$4});function I4(e,t){return Ut(e,t)}const O4=O({concat2d_:I4});function D4(e,t){return Ut(e,t)}const F4=O({concat3d_:D4});function C4(e,t){return Ut(e,t)}const L4=O({concat4d_:C4});/**
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
 */function R4(e,t,n,r,s="NHWC",a=[1,1],o){const i=N(e,"x","conv2d","float32"),u=N(t,"filter","conv2d","float32");let l=i,f=!1;i.rank===3&&(f=!0,l=W(i,[1,i.shape[0],i.shape[1],i.shape[2]])),A(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),A(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),ke("conv2d",r,o);const p=s==="NHWC"?l.shape[3]:l.shape[1];A(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),A(gn(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const b={x:l,filter:u},v={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},S=C.runKernel(C2,b,v);return f?W(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const As=O({conv2d_:R4});function P4(e,t,n,r,s="NWC",a=1,o){const i=N(e,"x","conv1d"),u=N(t,"filter","conv1d");let l=i,f=!1;i.rank===2&&(f=!0,l=W(i,[1,i.shape[0],i.shape[1]])),A(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),A(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),ke("conv1d",r,o),A(l.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`),A(gn(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),A(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const p=W(u,[1,u.shape[0],u.shape[1],u.shape[2]]),b=W(l,[l.shape[0],1,l.shape[1],l.shape[2]]),I=As(b,p,[1,n],r,"NHWC",[1,a],o);return f?W(I,[I.shape[2],I.shape[3]]):W(I,[I.shape[0],I.shape[2],I.shape[3]])}const B4=O({conv1d_:P4});/**
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
 */function j4(e,t,n,r,s,a="NHWC",o){A(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,u=t,l=!1;t.rank===3&&(l=!0,u=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),A(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),A(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),A(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const f=a==="NHWC"?i[3]:i[1],p=a==="NHWC"?u.shape[3]:u.shape[1];A(f===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${n.shape[2]}.`),A(p===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`),ke("conv2dDerInput",s,o);const b={dy:u,filter:n},v={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},S=C.runKernel(R2,b,v);return l?W(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const Xi=O({conv2DBackpropInput_:j4});function z4(e,t,n,r,s,a){const o=N(e,"x","conv2dTranspose"),i=N(t,"filter","conv2dTranspose");return Xi(n,o,i,r,s,"NHWC",a)}const V4=O({conv2dTranspose_:z4});/**
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
 */function M4(e,t,n,r,s="NDHWC",a=[1,1,1]){const o=N(e,"x","conv3d"),i=N(t,"filter","conv3d");let u=o,l=!1;o.rank===4&&(l=!0,u=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),A(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),A(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),A(u.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`),A(gn(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),A(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const f={x:u,filter:i},p={strides:n,pad:r,dataFormat:s,dilations:a},b=C.runKernel(P2,f,p);return l?W(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const U4=O({conv3d_:M4});/**
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
 */function K4(e,t,n,r,s){A(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,i=!1;t.rank===4&&(i=!0,o=W(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);const u=a[4],l=o.shape[4];A(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),A(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),A(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),A(u===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`),A(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const f={dy:o,filter:n},p={pad:s,strides:r,inputShape:a},b=C.runKernel(B2,f,p);return i?W(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const W4=O({conv3DBackpropInput_:K4});function H4(e,t,n,r,s){const a=N(e,"x","conv3dTranspose"),o=N(t,"filter","conv3dTranspose");return W4(n,a,o,r,s)}const G4=O({conv3dTranspose_:H4});/**
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
 */function q4(e){const n={x:N(e,"x","cos","float32")};return C.runKernel(j2,n)}const X4=O({cos_:q4});/**
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
 */function Y4(e){const n={x:N(e,"x","cosh","float32")};return C.runKernel(z2,n)}const J4=O({cosh_:Y4});/**
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
 */function Z4(e,t=0,n=!1,r=!1){const a={x:N(e,"x","cumprod")},o={axis:t,exclusive:n,reverse:r};return C.runKernel(V2,a,o)}const Q4=O({cumprod_:Z4});/**
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
 */function th(e,t=0,n=!1,r=!1){const a={x:N(e,"x","cumsum")},o={axis:t,exclusive:n,reverse:r};return C.runKernel(M2,a,o)}const eh=O({cumsum_:th});/**
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
 */function nh(e,t,n,r=!1){const s=N(e,"x","denseBincount"),a=N(t,"weights","denseBincount");A(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),A(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),A(n>=0,()=>`size must be non-negative, but got ${n}.`),A(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},i={size:n,binaryOutput:r};return C.runKernel(K2,o,i)}const rh=O({denseBincount_:nh});/**
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
 */function sh(e,t,n="NHWC"){const r=N(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],a=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];A(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),A(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),A(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),A(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},u={blockSize:t,dataFormat:n};return C.runKernel(W2,i,u)}const ah=O({depthToSpace_:sh});/**
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
 */function oh(e,t,n,r,s="NHWC",a=[1,1],o){const i=N(e,"x","depthwiseConv2d","float32"),u=N(t,"filter","depthwiseConv2d","float32");let l=i,f=!1;i.rank===3&&(f=!0,l=W(i,[1,i.shape[0],i.shape[1],i.shape[2]])),A(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),A(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const p=s==="NHWC"?l.shape[3]:l.shape[1];A(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),ke("depthwiseConv2d",r,o);const b={x:l,filter:u},v={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},S=C.runKernel(H2,b,v);return f?W(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const no=O({depthwiseConv2d_:oh});/**
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
 */function ih(e){const n={x:N(e,"x","diag")};return C.runKernel(X2,n)}const uh=O({diag_:ih});/**
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
 */function ch(e,t,n,r,s=[1,1],a="NHWC"){const o=N(e,"x","dilation2d"),i=N(t,"filter","dilation2d");A(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),A(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),A(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let u=o,l=!1;o.rank===3&&(u=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);const f={x:u,filter:i},p={strides:n,pad:r,dilations:s},b=C.runKernel(Y2,f,p);return l?W(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const lh=O({dilation2d_:ch});/**
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
 */function hh(e,t){let n=N(e,"a","equal","string_or_numeric"),r=N(t,"b","equal","string_or_numeric");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(eu,s)}const Yi=O({equal_:hh});/**
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
 */function fh(e,t,n){const r=N(t,"a","where"),s=N(n,"b","where"),a=N(e,"condition","where","bool"),o=jt(jt(a.shape,r.shape),s.shape),i=ls(a,o),u=ls(r,o),l=ls(s,o),f={condition:i,t:u,e:l};return C.runKernel(m3,f)}const nr=O({where_:fh});/**
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
 */function ph(e){const n={x:N(e,"x","zerosLike")};return C.runKernel(H3,n)}const ro=O({zerosLike_:ph});/**
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
 */function dh(e,t){let n=N(e,"a","div"),r=N(t,"b","div");[n,r]=Ot(n,r);const s=Nt(n,r),a=ro(s),o=Yi(r,a);return nr(o,a,s)}const mh=O({divNoNan_:dh});/**
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
 */function gh(e,t){const n=N(e,"t1","dot"),r=N(t,"t2","dot");A((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(A(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),n.rank===1&&r.rank===1){const o=W(n,[1,-1]),i=W(r,[-1,1]),u=vt(o,i);return W(u,[])}else if(n.rank===1&&r.rank===2){const o=W(n,[1,-1]),i=W(r,[r.shape[0],r.shape[1]]),u=vt(o,i);return W(u,[u.size])}else if(n.rank===2&&r.rank===1){const o=W(r,[-1,1]),i=vt(n,o);return W(i,[i.size])}else{const o=W(r,[r.shape[0],r.shape[1]]);return vt(n,o)}}const yh=O({dot_:gh});/**
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
 */function bh(e,...t){const n=t.map((s,a)=>N(s,`tensors${a}`,"einsum")),r={equation:e};return C.runKernel(Z2,n,r)}const wh=O({einsum_:bh});/**
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
 */function vh(e){const n={x:N(e,"x","elu","float32")};return C.runKernel(Q2,n)}const Ji=O({elu_:vh});/**
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
 */function Th(e){let t=N(e,"x","erf");A(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=It(t,"float32"));const n={x:t};return C.runKernel(tu,n)}const Nh=O({erf_:Th});/**
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
 */function Sh(e,t,n){const r=e.length+t.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(e[a++]):s.push(t[o++]);return s}function Is(e,t){const n=t.map(r=>1);return Sh(e,n,t)}/**
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
 */function xh(e,t=null,n=!1){const s={x:N(e,"x","max")},a={reductionIndices:t,keepDims:n};return C.runKernel(Iu,s,a)}const Qn=O({max_:xh});/**
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
 */function Eh(e,t=null,n=!1){const s={x:N(e,"x","min")},a={axis:t,keepDims:n};return C.runKernel(Ru,s,a)}const xa=O({min_:Eh});/**
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
 */function kh(e,t){let n=N(e,"base","pow"),r=N(t,"exp","pow");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(Ju,s)}const so=O({pow_:kh});/**
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
 */function wt(e,t){if((Pe(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Pe(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return mn(e,[],[],t)}/**
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
 */function _h(e){const n={x:N(e,"x","sqrt","float32")};return C.runKernel(S3,n)}const Ea=O({sqrt_:_h});/**
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
 */function $h(e){const t=N(e,"x","square"),n={};return C.runKernel("Square",{x:t},n)}const Os=O({square_:$h});/**
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
 */function Ah(e,t=null,n=!1){let r=N(e,"x","sum");r.dtype==="bool"&&(r=It(r,"int32"));const s={x:r},a={axis:t,keepDims:n};return C.runKernel(x3,s,a)}const _t=O({sum_:Ah});/**
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
 */function Ih(e,t="euclidean",n=null,r=!1){e=N(e,"x","norm");const s=Zi(e,t,n);let a=s.shape;if(r){const o=Es(n,e.shape);a=Is(s.shape,o)}return W(s,a)}function Zi(e,t,n=null){if(e.rank===0)return ye(e);if(e.rank!==1&&n===null)return Zi(W(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return _t(ye(e),n);if(t===1/0)return Qn(ye(e),n);if(t===-1/0)return xa(ye(e),n);if(t==="euclidean"||t===2)return Ea(_t(so(ye(e),wt(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Qn(_t(ye(e),n[0]),n[1]-1);if(t===1/0)return Qn(_t(ye(e),n[1]),n[0]);if(t===-1/0)return xa(_t(ye(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Ea(_t(Os(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Ds=O({norm_:Ih});/**
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
 */function Oh(e,t=null,n=!1){return Ds(e,"euclidean",t,n)}const Dh=O({euclideanNorm_:Oh});/**
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
 */function Fh(e){const n={x:N(e,"x","exp")};return C.runKernel(nu,n)}const Ge=O({exp_:Fh});/**
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
 */function Ch(e,t=0){const n=N(e,"x","expandDims","string_or_numeric");A(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return C.runKernel(ru,r,s)}const xe=O({expandDims_:Ch});/**
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
 */function Lh(e){const n={x:N(e,"x","expm1")};return C.runKernel(su,n)}const Rh=O({expm1_:Lh});/**
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
 */function Ph(e,t){const n=N(e,"x","tile","string_or_numeric");A(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return C.runKernel(di,r,s)}const Or=O({tile_:Ph});/**
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
 */function Bh(e,t,n,r="float32"){t==null&&(t=e);const s=He([e,t],r),a=e<=t?e:t;for(let i=0;i<a;++i)s.set(1,i,i);const o=W(s.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return Or(xe(o,0),[n[0],1,1]);if(n.length===2)return Or(xe(xe(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Or(xe(xe(xe(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Qi=O({eye_:Bh});/**
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
 */function jh(e){const n={x:N(e,"x","floor","float32")};return C.runKernel(uu,n)}const t1=O({floor_:jh});/**
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
 */function zh(e,t,n=0,r=0){const s=N(e,"x","gather"),a=N(t,"indices","gather","int32"),o={x:s,indices:a},i={axis:n,batchDims:r};return C.runKernel(hu,o,i)}const e1=O({gather_:zh});/**
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
 */function Vh(e,t){let n=N(e,"a","greater","string_or_numeric"),r=N(t,"b","greater","string_or_numeric");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(pu,s)}const Fs=O({greater_:Vh});/**
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
 */function Mh(e,t){let n=N(e,"a","greaterEqual","string_or_numeric"),r=N(t,"b","greaterEqual","string_or_numeric");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(du,s)}const n1=O({greaterEqual_:Mh});/**
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
 */function Uh(e){const n={x:N(e,"x","isFinite")};return C.runKernel(yu,n)}const Kh=O({isFinite_:Uh});/**
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
 */function Wh(e){const n={x:N(e,"x","isInf")};return C.runKernel(bu,n)}const Hh=O({isInf_:Wh});/**
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
 */function Gh(e){const n={x:N(e,"x","isNaN")};return C.runKernel(wu,n)}const qh=O({isNaN_:Gh});/**
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
 */function Xh(e,t=.2){const r={x:N(e,"x","leakyRelu")},s={alpha:t};return C.runKernel(vu,r,s)}const r1=O({leakyRelu_:Xh});/**
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
 */function Yh(e,t){let n=N(e,"a","less","string_or_numeric"),r=N(t,"b","less","string_or_numeric");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Tu,s)}const Jh=O({less_:Yh});/**
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
 */function Zh(e,t){let n=N(e,"a","lessEqual","string_or_numeric"),r=N(t,"b","lessEqual","string_or_numeric");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Nu,s)}const ao=O({lessEqual_:Zh});/**
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
 */function Qh(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return C.runKernel(Su,{},r)}/**
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
 */function tf(e,t=5,n=1,r=1,s=.5){const a=N(e,"x","localResponseNormalization");A(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),A(Dr(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:o},l={depthRadius:t,bias:n,alpha:r,beta:s},f=C.runKernel(Au,u,l);return i?W(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const ef=O({localResponseNormalization_:tf});/**
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
 */function nf(e){const n={x:N(e,"x","log","float32")};return C.runKernel(xu,n)}const Cr=O({log_:nf});/**
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
 */function rf(e){const n={x:N(e,"x","log1p")};return C.runKernel(Eu,n)}const s1=O({log1p_:rf});/**
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
 */function qe(e){return C.customGrad(e)}/**
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
 */function sf(e){const n={x:N(e,"x","softplus")};return C.runKernel(N3,n)}const a1=O({softplus_:sf});/**
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
 */function af(e){const t=N(e,"x","logSigmoid");return qe(r=>({value:We(a1(We(r))),gradFunc:o=>st(o,Dn(We(r)))}))(t)}const of=O({logSigmoid_:af});/**
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
 */function uf(e,t){let n=N(e,"a","sub"),r=N(t,"b","sub");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(B3,s)}const mt=O({sub_:uf});/**
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
 */function cf(e,t=-1){const n=N(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return qe((s,a)=>{const i=Qn(s,t,!0),u=mt(s,i),l=mt(It(u,"float32"),Cr(_t(Ge(u),t,!0)));return a([l]),{value:l,gradFunc:(p,b)=>{const[v]=b,S=!0,$=Ge(v);return mt(p,st(_t(p,t,S),$))}}})(n)}const lf=O({logSoftmax_:cf});/**
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
 */function hf(e,t=null,n=!1){const r=N(e,"x","logSumExp"),s=Es(t,r.shape),a=Qn(r,s,!0),o=mt(r,a),i=Ge(o),u=_t(i,s),l=Cr(u),f=xt(W(a,l.shape),l);if(n){const p=Is(f.shape,s);return W(f,p)}return f}const o1=O({logSumExp_:hf});/**
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
 */function ff(e,t){const n=N(e,"a","logicalAnd","bool"),r=N(t,"b","logicalAnd","bool");jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(ku,s)}const bs=O({logicalAnd_:ff});/**
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
 */function pf(e){const n={x:N(e,"x","logicalNot","bool")};return C.runKernel(_u,n)}const i1=O({logicalNot_:pf});/**
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
 */function df(e,t){const n=N(e,"a","logicalOr","bool"),r=N(t,"b","logicalOr","bool");jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel($u,s)}const u1=O({logicalOr_:df});/**
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
 */function mf(e,t){const n=N(e,"a","logicalXor","bool"),r=N(t,"b","logicalXor","bool");return jt(n.shape,r.shape),bs(u1(e,t),i1(bs(e,t)))}const gf=O({logicalXor_:mf});/**
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
 */const os=2147483648;function yf(e,t,n="left"){const r=N(e,"sortedSequence","searchSorted"),s=N(t,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=W(r,[-1,a]),u=W(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Mt(u.shape)>=os)throw new Error(`values tensor size must less than ${os}`);if(i.shape[1]>=os)throw new Error(`trailing dim_size must less than ${os} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:u},f={side:n};return C.runKernel(d3,l,f)}const oo=O({searchSorted_:yf});/**
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
 */function bf(e,t){return oo(e,t,"left")}/**
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
 */function wf(e,t,n,r,s){const a=N(e,"x","maxPool"),o=1;let i=a,u=!1;a.rank===3&&(u=!0,i=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),A(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),A(gn(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),ke("maxPool",r,s);const l={x:i},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s},p=C.runKernel(Du,l,f);return u?W(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const c1=O({maxPool_:wf});/**
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
 */function vf(e,t=[1,1,1],n,r,s,a="NDHWC"){const o=N(e,"x","maxPool3d");let i=o,u=!1;o.rank===4&&(u=!0,i=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),A(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),A(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),ke("maxPool3d",r,s);const l={x:i},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:a},p=C.runKernel(Fu,l,f);return u?W(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Tf=O({maxPool3d_:vf});/**
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
 */function Nf(e,t,n,r,s=!1){const o={x:N(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},u=C.runKernel(Cu,o,i);return{result:u[0],indexes:u[1]}}const Sf=O({maxPoolWithArgmax_:Nf});/**
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
 */function xf(e,t){let n=N(e,"a","maximum"),r=N(t,"b","maximum");[n,r]=Ot(n,r),n.dtype==="bool"&&(n=It(n,"int32"),r=It(r,"int32")),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Ou,s)}const Ef=O({maximum_:xf});/**
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
 */function kf(e,t=null,n=!1){const s={x:N(e,"x","mean")},a={axis:t,keepDims:n};return C.runKernel(Lu,s,a)}const ws=O({mean_:kf});/**
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
 */function rr(e,t="float32"){if(t==="complex64"){const r=rr(e,"float32"),s=rr(e,"float32");return fn(r,s)}const n=qa(Mt(e),t);return C.makeTensor(n,e,t)}/**
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
 */function On(e,t="float32"){if(t==="complex64"){const r=On(e,"float32"),s=rr(e,"float32");return fn(r,s)}const n=ii(Mt(e),t);return C.makeTensor(n,e,t)}/**
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
 */function _f(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=N(e,"x","meshgrid",e instanceof At?e.dtype:"float32");if(t===void 0)return[r];let s=N(t,"y","meshgrid",t instanceof At?t.dtype:"float32");const a=Mt(r.shape),o=Mt(s.shape);return n==="xy"?(r=W(r,[1,-1]),s=W(s,[-1,1]),[vt(On([o,1],r.dtype),r),vt(s,On([1,a],s.dtype))]):(r=W(r,[-1,1]),s=W(s,[1,-1]),[vt(r,On([1,o],r.dtype)),vt(On([a,1],s.dtype),s)])}/**
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
 */function $f(e,t){let n=N(e,"a","minimum"),r=N(t,"b","minimum");[n,r]=Ot(n,r),n.dtype==="bool"&&(n=It(n,"int32"),r=It(r,"int32")),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Pu,s)}const l1=O({minimum_:$f});/**
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
 */function Af(e,t,n){A(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=N(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");A(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)A(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),A(t[i][0]>=0&&t[i][0]<=r.shape[i]-s&&t[i][1]>=0&&t[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:t,mode:n},o={x:r};return C.runKernel(Bu,o,a)}const If=O({mirrorPad_:Af});/**
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
 */function Of(e,t){let n=N(e,"a","mod"),r=N(t,"b","mod");[n,r]=Ot(n,r);const s={a:n,b:r};return C.runKernel(ju,s)}const Df=O({mod_:Of});/**
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
 */function Ff(e,t=null,n=!1){e=N(e,"x","moments");const r=Es(t,e.shape),s=ws(e,r,n);let a=s.shape;n||(a=Is(s.shape,r));const o=Os(mt(It(e,"float32"),W(s,a))),i=ws(o,r,n);return{mean:s,variance:i}}const Cf=O({moments_:Ff});function Lf(e,t,n,r){const s=N(t,"data","multiRNNCell"),a=ps(n,"c","multiRNNCell"),o=ps(r,"h","multiRNNCell");let i=s;const u=[];for(let p=0;p<e.length;p++){const b=e[p](i,a[p],o[p]);u.push(b[0]),u.push(b[1]),i=b[1]}const l=[],f=[];for(let p=0;p<u.length;p+=2)l.push(u[p]),f.push(u[p+1]);return[l,f]}const Rf=O({multiRNNCell_:Lf});/**
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
 */function Pf(e,t,n,r=!1){const s=N(e,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const u={logits:o===1?W(s,[1,-1]):s},l={numSamples:t,seed:n,normalized:r},f=C.runKernel(zu,u,l);return o===1?W(f,[f.size]):f}const Bf=O({multinomial_:Pf});/**
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
 */function jf(e,t){let n=N(e,"a","notEqual","string_or_numeric"),r=N(t,"b","notEqual","string_or_numeric");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Uu,s)}const h1=O({notEqual_:jf});/**
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
 */function zf(e){const n={x:N(e,"x","onesLike")};return C.runKernel(Gu,n)}const Vf=O({onesLike_:zf});function Mf(e,t){const n=N(e,"v1","outerProduct"),r=N(t,"v2","outerProduct");A(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=W(n,[-1,1]),a=W(r,[1,-1]);return vt(s,a)}const Uf=O({outerProduct_:Mf});/**
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
 */function Kf(e,t,n=0){const r=N(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},a={x:r};return C.runKernel(Yu,a,s)}const Br=O({pad_:Kf});function Wf(e,t,n=0){return A(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),Br(e,[t],n)}const Hf=O({pad1d_:Wf});function Gf(e,t,n=0){return A(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Br(e,t,n)}const qf=O({pad2d_:Gf});function Xf(e,t,n=0){return A(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Br(e,t,n)}const Yf=O({pad3d_:Xf});function Jf(e,t,n=0){return A(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Br(e,t,n)}const Zf=O({pad4d_:Jf});/**
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
 */function Qf(e,t,n){const r=N(e,"x","spaceToBatchND");A(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),A(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),A(r.shape.reduce((o,i,u)=>u>0&&u<=t.length?o&&(i+n[u-1][0]+n[u-1][1])%t[u-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},a={blockShape:t,paddings:n};return C.runKernel(E3,s,a)}const f1=O({spaceToBatchND_:Qf});/**
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
 */function tp(e,t,n,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const i=N(e,"x","maxPool");let u=i,l=!1;i.rank===3&&(l=!0,u=W(i,[1,i.shape[0],i.shape[1],i.shape[2]])),A(gn(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const f=Zl(u.shape,t,a,s,r),p=[f.dilationHeight,f.dilationWidth];let b;r==="same"?b=np([f.filterHeight,f.filterWidth],p):b=[[0,0],[0,0]];const v=p[0]===1&&p[1]===1,[S,$]=ep([f.inHeight,f.inWidth],p,b),I=v?r:"valid",F=v?u:f1(u,p,S),j=(n==="avg"?()=>Wi(F,t,a,I,o):()=>c1(F,t,a,I,o))(),B=v?j:Hi(j,p,$);return l?W(B,[B.shape[1],B.shape[2],B.shape[3]]):B}function ep(e,t,n){const r=n.map(f=>f[0]),s=n.map(f=>f[1]),a=e.concat(r,s),o=t.map((f,p)=>(f-a[p]%f)%f),i=s.map((f,p)=>f+o[p]),u=t.map((f,p)=>[r[p],i[p]]),l=t.map((f,p)=>[0,o[p]]);return[u,l]}function np(e,t){const r=e.map((o,i)=>o+(o-1)*(t[i]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,i)=>o-s[i]);return r.map((o,i)=>[s[i],a[i]])}const rp=O({pool_:tp});/**
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
 */function sp(e,t){const n=N(e,"x","prelu"),r=N(t,"alpha","prelu"),s={x:n,alpha:r};return C.runKernel(Zu,s)}const p1=O({prelu_:sp});/**
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
 */function ap(e,t=null,n=!1){let r=N(e,"x","prod");r.dtype==="bool"&&(r=It(r,"int32"));const s={x:r},a={axis:t,keepDims:n};return C.runKernel(Qu,s,a)}const op=O({prod_:ap});/**
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
 */function ip(e,t,n,r){const s=e.map((f,p)=>N(f,`tensors${p}`,"raggedGather","int32")),a=N(t,"paramsDenseValues","raggedGather"),o=N(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:a,indices:o},u={outputRaggedRank:r},l=C.runKernel(t3,i,u);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const up=O({raggedGather_:ip});/**
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
 */function cp(e,t,n,r,s){const a=N(e,"shape","raggedTensorToTensor","int32"),o=N(t,"values","raggedTensorToTensor"),i=N(n,"defaultValue","raggedTensorToTensor",o.dtype),u=r.map((p,b)=>N(p,`tensors${b}`,"raggedTensorToTensor","int32")),l={shape:a,values:o,defaultValue:i,rowPartitionTensors:u},f={rowPartitionTypes:s};return C.runKernel(e3,l,f)}const lp=O({raggedTensorToTensor_:cp});/**
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
 */function hp(e,t,n){const r=Mt(e);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let a=0;a<r;a++)s[a]=t();return C.makeTensor(s,e,n)}const fp=O({rand_:hp});var ka={},pp={get exports(){return ka},set exports(e){ka=e}};(function(e){(function(t,n,r){function s(u){var l=this,f=i();l.next=function(){var p=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=p-(l.c=p|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(u),l.s0<0&&(l.s0+=1),l.s1-=f(u),l.s1<0&&(l.s1+=1),l.s2-=f(u),l.s2<0&&(l.s2+=1),f=null}function a(u,l){return l.c=u.c,l.s0=u.s0,l.s1=u.s1,l.s2=u.s2,l}function o(u,l){var f=new s(u),p=l&&l.state,b=f.next;return b.int32=function(){return f.next()*4294967296|0},b.double=function(){return b()+(b()*2097152|0)*11102230246251565e-32},b.quick=b,p&&(typeof p=="object"&&a(p,f),b.state=function(){return a(f,{})}),b}function i(){var u=4022871197,l=function(f){f=String(f);for(var p=0;p<f.length;p++){u+=f.charCodeAt(p);var b=.02519603282416938*u;u=b>>>0,b-=u,b*=u,u=b>>>0,b-=u,u+=b*4294967296}return(u>>>0)*23283064365386963e-26};return l}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.alea=o})(Le,e,!1)})(pp);var _a={},dp={get exports(){return _a},set exports(e){_a=e}};(function(e){(function(t,n,r){function s(i){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},i===(i|0)?u.x=i:l+=i;for(var f=0;f<l.length+64;f++)u.x^=l.charCodeAt(f)|0,u.next()}function a(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u}function o(i,u){var l=new s(i),f=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var b=l.next()>>>11,v=(l.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=l.next,p.quick=p,f&&(typeof f=="object"&&a(f,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xor128=o})(Le,e,!1)})(dp);var $a={},mp={get exports(){return $a},set exports(e){$a=e}};(function(e){(function(t,n,r){function s(i){var u=this,l="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,i===(i|0)?u.x=i:l+=i;for(var f=0;f<l.length+64;f++)u.x^=l.charCodeAt(f)|0,f==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u.v=i.v,u.d=i.d,u}function o(i,u){var l=new s(i),f=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var b=l.next()>>>11,v=(l.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=l.next,p.quick=p,f&&(typeof f=="object"&&a(f,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xorwow=o})(Le,e,!1)})(mp);var Aa={},gp={get exports(){return Aa},set exports(e){Aa=e}};(function(e){(function(t,n,r){function s(i){var u=this;u.next=function(){var f=u.x,p=u.i,b,v;return b=f[p],b^=b>>>7,v=b^b<<24,b=f[p+1&7],v^=b^b>>>10,b=f[p+3&7],v^=b^b>>>3,b=f[p+4&7],v^=b^b<<7,b=f[p+7&7],b=b^b<<13,v^=b^b<<9,f[p]=v,u.i=p+1&7,v};function l(f,p){var b,v=[];if(p===(p|0))v[0]=p;else for(p=""+p,b=0;b<p.length;++b)v[b&7]=v[b&7]<<15^p.charCodeAt(b)+v[b+1&7]<<13;for(;v.length<8;)v.push(0);for(b=0;b<8&&v[b]===0;++b);for(b==8?v[7]=-1:v[b],f.x=v,f.i=0,b=256;b>0;--b)f.next()}l(u,i)}function a(i,u){return u.x=i.x.slice(),u.i=i.i,u}function o(i,u){i==null&&(i=+new Date);var l=new s(i),f=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var b=l.next()>>>11,v=(l.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=l.next,p.quick=p,f&&(f.x&&a(f,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xorshift7=o})(Le,e,!1)})(gp);var Ia={},yp={get exports(){return Ia},set exports(e){Ia=e}};(function(e){(function(t,n,r){function s(i){var u=this;u.next=function(){var f=u.w,p=u.X,b=u.i,v,S;return u.w=f=f+1640531527|0,S=p[b+34&127],v=p[b=b+1&127],S^=S<<13,v^=v<<17,S^=S>>>15,v^=v>>>12,S=p[b]=S^v,u.i=b,S+(f^f>>>16)|0};function l(f,p){var b,v,S,$,I,F=[],G=128;for(p===(p|0)?(v=p,p=null):(p=p+"\0",v=0,G=Math.max(G,p.length)),S=0,$=-32;$<G;++$)p&&(v^=p.charCodeAt(($+32)%p.length)),$===0&&(I=v),v^=v<<10,v^=v>>>15,v^=v<<4,v^=v>>>13,$>=0&&(I=I+1640531527|0,b=F[$&127]^=v+I,S=b==0?S+1:0);for(S>=128&&(F[(p&&p.length||0)&127]=-1),S=127,$=4*128;$>0;--$)v=F[S+34&127],b=F[S=S+1&127],v^=v<<13,b^=b<<17,v^=v>>>15,b^=b>>>12,F[S]=v^b;f.w=I,f.X=F,f.i=S}l(u,i)}function a(i,u){return u.i=i.i,u.w=i.w,u.X=i.X.slice(),u}function o(i,u){i==null&&(i=+new Date);var l=new s(i),f=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var b=l.next()>>>11,v=(l.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=l.next,p.quick=p,f&&(f.X&&a(f,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.xor4096=o})(Le,e,!1)})(yp);var Oa={},bp={get exports(){return Oa},set exports(e){Oa=e}};(function(e){(function(t,n,r){function s(i){var u=this,l="";u.next=function(){var p=u.b,b=u.c,v=u.d,S=u.a;return p=p<<25^p>>>7^b,b=b-v|0,v=v<<24^v>>>8^S,S=S-p|0,u.b=p=p<<20^p>>>12^b,u.c=b=b-v|0,u.d=v<<16^b>>>16^S,u.a=S-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,i===Math.floor(i)?(u.a=i/4294967296|0,u.b=i|0):l+=i;for(var f=0;f<l.length+20;f++)u.b^=l.charCodeAt(f)|0,u.next()}function a(i,u){return u.a=i.a,u.b=i.b,u.c=i.c,u.d=i.d,u}function o(i,u){var l=new s(i),f=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var b=l.next()>>>11,v=(l.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=l.next,p.quick=p,f&&(typeof f=="object"&&a(f,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=o:r&&r.amd?r(function(){return o}):this.tychei=o})(Le,e,!1)})(bp);var Da={},wp={get exports(){return Da},set exports(e){Da=e}};(function(e){(function(t,n,r){var s=256,a=6,o=52,i="random",u=r.pow(s,a),l=r.pow(2,o),f=l*2,p=s-1,b;function v(B,z,U){var Z=[];z=z==!0?{entropy:!0}:z||{};var nt=F(I(z.entropy?[B,j(n)]:B??G(),3),Z),q=new S(Z),tt=function(){for(var it=q.g(a),yt=u,at=0;it<l;)it=(it+at)*s,yt*=s,at=q.g(1);for(;it>=f;)it/=2,yt/=2,at>>>=1;return(it+at)/yt};return tt.int32=function(){return q.g(4)|0},tt.quick=function(){return q.g(4)/4294967296},tt.double=tt,F(j(q.S),n),(z.pass||U||function(it,yt,at,Et){return Et&&(Et.S&&$(Et,q),it.state=function(){return $(q,{})}),at?(r[i]=it,yt):it})(tt,nt,"global"in z?z.global:this==r,z.state)}function S(B){var z,U=B.length,Z=this,nt=0,q=Z.i=Z.j=0,tt=Z.S=[];for(U||(B=[U++]);nt<s;)tt[nt]=nt++;for(nt=0;nt<s;nt++)tt[nt]=tt[q=p&q+B[nt%U]+(z=tt[nt])],tt[q]=z;(Z.g=function(it){for(var yt,at=0,Et=Z.i,Rt=Z.j,Kt=Z.S;it--;)yt=Kt[Et=p&Et+1],at=at*s+Kt[p&(Kt[Et]=Kt[Rt=p&Rt+yt])+(Kt[Rt]=yt)];return Z.i=Et,Z.j=Rt,at})(s)}function $(B,z){return z.i=B.i,z.j=B.j,z.S=B.S.slice(),z}function I(B,z){var U=[],Z=typeof B,nt;if(z&&Z=="object")for(nt in B)try{U.push(I(B[nt],z-1))}catch{}return U.length?U:Z=="string"?B:B+"\0"}function F(B,z){for(var U=B+"",Z,nt=0;nt<U.length;)z[p&nt]=p&(Z^=z[p&nt]*19)+U.charCodeAt(nt++);return j(z)}function G(){try{var B;return b&&(B=b.randomBytes)?B=B(s):(B=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(B)),j(B)}catch{var z=t.navigator,U=z&&z.plugins;return[+new Date,t,U,t.screen,j(n)]}}function j(B){return String.fromCharCode.apply(0,B)}if(F(r.random(),n),e.exports){e.exports=v;try{b=B1}catch{}}else r["seed"+i]=v})(typeof self<"u"?self:Le,[],Math)})(wp);var vp=ka,Tp=_a,Np=$a,Sp=Aa,xp=Ia,Ep=Oa,jn=Da;jn.alea=vp;jn.xor128=Tp;jn.xorwow=Np;jn.xorshift7=Sp;jn.xor4096=xp;jn.tychei=Ep;var io=jn;/**
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
 */class uo{constructor(t,n,r,s,a){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=io.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);t=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class kp{constructor(t,n,r,s){this.alpha=t,this.beta=1/n,this.dtype=r;const a=s||Math.random();this.randu=io.alea(a.toString()),this.randn=new uo(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,t=s*s,n=1-.331*t*t,r=.5*t+this.d*(1-o+Math.log(o)),a=this.randu(),a<n||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class _p{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=io.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
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
 */function $p(e,t,n=1,r="float32",s){if(n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new kp(t,n,r,s),o=He(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Ap=O({randomGamma_:$p});/**
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
 */function Ip(e,t=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new uo(t,n,r,!1,s),o=He(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const d1=O({randomNormal_:Ip});/**
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
 */function Op(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return d1(e,0,1,t,n)}const Dp=O({randomStandardNormal_:Op});/**
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
 */function Fp(e,t=0,n=1,r="float32",s){const a=He(e,r),o=new _p(t,n,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const m1=O({randomUniform_:Fp});/**
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
 */function Lr(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return C.runKernel(n3,{},s)}/**
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
 */function Cp(e){const n={x:N(e,"x","reciprocal")};return C.runKernel(s3,n)}const Lp=O({reciprocal_:Cp});/**
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
 */function Rp(e){const n={x:N(e,"x","relu")};return C.runKernel(a3,n)}const Cs=O({relu_:Rp});/**
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
 */function Pp(e){const n={x:N(e,"x","relu6")};return C.runKernel(c3,n)}const g1=O({relu6_:Pp});/**
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
 */function Bp(e,t){const r={x:N(e,"x","reverse")},s={dims:t};return C.runKernel(l3,r,s)}const Rn=O({reverse_:Bp});/**
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
 */function jp(e){const t=N(e,"x","reverse");return A(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Rn(t,0)}const zp=O({reverse1d_:jp});/**
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
 */function Vp(e,t){const n=N(e,"x","reverse");return A(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Rn(n,t)}const Mp=O({reverse2d_:Vp});/**
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
 */function Up(e,t){const n=N(e,"x","reverse");return A(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Rn(n,t)}const Kp=O({reverse3d_:Up});/**
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
 */function Wp(e,t){const n=N(e,"x","reverse");return A(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Rn(n,t)}const Hp=O({reverse4d_:Wp});/**
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
 */function Gp(e){const n={x:N(e,"x","round")};return C.runKernel(h3,n)}const y1=O({round_:Gp});/**
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
 */function qp(e){const n={x:N(e,"x","rsqrt","float32")};return C.runKernel(f3,n)}const Xp=O({rsqrt_:qp});/**
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
 */function Yp(e){const n={x:N(e,"x","selu")};return C.runKernel(g3,n)}const Jp=O({selu_:Yp});function Zp(e,t,n,r,s,a=[1,1],o="NHWC"){const i=N(e,"x","separableConv2d"),u=N(t,"depthwiseFilter","separableConv2d"),l=N(n,"pointwiseFilter","separableConv2d");let f=i,p=!1;if(i.rank===3&&(p=!0,f=W(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");A(f.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`),A(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),A(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),A(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),A(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const b=u.shape[2],v=u.shape[3];A(l.shape[2]===b*v,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${b*v}, but got ${l.shape[2]}.`);const S=no(f,u,r,s,o,a),I=As(S,l,1,"valid",o);return p?W(I,[I.shape[1],I.shape[2],I.shape[3]]):I}const Qp=O({separableConv2d_:Zp});/**
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
 */async function t0(e,t){const n=N(e,"x","setdiff1d"),r=N(t,"y","setdiff1d");A(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),A(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),A(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),a=await r.data(),o=new Set(a);let i=0;for(let f=0;f<s.length;f++)o.has(s[f])||i++;const u=new la([i],n.dtype),l=new la([i],"int32");for(let f=0,p=0;f<s.length;f++)o.has(s[f])||(u.values[p]=s[f],l.values[p]=f,p++);return[u.toTensor(),l.toTensor()]}const e0=t0;/**
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
 */function n0(e){const n={x:N(e,"x","sign")};return C.runKernel(v3,n)}const r0=O({sign_:n0});/**
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
 */function s0(e){const n={x:N(e,"x","sin","float32")};return C.runKernel(b3,n)}const a0=O({sin_:s0});/**
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
 */function o0(e){const n={x:N(e,"x","sinh")};return C.runKernel(w3,n)}const i0=O({sinh_:o0});/**
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
 */function u0(e,t,n){const r=N(e,"x","slice1d");return A(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),ht(r,[t],[n])}const c0=O({slice1d_:u0});/**
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
 */function l0(e,t,n){const r=N(e,"x","slice2d");return A(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),ht(r,t,n)}const h0=O({slice2d_:l0});/**
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
 */function f0(e,t,n){const r=N(e,"x","slice3d");return A(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),ht(r,t,n)}const p0=O({slice3d_:f0});/**
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
 */function d0(e,t,n){const r=N(e,"x","slice4d");return A(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),ht(r,t,n)}const m0=O({slice4d_:d0});/**
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
 */function g0(e,t=-1){const n=N(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return C.runKernel(_3,r,s)}const y0=O({softmax_:g0});/**
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
 */function b0(e){A(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return C.runKernel(au,t)}const co=O({fft_:b0});/**
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
 */function w0(e){A(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return C.runKernel(mu,t)}const vs=O({ifft_:w0});/**
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
 */function v0(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=W(e,[n,t]);r=vs(s)}else{const s=[n,2*(t-1)],a=W(Fr(e),[n,t]),o=W(ks(e),[n,t]),i=Rn(ht(a,[0,1],[n,t-2]),1),u=st(Rn(ht(o,[0,1],[n,t-2]),1),wt(-1)),l=Ut([a,i],1),f=Ut([o,u],1),p=W(fn(l,f),[s[0],s[1]]);r=vs(p)}if(r=Fr(r),e.rank===3&&e.shape[0]!==0){const s=r,a=e.shape[0];r=W(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const b1=O({irfft_:v0});/**
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
 */function T0(e,t,n=0){const s={x:N(e,"x","split")},a={numOrSizeSplits:t,axis:n};return C.runKernel(k3,s,a)}const Rr=O({split_:T0});/**
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
 */function N0(e,t){A(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const S=e.shape.map(I=>0),$=e.shape.map(I=>I);$[e.shape.length-1]=t,s=ht(e,S,$),n=t}else if(t!=null&&t>n){const S=e.shape.map($=>$);S[e.shape.length-1]=t-n,s=Ut([e,rr(S)],e.shape.length-1),n=t}else s=e;const a=ro(s),o=W(fn(s,a),[r,n]),i=co(o),u=Math.floor(n/2)+1,l=Fr(i),f=ks(i),p=Rr(l,[u,n-u],l.shape.length-1),b=Rr(f,[u,n-u],f.shape.length-1),v=s.shape.slice();return v[s.shape.length-1]=u,W(fn(p[0],b[0]),v)}const lo=O({rfft_:N0});/**
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
 */function S0(e,t){let n=N(e,"a","squaredDifference"),r=N(t,"b","squaredDifference");[n,r]=Ot(n,r),jt(n.shape,r.shape);const s={a:n,b:r},a={};return C.runKernel(F3,s,a)}const w1=O({squaredDifference_:S0});/**
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
 */function x0(e,t){const n=N(e,"x","squeeze","string_or_numeric");return W(n,Y1(n.shape,t).newShape)}const Bt=O({squeeze_:x0});/**
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
 */function E0(e,t=0){const n=ps(e,"tensors","stack","string_or_numeric");A(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&A(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return C.runKernel(Xu,r,s)}const Xe=O({stack_:E0});/**
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
 */function k0(e,t=0){const r={x:N(e,"x","step")},s={alpha:t};return C.runKernel(G3,r,s)}const v1=O({step_:k0});/**
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
 */function _0(e,t,n,r,s=0,a=0,o=0,i=0,u=0){const f={x:N(e,"x","stridedSlice","string_or_numeric")},p={begin:t,end:n,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return C.runKernel(C3,f,p)}const $0=O({stridedSlice_:_0});/**
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
 */function A0(e){const n={x:N(e,"x","tan","float32")};return C.runKernel(j3,n)}const I0=O({tan_:A0});/**
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
 */function Yt(e,t){sr(e);const n=dn(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return mn(e,null,n,t)}/**
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
 */function ln(e,t,n){if(sr(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=dn(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return mn(e,t,r,n)}/**
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
 */function O0(e,t,n){if(sr(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=dn(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return mn(e,t,r,n)}/**
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
 */function D0(e,t,n){if(sr(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=dn(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return mn(e,t,r,n)}/**
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
 */function F0(e,t,n){if(sr(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=dn(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,mn(e,t,r,n)}/**
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
 */function C0(e,t=1,n=!0){const r=N(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const a={x:r},o={k:t,sorted:n},[i,u]=C.runKernel(V3,a,o);return{values:i,indices:u}}const L0=O({topk_:C0});/**
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
 */function R0(e,t=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new uo(t,n,r,!0,s),o=He(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const P0=O({truncatedNormal_:R0});/**
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
 */function B0(e,t=0){const n=N(e,"x","unique","string_or_numeric");A(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[a,o]=C.runKernel(U3,r,s);return{values:a,indices:o}}const j0=O({unique_:B0});/**
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
 */function z0(e,t,n){const r=N(e,"x","unsortedSegmentSum"),s=N(t,"segmentIds","unsortedSegmentSum","int32");A(Dr(n),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:n};return C.runKernel(W3,a,o)}const V0=O({unsortedSegmentSum_:z0});/**
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
 */function M0(e,t=0){const n=N(e,"x","unstack","string_or_numeric");A(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return C.runKernel(K3,r,s)}const zn=O({unstack_:M0});/**
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
 */function U0(e,t){return oo(e,t,"right")}/**
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
 */function K0(e,t=!0,n,r){return C.makeVariable(e,t,n,r)}/**
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
 */function W0(e,t){const n=[];for(let a=0;a<t.length;a++)t[a]&&n.push(a);const r=He(e,"int32"),s=He([n.length,e.length],"int32");for(let a=0;a<n.length;a++){const o=r.indexToLoc(n[a]),i=a*e.length;s.values.set(o,i)}return s.toTensor()}/**
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
 */async function H0(e){const t=N(e,"condition","whereAsync","bool"),n=await t.data(),r=W0(t.shape,n);return e!==t&&t.dispose(),r}const T1=H0;/**
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
 */async function G0(e,t,n){const r=N(e,"tensor","boolMask"),s=N(t,"mask","boolMask","bool"),a=n??0,o=s.rank,i=r.shape;A(o>0,()=>"mask cannot be scalar"),we(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let $=a;$<a+o;$++)u*=i[$];const l=i.slice(0,a).concat([u],i.slice(a+o)),f=W(r,l),p=W(s,[-1]),b=await T1(p),v=Bt(b,[1]),S=e1(f,v,a);return e!==r&&r.dispose(),t!==s&&s.dispose(),v.dispose(),f.dispose(),p.dispose(),b.dispose(),S}const q0=G0;/**
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
 */function X0(e,t,n,r,s=!0){const a=N(e,"v","movingAverage"),o=N(t,"x","movingAverage"),i=N(n,"decay","movingAverage");hc(a,o),A(hn(a.shape,o.shape),()=>"Shape mismatch in v and x");const u=wt(1),l=mt(u,i);let f=st(mt(o,a),l);if(s){A(r!=null,()=>"When using zeroDebias: true, step is required.");const p=N(r,"step","movingAverage");f=Nt(f,mt(u,so(i,p)))}return xt(a,f)}const Y0=O({movingAverage_:X0});/**
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
 */function J0(e,t,n){const r=N(e,"indices","scatterND","int32"),s=N(t,"updates","scatterND");Nl(s,r,n);const a={indices:r,updates:s},o={shape:n};return C.runKernel(p3,a,o)}const Z0=O({scatterND_:J0});function Q0(e,t,n,r){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=t.size;if(!(t.rank===0||t.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
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
 */function td(e,t,n,r=0){const s=N(e,"sparseIndices","sparseToDense","int32"),a=N(t,"sparseValues","sparseToDense","string_or_numeric"),o=N(r,"defaultValue","sparseToDense",a.dtype);Q0(s,a,n,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},u={outputShape:n};return C.runKernel(D3,i,u)}const ed=O({sparseToDense_:td});/**
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
 */function nd(e,t){const n=N(t,"indices","gatherND","int32"),s={params:N(e,"x","gatherND","string_or_numeric"),indices:n};return C.runKernel(fu,s)}const rd=O({gatherND_:nd});/**
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
 */function sd(e,t){if(t==null)return e.shape.slice();if(hn(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
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
 */function ad(e,t,n,r){const s=N(e,"x","dropout");if(A(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),A(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof At?s.clone():s;const a=sd(s,n),o=1-t,i=Nt(t1(xt(m1(a,0,1,"float32",r),o)),o);return st(s,i)}const od=O({dropout_:ad});/**
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
 */function N1(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function ho(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let a=0;a<e;++a){const o=2*Math.PI*a/(e+r-1);s[a]=t-n*Math.cos(o)}return Yt(s,"float32")}/**
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
 */async function id(e,t,n=1){const r=N(e,"predictions","inTopK"),s=N(t,"targets","inTopK");A(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),A(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),we(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];A(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);const o=await r.data(),i=await s.data(),[u,l]=[o.length/a,a],f=J1("bool",u);for(let p=0;p<u;p++){const b=p*l,v=o.subarray(b,b+l),S=[];for(let $=0;$<v.length;$++)S.push({value:v[$],index:$});S.sort(($,I)=>I.value-$.value),f[p]=0;for(let $=0;$<n;$++)if(S[$].index===i[p]){f[p]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),Re(f,s.shape,"bool")}const ud=id;/**
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
 */function cd(e,t,n,r,s,a="NHWC",o){let i=e;e.rank===3&&(i=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=W(t,[1,t.shape[0],t.shape[1],t.shape[2]])),A(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),A(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),A(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=a==="NHWC"?i.shape[3]:i.shape[1],f=a==="NHWC"?u.shape[3]:u.shape[1];A(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),A(f===n[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${n[3]}).`),ke("conv2dDerFilter",s,o);const p={x:i,dy:u},b={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:n};return C.runKernel(L2,p,b)}const ld=O({conv2DBackpropFilter_:cd});/**
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
 */function fo(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return st(e,v1(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function po(e,t){let n=t;const r=wl(e.shape,t.shape);return r.length>0&&(n=_t(n,r)),W(n,e.shape)}function mo(e,t,n,r){if(t==="linear")return e;if(t==="relu")return Cs(e);if(t==="elu")return Ji(e);if(t==="relu6")return g1(e);if(t==="prelu")return p1(e,n);if(t==="leakyrelu")return r1(e,r);if(t==="sigmoid")return Dn(e);throw new Error(`Unknown fused activation ${t}.`)}const go=(e,t)=>!(e>0)||t==="linear";/**
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
 */function hd({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:f}){if(u=u||"linear",go(C.state.gradientDepth,u)===!1){A(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let U=As(e,t,n,r,s,a,o);return i!=null&&(U=xt(U,i)),mo(U,u,l,f)}const p=N(e,"x","conv2d","float32"),b=N(t,"filter","conv2d","float32");let v=p,S=!1;p.rank===3&&(S=!0,v=W(p,[1,p.shape[0],p.shape[1],p.shape[2]])),A(v.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${v.rank}.`),A(b.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${b.rank}.`),ke("fused conv2d",r,o);const $=s==="NHWC"?v.shape[3]:v.shape[1];A(b.shape[2]===$,()=>`Error in conv2d: depth of input (${$}) must match input depth for filter ${b.shape[2]}.`),A(gn(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const I=eo(v.shape,b.shape,n,a,r,o);let F;i!=null&&(F=N(i,"bias","fused conv2d"),[F]=Ot(F,p),s==="NHWC"?jt(I.outShape,F.shape):(A(F.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${F.shape.length}.`),A(F.shape.length===0||F.shape[0]===I.outChannels||F.shape[0]===1,()=>`Error in fused conv2d: bias shape (${F.shape}) is not compatible with the number of output channels (${I.outChannels})`)));let G;if(l!=null){const U=l.shape;if(A(U.length<=1||U.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${U.length}.`),U.length===1)A(U[0]===1||U[0]===I.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${U}) is not compatible with the number of output channels (${I.outChannels}).`);else if(U.length===3)try{jt(U,I.outShape)}catch{const nt=`Error in fused conv2d: PReLU activation weights (${U}) is not compatible with the output shape of the conv2d (${I.outShape}).`;throw Error(nt)}G=N(l,"prelu weights","fused conv2d")}const j=(U,Z)=>{A(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[nt,q,tt,it]=Z,yt=fo(U,tt,u);A(ys(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const at=Xi(q.shape,yt,nt,n,r),Et=ld(q,yt,nt.shape,n,r),Rt=[at,Et];if(it!=null){const Kt=po(it,yt);Rt.push(Kt)}return Rt},B={x:v,filter:b,bias:F,preluActivationWeights:G},z={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:f};return i==null?qe((Z,nt,q)=>{let tt=C.runKernel(Eo,B,z);return q([nt,Z,tt]),S&&(tt=W(tt,[tt.shape[1],tt.shape[2],tt.shape[3]])),{value:tt,gradFunc:j}})(v,b):qe((Z,nt,q,tt)=>{let it=C.runKernel(Eo,B,z);return tt([nt,Z,it,q]),S&&(it=W(it,[it.shape[1],it.shape[2],it.shape[3]])),{value:it,gradFunc:j}})(v,b,F)}const fd=O({fusedConv2d_:hd});/**
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
 */function pd(e,t,n,r,s,a=[1,1],o){let i=e;e.rank===3&&(i=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:u},f={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:n};return C.runKernel(G2,l,f)}const dd=O({depthwiseConv2dNativeBackpropFilter_:pd});/**
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
 */function md(e,t,n,r,s,a=[1,1],o){let i=t,u=!1;t.rank===3&&(u=!0,i=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},f={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:e},p=C.runKernel(q2,l,f);return u?W(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const gd=O({depthwiseConv2dNativeBackpropInput_:md});/**
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
 */function yd({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:f}){if(go(C.state.gradientDepth,u)===!1){let z=no(e,t,n,r,s,a,o);return i!=null&&(z=xt(z,i)),mo(z,u,l,f)}const p=N(e,"x","depthwiseConv2d","float32"),b=N(t,"filter","depthwiseConv2d","float32");let v=p,S=!1;p.rank===3&&(S=!0,v=W(p,[1,p.shape[0],p.shape[1],p.shape[2]])),A(v.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${v.rank}.`),A(b.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${b.rank}.`),A(v.shape[3]===b.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${v.shape[3]}) must match the inChannels dimension in filter ${b.shape[2]}.`),a==null&&(a=[1,1]),A(gn(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),ke("fused depthwiseConv2d",r,o);const $=eo(v.shape,b.shape,n,a,r,o,!0);let I;i!=null&&(I=N(i,"bias","fused conv2d"),[I]=Ot(I,p),jt($.outShape,I.shape));let F;l!=null&&(F=N(l,"prelu weights","fused depthwiseConv2d"));const G=(z,U)=>{A(ys(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[Z,nt,q,tt]=U,it=fo(z,q,u),yt=gd(nt.shape,it,Z,n,r,a,o),at=dd(nt,it,Z.shape,n,r,a,o);if(tt!=null){const Et=po(I,it);return[yt,at,Et]}return[yt,at]},j={x:v,filter:b,bias:I,preluActivationWeights:F},B={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:f};return i==null?qe((U,Z,nt)=>{let q=C.runKernel(ko,j,B);return nt([Z,U,q]),S&&(q=W(q,[q.shape[1],q.shape[2],q.shape[3]])),{value:q,gradFunc:G}})(v,b):qe((U,Z,nt,q)=>{let tt=C.runKernel(ko,j,B);return q([Z,U,tt,nt]),S&&(tt=W(tt,[tt.shape[1],tt.shape[2],tt.shape[3]])),{value:tt,gradFunc:G}})(v,b,I)}const bd=O({fusedDepthwiseConv2d_:yd});/**
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
 */function wd({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(go(C.state.gradientDepth,a)===!1){let it=vt(e,t,n,r);return s!=null&&(it=xt(it,s)),mo(it,a,o,i)}let u=N(e,"a","fused matMul"),l=N(t,"b","fused matMul");[u,l]=Ot(u,l);const f=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],b=n?u.shape[u.rank-1]:u.shape[u.rank-2],v=r?l.shape[l.rank-2]:l.shape[l.rank-1],S=u.shape.slice(0,-2),$=l.shape.slice(0,-2),I=Mt(S),F=Mt($);A(f===p,()=>`Error in fused matMul: inner shapes (${f}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);const j=jt(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([b,v]),B=n?W(u,[I,f,b]):W(u,[I,b,f]),z=r?W(l,[F,v,p]):W(l,[F,p,v]);let U;s!=null&&(U=N(s,"bias","fused matMul"),[U]=Ot(U,u),jt(j,U.shape));let Z;o!=null&&(Z=N(o,"prelu weights","fused matMul"));const nt=(it,yt)=>{const[at,Et,Rt,Kt]=yt,zt=fo(W(it,Rt.shape),Rt,a);let ve,le;if(!n&&!r?(ve=vt(zt,Et,!1,!0),le=vt(at,zt,!0,!1)):!n&&r?(ve=vt(zt,Et,!1,!1),le=vt(zt,at,!0,!1)):n&&!r?(ve=vt(Et,zt,!1,!0),le=vt(at,zt,!1,!1)):(ve=vt(Et,zt,!0,!0),le=vt(zt,at,!0,!0)),s!=null){const yn=po(Kt,zt);return[ve,le,yn]}else return[ve,le]},q={a:B,b:z,bias:U,preluActivationWeights:Z},tt={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:i};return s==null?qe((yt,at,Et)=>{const Rt=C.runKernel(xo,q,tt);return Et([yt,at,Rt]),{value:W(Rt,j),gradFunc:nt}})(B,z):qe((yt,at,Et,Rt)=>{const Kt=C.runKernel(xo,q,tt);return Rt([yt,at,Kt,Et]),{value:W(Kt,j),gradFunc:nt}})(B,z,U)}const vd=O({fusedMatMul_:wd});/**
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
 */const Td=Object.freeze(Object.defineProperty({__proto__:null,conv2d:fd,depthwiseConv2d:bd,matMul:vd},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Nd(e){return ho(e,.54,.46)}const Sd=O({hammingWindow_:Nd});/**
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
 */function xd(e){return ho(e,.5,.5)}const S1=O({hannWindow_:xd});/**
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
 */function Ed(e,t,n,r=!1,s=0){let a=0;const o=[];for(;a+t<=e.size;)o.push(ht(e,a,t)),a+=n;if(r)for(;a<e.size;){const i=a+t-e.size,u=Ut([ht(e,a,t-i),$s([i],s)]);o.push(u),a+=n}return o.length===0?ln([],[0,t]):W(Ut(o),[o.length,t])}const x1=O({frame_:Ed});/**
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
 */function kd(e,t,n,r,s=S1){r==null&&(r=N1(t));const a=x1(e,t,n),o=st(a,s(t));return lo(o,r)}const _d=O({stft_:kd});/**
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
 */function $d(e,t,n,r,s="bilinear",a=0){const o=N(e,"image","cropAndResize"),i=N(t,"boxes","cropAndResize","float32"),u=N(n,"boxInd","cropAndResize","int32"),l=i.shape[0];A(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),A(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),A(u.rank===1&&u.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),A(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),A(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),A(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const f={image:o,boxes:i,boxInd:u},p={method:s,extrapolationValue:a,cropSize:r};return C.runKernel(U2,f,p)}const Ad=O({cropAndResize_:$d});/**
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
 */function Id(e){const t=N(e,"image","flipLeftRight","float32");A(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return C.runKernel(iu,n,{})}const Od=O({flipLeftRight_:Id});/**
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
 */function Dd(e){const t=N(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];A(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),A(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,Or(t,s)}const Fd=O({grayscaleToRGB_:Dd});/**
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
 */function Cd(e,t,n=0,r=.5){const s=N(e,"image","rotateWithOffset","float32");A(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:t,fillValue:n,center:r};return C.runKernel(q3,a,o)}const Ld=O({rotateWithOffset_:Cd});/**
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
 */function ar(e,t,n,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=e.shape[0];return n=Math.min(n,o),A(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),A(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),A(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),A(t.rank===1,()=>"scores must be a 1D tensor"),A(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),A(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
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
 */function Rd(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=N(e,"boxes","nonMaxSuppression","float32"),o=N(t,"scores","nonMaxSuppression","float32"),i=ar(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const u={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return C.runKernel(Ku,{boxes:a,scores:o},u)}const Pd=O({nonMaxSuppression_:Rd});/**
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
 */function Bd(e,t,n){const r=jd(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function jd(e,t,n){return Vd(e,t,n||zd)}function zd(e,t){return e>t?1:e<t?-1:0}function Vd(e,t,n){let r=0,s=e.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(t,e[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}/**
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
 */function Md(e,t,n,r,s){return yo(e,t,n,r,s,0)}function Ud(e,t,n,r,s,a){return yo(e,t,n,r,s,0,!1,a,!0)}function Kd(e,t,n,r,s,a){return yo(e,t,n,r,s,a,!0)}function yo(e,t,n,r,s,a,o=!1,i=!1,u=!1){const l=[];for(let I=0;I<t.length;I++)t[I]>s&&l.push({score:t[I],boxIndex:I,suppressBeginIndex:0});l.sort(Bo);const f=a>0?-.5/a:0,p=[],b=[];for(;p.length<n&&l.length>0;){const I=l.pop(),{score:F,boxIndex:G,suppressBeginIndex:j}=I;if(F<s)break;let B=!1;for(let z=p.length-1;z>=j;--z){const U=Wd(e,G,p[z]);if(U>=r){B=!0;break}if(I.score=I.score*Hd(r,f,U),I.score<=s)break}I.suppressBeginIndex=p.length,B||(I.score===F?(p.push(G),b.push(I.score)):I.score>s&&Bd(l,I,Bo))}const v=p.length,S=n-v;i&&S>0&&(p.push(...new Array(S).fill(0)),b.push(...new Array(S).fill(0)));const $={selectedIndices:p};return o&&($.selectedScores=b),u&&($.validOutputs=v),$}function Wd(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),f=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),b=Math.max(s[1],s[3]),v=(i-a)*(u-o),S=(p-l)*(b-f);if(v<=0||S<=0)return 0;const $=Math.max(a,l),I=Math.max(o,f),F=Math.min(i,p),G=Math.min(u,b),j=Math.max(F-$,0)*Math.max(G-I,0);return j/(v+S-j)}function Hd(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function Bo(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
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
 */async function Gd(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=N(e,"boxes","nonMaxSuppressionAsync"),o=N(t,"scores","nonMaxSuppressionAsync"),i=ar(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const u=await Promise.all([a.data(),o.data()]),l=u[0],f=u[1],{selectedIndices:p}=Md(l,f,n,r,s);return a!==e&&a.dispose(),o!==t&&o.dispose(),Yt(p,"int32")}const qd=Gd;/**
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
 */function Xd(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=N(e,"boxes","nonMaxSuppression"),i=N(t,"scores","nonMaxSuppression"),u=ar(o,i,n,r,s,a);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const l={boxes:o,scores:i},f={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},p=C.runKernel(Hu,l,f);return{selectedIndices:p[0],selectedScores:p[1]}}const Yd=O({nonMaxSuppressionWithScore_:Xd});/**
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
 */async function Jd(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=N(e,"boxes","nonMaxSuppressionAsync"),i=N(t,"scores","nonMaxSuppressionAsync"),u=ar(o,i,n,r,s,a);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const l=await Promise.all([o.data(),i.data()]),f=l[0],p=l[1],{selectedIndices:b,selectedScores:v}=Kd(f,p,n,r,s,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:Yt(b,"int32"),selectedScores:Yt(v)}}const Zd=Jd;/**
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
 */function Qd(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=N(e,"boxes","nonMaxSuppression"),i=N(t,"scores","nonMaxSuppression"),u=ar(o,i,n,r,s,null),l=u.maxOutputSize,f=u.iouThreshold,p=u.scoreThreshold,b={boxes:o,scores:i},v={maxOutputSize:l,iouThreshold:f,scoreThreshold:p,padToMaxOutputSize:a},S=C.runKernel(Wu,b,v);return{selectedIndices:S[0],validOutputs:S[1]}}const tm=O({nonMaxSuppressionPadded_:Qd});/**
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
 */async function em(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=N(e,"boxes","nonMaxSuppressionAsync"),i=N(t,"scores","nonMaxSuppressionAsync"),u=ar(o,i,n,r,s,null),l=u.maxOutputSize,f=u.iouThreshold,p=u.scoreThreshold,[b,v]=await Promise.all([o.data(),i.data()]),{selectedIndices:S,validOutputs:$}=Ud(b,v,l,f,p,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:Yt(S,"int32"),validOutputs:wt($,"int32")}}const nm=em;/**
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
 */function rm(e,t,n=!1,r=!1){const s=N(e,"images","resizeBilinear");A(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),A(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),A(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=W(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:r,size:t},l=C.runKernel(u3,i,u);return o?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const sm=O({resizeBilinear_:rm});/**
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
 */function am(e,t,n=!1,r=!1){const s=N(e,"images","resizeNearestNeighbor");A(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),A(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),A(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),A(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=W(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:r,size:t},l=C.runKernel(i3,i,u);return o?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const om=O({resizeNearestNeighbor_:am});/**
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
 */function im(e,t="binary",n=!1,r=.5){const s=N(e,"image","threshold"),a=.2989,o=.587,i=.114,u=s.shape[0]*s.shape[1];let l=st(Yt([r]),255),f,p,b,v;if(A(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),A(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),A(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),A(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[f,p,b]=Rr(s,[1,1,1],-1);const I=st(f,a),F=st(p,o),G=st(b,i);v=xt(xt(I,F),G)}else v=e;if(t==="otsu"){const I=Gi(It(y1(v),"int32"),Re([]),256);l=um(I,u)}const S=n?ao(v,l):Fs(v,l);return It(st(S,255),"int32")}function um(e,t){let n=Yt([-1]),r=Yt([0]),s=Yt([0]),a,o,i,u,l,f;for(let p=0;p<e.size-1;p++){a=ht(e,0,p+1),o=ht(e,p+1),l=Nt(_t(a),t),f=Nt(_t(o),t);const b=_t(st(a,Lr(0,a.size)));i=Nt(b,_t(a));const v=$s(o.shape,a.size),S=xt(Lr(0,o.size),v),$=st(o,S);u=Nt(_t($),_t(o));const I=mt(i,u),F=mt(i,u),G=st(l,f);s=st(st(G,I),F);const j=Fs(s,r);r=nr(j,s,r),n=nr(j,Yt([p]),n)}return n}const cm=O({threshold_:im});/**
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
 */function lm(e,t,n="nearest",r="constant",s=0,a){const o=N(e,"image","transform","float32"),i=N(t,"transforms","transform","float32");A(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),A(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),A(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const u={image:o,transforms:i},l={interpolation:n,fillMode:r,fillValue:s,outputShape:a};return C.runKernel(M3,u,l)}const hm=O({transform_:lm});/**
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
 */function fm(e,t,n){A(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),A(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=N(e,"a","bandPart");A(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);if(!(t<=a))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=a),n<0&&(n=o);const i=W(Lr(0,a,1,"int32"),[-1,1]),u=Lr(0,o,1,"int32"),l=mt(i,u),f=bs(ao(l,wt(+t,"int32")),n1(l,wt(-n,"int32"))),p=rr([a,o],r.dtype);return W(Xe(zn(W(r,[-1,a,o])).map(b=>nr(f,b,p))),s)}const pm=O({bandPart_:fm});/**
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
 */function dm(e){let t;if(Array.isArray(e)){t=!1,A(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let a=1;a<e.length;++a)A(e[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[a].shape[0]} vs. ${s})`)}else t=!0,e=Rr(e,e.shape[0],0).map(s=>Bt(s,[0]));A(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(C.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const i=st(_t(st(n[o],a)),n[o]);a=mt(a,i)}return Nt(a,Ds(a,"euclidean"))}));return t?Xe(n,0):n}const mm=O({gramSchmidt_:dm});/**
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
 */function gm(e,t=!1){if(A(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return jo(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((u,l)=>u*l),r=zn(W(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],a=[];r.forEach(u=>{const[l,f]=jo(u,t);s.push(l),a.push(f)});const o=W(Xe(s,0),e.shape),i=W(Xe(a,0),e.shape);return[o,i]}}function jo(e,t=!1){return C.tidy(()=>{A(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=Qi(n),a=cn(e);const o=ln([[1]],[1,1]);let i=cn(o);const u=n>=r?r:n;for(let l=0;l<u;++l){const f=a,p=i,b=s;[i,a,s]=C.tidy(()=>{const v=ht(a,[l,l],[n-l,1]),S=Ds(v),$=ht(a,[l,l],[1,1]),I=nr(Fs($,0),ln([[-1]]),ln([[1]])),F=mt($,st(I,S)),G=Nt(v,F);G.shape[0]===1?i=cn(o):i=Ut([o,ht(G,[1,0],[G.shape[0]-1,G.shape[1]])],0);const j=We(Nt(vt(I,F),S)),B=ht(a,[l,0],[n-l,r]),z=st(j,i),U=Ta(i);if(l===0)a=mt(B,vt(z,vt(U,B)));else{const q=mt(B,vt(z,vt(U,B)));a=Ut([ht(a,[0,0],[l,r]),q],0)}const Z=Ta(z),nt=ht(s,[0,l],[n,s.shape[1]-l]);if(l===0)s=mt(nt,vt(vt(nt,i),Z));else{const q=mt(nt,vt(vt(nt,i),Z));s=Ut([ht(s,[0,0],[n,l]),q],1)}return[i,a,s]}),Ce([f,p,b])}return!t&&n>r&&(s=ht(s,[0,0],[n,r]),a=ht(a,[0,0],[r,r])),[s,a]})}const ym=O({qr_:gm});/**
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
 */var Qt;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Qt||(Qt={}));function bm(e,t,n=Qt.SUM_BY_NONZERO_WEIGHTS){const r=N(e,"losses","computeWeightedLoss");let s=null;t!=null&&(s=N(t,"weights","computeWeightedLoss"));const a=s==null?r:st(r,s);if(n===Qt.NONE)return a;if(n===Qt.SUM)return _t(a);if(n===Qt.MEAN){if(s==null)return ws(a);{const o=r.size/s.size,i=Nt(_t(a),_t(s));return o>1?Nt(i,wt(o)):i}}if(n===Qt.SUM_BY_NONZERO_WEIGHTS){if(s==null)return Nt(_t(a),wt(r.size));{const o=st(s,On(r.shape)),i=It(_t(h1(o,wt(0))),"float32");return Nt(_t(a),i)}}throw Error(`Unknown reduction: ${n}`)}const Ze=O({computeWeightedLoss_:bm});/**
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
 */function wm(e,t,n,r=Qt.SUM_BY_NONZERO_WEIGHTS){const s=N(e,"labels","absoluteDifference"),a=N(t,"predictions","absoluteDifference");let o=null;n!=null&&(o=N(n,"weights","absoluteDifference")),we(s.shape,a.shape,"Error in absoluteDifference: ");const i=ye(mt(s,a));return Ze(i,o,r)}const vm=O({absoluteDifference_:wm});function Tm(e,t,n,r,s=Qt.SUM_BY_NONZERO_WEIGHTS){const a=N(e,"labels","cosineDistance"),o=N(t,"predictions","cosineDistance");let i=null;r!=null&&(i=N(r,"weights","cosineDistance")),we(a.shape,o.shape,"Error in cosineDistance: ");const u=wt(1),l=mt(u,_t(st(a,o),n,!0));return Ze(l,i,s)}const Nm=O({cosineDistance_:Tm});function Sm(e,t,n,r=Qt.SUM_BY_NONZERO_WEIGHTS){let s=N(e,"labels","hingeLoss");const a=N(t,"predictions","hingeLoss");let o=null;n!=null&&(o=N(n,"weights","hingeLoss")),we(s.shape,a.shape,"Error in hingeLoss: ");const i=wt(1);s=mt(st(wt(2),s),i);const u=Cs(mt(i,st(s,a)));return Ze(u,o,r)}const xm=O({hingeLoss_:Sm});/**
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
 */function Em(e,t,n,r=1,s=Qt.SUM_BY_NONZERO_WEIGHTS){const a=N(e,"labels","huberLoss"),o=N(t,"predictions","huberLoss");let i=null;n!=null&&(i=N(n,"weights","huberLoss")),we(a.shape,o.shape,"Error in huberLoss: ");const u=wt(r),l=ye(mt(o,a)),f=l1(l,u),p=mt(l,f),b=xt(st(wt(.5),Os(f)),st(u,p));return Ze(b,i,s)}const km=O({huberLoss_:Em});/**
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
 */function _m(e,t,n,r=1e-7,s=Qt.SUM_BY_NONZERO_WEIGHTS){const a=N(e,"labels","logLoss"),o=N(t,"predictions","logLoss");let i=null;n!=null&&(i=N(n,"weights","logLoss")),we(a.shape,o.shape,"Error in logLoss: ");const u=wt(1),l=wt(r),f=We(st(a,Cr(xt(o,l)))),p=st(mt(u,a),Cr(xt(mt(u,o),l))),b=mt(f,p);return Ze(b,i,s)}const $m=O({logLoss_:_m});/**
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
 */function Am(e,t,n,r=Qt.SUM_BY_NONZERO_WEIGHTS){const s=N(e,"labels","meanSquaredError"),a=N(t,"predictions","meanSquaredError");let o=null;n!=null&&(o=N(n,"weights","meanSquaredError")),we(s.shape,a.shape,"Error in meanSquaredError: ");const i=w1(s,a);return Ze(i,o,r)}const Im=O({meanSquaredError_:Am});/**
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
 */function Om(e,t){const n=N(e,"labels","sigmoidCrossEntropyWithLogits"),r=N(t,"logits","sigmoidCrossEntropyWithLogits");we(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Cs(r),a=st(r,n),o=s1(Ge(We(ye(r))));return xt(mt(s,a),o)}function Dm(e,t,n,r=0,s=Qt.SUM_BY_NONZERO_WEIGHTS){let a=N(e,"multiClassLabels","sigmoidCrossEntropy");const o=N(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=N(n,"weights","sigmoidCrossEntropy")),we(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=wt(r),f=wt(1),p=wt(.5);a=xt(st(a,mt(f,l)),st(p,l))}const u=Om(a,o);return Ze(u,i,s)}const Fm=O({sigmoidCrossEntropy_:Dm});/**
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
 */function Cm(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return qe((s,a,o)=>{const u=o1(a,[n],!0),l=mt(It(a,"float32"),u);o([s,l]);const f=We(st(l,s));return{value:_t(f,[n]),gradFunc:(v,S)=>{const[$,I]=S,F=Is(v.shape,[n]);return[st(W(v,F),mt(It($,"float32"),Ge(I))),st(W(v,F),mt(Ge(I),It($,"float32")))]}}})(e,t)}function Lm(e,t,n,r=0,s=Qt.SUM_BY_NONZERO_WEIGHTS){let a=N(e,"onehotLabels","softmaxCrossEntropy");const o=N(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=N(n,"weights","softmaxCrossEntropy")),we(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const l=wt(r),f=wt(1),p=wt(a.shape[1]);a=xt(st(a,mt(f,l)),Nt(l,p))}const u=Cm(a,o);return Ze(u,i,s)}const Rm=O({softmaxCrossEntropy_:Lm});/**
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
 */function Pm(e,t,n,r){const s=N(e,"indices","sparseFillEmptyRows","int32"),a=N(t,"values","sparseFillEmptyRows"),o=N(n,"denseShape","sparseFillEmptyRows","int32"),i=N(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:s,values:a,denseShape:o,defaultValue:i},l=C.runKernel($3,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Bm=O({sparseFillEmptyRows_:Pm});/**
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
 */function jm(e,t,n){const r=N(e,"inputIndices","sparseReshape","int32"),s=N(t,"inputShape","sparseReshape","int32"),a=N(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=C.runKernel(A3,o);return{outputIndices:i[0],outputShape:i[1]}}const zm=O({sparseReshape_:jm});/**
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
 */function Vm(e,t,n){const r=N(e,"data","sparseSegmentMean"),s=N(t,"indices","sparseSegmentMean","int32"),a=N(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return C.runKernel(I3,o)}const Mm=O({sparseSegmentMean_:Vm});/**
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
 */function Um(e,t,n){const r=N(e,"data","sparseSegmentSum"),s=N(t,"indices","sparseSegmentSum","int32"),a=N(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return C.runKernel(O3,o)}const Km=O({sparseSegmentSum_:Um});/**
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
 */function Wm(e,t,n,r,s,a,o,i){const u=N(e,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=N(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const f={separator:n,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},p={data:u,dataSplits:l},b=C.runKernel(L3,p,f);return{nGrams:b[0],nGramsSplits:b[1]}}const Hm=O({stringNGrams_:Wm});/**
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
 */function Gm(e,t,n=!0){const r=N(e,"input","stringSplit","string"),s=N(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:n},o={input:r,delimiter:s},i=C.runKernel(R3,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const qm=O({stringSplit_:Gm});/**
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
 */function Xm(e,t){const n=N(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return C.runKernel(P3,s,r)}const Ym=O({stringToHashBucketFast_:Xm});/**
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
 */const Jm={fft:co,ifft:vs,rfft:lo,irfft:b1},Zm={hammingWindow:Sd,hannWindow:S1,frame:x1,stft:_d},or={flipLeftRight:Od,grayscaleToRGB:Fd,resizeNearestNeighbor:om,resizeBilinear:sm,rotateWithOffset:Ld,cropAndResize:Ad,nonMaxSuppression:Pd,nonMaxSuppressionAsync:qd,nonMaxSuppressionWithScore:Yd,nonMaxSuppressionWithScoreAsync:Zd,nonMaxSuppressionPadded:tm,nonMaxSuppressionPaddedAsync:nm,threshold:cm,transform:hm},Qm={bandPart:pm,gramSchmidt:mm,qr:ym},t6={absoluteDifference:vm,computeWeightedLoss:Ze,cosineDistance:Nm,hingeLoss:xm,huberLoss:km,logLoss:$m,meanSquaredError:Im,sigmoidCrossEntropy:Fm,softmaxCrossEntropy:Rm},e6={sparseFillEmptyRows:Bm,sparseReshape:zm,sparseSegmentMean:Mm,sparseSegmentSum:Km},n6={stringNGrams:Hm,stringSplit:qm,stringToHashBucketFast:Ym};/**
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
 */const r6=gt();r6.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
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
 */var ge;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(ge||(ge={}));var zo;(function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(zo||(zo={}));/**
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
 */const s6={};function E1(e){return s6[e]}/**
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
 */function m(e,t,n,r,s){const a=t.inputParams[e];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,u=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd;if(a.type==="tensor")return Xt(t.inputNames[a.inputIndexStart],n,r,s);if(a.type==="tensors")return t.inputNames.slice(i,u).map(b=>Xt(b,n,r,s));const l=Xt(t.inputNames.slice(i)[0],n,r,s),f=l.dataSync();return a.type==="number"?f[0]:ua(l.shape,f)}const o=t.attrParams[e];return o&&o.value}function Xt(e,t,n,r){const[s,a]=se(e);if(r!=null){const i=r.getHashTableHandleByName(s);if(i!=null)return i}const o=n.currentContextIds.find(i=>!!t[Ts(s,i)]);return o!==void 0?t[Ts(s,o)][a]:void 0}function a6(e,t,n){return t[Ts(e,n.currentContextId)]}function Fe(e,t){const[n,r,s]=se(e);return[Ts(n,t&&t.currentContextId),r,s]}function Ts(e,t){return t?`${e}-${t}`:e}function se(e){const t=e.split(":");if(t.length===1)return[e,0,void 0];const n=t[0],r=t.length===3?t[1]:void 0,s=Number(t[t.length-1]);return[n,s,r]}function hs(e,t,n){let r=m("pad",e,t,n);if(r==="explicit"){r=m("explicitPaddings",e,t,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function Ve(e){return e.kept?e:cn(e)}/**
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
 */const o6=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],i6=Object.freeze(Object.defineProperty({__proto__:null,json:o6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const u6=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],c6=Object.freeze(Object.defineProperty({__proto__:null,json:u6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const l6=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],h6=Object.freeze(Object.defineProperty({__proto__:null,json:l6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const f6=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],p6=Object.freeze(Object.defineProperty({__proto__:null,json:f6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const d6=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],m6=Object.freeze(Object.defineProperty({__proto__:null,json:d6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const g6=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],y6=Object.freeze(Object.defineProperty({__proto__:null,json:g6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const b6=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],w6=Object.freeze(Object.defineProperty({__proto__:null,json:b6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const v6=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],T6=Object.freeze(Object.defineProperty({__proto__:null,json:v6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const N6=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],S6=Object.freeze(Object.defineProperty({__proto__:null,json:N6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const x6=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],E6=Object.freeze(Object.defineProperty({__proto__:null,json:x6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const k6=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],_6=Object.freeze(Object.defineProperty({__proto__:null,json:k6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const $6=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],A6=Object.freeze(Object.defineProperty({__proto__:null,json:$6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const I6=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],O6=Object.freeze(Object.defineProperty({__proto__:null,json:I6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const D6=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],F6=Object.freeze(Object.defineProperty({__proto__:null,json:D6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const C6=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],L6=Object.freeze(Object.defineProperty({__proto__:null,json:C6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const R6=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],P6=Object.freeze(Object.defineProperty({__proto__:null,json:R6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const B6=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],j6=Object.freeze(Object.defineProperty({__proto__:null,json:B6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const z6=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],V6=Object.freeze(Object.defineProperty({__proto__:null,json:z6},Symbol.toStringTag,{value:"Module"}));/**
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
 */const M6=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],U6=Object.freeze(Object.defineProperty({__proto__:null,json:M6},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Vo{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[i6,c6,h6,p6,m6,y6,w6,T6,S6,E6,_6,A6,O6,F6,L6,P6,j6,V6,U6],n=[].concat(...t.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,n={}){const r=t.node,s=[],a=[],o=[],i=r.reduce(($,I)=>($[I.name]=this.mapNode(I),I.op.startsWith("Placeholder")?s.push($[I.name]):I.op==="Const"?a.push($[I.name]):(I.input==null||I.input.length===0)&&o.push($[I.name]),$),{});let u=[];const l=[];let f={},p={};n!=null&&(f=this.mapSignatureEntries(n.inputs),p=this.mapSignatureEntries(n.outputs));const b=Object.keys(i);b.forEach($=>{const I=i[$];I.inputNames.forEach((F,G)=>{const[j,,B]=Fe(F),z=i[j];if(z.outputs!=null){const U=z.outputs.indexOf(B);if(U!==-1){const Z=`${j}:${U}`;I.inputNames[G]=Z}}I.inputs.push(z),z.children.push(I)})}),Object.keys(p).length===0?b.forEach($=>{const I=i[$];I.children.length===0&&l.push(I)}):Object.keys(p).forEach($=>{const[I]=Fe($),F=i[I];F!=null&&(F.signatureKey=p[$],l.push(F))}),Object.keys(f).length>0?Object.keys(f).forEach($=>{const[I]=Fe($),F=i[I];F&&(F.signatureKey=f[$],u.push(F))}):u=s;let v={};t.library!=null&&t.library.function!=null&&(v=t.library.function.reduce(($,I)=>($[I.signature.name]=this.mapFunction(I),$),{}));const S={nodes:i,inputs:u,outputs:l,weights:a,placeholders:s,signature:n,functions:v};return o.length>0&&(S.initNodes=o),S}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,r)=>(n[t[r].name]=r,n),{})}mapNode(t){const n=E1(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,a)=>{const o=a.type;let i;switch(a.type){case"string":i=Fa(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Fa(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=za(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=za(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=La(t.attr,a.tfName,a.defaultValue||0),i===void 0&&a.tfDeprecatedName&&(i=La(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=ja(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=ja(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Ca(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ca(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=Ma(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ma(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=Ba(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ba(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=Va(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Va(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=Ra(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ra(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=Pa(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Pa(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=Mo(t.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Mo(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${t.op}`)}return s[a.name]={value:i,type:o},s},{})),r}mapFunction(t){const n=t.nodeDef,r=[],s=[];let a={};n!=null&&(a=n.reduce((p,b)=>(p[b.name]=this.mapNode(b),b.op==="Const"&&s.push(p[b.name]),p),{}));const o=[],i=[];t.signature.inputArg.forEach(p=>{const[b]=Fe(p.name),v={name:b,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:bo(p.type),type:"dtype"}},children:[]};v.signatureKey=p.name,o.push(v),a[b]=v}),Object.keys(a).forEach(p=>{const b=a[p];b.inputNames.forEach((v,S)=>{const[$,,I]=Fe(v),F=a[$];if(F.outputs!=null){const G=F.outputs.indexOf(I);if(G!==-1){const j=`${$}:${G}`;b.inputNames[S]=j}}b.inputs.push(F),F.children.push(b)})});const l=t.ret;t.signature.outputArg.forEach(p=>{const[b,v]=Fe(l[p.name]),S=a[b];S!=null&&(S.defaultOutput=v,i.push(S))});const f=this.mapArgsToSignature(t);return{nodes:a,inputs:o,outputs:i,weights:s,placeholders:r,signature:f}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:t.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,t.ret),n),{})}}mapArgToTensorInfo(t,n){let r=t.name;return n!=null&&(r=n[r]),{name:r,dtype:t.type}}}function K6(e){const t=gt().global;if(typeof t.atob<"u")return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function k1(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):K6(e);return t?n:n.toLowerCase()}function Fa(e,t,n,r=!1){const s=e[t];return s!=null?k1(s.s,r):n}function Ca(e,t,n){const r=e[t];return r?r.b:n}function La(e,t,n){const r=e[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function bo(e){switch(typeof e=="string"&&(e=ge[e]),e){case ge.DT_FLOAT:case ge.DT_HALF:return"float32";case ge.DT_INT32:case ge.DT_INT64:case ge.DT_INT8:case ge.DT_UINT8:return"int32";case ge.DT_BOOL:return"bool";case ge.DT_DOUBLE:return"float32";case ge.DT_STRING:return"string";default:return null}}function Mo(e,t,n){const r=e[t];return r&&r.func?r.func.name:n}function Ra(e,t,n){const r=e[t];return r&&r.type?bo(r.type):n}function Pa(e,t,n){const r=e[t];return r&&r.list&&r.list.type?r.list.type.map(s=>bo(s)):n}function _1(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Ba(e,t,n){const r=e[t];return r&&r.shape?_1(r.shape):n}function ja(e,t,n){const r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function za(e,t,n,r=!1){const s=e[t];return s&&s.list&&s.list.s?s.list.s.map(a=>k1(a,r)):n}function Va(e,t,n){const r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>_1(s)):n}function Ma(e,t,n){const r=e[t];return r&&r.list&&r.list.b?r.list.b:n}/**
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
 */class W6{constructor(t,n,r){this.node=t,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(t){return Xt(t,this.tensorMap,this.context)}getAttr(t,n){const r=this.node.rawAttrs[t];if(r.tensor!=null)return Xt(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return La(this.node.rawAttrs,t,n);if(r.s!=null)return Fa(this.node.rawAttrs,t,n);if(r.b!=null)return Ca(this.node.rawAttrs,t,n);if(r.shape!=null)return Ba(this.node.rawAttrs,t,n);if(r.type!=null)return Ra(this.node.rawAttrs,t,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return ja(this.node.rawAttrs,t,n);if(r.list.s!=null)return za(this.node.rawAttrs,t,n);if(r.list.shape!=null)return Va(this.node.rawAttrs,t,n);if(r.list.b!=null)return Ma(this.node.rawAttrs,t,n);if(r.list.type!=null)return Pa(this.node.rawAttrs,t,n)}return n}}/**
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
 */const Gt=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Ni,abs:ye,acos:Al,acosh:Ol,add:xt,addN:Fl,all:Ll,any:Pl,argMax:jl,argMin:Vl,asin:Ul,asinh:Wl,atan:Gl,atan2:Xl,atanh:Jl,avgPool:Wi,avgPool3d:a4,basicLSTMCell:h4,batchNorm:_s,batchNorm2d:g4,batchNorm3d:b4,batchNorm4d:v4,batchToSpaceND:Hi,bincount:Gi,booleanMaskAsync:q0,broadcastArgs:S4,broadcastTo:ls,buffer:He,cast:It,ceil:k4,clipByValue:qi,clone:cn,complex:fn,concat:Ut,concat1d:A4,concat2d:O4,concat3d:F4,concat4d:L4,conv1d:B4,conv2d:As,conv2dTranspose:V4,conv3d:U4,conv3dTranspose:G4,cos:X4,cosh:J4,cosineWindow:ho,cumprod:Q4,cumsum:eh,denseBincount:rh,depthToSpace:ah,depthwiseConv2d:no,diag:uh,dilation2d:lh,div:Nt,divNoNan:mh,dot:yh,dropout:od,einsum:wh,elu:Ji,enclosingPowerOfTwo:N1,equal:Yi,erf:Nh,euclideanNorm:Dh,exp:Ge,expandDims:xe,expm1:Rh,eye:Qi,fft:co,fill:$s,floor:t1,floorDiv:Ki,fused:Td,gather:e1,gatherND:rd,greater:Fs,greaterEqual:n1,ifft:vs,imag:ks,image:or,inTopKAsync:ud,irfft:b1,isFinite:Kh,isInf:Hh,isNaN:qh,leakyRelu:r1,less:Jh,lessEqual:ao,linalg:Qm,linspace:Qh,localResponseNormalization:ef,log:Cr,log1p:s1,logSigmoid:of,logSoftmax:lf,logSumExp:o1,logicalAnd:bs,logicalNot:i1,logicalOr:u1,logicalXor:gf,losses:t6,lowerBound:bf,matMul:vt,max:Qn,maxPool:c1,maxPool3d:Tf,maxPoolWithArgmax:Sf,maximum:Ef,mean:ws,meshgrid:_f,min:xa,minimum:l1,mirrorPad:If,mod:Df,moments:Cf,movingAverage:Y0,mul:st,multiRNNCell:Rf,multinomial:Bf,neg:We,norm:Ds,notEqual:h1,oneHot:dl,ones:On,onesLike:Vf,op:O,outerProduct:Uf,pad:Br,pad1d:Hf,pad2d:qf,pad3d:Yf,pad4d:Zf,pool:rp,pow:so,prelu:p1,print:Ci,prod:op,raggedGather:up,raggedTensorToTensor:lp,rand:fp,randomGamma:Ap,randomNormal:d1,randomStandardNormal:Dp,randomUniform:m1,range:Lr,real:Fr,reciprocal:Lp,relu:Cs,relu6:g1,reshape:W,reverse:Rn,reverse1d:zp,reverse2d:Mp,reverse3d:Kp,reverse4d:Hp,rfft:lo,round:y1,rsqrt:Xp,scalar:wt,scatterND:Z0,searchSorted:oo,selu:Jp,separableConv2d:Qp,setdiff1dAsync:e0,sigmoid:Dn,sign:r0,signal:Zm,sin:a0,sinh:i0,slice:ht,slice1d:c0,slice2d:h0,slice3d:p0,slice4d:m0,softmax:y0,softplus:a1,spaceToBatchND:f1,sparse:e6,sparseToDense:ed,spectral:Jm,split:Rr,sqrt:Ea,square:Os,squaredDifference:w1,squeeze:Bt,stack:Xe,step:v1,stridedSlice:$0,string:n6,sub:mt,sum:_t,tan:I0,tanh:Sa,tensor:Re,tensor1d:Yt,tensor2d:ln,tensor3d:Vi,tensor4d:O0,tensor5d:D0,tensor6d:F0,tile:Or,topk:L0,transpose:Ta,truncatedNormal:P0,unique:j0,unsortedSegmentSum:V0,unstack:zn,upperBound:U0,variable:K0,where:nr,whereAsync:T1,zeros:rr,zerosLike:ro},Symbol.toStringTag,{value:"Module"}));/**
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
 */const H6=(e,t,n,r=Gt)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(m("a",e,t,n),m("b",e,t,n))];case"AddN":return[r.addN(m("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(m("a",e,t,n),m("b",e,t,n))];case"Mul":return[r.mul(m("a",e,t,n),m("b",e,t,n))];case"RealDiv":case"Div":return[r.div(m("a",e,t,n),m("b",e,t,n))];case"DivNoNan":return[r.divNoNan(m("a",e,t,n),m("b",e,t,n))];case"FloorDiv":return[r.floorDiv(m("a",e,t,n),m("b",e,t,n))];case"Sub":return[r.sub(m("a",e,t,n),m("b",e,t,n))];case"Minimum":return[r.minimum(m("a",e,t,n),m("b",e,t,n))];case"Maximum":return[r.maximum(m("a",e,t,n),m("b",e,t,n))];case"Pow":return[r.pow(m("a",e,t,n),m("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(m("a",e,t,n),m("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const G6=(e,t,n,r=Gt)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(m("x",e,t,n))];case"Acos":return[r.acos(m("x",e,t,n))];case"Acosh":return[r.acosh(m("x",e,t,n))];case"Asin":return[r.asin(m("x",e,t,n))];case"Asinh":return[r.asinh(m("x",e,t,n))];case"Atan":return[r.atan(m("x",e,t,n))];case"Atan2":return[r.atan2(m("x",e,t,n),m("y",e,t,n))];case"Atanh":return[r.atanh(m("x",e,t,n))];case"Ceil":return[r.ceil(m("x",e,t,n))];case"Complex":return[r.complex(m("real",e,t,n),m("imag",e,t,n))];case"Cos":return[r.cos(m("x",e,t,n))];case"Cosh":return[r.cosh(m("x",e,t,n))];case"Elu":return[r.elu(m("x",e,t,n))];case"Erf":return[r.erf(m("x",e,t,n))];case"Exp":return[r.exp(m("x",e,t,n))];case"Expm1":return[r.expm1(m("x",e,t,n))];case"Floor":return[r.floor(m("x",e,t,n))];case"Log":return[r.log(m("x",e,t,n))];case"Log1p":return[r.log1p(m("x",e,t,n))];case"Imag":return[r.imag(m("x",e,t,n))];case"Neg":return[r.neg(m("x",e,t,n))];case"Reciprocal":return[r.reciprocal(m("x",e,t,n))];case"Real":return[r.real(m("x",e,t,n))];case"Relu":return[r.relu(m("x",e,t,n))];case"Round":return[r.round(m("x",e,t,n))];case"Selu":return[r.selu(m("x",e,t,n))];case"Sigmoid":return[r.sigmoid(m("x",e,t,n))];case"Sin":return[r.sin(m("x",e,t,n))];case"Sign":return[r.sign(m("x",e,t,n))];case"Sinh":return[r.sinh(m("x",e,t,n))];case"Softplus":return[r.softplus(m("x",e,t,n))];case"Sqrt":return[r.sqrt(m("x",e,t,n))];case"Square":return[r.square(m("x",e,t,n))];case"Tanh":return[r.tanh(m("x",e,t,n))];case"Tan":return[r.tan(m("x",e,t,n))];case"ClipByValue":return[r.clipByValue(m("x",e,t,n),m("clipValueMin",e,t,n),m("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(m("x",e,t,n))];case"Rsqrt":return[r.rsqrt(Xt(e.inputNames[0],t,n))];case"Prod":return[r.prod(m("x",e,t,n),m("axes",e,t,n))];case"LeakyRelu":return[r.leakyRelu(m("x",e,t,n),m("alpha",e,t,n))];case"Prelu":return[r.prelu(m("x",e,t,n),m("alpha",e,t,n))];case"IsNan":return[r.isNaN(Xt(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */function be(e,t,n=""){if(!(typeof e=="number"||typeof t=="number")){A(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let r=0;r<e.length;r++){const s=e[r],a=t[r];A(s<0||a<0||s===a,()=>n+` Shapes ${e} and ${t} must match`)}}}function Uo(e){return!(typeof e=="number"||e.some(t=>t<0))}function $r(e,t,n){let r=Ua(e,n);const s=!Uo(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(a=>{r=Ua(a.shape,r)}),!Uo(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Ua(e,t){if(typeof e=="number")return t;if(typeof t=="number")return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let r=0;r<e.length;++r){const s=e[r],a=t[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=s>=0?s:a}return n}/**
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
 */class q6{constructor(t,n,r,s,a,o,i){this.name=t,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=wt(0),un(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),be(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=n,un(n),r.written=!0,this.tensors[t]=r}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((r,s)=>this.write(r,n[s]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return Re([],[0].concat(this.elementShape));const r=this.readMany(t);return be(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Xe(r,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return Re([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return be(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Ut(r,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,zn(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=t.map(u=>(r+=u,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:n.size/r,o=[];Lt(()=>{n=W(n,[1,r,a]);for(let u=0;u<t.length;++u){const f=[0,u===0?0:s[u-1],0],p=[1,t[u],a];o[u]=W(ht(n,f,p),this.elementShape)}return o});const i=[];for(let u=0;u<t.length;u++)i[u]=u;this.writeMany(i,o)}}/**
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
 */class Pn{constructor(t,n,r,s=-1){this.tensors=t,this.elementShape=n,this.elementDtype=r,t!=null&&t.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);be(n,a.shape,"TensorList shape mismatch: "),un(a)}),this.idTensor=wt(0),this.maxNumElements=s,un(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Pn([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);be(t,this.elementShape,"TensorList shape mismatch: ");const s=$r(this.elementShape,this.tensors,t);return Lt(()=>{const a=this.tensors.map(o=>W(o,s));return Xe(a,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=$r(this.elementShape,this.tensors,t),s=this.tensors.pop();return s.kept=!1,be(s.shape,t,"TensorList shape mismatch: "),W(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(be(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");un(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new Pn([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)n.tensors[r]=this.tensors[r];return n}getItem(t,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);be(this.tensors[t].shape,n,"TensorList shape mismatch: ");const s=$r(this.elementShape,this.tensors,n);return W(this.tensors[t],s)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);be(this.elementShape,n.shape,"TensorList shape mismatch: "),un(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);be(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=$r(this.elementShape,this.tensors,r);return t.length===0?Re([],[0].concat(s)):Lt(()=>{const a=t.map(o=>W(this.tensors[o],s));return Xe(a,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);be(this.elementShape,n,"TensorList shape mismatch: ");const r=$r(this.elementShape,this.tensors,n);return this.size()===0?Re([],[0].concat(r)):Lt(()=>{const s=this.tensors.map(a=>W(a,r));return Ut(s,0)})}}function X6(e,t,n){const r=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);const s=e.shape.slice(1);be(s,t,"TensorList shape mismatch: ");const a=zn(e);return new Pn(a,t,r)}function Y6(e,t,n,r){return new Pn([],e,t,r)}function J6(e,t,n,r){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new Pn([],n,e.dtype,r),o=zn(e,0);return t.forEach((i,u)=>{a.setItem(i,o[u])}),a}function Z6(e,t,n){let r=0;const s=t.map(f=>(r+=f,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);const a=e.shape.slice(1),o=Ua(a,n),i=r===0?0:e.size/r,u=Lt(()=>{const f=[];e=W(e,[1,r,i]);for(let p=0;p<t.length;++p){const v=[0,p===0?0:s[p-1],0],S=[1,t[p],i];f[p]=W(ht(e,v,S),o)}return e.dispose(),f}),l=new Pn([],n,e.dtype,t.length);for(let f=0;f<u.length;f++)l.setItem(f,u[f]);return l}/**
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
 */const Q6=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const r=m("thenBranch",e,t,n),s=m("elseBranch",e,t,n),a=m("cond",e,t,n),o=m("args",e,t,n);return(await a.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=m("body",e,t,n),s=m("cond",e,t,n),a=m("args",e,t,n),o=await n.functionMap[s].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),i=a.map(f=>f.id);let u=await o[0].data();o.forEach(f=>{!f.kept&&i.indexOf(f.id)===-1&&f.dispose()});let l=a;for(;u[0];){const f=l;l=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);const p=l.map(v=>v.id);f.forEach(v=>{!v.kept&&i.indexOf(v.id)===-1&&p.indexOf(v.id)===-1&&v.dispose()});const b=await n.functionMap[s].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);u=await b[0].data(),b.forEach(v=>{!v.kept&&i.indexOf(v.id)===-1&&p.indexOf(v.id)===-1&&v.dispose()})}return l}case"LoopCond":{const r=m("pred",e,t,n);return[Ve(r)]}case"Switch":{const r=m("pred",e,t,n);let s=m("data",e,t,n);return s.kept||(s=Ve(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=e.inputNames.find(s=>Xt(s,t,n)!==void 0);if(r){const s=Xt(r,t,n);return[Ve(s)]}return}case"Enter":{const r=m("frameName",e,t,n),s=m("tensor",e,t,n);return n.enterFrame(r),[Ve(s)]}case"Exit":{const r=m("tensor",e,t,n);return n.exitFrame(),[Ve(r)]}case"NextIteration":{const r=m("tensor",e,t,n);return n.nextIteration(),[Ve(r)]}case"TensorArrayV3":{const r=m("size",e,t,n),s=m("dtype",e,t,n),a=m("elementShape",e,t,n),o=m("dynamicSize",e,t,n),i=m("clearAfterRead",e,t,n),u=m("identicalElementShapes",e,t,n),l=m("name",e,t,n),f=new q6(l,s,r,a,u,o,i);return n.addTensorArray(f),[f.idTensor,wt(1)]}case"TensorArrayWriteV3":{const r=m("tensorArrayId",e,t,n),s=m("index",e,t,n),a=m("tensor",e,t,n),o=n.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=m("tensorArrayId",e,t,n),s=m("index",e,t,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=m("tensorArrayId",e,t,n),s=m("indices",e,t,n),a=m("dtype",e,t,n);return[n.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=m("tensorArrayId",e,t,n),s=m("indices",e,t,n),a=m("tensor",e,t,n),o=n.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id),a=m("dtype",e,t,n);return[s.concat(a)]}case"TensorArraySplitV3":{const r=m("tensorArrayId",e,t,n),s=m("tensor",e,t,n),a=m("lengths",e,t,n),o=n.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return[wt(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=m("tensorArrayId",e,t,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=m("tensorListId",e,t,n),s=m("index",e,t,n),a=m("tensor",e,t,n),o=n.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=m("tensorListId",e,t,n),s=m("index",e,t,n),a=m("elementShape",e,t,n),o=m("elementDType",e,t,n);return[n.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=m("indices",e,t,n),s=m("tensor",e,t,n),a=m("elementShape",e,t,n),o=m("numElements",e,t,n),i=J6(s,r,a,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=m("elementShape",e,t,n),s=m("elementDType",e,t,n);let a;e.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=m(a,e,t,n),i=e.op==="TensorListReserve"?-1:o,u=Y6(r,s,o,i);return n.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=m("tensorListId",e,t,n),s=m("indices",e,t,n),a=m("elementShape",e,t,n),o=m("elementDType",e,t,n);return[n.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=m("tensorListId",e,t,n),s=m("elementShape",e,t,n),a=m("elementDType",e,t,n),o=m("numElements",e,t,n);return[n.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=m("tensor",e,t,n),s=m("elementShape",e,t,n),a=m("elementDType",e,t,n),o=X6(r,s,a);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=m("tensorListId",e,t,n),s=n.getTensorList(r.id),a=m("dtype",e,t,n),o=m("elementShape",e,t,n);return[s.concat(a,o)]}case"TensorListPushBack":{const r=m("tensorListId",e,t,n),s=m("tensor",e,t,n),a=n.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=m("tensorListId",e,t,n),s=m("elementShape",e,t,n),a=m("elementDType",e,t,n);return[n.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=m("tensor",e,t,n),s=m("elementShape",e,t,n),a=m("lengths",e,t,n),o=Z6(r,a,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=m("tensorListId",e,t,n),s=n.getTensorList(r.id);return[wt(s.size(),"int32")]}case"TensorListResize":{const r=m("tensorListId",e,t,n),s=m("size",e,t,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */function Ko(e,t,n){const[r,s]=m("fusedOps",e,t,n),a=r==="biasadd",o=!a,i=s==="prelu",u=r==="fusedbatchnorm",l=m("numArgs",e,t,n);if(a){if(i&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const f=m("strides",e,t,n),p=hs(e,t,n),b=m("dataFormat",e,t,n).toUpperCase(),v=m("dilations",e,t,n);let[S,$]=m("args",e,t,n);o&&($=S,S=void 0);const I=m("leakyreluAlpha",e,t,n);return{stride:f,pad:p,dataFormat:b,dilations:v,biasArg:S,preluArg:$,activationFunc:s,leakyreluAlpha:I}}const t5=(e,t,n,r=Gt)=>{switch(e.op){case"Conv1D":{const s=m("stride",e,t,n),a=m("pad",e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),i=m("dilation",e,t,n);return[r.conv1d(m("x",e,t,n),m("filter",e,t,n),s,a,o,i)]}case"Conv2D":{const s=m("strides",e,t,n),a=hs(e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),i=m("dilations",e,t,n);return[r.conv2d(m("x",e,t,n),m("filter",e,t,n),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:f,leakyreluAlpha:p}=Ko(e,t,n);return[r.fused.conv2d({x:m("x",e,t,n),filter:m("filter",e,t,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:f,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:f,leakyreluAlpha:p}=Ko(e,t,n);return[r.fused.depthwiseConv2d({x:m("x",e,t,n),filter:m("filter",e,t,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:f,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=m("outputShape",e,t,n),a=m("strides",e,t,n),o=hs(e,t,n);return[r.conv2dTranspose(m("x",e,t,n),m("filter",e,t,n),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=m("strides",e,t,n),a=hs(e,t,n),o=m("dilations",e,t,n),i=m("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(m("input",e,t,n),m("filter",e,t,n),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("dataFormat",e,t,n).toUpperCase(),i=m("dilations",e,t,n);return[r.conv3d(m("x",e,t,n),m("filter",e,t,n),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.avgPool(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.maxPool(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("kernelSize",e,t,n),i=m("includeBatchInIndex",e,t,n),{result:u,indexes:l}=r.maxPoolWithArgmax(m("x",e,t,n),[o[1],o[2]],[s[1],s[2]],a,i);return[u,l]}case"AvgPool3D":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.avgPool3d(m("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("kernelSize",e,t,n);return[r.maxPool3d(m("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=m("strides",e,t,n),a=m("pad",e,t,n),o=m("dilations",e,t,n),i=s[1],u=s[2],l=o[1],f=o[2];return[r.dilation2d(m("x",e,t,n),m("filter",e,t,n),[i,u],a,[l,f],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const e5=(e,t,n,r=Gt)=>{switch(e.op){case"Fill":{const s=m("shape",e,t,n),a=m("dtype",e,t,n),o=m("value",e,t,n);return[r.fill(s,o,a)]}case"LinSpace":{const s=m("start",e,t,n),a=m("stop",e,t,n),o=m("num",e,t,n);return[r.linspace(s,a,o)]}case"Multinomial":{const s=m("logits",e,t,n),a=m("numSamples",e,t,n),o=m("seed",e,t,n);return[r.multinomial(s,a,o)]}case"OneHot":{const s=m("indices",e,t,n),a=m("depth",e,t,n),o=m("onValue",e,t,n),i=m("offValue",e,t,n),u=m("dtype",e,t,n);return[r.oneHot(s,a,o,i,u)]}case"Ones":return[r.ones(m("shape",e,t,n),m("dtype",e,t,n))];case"OnesLike":return[r.onesLike(m("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(m("shape",e,t,n),m("dtype",e,t,n),m("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(m("shape",e,t,n),m("minval",e,t,n),m("maxval",e,t,n),m("dtype",e,t,n))];case"Range":{const s=m("start",e,t,n),a=m("stop",e,t,n),o=m("step",e,t,n);return[r.range(s,a,o,m("dtype",e,t,n))]}case"TruncatedNormal":{const s=m("shape",e,t,n),a=m("mean",e,t,n),o=m("stdDev",e,t,n),i=m("seed",e,t,n);return[r.truncatedNormal(s,a,o,m("dtype",e,t,n),i)]}case"Zeros":return[r.zeros(m("shape",e,t,n),m("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */function Zs(e,t,n){const r=m("boxes",e,t,n),s=m("scores",e,t,n),a=m("maxOutputSize",e,t,n),o=m("iouThreshold",e,t,n),i=m("scoreThreshold",e,t,n),u=m("softNmsSigma",e,t,n);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}const n5=async(e,t,n,r,s=Gt)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:f}=Zs(e,t,n),p=await s.image.nonMaxSuppressionWithScoreAsync(a,o,i,u,l,f);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=Zs(e,t,n),f=m("padToMaxOutputSize",e,t,n),p=await s.image.nonMaxSuppressionPaddedAsync(a,o,i,u,l,f);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=Zs(e,t,n);return[await s.image.nonMaxSuppressionAsync(a,o,i,u,l)]}case"Where":{const a=s.cast(m("condition",e,t,n),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(m("x",e,t,n),m("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const r5=(e,t,n,r=Gt)=>{switch(e.op){case"LowerBound":{const s=m("sortedSequence",e,t,n),a=m("values",e,t,n);return[r.lowerBound(s,a)]}case"TopKV2":{const s=m("x",e,t,n),a=m("k",e,t,n),o=m("sorted",e,t,n),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=m("sortedSequence",e,t,n),a=m("values",e,t,n);return[r.upperBound(s,a)]}case"Unique":{const s=m("x",e,t,n),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=m("x",e,t,n),a=m("axis",e,t,n),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const s5=(e,t,n,r=Gt)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const s=m("default",e,t,n);return[Xt(e.name,t,n)||s];case"Placeholder":return[Xt(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const f=m("x",e,t,n);return[Ve(f)]}case"IdentityN":return m("x",e,t,n).map(f=>Ve(f));case"Snapshot":const a=m("x",e,t,n);return[Ve(a)];case"Shape":return[r.tensor1d(m("x",e,t,n).shape,"int32")];case"ShapeN":return m("x",e,t,n).map(f=>r.tensor1d(f.shape));case"Size":return[r.scalar(m("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(m("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=m("x",e,t,n),i=m("data",e,t,n),u=m("message",e,t,n),l=m("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let f=0;f<i.length;f++)console.log(Array.prototype.slice.call(i[f].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */class a5{constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=wt(0),this.tensorMap=new Map,un(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return wt(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),Lt(()=>{const s=zn(n),a=r.length,o=s.length;A(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const u=r[i],l=s[i];un(l),this.tensorMap.set(u,l)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const r=await t.data();return Lt(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],i=this.findWithDefault(o,n);s.push(i)}return Xe(s)})}findWithDefault(t,n){const r=this.tensorMap.get(t);return r??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
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
 */const o5=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{const s=m("keyDType",e,t,n),a=m("valueDType",e,t,n),o=new a5(s,a);return r.addHashTable(e.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const s=m("tableHandle",e,t,n,r),a=m("keys",e,t,n),o=m("values",e,t,n);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=m("tableHandle",e,t,n,r),a=m("keys",e,t,n),o=m("defaultValue",e,t,n);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=m("tableHandle",e,t,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const i5=(e,t,n,r=Gt)=>{switch(e.op){case"ResizeBilinear":{const s=m("images",e,t,n),a=m("size",e,t,n),o=m("alignCorners",e,t,n),i=m("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=m("images",e,t,n),a=m("size",e,t,n),o=m("alignCorners",e,t,n),i=m("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=m("image",e,t,n),a=m("boxes",e,t,n),o=m("boxInd",e,t,n),i=m("cropSize",e,t,n),u=m("method",e,t,n),l=m("extrapolationValue",e,t,n);return[r.image.cropAndResize(s,a,o,i,u,l)]}case"ImageProjectiveTransformV3":{const s=m("images",e,t,n),a=m("transforms",e,t,n),o=m("outputShape",e,t,n),i=m("fillValue",e,t,n),u=m("interpolation",e,t,n),l=m("fillMode",e,t,n);return[r.image.transform(s,a,u.toLowerCase(),l.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const u5=(e,t,n,r=Gt)=>{switch(e.op){case"Equal":return[r.equal(m("a",e,t,n),m("b",e,t,n))];case"NotEqual":return[r.notEqual(m("a",e,t,n),m("b",e,t,n))];case"Greater":return[r.greater(m("a",e,t,n),m("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(m("a",e,t,n),m("b",e,t,n))];case"Less":return[r.less(m("a",e,t,n),m("b",e,t,n))];case"LessEqual":return[r.lessEqual(m("a",e,t,n),m("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(m("a",e,t,n),m("b",e,t,n))];case"LogicalNot":return[r.logicalNot(m("a",e,t,n))];case"LogicalOr":return[r.logicalOr(m("a",e,t,n),m("b",e,t,n))];case"Select":case"SelectV2":return[r.where(m("condition",e,t,n),m("a",e,t,n),m("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const c5=(e,t,n,r=Gt)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(m("a",e,t,n),m("b",e,t,n),m("transposeA",e,t,n),m("transposeB",e,t,n))];case"Einsum":return[r.einsum(m("equation",e,t,n),...m("tensors",e,t,n))];case"Transpose":return[r.transpose(m("x",e,t,n),m("perm",e,t,n))];case"_FusedMatMul":const[s,a]=m("fusedOps",e,t,n),o=s==="biasadd",i=a==="prelu",u=m("numArgs",e,t,n),l=m("leakyreluAlpha",e,t,n);if(o){if(i&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[f,p]=m("args",e,t,n);return[r.fused.matMul({a:m("a",e,t,n),b:m("b",e,t,n),transposeA:m("transposeA",e,t,n),transposeB:m("transposeB",e,t,n),bias:f,activation:a,preluActivationWeights:p,leakyreluAlpha:l})];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const l5=(e,t,n,r=Gt)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(m("x",e,t,n),m("axis",e,t,n),m("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(m("x",e,t,n),m("mean",e,t,n),m("variance",e,t,n),m("offset",e,t,n),m("scale",e,t,n),m("epsilon",e,t,n))];case"FusedBatchNormV3":return[r.batchNorm(m("x",e,t,n),m("mean",e,t,n),m("variance",e,t,n),m("offset",e,t,n),m("scale",e,t,n),m("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(m("x",e,t,n),m("radius",e,t,n),m("bias",e,t,n),m("alpha",e,t,n),m("beta",e,t,n))];case"Softmax":return[r.softmax(m("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(m("x",e,t,n))];case"SparseToDense":return[r.sparseToDense(m("sparseIndices",e,t,n),m("outputShape",e,t,n),m("sparseValues",e,t,n),m("defaultValue",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const h5=(e,t,n,r=Gt)=>{switch(e.op){case"Max":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.max(m("x",e,t,n),i,u)]}case"Mean":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.mean(m("x",e,t,n),i,u)]}case"Min":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.min(m("x",e,t,n),i,u)]}case"Sum":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.sum(m("x",e,t,n),i,u)]}case"All":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.all(m("x",e,t,n),i,u)]}case"Any":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.any(m("x",e,t,n),i,u)]}case"ArgMax":{const i=m("axis",e,t,n);return[r.argMax(m("x",e,t,n),i)]}case"ArgMin":{const i=m("axis",e,t,n);return[r.argMin(m("x",e,t,n),i)]}case"Prod":{const i=m("axis",e,t,n),u=m("keepDims",e,t,n);return[r.prod(m("x",e,t,n),i,u)]}case"Cumprod":{const i=m("axis",e,t,n),u=m("exclusive",e,t,n),l=m("reverse",e,t,n);return[r.cumprod(m("x",e,t,n),i,u,l)]}case"Cumsum":{const i=m("axis",e,t,n),u=m("exclusive",e,t,n),l=m("reverse",e,t,n);return[r.cumsum(m("x",e,t,n),i,u,l)]}case"Bincount":const s=m("x",e,t,n),a=m("weights",e,t,n),o=m("size",e,t,n);return[r.bincount(s,a,o)];case"DenseBincount":{const i=m("x",e,t,n),u=m("weights",e,t,n),l=m("size",e,t,n),f=m("binaryOutput",e,t,n);return[r.denseBincount(i,u,l,f)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const f5=(e,t,n,r=Gt)=>{switch(e.op){case"ConcatV2":case"Concat":{const s=m("n",e,t,n),a=m("axis",e,t,n);let o=m("tensors",e,t,n);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=m("x",e,t,n),a=m("indices",e,t,n);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=m("axis",e,t,n),a=m("batchDims",e,t,n),o=m("x",e,t,n),i=m("indices",e,t,n);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=m("dims",e,t,n),a=[];for(let i=0;i<s.length;i++)s[i]&&a.push(i);const o=m("x",e,t,n);return[r.reverse(o,a)]}case"ReverseV2":{const s=m("axis",e,t,n),a=m("x",e,t,n);return[r.reverse(a,s)]}case"Slice":{const s=m("begin",e,t,n),a=m("size",e,t,n);return[r.slice(m("x",e,t,n),s,a)]}case"StridedSlice":{const s=m("begin",e,t,n),a=m("end",e,t,n),o=m("strides",e,t,n),i=m("beginMask",e,t,n),u=m("endMask",e,t,n),l=m("ellipsisMask",e,t,n),f=m("newAxisMask",e,t,n),p=m("shrinkAxisMask",e,t,n),b=m("x",e,t,n);return[r.stridedSlice(b,s,a,o,i,u,l,f,p)]}case"Pack":return Lt(()=>{const s=m("axis",e,t,n),a=m("tensors",e,t,n),o=a[0].shape,i=r.squeeze(a[0]).shape,u=a.map(l=>{const f=hn(l.shape,o);if(!f&&!hn(r.squeeze(l).shape,i))throw new Error("the input tensors shape does not match");return f?l:r.reshape(l,o)});return[r.stack(u,s)]});case"Unpack":{const s=m("axis",e,t,n),a=m("tensor",e,t,n);return r.unstack(a,s)}case"Tile":{const s=m("reps",e,t,n);return[r.tile(m("x",e,t,n),s)]}case"Split":case"SplitV":{const s=m("axis",e,t,n),a=m("numOrSizeSplits",e,t,n),o=m("x",e,t,n);return r.split(o,a,s)}case"ScatterNd":{const s=m("indices",e,t,n),a=m("values",e,t,n),o=m("shape",e,t,n);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=m("x",e,t,n),a=m("indices",e,t,n);return[r.gatherND(s,a)]}case"SparseToDense":{const s=m("sparseIndices",e,t,n),a=m("outputShape",e,t,n),o=m("sparseValues",e,t,n),i=m("defaultValue",e,t,n);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const p5=(e,t,n,r=Gt)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(m("indices",e,t,n),m("values",e,t,n),m("denseShape",e,t,n),m("defaultValue",e,t,n));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(m("inputIndices",e,t,n),m("inputShape",e,t,n),m("newShape",e,t,n));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(m("data",e,t,n),m("indices",e,t,n),m("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(m("data",e,t,n),m("indices",e,t,n),m("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const d5=(e,t,n,r=Gt)=>{switch(e.op){case"FFT":return[r.fft(m("x",e,t,n))];case"IFFT":return[r.ifft(m("x",e,t,n))];case"RFFT":return[r.rfft(m("x",e,t,n))];case"IRFFT":return[r.irfft(m("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const m5=(e,t,n,r=Gt)=>{switch(e.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(m("data",e,t,n),m("dataSplits",e,t,n),m("separator",e,t,n),m("nGramWidths",e,t,n),m("leftPad",e,t,n),m("rightPad",e,t,n),m("padWidth",e,t,n),m("preserveShortSequences",e,t,n));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(m("input",e,t,n),m("delimiter",e,t,n),m("skipEmpty",e,t,n));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(m("input",e,t,n),m("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */const g5=(e,t,n,r=Gt)=>{switch(e.op){case"Cast":return[r.cast(m("x",e,t,n),m("dtype",e,t,n))];case"ExpandDims":{const s=m("axis",e,t,n);return[r.expandDims(m("x",e,t,n),s)]}case"Squeeze":{const s=m("axis",e,t,n);return[r.squeeze(m("x",e,t,n),s)]}case"Reshape":return[r.reshape(m("x",e,t,n),m("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(m("x",e,t,n),m("padding",e,t,n),m("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(m("x",e,t,n),m("padding",e,t,n),m("constantValue",e,t,n))];case"SpaceToBatchND":{const s=m("blockShape",e,t,n),a=m("paddings",e,t,n);return[r.spaceToBatchND(m("x",e,t,n),s,a)]}case"BatchToSpaceND":{const s=m("blockShape",e,t,n),a=m("crops",e,t,n);return[r.batchToSpaceND(m("x",e,t,n),s,a)]}case"DepthToSpace":{const s=m("blockSize",e,t,n),a=m("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(m("x",e,t,n),s,a)]}case"BroadcastTo":return[r.broadcastTo(m("x",e,t,n),m("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(m("s0",e,t,n),m("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
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
 */function Wo(e,t,n,r,s=Lt){const a=((o,i,u)=>{switch(o.category){case"arithmetic":return s(()=>H6(o,i,u));case"basic_math":return s(()=>G6(o,i,u));case"control":return Q6(o,i,u);case"convolution":return s(()=>t5(o,i,u));case"creation":return s(()=>e5(o,i,u));case"dynamic":return n5(o,i,u);case"evaluation":return s(()=>r5(o,i,u));case"image":return s(()=>i5(o,i,u));case"graph":return s(()=>s5(o,i,u));case"logical":return s(()=>u5(o,i,u));case"matrices":return s(()=>c5(o,i,u));case"normalization":return s(()=>l5(o,i,u));case"reduction":return s(()=>h5(o,i,u));case"slice_join":return s(()=>f5(o,i,u));case"sparse":return s(()=>p5(o,i,u));case"spectral":return s(()=>d5(o,i,u));case"string":return s(()=>m5(o,i,u));case"transformation":return s(()=>g5(o,i,u));case"hash_table":return o5(o,i,u,r);case"custom":const l=E1(o.op);if(l&&l.customExecutor)return l.customExecutor(new W6(o,i,u));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return tr(a)?a.then(o=>[].concat(o)):[].concat(a)}class Ho{constructor(t={},n={},r={},s={}){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
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
 */function Go(e,t,n,r){const s=new Set,a=[];let o=null,i=null;const u=new Set,l=Object.keys(e).map(b=>se(b)[0]);let f=[];r!=null&&(f=r.map(b=>se(b.name)[0]));const p=[...t];for(;p.length>0;){const b=p.pop();if(($1(b)||T5(b)||N5(b))&&o==null&&(o=b,i=o.children.map(v=>v.name).filter(v=>s.has(v))),s.add(b.name),n[b.name]==null&&l.indexOf(b.name)===-1&&f.indexOf(b.name)===-1){if(b.inputs.length===0){a.push(b.name);continue}b.inputs.forEach(v=>{u.has(v.name)||(u.add(v.name),p.push(v))})}}return{inputs:e,outputs:t,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function y5(e,t,n){const{usedNodes:r,inputs:s}=n,a=[],o=Object.keys(s).map(f=>se(f)[0]).map(f=>e.nodes[f]),i=e.initNodes;o.forEach(f=>{r.has(f.name)&&a.push(f)}),e.weights.forEach(f=>{r.has(f.name)&&a.push(f)}),i!=null&&i.forEach(f=>{r.has(f.name)&&a.push(f)});const u=new Set,l=[];for(;a.length>0;){const f=a.pop();u.add(f.name),t[f.name]||l.push(f),f.children.forEach(p=>{!u.has(p.name)&&r.has(p.name)&&p.inputs.every(b=>u.has(b.name))&&a.push(p)})}return l}const b5=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],w5=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],v5=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function $1(e){return b5.indexOf(e.op)>=0}function T5(e){return w5.indexOf(e.op)>=0}function N5(e){return v5.indexOf(e.op)>=0}/**
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
 */class Ns{constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new Ns(t.functions[r],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}getCompilationKey(t,n){const r=t.map(a=>a.name).sort(),s=n.map(a=>a.name).sort();return r.join(this.SEPERATOR)+"--"+s.join(this.SEPERATOR)}compile(t,n){const r=Go(t,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const i=n.map(l=>l.name),u=Object.keys(t);throw new Error(`Cannot compute the outputs [${i}] from the provided inputs [${u}]. Missing the following inputs: [${s}]`)}return y5(this.graph,this.weightMap,r)}execute(t,n){t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(p=>this.graph.nodes[se(p)[0]]),a=n.map(p=>se(p)[0]);let o=a.map(p=>this.graph.nodes[p]);this.resetIntermediateTensors(),o.length===0&&(o=this._outputs);const i=this.getCompilationKey(s,o);let u=this.compiledMap.get(i);u==null&&(u=this.compile(t,o),this.compiledMap.set(i,u));const l={},f={};return Lt(()=>{const p=new Ho(this.weightMap,l,f,this.functionExecutorMap),b=Object.assign({},this.weightMap);Object.keys(t).forEach($=>{const[I,F]=se($),G=[];G[F]=t[$],b[I]=G});const v=this.getFrozenTensorIds(b),S={};for(let $=0;$<u.length;$++){const I=u[$];if(!b[I.name]){const F=Wo(I,b,p,this._resourceManager);if(tr(F))throw new Error(`The execution of the op '${I.op}' returned a promise. Please use model.executeAsync() instead.`);b[I.name]=F,this.checkTensorForDisposal(I.name,I,b,p,v,a,S)}}return this.parent==null&&p.dispose(v),n.map($=>Xt($,b,p))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(t,n,r,s,a,o,i){n.category==="control"||o.indexOf(t)!==-1||(r[t].forEach(u=>{u!=null&&(i[u.id]=(i[u.id]||0)+n.children.length)}),n.inputs.forEach(u=>{if(u.category!=="control"){const l=a6(u.name,r,s);l!=null&&l.forEach(f=>{if(f&&!f.kept&&!a.has(f.id)){const p=i[f.id];if(p===1){if(!this.keepTensorForDebug)f.dispose();else{const[b,v]=Fe(n.name,s);this.intermediateTensors[b]?this.intermediateTensors[b][v]=f:(this.intermediateTensors[b]=[],this.intermediateTensors[b][v]=f)}delete i[f.id]}else p!=null&&i[f.id]--}})}}))}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(t=>this.intermediateTensors[t].forEach(n=>n.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(t=>{this.tensorsMap[t].forEach(r=>{r&&!r.kept&&!r.isDisposed&&!this.keepIds.has(r.id)&&r.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const t in this.intermediateTensors)this.intermediateTensors[t].forEach(n=>n.dispose()),delete this.intermediateTensors[t]}async _executeAsync(t,n,r=!1,s={},a={}){r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepTensorForDebug=gt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){console.warn(f.message)}this.resetIntermediateTensors();const o=new Ho(this.weightMap,s,a,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,o,n,r);const i=n.map(f=>Xt(f,this.tensorsMap,o)),u=i.map(f=>f.id),l=Object.keys(t).map(f=>t[f].id);return this.keepIds=new Set([...u,...l,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&o.dispose(this.keepIds),i}async executeFunctionAsync(t,n,r){const s=t.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(t,n,r,s){const a=Object.keys(t),o=a.map(j=>this.graph.nodes[se(j)[0]]),i=r.map(j=>se(j)[0]);let u=i.map(j=>this.graph.nodes[j]);u.length===0&&(u=this._outputs);const{usedNodes:l,missingInputs:f,dynamicNode:p,syncInputs:b}=Go(t,u,this.weightMap,this._initNodes),v=[...o,...this.graph.weights,...this._initNodes||[]].map(j=>({node:j,contexts:n.currentContext})),S=Object.assign({},this.weightMap);Object.keys(t).forEach(j=>{const[B,z]=se(j),U=[];U[z]=t[j],S[B]=U});const $={},I=this.getFrozenTensorIds(S),F={};for(;v.length>0;){const j=this.processStack(o,v,n,S,F,I,i,$,l);await Promise.all(j)}p==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const G=u.filter(j=>!$1(j)&&!Xt(j.name,S,n)).map(j=>j.name);if(G.length>0){let j="";throw p!=null&&(j=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${b}]`),new Error(`Cannot compute the outputs [${G}] from the provided inputs [${a}]. Consider providing the following inputs: [${f}]. ${j}`)}return S}processStack(t,n,r,s,a,o,i,u,l){const f=[];for(;n.length>0;){const p=n.pop();r.currentContext=p.contexts;let b="";if(p.node.op==="Enter"&&m("isConstant",p.node,s,r)&&([b]=Fe(p.node.name,r)),s[p.node.name]==null){const v=Wo(p.node,s,r,this._resourceManager);b||([b]=Fe(p.node.name,r));const S=r.currentContext;tr(v)?f.push(v.then($=>(s[b]=$,r.currentContext=S,this.checkTensorForDisposal(b,p.node,s,r,o,i,u),this.processChildNodes(p.node,n,r,s,a,l),$))):(s[b]=v,this.checkTensorForDisposal(b,p.node,s,r,o,i,u),this.processChildNodes(p.node,n,r,s,a,l))}else this.processChildNodes(p.node,n,r,s,a,l)}return f}processChildNodes(t,n,r,s,a,o){t.children.forEach(i=>{const[u]=Fe(i.name,r);a[u]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(l=>!!Xt(l,s,r))&&(a[u]=!0,n.push({contexts:r.currentContext,node:i})):i.inputNames.every(l=>!!Xt(l,s,r))&&(a[u]=!0,n.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const r=t[n],[s]=se(n),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((u,l)=>o[l]===-1||o[l]===u);A(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&A(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){const n={};for(const r in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null){const s=this._signature.inputs[r];n[s.name]=t[r]}else n[r]=t[r];return n}checkInputs(t){const n=Object.keys(t).filter(r=>{const[s]=se(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[n]!=null?this._signature.outputs[n].name:n,{})}checkOutputs(t){t.forEach(n=>{const[r]=se(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class S5{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
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
 */const x5="?tfjs-format=file",E5="model.json";class k5{constructor(t,n={},r=zi){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new S5}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return tr(t)?t.then(n=>this.loadSync(n)):this.loadSync(t)}loadSync(t){this.artifacts=t;const n=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(r=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}this.signature=r,this.version=`${n.versions.producer}.${n.versions.minConsumer}`;const s=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new Ns(Vo.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(s),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const a=Vo.Instance.transformGraph(t.modelInitializer);this.initializer=new Ns(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,n){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,n){const r=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){const s=r instanceof At?[r]:r,a={};return s.forEach((o,i)=>a[this.structuredOutputKeys[i]]=o),a}return r}normalizeInputs(t){if(!(t instanceof At)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((n,r,s)=>(n[r]=t[s],n),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,n){t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=this.executor.execute(t,n);return r.length>1?r:r[0]}async executeAsync(t,n){t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(t,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,r)=>(n[r]=[t[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function A1(e,t={},n=zi){if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof e=="string"&&(e=_5(e));const r=new k5(e,t,n);return await r.load(),r}function _5(e){return e.endsWith("/")||(e=e+"/"),`${e}${E5}${x5}`}/**
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
    */var Ee=function(){return Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},Ee.apply(this,arguments)};function Ue(e,t,n,r){return new(n||(n=Promise))(function(s,a){function o(l){try{u(r.next(l))}catch(f){a(f)}}function i(l){try{u(r.throw(l))}catch(f){a(f)}}function u(l){var f;l.done?s(l.value):(f=l.value,f instanceof n?f:new n(function(p){p(f)})).then(o,i)}u((r=r.apply(e,t||[])).next())})}function Ke(e,t){var n,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(u){return function(l){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,r=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!((s=s.length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){o=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){o.label=f[1];break}if(f[0]===6&&o.label<s[1]){o.label=s[1],s=f;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(f);break}s[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(e,o)}catch(p){f=[6,p],r=0}finally{n=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,l])}}}function an(e){var t=e.map(function(n){return n[0]});return t.push(e[e.length-1][1]),t}var I1={lips:an([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:an([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:an([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:an([[474,475],[475,476],[476,477],[477,474]]),rightEye:an([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:an([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:an([[469,470],[470,471],[471,472],[472,469]]),faceOval:an([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},$5=[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]],A5=Object.entries(I1).map(function(e){var t=e[0];return e[1].map(function(n){return[n,t]})}).flat(),O1=new Map(A5);function Ka(e){for(var t={locationData:{relativeKeypoints:[]}},n=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,s=Number.MAX_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER,o=0;o<e.length;++o){var i=e[o];n=Math.min(n,i.x),r=Math.max(r,i.x),s=Math.min(s,i.y),a=Math.max(a,i.y),t.locationData.relativeKeypoints.push({x:i.x,y:i.y})}return t.locationData.relativeBoundingBox={xMin:n,yMin:s,xMax:r,yMax:a,width:r-n,height:a-s},t}var Qs={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},I5=function(){function e(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new H1.FaceMesh({locateFile:function(r,s){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceMeshSolution.setOptions({refineLandmarks:t.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:t.maxFaces}),this.faceMeshSolution.onResults(function(r){if(n.height=r.image.height,n.width=r.image.width,n.faces=[],r.multiFaceLandmarks!==null)for(var s=r.multiFaceLandmarks,a=0;a<s.length;a++){var o=n.translateOutput(s[a]);n.faces.push({keypoints:o,box:Ka(o).locationData.relativeBoundingBox})}})}return e.prototype.translateOutput=function(t){var n=this;return t.map(function(r,s){var a={x:r.x*n.width,y:r.y*n.height,z:r.z*n.width},o=O1.get(s);return o!=null&&(a.name=o),a})},e.prototype.estimateFaces=function(t,n){return Ue(this,void 0,void 0,function(){var r,s;return Ke(this,function(a){switch(a.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),t instanceof At?(s=ImageData.bind,[4,Mi(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,a.label=3;case 3:return t=r,[4,this.faceMeshSolution.send({image:t})];case 4:return a.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceMeshSolution.close()},e.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceMeshSolution.initialize()},e}();function O5(e){return Ue(this,void 0,void 0,function(){var t,n;return Ke(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return Ee({},Qs);var a=Ee({},s);return a.runtime="mediapipe",a.maxFaces==null&&(a.maxFaces=Qs.maxFaces),a.refineLandmarks==null&&(a.refineLandmarks=Qs.refineLandmarks),a}(e),[4,(n=new I5(t)).initialize()];case 1:return r.sent(),[2,n]}})})}var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D5={};(function(){var e;function t(c){var g=0;return function(){return g<c.length?{done:!1,value:c[g++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,w){return c==Array.prototype||c==Object.prototype||(c[g]=w.value),c},r=function(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ta=="object"&&ta];for(var g=0;g<c.length;++g){var w=c[g];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}(this);function s(c,g){if(g)t:{var w=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var E=c[T];if(!(E in w))break t;w=w[E]}(g=g(T=w[c=c[c.length-1]]))!=T&&g!=null&&n(w,c,{configurable:!0,writable:!0,value:g})}}function a(c){return(c={next:c})[Symbol.iterator]=function(){return this},c}function o(c){var g=typeof Symbol<"u"&&Symbol.iterator&&c[Symbol.iterator];return g?g.call(c):{next:t(c)}}function i(c){if(!(c instanceof Array)){c=o(c);for(var g,w=[];!(g=c.next()).done;)w.push(g.value);c=w}return c}s("Symbol",function(c){function g(E,x){this.g=E,n(this,"description",{configurable:!0,writable:!0,value:x})}if(c)return c;g.prototype.toString=function(){return this.g};var w="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",T=0;return function E(x){if(this instanceof E)throw new TypeError("Symbol is not a constructor");return new g(w+(x||"")+"_"+T++,x)}}),s("Symbol.iterator",function(c){if(c)return c;c=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),w=0;w<g.length;w++){var T=r[g[w]];typeof T=="function"&&typeof T.prototype[c]!="function"&&n(T.prototype,c,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return c});var u,l=typeof Object.create=="function"?Object.create:function(c){function g(){}return g.prototype=c,new g};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var f;t:{var p={};try{p.__proto__={a:!0},f=p.a;break t}catch{}f=!1}u=f?function(c,g){if(c.__proto__=g,c.__proto__!==g)throw new TypeError(c+" is not extensible");return c}:null}var b=u;function v(c,g){if(c.prototype=l(g.prototype),c.prototype.constructor=c,b)b(c,g);else for(var w in g)if(w!="prototype")if(Object.defineProperties){var T=Object.getOwnPropertyDescriptor(g,w);T&&Object.defineProperty(c,w,T)}else c[w]=g[w];c.na=g.prototype}function S(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function $(c){if(c.l)throw new TypeError("Generator is already running");c.l=!0}function I(c,g){c.j={da:g,ea:!0},c.g=c.o||c.u}function F(c,g,w){return c.g=w,{value:g}}function G(c){this.g=new S,this.h=c}function j(c,g,w,T){try{var E=g.call(c.g.i,w);if(!(E instanceof Object))throw new TypeError("Iterator result "+E+" is not an object");if(!E.done)return c.g.l=!1,E;var x=E.value}catch(_){return c.g.i=null,I(c.g,_),B(c)}return c.g.i=null,T.call(c.g,x),B(c)}function B(c){for(;c.g.g;)try{var g=c.h(c.g);if(g)return c.g.l=!1,{value:g.value,done:!1}}catch(w){c.g.h=void 0,I(c.g,w)}if(c.g.l=!1,c.g.j){if(g=c.g.j,c.g.j=null,g.ea)throw g.da;return{value:g.return,done:!0}}return{value:void 0,done:!0}}function z(c){this.next=function(g){return $(c.g),c.g.i?g=j(c,c.g.i.next,g,c.g.s):(c.g.s(g),g=B(c)),g},this.throw=function(g){return $(c.g),c.g.i?g=j(c,c.g.i.throw,g,c.g.s):(I(c.g,g),g=B(c)),g},this.return=function(g){return function(w,T){$(w.g);var E=w.g.i;return E?j(w,"return"in E?E.return:function(x){return{value:x,done:!0}},T,w.g.return):(w.g.return(T),B(w))}(c,g)},this[Symbol.iterator]=function(){return this}}function U(c){return function(g){function w(E){return g.next(E)}function T(E){return g.throw(E)}return new Promise(function(E,x){(function _(D){D.done?E(D.value):Promise.resolve(D.value).then(w,T).then(_,x)})(g.next())})}(new z(new G(c)))}S.prototype.s=function(c){this.h=c},S.prototype.return=function(c){this.j={return:c},this.g=this.u},s("Promise",function(c){function g(_){this.h=0,this.i=void 0,this.g=[],this.s=!1;var D=this.j();try{_(D.resolve,D.reject)}catch(P){D.reject(P)}}function w(){this.g=null}function T(_){return _ instanceof g?_:new g(function(D){D(_)})}if(c)return c;w.prototype.h=function(_){if(this.g==null){this.g=[];var D=this;this.i(function(){D.l()})}this.g.push(_)};var E=r.setTimeout;w.prototype.i=function(_){E(_,0)},w.prototype.l=function(){for(;this.g&&this.g.length;){var _=this.g;this.g=[];for(var D=0;D<_.length;++D){var P=_[D];_[D]=null;try{P()}catch(M){this.j(M)}}}this.g=null},w.prototype.j=function(_){this.i(function(){throw _})},g.prototype.j=function(){function _(M){return function(H){P||(P=!0,M.call(D,H))}}var D=this,P=!1;return{resolve:_(this.D),reject:_(this.l)}},g.prototype.D=function(_){if(_===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(_ instanceof g)this.H(_);else{t:switch(typeof _){case"object":var D=_!=null;break t;case"function":D=!0;break t;default:D=!1}D?this.A(_):this.o(_)}},g.prototype.A=function(_){var D=void 0;try{D=_.then}catch(P){return void this.l(P)}typeof D=="function"?this.I(D,_):this.o(_)},g.prototype.l=function(_){this.u(2,_)},g.prototype.o=function(_){this.u(1,_)},g.prototype.u=function(_,D){if(this.h!=0)throw Error("Cannot settle("+_+", "+D+"): Promise already settled in state"+this.h);this.h=_,this.i=D,this.h===2&&this.G(),this.B()},g.prototype.G=function(){var _=this;E(function(){if(_.C()){var D=r.console;D!==void 0&&D.error(_.i)}},1)},g.prototype.C=function(){if(this.s)return!1;var _=r.CustomEvent,D=r.Event,P=r.dispatchEvent;return P===void 0||(typeof _=="function"?_=new _("unhandledrejection",{cancelable:!0}):typeof D=="function"?_=new D("unhandledrejection",{cancelable:!0}):(_=r.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,_),_.promise=this,_.reason=this.i,P(_))},g.prototype.B=function(){if(this.g!=null){for(var _=0;_<this.g.length;++_)x.h(this.g[_]);this.g=null}};var x=new w;return g.prototype.H=function(_){var D=this.j();_.M(D.resolve,D.reject)},g.prototype.I=function(_,D){var P=this.j();try{_.call(D,P.resolve,P.reject)}catch(M){P.reject(M)}},g.prototype.then=function(_,D){function P(J,Q){return typeof J=="function"?function(ut){try{M(J(ut))}catch(lt){H(lt)}}:Q}var M,H,Y=new g(function(J,Q){M=J,H=Q});return this.M(P(_,M),P(D,H)),Y},g.prototype.catch=function(_){return this.then(void 0,_)},g.prototype.M=function(_,D){function P(){switch(M.h){case 1:_(M.i);break;case 2:D(M.i);break;default:throw Error("Unexpected state: "+M.h)}}var M=this;this.g==null?x.h(P):this.g.push(P),this.s=!0},g.resolve=T,g.reject=function(_){return new g(function(D,P){P(_)})},g.race=function(_){return new g(function(D,P){for(var M=o(_),H=M.next();!H.done;H=M.next())T(H.value).M(D,P)})},g.all=function(_){var D=o(_),P=D.next();return P.done?T([]):new g(function(M,H){function Y(ut){return function(lt){J[ut]=lt,--Q==0&&M(J)}}var J=[],Q=0;do J.push(void 0),Q++,T(P.value).M(Y(J.length-1),H),P=D.next();while(!P.done)})},g});var Z=typeof Object.assign=="function"?Object.assign:function(c,g){for(var w=1;w<arguments.length;w++){var T=arguments[w];if(T)for(var E in T)Object.prototype.hasOwnProperty.call(T,E)&&(c[E]=T[E])}return c};s("Object.assign",function(c){return c||Z}),s("Object.is",function(c){return c||function(g,w){return g===w?g!==0||1/g==1/w:g!=g&&w!=w}}),s("Array.prototype.includes",function(c){return c||function(g,w){var T=this;T instanceof String&&(T=String(T));var E=T.length;for(0>(w=w||0)&&(w=Math.max(w+E,0));w<E;w++){var x=T[w];if(x===g||Object.is(x,g))return!0}return!1}}),s("String.prototype.includes",function(c){return c||function(g,w){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(g instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(g,w||0)!==-1}}),s("Array.prototype.keys",function(c){return c||function(){return function(g,w){g instanceof String&&(g+="");var T=0,E=!1,x={next:function(){if(!E&&T<g.length){var _=T++;return{value:w(_,g[_]),done:!1}}return E=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}(this,function(g){return g})}});var nt=this||self;function q(c,g){c=c.split(".");var w,T=nt;for((c[0]in T)||T.execScript===void 0||T.execScript("var "+c[0]);c.length&&(w=c.shift());)c.length||g===void 0?T=T[w]&&T[w]!==Object.prototype[w]?T[w]:T[w]={}:T[w]=g}function tt(){throw Error("Invalid UTF8")}function it(c,g){return g=String.fromCharCode.apply(null,g),c==null?g:c+g}var yt,at,Et=typeof TextDecoder<"u",Rt=typeof TextEncoder<"u",Kt={},zt=null;function ve(c){var g;g===void 0&&(g=0),yn(),g=Kt[g];for(var w=Array(Math.floor(c.length/3)),T=g[64]||"",E=0,x=0;E<c.length-2;E+=3){var _=c[E],D=c[E+1],P=c[E+2],M=g[_>>2];_=g[(3&_)<<4|D>>4],D=g[(15&D)<<2|P>>6],P=g[63&P],w[x++]=M+_+D+P}switch(M=0,P=T,c.length-E){case 2:P=g[(15&(M=c[E+1]))<<2]||T;case 1:c=c[E],w[x]=g[c>>2]+g[(3&c)<<4|M>>4]+P+T}return w.join("")}function le(c){var g=c.length,w=3*g/4;w%3?w=Math.floor(w):"=.".indexOf(c[g-1])!=-1&&(w="=.".indexOf(c[g-2])!=-1?w-2:w-1);var T=new Uint8Array(w),E=0;return function(x,_){function D(Q){for(;P<x.length;){var ut=x.charAt(P++),lt=zt[ut];if(lt!=null)return lt;if(!/^[\s\xa0]*$/.test(ut))throw Error("Unknown base64 encoding at char: "+ut)}return Q}yn();for(var P=0;;){var M=D(-1),H=D(0),Y=D(64),J=D(64);if(J===64&&M===-1)break;_(M<<2|H>>4),Y!=64&&(_(H<<4&240|Y>>2),J!=64&&_(Y<<6&192|J))}}(c,function(x){T[E++]=x}),E!==w?T.subarray(0,E):T}function yn(){if(!zt){zt={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],w=0;5>w;w++){var T=c.concat(g[w].split(""));Kt[w]=T;for(var E=0;E<T.length;E++){var x=T[E];zt[x]===void 0&&(zt[x]=E)}}}}var _e,jr=typeof Uint8Array=="function";function ir(c){return jr&&c!=null&&c instanceof Uint8Array}function zr(c){if(this.L=c,c!==null&&c.length===0)throw Error("ByteString should be constructed with non-empty values")}var Vr=typeof Uint8Array.prototype.slice=="function",$e=0;function ur(c,g){return Error("Invalid wire type: "+c+" (at position "+g+")")}function Vn(){return Error("Failed to read varint, encoding is invalid.")}function he(c,g){g=(g=g===void 0?{}:g).v!==void 0&&g.v,this.h=null,this.g=this.i=this.j=0,this.v=g,c&&fe(this,c)}function fe(c,g){c.h=function(w,T){if(w.constructor===Uint8Array)return w;if(w.constructor===ArrayBuffer)return new Uint8Array(w);if(w.constructor===Array)return new Uint8Array(w);if(w.constructor===String)return le(w);if(w.constructor===zr)return!T&&(T=w.L)&&T.constructor===Uint8Array?T:(T=(T=w.L)==null||ir(T)?T:typeof T=="string"?le(T):null,(w=w.L=T)?new Uint8Array(w):_e||(_e=new Uint8Array(0)));if(w instanceof Uint8Array)return new Uint8Array(w.buffer,w.byteOffset,w.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(g,c.v),c.j=0,c.i=c.h.length,c.g=c.j}function Dt(c){if(c.g>c.i)throw Error("Tried to read past the end of the data "+c.g+" > "+c.i)}function Qe(c){var g=c.h,w=g[c.g],T=127&w;if(128>w)return c.g+=1,Dt(c),T;if(T|=(127&(w=g[c.g+1]))<<7,128>w)return c.g+=2,Dt(c),T;if(T|=(127&(w=g[c.g+2]))<<14,128>w)return c.g+=3,Dt(c),T;if(T|=(127&(w=g[c.g+3]))<<21,128>w)return c.g+=4,Dt(c),T;if(w=g[c.g+4],c.g+=5,T|=(15&w)<<28,128>w)return Dt(c),T;if(128<=g[c.g++]&&128<=g[c.g++]&&128<=g[c.g++]&&128<=g[c.g++]&&128<=g[c.g++])throw Vn();return Dt(c),T}he.prototype.reset=function(){this.g=this.j};var bn=[];function Mn(){this.g=[]}function pe(c,g){for(;127<g;)c.g.push(127&g|128),g>>>=7;c.g.push(g)}function Te(c){var g={},w=g.W!==void 0&&g.W;this.l={v:g.v!==void 0&&g.v},this.W=w,g=this.l,bn.length?(w=bn.pop(),g&&(w.v=g.v),c&&fe(w,c),c=w):c=new he(c,g),this.g=c,this.j=this.g.g,this.h=this.i=-1}function tn(c){var g=c.g;if(g.g==g.i)return!1;c.j=c.g.g;var w=Qe(c.g)>>>0;if(g=w>>>3,!(0<=(w&=7)&&5>=w))throw ur(w,c.j);if(1>g)throw Error("Invalid field number: "+g+" (at position "+c.j+")");return c.i=g,c.h=w,!0}function te(c){switch(c.h){case 0:if(c.h!=0)te(c);else t:{for(var g=(c=c.g).g,w=g+10;g<w;)if(!(128&c.h[g++])){c.g=g,Dt(c);break t}throw Vn()}break;case 1:(c=c.g).g+=8,Dt(c);break;case 2:c.h!=2?te(c):(g=Qe(c.g)>>>0,(c=c.g).g+=g,Dt(c));break;case 5:(c=c.g).g+=4,Dt(c);break;case 3:for(g=c.i;;){if(!tn(c))throw Error("Unmatched start-group tag: stream EOF");if(c.h==4){if(c.i!=g)throw Error("Unmatched end-group tag");break}te(c)}break;default:throw ur(c.h,c.j)}}Mn.prototype.length=function(){return this.g.length},Mn.prototype.end=function(){var c=this.g;return this.g=[],c},Te.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var Ne=[];function Un(){this.i=[],this.h=0,this.g=new Mn}function Pt(c,g){g.length!==0&&(c.i.push(g),c.h+=g.length)}var wn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function cr(c,g){Object.isFrozen(c)||(wn?c[wn]|=g:c.N!==void 0?c.N|=g:Object.defineProperties(c,{N:{value:g,configurable:!0,writable:!0,enumerable:!1}}))}function lr(c){var g;return(g=wn?c[wn]:c.N)==null?0:g}function Be(c){return cr(c,1),c}function de(c){return!!Array.isArray(c)&&!!(2&lr(c))}function vn(c){if(!Array.isArray(c))throw Error("cannot mark non-array as immutable");cr(c,2)}function ee(c){return c!==null&&typeof c=="object"&&!Array.isArray(c)&&c.constructor===Object}var Tn=Object.freeze(Be([]));function hr(c){if(de(c.m))throw Error("Cannot mutate an immutable Message")}var fr,Mr=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function Ur(c){return{value:c,configurable:!1,writable:!1,enumerable:!1}}function Wt(c,g,w){return g===-1?null:g>=c.i?c.g?c.g[g]:void 0:w!==void 0&&w&&c.g&&(w=c.g[g])!=null?w:c.m[g+c.h]}function Ft(c,g,w,T){T=T!==void 0&&T,hr(c),g<c.i&&!T?c.m[g+c.h]=w:(c.g||(c.g=c.m[c.i+c.h]={}))[g]=w}function Ct(c,g,w,T){w=w===void 0||w;var E=Wt(c,g,T=T!==void 0&&T);return E==null&&(E=Tn),de(c.m)?w&&(vn(E),Object.freeze(E)):(E===Tn||de(E))&&Ft(c,g,E=Be(E.slice()),T),E}function Jt(c,g,w){return(c=(c=Wt(c,g))==null?c:+c)==null?w===void 0?0:w:c}function Nn(c,g,w,T){c.j||(c.j={});var E=de(c.m),x=c.j[w];if(!x){T=Ct(c,w,!0,T!==void 0&&T),x=[],E=E||de(T);for(var _=0;_<T.length;_++)x[_]=new g(T[_]),E&&vn(x[_].m);E&&(vn(x),Object.freeze(x)),c.j[w]=x}return x}function St(c,g,w,T,E){var x=x!==void 0&&x;return hr(c),x=Nn(c,w,g,x),w=T||new w,c=Ct(c,g),E!=null?(x.splice(E,0,w),c.splice(E,0,w.m)):(x.push(w),c.push(w.m)),w}function Sn(c,g){return(c=Wt(c,g))==null?0:c}function pr(c,g){return(c=Wt(c,g))==null?"":c}function Ae(c){var g=Kr;return pt(c,g=g===void 0?Kn:g)}function oe(c,g){if(c!=null){if(Array.isArray(c))c=pt(c,g);else if(ee(c)){var w,T={};for(w in c)T[w]=oe(c[w],g);c=T}else c=g(c);return c}}function pt(c,g){for(var w=c.slice(),T=0;T<w.length;T++)w[T]=oe(w[T],g);return Array.isArray(c)&&1&lr(c)&&Be(w),w}function Kr(c){return c&&typeof c=="object"&&c.toJSON?c.toJSON():(c=function(g){switch(typeof g){case"number":return isFinite(g)?g:String(g);case"object":if(g&&!Array.isArray(g)){if(ir(g))return ve(g);if(g instanceof zr){var w=g.L;return w=w==null||typeof w=="string"?w:jr&&w instanceof Uint8Array?ve(w):null,(g.L=w)||""}}}return g}(c),Array.isArray(c)?Ae(c):c)}function Kn(c){return ir(c)?new Uint8Array(c):c}function xn(c,g,w){c||(c=fr),fr=null;var T=this.constructor.h;if(c||(c=T?[T]:[]),this.h=(T?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=c,c=(T=this.m.length)-1,T&&ee(T=this.m[c])?(this.i=c-this.h,this.g=T):g!==void 0&&-1<g?(this.i=Math.max(g,c+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,w)for(g=0;g<w.length;g++)if((c=w[g])<this.i)c+=this.h,(T=this.m[c])?Array.isArray(T)&&Be(T):this.m[c]=Tn;else{var E=(T=this.g||(this.g=this.m[this.i+this.h]={}))[c];E?Array.isArray(E)&&Be(E):T[c]=Tn}}function En(){xn.apply(this,arguments)}if(xn.prototype.toJSON=function(){return Ae(this.m)},xn.prototype.toString=function(){return this.m.toString()},v(En,xn),Mr){var Ie={};Object.defineProperties(En,(Ie[Symbol.hasInstance]=Ur(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Ie))}function Wn(c,g,w){if(w){var T,E={};for(T in w){var x=w[T],_=x.ha;_||(E.F=x.la||x.fa.P,x.aa?(E.U=Hr(x.aa),_=function(D){return function(P,M,H){return D.F(P,M,H,D.U)}}(E)):x.ca?(E.T=Hn(x.X.g,x.ca),_=function(D){return function(P,M,H){return D.F(P,M,H,D.T)}}(E)):_=E.F,x.ha=_),_(g,c,x.X),E={F:E.F,U:E.U,T:E.T}}}(function(D,P){if(P=P.ba){Pt(D,D.g.end());for(var M=0;M<P.length;M++)Pt(D,P[M])}})(g,c)}var ie=Symbol();function Oe(c,g,w){return c[ie]||(c[ie]=function(T,E){return g(T,E,w)})}function Wr(c){var g=c[ie];if(!g){var w=Jr(c);g=function(T,E){return dr(T,E,w)},c[ie]=g}return g}function Ls(c){var g=function(E){var x=E.aa;return x?Wr(x):(x=E.ka)?Oe(E.X.g,x,E.ca):void 0}(c),w=c.X,T=c.fa.O;return g?function(E,x){return T(E,x,w,g)}:function(E,x){return T(E,x,w)}}function Vt(c,g,w,T,E,x){var _=0;for((c=c()).length&&typeof c[0]!="number"&&(w(g,c[0]),_++);_<c.length;){w=c[_++];for(var D=_+1;D<c.length&&typeof c[D]!="number";)D++;var P=c[_++];switch(D-=_){case 0:T(g,w,P);break;case 1:T(g,w,P,c[_++]);break;case 2:E(g,w,P,c[_++],c[_++]);break;case 3:D=c[_++];var M=c[_++],H=c[_++];Array.isArray(H)?E(g,w,P,D,M,H):x(g,w,P,D,M,H);break;case 4:x(g,w,P,c[_++],c[_++],c[_++],c[_++]);break;default:throw Error("unexpected number of binary field arguments: "+D)}}return g}var De=Symbol();function Hr(c){var g=c[De];if(!g){var w=Yr(c);g=function(T,E){return gr(T,E,w)},c[De]=g}return g}function Hn(c,g){var w=c[De];return w||(w=function(T,E){return Wn(T,E,g)},c[De]=w),w}var Gr=Symbol();function en(c,g){c.push(g)}function Rs(c,g,w){c.push(g,w.P)}function qr(c,g,w,T,E){var x=Hr(E),_=w.P;c.push(g,function(D,P,M){return _(D,P,M,T,x)})}function Xr(c,g,w,T,E,x){var _=Hn(T,x),D=w.P;c.push(g,function(P,M,H){return D(P,M,H,T,_)})}function Yr(c){var g=c[Gr];return g||Vt(c,c[Gr]=[],en,Rs,qr,Xr)}var Gn=Symbol();function je(c,g){c[0]=g}function Ps(c,g,w,T){var E=w.O;c[g]=T?function(x,_,D){return E(x,_,D,T)}:E}function Bs(c,g,w,T,E,x){var _=w.O,D=Wr(E);c[g]=function(P,M,H){return _(P,M,H,T,D,x)}}function qn(c,g,w,T,E,x,_){var D=w.O,P=Oe(T,E,x);c[g]=function(M,H,Y){return D(M,H,Y,T,P,_)}}function Jr(c){var g=c[Gn];return g||Vt(c,c[Gn]={},je,Ps,Bs,qn)}function dr(c,g,w){for(;tn(g)&&g.h!=4;){var T=g.i,E=w[T];if(!E){var x=w[0];x&&(x=x[T])&&(E=w[T]=Ls(x))}if(!(E&&E(g,c,T)||(E=g,T=c,x=E.j,te(E),E.W))){var _=E.g.h;E=x===(E=E.g.g)?_e||(_e=new Uint8Array(0)):Vr?_.slice(x,E):new Uint8Array(_.subarray(x,E)),(x=T.ba)?x.push(E):T.ba=[E]}}return c}function mr(c,g,w){if(Ne.length){var T=Ne.pop();c&&(fe(T.g,c),T.i=-1,T.h=-1),c=T}else c=new Te(c);try{return dr(new g,c,Jr(w))}finally{(g=c.g).h=null,g.j=0,g.i=0,g.g=0,g.v=!1,c.i=-1,c.h=-1,100>Ne.length&&Ne.push(c)}}function gr(c,g,w){for(var T=w.length,E=T%2==1,x=E?1:0;x<T;x+=2)(0,w[x+1])(g,c,w[x]);Wn(c,g,E?w[0]:void 0)}function kn(c,g){var w=new Un;gr(c,w,Yr(g)),Pt(w,w.g.end()),c=new Uint8Array(w.h);for(var T=(g=w.i).length,E=0,x=0;x<T;x++){var _=g[x];c.set(_,E),E+=_.length}return w.i=[c],c}function nn(c,g){return{O:c,P:g}}var ue=nn(function(c,g,w){if(c.h!==5)return!1;var T=(c=c.g).h[c.g],E=c.h[c.g+1],x=c.h[c.g+2],_=c.h[c.g+3];return c.g+=4,Dt(c),c=2*((E=(T<<0|E<<8|x<<16|_<<24)>>>0)>>31)+1,T=E>>>23&255,E&=8388607,Ft(g,w,T==255?E?NaN:1/0*c:T==0?c*Math.pow(2,-149)*E:c*Math.pow(2,T-150)*(E+Math.pow(2,23))),!0},function(c,g,w){if((g=Wt(g,w))!=null){pe(c.g,8*w+5),c=c.g;var T=g;(T=(w=0>T?1:0)?-T:T)===0?0<1/T?$e=0:$e=2147483648:isNaN(T)?$e=2147483647:34028234663852886e22<T?$e=(w<<31|2139095040)>>>0:11754943508222875e-54>T?(T=Math.round(T/Math.pow(2,-149)),$e=(w<<31|T)>>>0):(g=Math.floor(Math.log(T)/Math.LN2),T*=Math.pow(2,-g),16777216<=(T=Math.round(8388608*T))&&++g,$e=(w<<31|g+127<<23|8388607&T)>>>0),w=$e,c.g.push(w>>>0&255),c.g.push(w>>>8&255),c.g.push(w>>>16&255),c.g.push(w>>>24&255)}}),js=nn(function(c,g,w){if(c.h!==0)return!1;for(var T=c.g,E=128,x=0,_=c=0;4>_&&128<=E;_++)E=T.h[T.g++],Dt(T),x|=(127&E)<<7*_;if(128<=E&&(E=T.h[T.g++],Dt(T),x|=(127&E)<<28,c|=(127&E)>>4),128<=E)for(_=0;5>_&&128<=E;_++)E=T.h[T.g++],Dt(T),c|=(127&E)<<7*_+3;if(!(128>E))throw Vn();return T=x>>>0,(c=2147483648&(E=c>>>0))&&(E=~E>>>0,(T=1+~T>>>0)==0&&(E=E+1>>>0)),T=4294967296*E+(T>>>0),Ft(g,w,c?-T:T),!0},function(c,g,w){if((g=Wt(g,w))!=null&&g!=null){pe(c.g,8*w),c=c.g;var T=g;for(w=0>T,g=(T=Math.abs(T))>>>0,T=Math.floor((T-g)/4294967296),T>>>=0,w&&(T=~T>>>0,4294967295<(g=1+(~g>>>0))&&(g=0,4294967295<++T&&(T=0))),w=$e=g,g=T;0<g||127<w;)c.g.push(127&w|128),w=(w>>>7|g<<25)>>>0,g>>>=7;c.g.push(w)}}),zs=nn(function(c,g,w){return c.h===0&&(Ft(g,w,Qe(c.g)),!0)},function(c,g,w){if((g=Wt(g,w))!=null&&g!=null)if(pe(c.g,8*w),c=c.g,0<=(w=g))pe(c,w);else{for(g=0;9>g;g++)c.g.push(127&w|128),w>>=7;c.g.push(1)}}),Zr=nn(function(c,g,w){if(c.h!==2)return!1;var T,E=Qe(c.g)>>>0,x=(c=c.g).g;if(c.g+=E,Dt(c),c=c.h,Et)(T=yt)||(T=yt=new TextDecoder("utf-8",{fatal:!0})),T=T.decode(c.subarray(x,x+E));else{E=x+E;for(var _,D,P,M=[],H=null;x<E;)128>(_=c[x++])?M.push(_):224>_?x>=E?tt():(D=c[x++],194>_||(192&D)!=128?(x--,tt()):M.push((31&_)<<6|63&D)):240>_?x>=E-1?tt():(192&(D=c[x++]))!=128||_===224&&160>D||_===237&&160<=D||(192&(T=c[x++]))!=128?(x--,tt()):M.push((15&_)<<12|(63&D)<<6|63&T):244>=_?x>=E-2?tt():(192&(D=c[x++]))!=128||D-144+(_<<28)>>30||(192&(T=c[x++]))!=128||(192&(P=c[x++]))!=128?(x--,tt()):(_=(7&_)<<18|(63&D)<<12|(63&T)<<6|63&P,_-=65536,M.push(55296+(_>>10&1023),56320+(1023&_))):tt(),8192<=M.length&&(H=it(H,M),M.length=0);T=it(H,M)}return Ft(g,w,T),!0},function(c,g,w){if((g=Wt(g,w))!=null){var T=!1;if(T=T!==void 0&&T,Rt){if(T&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(g))throw Error("Found an unpaired surrogate");g=(at||(at=new TextEncoder)).encode(g)}else{for(var E=0,x=new Uint8Array(3*g.length),_=0;_<g.length;_++){var D=g.charCodeAt(_);if(128>D)x[E++]=D;else{if(2048>D)x[E++]=D>>6|192;else{if(55296<=D&&57343>=D){if(56319>=D&&_<g.length){var P=g.charCodeAt(++_);if(56320<=P&&57343>=P){D=1024*(D-55296)+P-56320+65536,x[E++]=D>>18|240,x[E++]=D>>12&63|128,x[E++]=D>>6&63|128,x[E++]=63&D|128;continue}_--}if(T)throw Error("Found an unpaired surrogate");D=65533}x[E++]=D>>12|224,x[E++]=D>>6&63|128}x[E++]=63&D|128}}g=x.subarray(0,E)}pe(c.g,8*w+2),pe(c.g,g.length),Pt(c,c.g.end()),Pt(c,g)}}),yr=nn(function(c,g,w,T,E){if(c.h!==2)return!1;g=St(g,w,T),w=c.g.i,T=Qe(c.g)>>>0;var x=c.g.g+T,_=x-w;if(0>=_&&(c.g.i=x,E(g,c),_=x-c.g.g),_)throw Error("Message parsing ended unexpectedly. Expected to read "+T+" bytes, instead read "+(T-_)+" bytes, either the data ended unexpectedly or the message misreported its own length");return c.g.g=x,c.g.i=w,!0},function(c,g,w,T,E){if((g=Nn(g,T,w))!=null)for(T=0;T<g.length;T++){var x=c;pe(x.g,8*w+2);var _=x.g.end();Pt(x,_),_.push(x.h),x=_,E(g[T],c),_=c;var D=x.pop();for(D=_.h+_.g.length()-D;127<D;)x.push(127&D|128),D>>>=7,_.h++;x.push(D),_.h++}});function ne(){En.apply(this,arguments)}if(v(ne,En),Mr){var Qr={};Object.defineProperties(ne,(Qr[Symbol.hasInstance]=Ur(Object[Symbol.hasInstance]),Qr))}function ze(c){ne.call(this,c)}function ts(){return[1,zs,2,ue,3,Zr,4,Zr]}function br(c){ne.call(this,c,-1,Ms)}function Vs(){return[1,yr,ze,ts]}v(ze,ne),v(br,ne),br.prototype.addClassification=function(c,g){return St(this,1,ze,c,g),this};var Ms=[1];function rn(c){ne.call(this,c)}function es(){return[1,ue,2,ue,3,ue,4,ue,5,ue]}function ns(c){ne.call(this,c,-1,Ks)}function Us(){return[1,yr,rn,es]}v(rn,ne),v(ns,ne);var Ks=[1];function wr(c){ne.call(this,c)}function vr(){return[1,ue,2,ue,3,ue,4,ue,5,ue,6,js]}v(wr,ne);var Tr=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Nr=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Sr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],xr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Er=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],rs=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],ss=[].concat(i(Tr),i(Nr),i(Sr),i(xr),i(Er),i(rs));function h(c,g,w){if(w=c.createShader(w===0?c.VERTEX_SHADER:c.FRAGMENT_SHADER),c.shaderSource(w,g),c.compileShader(w),!c.getShaderParameter(w,c.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+c.getShaderInfoLog(w));return w}function d(c){return Nn(c,ze,1).map(function(g){return{index:Sn(g,1),ga:Jt(g,2),label:Wt(g,3)!=null?pr(g,3):void 0,displayName:Wt(g,4)!=null?pr(g,4):void 0}})}function y(c){return{x:Jt(c,1),y:Jt(c,2),z:Jt(c,3),visibility:Wt(c,4)!=null?Jt(c,4):void 0}}function k(c,g){this.h=c,this.g=g,this.l=0}function L(c,g,w){return function(T,E){var x=T.g;if(T.o===void 0){var _=h(x,`
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
  }`,1),P=x.createProgram();if(x.attachShader(P,_),x.attachShader(P,D),x.linkProgram(P),!x.getProgramParameter(P,x.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+x.getProgramInfoLog(P));_=T.o=P,x.useProgram(_),D=x.getUniformLocation(_,"sampler0"),T.j={K:x.getAttribLocation(_,"aVertex"),J:x.getAttribLocation(_,"aTex"),ma:D},T.u=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,T.u),x.enableVertexAttribArray(T.j.K),x.vertexAttribPointer(T.j.K,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),T.s=x.createBuffer(),x.bindBuffer(x.ARRAY_BUFFER,T.s),x.enableVertexAttribArray(T.j.J),x.vertexAttribPointer(T.j.J,2,x.FLOAT,!1,0,0),x.bufferData(x.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),x.STATIC_DRAW),x.bindBuffer(x.ARRAY_BUFFER,null),x.uniform1i(D,0)}_=T.j,x.useProgram(T.o),x.canvas.width=E.width,x.canvas.height=E.height,x.viewport(0,0,E.width,E.height),x.activeTexture(x.TEXTURE0),T.h.bindTexture2d(E.glName),x.enableVertexAttribArray(_.K),x.bindBuffer(x.ARRAY_BUFFER,T.u),x.vertexAttribPointer(_.K,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(_.J),x.bindBuffer(x.ARRAY_BUFFER,T.s),x.vertexAttribPointer(_.J,2,x.FLOAT,!1,0,0),x.bindFramebuffer(x.DRAW_FRAMEBUFFER?x.DRAW_FRAMEBUFFER:x.FRAMEBUFFER,null),x.clearColor(0,0,0,0),x.clear(x.COLOR_BUFFER_BIT),x.colorMask(!0,!0,!0,!0),x.drawArrays(x.TRIANGLE_FAN,0,4),x.disableVertexAttribArray(_.K),x.disableVertexAttribArray(_.J),x.bindBuffer(x.ARRAY_BUFFER,null),T.h.bindTexture2d(0)}(c,g),typeof c.g.canvas.transferToImageBitmap=="function"?Promise.resolve(c.g.canvas.transferToImageBitmap()):w?Promise.resolve(c.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(c.g.canvas):(c.i===void 0&&(c.i=document.createElement("canvas")),new Promise(function(T){c.i.height=c.g.canvas.height,c.i.width=c.g.canvas.width,c.i.getContext("2d",{}).drawImage(c.g.canvas,0,0,c.g.canvas.width,c.g.canvas.height),T(c.i)}))}function V(c){this.g=c}var R=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function K(c,g){return g+c}function X(c,g){window[c]=g}function et(c){if(this.g=c,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=c&&c.locateFile||K,typeof window=="object")var g=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");g=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=g,c.options)for(var w=(g=o(Object.keys(c.options))).next();!w.done;w=g.next()){w=w.value;var T=c.options[w].default;T!==void 0&&(this.j[w]=typeof T=="function"?T():T)}}function ot(c){var g,w,T,E,x,_,D,P,M,H,Y;return U(function(J){switch(J.g){case 1:return c.Z?(g=c.g.files===void 0?[]:typeof c.g.files=="function"?c.g.files(c.j):c.g.files,F(J,U(function(Q){switch(Q.g){case 1:return Q.o=2,F(Q,WebAssembly.instantiate(R),4);case 4:Q.g=3,Q.o=0;break;case 2:return Q.o=0,Q.j=null,Q.return(!1);case 3:return Q.return(!0)}}),2)):J.return();case 2:if(w=J.h,typeof window=="object")return X("createMediapipeSolutionsWasm",{locateFile:c.locateFile}),X("createMediapipeSolutionsPackedAssets",{locateFile:c.locateFile}),_=g.filter(function(Q){return Q.data!==void 0}),D=g.filter(function(Q){return Q.data===void 0}),P=Promise.all(_.map(function(Q){var ut=dt(c,Q.url);if(Q.path!==void 0){var lt=Q.path;ut=ut.then(function(Tt){return c.overrideFile(lt,Tt),Promise.resolve(Tt)})}return ut})),M=Promise.all(D.map(function(Q){return Q.simd===void 0||Q.simd&&w||!Q.simd&&!w?function(ut){var lt=document.createElement("script");return lt.setAttribute("src",ut),lt.setAttribute("crossorigin","anonymous"),new Promise(function(Tt){lt.addEventListener("load",function(){Tt()},!1),lt.addEventListener("error",function(){Tt()},!1),document.body.appendChild(lt)})}(c.locateFile(Q.url,c.$)):Promise.resolve()})).then(function(){var Q,ut,lt;return U(function(Tt){if(Tt.g==1)return Q=window.createMediapipeSolutionsWasm,ut=window.createMediapipeSolutionsPackedAssets,lt=c,F(Tt,Q(ut),2);lt.h=Tt.h,Tt.g=0})}),H=U(function(Q){return c.g.graph&&c.g.graph.url?Q=F(Q,dt(c,c.g.graph.url),0):(Q.g=0,Q=void 0),Q}),F(J,Promise.all([M,P,H]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return T=g.filter(function(Q){return Q.simd===void 0||Q.simd&&w||!Q.simd&&!w}).map(function(Q){return c.locateFile(Q.url,c.$)}),importScripts.apply(null,i(T)),E=c,F(J,createMediapipeSolutionsWasm(Module),6);case 6:E.h=J.h,c.l=new OffscreenCanvas(1,1),c.h.canvas=c.l,x=c.h.GL.createContext(c.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),c.h.GL.makeContextCurrent(x),J.g=4;break;case 7:if(c.l=document.createElement("canvas"),!(Y=c.l.getContext("webgl2",{}))&&!(Y=c.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),J.return();c.G=Y,c.h.canvas=c.l,c.h.createContext(c.l,!0,!0,{});case 4:c.i=new c.h.SolutionWasm,c.Z=!1,J.g=0}})}function dt(c,g){var w,T;return U(function(E){return g in c.H?E.return(c.H[g]):(w=c.locateFile(g,""),T=fetch(w).then(function(x){return x.arrayBuffer()}),c.H[g]=T,E.return(T))})}function ft(c,g,w){var T,E,x,_,D,P,M,H,Y,J,Q,ut,lt,Tt;return U(function(kt){switch(kt.g){case 1:if(!w)return kt.return(g);for(T={},E=0,x=o(Object.keys(w)),_=x.next();!_.done;_=x.next())D=_.value,typeof(P=w[D])!="string"&&P.type==="texture"&&g[P.stream]!==void 0&&++E;1<E&&(c.I=!1),M=o(Object.keys(w)),_=M.next();case 2:if(_.done){kt.g=4;break}if(H=_.value,typeof(Y=w[H])=="string")return lt=T,Tt=H,F(kt,function(_n,wo,Xn){var as;return U(function(Ws){return typeof Xn=="number"||Xn instanceof Uint8Array||Xn instanceof _n.h.Uint8BlobList?Ws.return(Xn):Xn instanceof _n.h.Texture2dDataOut?((as=_n.u[wo])||(as=new k(_n.h,_n.G),_n.u[wo]=as),Ws.return(L(as,Xn,_n.I))):Ws.return(void 0)})}(c,H,g[Y]),14);if(J=g[Y.stream],Y.type==="detection_list"){if(J){for(var Zt=J.getRectList(),me=J.getLandmarksList(),re=J.getClassificationsList(),bt=[],Ht=0;Ht<Zt.size();++Ht){var sn=mr(Zt.get(Ht),wr,vr);sn={boundingBox:{xCenter:Jt(sn,1),yCenter:Jt(sn,2),height:Jt(sn,3),width:Jt(sn,4),rotation:Jt(sn,5,0),rectId:Sn(sn,6)},landmarks:Nn(mr(me.get(Ht),ns,Us),rn,1).map(y),V:d(mr(re.get(Ht),br,Vs))},bt.push(sn)}Zt=bt}else Zt=[];T[H]=Zt,kt.g=7;break}if(Y.type==="proto_list"){if(J){for(Zt=Array(J.size()),me=0;me<J.size();me++)Zt[me]=J.get(me);J.delete()}else Zt=[];T[H]=Zt,kt.g=7;break}if(J===void 0){kt.g=3;break}if(Y.type==="float_list"){T[H]=J,kt.g=7;break}if(Y.type==="proto"){T[H]=J,kt.g=7;break}if(Y.type!=="texture")throw Error("Unknown output config type: '"+Y.type+"'");return(Q=c.u[H])||(Q=new k(c.h,c.G),c.u[H]=Q),F(kt,L(Q,J,c.I),13);case 13:ut=kt.h,T[H]=ut;case 7:Y.transform&&T[H]&&(T[H]=Y.transform(T[H])),kt.g=3;break;case 14:lt[Tt]=kt.h;case 3:_=M.next(),kt.g=2;break;case 4:return kt.return(T)}})}function ct(c,g){for(var w=g.name||"$",T=[].concat(i(g.wants)),E=new c.h.StringList,x=o(g.wants),_=x.next();!_.done;_=x.next())E.push_back(_.value);x=c.h.PacketListener.implement({onResults:function(D){for(var P={},M=0;M<g.wants.length;++M)P[T[M]]=D.get(M);var H=c.listeners[w];H&&(c.D=ft(c,P,g.outs).then(function(Y){Y=H(Y);for(var J=0;J<g.wants.length;++J){var Q=P[T[J]];typeof Q=="object"&&Q.hasOwnProperty&&Q.hasOwnProperty("delete")&&Q.delete()}Y&&(c.D=Y)}))}}),c.i.attachMultiListener(E,x),E.delete()}function rt(c){var g=this;c=c||{};var w={url:"face_detection_short.binarypb"},T={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new et({locateFile:c.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:w,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(E){var x,_,D,P,M;return U(function(H){switch(H.g){case 1:x=o(E==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),_=x.next();case 2:if(_.done){H.g=4;break}return D=_.value,P="third_party/mediapipe/modules/face_detection/"+D,F(H,dt(g.g,D),5);case 5:M=H.h,g.g.overrideFile(P,M),_=x.next(),H.g=2;break;case 4:return w.url=E==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",T.graphOptionXref.calculatorName=E==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",H.return(!0)}})}},minDetectionConfidence:T}})}(e=et.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},e.reset=function(){var c=this;return U(function(g){c.i&&(c.i.reset(),c.o={},c.u={}),g.g=0})},e.setOptions=function(c,g){var w=this;if(g=g||this.g.options){for(var T=[],E=[],x={},_=o(Object.keys(c)),D=_.next();!D.done;x={R:x.R,S:x.S},D=_.next()){var P=D.value;P in this.j&&this.j[P]===c[P]||(this.j[P]=c[P],(D=g[P])!==void 0&&(D.onChange&&(x.R=D.onChange,x.S=c[P],T.push(function(M){return function(){return U(function(H){if(H.g==1)return F(H,M.R(M.S),2);H.h===!0&&(w.s=!0),H.g=0})}}(x))),D.graphOptionXref&&(P={valueNumber:D.type===1?c[P]:0,valueBoolean:D.type===0&&c[P],valueString:D.type===2?c[P]:""},D=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),D.graphOptionXref),P),E.push(D))))}T.length===0&&E.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(E),this.A=(this.A===void 0?[]:this.A).concat(T))}},e.initialize=function(){var c=this;return U(function(g){return g.g==1?F(g,ot(c),2):g.g!=3?F(g,function(w){var T,E,x,_,D,P,M,H;return U(function(Y){if(Y.g==1)return w.g.graph&&w.g.graph.url&&w.Y===w.g.graph.url?Y.return():(w.s=!0,w.g.graph&&w.g.graph.url?(w.Y=w.g.graph.url,F(Y,dt(w,w.g.graph.url),3)):void(Y.g=2));for(Y.g!=2&&(T=Y.h,w.i.loadGraph(T)),E=o(Object.keys(w.C)),x=E.next();!x.done;x=E.next())_=x.value,w.i.overrideFile(_,w.C[_]);if(w.C={},w.g.listeners)for(D=o(w.g.listeners),P=D.next();!P.done;P=D.next())M=P.value,ct(w,M);H=w.j,w.j={},w.setOptions(H),Y.g=0})}(c),3):F(g,function(w){var T,E,x,_,D,P;return U(function(M){switch(M.g){case 1:if(!w.s)return M.return();if(!w.A){M.g=2;break}T=o(w.A),E=T.next();case 3:if(E.done){M.g=5;break}return F(M,(0,E.value)(),4);case 4:E=T.next(),M.g=3;break;case 5:w.A=void 0;case 2:if(w.B){for(x=new w.h.GraphOptionChangeRequestList,_=o(w.B),D=_.next();!D.done;D=_.next())P=D.value,x.push_back(P);w.i.changeOptions(x),x.delete(),w.B=void 0}w.s=!1,M.g=0}})}(c),0)})},e.overrideFile=function(c,g){this.i?this.i.overrideFile(c,g):this.C[c]=g},e.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},e.send=function(c,g){var w,T,E,x,_,D,P,M,H,Y=this;return U(function(J){switch(J.g){case 1:return Y.g.inputs?(w=1e3*(g??performance.now()),F(J,Y.D,2)):J.return();case 2:return F(J,Y.initialize(),3);case 3:for(T=new Y.h.PacketDataList,E=o(Object.keys(c)),x=E.next();!x.done;x=E.next())if(_=x.value,D=Y.g.inputs[_]){t:{var Q=c[_];switch(D.type){case"video":var ut=Y.o[D.stream];if(ut||(ut=new k(Y.h,Y.G),Y.o[D.stream]=ut),ut.l===0&&(ut.l=ut.h.createTexture()),typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)var lt=Q.videoWidth,Tt=Q.videoHeight;else typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(lt=Q.naturalWidth,Tt=Q.naturalHeight):(lt=Q.width,Tt=Q.height);Tt={glName:ut.l,width:lt,height:Tt},(lt=ut.g).canvas.width=Tt.width,lt.canvas.height=Tt.height,lt.activeTexture(lt.TEXTURE0),ut.h.bindTexture2d(ut.l),lt.texImage2D(lt.TEXTURE_2D,0,lt.RGBA,lt.RGBA,lt.UNSIGNED_BYTE,Q),ut.h.bindTexture2d(0),ut=Tt;break t;case"detections":for((ut=Y.o[D.stream])||(ut=new V(Y.h),Y.o[D.stream]=ut),ut.data||(ut.data=new ut.g.DetectionListData),ut.data.reset(Q.length),Tt=0;Tt<Q.length;++Tt){lt=Q[Tt];var kt=ut.data,Zt=kt.setBoundingBox,me=Tt,re=lt.boundingBox,bt=new wr;if(Ft(bt,1,re.xCenter),Ft(bt,2,re.yCenter),Ft(bt,3,re.height),Ft(bt,4,re.width),Ft(bt,5,re.rotation),Ft(bt,6,re.rectId),re=kn(bt,vr),Zt.call(kt,me,re),lt.landmarks)for(kt=0;kt<lt.landmarks.length;++kt){var Ht=!!(bt=lt.landmarks[kt]).visibility;me=(Zt=ut.data).addNormalizedLandmark,re=Tt,bt=Object.assign(Object.assign({},bt),{visibility:Ht?bt.visibility:0}),Ft(Ht=new rn,1,bt.x),Ft(Ht,2,bt.y),Ft(Ht,3,bt.z),bt.visibility&&Ft(Ht,4,bt.visibility),bt=kn(Ht,es),me.call(Zt,re,bt)}if(lt.V)for(kt=0;kt<lt.V.length;++kt)me=(Zt=ut.data).addClassification,re=Tt,bt=lt.V[kt],Ft(Ht=new ze,2,bt.ga),bt.index&&Ft(Ht,1,bt.index),bt.label&&Ft(Ht,3,bt.label),bt.displayName&&Ft(Ht,4,bt.displayName),bt=kn(Ht,ts),me.call(Zt,re,bt)}ut=ut.data;break t;default:ut={}}}switch(P=ut,M=D.stream,D.type){case"video":T.pushTexture2d(Object.assign(Object.assign({},P),{stream:M,timestamp:w}));break;case"detections":(H=P).stream=M,H.timestamp=w,T.pushDetectionList(H);break;default:throw Error("Unknown input config type: '"+D.type+"'")}}return Y.i.send(T),F(J,Y.D,4);case 4:T.delete(),J.g=0}})},e.onResults=function(c,g){this.listeners[g||"$"]=c},q("Solution",et),q("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(e=rt.prototype).close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(c){this.g.onResults(c)},e.initialize=function(){var c=this;return U(function(g){return F(g,c.g.initialize(),0)})},e.reset=function(){this.g.reset()},e.send=function(c){var g=this;return U(function(w){return F(w,g.g.send(c),0)})},e.setOptions=function(c){this.g.setOptions(c)},q("FaceDetection",rt),q("FACEDETECTION_LIPS",Tr),q("FACEDETECTION_LEFT_EYE",Nr),q("FACEDETECTION_LEFT_EYEBROW",Sr),q("FACEDETECTION_RIGHT_EYE",xr),q("FACEDETECTION_RIGHT_EYEBROW",Er),q("FACEDETECTION_FACE_OVAL",rs),q("FACEDETECTION_CONTOURS",ss),q("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),q("VERSION","0.4.1646425229")}).call(ta);var pn=function(){return pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},pn.apply(this,arguments)};function Ye(e,t,n,r){return new(n||(n=Promise))(function(s,a){function o(l){try{u(r.next(l))}catch(f){a(f)}}function i(l){try{u(r.throw(l))}catch(f){a(f)}}function u(l){var f;l.done?s(l.value):(f=l.value,f instanceof n?f:new n(function(p){p(f)})).then(o,i)}u((r=r.apply(e,t||[])).next())})}function Je(e,t){var n,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(u){return function(l){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,r=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){o=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){o.label=f[1];break}if(f[0]===6&&o.label<s[1]){o.label=s[1],s=f;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(f);break}s[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(e,o)}catch(p){f=[6,p],r=0}finally{n=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,l])}}}var D1=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],ea={modelType:"short",runtime:"mediapipe",maxFaces:1},F5=function(){function e(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new D5.FaceDetection({locateFile:function(r,s){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(r){if(n.height=r.image.height,n.width=r.image.width,n.faces=[],r.detections!==null)for(var s=0,a=r.detections;s<a.length;s++){var o=a[s];n.faces.push(n.normalizedToAbsolute(o.landmarks,{xMin:u=(i=o.boundingBox).xCenter-i.width/2,xMax:u+i.width,yMin:l=i.yCenter-i.height/2,yMax:l+i.height,width:i.width,height:i.height}))}var i,u,l})}return e.prototype.normalizedToAbsolute=function(t,n){var r=this;return{keypoints:t.map(function(s,a){return{x:s.x*r.width,y:s.y*r.height,name:D1[a]}}),box:{xMin:n.xMin*this.width,yMin:n.yMin*this.height,xMax:n.xMax*this.width,yMax:n.yMax*this.height,width:n.width*this.width,height:n.height*this.height}}},e.prototype.estimateFaces=function(t,n){return Ye(this,void 0,void 0,function(){var r,s;return Je(this,function(a){switch(a.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof At?(s=ImageData.bind,[4,Mi(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,a.label=3;case 3:return t=r,[4,this.faceDetectorSolution.send({image:t})];case 4:return a.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceDetectorSolution.close()},e.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},e}();function C5(e){return Ye(this,void 0,void 0,function(){var t,n;return Je(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return pn({},ea);var a=pn({},s);return a.runtime="mediapipe",a.modelType==null&&(a.modelType=ea.modelType),a.maxFaces==null&&(a.maxFaces=ea.maxFaces),a}(e),[4,(n=new F5(t)).initialize()];case 1:return r.sent(),[2,n]}})})}function F1(e){return e instanceof At?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function C1(e){return e instanceof At?e:Ui(e)}function na(e,t){A(e.width!==0,function(){return t+" width cannot be 0."}),A(e.height!==0,function(){return t+" height cannot be 0."})}function L5(e,t,n){var r=t.outputTensorSize,s=t.keepAspectRatio,a=t.borderMode,o=t.outputTensorFloatRange,i=F1(e),u=function(b,v){return v?{xCenter:v.xCenter*b.width,yCenter:v.yCenter*b.height,width:v.width*b.width,height:v.height*b.height,rotation:v.rotation}:{xCenter:.5*b.width,yCenter:.5*b.height,width:b.width,height:b.height,rotation:0}}(i,n),l=function(b,v,S){if(S===void 0&&(S=!1),!S)return{top:0,left:0,right:0,bottom:0};var $=v.height,I=v.width;na(v,"targetSize"),na(b,"roi");var F,G,j=$/I,B=b.height/b.width,z=0,U=0;return j>B?(F=b.width,G=b.width*j,U=(1-B/j)/2):(F=b.height/j,G=b.height,z=(1-j/B)/2),b.width=F,b.height=G,{top:U,left:z,right:z,bottom:U}}(u,r,s),f=function(b,v,S,$){var I=b.width,F=b.height,G=$?-1:1,j=Math.cos(b.rotation),B=Math.sin(b.rotation),z=b.xCenter,U=b.yCenter,Z=1/v,nt=1/S,q=new Array(16);return q[0]=I*j*G*Z,q[1]=-F*B*Z,q[2]=0,q[3]=(-.5*I*j*G+.5*F*B+z)*Z,q[4]=I*B*G*nt,q[5]=F*j*nt,q[6]=0,q[7]=(-.5*F*j-.5*I*B*G+U)*nt,q[8]=0,q[9]=0,q[10]=I*Z,q[11]=0,q[12]=0,q[13]=0,q[14]=0,q[15]=1,function(tt){if(tt.length!==16)throw new Error("Array length must be 16 but got "+tt.length);return[[tt[0],tt[1],tt[2],tt[3]],[tt[4],tt[5],tt[6],tt[7]],[tt[8],tt[9],tt[10],tt[11]],[tt[12],tt[13],tt[14],tt[15]]]}(q)}(u,i.width,i.height,!1),p=Lt(function(){var b=C1(e),v=ln(function(I,F,G){return na(G,"inputResolution"),[1/G.width*I[0][0]*F.width,1/G.height*I[0][1]*F.width,I[0][3]*F.width,1/G.width*I[1][0]*F.height,1/G.height*I[1][1]*F.height,I[1][3]*F.height,0,0]}(f,i,r),[1,8]),S=a==="zero"?"constant":"nearest",$=or.transform(xe(It(b,"float32")),v,"bilinear",S,0,[r.height,r.width]);return o!=null?function(I,F){var G=function(j,B,z,U){var Z=(U-z)/255;return{scale:Z,offset:z-0*Z}}(0,0,F[0],F[1]);return Lt(function(){return xt(st(I,G.scale),G.offset)})}($,o):$});return{imageTensor:p,padding:l,transformationMatrix:f}}function qo(e){e.reduceBoxesInLowestLayer==null&&(e.reduceBoxesInLowestLayer=!1),e.interpolatedScaleAspectRatio==null&&(e.interpolatedScaleAspectRatio=1),e.fixedAnchorSize==null&&(e.fixedAnchorSize=!1);for(var t=[],n=0;n<e.numLayers;){for(var r=[],s=[],a=[],o=[],i=n;i<e.strides.length&&e.strides[i]===e.strides[n];){var u=Xo(e.minScale,e.maxScale,i,e.strides.length);if(i===0&&e.reduceBoxesInLowestLayer)a.push(1),a.push(2),a.push(.5),o.push(.1),o.push(u),o.push(u);else{for(var l=0;l<e.aspectRatios.length;++l)a.push(e.aspectRatios[l]),o.push(u);if(e.interpolatedScaleAspectRatio>0){var f=i===e.strides.length-1?1:Xo(e.minScale,e.maxScale,i+1,e.strides.length);o.push(Math.sqrt(u*f)),a.push(e.interpolatedScaleAspectRatio)}}i++}for(var p=0;p<a.length;++p){var b=Math.sqrt(a[p]);r.push(o[p]/b),s.push(o[p]*b)}var v=0,S=0;if(e.featureMapHeight.length>0)v=e.featureMapHeight[n],S=e.featureMapWidth[n];else{var $=e.strides[n];v=Math.ceil(e.inputSizeHeight/$),S=Math.ceil(e.inputSizeWidth/$)}for(var I=0;I<v;++I)for(var F=0;F<S;++F)for(var G=0;G<r.length;++G){var j={xCenter:(F+e.anchorOffsetX)/S,yCenter:(I+e.anchorOffsetY)/v,width:0,height:0};e.fixedAnchorSize?(j.width=1,j.height=1):(j.width=s[G],j.height=r[G]),t.push(j)}n=i}return t}function Xo(e,t,n,r){return r===1?.5*(e+t):e+(t-e)*n/(r-1)}function Yo(e,t){var n=t[0],r=t[1];return[n*e[0]+r*e[1]+e[3],n*e[4]+r*e[5]+e[7]]}function R5(e,t,n,r){return Ye(this,void 0,void 0,function(){var s,a,o,i,u;return Je(this,function(l){switch(l.label){case 0:return e.sort(function(f,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,f.score)}),s=ln(e.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),a=Yt(e.map(function(f){return f.score[0]})),[4,or.nonMaxSuppressionAsync(s,a,t,n)];case 1:return[4,(o=l.sent()).array()];case 2:return i=l.sent(),u=e.filter(function(f,p){return i.indexOf(p)>-1}),Ce([s,a,o]),[2,u]}})})}function P5(e,t,n){return Ye(this,void 0,void 0,function(){var r,s,a,o,i;return Je(this,function(u){switch(u.label){case 0:return r=e[0],s=e[1],a=function(l,f,p){return Lt(function(){var b,v,S,$;p.reverseOutputOrder?(v=Bt(ht(l,[0,p.boxCoordOffset+0],[-1,1])),b=Bt(ht(l,[0,p.boxCoordOffset+1],[-1,1])),$=Bt(ht(l,[0,p.boxCoordOffset+2],[-1,1])),S=Bt(ht(l,[0,p.boxCoordOffset+3],[-1,1]))):(b=Bt(ht(l,[0,p.boxCoordOffset+0],[-1,1])),v=Bt(ht(l,[0,p.boxCoordOffset+1],[-1,1])),S=Bt(ht(l,[0,p.boxCoordOffset+2],[-1,1])),$=Bt(ht(l,[0,p.boxCoordOffset+3],[-1,1]))),v=xt(st(Nt(v,p.xScale),f.w),f.x),b=xt(st(Nt(b,p.yScale),f.h),f.y),p.applyExponentialOnBoxSize?(S=st(Ge(Nt(S,p.hScale)),f.h),$=st(Ge(Nt($,p.wScale)),f.w)):(S=st(Nt(S,p.hScale),f.h),$=st(Nt($,p.wScale),f.h));var I=mt(b,Nt(S,2)),F=mt(v,Nt($,2)),G=xt(b,Nt(S,2)),j=xt(v,Nt($,2)),B=Ut([W(I,[p.numBoxes,1]),W(F,[p.numBoxes,1]),W(G,[p.numBoxes,1]),W(j,[p.numBoxes,1])],1);if(p.numKeypoints)for(var z=0;z<p.numKeypoints;++z){var U=p.keypointCoordOffset+z*p.numValuesPerKeypoint,Z=void 0,nt=void 0;p.reverseOutputOrder?(Z=Bt(ht(l,[0,U],[-1,1])),nt=Bt(ht(l,[0,U+1],[-1,1]))):(nt=Bt(ht(l,[0,U],[-1,1])),Z=Bt(ht(l,[0,U+1],[-1,1])));var q=xt(st(Nt(Z,p.xScale),f.w),f.x),tt=xt(st(Nt(nt,p.yScale),f.h),f.y);B=Ut([B,W(q,[p.numBoxes,1]),W(tt,[p.numBoxes,1])],1)}return B})}(s,t,n),o=Lt(function(){var l=r;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(l=qi(r,-n.scoreClippingThresh,n.scoreClippingThresh)),l=Dn(l)):l}),[4,B5(a,o,n)];case 1:return i=u.sent(),Ce([a,o]),[2,i]}})})}function B5(e,t,n){return Ye(this,void 0,void 0,function(){var r,s,a,o,i,u,l,f,p,b,v,S;return Je(this,function($){switch($.label){case 0:return r=[],[4,e.data()];case 1:return s=$.sent(),[4,t.data()];case 2:for(a=$.sent(),o=0;o<n.numBoxes;++o)if(!(n.minScoreThresh!=null&&a[o]<n.minScoreThresh||(i=o*n.numCoords,u=j5(s[i+0],s[i+1],s[i+2],s[i+3],a[o],n.flipVertically,o),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(n.numKeypoints>0)for((f=u.locationData).relativeKeypoints=[],p=n.numKeypoints*n.numValuesPerKeypoint,b=0;b<p;b+=n.numValuesPerKeypoint)v=i+n.keypointCoordOffset+b,S={x:s[v+0],y:n.flipVertically?1-s[v+1]:s[v+1]},f.relativeKeypoints.push(S);r.push(u)}return[2,r]}})})}function j5(e,t,n,r,s,a,o){return{score:[s],ind:o,locationData:{relativeBoundingBox:{xMin:t,yMin:a?1-n:e,xMax:r,yMax:a?1-e:n,width:r-t,height:n-e}}}}var Ss,z5={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},V5={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},ra={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},M5={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},U5={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},K5={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},W5={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},H5=function(){function e(t,n,r){this.detectorModel=n,this.maxFaces=r,t==="full"?(this.imageToTensorConfig=W5,this.tensorsToDetectionConfig=U5,this.anchors=qo(V5)):(this.imageToTensorConfig=K5,this.tensorsToDetectionConfig=M5,this.anchors=qo(z5));var s=Yt(this.anchors.map(function(u){return u.width})),a=Yt(this.anchors.map(function(u){return u.height})),o=Yt(this.anchors.map(function(u){return u.xCenter})),i=Yt(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:o,y:i,w:s,h:a}}return e.prototype.dispose=function(){this.detectorModel.dispose(),Ce([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},e.prototype.reset=function(){},e.prototype.detectFaces=function(t,n){return n===void 0&&(n=!1),Ye(this,void 0,void 0,function(){var r,s,a,o,i,u,l,f,p,b,v;return Je(this,function(S){switch(S.label){case 0:return t==null?(this.reset(),[2,[]]):(r=Lt(function(){var $=It(C1(t),"float32");return n&&($=Bt(or.flipLeftRight(xe($,0)),[0])),$}),s=L5(r,this.imageToTensorConfig),a=s.imageTensor,o=s.transformationMatrix,i=this.detectorModel.execute(a,"Identity:0"),u=function($){return Lt(function(){var I=function(j){return Lt(function(){return[ht(j,[0,0,0],[1,-1,1]),ht(j,[0,0,1],[1,-1,-1])]})}($),F=I[0],G=I[1];return{boxes:Bt(G),logits:Bt(F)}})}(i),l=u.boxes,[4,P5([f=u.logits,l],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=S.sent()).length===0?(Ce([r,a,i,f,l]),[2,p]):[4,R5(p,this.maxFaces,.3)];case 2:return b=S.sent(),v=function($,I){$===void 0&&($=[]);var F,G=(F=I,[].concat.apply([],F));return $.forEach(function(j){var B=j.locationData;B.relativeKeypoints.forEach(function(tt){var it=Yo(G,[tt.x,tt.y]),yt=it[0],at=it[1];tt.x=yt,tt.y=at});var z=B.relativeBoundingBox,U=Number.MAX_VALUE,Z=Number.MAX_VALUE,nt=Number.MIN_VALUE,q=Number.MIN_VALUE;[[z.xMin,z.yMin],[z.xMin+z.width,z.yMin],[z.xMin+z.width,z.yMin+z.height],[z.xMin,z.yMin+z.height]].forEach(function(tt){var it=Yo(G,tt),yt=it[0],at=it[1];U=Math.min(U,yt),nt=Math.max(nt,yt),Z=Math.min(Z,at),q=Math.max(q,at)}),B.relativeBoundingBox={xMin:U,xMax:nt,yMin:Z,yMax:q,width:nt-U,height:q-Z}}),$}(b,o),Ce([r,a,i,f,l]),[2,v]}})})},e.prototype.estimateFaces=function(t,n){return Ye(this,void 0,void 0,function(){var r,s;return Je(this,function(a){return r=F1(t),s=!!n&&n.flipHorizontal,[2,this.detectFaces(t,s).then(function(o){return o.map(function(i){for(var u=i.locationData.relativeKeypoints.map(function(S,$){return pn(pn({},S),{x:S.x*r.width,y:S.y*r.height,name:D1[$]})}),l=i.locationData.relativeBoundingBox,f=0,p=["width","xMax","xMin"];f<p.length;f++)l[p[f]]*=r.width;for(var b=0,v=["height","yMax","yMin"];b<v.length;b++)l[v[b]]*=r.height;return{keypoints:u,box:l}})})]})})},e}();function G5(e){return Ye(this,void 0,void 0,function(){var t,n,r;return Je(this,function(s){switch(s.label){case 0:return t=function(a){if(a==null)return pn({},ra);var o=pn({},a);return o.modelType==null&&(o.modelType=ra.modelType),o.maxFaces==null&&(o.maxFaces=ra.maxFaces),o.detectorModelUrl==null&&(o.modelType==="full"?o.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":o.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),o}(e),n=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,A1(t.detectorModelUrl,{fromTFHub:n})];case 1:return r=s.sent(),[2,new H5(t.modelType,r,t.maxFaces)]}})})}function q5(e,t){return Ye(this,void 0,void 0,function(){var n,r;return Je(this,function(s){if(e===Ss.MediaPipeFaceDetector){if(r=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,G5(n)];if(n.runtime==="mediapipe")return[2,C5(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(e+" is not a supported model name.")})})}function sa(e){return e.width*e.height}function Jo(e){var t=e.xCenter-e.width/2,n=t+e.width,r=e.yCenter-e.height/2;return{xMin:t,xMax:n,yMin:r,yMax:r+e.height,width:e.width,height:e.height}}function X5(e,t){var n=Jo(e),r=Jo(t);if(!function(o,i){return!(o.xMax<i.xMin||i.xMax<o.xMin||o.yMax<i.yMin||i.yMax<o.yMin)}(n,r))return 0;var s=sa(function(o,i){var u=Math.max(o.xMin,i.xMin),l=Math.min(o.xMax,i.xMax),f=Math.max(o.yMin,i.yMin),p=Math.min(o.yMax,i.yMax);return{xMin:u,xMax:l,yMin:f,yMax:p,width:Math.max(l-u,0),height:Math.max(p-f,0)}}(n,r)),a=sa(n)+sa(r)-s;return a>0?s/a:0}function Y5(e,t,n,r){var s=e.width,a=e.height,o=r?-1:1,i=Math.cos(e.rotation),u=Math.sin(e.rotation),l=e.xCenter,f=e.yCenter,p=1/t,b=1/n,v=new Array(16);return v[0]=s*i*o*p,v[1]=-a*u*p,v[2]=0,v[3]=(-.5*s*i*o+.5*a*u+l)*p,v[4]=s*u*o*b,v[5]=a*i*b,v[6]=0,v[7]=(-.5*a*i-.5*s*u*o+f)*b,v[8]=0,v[9]=0,v[10]=s*p,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,function(S){if(S.length!==16)throw new Error("Array length must be 16 but got "+S.length);return[[S[0],S[1],S[2],S[3]],[S[4],S[5],S[6],S[7]],[S[8],S[9],S[10],S[11]],[S[12],S[13],S[14],S[15]]]}(v)}function L1(e){return e instanceof At?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function R1(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function P1(e){return e instanceof At?e:Ui(e)}function aa(e,t){A(e.width!==0,function(){return t+" width cannot be 0."}),A(e.height!==0,function(){return t+" height cannot be 0."})}function J5(e,t){var n=function(r,s,a,o){var i=s-r,u=o-a;if(i===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var l=u/i;return{scale:l,offset:a-r*l}}(0,255,t[0],t[1]);return Lt(function(){return xt(st(e,n.scale),n.offset)})}function Z5(e,t,n){var r=t.outputTensorSize,s=t.keepAspectRatio,a=t.borderMode,o=t.outputTensorFloatRange,i=L1(e),u=function(b,v){return v?{xCenter:v.xCenter*b.width,yCenter:v.yCenter*b.height,width:v.width*b.width,height:v.height*b.height,rotation:v.rotation}:{xCenter:.5*b.width,yCenter:.5*b.height,width:b.width,height:b.height,rotation:0}}(i,n),l=function(b,v,S){if(S===void 0&&(S=!1),!S)return{top:0,left:0,right:0,bottom:0};var $=v.height,I=v.width;aa(v,"targetSize"),aa(b,"roi");var F,G,j=$/I,B=b.height/b.width,z=0,U=0;return j>B?(F=b.width,G=b.width*j,U=(1-B/j)/2):(F=b.height/j,G=b.height,z=(1-j/B)/2),b.width=F,b.height=G,{top:U,left:z,right:z,bottom:U}}(u,r,s),f=Y5(u,i.width,i.height,!1),p=Lt(function(){var b=P1(e),v=ln(function(I,F,G){return aa(G,"inputResolution"),[1/G.width*I[0][0]*F.width,1/G.height*I[0][1]*F.width,I[0][3]*F.width,1/G.width*I[1][0]*F.height,1/G.height*I[1][1]*F.height,I[1][3]*F.height,0,0]}(f,i,r),[1,8]),S=a==="zero"?"constant":"nearest",$=or.transform(xe(It(b,"float32")),v,"bilinear",S,0,[r.height,r.width]);return o!=null?J5($,o):$});return{imageTensor:p,padding:l,transformationMatrix:f}}function Zo(e){return{xCenter:e.xMin+e.width/2,yCenter:e.yMin+e.height/2,width:e.width,height:e.height}}function Qo(e){var t=e.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var n=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,a=Number.MIN_VALUE;return t.forEach(function(o){n=Math.min(n,o.x),s=Math.max(s,o.x),r=Math.min(r,o.y),a=Math.max(a,o.y)}),{xCenter:(n+s)/2,yCenter:(r+a)/2,width:s-n,height:a-r}}function ti(e,t,n,r,s){var a=n==="rect"?function(o,i,u){var l,f=o.locationData;if(i==="boundingbox")l=Zo(f.boundingBox);else{l=Qo(f);var p=u.width,b=u.height;l.xCenter=Math.round(l.xCenter*p),l.yCenter=Math.round(l.yCenter*b),l.width=Math.round(l.width*p),l.height=Math.round(l.height*b)}return l}(e,t,r):function(o,i){var u=o.locationData;return i==="boundingbox"?Zo(u.relativeBoundingBox):Qo(u)}(e,t);return s&&(a.rotation=function(o,i,u){var l,f=o.locationData,p=u.rotationVectorStartKeypointIndex,b=u.rotationVectorEndKeypointIndex;l=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var v=f.relativeKeypoints[p].x*i.width,S=f.relativeKeypoints[p].y*i.height,$=f.relativeKeypoints[b].x*i.width,I=f.relativeKeypoints[b].y*i.height;return R1(l-Math.atan2(-(I-S),$-v))}(e,r,s)),a}function Q5(e,t,n){for(var r=0;r<t.length;++r){var s=t[r],a=n[e[r]];a.x=s.x,a.y=s.y}}function tg(e,t,n,r){if(typeof t=="string"){if(t==="copy")for(var s=0;s<n.length;++s)r[e[s]].z=n[s].z}else{var a=function(o,i){for(var u=0,l=0;l<i.length;++l)u+=o[i[l]].z;return u/i.length}(r,t);for(s=0;s<e.length;++s)r[e[s]].z=a}}function eg(e,t){for(var n=function(i){var u=[].concat.apply([],i.map(function(v){return v.indexesMapping}));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var l=u[0],f=u[0],p=new Set(u);p.forEach(function(v){l=Math.min(l,v),f=Math.max(f,v)});var b=p.size;if(l!==0)throw new Error("Indexes are expected to start with 0 instead of "+l);if(f+1!==b)throw new Error("Indexes should have no gaps but "+(f-b+1)+" indexes are missing");return b}(t),r=new Array(n).fill(null).map(Object),s=0;s<e.length;++s){var a=e[s],o=t[s];if(a.length!==o.indexesMapping.length)throw new Error("There are "+a.length+" refinement landmarks while mapping has "+o.indexesMapping.length);Q5(o.indexesMapping,a,r),tg(o.indexesMapping,o.zRefinement,a,r)}return r}function ng(e,t){return e.map(function(n){var r=Ee(Ee({},n),{x:n.x*t.width,y:n.y*t.height});return n.z!=null&&(r.z=n.z*t.width),r})}function rg(e,t){return e==="none"?t:function(n){return 1/(1+Math.exp(-n))}(t)}function An(e,t,n,r){return Ue(this,void 0,void 0,function(){var s,a,o,i,u,l,f,p;return Ke(this,function(b){switch(b.label){case 0:return n=n||t.flipHorizontally||!1,r=r||t.flipVertically||!1,s=e.size,a=s/t.numLandmarks,[4,e.data()];case 1:for(o=b.sent(),i=[],u=0;u<t.numLandmarks;++u)l=u*a,(p={x:0,y:0}).x=n?t.inputImageWidth-o[l]:o[l],a>1&&(p.y=r?t.inputImageHeight-o[l+1]:o[l+1]),a>2&&(p.z=o[l+2]),a>3&&(p.score=rg(t.visibilityActivation,o[l+3])),i.push(p);for(f=0;f<i.length;++f)(p=i[f]).x=p.x/t.inputImageWidth,p.y=p.y/t.inputImageHeight,p.z=p.z/t.inputImageWidth/(t.normalizeZ||1);return[2,i]}})})}function ei(e,t,n){var r=e.width,s=e.height,a=e.rotation;if(n.rotation==null&&n.rotationDegree==null||(a=function(f,p){return p.rotation!=null?f+=p.rotation:p.rotationDegree!=null&&(f+=Math.PI*p.rotationDegree/180),R1(f)}(a,n)),a===0)e.xCenter=e.xCenter+r*n.shiftX,e.yCenter=e.yCenter+s*n.shiftY;else{var o=(t.width*r*n.shiftX*Math.cos(a)-t.height*s*n.shiftY*Math.sin(a))/t.width,i=(t.width*r*n.shiftX*Math.sin(a)+t.height*s*n.shiftY*Math.cos(a))/t.height;e.xCenter=e.xCenter+o,e.yCenter=e.yCenter+i}if(n.squareLong){var u=Math.max(r*t.width,s*t.height);r=u/t.width,s=u/t.height}else if(n.squareShort){var l=Math.min(r*t.width,s*t.height);r=l/t.width,s=l/t.height}return e.width=r*n.scaleX,e.height=s*n.scaleY,e}(Ss||(Ss={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var oa={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},ia={flipHorizontal:!1,staticImageMode:!1},ni={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5,squareLong:!0},sg={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1],borderMode:"replicate"},ri={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},ag={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},si={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},ai={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},og={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},ig={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},ug={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},cg={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},lg={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},hg={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},Bn,fg=function(){function e(t,n,r,s){this.detector=t,this.landmarkModel=n,this.maxFaces=r,this.withAttention=s,this.prevFaceRectsFromLandmarks=null}return e.prototype.estimateFaces=function(t,n){return Ue(this,void 0,void 0,function(){var r,s,a,o,i,u,l,f,p,b,v,S,$,I=this;return Ke(this,function(F){switch(F.label){case 0:return r=function(B){if(B==null)return Ee({},ia);var z=Ee({},B);return z.flipHorizontal==null&&(z.flipHorizontal=ia.flipHorizontal),z.staticImageMode==null&&(z.staticImageMode=ia.staticImageMode),z}(n),t==null?(this.reset(),[2,[]]):(s=L1(t),a=Lt(function(){var B=It(P1(t),"float32");return r.flipHorizontal&&(B=Bt(or.flipLeftRight(xe(B,0)),[0])),B}),o=this.prevFaceRectsFromLandmarks,r.staticImageMode||o==null||o.length<this.maxFaces?[4,this.detector.detectFaces(a,!1)]:[3,2]);case 1:return(u=F.sent()).length===0?(this.reset(),a.dispose(),[2,[]]):(i=u.map(function(B){return I.faceDetectionFrontDetectionToRoi(B,s)}),[3,3]);case 2:i=[],F.label=3;case 3:return G=.5,j=[],[i,o||[]].forEach(function(B){return B.forEach(function(z){(j=j.filter(function(U){return X5(z,U)<=G})).push(z)})}),l=j,[4,Promise.all(l.map(function(B){return I.faceLandmark(B,a)}))];case 4:for(f=F.sent(),p=[],this.prevFaceRectsFromLandmarks=[],b=0;b<f.length;++b)(v=f[b])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(v,s)),(S=ng(v,s))!=null&&S.forEach(function(B,z){var U=O1.get(z);U!=null&&(B.name=U)}),$=Ka(S),p.push({keypoints:S,box:$.locationData.relativeBoundingBox}));return a.dispose(),[2,p]}var G,j})})},e.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},e.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},e.prototype.faceDetectionFrontDetectionToRoi=function(t,n){return ei(ti(t,"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),n,ni)},e.prototype.faceLandmark=function(t,n){return Ue(this,void 0,void 0,function(){var r,s,a,o,i,u,l;return Ke(this,function(f){switch(f.label){case 0:return r=Z5(n,sg,t).imageTensor,s=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),a=this.landmarkModel.execute(r,s),o=a[0],i=a.slice(1),[4,o.data()];case 1:return f.sent()[0]<.5?(Ce(a),Ce(r),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(i)]:[3,3];case 2:return u=f.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(i)];case 4:u=f.sent(),f.label=5;case 5:return l=function(p,b,v){v===void 0&&(v={ignoreRotation:!1});for(var S=[],$=0,I=p;$<I.length;$++){var F=I[$],G=F.x-.5,j=F.y-.5,B=v.ignoreRotation?0:b.rotation,z=Math.cos(B)*G-Math.sin(B)*j,U=Math.sin(B)*G+Math.cos(B)*j;z=z*b.width+b.xCenter,U=U*b.height+b.yCenter;var Z=F.z*b.width,nt=Ee({},F);nt.x=z,nt.y=U,nt.z=Z,S.push(nt)}return S}(u,t),Ce(a),Ce(r),[2,l]}})})},e.prototype.tensorsToFaceLandmarks=function(t){return Ue(this,void 0,void 0,function(){return Ke(this,function(n){return[2,An(t[0],ri)]})})},e.prototype.tensorsToFaceLandmarksWithAttention=function(t){return Ue(this,void 0,void 0,function(){var n,r,s,a,o,i;return Ke(this,function(u){switch(u.label){case 0:return[4,An(t[0],ri)];case 1:return n=u.sent(),[4,An(t[1],ag)];case 2:return r=u.sent(),[4,An(t[3],si)];case 3:return s=u.sent(),[4,An(t[5],si)];case 4:return a=u.sent(),[4,An(t[4],ai)];case 5:return o=u.sent(),[4,An(t[2],ai)];case 6:return i=u.sent(),[2,eg([n,r,s,a,o,i],[og,ig,ug,cg,lg,hg])]}})})},e.prototype.faceLandmarksToRoi=function(t,n){return ei(ti(Ka(t),"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),n,ni)},e}();function pg(e){return Ue(this,void 0,void 0,function(){var t,n,r,s;return Ke(this,function(a){switch(a.label){case 0:return t=function(o){if(o==null)return Ee({},oa);var i=Ee({},o);return i.runtime="tfjs",i.maxFaces==null&&(i.maxFaces=oa.maxFaces),i.refineLandmarks==null&&(i.refineLandmarks=oa.refineLandmarks),i.landmarkModelUrl==null&&(i.landmarkModelUrl=i.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),i}(e),n=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,A1(t.landmarkModelUrl,{fromTFHub:n})];case 1:return r=a.sent(),[4,q5(Ss.MediaPipeFaceDetector,{modelType:"short",maxFaces:t.maxFaces,detectorModelUrl:t.detectorModelUrl,runtime:t.runtime})];case 2:return s=a.sent(),[2,new fg(s,r,t.maxFaces,t.refineLandmarks)]}})})}function dg(e,t){return Ue(this,void 0,void 0,function(){var n,r;return Ke(this,function(s){if(e===Bn.MediaPipeFaceMesh){if(r=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,pg(n)];if(n.runtime==="mediapipe")return[2,O5(n)];r=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(e+" is not a supported model name.")})})}(function(e){e.MediaPipeFaceMesh="MediaPipeFaceMesh"})(Bn||(Bn={}));var mg=Object.freeze({__proto__:null,getKeypointIndexByContour:function(e){if(e===Bn.MediaPipeFaceMesh)return I1;throw new Error("Model "+e+" is not supported.")},getAdjacentPairs:function(e){if(e===Bn.MediaPipeFaceMesh)return $5;throw new Error("Model "+e+" is not supported.")}});const gg=""+new URL("a-60999c42.jpg",import.meta.url).href,yg={class:"cc"},bg=j1({__name:"tensorflow",setup(e){const t=z1(),n=[127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255],r={lips:"#E0E0E0",leftEye:"#30FF30",leftEyebrow:"#30FF30",leftIris:"#30FF30",rightEye:"#FF3030",rightEyebrow:"#FF3030",rightIris:"#FF3030",faceOval:"#E0E0E0"};return V1(async()=>{const s=t.value.getContext("2d");function a(i,u){s.beginPath(),i.forEach((l,f)=>{f===0?s.moveTo(l.x,l.y):s.lineTo(l.x,l.y)}),u&&s.closePath(),s.stroke()}const o=new Image;o.src=gg,o.onload=async()=>{t.value.width=o.width,t.value.height=o.height,s.drawImage(o,0,0,o.width,o.height);const i=Bn.MediaPipeFaceMesh,l=await(await dg(i,{runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh"})).estimateFaces(o);l.forEach(p=>{s.beginPath(),s.strokeStyle="#f00",s.fillStyle="#f00",s.lineWidth=1,s.rect(p.box.xMin,p.box.yMin,p.box.width,p.box.height),s.stroke(),s.closePath(),p.keypoints.forEach(b=>{s.beginPath(),s.arc(b.x,b.y,3,0,2*Math.PI),s.fill()});for(let b=0;b<n.length/3;b++){const v=[n[b*3],n[b*3+1],n[b*3+2]].map(S=>p.keypoints[S]);a(v,!0)}});const f=mg.getKeypointIndexByContour(Bn.MediaPipeFaceMesh);for(const[p,b]of Object.entries(f)){s.strokeStyle=r[p],s.lineWidth=3;const v=b.map(S=>l[0].keypoints[S]);v.every(S=>S!=null)&&a(v,!0)}s.strokeStyle="#ff0",s.lineWidth=3}}),(s,a)=>(M1(),U1("div",yg,[K1("canvas",{ref_key:"canvas",ref:t,class:"absolute w-100% h-100%"},null,512)]))}});const Ng=W1(bg,[["__scopeId","data-v-7981364e"]]);export{Ng as default};
