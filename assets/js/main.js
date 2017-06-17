//
/*
/* Surender Lohia - Front-end Developer Portfolio & Blog...
 * @author Surender Lohia https://www.surender.net/
 *
*/

//
/*
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 *
*/

// 
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=a.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=i[o]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,n,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,i=n.elements||document.querySelectorAll(n.selector),s=0;r=i[s++];)a.highlightElement(r,!0===e,n.callback)},highlightElement:function(t,n,r){for(var i,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var o={element:t,language:i,grammar:s,code:t.textContent};if(a.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(o.element.textContent=o.code),void a.hooks.run("complete",o);if(a.hooks.run("before-highlight",o),n&&_self.Worker){var u=new Worker(a.filename);u.onmessage=function(e){o.highlightedCode=e.data,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(o.element),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},u.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=a.highlight(o.code,o.grammar,o.language),a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},highlight:function(e,t,r){var i=a.tokenize(e,t);return n.stringify(a.util.encode(i),r)},tokenize:function(e,t,n){var r=a.Token,i=[e],s=t.rest;if(s){for(var l in s)t[l]=s[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===a.util.type(o)?o:[o];for(var u=0;u<o.length;++u){var g=o[u],c=g.inside,p=!!g.lookbehind,d=!!g.greedy,m=0,h=g.alias;if(d&&!g.pattern.global){var f=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,f+"g")}g=g.pattern||g;for(var y=0,b=0;y<i.length;b+=i[y].length,++y){var v=i[y];if(i.length>e.length)break e;if(!(v instanceof r)){g.lastIndex=0;var w=g.exec(v),k=1;if(!w&&d&&y!=i.length-1){if(g.lastIndex=b,!(w=g.exec(e)))break;for(var P=w.index+(p?w[1].length:0),x=w.index+w[0].length,A=y,j=b,_=i.length;A<_&&j<x;++A)P>=(j+=i[A].length)&&(++y,b=j);if(i[y]instanceof r||i[A-1].greedy)continue;k=A-y,v=e.slice(b,j),w.index-=b}if(w){p&&(m=w[1].length);var x=(P=w.index+m)+(w=w[0].slice(m)).length,C=v.slice(0,P),E=v.slice(x),N=[y,k];C&&N.push(C);var S=new r(l,c?a.tokenize(w,c):w,h,w,d);N.push(S),E&&N.push(E),Array.prototype.splice.apply(i,N)}}}}}return i},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;_self.postMessage(a.highlight(r,a.languages[n],n)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,n=t.getAttribute("data-src"),r=t,i=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(a=(t.className.match(i)||[,""])[1]),!a){var s=(n.match(/\.(\w+)$/)||[,""])[1];a=e[s]||s}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading…",t.appendChild(l);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(l.textContent=o.responseText,Prism.highlightElement(l)):o.status>=400?l.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:l.textContent="✖ Error: File does not exist or is empty")},o.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}();

// prism-normalize-whitespace
!function(){function e(e){this.defaults=r({},e)}function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function t(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="  ".charCodeAt(0)&&(n+=3);return e.length+n}if("undefined"!=typeof self&&self.Prism&&self.document){var r=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=r(this.defaults,e)},normalize:function(e,t){t=r(this.defaults,t);for(var i in t){var o=n(i);"normalize"!==i&&"setDefaults"!==o&&t[i]&&this[o]&&(e=this[o].call(this,e,t[i]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g")," ")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(new RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join(" ")+"$&")},breakLines:function(e,n){n=n===!0?80:0|n||80;for(var r=e.split("\n"),i=0;i<r.length;++i)if(!(t(r[i])<=n)){for(var o=r[i].split(/(\s+)/g),a=0,s=0;s<o.length;++s){var l=t(o[s]);a+=l,a>n&&(o[s]="\n"+o[s],a=l)}r[i]=o.join("")}return r.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=e.element.parentNode,t=/\bno-whitespace-normalization\b/;if(!(!e.code||!n||"pre"!==n.nodeName.toLowerCase()||e.settings&&e.settings["whitespace-normalization"]===!1||t.test(n.className)||t.test(e.element.className))){for(var r=n.childNodes,i="",o="",a=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<r.length;++l){var c=r[l];c==e.element?a=!0:"#text"===c.nodeName&&(a?o+=c.nodeValue:i+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=i+e.element.innerHTML+o;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=i+e.code+o,e.code=s.normalize(e.code,e.settings)}})}}();

function Swipe(n,t){"use strict";function e(){p=g.children,b=p.length,p.length<2&&(t.continuous=!1),m.transitions&&t.continuous&&p.length<3&&(g.appendChild(p[0].cloneNode(!0)),g.appendChild(g.children[1].cloneNode(!0)),p=g.children),w=new Array(p.length),x=n.getBoundingClientRect().width||n.offsetWidth,g.style.width=p.length*x+"px";for(var e=p.length;e--;){var i=p[e];i.style.width=x+"px",i.setAttribute("data-index",e),m.transitions&&(i.style.left=e*-x+"px",r(e,T>e?-x:T<e?x:0,0))}t.continuous&&m.transitions&&(r(s(T-1),-x,0),r(s(T+1),x,0)),m.transitions||(g.style.left=T*-x+"px"),n.style.visibility="visible"}function i(){t.continuous?a(T-1):T&&a(T-1)}function o(){t.continuous?a(T+1):T<p.length-1&&a(T+1)}function s(n){return(p.length+n%p.length)%p.length}function a(n,e){if(T!=n){if(m.transitions){var i=Math.abs(T-n)/(T-n);if(t.continuous){var o=i;(i=-w[s(n)]/x)!==o&&(n=-i*p.length+n)}for(var a=Math.abs(T-n)-1;a--;)r(s((n>T?n:T)-a-1),x*i,0);n=s(n),r(T,x*i,e||y),r(n,0,e||y),t.continuous&&r(s(n-i),-x*i,0)}else n=s(n),c(T*-x,n*-x,e||y);T=n,E(t.callback&&t.callback(T,p[T]))}}function r(n,t,e){u(n,t,e),w[n]=t}function u(n,t,e){var i=p[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function c(n,e,i){if(i)var o=+new Date,s=setInterval(function(){var a=+new Date-o;if(a>i)return g.style.left=e+"px",D&&d(),t.transitionEnd&&t.transitionEnd.call(event,T,p[T]),void clearInterval(s);g.style.left=(e-n)*(Math.floor(a/i*100)/100)+n+"px"},4);else g.style.left=e+"px"}function d(){L=setTimeout(o,D)}function l(){D=0,v()}function v(){clearTimeout(L)}function f(){D&&d()}var h=function(){},E=function(n){setTimeout(n||h,0)},m={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(n){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in t)if(void 0!==n.style[t[e]])return!0;return!1}(document.createElement("swipe"))};if(n){var p,w,x,b,g=n.children[0];t=t||{};var T=parseInt(t.startSlide,10)||0,y=t.speed||300;t.continuous=void 0===t.continuous||t.continuous;var L,k,D=t.auto||0,M={},z={},I={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":E(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":E(this.transitionEnd(n));break;case"resize":E(e.call())}t.stopPropagation&&n.stopPropagation()},start:function(n){var t=n.touches[0];M={x:t.pageX,y:t.pageY,time:+new Date},k=void 0,z={},g.addEventListener("touchmove",this,!1),g.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)){t.disableScroll&&n.preventDefault();var e=n.touches[0];z={x:e.pageX-M.x,y:e.pageY-M.y},void 0===k&&(k=!!(k||Math.abs(z.x)<Math.abs(z.y))),k||(n.preventDefault(),l(),t.continuous?(u(s(T-1),z.x+w[s(T-1)],0),u(T,z.x+w[T],0),u(s(T+1),z.x+w[s(T+1)],0)):(z.x=z.x/(!T&&z.x>0||T==p.length-1&&z.x<0?Math.abs(z.x)/x+1:1),u(T-1,z.x+w[T-1],0),u(T,z.x+w[T],0),u(T+1,z.x+w[T+1],0)))}},end:function(n){var e=+new Date-M.time,i=Number(e)<250&&Math.abs(z.x)>20||Math.abs(z.x)>x/2,o=!T&&z.x>0||T==p.length-1&&z.x<0;t.continuous&&(o=!1);var a=z.x<0;k||(i&&!o?(a?(t.continuous?(r(s(T-1),-x,0),r(s(T+2),x,0)):r(T-1,-x,0),r(T,w[T]-x,y),r(s(T+1),w[s(T+1)]-x,y),T=s(T+1)):(t.continuous?(r(s(T+1),x,0),r(s(T-2),-x,0)):r(T+1,x,0),r(T,w[T]+x,y),r(s(T-1),w[s(T-1)]+x,y),T=s(T-1)),t.callback&&t.callback(T,p[T])):t.continuous?(r(s(T-1),-x,y),r(T,0,y),r(s(T+1),x,y)):(r(T-1,-x,y),r(T,0,y),r(T+1,x,y))),g.removeEventListener("touchmove",I,!1),g.removeEventListener("touchend",I,!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==T&&(D&&d(),t.transitionEnd&&t.transitionEnd.call(n,T,p[T]))}};return e(),D&&d(),m.addEventListener?(m.touch&&g.addEventListener("touchstart",I,!1),m.transitions&&(g.addEventListener("webkitTransitionEnd",I,!1),g.addEventListener("msTransitionEnd",I,!1),g.addEventListener("oTransitionEnd",I,!1),g.addEventListener("otransitionend",I,!1),g.addEventListener("transitionend",I,!1)),window.addEventListener("resize",I,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(n,t){l(),a(n,t)},prev:function(){l(),i()},next:function(){l(),o()},getPos:function(){return T},getNumSlides:function(){return b},kill:function(){l(),g.style.width="auto",g.style.left=0;for(var n=p.length;n--;){var t=p[n];t.style.width="100%",t.style.left=0,m.transitions&&u(n,0,0)}m.addEventListener?(g.removeEventListener("touchstart",I,!1),g.removeEventListener("webkitTransitionEnd",I,!1),g.removeEventListener("msTransitionEnd",I,!1),g.removeEventListener("oTransitionEnd",I,!1),g.removeEventListener("otransitionend",I,!1),g.removeEventListener("transitionend",I,!1),window.removeEventListener("resize",I,!1)):window.onresize=null},pause:function(){v()},resume:function(){f()}}}}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}

// Author: Surender
(function(w, d, app) {
  //Slider
  var app = window.app || {};
  var $ = domHelper();

  $.ready(appInit);

  function sliderInit() {
    var sliderEl = $.el('#slider'),
      sliderOptions = {
        auto: 3000
      },
      slider;

    if(sliderEl) {
      slider = Swipe(sliderEl, sliderOptions);
      $.addEvent($.el('#slider-prev-btn'), 'click', slider.prev);
      $.addEvent($.el('#slider-next-btn'), 'click', slider.next);

      app.slider = slider;
    }
  }

  // Light box
  function lightBoxInit() {
    var DURATION = 500;

    $.addEvent($.el('.light-box-btn'), 'click', showLightBox);
    $.addEvent($.el('.light-box-close-btn'), 'click', closeLightBox);

    function showLightBox(e) {
      e.preventDefault();
      
      if(app.slider) {
        app.slider.pause();
      }

      var $overlay = $.el('.overlay');
      var $currentEl = e.target;
      
      /*if(!$currentEl.hasClass('light-box-btn')) {
        $currentEl = $currentEl.closest('.light-box-btn');
      }*/

      var currentId = $currentEl.getAttribute('data-href');

      if(!currentId) {
        console.error('Current Lightbox id is undefined');
      }

      var $lightBox = $.el('#' + currentId);
      var $lightBoxWrap =  $lightBox.querySelectorAll('.light-box-wrap')[0];

      //$.el(window).scrollTop(0);

      $.addClass($.el('body'), 'overflow-hidden');
      $.addClass($lightBox, 'opened-light-box');

      $.show($overlay);
      $.show($lightBox);
      $.addClass($lightBoxWrap, 'animated');
      $.addClass($lightBoxWrap, 'zoomIn');

      setTimeout(function() {
        $.removeClass($lightBoxWrap, 'zoomIn');
      }, DURATION);
    }

    function closeLightBox(e) {
      var $overlay = $.el('.overlay');
      var $openedLightBox = $.el('.light-box.opened-light-box');
      var $lightBoxWrap = $openedLightBox.querySelectorAll('.light-box-wrap')[0];

      if(app.slider) {
        app.slider.resume();
      }

      $.removeClass($.el('body'), 'overflow-hidden');
      $.addClass($lightBoxWrap, 'zoomOut');

      setTimeout(function() {
        $.removeClass($lightBoxWrap, 'animated');
        $.removeClass($lightBoxWrap, 'zoomOut');
        $.hide($openedLightBox);
        $.removeClass($openedLightBox, 'opened-light-box');
        $.hide($openedLightBox);
        $.hide($overlay);
      }, DURATION);
      
    }
  }

  function setDate() {
    var $currentYear = $.el('.current-year');
    var d = new Date();
    $currentYear.textContent = d.getFullYear();
  }

  function appInit() {
    setDate();
    sliderInit();
    lightBoxInit();
  }

  function domHelper() {
    var $ = {

      el: function(selector) {
        var elements = document.querySelectorAll(selector);
        if(elements.length === 0) {
          return 0;
        } else if(elements.length === 1) {
          return elements[0];
        } else {
          return elements;
        }
      },

      addEvent: function(el, event, fun) {
        if(el && !el.length) {
          el.addEventListener(event, fun);
        } else {
          this.forEach(el, function(item) {
            item.addEventListener(event, fun);
          });
        }
        
      },

      addClass: function(el, className) {
        if (el.classList) {
            el.classList.add(className);
          } else {
          el.className += ' ' + className;
        }
      },

      removeClass: function(el, className) {
        if (el.classList) {
          el.classList.remove(className);
        } else {
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      },

      show: function(el) {
        el.style.display = 'block';
      },

      hide: function (el) {
        el.style.display = 'none';
      },

      ready: function(fn) {
        if (document.readyState != 'loading'){
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
      },

      forEach: function(arr, action) {
        var arrLen = arr.length;
        var item;
        for(var i = 0; i < arrLen; i += 1) {
          action(arr[i]);
        }
      }

    }

    return $;
  }

  // export to window.app object
  app.$ = $;
})(window, document, window.app);