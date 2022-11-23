// ==UserScript==
// @name         删除eteams水印
// @namespace    http://synology.pub/
// @version      0.1
// @description  删除eteams水印
// @author       wrysunny
// @match        *://*.eteams.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==


setInterval(function(){
    document.querySelectorAll('[id^="ui-watermark"]').forEach(e => e.remove());
    //console.log("清除水印!");
},200)();
