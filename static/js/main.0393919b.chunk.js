(this.webpackJsonpmaks=this.webpackJsonpmaks||[]).push([[0],[function(e,n,t){!function(e){"use strict";var n=function(){return(n=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function t(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var i=arguments[n],p=0,a=i.length;p<a;p++,r++)o[r]=i[p];return o}function o(e,t){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,n){var t=null!=n?n:o.next();return r[t]=e,t},resolve:function(e,n,t){var o=r[e];o&&(t(n)?o.resolve(n):o.reject(n),r[e]=null)}});return t((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,o=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(n,["request_id"]);t&&i.resolve(t,o,(function(e){return!("error_type"in e)}))}})),function(t,o){return void 0===o&&(o={}),new Promise((function(r,p){var a=i.add({resolve:r,reject:p},o.request_id);e(t,n(n({},o),{request_id:a}))}))}}var r="undefined"!=typeof window,i=Boolean(r&&window.AndroidBridge),p=Boolean(r&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),a=r&&!i&&!p,u=a&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),s=a?"message":"VKWebAppEvent",d=t(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppShowNativeAds"],a&&!u?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowSubscriptionBox","VKWebAppShowInstallPushBox","VKWebAppGetFriends"]:["VKWebAppShowImages"]),c=r?window.AndroidBridge:void 0,l=p?window.webkit.messageHandlers:void 0;function b(e,n){var t=n||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),o}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(b.prototype=Event.prototype,b));var f=function(e){var n=void 0,r=[];function u(e){r.push(e)}function b(){return p||i}function f(){return a&&window.parent!==window}function A(){return b()||f()}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(s,(function(e){if(p||i)return t(r).map((function(n){return n.call(null,e)}));if(a&&e&&e.data){var o=e.data,u=o.type,s=o.data,d=o.frameId;u&&"SetSupportedHandlers"===u?s.supportedHandlers:u&&"VKWebAppSettings"===u?n=d:t(r).map((function(e){return e({detail:{type:u,data:s}})}))}}));var w=o((function(t,o){c&&c[t]?c[t](JSON.stringify(o)):l&&l[t]&&"function"==typeof l[t].postMessage?l[t].postMessage(o):a&&parent.postMessage({handler:t,params:o,type:"vk-connect",webFrameId:n,connectVersion:e},"*")}),u);return{send:w,sendPromise:w,subscribe:u,unsubscribe:function(e){var n=r.indexOf(e);-1<n&&r.splice(n,1)},supports:function(e){return i?!(!c||"function"!=typeof c[e]):p?!(!l||!l[e]||"function"!=typeof l[e].postMessage):a&&-1<d.indexOf(e)},isWebView:b,isIframe:f,isEmbedded:A,isStandalone:function(){return!A()}}}("2.4.8");e.applyMiddleware=function e(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return"function"==typeof e}))):function(e){if(0===t.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}};return o=t.filter((function(e){return"function"==typeof e})).map((function(e){return e(r)})).reduce((function(e,n){return function(t){return e(n(t))}}))(e.send),n(n({},e),{send:o})}},e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}(n)},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o);r.a.send("VKWebAppInit",{}),r.a.subscribe((function(e){return console.log(e)})),r.a.send("VKWebAppInit",{}),console.log(r.a.send("VKWebAppInit",{})),r.a.send("VKWebAppAllowMessagesFromGroup",{group_id:207324041,key:"dBuBKe1kFcdemzB"});var i=[{question:"\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u041c\u0430\u043a\u0441\u0430 \u041a\u043e\u0440\u0436\u0430?",a:"1988 \u0433.",b:"1999 \u0433.",c:"1979 \u0433.",correct:"a"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432 \u0443 \u041c\u0430\u043a\u0441\u0430 \u041a\u043e\u0440\u0436\u0430?",a:"1,8 \u043c\u043b\u043d",b:"3 \u043c\u043b\u043d",c:"2,7 \u043c\u043b\u043d",correct:"c"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0442\u0435\u0439 \u0443 \u041c\u0430\u043a\u0441\u0430 \u041a\u043e\u0440\u0436\u0430?",a:"1",b:"2",c:"3",correct:"b"},{question:"\u0413\u0434\u0435 \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u041c\u0430\u043a\u0441 \u041a\u043e\u0440\u0436?",a:"\u0433. \u041c\u043e\u0441\u043a\u0432\u0430",b:"\u0433. \u041b\u0443\u043d\u0438\u043d\u0435\u0446",c:"\u0433. \u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",correct:"b"},{question:"\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435 \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u041c\u0430\u043a\u0441 \u041a\u043e\u0440\u0436?",a:"\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0430\u044f \u0421\u0421\u0420",b:"\u0421\u0421\u0421\u0420",c:"\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f",correct:"a"}],p=document.getElementById("quiz"),a=document.querySelectorAll(".answer"),u=document.getElementById("question"),s=document.getElementById("a_text"),d=document.getElementById("b_text"),c=document.getElementById("c_text"),l=document.getElementById("submit"),b=0,f=0;function A(){a.forEach((function(e){return e.checked=!1}));var e=i[b];u.innerText=e.question,s.innerText=e.a,d.innerText=e.b,c.innerText=e.c}A(),l.addEventListener("click",(function(){var e=function(){var e;return a.forEach((function(n){n.checked&&(e=n.id)})),e}();e&&(e===i[b].correct&&f++,++b<i.length?A():(f=f/i.length*100,p.innerHTML='<h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u0432\u044b \u0431\u044b\u043b\u0438 \u043f\u0440\u0430\u0432\u044b \u043d\u0430:</h2>\n            <p>'.concat(f,'%</p>\n            <h2 align="center" style="color:#A9A9A9;font-size: 21px;">\u0417\u0430\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u043d\u0430 \u0441\u0430\u0439\u0442\u0435</h2>\n            <p align="center" style="color:yellow; border: 4px solid yellow;border-radius: 15px;width:300px;margin-left: auto;margin-right: auto;padding-top: 6px;padding-bottom: 6px;"><a href="https://makskorg338220top.taplink.ws">\u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u041d\u0410 \u0421\u0410\u0419\u0422</a></p>\n            <br>;\n            \n            ')))}))}],[[1,1]]]);
//# sourceMappingURL=main.0393919b.chunk.js.map