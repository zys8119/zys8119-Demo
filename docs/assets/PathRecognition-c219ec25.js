var We=Object.defineProperty;var Ve=(d,v,y)=>v in d?We(d,v,{enumerable:!0,configurable:!0,writable:!0,value:y}):d[v]=y;var fe=(d,v,y)=>(Ve(d,typeof v!="symbol"?v+"":v,y),y);import{p as Be}from"./bj2-aa09fa81.js";import{p as qe,a as Ge,C as Ze,b as Je,c as Qe,u as Ke}from"./index-cf5ff360.js";import{d as ve,r as Dt,b as mt,p as $e,w as je,e as ti,m as Bt,y as ei,o as ii,c as ri,u as ni,_ as si}from"./index-b38e7a31.js";var qt={},ai={get exports(){return qt},set exports(d){qt=d}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(d){(function(v,y,H,T){var _=["","webkit","Moz","MS","ms","o"],Et=y.createElement("div"),yt="function",R=Math.round,z=Math.abs,j=Date.now;function M(t,e,i){return setTimeout(ct(t,i),e)}function W(t,e,i){return Array.isArray(t)?(x(t,i[e],i),!0):!1}function x(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==T)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function tt(t,e,i){var r="DEPRECATED METHOD: "+e+`
`+i+` AT 
`;return function(){var s=new Error("get-stack-trace"),h=s&&s.stack?s.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",p=v.console&&(v.console.warn||v.console.log);return p&&p.call(v.console,r,h),t.apply(this,arguments)}}var U;typeof Object.assign!="function"?U=function(e){if(e===T||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var s=arguments[r];if(s!==T&&s!==null)for(var h in s)s.hasOwnProperty(h)&&(i[h]=s[h])}return i}:U=Object.assign;var at=tt(function(e,i,r){for(var s=Object.keys(i),h=0;h<s.length;)(!r||r&&e[s[h]]===T)&&(e[s[h]]=i[s[h]]),h++;return e},"extend","Use `assign`."),Yt=tt(function(e,i){return at(e,i,!0)},"merge","Use `assign`.");function N(t,e,i){var r=e.prototype,s;s=t.prototype=Object.create(r),s.constructor=t,s._super=r,i&&U(s,i)}function ct(t,e){return function(){return t.apply(e,arguments)}}function V(t,e){return typeof t==yt?t.apply(e&&e[0]||T,e):t}function _t(t,e){return t===T?e:t}function D(t,e,i){x(ht(e),function(r){t.addEventListener(r,i,!1)})}function ot(t,e,i){x(ht(e),function(r){t.removeEventListener(r,i,!1)})}function b(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function J(t,e){return t.indexOf(e)>-1}function ht(t){return t.trim().split(/\s+/g)}function o(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var r=0;r<t.length;){if(i&&t[r][i]==e||!i&&t[r]===e)return r;r++}return-1}function n(t){return Array.prototype.slice.call(t,0)}function l(t,e,i){for(var r=[],s=[],h=0;h<t.length;){var p=e?t[h][e]:t[h];o(s,p)<0&&r.push(t[h]),s[h]=p,h++}return i&&(e?r=r.sort(function(w,C){return w[e]>C[e]}):r=r.sort()),r}function a(t,e){for(var i,r,s=e[0].toUpperCase()+e.slice(1),h=0;h<_.length;){if(i=_[h],r=i?i+s:e,r in t)return r;h++}return T}var c=1;function u(){return c++}function Y(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||v}var B=/mobile|tablet|ip(ad|hone|od)|android/i,et="ontouchstart"in v,f=a(v,"PointerEvent")!==T,It=et&&B.test(navigator.userAgent),m="touch",I="pen",A="mouse",X="kinect",g=25,P=1,rt=2,E=4,O=8,St=1,ut=2,ft=4,vt=8,pt=16,q=ut|ft,nt=vt|pt,Gt=q|nt,Zt=["x","y"],Pt=["clientX","clientY"];function k(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){V(t.options.enable,[t])&&i.handler(r)},this.init()}k.prototype={handler:function(){},init:function(){this.evEl&&D(this.element,this.evEl,this.domHandler),this.evTarget&&D(this.target,this.evTarget,this.domHandler),this.evWin&&D(Y(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&ot(this.element,this.evEl,this.domHandler),this.evTarget&&ot(this.target,this.evTarget,this.domHandler),this.evWin&&ot(Y(this.element),this.evWin,this.domHandler)}};function ge(t){var e,i=t.options.inputClass;return i?e=i:f?e=Ut:It?e=Ct:et?e=Xt:e=Nt,new e(t,Te)}function Te(t,e,i){var r=i.pointers.length,s=i.changedPointers.length,h=e&P&&r-s===0,p=e&(E|O)&&r-s===0;i.isFirst=!!h,i.isFinal=!!p,h&&(t.session={}),i.eventType=e,me(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function me(t,e){var i=t.session,r=e.pointers,s=r.length;i.firstInput||(i.firstInput=Jt(e)),s>1&&!i.firstMultiple?i.firstMultiple=Jt(e):s===1&&(i.firstMultiple=!1);var h=i.firstInput,p=i.firstMultiple,S=p?p.center:h.center,w=e.center=Qt(r);e.timeStamp=j(),e.deltaTime=e.timeStamp-h.timeStamp,e.angle=zt(S,w),e.distance=wt(S,w),Ee(i,e),e.offsetDirection=$t(e.deltaX,e.deltaY);var C=Kt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=C.x,e.overallVelocityY=C.y,e.overallVelocity=z(C.x)>z(C.y)?C.x:C.y,e.scale=p?Ie(p.pointers,r):1,e.rotation=p?_e(p.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,ye(i,e);var Z=t.element;b(e.srcEvent.target,Z)&&(Z=e.srcEvent.target),e.target=Z}function Ee(t,e){var i=e.center,r=t.offsetDelta||{},s=t.prevDelta||{},h=t.prevInput||{};(e.eventType===P||h.eventType===E)&&(s=t.prevDelta={x:h.deltaX||0,y:h.deltaY||0},r=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-r.x),e.deltaY=s.y+(i.y-r.y)}function ye(t,e){var i=t.lastInterval||e,r=e.timeStamp-i.timeStamp,s,h,p,S;if(e.eventType!=O&&(r>g||i.velocity===T)){var w=e.deltaX-i.deltaX,C=e.deltaY-i.deltaY,Z=Kt(r,w,C);h=Z.x,p=Z.y,s=z(Z.x)>z(Z.y)?Z.x:Z.y,S=$t(w,C),t.lastInterval=e}else s=i.velocity,h=i.velocityX,p=i.velocityY,S=i.direction;e.velocity=s,e.velocityX=h,e.velocityY=p,e.direction=S}function Jt(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:R(t.pointers[i].clientX),clientY:R(t.pointers[i].clientY)},i++;return{timeStamp:j(),pointers:e,center:Qt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Qt(t){var e=t.length;if(e===1)return{x:R(t[0].clientX),y:R(t[0].clientY)};for(var i=0,r=0,s=0;s<e;)i+=t[s].clientX,r+=t[s].clientY,s++;return{x:R(i/e),y:R(r/e)}}function Kt(t,e,i){return{x:e/t||0,y:i/t||0}}function $t(t,e){return t===e?St:z(t)>=z(e)?t<0?ut:ft:e<0?vt:pt}function wt(t,e,i){i||(i=Zt);var r=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(r*r+s*s)}function zt(t,e,i){i||(i=Zt);var r=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.atan2(s,r)*180/Math.PI}function _e(t,e){return zt(e[1],e[0],Pt)+zt(t[1],t[0],Pt)}function Ie(t,e){return wt(e[0],e[1],Pt)/wt(t[0],t[1],Pt)}var Se={mousedown:P,mousemove:rt,mouseup:E},Pe="mousedown",we="mousemove mouseup";function Nt(){this.evEl=Pe,this.evWin=we,this.pressed=!1,k.apply(this,arguments)}N(Nt,k,{handler:function(e){var i=Se[e.type];i&P&&e.button===0&&(this.pressed=!0),i&rt&&e.which!==1&&(i=E),this.pressed&&(i&E&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[e],changedPointers:[e],pointerType:A,srcEvent:e}))}});var Ne={pointerdown:P,pointermove:rt,pointerup:E,pointercancel:O,pointerout:O},Ce={2:m,3:I,4:A,5:X},jt="pointerdown",te="pointermove pointerup pointercancel";v.MSPointerEvent&&!v.PointerEvent&&(jt="MSPointerDown",te="MSPointerMove MSPointerUp MSPointerCancel");function Ut(){this.evEl=jt,this.evWin=te,k.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}N(Ut,k,{handler:function(e){var i=this.store,r=!1,s=e.type.toLowerCase().replace("ms",""),h=Ne[s],p=Ce[e.pointerType]||e.pointerType,S=p==m,w=o(i,e.pointerId,"pointerId");h&P&&(e.button===0||S)?w<0&&(i.push(e),w=i.length-1):h&(E|O)&&(r=!0),!(w<0)&&(i[w]=e,this.callback(this.manager,h,{pointers:i,changedPointers:[e],pointerType:p,srcEvent:e}),r&&i.splice(w,1))}});var Ae={touchstart:P,touchmove:rt,touchend:E,touchcancel:O},Oe="touchstart",Re="touchstart touchmove touchend touchcancel";function ee(){this.evTarget=Oe,this.evWin=Re,this.started=!1,k.apply(this,arguments)}N(ee,k,{handler:function(e){var i=Ae[e.type];if(i===P&&(this.started=!0),!!this.started){var r=Me.call(this,e,i);i&(E|O)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:m,srcEvent:e})}}});function Me(t,e){var i=n(t.touches),r=n(t.changedTouches);return e&(E|O)&&(i=l(i.concat(r),"identifier",!0)),[i,r]}var xe={touchstart:P,touchmove:rt,touchend:E,touchcancel:O},De="touchstart touchmove touchend touchcancel";function Ct(){this.evTarget=De,this.targetIds={},k.apply(this,arguments)}N(Ct,k,{handler:function(e){var i=xe[e.type],r=Ye.call(this,e,i);r&&this.callback(this.manager,i,{pointers:r[0],changedPointers:r[1],pointerType:m,srcEvent:e})}});function Ye(t,e){var i=n(t.touches),r=this.targetIds;if(e&(P|rt)&&i.length===1)return r[i[0].identifier]=!0,[i,i];var s,h,p=n(t.changedTouches),S=[],w=this.target;if(h=i.filter(function(C){return b(C.target,w)}),e===P)for(s=0;s<h.length;)r[h[s].identifier]=!0,s++;for(s=0;s<p.length;)r[p[s].identifier]&&S.push(p[s]),e&(E|O)&&delete r[p[s].identifier],s++;if(S.length)return[l(h.concat(S),"identifier",!0),S]}var ze=2500,ie=25;function Xt(){k.apply(this,arguments);var t=ct(this.handler,this);this.touch=new Ct(this.manager,t),this.mouse=new Nt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}N(Xt,k,{handler:function(e,i,r){var s=r.pointerType==m,h=r.pointerType==A;if(!(h&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(s)Ue.call(this,i,r);else if(h&&Xe.call(this,r))return;this.callback(e,i,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Ue(t,e){t&P?(this.primaryTouch=e.changedPointers[0].identifier,re.call(this,e)):t&(E|O)&&re.call(this,e)}function re(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var r=this.lastTouches,s=function(){var h=r.indexOf(i);h>-1&&r.splice(h,1)};setTimeout(s,ze)}}function Xe(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var s=this.lastTouches[r],h=Math.abs(e-s.x),p=Math.abs(i-s.y);if(h<=ie&&p<=ie)return!0}return!1}var ne=a(Et.style,"touchAction"),se=ne!==T,ae="compute",oe="auto",kt="manipulation",st="none",dt="pan-x",gt="pan-y",At=Le();function Lt(t,e){this.manager=t,this.set(e)}Lt.prototype={set:function(t){t==ae&&(t=this.compute()),se&&this.manager.element.style&&At[t]&&(this.manager.element.style[ne]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return x(this.manager.recognizers,function(e){V(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),ke(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,s=J(r,st)&&!At[st],h=J(r,gt)&&!At[gt],p=J(r,dt)&&!At[dt];if(s){var S=t.pointers.length===1,w=t.distance<2,C=t.deltaTime<250;if(S&&w&&C)return}if(!(p&&h)&&(s||h&&i&q||p&&i&nt))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function ke(t){if(J(t,st))return st;var e=J(t,dt),i=J(t,gt);return e&&i?st:e||i?e?dt:gt:J(t,kt)?kt:oe}function Le(){if(!se)return!1;var t={},e=v.CSS&&v.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=e?v.CSS.supports("touch-action",i):!0}),t}var Ot=1,L=2,lt=4,it=8,Q=it,Tt=16,G=32;function K(t){this.options=U({},this.defaults,t||{}),this.id=u(),this.manager=null,this.options.enable=_t(this.options.enable,!0),this.state=Ot,this.simultaneous={},this.requireFail=[]}K.prototype={defaults:{},set:function(t){return U(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(W(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=Rt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return W(t,"dropRecognizeWith",this)?this:(t=Rt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(W(t,"requireFailure",this))return this;var e=this.requireFail;return t=Rt(t,this),o(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(W(t,"dropRequireFailure",this))return this;t=Rt(t,this);var e=o(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function r(s){e.manager.emit(s,t)}i<it&&r(e.options.event+he(i)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),i>=it&&r(e.options.event+he(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=G},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(G|Ot)))return!1;t++}return!0},recognize:function(t){var e=U({},t);if(!V(this.options.enable,[this,e])){this.reset(),this.state=G;return}this.state&(Q|Tt|G)&&(this.state=Ot),this.state=this.process(e),this.state&(L|lt|it|Tt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function he(t){return t&Tt?"cancel":t&it?"end":t&lt?"move":t&L?"start":""}function le(t){return t==pt?"down":t==vt?"up":t==ut?"left":t==ft?"right":""}function Rt(t,e){var i=e.manager;return i?i.get(t):t}function F(){K.apply(this,arguments)}N(F,K,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,r=e&(L|lt),s=this.attrTest(t);return r&&(i&O||!s)?e|Tt:r||s?i&E?e|it:e&L?e|lt:L:G}});function Mt(){F.apply(this,arguments),this.pX=null,this.pY=null}N(Mt,F,{defaults:{event:"pan",threshold:10,pointers:1,direction:Gt},getTouchAction:function(){var t=this.options.direction,e=[];return t&q&&e.push(gt),t&nt&&e.push(dt),e},directionTest:function(t){var e=this.options,i=!0,r=t.distance,s=t.direction,h=t.deltaX,p=t.deltaY;return s&e.direction||(e.direction&q?(s=h===0?St:h<0?ut:ft,i=h!=this.pX,r=Math.abs(t.deltaX)):(s=p===0?St:p<0?vt:pt,i=p!=this.pY,r=Math.abs(t.deltaY))),t.direction=s,i&&r>e.threshold&&s&e.direction},attrTest:function(t){return F.prototype.attrTest.call(this,t)&&(this.state&L||!(this.state&L)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=le(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Ht(){F.apply(this,arguments)}N(Ht,F,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[st]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&L)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function bt(){K.apply(this,arguments),this._timer=null,this._input=null}N(bt,K,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!r||!i||t.eventType&(E|O)&&!s)this.reset();else if(t.eventType&P)this.reset(),this._timer=M(function(){this.state=Q,this.tryEmit()},e.time,this);else if(t.eventType&E)return Q;return G},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Q&&(t&&t.eventType&E?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}});function Ft(){F.apply(this,arguments)}N(Ft,F,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[st]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&L)}});function Wt(){F.apply(this,arguments)}N(Wt,F,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:q|nt,pointers:1},getTouchAction:function(){return Mt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,i;return e&(q|nt)?i=t.overallVelocity:e&q?i=t.overallVelocityX:e&nt&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&z(i)>this.options.velocity&&t.eventType&E},emit:function(t){var e=le(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function xt(){K.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}N(xt,K,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[kt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,r=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&P&&this.count===0)return this.failTimeout();if(r&&s&&i){if(t.eventType!=E)return this.failTimeout();var h=this.pTime?t.timeStamp-this.pTime<e.interval:!0,p=!this.pCenter||wt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!p||!h?this.count=1:this.count+=1,this._input=t;var S=this.count%e.taps;if(S===0)return this.hasRequireFailures()?(this._timer=M(function(){this.state=Q,this.tryEmit()},e.interval,this),L):Q}return G},failTimeout:function(){return this._timer=M(function(){this.state=G},this.options.interval,this),G},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Q&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function $(t,e){return e=e||{},e.recognizers=_t(e.recognizers,$.defaults.preset),new Vt(t,e)}$.VERSION="2.0.7",$.defaults={domEvents:!1,touchAction:ae,enable:!0,inputTarget:null,inputClass:null,preset:[[Ft,{enable:!1}],[Ht,{enable:!1},["rotate"]],[Wt,{direction:q}],[Mt,{direction:q},["swipe"]],[xt],[xt,{event:"doubletap",taps:2},["tap"]],[bt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var He=1,ce=2;function Vt(t,e){this.options=U({},$.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=ge(this),this.touchAction=new Lt(this,this.options.touchAction),ue(this,!0),x(this.options.recognizers,function(i){var r=this.add(new i[0](i[1]));i[2]&&r.recognizeWith(i[2]),i[3]&&r.requireFailure(i[3])},this)}Vt.prototype={set:function(t){return U(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ce:He},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,r=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&Q)&&(s=e.curRecognizer=null);for(var h=0;h<r.length;)i=r[h],e.stopped!==ce&&(!s||i==s||i.canRecognizeWith(s))?i.recognize(t):i.reset(),!s&&i.state&(L|lt|it)&&(s=e.curRecognizer=i),h++}},get:function(t){if(t instanceof K)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(W(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(W(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,i=o(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==T&&e!==T){var i=this.handlers;return x(ht(t),function(r){i[r]=i[r]||[],i[r].push(e)}),this}},off:function(t,e){if(t!==T){var i=this.handlers;return x(ht(t),function(r){e?i[r]&&i[r].splice(o(i[r],e),1):delete i[r]}),this}},emit:function(t,e){this.options.domEvents&&be(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<i.length;)i[r](e),r++}},destroy:function(){this.element&&ue(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ue(t,e){var i=t.element;if(i.style){var r;x(t.options.cssProps,function(s,h){r=a(i.style,h),e?(t.oldCssProps[r]=i.style[r],i.style[r]=s):i.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function be(t,e){var i=y.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}U($,{INPUT_START:P,INPUT_MOVE:rt,INPUT_END:E,INPUT_CANCEL:O,STATE_POSSIBLE:Ot,STATE_BEGAN:L,STATE_CHANGED:lt,STATE_ENDED:it,STATE_RECOGNIZED:Q,STATE_CANCELLED:Tt,STATE_FAILED:G,DIRECTION_NONE:St,DIRECTION_LEFT:ut,DIRECTION_RIGHT:ft,DIRECTION_UP:vt,DIRECTION_DOWN:pt,DIRECTION_HORIZONTAL:q,DIRECTION_VERTICAL:nt,DIRECTION_ALL:Gt,Manager:Vt,Input:k,TouchAction:Lt,TouchInput:Ct,MouseInput:Nt,PointerEventInput:Ut,TouchMouseInput:Xt,SingleTouchInput:ee,Recognizer:K,AttrRecognizer:F,Tap:xt,Pan:Mt,Swipe:Wt,Pinch:Ht,Rotate:Ft,Press:bt,on:D,off:ot,each:x,merge:Yt,extend:at,assign:U,inherit:N,bindFn:ct,prefixed:a});var Fe=typeof v<"u"?v:typeof self<"u"?self:{};Fe.Hammer=$,typeof T=="function"&&T.amd?T(function(){return $}):d.exports?d.exports=$:v[H]=$})(window,document,"Hammer")})(ai);const oi=qt,pe=Ze(),de=qe({});pe.use(de);const{cB:hi,cE:Ei}=de,{c:li}=pe,ci=hi("CanvasInteraction",[li("canvas",{cursor:"default",border:"1px ",position:"absolute",left:0,top:0,width:"100%",height:"100%"})]),ui=Ge();ci.mount({id:"CanvasInteraction",ssr:ui});const fi=ve({emits:{load:()=>!0,pen:d=>!0,penStart:(d,v)=>!0,penMove:(d,v)=>!0,penEnd:(d,v)=>!0,leave:d=>!0,enter:d=>!0},props:{gap:{type:Number,default:10},gapLineWidth:{type:Number,default:2},showHelp:{type:Boolean,default:!0},width:{type:Number,default:null},height:{type:Number,default:null}},setup(d,{emit:v}){const y=ei(),H=Dt(),T=mt(()=>H.value),_=mt(()=>T.value.getContext("2d")),{width:Et,height:yt}=Je(),R=Dt([]),{x:z,y:j}=Qe(T.value),{Shift:M,Alt:W}=Ke({onEventFired(o){console.log(o.key)}}),x=Dt(!1),tt=Dt(null);(async()=>{const n=`data:image/svg+xml;base64,${btoa(`<svg t="1682039044848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2655" data-spm-anchor-id="a313x.7781069.0.i1" width="200" height="200">
                <path d="M924 192c-19.8 0-36 16.2-36 36v40.3c-17-26.2-36.8-50.6-59.2-73.1-41.1-41.1-89-73.4-142.4-96C631.1 75.9 572.5 64 512 64S392.9 75.9 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96s-73.4 89-96 142.4C75.9 392.9 64 451.5 64 512s11.9 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.1 451.5 960 512 960c76.4 0 151.9-19.6 218.2-56.6 64.3-35.9 119.3-87.6 159.1-149.6 10.3-16.1 5.7-37.5-10.4-47.8-16.1-10.3-37.5-5.7-47.8 10.4-33.7 52.5-80.2 96.2-134.6 126.6-56 31.3-119.8 47.8-184.4 47.8-51.2 0-100.8-10-147.4-29.8-45.1-19.1-85.6-46.4-120.4-81.2C209.4 745 182 704.5 163 659.4c-19.7-46.7-29.8-96.3-29.8-147.4 0-51.2 10-100.8 29.8-147.4 19.1-45.1 46.4-85.6 81.2-120.4C279 209.4 319.5 182 364.6 163c46.7-19.7 96.3-29.8 147.4-29.8 51.2 0 100.8 10 147.4 29.8 45.1 19.1 85.6 46.4 120.4 81.2C814.6 279 842 319.5 861 364.6c13.7 32.5 22.7 66.3 27 101.2V516c0 19.8 16.2 36 36 36s36-16.2 36-36V228c0-19.8-16.2-36-36-36z" fill="#ffffff" p-id="2656"></path>
<!--                <path d="M235.7 457.2c0-5.3 4.9-9.9 11.5-10.6 17.6-1.9 17.1-3 24.8-6.6 7.8-3.6 15.2-13 19.7-24.8 1.7-4.5 6.8-7.6 12.6-7.6h8.4c7.3 0 13.3 4.8 13.3 10.7v187.5c0 5.9-5.9 10.7-13.3 10.7h-14.4c-7.3 0-13.3-4.8-13.3-10.7V478.6c0-5.9-5.9-10.7-13.3-10.7H249c-7.3 0-13.3-4.8-13.3-10.7zM390.4 491.4c-7.7-7.8-11.6-18-11.6-30.5 0-15.6 5.7-29.1 17-40.3 11.3-11.2 27.4-16.8 48.1-16.8 20.1 0 35.8 5.3 47.3 15.9 11.4 10.6 17.1 23 17.1 37.1 0 13.1-3.3 23.7-10 31.8-3.7 4.6-9.5 9.1-17.3 13.5 8.7 4 15.6 8.6 20.6 13.8 9.3 9.8 14 22.5 14 38.1 0 18.5-6.2 34.1-18.6 46.9-12.4 12.8-29.9 19.3-52.6 19.3-20.4 0-37.7-5.5-51.8-16.6-14.1-11.1-21.2-27.2-21.2-48.3 0-12.4 3-23.1 9.1-32.2 6.1-9 15-15.9 27-20.7-7.3-3.1-13-6.8-17.1-11z m79.8 89.7c6.7-5.5 10.1-13.7 10.1-24.5 0-11.3-3.5-19.9-10.4-25.7-6.9-5.8-15.8-8.8-26.6-8.8-10.5 0-19 3-25.6 9-6.6 6-9.9 14.2-9.9 24.8 0 9.1 3 17 9.1 23.6 6 6.6 15.4 9.9 28.1 9.9 10 0 18.5-2.8 25.2-8.3zM463.9 477c4.9-4.9 7.4-10.8 7.4-17.5 0-5.9-2.4-11.3-7.1-16.3-4.7-4.9-11.9-7.4-21.5-7.4s-16.5 2.5-20.7 7.4c-4.3 4.9-6.4 10.7-6.4 17.4 0 7.5 2.8 13.3 8.3 17.5 5.5 4.2 12 6.3 19.5 6.3 8.7 0 15.6-2.5 20.5-7.4zM668.7 437.8c9.4 17.3 14.1 41 14.1 71 0 28.5-4.2 52.1-12.7 70.8-12.3 26.8-32.4 40.1-60.4 40.1-25.2 0-43.9-10.9-56.2-32.8-10.3-18.3-15.4-42.8-15.4-73.5 0-23.8 3.1-44.3 9.2-61.4 11.5-31.8 32.4-47.8 62.5-47.8 27.2 0.1 46.8 11.2 58.9 33.6z m-32.4 127.6c6.6-9.9 9.9-28.3 9.9-55.2 0-19.4-2.4-35.4-7.2-47.9-4.8-12.5-14.1-18.8-27.9-18.8-12.7 0-22 6-27.8 17.9-5.9 11.9-8.8 29.4-8.8 52.6 0 17.4 1.9 31.4 5.6 42 5.7 16.2 15.6 24.2 29.4 24.2 11.3 0 20.2-4.9 26.8-14.8zM787.5 417.2c8.5 8.5 12.7 19 12.7 31.3 0 12.7-4.4 23.3-13.3 31.7-8.8 8.4-19.1 12.7-30.8 12.7-13 0-23.6-4.4-31.9-13.2-8.3-8.8-12.5-19-12.5-30.8 0-12.5 4.4-23 13.1-31.6 8.7-8.6 19.2-12.9 31.3-12.9 12.5 0 22.9 4.3 31.4 12.8z m-45.3 45.2c3.9 3.9 8.5 5.8 13.9 5.8 5.2 0 9.8-1.9 13.6-5.7 3.9-3.8 5.8-8.5 5.8-13.9 0-5.3-1.9-9.8-5.7-13.7-3.8-3.9-8.4-5.8-13.7-5.8-5.3 0-10 1.9-13.8 5.7-3.9 3.8-5.8 8.5-5.8 13.9 0 5.3 1.9 9.9 5.7 13.7z" fill="#ffffff" p-id="2657"></path>-->
            </svg>`)}`,l=await new Promise(a=>{const c=new Image;c.src=n,c.onload=()=>{a(c)}});tt.value=l})(),$e(()=>{T.value&&(T.value.width=d.width||Et.value,T.value.height=d.height||yt.value)});const U=mt(()=>({top_left:{cursor:"nwse-resize"},top_center:{cursor:"ns-resize"},top_right:{cursor:"nesw-resize"},bottom_left:{cursor:"nesw-resize"},bottom_center:{cursor:"ns-resize"},bottom_right:{cursor:"nwse-resize"},left_center:{cursor:"ew-resize"},right_center:{cursor:"ew-resize"},content:{cursor:W.value?"ns-resize":"move"},blank:{cursor:"pointer"}}));class at{constructor(n=0,l=0,a,c){fe(this,"rotationAngle",0);this.x=n,this.y=l,this.w=a,this.h=c}isInside(){if(this.w&&this.h){const n=z.value-this.x,l=j.value-this.y;return n>-this.gapSizeBlank&&n<this.w+this.gapSizeBlank&&l>-this.gapSizeBlank&&l<this.h+this.gapSizeBlank}return!1}get gapSize(){return d.gap+d.gapLineWidth*2}get gapSizeBlank(){return this.gapSize*1.5}get width(){return this.w}get height(){return this.h}get left(){return this.x}get top(){return this.y}get centerX(){return this.x+this.w/2}get centerY(){return this.y+this.h/2}get position(){const n=z.value-this.x,l=j.value-this.y,a=l>=-this.gapSizeBlank&&l<=this.gapSize-this.gapSizeBlank,c=l>=this.height+this.gapSize*.5&&l<=this.height+this.gapSizeBlank,u=n>=-this.gapSizeBlank&&n<=this.gapSize-this.gapSizeBlank,Y=n>=this.width+this.gapSize*.5&&n<=this.width+this.gapSize*1.5,B=n>=this.width/2-this.gapSize*.5&&n<=this.width/2+this.gapSize*.5,et=l>=this.height/2-this.gapSize*.5&&l<=this.height/2+this.gapSize*.5;return u&&a?"top_left":B&&a?"top_center":Y&&a?"top_right":u&&c?"bottom_left":B&&c?"bottom_center":Y&&c?"bottom_right":u&&et?"left_center":Y&&et?"right_center":n>0&&n<this.w&&l>0&&l<this.h?"content":"blank"}async drawRotation(n,l){if(!tt.value||!W.value)return;let a=this.width*.3;this.height<this.width&&(a=this.height*.3),n.drawImage(tt.value,0,0,tt.value.width,tt.value.height,this.centerX-a/2,this.centerY-a/2,a,a),n.font=`${a*.3}px  bold`,n.textAlign="center",n.textBaseline="middle",n.save(),n.translate(this.centerX,this.centerY),n.rotate(-Math.PI/180*this.rotationAngle),n.translate(-this.centerX,-this.centerY),n.fillText(`${this.rotationAngle}°`,this.centerX,this.centerY),n.restore()}}class Yt extends at{constructor(n,l,a,c,u){super(l,a,c,u),this.color=n,this.x=l,this.y=a,this.w=c,this.h=u}async draw(n){n.fillStyle=this.color,n.fillRect(this.x,this.y,this.w,this.h)}}class N extends at{constructor(n,l,a,c,u,Y,B,et,f){super(l,a,c,u),this.src=n,this.x=l,this.y=a,this.w=c,this.h=u,this.dx=Y,this.dy=B,this.dw=et,this.dh=f}async draw(n,l){this.image||(typeof this.src=="string"?this.image=await new Promise((a,c)=>{const u=new Image;u.src=this.src,u.onload=()=>{a(u)},u.onerror=c}):this.image=this.src),this.w&&this.h&&this.dx&&this.dy&&this.dw&&this.dh?n.drawImage(this.image,this.x,this.y,this.w,this.h,this.dx,this.dy,this.dw,this.dh):this.w&&this.h?n.drawImage(this.image,this.x,this.y,this.w,this.h):n.drawImage(this.image,this.x,this.y)}isInside(){const n=z.value-(this.dx||this.x),l=j.value-(this.dy||this.y);return n>-this.gapSizeBlank&&n<(this.dw||this.w)+this.gapSizeBlank&&l>-this.gapSizeBlank&&l<(this.dh||this.h)+this.gapSizeBlank}panstart(n){return this.dx&&this.dy?["dx","dy"]:["x","y"]}panmove(n){return this.dx&&this.dy?["dx","dy"]:["x","y"]}}const ct=async()=>{var o,n;await((n=(o=y.vnode.props).onLoad)==null?void 0:n.call(o,{ObjectsClass:{Rect:Yt,Image:N},ObjectBase:at,scene:R.value,x:z,y:j,width:Et,height:yt,canvas:T.value,ctx:_.value,vm:y})),await ot()},V=mt(()=>{let o=null;if(x.value)return V.value;for(let n=R.value.length-1,l=n;l>=0;l--)if(R.value[l].isInside()){o=R.value[l];break}return o});je(V,(o,n)=>{o&&o!==n?(v("leave",n),v("enter",o)):v("leave",n)});const _t=mt(()=>{var o;return{cursor:d.showHelp&&V.value?(o=U.value[V.value.position])==null?void 0:o.cursor:null}}),D=(o,n,l,a)=>{let c=1;return o>l?c=l/o:n>a?c=a/n:l>o?c=l/o:c=a/n,c},ot=async()=>{const o=new oi(T.value);let n=0,l=0,a=0,c=0,u=null,Y=null,B=0;o.get("pan").set({enable(et,f){var It;if(v("pen",f),f)if(f.isFirst){if(x.value=!0,u=V.value,u){if(u!=null&&u.panstart){const[m,I]=(It=u.panstart)==null?void 0:It.call(u,f);n=u[m],l=u[I]}else n=u.x,l=u.y;a=u.w,c=u.h,B=u.rotationAngle,Y=u.position}v("penStart",u,f)}else if(f.isFinal)u=null,Y=null,x.value=!1,v("penEnd",u,f);else{if(u){let m=a,I=c,A=n,X=l;switch(Y){case"top_left":if(M.value){const g=D(a,c,a-f.deltaX,c-f.deltaY);m=a*g,I=c*g,A=n+a*(1-g),X=l+c*(1-g);return}A=n+f.deltaX,X=l+f.deltaY,m=a-f.deltaX,I=c-f.deltaY;break;case"top_center":if(M.value){const g=D(a,c,a,c-f.deltaY);A=n+n*(1-g)/2,m=a*g}X=l+f.deltaY,I=c-f.deltaY;break;case"top_right":if(M.value){const g=D(a,c,a+f.deltaX,c-f.deltaY);m=a*g,I=c*g,X=l+c*(1-g);return}X=l+f.deltaY,m=a+f.deltaX,I=c-f.deltaY;break;case"right_center":if(M.value){const g=D(a,c,a+f.deltaX,c);X=l+l*(1-g)/2,I=c*g}m=a+f.deltaX;break;case"bottom_right":if(M.value){const g=D(a,c,a+f.deltaX,c+f.deltaY);m=a*g,I=c*g;return}m=a+f.deltaX,I=c+f.deltaY;break;case"bottom_center":if(M.value){const g=D(a,c,a,c+f.deltaY);A=n+n*(1-g)/2,m=a*g}I=c+f.deltaY;break;case"bottom_left":if(M.value){const g=D(a,c,a-f.deltaX,c+f.deltaY);m=a*g,I=c*g,A=n+n*(1-g);return}A=n+f.deltaX,m=a-f.deltaX,I=c+f.deltaY;break;case"left_center":if(M.value){const g=D(a,c,a-f.deltaX,c);X=l+l*(1-g)/2,I=c*g}A=n+f.deltaX,m=a-f.deltaX;break;default:if(Y==="content"&&W.value){M.value?u.rotationAngle=(B+(Math.fround(f.deltaY%50)+1)*15)%360:u.rotationAngle=(B+f.deltaY)%360;return}A=n+f.deltaX,X=l+f.deltaY;break}if(m>0&&I>0){if(u.panmove){const[g,P]=u.panmove(f);u[g]=A,u[P]=X}else u.x=A,u.y=X;u.w=m,u.h=I}}v("penMove",u,f)}return!0}})},b=async(o,n)=>{const l=d.gap/2;_.value.fillStyle="#ffffff",_.value.fillRect(o-l,n-l,d.gap,d.gap),_.value.strokeRect(o-l,n-l,d.gap,d.gap)},J=async o=>{const n=d.gap+d.gapLineWidth;_.value.strokeStyle="#f00",_.value.lineWidth=d.gapLineWidth,_.value.strokeRect(o.left-n,o.top-n,o.width+n*2,o.height+n*2),await b(o.left-n,o.top-n),await b(o.left+o.width/2,o.top-n),await b(o.left+o.width+n,o.top-n),await b(o.left+o.width+n,o.top+o.height/2),await b(o.left+o.width+n,o.top+o.height+n),await b(o.left+o.width/2,o.top+o.height+n),await b(o.left-n,o.top+o.height+n),await b(o.left-n,o.top+o.height/2)},ht=async()=>{await ct(),await async function o(){var l;_.value.clearRect(0,0,T.value.width,T.value.height);let n=0;for(;n<R.value.length;){const a=R.value[n];a&&(_.value.save(),_.value.translate(a.centerX,a.centerY),_.value.rotate(Math.PI/180*(a.rotationAngle||0)),_.value.translate(-a.centerX,-a.centerY),await a.draw(_.value,T.value),d.showHelp&&V.value===a&&(await J(a),await((l=a.drawRotation)==null?void 0:l.call(a,_.value,T.value))),_.value.restore()),n+=1}requestAnimationFrame(o)}()};return ti(async()=>{await ht()}),()=>Bt("div",{class:"CanvasInteraction"},[Bt("canvas",{ref:H,style:_t.value},null)])}}),vi={class:"PathRecognition"},pi=ve({__name:"PathRecognition",setup(d){const v=async({ObjectsClass:y,scene:H,ObjectBase:T})=>{H.push(new y.Rect("#f00",50,60,100,100)),H.push(new y.Rect("#0032ff",500,300,500,300)),H.push(new y.Rect("#f500d5",90,60,200,100)),H.push(new y.Rect("#f500d5",90,300,200,500)),H.push(new y.Image(Be,100,10,100,100))};return(y,H)=>(ii(),ri("div",vi,[Bt(ni(fi),{onLoad:v})]))}});const yi=si(pi,[["__scopeId","data-v-18dc1aca"]]);export{yi as default};