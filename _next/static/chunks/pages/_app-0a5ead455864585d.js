(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return u},F:function(){return i}});var r=n(1720),a=n(9008),o=(0,r.createContext)({setTheme:function(e){},themes:[]}),i=function(){return(0,r.useContext)(o)},c=["light","dark"],l="(prefers-color-scheme: dark)",u=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,i=e.enableSystem,u=void 0===i||i,h=e.enableColorScheme,m=void 0===h||h,v=e.storageKey,g=void 0===v?"theme":v,y=e.themes,w=void 0===y?["light","dark"]:y,b=e.defaultTheme,x=void 0===b?u?"system":"light":b,_=e.attribute,O=void 0===_?"data-theme":_,Z=e.value,E=e.children,T=(0,r.useState)((function(){return f(g,x)})),k=T[0],j=T[1],S=(0,r.useState)((function(){return f(g)})),C=S[0],I=S[1],N=Z?Object.values(Z):w,L=(0,r.useCallback)((function(e){var n=p(e);I(n),"system"!==k||t||A(n,!1)}),[k,t]),P=(0,r.useRef)(L);P.current=L;var A=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==Z?void 0:Z[e])||e,o=a&&n?d():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&u){var i=p();r=(null==Z?void 0:Z[i])||i}if(n){var c,l=document.documentElement;"class"===O?((c=l.classList).remove.apply(c,N),l.classList.add(r)):l.setAttribute(O,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return P.current.apply(P,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var M=(0,r.useCallback)((function(e){t?A(e,!0,!1):A(e),j(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&M(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[M]),(0,r.useEffect)((function(){if(m){var e=t&&c.includes(t)?t:k&&c.includes(k)?k:"system"===k&&C||null;document.documentElement.style.setProperty("color-scheme",e)}}),[m,k,C,t]),r.default.createElement(o.Provider,{value:{theme:k,setTheme:M,forcedTheme:t,resolvedTheme:"system"===k?C:k,themes:u?[].concat(w,["system"]):w,systemTheme:u?C:void 0}},r.default.createElement(s,{forcedTheme:t,storageKey:g,attribute:O,value:Z,enableSystem:u,defaultTheme:x,attrs:N}),E)},s=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,o=e.attribute,i=e.enableSystem,c=e.defaultTheme,u=e.value,s="class"===o?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==u?void 0:u[e])||e;var n=t?e:"'"+e+"'";return"class"===o?"d.add("+n+")":"d.setAttribute('"+o+"', "+n+")"},d="system"===c;return r.default.createElement(a.default,null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(d?"":f(c)+";")+'if("system"===e||(!e&&'+d+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(u?"var x="+JSON.stringify(u)+";":"")+f(u?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(u?"var x="+JSON.stringify(u)+";":"")+f(u?"x[e]":"e",!0)+"}else{"+f(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),f=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},p=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(a=n.g.process)||void 0===a?void 0:a.env)?n.g.process:n(7663)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(898)}])},723:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7320),a=(n(7233),n(1576)),o=n.n(a),i=n(2557);function c(){return(0,r.tZ)("footer",{children:(0,r.BX)("div",{className:"mx-auto max-w-7xl border-t border-white/10 px-6 pt-8 pb-12 md:flex md:items-center md:justify-between lg:px-8",children:[(0,r.BX)("div",{className:"flex justify-center space-x-6 md:order-2",children:[(0,r.tZ)(i.Z,{kind:"mail",href:"mailto:".concat(o().email),size:"6"}),(0,r.tZ)(i.Z,{kind:"github",href:o().github,size:"6"}),(0,r.tZ)(i.Z,{kind:"facebook",href:o().facebook,size:"6"}),(0,r.tZ)(i.Z,{kind:"youtube",href:o().youtube,size:"6"}),(0,r.tZ)(i.Z,{kind:"linkedin",href:o().linkedin,size:"6"}),(0,r.tZ)(i.Z,{kind:"twitter",href:o().twitter,size:"6"})]}),(0,r.tZ)("div",{className:"mt-8 md:order-1 md:mt-0",children:(0,r.tZ)("p",{className:"text-center text-sm leading-5 text-gray-400",children:"\xa9 ".concat((new Date).getFullYear()," ").concat(o().title,". All rights reserved.")})})]})})}},4920:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7320),a=n(337),o=n(1576),i=n.n(o),c=n(1720),l=n(7233),u=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],o=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,r.BX)("div",{className:"md:hidden",children:[(0,r.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:o,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,r.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.BX)("div",{className:"fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,r.tZ)("div",{className:"flex justify-end",children:(0,r.tZ)("button",{type:"button",className:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:o,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,r.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,r.tZ)("nav",{className:"fixed mt-8 h-full",children:a.Z.map((function(e){return(0,r.tZ)("div",{className:"px-12 py-4",children:(0,r.tZ)(l.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:o,children:e.title})},e.title)}))})]})]})},s=(n(8100),n(1163));function f(){var e=(0,s.useRouter)();return(0,r.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,r.tZ)("div",{children:(0,r.tZ)(l.Z,{href:"/","aria-label":i().headerTitle,children:(0,r.BX)("div",{className:"flex flex-shrink-0 items-center justify-between",children:[(0,r.tZ)("div",{className:"",children:(0,r.tZ)("img",{className:"mt-2 h-12 object-cover",src:"/static/images/logo.png"})}),"string"===typeof i().headerTitle?(0,r.tZ)("div",{className:"h-6 text-2xl font-semibold md:block",children:i().headerTitle}):i().headerTitle]})})}),(0,r.BX)("div",{className:"mt-2 flex items-center text-base leading-5",children:[(0,r.tZ)("div",{className:"hidden md:block",children:a.Z.map((function(t){var n=e.pathname.includes(t.href);return(0,r.tZ)(l.Z,{href:t.href,className:"".concat(n?"underline decoration-primary-500 decoration-2 underline-offset-4 ":"")+"p-1 font-medium text-gray-100 md:p-3 lg:p-4",children:t.title},t.title)}))}),(0,r.tZ)(u,{})]})]})}},8100:function(e,t,n){"use strict";var r=n(7320);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}t.Z=function(e){var t=o({},e);return(0,r.tZ)("img",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},t))}},7233:function(e,t,n){"use strict";var r=n(7320),a=n(1664);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.href,n=c(e,["href"]),o=t&&t.startsWith("/"),l=t&&t.startsWith("#");return o?(0,r.tZ)(a.default,{href:t,children:(0,r.tZ)("a",i({},n))}):l?(0,r.tZ)("a",i({href:t},n)):(0,r.tZ)("a",i({target:"_blank",rel:"noopener noreferrer",href:t},n))}},890:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-6xl xl:px-0",children:t})}},2557:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,a,o=n(7320),i=n(1720);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l;function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var d;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var h;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var v;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),s||(s=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",m({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},w=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},337:function(e,t){"use strict";t.Z=[{href:"/about",title:"About"},{href:"/products",title:"Products"},{href:"/services",title:"Services"},{href:"/advisories",title:"Advisories"},{href:"/contact",title:"Contact"}]},1576:function(e,t,n){"use strict";var r=n(3454),a={title:"TRAPA Security",author:"",headerTitle:"TRAPA Security",description:" We are Experts, from tracing to training.",language:"en-us",theme:"dark",siteUrl:"https://trapa.tw",siteRepo:"",siteLogo:"/static/images/logo.png",image:"/static/images/a2.png",socialBanner:"/static/images/a2.png",email:"contact@trapa.tw",github:"https://github.com/TrapaSecurity",twitter:"https://twitter.com/TrapaSecurity",facebook:"https://facebook.com/trapasec",linkedin:"https://www.linkedin.com/company/trapa-security",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"",posthogAnalyticsId:""},newsletter:{provider:""},comment:{provider:"",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=n(1720))&&o.__esModule?o:{default:o},c=n(1003),l=n(880),u=n(9246);var s={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),o=i.default.useMemo((function(){var t=a(c.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,p=o.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var w=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,b=a(u.useIntersection({rootMargin:"200px"}),2),x=b[0],_=b[1],O=i.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);i.default.useEffect((function(){var e=_&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=s[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(r,d,p,{locale:t})}),[p,d,_,y,n,r]);var Z={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:i}))}(e,r,d,p,m,v,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:r&&r.locale,T=r&&r.isLocaleDomain&&c.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);Z.href=T||c.addBasePath(c.addLocale(p,E,r&&r.defaultLocale))}return i.default.cloneElement(t,Z)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,s=o.useRef(),f=a(o.useState(!1),2),d=f[0],p=f[1],h=a(o.useState(t?t.current:null),2),m=h[0],v=h[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),u.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return o.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&v(t.current)}),[t]),[g,d]};var o=n(1720),i=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},898:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(7320),a=(n(2604),n(7661),n(3941),n(8102),n(425)),o=n(9008),i=n(1576),c=n.n(i),l=n(4298),u=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.default,{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(c().analytics.googleAnalyticsId)}),(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(c().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})};var s=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.default,{strategy:"lazyOnload","data-domain":c().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},f=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.tZ)(l.default,{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},d=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(l.default,{async:!0,defer:!0,"data-website-id":c().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},p=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(l.default,{strategy:"lazyOnload",id:"posthog-script",children:'\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init(\''.concat(c().analytics.posthogAnalyticsId,"',{api_host:'https://app.posthog.com'})\n        ")})})},h=function(){return(0,r.BX)(r.HY,{children:[c().analytics.plausibleDataDomain&&(0,r.tZ)(s,{}),c().analytics.simpleAnalytics&&(0,r.tZ)(f,{}),c().analytics.umamiWebsiteId&&(0,r.tZ)(d,{}),c().analytics.googleAnalyticsId&&(0,r.tZ)(u,{}),c().analytics.posthogAnalyticsId&&(0,r.tZ)(p,{})]})},m=(n(337),n(890)),v=n(4920),g=n(723),y=(n(1720),function(e){var t=e.children;return(0,r.BX)(m.Z,{children:[(0,r.tZ)(v.Z,{}),(0,r.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.tZ)("main",{className:"mx-3 mb-auto",children:t}),(0,r.tZ)(g.Z,{})]})]})}),w=n(1163),b=n(3454);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}b.env.SOCKET;function O(e){var t=e.Component,n=e.pageProps,i=new URL((0,w.useRouter)().asPath,"http://localhost").pathname;return(0,r.BX)(a.f,{attribute:"class",defaultTheme:c().theme,children:[(0,r.tZ)(o.default,{children:(0,r.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),false,(0,r.tZ)(h,{}),"/"===i?(0,r.tZ)(t,_({},n)):(0,r.tZ)(y,{children:(0,r.tZ)(t,_({},n))})]})}},8102:function(){},3941:function(){},7661:function(){},2604:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],u=!1,s=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):s=-1,l.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++s<t;)c&&c[s].run();s=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(162);e.exports=a}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxs:function(){return o},jsxDEV:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var c,l,u={};for(l in t)"ref"==l?c=t[l]:u[l]=t[l];var s={type:e,props:u,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:o,__self:i};if("function"==typeof e&&(c=e.defaultProps))for(l in c)void 0===u[l]&&(u[l]=c[l]);return r.YM.vnode&&r.YM.vnode(s),s}},7320:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.Fragment},tZ:function(){return r.jsx},BX:function(){return r.jsxs}});var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(1780),t(880)}));var n=e.O();_N_E=n}]);