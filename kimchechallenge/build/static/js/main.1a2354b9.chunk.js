(this.webpackJsonpkimchechallenge=this.webpackJsonpkimchechallenge||[]).push([[0],{47:function(e,n,a){e.exports=a(57)},52:function(e,n,a){},53:function(e,n,a){},57:function(e,n,a){"use strict";a.r(n);var t,r,l,c=a(3),o=a.n(c),u=a(38),i=a.n(u),m=(a(52),a(23)),s=(a(53),a(70)),h=a(27),g=a.n(h),f=function(e){var n=e.datita;return null===n||void 0===n?o.a.createElement("div",null," Waiting for keyswords..."):o.a.createElement("div",null,o.a.createElement("p",null,"Country List by Continent"),n.map((function(e){return o.a.createElement("ul",{key:e.name},o.a.createElement("h2",null,"-",e.name),e.countries.map((function(e){return o.a.createElement("div",{key:e.name},o.a.createElement("span",{role:"img","aria-label":"arrow"},e.flag),o.a.createElement("h3",null,e.name),o.a.createElement("h4",null,e.capital),o.a.createElement("h4",null,e.languages.join(" - ")),o.a.createElement("h4",null,e.currency))})))})))},d=function(e){var n=e.datita;return null===n||void 0===n?o.a.createElement("div",null," Waiting for keyswords..."):o.a.createElement("div",null,o.a.createElement("p",null,"Country List by Language"),n.map((function(e){return o.a.createElement("ul",{key:e.name},o.a.createElement("h2",null,"-",e.name),e.countries.map((function(e){return o.a.createElement("div",{key:e.name},o.a.createElement("span",{role:"img","aria-label":"arrow"},e.flag),o.a.createElement("h3",null,e.name),o.a.createElement("h4",null,e.capital),o.a.createElement("h4",null,e.continent),o.a.createElement("h4",null,e.currency))})))})))},p=a(28),E=a(68),v=(Object(E.a)(t||(t=Object(p.a)(["\n  query {\n    continents {\n      name\n      code\n    }\n  }\n"]))),Object(E.a)(r||(r=Object(p.a)(["\n  query {\n    countries {\n      name\n      code\n      capital\n      emoji\n      emojiU\n      currency\n      continent {\n        name\n      }\n      languages {\n        name\n        code\n      }\n    }\n  }\n"])))),b=(Object(E.a)(l||(l=Object(p.a)(["\n  query {\n    languages {\n      name\n    }\n  }\n"]))),function(){var e=Object(s.a)(v),n=e.data,a=e.error,t=e.loading,r=Object(c.useState)(!0),l=Object(m.a)(r,2),u=l[0],i=l[1],h=Object(c.useState)(""),p=Object(m.a)(h,2),E=p[0],b=p[1],y=Object(c.useState)(),j=Object(m.a)(y,2),O=j[0],k=j[1],w=Object(c.useState)(),C=Object(m.a)(w,2),q=C[0],L=C[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"Country Search"),o.a.createElement("h4",null,"Introduce your country"),o.a.createElement("input",{placeholder:"Introduce al menos dos (2) caracteres para iniciar la busqueda...",value:E,onChange:function(e){!function(e){e.preventDefault();for(var a,t=(a=e.target.value).charAt(0).toUpperCase()+a.slice(1),r=g.a.filter(n.countries,(function(e){return e.name.includes(t)})),l=[],c=0;c<r.length;c++)l.push({name:r[c].name,continent:r[c].continent.name,languages:r[c].languages.map((function(e){return e.name})),capital:r[c].capital,flag:r[c].emoji,currency:r[c].currency,code:r[c].code});for(var o=[],u=0;u<l.length;u++)for(var i=0;i<l[u].languages.length;i++)o.push(l[u].languages[i]);for(var m=g.a.uniq(o),s=[],h=0;h<m.length;h++)s.push({name:m[h],countries:[]});for(var f=0;f<s.length;f++)for(var d=0;d<l.length;d++)l[d].languages.includes(s[f].name)&&s[f].countries.push(l[d]);for(var p=[],E=0;E<l.length;E++)p.push(l[E].continent);for(var v=g.a.uniq(p),y=[],j=0;j<v.length;j++)y.push({name:v[j],countries:[]});for(var O=0;O<y.length;O++)for(var w=0;w<l.length;w++)l[w].continent.includes(y[O].name)&&y[O].countries.push(l[w]);console.log(y),L(s),k(y),b(t)}(e)}}),o.a.createElement("h2",null,"Group by :"),o.a.createElement("button",{onClick:function(e){!function(e){e.preventDefault(),i(!0)}(e)}},"Continent"),o.a.createElement("button",{onClick:function(e){!function(e){e.preventDefault(),i(!1)}(e)}},"Language"),t||a?o.a.createElement("p",null,"Loading Countries"):!0===u?o.a.createElement(f,{datita:O}):o.a.createElement(d,{datita:q}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(67),j=a(69),O=a(66),k=new y.a({cache:new j.a,uri:"https://countries.trevorblades.com"});i.a.render(o.a.createElement(O.a,{client:k},o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.1a2354b9.chunk.js.map