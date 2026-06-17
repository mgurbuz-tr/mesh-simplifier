(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zr="171",Ti={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yl=0,_o=1,Jl=2,Gc=1,Zl=2,xn=3,En=0,Ct=1,an=2,Bn=0,Ai=1,xo=2,vo=3,yo=4,Ql=5,Qn=100,$l=101,ed=102,td=103,nd=104,id=200,ad=201,sd=202,rd=203,Ys=204,Js=205,od=206,cd=207,ld=208,dd=209,hd=210,fd=211,ud=212,pd=213,bd=214,Zs=0,Qs=1,$s=2,Ii=3,er=4,tr=5,nr=6,ir=7,Vc=0,md=1,gd=2,Hn=0,_d=1,xd=2,vd=3,Wc=4,yd=5,Md=6,Sd=7,Mo="attached",Ed="detached",qc=300,Pi=301,Di=302,ar=303,sr=304,ss=306,ki=1e3,Un=1001,$a=1002,It=1003,Xc=1004,na=1005,Ot=1006,qa=1007,yn=1008,Tn=1009,Kc=1010,Yc=1011,oa=1012,Gr=1013,ti=1014,Qt=1015,ua=1016,Vr=1017,Wr=1018,Li=1020,Jc=35902,Zc=1021,Qc=1022,Vt=1023,$c=1024,el=1025,wi=1026,Ui=1027,qr=1028,Xr=1029,tl=1030,Kr=1031,Yr=1033,Xa=33776,Ka=33777,Ya=33778,Ja=33779,rr=35840,or=35841,cr=35842,lr=35843,dr=36196,hr=37492,fr=37496,ur=37808,pr=37809,br=37810,mr=37811,gr=37812,_r=37813,xr=37814,vr=37815,yr=37816,Mr=37817,Sr=37818,Er=37819,Tr=37820,Ar=37821,Za=36492,wr=36494,Rr=36495,nl=36283,Cr=36284,Ir=36285,Pr=36286,ca=2300,la=2301,fs=2302,So=2400,Eo=2401,To=2402,Td=2500,Ad=0,il=1,Dr=2,wd=3200,Rd=3201,al=0,Cd=1,Ln="",xt="srgb",Dt="srgb-linear",es="linear",et="srgb",si=7680,Ao=519,Id=512,Pd=513,Dd=514,sl=515,kd=516,Ld=517,Ud=518,Nd=519,kr=35044,wo="300 es",Mn=2e3,ts=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ro=1234567;const aa=Math.PI/180,Ni=180/Math.PI;function $t(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[a&255]+St[a>>8&255]+St[a>>16&255]+St[a>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Ne(a,e,t){return Math.max(e,Math.min(t,a))}function Jr(a,e){return(a%e+e)%e}function Fd(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Od(a,e,t){return a!==e?(t-a)/(e-a):0}function sa(a,e,t){return(1-t)*a+t*e}function Bd(a,e,t,n){return sa(a,e,1-Math.exp(-t*n))}function Hd(a,e=1){return e-Math.abs(Jr(a,e*2)-e)}function jd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function zd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Gd(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Vd(a,e){return a+Math.random()*(e-a)}function Wd(a){return a*(.5-Math.random())}function qd(a){a!==void 0&&(Ro=a);let e=Ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(a){return a*aa}function Kd(a){return a*Ni}function Yd(a){return(a&a-1)===0&&a!==0}function Jd(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Zd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Qd(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),d=r((e+n)/2),f=s((e-n)/2),b=r((e-n)/2),m=s((n-e)/2),p=r((n-e)/2);switch(i){case"XYX":a.set(o*d,c*f,c*b,o*l);break;case"YZY":a.set(c*b,o*d,c*f,o*l);break;case"ZXZ":a.set(c*f,c*b,o*d,o*l);break;case"XZX":a.set(o*d,c*p,c*m,o*l);break;case"YXY":a.set(c*m,o*d,c*p,o*l);break;case"ZYZ":a.set(c*p,c*m,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Qe(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const rl={DEG2RAD:aa,RAD2DEG:Ni,generateUUID:$t,clamp:Ne,euclideanModulo:Jr,mapLinear:Fd,inverseLerp:Od,lerp:sa,damp:Bd,pingpong:Hd,smoothstep:jd,smootherstep:zd,randInt:Gd,randFloat:Vd,randFloatSpread:Wd,seededRandom:qd,degToRad:Xd,radToDeg:Kd,isPowerOfTwo:Yd,ceilPowerOfTwo:Jd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Qd,normalize:Qe,denormalize:Jt};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,s,r,o,c,l){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],b=n[2],m=n[5],p=n[8],g=i[0],u=i[3],h=i[6],x=i[1],v=i[4],_=i[7],w=i[2],R=i[5],T=i[8];return s[0]=r*g+o*x+c*w,s[3]=r*u+o*v+c*R,s[6]=r*h+o*_+c*T,s[1]=l*g+d*x+f*w,s[4]=l*u+d*v+f*R,s[7]=l*h+d*_+f*T,s[2]=b*g+m*x+p*w,s[5]=b*u+m*v+p*R,s[8]=b*h+m*_+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*s*d+n*o*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*r-o*l,b=o*c-d*s,m=l*s-r*c,p=t*f+n*b+i*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=f*g,e[1]=(i*l-d*n)*g,e[2]=(o*n-i*r)*g,e[3]=b*g,e[4]=(d*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(us.makeScale(e,t)),this}rotate(e){return this.premultiply(us.makeRotation(-e)),this}translate(e,t){return this.premultiply(us.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const us=new De;function ol(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function da(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function $d(){const a=da("canvas");return a.style.display="block",a}const Co={};function yi(a){a in Co||(Co[a]=!0,console.warn(a))}function eh(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function th(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nh(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Io=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ih(){const a={enabled:!0,workingColorSpace:Dt,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===et&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===et&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?es:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Dt]:{primaries:e,whitePoint:n,transfer:es,toXYZ:Io,fromXYZ:Po,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Io,fromXYZ:Po,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),a}const ze=ih();function Sn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ri(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ri;class ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=da("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Sn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sh=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=$t(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ps(i[r].image)):s.push(ps(i[r]))}else s=ps(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ps(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ah.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rh=0;class vt extends ii{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Un,i=Un,s=Ot,r=yn,o=Vt,c=Tn,l=vt.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=$t(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=qc;vt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],f=c[8],b=c[1],m=c[5],p=c[9],g=c[2],u=c[6],h=c[10];if(Math.abs(d-b)<.01&&Math.abs(f-g)<.01&&Math.abs(p-u)<.01){if(Math.abs(d+b)<.1&&Math.abs(f+g)<.1&&Math.abs(p+u)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(m+1)/2,w=(h+1)/2,R=(d+b)/4,T=(f+g)/4,I=(p+u)/4;return v>_&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=R/n,s=T/n):_>w?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=R/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=I/s),this.set(n,i,s,t),this}let x=Math.sqrt((u-p)*(u-p)+(f-g)*(f-g)+(b-d)*(b-d));return Math.abs(x)<.001&&(x=1),this.x=(u-p)/x,this.y=(f-g)/x,this.z=(b-d)/x,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oh extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ll extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],d=n[i+2],f=n[i+3];const b=s[r+0],m=s[r+1],p=s[r+2],g=s[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=b,e[t+1]=m,e[t+2]=p,e[t+3]=g;return}if(f!==g||c!==b||l!==m||d!==p){let u=1-o;const h=c*b+l*m+d*p+f*g,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const w=Math.sqrt(v),R=Math.atan2(w,h*x);u=Math.sin(u*R)/w,o=Math.sin(o*R)/w}const _=o*x;if(c=c*u+b*_,l=l*u+m*_,d=d*u+p*_,f=f*u+g*_,u===1-o){const w=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=w,l*=w,d*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],f=s[r],b=s[r+1],m=s[r+2],p=s[r+3];return e[t]=o*p+d*f+c*m-l*b,e[t+1]=c*p+d*b+l*f-o*m,e[t+2]=l*p+d*m+o*b-c*f,e[t+3]=d*p-o*f-c*b-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),f=o(s/2),b=c(n/2),m=c(i/2),p=c(s/2);switch(r){case"XYZ":this._x=b*d*f+l*m*p,this._y=l*m*f-b*d*p,this._z=l*d*p+b*m*f,this._w=l*d*f-b*m*p;break;case"YXZ":this._x=b*d*f+l*m*p,this._y=l*m*f-b*d*p,this._z=l*d*p-b*m*f,this._w=l*d*f+b*m*p;break;case"ZXY":this._x=b*d*f-l*m*p,this._y=l*m*f+b*d*p,this._z=l*d*p+b*m*f,this._w=l*d*f-b*m*p;break;case"ZYX":this._x=b*d*f-l*m*p,this._y=l*m*f+b*d*p,this._z=l*d*p-b*m*f,this._w=l*d*f+b*m*p;break;case"YZX":this._x=b*d*f+l*m*p,this._y=l*m*f+b*d*p,this._z=l*d*p-b*m*f,this._w=l*d*f-b*m*p;break;case"XZY":this._x=b*d*f-l*m*p,this._y=l*m*f-b*d*p,this._z=l*d*p+b*m*f,this._w=l*d*f+b*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],b=n+o+f;if(b>0){const m=.5/Math.sqrt(b+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(r-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-c)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(r-i)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+i*l-s*c,this._y=i*d+r*c+s*o-n*l,this._z=s*d+r*l+n*c-i*o,this._w=r*d-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),f=Math.sin((1-t)*d)/l,b=Math.sin(t*d)/l;return this._w=r*f+this._w*b,this._x=n*f+this._x*b,this._y=i*f+this._y*b,this._z=s*f+this._z*b,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Do.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Do.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),d=2*(o*t-s*i),f=2*(s*n-r*t);return this.x=t+c*l+r*f-o*d,this.y=n+c*d+o*l-s*f,this.z=i+c*f+s*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new D,Do=new rn;class cn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Xt):Xt.fromBufferAttribute(s,r),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),xa.subVectors(this.max,Xi),oi.subVectors(e.a,Xi),ci.subVectors(e.b,Xi),li.subVectors(e.c,Xi),An.subVectors(ci,oi),wn.subVectors(li,ci),Vn.subVectors(oi,li);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-Vn.z,Vn.y,An.z,0,-An.x,wn.z,0,-wn.x,Vn.z,0,-Vn.x,-An.y,An.x,0,-wn.y,wn.x,0,-Vn.y,Vn.x,0];return!ms(t,oi,ci,li,xa)||(t=[1,0,0,0,1,0,0,0,1],!ms(t,oi,ci,li,xa))?!1:(va.crossVectors(An,wn),t=[va.x,va.y,va.z],ms(t,oi,ci,li,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new D,new D,new D,new D,new D,new D,new D,new D],Xt=new D,_a=new cn,oi=new D,ci=new D,li=new D,An=new D,wn=new D,Vn=new D,Xi=new D,xa=new D,va=new D,Wn=new D;function ms(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Wn.fromArray(a,s);const o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),c=e.dot(Wn),l=t.dot(Wn),d=n.dot(Wn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const lh=new cn,Ki=new D,gs=new D;class ln{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(gs)),this.expandByPoint(Ki.copy(e.center).sub(gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new D,_s=new D,ya=new D,Rn=new D,xs=new D,Ma=new D,vs=new D;class pa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_s.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ya),o=Rn.dot(this.direction),c=-Rn.dot(ya),l=Rn.lengthSq(),d=Math.abs(1-r*r);let f,b,m,p;if(d>0)if(f=r*c-o,b=r*o-c,p=s*d,f>=0)if(b>=-p)if(b<=p){const g=1/d;f*=g,b*=g,m=f*(f+r*b+2*o)+b*(r*f+b+2*c)+l}else b=s,f=Math.max(0,-(r*b+o)),m=-f*f+b*(b+2*c)+l;else b=-s,f=Math.max(0,-(r*b+o)),m=-f*f+b*(b+2*c)+l;else b<=-p?(f=Math.max(0,-(-r*s+o)),b=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+b*(b+2*c)+l):b<=p?(f=0,b=Math.min(Math.max(-s,-c),s),m=b*(b+2*c)+l):(f=Math.max(0,-(r*s+o)),b=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+b*(b+2*c)+l);else b=r>0?-s:s,f=Math.max(0,-(r*b+o)),m=-f*f+b*(b+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(_s).addScaledVector(ya,b),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,b=this.origin;return l>=0?(n=(e.min.x-b.x)*l,i=(e.max.x-b.x)*l):(n=(e.max.x-b.x)*l,i=(e.min.x-b.x)*l),d>=0?(s=(e.min.y-b.y)*d,r=(e.max.y-b.y)*d):(s=(e.max.y-b.y)*d,r=(e.min.y-b.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(e.min.z-b.z)*f,c=(e.max.z-b.z)*f):(o=(e.max.z-b.z)*f,c=(e.min.z-b.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,s){xs.subVectors(t,e),Ma.subVectors(n,e),vs.crossVectors(xs,Ma);let r=this.direction.dot(vs),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(Ma.crossVectors(Rn,Ma));if(c<0)return null;const l=o*this.direction.dot(xs.cross(Rn));if(l<0||c+l>r)return null;const d=-o*Rn.dot(vs);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,r,o,c,l,d,f,b,m,p,g,u){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,d,f,b,m,p,g,u)}set(e,t,n,i,s,r,o,c,l,d,f,b,m,p,g,u){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=s,h[5]=r,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=f,h[14]=b,h[3]=m,h[7]=p,h[11]=g,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),r=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const b=r*d,m=r*f,p=o*d,g=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+p*l,t[5]=b-g*l,t[9]=-o*c,t[2]=g-b*l,t[6]=p+m*l,t[10]=r*c}else if(e.order==="YXZ"){const b=c*d,m=c*f,p=l*d,g=l*f;t[0]=b+g*o,t[4]=p*o-m,t[8]=r*l,t[1]=r*f,t[5]=r*d,t[9]=-o,t[2]=m*o-p,t[6]=g+b*o,t[10]=r*c}else if(e.order==="ZXY"){const b=c*d,m=c*f,p=l*d,g=l*f;t[0]=b-g*o,t[4]=-r*f,t[8]=p+m*o,t[1]=m+p*o,t[5]=r*d,t[9]=g-b*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const b=r*d,m=r*f,p=o*d,g=o*f;t[0]=c*d,t[4]=p*l-m,t[8]=b*l+g,t[1]=c*f,t[5]=g*l+b,t[9]=m*l-p,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const b=r*c,m=r*l,p=o*c,g=o*l;t[0]=c*d,t[4]=g-b*f,t[8]=p*f+m,t[1]=f,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*f+p,t[10]=b-g*f}else if(e.order==="XZY"){const b=r*c,m=r*l,p=o*c,g=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=b*f+g,t[5]=r*d,t[9]=m*f-p,t[2]=p*f-m,t[6]=o*d,t[10]=g*f+b}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,hh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Cn.crossVectors(n,Nt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Cn.crossVectors(n,Nt)),Cn.normalize(),Sa.crossVectors(Nt,Cn),i[0]=Cn.x,i[4]=Sa.x,i[8]=Nt.x,i[1]=Cn.y,i[5]=Sa.y,i[9]=Nt.y,i[2]=Cn.z,i[6]=Sa.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],b=n[9],m=n[13],p=n[2],g=n[6],u=n[10],h=n[14],x=n[3],v=n[7],_=n[11],w=n[15],R=i[0],T=i[4],I=i[8],E=i[12],M=i[1],C=i[5],H=i[9],F=i[13],X=i[2],V=i[6],G=i[10],J=i[14],j=i[3],te=i[7],ce=i[11],me=i[15];return s[0]=r*R+o*M+c*X+l*j,s[4]=r*T+o*C+c*V+l*te,s[8]=r*I+o*H+c*G+l*ce,s[12]=r*E+o*F+c*J+l*me,s[1]=d*R+f*M+b*X+m*j,s[5]=d*T+f*C+b*V+m*te,s[9]=d*I+f*H+b*G+m*ce,s[13]=d*E+f*F+b*J+m*me,s[2]=p*R+g*M+u*X+h*j,s[6]=p*T+g*C+u*V+h*te,s[10]=p*I+g*H+u*G+h*ce,s[14]=p*E+g*F+u*J+h*me,s[3]=x*R+v*M+_*X+w*j,s[7]=x*T+v*C+_*V+w*te,s[11]=x*I+v*H+_*G+w*ce,s[15]=x*E+v*F+_*J+w*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],b=e[10],m=e[14],p=e[3],g=e[7],u=e[11],h=e[15];return p*(+s*c*f-i*l*f-s*o*b+n*l*b+i*o*m-n*c*m)+g*(+t*c*m-t*l*b+s*r*b-i*r*m+i*l*d-s*c*d)+u*(+t*l*f-t*o*m-s*r*f+n*r*m+s*o*d-n*l*d)+h*(-i*o*d-t*c*f+t*o*b+i*r*f-n*r*b+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],b=e[10],m=e[11],p=e[12],g=e[13],u=e[14],h=e[15],x=f*u*l-g*b*l+g*c*m-o*u*m-f*c*h+o*b*h,v=p*b*l-d*u*l-p*c*m+r*u*m+d*c*h-r*b*h,_=d*g*l-p*f*l+p*o*m-r*g*m-d*o*h+r*f*h,w=p*f*c-d*g*c-p*o*b+r*g*b+d*o*u-r*f*u,R=t*x+n*v+i*_+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=x*T,e[1]=(g*b*s-f*u*s-g*i*m+n*u*m+f*i*h-n*b*h)*T,e[2]=(o*u*s-g*c*s+g*i*l-n*u*l-o*i*h+n*c*h)*T,e[3]=(f*c*s-o*b*s-f*i*l+n*b*l+o*i*m-n*c*m)*T,e[4]=v*T,e[5]=(d*u*s-p*b*s+p*i*m-t*u*m-d*i*h+t*b*h)*T,e[6]=(p*c*s-r*u*s-p*i*l+t*u*l+r*i*h-t*c*h)*T,e[7]=(r*b*s-d*c*s+d*i*l-t*b*l-r*i*m+t*c*m)*T,e[8]=_*T,e[9]=(p*f*s-d*g*s-p*n*m+t*g*m+d*n*h-t*f*h)*T,e[10]=(r*g*s-p*o*s+p*n*l-t*g*l-r*n*h+t*o*h)*T,e[11]=(d*o*s-r*f*s-d*n*l+t*f*l+r*n*m-t*o*m)*T,e[12]=w*T,e[13]=(d*g*i-p*f*i+p*n*b-t*g*b-d*n*u+t*f*u)*T,e[14]=(p*o*i-r*g*i-p*n*c+t*g*c+r*n*u-t*o*u)*T,e[15]=(r*f*i-d*o*i+d*n*c-t*f*c-r*n*b+t*o*b)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,d=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*r,0,l*c-i*o,d*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,d=r+r,f=o+o,b=s*l,m=s*d,p=s*f,g=r*d,u=r*f,h=o*f,x=c*l,v=c*d,_=c*f,w=n.x,R=n.y,T=n.z;return i[0]=(1-(g+h))*w,i[1]=(m+_)*w,i[2]=(p-v)*w,i[3]=0,i[4]=(m-_)*R,i[5]=(1-(b+h))*R,i[6]=(u+x)*R,i[7]=0,i[8]=(p+v)*T,i[9]=(u-x)*T,i[10]=(1-(b+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=di.set(i[0],i[1],i[2]).length();const r=di.set(i[4],i[5],i[6]).length(),o=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const l=1/s,d=1/r,f=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=d,Kt.elements[5]*=d,Kt.elements[6]*=d,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r,o=Mn){const c=this.elements,l=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),b=(n+i)/(n-i);let m,p;if(o===Mn)m=-(r+s)/(r-s),p=-2*r*s/(r-s);else if(o===ts)m=-r/(r-s),p=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=b,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Mn){const c=this.elements,l=1/(t-e),d=1/(n-i),f=1/(r-s),b=(t+e)*l,m=(n+i)*d;let p,g;if(o===Mn)p=(r+s)*f,g=-2*f;else if(o===ts)p=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-b,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new D,Kt=new ke,dh=new D(0,0,0),hh=new D(1,1,1),Cn=new D,Sa=new D,Nt=new D,ko=new ke,Lo=new rn;class on{constructor(e=0,t=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],d=i[9],f=i[2],b=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(b,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(b,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(b,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fh=0;const Uo=new D,hi=new rn,bn=new ke,Ea=new D,Yi=new D,uh=new D,ph=new rn,No=new D(1,0,0),Fo=new D(0,1,0),Oo=new D(0,0,1),Bo={type:"added"},bh={type:"removed"},fi={type:"childadded",child:null},ys={type:"childremoved",child:null};class ot extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new D,t=new on,n=new rn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new De}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(Oo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(Oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Yi,Ea,this.up):bn.lookAt(Ea,Yi,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(bn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),f=r(e.shapes),b=r(e.skeletons),m=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),b.length>0&&(n.skeletons=b),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new D(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new D,mn=new D,Ms=new D,gn=new D,ui=new D,pi=new D,Ho=new D,Ss=new D,Es=new D,Ts=new D,As=new Xe,ws=new Xe,Rs=new Xe;class Zt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yt.subVectors(i,t),mn.subVectors(n,t),Ms.subVectors(e,t);const r=Yt.dot(Yt),o=Yt.dot(mn),c=Yt.dot(Ms),l=mn.dot(mn),d=mn.dot(Ms),f=r*l-o*o;if(f===0)return s.set(0,0,0),null;const b=1/f,m=(l*c-o*d)*b,p=(r*d-o*c)*b;return s.set(1-m-p,p,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(r,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return As.setScalar(0),ws.setScalar(0),Rs.setScalar(0),As.fromBufferAttribute(e,t),ws.fromBufferAttribute(e,n),Rs.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(As,s.x),r.addScaledVector(ws,s.y),r.addScaledVector(Rs,s.z),r}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),mn.subVectors(e,t),Yt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;ui.subVectors(i,n),pi.subVectors(s,n),Ss.subVectors(e,n);const c=ui.dot(Ss),l=pi.dot(Ss);if(c<=0&&l<=0)return t.copy(n);Es.subVectors(e,i);const d=ui.dot(Es),f=pi.dot(Es);if(d>=0&&f<=d)return t.copy(i);const b=c*f-d*l;if(b<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(ui,r);Ts.subVectors(e,s);const m=ui.dot(Ts),p=pi.dot(Ts);if(p>=0&&m<=p)return t.copy(s);const g=m*l-c*p;if(g<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(pi,o);const u=d*p-m*f;if(u<=0&&f-d>=0&&m-p>=0)return Ho.subVectors(s,i),o=(f-d)/(f-d+(m-p)),t.copy(i).addScaledVector(Ho,o);const h=1/(u+g+b);return r=g*h,o=b*h,t.copy(n).addScaledVector(ui,r).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Cs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=Jr(e,1),t=Ne(t,0,1),n=Ne(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Cs(r,s,e+1/3),this.g=Cs(r,s,e),this.b=Cs(r,s,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return ze.fromWorkingColorSpace(Et.copy(this),e),Math.round(Ne(Et.r*255,0,255))*65536+Math.round(Ne(Et.g*255,0,255))*256+Math.round(Ne(Et.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,s=Et.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=d<=.5?f/(r+o):f/(2-r-o),r){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=xt){ze.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Ta);const n=sa(In.h,Ta.h,t),i=sa(In.s,Ta.s,t),s=sa(In.l,Ta.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ee;Ee.NAMES=hl;let mh=0;class sn extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=Ai,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=Js,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==Js&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nn extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new D,Aa=new we;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kr,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kr&&(e.usage=this.usage),e}}class fl extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ul extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gh=0;const zt=new ke,Is=new ot,bi=new D,Ft=new cn,Ji=new cn,_t=new D;class tn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ol(e)?ul:fl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ft.min,Ji.min),Ft.expandByPoint(_t),_t.addVectors(Ft.max,Ji.max),Ft.expandByPoint(_t)):(Ft.expandByPoint(Ji.min),Ft.expandByPoint(Ji.max))}Ft.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)_t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)_t.fromBufferAttribute(o,l),c&&(bi.fromBufferAttribute(e,l),_t.add(bi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new D,c[I]=new D;const l=new D,d=new D,f=new D,b=new we,m=new we,p=new we,g=new D,u=new D;function h(I,E,M){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),b.fromBufferAttribute(s,I),m.fromBufferAttribute(s,E),p.fromBufferAttribute(s,M),d.sub(l),f.sub(l),m.sub(b),p.sub(b);const C=1/(m.x*p.y-p.x*m.y);isFinite(C)&&(g.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(C),u.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(C),o[I].add(g),o[E].add(g),o[M].add(g),c[I].add(u),c[E].add(u),c[M].add(u))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,E=x.length;I<E;++I){const M=x[I],C=M.start,H=M.count;for(let F=C,X=C+H;F<X;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new D,_=new D,w=new D,R=new D;function T(I){w.fromBufferAttribute(i,I),R.copy(w);const E=o[I];v.copy(E),v.sub(w.multiplyScalar(w.dot(E))).normalize(),_.crossVectors(R,E);const C=_.dot(c[I])<0?-1:1;r.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,E=x.length;I<E;++I){const M=x[I],C=M.start,H=M.count;for(let F=C,X=C+H;F<X;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let b=0,m=n.count;b<m;b++)n.setXYZ(b,0,0,0);const i=new D,s=new D,r=new D,o=new D,c=new D,l=new D,d=new D,f=new D;if(e)for(let b=0,m=e.count;b<m;b+=3){const p=e.getX(b+0),g=e.getX(b+1),u=e.getX(b+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,u),d.subVectors(r,s),f.subVectors(i,s),d.cross(f),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,u),o.add(d),c.add(d),l.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let b=0,m=t.count;b<m;b+=3)i.fromBufferAttribute(t,b+0),s.fromBufferAttribute(t,b+1),r.fromBufferAttribute(t,b+2),d.subVectors(r,s),f.subVectors(i,s),d.cross(f),n.setXYZ(b+0,d.x,d.y,d.z),n.setXYZ(b+1,d.x,d.y,d.z),n.setXYZ(b+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,b=new l.constructor(c.length*d);let m=0,p=0;for(let g=0,u=c.length;g<u;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*d;for(let h=0;h<d;h++)b[p++]=l[m++]}return new Pt(b,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,f=l.length;d<f;d++){const b=l[d],m=e(b,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,b=l.length;f<b;f++){const m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let b=0,m=f.length;b<m;b++)d.push(f[b].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new ke,qn=new pa,wa=new ln,zo=new D,Ra=new D,Ca=new D,Ia=new D,Ps=new D,Pa=new D,Go=new D,Da=new D;class it extends ot{constructor(e=new tn,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Pa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],f=s[c];d!==0&&(Ps.fromBufferAttribute(f,e),r?Pa.addScaledVector(Ps,d):Pa.addScaledVector(Ps.sub(t),d))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),qn.copy(e.ray).recast(e.near),!(wa.containsPoint(qn.origin)===!1&&(qn.intersectSphere(wa,zo)===null||qn.origin.distanceToSquared(zo)>(e.far-e.near)**2))&&(jo.copy(s).invert(),qn.copy(e.ray).applyMatrix4(jo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,b=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,g=b.length;p<g;p++){const u=b[p],h=r[u.materialIndex],x=Math.max(u.start,m.start),v=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let _=x,w=v;_<w;_+=3){const R=o.getX(_),T=o.getX(_+1),I=o.getX(_+2);i=ka(this,h,e,n,l,d,f,R,T,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{const p=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let u=p,h=g;u<h;u+=3){const x=o.getX(u),v=o.getX(u+1),_=o.getX(u+2);i=ka(this,r,e,n,l,d,f,x,v,_),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,g=b.length;p<g;p++){const u=b[p],h=r[u.materialIndex],x=Math.max(u.start,m.start),v=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let _=x,w=v;_<w;_+=3){const R=_,T=_+1,I=_+2;i=ka(this,h,e,n,l,d,f,R,T,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{const p=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let u=p,h=g;u<h;u+=3){const x=u,v=u+1,_=u+2;i=ka(this,r,e,n,l,d,f,x,v,_),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}}}function _h(a,e,t,n,i,s,r,o){let c;if(e.side===Ct?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===En,o),c===null)return null;Da.copy(o),Da.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Da);return l<t.near||l>t.far?null:{distance:l,point:Da.clone(),object:a}}function ka(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,Ra),a.getVertexPosition(c,Ca),a.getVertexPosition(l,Ia);const d=_h(a,e,t,n,Ra,Ca,Ia,Go);if(d){const f=new D;Zt.getBarycoord(Go,Ra,Ca,Ia,f),i&&(d.uv=Zt.getInterpolatedAttribute(i,o,c,l,f,new we)),s&&(d.uv1=Zt.getInterpolatedAttribute(s,o,c,l,f,new we)),r&&(d.normal=Zt.getInterpolatedAttribute(r,o,c,l,f,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const b={a:o,b:c,c:l,normal:new D,materialIndex:0};Zt.getNormal(Ra,Ca,Ia,b.normal),d.face=b,d.barycoord=f}return d}class ji extends tn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],f=[];let b=0,m=0;p("z","y","x",-1,-1,n,t,e,r,s,0),p("z","y","x",1,-1,n,t,-e,r,s,1),p("x","z","y",1,1,e,n,t,i,r,2),p("x","z","y",1,-1,e,n,-t,i,r,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(f,2));function p(g,u,h,x,v,_,w,R,T,I,E){const M=_/T,C=w/I,H=_/2,F=w/2,X=R/2,V=T+1,G=I+1;let J=0,j=0;const te=new D;for(let ce=0;ce<G;ce++){const me=ce*C-F;for(let Ce=0;Ce<V;Ce++){const Je=Ce*M-H;te[g]=Je*x,te[u]=me*v,te[h]=X,l.push(te.x,te.y,te.z),te[g]=0,te[u]=0,te[h]=R>0?1:-1,d.push(te.x,te.y,te.z),f.push(Ce/T),f.push(1-ce/I),J+=1}}for(let ce=0;ce<I;ce++)for(let me=0;me<T;me++){const Ce=b+me+V*ce,Je=b+me+V*(ce+1),W=b+(me+1)+V*(ce+1),ee=b+(me+1)+V*ce;c.push(Ce,Je,ee),c.push(Je,W,ee),j+=6}o.addGroup(m,j,E),m+=j,b+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(a){const e={};for(let t=0;t<a.length;t++){const n=Fi(a[t]);for(const i in n)e[i]=n[i]}return e}function xh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function pl(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const vh={clone:Fi,merge:wt};var yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=Mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bl extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new D,Vo=new we,Wo=new we;class Rt extends bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ni*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Vo,Wo),t.subVectors(Wo,Vo)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Sh extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt(mi,gi,e,t);i.layers=this.layers,this.add(i);const s=new Rt(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new Rt(mi,gi,e,t);r.layers=this.layers,this.add(r);const o=new Rt(mi,gi,e,t);o.layers=this.layers,this.add(o);const c=new Rt(mi,gi,e,t);c.layers=this.layers,this.add(c);const l=new Rt(mi,gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,d]=this.children,f=e.getRenderTarget(),b=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,b,m),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ml extends vt{constructor(e,t,n,i,s,r,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,i,s,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ml(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ji(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Bn});s.uniforms.tEquirect.value=t;const r=new it(i,s),o=t.minFilter;return t.minFilter===yn&&(t.minFilter=Ot),new Sh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}class gl extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Th{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kr,this.updateRanges=[],this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new D;class Zr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qo=new D,Xo=new Xe,Ko=new Xe,Ah=new D,Yo=new ke,La=new D,Ds=new ln,Jo=new ke,ks=new pa;class wh extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mo,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),e.ray.intersectsSphere(Ds)!==!1&&(Jo.copy(i).invert(),ks.copy(e.ray).applyMatrix4(Jo),!(this.boundingBox!==null&&ks.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xo.fromBufferAttribute(i.attributes.skinIndex,e),Ko.fromBufferAttribute(i.attributes.skinWeight,e),qo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ko.getComponent(s);if(r!==0){const o=Xo.getComponent(s);Yo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ah.copy(qo).applyMatrix4(Yo),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _l extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xl extends vt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=It,d=It,f,b){super(null,r,o,c,l,d,i,s,f,b),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zo=new ke,Rh=new ke;class Qr{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Rh;Zo.multiplyMatrices(o,t[s]),Zo.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xl(t,e,e,Vt,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new _l),this.bones.push(r),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Lr extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _i=new ke,Qo=new ke,Ua=[],$o=new cn,Ch=new ke,Zi=new it,Qi=new ln;class Ih extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ch)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),$o.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union($o)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Qi.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_i),Qo.multiplyMatrices(n,_i),Zi.matrixWorld=Qo,Zi.raycast(e,Ua);for(let r=0,o=Ua.length;r<o;r++){const c=Ua[r];c.instanceId=s,c.object=this,t.push(c)}Ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(i*this.count),i,this.count,qr,Qt));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ls=new D,Ph=new D,Dh=new De;class kn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ls.subVectors(n,t).cross(Ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ls),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dh.getNormalMatrix(e),i=this.coplanarPoint(Ls).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ln,Na=new D;class $r{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,r=new kn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],c=i[3],l=i[4],d=i[5],f=i[6],b=i[7],m=i[8],p=i[9],g=i[10],u=i[11],h=i[12],x=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-s,b-l,u-m,_-h).normalize(),n[1].setComponents(c+s,b+l,u+m,_+h).normalize(),n[2].setComponents(c+r,b+d,u+p,_+x).normalize(),n[3].setComponents(c-r,b-d,u-p,_-x).normalize(),n[4].setComponents(c-o,b-f,u-g,_-v).normalize(),t===Mn)n[5].setComponents(c+o,b+f,u+g,_+v).normalize();else if(t===ts)n[5].setComponents(o,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eo extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ns=new D,is=new D,ec=new ke,$i=new pa,Fa=new ln,Us=new D,tc=new D;class to extends ot{constructor(e=new tn,t=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ns.fromBufferAttribute(t,i-1),is.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ns.distanceTo(is);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;ec.copy(i).invert(),$i.copy(e.ray).applyMatrix4(ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,b=n.attributes.position;if(d!==null){const m=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=m,u=p-1;g<u;g+=l){const h=d.getX(g),x=d.getX(g+1),v=Oa(this,e,$i,c,h,x);v&&t.push(v)}if(this.isLineLoop){const g=d.getX(p-1),u=d.getX(m),h=Oa(this,e,$i,c,g,u);h&&t.push(h)}}else{const m=Math.max(0,r.start),p=Math.min(b.count,r.start+r.count);for(let g=m,u=p-1;g<u;g+=l){const h=Oa(this,e,$i,c,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=Oa(this,e,$i,c,p-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Oa(a,e,t,n,i,s){const r=a.geometry.attributes.position;if(ns.fromBufferAttribute(r,i),is.fromBufferAttribute(r,s),t.distanceSqToSegment(ns,is,Us,tc)>n)return;Us.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Us);if(!(c<e.near||c>e.far))return{distance:c,point:tc.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:a}}const nc=new D,ic=new D;class vl extends to{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)nc.fromBufferAttribute(t,i),ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nc.distanceTo(ic);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kh extends to{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yl extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ac=new ke,Ur=new pa,Ba=new ln,Ha=new D;class Lh extends ot{constructor(e=new tn,t=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;ac.copy(i).invert(),Ur.copy(e.ray).applyMatrix4(ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const b=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let p=b,g=m;p<g;p++){const u=l.getX(p);Ha.fromBufferAttribute(f,u),sc(Ha,u,c,i,e,t,this)}}else{const b=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let p=b,g=m;p<g;p++)Ha.fromBufferAttribute(f,p),sc(Ha,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sc(a,e,t,n,i,s,r){const o=Ur.distanceSqToPoint(a);if(o<t){const c=new D;Ur.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class ei extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ml extends vt{constructor(e,t,n,i,s,r,o,c,l,d=wi){if(d!==wi&&d!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===wi&&(n=ti),n===void 0&&d===Ui&&(n=Li),super(null,i,s,r,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=c!==void 0?c:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rs extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,f=e/o,b=t/c,m=[],p=[],g=[],u=[];for(let h=0;h<d;h++){const x=h*b-r;for(let v=0;v<l;v++){const _=v*f-s;p.push(_,-x,0),g.push(0,0,1),u.push(v/o),u.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<o;x++){const v=x+l*h,_=x+l*(h+1),w=x+1+l*(h+1),R=x+1+l*h;m.push(v,_,R),m.push(_,w,R)}this.setIndex(m),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ha extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dn extends ha{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uh extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nh extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ja(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Fh(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Oh(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rc(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function Sl(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class ba{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bh extends ba{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Eo:s=e,o=2*t-n;break;case To:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eo:r=e,c=2*n-t;break;case To:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,f=this._offsetNext,b=this._weightPrev,m=this._weightNext,p=(n-t)/(i-t),g=p*p,u=g*p,h=-b*u+2*b*g-b*p,x=(1+b)*u+(-1.5-2*b)*g+(-.5+b)*p+1,v=(-1-m)*u+(1.5+m)*g+.5*p,_=m*u-m*g;for(let w=0;w!==o;++w)s[w]=h*r[d+w]+x*r[l+w]+v*r[c+w]+_*r[f+w];return s}}class Hh extends ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),f=1-d;for(let b=0;b!==o;++b)s[b]=r[l+b]*f+r[c+b]*d;return s}}class jh extends ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return fs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&Fh(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fs,s=e.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const f=o*n,b=f-n,m=f+n;for(let p=0;p!==n;++p){const g=t[f+p];if(g!==t[b+p]||g!==t[m+p]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const f=o*n,b=r*n;for(let m=0;m!==n;++m)t[b+m]=t[f+m]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=la;class zi extends hn{constructor(e,t,n){super(e,t,n)}}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ca;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class El extends hn{}El.prototype.ValueTypeName="color";class Oi extends hn{}Oi.prototype.ValueTypeName="number";class zh extends ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)rn.slerpFlat(s,0,r,l-o,r,l,c);return s}}class Bi extends hn{InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}}Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends hn{constructor(e,t,n){super(e,t,n)}}Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ca;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends hn{}Hi.prototype.ValueTypeName="vector";class Gh{constructor(e="",t=-1,n=[],i=Td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Wh(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const d=Oh(c);c=rc(c,1,d),l=rc(l,1,d),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new Oi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(s);if(d&&d.length>1){const f=d[1];let b=i[f];b||(i[f]=b=[]),b.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,b,m,p,g){if(m.length!==0){const u=[],h=[];Sl(m,u,h,p),u.length!==0&&g.push(new f(b,u,h))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const b=l[f].keys;if(!(!b||b.length===0))if(b[0].morphTargets){const m={};let p;for(p=0;p<b.length;p++)if(b[p].morphTargets)for(let g=0;g<b[p].morphTargets.length;g++)m[b[p].morphTargets[g]]=-1;for(const g in m){const u=[],h=[];for(let x=0;x!==b[p].morphTargets.length;++x){const v=b[p];u.push(v.time),h.push(v.morphTarget===g?1:0)}i.push(new Oi(".morphTargetInfluence["+g+"]",u,h))}c=m.length*r}else{const m=".bones["+t[f].name+"]";n(Hi,m+".position",b,"pos",i),n(Bi,m+".quaternion",b,"rot",i),n(Hi,m+".scale",b,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vh(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return El;case"quaternion":return Bi;case"bool":case"boolean":return zi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Wh(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vh(a.type);if(a.times===void 0){const t=[],n=[];Sl(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Fn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class qh{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,b=l.length;f<b;f+=2){const m=l[f],p=l[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return p}return null}}}const Xh=new qh;class Vi{constructor(e){this.manager=e!==void 0?e:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const _n={};class Kh extends Error{constructor(e,t){super(e),this.response=t}}class Tl extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:n,onError:i});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=_n[e],f=l.body.getReader(),b=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=b?parseInt(b):0,p=m!==0;let g=0;const u=new ReadableStream({start(h){x();function x(){f.read().then(({done:v,value:_})=>{if(v)h.close();else{g+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:m});for(let R=0,T=d.length;R<T;R++){const I=d[R];I.onProgress&&I.onProgress(w)}h.enqueue(_),x()}},v=>{h.error(v)})}}});return new Response(u)}else throw new Kh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),b=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(b);return l.arrayBuffer().then(p=>m.decode(p))}}}).then(l=>{Fn.add(e,l);const d=_n[e];delete _n[e];for(let f=0,b=d.length;f<b;f++){const m=d[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const d=_n[e];if(d===void 0)throw this.manager.itemError(e),l;delete _n[e];for(let f=0,b=d.length;f<b;f++){const m=d[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yh extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Fn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=da("img");function c(){d(),Fn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){d(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Jh extends Vi{constructor(e){super(e)}load(e,t,n,i){const s=new vt,r=new Yh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class os extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zh extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ns=new ke,oc=new D,cc=new D;class no{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(oc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),Ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ns),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qh extends no{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ni*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $h extends os{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lc=new ke,ea=new D,Fs=new D;class ef extends no{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),Fs.copy(n.position),Fs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fs),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc)}}class Al extends os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class io extends bl{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tf extends no{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wl extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new tf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ra{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nf extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Fn.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Fn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Fn.add(e,c),s.manager.itemStart(e)}}class af extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const ao="\\[\\]\\.:\\/",sf=new RegExp("["+ao+"]","g"),so="[^"+ao+"]",rf="[^"+ao.replace("\\.","")+"]",of=/((?:WC+[\/:])*)/.source.replace("WC",so),cf=/(WCOD+)?/.source.replace("WCOD",rf),lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",so),df=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",so),hf=new RegExp("^"+of+cf+lf+df+"$"),ff=["material","materials","bones","map"];class uf{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sf,"")}static parseTrackName(e){const t=hf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ff.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=uf;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ne(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pf extends vl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);const s=t/2,r=e/t,o=e/2,c=[],l=[];for(let b=0,m=0,p=-o;b<=t;b++,p+=r){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const g=b===s?n:i;g.toArray(l,m),m+=3,g.toArray(l,m),m+=3,g.toArray(l,m),m+=3,g.toArray(l,m),m+=3}const d=new tn;d.setAttribute("position",new en(c,3)),d.setAttribute("color",new en(l,3));const f=new eo({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class bf extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function hc(a,e,t,n){const i=mf(n);switch(t){case Zc:return a*e;case $c:return a*e;case el:return a*e*2;case qr:return a*e/i.components*i.byteLength;case Xr:return a*e/i.components*i.byteLength;case tl:return a*e*2/i.components*i.byteLength;case Kr:return a*e*2/i.components*i.byteLength;case Qc:return a*e*3/i.components*i.byteLength;case Vt:return a*e*4/i.components*i.byteLength;case Yr:return a*e*4/i.components*i.byteLength;case Xa:case Ka:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Ja:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case or:case lr:return Math.max(a,16)*Math.max(e,8)/4;case rr:case cr:return Math.max(a,8)*Math.max(e,8)/2;case dr:case hr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case fr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ur:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case pr:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case br:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case mr:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case gr:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case _r:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case xr:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case vr:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case yr:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Er:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Tr:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ar:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Za:case wr:case Rr:return Math.ceil(a/4)*Math.ceil(e/4)*16;case nl:case Cr:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ir:case Pr:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mf(a){switch(a){case Tn:case Kc:return{byteLength:1,components:1};case oa:case Yc:case ua:return{byteLength:2,components:1};case Vr:case Wr:return{byteLength:2,components:4};case ti:case Gr:case Qt:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rl(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function gf(a){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,b=a.createBuffer();a.bindBuffer(c,b),a.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=a.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=a.HALF_FLOAT:m=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=a.SHORT;else if(l instanceof Uint32Array)m=a.UNSIGNED_INT;else if(l instanceof Int32Array)m=a.INT;else if(l instanceof Int8Array)m=a.BYTE;else if(l instanceof Uint8Array)m=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:b,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(a.bindBuffer(l,o),f.length===0)a.bufferSubData(l,0,d);else{f.sort((m,p)=>m.start-p.start);let b=0;for(let m=1;m<f.length;m++){const p=f[b],g=f[m];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++b,f[b]=g)}f.length=b+1;for(let m=0,p=f.length;m<p;m++){const g=f[m];a.bufferSubData(l,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:yf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:Ef,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:wf,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:If,iridescence_fragment:Pf,bumpmap_pars_fragment:Df,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:Hf,common:jf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Wf,emissivemap_fragment:qf,emissivemap_pars_fragment:Xf,colorspace_fragment:Kf,colorspace_pars_fragment:Yf,envmap_fragment:Jf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Qf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:du,envmap_vertex:eu,fog_vertex:tu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:au,gradientmap_pars_fragment:su,lightmap_pars_fragment:ru,lights_lambert_fragment:ou,lights_lambert_pars_fragment:cu,lights_pars_begin:lu,lights_toon_fragment:hu,lights_toon_pars_fragment:fu,lights_phong_fragment:uu,lights_phong_pars_fragment:pu,lights_physical_fragment:bu,lights_physical_pars_fragment:mu,lights_fragment_begin:gu,lights_fragment_maps:_u,lights_fragment_end:xu,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:yu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:Au,map_particle_pars_fragment:wu,metalnessmap_fragment:Ru,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Iu,morphcolor_vertex:Pu,morphnormal_vertex:Du,morphtarget_pars_vertex:ku,morphtarget_vertex:Lu,normal_fragment_begin:Uu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:Ou,normal_vertex:Bu,normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Gu,iridescence_pars_fragment:Vu,opaque_fragment:Wu,packing:qu,premultiplied_alpha_fragment:Xu,project_vertex:Ku,dithering_fragment:Yu,dithering_pars_fragment:Ju,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:Qu,shadowmap_pars_fragment:$u,shadowmap_pars_vertex:ep,shadowmap_vertex:tp,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:ap,skinning_vertex:sp,skinnormal_vertex:rp,specularmap_fragment:op,specularmap_pars_fragment:cp,tonemapping_fragment:lp,tonemapping_pars_fragment:dp,transmission_fragment:hp,transmission_pars_fragment:fp,uv_pars_fragment:up,uv_pars_vertex:pp,uv_vertex:bp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:xp,backgroundCube_frag:vp,cube_vert:yp,cube_frag:Mp,depth_vert:Sp,depth_frag:Ep,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:wp,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Ip,meshbasic_vert:Pp,meshbasic_frag:Dp,meshlambert_vert:kp,meshlambert_frag:Lp,meshmatcap_vert:Up,meshmatcap_frag:Np,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:Bp,meshphong_frag:Hp,meshphysical_vert:jp,meshphysical_frag:zp,meshtoon_vert:Gp,meshtoon_frag:Vp,points_vert:Wp,points_frag:qp,shadow_vert:Xp,shadow_frag:Kp,sprite_vert:Yp,sprite_frag:Jp},ne={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},nn={basic:{uniforms:wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:wt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:wt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:wt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:wt([ne.points,ne.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:wt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:wt([ne.common,ne.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:wt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:wt([ne.sprite,ne.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:wt([ne.common,ne.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:wt([ne.lights,ne.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};nn.physical={uniforms:wt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const za={r:0,b:0,g:0},Kn=new on,Zp=new ke;function Qp(a,e,t,n,i,s,r){const o=new Ee(0);let c=s===!0?0:1,l,d,f=null,b=0,m=null;function p(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function g(v){let _=!1;const w=p(v);w===null?h(o,c):w&&w.isColor&&(h(w,1),_=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function u(v,_){const w=p(_);w&&(w.isCubeTexture||w.mapping===ss)?(d===void 0&&(d=new it(new ji(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Fi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Kn.copy(_.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Kn)),d.material.toneMapped=ze.getTransfer(w.colorSpace)!==et,(f!==w||b!==w.version||m!==a.toneMapping)&&(d.material.needsUpdate=!0,f=w,b=w.version,m=a.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new it(new rs(2,2),new jn({name:"BackgroundMaterial",uniforms:Fi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ze.getTransfer(w.colorSpace)!==et,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||b!==w.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,f=w,b=w.version,m=a.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function h(v,_){v.getRGB(za,pl(a)),n.buffers.color.setClear(za.r,za.g,za.b,_,r)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,h(o,c)},render:g,addToRenderList:u,dispose:x}}function $p(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=b(null);let s=i,r=!1;function o(M,C,H,F,X){let V=!1;const G=f(F,H,C);s!==G&&(s=G,l(s.object)),V=m(M,F,H,X),V&&p(M,F,H,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,_(M,C,H,F),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return a.createVertexArray()}function l(M){return a.bindVertexArray(M)}function d(M){return a.deleteVertexArray(M)}function f(M,C,H){const F=H.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let V=X[C.id];V===void 0&&(V={},X[C.id]=V);let G=V[F];return G===void 0&&(G=b(c()),V[F]=G),G}function b(M){const C=[],H=[],F=[];for(let X=0;X<t;X++)C[X]=0,H[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,C,H,F){const X=s.attributes,V=C.attributes;let G=0;const J=H.getAttributes();for(const j in J)if(J[j].location>=0){const ce=X[j];let me=V[j];if(me===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function p(M,C,H,F){const X={},V=C.attributes;let G=0;const J=H.getAttributes();for(const j in J)if(J[j].location>=0){let ce=V[j];ce===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),X[j]=me,G++}s.attributes=X,s.attributesNum=G,s.index=F}function g(){const M=s.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function u(M){h(M,0)}function h(M,C){const H=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;H[M]=1,F[M]===0&&(a.enableVertexAttribArray(M),F[M]=1),X[M]!==C&&(a.vertexAttribDivisor(M,C),X[M]=C)}function x(){const M=s.newAttributes,C=s.enabledAttributes;for(let H=0,F=C.length;H<F;H++)C[H]!==M[H]&&(a.disableVertexAttribArray(H),C[H]=0)}function v(M,C,H,F,X,V,G){G===!0?a.vertexAttribIPointer(M,C,H,X,V):a.vertexAttribPointer(M,C,H,F,X,V)}function _(M,C,H,F){g();const X=F.attributes,V=H.getAttributes(),G=C.defaultAttributeValues;for(const J in V){const j=V[J];if(j.location>=0){let te=X[J];if(te===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const ce=te.normalized,me=te.itemSize,Ce=e.get(te);if(Ce===void 0)continue;const Je=Ce.buffer,W=Ce.type,ee=Ce.bytesPerElement,be=W===a.INT||W===a.UNSIGNED_INT||te.gpuType===Gr;if(te.isInterleavedBufferAttribute){const se=te.data,Se=se.stride,Ie=te.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<j.locationSize;Fe++)h(j.location+Fe,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<j.locationSize;Fe++)u(j.location+Fe);a.bindBuffer(a.ARRAY_BUFFER,Je);for(let Fe=0;Fe<j.locationSize;Fe++)v(j.location+Fe,me/j.locationSize,W,ce,Se*ee,(Ie+me/j.locationSize*Fe)*ee,be)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)h(j.location+se,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<j.locationSize;se++)u(j.location+se);a.bindBuffer(a.ARRAY_BUFFER,Je);for(let se=0;se<j.locationSize;se++)v(j.location+se,me/j.locationSize,W,ce,me*ee,me/j.locationSize*se*ee,be)}}else if(G!==void 0){const ce=G[J];if(ce!==void 0)switch(ce.length){case 2:a.vertexAttrib2fv(j.location,ce);break;case 3:a.vertexAttrib3fv(j.location,ce);break;case 4:a.vertexAttrib4fv(j.location,ce);break;default:a.vertexAttrib1fv(j.location,ce)}}}}x()}function w(){I();for(const M in n){const C=n[M];for(const H in C){const F=C[H];for(const X in F)d(F[X].object),delete F[X];delete C[H]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const F=C[H];for(const X in F)d(F[X].object),delete F[X];delete C[H]}delete n[M.id]}function T(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const F=H[M.id];for(const X in F)d(F[X].object),delete F[X];delete H[M.id]}}function I(){E(),r=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:u,disableUnusedAttributes:x}}function eb(a,e,t){let n;function i(l){n=l}function s(l,d){a.drawArrays(n,l,d),t.update(d,n,1)}function r(l,d,f){f!==0&&(a.drawArraysInstanced(n,l,d,f),t.update(d,n,f))}function o(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let m=0;for(let p=0;p<f;p++)m+=d[p];t.update(m,n,1)}function c(l,d,f,b){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<l.length;p++)r(l[p],d[p],b[p]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,b,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g]*b[g];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function tb(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==Vt&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const I=T===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Tn&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qt&&!I)}function c(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,b=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),u=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),h=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),v=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,R=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:b,maxTextures:m,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:w,maxSamples:R}}function nb(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new kn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,b){const m=f.length!==0||b||n!==0||i;return i=b,n=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,b){t=d(f,b,0)},this.setState=function(f,b,m){const p=f.clippingPlanes,g=f.clipIntersection,u=f.clipShadows,h=a.get(f);if(!i||p===null||p.length===0||s&&!u)s?d(null):l();else{const x=s?0:n,v=x*4;let _=h.clippingState||null;c.value=_,_=d(p,b,v,m);for(let w=0;w!==v;++w)_[w]=t[w];h.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,b,m,p){const g=f!==null?f.length:0;let u=null;if(g!==0){if(u=c.value,p!==!0||u===null){const h=m+g*4,x=b.matrixWorldInverse;o.getNormalMatrix(x),(u===null||u.length<h)&&(u=new Float32Array(h));for(let v=0,_=m;v!==g;++v,_+=4)r.copy(f[v]).applyMatrix4(x,o),r.normal.toArray(u,_),u[_+3]=r.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,u}}function ib(a){let e=new WeakMap;function t(r,o){return o===ar?r.mapping=Pi:o===sr&&(r.mapping=Di),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===ar||o===sr)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Eh(c.height);return l.fromEquirectangularTexture(a,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Si=4,fc=[.125,.215,.35,.446,.526,.582],$n=20,Os=new io,uc=new Ee;let Bs=null,Hs=0,js=0,zs=!1;const Zn=(1+Math.sqrt(5))/2,xi=1/Zn,pc=[new D(-Zn,xi,0),new D(Zn,xi,0),new D(-xi,0,Zn),new D(xi,0,Zn),new D(0,Zn,-xi),new D(0,Zn,xi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Nr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bs,Hs,js),this._renderer.xr.enabled=zs,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ua,format:Vt,colorSpace:Dt,depthBuffer:!1},i=bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ab(s)),this._blurMaterial=sb(s,e,t)}return i}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Os)}_sceneToCubeUV(e,t,n,i){const o=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,b=d.toneMapping;d.getClearColor(uc),d.toneMapping=Hn,d.autoClear=!1;const m=new Nn({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),p=new it(new ji,m);let g=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,g=!0):(m.color.copy(uc),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):x===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const v=this._cubeSize;Ga(i,x*v,h>2?v:0,v,v),d.setRenderTarget(i),g&&d.render(p,o),d.render(e,o)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=b,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pi||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new it(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ga(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pc[(i-s-1)%pc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new it(this._lodPlanes[i],l),b=l.uniforms,m=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$n-1),g=s/p,u=isFinite(s)?1+Math.floor(d*g):$n;u>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${$n}`);const h=[];let x=0;for(let T=0;T<$n;++T){const I=T/g,E=Math.exp(-I*I/2);h.push(E),T===0?x+=E:T<u&&(x+=2*E)}for(let T=0;T<h.length;T++)h[T]=h[T]/x;b.envMap.value=e.texture,b.samples.value=u,b.weights.value=h,b.latitudinal.value=r==="latitudinal",o&&(b.poleAxis.value=o);const{_lodMax:v}=this;b.dTheta.value=p,b.mipInt.value=v-n;const _=this._sizeLods[i],w=3*_*(i>v-Si?i-v+Si:0),R=4*(this._cubeSize-_);Ga(t,w,R,3*_,2*_),c.setRenderTarget(t),c.render(f,Os)}}function ab(a){const e=[],t=[],n=[];let i=a;const s=a-Si+1+fc.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let c=1/o;r>a-Si?c=fc[r-a+Si-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,f=1+l,b=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,p=6,g=3,u=2,h=1,x=new Float32Array(g*p*m),v=new Float32Array(u*p*m),_=new Float32Array(h*p*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,I=R>2?0:-1,E=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(E,g*p*R),v.set(b,u*p*R);const M=[R,R,R,R,R,R];_.set(M,h*p*R)}const w=new tn;w.setAttribute("position",new Pt(x,g)),w.setAttribute("uv",new Pt(v,u)),w.setAttribute("faceIndex",new Pt(_,h)),e.push(w),i>Si&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bc(a,e,t){const n=new ni(a,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function sb(a,e,t){const n=new Float32Array($n),i=new D(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function mc(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function gc(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rb(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ar||c===sr,d=c===Pi||c===Di;if(l||d){let f=e.get(o);const b=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==b)return t===null&&(t=new Nr(a)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&i(m)?(t===null&&(t=new Nr(a)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ob(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cb(a,e,t,n){const i={},s=new WeakMap;function r(f){const b=f.target;b.index!==null&&e.remove(b.index);for(const p in b.attributes)e.remove(b.attributes[p]);b.removeEventListener("dispose",r),delete i[b.id];const m=s.get(b);m&&(e.remove(m),s.delete(b)),n.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function o(f,b){return i[b.id]===!0||(b.addEventListener("dispose",r),i[b.id]=!0,t.memory.geometries++),b}function c(f){const b=f.attributes;for(const m in b)e.update(b[m],a.ARRAY_BUFFER)}function l(f){const b=[],m=f.index,p=f.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let v=0,_=x.length;v<_;v+=3){const w=x[v+0],R=x[v+1],T=x[v+2];b.push(w,R,R,T,T,w)}}else if(p!==void 0){const x=p.array;g=p.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const w=v+0,R=v+1,T=v+2;b.push(w,R,R,T,T,w)}}else return;const u=new(ol(b)?ul:fl)(b,1);u.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,u)}function d(f){const b=s.get(f);if(b){const m=f.index;m!==null&&b.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function lb(a,e,t){let n;function i(b){n=b}let s,r;function o(b){s=b.type,r=b.bytesPerElement}function c(b,m){a.drawElements(n,m,s,b*r),t.update(m,n,1)}function l(b,m,p){p!==0&&(a.drawElementsInstanced(n,m,s,b*r,p),t.update(m,n,p))}function d(b,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,b,0,p);let u=0;for(let h=0;h<p;h++)u+=m[h];t.update(u,n,1)}function f(b,m,p,g){if(p===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<b.length;h++)l(b[h]/r,m[h],g[h]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,s,b,0,g,0,p);let h=0;for(let x=0;x<p;x++)h+=m[x]*g[x];t.update(h,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function db(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hb(a,e,t){const n=new WeakMap,i=new Xe;function s(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let b=n.get(o);if(b===void 0||b.count!==f){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;b!==void 0&&b.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),u===!0&&(_=3);let w=o.attributes.position.count*_,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*R*4*f),I=new ll(T,w,R,f);I.type=Qt,I.needsUpdate=!0;const E=_*4;for(let C=0;C<f;C++){const H=h[C],F=x[C],X=v[C],V=w*R*4*C;for(let G=0;G<H.count;G++){const J=G*E;p===!0&&(i.fromBufferAttribute(H,G),T[V+J+0]=i.x,T[V+J+1]=i.y,T[V+J+2]=i.z,T[V+J+3]=0),g===!0&&(i.fromBufferAttribute(F,G),T[V+J+4]=i.x,T[V+J+5]=i.y,T[V+J+6]=i.z,T[V+J+7]=0),u===!0&&(i.fromBufferAttribute(X,G),T[V+J+8]=i.x,T[V+J+9]=i.y,T[V+J+10]=i.z,T[V+J+11]=X.itemSize===4?i.w:1)}}b={count:f,texture:I,size:new we(w,R)},n.set(o,b),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let p=0;for(let u=0;u<l.length;u++)p+=l[u];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(a,"morphTargetBaseInfluence",g),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",b.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}return{update:s}}function fb(a,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,f=e.get(c,d);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const b=c.skeleton;i.get(b)!==l&&(b.update(),i.set(b,l))}return f}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}const Cl=new vt,_c=new Ml(1,1),Il=new ll,Pl=new ch,Dl=new ml,xc=[],vc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Wi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=xc[i];if(s===void 0&&(s=new Float32Array(i),xc[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function mt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function gt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function cs(a,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function ub(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function pb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2fv(this.addr,e),gt(t,e)}}function bb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;a.uniform3fv(this.addr,e),gt(t,e)}}function mb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4fv(this.addr,e),gt(t,e)}}function gb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Sc.set(n),a.uniformMatrix2fv(this.addr,!1,Sc),gt(t,n)}}function _b(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Mc.set(n),a.uniformMatrix3fv(this.addr,!1,Mc),gt(t,n)}}function xb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;yc.set(n),a.uniformMatrix4fv(this.addr,!1,yc),gt(t,n)}}function vb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function yb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2iv(this.addr,e),gt(t,e)}}function Mb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3iv(this.addr,e),gt(t,e)}}function Sb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4iv(this.addr,e),gt(t,e)}}function Eb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Tb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2uiv(this.addr,e),gt(t,e)}}function Ab(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3uiv(this.addr,e),gt(t,e)}}function wb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4uiv(this.addr,e),gt(t,e)}}function Rb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(_c.compareFunction=sl,s=_c):s=Cl,t.setTexture2D(e||s,i)}function Cb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pl,i)}function Ib(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dl,i)}function Pb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Il,i)}function Db(a){switch(a){case 5126:return ub;case 35664:return pb;case 35665:return bb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return xb;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return Eb;case 36294:return Tb;case 36295:return Ab;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Pb}}function kb(a,e){a.uniform1fv(this.addr,e)}function Lb(a,e){const t=Wi(e,this.size,2);a.uniform2fv(this.addr,t)}function Ub(a,e){const t=Wi(e,this.size,3);a.uniform3fv(this.addr,t)}function Nb(a,e){const t=Wi(e,this.size,4);a.uniform4fv(this.addr,t)}function Fb(a,e){const t=Wi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Ob(a,e){const t=Wi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Bb(a,e){const t=Wi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Hb(a,e){a.uniform1iv(this.addr,e)}function jb(a,e){a.uniform2iv(this.addr,e)}function zb(a,e){a.uniform3iv(this.addr,e)}function Gb(a,e){a.uniform4iv(this.addr,e)}function Vb(a,e){a.uniform1uiv(this.addr,e)}function Wb(a,e){a.uniform2uiv(this.addr,e)}function qb(a,e){a.uniform3uiv(this.addr,e)}function Xb(a,e){a.uniform4uiv(this.addr,e)}function Kb(a,e,t){const n=this.cache,i=e.length,s=cs(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Cl,s[r])}function Yb(a,e,t){const n=this.cache,i=e.length,s=cs(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Pl,s[r])}function Jb(a,e,t){const n=this.cache,i=e.length,s=cs(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Dl,s[r])}function Zb(a,e,t){const n=this.cache,i=e.length,s=cs(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Il,s[r])}function Qb(a){switch(a){case 5126:return kb;case 35664:return Lb;case 35665:return Ub;case 35666:return Nb;case 35674:return Fb;case 35675:return Ob;case 35676:return Bb;case 5124:case 35670:return Hb;case 35667:case 35671:return jb;case 35668:case 35672:return zb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return Wb;case 36295:return qb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Zb}}class $b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qb(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function Ec(a,e){a.seq.push(e),a.map[e.id]=e}function nm(a,e,t){const n=a.name,i=n.length;for(Gs.lastIndex=0;;){const s=Gs.exec(n),r=Gs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Ec(t,l===void 0?new $b(o,a,e):new em(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new tm(o),Ec(t,f)),t=f}}}class Qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);nm(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Tc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const im=37297;let am=0;function sm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Ac=new De;function rm(a){ze._getMatrix(Ac,ze.workingColorSpace,a);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(a)){case es:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function wc(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+sm(a.getShaderSource(e),r)}else return i}function om(a,e){const t=rm(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cm(a,e){let t;switch(e){case _d:t="Linear";break;case xd:t="Reinhard";break;case vd:t="Cineon";break;case Wc:t="ACESFilmic";break;case Md:t="AgX";break;case Sd:t="Neutral";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new D;function lm(){ze.getLuminanceCoefficients(Va);const a=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function hm(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fm(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ia(a){return a!==""}function Rc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(a){return a.replace(um,bm)}const pm=new Map;function bm(a,e){let t=Ue[e];if(t===void 0){const n=pm.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fr(t)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(a){return a.replace(mm,gm)}function gm(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pc(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _m(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Pi:case Di:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function ym(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case md:e="ENVMAP_BLENDING_MIX";break;case gd:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sm(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=_m(t),l=xm(t),d=vm(t),f=ym(t),b=Mm(t),m=dm(t),p=hm(s),g=i.createProgram();let u,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ia).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(u=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Hn?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),r=Fr(r),r=Rc(r,t),r=Cc(r,t),o=Fr(o),o=Rc(o,t),o=Cc(o,t),r=Ic(r),o=Ic(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+u+r,_=x+h+o,w=Tc(i,i.VERTEX_SHADER,v),R=Tc(i,i.FRAGMENT_SHADER,_);i.attachShader(g,w),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(a.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(w).trim(),X=i.getShaderInfoLog(R).trim();let V=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,w,R);else{const J=wc(i,w,"vertex"),j=wc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+J+`
`+j)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||X==="")&&(G=!1);G&&(C.diagnostics={runnable:V,programLog:H,vertexShader:{log:F,prefix:u},fragmentShader:{log:X,prefix:h}})}i.deleteShader(w),i.deleteShader(R),I=new Qa(i,g),E=fm(i,g)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,im)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let Em=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Am(e),t.set(e,n)),n}}class Am{constructor(e){this.id=Em++,this.code=e,this.usedTimes=0}}function wm(a,e,t,n,i,s,r){const o=new dl,c=new Tm,l=new Set,d=[],f=i.logarithmicDepthBuffer,b=i.vertexTextures;let m=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function u(E,M,C,H,F){const X=H.fog,V=F.geometry,G=E.isMeshStandardMaterial?H.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),j=J&&J.mapping===ss?J.image.height:null,te=p[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=ce!==void 0?ce.length:0;let Ce=0;V.morphAttributes.position!==void 0&&(Ce=1),V.morphAttributes.normal!==void 0&&(Ce=2),V.morphAttributes.color!==void 0&&(Ce=3);let Je,W,ee,be;if(te){const Ze=nn[te];Je=Ze.vertexShader,W=Ze.fragmentShader}else Je=E.vertexShader,W=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),be=c.getFragmentShaderID(E);const se=a.getRenderTarget(),Se=a.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,ct=!!E.map,Ge=!!E.matcap,ht=!!J,P=!!E.aoMap,Bt=!!E.lightMap,Be=!!E.bumpMap,He=!!E.normalMap,_e=!!E.displacementMap,st=!!E.emissiveMap,xe=!!E.metalnessMap,A=!!E.roughnessMap,y=E.anisotropy>0,N=E.clearcoat>0,K=E.dispersion>0,Z=E.iridescence>0,q=E.sheen>0,ge=E.transmission>0,re=y&&!!E.anisotropyMap,he=N&&!!E.clearcoatMap,Ve=N&&!!E.clearcoatNormalMap,$=N&&!!E.clearcoatRoughnessMap,fe=Z&&!!E.iridescenceMap,Me=Z&&!!E.iridescenceThicknessMap,Te=q&&!!E.sheenColorMap,ue=q&&!!E.sheenRoughnessMap,je=!!E.specularMap,Le=!!E.specularColorMap,nt=!!E.specularIntensityMap,k=ge&&!!E.transmissionMap,ie=ge&&!!E.thicknessMap,z=!!E.gradientMap,Y=!!E.alphaMap,le=E.alphaTest>0,oe=!!E.alphaHash,Pe=!!E.extensions;let lt=Hn;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(lt=a.toneMapping);const Mt={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:W,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:se===null?a.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Dt,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:Ge,envMap:ht,envMapMode:ht&&J.mapping,envMapCubeUVHeight:j,aoMap:P,lightMap:Bt,bumpMap:Be,normalMap:He,displacementMap:b&&_e,emissiveMap:st,normalMapObjectSpace:He&&E.normalMapType===Cd,normalMapTangentSpace:He&&E.normalMapType===al,metalnessMap:xe,roughnessMap:A,anisotropy:y,anisotropyMap:re,clearcoat:N,clearcoatMap:he,clearcoatNormalMap:Ve,clearcoatRoughnessMap:$,dispersion:K,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Me,sheen:q,sheenColorMap:Te,sheenRoughnessMap:ue,specularMap:je,specularColorMap:Le,specularIntensityMap:nt,transmission:ge,transmissionMap:k,thicknessMap:ie,gradientMap:z,opaque:E.transparent===!1&&E.blending===Ai&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:le,alphaHash:oe,combine:E.combine,mapUv:ct&&g(E.map.channel),aoMapUv:P&&g(E.aoMap.channel),lightMapUv:Bt&&g(E.lightMap.channel),bumpMapUv:Be&&g(E.bumpMap.channel),normalMapUv:He&&g(E.normalMap.channel),displacementMapUv:_e&&g(E.displacementMap.channel),emissiveMapUv:st&&g(E.emissiveMap.channel),metalnessMapUv:xe&&g(E.metalnessMap.channel),roughnessMapUv:A&&g(E.roughnessMap.channel),anisotropyMapUv:re&&g(E.anisotropyMap.channel),clearcoatMapUv:he&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(E.sheenRoughnessMap.channel),specularMapUv:je&&g(E.specularMap.channel),specularColorMapUv:Le&&g(E.specularColorMap.channel),specularIntensityMapUv:nt&&g(E.specularIntensityMap.channel),transmissionMapUv:k&&g(E.transmissionMap.channel),thicknessMapUv:ie&&g(E.thicknessMap.channel),alphaMapUv:Y&&g(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(He||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(ct||Y),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:lt,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&ze.getTransfer(E.map.colorSpace)===et,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&ze.getTransfer(E.emissiveMap.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===Ct,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&E.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(x(M,E),v(M,E),M.push(a.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=p[E.type];let C;if(M){const H=nn[M];C=vh.clone(H.uniforms)}else C=E.uniforms;return C}function w(E,M){let C;for(let H=0,F=d.length;H<F;H++){const X=d[H];if(X.cacheKey===M){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Sm(a,M,E,s),d.push(C)),C}function R(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function T(E){c.remove(E)}function I(){c.dispose()}return{getParameters:u,getProgramCacheKey:h,getUniforms:_,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:d,dispose:I}}function Rm(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Cm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Dc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function kc(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f,b,m,p,g,u){let h=a[e];return h===void 0?(h={id:f.id,object:f,geometry:b,material:m,groupOrder:p,renderOrder:f.renderOrder,z:g,group:u},a[e]=h):(h.id=f.id,h.object=f,h.geometry=b,h.material=m,h.groupOrder=p,h.renderOrder=f.renderOrder,h.z=g,h.group=u),e++,h}function o(f,b,m,p,g,u){const h=r(f,b,m,p,g,u);m.transmission>0?n.push(h):m.transparent===!0?i.push(h):t.push(h)}function c(f,b,m,p,g,u){const h=r(f,b,m,p,g,u);m.transmission>0?n.unshift(h):m.transparent===!0?i.unshift(h):t.unshift(h)}function l(f,b){t.length>1&&t.sort(f||Cm),n.length>1&&n.sort(b||Dc),i.length>1&&i.sort(b||Dc)}function d(){for(let f=e,b=a.length;f<b;f++){const m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:d,sort:l}}function Im(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new kc,a.set(n,[r])):i>=s.length?(r=new kc,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Pm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ee};break;case"SpotLight":t={position:new D,direction:new D,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function Dm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let km=0;function Lm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Um(a){const e=new Pm,t=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new ke,r=new ke;function o(l){let d=0,f=0,b=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,p=0,g=0,u=0,h=0,x=0,v=0,_=0,w=0,R=0,T=0;l.sort(Lm);for(let E=0,M=l.length;E<M;E++){const C=l[E],H=C.color,F=C.intensity,X=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=H.r*F,f+=H.g*F,b+=H.b*F;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],F);T++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,j=t.get(C);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=C.shadow.matrix,x++}n.directional[m]=G,m++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(H).multiplyScalar(F),G.distance=X,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[g]=G;const J=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,J.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[g]=J.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=V,_++}g++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(H).multiplyScalar(F),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[u]=G,u++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const J=C.shadow,j=t.get(C);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,v++}n.point[p]=G,p++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(F),G.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[h]=G,h++}}u>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=b;const I=n.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==g||I.rectAreaLength!==u||I.hemiLength!==h||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==w||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=u,n.point.length=p,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,I.directionalLength=m,I.pointLength=p,I.spotLength=g,I.rectAreaLength=u,I.hemiLength=h,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=w,I.numLightProbes=T,n.version=km++)}function c(l,d){let f=0,b=0,m=0,p=0,g=0;const u=d.matrixWorldInverse;for(let h=0,x=l.length;h<x;h++){const v=l[h];if(v.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(u),f++}else if(v.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(u),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(u),m++}else if(v.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(u),r.identity(),s.copy(v.matrixWorld),s.premultiply(u),r.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),p++}else if(v.isPointLight){const _=n.point[b];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(u),b++}else if(v.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(u),g++}}}return{setup:o,setupView:c,state:n}}function Lc(a){const e=new Um(a),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:r}}function Nm(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new Lc(a),e.set(i,[o])):s>=r.length?(o=new Lc(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bm(a,e,t){let n=new $r;const i=new we,s=new we,r=new Xe,o=new Uh({depthPacking:Rd}),c=new Nh,l={},d=t.maxTextureSize,f={[En]:Ct,[Ct]:En,[an]:an},b=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Fm,fragmentShader:Om}),m=b.clone();m.defines.HORIZONTAL_PASS=1;const p=new tn;p.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new it(p,b),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let h=this.type;this.render=function(R,T,I){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||R.length===0)return;const E=a.getRenderTarget(),M=a.getActiveCubeFace(),C=a.getActiveMipmapLevel(),H=a.state;H.setBlending(Bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=h!==xn&&this.type===xn,X=h===xn&&this.type!==xn;for(let V=0,G=R.length;V<G;V++){const J=R[V],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const te=j.getFrameExtents();if(i.multiply(te),s.copy(j.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/te.x),i.x=s.x*te.x,j.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/te.y),i.y=s.y*te.y,j.mapSize.y=s.y)),j.map===null||F===!0||X===!0){const me=this.type!==xn?{minFilter:It,magFilter:It}:{};j.map!==null&&j.map.dispose(),j.map=new ni(i.x,i.y,me),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const ce=j.getViewportCount();for(let me=0;me<ce;me++){const Ce=j.getViewport(me);r.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),H.viewport(r),j.updateMatrices(J,me),n=j.getFrustum(),_(T,I,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===xn&&x(j,I),j.needsUpdate=!1}h=this.type,u.needsUpdate=!1,a.setRenderTarget(E,M,C)};function x(R,T){const I=e.update(g);b.defines.VSM_SAMPLES!==R.blurSamples&&(b.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,b.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(i.x,i.y)),b.uniforms.shadow_pass.value=R.map.texture,b.uniforms.resolution.value=R.mapSize,b.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(T,null,I,b,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(T,null,I,m,g,null)}function v(R,T,I,E){let M=null;const C=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?c:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=M.uuid,F=T.uuid;let X=l[H];X===void 0&&(X={},l[H]=X);let V=X[F];V===void 0&&(V=M.clone(),X[F]=V,T.addEventListener("dispose",w)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,E===xn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=a.properties.get(M);H.light=I}return M}function _(R,T,I,E,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const F=e.update(R),X=R.material;if(Array.isArray(X)){const V=F.groups;for(let G=0,J=V.length;G<J;G++){const j=V[G],te=X[j.materialIndex];if(te&&te.visible){const ce=v(R,te,E,M);R.onBeforeShadow(a,R,T,I,F,ce,j),a.renderBufferDirect(I,null,F,ce,R,j),R.onAfterShadow(a,R,T,I,F,ce,j)}}}else if(X.visible){const V=v(R,X,E,M);R.onBeforeShadow(a,R,T,I,F,V,null),a.renderBufferDirect(I,null,F,V,R,null),R.onAfterShadow(a,R,T,I,F,V,null)}}const H=R.children;for(let F=0,X=H.length;F<X;F++)_(H[F],T,I,E,M)}function w(R){R.target.removeEventListener("dispose",w);for(const I in l){const E=l[I],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Hm={[Zs]:Qs,[$s]:nr,[er]:ir,[Ii]:tr,[Qs]:Zs,[nr]:$s,[ir]:er,[tr]:Ii};function jm(a,e){function t(){let k=!1;const ie=new Xe;let z=null;const Y=new Xe(0,0,0,0);return{setMask:function(le){z!==le&&!k&&(a.colorMask(le,le,le,le),z=le)},setLocked:function(le){k=le},setClear:function(le,oe,Pe,lt,Mt){Mt===!0&&(le*=lt,oe*=lt,Pe*=lt),ie.set(le,oe,Pe,lt),Y.equals(ie)===!1&&(a.clearColor(le,oe,Pe,lt),Y.copy(ie))},reset:function(){k=!1,z=null,Y.set(-1,0,0,0)}}}function n(){let k=!1,ie=!1,z=null,Y=null,le=null;return{setReversed:function(oe){if(ie!==oe){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const lt=le;le=null,this.setClear(lt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?se(a.DEPTH_TEST):Se(a.DEPTH_TEST)},setMask:function(oe){z!==oe&&!k&&(a.depthMask(oe),z=oe)},setFunc:function(oe){if(ie&&(oe=Hm[oe]),Y!==oe){switch(oe){case Zs:a.depthFunc(a.NEVER);break;case Qs:a.depthFunc(a.ALWAYS);break;case $s:a.depthFunc(a.LESS);break;case Ii:a.depthFunc(a.LEQUAL);break;case er:a.depthFunc(a.EQUAL);break;case tr:a.depthFunc(a.GEQUAL);break;case nr:a.depthFunc(a.GREATER);break;case ir:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Y=oe}},setLocked:function(oe){k=oe},setClear:function(oe){le!==oe&&(ie&&(oe=1-oe),a.clearDepth(oe),le=oe)},reset:function(){k=!1,z=null,Y=null,le=null,ie=!1}}}function i(){let k=!1,ie=null,z=null,Y=null,le=null,oe=null,Pe=null,lt=null,Mt=null;return{setTest:function(Ze){k||(Ze?se(a.STENCIL_TEST):Se(a.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!k&&(a.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Wt,fn){(z!==Ze||Y!==Wt||le!==fn)&&(a.stencilFunc(Ze,Wt,fn),z=Ze,Y=Wt,le=fn)},setOp:function(Ze,Wt,fn){(oe!==Ze||Pe!==Wt||lt!==fn)&&(a.stencilOp(Ze,Wt,fn),oe=Ze,Pe=Wt,lt=fn)},setLocked:function(Ze){k=Ze},setClear:function(Ze){Mt!==Ze&&(a.clearStencil(Ze),Mt=Ze)},reset:function(){k=!1,ie=null,z=null,Y=null,le=null,oe=null,Pe=null,lt=null,Mt=null}}}const s=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let d={},f={},b=new WeakMap,m=[],p=null,g=!1,u=null,h=null,x=null,v=null,_=null,w=null,R=null,T=new Ee(0,0,0),I=0,E=!1,M=null,C=null,H=null,F=null,X=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=J>=2);let te=null,ce={};const me=a.getParameter(a.SCISSOR_BOX),Ce=a.getParameter(a.VIEWPORT),Je=new Xe().fromArray(me),W=new Xe().fromArray(Ce);function ee(k,ie,z,Y){const le=new Uint8Array(4),oe=a.createTexture();a.bindTexture(k,oe),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<z;Pe++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(ie,0,a.RGBA,1,1,Y,0,a.RGBA,a.UNSIGNED_BYTE,le):a.texImage2D(ie+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,le);return oe}const be={};be[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(a.DEPTH_TEST),r.setFunc(Ii),Be(!1),He(_o),se(a.CULL_FACE),P(Bn);function se(k){d[k]!==!0&&(a.enable(k),d[k]=!0)}function Se(k){d[k]!==!1&&(a.disable(k),d[k]=!1)}function Ie(k,ie){return f[k]!==ie?(a.bindFramebuffer(k,ie),f[k]=ie,k===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ie),k===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ie),!0):!1}function Fe(k,ie){let z=m,Y=!1;if(k){z=b.get(ie),z===void 0&&(z=[],b.set(ie,z));const le=k.textures;if(z.length!==le.length||z[0]!==a.COLOR_ATTACHMENT0){for(let oe=0,Pe=le.length;oe<Pe;oe++)z[oe]=a.COLOR_ATTACHMENT0+oe;z.length=le.length,Y=!0}}else z[0]!==a.BACK&&(z[0]=a.BACK,Y=!0);Y&&a.drawBuffers(z)}function ct(k){return p!==k?(a.useProgram(k),p=k,!0):!1}const Ge={[Qn]:a.FUNC_ADD,[$l]:a.FUNC_SUBTRACT,[ed]:a.FUNC_REVERSE_SUBTRACT};Ge[td]=a.MIN,Ge[nd]=a.MAX;const ht={[id]:a.ZERO,[ad]:a.ONE,[sd]:a.SRC_COLOR,[Ys]:a.SRC_ALPHA,[hd]:a.SRC_ALPHA_SATURATE,[ld]:a.DST_COLOR,[od]:a.DST_ALPHA,[rd]:a.ONE_MINUS_SRC_COLOR,[Js]:a.ONE_MINUS_SRC_ALPHA,[dd]:a.ONE_MINUS_DST_COLOR,[cd]:a.ONE_MINUS_DST_ALPHA,[fd]:a.CONSTANT_COLOR,[ud]:a.ONE_MINUS_CONSTANT_COLOR,[pd]:a.CONSTANT_ALPHA,[bd]:a.ONE_MINUS_CONSTANT_ALPHA};function P(k,ie,z,Y,le,oe,Pe,lt,Mt,Ze){if(k===Bn){g===!0&&(Se(a.BLEND),g=!1);return}if(g===!1&&(se(a.BLEND),g=!0),k!==Ql){if(k!==u||Ze!==E){if((h!==Qn||_!==Qn)&&(a.blendEquation(a.FUNC_ADD),h=Qn,_=Qn),Ze)switch(k){case Ai:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case xo:a.blendFunc(a.ONE,a.ONE);break;case vo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case yo:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ai:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case xo:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case vo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case yo:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,v=null,w=null,R=null,T.set(0,0,0),I=0,u=k,E=Ze}return}le=le||ie,oe=oe||z,Pe=Pe||Y,(ie!==h||le!==_)&&(a.blendEquationSeparate(Ge[ie],Ge[le]),h=ie,_=le),(z!==x||Y!==v||oe!==w||Pe!==R)&&(a.blendFuncSeparate(ht[z],ht[Y],ht[oe],ht[Pe]),x=z,v=Y,w=oe,R=Pe),(lt.equals(T)===!1||Mt!==I)&&(a.blendColor(lt.r,lt.g,lt.b,Mt),T.copy(lt),I=Mt),u=k,E=!1}function Bt(k,ie){k.side===an?Se(a.CULL_FACE):se(a.CULL_FACE);let z=k.side===Ct;ie&&(z=!z),Be(z),k.blending===Ai&&k.transparent===!1?P(Bn):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const Y=k.stencilWrite;o.setTest(Y),Y&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),st(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?se(a.SAMPLE_ALPHA_TO_COVERAGE):Se(a.SAMPLE_ALPHA_TO_COVERAGE)}function Be(k){M!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),M=k)}function He(k){k!==Yl?(se(a.CULL_FACE),k!==C&&(k===_o?a.cullFace(a.BACK):k===Jl?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Se(a.CULL_FACE),C=k}function _e(k){k!==H&&(G&&a.lineWidth(k),H=k)}function st(k,ie,z){k?(se(a.POLYGON_OFFSET_FILL),(F!==ie||X!==z)&&(a.polygonOffset(ie,z),F=ie,X=z)):Se(a.POLYGON_OFFSET_FILL)}function xe(k){k?se(a.SCISSOR_TEST):Se(a.SCISSOR_TEST)}function A(k){k===void 0&&(k=a.TEXTURE0+V-1),te!==k&&(a.activeTexture(k),te=k)}function y(k,ie,z){z===void 0&&(te===null?z=a.TEXTURE0+V-1:z=te);let Y=ce[z];Y===void 0&&(Y={type:void 0,texture:void 0},ce[z]=Y),(Y.type!==k||Y.texture!==ie)&&(te!==z&&(a.activeTexture(z),te=z),a.bindTexture(k,ie||be[k]),Y.type=k,Y.texture=ie)}function N(){const k=ce[te];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){Je.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Je.copy(k))}function ue(k){W.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function je(k,ie){let z=l.get(ie);z===void 0&&(z=new WeakMap,l.set(ie,z));let Y=z.get(k);Y===void 0&&(Y=a.getUniformBlockIndex(ie,k.name),z.set(k,Y))}function Le(k,ie){const Y=l.get(ie).get(k);c.get(ie)!==Y&&(a.uniformBlockBinding(ie,Y,k.__bindingPointIndex),c.set(ie,Y))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},te=null,ce={},f={},b=new WeakMap,m=[],p=null,g=!1,u=null,h=null,x=null,v=null,_=null,w=null,R=null,T=new Ee(0,0,0),I=0,E=!1,M=null,C=null,H=null,F=null,X=null,Je.set(0,0,a.canvas.width,a.canvas.height),W.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:se,disable:Se,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:ct,setBlending:P,setMaterial:Bt,setFlipSided:Be,setCullFace:He,setLineWidth:_e,setPolygonOffset:st,setScissorTest:xe,activeTexture:A,bindTexture:y,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Me,updateUBOMapping:je,uniformBlockBinding:Le,texStorage2D:Ve,texStorage3D:$,texSubImage2D:q,texSubImage3D:ge,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Te,viewport:ue,reset:nt}}function zm(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,d=new WeakMap;let f;const b=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,y){return m?new OffscreenCanvas(A,y):da("canvas")}function g(A,y,N){let K=1;const Z=xe(A);if((Z.width>N||Z.height>N)&&(K=N/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(K*Z.width),ge=Math.floor(K*Z.height);f===void 0&&(f=p(q,ge));const re=y?p(q,ge):f;return re.width=q,re.height=ge,re.getContext("2d").drawImage(A,0,0,q,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ge+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function u(A){return A.generateMipmaps}function h(A){a.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?a.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(A,y,N,K,Z=!1){if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===a.RED&&(N===a.FLOAT&&(q=a.R32F),N===a.HALF_FLOAT&&(q=a.R16F),N===a.UNSIGNED_BYTE&&(q=a.R8)),y===a.RED_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.R8UI),N===a.UNSIGNED_SHORT&&(q=a.R16UI),N===a.UNSIGNED_INT&&(q=a.R32UI),N===a.BYTE&&(q=a.R8I),N===a.SHORT&&(q=a.R16I),N===a.INT&&(q=a.R32I)),y===a.RG&&(N===a.FLOAT&&(q=a.RG32F),N===a.HALF_FLOAT&&(q=a.RG16F),N===a.UNSIGNED_BYTE&&(q=a.RG8)),y===a.RG_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RG8UI),N===a.UNSIGNED_SHORT&&(q=a.RG16UI),N===a.UNSIGNED_INT&&(q=a.RG32UI),N===a.BYTE&&(q=a.RG8I),N===a.SHORT&&(q=a.RG16I),N===a.INT&&(q=a.RG32I)),y===a.RGB_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RGB8UI),N===a.UNSIGNED_SHORT&&(q=a.RGB16UI),N===a.UNSIGNED_INT&&(q=a.RGB32UI),N===a.BYTE&&(q=a.RGB8I),N===a.SHORT&&(q=a.RGB16I),N===a.INT&&(q=a.RGB32I)),y===a.RGBA_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),N===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),N===a.UNSIGNED_INT&&(q=a.RGBA32UI),N===a.BYTE&&(q=a.RGBA8I),N===a.SHORT&&(q=a.RGBA16I),N===a.INT&&(q=a.RGBA32I)),y===a.RGB&&N===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),y===a.RGBA){const ge=Z?es:ze.getTransfer(K);N===a.FLOAT&&(q=a.RGBA32F),N===a.HALF_FLOAT&&(q=a.RGBA16F),N===a.UNSIGNED_BYTE&&(q=ge===et?a.SRGB8_ALPHA8:a.RGBA8),N===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),N===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(A,y){let N;return A?y===null||y===ti||y===Li?N=a.DEPTH24_STENCIL8:y===Qt?N=a.DEPTH32F_STENCIL8:y===oa&&(N=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ti||y===Li?N=a.DEPTH_COMPONENT24:y===Qt?N=a.DEPTH_COMPONENT32F:y===oa&&(N=a.DEPTH_COMPONENT16),N}function w(A,y){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){const y=A.target;y.removeEventListener("dispose",R),I(y),y.isVideoTexture&&d.delete(y)}function T(A){const y=A.target;y.removeEventListener("dispose",T),M(y)}function I(A){const y=n.get(A);if(y.__webglInit===void 0)return;const N=A.source,K=b.get(N);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(A),Object.keys(K).length===0&&b.delete(N)}n.remove(A)}function E(A){const y=n.get(A);a.deleteTexture(y.__webglTexture);const N=A.source,K=b.get(N);delete K[y.__cacheKey],r.memory.textures--}function M(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)a.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else a.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)a.deleteFramebuffer(y.__webglFramebuffer[K]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=A.textures;for(let K=0,Z=N.length;K<Z;K++){const q=n.get(N[K]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(N[K])}n.remove(A)}let C=0;function H(){C=0}function F(){const A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function X(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function V(A,y){const N=n.get(A);if(A.isVideoTexture&&_e(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,A,y);return}}t.bindTexture(a.TEXTURE_2D,N.__webglTexture,a.TEXTURE0+y)}function G(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){W(N,A,y);return}t.bindTexture(a.TEXTURE_2D_ARRAY,N.__webglTexture,a.TEXTURE0+y)}function J(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){W(N,A,y);return}t.bindTexture(a.TEXTURE_3D,N.__webglTexture,a.TEXTURE0+y)}function j(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ee(N,A,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+y)}const te={[ki]:a.REPEAT,[Un]:a.CLAMP_TO_EDGE,[$a]:a.MIRRORED_REPEAT},ce={[It]:a.NEAREST,[Xc]:a.NEAREST_MIPMAP_NEAREST,[na]:a.NEAREST_MIPMAP_LINEAR,[Ot]:a.LINEAR,[qa]:a.LINEAR_MIPMAP_NEAREST,[yn]:a.LINEAR_MIPMAP_LINEAR},me={[Id]:a.NEVER,[Nd]:a.ALWAYS,[Pd]:a.LESS,[sl]:a.LEQUAL,[Dd]:a.EQUAL,[Ud]:a.GEQUAL,[kd]:a.GREATER,[Ld]:a.NOTEQUAL};function Ce(A,y){if(y.type===Qt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===qa||y.magFilter===na||y.magFilter===yn||y.minFilter===Ot||y.minFilter===qa||y.minFilter===na||y.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,te[y.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,te[y.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,te[y.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,ce[y.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===It||y.minFilter!==na&&y.minFilter!==yn||y.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(A,y){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let Z=b.get(K);Z===void 0&&(Z={},b.set(K,Z));const q=X(y);if(q!==A.__cacheKey){Z[q]===void 0&&(Z[q]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,N=!0),Z[q].usedTimes++;const ge=Z[A.__cacheKey];ge!==void 0&&(Z[A.__cacheKey].usedTimes--,ge.usedTimes===0&&E(y)),A.__cacheKey=q,A.__webglTexture=Z[q].texture}return N}function W(A,y,N){let K=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=a.TEXTURE_3D);const Z=Je(A,y),q=y.source;t.bindTexture(K,A.__webglTexture,a.TEXTURE0+N);const ge=n.get(q);if(q.version!==ge.__version||Z===!0){t.activeTexture(a.TEXTURE0+N);const re=ze.getPrimaries(ze.workingColorSpace),he=y.colorSpace===Ln?null:ze.getPrimaries(y.colorSpace),Ve=y.colorSpace===Ln||re===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let $=g(y.image,!1,i.maxTextureSize);$=st(y,$);const fe=s.convert(y.format,y.colorSpace),Me=s.convert(y.type);let Te=v(y.internalFormat,fe,Me,y.colorSpace,y.isVideoTexture);Ce(K,y);let ue;const je=y.mipmaps,Le=y.isVideoTexture!==!0,nt=ge.__version===void 0||Z===!0,k=q.dataReady,ie=w(y,$);if(y.isDepthTexture)Te=_(y.format===Ui,y.type),nt&&(Le?t.texStorage2D(a.TEXTURE_2D,1,Te,$.width,$.height):t.texImage2D(a.TEXTURE_2D,0,Te,$.width,$.height,0,fe,Me,null));else if(y.isDataTexture)if(je.length>0){Le&&nt&&t.texStorage2D(a.TEXTURE_2D,ie,Te,je[0].width,je[0].height);for(let z=0,Y=je.length;z<Y;z++)ue=je[z],Le?k&&t.texSubImage2D(a.TEXTURE_2D,z,0,0,ue.width,ue.height,fe,Me,ue.data):t.texImage2D(a.TEXTURE_2D,z,Te,ue.width,ue.height,0,fe,Me,ue.data);y.generateMipmaps=!1}else Le?(nt&&t.texStorage2D(a.TEXTURE_2D,ie,Te,$.width,$.height),k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,$.width,$.height,fe,Me,$.data)):t.texImage2D(a.TEXTURE_2D,0,Te,$.width,$.height,0,fe,Me,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&nt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ie,Te,je[0].width,je[0].height,$.depth);for(let z=0,Y=je.length;z<Y;z++)if(ue=je[z],y.format!==Vt)if(fe!==null)if(Le){if(k)if(y.layerUpdates.size>0){const le=hc(ue.width,ue.height,y.format,y.type);for(const oe of y.layerUpdates){const Pe=ue.data.subarray(oe*le/ue.data.BYTES_PER_ELEMENT,(oe+1)*le/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,z,0,0,oe,ue.width,ue.height,1,fe,Pe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,$.depth,fe,ue.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,z,Te,ue.width,ue.height,$.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,$.depth,fe,Me,ue.data):t.texImage3D(a.TEXTURE_2D_ARRAY,z,Te,ue.width,ue.height,$.depth,0,fe,Me,ue.data)}else{Le&&nt&&t.texStorage2D(a.TEXTURE_2D,ie,Te,je[0].width,je[0].height);for(let z=0,Y=je.length;z<Y;z++)ue=je[z],y.format!==Vt?fe!==null?Le?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,z,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(a.TEXTURE_2D,z,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?k&&t.texSubImage2D(a.TEXTURE_2D,z,0,0,ue.width,ue.height,fe,Me,ue.data):t.texImage2D(a.TEXTURE_2D,z,Te,ue.width,ue.height,0,fe,Me,ue.data)}else if(y.isDataArrayTexture)if(Le){if(nt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ie,Te,$.width,$.height,$.depth),k)if(y.layerUpdates.size>0){const z=hc($.width,$.height,y.format,y.type);for(const Y of y.layerUpdates){const le=$.data.subarray(Y*z/$.data.BYTES_PER_ELEMENT,(Y+1)*z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Y,$.width,$.height,1,fe,Me,le)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,Me,$.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Te,$.width,$.height,$.depth,0,fe,Me,$.data);else if(y.isData3DTexture)Le?(nt&&t.texStorage3D(a.TEXTURE_3D,ie,Te,$.width,$.height,$.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,Me,$.data)):t.texImage3D(a.TEXTURE_3D,0,Te,$.width,$.height,$.depth,0,fe,Me,$.data);else if(y.isFramebufferTexture){if(nt)if(Le)t.texStorage2D(a.TEXTURE_2D,ie,Te,$.width,$.height);else{let z=$.width,Y=$.height;for(let le=0;le<ie;le++)t.texImage2D(a.TEXTURE_2D,le,Te,z,Y,0,fe,Me,null),z>>=1,Y>>=1}}else if(je.length>0){if(Le&&nt){const z=xe(je[0]);t.texStorage2D(a.TEXTURE_2D,ie,Te,z.width,z.height)}for(let z=0,Y=je.length;z<Y;z++)ue=je[z],Le?k&&t.texSubImage2D(a.TEXTURE_2D,z,0,0,fe,Me,ue):t.texImage2D(a.TEXTURE_2D,z,Te,fe,Me,ue);y.generateMipmaps=!1}else if(Le){if(nt){const z=xe($);t.texStorage2D(a.TEXTURE_2D,ie,Te,z.width,z.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,fe,Me,$)}else t.texImage2D(a.TEXTURE_2D,0,Te,fe,Me,$);u(y)&&h(K),ge.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ee(A,y,N){if(y.image.length!==6)return;const K=Je(A,y),Z=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+N);const q=n.get(Z);if(Z.version!==q.__version||K===!0){t.activeTexture(a.TEXTURE0+N);const ge=ze.getPrimaries(ze.workingColorSpace),re=y.colorSpace===Ln?null:ze.getPrimaries(y.colorSpace),he=y.colorSpace===Ln||ge===re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ve=y.isCompressedTexture||y.image[0].isCompressedTexture,$=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!Ve&&!$?fe[Y]=g(y.image[Y],!0,i.maxCubemapSize):fe[Y]=$?y.image[Y].image:y.image[Y],fe[Y]=st(y,fe[Y]);const Me=fe[0],Te=s.convert(y.format,y.colorSpace),ue=s.convert(y.type),je=v(y.internalFormat,Te,ue,y.colorSpace),Le=y.isVideoTexture!==!0,nt=q.__version===void 0||K===!0,k=Z.dataReady;let ie=w(y,Me);Ce(a.TEXTURE_CUBE_MAP,y);let z;if(Ve){Le&&nt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ie,je,Me.width,Me.height);for(let Y=0;Y<6;Y++){z=fe[Y].mipmaps;for(let le=0;le<z.length;le++){const oe=z[le];y.format!==Vt?Te!==null?Le?k&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,oe.width,oe.height,Te,oe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,je,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,oe.width,oe.height,Te,ue,oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,je,oe.width,oe.height,0,Te,ue,oe.data)}}}else{if(z=y.mipmaps,Le&&nt){z.length>0&&ie++;const Y=xe(fe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ie,je,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if($){Le?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,Te,ue,fe[Y].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,je,fe[Y].width,fe[Y].height,0,Te,ue,fe[Y].data);for(let le=0;le<z.length;le++){const Pe=z[le].image[Y].image;Le?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Pe.width,Pe.height,Te,ue,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,je,Pe.width,Pe.height,0,Te,ue,Pe.data)}}else{Le?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,ue,fe[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,je,Te,ue,fe[Y]);for(let le=0;le<z.length;le++){const oe=z[le];Le?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Te,ue,oe.image[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,je,Te,ue,oe.image[Y])}}}u(y)&&h(a.TEXTURE_CUBE_MAP),q.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function be(A,y,N,K,Z,q){const ge=s.convert(N.format,N.colorSpace),re=s.convert(N.type),he=v(N.internalFormat,ge,re,N.colorSpace),Ve=n.get(y),$=n.get(N);if($.__renderTarget=y,!Ve.__hasExternalTextures){const fe=Math.max(1,y.width>>q),Me=Math.max(1,y.height>>q);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,he,fe,Me,y.depth,0,ge,re,null):t.texImage2D(Z,q,he,fe,Me,0,ge,re,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),He(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,Z,$.__webglTexture,0,Be(y)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,K,Z,$.__webglTexture,q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function se(A,y,N){if(a.bindRenderbuffer(a.RENDERBUFFER,A),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,q=_(y.stencilBuffer,Z),ge=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=Be(y);He(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re,q,y.width,y.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,re,q,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,q,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,A)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const q=K[Z],ge=s.convert(q.format,q.colorSpace),re=s.convert(q.type),he=v(q.internalFormat,ge,re,q.colorSpace),Ve=Be(y);N&&He(y)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ve,he,y.width,y.height):He(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ve,he,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,he,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Se(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const Z=K.__webglTexture,q=Be(y);if(y.depthTexture.format===wi)He(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Ui)He(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const y=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Se(y.__webglFramebuffer,A)}else if(N){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=a.createRenderbuffer(),se(y.__webglDepthbuffer[K],A,!1);else{const Z=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[K];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,q)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),se(y.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,Z)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Fe(A,y,N){const K=n.get(A);y!==void 0&&be(K.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),N!==void 0&&Ie(A)}function ct(A){const y=A.texture,N=n.get(A),K=n.get(y);A.addEventListener("dispose",T);const Z=A.textures,q=A.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=y.version,r.memory.textures++),q){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let he=0;he<y.mipmaps.length;he++)N.__webglFramebuffer[re][he]=a.createFramebuffer()}else N.__webglFramebuffer[re]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)N.__webglFramebuffer[re]=a.createFramebuffer()}else N.__webglFramebuffer=a.createFramebuffer();if(ge)for(let re=0,he=Z.length;re<he;re++){const Ve=n.get(Z[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=a.createTexture(),r.memory.textures++)}if(A.samples>0&&He(A)===!1){N.__webglMultisampledFramebuffer=a.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const he=Z[re];N.__webglColorRenderbuffer[re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,N.__webglColorRenderbuffer[re]);const Ve=s.convert(he.format,he.colorSpace),$=s.convert(he.type),fe=v(he.internalFormat,Ve,$,he.colorSpace,A.isXRRenderTarget===!0),Me=Be(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,Me,fe,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,N.__webglColorRenderbuffer[re])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=a.createRenderbuffer(),se(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)be(N.__webglFramebuffer[re][he],A,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else be(N.__webglFramebuffer[re],A,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);u(y)&&h(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,he=Z.length;re<he;re++){const Ve=Z[re],$=n.get(Ve);t.bindTexture(a.TEXTURE_2D,$.__webglTexture),Ce(a.TEXTURE_2D,Ve),be(N.__webglFramebuffer,A,Ve,a.COLOR_ATTACHMENT0+re,a.TEXTURE_2D,0),u(Ve)&&h(a.TEXTURE_2D)}t.unbindTexture()}else{let re=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(re,K.__webglTexture),Ce(re,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)be(N.__webglFramebuffer[he],A,y,a.COLOR_ATTACHMENT0,re,he);else be(N.__webglFramebuffer,A,y,a.COLOR_ATTACHMENT0,re,0);u(y)&&h(re),t.unbindTexture()}A.depthBuffer&&Ie(A)}function Ge(A){const y=A.textures;for(let N=0,K=y.length;N<K;N++){const Z=y[N];if(u(Z)){const q=x(A),ge=n.get(Z).__webglTexture;t.bindTexture(q,ge),h(q),t.unbindTexture()}}}const ht=[],P=[];function Bt(A){if(A.samples>0){if(He(A)===!1){const y=A.textures,N=A.width,K=A.height;let Z=a.COLOR_BUFFER_BIT;const q=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=n.get(A),re=y.length>1;if(re)for(let he=0;he<y.length;he++)t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<y.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Ve=n.get(y[he]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ve,0)}a.blitFramebuffer(0,0,N,K,0,0,N,K,Z,a.NEAREST),c===!0&&(ht.length=0,P.length=0,ht.push(a.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ht.push(q),P.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,P)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<y.length;he++){t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const Ve=n.get(y[he]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.TEXTURE_2D,Ve,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function Be(A){return Math.min(i.maxSamples,A.samples)}function He(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(A){const y=r.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function st(A,y){const N=A.colorSpace,K=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Dt&&N!==Ln&&(ze.getTransfer(N)===et?(K!==Vt||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Fe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=be,this.useMultisampledRTT=He}function Gm(a,e){function t(n,i=Ln){let s;const r=ze.getTransfer(i);if(n===Tn)return a.UNSIGNED_BYTE;if(n===Vr)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Wr)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return a.BYTE;if(n===Yc)return a.SHORT;if(n===oa)return a.UNSIGNED_SHORT;if(n===Gr)return a.INT;if(n===ti)return a.UNSIGNED_INT;if(n===Qt)return a.FLOAT;if(n===ua)return a.HALF_FLOAT;if(n===Zc)return a.ALPHA;if(n===Qc)return a.RGB;if(n===Vt)return a.RGBA;if(n===$c)return a.LUMINANCE;if(n===el)return a.LUMINANCE_ALPHA;if(n===wi)return a.DEPTH_COMPONENT;if(n===Ui)return a.DEPTH_STENCIL;if(n===qr)return a.RED;if(n===Xr)return a.RED_INTEGER;if(n===tl)return a.RG;if(n===Kr)return a.RG_INTEGER;if(n===Yr)return a.RGBA_INTEGER;if(n===Xa||n===Ka||n===Ya||n===Ja)if(r===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rr||n===or||n===cr||n===lr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===or)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dr||n===hr||n===fr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dr||n===hr)return r===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ur||n===pr||n===br||n===mr||n===gr||n===_r||n===xr||n===vr||n===yr||n===Mr||n===Sr||n===Er||n===Tr||n===Ar)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ur)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===br)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_r)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Er)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tr)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ar)return r===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===wr||n===Rr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return r===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===Cr||n===Ir||n===Pr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const Vm={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const g of e.hand.values()){const u=t.getJointPose(g,n),h=this._getHandJoint(l,g);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],b=d.position.distanceTo(f.position),m=.02,p=.005;l.inputState.pinching&&b>m+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&b<=m-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new vt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:Wm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends ii{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,d=null,f=null,b=null,m=null,p=null;const g=new Xm,u=t.getContextAttributes();let h=null,x=null;const v=[],_=[],w=new we;let R=null;const T=new Rt;T.viewport=new Xe;const I=new Rt;I.viewport=new Xe;const E=[T,I],M=new af;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=v[W];return ee===void 0&&(ee=new Vs,v[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=v[W];return ee===void 0&&(ee=new Vs,v[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=v[W];return ee===void 0&&(ee=new Vs,v[W]=ee),ee.getHandSpace()};function F(W){const ee=_.indexOf(W.inputSource);if(ee===-1)return;const be=v[ee];be!==void 0&&(be.update(W.inputSource,W.frame,l||r),be.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",V);for(let W=0;W<v.length;W++){const ee=_[W];ee!==null&&(_[W]=null,v[W].disconnect(ee))}C=null,H=null,g.reset(),e.setRenderTarget(h),m=null,b=null,f=null,i=null,x=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return b!==null?b:m},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",X),i.addEventListener("inputsourceschange",V),u.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ee={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new ni(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let ee=null,be=null,se=null;u.depth&&(se=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=u.stencil?Ui:wi,be=u.stencil?Li:ti);const Se={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(i,t),b=f.createProjectionLayer(Se),i.updateRenderState({layers:[b]}),e.setPixelRatio(1),e.setSize(b.textureWidth,b.textureHeight,!1),x=new ni(b.textureWidth,b.textureHeight,{format:Vt,type:Tn,depthTexture:new Ml(b.textureWidth,b.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(W){for(let ee=0;ee<W.removed.length;ee++){const be=W.removed[ee],se=_.indexOf(be);se>=0&&(_[se]=null,v[se].disconnect(be))}for(let ee=0;ee<W.added.length;ee++){const be=W.added[ee];let se=_.indexOf(be);if(se===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=_.length){_.push(be),se=Ie;break}else if(_[Ie]===null){_[Ie]=be,se=Ie;break}if(se===-1)break}const Se=v[se];Se&&Se.connect(be)}}const G=new D,J=new D;function j(W,ee,be){G.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(be.matrixWorld);const se=G.distanceTo(J),Se=ee.projectionMatrix.elements,Ie=be.projectionMatrix.elements,Fe=Se[14]/(Se[10]-1),ct=Se[14]/(Se[10]+1),Ge=(Se[9]+1)/Se[5],ht=(Se[9]-1)/Se[5],P=(Se[8]-1)/Se[0],Bt=(Ie[8]+1)/Ie[0],Be=Fe*P,He=Fe*Bt,_e=se/(-P+Bt),st=_e*-P;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(st),W.translateZ(_e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Se[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=Fe+_e,A=ct+_e,y=Be-st,N=He+(se-st),K=Ge*ct/A*xe,Z=ht*ct/A*xe;W.projectionMatrix.makePerspective(y,N,K,Z,xe,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function te(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ee=W.near,be=W.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(be=g.depthFar)),M.near=I.near=T.near=ee,M.far=I.far=T.far=be,(C!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),T.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,M.layers.mask=T.layers.mask|I.layers.mask;const se=W.parent,Se=M.cameras;te(M,se);for(let Ie=0;Ie<Se.length;Ie++)te(Se[Ie],se);Se.length===2?j(M,T,I):M.projectionMatrix.copy(T.projectionMatrix),ce(W,M,se)};function ce(W,ee,be){be===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(be.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ni*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(b===null&&m===null))return c},this.setFoveation=function(W){c=W,b!==null&&(b.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let me=null;function Ce(W,ee){if(d=ee.getViewerPose(l||r),p=ee,d!==null){const be=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let se=!1;be.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Ie=0;Ie<be.length;Ie++){const Fe=be[Ie];let ct=null;if(m!==null)ct=m.getViewport(Fe);else{const ht=f.getViewSubImage(b,Fe);ct=ht.viewport,Ie===0&&(e.setRenderTargetTextures(x,ht.colorTexture,b.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(x))}let Ge=E[Ie];Ge===void 0&&(Ge=new Rt,Ge.layers.enable(Ie),Ge.viewport=new Xe,E[Ie]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ct.x,ct.y,ct.width,ct.height),Ie===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Ge)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Ie=f.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,i.renderState)}}for(let be=0;be<v.length;be++){const se=_[be],Se=v[be];se!==null&&Se!==void 0&&Se.update(se,ee,l||r)}me&&me(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Je=new Rl;Je.setAnimationLoop(Ce),this.setAnimationLoop=function(W){me=W},this.dispose=function(){}}}const Yn=new on,Ym=new ke;function Jm(a,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,pl(a)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function i(u,h,x,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(u,h):h.isMeshToonMaterial?(s(u,h),f(u,h)):h.isMeshPhongMaterial?(s(u,h),d(u,h)):h.isMeshStandardMaterial?(s(u,h),b(u,h),h.isMeshPhysicalMaterial&&m(u,h,_)):h.isMeshMatcapMaterial?(s(u,h),p(u,h)):h.isMeshDepthMaterial?s(u,h):h.isMeshDistanceMaterial?(s(u,h),g(u,h)):h.isMeshNormalMaterial?s(u,h):h.isLineBasicMaterial?(r(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?c(u,h,x,v):h.isSpriteMaterial?l(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Ct&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Ct&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,_=x.envMapRotation;v&&(u.envMap.value=v,Yn.copy(_),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),u.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Yn)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function r(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function c(u,h,x,v){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*x,u.scale.value=v*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function l(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function b(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,x){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ct&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function p(u,h){h.matcap&&(u.matcap.value=h.matcap)}function g(u,h){const x=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(x.matrixWorld),u.nearDistance.value=x.shadow.camera.near,u.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zm(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=i[x.id];_===void 0&&(p(x),_=d(x),i[x.id]=_,x.addEventListener("dispose",u));const w=v.program;n.updateUBOMapping(x,w);const R=e.render.frame;s[x.id]!==R&&(b(x),s[x.id]=R)}function d(x){const v=f();x.__bindingPointIndex=v;const _=a.createBuffer(),w=x.__size,R=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,w,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,_),_}function f(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(x){const v=i[x.id],_=x.uniforms,w=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let R=0,T=_.length;R<T;R++){const I=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,M=I.length;E<M;E++){const C=I[E];if(m(C,R,E,w)===!0){const H=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let V=0;V<F.length;V++){const G=F[V],J=g(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,H+X,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,H,C.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(x,v,_,w){const R=x.value,T=v+"_"+_;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const I=w[T];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return w[T]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function p(x){const v=x.uniforms;let _=0;const w=16;for(let T=0,I=v.length;T<I;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,C=E.length;M<C;M++){const H=E[M],F=Array.isArray(H.value)?H.value:[H.value];for(let X=0,V=F.length;X<V;X++){const G=F[X],J=g(G),j=_%w,te=j%J.boundary,ce=j+te;_+=te,ce!==0&&w-ce<J.storage&&(_+=w-ce),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=J.storage}}}const R=_%w;return R>0&&(_+=w-R),x.__size=_,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function u(x){const v=x.target;v.removeEventListener("dispose",u);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function h(){for(const x in i)a.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:c,update:l,dispose:h}}class Qm{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:b=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const p=new Uint32Array(4),g=new Int32Array(4);let u=null,h=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Hn,this.toneMappingExposure=1;const _=this;let w=!1,R=0,T=0,I=null,E=-1,M=null;const C=new Xe,H=new Xe;let F=null;const X=new Ee(0);let V=0,G=t.width,J=t.height,j=1,te=null,ce=null;const me=new Xe(0,0,G,J),Ce=new Xe(0,0,G,J);let Je=!1;const W=new $r;let ee=!1,be=!1;const se=new ke,Se=new ke,Ie=new D,Fe=new Xe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function ht(){return I===null?j:1}let P=n;function Bt(S,L){return t.getContext(S,L)}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zr}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){const L="webgl2";if(P=Bt(L,S),P===null)throw Bt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,He,_e,st,xe,A,y,N,K,Z,q,ge,re,he,Ve,$,fe,Me,Te,ue,je,Le,nt,k;function ie(){Be=new ob(P),Be.init(),Le=new Gm(P,Be),He=new tb(P,Be,e,Le),_e=new jm(P,Be),He.reverseDepthBuffer&&b&&_e.buffers.depth.setReversed(!0),st=new db(P),xe=new Rm,A=new zm(P,Be,_e,xe,He,Le,st),y=new ib(_),N=new rb(_),K=new gf(P),nt=new $p(P,K),Z=new cb(P,K,st,nt),q=new fb(P,Z,K,st),Te=new hb(P,He,A),$=new nb(xe),ge=new wm(_,y,N,Be,He,nt,$),re=new Jm(_,xe),he=new Im,Ve=new Nm(Be),Me=new Qp(_,y,N,_e,q,m,c),fe=new Bm(_,q,He),k=new Zm(P,st,He,_e),ue=new eb(P,Be,st),je=new lb(P,Be,st),st.programs=ge.programs,_.capabilities=He,_.extensions=Be,_.properties=xe,_.renderLists=he,_.shadowMap=fe,_.state=_e,_.info=st}ie();const z=new Km(_,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(G,J,!1))},this.getSize=function(S){return S.set(G,J)},this.setSize=function(S,L,O=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,J=L,t.width=Math.floor(S*j),t.height=Math.floor(L*j),O===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(G*j,J*j).floor()},this.setDrawingBufferSize=function(S,L,O){G=S,J=L,j=O,t.width=Math.floor(S*O),t.height=Math.floor(L*O),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,L,O,B){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,L,O,B),_e.viewport(C.copy(me).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Ce)},this.setScissor=function(S,L,O,B){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,L,O,B),_e.scissor(H.copy(Ce).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){_e.setScissorTest(Je=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(S=!0,L=!0,O=!0){let B=0;if(S){let U=!1;if(I!==null){const Q=I.texture.format;U=Q===Yr||Q===Kr||Q===Xr}if(U){const Q=I.texture.type,ae=Q===Tn||Q===ti||Q===oa||Q===Li||Q===Vr||Q===Wr,de=Me.getClearColor(),pe=Me.getClearAlpha(),Ae=de.r,Re=de.g,ve=de.b;ae?(p[0]=Ae,p[1]=Re,p[2]=ve,p[3]=pe,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Ae,g[1]=Re,g[2]=ve,g[3]=pe,P.clearBufferiv(P.COLOR,0,g))}else B|=P.COLOR_BUFFER_BIT}L&&(B|=P.DEPTH_BUFFER_BIT),O&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Me.dispose(),he.dispose(),Ve.dispose(),xe.dispose(),y.dispose(),N.dispose(),q.dispose(),nt.dispose(),k.dispose(),ge.dispose(),z.dispose(),z.removeEventListener("sessionstart",ho),z.removeEventListener("sessionend",fo),zn.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=st.autoReset,L=fe.enabled,O=fe.autoUpdate,B=fe.needsUpdate,U=fe.type;ie(),st.autoReset=S,fe.enabled=L,fe.autoUpdate=O,fe.needsUpdate=B,fe.type=U}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pe(S){const L=S.target;L.removeEventListener("dispose",Pe),lt(L)}function lt(S){Mt(S),xe.remove(S)}function Mt(S){const L=xe.get(S).programs;L!==void 0&&(L.forEach(function(O){ge.releaseProgram(O)}),S.isShaderMaterial&&ge.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,O,B,U,Q){L===null&&(L=ct);const ae=U.isMesh&&U.matrixWorld.determinant()<0,de=Vl(S,L,O,B,U);_e.setMaterial(B,ae);let pe=O.index,Ae=1;if(B.wireframe===!0){if(pe=Z.getWireframeAttribute(O),pe===void 0)return;Ae=2}const Re=O.drawRange,ve=O.attributes.position;let We=Re.start*Ae,Ke=(Re.start+Re.count)*Ae;Q!==null&&(We=Math.max(We,Q.start*Ae),Ke=Math.min(Ke,(Q.start+Q.count)*Ae)),pe!==null?(We=Math.max(We,0),Ke=Math.min(Ke,pe.count)):ve!=null&&(We=Math.max(We,0),Ke=Math.min(Ke,ve.count));const ft=Ke-We;if(ft<0||ft===1/0)return;nt.setup(U,B,de,O,pe);let dt,qe=ue;if(pe!==null&&(dt=K.get(pe),qe=je,qe.setIndex(dt)),U.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*ht()),qe.setMode(P.LINES)):qe.setMode(P.TRIANGLES);else if(U.isLine){let ye=B.linewidth;ye===void 0&&(ye=1),_e.setLineWidth(ye*ht()),U.isLineSegments?qe.setMode(P.LINES):U.isLineLoop?qe.setMode(P.LINE_LOOP):qe.setMode(P.LINE_STRIP)}else U.isPoints?qe.setMode(P.POINTS):U.isSprite&&qe.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,yt=U._multiDrawCounts,Ye=U._multiDrawCount,qt=pe?K.get(pe).bytesPerElement:1,ai=xe.get(B).currentProgram.getUniforms();for(let Ut=0;Ut<Ye;Ut++)ai.setValue(P,"_gl_DrawID",Ut),qe.render(ye[Ut]/qt,yt[Ut])}else if(U.isInstancedMesh)qe.renderInstances(We,ft,U.count);else if(O.isInstancedBufferGeometry){const ye=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,yt=Math.min(O.instanceCount,ye);qe.renderInstances(We,ft,yt)}else qe.render(We,ft)};function Ze(S,L,O){S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,ga(S,L,O),S.side=En,S.needsUpdate=!0,ga(S,L,O),S.side=an):ga(S,L,O)}this.compile=function(S,L,O=null){O===null&&(O=S),h=Ve.get(O),h.init(L),v.push(h),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),S!==O&&S.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const B=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const de=Q[ae];Ze(de,O,U),B.add(de)}else Ze(Q,O,U),B.add(Q)}),v.pop(),h=null,B},this.compileAsync=function(S,L,O=null){const B=this.compile(S,L,O);return new Promise(U=>{function Q(){if(B.forEach(function(ae){xe.get(ae).currentProgram.isReady()&&B.delete(ae)}),B.size===0){U(S);return}setTimeout(Q,10)}Be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Wt=null;function fn(S){Wt&&Wt(S)}function ho(){zn.stop()}function fo(){zn.start()}const zn=new Rl;zn.setAnimationLoop(fn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(S){Wt=S,z.setAnimationLoop(S),S===null?zn.stop():zn.start()},z.addEventListener("sessionstart",ho),z.addEventListener("sessionend",fo),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,L,I),h=Ve.get(S,v.length),h.init(L),v.push(h),Se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),W.setFromProjectionMatrix(Se),be=this.localClippingEnabled,ee=$.init(this.clippingPlanes,be),u=he.get(S,x.length),u.init(),x.push(u),z.enabled===!0&&z.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&ds(Q,L,-1/0,_.sortObjects)}ds(S,L,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(te,ce),Ge=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ge&&Me.addToRenderList(u,S),this.info.render.frame++,ee===!0&&$.beginShadows();const O=h.state.shadowsArray;fe.render(O,S,L),ee===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=u.opaque,U=u.transmissive;if(h.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let ae=0,de=Q.length;ae<de;ae++){const pe=Q[ae];po(B,U,S,pe)}Ge&&Me.render(S);for(let ae=0,de=Q.length;ae<de;ae++){const pe=Q[ae];uo(u,S,pe,pe.viewport)}}else U.length>0&&po(B,U,S,L),Ge&&Me.render(S),uo(u,S,L);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(_,S,L),nt.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(h=v[v.length-1],ee===!0&&$.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?u=x[x.length-1]:u=null};function ds(S,L,O,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){B&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const ae=q.update(S),de=S.material;de.visible&&u.push(S,ae,de,O,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const ae=q.update(S),de=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Fe.copy(ae.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(de)){const pe=ae.groups;for(let Ae=0,Re=pe.length;Ae<Re;Ae++){const ve=pe[Ae],We=de[ve.materialIndex];We&&We.visible&&u.push(S,ae,We,O,Fe.z,ve)}}else de.visible&&u.push(S,ae,de,O,Fe.z,null)}}const Q=S.children;for(let ae=0,de=Q.length;ae<de;ae++)ds(Q[ae],L,O,B)}function uo(S,L,O,B){const U=S.opaque,Q=S.transmissive,ae=S.transparent;h.setupLightsView(O),ee===!0&&$.setGlobalState(_.clippingPlanes,O),B&&_e.viewport(C.copy(B)),U.length>0&&ma(U,L,O),Q.length>0&&ma(Q,L,O),ae.length>0&&ma(ae,L,O),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function po(S,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new ni(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ua:Tn,minFilter:yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const Q=h.state.transmissionRenderTarget[B.id],ae=B.viewport||C;Q.setSize(ae.z,ae.w);const de=_.getRenderTarget();_.setRenderTarget(Q),_.getClearColor(X),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ge&&Me.render(O);const pe=_.toneMapping;_.toneMapping=Hn;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),ee===!0&&$.setGlobalState(_.clippingPlanes,B),ma(S,O,B),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ve=0,We=L.length;ve<We;ve++){const Ke=L[ve],ft=Ke.object,dt=Ke.geometry,qe=Ke.material,ye=Ke.group;if(qe.side===an&&ft.layers.test(B.layers)){const yt=qe.side;qe.side=Ct,qe.needsUpdate=!0,bo(ft,O,B,dt,qe,ye),qe.side=yt,qe.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q))}_.setRenderTarget(de),_.setClearColor(X,V),Ae!==void 0&&(B.viewport=Ae),_.toneMapping=pe}function ma(S,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=S.length;U<Q;U++){const ae=S[U],de=ae.object,pe=ae.geometry,Ae=B===null?ae.material:B,Re=ae.group;de.layers.test(O.layers)&&bo(de,L,O,pe,Ae,Re)}}function bo(S,L,O,B,U,Q){S.onBeforeRender(_,L,O,B,U,Q),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(_,L,O,B,S,Q),U.transparent===!0&&U.side===an&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,_.renderBufferDirect(O,L,B,U,S,Q),U.side=En,U.needsUpdate=!0,_.renderBufferDirect(O,L,B,U,S,Q),U.side=an):_.renderBufferDirect(O,L,B,U,S,Q),S.onAfterRender(_,L,O,B,U,Q)}function ga(S,L,O){L.isScene!==!0&&(L=ct);const B=xe.get(S),U=h.state.lights,Q=h.state.shadowsArray,ae=U.state.version,de=ge.getParameters(S,U.state,Q,L,O),pe=ge.getProgramCacheKey(de);let Ae=B.programs;B.environment=S.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(S.isMeshStandardMaterial?N:y).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",Pe),Ae=new Map,B.programs=Ae);let Re=Ae.get(pe);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===ae)return go(S,de),Re}else de.uniforms=ge.getUniforms(S),S.onBeforeCompile(de,_),Re=ge.acquireProgram(de,pe),Ae.set(pe,Re),B.uniforms=de.uniforms;const ve=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ve.clippingPlanes=$.uniform),go(S,de),B.needsLights=ql(S),B.lightsStateVersion=ae,B.needsLights&&(ve.ambientLightColor.value=U.state.ambient,ve.lightProbe.value=U.state.probe,ve.directionalLights.value=U.state.directional,ve.directionalLightShadows.value=U.state.directionalShadow,ve.spotLights.value=U.state.spot,ve.spotLightShadows.value=U.state.spotShadow,ve.rectAreaLights.value=U.state.rectArea,ve.ltc_1.value=U.state.rectAreaLTC1,ve.ltc_2.value=U.state.rectAreaLTC2,ve.pointLights.value=U.state.point,ve.pointLightShadows.value=U.state.pointShadow,ve.hemisphereLights.value=U.state.hemi,ve.directionalShadowMap.value=U.state.directionalShadowMap,ve.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ve.spotShadowMap.value=U.state.spotShadowMap,ve.spotLightMatrix.value=U.state.spotLightMatrix,ve.spotLightMap.value=U.state.spotLightMap,ve.pointShadowMap.value=U.state.pointShadowMap,ve.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function mo(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Qa.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function go(S,L){const O=xe.get(S);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Vl(S,L,O,B,U){L.isScene!==!0&&(L=ct),A.resetTextureUnits();const Q=L.fog,ae=B.isMeshStandardMaterial?L.environment:null,de=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Dt,pe=(B.isMeshStandardMaterial?N:y).get(B.envMap||ae),Ae=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ve=!!O.morphAttributes.position,We=!!O.morphAttributes.normal,Ke=!!O.morphAttributes.color;let ft=Hn;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ft=_.toneMapping);const dt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,qe=dt!==void 0?dt.length:0,ye=xe.get(B),yt=h.state.lights;if(ee===!0&&(be===!0||S!==M)){const Tt=S===M&&B.id===E;$.setState(B,S,Tt)}let Ye=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==yt.state.version||ye.outputColorSpace!==de||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==pe||B.fog===!0&&ye.fog!==Q||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==$.numPlanes||ye.numIntersection!==$.numIntersection)||ye.vertexAlphas!==Ae||ye.vertexTangents!==Re||ye.morphTargets!==ve||ye.morphNormals!==We||ye.morphColors!==Ke||ye.toneMapping!==ft||ye.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,ye.__version=B.version);let qt=ye.currentProgram;Ye===!0&&(qt=ga(B,L,U));let ai=!1,Ut=!1,qi=!1;const rt=qt.getUniforms(),Ht=ye.uniforms;if(_e.useProgram(qt.program)&&(ai=!0,Ut=!0,qi=!0),B.id!==E&&(E=B.id,Ut=!0),ai||M!==S){_e.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),th(se),nh(se),rt.setValue(P,"projectionMatrix",se)):rt.setValue(P,"projectionMatrix",S.projectionMatrix),rt.setValue(P,"viewMatrix",S.matrixWorldInverse);const kt=rt.map.cameraPosition;kt!==void 0&&kt.setValue(P,Ie.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&rt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&rt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ut=!0,qi=!0)}if(U.isSkinnedMesh){rt.setOptional(P,U,"bindMatrix"),rt.setOptional(P,U,"bindMatrixInverse");const Tt=U.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),rt.setValue(P,"boneTexture",Tt.boneTexture,A))}U.isBatchedMesh&&(rt.setOptional(P,U,"batchingTexture"),rt.setValue(P,"batchingTexture",U._matricesTexture,A),rt.setOptional(P,U,"batchingIdTexture"),rt.setValue(P,"batchingIdTexture",U._indirectTexture,A),rt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(P,"batchingColorTexture",U._colorsTexture,A));const jt=O.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Te.update(U,O,qt),(Ut||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,rt.setValue(P,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ht.envMap.value=pe,Ht.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Ht.envMapIntensity.value=L.environmentIntensity),Ut&&(rt.setValue(P,"toneMappingExposure",_.toneMappingExposure),ye.needsLights&&Wl(Ht,qi),Q&&B.fog===!0&&re.refreshFogUniforms(Ht,Q),re.refreshMaterialUniforms(Ht,B,j,J,h.state.transmissionRenderTarget[S.id]),Qa.upload(P,mo(ye),Ht,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qa.upload(P,mo(ye),Ht,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&rt.setValue(P,"center",U.center),rt.setValue(P,"modelViewMatrix",U.modelViewMatrix),rt.setValue(P,"normalMatrix",U.normalMatrix),rt.setValue(P,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Tt=B.uniformsGroups;for(let kt=0,hs=Tt.length;kt<hs;kt++){const Gn=Tt[kt];k.update(Gn,qt),k.bind(Gn,qt)}}return qt}function Wl(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function ql(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,L,O){xe.get(S.texture).__webglTexture=L,xe.get(S.depthTexture).__webglTexture=O;const B=xe.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const O=xe.get(S);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,O=0){I=S,R=L,T=O;let B=!0,U=null,Q=!1,ae=!1;if(S){const pe=xe.get(S);if(pe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(pe.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(pe.__hasExternalTextures)A.rebindTextures(S,xe.get(S.texture).__webglTexture,xe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ve=S.depthTexture;if(pe.__boundDepthTexture!==ve){if(ve!==null&&xe.has(ve)&&(S.width!==ve.image.width||S.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ae=!0);const Re=xe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?U=Re[L][O]:U=Re[L],Q=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?U=xe.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[O]:U=Re,C.copy(S.viewport),H.copy(S.scissor),F=S.scissorTest}else C.copy(me).multiplyScalar(j).floor(),H.copy(Ce).multiplyScalar(j).floor(),F=Je;if(_e.bindFramebuffer(P.FRAMEBUFFER,U)&&B&&_e.drawBuffers(S,U),_e.viewport(C),_e.scissor(H),_e.setScissorTest(F),Q){const pe=xe.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,O)}else if(ae){const pe=xe.get(S.texture),Ae=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.__webglTexture,O||0,Ae)}E=-1},this.readRenderTargetPixels=function(S,L,O,B,U,Q,ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){_e.bindFramebuffer(P.FRAMEBUFFER,de);try{const pe=S.texture,Ae=pe.format,Re=pe.type;if(!He.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&O>=0&&O<=S.height-U&&P.readPixels(L,O,B,U,Le.convert(Ae),Le.convert(Re),Q)}finally{const pe=I!==null?xe.get(I).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(S,L,O,B,U,Q,ae){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){const pe=S.texture,Ae=pe.format,Re=pe.type;if(!He.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-B&&O>=0&&O<=S.height-U){_e.bindFramebuffer(P.FRAMEBUFFER,de);const ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(L,O,B,U,Le.convert(Ae),Le.convert(Re),0);const We=I!==null?xe.get(I).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,We);const Ke=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await eh(P,Ke,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(ve),P.deleteSync(Ke),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,O=0){S.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(S.image.width*B),Q=Math.floor(S.image.height*B),ae=L!==null?L.x:0,de=L!==null?L.y:0;A.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,ae,de,U,Q),_e.unbindTexture()};const Xl=P.createFramebuffer(),Kl=P.createFramebuffer();this.copyTextureToTexture=function(S,L,O=null,B=null,U=0,Q=null){S.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],L=arguments[2],Q=arguments[3]||0,O=null),Q===null&&(U!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ae,de,pe,Ae,Re,ve,We,Ke,ft;const dt=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(O!==null)ae=O.max.x-O.min.x,de=O.max.y-O.min.y,pe=O.isBox3?O.max.z-O.min.z:1,Ae=O.min.x,Re=O.min.y,ve=O.isBox3?O.min.z:0;else{const jt=Math.pow(2,-U);ae=Math.floor(dt.width*jt),de=Math.floor(dt.height*jt),S.isDataArrayTexture?pe=dt.depth:S.isData3DTexture?pe=Math.floor(dt.depth*jt):pe=1,Ae=0,Re=0,ve=0}B!==null?(We=B.x,Ke=B.y,ft=B.z):(We=0,Ke=0,ft=0);const qe=Le.convert(L.format),ye=Le.convert(L.type);let yt;L.isData3DTexture?(A.setTexture3D(L,0),yt=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(A.setTexture2DArray(L,0),yt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(L,0),yt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Ye=P.getParameter(P.UNPACK_ROW_LENGTH),qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ai=P.getParameter(P.UNPACK_SKIP_PIXELS),Ut=P.getParameter(P.UNPACK_SKIP_ROWS),qi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ve);const rt=S.isDataArrayTexture||S.isData3DTexture,Ht=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const jt=xe.get(S),Tt=xe.get(L),kt=xe.get(jt.__renderTarget),hs=xe.get(Tt.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,kt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Gn=0;Gn<pe;Gn++)rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(S).__webglTexture,U,ve+Gn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(L).__webglTexture,Q,ft+Gn)),P.blitFramebuffer(Ae,Re,ae,de,We,Ke,ae,de,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||xe.has(S)){const jt=xe.get(S),Tt=xe.get(L);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Xl),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kl);for(let kt=0;kt<pe;kt++)rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,U,ve+kt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,U),Ht?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.__webglTexture,Q,ft+kt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tt.__webglTexture,Q),U!==0?P.blitFramebuffer(Ae,Re,ae,de,We,Ke,ae,de,P.COLOR_BUFFER_BIT,P.NEAREST):Ht?P.copyTexSubImage3D(yt,Q,We,Ke,ft+kt,Ae,Re,ae,de):P.copyTexSubImage2D(yt,Q,We,Ke,Ae,Re,ae,de);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ht?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(yt,Q,We,Ke,ft,ae,de,pe,qe,ye,dt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,Q,We,Ke,ft,ae,de,pe,qe,dt.data):P.texSubImage3D(yt,Q,We,Ke,ft,ae,de,pe,qe,ye,dt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,We,Ke,ae,de,qe,ye,dt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,We,Ke,dt.width,dt.height,qe,dt.data):P.texSubImage2D(P.TEXTURE_2D,Q,We,Ke,ae,de,qe,ye,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ye),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ai),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qi),Q===0&&L.generateMipmaps&&P.generateMipmap(yt),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,L,O=null,B=null,U=0){return S.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,S=arguments[2],L=arguments[3],U=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,O,B,U)},this.initRenderTarget=function(S){xe.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){R=0,T=0,I=null,_e.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}const Uc={type:"change"},oo={type:"start"},kl={type:"end"},Wa=new pa,Nc=new kn,$m=Math.cos(70*rl.DEG2RAD),bt=new D,Lt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ws=1e-6;class eg extends bf{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new rn,this._lastTargetPosition=new D,this._quat=new rn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dc,this._sphericalDelta=new dc,this._scale=1,this._panOffset=new D,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new D,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ng.bind(this),this._onPointerDown=tg.bind(this),this._onPointerUp=ig.bind(this),this._onContextMenu=dg.bind(this),this._onMouseWheel=rg.bind(this),this._onKeyDown=og.bind(this),this._onTouchStart=cg.bind(this),this._onTouchMove=lg.bind(this),this._onMouseDown=ag.bind(this),this._onMouseMove=sg.bind(this),this._interceptControlDown=hg.bind(this),this._interceptControlUp=fg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uc),this.update(),this.state=tt.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),i<-Math.PI?i+=Lt:i>Math.PI&&(i-=Lt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=bt.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<$m?this.object.lookAt(this.target):(Nc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(Nc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ws||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ws||this._lastTargetPosition.distanceToSquared(this.target)>Ws?(this.dispatchEvent(Uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;bt.copy(i).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,r=n.width,o=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Lt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Lt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Lt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Lt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tg(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function ng(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function ig(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kl),this.state=tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ag(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=tt.DOLLY;break;case Ti.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tt.ROTATE}break;case Ti.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(oo)}function sg(a){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function rg(a){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(a.preventDefault(),this.dispatchEvent(oo),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(kl))}function og(a){this.enabled!==!1&&this._handleKeyDown(a)}function cg(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=tt.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=tt.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(oo)}function lg(a){switch(this._trackPointer(a),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=tt.NONE}}function dg(a){this.enabled!==!1&&a.preventDefault()}function hg(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fg(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ug extends gl{constructor(){super();const e=new ji;e.deleteAttribute("uv");const t=new ha({side:Ct}),n=new ha,i=new Al(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new it(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new it(e,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);const o=new it(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new it(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new it(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const d=new it(e,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const f=new it(e,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const b=new it(e,vi(50));b.position.set(-16.116,14.37,8.208),b.scale.set(.1,2.428,2.739),this.add(b);const m=new it(e,vi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const p=new it(e,vi(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const g=new it(e,vi(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const u=new it(e,vi(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const h=new it(e,vi(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function vi(a){const e=new Nn;return e.color.setScalar(a),e}function Fc(a){if(a){for(const e of Object.keys(a)){const t=a[e];t&&t.isTexture&&(t.source?.data?.close?.(),t.dispose())}a.dispose()}}function pg(a){a&&a.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(Fc):Fc(e.material))})}class bg{constructor(e){this.canvas=e,this.current=null,this.renderer=new Qm({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=xt,this.renderer.toneMapping=Wc,this.renderer.toneMappingExposure=1,this.scene=new gl,this.scene.background=new Ee(855826);const t=new Nr(this.renderer);this.scene.environment=t.fromScene(new ug,.04).texture,this.scene.add(new Zh(16777215,3356477,1));const n=new wl(16777215,1.6);n.position.set(4,8,6),this.scene.add(n),this.camera=new Rt(45,1,.01,5e3),this.camera.position.set(3,2,4),this.controls=new eg(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.grid=new pf(20,20,3159617,2106412),this.grid.position.y=0,this.scene.add(this.grid),this._onResize=this._resize.bind(this),window.addEventListener("resize",this._onResize),this._resize(),this._animate()}_resize(){const e=this.canvas.clientWidth||this.canvas.parentElement.clientWidth,t=this.canvas.clientHeight||this.canvas.parentElement.clientHeight;e===0||t===0||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}_animate(){this._raf=requestAnimationFrame(()=>this._animate()),this.controls.update(),this.renderer.render(this.scene,this.camera)}clear(){this.current&&(this.scene.remove(this.current),pg(this.current),this.current=null)}setModel(e){this.clear(),this.current=e,this.scene.add(e),this.fitToView()}fitToView(){if(!this.current)return;const e=new cn().setFromObject(this.current);if(e.isEmpty())return;const t=e.getSize(new D),n=e.getCenter(new D),i=Math.max(t.x,t.y,t.z);if(!isFinite(i)||i===0)return;this.current.position.x+=-n.x,this.current.position.z+=-n.z,this.current.position.y+=-e.min.y;const s=Math.max(2,i*2);this.grid.scale.setScalar(s/20);const r=this.camera.fov*Math.PI/180,o=i/2/Math.tan(r/2)*1.6;this.camera.near=i/1e3,this.camera.far=i*1e3,this.camera.position.set(o*.8,i*.7,o),this.camera.lookAt(0,i*.3,0),this.camera.updateProjectionMatrix(),this.controls.target.set(0,i*.3,0),this.controls.update()}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this.clear(),this.controls.dispose(),this.renderer.dispose()}}function Oc(a,e){if(e===Ad)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Dr||e===il){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Dr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class mg extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Ug(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=ra.extractUrlBase(e);r=ra.resolveURL(l,this.path)}else r=ra.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Tl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ll){try{r[Oe.KHR_BINARY_GLTF]=new Ng(e)}catch(f){i&&i(f);return}s=JSON.parse(r[Oe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Yg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,r[f.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const f=s.extensionsUsed[d],b=s.extensionsRequired||[];switch(f){case Oe.KHR_MATERIALS_UNLIT:r[f]=new xg;break;case Oe.KHR_DRACO_MESH_COMPRESSION:r[f]=new Fg(s,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:r[f]=new Og;break;case Oe.KHR_MESH_QUANTIZATION:r[f]=new Bg;break;default:b.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function gg(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _g{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const d=new Ee(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Dt);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wl(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Al(d),l.distance=f;break;case"spot":l=new $h(d),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class xg{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Dt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}}class vg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class yg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(o,o)}return Promise.all(s)}}class Mg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Sg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Eg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,xt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Tg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Ag{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Dt),Promise.all(s)}}class wg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Rg{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Dt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,xt)),Promise.all(s)}}class Cg{constructor(e){this.parser=e,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Ig{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Pg{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Dg{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kg{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lg{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,f=i.byteStride,b=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,f,b,i.mode,i.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(d*f);return r.decodeGltfBuffer(new Uint8Array(m),d,f,b,i.mode,i.filter),m})})}else return null}}class Ug{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Gt.TRIANGLES&&l.mode!==Gt.TRIANGLE_STRIP&&l.mode!==Gt.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),f=d.isGroup?d.children:[d],b=l[0].count,m=[];for(const p of f){const g=new ke,u=new D,h=new rn,x=new D(1,1,1),v=new Ih(p.geometry,p.material,b);for(let _=0;_<b;_++)c.TRANSLATION&&u.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&h.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,g.compose(u,h,x));for(const _ in c)if(_==="_COLOR_0"){const w=c[_];v.instanceColor=new Lr(w.array,w.itemSize,w.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,c[_]);ot.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),m.push(v)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const Ll="glTF",ta=12,Bc={JSON:1313821514,BIN:5130562};class Ng{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ll)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ta,s=new DataView(e,ta);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Bc.JSON){const l=new Uint8Array(e,ta+r,o);this.content=n.decode(l)}else if(c===Bc.BIN){const l=ta+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Fg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const d in r){const f=Or[d]||d.toLowerCase();o[f]=r[d]}for(const d in e.attributes){const f=Or[d]||d.toLowerCase();if(r[d]!==void 0){const b=n.accessors[e.attributes[d]],m=Ci[b.componentType];l[f]=m.name,c[f]=b.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(f,b){i.decodeDracoFile(d,function(m){for(const p in m.attributes){const g=m.attributes[p],u=c[p];u!==void 0&&(g.normalized=u)}f(m)},o,l,Dt,b)})})}}class Og{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Bg{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Ul extends ba{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=i-t,f=(n-t)/d,b=f*f,m=b*f,p=e*l,g=p-l,u=-2*m+3*b,h=m-b,x=1-u,v=h-b+f;for(let _=0;_!==o;_++){const w=r[g+_+o],R=r[g+_+c]*d,T=r[p+_+o],I=r[p+_]*d;s[_]=x*w+v*R+u*T+h*I}return s}}const Hg=new rn;class jg extends Ul{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Hg.fromArray(s).normalize().toArray(s),s}}const Gt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ci={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hc={9728:It,9729:Ot,9984:Xc,9985:qa,9986:na,9987:yn},jc={33071:Un,33648:$a,10497:ki},qs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Or={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zg={CUBICSPLINE:void 0,LINEAR:la,STEP:ca},Xs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gg(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ha({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),a.DefaultMaterial}function Jn(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vg(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,d=e.length;l<d;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const f=e[l];if(n){const b=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):a.attributes.position;r.push(b)}if(i){const b=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):a.attributes.normal;o.push(b)}if(s){const b=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):a.attributes.color;c.push(b)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],f=l[1],b=l[2];return n&&(a.morphAttributes.position=d),i&&(a.morphAttributes.normal=f),s&&(a.morphAttributes.color=b),a.morphTargetsRelative=!0,a})}function Wg(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qg(a){let e;const t=a.extensions&&a.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ks(t.attributes):e=a.indices+":"+Ks(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Ks(a.targets[n]);return e}function Ks(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Br(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xg(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Kg=new ke;class Yg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Jh(this.options.manager):this.textureLoader=new nf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Jn(s,o,i),vn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,d]of r.children.entries())s(d,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(ra.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=qs[i.type],o=Ci[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new Pt(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],c=qs[i.type],l=Ci[i.componentType],d=l.BYTES_PER_ELEMENT,f=d*c,b=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,u;if(m&&m!==f){const h=Math.floor(b/m),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+h+":"+i.count;let v=t.cache.get(x);v||(g=new l(o,h*m,i.count*m/d),v=new Th(g,m/d),t.cache.add(x,v)),u=new Zr(v,c,b%m/d,p)}else o===null?g=new l(i.count*c):g=new l(o,b,i.count*c),u=new Pt(g,c,p);if(i.sparse!==void 0){const h=qs.SCALAR,x=Ci[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new x(r[1],v,i.sparse.count*h),R=new l(r[2],_,i.sparse.count*c);o!==null&&(u=new Pt(u.array.slice(),u.itemSize,u.normalized)),u.normalized=!1;for(let T=0,I=w.length;T<I;T++){const E=w[T];if(u.setX(E,R[T*c]),c>=2&&u.setY(E,R[T*c+1]),c>=3&&u.setZ(E,R[T*c+2]),c>=4&&u.setW(E,R[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}u.normalized=p}return u})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=r.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const b=(s.samplers||{})[r.sampler]||{};return d.magFilter=Hc[b.magFilter]||Ot,d.minFilter=Hc[b.minFilter]||yn,d.wrapS=jc[b.wrapS]||ki,d.wrapT=jc[b.wrapT]||ki,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==It&&d.minFilter!==Ot,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(f){l=!0;const b=new Blob([f],{type:r.mimeType});return c=o.createObjectURL(b),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(f){return new Promise(function(b,m){let p=b;t.isImageBitmapLoader===!0&&(p=function(g){const u=new vt(g);u.needsUpdate=!0,b(u)}),t.load(ra.resolveURL(f,s.path),p,void 0,m)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),vn(f,r),f.userData.mimeType=r.mimeType||Xg(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(r);r=s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new yl,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new eo,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ha}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},c=s.extensions||{},l=[];if(c[Oe.KHR_MATERIALS_UNLIT]){const f=i[Oe.KHR_MATERIALS_UNLIT];r=f.getMaterialType(),l.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const b=f.baseColorFactor;o.color.setRGB(b[0],b[1],b[2],Dt),o.opacity=b[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,xt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),r=this._invokeOne(function(b){return b.getMaterialType&&b.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(b){return b.extendMaterialParams&&b.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=an);const d=s.alphaMode||Xs.OPAQUE;if(d===Xs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Xs.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Nn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&r!==Nn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Nn){const f=s.emissiveFactor;o.emissive=new Ee().setRGB(f[0],f[1],f[2],Dt)}return s.emissiveTexture!==void 0&&r!==Nn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){const f=new r(o);return s.name&&(f.name=s.name),vn(f,s),t.associations.set(f,{materials:e}),s.extensions&&Jn(i,f,s),f})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return zc(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=qg(l),f=i[d];if(f)r.push(f.promise);else{let b;l.extensions&&l.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?b=s(l):b=zc(new tn,l,t),i[d]={primitive:l,promise:b},r.push(b)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const d=r[c].material===void 0?Gg(this.cache):this.getDependency("material",r[c].material);o.push(d)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],f=[];for(let m=0,p=d.length;m<p;m++){const g=d[m],u=r[m];let h;const x=l[m];if(u.mode===Gt.TRIANGLES||u.mode===Gt.TRIANGLE_STRIP||u.mode===Gt.TRIANGLE_FAN||u.mode===void 0)h=s.isSkinnedMesh===!0?new wh(g,x):new it(g,x),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),u.mode===Gt.TRIANGLE_STRIP?h.geometry=Oc(h.geometry,il):u.mode===Gt.TRIANGLE_FAN&&(h.geometry=Oc(h.geometry,Dr));else if(u.mode===Gt.LINES)h=new vl(g,x);else if(u.mode===Gt.LINE_STRIP)h=new to(g,x);else if(u.mode===Gt.LINE_LOOP)h=new kh(g,x);else if(u.mode===Gt.POINTS)h=new Lh(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(h.geometry.morphAttributes).length>0&&Wg(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),vn(h,s),u.extensions&&Jn(i,h,u),t.assignFinalMaterial(h),f.push(h)}for(let m=0,p=f.length;m<p;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return s.extensions&&Jn(i,f[0],s),f[0];const b=new ei;s.extensions&&Jn(i,b,s),t.associations.set(b,{meshes:e});for(let m=0,p=f.length;m<p;m++)b.add(f[m]);return b})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(rl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new io(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],c=[];for(let l=0,d=r.length;l<d;l++){const f=r[l];if(f){o.push(f);const b=new ke;s!==null&&b.fromArray(s.array,l*16),c.push(b)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qr(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],d=[];for(let f=0,b=i.channels.length;f<b;f++){const m=i.channels[f],p=i.samplers[m.sampler],g=m.target,u=g.node,h=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",u)),o.push(this.getDependency("accessor",h)),c.push(this.getDependency("accessor",x)),l.push(p),d.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(f){const b=f[0],m=f[1],p=f[2],g=f[3],u=f[4],h=[];for(let x=0,v=b.length;x<v;x++){const _=b[x],w=m[x],R=p[x],T=g[x],I=u[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const E=n._createAnimationTracks(_,w,R,T,I);if(E)for(let M=0;M<E.length;M++)h.push(E[M])}return new Gh(s,void 0,h)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,d=o.length;l<d;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const d=l[0],f=l[1],b=l[2];b!==null&&d.traverse(function(m){m.isSkinnedMesh&&m.bind(b,Kg)});for(let m=0,p=f.length;m<p;m++)d.add(f[m]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(s.isBone===!0?d=new _l:l.length>1?d=new ei:l.length===1?d=l[0]:d=new ot,d!==l[0])for(let f=0,b=l.length;f<b;f++)d.add(l[f]);if(s.name&&(d.userData.name=s.name,d.name=r),vn(d,s),s.extensions&&Jn(n,d,s),s.matrix!==void 0){const f=new ke;f.fromArray(s.matrix),d.applyMatrix4(f)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ei;n.name&&(s.name=i.createUniqueName(n.name)),vn(s,n),n.extensions&&Jn(t,s,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let d=0,f=c.length;d<f;d++)s.add(c[d]);const l=d=>{const f=new Map;for(const[b,m]of i.associations)(b instanceof sn||b instanceof vt)&&f.set(b,m);return d.traverse(b=>{const m=i.associations.get(b);m!=null&&f.set(b,m)}),f};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,c=[];Dn[s.path]===Dn.weights?e.traverse(function(b){b.morphTargetInfluences&&c.push(b.name?b.name:b.uuid)}):c.push(o);let l;switch(Dn[s.path]){case Dn.weights:l=Oi;break;case Dn.rotation:l=Bi;break;case Dn.position:case Dn.scale:l=Hi;break;default:switch(n.itemSize){case 1:l=Oi;break;case 2:case 3:default:l=Hi;break}break}const d=i.interpolation!==void 0?zg[i.interpolation]:la,f=this._getArrayFromAccessor(n);for(let b=0,m=c.length;b<m;b++){const p=new l(c[b]+"."+Dn[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Br(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Bi?jg:Ul;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jg(a,e,t){const n=e.attributes,i=new cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const d=Br(Ci[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new D,c=new D;for(let l=0,d=s.length;l<d;l++){const f=s[l];if(f.POSITION!==void 0){const b=t.json.accessors[f.POSITION],m=b.min,p=b.max;if(m!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(p[2]))),b.normalized){const g=Br(Ci[b.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new ln;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function zc(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(const r in n){const o=Or[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return ze.workingColorSpace!==Dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),vn(a,e),Jg(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vg(a,e.targets,t):a})}(function(){var a="b9H79TebbbeJq9Geueu9Geub9Gbb9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiKLdilevlevlooroowwvwbDDbelve9Weiiviebeoweuec:G:Qdkr;RiOo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbe8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbdE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UbiY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbl8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbv8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UboE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbra9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbwL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbDK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbqL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbkE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbPa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9Wbsa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbzK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbHl79IV9RbODwebcekdQXq;A9pLdbk;QqeKu8Jjjjjbcjo9Rgv8Kjjjjbcbhodnalcefae0mbabcbRbN:kjjbc:GeV86bbavcjdfcbcjdzNjjjb8AdnaiTmbavcjdfadalz:tjjjb8Akabaefhrabcefhwavalfcbcbcjdal9RalcFe0EzNjjjb8Aavavcjdfalz:tjjjbhDcj;abal9Uc;WFbGgecjdaecjd6Ehqcbhkindndnaiak9nmbaDcjlfcbcjdzNjjjb8Aaqaiak9Rakaqfai6Egxcsfgecl4cifcd4hmadakal2fhPdndndnaec9WGgsTmbcbhzaPhHawhOxekdnaxmbalheinaraw9Ram6miawcbamzNjjjbamfhwaecufgembxvkkcbhAaPhOinaDaAfRbbhCaDcjlfheaOhoaxhXinaeaoRbbgQaC9RgCcetaCcKtcK91cr4786bbaoalfhoaecefheaQhCaXcufgXmbkaraw9Ram6mdaOcefhOawcbamzNjjjbamfhwaAcefgAal9hmbxlkkindnaxTmbaDazfRbbhCaDcjlfheaHhoaxhXinaeaoRbbgQaC9RgCcetaCcKtcK91cr4786bbaoalfhoaecefheaQhCaXcufgXmbkkaraO9Ram6mearaOcbamzNjjjbgLamfgw9RcK6mecbhKaDcjlfhOinaDcjlfaKfhYcwhAczhQceheindndnaegXce9hmbcuhoaYRbbmecbhodninaogecsSmeaecefhoaOaefcefRbbTmbkkcucbaecs6EhoxekaXcethocuaXtc;:bGcFb7hCcbheinaoaCaOaefRbb9nfhoaecefgecz9hmbkkaoaQaoaQ6geEhQaXaAaeEhAaXcetheaXcl6mbkdndndndnaAcufPdiebkaLaKco4fgeaeRbbcdciaAclSEaKci4coGtV86bbaAcw9hmeawaY8Pbb83bbawcwfaYcwf8Pbb83bbawczfhwxdkaLaKco4fgeaeRbbceaKci4coGtV86bbkdncwaA9Tg8Ambinawcb86bbawcefhwxbkkcuaAtcu7hYcbhEaOh3ina3hea8AhCcbhoinaeRbbgQaYcFeGgXaQaX6EaoaAtVhoaecefheaCcufgCmbkawao86bba3a8Afh3awcefhwaEa8AfgEcz6mbkcbheindnaOaefRbbgoaX6mbawao86bbawcefhwkaecefgecz9hmbkkdnaKczfgKas9pmbaOczfhOaraw9RcL0mekkaKas6meawTmeaHcefhHawhOazcefgzalSmixbkkcbhoxikcbhoaraw9Ralcaalca0E6mddnalc8F0mbawcbcaal9RgezNjjjbaefhwkawaDcjdfalz:tjjjbalfab9RhoxdkaDaPaxcufal2falz:tjjjb8Aaxakfhkawmbkcbhokavcjof8Kjjjjbaok9heeuaecaaeca0Eabcj;abae9Uc;WFbGgdcjdadcjd6Egdfcufad9Uae2adcl4cifcd4adV2fcefkmbcbabBdN:kjjbk:zse5u8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaici9UgocHfae0mbabcbyd:e:kjjbgrc;GeV86bbalc;abfcFecjezNjjjb8AalcUfgw9cu83ibalc8WfgD9cu83ibalcyfgq9cu83ibalcafgk9cu83ibalcKfgx9cu83ibalczfgm9cu83ibal9cu83iwal9cu83ibabaefc9WfhPabcefgsaofhednaiTmbcmcsarcb9kgzEhHcbhOcbhAcbhCcbhXcbhQindnaeaP9nmbcbhvxikaQcufhvadaCcdtfgLydbhKaLcwfydbhYaLclfydbh8AcbhEdndndninalc;abfavcsGcitfgoydlh3dndndnaoydbgoaK9hmba3a8ASmekdnaoa8A9hmba3aY9hmbaEcefhExekaoaY9hmea3aK9hmeaEcdfhEkaEc870mdaXcufhvaLaEciGcx2goc:y1jjbfydbcdtfydbh3aLaocN1jjbfydbcdtfydbh8AaLaoc:q1jjbfydbcdtfydbhKcbhodnindnalavcsGcdtfydba39hmbaohYxdkcuhYavcufhvaocefgocz9hmbkkaOa3aOSgvaYce9iaYaH9oVgoGfhOdndndncbcsavEaYaoEgvcs9hmbarce9imba3a3aAa3cefaASgvEgAcefSmecmcsavEhvkasavaEcdtc;WeGV86bbavcs9hmea3aA9Rgvcetavc8F917hvinaeavcFb0crtavcFbGV86bbaecefheavcje6hoavcr4hvaoTmbka3hAxvkcPhvasaEcdtcPV86bba3hAkavTmiavaH9omicdhocehEaQhYxlkavcufhvaEclfgEc;ab9hmbkkdnaLceaYaOSceta8AaOSEcx2gvc:q1jjbfydbcdtfydbgKTaLavcN1jjbfydbcdtfydbg8AceSGaLavc:y1jjbfydbcdtfydbg3cdSGaOcb9hGazGg5ce9hmbaw9cu83ibaD9cu83ibaq9cu83ibak9cu83ibax9cu83ibam9cu83ibal9cu83iwal9cu83ibcbhOkcbhEaXcufgvhodnindnalaocsGcdtfydba8A9hmbaEhYxdkcuhYaocufhoaEcefgEcz9hmbkkcbhodnindnalavcsGcdtfydba39hmbaohExdkcuhEavcufhvaocefgocz9hmbkkaOaKaOSg8EfhLdndnaYcm0mbaYcefhYxekcbcsa8AaLSgvEhYaLavfhLkdndnaEcm0mbaEcefhExekcbcsa3aLSgvEhEaLavfhLkc9:cua8EEh8FcbhvaEaYcltVgacFeGhodndndninavcj1jjbfRbbaoSmeavcefgvcz9hmbxdkka5aKaO9havcm0VVmbasavc;WeV86bbxekasa8F86bbaeaa86bbaecefhekdna8EmbaKaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaKhAkdnaYcs9hmba8AaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka8AhAkdnaEcs9hmba3aA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka3hAkalaXcdtfaKBdbaXcefcsGhvdndnaYPzbeeeeeeeeeeeeeebekalavcdtfa8ABdbaXcdfcsGhvkdndnaEPzbeeeeeeeeeeeeeebekalavcdtfa3BdbavcefcsGhvkcihoalc;abfaQcitfgEaKBdlaEa8ABdbaQcefcsGhYcdhEavhXaLhOxekcdhoalaXcdtfa3BdbcehEaXcefcsGhXaQhYkalc;abfaYcitfgva8ABdlava3Bdbalc;abfaQaEfcsGcitfgva3BdlavaKBdbascefhsaQaofcsGhQaCcifgCai6mbkkcbhvaeaP0mbcbhvinaeavfavcj1jjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meceadtae6mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd:e:kjjbk:ydewu8Jjjjjbcz9Rhlcbhvdnaicvfae0mbcbhvabcbRb:e:kjjbc;qeV86bbal9cb83iwabcefhoabaefc98fhrdnaiTmbcbhwcbhDindnaoar6mbcbskadaDcdtfydbgqalcwfawaqav9Rgvavc8F91gv7av9Rc507gwcdtfgkydb9Rgvc8E91c9:Gavcdt7awVhvinaoavcFb0gecrtavcFbGV86bbavcr4hvaocefhoaembkakaqBdbaqhvaDcefgDai9hmbkkcbhvaoar0mbaocbBbbaoab9RclfhvkavkBeeucbhddninadcefgdc8F0meceadtae6mbkkadcwfcFeGcr9Uab2cvfk:bvli99dui99ludnaeTmbcuadcetcuftcu7:Yhvdndncuaicuftcu7:YgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhrdndnakJbbbb9GTmbaxhqxekJbbjZar:l:tgqaq:maxJbbbb9GEhqJbbjZax:l:tgxax:marJbbbb9GEhrkdndnalcxfIdbgxJbbj:;axJbbj:;9GEgkJbbjZakJbbjZ9FEavNJbbbZJbbb:;axJbbbb9GEMgx:lJbbb9p9DTmbax:Ohmxekcjjjj94hmkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEaoNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaifgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaDfgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkalczfhlaiclfhiaDcwfhDaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:YgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;3viDue99eu8Jjjjjbcjd9Rgo8Kjjjjbadcd4hrdndndndnavcd9hmbadcl6meaohwarhDinawc:CuBdbawclfhwaDcufgDmbkaeTmiadcl6mdarcdthqalhkcbhxinaohwakhDarhminawawydbgPcbaDIdbgs:8cL4cFeGc:cufasJbbbb9BEgzaPaz9kEBdbaDclfhDawclfhwamcufgmmbkakaqfhkaxcefgxaeSmixbkkaeTmdxekaeTmekarcdthkavce9hhqadcl6hdcbhxindndndnaqmbadmdc:CuhDalhwarhminaDcbawIdbgs:8cL4cFeGc:cufasJbbbb9BEgPaDaP9kEhDawclfhwamcufgmmbxdkkc:CuhDdndnavPleddbdkadmdaohwalhmarhPinawcbamIdbgs:8cL4cFeGgzc;:bazc;:b9kEc:cufasJbbbb9BEBdbamclfhmawclfhwaPcufgPmbxdkkadmecbhwarhminaoawfcbalawfIdbgs:8cL4cFeGgPc8AaPc8A9kEc:cufasJbbbb9BEBdbawclfhwamcufgmmbkkadmbcbhwarhPinaDhmdnavceSmbaoawfydbhmkdndnalawfIdbgscjjj;8iamai9RcefgmcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:Ohzxekcjjjj94hzkabawfazcFFFrGamcKtVBdbawclfhwaPcufgPmbkkabakfhbalakfhlaxcefgxae9hmbkkaocjdf8Kjjjjbk;HqdCui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;KbzNjjjb8AcbhodnadTmbcbhoaiTmbdnabae9hmbavcuadcdtgradcFFFFi0Ecbyd:m:kjjbHjjjjbbgeBd:SeavceBd:mdaeabarz:tjjjb8Akavc:GefcwfcbBdbav9cb83i:Geavc:Gefaeadaiavc:Sefz:njjjbavyd:Gehwadci9UgDcbyd:m:kjjbHjjjjbbhravc:Sefavyd:mdgqcdtfarBdbavaqcefgkBd:mdarcbaDzNjjjbhxavc:SefakcdtfcuaicdtaicFFFFi0Ecbyd:m:kjjbHjjjjbbgmBdbavaqcdfgPBd:mdawhramhkinakalIdbalarydbgscwascw6Ecdtfc;ebfIdbMUdbarclfhrakclfhkaicufgimbkavc:SefaPcdtfcuaDcdtadcFFFF970Ecbyd:m:kjjbHjjjjbbgPBdbdnadci6mbaehraPhkaDhiinakamarydbcdtfIdbamarclfydbcdtfIdbMamarcwfydbcdtfIdbMUdbarcxfhrakclfhkaicufgimbkkaqcifhoavc;qbfhzavhravyd:KehHavyd:OehOcbhscbhkcbhAcehCinarhXcihQaeakci2gLcdtfgrydbhdarclfydbhqabaAcx2fgicwfarcwfydbgKBdbaiclfaqBdbaiadBdbaxakfce86bbazaKBdwazaqBdlazadBdbaPakcdtfcbBdbdnasTmbcihQaXhiinazaQcdtfaiydbgrBdbaQaraK9harad9haraq9hGGfhQaiclfhiascufgsmbkkaAcefhAcbhsinaOaHaeasaLfcdtfydbcdtgifydbcdtfgKhrawaifgqydbgdhidnadTmbdninarydbakSmearclfhraicufgiTmdxbkkaraKadcdtfc98fydbBdbaqaqydbcufBdbkascefgsci9hmbkdndnaQTmbcuhkJbbbbhYcbhqavyd:KehKavyd:OehLindndnawazaqcdtfydbcdtgsfydbgrmbaqcefhqxekaqcs0hiamasfgdIdbh8AadalcbaqcefgqaiEcdtfIdbalarcwarcw6Ecdtfc;ebfIdbMgEUdbaEa8A:thEarcdthiaLaKasfydbcdtfhrinaParydbgscdtfgdaEadIdbMg8AUdba8AaYaYa8A9DgdEhYasakadEhkarclfhraic98fgimbkkaqaQ9hmbkakcu9hmekaCaD9pmdindnaxaCfRbbmbaChkxdkaDaCcefgC9hmbxikkaQczaQcz6EhsazhraXhzakcu9hmbkkaocdtavc:Seffc98fhrdninaoTmearydbcbyd1:kjjbH:bjjjbbarc98fhraocufhoxbkkavc:qdf8Kjjjjbk;IlevucuaicdtgvaicFFFFi0Egocbyd:m:kjjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd:m:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd:m:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavzNjjjb8Aadci9UhDdnadTmbabydbhoaehladhrinaoalydbcdtfgvavydbcefBdbalclfhlarcufgrmbkkdnaiTmbabydbhlabydlhrcbhvaihoinaravBdbarclfhralydbavfhvalclfhlaocufgombkkdnadci6mbabydlhrabydwhvcbhlinaecwfydbhoaeclfydbhdaraeydbcdtfgwawydbgwcefBdbavawcdtfalBdbaradcdtfgdadydbgdcefBdbavadcdtfalBdbaraocdtfgoaoydbgocefBdbavaocdtfalBdbaecxfheaDalcefgl9hmbkkdnaiTmbabydlheabydbhlinaeaeydbalydb9RBdbalclfhlaeclfheaicufgimbkkkQbabaeadaic:01jjbz:mjjjbkQbabaeadaic:C:jjjbz:mjjjbk9DeeuabcFeaicdtzNjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Wkivuo99lu8Jjjjjbc;W;Gb9Rgl8Kjjjjbcbhvalcj;Gbfcbc;KbzNjjjb8AalcuadcdtadcFFFFi0Egocbyd:m:kjjbHjjjjbbgrBdj9GalceBd;G9GalcFFF;7rBdwal9cFFF;7;3FF:;Fb83dbalcFFF97Bd;S9Gal9cFFF;7FFF:;u83d;K9Gaicd4hwdndnadmbJFFuFhDJFFuuhqJFFuuhkJFFuFhxJFFuuhmJFFuFhPxekawcdthsaehzincbhiinalaifgHazaifIdbgDaHIdbgxaxaD9EEUdbalc;K;GbfaifgHaDaHIdbgxaxaD9DEUdbaiclfgicx9hmbkazasfhzavcefgvad9hmbkalIdwhqalId;S9GhDalIdlhkalId;O9GhxalIdbhmalId;K9GhPkdndnadTmbJbbbbJbbjZJbbbbaPam:tgPaPJbbbb9DEgPaxak:tgxaxaP9DEgxaDaq:tgDaDax9DEgD:vaDJbbbb9BEhDawcdthsarhHadhzindndnaDaeIdbam:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcv2c;j:KM;jbGhvdndnaDaeclfIdbak:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcq2cM;j:KMeGavVhvdndnaDaecwfIdbaq:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaHavaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcC2c:KM;j:KdGVBdbaeasfheaHclfhHazcufgzmbkalcbcj;GbzNjjjbhiarhHadheinaiaHydbgzcFrGcx2fgvavydbcefBdbaiazcq4cFrGcx2fgvavydlcefBdlaiazcC4cFrGcx2fgzazydwcefBdwaHclfhHaecufgembxdkkalcbcj;GbzNjjjb8AkcbhHcbhzcbhecbhvinalaHfgiydbhsaiazBdbaicwfgwydbhOawavBdbaiclfgiydbhwaiaeBdbasazfhzaOavfhvawaefheaHcxfgHcj;Gb9hmbkcbhHalaocbyd:m:kjjbHjjjjbbgiBd:e9GdnadTmbabhzinazaHBdbazclfhzadaHcefgH9hmbkabhHadhzinalaraHydbgecdtfydbcFrGcx2fgvavydbgvcefBdbaiavcdtfaeBdbaHclfhHazcufgzmbkaihHadhzinalaraHydbgecdtfydbcq4cFrGcx2fgvavydlgvcefBdlabavcdtfaeBdbaHclfhHazcufgzmbkabhHadhzinalaraHydbgecdtfydbcC4cFrGcx2fgvavydwgvcefBdwaiavcdtfaeBdbaHclfhHazcufgzmbkcbhHinabaiydbcdtfaHBdbaiclfhiadaHcefgH9hmbkkclhidninaic98Smealcj;Gbfaifydbcbyd1:kjjbH:bjjjbbaic98fhixbkkalc;W;Gbf8Kjjjjbk9teiucbcbyd:q:kjjbgeabcifc98GfgbBd:q:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:kjjbgeabcrfc94GfgbBd:q:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd:q:kjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd:q:kjjbfgdBd:q:kjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk:Iddbcjwk:edb4:h9w9N94:P:gW:j9O:ye9Pbbbbbbebbbdbbbebbbdbbbbbbbdbbbbbbbebbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:bc:eqkzebbbebbbdbbba:vbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(i(a),{}).then(function(m){t=m.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(0),t.exports.meshopt_encodeIndexVersion(1)});function i(m){for(var p=new Uint8Array(m.length),g=0;g<m.length;++g){var u=m.charCodeAt(g);p[g]=u>96?u-97:u>64?u-39:u+4}for(var h=0,g=0;g<m.length;++g)p[h++]=p[g]<60?e[p[g]]:(p[g]-60)*64+p[++g];return p.buffer.slice(0,h)}function s(m){if(!m)throw new Error("Assertion failed")}function r(m){return new Uint8Array(m.buffer,m.byteOffset,m.byteLength)}function o(m,p,g,u){var h=t.exports.sbrk,x=h(p.length*4),v=h(g*4),_=new Uint8Array(t.exports.memory.buffer),w=r(p);_.set(w,x),u&&u(x,x,p.length,g);var R=m(v,x,p.length,g);_=new Uint8Array(t.exports.memory.buffer);var T=new Uint32Array(g);new Uint8Array(T.buffer).set(_.subarray(v,v+g*4)),w.set(_.subarray(x,x+p.length*4)),h(x-h(0));for(var I=0;I<p.length;++I)p[I]=T[p[I]];return[T,R]}function c(m,p,g,u){var h=t.exports.sbrk,x=h(g*4),v=h(g*u),_=new Uint8Array(t.exports.memory.buffer);_.set(r(p),v),m(x,v,g,u),_=new Uint8Array(t.exports.memory.buffer);var w=new Uint32Array(g);return new Uint8Array(w.buffer).set(_.subarray(x,x+g*4)),h(x-h(0)),w}function l(m,p,g,u,h){var x=t.exports.sbrk,v=x(p),_=x(u*h),w=new Uint8Array(t.exports.memory.buffer);w.set(r(g),_);var R=m(v,p,_,u,h),T=new Uint8Array(R);return T.set(w.subarray(v,v+R)),x(v-x(0)),T}function d(m){for(var p=0,g=0;g<m.length;++g){var u=m[g];p=p<u?u:p}return p}function f(m,p){if(s(p==2||p==4),p==4)return new Uint32Array(m.buffer,m.byteOffset,m.byteLength/4);var g=new Uint16Array(m.buffer,m.byteOffset,m.byteLength/2);return new Uint32Array(g)}function b(m,p,g,u,h,x,v){var _=t.exports.sbrk,w=_(g*u),R=_(g*x),T=new Uint8Array(t.exports.memory.buffer);T.set(r(p),R),m(w,g,u,h,R,v);var I=new Uint8Array(g*u);return I.set(T.subarray(w,w+g*u)),_(w-_(0)),I}return{ready:n,supported:!0,reorderMesh:function(m,p,g){var u=p?g?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,m,d(m)+1,u)},reorderPoints:function(m,p){return s(m instanceof Float32Array),s(m.length%p==0),s(p>=3),c(t.exports.meshopt_spatialSortRemap,m,m.length/p,p*4)},encodeVertexBuffer:function(m,p,g){s(g>0&&g<=256),s(g%4==0);var u=t.exports.meshopt_encodeVertexBufferBound(p,g);return l(t.exports.meshopt_encodeVertexBuffer,u,m,p,g)},encodeIndexBuffer:function(m,p,g){s(g==2||g==4),s(p%3==0);var u=f(m,g),h=t.exports.meshopt_encodeIndexBufferBound(p,d(u)+1);return l(t.exports.meshopt_encodeIndexBuffer,h,u,p,4)},encodeIndexSequence:function(m,p,g){s(g==2||g==4);var u=f(m,g),h=t.exports.meshopt_encodeIndexSequenceBound(p,d(u)+1);return l(t.exports.meshopt_encodeIndexSequence,h,u,p,4)},encodeGltfBuffer:function(m,p,g,u){var h={ATTRIBUTES:this.encodeVertexBuffer,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return s(h[u]),h[u](m,p,g)},encodeFilterOct:function(m,p,g,u){return s(g==4||g==8),s(u>=1&&u<=16),b(t.exports.meshopt_encodeFilterOct,m,p,g,u,16)},encodeFilterQuat:function(m,p,g,u){return s(g==8),s(u>=4&&u<=16),b(t.exports.meshopt_encodeFilterQuat,m,p,g,u,16)},encodeFilterExp:function(m,p,g,u,h){s(g>0&&g%4==0),s(u>=1&&u<=24);var x={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return b(t.exports.meshopt_encodeFilterExp,m,p,g,u,g,h?x[h]:1)}}})();var Zg=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(h){s=h.instance,s.exports.__wasm_call_ctors()});function o(h){for(var x=new Uint8Array(h.length),v=0;v<h.length;++v){var _=h.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var w=0,v=0;v<h.length;++v)x[w++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,w)}function c(h,x,v,_,w,R,T){var I=h.exports.sbrk,E=_+3&-4,M=I(E*w),C=I(R.length),H=new Uint8Array(h.exports.memory.buffer);H.set(R,C);var F=x(M,_,w,C,R.length);if(F==0&&T&&T(M,E,w),v.set(H.subarray(M,M+_*w)),I(M-I(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],b=0;function m(h){var x={object:new Worker(h),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function p(h){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+u.name+";"+c.toString()+u.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),w=f.length;w<h;++w)f[w]=m(_);for(var w=h;w<f.length;++w)f[w].object.postMessage({});f.length=h,URL.revokeObjectURL(_)}function g(h,x,v,_,w){for(var R=f[0],T=1;T<f.length;++T)f[T].pending<R.pending&&(R=f[T]);return new Promise(function(I,E){var M=new Uint8Array(v),C=++b;R.pending+=h,R.requests[C]={resolve:I,reject:E},R.object.postMessage({id:C,count:h,size:x,source:M,mode:_,filter:w},[M.buffer])})}function u(h){var x=h.data;if(!x.id)return self.close();self.ready.then(function(v){try{var _=new Uint8Array(x.count*x.size);c(v,v.exports[x.mode],_,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:x.id,count:x.count,action:"reject",value:w})}})}return{ready:r,supported:!0,useWorkers:function(h){p(h)},decodeVertexBuffer:function(h,x,v,_,w){c(s,s.exports.meshopt_decodeVertexBuffer,h,x,v,_,s.exports[l[w]])},decodeIndexBuffer:function(h,x,v,_){c(s,s.exports.meshopt_decodeIndexBuffer,h,x,v,_)},decodeIndexSequence:function(h,x,v,_){c(s,s.exports.meshopt_decodeIndexSequence,h,x,v,_)},decodeGltfBuffer:function(h,x,v,_,w,R){c(s,s.exports[d[w]],h,x,v,_,s.exports[l[R]])},decodeGltfBufferAsync:function(h,x,v,_,w){return f.length>0?g(h,x,v,d[_],l[w]):r.then(function(){var R=new Uint8Array(h*x);return c(s,s.exports[d[_]],R,h,x,v,s.exports[l[w]]),R})}}})();(function(){var a="b9H79Tebbbe9Hk9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gvuuuuue999Gquuuuuuu99uueu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9GiuuueuizsdilvoirwDbqqbeqlve9Weiiviebeoweuecj:Pdkr:Tewo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bl8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bvQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7boX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2Wbra9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9Wbwl79IV9RbDDwebcekdmxq;UMesdbk:kfvKue99euY99Qu8Jjjjjbc;W;qb9Rgs8Kjjjjbcbhzascxfcbc;Kbz:ljjjb8AdnabaeSmbabaeadcdtz:kjjjb8AkdnamcdGTmbalcrfci4gHcbyd;S1jjbHjjjjbbheascxfasyd2gOcdtfaeBdbasaOcefBd2aecbaHz:ljjjbhAcbhlcbhednadTmbcbhlabheadhHinaAaeydbgOci4fgCaCRbbgCceaOcrGgOtV86bbaCcu7aO4ceGalfhlaeclfheaHcufgHmbkcualcdtalcFFFFi0Ehekaecbyd;S1jjbHjjjjbbhzascxfasyd2gecdtfazBdbasaecefBd2alcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;S1jjbHjjjjbbhHascxfasyd2gCcdtfaHBdbasaCcefBd2aHcFeaOz:ljjjbhQdnadTmbaecufhCcbhLinabaXcdtfgKydbgAc:v;t;h;Ev2hOcbhedndninaQaOaCGgOcdtfgYydbgHcuSmeazaHcdtfydbaASmdaecefgeaOfhOaeaC9nmbxdkkazaLcdtfaABdbaYaLBdbaLhHaLcefhLkaKaHBdbaXcefgXad9hmbkkaQcbyd;O1jjbH:bjjjbbasasyd2cufBd2kcualcefgecdtaecFFFFi0Ecbyd;S1jjbHjjjjbbh8Aascxfasyd2gecdtfa8ABdbasa8ABdlasaecefBd2cuadcitadcFFFFe0Ecbyd;S1jjbHjjjjbbhEascxfasyd2gecdtfaEBdbasaEBdwasaecefBd2asclfabadalcbz:cjjjbcualcdtg3alcFFFFi0Eg5cbyd;S1jjbHjjjjbbhQascxfasyd2gecdtfaQBdbasaecefBd2a5cbyd;S1jjbHjjjjbbh8Eascxfasyd2gecdtfa8EBdbasaecefBd2alcd4alfhOcehHinaHgecethHaeaO6mbkcbhLcuaecdtgOaecFFFFi0Ecbyd;S1jjbHjjjjbbhHascxfasyd2gCcdtfaHBdbasaCcefBd2aHcFeaOz:ljjjbhXdnalTmbavcd4hCaecufhHinaLhednazTmbazaLcdtfydbhekaiaeaC2cdtfgeydlgOcH4aO7c:F:b:DD2aeydbgOcH4aO7c;D;O:B8J27aeydwgecH4ae7c:3F;N8N27aHGheaLcdth8FdndndndndnazTmbaza8FfhKcbhOinaXaecdtfgYydbgAcuSmlaiazaAcdtfydbaC2cdtfaiaKydbaC2cdtfcxz:ojjjbTmiaOcefgOaefaHGheaOaH9nmbxdkkaiaLaC2cdtfhKcbhOinaXaecdtfgYydbgAcuSmiaiaAaC2cdtfaKcxz:ojjjbTmdaOcefgOaefaHGheaOaH9nmbkkcbhYkaYydbgecu9hmekaYaLBdbaLhekaQa8FfaeBdbaLcefgLal9hmbkcbhea8EhHinaHaeBdbaHclfhHalaecefge9hmbkcbheaQhHa8EhOindnaeaHydbgCSmbaOa8EaCcdtfgCydbBdbaCaeBdbkaHclfhHaOclfhOalaecefge9hmbkkcbhaaXcbyd;O1jjbH:bjjjbbasasyd2cufBd2alcbyd;S1jjbHjjjjbbhXascxfasyd2gecdtfaXBdbasaecefBd2a5cbyd;S1jjbHjjjjbbheascxfasyd2gHcdtfaeBdbasaHcefBd2a5cbyd;S1jjbHjjjjbbhHascxfasyd2gOcdtfaHBdbasaOcefBd2aecFea3z:ljjjbhhaHcFea3z:ljjjbhgdnalTmbaEcwfh8Jindna8AaagOcefgacdtfydbgCa8AaOcdtgefydbgHSmbaCaH9Rh8FaEaHcitfh3agaefh8KahaefhLcbhAindndna3aAcitfydbgYaO9hmbaLaOBdba8KaOBdbxekdna8AaYcdtg8LfgeclfydbgHaeydbgeSmbaEaecitgCfydbaOSmeaHae9Rh8Maecu7aHfhKa8JaCfhHcbheinaKaeSmeaecefheaHydbhCaHcwfhHaCaO9hmbkaea8M6mekaga8LfgeaOaYaeydbcuSEBdbaLaYaOaLydbcuSEBdbkaAcefgAa8F9hmbkkaaal9hmbkaQhHa8EhOaghCahhAcbheindndnaeaHydbgY9hmbdnaeaOydbgY9hmbaAydbhYdnaCydbgKcu9hmbaYcu9hmbaXaefcb86bbxikaXaefhLdnaeaKSmbaeaYSmbaLce86bbxikaLcl86bbxdkdnaea8EaYcdtgKfydb9hmbdnaCydbgLcuSmbaeaLSmbaAydbg8FcuSmbaea8FSmbagaKfydbg3cuSmba3aYSmbahaKfydbgKcuSmbaKaYSmbdnaQaLcdtfydbgYaQaKcdtfydb9hmbaYaQa8FcdtfydbgKSmbaKaQa3cdtfydb9hmbaXaefcd86bbxlkaXaefcl86bbxikaXaefcl86bbxdkaXaefcl86bbxekaXaefaXaYfRbb86bbkaHclfhHaOclfhOaCclfhCaAclfhAalaecefge9hmbkdnaqTmbdndnazTmbazheaQhHalhOindnaqaeydbfRbbTmbaXaHydbfcl86bbkaeclfheaHclfhHaOcufgOmbxdkkaQhealhHindnaqRbbTmbaXaeydbfcl86bbkaqcefhqaeclfheaHcufgHmbkkaQhealhOaXhHindnaXaeydbfRbbcl9hmbaHcl86bbkaeclfheaHcefhHaOcufgOmbkkamceGTmbaXhealhHindnaeRbbce9hmbaecl86bbkaecefheaHcufgHmbkkcualcx2alc;v:Q;v:Qe0Ecbyd;S1jjbHjjjjbbhaascxfasyd2gecdtfaaBdbasaecefBd2aaaialavazz:djjjbh8NdndnaDmbcbhycbh8Jxekcbh8JawhecbhHindnaeIdbJbbbb9ETmbasc;Wbfa8JcdtfaHBdba8Jcefh8JkaeclfheaDaHcefgH9hmbkcua8Jal2gecdtaecFFFFi0Ecbyd;S1jjbHjjjjbbhyascxfasyd2gecdtfayBdbasaecefBd2alTmba8JTmbarcd4hLdnazTmba8JcdthicbhYayhKinaoazaYcdtfydbaL2cdtfhAasc;WbfheaKhHa8JhOinaHaAaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKaifhKaYcefgYal9hmbxdkka8JcdthicbhYayhKinaoaYaL2cdtfhAasc;WbfheaKhHa8JhOinaHaAaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKaifhKaYcefgYal9hmbkkcualc8S2gHalc;D;O;f8U0EgCcbyd;S1jjbHjjjjbbheascxfasyd2gOcdtfaeBdbasaOcefBd2aecbaHz:ljjjbhqdndndndna8JTmbaCcbyd;S1jjbHjjjjbbhvascxfasyd2gecdtfavBdbcehOasaecefBd2avcbaHz:ljjjb8Acua8Jal2gecltgHaecFFFFb0Ecbyd;S1jjbHjjjjbbhrascxfasyd2gecdtfarBdbasaecefBd2arcbaHz:ljjjb8AadmexikcbhvadTmecbhrkcbhAabhHindnaaaHclfydbgYcx2fgeIdbaaaHydbgKcx2fgOIdbg8P:tgIaaaHcwfydbgLcx2fgCIdlaOIdlg8R:tg8SNaCIdba8P:tgRaeIdla8R:tg8UN:tg8Va8VNa8UaCIdwaOIdwg8W:tg8XNa8SaeIdwa8W:tg8UN:tg8Sa8SNa8UaRNa8XaIN:tgIaINMM:rgRJbbbb9ETmba8VaR:vh8VaIaR:vhIa8SaR:vh8SkaqaQaKcdtfydbc8S2fgea8SaR:rgRa8SNNg8UaeIdbMUdbaeaIaRaINg8YNg8XaeIdlMUdlaea8VaRa8VNg8ZNg80aeIdwMUdwaea8Ya8SNg8YaeIdxMUdxaea8Za8SNg81aeIdzMUdzaea8ZaINg8ZaeIdCMUdCaea8SaRa8Va8WNa8Sa8PNa8RaINMM:mg8RNg8PNg8SaeIdKMUdKaeaIa8PNgIaeId3MUd3aea8Va8PNg8VaeIdaMUdaaea8Pa8RNg8PaeId8KMUd8KaeaRaeIdyMUdyaqaQaYcdtfydbc8S2fgea8UaeIdbMUdbaea8XaeIdlMUdlaea80aeIdwMUdwaea8YaeIdxMUdxaea81aeIdzMUdzaea8ZaeIdCMUdCaea8SaeIdKMUdKaeaIaeId3MUd3aea8VaeIdaMUdaaea8PaeId8KMUd8KaeaRaeIdyMUdyaqaQaLcdtfydbc8S2fgea8UaeIdbMUdbaea8XaeIdlMUdlaea80aeIdwMUdwaea8YaeIdxMUdxaea81aeIdzMUdzaea8ZaeIdCMUdCaea8SaeIdKMUdKaeaIaeId3MUd3aea8VaeIdaMUdaaea8PaeId8KMUd8KaeaRaeIdyMUdyaHcxfhHaAcifgAad6mbkcbhiabhKinabaicdtfhYcbhHinaXaYaHc:G1jjbfydbcdtfydbgOfRbbhedndnaXaKaHfydbgCfRbbgAc99fcFeGcpe0mbaeceSmbaecd9hmekdnaAcufcFeGce0mbahaCcdtfydbaO9hmekdnaecufcFeGce0mbagaOcdtfydbaC9hmekdnaAcv2aefcj1jjbfRbbTmbaQaOcdtfydbaQaCcdtfydb0mekJbbacJbbacJbbjZaeceSEaAceSEh8ZdnaaaYaHc:K1jjbfydbcdtfydbcx2fgeIdwaaaCcx2fgAIdwg8R:tg8VaaaOcx2fgLIdwa8R:tg8Sa8SNaLIdbaAIdbg8W:tgIaINaLIdlaAIdlg8U:tgRaRNMMg8PNa8Va8SNaeIdba8W:tg80aINaRaeIdla8U:tg8YNMMg8Xa8SN:tg8Va8VNa80a8PNa8XaIN:tg8Sa8SNa8Ya8PNa8XaRN:tgIaINMM:rgRJbbbb9ETmba8VaR:vh8VaIaR:vhIa8SaR:vh8SkaqaQaCcdtfydbc8S2fgea8Sa8Za8P:rNgRa8SNNg8XaeIdbMUdbaeaIaRaINg8ZNg80aeIdlMUdlaea8VaRa8VNg8PNg8YaeIdwMUdwaea8Za8SNg8ZaeIdxMUdxaea8Pa8SNg81aeIdzMUdzaea8PaINgBaeIdCMUdCaea8SaRa8Va8RNa8Sa8WNa8UaINMM:mg8RNg8PNg8SaeIdKMUdKaeaIa8PNgIaeId3MUd3aea8Va8PNg8VaeIdaMUdaaea8Pa8RNg8PaeId8KMUd8KaeaRaeIdyMUdyaqaQaOcdtfydbc8S2fgea8XaeIdbMUdbaea80aeIdlMUdlaea8YaeIdwMUdwaea8ZaeIdxMUdxaea81aeIdzMUdzaeaBaeIdCMUdCaea8SaeIdKMUdKaeaIaeId3MUd3aea8VaeIdaMUdaaea8PaeId8KMUd8KaeaRaeIdyMUdykaHclfgHcx9hmbkaKcxfhKaicifgiad6mbkdna8JTmbcbhKinJbbbbh8WaaabaKcdtfgeclfydbgLcx2fgHIdwaaaeydbgicx2fgOIdwg8Y:tgIaINaHIdbaOIdbg81:tg8Va8VNaHIdlaOIdlgB:tgRaRNMMg8Zaaaecwfydbg8Fcx2fgeIdwa8Y:tg8PNaIaIa8PNa8VaeIdba81:tg8RNaRaeIdlaB:tg8UNMMg8SN:tJbbbbJbbjZa8Za8Pa8PNa8Ra8RNa8Ua8UNMMg80Na8Sa8SN:tg8X:va8XJbbbb9BEg8XNh83a80aINa8Pa8SN:ta8XNhUa8Za8UNaRa8SN:ta8XNh85a80aRNa8Ua8SN:ta8XNh86a8Za8RNa8Va8SN:ta8XNh87a80a8VNa8Ra8SN:ta8XNh88a8Va8UNa8RaRN:tg8Sa8SNaRa8PNa8UaIN:tg8Sa8SNaIa8RNa8Pa8VN:tg8Sa8SNMM:rJbbbZNh8Sayaia8J2g3cdtfhHaya8Fa8J2gwcdtfhOayaLa8J2g8LcdtfhCa8Y:mh89aB:mh8:a81:mhZcbhAa8JhYJbbbbh8UJbbbbh8XJbbbbh8ZJbbbbh80Jbbbbh8YJbbbbh81JbbbbhBJbbbbhnJbbbbhcinasc;WbfaAfgecwfa8SaUaCIdbaHIdbg8P:tgRNa83aOIdba8P:tg8RNMgINUdbaeclfa8Sa86aRNa85a8RNMg8VNUdbaea8Sa88aRNa87a8RNMgRNUdbaecxfa8Sa89aINa8:a8VNa8PaZaRNMMMg8PNUdba8SaIa8VNNa80Mh80a8SaIaRNNa8YMh8Ya8Sa8VaRNNa81Mh81a8Sa8Pa8PNNa8WMh8Wa8SaIa8PNNa8UMh8Ua8Sa8Va8PNNa8XMh8Xa8SaRa8PNNa8ZMh8Za8SaIaINNaBMhBa8Sa8Va8VNNanMhna8SaRaRNNacMhcaHclfhHaCclfhCaOclfhOaAczfhAaYcufgYmbkavaic8S2fgeacaeIdbMUdbaeanaeIdlMUdlaeaBaeIdwMUdwaea81aeIdxMUdxaea8YaeIdzMUdzaea80aeIdCMUdCaea8ZaeIdKMUdKaea8XaeId3MUd3aea8UaeIdaMUdaaea8WaeId8KMUd8Kaea8SaeIdyMUdyavaLc8S2fgeacaeIdbMUdbaeanaeIdlMUdlaeaBaeIdwMUdwaea81aeIdxMUdxaea8YaeIdzMUdzaea80aeIdCMUdCaea8ZaeIdKMUdKaea8XaeId3MUd3aea8UaeIdaMUdaaea8WaeId8KMUd8Kaea8SaeIdyMUdyava8Fc8S2fgeacaeIdbMUdbaeanaeIdlMUdlaeaBaeIdwMUdwaea81aeIdxMUdxaea8YaeIdzMUdzaea80aeIdCMUdCaea8ZaeIdKMUdKaea8XaeId3MUd3aea8UaeIdaMUdaaea8WaeId8KMUd8Kaea8SaeIdyMUdyara3cltfhYcbhHa8JhCinaYaHfgeasc;WbfaHfgOIdbaeIdbMUdbaeclfgAaOclfIdbaAIdbMUdbaecwfgAaOcwfIdbaAIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaCcufgCmbkara8LcltfhYcbhHa8JhCinaYaHfgeasc;WbfaHfgOIdbaeIdbMUdbaeclfgAaOclfIdbaAIdbMUdbaecwfgAaOcwfIdbaAIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaCcufgCmbkarawcltfhYcbhHa8JhCinaYaHfgeasc;WbfaHfgOIdbaeIdbMUdbaeclfgAaOclfIdbaAIdbMUdbaecwfgAaOcwfIdbaAIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaCcufgCmbkaKcifgKad6mbkkcbhOxekcehOcbhrkcbh8FdndnamcwGg9cmbJbbbbh8ZcbhJcbhocbhCxekcbhea5cbyd;S1jjbHjjjjbbhCascxfasyd2gHcdtfaCBdbasaHcefBd2dnalTmbaChHinaHaeBdbaHclfhHalaecefge9hmbkkdnaOmbcbhiinabaicdtfhLcbhKinaQaLaKcdtgec:G1jjbfydbcdtfydbcdtfydbhHdnaCaQaLaefydbcdtfydbgOcdtfgAydbgeaOSmbinaAaCaegOcdtfgYydbgeBdbaYhAaOae9hmbkkdnaCaHcdtfgAydbgeaHSmbinaAaCaegHcdtfgYydbgeBdbaYhAaHae9hmbkkdnaOaHSmbaCaOaHaOaH0EcdtfaOaHaOaH6EBdbkaKcefgKci9hmbkaicifgiad6mbkkcbhJdnalTmbcbhYindnaQaYcdtgefydbaY9hmbaYhHdnaCaefgKydbgeaYSmbaKhOinaOaCaegHcdtfgAydbgeBdbaAhOaHae9hmbkkaKaHBdbkaYcefgYal9hmbkcbheaQhOaChHcbhJindndnaeaOydbgA9hmbdnaeaHydbgA9hmbaHaJBdbaJcefhJxdkaHaCaAcdtfydbBdbxekaHaCaAcdtfydbBdbkaOclfhOaHclfhHalaecefge9hmbkkcuaJcltgeaJcjjjjiGEcbyd;S1jjbHjjjjbbhoascxfasyd2gHcdtfaoBdbasaHcefBd2aocbaez:ljjjbhAdnalTmbaChOaahealhYinaecwfIdbh8SaeclfIdbhIaAaOydbcltfgHaeIdbaHIdbMUdbaHclfgKaIaKIdbMUdbaHcwfgKa8SaKIdbMUdbaHcxfgHaHIdbJbbjZMUdbaOclfhOaecxfheaYcufgYmbkkdnaJTmbaAheaJhHinaecxfgOIdbh8SaOcbBdbaeaeIdbJbbbbJbbjZa8S:va8SJbbbb9BEg8SNUdbaeclfgOa8SaOIdbNUdbaecwfgOa8SaOIdbNUdbaeczfheaHcufgHmbkkdnalTmbaChOaahealhYinaAaOydbcltfgHcxfgKaecwfIdbaHcwfIdb:tg8Sa8SNaeIdbaHIdb:tg8Sa8SNaeclfIdbaHclfIdb:tg8Sa8SNMMg8SaKIdbgIaIa8S9DEUdbaOclfhOaecxfheaYcufgYmbkkdnaJmbcbhJJFFuuh8ZxekaAcxfheaAhHaJhOinaHaeIdbUdbaeczfheaHclfhHaOcufgOmbkJFFuuh8ZaAheaJhHinaeIdbg8Sa8Za8Za8S9EEh8ZaeclfheaHcufgHmbkkasydlh9ednalTmba9eclfhea9eydbhAaXhHalhYcbhOincbaeydbgKaA9RaHRbbcpeGEaOfhOaHcefhHaeclfheaKhAaYcufgYmbkaOce4h8Fkcuada8F9RcifgTcx2aTc;v:Q;v:Qe0Ecbyd;S1jjbHjjjjbbhDascxfasyd2gecdtfaDBdbasaecefBd2cuaTcdtaTcFFFFi0Ecbyd;S1jjbHjjjjbbhSascxfasyd2gecdtfaSBdbasaecefBd2a5cbyd;S1jjbHjjjjbbh8Mascxfasyd2gecdtfa8MBdbasaecefBd2alcbyd;S1jjbHjjjjbbh9hascxfasyd2gecdtfa9hBdbasaecefBd2axaxNa8NJbbjZamclGEg83a83N:vhcJbbbbhndnadak9nmbdnaTci6mba8Jclth9iaDcwfh6JbbbbhBJbbbbhninasclfabadalaQz:cjjjbabh8FcbhEcbh5inaba5cdtfh3cbheindnaQa8FaefydbgOcdtgifydbgYaQa3aec:W1jjbfydbcdtfydbgHcdtgwfydbgKSmbaXaHfRbbgLcv2aXaOfRbbgAfc;a1jjbfRbbg8AaAcv2aLfg8Lc;a1jjbfRbbg8KVcFeGTmbdnaKaY9nmba8Lcj1jjbfRbbcFeGmekaAcufhYdnaAaL9hmbaYcFeGce0mbahaifydbaH9hmekdndnaAclSmbaLcl9hmekdnaYcFeGce0mbahaifydbaH9hmdkaLcufcFeGce0mbagawfydbaO9hmekaDaEcx2fgAaHaOa8KcFeGgYEBdlaAaOaHaYEBdbaAaYa8AGcb9hBdwaEcefhEkaeclfgecx9hmbkdna5cifg5ad9pmba8Fcxfh8FaEcifaT9nmekkaETmdcbhiinJbbbbJbbjZaqaQaDaicx2fgAydlgKaAydbgYaAydwgHEgLcdtfydbc8S2fgeIdyg8S:va8SJbbbb9BEaeIdwaaaYaKaHEg8Fcx2fgHIdwgRNaeIdzaHIdbg8PNaeIdaMg8Sa8SMMaRNaeIdlaHIdlg8RNaeIdCaRNaeId3Mg8Sa8SMMa8RNaeIdba8PNaeIdxa8RNaeIdKMg8Sa8SMMa8PNaeId8KMMM:lNh80JbbbbJbbjZaqaQaYcdtfydbc8S2fgeIdyg8S:va8SJbbbb9BEaeIdwaaaKcx2fgHIdwg8VNaeIdzaHIdbg8WNaeIdaMg8Sa8SMMa8VNaeIdlaHIdlg8UNaeIdCa8VNaeId3Mg8Sa8SMMa8UNaeIdba8WNaeIdxa8UNaeIdKMg8Sa8SMMa8WNaeId8KMMM:lNh8YaAcwfh3aAclfhwdna8JTmbavaYc8S2fgOIdwa8VNaOIdza8WNaOIdaMg8Sa8SMMa8VNaOIdla8UNaOIdCa8VNaOId3Mg8Sa8SMMa8UNaOIdba8WNaOIdxa8UNaOIdKMg8Sa8SMMa8WNaOId8KMMMh8SayaKa8J2cdtfhHaraYa8J2cltfheaOIdyh8Xa8JhOinaHIdbgIaIa8XNaecxfIdba8VaecwfIdbNa8WaeIdbNa8UaeclfIdbNMMMgIaIM:tNa8SMh8SaHclfhHaeczfheaOcufgOmbkavaLc8S2fgOIdwaRNaOIdza8PNaOIdaMgIaIMMaRNaOIdla8RNaOIdCaRNaOId3MgIaIMMa8RNaOIdba8PNaOIdxa8RNaOIdKMgIaIMMa8PNaOId8KMMMhIaya8Fa8J2cdtfhHaraLa8J2cltfheaOIdyh8Wa8JhOinaHIdbg8Va8Va8WNaecxfIdbaRaecwfIdbNa8PaeIdbNa8RaeclfIdbNMMMg8Va8VM:tNaIMhIaHclfhHaeczfheaOcufgOmbka80aI:lMh80a8Ya8S:lMh8YkawaKa8Fa8Ya809FgeEBdbaAaYaLaeEBdba3a8Ya80aeEUdbaicefgiaE9hmbkasc;Wbfcbcj;qbz:ljjjb8Aa6heaEhHinasc;WbfaeydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbcefBdbaecxfheaHcufgHmbkcbhecbhHinasc;WbfaefgOydbhAaOaHBdbaAaHfhHaeclfgecj;qb9hmbkcbhea6hHinasc;WbfaHydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbgOcefBdbaSaOcdtfaeBdbaHcxfhHaEaecefge9hmbkadak9RgOci9Uh9kdnalTmbcbhea8MhHinaHaeBdbaHclfhHalaecefge9hmbkkcbh0a9hcbalz:ljjjbh9maOcO9Uh9na9kce4h9oasydwh9pcbh8KcbhwdninaDaSawcdtfydbcx2fg3Idwg8Sac9Emea8Ka9k9pmeJFFuuhIdna9oaE9pmbaDaSa9ocdtfydbcx2fIdwJbb;aZNhIkdna8SaI9ETmba8San9ETmba8Ka9n0mdkdna9maQa3ydlgicdtg9qfydbgAfg9rRbba9maQa3ydbgLcdtg9sfydbgHfg9tRbbVmbaXaLfRbbh9udna9eaHcdtfgeclfydbgOaeydbgeSmbaOae9RhKa9paecitfheaaaAcx2fg8Lcwfh5a8Lclfh9vaaaHcx2fg8Acwfh9wa8Aclfh9xcbhHceh8Fdnindna8MaeydbcdtfydbgOaASmba8MaeclfydbcdtfydbgYaASmbaOaYSmbaaaYcx2fgYIdbaaaOcx2fgOIdbg8V:tg8Sa9xIdbaOIdlgR:tg8WNa8AIdba8V:tg8UaYIdlaR:tgIN:tg8Pa8Sa9vIdbaR:tg8XNa8LIdba8V:tg80aIN:tgRNaIa9wIdbaOIdwg8R:tg8YNa8WaYIdwa8R:tg8VN:tg8WaIa5Idba8R:tg81Na8Xa8VN:tgINa8Va8UNa8Ya8SN:tg8Ra8Va80Na81a8SN:tg8SNMMa8Pa8PNa8Wa8WNa8Ra8RNMMaRaRNaIaINa8Sa8SNMMN:rJbbj8:N9FmdkaecwfheaHcefgHaK6h8FaKaH9hmbkka8FceGTmba9ocefh9oxeka3cwfhHdndndndna9uc9:fPdebdkaLheina8MaecdtgefaiBdba8EaefydbgeaL9hmbxikkdnagahaha9sfydbaiSEa8Ea9sfydbgLcdtfydbgecu9hmba8Ea9qfydbheka8Ma9sfaiBdbaehika8MaLcdtfaiBdbka9tce86bba9rce86bbaHIdbg8Sanana8S9DEhna0cefh0cecda9uceSEa8Kfh8KkawcefgwaE9hmbkka0TmddnalTmbcbhKcbhiindna8MaicdtgefydbgOaiSmbaQaOcdtfydbh8FdnaiaQaefydb9hg3mbaqa8Fc8S2fgeaqaic8S2fgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdyka8JTmbavaOc8S2fgeavaic8S2gwfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya9iaO2hLarhHa8JhAinaHaLfgeaHaKfgOIdbaeIdbMUdbaeclfgYaOclfIdbaYIdbMUdbaecwfgYaOcwfIdbaYIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbka3mbJbbbbJbbjZaqawfgeIdyg8S:va8SJbbbb9BEaeIdwaaa8Fcx2fgHIdwg8SNaeIdzaHIdbgINaeIdaMg8Va8VMMa8SNaeIdlaHIdlg8VNaeIdCa8SNaeId3Mg8Sa8SMMa8VNaeIdbaINaeIdxa8VNaeIdKMg8Sa8SMMaINaeId8KMMM:lNg8SaBaBa8S9DEhBkaKa9ifhKaicefgial9hmbkcbhHahheindnaeydbgOcuSmbdnaHa8MaOcdtgAfydbgO9hmbcuhOahaAfydbgAcuSmba8MaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkcbhHagheindnaeydbgOcuSmbdnaHa8MaOcdtgAfydbgO9hmbcuhOagaAfydbgAcuSmba8MaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkkaBana8JEhBcbhYabhecbhKindna8MaeydbcdtfydbgHa8MaeclfydbcdtfydbgOSmbaHa8MaecwfydbcdtfydbgASmbaOaASmbabaYcdtfgLaHBdbaLcwfaABdbaLclfaOBdbaYcifhYkaecxfheaKcifgKad6mbkdndna9cTmbaYak9nmba8ZaB9FTmbcbhdabhecbhHindnaoaCaeydbgOcdtfydbcdtfIdbaB9ETmbabadcdtfgAaOBdbaAclfaeclfydbBdbaAcwfaecwfydbBdbadcifhdkaecxfheaHcifgHaY6mbkJFFuuh8ZaJTmeaoheaJhHJFFuuh8SinaeIdbgIa8Sa8SaI9EEg8Va8SaIaB9EgOEh8Sa8Va8ZaOEh8ZaeclfheaHcufgHmbxdkkaYhdkadak0mbxdkkasclfabadalaQz:cjjjbkdndnadak0mbadhOxekdna9cmbadhOxekdna8Zac9FmbadhOxekina8ZJbb;aZNg8Saca8Sac9DEh8VJbbbbh8SdnaJTmbaoheaJhHinaeIdbgIa8SaIa8V9FEa8SaIa8S9EEh8SaeclfheaHcufgHmbkkcbhOabhecbhHindnaoaCaeydbgAcdtfydbcdtfIdba8V9ETmbabaOcdtfgYaABdbaYclfaeclfydbBdbaYcwfaecwfydbBdbaOcifhOkaecxfheaHcifgHad6mbkJFFuuh8ZdnaJTmbaoheaJhHJFFuuhIinaeIdbgRaIaIaR9EEg8PaIaRa8V9EgAEhIa8Pa8ZaAEh8ZaeclfheaHcufgHmbkkdnaOad9hmbadhOxdka8Sanana8S9DEhnaOak9nmeaOhda8Zac9FmbkkdnamcjjjjlGTmbazmbaOTmbcbhQabheinaXaeydbgAfRbbc3thKaecwfgLydbhHdndnahaAcdtg8FfydbaeclfgiydbgCSmbcbhYagaCcdtfydbaA9hmekcjjjj94hYkaeaKaYVaAVBdbaXaCfRbbc3thKdndnahaCcdtfydbaHSmbcbhYagaHcdtfydbaC9hmekcjjjj94hYkaiaKaYVaCVBdbaXaHfRbbc3thYdndnahaHcdtfydbaASmbcbhCaga8FfydbaH9hmekcjjjj94hCkaLaYaCVaHVBdbaecxfheaQcifgQaO6mbkkdnazTmbaOTmbaOheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa83an:rNUdbkasyd2gecdtascxffc98fhHdninaeTmeaHydbcbyd;O1jjbH:bjjjbbaHc98fhHaecufhexbkkasc;W;qbf8KjjjjbaOk;Yieouabydlhvabydbclfcbaicdtz:ljjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk;Podvuv998Jjjjjbca9RgvcFFF;7rBd3av9cFFF;7;3FF:;Fb83dCavcFFF97Bdzav9cFFF;7FFF:;u83dwdnadTmbaicd4hodnabmbdnalTmbcbhrinaealarcdtfydbao2cdtfhwcbhiinavcCfaifgDawaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkarcefgrad9hmbxikkaocdthrcbhwincbhiinavcCfaifgDaeaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkaearfheawcefgwad9hmbxdkkdnalTmbcbhrinabarcx2fgiaealarcdtfydbao2cdtfgwIdbUdbaiawIdlUdlaiawIdwUdwcbhiinavcCfaifgDawaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkarcefgrad9hmbxdkkaocdthlcbhraehwinabarcx2fgiaearao2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinavcCfaifgDawaifIdbgqaDIdbgkakaq9EEUdbavcwfaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkawalfhwarcefgrad9hmbkkJbbbbavIdwavIdCgk:tgqaqJbbbb9DEgqavIdxavIdKgx:tgmamaq9DEgqavIdzavId3gm:tgPaPaq9DEhPdnabTmbadTmbJbbbbJbbjZaP:vaPJbbbb9BEhqinabaqabIdbak:tNUdbabclfgvaqavIdbax:tNUdbabcwfgvaqavIdbam:tNUdbabcxfhbadcufgdmbkkaPk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbk:nCoDud99rue99lul998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:ljjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;S1jjbHjjjjbbgqBdxawceBd2aqaeadaicbz:djjjb8AawcuadcdtadcFFFFi0Egkcbyd;S1jjbHjjjjbbgxBdzawcdBd2adcd4adfhmceheinaegicetheaiam6mbkcbhPawcuaicdtgsaicFFFFi0Ecbyd;S1jjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohexekcjjjj94hekaicufhAc:bwhmcbhCadhXcbhQinaChLaeamgKcufaeaK9iEaPgDcefaeaD9kEhYdndnadTmbaYcuf:YhOaqhiaxheadhmindndnaiIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:ljjjbh3cbh5cbh8Eindna3axa8EcdtfydbgCcm4aC7c:v;t;h;Ev2gics4ai7aAGgmcdtfgEydbgecuSmbaeaCSmbcehiina3amaifaAGgmcdtfgEydbgecuSmeaicefhiaeaC9hmbkkaEaCBdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:ljjjb8Acbh5kaDaYa5ar0giEhPaLa5aiEhCdna5arSmbaYaKaiEgmaP9Rcd9imbdndnaQcl0mbdnaX:ZgOaL:Zg8A:taY:Yg8FaD:Y:tgaa8FaK:Y:tgha5:ZggaH:tNNNaOaH:tahNa8Aag:tNa8AaH:taaNagaO:tNM:va8FMJbbbZMgO:lJbbb9p9DTmbaO:Ohexdkcjjjj94hexekaPamfcd9Theka5aXaiEhXaQcefgQcs9hmekkdndnaCmbcihicbhDxekcbhiawakcbyd;S1jjbHjjjjbbg8EBdKawclBd2aPcuf:Yh8AdndnadTmbaqhiaxheadhmindndnaiIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:ljjjbh3cbhDcbh5inaxa5cdtgYfydbgCcm4aC7c:v;t;h;Ev2gics4ai7hecbhidndnina3aeaAGgmcdtfgEydbgecuSmednaxaecdtgEfydbaCSmbaicefgiamfheaiaA9nmekka8EaEfydbhixekaEa5BdbaDhiaDcefhDka8EaYfaiBdba5cefg5ad9hmbkcuaDc32giaDc;j:KM;jb0EhexekazcFeasz:ljjjb8AcbhDcbhekawaecbyd;S1jjbHjjjjbbgeBd3awcvBd2aecbaiz:ljjjbhEavcd4hxdnadTmbdnalTmbaxcdth3a8EhCalheaqhmadhAinaEaCydbc32fgiamIdbaiIdbMUdbaiamclfIdbaiIdlMUdlaiamcwfIdbaiIdwMUdwaiaeIdbaiIdxMUdxaiaeclfIdbaiIdzMUdzaiaecwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaCclfhCaea3fheamcxfhmaAcufgAmbxdkka8EhmaqheadhCinaEamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKamclfhmaecxfheaCcufgCmbkkdnaDTmbaEhiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgmaOamIdbNUdbaicwfgmaOamIdbNUdbaicxfgmaOamIdbNUdbaiczfgmaOamIdbNUdbaicCfgmaOamIdbNUdbaic3fhiaecufgembkkcbhCawcuaDcdtgYaDcFFFFi0Egicbyd;S1jjbHjjjjbbgeBdaawcoBd2awaicbyd;S1jjbHjjjjbbg3Bd8KaecFeaYz:ljjjbh5dnadTmbJbbjZJbbjZa8A:vaPceSEaoNgOaONh8Aaxcdthxalheina8Aaec;C1jjbalEgmIdwaEa8EydbgAc32fgiIdC:tgOaONamIdbaiIdx:tgOaONamIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgmydbcuSmba3aifIdbaO9ETmekamaCBdba3aifaOUdbka8Eclfh8EaeaxfheaqcxfhqadaCcefgC9hmbkkaba5aYz:kjjjb8AcrhikaicdthiinaiTmeaic98fgiawcxffydbcbyd;O1jjbH:bjjjbbxbkkawc;Wbf8KjjjjbaDk:Odieui99iu8Jjjjjbca9RgicFFF;7rBd3ai9cFFF;7;3FF:;Fb83dCaicFFF97Bdzai9cFFF;7FFF:;u83dwdndnaembJbbjFhlJbbjFhvJbbjFhoxekadcd4cdthrcbhwincbhdinaicCfadfgDabadfIdbglaDIdbgvaval9EEUdbaicwfadfgDalaDIdbgvaval9DEUdbadclfgdcx9hmbkabarfhbawcefgwae9hmbkaiIdzaiId3:thoaiIdxaiIdK:thvaiIdwaiIdC:thlkJbbbbalalJbbbb9DEglavaval9DEglaoaoal9DEk9DeeuabcFeaicdtz:ljjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk9teiucbcbyd;W1jjbgeabcifc98GfgbBd;W1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;W1jjbgeabcrfc94GfgbBd;W1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;W1jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;W1jjbfgdBd;W1jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk:bedbcjwk9Oeeebeebebbeeebebbbbbebebbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeebebbebbebebbbeebbbbbbbbbbbbbbbbbbbbbc;OwkxebbbdbbbjNbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(i(a),{}).then(function(p){t=p.instance,t.exports.__wasm_call_ctors()});function i(p){for(var g=new Uint8Array(p.length),u=0;u<p.length;++u){var h=p.charCodeAt(u);g[u]=h>96?h-97:h>64?h-39:h+4}for(var x=0,u=0;u<p.length;++u)g[x++]=g[u]<60?e[g[u]]:(g[u]-60)*64+g[++u];return g.buffer.slice(0,x)}function s(p){if(!p)throw new Error("Assertion failed")}function r(p){return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}function o(p,g,u){var h=t.exports.sbrk,x=h(g.length*4),v=h(u*4),_=new Uint8Array(t.exports.memory.buffer),w=r(g);_.set(w,x);var R=p(v,x,g.length,u);_=new Uint8Array(t.exports.memory.buffer);var T=new Uint32Array(u);new Uint8Array(T.buffer).set(_.subarray(v,v+u*4)),w.set(_.subarray(x,x+g.length*4)),h(x-h(0));for(var I=0;I<g.length;++I)g[I]=T[g[I]];return[T,R]}function c(p){for(var g=0,u=0;u<p.length;++u){var h=p[u];g=g<h?h:g}return g}function l(p,g,u,h,x,v,_,w,R){var T=t.exports.sbrk,I=T(4),E=T(u*4),M=T(x*v),C=T(u*4),H=new Uint8Array(t.exports.memory.buffer);H.set(r(h),M),H.set(r(g),C);var F=p(E,C,u,M,x,v,_,w,R,I);H=new Uint8Array(t.exports.memory.buffer);var X=new Uint32Array(F);r(X).set(H.subarray(E,E+F*4));var V=new Float32Array(1);return r(V).set(H.subarray(I,I+4)),T(I-T(0)),[X,V[0]]}function d(p,g,u,h,x,v,_,w,R,T,I,E,M){var C=t.exports.sbrk,H=C(4),F=C(u*4),X=C(x*v),V=C(x*w),G=C(R.length*4),J=C(u*4),j=T?C(x):0,te=new Uint8Array(t.exports.memory.buffer);te.set(r(h),X),te.set(r(_),V),te.set(r(R),G),te.set(r(g),J),T&&te.set(r(T),j);var ce=p(F,J,u,X,x,v,V,w,G,R.length,j,I,E,M,H);te=new Uint8Array(t.exports.memory.buffer);var me=new Uint32Array(ce);r(me).set(te.subarray(F,F+ce*4));var Ce=new Float32Array(1);return r(Ce).set(te.subarray(H,H+4)),C(H-C(0)),[me,Ce[0]]}function f(p,g,u,h){var x=t.exports.sbrk,v=x(u*h),_=new Uint8Array(t.exports.memory.buffer);_.set(r(g),v);var w=p(v,u,h);return x(v-x(0)),w}function b(p,g,u,h,x,v,_,w){var R=t.exports.sbrk,T=R(w*4),I=R(u*h),E=R(u*v),M=new Uint8Array(t.exports.memory.buffer);M.set(r(g),I),x&&M.set(r(x),E);var C=p(T,I,u,h,E,v,_,w);M=new Uint8Array(t.exports.memory.buffer);var H=new Uint32Array(C);return r(H).set(M.subarray(T,T+C*4)),R(T-R(0)),H}var m={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,_InternalDebug:1<<30};return{ready:n,supported:!0,useExperimentalFeatures:!1,compactMesh:function(p){s(p instanceof Uint32Array||p instanceof Int32Array||p instanceof Uint16Array||p instanceof Int16Array),s(p.length%3==0);var g=p.BYTES_PER_ELEMENT==4?p:new Uint32Array(p);return o(t.exports.meshopt_optimizeVertexFetchRemap,g,c(p)+1)},simplify:function(p,g,u,h,x,v){s(p instanceof Uint32Array||p instanceof Int32Array||p instanceof Uint16Array||p instanceof Int16Array),s(p.length%3==0),s(g instanceof Float32Array),s(g.length%u==0),s(u>=3),s(h>=0&&h<=p.length),s(h%3==0),s(x>=0);for(var _=0,w=0;w<(v?v.length:0);++w)s(v[w]in m),s(this.useExperimentalFeatures||v[w]!="Prune"),_|=m[v[w]];var R=p.BYTES_PER_ELEMENT==4?p:new Uint32Array(p),T=l(t.exports.meshopt_simplify,R,p.length,g,g.length/u,u*4,h,x,_);return T[0]=p instanceof Uint32Array?T[0]:new p.constructor(T[0]),T},simplifyWithAttributes:function(p,g,u,h,x,v,_,w,R,T){s(this.useExperimentalFeatures),s(p instanceof Uint32Array||p instanceof Int32Array||p instanceof Uint16Array||p instanceof Int16Array),s(p.length%3==0),s(g instanceof Float32Array),s(g.length%u==0),s(u>=3),s(h instanceof Float32Array),s(h.length%x==0),s(x>=0),s(_==null||_ instanceof Uint8Array),s(_==null||_.length==g.length/u),s(w>=0&&w<=p.length),s(w%3==0),s(R>=0),s(Array.isArray(v)),s(x>=v.length),s(v.length<=32);for(var I=0;I<v.length;++I)s(v[I]>=0);for(var E=0,I=0;I<(T?T.length:0);++I)s(T[I]in m),E|=m[T[I]];var M=p.BYTES_PER_ELEMENT==4?p:new Uint32Array(p),C=d(t.exports.meshopt_simplifyWithAttributes,M,p.length,g,g.length/u,u*4,h,x*4,new Float32Array(v),_?new Uint8Array(_):null,w,R,E);return C[0]=p instanceof Uint32Array?C[0]:new p.constructor(C[0]),C},getScale:function(p,g){return s(p instanceof Float32Array),s(p.length%g==0),s(g>=3),f(t.exports.meshopt_simplifyScale,p,p.length/g,g*4)},simplifyPoints:function(p,g,u,h,x,v){return s(this.useExperimentalFeatures),s(p instanceof Float32Array),s(p.length%g==0),s(g>=3),s(u>=0&&u<=p.length/g),h?(s(h instanceof Float32Array),s(h.length%x==0),s(x>=3),s(p.length/g==h.length/x),b(t.exports.meshopt_simplifyPoints,p,p.length/g,g*4,h,x*4,v,u)):b(t.exports.meshopt_simplifyPoints,p,p.length/g,g*4,void 0,0,0,u)}}})();(function(){var a="b9H79Tebbbefx9Geueu9Geub9Gbb9Giuuueu9Gkuuuuuuuuuu99eu9Gvuuuuueu9Gkuuuuuuuuu9999eu9Gruuuuuuub9Gkuuuuuuuuuuueu9Gouuuuuub9Giuuub9GluuuubiOHdilvorwDqrkbiibeilve9Weiiviebeoweuec:q:Odkr:Yewo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeX9TW79O9V9Wt9F9I919P29K9nW79O2Wt7bd39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7br39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bDL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2Wtbql79IV9RbkDwebcekdsPq;L9kHdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:oAlPue99eux998Jjjjjbc:We9Rgk8Kjjjjbakc;mbfcbc;Kbz:njjjb8AakcuaocdtgxaocFFFFi0Egmcbyd:e1jjbHjjjjbbgPBd9makceBd:SeakaPBdnakamcbyd:e1jjbHjjjjbbgsBd9qakcdBd:SeakasBd9eakcualcdtalcFFFFi0Ecbyd:e1jjbHjjjjbbgzBd9uakazBd9iakciBd:SeaPcbaxz:njjjbhHalci9UhOdnalTmbaihPalhAinaHaPydbcdtfgCaCydbcefBdbaPclfhPaAcufgAmbkkdnaoTmbcbhPashAaHhCaohXinaAaPBdbaAclfhAaCydbaPfhPaCclfhCaXcufgXmbkkdnalci6mbcbhPaihAinaAcwfydbhCaAclfydbhXasaAydbcdtfgQaQydbgQcefBdbazaQcdtfaPBdbasaXcdtfgXaXydbgXcefBdbazaXcdtfaPBdbasaCcdtfgCaCydbgCcefBdbazaCcdtfaPBdbaAcxfhAaOaPcefgP9hmbkkdnaoTmbaHhAashPaohCinaPaPydbaAydb9RBdbaAclfhAaPclfhPaCcufgCmbkkakamcbyd:e1jjbHjjjjbbgPBd9yakclBd:SeaPaHaxz:mjjjbhmakaOcbyd:e1jjbHjjjjbbgPBd9CakcvBd:SeaPcbaOz:njjjbhLakcuaOcK2alcjjjjd0Ecbyd:e1jjbHjjjjbbgKBd9GakcoBd:SeJbbbbhYdnalci6g8Ambarcd4hxaihAaKhPaOhrJbbbbhEinavaAclfydbax2cdtfgCIdlh3avaAydbax2cdtfgXIdlhYavaAcwfydbax2cdtfgQIdlh5aCIdwh8EaXIdwh8FaQIdwhaaPaCIdbghaXIdbggMaQIdbg8JMJbbnn:vUdbaPclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8KaCIdwh8LaXIdwh8MaPcxfa3aY:tg3aaa8F:tgaNa5aY:tg5a8Ea8F:tg8EN:tgYJbbbbJbbjZahag:tgha5Na8Jag:tgga3N:tg8Fa8FNaYaYNa8EagNaaahN:tgYaYNMM:rgg:vagJbbbb9BEg3NUdbaPczfaYa3NUdbaPcCfa8Fa3NUdbaPcwfa8Ka8Ma8LMMJbbnn:vUdbaEagMhEaAcxfhAaPcKfhParcufgrmbkaEaO:Z:vJbbbZNhYkakcuaOcdtalcFFFF970Ecbyd:e1jjbHjjjjbbgCBd9KakcrBd:SeaYaD:ZN:rhYdna8AmbcbhPaChAinaAaPBdbaAclfhAaOaPcefgP9hmbkkaYJbbbZNh8MakcuaOcltalcFFFFd0Ecbyd:e1jjbHjjjjbbg8ABd9OakcwBd:Secba8AaKaCaOz:djjjb8Aakaocbyd:e1jjbHjjjjbbgPBd2aPcFeaoz:njjjbhrakc8Wfcwf9cb83ibak9cb83i8WcbhPJbbbbhEJbbbbh5Jbbbbh8EJbbbbhYJbbbbh8FJbbbbhgcbhlinJbbbbh3dnaPTmbJbbjZaP:Z:vh3kaka8Ea3NgaUdaaka5a3NghUd3akaEa3Ng8JUdKJbbbbh3dnagagNaYaYNa8Fa8FNMMg8KJbbbb9BmbJbbjZa8K:r:vh3kakaga3NUd8Saka8Fa3NUdyakaYa3NUd8Kdndndnakyd8WgQakydUgAakcKfaeaiakc;abfaKamara8Maqz:ejjjbgCcuSmbdnaPaD9pmbaAaraiaCcx2fgXydbfRbbcFeSfaraXclfydbfRbbcFeSfaraXcwfydbfRbbcFeSfaw9nmdkaQaAcbaeaiakc;abfaKamara8MJbbbbz:ejjjbgCcu9hmekakaaUdCakahUdzaka8JUdxakcuBdwakcFFF;7rBdla8AcbaKaLakcxfakcwfakclfz:fjjjbakydwgCcuSmekdnakc8WfaiaCcx2fgOydbgPaOclfydbgAaOcwfydbgXarabaeadalawaDz:gjjjbTmbalcefhlJbbbbhEJbbbbh5Jbbbbh8EJbbbbhYJbbbbh8FJbbbbhgkamaPcdtfgPaPydbcufBdbamaAcdtfgPaPydbcufBdbamaXcdtfgPaPydbcufBdbcbhXinazasaOaXcdtfydbcdtgAfydbcdtfgxhPaHaAfgvydbgQhAdnaQTmbdninaPydbaCSmeaPclfhPaAcufgATmdxbkkaPaxaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbkaKaCcK2fgPIdbh3aPIdlhaaPIdwhhaPIdxh8JaPIdzh8KaPIdCh8LaLaCfce86bbaga8LMhga8Fa8KMh8FaYa8JMhYa8EahMh8Ea5aaMh5aEa3MhEakyd88hPxekkdnaPTmbdnakyd80gAaPci2fgCciGTmbadaCfcbaPaAcu7fciGcefz:njjjb8AkabalcltfgPak8Pi8W83dbaPcwfakc8Wfcwf8Pib83dbalcefhlkcahPdninaPc98Smeakc;mbfaPfydbcbydj1jjbH:bjjjbbaPc98fhPxbkkakc:Wef8Kjjjjbalk;3vivuv99lu8Jjjjjbca9Rgv8Kjjjjbdndnalcw0mbaiydbhoaeabcitfgralcdtcufBdlaraoBdbdnalcd6mbaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkkalabfhrxekcbhDavczfcwfcbBdbav9cb83izavcwfcbBdbav9cb83ibJbbjZhqJbbjZhkinadaiaDcdtfydbcK2fhwcbhrinavczfarfgoawarfIdbgxaoIdbgm:tgPakNamMgmUdbavarfgoaPaxam:tNaoIdbMUdbarclfgrcx9hmbkJbbjZaqJbbjZMgq:vhkaDcefgDal9hmbkcbhoadcbcecdavIdlgxavIdwgm9GEgravIdbgPam9GEaraPax9GEgscdtgrfhzavczfarfIdbhxaihralhwinaiaocdtfgDydbhHaDarydbgOBdbaraHBdbarclfhraoazaOcK2fIdbax9Dfhoawcufgwmbkaeabcitfhrdndnaocv6mbaoalc98f6mekaraiydbBdbaralcdtcufBdlaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkalabfhrxekaraxUdbaeabcitfgrarydlc98GasVBdlabcefaeadaiaoz:djjjbhwararydlciGawabcu7fcdtVBdlawaeadaiaocdtfalao9Rz:djjjbhrkavcaf8Kjjjjbark;Bloeue99vue99Due99dndnaembcuhkxekJbbjZaq:thxaiabcdtfhmavydbhPavydlhsavydwhzcbhHJFFuuhOcvhbcuhkindnaPamaHcdtfydbcdtgvfydbgATmbazasavfydbcdtfhiindndnawalaiydbgCcx2fgvclfydbgXfRbbcFeSawavydbgQfRbbcFeSfawavcwfydbgLfRbbcFeSfgKmbcbhvxekcehvaraQcdtfydbgYceSmbcehvaraXcdtfydbg8AceSmbcehvaraLcdtfydbgEceSmbdna8AcdSaYcdSfaEcdSfcd6mbaKcefhvxekaKcdfhvkdnavab9kmbdndnadTmbaoaCcK2fgQIdwadIdw:tg3a3NaQIdbadIdb:tg3a3NaQIdladIdl:tg3a3NMM:raD:vaxNJbbjZMJ9VO:d86JbbjZaQIdCadIdCNaQIdxadIdxNaQIdzadIdzNMMaqN:tg3a3J9VO:d869DENh3xekaraQcdtfydbaraXcdtfydbfaraLcdtfydbfc99f:Zh3kaCakavab6a3aO9DVgQEhkavabaQEhba3aOaQEhOkaiclfhiaAcufgAmbkkaHcefgHae9hmbkkakk;bddlue99dndndnabaecitfgrydlgwciGgDci9hmbarclfhqxekinabcbawcd4gwalaDcdtfIdbabaecitfIdb:tgkJbbbb9FEgDaecefgefadaialavaoz:fjjjbak:laoIdb9FTmdabaDaw7aefgecitfgrydlgwciGgDci9hmbkarclfhqkabaecitfhecuhbindnaiaeydbgDfRbbmbadaDcK2fgrIdwalIdw:tgkakNarIdbalIdb:tgkakNarIdlalIdl:tgkakNMM:rgkaoIdb9DTmbaoakUdbavaDBdbaqydbhwkaecwfheabcefgbawcd46mbkkk;yleoudnaladfgkRbbcFeSalaefgxRbbgmcFeSfabydwgPfalaifgsRbbcFeSfaD0abydxaq9pVgzce9hmbavawcltfgmab8Pdb83dbamcwfabcwfgm8Pdb83dbdndnamydbmbcbhqxekcbhDaohminalamabydbcdtfydbfcFe86bbamclfhmaDcefgDabydwgq6mbkkdnabydxglci2gDabydlgmfgPciGTmbaraPfcbalamcu7fciGcefz:njjjb8Aabydxci2hDabydlhmabydwhqkab9cb83dwababydbaqfBdbabaDcifc98GamfBdlaxRbbhmcbhPkdnamcFeGcFe9hmbaxaP86bbababydwgmcefBdwaoabydbcdtfamcdtfaeBdbkdnakRbbcFe9hmbakabydw86bbababydwgmcefBdwaoabydbcdtfamcdtfadBdbkdnasRbbcFe9hmbasabydw86bbababydwgmcefBdwaoabydbcdtfamcdtfaiBdbkarabydlfabydxci2faxRbb86bbarabydlfabydxci2fcefakRbb86bbarabydlfabydxci2fcdfasRbb86bbababydxcefBdxazk;Ckovud99euv99eul998Jjjjjbc:G;ae9Rgo8KjjjjbdndnadTmbavcd4hrcbhwcbhDindnaiaeclfydbar2cdtfgvIdbaiaeydbar2cdtfgqIdbgk:tgxaiaecwfydbar2cdtfgmIdlaqIdlgP:tgsNamIdbak:tgzavIdlaP:tgPN:tgkakNaPamIdwaqIdwgH:tgONasavIdwaH:tgHN:tgPaPNaHazNaOaxN:tgxaxNMM:rgsJbbbb9Bmbaoc:G:qefawcx2fgAakas:vUdwaAaxas:vUdlaAaPas:vUdbaocafawc8K2fgAaq8Pdb83dbaAav8Pdb83dxaAam8Pdb83dKaAcwfaqcwfydbBdbaAcCfavcwfydbBdbaAcafamcwfydbBdbawcefhwkaecxfheaDcifgDad6mbkab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbawTmeao9cb83iKao9cb83izaoczfaocafawci2z1jjjbaoIdKhCaoIdChXaoIdzhQao9cb83iwao9cb83ibaoaoc:G:qefawz1jjjbJbbjZhkaoIdwgPJbbbbJbbjZaPaPNaoIdbgPaPNaoIdlgsasNMM:rgx:vaxJbbbb9BEgzNhxasazNhsaPazNhzaoc:G:qefheawhvinaecwfIdbaxNaeIdbazNasaeclfIdbNMMgPakaPak9DEhkaecxfheavcufgvmbkabaCUdwabaXUdlabaQUdbabaoId3UdxdndnakJ;n;m;m899FmbJbbbbhPaoc:G:qefheaocafhvinaCavcwfIdb:taecwfIdbgHNaQavIdb:taeIdbgONaXavclfIdb:taeclfIdbgLNMMaxaHNazaONasaLNMM:vgHaPaHaP9EEhPavc8KfhvaecxfheawcufgwmbkabazUd3abc8KfaxUdbabcafasUdbabcKfaCaxaPN:tUdbabcCfaXasaPN:tUdbabaQazaPN:tUdzabJbbjZakakN:t:rgkUdydndnaxJbbj:;axJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;axJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohexekcjjjj94hekabc8Ufae86bbdndnasJbbj:;asJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;asJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabcRfav86bbdndnazJbbj:;azJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;azJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohqxekcjjjj94hqkabaq86b8SdndnaecKtcK91:YJbb;:9c:vax:t:lavcKtcK91:YJbb;:9c:vas:t:laqcKtcK91:YJbb;:9c:vaz:t:lakMMMJbb;:9cNJbbjZMgk:lJbbb9p9DTmbak:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbkaoc:G;aef8Kjjjjbk:mvdouq99cbhi8Jjjjjbca9RglczfcwfcbBdbal9cb83izalcwfcbBdbal9cb83ibdnadTmbcbhvinaeaifhocbhrinalczfarfgwavawydbgwaoarfIdbgDaearawcx2ffIdb9DEBdbalarfgwavawydbgwaDaearawcx2ffIdb9EEBdbarclfgrcx9hmbkaicxfhiavcefgvad9hmbkkJbbbbhDcbhrcbhicbhvinaealarfydbcx2fgwIdwaealczfarfydbcx2fgoIdw:tgqaqNawIdbaoIdb:tgqaqNawIdlaoIdl:tgqaqNMMgqaDaqaD9EgwEhDavaiawEhiarclfhravcefgvci9hmbkaealczfaicdtgvfydbcx2fgrIdwaealavfydbcx2fglIdwMJbbbZNhqarIdlalIdlMJbbbZNhkarIdbalIdbMJbbbZNhxaD:rJbbbZNhDdnadTmbindnaecwfIdbgmaq:tgPaPNaeIdbgsax:tgPaPNaeclfIdbgzak:tgPaPNMMgPaDaDN9ETmbaqaDaP:rgH:vJbbbZNJbbbZMgPNamJbbjZaP:tgONMhqakaPNazaONMhkaxaPNasaONMhxaDaHMJbbbZNhDkaecxfheadcufgdmbkkabaDUdxabaqUdwabakUdlabaxUdbkjeeiu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwdnaiTmbawceawce0EhDarhiinaiaeadRbbcdtfydbBdbadcefhdaiclfhiaDcufgDmbkkabarawaladaoz:hjjjbarcj8Wf8Kjjjjbk:Ylequ8Jjjjjbcjx9Rgl8Kjjjjbcbhvalcjqfcbaiz:njjjb8AdndnadTmbcjehoaehrincuhwarhDcuhqavhkdninawakaoalcjqfaDcefRbbfRbb9RcFeGci6aoalcjqfaDRbbfRbb9RcFeGci6faoalcjqfaDcdfRbbfRbb9RcFeGci6fgxaq9mgmEhwdnammbaxce0mdkaxaqaxaq9kEhqaDcifhDadakcefgk9hmbkkaeawci2fgDcdfRbbhqaDcefRbbhxaDRbbhkaeavci2fgDcifaDawav9Rci2z:qjjjb8Aakalcjqffaocefgo86bbaxalcjqffao86bbaDcdfaq86bbaDcefax86bbaDak86bbaqalcjqffao86bbarcifhravcefgvad9hmbkalcFeaiz:njjjbhoadci2gDceaDce0EhqcbhxindnaoaeRbbgkfgwRbbgDcFe9hmbawax86bbaocjdfaxcdtfabakcdtfydbBdbaxhDaxcefhxkaeaD86bbaecefheaqcufgqmbkaxcdthDxekcbhDkabalcjdfaDz:mjjjb8Aalcjxf8Kjjjjbk9teiucbcbyd11jjbgeabcifc98GfgbBd11jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd11jjbgeabcrfc94GfgbBd11jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd11jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd11jjbfgdBd11jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk:;Deludndndnadch9pmbabaeSmdaeabadfgi9Rcbadcet9R0mekabaead;8qbbxekaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocd4cefciGgiTmbaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglcd4cefcrGgdTmbavadcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaiaeydzBdzaiaeydCBdCaiaeydKBdKaiaeyd3Bd3aecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaiaeRbe86beaiaeRbd86bdaiaeRbi86biaiaeRbl86blaiaeRbv86bvaiaeRbo86boaiaeRbr86braicwfhiaecwfhealc94fglmbkkabkkAebcjwkxebbbdbbbzNbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(i(a),{}).then(function(p){t=p.instance,t.exports.__wasm_call_ctors()});function i(p){for(var g=new Uint8Array(p.length),u=0;u<p.length;++u){var h=p.charCodeAt(u);g[u]=h>96?h-97:h>64?h-39:h+4}for(var x=0,u=0;u<p.length;++u)g[x++]=g[u]<60?e[g[u]]:(g[u]-60)*64+g[++u];return g.buffer.slice(0,x)}function s(p){if(!p)throw new Error("Assertion failed")}function r(p){return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}var o=48,c=16;function l(p,g){var u=p.meshlets[g*4+0],h=p.meshlets[g*4+1],x=p.meshlets[g*4+2],v=p.meshlets[g*4+3];return{vertices:p.vertices.subarray(u,u+x),triangles:p.triangles.subarray(h,h+v*3)}}function d(p,g,u,h,x,v,_){var w=t.exports.sbrk,R=t.exports.meshopt_buildMeshletsBound(p.length,x,v),T=w(R*c),I=w(R*x*4),E=w(R*v*3),M=w(p.byteLength),C=w(g.byteLength),H=new Uint8Array(t.exports.memory.buffer);H.set(r(p),M),H.set(r(g),C);var F=t.exports.meshopt_buildMeshlets(T,I,E,M,p.length,C,u,h,x,v,_);H=new Uint8Array(t.exports.memory.buffer);for(var X=H.subarray(T,T+F*c),V=new Uint32Array(X.buffer,X.byteOffset,X.byteLength/4).slice(),G=0;G<F;++G){var J=V[G*4+0],j=V[G*4+1],u=V[G*4+2],te=V[G*4+3];t.exports.meshopt_optimizeMeshlet(I+J*4,E+j,te,u)}var ce=V[(F-1)*4+0],me=V[(F-1)*4+1],Ce=V[(F-1)*4+2],Je=V[(F-1)*4+3],W=ce+Ce,ee=me+(Je*3+3&-4),be={meshlets:V,vertices:new Uint32Array(H.buffer,I,W).slice(),triangles:new Uint8Array(H.buffer,E,ee*3).slice(),meshletCount:F};return w(T-w(0)),be}function f(p){var g=new Float32Array(t.exports.memory.buffer,p,o/4);return{centerX:g[0],centerY:g[1],centerZ:g[2],radius:g[3],coneApexX:g[4],coneApexY:g[5],coneApexZ:g[6],coneAxisX:g[7],coneAxisY:g[8],coneAxisZ:g[9],coneCutoff:g[10]}}function b(p,g,u,h){var x=t.exports.sbrk,v=[],_=x(g.byteLength),w=x(p.vertices.byteLength),R=x(p.triangles.byteLength),T=x(o),I=new Uint8Array(t.exports.memory.buffer);I.set(r(g),_),I.set(r(p.vertices),w),I.set(r(p.triangles),R);for(var E=0;E<p.meshletCount;++E){var M=p.meshlets[E*4+0],C=p.meshlets[E*4+0+1],H=p.meshlets[E*4+0+3];t.exports.meshopt_computeMeshletBounds(T,w+M*4,R+C,H,_,u,h),v.push(f(T))}return x(_-x(0)),v}function m(p,g,u,h){var x=t.exports.sbrk,v=x(o),_=x(p.byteLength),w=x(g.byteLength),R=new Uint8Array(t.exports.memory.buffer);R.set(r(p),_),R.set(r(g),w),t.exports.meshopt_computeClusterBounds(v,_,p.length,w,u,h);var T=f(v);return x(v-x(0)),T}return{ready:n,supported:!0,buildMeshlets:function(p,g,u,h,x,v){s(p.length%3==0),s(g instanceof Float32Array),s(g.length%u==0),s(u>=3),s(h<=255||h>0),s(x<=512),s(x%4==0),v=v||0;var _=p.BYTES_PER_ELEMENT==4?p:new Uint32Array(p);return d(_,g,g.length/u,u*4,h,x,v)},computeClusterBounds:function(p,g,u){s(p.length%3==0),s(p.length/3<=512),s(g instanceof Float32Array),s(g.length%u==0),s(u>=3);var h=p.BYTES_PER_ELEMENT==4?p:new Uint32Array(p);return m(h,g,g.length/u,u*4)},computeMeshletBounds:function(p,g,u){return s(p.meshletCount!=0),s(g instanceof Float32Array),s(g.length%u==0),s(u>=3),b(p,g,g.length/u,u*4)},extractMeshlet:function(p,g){return s(g>=0&&g<p.meshletCount),l(p,g)}}})();const Nl=new mg;Nl.setMeshoptDecoder(Zg);function Fl(a){return new Promise((e,t)=>{Nl.parse(a,"",n=>e(n.scene),n=>t(n))})}const ls="/api";function Qg(a,e){return new Promise((t,n)=>{const i=new FormData;for(const r of a)i.append("mesh",r);const s=new XMLHttpRequest;s.open("POST",`${ls}/upload`),s.upload.onprogress=r=>{r.lengthComputable&&e&&e(r.loaded/r.total)},s.onload=()=>{let r;try{r=JSON.parse(s.responseText)}catch{return n(new Error(`Sunucu hatası (${s.status})`))}s.status>=200&&s.status<300?t(r):n(new Error(r.error||`Yükleme başarısız (${s.status})`))},s.onerror=()=>n(new Error("Ağ hatası")),s.send(i)})}async function $g(a,e){const t=await fetch(`${ls}/simplify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jobId:a,ratio:e})}),n=await t.json();if(!t.ok)throw new Error(n.error||"Basitleştirme başarısız");return n}async function Ol(a,e){const t=await fetch(`${ls}/result/${a}?kind=${e}`);if(!t.ok)throw new Error("Önizleme alınamadı");return t.arrayBuffer()}function Bl(a,e,t){return`${ls}/download/${a}?format=${e}&ratio=${t}`}const Hl=[".glb",".gltf",".obj",".stl",".ply"],jl=[...Hl,".png",".jpg",".jpeg",".mtl",".zip"],co=a=>{const e=a.lastIndexOf(".");return e<0?"":a.slice(e).toLowerCase()},e_=a=>Hl.includes(co(a)),t_=a=>co(a)===".zip",n_=a=>jl.includes(co(a));function i_({dropzone:a,fileInput:e,pickBtn:t},n){const i=r=>{const o=Array.from(r||[]).filter(c=>n_(c.name));if(o.length===0){alert(`Desteklenen formatlar: ${jl.join(", ")}`);return}if(!o.some(c=>e_(c.name)||t_(c.name))){alert("Bir mesh dosyası (.glb/.gltf/.obj/.stl/.ply) veya .zip seçmelisin.");return}n(o)};t.addEventListener("click",()=>e.click()),e.addEventListener("change",()=>{i(e.files),e.value=""});const s=a.parentElement;["dragenter","dragover"].forEach(r=>s.addEventListener(r,o=>{o.preventDefault(),a.classList.add("dragover")})),["dragleave","drop"].forEach(r=>s.addEventListener(r,o=>{o.preventDefault(),!(r==="dragleave"&&s.contains(o.relatedTarget))&&a.classList.remove("dragover")})),s.addEventListener("drop",r=>i(r.dataTransfer?.files))}function Hr(a,e){a.classList.toggle("hidden",!e)}const On=new Intl.NumberFormat("tr-TR");function a_(){const a=e=>document.getElementById(e);return{ratio:a("ratio"),ratioValue:a("ratio-value"),origTris:a("orig-tris"),newTris:a("new-tris"),origVerts:a("orig-verts"),newVerts:a("new-verts"),reduction:a("reduction"),achievedNote:a("achieved-note"),dlGlb:a("dl-glb"),dlObj:a("dl-obj"),resetBtn:a("reset-btn"),badge:a("viewport-badge"),filename:a("filename"),loading:a("loading"),loadingText:a("loading-text")}}function fa(a,e){a.ratio.disabled=!e,a.dlGlb.disabled=!e,a.dlObj.disabled=!e,a.resetBtn.disabled=!e}function Ei(a,e,t="İşleniyor…"){a.loadingText.textContent=t,a.loading.classList.toggle("hidden",!e)}function zl(a,e){a.ratioValue.textContent=`${e}%`}function s_(a,e){a.origTris.textContent=On.format(e.triangles),a.origVerts.textContent=On.format(e.vertices),a.newTris.textContent=On.format(e.triangles),a.newVerts.textContent=On.format(e.vertices),a.reduction.textContent="0%",a.achievedNote.hidden=!0,Gl(a,e.triangles,e.vertices)}function r_(a,e,t,n,i){a.newTris.textContent=On.format(e.triangles),a.newVerts.textContent=On.format(e.vertices),a.reduction.textContent=`${(t*100).toFixed(1)}%`,Gl(a,e.triangles,e.vertices);const s=[];i&&s.push("Viewport önizlemesi gerçek sonuçtan daha düşük çözünürlükte gösteriliyor (indirme tam çözünürlüktür)."),a.achievedNote.textContent=s.join(" "),a.achievedNote.hidden=s.length===0}function Gl(a,e,t){a.badge.hidden=!1,a.badge.innerHTML=`<strong>${On.format(e)}</strong> üçgen · <strong>${On.format(t)}</strong> vertex`}const o_=document.getElementById("canvas"),as=document.getElementById("dropzone"),lo=new bg(o_),at=a_(),pt={jobId:null,original:null,ratioPct:100};i_({dropzone:as,fileInput:document.getElementById("file-input"),pickBtn:document.getElementById("pick-btn")},c_);async function c_(a){jr(),Hr(as,!1);const e=a.find(t=>/\.(glb|gltf|obj|stl|ply|zip)$/i.test(t.name));at.filename.textContent=e?e.name:`${a.length} dosya`,Ei(at,!0,"Yükleniyor… 0%");try{const t=await Qg(a,s=>{Ei(at,!0,`Yükleniyor… ${Math.round(s*100)}%`)});Ei(at,!0,"Mesh ayrıştırılıyor…"),pt.jobId=t.jobId,pt.original=t.original,at.filename.textContent=t.textured?`${t.name}  ·  dokulu`:t.name;const n=await Ol(pt.jobId,"preview"),i=await Fl(n);lo.setModel(i),s_(at,t.original),at.ratio.value=100,pt.ratioPct=100,zl(at,100),fa(at,!0)}catch(t){console.error(t),alert(`Hata: ${t.message}`),jr(),Hr(as,!0)}finally{Ei(at,!1)}}at.ratio.addEventListener("input",()=>{pt.ratioPct=Number(at.ratio.value),zl(at,pt.ratioPct)});at.ratio.addEventListener("change",()=>l_());async function l_(){if(!pt.jobId)return;const a=pt.ratioPct/100;Ei(at,!0,"Basitleştiriliyor (QEM)…"),fa(at,!1);try{const e=await $g(pt.jobId,a),t=await Ol(pt.jobId,"view"),n=await Fl(t);lo.setModel(n),r_(at,e.achieved,e.reduction,pt.ratioPct,e.clamped)}catch(e){console.error(e),alert(`Hata: ${e.message}`)}finally{fa(at,!0),Ei(at,!1)}}at.dlGlb.addEventListener("click",()=>{pt.jobId&&(window.location=Bl(pt.jobId,"glb",pt.ratioPct/100))});at.dlObj.addEventListener("click",()=>{pt.jobId&&(window.location=Bl(pt.jobId,"obj",pt.ratioPct/100))});at.resetBtn.addEventListener("click",()=>{lo.clear(),jr(),Hr(as,!0),at.filename.textContent="Dosya yüklenmedi",at.badge.hidden=!0});function jr(){pt.jobId=null,pt.original=null,pt.ratioPct=100,fa(at,!1)}fa(at,!1);
