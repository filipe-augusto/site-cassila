SEMICOLON.Core.getVars.fn.onepage=e=>{var t=SEMICOLON.Core;if(t.initFunction({class:"has-plugin-onepage",event:"pluginOnePageReady"}),(e=t.getSelector(e,!1)).length<1)return!0;var a=t.filtered(e,"[data-scrollto]"),s=t.filtered(e,".one-page-menu");0<a.length&&(t.getVars.elLinkScrolls=a),0<s.length&&(t.getVars.elOnePageMenus=s),CanvasOnePageModuleInit(e),CanvasPageScrollPosition(),t.scrollEnd(()=>{CanvasPageScrollPosition()},500),t.getVars.resizers.onepage=()=>SEMICOLON.Modules.onePage()};const CanvasOnePageModuleInit=e=>{const t=SEMICOLON.Core;CanvasOnePageScrollerHash(),t.getVars.elLinkScrolls&&t.getVars.elLinkScrolls.forEach(t=>{CanvasPageScrollerGetSettings(t,"scrollTo"),t.onclick=e=>{e.preventDefault(),CanvasPageScroller(t,"scrollTo")}}),t.getVars.elOnePageMenus&&t.getVars.elOnePageMenus.forEach(e=>{t.getVars.elOnePageActiveClass=e.getAttribute("data-active-class")||"current",e.querySelectorAll("[data-href]").forEach(t=>{CanvasPageScrollerGetSettings(t,"onePage"),t.onclick=e=>{e.preventDefault(),CanvasPageScroller(t,"onePage")}})})},CanvasOnePageScrollerHash=()=>{var e=SEMICOLON.Core;if(1!=e.getOptions.scrollExternalLinks)return!1;if(document.querySelector('a[data-href="'+e.getVars.hash+'"]')||document.querySelector('a[data-scrollto="'+e.getVars.hash+'"]')){window.onbeforeunload=()=>{window.scrollTo({top:0,behavior:"auto"})},window.scrollTo({top:0,behavior:"auto"});let a=document.querySelector(e.getVars.hash);if(a){let t=setInterval(()=>{var e=a.getAttribute("data-onepage-settings")&&JSON.parse(a.getAttribute("data-onepage-settings"));e&&(CanvasPageScrollAnimation(a,e,0),clearInterval(t))},250)}}},CanvasPageScrollerSection=(e,t)=>{SEMICOLON.Core;let a;return a="scrollTo"==t?e.getAttribute("data-scrollto"):e.getAttribute("data-href"),document.querySelector(a)},CanvasPageScrollerGetSettings=(e,t)=>{const a=SEMICOLON.Core;let s=CanvasPageScrollerSection(e,t);if(!s)return!1;s.removeAttribute("data-onepage-settings");let r=CanvasPageScrollerSettings(s,e);setTimeout(()=>{s.hasAttribute("data-onepage-settings")||s.setAttribute("data-onepage-settings",JSON.stringify(r)),a.getVars.pageSectionEls=document.querySelectorAll("[data-onepage-settings]")},1e3)},CanvasPageScroller=(e,t)=>{const a=SEMICOLON.Core;var s=CanvasPageScrollerSection(e,t),r=s.getAttribute("id");if(!s)return!1;var o=JSON.parse(s.getAttribute("data-onepage-settings"));"scrollTo"!=t&&((parent=e.closest(".one-page-menu")).querySelectorAll("li").forEach(e=>e.classList.remove(a.getVars.elOnePageActiveClass)),parent.querySelector('a[data-href="#'+r+'"]').closest("li").classList.add(a.getVars.elOnePageActiveClass)),a.getVars.elBody.classList.contains("is-expanded-menu")&&!a.getVars.elBody.classList.contains("overlay-menu")||a.getVars.recalls.menureset(),CanvasPageScrollAnimation(s,o,250)},CanvasPageScrollAnimation=(t,a,e)=>{const s=SEMICOLON.Core;setTimeout(()=>{var e=s.offset(t).top;if(!a)return!1;a.easing?jQuery("html,body").stop(!0,!0).animate({scrollTop:e-Number(a.offset)},Number(a.speed),a.easing):window.scrollTo({top:e-Number(a.offset),behavior:"smooth"})},Number(e))},CanvasPageScrollPosition=()=>{const t=SEMICOLON.Core;t.getVars.elOnePageMenus&&t.getVars.elOnePageMenus.forEach(e=>e.querySelectorAll("[data-href]").forEach(e=>e.closest("li").classList.remove(t.getVars.elOnePageActiveClass))),t.getVars.elOnePageMenus&&t.getVars.elOnePageMenus.forEach(e=>e.querySelector('[data-href="#'+CanvasOnePageCurrentSection()+'"]')?.closest("li").classList.add(t.getVars.elOnePageActiveClass))},CanvasOnePageCurrentSection=()=>{const s=SEMICOLON.Core;let r;return void 0===s.getVars.pageSectionEls||(s.getVars.pageSectionEls.forEach(e=>{var t,a=e.getAttribute("data-onepage-settings")&&JSON.parse(e.getAttribute("data-onepage-settings"));a&&(a=s.offset(e).top-a.offset-5)<=(t=window.pageYOffset)&&t<a+e.offsetHeight&&e.getAttribute("id")!=r&&e.getAttribute("id")&&(r=e.getAttribute("id"))}),r)},CanvasPageScrollerSettings=(e,t)=>{var a=SEMICOLON.Core,s=a.getVars.elBody.classList;if(void 0===e||t.length<1)return!0;if(e.hasAttribute("data-onepage-settings"))return!0;var e={offset:a.getVars.topScrollOffset,speed:1250,easing:!1},a={},r={},o=t.closest(".one-page-menu"),o=(r.offset=o?.getAttribute("data-offset")||e.offset,r.speed=o?.getAttribute("data-speed")||e.speed,r.easing=o?.getAttribute("data-easing")||e.easing,{offset:t.getAttribute("data-offset")||r.offset,speed:t.getAttribute("data-speed")||r.speed,easing:t.getAttribute("data-easing")||r.easing});let n=t.getAttribute("data-offset-xxl"),l=t.getAttribute("data-offset-xl"),i=t.getAttribute("data-offset-lg"),g=t.getAttribute("data-offset-md"),c=t.getAttribute("data-offset-sm"),u=t.getAttribute("data-offset-xs");return u=u||Number(o.offset),c=c||Number(u),g=g||Number(c),i=i||Number(g),l=l||Number(i),n=n||Number(l),s.contains("device-xs")?o.offset=u:s.contains("device-sm")?o.offset=c:s.contains("device-md")?o.offset=g:s.contains("device-lg")?o.offset=i:s.contains("device-xl")?o.offset=l:s.contains("device-xxl")&&(o.offset=n),a.offset=o.offset,a.speed=o.speed,a.easing=o.easing,a};