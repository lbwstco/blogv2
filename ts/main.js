(()=>{var T=function(e){return new Promise(t=>{var r=document.createElement("script");r.src=e,r.onload=()=>{t()},document.head.appendChild(r)})},P=function(e){return new Promise(t=>{var r=document.createElement("link");r.href=e,r.type="text/css",r.rel="stylesheet",r.onload=()=>{t()},document.head.appendChild(r)})};var M=function(e){for(var t=function(a){for(var s=a.childNodes,i=s.length,u=[],d,y,c,m,p=0;p<i;p++)d=s[p],d.nodeType===1&&(y=d.children[0],c=y.getAttribute("data-size").split("x"),m={src:y.getAttribute("href"),w:parseInt(c[0],10),h:parseInt(c[1],10)},d.children.length>1&&(m.title=d.children[1].innerHTML),y.children.length>0&&(m.msrc=y.children[0].getAttribute("src")),m.el=d,u.push(m));return u},r=function a(s,i){return s&&(i(s)?s:a(s.parentNode,i))},n=function(a){a=a||window.event,a.preventDefault?a.preventDefault():a.returnValue=!1;var s=a.target||a.srcElement,i=r(s,function(b){return b.tagName&&b.tagName.toUpperCase()==="FIGURE"});if(i){for(var u=i.parentNode,d=i.parentNode.childNodes,y=d.length,c=0,m,p=0;p<y;p++)if(d[p].nodeType===1){if(d[p]===i){m=c;break}c++}return m>=0&&l(m,u),!1}},o=function(){var a=window.location.hash.substring(1),s={};if(a.length<5)return s;for(var i=a.split("&"),u=0;u<i.length;u++)if(i[u]){var d=i[u].split("=");d.length<2||(s[d[0]]=d[1])}return s.gid&&(s.gid=parseInt(s.gid,10)),s},l=function(a,s,i,u){var d=document.querySelectorAll(".pswp")[0],y,c,m;if(m=t(s),c={galleryUID:s.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(b){var N=m[b].el.getElementsByTagName("img")[0],I=window.pageYOffset||document.documentElement.scrollTop,S=N.getBoundingClientRect();return{x:S.left,y:S.top+I,w:S.width}}},u)if(c.galleryPIDs){for(var p=0;p<m.length;p++)if(m[p].pid==a){c.index=p;break}}else c.index=parseInt(a,10)-1;else c.index=parseInt(a,10);isNaN(c.index)||(i&&(c.showAnimationDuration=0),y=new PhotoSwipe(d,PhotoSwipeUI_Default,m,c),y.init())},h=document.querySelectorAll(e),f=0,w=h.length;f<w;f++)h[f].setAttribute("data-pswp-uid",f+1),h[f].onclick=n;var v=o();v.pid&&v.gid&&l(v.pid,h[v.gid-1],!0,!0)};function E(e){let t=document.createElement("div");t.className="gallery";let r=e[0].parentNode,n=e[0];r.insertBefore(t,n);for(let o=0;o<e.length;++o){let l=e[o].querySelector("img").width,h=e[o].querySelector("img").height;e[o].style.flexGrow=`${l*100/h}`,e[o].style.flexBasis=`${l*240/h}px`,t.appendChild(e[o])}}function A(){let e=[T("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe.min.js"),T("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe-ui-default.min.js"),P("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe.min.css"),P("https://cdn.jsdelivr.net/npm/photoswipe@4.1.3/dist/default-skin/default-skin.min.css")];return Promise.all(e)}function k(e){let t=document.querySelector(e).querySelectorAll("figure");if(t.length){let r=[t[0]];for(let n=1;n<t.length;++n)t[n].previousElementSibling===r[r.length-1]?r.push(t[n]):(E(r),r=[t[n]]);r.length>0&&E(r),A().then(()=>{document.querySelector(".pswp").style.removeProperty("display"),M(`${e} .gallery`)})}}var g={};if(localStorage.hasOwnProperty("StackColorsCache"))try{g=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{g={}}async function x(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!g.hasOwnProperty(e)||g[e].hash!==t){let n=await Vibrant.from(r).getPalette();g[e]={hash:t,Vibrant:{hex:n.Vibrant.hex,rgb:n.Vibrant.rgb,bodyTextColor:n.Vibrant.bodyTextColor},DarkMuted:{hex:n.DarkMuted.hex,rgb:n.DarkMuted.rgb,bodyTextColor:n.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(g))}return g[e]}var H=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},V=(e,t=500)=>window.getComputedStyle(e).display==="none"?q(e,t):H(e,t);function C(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),V(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function B(e,t,r){var n=document.createElement(e);for(let o in t)if(o&&t.hasOwnProperty(o)){let l=t[o];o=="dangerouslySetInnerHTML"?n.innerHTML=l.__html:l===!0?n.setAttribute(o,o):l!==!1&&l!=null&&n.setAttribute(o,l.toString())}for(let o=2;o<arguments.length;o++){let l=arguments[o];l&&n.appendChild(l.nodeType==null?document.createTextNode(l.toString()):l)}return n}var L=B;var D={init:()=>{C(),document.querySelector(".article-content")&&k(".article-content"),document.querySelectorAll(".color-tag").forEach(async t=>{let r=t.getAttribute("data-image"),n=t.getAttribute("data-key"),o=t.getAttribute("data-hash"),l=await x(n,o,r);t.style.color=l.Vibrant.bodyTextColor,t.style.background=l.Vibrant.hex});let e=document.querySelector(".article-list--tile");e&&new IntersectionObserver(async(r,n)=>{r.forEach(o=>{if(!o.isIntersecting)return;n.unobserve(o.target),o.target.querySelectorAll("article.has-image").forEach(async h=>{let f=h.querySelector("img"),w=f.src,v=f.getAttribute("data-key"),a=f.getAttribute("data-hash"),s=h.querySelector(".article-details"),i=await x(v,a,w);s.style.background=`
                        linear-gradient(0deg, 
                            rgba(${i.DarkMuted.rgb[0]}, ${i.DarkMuted.rgb[1]}, ${i.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${i.Vibrant.rgb[0]}, ${i.Vibrant.rgb[1]}, ${i.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(e)}};window.addEventListener("load",()=>{setTimeout(function(){D.init()},0)});window.Stack=D;window.createElement=L;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
