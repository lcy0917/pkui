!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return A++}function e(a){return a.match(D)[0]}function f(a){for(a=a.replace(E,"/"),a=a.replace(G,"$1/");a.match(F);)a=a.replace(F,"/");return a}function g(a){var b=a.length-1,c=a.charCodeAt(b);return 35===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||47===c?a:a+".js"}function h(a){var b=v.alias;return b&&x(b[a])?b[a]:a}function i(a){var b,c=v.paths;return c&&(b=a.match(H))&&x(c[b[1]])&&(a=c[b[1]]+b[2]),a}function j(a){var b=v.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(I,function(a,c){return x(b[c])?b[c]:a})),a}function k(a){var b=v.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=z(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charCodeAt(0);if(J.test(a))c=a;else if(46===d)c=(b?e(b):v.cwd)+a;else if(47===d){var g=v.cwd.match(K);c=g?g[0]+a.substring(1):a}else c=v.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),f(c)}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=h(a),a=j(a),a=h(a),a=g(a),a=h(a);var c=l(a,b);return c=h(c),c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d;try{importScripts(a)}catch(a){d=a}b(d)}function p(a,b,c){var d=X.createElement("script");if(c){var e=z(c)?c(a):c;e&&(d.charset=e)}q(d,b,a),d.async=!0,d.src=a,$=d,aa?_.insertBefore(d,aa):_.appendChild(d),$=null}function q(a,b,c){function d(c){a.onload=a.onerror=a.onreadystatechange=null,v.debug||_.removeChild(a),a=null,b(c)}var e="onload"in a;e?(a.onload=d,a.onerror=function(){C("error",{uri:c,node:a}),d(!0)}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&d()}}function r(){if($)return $;if(ba&&"interactive"===ba.readyState)return ba;for(var a=_.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return ba=c}}function s(a){function b(){k=a.charAt(l++)}function c(){return/\s/.test(k)}function d(){return'"'==k||"'"==k}function e(){var c=l,d=k,e=a.indexOf(d,c);if(-1==e)l=m;else if("\\"!=a.charAt(e-1))l=e+1;else for(;m>l;)if(b(),"\\"==k)l++;else if(k==d)break;o&&(r.push(a.slice(c,l-1)),o=0)}function f(){for(l--;m>l;)if(b(),"\\"==k)l++;else{if("/"==k)break;if("["==k)for(;m>l;)if(b(),"\\"==k)l++;else if("]"==k)break}}function g(){return/[a-z_$]/i.test(k)}function h(){var b=a.slice(l-1),c=/^[\w$]+/.exec(b)[0];p={if:1,for:1,while:1,with:1}[c],n={break:1,case:1,continue:1,debugger:1,delete:1,do:1,else:1,false:1,if:1,in:1,instanceof:1,return:1,typeof:1,void:1}[c],o=/^require\s*\(\s*(['"]).+?\1\s*\)/.test(b),o?(c=/^require\s*\(\s*['"]/.exec(b)[0],l+=c.length-2):l+=/^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(b)[0].length-1}function i(){return/\d/.test(k)||"."==k&&/\d/.test(a.charAt(l))}function j(){var b,c=a.slice(l-1);b="."==k?/^\.\d+(?:E[+-]?\d*)?\s*/i.exec(c)[0]:/^0x[\da-f]*/i.test(c)?/^0x[\da-f]*\s*/i.exec(c)[0]:/^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(c)[0],l+=b.length-1,n=0}if(-1==a.indexOf("require"))return[];for(var k,l=0,m=a.length,n=1,o=0,p=0,q=[],r=[];m>l;)b(),c()||(d()?(e(),n=1):"/"==k?(b(),"/"==k?(l=a.indexOf("\n",l),-1==l&&(l=a.length)):"*"==k?(l=a.indexOf("*/",l),-1==l?l=m:l+=2):n?(f(),n=0):(l--,n=1)):g()?h():i()?j():"("==k?(q.push(p),n=1):")"==k?n=q.pop():(n="]"!=k,o=0));return r}function t(a,b){this.uri=a,this.dependencies=b||[],this.deps={},this.status=0,this._entry=[]}if(!a.seajs){var u=a.seajs={version:"3.0.0"},v=u.data={},w=c("Object"),x=c("String"),y=Array.isArray||c("Array"),z=c("Function"),A=0,B=v.events={};u.on=function(a,b){var c=B[a]||(B[a]=[]);return c.push(b),u},u.off=function(a,b){if(!a&&!b)return B=v.events={},u;var c=B[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete B[a];return u};var C=u.emit=function(a,b){var c=B[a];if(c){c=c.slice();for(var d=0,e=c.length;e>d;d++)c[d](b)}return u},D=/[^?#]*\//,E=/\/\.\//g,F=/\/[^\/]+\/\.\.\//,G=/([^:\/])\/+\//g,H=/^([^\/:]+)(\/.+)$/,I=/{([^{]+)}/g,J=/^\/\/.|:\//,K=/^.*?\/\/.*?\//;u.resolve=m;var L,M,N="undefined"==typeof window&&"undefined"!=typeof importScripts&&z(importScripts),O=/^(about|blob):/,P=!location.href||O.test(location.href)?"":e(location.href);if(N){var Q;try{var R=Error();throw R}catch(a){Q=a.stack.split("\n")}Q.shift();for(var S,T=/.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i,U=/(.*?):\d+:\d+\)?$/;Q.length>0;){var V=Q.shift();if(S=T.exec(V),null!=S)break}var W;if(null!=S)var W=U.exec(S[1])[1];M=W,L=e(W||P),""===P&&(P=L)}else{var X=document,Y=X.scripts,Z=X.getElementById("seajsnode")||Y[Y.length-1];M=n(Z),L=e(M||P)}if(N)u.request=o;else{var $,X=document,_=X.head||X.getElementsByTagName("head")[0]||X.documentElement,aa=_.getElementsByTagName("base")[0];u.request=p}var ba,ca,da=u.cache={},ea={},fa={},ga={},ha=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6,ERROR:7};t.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=t.resolve(b[d],a.uri);return c},t.prototype.pass=function(){for(var a=this,b=a.dependencies.length,c=0;c<a._entry.length;c++){for(var d=a._entry[c],e=0,f=0;b>f;f++){var g=a.deps[a.dependencies[f]];g.status<ha.LOADED&&!d.history.hasOwnProperty(g.uri)&&(d.history[g.uri]=!0,e++,g._entry.push(d),g.status===ha.LOADING&&g.pass())}e>0&&(d.remain+=e-1,a._entry.shift(),c--)}},t.prototype.load=function(){var a=this;if(!(a.status>=ha.LOADING)){a.status=ha.LOADING;var c=a.resolve();C("load",c);for(var d=0,e=c.length;e>d;d++)a.deps[a.dependencies[d]]=t.get(c[d]);if(a.pass(),a._entry.length)return a.onload(),b;var f,g={};for(d=0;e>d;d++)f=da[c[d]],f.status<ha.FETCHING?f.fetch(g):f.status===ha.SAVED&&f.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},t.prototype.onload=function(){var a=this;a.status=ha.LOADED;for(var b=0,c=(a._entry||[]).length;c>b;b++){var d=a._entry[b];0===--d.remain&&d.callback()}delete a._entry},t.prototype.error=function(){var a=this;a.onload(),a.status=ha.ERROR},t.prototype.exec=function(){function a(b){var d=c.deps[b]||t.get(a.resolve(b));if(d.status==ha.ERROR)throw Error("module was broken: "+d.uri);return d.exec()}var c=this;if(c.status>=ha.EXECUTING)return c.exports;if(c.status=ha.EXECUTING,c._entry&&!c._entry.length&&delete c._entry,!c.hasOwnProperty("factory"))return c.non=!0,b;var e=c.uri;a.resolve=function(a){return t.resolve(a,e)},a.async=function(b,c){return t.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=z(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=ha.EXECUTED,C("exec",c),c.exports},t.prototype.fetch=function(a){function c(){u.request(g.requestUri,g.onRequest,g.charset)}function d(a){delete ea[h],fa[h]=!0,ca&&(t.save(f,ca),ca=null);var b,c=ga[h];for(delete ga[h];b=c.shift();)a===!0?b.error():b.load()}var e=this,f=e.uri;e.status=ha.FETCHING;var g={uri:f};C("fetch",g);var h=g.requestUri||f;return!h||fa.hasOwnProperty(h)?(e.load(),b):ea.hasOwnProperty(h)?(ga[h].push(e),b):(ea[h]=!0,ga[h]=[e],C("request",g={uri:f,requestUri:h,onRequest:d,charset:z(v.charset)?v.charset(h)||"utf-8":v.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},t.resolve=function(a,b){var c={id:a,refUri:b};return C("resolve",c),c.uri||u.resolve(c.id,b)},t.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,y(a)?(c=a,a=b):c=b),!y(c)&&z(d)&&(c=b===s?[]:s(""+d));var f={id:a,uri:t.resolve(a),deps:c,factory:d};if(!N&&!f.uri&&X.attachEvent&&b!==r){var g=r();g&&(f.uri=g.src)}C("define",f),f.uri?t.save(f.uri,f):ca=f},t.save=function(a,b){var c=t.get(a);c.status<ha.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=ha.SAVED,C("save",c))},t.get=function(a,b){return da[a]||(da[a]=new t(a,b))},t.use=function(b,c,d){var e=t.get(d,y(b)?b:[b]);e._entry.push(e),e.history={},e.remain=1,e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=da[d[f]].exec();c&&c.apply(a,b),delete e.callback,delete e.history,delete e.remain,delete e._entry},e.load()},u.use=function(a,b){return t.use(a,b,v.cwd+"_use_"+d()),u},t.define.cmd={},a.define=t.define,u.Module=t,v.fetchedList=fa,v.cid=d,u.require=function(a){var b=t.get(t.resolve(a));return b.status<ha.EXECUTING&&(b.onload(),b.exec()),b.exports},v.base=L,v.dir=L,v.loader=M,v.cwd=P,v.charset="utf-8",u.config=function(a){for(var b in a){var c=a[b],d=v[b];if(d&&w(d))for(var e in c)d[e]=c[e];else y(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),v[b]=c}return C("config",a),u}}}(this),!function(){var a=seajs.data,b=document;seajs.Module.preload=function(b){var c=a.preload,d=c.length;d?seajs.Module.use(c,function(){c.splice(0,d),seajs.Module.preload(b)},a.cwd+"_preload_"+a.cid()):b()},seajs.use=function(b,c){return seajs.Module.preload(function(){seajs.Module.use(b,c,a.cwd+"_use_"+a.cid())}),seajs},a.preload=function(){var a=[],c=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return c+=" "+b.cookie,c.replace(/(seajs-\w+)=1/g,function(b,c){a.push(c)}),a}(),define("seajs/seajs-preload/1.0.0/seajs-preload",[],{})}(),!function(){function a(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function b(a){return"[object Function]"=={}.toString.call(a)}function c(a,c,e,f){var g=u.test(a),h=r.createElement(g?"link":"script");if(e){var i=b(e)?e(a):e;i&&(h.charset=i)}void 0!==f&&h.setAttribute("crossorigin",f),d(h,c,g,a),g?(h.rel="stylesheet",h.href=a):(h.async=!0,h.src=a),p=h,t?s.insertBefore(h,t):s.appendChild(h),p=null}function d(a,b,c,d){function f(){a.onload=a.onerror=a.onreadystatechange=null,c||seajs.data.debug||s.removeChild(a),a=null,b()}var g="onload"in a;return!c||!v&&g?void(g?(a.onload=f,a.onerror=function(){seajs.emit("error",{uri:d,node:a}),f()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&f()}):void setTimeout(function(){e(a,b)},1)}function e(a,b){var c,d=a.sheet;if(v)d&&(c=!0);else if(d)try{d.cssRules&&(c=!0)}catch(a){"NS_ERROR_DOM_SECURITY_ERR"===a.name&&(c=!0)}setTimeout(function(){c?b():e(a,b)},20)}function f(a){return a.match(x)[0]}function g(a){for(a=a.replace(y,"/"),a=a.replace(A,"$1/");a.match(z);)a=a.replace(z,"/");return a}function h(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function i(a){var b=w.alias;return b&&q(b[a])?b[a]:a}function j(a){var b,c=w.paths;return c&&(b=a.match(B))&&q(c[b[1]])&&(a=c[b[1]]+b[2]),a}function k(a){var b=w.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(C,function(a,c){return q(b[c])?b[c]:a})),a}function l(a){var c=w.map,d=a;if(c)for(var e=0,f=c.length;f>e;e++){var g=c[e];if(d=b(g)?g(a)||a:a.replace(g[0],g[1]),d!==a)break}return d}function m(a,b){var c,d=a.charAt(0);if(D.test(a))c=a;else if("."===d)c=g((b?f(b):w.cwd)+a);else if("/"===d){var e=w.cwd.match(E);c=e?e[0]+a.substring(1):a}else c=w.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function n(a,b){if(!a)return"";a=i(a),a=j(a),a=k(a),a=h(a);var c=m(a,b);return c=l(c)}function o(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}var p,q=a("String"),r=document,s=r.head||r.getElementsByTagName("head")[0]||r.documentElement,t=s.getElementsByTagName("base")[0],u=/\.css(?:\?|$)/i,v=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i,"$1")<536;seajs.request=c;var w=seajs.data,x=/[^?#]*\//,y=/\/\.\//g,z=/\/[^\/]+\/\.\.\//,A=/([^:\/])\/+\//g,B=/^([^\/:]+)(\/.+)$/,C=/{([^{]+)}/g,D=/^\/\/.|:\//,E=/^.*?\/\/.*?\//,r=document,F=location.href&&0!==location.href.indexOf("about:")?f(location.href):"",G=r.scripts,H=r.getElementById("seajsnode")||G[G.length-1];f(o(H)||F),seajs.resolve=n,define("seajs/seajs-css/1.0.5/seajs-css",[],{})}(),window["www.pkusoft.net"]={},seajs.config({alias:{"seajs-text":"lib/sea-modules/seajs-text/1.1.1/seajs-text","es5-shim":"lib/es5-shim/4.5.9.x/es5-shim","es5-sham":"lib/es5-shim/4.5.9.x/es5-sham",json3:"lib/json3/3.3.2/json3",respond:"lib/respond/1.4.2/respond",html5shiv:"lib/html5shiv/3.7.3/html5shiv",jquery:"lib/jquery/1.11.3.x/jquery","jquery-ui":"lib/jquery/plugin/jquery-ui/1.12.1.x/jquery-ui.min",swiper:"lib/swiper/2.7.6.x/swiper",layer:"lib/layer/3.0.1.x/layer",artDialog:"lib/art-dialog/6.0.4.x/dialog-plus",artTemplate:"lib/art-template/3.1.0/template",jsencrypt:"lib/jsencrypt/2.3.1.x/jsencrypt",meld:"lib/meld/1.3.1.x/meld.js",bootgrid:"lib/bootgrid/1.3.1.x/jquery.bootgrid",dataSource:"component/common/dataSource/1.0.0/dataSource.js"}}),+function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n=a["www.pkusoft.net"];h=a.document.scripts,i=h[h.length-1],j=i.src,k=j.substring(0,j.lastIndexOf("/")),l=i.getAttribute("data-main"),g=i.getAttribute("data-timestamp"),g?"dev"==g?g="v="+(new Date).getTime():g.indexOf("=")===-1&&(g="v="+g):g="v=please-set-version",b=function(a){var b=document.createElement("b");return b.innerHTML="<!--[if IE "+a+"]><i></i><![endif]-->",1===b.getElementsByTagName("i").length}(8),f=b,c=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,d=!!Function.prototype.bind,e=a.JSON,m=k.substring(0,k.lastIndexOf("/")),seajs.config({paths:{},vars:{},map:[[/^(.*\.(?:css|js|tpl))(.*)$/i,"$1?"+g]],preload:["jquery"],debug:!0,base:k,charset:"utf-8"}),l?seajs.use(l):console.info('“<script data-main="" src="${ctx}/pkui/lib/pkui.js"></script>”，没有通过“data-main”指定入口文件URL。'),f&&(document.write("<script src='"+k+"/lib/html5shiv/3.7.3/html5shiv.js?"+g+"'></script>"),console.info("O(∩_∩)O~[ IE8 ]：载入 html5shiv.js")),n.pkuiBasePath=k,n.ctxPath=m,n.timestamp=g,n.isIE8=f,n.isSupportES5=d,n.isSupportJSON=e,n.isSupportMediaQuery=c}(window),seajs.use(["jquery"],function(a){var b=window["www.pkusoft.net"],c={basePath:b.pkuiBasePath,ctxPath:b.ctxPath,dicPath:b.ctxPath+"/dic/",timestamp:b.timestamp,component:{},render:function(){}};a.extend(c,{handleJsonResult:function(b){return"string"==typeof b&&(b=a.parseJSON(b)),b},handleGridResult:function(a){return c.handleJsonResult(a)},getTreeList:function(b){function c(b){var d=[];return b&&b.length?(a.each(b,function(b,e){var f,g=e;f=a.extend({},g),f[k]=c(l[g[i]]),d.push(f)}),d):null}var d,e,f,g=b.data,h=b.rootId,i=b.idName||"id",j=b.parentIdName||"parentId",k=b.childrenName||"children",l={};return h||(h=g[0][i]),a.each(g,function(a,b){e=b[j],l[e]=l[e]||[],l[e].push(b)}),f=g[h],a.isArray(f)||(f=[f]),d=c(f)}}),window.PKUI=c}),seajs.use(["jquery","meld"],function(a,b){function c(){var b=a("[data-pkui-component]");b.each(function(){var b=a(this),c=b.data("pkui-component"),d=b.data("pkui-component-options")||null,e=window.PKUI.component[c],f=c;if(!e){switch(c){case"datagrid":f="bootgrid"}return void seajs.use([f],function(){window.PKUI.component[c].apply(b,d)})}e.apply(b,d)})}a(document).ready(c),b.after(a.prototype,"html",c),b.after(a.prototype,"append",c),b.after(a.prototype,"appendTo",c),b.after(a.prototype,"prepend",c),b.after(a.prototype,"prependTo",c),window.PKUI.render=c});