(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},r={index:0},n=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},1881:function(e,t,i){},"2c28":function(e,t,i){e.exports=i.p+"img/mht.f293ca88.jpg"},"359c":function(e,t,i){e.exports=i.p+"img/github.ef7a02b6.png"},"3cd5":function(e,t,i){"use strict";i("b6fa")},5376:function(e,t,i){e.exports=i.p+"img/dolphin.f7c077d4.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=i("8c4f"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Header"),i("router-view"),i("Footer")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("router-link",{staticClass:"title",attrs:{to:"/"}},[e._v("NIDHI PAI ")]),a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i("5376"),alt:"dolphin"}})]),a("div",{attrs:{id:"links"}},[a("router-link",{staticClass:"tab",attrs:{to:"/"}},[e._v(" HOME ")]),a("router-link",{staticClass:"tab",attrs:{to:"/projects"}},[e._v(" PROJECTS ")]),a("router-link",{staticClass:"tab",attrs:{to:"/links"}},[e._v(" LINKS ")]),a("router-link",{staticClass:"tab",attrs:{to:"/contact"}},[e._v("CONTACT")])],1)],1)},c=[],l={name:"Header"},u=l,d=(i("aaf0"),i("2877")),p=Object(d["a"])(u,s,c,!1,null,"be255f0e",null),h=p.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"footer"},[e._v(" ©"+e._s((new Date).getFullYear())+" Nidhi Pai. Built with Vue.js. "),e._m(0),e._m(1)])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://www.linkedin.com/in/nidhi-pai/"}},[a("img",{attrs:{id:"li-logo",src:i("953d"),alt:"LinkedIn Logo"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://github.com/nidhipai"}},[a("img",{attrs:{id:"gh-logo",src:i("359c"),alt:"GitHub Logo"}})])}],g={name:"Footer"},v=g,b=(i("667c"),Object(d["a"])(v,f,m,!1,null,"44ac2fe4",null)),_=b.exports,y={name:"App",components:{Footer:_,Header:h}},w=y,k=(i("034f"),Object(d["a"])(w,n,o,!1,null,null,null)),S=k.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"links"},[e._v(" Here, I've compiled some random resources that may be helpful. "),i("br"),i("br"),i("a",{attrs:{href:"https://docs.google.com/document/d/e/2PACX-1vRgTMZWpNe80_Qy5CaOWJTCwH4HhlljWKOOLorPNTJFflEAvMZh2cogewKbSZCSxWiXniLnGt_KWcQB/pub"}},[e._v(" Advice related to grad school admissions, attending grad school, and life in academia ")])])}],O={name:"Links"},C=O,P=Object(d["a"])(C,T,j,!1,null,"1b61eda9",null),x=P.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects"},[a("div",{staticClass:"proj"},[a("h2",[e._v("Modeling epidemic containment strategies on social networks")]),a("figure",[a("img",{attrs:{src:i("f637"),alt:"Epidemic on a network"}}),a("figcaption",[e._v("Example social network for an epidemic")])]),e._v(" During epidemics, governments enact a variety of non-pharmaceutical interventions to curb the spread of disease. Social distancing, isolation, and quarantine reduce transmission but also burden the economy, education, and health. Through modeling, we investigated mitigation strategies that keep interactions as close to normal as possible. We translated the Susceptible-Infected-Recovered (SIR) ODE model for epidemics to networks. Various mitigation measures are implemented by breaking specific links at a specified time. We compared the effects mitigation measures have on these graphs, and we found that targeted link removal is more effective than random removal, but both can be ineffective if implemented too late from the first infection. These preliminary results show the promise of network-based models as a tool to model nonpharmaceutical interventions. This work was done with the guidance of Dr. Martin Short at Georgia Tech, and presented as a poster in the 2022 UROP Symposium. "),a("br"),a("br"),e._v(" Final "),a("a",{attrs:{href:"https://drive.google.com/file/d/1oSly6Lg3RhSBMjTGoLO678QO1zYS-G80/view?usp=sharing"}},[e._v("Poster")]),e._v(" and "),a("a",{attrs:{href:"https://drive.google.com/file/d/1GEa6RPfQgrnvD72pTbefLGYpOEvSMK-h/view?usp=sharing"}},[e._v("Report")]),e._v(" from this project ")]),a("br"),a("br"),a("div",{staticClass:"proj"},[a("h2",[e._v("The Wikipedia Game as a measure of crystallized intelligence")]),a("figure",[a("img",{attrs:{src:i("b9af"),alt:"Six degrees of wikipedia"}}),a("figcaption",[e._v("Image credits: "),a("a",{attrs:{href:"https://www.sixdegreesofwikipedia.com/"}},[e._v("Six Degrees of Wikipedia")])])]),e._v(' In The Wikipedia Game, participants use Wikipedia hyperlinks to navigate from an origin page to a destination page. For example, if the origin page is “Georgia Tech” and the destination page is “George Washington,” players would be given the “Georgia Tech” Wikipedia page, and they might click “Atlantic Coast Conference” -> “South Atlantic states” -> “United States” -> “George Washington.” Or, as in the image, if given "Georgia Tech," participants could reach "Python (programming language)" via "Udacity." The test has the potential to capture a larger array of human knowledge than extant measures of crystallized intelligence as well as the ability to generate novel items without compromising test integrity. This work was conducted in the Problem Solving and Educational Technology Lab. Research on the topic was presented at the UROP Symposium in 2021 at Georgia Tech. ')]),a("br"),a("br"),a("div",{staticClass:"proj"},[a("h2",[e._v("Multi-hypothesis tracking of space objects and targets")]),a("figure",[a("img",{attrs:{src:i("2c28"),alt:"Six degrees of wikipedia"}}),a("figcaption",[e._v("Tracking two objects traveling in parallel")])]),e._v(" Over 20,000 artificial satellites currently orbit the Earth, and thousands more are launched each year. As the sky becomes more cluttered, tracking the trajectories of objects in Earth's orbit is critical. Sensors such as radar are currently used to measure satellite locations; however, these measurements are inherently noisy. Dealing with this noise is especially challenging when tracking many objects in close proximity. Multi-Hypothesis Tracking (MHT) is a prevalent tracking algorithm for monitoring multiple objects based on a deferred decision-making approach. We empirically tested a tree-based, track-oriented version of the MHT algorithm in difficult object tracking scenarios and develop improvements to overcome current shortcomings. These include a novel track scoring criteria based on the chi-squared test for variance. In addition, we developed heuristics for gating, thresholds for adding new tracks or incorporating missed measurements, and a modification to the traditional MHT algorithm that prevents new objects from being detected from false alarms prematurely. This research was conducted at the Institute for Pure and Applied Math (IPAM) at UCLA, as part of the Research in Industrial Projects (RIPS) program. ")])])}],A={name:"Projects"},I=A,R=(i("3cd5"),Object(d["a"])(I,M,E,!1,null,"1eee903a",null)),G=R.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contact"},[e._v(" I would love to meet you. Please feel free to reach out at npai9"),i("span",{staticStyle:{display:"none"}},[e._v("blub")]),e._v("@gatech.edu ")])}],L={name:"Contact"},$=L,U=Object(d["a"])($,W,H,!1,null,"79ab8384",null),F=U.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("div",{attrs:{id:"intro"}},[a("img",{attrs:{src:i("c496"),alt:"Nidhi Pai portrait"}}),e._v(" Hi! I'm a 3rd-year undergraduate student at Georgia Tech, majoring in math & computer science. My interests include mathematical biology and statistics, especially applied to public health. This summer, I am working at the Memorial Sloan Kettering Cancer Center in the Quantitative Sciences Undergraduate Research Experience (QSURE) program. Outside of school, you can find me baking, hiking, swimming, or generally working out. ")]),a("br"),a("div",[a("b",[e._v("Email:")]),e._v(" npai9"),a("span",{staticStyle:{display:"none"}},[e._v("blub")]),e._v("@gatech.edu "),a("br"),a("b",[e._v("Office hours:")]),e._v(" (Fall) TBA in Skiles 230 (undergrad TA office) ")]),a("div",{attrs:{id:"events"}},[a("h3",[e._v("Teaching:")]),a("ul",[a("li",[e._v(" (Fall 2022) TBA ")]),a("li",[e._v("(Spring 2022) Studio TA for Multivariable Calculus (MATH 2551), with Prof. Lavigne")]),a("li",[e._v("(Fall 2021) Studio TA for Linear Algebra (MATH 1553), with Prof. Goldzstein")])]),a("h3",[e._v("Places you can find me:")]),a("ul",[a("li",[e._v(" (Summer 2022) Quantitative Sciences Undergraduate Research Experience (QSURE) at Memorial Sloan Kettering Cancer Center (MSKCC) ")])]),a("h3",[e._v("Past:")]),a("ul",[a("li",[e._v("(April 13, 2022) Spring Undergraduate Research Symposium at Georgia Tech")]),a("li",[e._v("(April 6-9, 2022) Joint Math Meetings in Seattle, presenting at the Pi Mu Epsilon poster session")]),a("li",[e._v("(Jan 21-23, 2022) Nebraska Conference for Undergraduate Women in Math, presenting a poster")]),a("li",[e._v("(Oct 15-17, 2021) Graduate Research Opportunities for Women (GROW) at UIC")]),a("li",[e._v("(Summer 2021) Research in Industrial Projects for Students (RIPS) at the Institute for Pure & Applied Math (IPAM) at UCLA")])])])])}],N={name:"Home"},Q=N,J=(i("a285"),Object(d["a"])(Q,D,K,!1,null,"d688fdf0",null)),B=J.exports;a["a"].config.productionTip=!1,a["a"].use(r["a"]);var z=[{path:"/projects",component:G},{path:"/links",component:x},{path:"/contact",component:F},{path:"/",component:B}],Y=new r["a"]({routes:z});new a["a"]({render:function(e){return e(S)},router:Y}).$mount("#app")},"667c":function(e,t,i){"use strict";i("ee0c")},8379:function(e,t,i){},"85ec":function(e,t,i){},"953d":function(e,t,i){e.exports=i.p+"img/linkedin.95e1a15a.svg"},a285:function(e,t,i){"use strict";i("1881")},aaf0:function(e,t,i){"use strict";i("8379")},b6fa:function(e,t,i){},b9af:function(e,t,i){e.exports=i.p+"img/wikipedia_graph.48fe85dd.png"},c496:function(e,t,i){e.exports=i.p+"img/portrait.f44a29a0.jpg"},ee0c:function(e,t,i){},f637:function(e,t,i){e.exports=i.p+"img/graph_nodes.1b84ad1b.png"}});
//# sourceMappingURL=index.6f7236ce.js.map