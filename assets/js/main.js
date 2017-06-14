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

//(c)2017, MIT Style License <browser-update.org/LICENSE.txt>

var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=a.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=i[o]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,n,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,i=n.elements||document.querySelectorAll(n.selector),s=0;r=i[s++];)a.highlightElement(r,!0===e,n.callback)},highlightElement:function(t,n,r){for(var i,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var o={element:t,language:i,grammar:s,code:t.textContent};if(a.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(o.element.textContent=o.code),void a.hooks.run("complete",o);if(a.hooks.run("before-highlight",o),n&&_self.Worker){var u=new Worker(a.filename);u.onmessage=function(e){o.highlightedCode=e.data,a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(o.element),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},u.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=a.highlight(o.code,o.grammar,o.language),a.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",o),a.hooks.run("complete",o)},highlight:function(e,t,r){var i=a.tokenize(e,t);return n.stringify(a.util.encode(i),r)},tokenize:function(e,t,n){var r=a.Token,i=[e],s=t.rest;if(s){for(var l in s)t[l]=s[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===a.util.type(o)?o:[o];for(var u=0;u<o.length;++u){var g=o[u],c=g.inside,p=!!g.lookbehind,d=!!g.greedy,m=0,h=g.alias;if(d&&!g.pattern.global){var f=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,f+"g")}g=g.pattern||g;for(var y=0,b=0;y<i.length;b+=i[y].length,++y){var v=i[y];if(i.length>e.length)break e;if(!(v instanceof r)){g.lastIndex=0;var w=g.exec(v),k=1;if(!w&&d&&y!=i.length-1){if(g.lastIndex=b,!(w=g.exec(e)))break;for(var P=w.index+(p?w[1].length:0),x=w.index+w[0].length,A=y,j=b,_=i.length;A<_&&j<x;++A)P>=(j+=i[A].length)&&(++y,b=j);if(i[y]instanceof r||i[A-1].greedy)continue;k=A-y,v=e.slice(b,j),w.index-=b}if(w){p&&(m=w[1].length);var x=(P=w.index+m)+(w=w[0].slice(m)).length,C=v.slice(0,P),E=v.slice(x),N=[y,k];C&&N.push(C);var S=new r(l,c?a.tokenize(w,c):w,h,w,d);N.push(S),E&&N.push(E),Array.prototype.splice.apply(i,N)}}}}}return i},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;_self.postMessage(a.highlight(r,a.languages[n],n)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,n=t.getAttribute("data-src"),r=t,i=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(a=(t.className.match(i)||[,""])[1]),!a){var s=(n.match(/\.(\w+)$/)||[,""])[1];a=e[s]||s}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading…",t.appendChild(l);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(l.textContent=o.responseText,Prism.highlightElement(l)):o.status>=400?l.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:l.textContent="✖ Error: File does not exist or is empty")},o.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}();

// prism-normalize-whitespace
!function(){function e(e){this.defaults=r({},e)}function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function t(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="  ".charCodeAt(0)&&(n+=3);return e.length+n}if("undefined"!=typeof self&&self.Prism&&self.document){var r=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=r(this.defaults,e)},normalize:function(e,t){t=r(this.defaults,t);for(var i in t){var o=n(i);"normalize"!==i&&"setDefaults"!==o&&t[i]&&this[o]&&(e=this[o].call(this,e,t[i]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g")," ")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(new RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join(" ")+"$&")},breakLines:function(e,n){n=n===!0?80:0|n||80;for(var r=e.split("\n"),i=0;i<r.length;++i)if(!(t(r[i])<=n)){for(var o=r[i].split(/(\s+)/g),a=0,s=0;s<o.length;++s){var l=t(o[s]);a+=l,a>n&&(o[s]="\n"+o[s],a=l)}r[i]=o.join("")}return r.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=e.element.parentNode,t=/\bno-whitespace-normalization\b/;if(!(!e.code||!n||"pre"!==n.nodeName.toLowerCase()||e.settings&&e.settings["whitespace-normalization"]===!1||t.test(n.className)||t.test(e.element.className))){for(var r=n.childNodes,i="",o="",a=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<r.length;++l){var c=r[l];c==e.element?a=!0:"#text"===c.nodeName&&(a?o+=c.nodeValue:i+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=i+e.element.innerHTML+o;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=i+e.code+o,e.code=s.normalize(e.code,e.settings)}})}}();

function Swipe(n,t){"use strict";function e(){w=x.children,m=w.length,w.length<2&&(t.continuous=!1),f.transitions&&t.continuous&&w.length<3&&(x.appendChild(w[0].cloneNode(!0)),x.appendChild(x.children[1].cloneNode(!0)),w=x.children),E=new Array(w.length),p=n.getBoundingClientRect().width||n.offsetWidth,x.style.width=w.length*p+"px";for(var e=w.length;e--;){var i=w[e];i.style.width=p+"px",i.setAttribute("data-index",e),f.transitions&&(i.style.left=e*-p+"px",a(e,b>e?-p:b<e?p:0,0))}t.continuous&&f.transitions&&(a(s(b-1),-p,0),a(s(b+1),p,0)),f.transitions||(x.style.left=b*-p+"px"),n.style.visibility="visible"}function i(){t.continuous?r(b-1):b&&r(b-1)}function o(){t.continuous?r(b+1):b<w.length-1&&r(b+1)}function s(n){return(w.length+n%w.length)%w.length}function r(n,e){if(b!=n){if(f.transitions){var i=Math.abs(b-n)/(b-n);if(t.continuous){var o=i;(i=-E[s(n)]/p)!==o&&(n=-i*w.length+n)}for(var r=Math.abs(b-n)-1;r--;)a(s((n>b?n:b)-r-1),p*i,0);n=s(n),a(b,p*i,e||g),a(n,0,e||g),t.continuous&&a(s(n-i),-p*i,0)}else n=s(n),c(b*-p,n*-p,e||g);b=n,h(t.callback&&t.callback(b,w[b]))}}function a(n,t,e){u(n,t,e),E[n]=t}function u(n,t,e){var i=w[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function c(n,e,i){if(i)var o=+new Date,s=setInterval(function(){var r=+new Date-o;if(r>i)return x.style.left=e+"px",L&&d(),t.transitionEnd&&t.transitionEnd.call(event,b,w[b]),void clearInterval(s);x.style.left=(e-n)*(Math.floor(r/i*100)/100)+n+"px"},4);else x.style.left=e+"px"}function d(){T=setTimeout(o,L)}function l(){L=0,clearTimeout(T)}var v=function(){},h=function(n){setTimeout(n||v,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(n){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in t)if(void 0!==n.style[t[e]])return!0;return!1}(document.createElement("swipe"))};if(n){var w,E,p,m,x=n.children[0];t=t||{};var b=parseInt(t.startSlide,10)||0,g=t.speed||300;t.continuous=void 0===t.continuous||t.continuous;var T,y,L=t.auto||0,k={},D={},M={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":h(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":h(this.transitionEnd(n));break;case"resize":h(e)}t.stopPropagation&&n.stopPropagation()},start:function(n){var t=n.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,D={},x.addEventListener("touchmove",this,!1),x.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)){t.disableScroll&&n.preventDefault();var e=n.touches[0];D={x:e.pageX-k.x,y:e.pageY-k.y},void 0===y&&(y=!!(y||Math.abs(D.x)<Math.abs(D.y))),y||(n.preventDefault(),l(),t.continuous?(u(s(b-1),D.x+E[s(b-1)],0),u(b,D.x+E[b],0),u(s(b+1),D.x+E[s(b+1)],0)):(D.x=D.x/(!b&&D.x>0||b==w.length-1&&D.x<0?Math.abs(D.x)/p+1:1),u(b-1,D.x+E[b-1],0),u(b,D.x+E[b],0),u(b+1,D.x+E[b+1],0)))}},end:function(n){var e=+new Date-k.time,i=Number(e)<250&&Math.abs(D.x)>20||Math.abs(D.x)>p/2,o=!b&&D.x>0||b==w.length-1&&D.x<0;t.continuous&&(o=!1);var r=D.x<0;y||(i&&!o?(r?(t.continuous?(a(s(b-1),-p,0),a(s(b+2),p,0)):a(b-1,-p,0),a(b,E[b]-p,g),a(s(b+1),E[s(b+1)]-p,g),b=s(b+1)):(t.continuous?(a(s(b+1),p,0),a(s(b-2),-p,0)):a(b+1,p,0),a(b,E[b]+p,g),a(s(b-1),E[s(b-1)]+p,g),b=s(b-1)),t.callback&&t.callback(b,w[b])):t.continuous?(a(s(b-1),-p,g),a(b,0,g),a(s(b+1),p,g)):(a(b-1,-p,g),a(b,0,g),a(b+1,p,g))),x.removeEventListener("touchmove",M,!1),x.removeEventListener("touchend",M,!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==b&&(L&&d(),t.transitionEnd&&t.transitionEnd.call(n,b,w[b]))}};return e(),L&&d(),f.addEventListener?(f.touch&&x.addEventListener("touchstart",M,!1),f.transitions&&(x.addEventListener("webkitTransitionEnd",M,!1),x.addEventListener("msTransitionEnd",M,!1),x.addEventListener("oTransitionEnd",M,!1),x.addEventListener("otransitionend",M,!1),x.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(n,t){l(),r(n,t)},prev:function(){l(),i()},next:function(){l(),o()},stop:function(){l()},getPos:function(){return b},getNumSlides:function(){return m},kill:function(){l(),x.style.width="",x.style.left="";for(var n=w.length;n--;){var t=w[n];t.style.width="",t.style.left="",f.transitions&&u(n,0,0)}f.addEventListener?(x.removeEventListener("touchstart",M,!1),x.removeEventListener("webkitTransitionEnd",M,!1),x.removeEventListener("msTransitionEnd",M,!1),x.removeEventListener("oTransitionEnd",M,!1),x.removeEventListener("otransitionend",M,!1),x.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null}}}}(window.jQuery||window.Zepto)&&function(n){n.fn.Swipe=function(t){return this.each(function(){n(this).data("Swipe",new Swipe(n(this)[0],t))})}}(window.jQuery||window.Zepto);

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
        //app.slider.stop();
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
        //app.slider.begin();
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