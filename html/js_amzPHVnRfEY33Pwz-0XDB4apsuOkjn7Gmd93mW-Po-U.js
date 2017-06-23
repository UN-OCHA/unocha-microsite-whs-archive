/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
;
var defaultOptions = {
  date: "June 7, 2087 15:03:25",
  refresh: 1000,
  offset: 0,
  onEnd: function() {
    return;
  },
  render: function (date) {
    this.el.innerHTML = date.years + " years, " +
                        date.days  + " days, " +
                        this.leadingZeros(date.hours) + " hours, " +
                        this.leadingZeros(date.min) + " min and " +
                        this.leadingZeros(date.sec) + " sec";
  }
};

/**
 * Countdown constructor
 * @param {HTMLElement} el      DOM node of the countdown
 * @param {Object}      options (optional) Options for the plugin
 */
var Countdown = function(el, options) {

  /**
   * Reference to the DOM element
   * @type {HTMLElement}
   */
  this.el = el;

  /**
   * Options of the countdown plugin
   * @type {Object}
   */
  this.options = {};

  /**
   * Interval reference or false if counter is stopped
   * @type {Mixed}
   */
  this.interval = false;

  // merge default options and options into this.options
  this.mergeOptions = function(options) {
    for (var i in defaultOptions) {
      if (defaultOptions.hasOwnProperty(i)) {
        this.options[i] = typeof options[i] !== 'undefined' ? options[i] : defaultOptions[i];

        if (i === 'date' && typeof this.options.date !== 'object') {
          this.options.date = new Date(this.options.date);
        }

        // bind context for functions
        if (typeof this.options[i] === 'function') {
          this.options[i] = this.options[i].bind(this);
        }
      }
    }
    if (typeof this.options.date !== 'object') {
      this.options.date = new Date(this.options.date);
    }
  }.bind(this);

  this.mergeOptions(options);
  

  /**
   * Get the difference between now and the end date
   * @return {Object} Object with the diff information (years, days, hours, min, sec, millisec)
   */
  this.getDiffDate = function() {
    var diff = (this.options.date.getTime() - Date.now() + this.options.offset) / 1000;

    var dateData = {
      years:    0,
      days:     0,
      hours:    0,
      min:      0,
      sec:      0,
      millisec: 0
    };

    if (diff <= 0) {
      if (this.interval) {
        this.stop();
        this.options.onEnd();
      }
      return dateData;
    }

    if (diff >= (365.25 * 86400)) {
      dateData.years = Math.floor(diff / (365.25 * 86400));
      diff -= dateData.years * 365.25 * 86400;
    }

    if (diff >= 86400) {
      dateData.days = Math.floor(diff / 86400);
      diff -= dateData.days * 86400;
    }

    if (diff >= 3600) {
      dateData.hours = Math.floor(diff / 3600);
      diff -= dateData.hours * 3600;
    }

    if (diff >= 60) {
      dateData.min = Math.floor(diff / 60);
      diff -= dateData.min * 60;
    }

    dateData.sec = Math.round(diff);

    dateData.millisec = diff % 1 * 1000;

    return dateData;
  }.bind(this);

  /**
   * Add leading zeros to a number
   * @param  {Number} num    Input number
   * @param  {Number} length Length of the desired output
   * @return {String}        String of the desired length with leading zeros
   */
  this.leadingZeros = function(num, length) {
    length = length || 2;
    num = String(num);
    if (num.length > length) {
      return num;
    }
    return (Array(length + 1).join('0') + num).substr(-length);
  };

  /**
   * Update the end date of the countdown
   * @param  {Mixed}     newDate Date object or a String/Number that can be passed to the Date constructor
   * @return {Countdown}         Countdown instance
   */
  this.update = function(newDate) {
    if (typeof newDate !== 'object') {
      newDate = new Date(newDate);
    }
    this.options.date = newDate;
    this.render();
    return this;
  }.bind(this);

  /**
   * Stop the countdown refresh / rerender
   * @return {Countdown} Countdown instance
   */
  this.stop = function() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = false;
    }
    return this;
  }.bind(this);

  /**
   * Render the countdown
   * @return {Countdown} Countdown instance
   */
  this.render = function() {
    this.options.render(this.getDiffDate());
    return this;
  }.bind(this);

  /**
   * Start the countdown
   * @return {Countdown} Countdown instance
   */
  this.start = function() {
    // don't start if the countdown is already started
    if (this.interval) { return; }

    this.render();

    if (this.options.refresh) {
      this.interval = setInterval(this.render, this.options.refresh);
    }

    return this;
  }.bind(this);

  /**
   * Update the offset
   * @param  {Number}    offset New offset in ms
   * @return {Countdown}        Countdown instance
   */
  this.updateOffset = function(offset) {
    this.options.offset = offset;
    return this;
  }.bind(this);


  /**
   * Restart the countdown and update options
   */
  this.restart = function (options) {
    this.mergeOptions(options);
    this.interval = false;
    this.start();
    return this;
  }.bind(this);


  // initial start of the countdown or initial render
  this.start();
};

var NAME = 'countdown';
var DATA_ATTR = 'date';

jQuery.fn.countdown = function(options) {
  return $.each(this, function(i, el) {
    var $el = $(el);
    if (!$el.data(NAME)) {
      // allow setting the date via the data-date attribute
      if ($el.data(DATA_ATTR)) {
        options.date = $el.data(DATA_ATTR);
      }
      $el.data(NAME, new Countdown(el, options));
    }
  });
};

;
/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});;
function onYouTubePlayerAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
if (function() {
    function t() {
        E.keyboardSupport && c("keydown", s)
    }
    function e() {
        if (!O && document.body) {
            O = !0;
            var e = document.body, i = document.documentElement, n = window.innerHeight, o = e.scrollHeight;
            if (A = document.compatMode.indexOf("CSS") >= 0 ? i : e, P = e, t(), top != self)
                Q = !0;
            else if (o > n && (e.offsetHeight <= n || i.offsetHeight <= n)) {
                var s = document.createElement("div");
                s.setAttribute("id", "sscr"), s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + A.scrollHeight + "px", document.body.appendChild(s);
                var r;
                S = function() {
                    r || (r = setTimeout(function() {
                        $ || (s.style.height = "0", s.style.height = A.scrollHeight + "px", r = null)
                    }, 500))
                }, setTimeout(S, 10), c("resize", S);
                var a = {attributes: !0, childList: !0, characterData: !1};
                if (C = new H(S), C.observe(e, a), A.offsetHeight <= n) {
                    var l = document.createElement("div");
                    l.style.clear = "both", e.appendChild(l)
                }
            }
            E.fixedBackground || $ || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
        }
    }
    function i() {
        C && C.disconnect(), f(F, o), f("mousedown", r), f("keydown", s), f("resize", S), f("load", e)
    }
    function n(t, e, i) {
        if (g(e, i), 1 != E.accelerationMax) {
            var n = Date.now(), o = n - R;
            if (o < E.accelerationDelta) {
                var s = (1 + 50 / o) / 2;
                s > 1 && (s = Math.min(s, E.accelerationMax), e *= s, i *= s)
            }
            R = Date.now()
        }
        if (M.push({x: e, y: i, lastX: 0 > e ? .99 : -.99, lastY: 0 > i ? .99 : -.99, start: Date.now()}), !N) {
            var r = t === document.body, a = function(n) {
                for (var o = Date.now(), s = 0, l = 0, h = 0; h < M.length; h++) {
                    var u = M[h], d = o - u.start, p = d >= E.animationTime, c = p ? 1 : d / E.animationTime;
                    E.pulseAlgorithm && (c = x(c));
                    var f = u.x * c - u.lastX >> 0, m = u.y * c - u.lastY >> 0;
                    s += f, l += m, u.lastX += f, u.lastY += m, p && (M.splice(h, 1), h--)
                }
                r ? window.scrollBy(s, l) : (s && (t.scrollLeft += s), l && (t.scrollTop += l)), e || i || (M = []), M.length ? B(a, t, 1e3 / E.frameRate + 1) : N = !1
            };
            B(a, t, 0), N = !0
        }
    }
    function o(t) {
        O || e();
        var i = t.target, o = h(i);
        if (!o || t.defaultPrevented || t.ctrlKey)
            return!0;
        if (m(P, "embed") || m(i, "embed") && /\.pdf/i.test(i.src) || m(P, "object"))
            return!0;
        var s = -t.wheelDeltaX || t.deltaX || 0, r = -t.wheelDeltaY || t.deltaY || 0;
        return z && (t.wheelDeltaX && v(t.wheelDeltaX, 120) && (s = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), t.wheelDeltaY && v(t.wheelDeltaY, 120) && (r = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), s || r || (r = -t.wheelDelta || 0), 1 === t.deltaMode && (s *= 40, r *= 40), !E.touchpadSupport && y(r) ? !0 : (Math.abs(s) > 1.2 && (s *= E.stepSize / 120), Math.abs(r) > 1.2 && (r *= E.stepSize / 120), n(o, s, r), t.preventDefault(), void a())
    }
    function s(t) {
        var e = t.target, i = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== L.spacebar;
        document.contains(P) || (P = document.activeElement);
        var o = /^(textarea|select|embed|object)$/i, s = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (o.test(e.nodeName) || m(e, "input") && !s.test(e.type) || m(P, "video") || b(t) || e.isContentEditable || t.defaultPrevented || i)
            return!0;
        if ((m(e, "button") || m(e, "input") && s.test(e.type)) && t.keyCode === L.spacebar)
            return!0;
        var r, l = 0, u = 0, d = h(P), p = d.clientHeight;
        switch (d == document.body && (p = window.innerHeight), t.keyCode) {
            case L.up:
                u = -E.arrowScroll;
                break;
            case L.down:
                u = E.arrowScroll;
                break;
            case L.spacebar:
                r = t.shiftKey ? 1 : -1, u = -r * p * .9;
                break;
            case L.pageup:
                u = .9 * -p;
                break;
            case L.pagedown:
                u = .9 * p;
                break;
            case L.home:
                u = -d.scrollTop;
                break;
            case L.end:
                var c = d.scrollHeight - d.scrollTop - p;
                u = c > 0 ? c + 10 : 0;
                break;
            case L.left:
                l = -E.arrowScroll;
                break;
            case L.right:
                l = E.arrowScroll;
                break;
            default:
                return!0
        }
        n(d, l, u), t.preventDefault(), a()
    }
    function r(t) {
        P = t.target
    }
    function a() {
        clearTimeout(Y), Y = setInterval(function() {
            V = {}
        }, 1e3)
    }
    function l(t, e) {
        for (var i = t.length; i--; )
            V[W(t[i])] = e;
        return e
    }
    function h(t) {
        var e = [], i = document.body, n = A.scrollHeight;
        do {
            var o = V[W(t)];
            if (o)
                return l(e, o);
            if (e.push(t), n === t.scrollHeight) {
                var s = d(A) && d(i), r = s || p(A);
                if (Q && u(A) || !Q && r)
                    return l(e, q())
            } else if (u(t) && p(t))
                return l(e, t)
        } while (t = t.parentElement)
    }
    function u(t) {
        return t.clientHeight + 10 < t.scrollHeight
    }
    function d(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return"hidden" !== e
    }
    function p(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return"scroll" === e || "auto" === e
    }
    function c(t, e) {
        window.addEventListener(t, e, !1)
    }
    function f(t, e) {
        window.removeEventListener(t, e, !1)
    }
    function m(t, e) {
        return(t.nodeName || "").toLowerCase() === e.toLowerCase()
    }
    function g(t, e) {
        t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, (D.x !== t || D.y !== e) && (D.x = t, D.y = e, M = [], R = 0)
    }
    function y(t) {
        return t ? (k.length || (k = [t, t, t]), t = Math.abs(t), k.push(t), k.shift(), clearTimeout(I), I = setTimeout(function() {
            window.localStorage && (localStorage.SS_deltaBuffer = k.join(","))
        }, 1e3), !w(120) && !w(100)) : void 0
    }
    function v(t, e) {
        return Math.floor(t / e) == t / e
    }
    function w(t) {
        return v(k[0], t) && v(k[1], t) && v(k[2], t)
    }
    function b(t) {
        var e = t.target, i = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
            do
                if (i = e.classList && e.classList.contains("html5-video-controls"))
                    break;
            while (e = e.parentNode);
        return i
    }
    function T(t) {
        var e, i, n;
        return t *= E.pulseScale, 1 > t ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * E.pulseNormalize
    }
    function x(t) {
        return t >= 1 ? 1 : 0 >= t ? 0 : (1 == E.pulseNormalize && (E.pulseNormalize /= T(1)), T(t))
    }
    function _(t) {
        for (var e in t)
            j.hasOwnProperty(e) && (E[e] = t[e])
    }
    var P, C, S, Y, I, j = {frameRate: 150, animationTime: 400, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !1, fixedBackground: !0, excluded: ""}, E = j, $ = !1, Q = !1, D = {x: 0, y: 0}, O = !1, A = document.documentElement, k = [], z = /^Mac/.test(navigator.platform), L = {left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36}, M = [], N = !1, R = Date.now(), W = function() {
        var t = 0;
        return function(e) {
            return e.uniqueID || (e.uniqueID = t++)
        }
    }(), V = {};
    window.localStorage && localStorage.SS_deltaBuffer && (k = localStorage.SS_deltaBuffer.split(","));
    var F, B = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t, e, i) {
            window.setTimeout(t, i || 1e3 / 60)
        }
    }(), H = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, q = function() {
        var t;
        return function() {
            if (!t) {
                var e = document.createElement("div");
                e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                var i = document.body.scrollTop;
                document.documentElement.scrollTop;
                window.scrollBy(0, 3), t = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
            }
            return t
        }
    }(), X = window.navigator.userAgent, U = /Edge/.test(X), G = /chrome/i.test(X) && !U, K = /safari/i.test(X) && !U, Z = /mobile/i.test(X), J = (G || K) && !Z;
    "onwheel"in document.createElement("div") ? F = "wheel" : "onmousewheel"in document.createElement("div") && (F = "mousewheel"), F && J && (c(F, o), c("mousedown", r), c("load", e)), _.destroy = i, window.SmoothScrollOptions && _(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
        return _
    }) : "object" == typeof exports ? module.exports = _ : window.SmoothScroll = _
}(), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
        for (var i in e)
            if (void 0 !== t.style[i])
                return{end: e[i]};
        return!1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1, n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var o = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }})
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this), o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]', n = function(e) {
        t(e).on("click", i, this.close)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this), s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.button"), s = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function(e) {
        var i = "disabled", n = this.$element, o = n.is("input") ? "val" : "html", s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
            n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.carousel"), s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e), r = "string" == typeof e ? e : s.slide;
            o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0}, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e), n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap)
            return e;
        var o = "prev" == t ? -1 : 1, s = (i + o) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var o = this.$element.find(".item.active"), s = n || this.getItemForDirection(e, o), r = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active"))
            return this.sliding = !1;
        var h = s[0], u = t.Event("slide.bs.carousel", {relatedTarget: h, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {relatedTarget: h, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var o = function(i) {
        var n, o = t(this), s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()), a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }
    function i(e) {
        return this.each(function() {
            var i = t(this), o = i.data("bs.collapse"), s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var s = e(o), r = s.data("bs.collapse"), a = r ? "toggle" : o.data();
        i.call(s, a)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }
    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(s).each(function() {
            var n = t(this), o = e(n), s = {relatedTarget: this};
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }
    function n(e) {
        return this.each(function() {
            var i = t(this), n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', r = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.5", r.prototype.toggle = function(n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o), r = s.hasClass("open");
            if (i(), !r) {
                "ontouchstart"in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {relatedTarget: this};
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented())
                    return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return!1
        }
    }, r.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n), r = o.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which)
                    return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a", l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), +function(t) {
    "use strict";
    function e(e, n) {
        return this.each(function() {
            var o = t(this), s = o.data("bs.modal"), r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else
            e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""})
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this), o = n.attr("href"), s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), r = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.tooltip"), s = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: {selector: "body", padding: 0}}, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {click: !1, hover: !1, focus: !1}, this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--; ) {
            var r = o[s];
            if ("click" == r)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay, hide: e.delay}), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return!0;
        return!1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n)
                return;
            var o = this, s = this.tip(), r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, h = l.test(a);
            h && (a = a.replace(l, "") || "top"), s.detach().css({top: 0, left: 0, display: "block"}).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(), d = s[0].offsetWidth, p = s[0].offsetHeight;
            if (h) {
                var c = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + p > f.bottom ? "top" : "top" == a && u.top - p < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, s.removeClass(c).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, p);
            this.applyPlacement(m, a);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(), o = n[0].offsetWidth, s = n[0].offsetHeight, r = parseInt(n.css("margin-top"), 10), a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({using: function(t) {
                n.css({top: Math.round(t.top), left: Math.round(t.left)})
            }}, e), 0), n.addClass("in");
        var l = n[0].offsetWidth, h = n[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var u = this.getViewportAdjustedDelta(i, e, l, h);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(i), p = d ? 2 * u.left - o + l : 2 * u.top - s + h, c = d ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][c], d)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
                t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this, s = t(this.$tip), r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0], n = "BODY" == i.tagName, o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var s = n ? {top: 0, left: 0} : e.offset(), r = {scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = n ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, o, r, a, s)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return"bottom" == t ? {top: e.top + e.height, left: e.left + e.width / 2 - i / 2} : "top" == t ? {top: e.top - n, left: e.left + e.width / 2 - i / 2} : "left" == t ? {top: e.top + e.height / 2 - n / 2, left: e.left - i} : {top: e.top + e.height / 2 - n / 2, left: e.left + e.width}
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)
            return o;
        var s = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll, l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var h = e.left - s, u = e.left + s + i;
            h < r.left ? o.left = r.left - h : u > r.right && (o.left = r.left + r.width - u)
        }
        return o
    }, i.prototype.getTitle = function() {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.popover"), s = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), +function(t) {
    "use strict";
    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }
    function i(i) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.scrollspy"), s = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this, i = "offset", n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this), o = e.data("target") || e.attr("href"), s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [[s[i]().top + n, o]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), n = this.options.offset + i - this.$scrollElement.height(), o = this.offsets, s = this.targets, r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n)
            return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0])
            return this.activeTarget = null, this.clear();
        for (t = o.length; t--; )
            r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}), r = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({type: "shown.bs.tab", relatedTarget: o[0]})
                })
            }
        }
    }, i.prototype.activate = function(e, n, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = n.find("> .active"), a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var o = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this), o = n.data("bs.affix"), s = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {offset: 0, target: window}, i.prototype.getState = function(t, e, i, n) {
        var o = this.$target.scrollTop(), s = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed)
            return i > o ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != i ? o + this.unpin <= s.top ? !1 : "bottom" : t - n >= o + r ? !1 : "bottom";
        var a = null == this.affixed, l = a ? o : s.top, h = a ? r : e;
        return null != i && i >= o ? "top" : null != n && l + h >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), n = this.options.offset, o = n.top, s = n.bottom, r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented())
                    return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: r - e - s})
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this), n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), function(t) {
    t.fn.downCount = function(e, i) {
        function n() {
            var t = new Date(o.date), e = r(), n = t - e;
            if (0 > n)
                return clearInterval(a), void(i && "function" == typeof i && i());
            var l = 1e3, h = 60 * l, u = 60 * h, d = 24 * u, p = Math.floor(n / d), c = Math.floor(n % d / u), f = Math.floor(n % u / h), m = Math.floor(n % h / l);
            p = String(p).length >= 2 ? p : "0" + p, c = String(c).length >= 2 ? c : "0" + c, f = String(f).length >= 2 ? f : "0" + f, m = String(m).length >= 2 ? m : "0" + m;
            var g = 1 === p ? "day" : "days", y = 1 === c ? "hour" : "hours", v = 1 === f ? "minute" : "minutes", w = 1 === m ? "second" : "seconds";
            s.find(".days").text(p), s.find(".hours").text(c), s.find(".minutes").text(f), s.find(".seconds").text(m), s.find(".days_ref").text(g), s.find(".hours_ref").text(y), s.find(".minutes_ref").text(v), s.find(".seconds_ref").text(w)
        }
        var o = t.extend({date: null, offset: null}, e);
        o.date || t.error("Date is not defined."), Date.parse(o.date) || t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        var s = this, r = function() {
            var t = new Date, e = t.getTime() + 6e4 * t.getTimezoneOffset(), i = new Date(e + 36e5 * o.offset);
            return i
        }, a = setInterval(n, 1e3)
    }
}(jQuery), !function(t) {
    t.flexslider = function(e, i) {
        var n = t(e);
        n.vars = t.extend({}, t.flexslider.defaults, i);
        var o, s = n.vars.namespace, r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, a = ("ontouchstart"in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, l = "click touchend MSPointerUp keyup", h = "", u = "vertical" === n.vars.direction, d = n.vars.reverse, p = n.vars.itemWidth > 0, c = "fade" === n.vars.animation, f = "" !== n.vars.asNavFor, m = {}, g = !0;
        t.data(e, "flexslider", n), m = {init: function() {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = t(n.vars.selector, n), n.container = t(n.containerSelector, n), n.count = n.slides.length, n.syncExists = t(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = u ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !c && n.vars.useCSS && function() {
                    var t = document.createElement("div"), e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]])
                            return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return!1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === t(n.vars.customDirectionNav).length && t(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && m.controlNav.setup(), n.vars.directionNav && m.directionNav.setup(), n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                    var e = t.keyCode;
                    if (!n.animating && (39 === e || 37 === e)) {
                        var i = 39 === e ? n.getTarget("next") : 37 === e ? n.getTarget("prev") : !1;
                        n.flexAnimate(i, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function(t, e, i, o) {
                    t.preventDefault();
                    var s = n.getTarget(0 > e ? "next" : "prev");
                    n.flexAnimate(s, n.vars.pauseOnAction)
                }), n.vars.pausePlay && m.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && m.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                    n.manualPlay || n.manualPause || n.pause()
                }, function() {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && m.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), f && m.asNav.setup(), a && n.vars.touch && m.touch(), (!c || c && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                    n.vars.start(n)
                }, 200)
            }, asNav: {setup: function() {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (e._slider = n, n.slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var i = t(this), o = i.index();
                            t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < o ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(l, function(e) {
                        e.preventDefault();
                        var i = t(this), o = i.index(), r = i.offset().left - t(n).scrollLeft();
                        0 >= r && i.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(s + "active-slide") || (n.direction = n.currentItem < o ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }}, controlNav: {setup: function() {
                    n.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                }, setupPaging: function() {
                    var e, i, o = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", r = 1;
                    if (n.controlNavScaffold = t('<ol class="' + s + "control-nav " + s + o + '"></ol>'), n.pagingCount > 1)
                        for (var a = 0; a < n.pagingCount; a++) {
                            if (i = n.slides.eq(a), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                var u = i.attr("data-thumbcaption");
                                "" !== u && void 0 !== u && (e += '<span class="' + s + 'caption">' + u + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + e + "</li>"), r++
                        }
                    n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function(e) {
                        if (e.preventDefault(), "" === h || h === e.type) {
                            var i = t(this), o = n.controlNav.index(i);
                            i.hasClass(s + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                        }
                        "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                }, setupManual: function() {
                    n.controlNav = n.manualControls, m.controlNav.active(), n.controlNav.bind(l, function(e) {
                        if (e.preventDefault(), "" === h || h === e.type) {
                            var i = t(this), o = n.controlNav.index(i);
                            i.hasClass(s + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                        }
                        "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                }, set: function() {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = t("." + s + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                }, active: function() {
                    n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
                }, update: function(e, i) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(), m.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : m.controlNav.active()
                }}, directionNav: {setup: function() {
                    var e = t('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + s + "direction-nav li a", n)), m.directionNav.update(), n.directionNav.bind(l, function(e) {
                        e.preventDefault();
                        var i;
                        ("" === h || h === e.type) && (i = n.getTarget(t(this).hasClass(s + "next") ? "next" : "prev"), n.flexAnimate(i, n.vars.pauseOnAction)), "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                }, update: function() {
                    var t = s + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + s + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + s + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                }}, pausePlay: {setup: function() {
                    var e = t('<div class="' + s + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + s + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + s + "pauseplay a", n)), m.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function(e) {
                        e.preventDefault(), ("" === h || h === e.type) && (t(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === h && (h = e.type), m.setToClearWatchedEvent()
                    })
                }, update: function(t) {
                    "play" === t ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
                }}, touch: function() {
                function t(t) {
                    t.stopPropagation(), n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), x = 0, h = u ? n.h : n.w, m = Number(new Date), l = p && d && n.animatingTo === n.last ? 0 : p && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * h : (n.currentSlide + n.cloneOffset) * h)
                }
                function i(t) {
                    t.stopPropagation();
                    var i = t.target._slider;
                    if (i) {
                        var n = -t.translationX, o = -t.translationY;
                        return x += u ? o : n, f = x, w = u ? Math.abs(x) < Math.abs(-n) : Math.abs(x) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            e._gesture.stop()
                        }) : void((!w || Number(new Date) - m > 500) && (t.preventDefault(), !c && i.transitions && (i.vars.animationLoop || (f = x / (0 === i.currentSlide && 0 > x || i.currentSlide === i.last && x > 0 ? Math.abs(x) / h + 2 : 1)), i.setProps(l + f, "setTouch"))))
                    }
                }
                function o(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !w && null !== f) {
                            var i = d ? -f : f, n = e.getTarget(i > 0 ? "next" : "prev");
                            e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > h / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : c || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        s = null, a = null, f = null, l = null, x = 0
                    }
                }
                var s, a, l, h, f, m, g, y, v, w = !1, b = 0, T = 0, x = 0;
                r ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = n, e.addEventListener("MSGestureChange", i, !1), e.addEventListener("MSGestureEnd", o, !1)) : (g = function(t) {
                    n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), h = u ? n.h : n.w, m = Number(new Date), b = t.touches[0].pageX, T = t.touches[0].pageY, l = p && d && n.animatingTo === n.last ? 0 : p && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : p && n.currentSlide === n.last ? n.limit : p ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * h : (n.currentSlide + n.cloneOffset) * h, s = u ? T : b, a = u ? b : T, e.addEventListener("touchmove", y, !1), e.addEventListener("touchend", v, !1))
                }, y = function(t) {
                    b = t.touches[0].pageX, T = t.touches[0].pageY, f = u ? s - T : s - b, w = u ? Math.abs(f) < Math.abs(b - a) : Math.abs(f) < Math.abs(T - a);
                    var e = 500;
                    (!w || Number(new Date) - m > e) && (t.preventDefault(), !c && n.transitions && (n.vars.animationLoop || (f /= 0 === n.currentSlide && 0 > f || n.currentSlide === n.last && f > 0 ? Math.abs(f) / h + 2 : 1), n.setProps(l + f, "setTouch")))
                }, v = function(t) {
                    if (e.removeEventListener("touchmove", y, !1), n.animatingTo === n.currentSlide && !w && null !== f) {
                        var i = d ? -f : f, o = n.getTarget(i > 0 ? "next" : "prev");
                        n.canAdvance(o) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > h / 2) ? n.flexAnimate(o, n.vars.pauseOnAction) : c || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", v, !1), s = null, a = null, f = null, l = null
                }, e.addEventListener("touchstart", g, !1))
            }, resize: function() {
                !n.animating && n.is(":visible") && (p || n.doMath(), c ? m.smoothHeight() : p ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : u ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && m.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            }, smoothHeight: function(t) {
                if (!u || c) {
                    var e = c ? n : n.viewport;
                    t ? e.animate({height: n.slides.eq(n.animatingTo).height()}, t) : e.height(n.slides.eq(n.animatingTo).height())
                }
            }, sync: function(e) {
                var i = t(n.vars.sync).data("flexslider"), o = n.animatingTo;
                switch (e) {
                    case"animate":
                        i.flexAnimate(o, n.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        i.playing || i.asNav || i.play();
                        break;
                    case"pause":
                        i.pause()
                    }
            }, uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = t(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            }, pauseInvisible: {visProp: null, init: function() {
                    var t = m.pauseInvisible.getHiddenProp();
                    if (t) {
                        var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(e, function() {
                            m.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                }, isHidden: function() {
                    var t = m.pauseInvisible.getHiddenProp();
                    return t ? document[t] : !1
                }, getHiddenProp: function() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)
                        return"hidden";
                    for (var e = 0; e < t.length; e++)
                        if (t[e] + "Hidden"in document)
                            return t[e] + "Hidden";
                    return null
                }}, setToClearWatchedEvent: function() {
                clearTimeout(o), o = setTimeout(function() {
                    h = ""
                }, 3e3)
            }}, n.flexAnimate = function(e, i, o, r, l) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, l) || o) && n.is(":visible")) {
                if (f && r) {
                    var h = t(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, h.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next" : "prev", h.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e)
                        return n.currentItem = e, n.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && m.sync("animate"), n.vars.controlNav && m.controlNav.active(), p || n.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && m.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), c)
                    a ? (n.slides.eq(n.currentSlide).css({opacity: 0, zIndex: 1}), n.slides.eq(e).css({opacity: 1, zIndex: 2}), n.wrapup(w)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var g, y, v, w = u ? n.slides.filter(":first").height() : n.computedW;
                    p ? (g = n.vars.itemMargin, v = (n.itemW + g) * n.move * n.animatingTo, y = v > n.limit && 1 !== n.visible ? n.limit : v) : y = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? d ? (n.count + n.cloneOffset) * w : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? d ? 0 : (n.count + 1) * w : d ? (n.count - 1 - e + n.cloneOffset) * w : (e + n.cloneOffset) * w, n.setProps(y, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(w)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                        n.wrapup(w)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                        n.wrapup(w)
                    })
                }
                n.vars.smoothHeight && m.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function(t) {
            c || p || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function() {
            !n.animating && g && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function() {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && m.pausePlay.update("play"), n.syncExists && m.sync("pause")
        }, n.play = function() {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && m.pausePlay.update("pause"), n.syncExists && m.sync("play")
        }, n.stop = function() {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function(t, e) {
            var i = f ? n.pagingCount - 1 : n.last;
            return e ? !0 : f && n.currentItem === n.count - 1 && 0 === t && "prev" === n.direction ? !0 : f && 0 === n.currentItem && t === n.pagingCount - 1 && "next" !== n.direction ? !1 : t !== n.currentSlide || f ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && t === i && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === i && 0 === t && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function(t) {
            return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function(t, e, i) {
            var o = function() {
                var i = t ? t : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, o = function() {
                    if (p)
                        return"setTouch" === e ? t : d && n.animatingTo === n.last ? 0 : d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : i;
                    switch (e) {
                        case"setTotal":
                            return d ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                        case"setTouch":
                            return d ? t : t;
                        case"jumpEnd":
                            return d ? t : n.count * t;
                        case"jumpStart":
                            return d ? n.count * t : t;
                        default:
                            return t
                        }
                }();
                return-1 * o + "px"
            }();
            n.transitions && (o = u ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = o, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", o)
        }, n.setup = function(e) {
            if (c)
                n.slides.css({width: "100%", "float": "left", marginRight: "-100%", position: "relative"}), "init" === e && (a ? n.slides.css({opacity: 0, display: "block", webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease", zIndex: 1}).eq(n.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({opacity: 0, display: "block", zIndex: 1}).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({opacity: 0, display: "block", zIndex: 1}).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && m.smoothHeight();
            else {
                var i, o;
                "init" === e && (n.viewport = t('<div class="' + s + 'viewport"></div>').css({overflow: "hidden", position: "relative"}).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, d && (o = t.makeArray(n.slides).reverse(), n.slides = t(o), n.container.empty().append(n.slides))), n.vars.animationLoop && !p && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(m.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = t(n.vars.selector, n), i = d ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, u && !p ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(i * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function() {
                    n.doMath(), n.newSlides.css({width: n.computedW, "float": "left", display: "block"}), n.vars.smoothHeight && m.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            p || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
        }, n.doMath = function() {
            var t = n.slides.first(), e = n.vars.itemMargin, i = n.vars.minItems, o = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), p ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT : n.w, n.maxW = o ? o * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (o - 1)) / o : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function(t, e) {
            n.doMath(), p || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1),
                    n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === e && !p || n.pagingCount > n.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !p || n.pagingCount < n.controlNav.length) && (p && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), m.controlNav.update("remove", n.last))), n.vars.directionNav && m.directionNav.update()
        }, n.addSlide = function(e, i) {
            var o = t(e);
            n.count += 1, n.last = n.count - 1, u && d ? void 0 !== i ? n.slides.eq(n.count - i).after(o) : n.container.prepend(o) : void 0 !== i ? n.slides.eq(i).before(o) : n.container.append(o), n.update(i, "add"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function(e) {
            var i = isNaN(e) ? n.slides.index(t(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? t(e, n.slides).remove() : u && d ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(i, "remove"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, m.init()
    }, t(window).blur(function(t) {
        focused = !1
    }).focus(function(t) {
        focused = !0
    }), t.flexslider.defaults = {namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {
        }, before: function() {
        }, after: function() {
        }, end: function() {
        }, added: function() {
        }, removed: function() {
        }, init: function() {
        }}, t.fn.flexslider = function(e) {
        if (void 0 === e && (e = {}), "object" == typeof e)
            return this.each(function() {
                var i = t(this), n = e.selector ? e.selector : ".slides > li", o = i.find(n);
                1 === o.length && e.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
            });
        var i = t(this).data("flexslider");
        switch (e) {
            case"play":
                i.play();
                break;
            case"pause":
                i.pause();
                break;
            case"stop":
                i.stop();
                break;
            case"next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && i.flexAnimate(e, !0)
            }
    }
}(jQuery), !function(t) {
    function e() {
    }
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }
        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var h = this[a], u = t.data(h, e);
                        if (u)
                            if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var d = u[o].apply(u, r);
                                if (void 0 !== d)
                                    return d
                            } else
                                s("no such method '" + o + "' for " + e + " instance");
                        else
                            s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var s = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement, n = function() {
    };
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {
    };
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var s = {bind: n, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
}(window), function() {
    "use strict";
    function t() {
    }
    function e(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return-1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype, o = this, s = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n)
                n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else
            e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1)
            i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t), s = "object" == typeof i;
        for (n in o)
            o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, s = this.getListenersAsObject(t);
        for (o in s)
            s.hasOwnProperty(o) && (n = e(s[o], i), -1 !== n && s[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, s = t ? this.removeListener : this.addListener, r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--; )
                s.call(this, e, i[n]);
        else
            for (n in e)
                e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i)
            delete n[t];
        else if (t instanceof RegExp)
            for (e in n)
                n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else
            delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, s, r = this.getListenersAsObject(t);
        for (o in r)
            if (r.hasOwnProperty(o))
                for (n = r[o].length; n--; )
                    i = r[o][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = s, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, s = i.length; s > o; o++)
                if (e = i[o] + t, "string" == typeof n[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t, e) {
    function i(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function n() {
    }
    function o() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0, i = a.length; i > e; e++) {
            var n = a[e];
            t[n] = 0
        }
        return t
    }
    function s(e) {
        function n() {
            if (!p) {
                p = !0;
                var n = t.getComputedStyle;
                if (h = function() {
                    var t = n ? function(t) {
                        return n(t, null)
                    } : function(t) {
                        return t.currentStyle
                    };
                    return function(e) {
                        var i = t(e);
                        return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), u = e("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = h(o);
                    d = 200 === i(a.width), s.removeChild(o)
                }
            }
        }
        function s(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = h(t);
                if ("none" === e.display)
                    return o();
                var s = {};
                s.width = t.offsetWidth, s.height = t.offsetHeight;
                for (var r = s.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), p = 0, c = a.length; c > p; p++) {
                    var f = a[p], m = e[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    s[f] = isNaN(g) ? 0 : g
                }
                var y = s.paddingLeft + s.paddingRight, v = s.paddingTop + s.paddingBottom, w = s.marginLeft + s.marginRight, b = s.marginTop + s.marginBottom, T = s.borderLeftWidth + s.borderRightWidth, x = s.borderTopWidth + s.borderBottomWidth, _ = r && d, P = i(e.width);
                P !== !1 && (s.width = P + (_ ? 0 : y + T));
                var C = i(e.height);
                return C !== !1 && (s.height = C + (_ ? 0 : v + x)), s.innerWidth = s.width - (y + T), s.innerHeight = s.height - (v + x), s.outerWidth = s.width + w, s.outerHeight = s.height + b, s
            }
        }
        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%"))
                return i;
            var n = e.style, o = n.left, s = e.runtimeStyle, r = s && s.left;
            return r && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, r && (s.left = r), i
        }
        var h, u, d, p = !1;
        return s
    }
    var r = "undefined" == typeof console ? n : function(t) {
        console.error(t)
    }, a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], s) : "object" == typeof exports ? module.exports = s(require("desandro-get-style-property")) : t.getSize = s(t.getStyleProperty)
}(window), function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== s.readyState;
        e.isReady || i || n()
    }
    function n() {
        e.isReady = !0;
        for (var t = 0, i = r.length; i > t; t++) {
            var n = r[t];
            n()
        }
    }
    function o(o) {
        return"complete" === s.readyState ? n() : (o.bind(s, "DOMContentLoaded", i), o.bind(s, "readystatechange", i), o.bind(t, "load", i)), e
    }
    var s = t.document, r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function(t) {
    "use strict";
    function e(t, e) {
        return t[r](e)
    }
    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, s = n.length; s > o; o++)
            if (n[o] === t)
                return!0;
        return!1
    }
    function o(t, n) {
        return i(t), e(t, n)
    }
    var s, r = function() {
        if (t.matches)
            return"matches";
        if (t.matchesSelector)
            return"matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i], s = o + "MatchesSelector";
            if (t[s])
                return s
        }
    }();
    if (r) {
        var a = document.createElement("div"), l = e(a, "div");
        s = l ? e : o
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
}(Element.prototype), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function(t, e, i) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }, n.modulo = function(t, e) {
        return(t % e + e) % e
    };
    var o = Object.prototype.toString;
    n.isArray = function(t) {
        return"[object Array]" == o.call(t)
    }, n.makeArray = function(t) {
        var e = [];
        if (n.isArray(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    } : function(t, e) {
        for (var i = 0, n = t.length; n > i; i++)
            if (t[i] === e)
                return i;
        return-1
    }, n.removeFrom = function(t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    } : function(t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function() {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }
        var e;
        return t
    }(), n.getParent = function(t, e) {
        for (; t != document.body; )
            if (t = t.parentNode, i(t, e))
                return t
    }, n.getQueryElement = function(t) {
        return"string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        for (var o = [], s = 0, r = t.length; r > s; s++) {
            var a = t[s];
            if (n.isElement(a))
                if (e) {
                    i(a, e) && o.push(a);
                    for (var l = a.querySelectorAll(e), h = 0, u = l.length; u > h; h++)
                        o.push(l[h])
                } else
                    o.push(a)
        }
        return o
    }, n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, s = this;
            this[o] = setTimeout(function() {
                n.apply(s, e), delete s[o]
            }, i || 100)
        }
    }, n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var s = t.console;
    return n.htmlInit = function(i, o) {
        e(function() {
            for (var e = n.toDashed(o), r = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = r.length; h > l; l++) {
                var u, d = r[l], p = d.getAttribute(a);
                try {
                    u = p && JSON.parse(p)
                } catch (c) {
                    s && s.error("Error parsing " + a + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                    continue
                }
                var f = new i(d, u), m = t.jQuery;
                m && m.data(d, o, f)
            }
        })
    }, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, o, s) {
        return e(t, i, n, o, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function(t, e, i, n, o) {
    "use strict";
    function s(t) {
        for (var e in t)
            return!1;
        return e = null, !0
    }
    function r(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }
    function a(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return"-" + t.toLowerCase()
        })
    }
    var l = t.getComputedStyle, h = l ? function(t) {
        return l(t, null)
    } : function(t) {
        return t.currentStyle
    }, u = n("transition"), d = n("transform"), p = u && d, c = !!n("perspective"), f = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}[u], m = ["transform", "transition", "transitionDuration", "transitionProperty"], g = function() {
        for (var t = {}, e = 0, i = m.length; i > e; e++) {
            var o = m[e], s = n(o);
            s && s !== o && (t[o] = s)
        }
        return t
    }();
    o.extend(r.prototype, e.prototype), r.prototype._create = function() {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.getSize = function() {
        this.size = i(this.element)
    }, r.prototype.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = g[i] || i;
            e[n] = t[i]
        }
    }, r.prototype.getPosition = function() {
        var t = h(this.element), e = this.layout.options, i = e.isOriginLeft, n = e.isOriginTop, o = t[i ? "left" : "right"], s = t[n ? "top" : "bottom"], r = this.layout.size, a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.width : parseInt(o, 10), l = -1 != s.indexOf("%") ? parseFloat(s) / 100 * r.height : parseInt(s, 10);
        a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? r.paddingLeft : r.paddingRight, l -= n ? r.paddingTop : r.paddingBottom, this.position.x = a, this.position.y = l
    }, r.prototype.layoutPosition = function() {
        var t = this.layout.size, e = this.layout.options, i = {}, n = e.isOriginLeft ? "paddingLeft" : "paddingRight", o = e.isOriginLeft ? "left" : "right", s = e.isOriginLeft ? "right" : "left", r = this.position.x + t[n];
        i[o] = this.getXValue(r), i[s] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom", l = e.isOriginTop ? "top" : "bottom", h = e.isOriginTop ? "bottom" : "top", u = this.position.y + t[a];
        i[l] = this.getYValue(u), i[h] = "", this.css(i), this.emitEvent("layout", [this])
    }, r.prototype.getXValue = function(t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, r.prototype.getYValue = function(t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, r.prototype._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = parseInt(t, 10), s = parseInt(e, 10), r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i, l = e - n, h = {};
        h.transform = this.getTranslate(a, l), this.transition({to: h, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, r.prototype.getTranslate = function(t, e) {
        var i = this.layout.options;
        return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, c ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
    }, r.prototype.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, r.prototype.moveTo = p ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, r.prototype._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }, r.prototype._transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var y = "opacity," + a(g.transform || "transform");
    r.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({transitionProperty: y, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(f, this, !1))
    }, r.prototype.transition = r.prototype[u ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, r.prototype.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var v = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    r.prototype.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn, i = v[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], s(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var n = e.onEnd[i];
                n.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, r.prototype.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
    }, r.prototype._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    };
    var w = {transitionProperty: "", transitionDuration: ""};
    return r.prototype.removeTransitionStyles = function() {
        this.css(w)
    }, r.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, r.prototype.remove = function() {
        if (!u || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function() {
            t.removeElem()
        }), this.hide()
    }, r.prototype.reveal = function() {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, r.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, r.prototype.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return"opacity";
        for (var i in e)
            return i
    }, r.prototype.hide = function() {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, r.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, r.prototype.destroy = function() {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, r
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s, r) {
        return e(t, i, n, o, s, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o, s) {
    "use strict";
    function r(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++u;
        this.element.outlayerGUID = n, d[n] = this, this._create(), this.options.isInitLayout && this.layout()
    }
    var a = t.console, l = t.jQuery, h = function() {
    }, u = 0, d = {};
    return r.namespace = "outlayer", r.Item = s, r.defaults = {containerStyle: {position: "relative"}, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}}, o.extend(r.prototype, i.prototype), r.prototype.option = function(t) {
        o.extend(this.options, t)
    }, r.prototype._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, r.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, r.prototype._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; s > o; o++) {
            var r = e[o], a = new i(r, this);
            n.push(a)
        }
        return n
    }, r.prototype._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, r.prototype.getItemElements = function() {
        for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
        return t
    }, r.prototype.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, r.prototype._init = r.prototype.layout, r.prototype._resetLayout = function() {
        this.getSize()
    }, r.prototype.getSize = function() {
        this.size = n(this.element)
    }, r.prototype._getMeasurement = function(t, e) {
        var i, s = this.options[t];
        s ? ("string" == typeof s ? i = this.element.querySelector(s) : o.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
    }, r.prototype.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, r.prototype._getItemsForLayout = function(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o)
        }
        return e
    }, r.prototype._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], n = 0, o = t.length; o > n; n++) {
                var s = t[n], r = this._getItemLayoutPosition(s);
                r.item = s, r.isInstant = e || s.isLayoutInstant, i.push(r)
            }
            this._processLayoutQueue(i)
        }
    }, r.prototype._getItemLayoutPosition = function() {
        return{x: 0, y: 0}
    }, r.prototype._processLayoutQueue = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }, r.prototype._positionItem = function(t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, r.prototype._postLayout = function() {
        this.resizeContainer()
    }, r.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, r.prototype._getContainerSize = h, r.prototype._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, r.prototype._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            r++, r === s && i()
        }
        var o = this, s = e.length;
        if (!e || !s)
            return void i();
        for (var r = 0, a = 0, l = e.length; l > a; a++) {
            var h = e[a];
            h.once(t, n)
        }
    }, r.prototype.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l)
            if (this.$element = this.$element || l(this.element), e) {
                var o = l.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    }, r.prototype.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, r.prototype.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, r.prototype.stamp = function(t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }, r.prototype.unstamp = function(t) {
        if (t = this._find(t))
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                o.removeFrom(this.stamps, n), this.unignore(n)
            }
    }, r.prototype._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
    }, r.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, r.prototype._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
    }, r.prototype._manageStamp = h, r.prototype._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, o = n(t), s = {left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom};
        return s
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.bindResize = function() {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, r.prototype.unbindResize = function() {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, r.prototype.onresize = function() {
        function t() {
            e.resize(), delete e.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }, r.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, r.prototype.needsResizeLayout = function() {
        var t = n(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, r.prototype.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, r.prototype.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, r.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, r.prototype.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }, r.prototype.hide = function(t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }, r.prototype.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, r.prototype.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, r.prototype.getItem = function(t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t)
                return n
        }
    }, r.prototype.getItems = function(t) {
        t = o.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var s = t[i], r = this.getItem(s);
            r && e.push(r)
        }
        return e
    }, r.prototype.remove = function(t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length)
            for (var i = 0, n = e.length; n > i; i++) {
                var s = e[i];
                s.remove(), o.removeFrom(this.items, s)
            }
    }, r.prototype.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete d[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && d[e]
    }, r.create = function(t, e) {
        function i() {
            r.apply(this, arguments)
        }
        return Object.create ? i.prototype = Object.create(r.prototype) : o.extend(i.prototype, r.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, r.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = r.data, i.Item = function() {
            s.apply(this, arguments)
        }, i.Item.prototype = new s, o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, r.Item = s, r
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    e.prototype = new t.Item, e.prototype._create = function() {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function() {
        i.apply(this, arguments), this.css({display: ""})
    }, e
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    return function() {
        function t(t) {
            return function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }
        for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, s = n.length; s > o; o++) {
            var r = n[o];
            i.prototype[r] = t(r)
        }
    }(), i.prototype.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function(t, e) {
        var i = t + e, n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, i.prototype.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, i.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--; )
            this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, s = o / n, r = n - o % n, a = r && 1 > r ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, n.prototype.getContainerWidth = function() {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, n = e && 1 > e ? "round" : "ceil", o = Math[n](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var s = this._getColGroup(o), r = Math.min.apply(Math, s), a = i.indexOf(s, r), l = {x: this.columnWidth * a, y: r}, h = r + t.size.outerHeight, u = this.cols + 1 - s.length, d = 0; u > d; d++)
            this.colYs[a + d] = h;
        return l
    }, n.prototype._getColGroup = function(t) {
        if (2 > t)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, n.prototype._manageStamp = function(t) {
        var i = e(t), n = this._getElementOffset(t), o = this.options.isOriginLeft ? n.left : n.right, s = o + i.outerWidth, r = Math.floor(o / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, h = r; a >= h; h++)
            this.colYs[h] = Math.max(l, this.colYs[h])
    }, n.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return(this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    var n = t.create("masonry"), o = n.prototype._getElementOffset, s = n.prototype.layout, r = n.prototype._getMeasurement;
    i(n.prototype, e.prototype), n.prototype._getElementOffset = o, n.prototype.layout = s, n.prototype._getMeasurement = r;
    var a = n.prototype.measureColumns;
    n.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var l = n.prototype._manageStamp;
    return n.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
    }, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, e.prototype._getContainerSize = function() {
        return{height: this.maxY}
    }, e
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0});
    return e.prototype._resetLayout = function() {
        this.y = 0
    }, e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, e.prototype._getContainerSize = function() {
        return{height: this.y}
    }, e
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0, s = t.length; s > o; o++) {
                var r = t[o], a = i.sortData[r], l = n.sortData[r];
                if (a > l || l > a) {
                    var h = void 0 !== e[r] ? e[r] : e, u = h ? 1 : -1;
                    return(a > l ? 1 : -1) * u
                }
            }
            return 0
        }
    }
    var l = t.jQuery, h = String.prototype.trim ? function(t) {
        return t.trim()
    } : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, u = document.documentElement, d = u.textContent ? function(t) {
        return t.textContent
    } : function(t) {
        return t.innerText
    }, p = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    p.Item = s, p.LayoutMode = r, p.prototype._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }, p.prototype.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, p.prototype._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, p.prototype._initLayoutMode = function(t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, p.prototype.layout = function() {
        return!this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, p.prototype._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, p.prototype.arrange = function(t) {
        function e() {
            n.reveal(i.needReveal), n.hide(i.needHide)
        }
        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var n = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
    }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function() {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t, t
    }, p.prototype._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, p.prototype._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0, a = t.length; a > r; r++) {
            var l = t[r];
            if (!l.isIgnored) {
                var h = s(l);
                h && i.push(l), h && l.isHidden ? n.push(l) : h || l.isHidden || o.push(l)
            }
        }
        return{matches: i, needReveal: n, needHide: o}
    }, p.prototype._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ? function(e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, p.prototype.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, p.prototype._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = c(i)
        }
    }, p.prototype._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var c = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" "), n = i[0], o = n.match(/^\[(.+)\]$/), s = o && o[1], r = e(s, n), a = p.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            var i;
            return i = t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && d(i)
            }
        }
        return t
    }();
    p.sortDataParsers = {parseInt: function(t) {
            return parseInt(t, 10)
        }, parseFloat: function(t) {
            return parseFloat(t)
        }}, p.prototype._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, p.prototype._mode = function() {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, p.prototype._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, p.prototype._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, p.prototype._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, p.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, p.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, p.prototype.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, p.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, p.prototype._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, p.prototype.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++)
                n = e[i], this.element.appendChild(n.element);
            var s = this._filter(e).matches;
            for (i = 0; o > i; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var f = p.prototype.remove;
    return p.prototype.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        var i = e && e.length;
        if (i)
            for (var n = 0; i > n; n++) {
                var s = e[n];
                o.removeFrom(this.filteredItems, s)
            }
    }, p.prototype.shuffle = function() {
        for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, p.prototype._noTransition = function(t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e, i
    }, p.prototype.getFilteredItemElements = function() {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
        return t
    }, p
}), function(t) {
    t.fn.appear = function(e, i) {
        var n = t.extend({data: void 0, one: !0, accX: 0, accY: 0}, i);
        return this.each(function() {
            var i = t(this);
            if (i.appeared = !1, !e)
                return void i.trigger("appear", n.data);
            var o = t(window), s = function() {
                if (!i.is(":visible"))
                    return void(i.appeared = !1);
                var t = o.scrollLeft(), e = o.scrollTop(), s = i.offset(), r = s.left, a = s.top, l = n.accX, h = n.accY, u = i.height(), d = o.height(), p = i.width(), c = o.width();
                a + u + h >= e && e + d + h >= a && r + p + l >= t && t + c + l >= r ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
            }, r = function() {
                if (i.appeared = !0, n.one) {
                    o.unbind("scroll", s);
                    var r = t.inArray(s, t.fn.appear.checks);
                    r >= 0 && t.fn.appear.checks.splice(r, 1)
                }
                e.apply(this, arguments)
            };
            n.one ? i.one("appear", n.data, r) : i.bind("appear", n.data, r), o.scroll(s), t.fn.appear.checks.push(s), s()
        })
    }, t.extend(t.fn.appear, {checks: [], timeout: null, checkAll: function() {
            var e = t.fn.appear.checks.length;
            if (e > 0)
                for (; e--; )
                    t.fn.appear.checks[e]()
        }, run: function() {
            t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
        }}), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) {
        var n = t.fn[i];
        n && (t.fn[i] = function() {
            var e = n.apply(this, arguments);
            return t.fn.appear.run(), e
        })
    })
}(jQuery), function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
    };
    i.DEFAULTS = {from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: e, onUpdate: null, onComplete: null}, i.prototype.init = function() {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, i.prototype.dataOptions = function() {
        var t = {from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals")}, e = Object.keys(t);
        for (var i in e) {
            var n = e[i];
            "undefined" == typeof t[n] && delete t[n]
        }
        return t
    }, i.prototype.update = function() {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, i.prototype.render = function() {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, i.prototype.restart = function() {
        this.stop(), this.init(), this.start()
    }, i.prototype.start = function() {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, i.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    }, i.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    }, t.fn.countTo = function(e) {
        return this.each(function() {
            var n = t(this), o = n.data("countTo"), s = !o || "object" == typeof e, r = "object" == typeof e ? e : {}, a = "string" == typeof e ? e : "start";
            s && (o && o.stop(), n.data("countTo", o = new i(this, r))), o[a].call(o)
        })
    }
}), "object" != typeof ytp && (ytp = {}), function(jQuery, ytp) {
    if (ytp.isDevice = "ontouchstart"in window, !jQuery.browser) {
        jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.msie = !1;
        var nAgt = navigator.userAgent;
        jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera")))
            jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
            jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3, end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else
            -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
        -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.fn.CSSAnimate = function(t, e, i, n, o) {
        return this.each(function() {
            var s = jQuery(this);
            if (0 !== s.length && t) {
                if ("function" == typeof e && (o = e, e = jQuery.fx.speeds._default), "function" == typeof i && (o = i, i = 0), "function" == typeof n && (o = n, n = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof e)
                    for (var r in jQuery.fx.speeds) {
                        if (e == r) {
                            e = jQuery.fx.speeds[r];
                            break
                        }
                        e = null
                    }
                if (jQuery.support.transition) {
                    var a = "", l = "transitionEnd";
                    jQuery.browser.webkit ? (a = "-webkit-", l = "webkitTransitionEnd") : jQuery.browser.mozilla ? (a = "-moz-", l = "transitionend") : jQuery.browser.opera ? (a = "-o-", l = "otransitionend") : jQuery.browser.msie && (a = "-ms-", l = "msTransitionEnd"), r = [];
                    for (u in t) {
                        var h = u;
                        "transform" === h && (h = a + "transform", t[h] = t[u], delete t[u]), "transform-origin" === h && (h = a + "transform-origin", t[h] = t[u], delete t[u]), r.push(h), s.css(h) || s.css(h, 0)
                    }
                    u = r.join(","), s.css(a + "transition-property", u), s.css(a + "transition-duration", e + "ms"), s.css(a + "transition-delay", i + "ms"), s.css(a + "transition-timing-function", n), s.css(a + "backface-visibility", "hidden"), setTimeout(function() {
                        s.css(t)
                    }, 0), setTimeout(function() {
                        s.called || !o ? s.called = !1 : o()
                    }, e + 20), s.on(l, function(t) {
                        return s.off(l), s.css(a + "transition", ""), t.stopPropagation(), "function" == typeof o && (s.called = !0, o()), !1
                    })
                } else {
                    for (var u in t)
                        "transform" === u && delete t[u], "transform-origin" === u && delete t[u], "auto" === t[u] && delete t[u];
                    o && "string" != typeof o || (o = "linear"), s.animate(t, e, o)
                }
            }
        })
    }, jQuery.fn.CSSAnimateStop = function() {
        var t = "", e = "transitionEnd";
        jQuery.browser.webkit ? (t = "-webkit-", e = "webkitTransitionEnd") : jQuery.browser.mozilla ? (t = "-moz-", e = "transitionend") : jQuery.browser.opera ? (t = "-o-", e = "otransitionend") : jQuery.browser.msie && (t = "-ms-", e = "msTransitionEnd"), jQuery(this).css(t + "transition", ""), jQuery(this).off(e)
    }, jQuery.support.transition = function() {
        var t = (document.body || document.documentElement).style;
        return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
    }(), function(c) {
        c.extend({metadata: {defaults: {type: "class", name: "metadata", cre: /({.*})/, single: "metadata"}, setType: function(t, e) {
                    this.defaults.type = t, this.defaults.name = e
                }, get: function(b, f) {
                    var d = c.extend({}, this.defaults, f);
                    d.single.length || (d.single = "metadata");
                    var a = c.data(b, d.single);
                    if (a)
                        return a;
                    if (a = "{}", "class" == d.type) {
                        var e = d.cre.exec(b.className);
                        e && (a = e[1])
                    } else if ("elem" == d.type) {
                        if (!b.getElementsByTagName)
                            return;
                        e = b.getElementsByTagName(d.name), e.length && (a = c.trim(e[0].innerHTML))
                    } else
                        void 0 != b.getAttribute && (e = b.getAttribute(d.name)) && (a = e);
                    return 0 > a.indexOf("{") && (a = "{" + a + "}"), a = eval("(" + a + ")"), c.data(b, d.single, a), a
                }}}), c.fn.metadata = function(t) {
            return c.metadata.get(this[0], t)
        }
    }(jQuery), String.prototype.getVideoID = function() {
        var t;
        return t = "http://youtu.be/" == this.substr(0, 16) ? this.replace("http://youtu.be/", "") : this.indexOf("http") > -1 ? this.match(/[\\?&]v=([^&#]*)/)[1] : this
    }, jQuery.mbYTPlayer = {name: "jquery.mb.YTPlayer", version: "2.6.0", author: "Matteo Bicocchi", defaults: {containment: "body", ratio: "16/9", showYTLogo: !1, videoURL: null, startAt: 0, autoPlay: !0, vol: 100, addRaster: !1, opacity: 1, quality: "default", mute: !1, loop: !0, showControls: !1, showAnnotations: !1, printUrl: !0, stopMovieOnClick: !1, realfullscreen: !0, onReady: function(t) {
            }, onStateChange: function(t) {
            }, onPlaybackQualityChange: function(t) {
            }, onError: function(t) {
            }}, controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"}, rasterImg: "images/raster.png", rasterImgRetina: "images/raster@2x.png", locationProtocol: "file:" != location.protocol ? location.protocol : "http:", buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {};
                var property = {};
                $YTPlayer.addClass("mb_YTVPlayer"), jQuery.metadata && (jQuery.metadata.setType("class"), property = $YTPlayer.metadata()), jQuery.isEmptyObject(property) && (property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property")), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
                canGoFullscreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "id_" + (new Date).getTime()), YTPlayer.opt.id = YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.opt.isBgndMovie && (YTPlayer.opt.containment = "body"), YTPlayer.opt.isBgndMovie && void 0 != YTPlayer.opt.isBgndMovie.mute && (YTPlayer.opt.mute = YTPlayer.opt.isBgndMovie.mute), YTPlayer.opt.videoURL || (YTPlayer.opt.videoURL = $YTPlayer.attr("href"));
                var playerID = "mbYTP_" + YTPlayer.id, videoID = this.opt.videoURL ? this.opt.videoURL.getVideoID() : $YTPlayer.attr("href") ? $YTPlayer.attr("href").getVideoID() : !1;
                YTPlayer.videoID = videoID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {autoplay: 0, modestbranding: 1, controls: 0, showinfo: 0, rel: 0, enablejsapi: 1, version: 3, playerapiid: playerID, origin: "*", allowfullscreen: !0, wmode: "transparent", iv_load_policy: YTPlayer.opt.showAnnotations}, canPlayHTML5 = !1, v = document.createElement("video");
                v.canPlayType && (canPlayHTML5 = !0), canPlayHTML5 && jQuery.extend(playerVars, {html5: 1}), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"), overlay = jQuery("<div/>").css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}).addClass("YTPOverlay");
                if (YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), ytp.isDevice && YTPlayer.isBackground)
                    return void $YTPlayer.hide();
                if (YTPlayer.opt.addRaster) {
                    var retina = window.retina || window.devicePixelRatio > 1;
                    overlay.addClass(retina ? "raster retina" : "raster")
                } else
                    overlay.removeClass("raster retina");
                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                if (wrapper.css({position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%", left: 0, top: 0, overflow: "hidden", opacity: 0}), playerBox.css({position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden", opacity: this.opt.opacity}), wrapper.append(playerBox), !YTPlayer.isBackground || !ytp.isInit) {
                    if (YTPlayer.opt.containment.children().each(function() {
                        "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                    }), YTPlayer.isBackground ? (jQuery("body").css({position: "relative", minWidth: "100%", minHeight: "100%", zIndex: 1, boxSizing: "border-box"}), wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0}), $YTPlayer.hide(), YTPlayer.opt.containment.prepend(wrapper)) : YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), ytp.isDevice || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                        $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                    }).on("mouseleave", function() {
                        $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                    }), ytp.YTAPIReady)
                        setTimeout(function() {
                            jQuery(document).trigger("YTAPIReady")
                        }, 200);
                    else {
                        var tag = document.createElement("script");
                        tag.src = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api", tag.id = "YTAPI";
                        var firstScriptTag = document.getElementsByTagName("script")[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                    }
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.isInit || YTPlayer.opt.isInit || (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick && jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(t) {
                            var e = jQuery(t.target);
                            (e.is("a") || e.parents().is("a")) && $YTPlayer.pauseYTP()
                        }), YTPlayer.isBackground && (ytp.isInit = !0), YTPlayer.opt.isInit = !0, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer), jQuery(document).on("getVideoInfo_" + YTPlayer.opt.id, function() {
                            return ytp.isDevice && !YTPlayer.isBackground ? void new YT.Player(playerID, {height: "100%", width: "100%", videoId: YTPlayer.videoID, events: {onReady: function() {
                                        $YTPlayer.optimizeDisplay(), playerBox.css({opacity: 1}), YTPlayer.wrapper.css({opacity: 1}), $YTPlayer.optimizeDisplay()
                                    }, onStateChange: function() {
                                    }}}) : void new YT.Player(playerID, {videoId: YTPlayer.videoID.toString(), playerVars: playerVars, events: {onReady: function(t) {
                                        YTPlayer.player = t.target, YTPlayer.isReady || (YTPlayer.isReady = !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                                            $YTPlayer.optimizeDisplay()
                                        }), YTPlayer.opt.showControls && jQuery(YTPlayer).buildYTPControls(), YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), YTPlayer.opt.startAt > 0 && YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt), !0), YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(), YTPlayer.player.setVolume(YTPlayer.opt.vol), YTPlayer.opt.mute ? jQuery(YTPlayer).muteYTPVolume() : jQuery(YTPlayer).unmuteYTPVolume()) : (YTPlayer.player.pauseVideo(), YTPlayer.checkForStartAt = setInterval(function() {
                                            YTPlayer.player.getCurrentTime() >= YTPlayer.opt.startAt && (clearInterval(YTPlayer.checkForStartAt), YTPlayer.opt.mute ? jQuery(YTPlayer).muteYTPVolume() : jQuery(YTPlayer).unmuteYTPVolume())
                                        }, 1)), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady($YTPlayer), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                    }, onStateChange: function(t) {
                                        if ("function" == typeof t.target.getPlayerState) {
                                            var e = t.target.getPlayerState();
                                            "function" == typeof YTPlayer.opt.onStateChange && YTPlayer.opt.onStateChange($YTPlayer, e);
                                            var i = (jQuery(YTPlayer.playerEl), jQuery("#controlBar_" + YTPlayer.id)), n = YTPlayer.opt;
                                            if (0 == e) {
                                                if (YTPlayer.state == e)
                                                    return;
                                                YTPlayer.state = e, YTPlayer.player.pauseVideo();
                                                var o = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                                n.loop ? (YTPlayer.wrapper.css({opacity: 0}), $YTPlayer.playYTP(), YTPlayer.player.seekTo(o, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(o, !0), $YTPlayer.playYTP(), setTimeout(function() {
                                                    $YTPlayer.pauseYTP()
                                                }, 10)), !n.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2e3) : n.loop && (YTPlayer.wrapper.css({opacity: 0}), YTPlayer.loop++), i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPEnd")
                                            }
                                            if (3 == e) {
                                                if (YTPlayer.state == e)
                                                    return;
                                                YTPlayer.state = e, i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPBuffering")
                                            }
                                            if (-1 == e) {
                                                if (YTPlayer.state == e)
                                                    return;
                                                YTPlayer.state = e, YTPlayer.wrapper.css({opacity: 0}), jQuery(YTPlayer).trigger("YTPUnstarted")
                                            }
                                            if (1 == e) {
                                                if (YTPlayer.state == e)
                                                    return;
                                                YTPlayer.state = e, YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), YTPlayer.opt.mute && ($YTPlayer.muteYTPVolume(), YTPlayer.opt.mute = !1), YTPlayer.opt.autoPlay && 0 == YTPlayer.loop ? YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2e3) : YTPlayer.isBackground ? setTimeout(function() {
                                                    jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 1}, 2e3), YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 2e3)
                                                }, 1e3) : (YTPlayer.wrapper.css({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}), $YTPlayer.css({background: "rgba(0,0,0,0.5)"})), i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause), jQuery(YTPlayer).trigger("YTPStart"), "undefined" != typeof _gaq && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()])
                                            }
                                            if (2 == e) {
                                                if (YTPlayer.state == e)
                                                    return;
                                                YTPlayer.state = e, i.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play), jQuery(YTPlayer).trigger("YTPPause")
                                            }
                                        }
                                    }, onPlaybackQualityChange: function(t) {
                                        "function" == typeof YTPlayer.opt.onPlaybackQualityChange && YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                    }, onError: function(t) {
                                        2 == t.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, t)
                                    }}})
                        }))
                    })
                }
            })
        }, getDataFromFeed: function(t, e) {
            e.videoID = t, jQuery.browser.msie ? ("auto" == e.opt.ratio ? e.opt.ratio = "16/9" : e.opt.ratio, e.isInit || (e.isInit = !0, setTimeout(function() {
                jQuery(document).trigger("getVideoInfo_" + e.opt.id)
            }, 100)), jQuery(e).trigger("YTPChanged")) : (jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + t + "?v=2&alt=jsonc", function(t, i, n) {
                e.dataReceived = !0;
                var o = t.data;
                if (e.title = o.title, e.videoData = o, "auto" == e.opt.ratio && (o.aspectRatio && "widescreen" === o.aspectRatio ? e.opt.ratio = "16/9" : e.opt.ratio = "4/3"), !e.isInit) {
                    if (e.isInit = !0, !e.isBackground) {
                        var s = e.videoData.thumbnail.hqDefault;
                        jQuery(e).css({background: "rgba(0,0,0,0.5) url(" + s + ") center center", backgroundSize: "cover"})
                    }
                    jQuery(document).trigger("getVideoInfo_" + e.opt.id)
                }
                jQuery(e).trigger("YTPChanged")
            }), setTimeout(function() {
                e.dataReceived || e.isInit || (e.isInit = !0, jQuery(document).trigger("getVideoInfo_" + e.opt.id))
            }, 2500))
        }, getVideoID: function() {
            var t = this.get(0);
            return t.videoID || !1
        }, setVideoQuality: function(t) {
            var e = this.get(0);
            e.player.setPlaybackQuality(t)
        }, YTPlaylist: function(t, e, i) {
            var n = this.get(0);
            n.isPlayList = !0, e && (t = jQuery.shuffle(t)), n.videoID || (n.videos = t, n.videoCounter = 0, n.videoLength = t.length, jQuery(n).data("property", t[0]), jQuery(n).mb_YTPlayer()), "function" == typeof i && jQuery(n).on("YTPChanged", function() {
                i(n)
            }), jQuery(n).on("YTPEnd", function() {
                jQuery(n).playNext()
            })
        }, playNext: function() {
            var t = this.get(0);
            t.videoCounter++, t.videoCounter >= t.videoLength && (t.videoCounter = 0), jQuery(t.playerEl).css({opacity: 0}), jQuery(t).changeMovie(t.videos[t.videoCounter])
        }, playPrev: function() {
            var t = this.get(0);
            t.videoCounter--, t.videoCounter <= 0 && (t.videoCounter = t.videoLength), jQuery(t.playerEl).css({opacity: 0}), jQuery(t).changeMovie(t.videos[t.videoCounter])
        }, changeMovie: function(t) {
            var e = this.get(0), i = e.opt;
            t && jQuery.extend(i, t), e.videoID = i.videoURL.getVideoID(), jQuery(e).pauseYTP();
            var n = jQuery.browser.msie ? 1e3 : 0;
            if (jQuery(e).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + e.videoID), 5, e.opt.quality), setTimeout(function() {
                jQuery(e).playYTP(), jQuery(e).one("YTPStart", function() {
                    jQuery(e.playerEl).CSSAnimate({opacity: 1}, 2e3)
                })
            }, n), e.opt.mute ? jQuery(e).muteYTPVolume() : jQuery(e).unmuteYTPVolume(), e.opt.addRaster) {
                var o = window.retina || window.devicePixelRatio > 1;
                e.overlay.addClass(o ? "raster retina" : "raster")
            } else
                e.overlay.removeClass("raster"), e.overlay.removeClass("retina");
            jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery(e).buildYTPControls(), jQuery.mbYTPlayer.getDataFromFeed(e.videoID, e), jQuery(e).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(e)
        }, getPlayer: function() {
            return jQuery(this).get(0).player
        }, playerDestroy: function() {
            var t = this.get(0);
            ytp.YTAPIReady = !1, ytp.isInit = !1, t.opt.isInit = !1, t.videoID = null;
            var e = t.wrapper;
            e.remove(), jQuery("#controlBar_" + t.id).remove()
        }, fullscreen: function(t) {
            function e(t, e) {
                for (var i, n, o = ["webkit", "moz", "ms", "o", ""], s = 0; s < o.length && !t[i]; ) {
                    if (i = e, "" == o[s] && (i = i.substr(0, 1).toLowerCase() + i.substr(1)), i = o[s] + i, n = typeof t[i], "undefined" != n)
                        return o = [o[s]], "function" == n ? t[i]() : t[i];
                    s++
                }
            }
            function i(t) {
                e(t, "RequestFullScreen")
            }
            function n() {
                (e(document, "FullScreen") || e(document, "IsFullScreen")) && e(document, "CancelFullScreen");
            }
            var o = this.get(0), s = jQuery("#controlBar_" + o.id), r = s.find(".mb_OnlyYT"), a = jQuery(o.wrapper);
            if (t) {
                var l = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(l), jQuery(document).on(l, function() {
                    var t = e(document, "IsFullScreen") || e(document, "FullScreen");
                    t ? jQuery(o).setVideoQuality("default") : (jQuery(o).removeClass("fullscreen"), o.isAlone = !1, r.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(o).setVideoQuality(o.opt.quality), o.isBackground ? jQuery("body").after(s) : o.wrapper.before(s), jQuery(window).resize())
                })
            }
            o.isAlone ? (t ? n() : a.CSSAnimate({opacity: o.opt.opacity}, 500), jQuery(o).trigger("YTPFullScreenEnd"), a.css({zIndex: -1}), r.html(jQuery.mbYTPlayer.controls.onlyYT), o.isAlone = !1) : (1 != o.player.getPlayerState() && 2 != o.player.getPlayerState() && jQuery(o).playYTP(), t ? (o.wrapper.append(s), jQuery(o).addClass("fullscreen"), i(a.get(0))) : a.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 1e3, 0), jQuery(o).trigger("YTPFullScreenStart"), r.html(jQuery.mbYTPlayer.controls.showSite), o.isAlone = !0)
        }, playYTP: function() {
            var t = this.get(0), e = jQuery("#controlBar_" + t.id), i = e.find(".mb_YTVPPlaypause");
            i.html(jQuery.mbYTPlayer.controls.pause), t.player.playVideo(), t.wrapper.CSSAnimate({opacity: t.opt.opacity}, 2e3), jQuery(t).on("YTPStart", function() {
                jQuery(t).css("background", "none")
            })
        }, toggleLoops: function() {
            var t = this.get(0), e = t.opt;
            1 == e.loop ? e.loop = 0 : (e.startAt ? t.player.seekTo(e.startAt) : t.player.playVideo(), e.loop = 1)
        }, stopYTP: function() {
            var t = this.get(0), e = jQuery("#controlBar_" + t.id), i = e.find(".mb_YTVPPlaypause");
            i.html(jQuery.mbYTPlayer.controls.play), t.player.stopVideo()
        }, pauseYTP: function() {
            var t = this.get(0), e = (t.opt, jQuery("#controlBar_" + t.id)), i = e.find(".mb_YTVPPlaypause");
            i.html(jQuery.mbYTPlayer.controls.play), t.player.pauseVideo()
        }, seekToYTP: function(t) {
            var e = this.get(0);
            e.player.seekTo(t, !0)
        }, setYTPVolume: function(t) {
            var e = this.get(0);
            t || e.opt.vol || 0 != player.getVolume() ? !t && e.player.getVolume() > 0 || t && e.player.getVolume() == t ? jQuery(e).muteYTPVolume() : e.opt.vol = t : jQuery(e).unmuteYTPVolume(), e.player.setVolume(e.opt.vol)
        }, muteYTPVolume: function() {
            var t = this.get(0);
            t.opt.vol = t.player.getVolume() || 50, t.player.mute(), t.player.setVolume(0);
            var e = jQuery("#controlBar_" + t.id), i = e.find(".mb_YTVPMuteUnmute");
            i.html(jQuery.mbYTPlayer.controls.unmute)
        }, unmuteYTPVolume: function() {
            var t = this.get(0);
            t.player.unMute(), t.player.setVolume(t.opt.vol);
            var e = jQuery("#controlBar_" + t.id), i = e.find(".mb_YTVPMuteUnmute");
            i.html(jQuery.mbYTPlayer.controls.mute)
        }, manageYTPProgress: function() {
            var t = this.get(0), e = jQuery("#controlBar_" + t.id), i = e.find(".mb_YTVPProgress"), n = e.find(".mb_YTVPLoaded"), o = e.find(".mb_YTVTime"), s = i.outerWidth(), r = Math.floor(t.player.getCurrentTime()), a = Math.floor(t.player.getDuration()), l = r * s / a, h = 0, u = 100 * t.player.getVideoLoadedFraction();
            return n.css({left: h, width: u + "%"}), o.css({left: 0, width: l}), {totalTime: a, currentTime: r}
        }, buildYTPControls: function() {
            var t = this.get(0), e = t.opt;
            if (!jQuery("#controlBar_" + t.id).length) {
                var i = jQuery("<span/>").attr("id", "controlBar_" + t.id).addClass("mb_YTVPBar").css({whiteSpace: "noWrap", position: t.isBackground ? "fixed" : "absolute", zIndex: t.isBackground ? 1e4 : 1e3}).hide(), n = jQuery("<div/>").addClass("buttonBar"), o = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function() {
                    1 == t.player.getPlayerState() ? jQuery(t).pauseYTP() : jQuery(t).playYTP()
                }), s = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function() {
                    0 == t.player.getVolume() ? jQuery(t).unmuteYTPVolume() : jQuery(t).muteYTPVolume()
                }), r = jQuery("<span/>").addClass("mb_YTVPTime"), a = e.videoURL;
                a.indexOf("http") < 0 && (a = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + e.videoURL);
                var l = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                    window.open(a, "viewOnYT")
                }), h = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                    jQuery(t).fullscreen(e.realfullscreen)
                }), u = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function(e) {
                    p.css({width: e.clientX - p.offset().left}), t.timeW = e.clientX - p.offset().left, i.find(".mb_YTVPLoaded").css({width: 0});
                    var n = Math.floor(t.player.getDuration());
                    t["goto"] = p.outerWidth() * n / u.outerWidth(), t.player.seekTo(parseFloat(t["goto"]), !0), i.find(".mb_YTVPLoaded").css({width: 0})
                }), d = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute"), p = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
                u.append(d).append(p), n.append(o).append(s).append(r), e.printUrl && n.append(l), (t.isBackground || t.opt.realfullscreen && !t.isBackground) && n.append(h), i.append(n).append(u), t.isBackground ? jQuery("body").after(i) : (i.addClass("inlinePlayer"), t.wrapper.before(i)), i.fadeIn()
            }
        }, checkForState: function(t) {
            var e = jQuery("#controlBar_" + t.id), i = t.opt, n = t.opt.startAt ? t.opt.startAt : 1;
            t.getState = setInterval(function() {
                var o = jQuery(t).manageYTPProgress();
                e.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(o.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(o.totalTime)), parseFloat(t.player.getDuration() - 3) < t.player.getCurrentTime() && 1 == t.player.getPlayerState() && !t.isPlayList && (i.loop ? t.player.seekTo(n) : (t.player.pauseVideo(), t.wrapper.CSSAnimate({opacity: 0}, 2e3, function() {
                    if (t.player.seekTo(n, !0), !t.isBackground) {
                        var e = t.videoData.thumbnail.hqDefault;
                        jQuery(t).css({background: "rgba(0,0,0,0.5) url(" + e + ") center center", backgroundSize: "cover"})
                    }
                })), jQuery(t).trigger("YTPEnd"))
            }, 1)
        }, formatTime: function(t) {
            var e = Math.floor(t / 60), i = Math.floor(t - 60 * e);
            return(9 > e ? "0" + e : e) + " : " + (9 > i ? "0" + i : i)
        }}, jQuery.fn.toggleVolume = function() {
        var t = this.get(0);
        if (t)
            return t.player.isMuted() ? (jQuery(t).unmuteYTPVolume(), !0) : (jQuery(t).muteYTPVolume(), !1)
    }, jQuery.fn.optimizeDisplay = function() {
        var t = this.get(0), e = t.opt, i = jQuery(t.playerEl), n = {}, o = t.isBackground ? jQuery(window) : e.containment;
        n.width = o.width(), n.height = o.height();
        var s = 24, r = {};
        r.width = n.width + n.width * s / 100, r.height = "16/9" == e.ratio ? Math.ceil(9 * n.width / 16) : Math.ceil(3 * n.width / 4), r.marginTop = -((r.height - n.height) / 2), r.marginLeft = -(n.width * (s / 2) / 100), r.height < n.height && (r.height = n.height + n.height * s / 100, r.width = "16/9" == e.ratio ? Math.floor(16 * n.height / 9) : Math.floor(4 * n.height / 3), r.marginTop = -(n.height * (s / 2) / 100), r.marginLeft = -((r.width - n.width) / 2)), i.css({width: r.width, height: r.height, marginTop: r.marginTop, marginLeft: r.marginLeft})
    }, jQuery.shuffle = function(t) {
        for (var e = t.slice(), i = e.length, n = i; n--; ) {
            var o = parseInt(Math.random() * i), s = e[n];
            e[n] = e[o], e[o] = s
        }
        return e
    }, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
}(jQuery, ytp), !function(t, e) {
    "use strict";
    function i(t) {
        t = t || {};
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            if (i)
                for (var n in i)
                    i.hasOwnProperty(n) && ("object" == typeof i[n] ? deepExtend(t[n], i[n]) : t[n] = i[n])
        }
        return t
    }
    function n(n, r) {
        function a() {
            if (P) {
                y = e.createElement("canvas"), y.className = "pg-canvas", y.style.display = "block", n.insertBefore(y, n.firstChild), v = y.getContext("2d"), l();
                for (var i = Math.round(y.width * y.height / r.density), o = 0; i > o; o++) {
                    var s = new c;
                    s.setStackPos(o), C.push(s)
                }
                t.addEventListener("resize", function() {
                    u()
                }, !1), e.addEventListener("mousemove", function(t) {
                    S = t.pageX, Y = t.pageY
                }, !1), j && !I && t.addEventListener("deviceorientation", function() {
                    $ = Math.min(Math.max(-event.beta, -30), 30), E = Math.min(Math.max(-event.gamma, -30), 30)
                }, !0), h(), g("onInit")
            }
        }
        function l() {
            y.width = n.offsetWidth, y.height = n.offsetHeight, v.fillStyle = r.dotColor, v.strokeStyle = r.lineColor, v.lineWidth = r.lineWidth
        }
        function h() {
            if (P) {
                b = t.innerWidth, T = t.innerHeight, v.clearRect(0, 0, y.width, y.height);
                for (var e = 0; e < C.length; e++)
                    C[e].updatePosition();
                for (var e = 0; e < C.length; e++)
                    C[e].draw();
                Q || (w = requestAnimationFrame(h))
            }
        }
        function u() {
            l();
            for (var t = n.offsetWidth, e = n.offsetHeight, i = C.length - 1; i >= 0; i--)
                (C[i].position.x > t || C[i].position.y > e) && C.splice(i, 1);
            var o = Math.round(y.width * y.height / r.density);
            if (o > C.length)
                for (; o > C.length; ) {
                    var s = new c;
                    C.push(s)
                }
            else
                o < C.length && C.splice(o);
            for (i = C.length - 1; i >= 0; i--)
                C[i].setStackPos(i)
        }
        function d() {
            Q = !0
        }
        function p() {
            Q = !1, h()
        }
        function c() {
            switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                    x: Math.ceil(Math.random() * y.width), y: Math.ceil(Math.random() * y.height)}, this.speed = {}, r.directionX){case"left":
                    this.speed.x = +(-r.maxSpeedX + Math.random() * r.maxSpeedX - r.minSpeedX).toFixed(2);
                    break;
                case"right":
                    this.speed.x = +(Math.random() * r.maxSpeedX + r.minSpeedX).toFixed(2);
                    break;
                default:
                    this.speed.x = +(-r.maxSpeedX / 2 + Math.random() * r.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? r.minSpeedX : -r.minSpeedX
            }
            switch (r.directionY) {
                case"up":
                    this.speed.y = +(-r.maxSpeedY + Math.random() * r.maxSpeedY - r.minSpeedY).toFixed(2);
                    break;
                case"down":
                    this.speed.y = +(Math.random() * r.maxSpeedY + r.minSpeedY).toFixed(2);
                    break;
                default:
                    this.speed.y = +(-r.maxSpeedY / 2 + Math.random() * r.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? r.minSpeedY : -r.minSpeedY
                }
        }
        function f(t, e) {
            return e ? void(r[t] = e) : r[t]
        }
        function m() {
            console.log("destroy"), y.parentNode.removeChild(y), g("onDestroy"), s && s(n).removeData("plugin_" + o)
        }
        function g(t) {
            void 0 !== r[t] && r[t].call(n)
        }
        var y, v, w, b, T, x, _, P = !!e.createElement("canvas").getContext, C = [], S = 0, Y = 0, I = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), j = !!t.DeviceOrientationEvent, E = 0, $ = 0, Q = !1;
        return r = i({}, t[o].defaults, r), c.prototype.draw = function() {
            v.beginPath(), v.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, r.particleRadius / 2, 0, 2 * Math.PI, !0), v.closePath(), v.fill(), v.beginPath();
            for (var t = C.length - 1; t > this.stackPos; t--) {
                var e = C[t], i = this.position.x - e.position.x, n = this.position.y - e.position.y, o = Math.sqrt(i * i + n * n).toFixed(2);
                o < r.proximity && (v.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), r.curvedLines ? v.quadraticCurveTo(Math.max(e.position.x, e.position.x), Math.min(e.position.y, e.position.y), e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY) : v.lineTo(e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY))
            }
            v.stroke(), v.closePath()
        }, c.prototype.updatePosition = function() {
            if (r.parallax) {
                if (j && !I) {
                    var t = (b - 0) / 60;
                    x = (E - -30) * t + 0;
                    var e = (T - 0) / 60;
                    _ = ($ - -30) * e + 0
                } else
                    x = S, _ = Y;
                this.parallaxTargX = (x - b / 2) / (r.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (_ - T / 2) / (r.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
            }
            var i = n.offsetWidth, o = n.offsetHeight;
            switch (r.directionX) {
                case"left":
                    this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = i - this.parallaxOffsetX);
                    break;
                case"right":
                    this.position.x + this.speed.x + this.parallaxOffsetX > i && (this.position.x = 0 - this.parallaxOffsetX);
                    break;
                default:
                    (this.position.x + this.speed.x + this.parallaxOffsetX > i || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
            }
            switch (r.directionY) {
                case"up":
                    this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = o - this.parallaxOffsetY);
                    break;
                case"down":
                    this.position.y + this.speed.y + this.parallaxOffsetY > o && (this.position.y = 0 - this.parallaxOffsetY);
                    break;
                default:
                    (this.position.y + this.speed.y + this.parallaxOffsetY > o || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
            }
            this.position.x += this.speed.x, this.position.y += this.speed.y
        }, c.prototype.setStackPos = function(t) {
            this.stackPos = t
        }, a(), {option: f, destroy: m, start: p, pause: d}
    }
    var o = "particleground", s = t.jQuery;
    t[o] = function(t, e) {
        return new n(t, e)
    }, t[o].defaults = {minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: "center", directionY: "center", density: 1e4, dotColor: "#666666", lineColor: "#666666", particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: function() {
        }, onDestroy: function() {
        }}, s && (s.fn[o] = function(t) {
        if ("string" == typeof arguments[0]) {
            var e, i = arguments[0], r = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                s.data(this, "plugin_" + o) && "function" == typeof s.data(this, "plugin_" + o)[i] && (e = s.data(this, "plugin_" + o)[i].apply(this, r))
            }), void 0 !== e ? e : this
        }
        return"object" != typeof t && t ? void 0 : this.each(function() {
            s.data(this, "plugin_" + o) || s.data(this, "plugin_" + o, new n(this, t))
        })
    })
}(window, document), function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
        window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - t)), o = window.setTimeout(function() {
            e(i + n)
        }, n);
        return t = i + n, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(), !function(t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, c), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Pipe, t.proxy(function(e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }
    function s(t) {
        if (t.touches !== n)
            return{x: t.touches[0].pageX, y: t.touches[0].pageY};
        if (t.touches === n) {
            if (t.pageX !== n)
                return{x: t.pageX, y: t.pageY};
            if (t.pageX === n)
                return{x: t.clientX, y: t.clientY}
        }
    }
    function r(t) {
        var e, n, o = i.createElement("div"), s = t;
        for (e in s)
            if (n = s[e], "undefined" != typeof o.style[n])
                return o = null, [n, e];
        return[!1]
    }
    function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }
    function l() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }
    function h() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }
    function u() {
        return"ontouchstart"in e || !!navigator.msMaxTouchPoints
    }
    function d() {
        return e.navigator.msPointerEnabled
    }
    var p, c, f;
    p = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null}, c = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, f = {_onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null}, o.Defaults = {items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active"}, o.Width = {Default: "default", Inner: "inner", Outer: "outer"}, o.Plugins = {}, o.Pipe = [{filter: ["width", "items", "settings"], run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }}, {filter: ["items", "settings"], run: function() {
                var t = this._clones, e = this.$stage.children(".cloned");
                (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }}, {filter: ["items", "settings"], run: function() {
                var t, e, i = this._clones, n = this._items, o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(o / 2); e > t; t++)
                    o > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
            }}, {filter: ["width", "items", "settings"], run: function() {
                var t, e, i, n = this.settings.rtl ? 1 : -1, o = (this.width() / this.settings.items).toFixed(3), s = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++)
                    t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s)
            }}, {filter: ["width", "items", "settings"], run: function() {
                var e, i, n = (this.width() / this.settings.items).toFixed(3), o = {width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || ""};
                if (this.$stage.css(o), o = {width: this.settings.autoWidth ? "auto" : n - this.settings.margin}, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++)
                        o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
                else
                    this.$stage.children().css(o)
            }}, {filter: ["width", "items", "settings"], run: function(t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }}, {filter: ["position"], run: function() {
                this.animate(this.coordinates(this._current))
            }}, {filter: ["width", "position", "items", "settings"], run: function() {
                var t, e, i, n, o = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + s, a = r + this.width() * o, l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++)
                    t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }}], o.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, o;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o)
                return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(), i = this.options.responsive, n = -1, o = null;
        i ? (t.each(i, function(t) {
            e >= t && t > n && (n = Number(t))
        }), o = t.extend({}, this.options, i[n]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + n)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {property: {name: "settings", value: o}}), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {property: {name: "settings", value: this.settings}}))
    }, o.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, o.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
            return this[t]
        }, this._invalidated), o = {}; i > e; )
            (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
    }, o.prototype.refresh = function() {
        return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
    }, o.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, o.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, o.prototype.internalEvents = function() {
        var i = (u(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return!1
        }), this.$stage.get(0).onselectstart = function() {
            return!1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, o.prototype.onDragStart = function(n) {
        var o, r, a, l;
        if (o = n.originalEvent || n || e.event, 3 === o.which || this.state.isTouch)
            return!1;
        if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)
            l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d)
            return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, o.prototype.onDragMove = function(t) {
        var i, o, r, a, l, h;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = s(i).x, r = s(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, o.prototype.onDragEnd = function(e) {
        var n, o, s;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)
                return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, o.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, o.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, o.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, o.prototype.closest = function(e) {
        var i = -1, n = 30, o = this.width(), s = this.coordinates();
        return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
            return e > r - n && r + n > e ? i = t : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
    }, o.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s"}) : this.state.isTouch ? this.$stage.css({left: e + "px"}) : this.$stage.animate({left: e}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, o.prototype.current = function(t) {
        if (t === n)
            return this._current;
        if (0 === this._items.length)
            return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {property: {name: "position", value: this._current}})
        }
        return this._current
    }, o.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, o.prototype.reset = function(t) {
        t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(e, i) {
        var o = i ? this._items.length : this._items.length + this._clones.length;
        return!t.isNumeric(e) || 1 > o ? n : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, o.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, i, n, o = 0, s = this.settings;
        if (t)
            return this._items.length - 1;
        if (!s.loop && s.center)
            e = this._items.length - 1;
        else if (s.loop || s.center)
            if (s.loop || s.center)
                e = this._items.length + s.items;
            else {
                if (!s.autoWidth && !s.merge)
                    throw"Can not detect maximum absolute position.";
                for (revert = s.rtl?1: - 1, i = this.$stage.width() - this.$element.width(); (n = this.coordinates(o)) && !(n * revert >= i); )
                    e = ++o
            }
        else
            e = this._items.length - s.items;
        return e
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var i = this._clones.length / 2, o = i + this._items.length, s = function(t) {
            return t % 2 === 0 ? o + t / 2 : i - (t + 1) / 2
        };
        return e === n ? t.map(this._clones, function(t, e) {
            return s(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? s(i) : null
        })
    }, o.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var i = null;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, o.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function(i, n) {
        if (this.settings.loop) {
            var o = i - this.relative(this.current()), s = this.current(), r = this.current(), a = this.current() + o, l = 0 > r - a ? !0 : !1, h = this._clones.length + this._items.length;
            a < this.settings.items && l === !1 ? (s = r + this._items.length, this.reset(s)) : a >= h - this.settings.items && l === !0 && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), s + o, n)), this.current(s + o), this.update()
            }, this), 30)
        } else
            this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.transitionEnd = function(t) {
        return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, o.prototype.viewport = function() {
        var n;
        if (this.options.responsiveBaseElement !== e)
            n = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth)
            n = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth)
                throw"Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(t, e) {
        e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {content: t, position: e}), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {content: t, position: e})
    }, o.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== n && (this.trigger("remove", {content: this._items[t], position: t}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {content: null, position: t}))
    }, o.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove}, t.proxy(function(t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, o.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }
        function n() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        var i, n, o, s;
        i = 0, n = this, e.each(function(r, a) {
            o = t(a), s = new Image, s.onload = function() {
                i++, o.attr("src", s.src), o.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
            }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
        })
    }, o.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var n in this._plugins)
            this._plugins[n].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {
        }, this.$stage.off("dragstart", function() {
            return!1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, o.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? t > i : i > t;
            case">":
                return n ? i > t : t > i;
            case">=":
                return n ? i >= t : t >= i;
            case"<=":
                return n ? t >= i : i >= t
            }
    }, o.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function(e, i, n) {
        var o = {item: {count: this._items.length, index: this.current()}}, s = t.camelCase(t.grep(["on", e, n], function(t) {
            return t
        }).join("-").toLowerCase()), r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, o, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.browserSupport = function() {
        if (this.support3d = h(), this.support3d) {
            this.transformVendor = l();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function(t, e) {
    var i = function(e) {
        this._core = e, this._loaded = [], this._handlers = {"initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
                        this.load(e)
                    }, this); o++ < n; )
                        this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
            }, this)}, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {lazyLoad: !1}, i.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i), o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
            var o, s = t(n), r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {element: s, url: r}, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function() {
                s.css({"background-image": "url(" + r + ")", opacity: "1"}), this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document), function(t) {
    var e = function(i) {
        this._core = i, this._handlers = {"initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)}, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function(t, e, i) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {"resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube", n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"), o = t.attr("data-width") || this._core.settings.videoWidth, s = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r)
            throw new Error("Missing video URL.");
        if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1)
            i = "youtube";
        else {
            if (!(n[3].indexOf("vimeo") > -1))
                throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        n = n[6], this._videos[r] = {type: i, id: n, width: o, height: s}, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "", a = e.find("img"), l = "src", h = "", u = this._core.settings, d = function(t) {
            o = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
        };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(s)) : "vimeo" === i.type && t.ajax({type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) {
                s = t[0].thumbnail_large, d(s)
            }}))
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, n.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, n, o = t(e.target || e.srcElement), s = o.closest("." + this._core.settings.itemClass), r = this._videos[s.attr("data-video")], a = r.width || "100%", l = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(n)
    }, n.prototype.isInFullScreen = function() {
        var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), n && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
    }, n.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {"change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this), "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)}, this.core.$element.on(this.handlers)
    };
    o.Defaults = {animateOut: !1, animateIn: !1}, o.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous), o = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn, r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function(t, e, i) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {"translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this), "play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)}, this.core.$element.on(this.handlers)
    };
    n.Defaults = {autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1}, n.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, n.prototype.play = function() {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, n.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, n.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, n.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document), function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {next: this._core.next, prev: this._core.prev, to: this._core.to}, this._handlers = {"prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(), i = this._core.maximum(), n = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                }
            }, this), "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this), "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)}, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls"}, e.prototype.initialize = function() {
        var e, i, n = this._core.settings;
        n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(n.navSpeed)
        }, this));
        for (i in this._overrides)
            this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function() {
        var t, e, i, n;
        for (t in this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
            this._controls[e].remove();
        for (n in this.overides)
            this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i, n = this._core.settings, o = this._core.clones().length / 2, s = o + this._core.items().length, r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = o, e = 0, i = 0; s > t; t++)
                (e >= r || 0 === e) && (this._pages.push({start: t - o, end: t - o + r - 1}), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, i, n = "", o = this._core.settings, s = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++)
                    n += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(n)
            } else
                e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(o.dots)
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)}
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var i, n, o = this._core.settings;
        return"page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, i, n) {
        var o;
        n ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function(t, e) {
    "use strict";
    var i = function(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {"initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)}, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1), i = this._core.$stage.children(), n = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return t ? void this._core.to(n, !1, !0) : !1
        }, this))
    };
    i.Defaults = {URLhashListener: !1}, i.prototype.destroy = function() {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers)
            this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document), !function(t, e, i, n) {
    function o(e, i) {
        var s = this;
        "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this, i)), this.$element = t(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        return r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != n && (r[0] = this.positionX.toLowerCase()), this.positionY != n && (r[1] = this.positionY.toLowerCase()), s.positionX = r[0], s.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (this.iosFix && !this.$element.is("img") && this.$element.css({backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position}), this) : navigator.userAgent.match(/(Android)/) ? (this.androidFix && !this.$element.is("img") && this.$element.css({backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position}), this) : (this.$mirror = t("<div />").prependTo("body"), this.$slider = t("<img />").prependTo(this.$mirror), this.$mirror.addClass("parallax-mirror").css({visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden"}), this.$slider.addClass("parallax-slider").one("load", function() {
            s.naturalHeight && s.naturalWidth || (s.naturalHeight = this.naturalHeight || this.height || 1, s.naturalWidth = this.naturalWidth || this.width || 1), s.aspectRatio = s.naturalWidth / s.naturalHeight, o.isSetup || o.setup(), o.sliders.push(s), o.isFresh = !1, o.requestRender()
        }), this.$slider[0].src = this.imageSrc, void((this.naturalHeight && this.naturalWidth || this.$slider[0].complete) && this.$slider.trigger("load")))
    }
    function s(n) {
        return this.each(function() {
            var s = t(this), r = "object" == typeof n && n;
            this == e || this == i || s.is("body") ? o.configure(r) : s.data("px.parallax") || (r = t.extend({}, s.data(), r), s.data("px.parallax", new o(this, r))), "string" == typeof n && o[n]()
        })
    }
    !function() {
        for (var t = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !e.requestAnimationFrame; ++n)
            e.requestAnimationFrame = e[i[n] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[n] + "CancelAnimationFrame"] || e[i[n] + "CancelRequestAnimationFrame"];
        e.requestAnimationFrame || (e.requestAnimationFrame = function(i) {
            var n = (new Date).getTime(), o = Math.max(0, 16 - (n - t)), s = e.setTimeout(function() {
                i(n + o)
            }, o);
            return t = n + o, s
        }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), t.extend(o.prototype, {speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, refresh: function() {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t = o.winHeight, e = o.docHeight, i = Math.min(this.boxOffsetTop, e - t), n = Math.max(this.boxOffsetTop + this.boxHeight - t, 0), s = this.boxHeight + (i - n) * (1 - this.speed) | 0, r = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
            if (s * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = s * this.aspectRatio | 0, this.imageHeight = s, this.offsetBaseTop = r;
                var a = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a)
            } else {
                this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                var a = this.imageHeight - s;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a)
            }
        }, render: function() {
            var t = o.scrollTop, e = o.scrollLeft, i = this.overScrollFix ? o.overScroll : 0, n = t + o.winHeight;
            this.visibility = this.boxOffsetBottom > t && this.boxOffsetTop < n ? "visible" : "hidden", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed), this.$mirror.css({transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - i, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth}), this.$slider.css({transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none"})
        }}), t.extend(o, {scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function() {
            if (!this.isReady) {
                var n = t(i), s = t(e);
                s.on("resize.px.parallax load.px.parallax", function() {
                    o.winHeight = s.height(), o.winWidth = s.width(), o.docHeight = n.height(), o.docWidth = n.width(), o.isFresh = !1, o.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function() {
                    var t = o.docHeight - o.winHeight, e = o.docWidth - o.winWidth;
                    o.scrollTop = Math.max(0, Math.min(t, s.scrollTop())), o.scrollLeft = Math.max(0, Math.min(e, s.scrollLeft())), o.overScroll = Math.max(s.scrollTop() - t, Math.min(s.scrollTop(), 0)), o.requestRender()
                }), this.isReady = !0
            }
        }, configure: function(e) {
            "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this.prototype, e))
        }, refresh: function() {
            t.each(this.sliders, function() {
                this.refresh()
            }), this.isFresh = !0
        }, render: function() {
            this.isFresh || this.refresh(), t.each(this.sliders, function() {
                this.render()
            })
        }, requestRender: function() {
            var t = this;
            this.isBusy || (this.isBusy = !0, e.requestAnimationFrame(function() {
                t.render(), t.isBusy = !1
            }))
        }});
    var r = t.fn.parallax;
    t.fn.parallax = s, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() {
        return t.fn.parallax = r, this
    }, t(i).on("ready.px.parallax.data-api", function() {
        t('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document);;
(function($){

  'use strict';

  function initNavbar () {
    if (!$('section:first').is('.parallax, #home, .splash, .starter-block')) {
      $('#topnav').addClass('scroll');
      $('body').addClass('top-padding');
    }

    if ($('section:first').is('#home') && $('#home').hasClass('bordered')) {
      $('#topnav').addClass('top-space');
    }

    $(window).scroll(function() {
      
      if($('section:first').is('.parallax, #home, .splash, .starter-block')){
        if ($(window).scrollTop() >= 100 ) {
          $('#topnav').addClass('scroll');
        } else{
          $('#topnav').removeClass('scroll');
        }
      }

      var filters = $('#filters');
      if(filters.length && !filters.hasClass('no-fix')){
        if ($(window).scrollTop() >= $('.page-title:first').height() + 30) {
          filters.addClass('fixed');
        } else{
          filters.removeClass('fixed');
        }
      }

    }).trigger('scroll');

    $('.navbar-toggle').on('click', function(event) {
      $(this).toggleClass('open');
      $('#navigation').slideToggle(400);
      $('.cart, .search, .language-toggle').removeClass('open');
    });

    $('.language-toggle').on('click', function(event) {
      $(this).toggleClass('open');
      $('.cart, .search, .navbar-toggle').removeClass('open');
      $('#navigation').hide();
    });

    $('.cart').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if ($(window).width() < 768) {
        if ($('#navigation').is(':visible')) {
          $('.navbar-toggle').click();
        }
        $('.search').removeClass('open');
        $(this).toggleClass('open');
      }
    });

    $('.search').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if ($(window).width() < 768) {
        if ($('#navigation').is(':visible')) {
          $('.navbar-toggle').click();
        }
        $('.cart').removeClass('open');
        $(this).toggleClass('open');
      }
    });

    $('.shopping-cart, .search-form').on('click', function(e) {
      event.stopPropagation();
    });

    $('body').on('click', function(event) {
      $('.cart, .search').removeClass('open');
    });

    $('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.navigation-menu li.has-submenu >a').on('click', function(e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
      }
    });
  }

  function initHomeSlider() {

    $('#home-slider img').each(function(index, el) {
      var slide = $(this).parent('li');
      var image = $(this).attr('src');

      $(slide).prepend($('<div class="slide-image"></div>').css('background-image', 'url('+image+')'));

      if (navigator.userAgent.indexOf("Firefox") != -1 && $('#home').hasClass('bordered')) {
        $('.slide-image').addClass('ff-fix');
      }

      $(this).remove();
    });

    var options = {
      prevText: '<i class="ti-angle-left"></i>',
      nextText: '<i class="ti-angle-right"></i>',
      keyboard: false,
    };

    if ($('#home-slider .slides > li').length < 2) {
      options.directionNav = false
    }

    if ($('#home-slider').hasClass('kenburn')) {

      options.start = function () {
        $('#home-slider').find(".slides > li.flex-active-slide > .slide-image").each(function () {
          var $content = $(this);
          $content.css({
            '-webkit-transform': 'scale(1.2)',
            '-moz-transform': 'scale(1.2)',
            'transform': 'scale(1.2)',
          });
        });
      };

      options.before = function () {
        $('#home-slider').find(".slides > li > .slide-image").each(function () {
          var $content = $(this);
          $content.css({
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)',
            'transform': 'scale(1)',
          });
        });
      };

      options.after = function () {
        $('#home-slider').find(".slides > li.flex-active-slide > .slide-image").each(function () {
          var $content = $(this);
          $content.css({
            '-webkit-transform': 'scale(1.2)',
            '-moz-transform': 'scale(1.2)',
            'transform': 'scale(1.2)',
          });
        })
      }
    }

    $('#home-slider').flexslider(options);

    $('#text-rotator').flexslider({
      controlNav: false,
      directionNav: false
    })
  }

  function initCarousels () {
    $('.owl-carousel').each(function(index, el) {
      var dataOptions = $(this).data('options') || {};

      var options = {
        items: dataOptions.items || 4,
        loop: dataOptions.loop || true,
        dots: dataOptions.dots || false,
        margin: 130,
        autoplay: dataOptions.autoplay || false,
        responsiveClass: true,
        nav:false,
        responsive:{
          0:{
            items:  3
          },
          768:{
            items: 3,
          },
          992:{
            items: 3,
          },
          1200: {
            items: 6
          }
        }
      };

      if (options.autoplay) {
        options.autoplayTimeout = dataOptions.autoplayTimeout || 2000;
        options.autoplayHoverPause = true;
      }


      $(el).owlCarousel(options);
    });
  }

  function initSliders () {
    $('.flexslider').each(function(index, el) {
      var dataOptions = $(this).data('options') || {};

      var options = {
        animation: dataOptions.animation === 'slide' ? 'slide' : 'fade',
        controlNav: dataOptions.controlNav === true ? true : false,
        directionNav: dataOptions.directionNav === true ? true : false,
        prevText: '<i class="ti-arrow-left"></i>',
        nextText: '<i class="ti-arrow-right"></i>',
      };

      $(el).flexslider(options);
    });
  }

  function initMap() {

    var lat = $('#map').data('lat');
    var lang = $('#map').data('lang');

    var myLatlng = new google.maps.LatLng(lat, lang);

    var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      mapTypeControl: false,
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: false,
      styles: styles
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infowindow = new google.maps.InfoWindow({
      content: "We are here!"
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: 'images/marker.svg',
      title: 'We are here!'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  function initCountdowns () {
    $('.countdown').countdown({
          render: function(data) {
            $(this.el).html("<li><span>" + this.leadingZeros(data.days, 2) + " </span>days</li><li><span>" + this.leadingZeros(data.hours, 2) + " </span>hours</li><li><span>" + this.leadingZeros(data.min, 2) + " </span>mins</li><li><span>" + this.leadingZeros(data.sec, 2) + " </span>seconds</li>");
        }
    });
  }

  function initAccordions () {
    $('.accordion-title').on('click', function(event) {
      var accordion = $(this).parents('.accordion');

      if (!accordion.data('multiple')) {
        accordion.find('li').not($(this).parent()).removeClass('active');
        accordion.find('li').not($(this).parent()).find('.accordion-content').slideUp(300);
      }

      $(this).parent('li').toggleClass('active');
      $(this).next().slideToggle(300, function () {
        fixScroll();
      });

    });
  }

  function initLoad () {
    $(window).load(function() {
      function anim(){
        //$('#home-slider .slides li:first-child').addClass('anim-start');
      }
      setTimeout(anim, 2000);
      
      $("#loader").delay(500).fadeOut();
      $("#mask").delay(1000).fadeOut("slow");

      var $grid = $('#works').isotope({
        masonry: {
         columnWidth: 0
        },
        itemSelector: '.work-item'
      });

      $grid.on('layoutComplete', function(event) {
        $(window).trigger('resize');
        fixScroll();
      });

      $('.blog-masonry').isotope({
        masonry: {
         columnWidth: 0
        },
        itemSelector: '.masonry-post'
      });

      $('#filters').on('click', 'li', function() {
        $('#filters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $('#works').isotope({ filter: filterValue });
        $(window).trigger('resize');
      });

    });
  }

  function initVideoModal () {
    $('.play-button').on('click', function(e) {
      var videoUrl = $(this).data('src');

      var template = '<div id="gallery-modal">';
      template += '<div class="centrize">';
      template += '<div class="v-center">';
      template += '<div class="gallery-image">';
      template += '<div class="media-video">';
      template += '<a href="#" id="gallery-close"><i class="ti-close"></i></a>';
      template += '<iframe src="'+ videoUrl +'" frameborder="0">';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';

      $('body').append(template);

      $('body').addClass('modal-open');

      $('#gallery-modal').fadeIn(300);

    });
  }

  function initVideoBg(){

    if ($('.player').length) {
      $('.player').mb_YTPlayer({
        containment: '#video-wrapper',
        autoPlay: true,
        mute: true
      });

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#video-wrapper').append('<div id="fallback-bg"></div>');
        $('#fallback-bg').css('background-image', 'url('+$('#video-wrapper').data('fallback-bg')+')');
      }
    }

    var videoEl = $('#video-wrapper video');

    var setProportion = function () {
      var proportion = getProportion();
      videoEl.width(proportion*1280);
      videoEl.height(proportion*780);

      centerVideo();
    }

    var getProportion = function () {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var windowProportion = windowWidth / windowHeight;
      var origProportion = 1280 / 720;
      var proportion = windowHeight / 720;

      if (windowProportion >= origProportion) {
        proportion = windowWidth / 1280;
      }

      return proportion;
    }

    var centerVideo = function() {
      var centerX = (($(window).width() >> 1) - (videoEl.width() >> 1)) | 0;
      var centerY = (($(window).height() >> 1) - (videoEl.height() >> 1)) | 0;

      videoEl.css({ 'left': centerX, 'top': centerY });
        
    }

    if (videoEl.length) {
      $(window).resize(function() {
        setProportion();
      }).trigger('resize');
    }
  }

  function initPhotoGallery () {

    var imagesArray = [];

    $('.photo-gallery').on('click', '.gallery-item a', function(event) {
      event.preventDefault();

      var gallery = $(this).parents('.photo-gallery');
      var galleryElements = gallery.find('.gallery-item>a');

      for (var i = 0; i < galleryElements.length; i++) {
        imagesArray.push($(galleryElements[i]).attr('href'));
      };

      var image = $(this).attr('href');

      var template = '<div id="gallery-modal">';
      template += '<div class="centrize">';
      template += '<div class="v-center">';
      template += '<div class="gallery-image">';
      template += '<a href="#" id="gallery-close"><i class="ti-close"></i></a>';
      template += '<a href="#" class="gallery-control gallery-prev"><i class="ti-angle-left"></i></a>';
      template += '<img src="'+imagesArray[imagesArray.indexOf(image)]+'" alt="">';
      template += '<a href="#" class="gallery-control gallery-next"><i class="ti-angle-right"></i></a>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';

      $('body').append(template);
      $('body').addClass('modal-open');

      $('#gallery-modal').fadeIn(300);

    });

    $('body').on('click', '.gallery-control', function(event) {
      event.preventDefault();
      event.stopPropagation();

      var currentImage = $('.gallery-image').find('img');

      if ($(this).hasClass('gallery-next')) {
        if (imagesArray.indexOf(currentImage.attr('src')) >= (imagesArray.length - 1)) {
          return false;
        }

        currentImage.fadeOut(300, function() {
          var nextImage = imagesArray[imagesArray.indexOf(currentImage.attr('src')) + 1]
          $(currentImage).attr('src', nextImage);
        }).fadeIn(300);
      }

      else if ($(this).hasClass('gallery-prev')) {
        if (imagesArray.indexOf(currentImage.attr('src')) < 1) {
          return false;
        }

        currentImage.fadeOut(300, function() {
          var nextImage = imagesArray[imagesArray.indexOf(currentImage.attr('src')) - 1]
          $(currentImage).attr('src', nextImage);
        }).fadeIn(300);

      }

    });

    $('body').on('click', '#gallery-close', function(event) {
      event.preventDefault();
      $('#gallery-modal').fadeOut(300, function() {
        $('#gallery-modal').remove();
      });
      $('body').removeClass('modal-open');
    });

    $('body').on('click', '.gallery-image', function(event) {
      event.stopPropagation();
    });

    $('body').on('click', '#gallery-modal', function(event) {
      $('#gallery-close').trigger('click');
    });

    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        $('#gallery-close').trigger('click');
      }
      if (e.keyCode == 37) {
        $('.gallery-control.gallery-prev').trigger('click');
      }
      if (e.keyCode == 39) {
        $('.gallery-control.gallery-next').trigger('click');
      }
    });
  }

  function initContactForm() {

    var requiredInputs = $('#contact-form').find('input[data-required="true"], textarea[data-required="true"]').toArray();

    var isValidForm = function() {
      var toReturn;

      requiredInputs.forEach(function(element, index){
        if (!$(element).val()) {
          toReturn = false;
        } else{
          toReturn = true;
        }
      });

      return toReturn;
    }

    $('#contact-form').on('submit', function(event) {

      event.preventDefault();

      requiredInputs.forEach(function(element, index){
        if (!$(element).val()) {
          $(element).parent('.form-group').addClass('has-error');
        } else{
          $(element).parent('.form-group').removeClass('has-error');
        }
      });

      if (isValidForm()) {
        $.ajax({
          url: $(this).attr('action'),
          type: 'POST',
          data: $(this).serialize(),
        })
        .done(function() {
          var message = $('#contact-form').data('success-text') || 'Your message has been sent. We will get back to you shortly!';
          var succesTemplate = '<div role="alert" class="alert alert-success alert-outline">'+ message +'</div>';
          $('#contact-form input, #contact-form textarea, #contact-form button').attr('disabled', 'disabled');
          $('#contact-form .alert').fadeOut(300);
          $(succesTemplate).insertBefore($('#contact-form button'));
        })
        .fail(function() {
          var message = $('#contact-form').data('error-text') || 'There was an error. Try again later.';
          var errorTemplate = '<div role="alert" class="alert alert-danger alert-outline">'+ message +'</div>';
          $('#contact-form .alert').fadeOut(300);
          $(errorTemplate).insertBefore($('#contact-form button'));
        })        
      }

    });

    $('#contact-form input, #contact-form textarea').on('keyup', function(event) {
      event.preventDefault();
      if ($(this).val()) {
        $(this).parent('.form-group').removeClass('has-error');
      }
    });
  }

  function initCounters () {
    
    $('.counter').appear(function() {
      var counter = $(this).find('.number-count');
      var toCount = counter.data('count');
      
      $(counter).countTo({
        from: 0,
        to: toCount,
        speed: 1000,
        refreshInterval: 50
      })

    });
  }

  function fixScroll() {
    $('#sscr').css('height', 0);
    $('#sscr').css('height', document.documentElement.scrollHeight + 'px');
  }

  function initGeneral () {

    $("a[href='#top']").on('click', function() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });

    $('a[data-scroll="true"]').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    if ($('#navigation').data('onepage')) {
      $('body').scrollspy({
        target: '#navigation'
      });
    }

    $('.bg-img, .thumb-placeholder').each(function(index, el) {
      var image = $(el).attr('src');
      $(el).parent().css('background-image', 'url(' + image + ')');
      $(el).remove();
    });

    $('.alert').on('closed.bs.alert', function () {
      fixScroll();
    });

    var parallaxZIndex = -100;

    if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("MSIE ") != -1 || navigator.userAgent.match(/Trident.*rv\:11\./) != null){
      parallaxZIndex = 11;
      $('section.parallax').css('z-index', 20);
    }

    $('.parallax-bg').parallax({
      speed: 0.5,
      zIndex: parallaxZIndex
    });

    $('#login-tabs a:first').tab('show');

    $('#login-content .tab-pane:first').addClass('fade in');

    $('#login-tabs li a').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
    });

    $('a[data-toggle=tab]').on('click', function(event) {
      $(window).trigger('resize');
    });

    $('.particles-bg').particleground({
      dotColor: '#EF2D56',
      particleRadius: 5
    });

    $('.boxes [data-bg-color]').each(function(index, el) {
      $(el).css('background-color', $(el).data('bg-color'));  
    });

    $('.progress-bar').appear(function() {
      $(this).css('width', $(this).data('progress') + '%');
      $(this).parents('.skill').find('.skill-perc').css('right', 100 - $(this).data('progress') + '%');
    });

    $('[data-animated=true]').addClass('invisible');

    $('[data-animated=true]').appear(function(){
      var el = $(this);
      if (el.data('delay')) {
        setTimeout(function(){
          el.removeClass('invisible').addClass('fade-in-top');
        }, parseInt(el.data('delay')));
      } else{
        $(this).removeClass('invisible').addClass('fade-in-top');
      }
    }, {accX: 0, accY: 0});

    $('.client-image').hover(function() {
      $(this).removeClass('fade-in-top')
    }, function() {
      //
    });
  }

  function initCustom () {
    // Your custom code here.
  }

  function init () {
    initNavbar();
    initHomeSlider();
    initCarousels();
    initSliders();
    initAccordions();
    initLoad();
    initVideoBg();
    initVideoModal();
    initPhotoGallery();
    initContactForm();
    initCounters();
    initGeneral();
    initCustom();

    if ($('#map').length) {
      google.maps.event.addDomListener(window, 'load', initMap);
      $('#map').css('position', 'absolute');
    }

    if ($('.countdown').length) {
      initCountdowns();
    }
  }

  init();

})(jQuery)
;
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * update js at initCustom() function in main.js
 */

(function($) {
    $('#topnav #navigation .navigation-menu li.mega-menu').each(function(index, el) {
        $(this).find('>ul.submenu').addClass('megamenu');
        $(this).find('>ul.submenu ul').removeClass();
        $(this).find('ul li[class*="ti"]').each(function(index, el) {
            var classti = $(this).attr('class');
            $(this).find('> a').prepend('<i class="' + classti + '"></i>');
            $(this).removeClass();
        });
    });

    var cart_number = $('.menu-extras .menu-item .cart .view-header .line-item-quantity .line-item-quantity-raw').html();
    if ($('.menu-extras .menu-item .cart .view-header .line-item-quantity .line-item-quantity-raw').length == 0) {
        cart_number = '0';
    }
    $('.cart .cart-number').text(cart_number);


    $('.error-page form .container-inline .form-actions input[type=submit]').val('');
    $('.error-page form .container-inline .form-actions').prepend('<i class="ti-search"></i>');
    $('#topnav .container .menu-extras .search form .container-inline .form-actions input[type=submit]').val('');
    $('#topnav .container .menu-extras .search form .container-inline .form-actions').prepend('<i class="ti-search"></i>');
    $('.faq-form form .container-inline input[type=submit]').val('');
    $('.faq-form form .container-inline .form-actions').prepend('<span><i class="icon-search"></i></span>');
    $('.pass-form input[type=text]').attr('placeholder', 'Email or Username');
    $('.footer-mail form >div .form-item-mail input[type=text]').attr('placeholder', 'Your Email');
    $('#login-box .form-item-pass-pass1 input[type=password]').attr('placeholder', 'Password');
    $('#login-box .form-item-pass-pass2 input[type=password]').attr('placeholder', 'Repeat Password');
     $('section .profile').addClass('container');

    var menu_number = $('.restaurant-menu .col-md-6').length;
    for (var i = 0; i < menu_number - 1; i++) {
        if ((2 * 2 * i + 1) > menu_number) {
            break;
        } else {
            //add text=i into class number
            var number1 = 2 * 2 * i + 1;
            var number2 = 2 * 2 * i + 2;
            jQuery('.restaurant-menu .col-md-6:nth-of-type(' + number1 + ') .rs-menu').addClass('image-right');
            jQuery('.restaurant-menu .col-md-6:nth-of-type(' + number2 + ') .rs-menu').addClass('image-right');
        }
    }

})(jQuery);;
(function($){

	$('.add-nxt-form .btn').click(function(){
		$('.clone-section').clone().insertAfter('.clone-section');
	});

	function customCheckbox(checkboxName){
		var checkBox = $('input[name="'+ checkboxName +'"]');
		$(checkBox).each(function(){
			$(this).wrap( "<span class='custom-checkbox'></span>" );
			if($(this).is(':checked')){
				$(this).parent().addClass("selected");
			}
		});
		$(checkBox).click(function(){
			$(this).parent().toggleClass("selected");
		});
	}
	
	$('.accordion').click(function(){
		$(this).toggleClass( "active" );
	});

	customCheckbox("responsiblity[]");
	counterPlacement();
	applySummitBgColor();
	roundtableLinking ();
	hideCommitBlock();
	masonaryLayout();
	addEvenOddBlock();
	scrollAnimate();
	toggleShowMore();
	showLess();
	showMore();

})(jQuery);

$(window).resize(function() {
	setTimeout(function(){
		counterPlacement();
    },500);
});

function roundtableLinking () {
	if($("#disabilities").length == 1 || $("#political").length == 1 || $("#media-contact-linking").length == 1){
		var url = $(location).attr('href');
		var datatarget = url.split("#");
		var target = "#" + datatarget[1];
		if(target != "#undefined") {
			$('html, body').animate({
				scrollTop: $(target).offset().top - 200
			}, 500);
		}
	}
}

function scrollAnimate() {
	$('.media-quick-links .media-center-icons ul li label a,.media-quick-links .media-center-icons ul li> a').on('click',function() {
		var url = $(this).attr('href');
		var datatarget = url.split("#");
		var selfLink = "#" + datatarget[1];
		if(selfLink != "#undefined") {
			$('html, body').animate({
				scrollTop: $(selfLink).offset().top - 200
			}, 1000);
		}
	});
}

function counterPlacement () {
	var calculatedOffsetCounter,
	getWindowWidth = $(window).width(),
	checkAspectRatio = $(window).innerWidth()/$(window).innerHeight();
	if(getWindowWidth >= 1024 && checkAspectRatio > 1) {
		calculatedOffsetCounter = ($('.parallax').height()/2);
	} else if(getWindowWidth < 1024 && checkAspectRatio > 1) {
		calculatedOffsetCounter = $('.parallax').height() - 105;
	} else if(getWindowWidth < 1024 && checkAspectRatio < 1) {
		calculatedOffsetCounter = ($('.parallax').height()/2) + 142.5;
	}
	$(".block.slider-counter").css("top", calculatedOffsetCounter + "px");
}

function applySummitBgColor() {
	$('.summit-side-image').each(function(){
		$(this).css({
			"background-image": 'url('+$(this).attr('data-url')+')'
		});
	});
}

function hideCommitBlock() {
	//TODO: Hide third tile in home page
}

function masonaryLayout() {
	if($('.more-media-section,.major-section-blocks,.media-gallery').length !== 0) {
		var mediaContainer = $('.more-media-block').masonry({
				itemSelector: '.more-media-items',
				columnWidth: '.more-media-items'
			});
		var majorBlockContainer = $('.major-section-blocks').masonry({
				itemSelector: '.col-md-3',
				columnWidth: '.col-md-3'
			});
		var mediaCoverageContainer = $('.media-gallery').masonry({
				itemSelector: '.views-row',
				columnWidth: '.views-row'
			});
		mediaContainer.imagesLoaded( function() {
			mediaContainer.masonry();
		});
		majorBlockContainer.imagesLoaded( function() {
			majorBlockContainer.masonry();
		});
		mediaCoverageContainer.imagesLoaded( function() {
			mediaCoverageContainer.masonry();
		});
	}
}

function addEvenOddBlock() {
	$('.summit-happen-list ul li').each(function(){
		var $this = $(this);
		if($this.hasClass('views-row-even')) {
			$this.find('.summit-side-image').addClass('col-md-6 col-md-push-6 col-sm-6 col-sm-push-6');
			$this.find('.summit-side-text').addClass('col-md-6 col-md-pull-6 col-sm-6 col-sm-pull-6');
		} else {
			$this.find('.summit-side-image').addClass('col-md-6 col-sm-6');
			$this.find('.summit-side-text').addClass('col-md-6 col-sm-6');
		}
	});
}

function toggleShowMore() {
	var btnTemplate = '<div class="clearfix show-more-less-wrap"><a class = "show-more-less common-button-spec">Show More</a></div>',
	getLenght = $('.round-table-section ul li.round-table-blocks').length;
	$('.round-table-section').not('.not-show').each(function() {
		var getChildren = $(this).find('li'),
		childLength = getChildren.length;
		if(childLength > 9) {
			getChildren.each(function(index) {
				var $this = $(this);
				if($this.index() > 9) {
					$this.addClass('hide-elements');
					if ($this.index() == childLength - 1) {
						$(this).after(btnTemplate);
					}
				}
			});
		}
	});
}
function showMore() {
	$(document).on('click','.show-more-less',function(event) {
		var $this = $(this);
		$this.text('Show Less');
		$this.addClass('show-more').removeClass('show-more-less');
		$this.parent().siblings().removeClass('hide-elements');
		 var getIdName = $(this).closest('.view-content').siblings().find('.common-title').attr('id');
		if(getIdName != "#undefined") {
			$('html, body').animate({
				scrollTop: $('#'+getIdName).offset().top + 200
			}, 1000);
		}
	});
	$(document).on('click','.show-more',function(event) {
			$('html, body').animate({
				scrollTop: $(this).closest('.view-content').prev('.view-header').offset().top - 130
			}, 1000);
	});
}
function showLess() {
	$(document).on('click','.show-more',function(event) {
		var $this = $(this);
		$this.text('Show More');
		$this.addClass('show-more');
		var fetchChildren = $this.closest('ul').children('.round-table-blocks'),
		fetchChildrenLength = fetchChildren.length;
		if(fetchChildrenLength > 9) {
			fetchChildren.each(function(index) {
				var $that = $(this);
				if($that.index() > 9) {
					$that.addClass('hide-elements');
				}
			});
		}
		$this.addClass('show-more-less').removeClass('show-more');
		var getIdName = $(this).closest('.view-content').siblings().find('.common-title').attr('id');
		if(getIdName != "#undefined") {
			$('html, body').animate({
				scrollTop: $('#'+getIdName).offset().top + 200
			}, 1000);
		}
	});
}
;
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{},i=n[t]=n[t]||[];return i[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=0,s=n[i];e=e||[];for(var o=this._onceEvents&&this._onceEvents[t];s;){var r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e),i+=r?0:1,s=n[i]}return this}},t});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;g>e;e++){var i=a[e];t[i]=0}return t}function r(t){var e=getComputedStyle(t);return e||h("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!u){u=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=r(e);n.isBoxSizeOuter=d=200==t(o.width),i.removeChild(e)}}function n(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var n=r(e);if("none"==n.display)return i();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;for(var u=h.isBorderBox="border-box"==n.boxSizing,p=0;g>p;p++){var f=a[p],m=n[f],s=parseFloat(m);h[f]=isNaN(s)?0:s}var c=h.paddingLeft+h.paddingRight,l=h.paddingTop+h.paddingBottom,b=h.marginLeft+h.marginRight,x=h.marginTop+h.marginBottom,y=h.borderLeftWidth+h.borderRightWidth,v=h.borderTopWidth+h.borderBottomWidth,W=u&&d,w=t(n.width);w!==!1&&(h.width=w+(W?0:c+y));var B=t(n.height);return B!==!1&&(h.height=B+(W?0:l+v)),h.innerWidth=h.width-(c+y),h.innerHeight=h.height-(l+v),h.outerWidth=h.width+b,h.outerHeight=h.height+x,h}}var d,h="undefined"==typeof console?e:function(t){console.error(t)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],g=a.length,u=!1;return n});
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var e=function(){var e=Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],r=0;r<t.length;r++){var o=t[r],n=o+"MatchesSelector";if(e[n])return n}}();return function(t,r){return t[e](r)}});
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["matches-selector/matches-selector"],function(r){return t(e,r)}):"object"==typeof module&&module.exports?module.exports=t(e,require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(e,t){"use strict";var r={};r.extend=function(e,t){for(var r in t)e[r]=t[r];return e},r.modulo=function(e,t){return(e%t+t)%t},r.makeArray=function(e){var t=[];if(Array.isArray(e))t=e;else if(e&&"number"==typeof e.length)for(var r=0;r<e.length;r++)t.push(e[r]);else t.push(e);return t},r.removeFrom=function(e,t){var r=e.indexOf(t);-1!=r&&e.splice(r,1)},r.getParent=function(e,r){for(;e!=document.body;)if(e=e.parentNode,t(e,r))return e},r.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},r.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.filterFindElements=function(e,n){e=r.makeArray(e);var o=[];return e.forEach(function(e){if(e instanceof HTMLElement){if(!n)return void o.push(e);t(e,n)&&o.push(e);for(var r=e.querySelectorAll(n),u=0;u<r.length;u++)o.push(r[u])}}),o},r.debounceMethod=function(e,t,r){var n=e.prototype[t],o=t+"Timeout";e.prototype[t]=function(){var e=this[o];e&&clearTimeout(e);var t=arguments,u=this;this[o]=setTimeout(function(){n.apply(u,t),delete u[o]},r||100)}},r.docReady=function(e){"complete"==document.readyState?e():document.addEventListener("DOMContentLoaded",e)},r.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,r){return t+"-"+r}).toLowerCase()};var n=e.console;return r.htmlInit=function(t,o){r.docReady(function(){var u=r.toDashed(o),a="data-"+u,i=document.querySelectorAll("["+a+"]"),c=document.querySelectorAll(".js-"+u),s=r.makeArray(i).concat(r.makeArray(c)),f=a+"-options",d=e.jQuery;s.forEach(function(e){var r,u=e.getAttribute(a)||e.getAttribute(f);try{r=u&&JSON.parse(u)}catch(i){return void(n&&n.error("Error parsing "+a+" on "+e.className+": "+i))}var c=new t(e,r);d&&d.data(e,o,c)})})},r});
!function(t,i){"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size"],function(n,o){return i(t,n,o)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=i(t,t.EvEmitter,t.getSize))}(window,function(t,i,n){"use strict";function o(t){for(var i in t)return!1;return i=null,!0}function e(t,i){t&&(this.element=t,this.layout=i,this.position={x:0,y:0},this._create())}function s(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,a="string"==typeof r.transition?"transition":"WebkitTransition",h="string"==typeof r.transform?"transform":"WebkitTransform",l={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],u=[h,a,a+"Duration",a+"Property"],d=e.prototype=Object.create(i.prototype);d.constructor=e,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},d.getSize=function(){this.size=n(this.element)},d.css=function(t){var i=this.element.style;for(var n in t){var o=u[n]||n;i[o]=t[n]}},d.getPosition=function(){var t=getComputedStyle(this.element),i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=t[i?"left":"right"],e=t[n?"top":"bottom"],s=this.layout.size,r=-1!=o.indexOf("%")?parseFloat(o)/100*s.width:parseInt(o,10),a=-1!=e.indexOf("%")?parseFloat(e)/100*s.height:parseInt(e,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=i?s.paddingLeft:s.paddingRight,a-=n?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,i={},n=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),e=n?"paddingLeft":"paddingRight",s=n?"left":"right",r=n?"right":"left",a=this.position.x+t[e];i[s]=this.getXValue(a),i[r]="";var h=o?"paddingTop":"paddingBottom",l=o?"top":"bottom",u=o?"bottom":"top",d=this.position.y+t[h];i[l]=this.getYValue(d),i[u]="",this.css(i),this.emitEvent("layout",[this])},d.getXValue=function(t){var i=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!i?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var i=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&i?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,i){this.getPosition();var n=this.position.x,o=this.position.y,e=parseInt(t,10),s=parseInt(i,10),r=e===this.position.x&&s===this.position.y;if(this.setPosition(t,i),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-n,h=i-o,l={};l.transform=this.getTranslate(a,h),this.transition({to:l,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,i){var n=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=n?t:-t,i=o?i:-i,"translate3d("+t+"px, "+i+"px, 0)"},d.goTo=function(t,i){this.setPosition(t,i),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,i){this.position.x=parseInt(t,10),this.position.y=parseInt(i,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var i in t.onTransitionEnd)t.onTransitionEnd[i].call(this)},d._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var i=this._transn;for(var n in t.onTransitionEnd)i.onEnd[n]=t.onTransitionEnd[n];for(n in t.to)i.ingProperties[n]=!0,t.isCleaning&&(i.clean[n]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var p="opacity,"+s(u.transform||"transform");d.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:p,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(l,this,!1))},d.transition=e.prototype[a?"_transition":"_nonTransition"],d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var i=this._transn,n=f[t.propertyName]||t.propertyName;if(delete i.ingProperties[n],o(i.ingProperties)&&this.disableTransition(),n in i.clean&&(this.element.style[t.propertyName]="",delete i.clean[n]),n in i.onEnd){var e=i.onEnd[n];e.call(this),delete i.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(l,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var i={};for(var n in t)i[n]="";this.css(i)};var c={transitionProperty:"",transitionDuration:""};return d.removeTransitionStyles=function(){this.css(c)},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return a&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,i={},n=this.getHideRevealTransitionEndProperty("visibleStyle");i[n]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:i})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var i=this.layout.options[t];if(i.opacity)return"opacity";for(var n in i)return n},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,i={},n=this.getHideRevealTransitionEndProperty("hiddenStyle");i[n]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:i})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},e});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,s,o){return e(t,i,n,s,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,s){"use strict";function o(t,e){var i=n.getQueryElement(t);if(!i)return void(a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var s=++m;this.element.outlayerGUID=s,c[s]=this,this._create();var o=this._getOption("initLayout");o&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,h=t.jQuery,u=function(){},m=0,c={};o.namespace="outlayer",o.Item=s,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var l=o.prototype;return n.extend(l,e.prototype),l.option=function(t){n.extend(this.options,t)},l._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},l._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},l.reloadItems=function(){this.items=this._itemize(this.element.children)},l._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],s=0;s<e.length;s++){var o=e[s],r=new i(o,this);n.push(r)}return n},l._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},l.getItemElements=function(){return this.items.map(function(t){return t.element})},l.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},l._init=l.layout,l._resetLayout=function(){this.getSize()},l.getSize=function(){this.size=i(this.element)},l._getMeasurement=function(t,e){var n,s=this.options[t];s?("string"==typeof s?n=this.element.querySelector(s):s instanceof HTMLElement&&(n=s),this[t]=n?i(n)[e]:s):this[t]=0},l.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},l._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},l._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},l._getItemLayoutPosition=function(){return{x:0,y:0}},l._processLayoutQueue=function(t){t.forEach(function(t){this._positionItem(t.item,t.x,t.y,t.isInstant)},this)},l._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},l._postLayout=function(){this.resizeContainer()},l.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},l._getContainerSize=u,l._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},l._emitCompleteOnItems=function(t,e){function i(){s.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==o&&i()}var s=this,o=e.length;if(!e||!o)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},l.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var s=h.Event(e);s.type=t,this.$element.trigger(s,i)}else this.$element.trigger(t,i)},l.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},l.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},l.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},l.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},l._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},l._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},l._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},l._manageStamp=u,l._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,s=i(t),o={left:e.left-n.left-s.marginLeft,top:e.top-n.top-s.marginTop,right:n.right-e.right-s.marginRight,bottom:n.bottom-e.bottom-s.marginBottom};return o},l.handleEvent=n.handleEvent,l.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},l.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},l.onresize=function(){this.resize()},n.debounceMethod(o,"onresize",100),l.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},l.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},l.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},l.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},l.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},l.reveal=function(t){this._emitCompleteOnItems("reveal",t),t&&t.length&&t.forEach(function(t){t.reveal()})},l.hide=function(t){this._emitCompleteOnItems("hide",t),t&&t.length&&t.forEach(function(t){t.hide()})},l.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},l.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},l.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},l.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},l.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},l.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},o.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},o.create=function(t,e){var i=r(o);return i.defaults=n.extend({},o.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},o.compatOptions),i.namespace=t,i.data=o.data,i.Item=r(s),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i},o.Item=s,o});
!function(t,i){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],i):"object"==typeof module&&module.exports?module.exports=i(require("outlayer"),require("get-size")):t.Masonry=i(t.Outlayer,t.getSize)}(window,function(t,i){"use strict";var e=t.create("masonry");return e.compatOptions.fitWidth="isFitWidth",e.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},e.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&i(e).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,h=this.containerWidth+this.gutter,s=h/o,n=o-h%o,r=n&&1>n?"round":"floor";s=Math[r](s),this.cols=Math.max(s,1)},e.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),e=t?this.element.parentNode:this.element,o=i(e);this.containerWidth=o&&o.innerWidth},e.prototype._getItemLayoutPosition=function(t){t.getSize();var i=t.size.outerWidth%this.columnWidth,e=i&&1>i?"round":"ceil",o=Math[e](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var h=this._getColGroup(o),s=Math.min.apply(Math,h),n=h.indexOf(s),r={x:this.columnWidth*n,y:s},a=s+t.size.outerHeight,u=this.cols+1-h.length,l=0;u>l;l++)this.colYs[n+l]=a;return r},e.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var i=[],e=this.cols+1-t,o=0;e>o;o++){var h=this.colYs.slice(o,o+t);i[o]=Math.max.apply(Math,h)}return i},e.prototype._manageStamp=function(t){var e=i(t),o=this._getElementOffset(t),h=this._getOption("originLeft"),s=h?o.left:o.right,n=s+e.outerWidth,r=Math.floor(s/this.columnWidth);r=Math.max(0,r);var a=Math.floor(n/this.columnWidth);a-=n%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=this._getOption("originTop"),l=(u?o.top:o.bottom)+e.outerHeight,c=r;a>=c;c++)this.colYs[c]=Math.max(l,this.colYs[c])},e.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},e.prototype._getContainerFitWidth=function(){for(var t=0,i=this.cols;--i&&0===this.colYs[i];)t++;return(this.cols-t)*this.columnWidth-this.gutter},e.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e});
(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var r=e.prototype,i=this,s=i.EventEmitter;r.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},r.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},r.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},r.addListener=function(e,n){var r,i=this.getListenersAsObject(e),s="object"==typeof n;for(r in i)i.hasOwnProperty(r)&&-1===t(i[r],n)&&i[r].push(s?n:{listener:n,once:!1});return this},r.on=n("addListener"),r.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},r.once=n("addOnceListener"),r.defineEvent=function(e){return this.getListeners(e),this},r.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},r.removeListener=function(e,n){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&(r=t(s[i],n),-1!==r&&s[i].splice(r,1));return this},r.off=n("removeListener"),r.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},r.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},r.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},r.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},r.removeAllListeners=n("removeEvent"),r.emitEvent=function(e,t){var n,r,i,s,o,u=this.getListenersAsObject(e);for(s in u)if(u.hasOwnProperty(s))for(n=u[s].slice(0),i=n.length;i--;)r=n[i],r.once===!0&&this.removeListener(e,r.listener),o=r.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},r.trigger=n("emitEvent"),r.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},r.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},r._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},r._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return i.EventEmitter=s,e},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:i.EventEmitter=e}).call(this);
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("wolfy87-eventemitter")):t.imagesLoaded=e(t,t.EventEmitter)}(window,function(t,e){"use strict";function i(t,e){for(var i in e)t[i]=e[i];return t}function o(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function r(t,e,n){return this instanceof r?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=o(t),this.options=i({},this.options),"function"==typeof e?n=e:i(this.options,e),n&&this.on("always",n),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(t,e,n)}function n(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),o=0;o<i.length;o++){var r=i[o];this.addImage(r)}if("string"==typeof this.options.background){var n=t.querySelectorAll(this.options.background);for(o=0;o<n.length;o++){var s=n[o];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,o=i.exec(e.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,t),o=i.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new n(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},r.prototype.check=function(){function t(t,i,o){setTimeout(function(){e.progress(t,i,o)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},r.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emit("progress",this,t,e),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(t,this),this.emit("always",this),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},n.prototype=Object.create(e.prototype),n.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},n.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.img,e)},n.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},n.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},n.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(n.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.element,e)},r.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new r(this,t,e);return i.jqDeferred.promise(h(this))})},r.makeJQueryPlugin(),r});
!function(t){"use strict";function e(){var t=new Date,e=t.getMinutes();e=10>e?"0"+e:e;var n=t.getSeconds();return n=10>n?"0"+n:n,[t.getHours(),e,n].join(":")}var n=t.MD={};n.pages={},n.modules={},t.filterBindEvent=function(t,e,n,i){t.addEventListener(e,function(t){matchesSelector(t.target,n)&&i.call(t.target,t)})};var i;document.addEventListener("DOMContentLoaded",function(){i=document.querySelector("#notification");for(var t=document.querySelectorAll("[data-js-module]"),e=0;e<t.length;e++){var o=t[e],a=o.getAttribute("data-js-module"),r=n.modules[a];r&&r(o)}}),n.getItemElement=function(){var t=document.createElement("div"),e=Math.random(),n=Math.random(),i=e>.8?"grid-item--width3":e>.6?"grid-item--width2":"",o=n>.8?"grid-item--height3":n>.5?"grid-item--height2":"";return t.className="grid-item "+i+" "+o,t},n.getSomeItemElements=function(){for(var t=document.createDocumentFragment(),e=[],n=0;3>n;n++){var i=document.createElement("div"),o=Math.random(),a=o>.85?"w4":o>.7?"w2":"",r=Math.random(),d=r>.85?"h4":r>.7?"h2":"";i.className="item "+a+" "+d,t.appendChild(i),e.push(i)}};var o,a=document.documentElement,r="string"==typeof a.style.transition?"transition":"WebkitTransition",d=r?1e3:1500;n.notify=function(t){i.textContent=t+" at "+e(),i.style[r]="none",i.style.display="block",i.style.opacity="1",clearTimeout(o),o=setTimeout(n.hideNotify,d)},n.hideNotify=function(){r?(i.style[r]="opacity 1.0s",i.style.opacity="0"):i.style.display="none"}}(window);
MD.modules["animate-item-size"]=function(e){"use strict";var t=e.querySelector(".grid"),i=new Masonry(t,{columnWidth:60});filterBindEvent(t,"click",".animate-item-size-item__content",function(e){e.target.parentNode.classList.toggle("is-expanded"),i.layout()})};
MD.modules["animate-item-size-responsive"]=function(t){"use strict";function e(t){var e=getSize(t);t.style[o]="none",t.style.width=e.width+"px",t.style.height=e.height+"px"}function i(t){var e=function(){t.style.width="",t.style.height="",t.removeEventListener(r,e,!1)};t.addEventListener(r,e,!1)}function n(t,e){var i=getSize(e);t.style.width=i.width+"px",t.style.height=i.height+"px"}var s=document.documentElement,o="string"==typeof s.style.transition?"transition":"WebkitTransition",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],a=t.querySelector(".grid"),d=new Masonry(a,{itemSelector:".animate-item-size-item",columnWidth:".grid-sizer",percentPosition:!0});filterBindEvent(a,"click",".animate-item-size-item__content",function(){var t=this;e(t);var s=t.parentNode;s.classList.toggle("is-expanded");t.offsetWidth;t.style[o]="",i(t),n(t,s),d.layout()})};
MD.modules["appended-demo"]=function(e){"use strict";var t=e.querySelector(".grid"),n=new Masonry(t,{columnWidth:80}),d=e.querySelector(".append-button");d.addEventListener("click",function(){var e=[MD.getItemElement(),MD.getItemElement(),MD.getItemElement()],d=document.createDocumentFragment();d.appendChild(e[0]),d.appendChild(e[1]),d.appendChild(e[2]),t.appendChild(d),n.appended(e)})};
MD.modules["destroy-demo"]=function(e){"use strict";var t=e.querySelector(".grid"),o={columnWidth:80},n=new Masonry(t,o),r=!0,c=e.querySelector(".toggle-button");c.addEventListener("click",function(){r?n.destroy():n=new Masonry(t,o),r=!r})};
MD.modules.hero=function(e){"use strict";function t(e){var t=document.createElement("div");t.className="hero-grid__item";var i=document.createElement("a");i.className="hero__example-link",i.href=e.url;var r=document.createElement("img");r.className="hero__example-link__img",r.src=e.image;var m=document.createElement("p");return m.className="hero__example-link__title",m.textContent=e.title,i.appendChild(r),i.appendChild(m),t.appendChild(i),t}for(var i=e.querySelector(".hero-grid"),r=new Masonry(i,{itemSelector:".hero-grid__item",columnWidth:".hero-grid__grid-sizer",percentPosition:!0}),m=[{title:"Erik Johansson",url:"http://erikjohanssonphoto.com/work/imagecats/personal/",image:"http://i.imgur.com/6Lo8oun.jpg"},{title:"Beyoncé | I Am",url:"http://iam.beyonce.com/",image:"http://i.imgur.com/HDSAMFl.jpg"},{title:"Webster Hall Timeline",url:"http://www.websterhall.com/timeline/",image:"http://i.imgur.com/VWfCPYx.jpg"},{title:"Halcyon theme",url:"http://halcyon-theme.tumblr.com/",image:"http://i.imgur.com/A1RSOhg.jpg"},{title:"RESIZE.THATSH.IT",url:"http://resize.thatsh.it/",image:"http://i.imgur.com/00xWxLG.png"},{title:"Tumblr Staff: Archive",url:"http://staff.tumblr.com/archive",image:"http://i.imgur.com/igjvRa3.jpg"},{title:"Kristian Hammerstad",url:"http://www.kristianhammerstad.com/",image:"http://i.imgur.com/Zwd7Sch.jpg"},{title:"Loading Effects for Grid Items | Demo 2",url:"http://tympanus.net/Development/GridLoadingEffects/index2.html",image:"http://i.imgur.com/iFBSB1t.jpg"}],a=[],o=document.createDocumentFragment(),n=0,l=m.length;l>n;n++){var p=t(m[n]);a.push(p),o.appendChild(p)}imagesLoaded(o).on("progress",function(e,t){var m=t.img.parentNode.parentNode;i.appendChild(m),r.appended(m)})};
MD.modules["imagesloaded-callback"]=function(e){"use strict";imagesLoaded(e,function(){new Masonry(e,{itemSelector:".grid-image-item",columnWidth:".grid-sizer",percentPosition:!0})})};
MD.modules["imagesloaded-progress"]=function(e){"use strict";var i=new Masonry(e,{itemSelector:".grid-image-item",columnWidth:".grid-sizer",percentPosition:!0}),o=imagesLoaded(e);o.on("progress",function(){i.layout()})};
MD.modules["layout-complete-demo"]=function(t){"use strict";var e=t.querySelector(".grid"),o=new Masonry(e,{columnWidth:80});o.on("layoutComplete",function(t){MD.notify("Masonry layout completed on "+t.length+" items")}),filterBindEvent(e,"click",".grid-item",function(t){t.target.classList.toggle("grid-item--gigante"),o.layout()})};
MD.modules["layout-demo"]=function(t){"use strict";var e=t.querySelector(".grid"),i=new Masonry(e,{columnWidth:80});filterBindEvent(e,"click",".grid-item",function(t){t.target.classList.toggle("grid-item--gigante"),i.layout()})};
MD.modules["prepended-demo"]=function(e){"use strict";var t=e.querySelector(".grid"),n=new Masonry(t,{columnWidth:80}),d=e.querySelector(".prepend-button");d.addEventListener("click",function(){var e=[MD.getItemElement(),MD.getItemElement(),MD.getItemElement()],d=document.createDocumentFragment();d.appendChild(e[0]),d.appendChild(e[1]),d.appendChild(e[2]),t.insertBefore(d,t.firstChild),n.prepended(e)})};
MD.modules["refactor-shirt"]=function(t){"use strict";var e=new Date(2016,1,10),r=Math.round((e-new Date)/864e5);t.querySelector(".refactor-shirt__title").textContent="Refactor shirts. Only on sale for "+r+" more days."};
MD.modules["remove-complete-demo"]=function(e){"use strict";var t=e.querySelector(".grid"),o=new Masonry(t,{columnWidth:80});o.on("removeComplete",function(e){MD.notify("Removed "+e.length+" items")}),filterBindEvent(t,"click",".grid-item",function(e){o.remove(e.target),o.layout()})};
MD.modules["remove-demo"]=function(e){"use strict";var t=e.querySelector(".grid"),r=new Masonry(t,{columnWidth:80});filterBindEvent(t,"click",".grid-item",function(e){r.remove(e.target),r.layout()})};
MD.modules["stamp-methods-demo"]=function(t){"use strict";var e=t.querySelector(".grid"),o=new Masonry(e,{itemSelector:".grid-item",columnWidth:80}),r=e.querySelector(".stamp"),m=!1,n=t.querySelector(".stamp-button");n.addEventListener("click",function(){m?o.unstamp(r):o.stamp(r),o.layout(),m=!m})};;
