/*Minified JavaScript of static-server-ajax */
XHR=function(){"use strict";var a={};return a._init=function(){return new XMLHttpRequest},a._onReady=function(a,b){a.onreadystatechange=function(){200===a.status&&4===a.readyState&&b(a.responseText)}},a._setHeaders=function(a){a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("Accept","text/plain"),a.setRequestHeader("Content-Type","text/plain")},a.get=function(b,c){var d=a._init();d.open("GET",b,!0),a._setHeaders(d),d.send(null),a._onReady(d,c)},a.post=function(b,c,d){var e=a._init();e.open("POST",b,!0),a._setHeaders(e),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send(c),a._onReady(e,d)},{get:a.get,post:a.post}}(),function(a,b){"use strict";function c(a){var c=this,d=c.getAttribute("href");a.preventDefault(),XHR.get(d,function(a){var c=JSON.parse(a);e.innerHTML=c.content,history.pushState(d,c.title,d),b.title=c.title,b.querySelector("meta[name='description']").setAttribute("content",c.description)})}var d=b.getElementById("nav").getElementsByTagName("a"),e=b.getElementById("content");d=[].slice.call(d),d.forEach(function(a){a.addEventListener("click",c)}),a.addEventListener("popstate",function(){})}(window,document);