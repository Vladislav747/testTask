(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)i=o[f],s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0221":function(t,e,r){},"30f5":function(t,e){var r={randomName:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=e.length,a=0;a<5;a++)t+=e.charAt(Math.floor(Math.random()*r));return t},randomNumber:function(){return Math.floor(100*Math.random())},randomDate:function(){var t=Math.floor(Math.random()*Math.floor(1e9));return new Date(1e9*t).toLocaleDateString()}};t.exports=r},4318:function(t,e,r){"use strict";var a=r("44b5"),s=r.n(a);s.a},"44b5":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=r("1dce"),n=r.n(s),i=r("5f5b"),o=r("ecee"),c=r("c074"),l=r("ad3d"),u=r("bc3a"),f=r.n(u),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main-wrapper"}},[r("div",{staticClass:"content-wrapper"},[r("task-list")],1)])},h=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"taskList max-width-block"},[r("filter-module",{attrs:{tasks:t.tasks},on:{filterTasksFilter:t.filterResults}}),r("div",{staticClass:"tasks"},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",{attrs:{scope:"row"}},[r("div",{staticClass:"table__th"},[r("div",{staticClass:"th__text"},[t._v("\n                Дата\n              ")]),r("div",{staticClass:"th__icon"},[t.sortOrders.dateOrder?r("font-awesome-icon",{attrs:{icon:"sort-up",size:"2x","data-order":"date"},on:{click:function(e){return t.sortItems(e.target)}}}):r("font-awesome-icon",{attrs:{icon:"sort-down",size:"2x","data-order":"date"},on:{click:function(e){return t.sortItems(e.target)}}})],1)])]),r("th",{attrs:{scope:"row"}},[r("div",{staticClass:"table__th"},[r("div",{staticClass:"th__text"},[t._v("\n                Название\n              ")]),r("div",{staticClass:"th__icon"},[t.sortOrders.nameOrder?r("font-awesome-icon",{attrs:{icon:"sort-up",size:"2x","data-order":"name"},on:{click:function(e){return t.sortItems(e.target)}}}):r("font-awesome-icon",{attrs:{icon:"sort-down",size:"2x","data-order":"name"},on:{click:function(e){return t.sortItems(e.target)}}})],1)])]),r("th",{attrs:{scope:"row"}},[r("div",{staticClass:"table__th"},[r("div",{staticClass:"th__text"},[t._v("\n              Количество\n            ")]),r("div",{staticClass:"th__icon",attrs:{data_sort:"quantity"}},[t.sortOrders.quantityOrder?r("font-awesome-icon",{attrs:{icon:"sort-up",size:"2x","data-order":"quantity"},on:{click:function(e){return t.sortItems(e.target)}}}):r("font-awesome-icon",{attrs:{icon:"sort-down",size:"2x","data-order":"quantity"},on:{click:function(e){return t.sortItems(e.target)}}})],1)])]),r("th",{attrs:{scope:"row"}},[r("div",{staticClass:"table__th"},[r("div",{staticClass:"th__text"},[t._v("\n                Расстояние\n              ")]),r("div",{staticClass:"th__icon"},[t.sortOrders.distanceOrder?r("font-awesome-icon",{attrs:{icon:"sort-up",size:"2x","data-order":"distance"},on:{click:function(e){return t.sortItems(e.target)}}}):r("font-awesome-icon",{attrs:{icon:"sort-down",size:"2x","data-order":"distance"},on:{click:function(e){return t.sortItems(e.target)}}})],1)])])])]),r("tbody",t._l(t.currentTasks,function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.dateNew))]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.quantity))]),r("td",[t._v(t._s(e.distance))])])}),0)])]),r("paginaton",{attrs:{totalPages:t.totalPages},on:{changePagePagination:t.changePage}})],1)},g=[],v=(r("55dd"),r("7f7f"),r("6b54"),r("96cf"),r("3b8d")),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination__wrapper"},[r("ul",{staticClass:"pagination"},[r("li",{staticClass:"page-wrapper"},[r("a",{class:{disabled:!t.hasPrev},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePrevPage(e)}}},[t._v("«")])]),t._l(t.totalPages,function(e){return r("li",{key:e,staticClass:"page-wrapper"},[r("button",{staticClass:"btn btn-primary btn-paginate",class:{active:e==t.currentPage},on:{click:function(r){return r.preventDefault(),t.changeCurrentPage(e)}}},[t._v(t._s(e)+"\n                ")])])}),r("li",{staticClass:"page-wrapper"},[r("a",{class:{disabled:!t.hasNext},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeNextPage(e)}}},[t._v("»")])])],2)])},m=[],b={name:"Pagination",props:{totalPages:0},data:function(){return{currentPage:1}},computed:{hasPrev:function(){return this.currentPage>1},hasNext:function(){return this.currentPage<this.totalPages}},methods:{changeNextPage:function(){this.currentPage<this.totalPages&&(this.currentPage++,this.$emit("changePagePagination",this.currentPage))},changePrevPage:function(){this.currentPage>1&&(this.currentPage--,this.$emit("changePagePagination",this.currentPage))},changeCurrentPage:function(t){this.currentPage=t,this.$emit("changePagePagination",this.currentPage)}}},_=b,C=(r("6a4b"),r("2877")),y=Object(C["a"])(_,k,m,!1,null,"0ab067aa",null),P=y.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter__wrapper"},[r("h3",[t._v("Фильтрование элементов")]),r("div",{staticClass:"filter__inner"},[r("div",{staticClass:"filter-property"},[r("span",{staticClass:"filter-property--title"},[t._v("По какому полю фильтровать:")]),r("select",{staticClass:"form-control form-control-lg filter-property--body",on:{change:function(e){return t.filterCol(e.target.value)}}},t._l(t.typesFilterCols,function(e){return r("option",{key:e},[t._v(t._s(e))])}),0)]),r("div",{staticClass:"filter-property"},[r("span",{staticClass:"filter-property--title"},[t._v("Условие фильтрации")]),r("select",{staticClass:"form-control form-control-lg filter-property--body",on:{change:function(e){return t.filterCase(e.target.value)}}},t._l(t.typesFilterCases,function(e){return r("option",{key:e},[t._v(t._s(e))])}),0)]),r("div",{staticClass:"filter-property"},[r("span",{staticClass:"filter-property--title"},[t._v("Значение")]),r("input",{staticClass:"form-control filter-text",attrs:{type:"text"},on:{change:function(e){return e.preventDefault(),t.filterTasks(e.target.value)}}})])])])},w=[],x={name:"FilterModule",props:{tasks:{type:Array}},data:function(){return{typesFilterCols:["Дата","Название","Количество","Расстояние"],typesFilterCases:["Больше","Меньше","Равно","Содержит"],filterText:"",filterColData:"date",filterCaseData:"Больше",defaultTasks:[],filteredTasksData:[]}},methods:{filterCol:function(t){switch(t){case"Дата":this.filterColData="date";break;case"Название":this.filterColData="name";break;case"Количество":this.filterColData="quantity";break;case"Расстояние":this.filterColData="distance";break;default:break}},filterCase:function(t){this.filterCaseData=t},filterTasks:function(t){this.filterText=t||"";var e=[];this.filteredTasksData=this.tasks,this.filterColData&&this.filterCase&&""!==this.filterText?(this.defaultTasks=this.tasks,e=this.filteredTasksData.filter(this.filterTask)):e=this.defaultTasks,this.$emit("filterTasksFilter",e)},filterTask:function(t){switch(this.filterCaseData){case"Больше":return t[this.filterColData]>this.filterText;case"Меньше":return t[this.filterColData]<this.filterText;case"Равно":return t[this.filterColData].toString()==this.filterText.toString();case"Содержит":return-1!==t[this.filterColData].indexOf(this.filterText);default:break}}}},T=x,D=(r("4318"),Object(C["a"])(T,O,w,!1,null,"5b7e79de",null)),j=D.exports,M={name:"TaskList",components:{Paginaton:P,FilterModule:j},data:function(){return{isLoading:!0,tasks:[],currentTasks:[],totalPages:0,currentPage:1,sortOrders:{dateOrder:!0,nameOrder:!0,quantityOrder:!0,distanceOrder:!0}}},computed:{noTasks:function(){return!1===this.isLoading&&this.tasks&&0===this.tasks.length}},mounted:function(){this.getTasks()},methods:{getTasks:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("tasks");case 3:e=t.sent,this.tasks=e.data,this.tasks.length&&this.calculatePages(this.tasks),this.paginateTasks(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),new Error("Ошибка вывода списка задач  "+t.t0);case 12:this.isLoading=!1;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}(),calculatePages:function(t){return this.totalPages=t.length/10,this.totalPages},changePage:function(t){this.currentPage=t,this.paginateTasks()},filterResults:function(t){this.tasks=t,this.paginateTasks()},filterTask:function(t){return""===this.filterCategory||t.category.toString()===this.filterCategory.toString()},paginateTasks:function(){var t,e;this.currentPage>1?(t=10*(this.currentPage-1),e=Math.min(t+10,this.tasks.length+1)):(t=0,e=10);var r=this.tasks.slice(t,e);this.currentTasks=r},sortItems:function(t){var e=t.getAttribute("data-order");function r(t,e){return t.quantity-e.quantity}function a(t,e){return t.distance-e.distance}function s(t,e){return t.date-e.date}function n(t,e){return t.name.localeCompare(e.name)}switch(e){case"date":this.sortOrders.dateOrder?this.tasks.sort(s).reverse():this.tasks.sort(s),this.sortOrders.dateOrder=!this.sortOrders.dateOrder;break;case"name":this.sortOrders.nameOrder?this.tasks.sort(n).reverse():this.tasks.sort(n),this.sortOrders.nameOrder=!this.sortOrders.nameOrder;break;case"quantity":this.sortOrders.quantityOrder?this.tasks.sort(r).reverse():this.tasks.sort(r),this.sortOrders.quantityOrder=!this.sortOrders.quantityOrder;break;case"distance":this.sortOrders.distanceOrder?this.tasks.sort(a).reverse():this.tasks.sort(a),this.sortOrders.distanceOrder=!this.sortOrders.distanceOrder;break;default:break}this.paginateTasks()}}},q=M,L=(r("667b"),Object(C["a"])(q,p,g,!1,null,"068cf97f",null)),S=L.exports,I=(r("f9e3"),r("2dd8"),{name:"App",components:{TaskList:S},data:function(){return{}},methods:{updateSearch:function(t){this.searchText=t}}}),$=I,z=(r("5c0b"),Object(C["a"])($,d,h,!1,null,null,null)),F=z.exports,R=r("8c4f");a["default"].use(R["a"]);var N=new R["a"]({mode:"history",routes:[{path:"/",name:"task-list",component:S}]}),E=r("30f5"),A=r.n(E);a["default"].use(n.a),a["default"].use(i["a"]),o["c"].add(c["c"],c["b"],c["a"]),a["default"].component("font-awesome-icon",l["a"]);var U=r("bfa7"),J=f.a.create({baseURL:U.baseURL});Object.defineProperty(a["default"].prototype,"$http",{get:function(){return J}}),a["default"].config.productionTip=!1,new a["default"]({el:"#app",components:{},data:A.a,router:N,render:function(t){return t(F)}})},"5c0b":function(t,e,r){"use strict";var a=r("e332"),s=r.n(a);s.a},"667b":function(t,e,r){"use strict";var a=r("0221"),s=r.n(a);s.a},"6a4b":function(t,e,r){"use strict";var a=r("883e"),s=r.n(a);s.a},"883e":function(t,e,r){},bfa7:function(t,e){t.exports={
//!!!It matches the port we launch node server
baseURL:"http://localhost:8082/",baseURLProduction:"https://vue-taskmanager.herokuapp.com/"}},e332:function(t,e,r){}});
//# sourceMappingURL=app.87762d5d.js.map