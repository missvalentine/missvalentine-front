(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71,77],{TtQW:function(e,t,n){"use strict";n.r(t);var o=n("rePB"),r=n("q1tI"),a=n.n(r),c=n("YFqc"),f=n.n(c),s=n("TSYQ"),l=n.n(s),u=(n("UUyv"),n("xSWb")),i=a.a.createElement,p=function(e){var t,n=e.versions,r=e.parentClass,a=(e.full,e.text,e.logo,e.url,n.map((function(e){return"".concat("c-logo","--").concat(e)})).join(" ")),c="".concat(r,"__").concat("c-logo".replace("c-","")),s=l()("c-logo",(t={},Object(o.a)(t,a,n),Object(o.a)(t,c,r),t));return"footer"===n[0]?i(f.a,{href:"/"},i("a",{className:s},i("div",{className:"c-logo__text-footer"},u.d))):i(f.a,{href:"/"},i("a",{className:s},i("div",{className:"c-logo__text"},u.d)))};p.defaultProps={versions:[],full:!1},t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=r(n("q1tI")),f=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,i={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,o){(0,f.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),i[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=c.default.useState(),r=o(n,2),a=r[0],l=r[1],v=(0,s.useRouter)(),h=v&&v.pathname||"/",g=c.default.useMemo((function(){var t=(0,f.resolveHref)(h,e.href,!0),n=o(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,f.resolveHref)(h,e.as):a||r}}),[h,e.href,e.as]),y=g.href,w=g.as;c.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,f.isLocalURL)(y)&&!i[y+"%"+w])return p(a,(function(){d(v,y,w)}))}),[t,a,y,w,v]);var m=e.children,_=e.replace,b=e.shallow,E=e.scroll;"string"===typeof m&&(m=c.default.createElement("a",null,m));var L=c.Children.only(m),N={ref:function(e){e&&l(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,f.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,y,w,_,b,E)}};return t&&(N.onMouseEnter=function(e){(0,f.isLocalURL)(y)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(v,y,w,{priority:!0}))}),(e.passHref||"a"===L.type&&!("href"in L.props))&&(N.href=(0,f.addBasePath)((0,f.addLocale)(w,v&&v.locale,v&&v.defaultLocale))),c.default.cloneElement(L,N)};t.default=v}}]);