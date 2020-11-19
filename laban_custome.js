var lbDictPlugin=new function(){var e={SHOW_BALLOON:1,SHOW_POPUP:2},t={none:0,ctrl:1,alt:2,shift:3},n={extension_enable:!0,dict_type:1,dbclk_event:{trigger:"none",enable:!0,display:1},select_event:{trigger:"none",enable:!0,display:1}},l={},i=!1,d=!1,c=!1,o=!1,a=!1,u=null,s=null,r="",p=0;"relative"==window.getComputedStyle(document.body).getPropertyValue("position")&&(p=document.body.getBoundingClientRect().top,p=p>0?p:0);var m={width:252,height:312},f=Math.max(document.documentElement.clientWidth,window.innerWidth||0),_=Math.max(document.documentElement.clientHeight,window.innerHeight||0),h=function(){return"relative"==window.getComputedStyle(document.body).getPropertyValue("position")?0-document.body.getBoundingClientRect().top:window.pageYOffset},y=function(){return"relative"==window.getComputedStyle(document.body).getPropertyValue("position")?0-document.body.getBoundingClientRect().left:window.pageXOffset},g=function(e){l=e},v=function(e){return null!==e&&e.length>0&&e.length<50},b=function(e){return e.replace(/[`~!@#$%^&*()_|+=?;:",<>\{\}\[\]]/gi,"")},w=function(e,t){switch(e){case"none":return!0;case"ctrl":return t.ctrlKey;case"alt":return t.altKey;case"shift":return t.shiftKey;default:return!1}},x=function(){return b(window.getSelection().toString()).trim()},k=function(){return window.getSelection().getRangeAt(0).getBoundingClientRect()},E=function(e,t){document.getElementById("lbdictex_ask_mark").className="hidden";var n=x();if("undefined"!=typeof t&&(n=t),v(n)){var i=l.dict_type,d=null,c=null,o=document.getElementById("lbdictex_find_popup");null===o?d=N():(d=o,c=document.querySelector("#lbdictex_find_popup .popup_details")),c.innerHTML='<iframe src="https://dict.laban.vn/widget/search?type='+i+"&query="+encodeURIComponent(n)+'" style="width:248px;height:259px;border:0;padding:0;"></iframe>',d.querySelector("h2").innerHTML=n;var a=0,u=0;return e.clientY+m.height>_&&(a=-m.height),e.clientX+m.width>f&&(u=-m.width),d.style.top=e.clientY+h()+a+"px",d.style.left=e.clientX+y()+u+"px",d.className=d.className.replace(" hidden",""),c.scrollTop=0,!1}var o=document.getElementById("lbdictex_find_popup");null!=o&&(o.className=o.className.replace(" hidden","")+" hidden")},N=function(){var e=document.createElement("div");e.id="lbdictex_find_popup",e.className="lbexpopup hidden",e.style.position="absolute",e.style.top="0",e.style.left="0";var t=document.createElement("div");t.className="lbexpopup_top",t.innerHTML='<h2 class="fl popup_title">&nbsp;</h2><ul><li><a class="close_main popup_close" href="#">&nbsp;</a></li></ul><div class="clr"></div>';var n=document.createElement("div");n.className="popup_details",n.style.padding="0",n.style.height="262px";var l=document.createElement("div");return l.className="popup_powered",l.innerHTML="abc",e.appendChild(t),e.appendChild(n),e.appendChild(l),document.body.appendChild(e),document.querySelector("#lbdictex_find_popup a.popup_close").addEventListener("click",function(e){return e.preventDefault(),c=!0,document.getElementById("lbdictex_find_popup").className+=" hidden",setTimeout(function(){c=!1},300),!1}),e},B=function(){var e=document.createElement("div");e.id="lbdictex_ask_mark",e.className="hidden",e.style.position="absolute",e.style.top="0",e.style.left="0";var t=document.createElement("a");return t.className="lbdictex_ask_select",t.href="#",t.innerHTML="&nbsp;",e.appendChild(t),document.body.appendChild(e),document.querySelector("#lbdictex_ask_mark a.lbdictex_ask_select").addEventListener("click",function(e){return e.preventDefault(),o=!0,document.getElementById("lbdictex_ask_mark").className="hidden",E(e,r),setTimeout(function(){o=!1},300),!1}),e},L=function(){var e=x();if(v(e)){r=e,T();var t=k(),n=t.top-25,l=t.left+t.width/2-24,i=document.getElementById("lbdictex_ask_mark"),d=null;d=null==i?B():i,d.style.top=n+h()+"px",d.style.left=l+document.body.scrollLeft+"px",d.className=""}else{var i=document.getElementById("lbdictex_ask_mark");null!=i&&(i.className="hidden")}},T=function(){var e=document.getElementById("lbdictex_find_popup");null!=e&&(e.className=e.className.replace(" hidden","")+" hidden")},C=function(t){return S(t.clientX+document.body.scrollLeft,t.clientY+h())?!1:(T(),d=!0,l.extension_enable&&l.dbclk_event.enable&&w(l.dbclk_event.trigger,t)&&(l.dbclk_event.display==e.SHOW_POPUP?E(t):L(t)),void setTimeout(function(){d=!1},600))},I=function(e){var t=0,n=0;do t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:t,left:n}},S=function(e,t){var n=document.getElementById("lbdictex_find_popup");if("lbexpopup"!=n.className)return!1;var l=I(n),i=10;return e<l.left-i||e>l.left+n.offsetWidth+i||t<l.top-p-i||t>l.top-p+n.offsetHeight+i?!1:!0},P=function(t){if(t=t||window.event,3!=t.which){if(S(t.clientX+document.body.scrollLeft,t.clientY+h()))return!1;T(),null!==u&&clearTimeout(u),u=setTimeout(function(){d||c||o||i||l.extension_enable&&l.select_event.enable&&w(l.select_event.trigger,t)&&(l.select_event.display==e.SHOW_POPUP?E(t):L(t))},250)}else document.getElementById("lbdictex_ask_mark").className="hidden"},H=function(){window.addEventListener("focus",function(){a&&(a=!1)}),window.addEventListener("blur",function(){var e=document.getElementById("lbdictex_ask_mark");null!=e&&(e.className="hidden"),a=!0})},O=function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&t(n.responseText)},n.open("GET",e,!0),n.send(null)},M=function(e){var t="";for(var n in e)t+=(""!=t?"&":"")+n+"="+encodeURIComponent(e[n]);return t},R=function(e){var n={action:1,type:2,url:window.location.href,dc:e.dbclk_event.enable?1:0,dct:t[e.dbclk_event.trigger],dcd:e.dbclk_event.display,se:e.select_event.enable?1:0,set:t[e.select_event.trigger],sed:e.select_event.display};O("https://laban.vn/stats/dictplg?"+M(n),function(){})},W=function(e){var t="lbdict_plugin_css";if(!document.getElementById(t)){var l=document.getElementsByTagName("head")[0],i=document.createElement("link");i.id=t,i.rel="stylesheet",i.type="text/css",i.href="//stc-laban.zdn.vn/dictionary/css/plugin.min.css",i.media="all",l.appendChild(i)}"undefined"==typeof e&&(e=n),g(e),H(),N(),B(),document.addEventListener("dblclick",C),document.addEventListener("mouseup",P),document.addEventListener("mousedown",function(e){e=e||window.event,3==e.which&&(document.getElementById("lbdictex_ask_mark").className="hidden"),null!==s&&clearTimeout(s),s=setTimeout(function(){o||d||(document.getElementById("lbdictex_ask_mark").className="hidden")},200)}),R(e)};this.init=W};
