(this["webpackJsonpprueba-bayonet"]=this["webpackJsonpprueba-bayonet"]||[]).push([[0],{114:function(e,t,a){},160:function(e,t,a){e.exports=a(326)},165:function(e,t,a){},222:function(e,t,a){},232:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=(a(114),a(327)),u=a(39),i=a(32),s=a(330),m=(a(165),function(){return r.a.createElement("div",{className:"menu-top"},r.a.createElement("div",{className:"menu-top__logo"}),r.a.createElement(s.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},r.a.createElement(s.a.Item,{key:"1"},r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement(s.a.Item,{key:"2"},r.a.createElement(u.b,{to:"/actividad"},"Actividad"))))}),p=a(49),d=a(52),E=a(24),f=(a(222),function(){var e=c.a.Footer;return r.a.createElement(e,{className:"footer"},r.a.createElement("p",null," Bayonet Github-Api "))}),h=a(329),g=function(e){var t=e.repo,a=t.language||"Sin lenguaje";return r.a.createElement("div",{style:{background:"#ECECEC",padding:"20px"}},r.a.createElement(h.a,{title:t.full_name,bordered:!1,style:{width:300}},r.a.createElement("p",null,"Usuario: ",t.owner.login),r.a.createElement("p",null,"Lenguaje: ",a),r.a.createElement("p",null,"Forks: ",t.forks),r.a.createElement("p",null,"Score: ",t.score)))},b=a(112),v=a.n(b),y=a(153),k=function(e,t){var a=Object(n.useState)(!0),r=Object(p.a)(a,2),l=r[0],o=r[1],c=Object(n.useState)(null),u=Object(p.a)(c,2),i=u[0],s=u[1],m=Object(n.useState)(null),d=Object(p.a)(m,2),E=d[0],f=d[1];return Object(n.useEffect)((function(){Object(y.a)(v.a.mark((function a(){var n,r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e,t);case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,s(r),o(!1),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),f(a.t0),o(!1);case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()}),[t,e]),{loading:l,result:i,error:E}},w=a(328),C=(a(232),function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(w.a,{size:"large"}),r.a.createElement("p",null,"Cargando..."))}),x=a(154),O=(a(322),function(e){var t="Populares",a=e.data,n=e.commits,l=[],o="";a?(l=a.items.map((function(e){return e.score})),o=a.items.map((function(e){return e.language})).filter((function(e){return null!=e})),1===l[0]&&(l=a.items.map((function(e){return e.forks})),o=a.items.map((function(e){return e.owner.login})))):console.log("aun no hay data"),null!=n&&(t="Commits a Github",l=n.slice(0,10).map((function(e){return e[1]})),o=n.slice(0,10).map((function(e,t){return"Semana ".concat(t+1)})),console.log(l));var c={labels:o,datasets:[{label:"".concat(t),fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grafica"},r.a.createElement(x.a,{data:c,width:1,options:{maintainAspectRatio:!1}})))}),S=(a(323),function(e){var t="Todos",a=e.value;"Todos"===a?(t=k("https://api.github.com/search/repositories?q=sort=stars&order=desc").result,console.log(t)):t=k("https://api.github.com/search/repositories?q=language:".concat(a,"&sort=stars&order=desc")).result;return r.a.createElement(d.a,null,r.a.createElement(E.a,{span:24,style:{textAlign:"center",marginTop:25}},r.a.createElement("h1",{style:{fontZise:35,fontWeigth:"bold"}},"Repositorios mas populares")),null==t?r.a.createElement(d.a,null,r.a.createElement(E.a,{span:24},r.a.createElement(C,null))):r.a.createElement(d.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(O,{data:t}))),t.items.slice(0,20).map((function(e){return r.a.createElement(E.a,{key:e.id,span:8,className:"card-repo"},r.a.createElement(g,{repo:e}))}))))}),j=a(331),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{span:24},r.a.createElement(H,null))),r.a.createElement(f,null))},H=function(){var e=j.a.Option,t=Object(n.useState)("Todos"),a=Object(p.a)(t,2),l=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{span:4,offset:20},r.a.createElement(j.a,{showSearch:!0,style:{width:200,left:0},placeholder:"Select a language",optionFilterProp:"children",onChange:function(e){o(e)},filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(e,{value:"Todos"},"Todos"),r.a.createElement(e,{value:"Javascript"},"JavaScript"),r.a.createElement(e,{value:"Go"},"Go"),r.a.createElement(e,{value:"Ruby"},"Ruby"),r.a.createElement(e,{value:"Python"},"Python")))),r.a.createElement(d.a,null,r.a.createElement(S,{value:l})))},T=(a(324),function(){var e=k("https://api.github.com/repos/facebook/react/stats/code_frequency");return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,null==e?r.a.createElement(d.a,null,r.a.createElement(E.a,{span:24},r.a.createElement(C,null))):r.a.createElement(E.a,{span:24,style:{height:"78vh"}},r.a.createElement(O,{commits:e.result}))),r.a.createElement(f,null))}),F=a(333),N=a(332),R=function(){return r.a.createElement(F.a,{className:"error404-container",status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(u.b,{to:"/"}," ",r.a.createElement(N.a,{type:"primary"}," Home"))})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(325);o.a.render(r.a.createElement((function(){var e=c.a.Header,t=c.a.Content;return r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(e,{style:{zIndex:1}},r.a.createElement(m,null)),r.a.createElement(t,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(B,null)),r.a.createElement(i.a,{path:"/actividad",exact:!0},r.a.createElement(T,null)),r.a.createElement(i.a,{path:"*"},r.a.createElement(R,null))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[160,1,2]]]);
//# sourceMappingURL=main.c6e0f037.chunk.js.map