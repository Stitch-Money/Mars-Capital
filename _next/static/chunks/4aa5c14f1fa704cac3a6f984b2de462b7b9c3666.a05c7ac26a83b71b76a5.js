(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"16RA":function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return k}));var r=n("o0o1"),o=n.n(r);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,u,"next",e)}function u(e){c(a,r,o,i,u,"throw",e)}i(void 0)}))}}function f(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l="c05f0a6c-4d56-4306-830b-1a0a35fd5075",d=["accountholders","balances","transactions","accounts","offline_access","openid"],p="http://localhost:3000/return";function h(e){var t=String.fromCharCode.apply(String,f(e));return window.btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function v(e){return y.apply(this,arguments)}function y(){return(y=s(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,e.abrupt("return",new Uint8Array(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return b.apply(this,arguments)}function b(){return(b=s(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=crypto.getRandomValues(new Uint8Array(32)),n=h(t),e.next=4,v(n).then(h);case 4:return r=e.sent,e.abrupt("return",[n,r]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return h(crypto.getRandomValues(new Uint8Array(32)))}function w(){return _.apply(this,arguments)}function _(){return(_=s(o.a.mark((function e(){var t,n,r,a,i,c,s,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),n=g(),e.next=4,m();case 4:return r=e.sent,a=u(r,2),i=a[0],c=a[1],s={client_id:l,code_challenge:c,code_challenge_method:"S256",redirect_uri:p,scope:d.join(" "),response_type:"code",nonce:n,state:t},f=Object.entries(s).map((function(e){var t=u(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),e.abrupt("return",["https://secure.stitch.money/connect/authorize?".concat(f),i,n]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return x.apply(this,arguments)}function x(){return(x=s(o.a.mark((function e(t,n){var r,a,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={grant_type:"authorization_code",client_id:l,code:t,redirect_uri:p,code_verifier:n},a=Object.entries(r).map((function(e){var t=u(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),e.next=4,fetch("https://secure.stitch.money/connect/token",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});case 4:return i=e.sent,e.next=7,i.json();case 7:return c=e.sent,console.log("Tokens: ",c),e.abrupt("return",{id_token:c.id_token,access_token:c.access_token,expires_in:c.expires_in,token_type:c.token_type,refresh_token:c.refresh_token,scope:c.scope});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return S.apply(this,arguments)}function S(){return(S=s(o.a.mark((function e(){var t,n,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,n=u(t,3),r=n[0],a=n[1],i=n[2],localStorage.setItem("stitchVerifier",a),localStorage.setItem("stitchNonce",i),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return M.apply(this,arguments)}function M(){return(M=s(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=o.a.createElement;function c(){return u("nav",{id:"navbar",className:"navbar has-shadow is-spaced"},u("div",{className:"container"},u("div",{className:"navbar-brand"},u("img",{className:"navbar-item",src:"/favicon.svg",width:"60px",alt:""}),u("h2",{className:"navbar-item"},d)),u("a",{className:"navbar-item navbar-end button is-primary is-hidden-mobile"},"Apply!")))}var s=o.a.createElement;function f(){return s("footer",{className:"footer"},s("div",{className:"content has-text-centered"},s("p",null,s("strong",null,d," Demo")," by ",s("a",{href:"https://stitch.money/"},"Stitch"),". The source code is ",s("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT")," licensed.")))}var l=o.a.createElement,d="Martian Money";function p(e){var t=e.children;return l(o.a.Fragment,null,l(i.a,null,l("title",null,d),l("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),l("link",{rel:"alternate icon",href:"/favicon.ico"}),l("meta",{name:"description",content:"Providing the financial services you'll need for your new Martian life!"}),l("meta",{name:"og:title",content:d})),l(c,null),t,l(f,null))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},VtrM:function(e,t,n){"use strict";var r=n("q1tI"),o=Object.prototype.hasOwnProperty;function a(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}var i=new WeakMap,u=0;var c=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):i.has(e[n])?r=i.get(e[n]):(r=u,i.set(e[n],u++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var s="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),f={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(a()&&!("number"===typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var i=Math.min(o.retryCount||0,8),u=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,u,o)}},errorRetryInterval:1e3*(s?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(s?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,a;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((a=t.length)===n.length)for(;a--&&e(t[a],n[a]););return-1===a}if(!r||"object"===typeof t){for(r in a=0,t){if(o.call(t,r)&&++a&&!o.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===a}}return t!==t&&n!==n},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}};function l(){return"undefined"===typeof navigator.onLine||navigator.onLine}var d=Object(r.createContext)({});d.displayName="SWRConfigContext";var p=d,h=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},y="undefined"===typeof window,m=y?null:window.requestIdleCallback||function(e){return setTimeout(e,1)},b=y?r.useEffect:r.useLayoutEffect,g={},w={},_={},O={},x={},j={},S={};if(!y&&window.addEventListener){var k=function(e){if(a()&&l())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return k(_)}),!1),window.addEventListener("focus",(function(){return k(_)}),!1),window.addEventListener("online",(function(){return k(O)}),!1)}var M=function(e,t){void 0===t&&(t=!0);var n=c.serializeKey(e),r=n[0],o=n[2],a=n[3];if(!r)return Promise.resolve();var i=x[r];if(r&&i){for(var u=c.get(r),s=c.get(o),f=c.get(a),l=[],d=0;d<i.length;++d)l.push(i[d](t,u,s,f,d>0));return Promise.all(l).then((function(){return c.get(r)}))}return Promise.resolve(c.get(r))},I=function(e,t,n,r){var o=x[e];if(e&&o)for(var a=0;a<o.length;++a)o[a](!1,t,n,r)},C=function(e,t,n){return void 0===n&&(n=!0),h(void 0,void 0,void 0,(function(){var r,o,a,i,u,s,f,l,d,p,h,y;return v(this,(function(v){switch(v.label){case 0:if(r=c.serializeKey(e),o=r[0],a=r[2],!o)return[2];if("undefined"===typeof t)return[2,M(e,n)];if(j[o]=Date.now()-1,S[o]=0,i=j[o],u=w[o],!t||"function"!==typeof t)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,t(c.get(o))];case 2:return s=v.sent(),[3,4];case 3:return l=v.sent(),f=l,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];v.label=6;case 6:return v.trys.push([6,8,,9]),[4,t];case 7:return s=v.sent(),[3,9];case 8:return d=v.sent(),f=d,[3,9];case 9:return[3,11];case 10:s=t,v.label=11;case 11:if(i!==j[o]||u!==w[o]){if(f)throw f;return[2,s]}if("undefined"!==typeof s&&c.set(o,s),c.set(a,f),S[o]=Date.now()-1,p=x[o]){for(h=[],y=0;y<p.length;++y)h.push(p[y](!!n,s,f,void 0,y>0));return[2,Promise.all(h).then((function(){if(f)throw f;return c.get(o)}))]}if(f)throw f;return[2,s]}}))}))};p.Provider;var A=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o,i,u={};t.length>=1&&(o=t[0]),t.length>2?(i=t[1],u=t[2]):"function"===typeof t[1]?i=t[1]:"object"===typeof t[1]&&(u=t[1]);var s=c.serializeKey(o),d=s[0],y=s[1],k=s[2],M=s[3];u=Object.assign({},f,Object(r.useContext)(p),u);var A=Object(r.useRef)(u);b((function(){A.current=u})),"undefined"===typeof i&&(i=u.fetcher);var E=function(){var e=c.get(d);return"undefined"===typeof e?u.initialData:e},R=E(),P=c.get(k),T=!!c.get(M),V=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),D=Object(r.useRef)({data:R,error:P,isValidating:T});Object(r.useDebugValue)(D.current.data);var H=Object(r.useState)(null)[1],N=Object(r.useCallback)((function(e){var t=!1;for(var n in e)D.current[n]!==e[n]&&(D.current[n]=e[n],V.current[n]&&(t=!0));if(t||u.suspense){if(W.current)return;H({})}}),[]),W=Object(r.useRef)(!1),K=Object(r.useRef)(d),q=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];W.current||(t=A.current)[e].apply(t,n)}}),z=Object(r.useCallback)((function(e,t){return C(K.current,e,t)}),[]),L=function(e,t){t&&(e[d]?e[d].push(t):e[d]=[t])},U=function(e,t){if(e[d]){var n=e[d],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},F=Object(r.useCallback)((function(t){return void 0===t&&(t={}),h(e,void 0,void 0,(function(){var e,n,r,o,a,s,f;return v(this,(function(l){switch(l.label){case 0:if(!d||!i)return[2,!1];if(W.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof g[d]&&t.dedupe,l.label=1;case 1:return l.trys.push([1,6,,7]),N({isValidating:!0}),c.set(M,!0),n||I(d,void 0,void 0,!0),r=void 0,o=void 0,n?(o=w[d],[4,g[d]]):[3,3];case 2:return r=l.sent(),[3,5];case 3:return u.loadingTimeout&&!c.get(d)&&setTimeout((function(){e&&q.current.emit("onLoadingSlow",d,u)}),u.loadingTimeout),g[d]=null!==y?i.apply(void 0,y):i(d),w[d]=o=Date.now(),[4,g[d]];case 4:r=l.sent(),setTimeout((function(){delete g[d],delete w[d]}),u.dedupingInterval),q.current.emit("onSuccess",r,d,u),l.label=5;case 5:return w[d]>o||j[d]&&(o<=j[d]||o<=S[d]||0===S[d])?(N({isValidating:!1}),[2,!1]):(c.set(d,r),c.set(k,void 0),c.set(M,!1),a={isValidating:!1},"undefined"!==typeof D.current.error&&(a.error=void 0),u.compare(D.current.data,r)||(a.data=r),N(a),n||I(d,r,void 0,!1),[3,7]);case 6:return s=l.sent(),delete g[d],delete w[d],c.set(k,s),D.current.error!==s&&(N({isValidating:!1,error:s}),n||I(d,void 0,s,!1)),q.current.emit("onError",s,d,u),u.shouldRetryOnError&&(f=(t.retryCount||0)+1,q.current.emit("onErrorRetry",s,d,u,F,Object.assign({dedupe:!0},t,{retryCount:f}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[d]);b((function(){if(d){W.current=!1;var e=D.current.data,t=E();K.current!==d&&(K.current=d),u.compare(e,t)||N({data:t});var n=function(){return F({dedupe:!0})};(u.revalidateOnMount||!u.initialData&&void 0===u.revalidateOnMount)&&("undefined"!==typeof t?m(n):n());var r=!1,o=function(){!r&&A.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),A.current.focusThrottleInterval))},a=function(){A.current.revalidateOnReconnect&&n()},i=function(e,t,r,o,a){void 0===e&&(e=!0),void 0===a&&(a=!0);var i={},c=!1;return"undefined"===typeof t||u.compare(D.current.data,t)||(i.data=t,c=!0),D.current.error!==r&&(i.error=r,c=!0),"undefined"!==typeof o&&D.current.isValidating!==o&&(i.isValidating=o,c=!0),c&&N(i),!!e&&(a?n():F())};return L(_,o),L(O,a),L(x,i),function(){N=function(){return null},W.current=!0,U(_,o),U(O,a),U(x,i)}}}),[d,F]),b((function(){var t=null,n=function(){return h(e,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return D.current.error||!A.current.refreshWhenHidden&&!a()||!A.current.refreshWhenOffline&&!l()?[3,2]:[4,F({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return A.current.refreshInterval&&!D.current.error&&(t=setTimeout(n,A.current.refreshInterval)),[2]}}))}))};return A.current.refreshInterval&&(t=setTimeout(n,A.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[u.refreshInterval,u.refreshWhenHidden,u.refreshWhenOffline,F]);var J=Object(r.useMemo)((function(){var e={revalidate:F,mutate:z};return Object.defineProperties(e,{error:{get:function(){return V.current.error=!0,K.current===d?D.current.error:P},enumerable:!0},data:{get:function(){return V.current.data=!0,K.current===d?D.current.data:R},enumerable:!0},isValidating:{get:function(){return V.current.isValidating=!0,D.current.isValidating},enumerable:!0}}),e}),[F]);if(u.suspense){var Y=c.get(d),Z=c.get(k);if("undefined"===typeof Y&&(Y=R),"undefined"===typeof Z&&(Z=P),"undefined"===typeof Y&&"undefined"===typeof Z){if(g[d]||F(),g[d]&&"function"===typeof g[d].then)throw g[d];Y=g[d]}if("undefined"===typeof Y&&Z)throw Z;return{error:Z,data:Y,revalidate:F,mutate:z,isValidating:D.current.isValidating}}return J};t.a=A},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}}]);