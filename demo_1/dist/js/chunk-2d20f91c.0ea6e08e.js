(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f91c"],{b3d9:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("section",{staticClass:"orders"},[e._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v("Orders")]),e._m(1),t("div",{staticClass:"row overflow-auto"},[t("div",{staticClass:"col-12"},[t("b-table",{attrs:{items:e.items,id:"table-list",responsive:"","per-page":e.perPage,"current-page":e.currentPage,fields:e.fields,"sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"cell(status)",fn:function(a){return[t("span",{domProps:{innerHTML:e._s(a.value)}})]}},{key:"cell(action)",fn:function(a){return[t("span",{domProps:{innerHTML:e._s(a.value)}})]}}])}),t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"table-list",align:"right"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])])])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-header"},[t("h3",{staticClass:"page-title"},[e._v(" Orders ")]),t("nav",{attrs:{"aria-label":"breadcrumb"}},[t("ol",{staticClass:"breadcrumb"},[t("li",{staticClass:"breadcrumb-item"},[t("a",{attrs:{href:"javascript:void(0);"}},[e._v("Sample pages")])]),t("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Orders")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row grid-margin"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t("strong",[e._v("Heads up!")]),e._v(" This alert needs your attention, but it's not super important. ")])])])}],i=a("2b0e"),o=a("9871"),n=a.n(o);i["default"].use(n.a,{ascIcon:'<i class="mdi mdi-arrow-down"></i>',descIcon:'<i class="mdi mdi-arrow-up"></i>'});var c={data:function(){return{perPage:10,sortBy:"name",currentPage:1,sortDesc:!1,sortByFormatted:!0,filterByFormatted:!0,sortable:!0,fields:[{key:"order",sortable:!0},{key:"purchasedOn",sortable:!0},{key:"customer",sortable:!0},{key:"shipTo",sortable:!0},{key:"basePrice",sortable:!0},{key:"purchasedPrice",sortable:!0},{key:"status",sortable:!0},{key:"action",sortable:!0}],items:[{order:"XN-1",purchasedOn:"25/09/2019",customer:"Edinburgh",shipTo:"New York",basePrice:"$1500",purchasedPrice:"$3200",status:'<label class="badge badge-info">On hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-2",purchasedOn:"26/09/2019",customer:"Doe",shipTo:"Brazil",basePrice:"$4500",purchasedPrice:"$7500",status:'<label class="badge badge-danger">Pending</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-3",purchasedOn:"26/09/2019",customer:"Sam",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"6300",status:'<label class="badge badge-success">success</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-4",purchasedOn:"27/09/2019",customer:"Joe",shipTo:"Netherland",basePrice:"$1100",purchasedPrice:"$7300",status:'<label class="badge badge-warning">pending</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-5",purchasedOn:"28/09/2019",customer:"Edward",shipTo:"Indonesia",basePrice:"$3600",purchasedPrice:"$4800",status:'<label class="badge badge-danger">pending</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-6",purchasedOn:"28/09/2019",customer:"Stella",shipTo:"Japan",basePrice:"$5600",purchasedPrice:"$3600",status:'<label class="badge badge-success">success</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-7",purchasedOn:"28/09/2019",customer:"Jaqueline",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$6300",status:'<label class="badge badge-success">success</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-8",purchasedOn:"29/09/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-9",purchasedOn:"29/09/2019",customer:"John",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-10",purchasedOn:"29/09/2019",customer:"Tom",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:'<label class="badge badge-danger">pending</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-11",purchasedOn:"30/09/2019",customer:"Aleena",shipTo:"New York",basePrice:"$1600",purchasedPrice:"$3500",status:'<label class="badge badge-danger">pending</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-12",purchasedOn:"01/10/2019",customer:"Alphy",shipTo:"Brazil",basePrice:"$5500",purchasedPrice:"$7200",status:'<label class="badge badge-danger">pending</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-13",purchasedOn:"02/10/2019",customer:"Twinkle",shipTo:"Italy",basePrice:"$1560",purchasedPrice:"$2530",status:'<label class="badge badge-success">closed</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-14",purchasedOn:"02/10/2019",customer:"Catherine",shipTo:"Brazil",basePrice:"$1600",purchasedPrice:"$5600",status:'<label class="badge badge-success">closed</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-15",purchasedOn:"05/10/2019",customer:"Daniel",shipTo:"Singapore",basePrice:"$6800",purchasedPrice:"$9800",status:'<label class="badge badge-success">closed</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-16",purchasedOn:"07/10/2019",customer:"Tom",shipTo:"Tokyo",basePrice:"$1600",purchasedPrice:"$6500",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-17",purchasedOn:"07/10/2019",customer:"Cris",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-18",purchasedOn:"09/10/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-19",purchasedOn:"11/10/2019",customer:"Jack",shipTo:"Tokyo",basePrice:"$3100",purchasedPrice:"$7300",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'},{order:"XN-20",purchasedOn:"14/10/2019",customer:"Tony",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:'<label class="badge badge-info">on hold</label>',action:'<button class="btn btn-outline-primary px-4 py-1"><i class="mdi mdi-eye-outline text-primary mr-2"></i>View</button>'}]}},computed:{rows:function(){return this.items.length}}},l=c,u=a("2877"),d=Object(u["a"])(l,s,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20f91c.0ea6e08e.js.map