parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"S086":[function(require,module,exports) {
function e(){console.debug("test: ",window.scrollY)}function t(){console.log("Active");var e=["You'll be amazed at what happens when you just stop to take a few minutes out of your busy day to reflect.","Clarity. Calm. Understanding.","It's easy to make excuses. To say you don't have time - or that journaling is a waste of time.","But you'll quickly see that you become calmer, more effective - and happier - if you do."];function t(n){void 0===e[n]&&setTimeout(function(){t(0)},2e4),n<e[n].length&&function e(t,n,o){n<t.length?(document.querySelector(".typewrite-download-section").innerHTML=t.substring(0,n+1)+'<span aria-hidden="true"></span>',setTimeout(function(){e(t,n+1,o)},70)):"function"==typeof o&&setTimeout(o,700)}(e[n],0,function(){t(n+1)})}setTimeout(function(){t(0)},200)}!function(e){"use strict";var n=e(".trigger-animation").offset().top,o=!1;document.addEventListener("scroll",function(e){window.pageYOffset>n&&!o&&(console.log("Trigger"),o=!0,t())},!0),e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:t.offset().top-48},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:54});var i=function(){e("#mainNav").offset().top>100?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};i(),e(window).scroll(i)}(jQuery),document.addEventListener("DOMContentLoaded",function(e){var t=["Get Your Thoughts Out.","Understand yourself better. Find your calm. Write your future.","Whether you're suffering from anxiety, depression or just want to unlock your creativity, journaling with Scribe will help.","Journaling has been scientifically proven to help.","So be kind to yourself. Start journaling with Scribe."];function n(e){void 0===t[e]&&setTimeout(function(){n(0)},2e4),e<t[e].length&&function e(t,n,o){n<t.length?(document.querySelector(".typewrite").innerHTML=t.substring(0,n+1)+'<span aria-hidden="true"></span>',setTimeout(function(){e(t,n+1,o)},80)):"function"==typeof o&&setTimeout(o,700)}(t[e],0,function(){n(e+1)})}setTimeout(function(){n(0)},2e3)}),function(){var e=new Date,t=("0"+e.getDate()).slice(-2),n=("0"+(e.getMonth()+1)).slice(-2)+"/"+t+"/"+e.getFullYear().toString().substr(2,2);document.querySelector("#dateToday","#demoDateToday").innerHTML=n}(),AOS.init();
},{}]},{},["S086"], null)
//# sourceMappingURL=/new-age.f5361a7e.map