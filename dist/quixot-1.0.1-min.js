var n=!0,s=null,w=!1;"undefined"===typeof console&&(console={},"undefined"===typeof console.log&&(console.log="undefined"!==typeof java_lang_System_out?function(q){java_lang_System_out.println(""+q)}:function(){}));"undefined"===typeof Array.isArray&&(Array.isArray=function(q){return"[object Array]"===Object.prototype.toString.call(q)});"undefined"===typeof setTimeout&&(setTimeout=function(){console.log("setTimeout is not a function")});
if("undefined"===typeof JSON){var xa=Object.prototype.toString,db=Array.isArray||function(q){return"[object Array]"===xa.call(q)},eb={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},fb=function(q){return eb[q]||"\\u"+(q.charCodeAt(0)+65536).toString(16).substr(1)},gb=/[\\"\u0000-\u001F\u2028\u2029]/g;JSON={parse:function(q){return eval("("+q+")")},stringify:function T(j){if(j==s)return"null";if("number"===typeof j)return isFinite(j)?j.toString():"null";if("boolean"===
typeof j)return j.toString();if("object"===typeof j){if("function"===typeof j.toJSON)return T(j.toJSON());if(db(j)){for(var k="[",p=0;p<j.length;p++)k+=(p?", ":"")+T(j[p]);return k+"]"}if("[object Object]"===xa.call(j)){k=[];for(p in j)j.hasOwnProperty(p)&&k.push(T(p)+": "+T(j[p]));return"{"+k.join(", ")+"}"}}return'"'+j.toString().replace(gb,fb)+'"'}}}
Array.prototype.indexOf||(Array.prototype.indexOf=function(q,j){var k;if(this==s)throw new TypeError('"this" is null or not defined');var p=Object(this),A=p.length>>>0;if(0===A)return-1;k=j|0;if(k>=A)return-1;for(k=Math.max(0<=k?k:A-Math.abs(k),0);k<A;){if(k in p&&p[k]===q)return k;k++}return-1});
var quixot=function(){function q(a,b,c){0===a&&(a=0.001);var d=[];b=(b-a)/c;for(var h=0;h<c+1;h++)d.push(a.toFixed(4)),a+=b;return d}function j(a,b,c){function d(){if(t<=h.length){t++;for(var a=0;a<g.length;a++)g[a](h[t]);ya(function(){d()})}else for(a=0;a<e.length;a++)e[a]();return this}var h=q(a,b,c),t=-1,g=[],e=[];return{start:d,onUpdate:function(a){g.push(a);return this},onComplete:function(a){e.push(a);return this}}}function k(){var a="",b=f,c;for(c in b)a+=c+b[c];return a}function p(){return"undefined"!==
typeof module&&module.exports}function A(){return"undefined"!=typeof window}function U(a){if(!a)return[];var b=[],c;for(c in a)b.push(c);return b}function za(a){var b={},c;for(c in a)V(a[c])&&(b[c]=a[c]+"");return b}function M(a,b,c,d,h,e,g,f,j,ia,k,l,o,p){b||(b=3);if(0===a)return c;if(typeof a===ja)return""+a;if(!a)return h;if(a===n)return d;if(V(a))return g+a+g;if(Aa(a))return e;if(Ba(a)){for(var i=ia,m=0;m<a.length;m++)i+=M(a[m],b,c,d,h,e,g,f,j,ia,k,l,o,p),q<a.length-1&&(i+=f);return i+k}if(2>
b)return p;var m=U(a),i=l,r=0,q;for(q in a){r++;var u=M(a[q],b-1,c,d,h,e,g,f,j,ia,k,l,o,p),i=i+(q+j+u);r<m.length-1&&(i+=f)}return i+=o}function B(a,b){return M(a,b,"","","","","","","","","","","","")}function Ca(a,b){return M(a,b,0,"true","false",'"[funct]"','"',",",":","[","]","{","}","[stack]")}function V(a){return typeof a===Da||typeof a===ja||typeof a===Ea}function Aa(a){return typeof a===Fa}function Ba(a){return Array.isArray(a)}function l(a,b,c){c||(c=0);b||(b="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
V(b)&&(b=b.split(""));var d,h=a+""+b.join("")+c+"";if(z[h])return z[h];if(1===b.length)return d=Array(a.length).join(b[0]),z[h]=d;if(0===a)return b[0];if(("0"==a+""||0<a.length)&&"0"==(a+"").split("")[0])return c>b.length-1&&(c=0),(a=a.substring(1,a.length))?(d=b[c]+l(a,b,c+1),z[h]=d):b[c];if(!+a||a instanceof Date)return a+="",d=a.split("")[0],a=a.substring(1,a.length),+d&&(d=l(d,b,c)),a&&(a=l(a,b,c),d+=a),z[h]=d;d=parseFloat(a);if(d<b.length)return 0==d%1?d=b[parseInt(d)]:(a=d%1,1>a&&(a*=10),d=
l(Math.floor(d),b,c)+l(a,b,c)),z[h]=d;if(0==d%1){if(10>d)return d=l(1,b,c)+l(d-1,b,c),z[h]=d;d=l(Math.floor(d/10),b,c)+l(d%10,b,c);return z[h]=d}a=d%1;1>a&&(a*=10);d=l(Math.floor(d),b,c)+l(a,b,c);return z[h]=d}function W(a){a=parseInt(a).toString(16);return 1===a.length?"0"+a:a}function Ga(a){X[a]=X[a]?X[a]+1:1;for(var b=arguments,c=[],d=1;d<b.length;d++)c.push(b[d]);if(i[a]){for(b=0;b<i[a].length;b++)try{i[a][b].method.apply(s,c)}catch(h){return console.log("unable to dispatch ",a," with args ",
c,h),-1}return i[a].length}return 0}function ya(a){var b="unknown";(new Date).getTime();var c;u.requestAnimationFrame?(b="requestAnimationFrame",c=u.requestAnimationFrame(a)):u.mozRequestAnimationFrame?(b="mozRequestAnimationFrame",c=u.mozRequestAnimationFrame(a)):u.msRequestAnimationFrame?(b="msRequestAnimationFrame",c=u.msRequestAnimationFrame(a)):u.webkitRequestAnimationFrame?(b="webkitRequestAnimationFrame",c=u.webkitRequestAnimationFrame(a)):u.oRequestAnimationFrame?(b="oRequestAnimationFrame",
c=u.oRequestAnimationFrame(a)):"undefined"!=typeof setTimeout?(c=setTimeout(a,30),b="setTimeout"):(b="nothing found",a());Ga("quixot_event_appointment_done");return{type:b,id:c}}function y(a){if(p()){if(Y[a])return Y[a];C.info(a);Y[a]=require(a);return Y[a]}if("fs"===a)return{existsSync:function(){return w},mkdirSync:function(){return w},writeFileSync:function(){}};console.log("[usage in this context not implemented for requirement "+a+"]");return{}}function hb(a){if(a.indexOf&&-1<a.indexOf(","))return(a+
"").split(",");if(+a)return parseFloat(a);var b=s;try{b=JSON.parse(decodeURIComponent(a))}catch(c){b=s}finally{if(b!=s)return b}return a+""}function Ha(a){if(!a)return s;var b=w,b=0==a.indexOf("http://")?"http":0==a.indexOf("https://")?"https":a.split(":")[0],c=a.replace(b+"://","").split("/"),d={},h=c[c.length-1].split("?"),e=h[0];if(1<h.length&&(h=h[1].split("\x26"),1<=h.length))for(var g=0;g<h.length;g++){var f=h[g].split("\x3d");d[f[0]]=1<f.length?hb(f[1]):w}return{lastPage:e,parts:c,url:a,protocol:b,
params:d}}function Ia(){return"undefined"!=typeof document?Ja(document.URL):{params:{}}}function Ka(){return"undefined"!=typeof window&&window.location&&window.location.search?window.location.search:""}function Ja(a){return Ha(a).params}function La(a){a+="";return(a=-1<a.indexOf("://")?a.split("/")[2]:a.split("/")[0])?a.split(":")[0]:"localhost"}function Ma(){if("undefined"!=typeof document){if(document.domain)return document.domain;if(document.URL)return La(document.URL)}return"localhost"}function Na(){return"undefined"!=
typeof window&&window.location&&window.location.pathname?window.location.pathname:""}function Oa(a){if(a&&a.stack)return a.stack.split("\n");try{throw Error();}catch(b){if(b.stack)return b.stack.split("\n")}}function Pa(a,b){function c(c,h){var e;e=b[c]?b[c]:b;d[c]||(d[c]=[]);var t=w;h instanceof Error?t=Oa(h):b.logStack&&(t=Oa());var f;try{f=arguments.callee.caller}catch(i){f=i}t={timestamp:new Date,message:h,stack:t,caller:f};d[c].push(t);e.consoleAppender&&e.consoleFormatter(a,c,t);e.fileAppender&&
e.fileFormatter(a,c,t);return d[c]}var d={},h=ka?Ia()[ka]:s;if(h&&(h=h[a]||h.ALL))for(var e in h)b[e]=h[e];return{log:c,error:function(a){c("error",a)},warn:function(a){c("warn",a)},info:function(a){c("info",a)},trace:function(a){c("trace",a)},getLogs:function(){return d}}}function Z(a,b){var c=N;if(b)for(var d in b)c[d]=b[d];$[a]||($[a]=new Pa(a,c));return $[a]}function Qa(a){if("undefined"!=typeof document){a+="\x3d";for(var b=a.length,c=document.cookie.length,d=0;d<c;){var h=d+b;if(document.cookie.substring(d,
h)==a)return a=h,b=document.cookie.indexOf(";",a),-1==b&&(b=document.cookie.length),unescape(document.cookie.substring(a,b));d=document.cookie.indexOf(" ",d)+1;if(0===d)break}return s}}function la(a,b,c,d,h,e){if("undefined"!=typeof document)return c=c?c:s,"number"==typeof c&&(c=new Date(+new Date+c)),d=d?d:s,h=h?h:s,e=e?e:w,e=(c===s?"":"; expires\x3d"+(c.toUTCString()||c.toGMTString()||c.toString()))+(d===s?"":"; path\x3d"+d)+(h===s?"":"; domain\x3d"+h)+(e===n?"; secure":""),a=a+"\x3d"+escape(b)+
e,document.cookie=a}function ma(){var a=y("fs"),b=y("path"),c=r.homeDir+b.sep+".cache";a.existsSync(c)||a.mkdirSync(c);return c+=b.sep+"quixot.cache.json"}function aa(a){var b="qch"+(a+""),b=b.replace(/\?/g,"\u00ee").replace(/=/g,"\u0103").replace(/\//g,"\u021b").replace(/\./g,"\u20a4"),c,d;if(ba){"undefined"!=typeof localStorage&&(d=localStorage.getItem(b));d||(d=Qa(b));try{d=JSON.parse(d)}catch(h){throw Error("failed loading cache from "+d);}}else{d=b;var e;e=ma();var g=y("fs");if(g.existsSync(e))e=
g.readFileSync(e,"utf8"),e=JSON.parse(e);else{var f={creationDate:new Date,writer:"quixot"};g.writeFileSync(e,JSON.stringify(f));e=f}d=e[d]?e[d]:{}}c=d;this.put=function(a,b){a&&b&&(c||(c={}),c[a]=b);this.save()};var i=0;this.remove=function(a){if(c)if(delete c[a],ba)this.save();else{var d=b,e=ma(),h=y("fs"),g=h.readFileSync(e,"utf8"),g=JSON.parse(g);delete g[d][a];h.writeFileSync(e,JSON.stringify(g))}};this.save=function(){if(c)if(ba)clearTimeout(i),"undefined"!=typeof localStorage&&localStorage.setItem(b,
JSON.stringify(c)),la(b,JSON.stringify(c)),i=setTimeout(function(){ca(a).save()},1E4);else{var d={};d[b]=c;var e=ma(),h=y("fs"),g=h.readFileSync(e,"utf8"),g=JSON.parse(g);if(d){var f=0,t;for(t in d)g[t]=d[t],f++;0<f&&(console.log("saving"+JSON.stringify(g)),h.writeFileSync(e,JSON.stringify(g)))}}};this.getData=function(){return c};this.getSafe=function(a,b){return c&&c[a]?c[a]:b?(c||(c={}),c[a]=b):s}}function ca(a){na[a]||(na[a]=new aa(a));return na[a]}function F(){return"undefined"!=typeof window?
window:{}}function m(){return"undefined"!=typeof navigator?navigator:F().navigator||{}}function e(){return m().userAgent||" "}function Ra(a){for(var b=0;b<a.length;b++){var c=a[b].string;if(c){var d=a[b].prop;oa=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}}}function Sa(a){if(!a||!a.indexOf)return"";var b=a.indexOf(oa);if(-1!==b)return parseFloat(a.substring(b+oa.length+1))}function pa(a){if(a)for(var b in a){var c=b+
a[b];-1==qa.indexOf(c)&&(qa.push(c),pa(a[b]))}}function O(){var a=new Date;P.str++;return l(G(),o.strlist)+""+l(a.getMilliseconds(),o.strlist)+""+l(a.getMinutes(),o.strlist)+""+l(a.getHours(),o.strlist)+""+l(a.getDay(),o.strlist)+""+l(a.getDate(),o.strlist)+""+l(a.getMonth(),o.strlist)+""+l(a.getFullYear(),o.strlist)+""+l(a.getYear(),o.strlist)+""}function Ta(a,b){for(var c=[],d=Math.round(Math.random()*a)+1,e=0;e<d;e++)b&&c.push(b());return c}function Ua(){return Ta(void 0,function(){return G()})}
function ib(){var a;a||(a=o.maxListSize);return Ta(a,jb)}function Va(){switch(Math.round(3*Math.random())){case 0:return'"'+O()+'"';case 2:return ra()}return G()}function jb(){P.obj+=1;G(P.obj);for(var a={},b=0;b<P.obj;b++)a[O()]=Va();return a}function Wa(){D=parseInt(D+1);ca("@qtst").put("lup",D);return D}function G(a){return Math.round(ra(a,void 0))}function ra(a,b){return a?(+a||(a=1),b?(+b||(b=2),a+Math.random()*(b-a)):Math.random()*a):Wa()}function da(a,b){for(var c in b)a.style[c]=b[c]}function kb(a,
b){var c=80*b,d=parseFloat(a.style.top.replace("px",""));(new j(d,c,50)).onUpdate(function(b){+b&&(a.style.top=b+"px")}).start()}function ea(){for(var a=0;a<H.length;a++)kb(H[a].item,a)}function lb(a,b,c){if(!A())return w;var d=document,e=d.createElement("div"),f=d.createElement("div"),g=d.createElement("div"),i=d.createElement("div"),d=d.createElement("img"),j=sa.height+200;identifier="qntf"+I;e.id=identifier;i.id="qntfwrp"+I;f.id="qntftt"+I;g.id="qntftxt"+I;d.id="qntftxt"+I;da(e,{position:"absolute",
"z-index":"9999999999",height:"80px",padding:"4px","border-radius":"2px","box-shadow":"-2px 2px 2px ButtonShadow",top:j+"px",right:"0px",background:"Menu",overflow:"hidden"});da(f,{"font-family":"sans-serif","font-size":"14px","text-align":"right",display:"block",height:"18px"});j=["right","left"];"Windows"===Q&&(j=["left","rigth"]);f.innerHTML='\x3cdiv style\x3d"display: inline; float: '+j[0]+'"\x3e'+a+'\x3c/div\x3e\x3cdiv style\x3d"font-weight: bold; display: inline; float: '+j[1]+'; font-size: 12px; font-family: monospace; color: ButtonText; cursor: hand; cursor: pointer" onclick\x3d"'+
ta+"('"+e.id+"')\"\x3ex\x3c/div\x3e";e.appendChild(f);a="99%";b&&(g.innerHTML=b,i.appendChild(g));c&&(d.src=c,i.appendChild(d));b&&c&&(a="49%");b={display:"inline",width:a,"font-size":"12px","float":"left"};da(g,b);b["float"]="right";da(d,b);e.appendChild(i);document.body.appendChild(e);H.push({id:identifier,item:e});ea();I++;e.remove=eval("(function rnmd"+identifier+'(){ console.log("removing"); return function() { '+('window["'+ta+"\"]('"+identifier+"')")+" }; } )()");return e}for(var Da="string",
ja="number",Ea="boolean",Fa="function",mb="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f={_nsp:[0],_errs:[0],registeredMethods:"",computerName:function(){var a="[unk]";try{a=(new ActiveXObject("WScript.Network")).computerName}catch(b){a="[erunk]"}return a}(),dataTypes:Da+":"+ja+":object:"+Ea+":"+Fa,pi:Math.PI,ln2:Math.LN2,ln10:Math.LN10,log2e:Math.LOG2E,log10e:Math.LOG10E,sqrt1_2:Math.SQRT1_2,sqrt:Math.SQRT2,_timeZoneAbbr:function(){var a=new Date+"",b=a.split("(");if(0<b.length){try{a=
b[1].split(")")[0]}catch(c){a=Ca(c,5)}return a}return""}(),fun:function(){function a(a,b,e,f){var g="";if(b)if(e&&f)try{g=b(e,f)}catch(i){g=i+""}else try{g=b(e)}catch(j){g=j+""}else g="[NS]";return a+g}var b="";"undefined"!=typeof Math&&(b+=a("imul",Math.imul,4294967294,5),b+=a("acos",Math.acos,0.5),b+=a("acosh",Math.acosh,2),b+=a("asin",Math.asin,0.5),b+=a("asinh",Math.asinh,1),b+=a("atan",Math.atan,1),b+=a("atanh",Math.atanh,0.5),b+=a("cbrt",Math.cbrt,2),b+=a("ceil",Math.ceil,-7.004),b+=a("clz32",
Math.clz32,n),b+=a("cos",Math.cos,1),b+=a("cosh",Math.cosh,1),b+=a("exp",Math.exp,1),b+=a("expm1",Math.expm1,1),b+=a("floor",Math.floor,-45.95),b+=a("fround",Math.fround,1.337),b+=a("log",Math.log,10),b+=a("log10",Math.log10,2),b+=a("log1p",Math.log1p,1),b+=a("log2",Math.log2,3),b+=a("sin",Math.sin,1),b+=a("sinh",Math.sinh,1),b+=a("sqrt",Math.sqrt,2),b+=a("tan",Math.tan,1),b+=a("tanh",Math.tanh,1));"undefined"!=typeof NaN&&(b+="NaNNaN");Math.hypot&&(b+="hypot"+Math.hypot(3,4,"5")+"#"+Math.hypot(3,
4));return b}()},Xa="new File([],[]);new Image();new Blob();new AnimationEvent(1);new WebKitCSSMatrix();document.createElement('canvas');document.createElement('video');document.createElement('svg');document.createElement('rect');document.createElement('audio');Math;document.createElement('div').style".split(";"),ua=[],z={},x=0;x<Xa.length;x++)try{var Ya;Ya=eval(Xa[x]);props=U(Ya);for(var va=0;va<props.length;va++){var Za=props[va];0>ua.indexOf(Za)&&ua.push(Za)}}catch(wb){}f.registeredMethods+=ua.join("");
var ba=A(),i={},X={},u="undefined"!=typeof window?window:{},$a="undefined"!=typeof window&&"undefined"!=typeof document?document:{},v=w;if($a.createElement)try{var J=$a.createElement("canvas");J.getContext("webgl")?f.webgctx="webgl":J.getContext("experimental-webgl")&&(f.webgctx="experimental-webgl");try{f.canvasData=J.toDataURL("image/jpeg")+"",f.canvasDataPNG=J.toDataURL()}catch(xb){f.canvasData="np"}if(v=!!u.WebGLRenderingContext&&(J.getContext("webgl")||J.getContext("experimental-webgl")))try{var ab=
v.getExtension("WEBGL_debug_renderer_info");f.glURWG=v.getParameter(ab.UNMASKED_RENDERER_WEBGL);f.glUVGL=v.getParameter(ab.UNMASKED_VENDOR_WEBGL);f.glVR=v.getParameter(v.VERSION);f.glSLV=v.getParameter(v.SHADING_LANGUAGE_VERSION);f.glVND=v.getParameter(v.VENDOR);f.registeredMethods+=U(v).join("")}catch(nb){f._errs.push(nb+"")}}catch(ob){f._errs.push(ob+""),v=w}var Y={},N={consoleAppender:n,consoleFormatter:function(a,b,c){A()?"error"===b?console.error(a+"."+b+" "+c.message,c):"warn"===b?console.warn(a+
"."+b+" "+c.message,c):console.log(a+"."+b+" "+c.message,c):console.log(" [ "+a+"."+b+" "+c.message+" ]")},fileAppender:n,fileFormatter:function(a,b,c){if("undefined"!=typeof window&&window.document&&window.document.body){var d;document.getElementById("quixotFileAppender")?d=document.getElementById("quixotFileAppender"):(d=document.createElement("pre"),d.id="quixotFileAppender",document.body.appendChild(d));a=a+" "+b+" "+c.timestamp+" "+c.message+"\t"+JSON.stringify(c)+"\n";d.innerHTML+=a}},logStack:n},
ka="logopts",C=new Pa("quixot",N),$={quixot:C},r={jsEngine:{isNodeJs:p(),isBrowser:ba},javaEnabled:w,tempDir:"",homeDir:w,javaPath:w};if("undefined"!=typeof process&&process.env){for(x in process.env)r[x]=process.env[x],f["process_env"+x]=process.env[x];var fa=y("path");r.homeDir=process.env.HOME||process.env.USERPROFILE;r.tempDir=process.env.TEMP||process.env.TMP||process.env.APPDATA;process.env.JRE_HOME?(r.javaEnabled=n,r.javaPath=process.env.JRE_HOME+fa.sep+"bin"+fa.sep+"java"):process.env.JAVA_HOME&&
(r.javaEnabled=n,r.javaPath=process.env.JAVA_HOME+fa.sep+"bin"+fa.sep+"java")}if(!r.homeDir)try{env.homeDir=y("os").homedir()}catch(yb){}if(!r.tempDir)try{env.homeDir=y("os").tmpdir()}catch(zb){}var pb="undefined"!=typeof navigator?navigator.battery||navigator.webkitBattery||navigator.mozBattery||{}:w,sa=function(){var a,b,c,d,e,f;"undefined"!=typeof window&&window.screen&&(window.screen.width&&(a=window.screen.width),window.screen.height&&(b=window.screen.height),window.screen.availHeight&&(d=window.screen.availHeight),
window.screen.availWidth&&(c=window.screen.availWidth),window.screen.colorDepth&&(e=window.screen.colorDepth),window.screen.pixelDepth&&(f=window.screen.pixelDepth));return{width:a,height:b,availWidth:c,availHeight:d,colorDepth:e,pixelDepth:f}}(),R=function(){"undefined"!=typeof process&&(/^win/.test(process.platform+"")&&r.javaPath)&&(r.javaPath+=".exe");if(p()){var a=y("os");console.log(a);return{name:a.type?a.type():a.platform?a.platform():"",version:a.release?a.release():""}}return{}}(),qb=Ma(),
rb=Na(),sb=Ka(),S=new aa(qb),tb=new aa(rb),ub=new aa(sb),na={domain:S,path:tb,search:ub},vb=[{string:e(),subString:"iCab",versionSearch:"iCab",identity:"iCab"},{string:e(),subString:"rekonq",versionSearch:"rekonq",identity:"Rekonq"},{string:e(),subString:"Midori",versionSearch:"Midori",identity:"Midori"},{string:e(),subString:"Arora",versionSearch:"Arora",identity:"Arora"},{string:e(),subString:"Stainless",versionSearch:"Stainless",identity:"Stainless"},{string:e(),subString:"Epiphany",versionSearch:"Epiphany",
identity:"Epiphany"},{string:e(),subString:"K-Meleon",versionSearch:"K-Meleon",identity:"K-Meleon"},{string:m().vendor,subString:"Camino",identity:"Camino"},{string:e(),subString:"Maxthon",versionSearch:"Maxthon",identity:"Maxthon"},{string:e(),subString:"SeaMonkey",versionSearch:"SeaMonkey",identity:"SeaMonkey"},{string:e(),subString:"Edge",identity:"Edge",versionSearch:"Edge"},{string:e(),subString:"Chrome",identity:"Chrome"},{string:e(),subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},
{string:m().vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:F().opera,identity:"Opera",versionSearch:"Version"},{string:m().vendor,subString:"iCab",identity:"iCab"},{string:m().vendor,subString:"KDE",identity:"Konqueror"},{string:e(),subString:"Firefox",identity:"Firefox"},{string:e(),subString:"Netscape",identity:"Netscape"},{string:e(),subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:e(),subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:e(),
subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],oa="",Q,E,K,L,qa=[];Q=Ra([{string:m().platform,subString:"Win",identity:"Windows"},{string:m().platform,subString:"Mac",identity:"Mac"},{string:e(),subString:"iPhone",identity:"iPhone"},{string:e(),subString:"iPad",identity:"iPad"},{string:e(),subString:"Android",identity:"Android"},{string:m().platform,subString:"Linux",identity:"Linux"}])||"an unknown OS";"Linux"===Q&&e().toLowerCase().indexOf("ubuntu")&&(E="Ubuntu");if("Windows"===
Q&&/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(e()))if("NT"==RegExp.$1)switch(RegExp.$2){case "5.0":E="2000";break;case "5.1":E="XP";break;case "6.0":E="Vista";break;default:E="NT"}else E="9x"==RegExp.$1?"ME":RegExp.$1;K=Ra(vb)||"An unknown browser";L=Sa(e())||Sa(m().appVersion||{})||"an unknown version";e().match(/Trident/)&&!e().match(/MSIE/)&&(K="Explorer",e().match(/Trident/)&&e().match(/11/)&&(L=11));if("Chrome"===K&&(-1<e().toLowerCase().indexOf("chromium")&&(K="Chromium"),"an unknown version"===
L)){var ga=e()||m().appVersion||{},ga=ga.split("Chrome");if(ga[1]){var bb=ga[1].match(/\d+/);bb[0]&&(L=parseInt(bb[0]))}}for(var cb=[{doMatch:function(a){return 1<a.indexOf("OPR")},getVersion:function(){var a=e().split("OPR"),b="";if(a[1]){for(var a=a[1]+"",c=0;c<a.length;c++){if(!isNaN(a[c])||"."===a[c])b+=a[c];if(" "===a[c])break}return b}return"unknown version"},identity:"Opera"}],x=0;x<cb.length;x++){var wa=cb[x];wa.doMatch(e())&&(K=wa.identity,L=wa.getVersion())}if(m().javaEnabled)try{r.javaEnabled=
m().javaEnabled()}catch(Ab){r.javaEnabled=w}pa(m().plugins);pa(m().mimeTypes);R.name||(R.name=Q);R.version||(R.version=E);f.plugins=qa.sort().join("");f.screen=B(sa);f.chrome=B(F().chrome,8);f.netscape=B(F().netscape,4);f.navigator=B(za(m()));f.plugins=B(m().plugins,3);f.mimeTypes=B(m().mimeTypes,3);var o={debug:n,maxListSize:20,strlist:"abcdefghihklmnopqrstuvxyz",logging:N},ha;if(p()){try{ha=y("assert")}catch(Bb){ha=w}o.logging.logStack=w}var P={nr:1.5,intg:10,str:1,obj:1,arr:1},D=ca("@qtst").getSafe("lup",
1);try{D=parseFloat(D)}catch(Cb){D=(new Date).getTime()}(function(){var a={requestFullscreen:{change:"onfullscreenchange",request:"requestFullscreen",error:"onfullscreenerror",enabled:"fullscreenEnabled",cancel:"exitFullscreen",fullScreenElement:"fullscreenElement"},mozRequestFullScreen:{change:"onmozfullscreenchange",request:"mozRequestFullScreen",error:"onmozfullscreenerror",cancel:"mozCancelFullScreen",enabled:"mozFullScreenEnabled",fullScreenElement:"mozFullScreenElement"},webkitRequestFullScreen:{change:"onwebkitfullscreenchange",
request:"webkitRequestFullScreen",cancel:"webkitCancelFullScreen",error:"onwebkitfullscreenerror",fullScreenElement:"webkitCurrentFullScreenElement"},MSRequestFullScreen:{change:"MSFullscreenChange",request:"MSRequestFullScreen",cancel:"MSCancelFullScreen",error:"MSFullscreenError",fullScreenElement:"MSCurrentFullScreenElement"},msRequestFullScreen:{change:"msFullscreenChange",request:"msRequestFullscreen",cancel:"msExitFullscreen",error:"msFullscreenError",fullScreenElement:"msCurrentFullScreenElement"}},
b=w;if("undefined"==typeof window)return b;var c=document.createElement("div"),d;for(d in a){var e=a[d],f;for(f in e){var g=e[f];document[g]&&(b||(b={}),b[f]=g);c[g]&&(b||(b={}),b[f]=g);g in c&&(b||(b={}),b[f]=g);g in document&&(b||(b={}),b[f]=g)}}return b})();var I=0,H=[],ta=O()+Wa();A()&&(window[ta]=function(a){if(document.getElementById(a)){var b=document.getElementById(a);if(b.parentNode){b.parentNode.removeChild(b);for(b=0;b<H.length;b++)H[b].id==a&&(H.splice(b,1),setTimeout(function(){ea()},
200))}}else ea()});return{Fingerprint:{data:function(){return f},identifier:function(){for(var a=k().split(""),b="",c=2,d="_,{}[]/-|\x3d()+#.;".split(""),e={},f=0;f<d.length;f++)e[d[f]]=2;for(f=0;f<a.length;f++){var g=a[f];if(!(" "===g||"\n"===g||"\t"===g))if(-1<d.indexOf(g))b+=l(e[g]),e[g]++;else if(-1<mb.indexOf(g))b=0==f%2?b+g:g+b;else{+g&&(c=parseInt(g));var i=Math.round(b.length/c),b=b.substring(0,i)+g+b.substring(i,b.length)}}return b},text:k,numbers:function(){for(var a=k().split(""),b="",
c=a.length;0<c;c--){var d=a[c];if(+d||"0"===d)b+=d}return b}},Event:{APPOINTMENT_DONE:"quixot_event_appointment_done",dispatch:Ga,hasListener:function(a,b){if(!i[a])return w;if(b){b+="";for(var c=0;c<i[a].length;c++)if(i[a][c].uid===b)return n}return w},addListener:function(a,b,c){c||(c=b+"");i[a]||(i[a]=[]);i[a].push({method:b,uid:c});return i},removeListener:function(a,b){if(i[a])return w;if(b){"function"===typeof b&&(b+="");for(var c=0;c<i[a].length;c++)i[a][c].uid===b&&i[a].splice(c,1)}else i[a]=
[]},getAll:function(){return{events:i,dispatchers:X}},appoint:ya,dropAppoint:function(a){if(!a)return w;u.cancelAnimationFrame?u.cancelAnimationFrame(a):clearTimeout(a);return n}},URL:{getParams:Ja,getDomainFromUrl:La,currentDomain:Ma,querify:function(a){var b=[],c="";if(a!=s){for(var d in a)d&&a[d]&&b.push({pp:d,vl:a[d]});for(a=0;a<b.length;a++)c+=b[a].pp+"\x3d"+b[a].vl,a<b.length-1&&(c+="\x26");return c}},decode:Ha,currentPath:Na,currentSearch:Ka,currentParams:Ia},Logger:{info:function(a){C.log("info",
a)},setDefaultConfig:function(a){for(var b in a)N[b]=a[b]},getDefaultConfig:function(){return N},trace:function(a){C.trace(a)},error:function(a){C.log("error",a)},warn:function(a){C.warn(a)},getLogs:function(){return C.getLogs()},getAll:function(){return $},getInstance:Z,setURLAccessKey:function(a){ka=a}},Cookie:{getc:Qa,setc:la,drop:function(a,b,c){la(a,"",new Date("Thu, 01 Jan 1970 00:00:01 GMT"),b,c)}},Util:{atos:l,stringToHex:W,rgbToHex:function(a,b,c){return"#"+W(a)+W(b)+W(c)},rgbToHexShift:function(a,
b,c){return"#"+(16777216+(a<<16)+(b<<8)+c).toString(16).slice(1)},serialize:M,simplify:za,isPrimitive:V,isFunction:Aa,objKeys:U,isArray:Ba,encodeObject:B,stringify:Ca,incr:function(){},randNr:function(){}},Cache:{getInstance:ca,put:function(a,b){S.put(a,b)},remove:function(a){S.remove(a)},getData:function(){return S.getData()},getSafe:function(a,b){return S.getSafe(a,b)}},Env:r,System:{battery:pb,screen:sa,os:R},Browser:{name:K,version:L,is:{iPod:-1<e().indexOf("iPod"),iPhone:-1<e().indexOf("iPhone"),
nokiaN:-1<e().indexOf("NokiaN"),wii:-1<e().indexOf("Wii"),ps:/playstation/i.test(e()),xpSP2:-1!==e().indexOf("SV1"),iPhoneiPod:e().match(/iPhone|iPod/i),iPhoneiPadiPod:e().match(/iPhone|iPad|iPod/i),desktop:!e().match(/iPhone|iPad|android/i),android:e().match(/android/i),winPhone:/IEMobile/.test(e()),chromeCRIOS:e().match(/chrome|crios/i),iOS:/iPad|iPhone|iPod/.test(e())&&!MSStream,iPad:e().match(/iPad/i),firefox:e().match(/firefox/i),phoneDevice:e().match(/iPhone|android/i),iOS7:e().match(/.*CPU.*OS 7_\d/i),
iPhoneSafari:function(){var a=!!F().safari;return!(!/iPhone/i.test(e())||!a)}(),tabletAndroidFirefox:/(?:Android; Tablet).*(?:Firefox\/)/i.test(e()),msie:function(){var a=e(),b=a.indexOf("MSIE ");if(0<b)return parseInt(a.substring(b+5,a.indexOf(".",b)),10);if(0<a.indexOf("Trident/"))return b=a.indexOf("rv:"),parseInt(a.substring(b+3,a.indexOf(".",b)),10);b=a.indexOf("Edge/");if(0<b)return parseInt(a.substring(b+5,a.indexOf(".",b)),10)}()},has:{chrome:F().chrome},get:{firefoxVersion:-1!==e().toLowerCase().indexOf("firefox/undefined"),
androidVersion:function(){var a=e().match(/Android\s([0-9\.]*)/);return a?a[1]:w}(),iPadVersion:e().match(/(?:iPad);.*CPU.*(?:OS (.*)_)\d/i)}},Sancho:{equals:function(a,b){if(ha)o.logging&&Z("Tests",o.logging).info("check if "+a+" \x3d\x3d\x3d "+b),ha(a===b);else if(a==b)o.logging&&Z("Tests",o.logging).info("check if "+a+" \x3d\x3d\x3d "+b+" ] SUCCESS");else throw Error("check if "+a+" \x3d\x3d\x3d "+b+" ---\x3e FAIL");return a===b},hasData:function(a,b){b||"undefined"!=typeof arguments&&(b=arguments&&
arguments.calee&&arguments.callee.caller?arguments.callee.caller+"":"");if("undefined"!=typeof a&&""!=a&&a!=s)return o.logging&&Z("Tests",o.logging).info("check if "+a+" hasData ("+b+") ] SUCCESS"),n;throw Error(b+"---\x3e FAIL");},donkey:function(a,b){for(var c=[],d=0;d<b;d++){console.log("prepare "+d);console.log(ra()+O()+G());console.log(Ua());var e=a.replace(/{string}/g,'"'+O()+'"').replace(/{integer}/g,G()).replace(/{integerList}/g,JSON.stringify(Ua())).replace(/{objectList}/g,JSON.stringify(ib())).replace(/{any}/g,
Va());c.push(e);eval(e)}console.log(c)},config:o},Tween:j,Easing:q,rearrange:ea,Mingui:{notify:function(a,b,c){return lb(a,b,c)}},require:y,_performance:function(){return window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{}},_getmemodata:function(){return z},_getGL:function(){return v}}}();"undefined"!=typeof module&&(module.exports=quixot);