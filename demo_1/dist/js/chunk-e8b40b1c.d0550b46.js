(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8b40b1c"],{"0cb2":function(t,n,r){var o=r("e330"),e=r("7b0b"),s=Math.floor,a=o("".charAt),i=o("".replace),l=o("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,n,r,o,u,b){var p=r+t.length,h=o.length,f=d;return void 0!==u&&(u=e(u),f=c),i(b,f,(function(e,i){var c;switch(a(i,0)){case"$":return"$";case"&":return t;case"`":return l(n,0,r);case"'":return l(n,p);case"<":c=u[l(i,1,-1)];break;default:var d=+i;if(0===d)return e;if(d>h){var b=s(d/10);return 0===b?e:b<=h?void 0===o[b-1]?a(i,1):o[b-1]+a(i,1):e}c=o[d-1]}return void 0===c?"":c}))}},"14c3":function(t,n,r){var o=r("c65b"),e=r("825a"),s=r("1626"),a=r("c6b6"),i=r("9263"),l=TypeError;t.exports=function(t,n){var r=t.exec;if(s(r)){var c=o(r,t,n);return null!==c&&e(c),c}if("RegExp"===a(t))return o(i,t,n);throw l("RegExp#exec called on incompatible receiver")}},"1ae4":function(t,n,r){"use strict";r.r(n);r("d3b7"),r("25f0");var o=function(){var t=this,n=t._self._c;return n("div",[n("h4",{staticClass:"text-dark"},[t._v("MDRM allente Stage 3 pipeline")]),n("div",{staticClass:"col-sm-12 grid-margin stretch-card"},[n("div",{staticClass:"card-card",staticStyle:{width:"150rem"}},[n("div",{staticClass:"card-body"},[n("b-tabs",{staticClass:"tab-solid tab-solid-primary"},[n("b-tab",[n("template",{slot:"title"},[n("i",{staticClass:"mdi mdi-weather-night"}),t._v(" Nightly ")]),n("div",[n("first-row-no-filter"),t._l(t.makeRC,(function(t,r){return n("build-all-row2",{key:"row"+r,attrs:{row:t,index:r}})}))],2)],2),n("b-tab",[t._v(" Numbers of runs "),n("b-dropdown",{attrs:{id:"mdrm_all_runs_dd",size:"sm",text:this.data_json_for_all_runs_tab.length.toString(),variant:"outline-primary"}},t._l(this.rowsPerPage,(function(r,o){return n("b-dropdown-item",{key:"component"+o},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.pageNumToDisplayForAllRunsTab(r)}}},[t._v(t._s(r))])])})),1),n("template",{slot:"title"},[n("i",{staticClass:"mdi mdi-home-outline"}),t._v(" All runs ")]),n("div",[n("first-row",{attrs:{sortByElement:t.sortByElement,filterByFiled:t.filterByFiled}}),t._l(t.data_json_for_all_runs_tab,(function(t){return n("build-all-row2",{key:t._id.$oid,attrs:{row:t}})}))],2)],2),n("b-tab",[n("template",{slot:"title"},[n("i",{staticClass:"mdi mdi-android-studio"}),t._v(" Android App change ")]),n("div",[n("first-row-no-filter"),t._l(t.androidAppChange,(function(t,r){return n("build-all-row2",{key:"row"+r,attrs:{row:t,index:r}})}))],2)],2),n("b-tab",[n("template",{slot:"title"},[n("i",{staticClass:"ti-world"}),t._v(" Web App change ")]),n("div",[n("first-row-no-filter"),t._l(t.WebChange,(function(t,r){return n("build-all-row2",{key:"row"+r,attrs:{row:t,index:r}})}))],2)],2),n("b-tab",[n("template",{slot:"title"},[n("i",{staticClass:"fa fa-reorder"}),t._v(" HE change ")]),n("div",[n("first-row-no-filter"),t._l(t.HEChange,(function(t,r){return n("build-all-row2",{key:"row"+r,attrs:{row:t,index:r}})}))],2)],2)],1)],1)])])])},e=[],s=r("c7eb"),a=r("1da1"),i=(r("d81d"),r("4de4"),r("a15b"),r("fb6a"),r("4e82"),function(){var t=this,n=t._self._c;return n("div",{key:this.row._id.$oid,staticClass:"row mt-0"},[n("div",{staticClass:"col-sm-12 grid-margin stretch-card"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("b-row",[n("b-col",{staticClass:"text-center"},[t._v(t._s(this.row.date))]),n("b-col",{staticClass:"text-center"},[t._v(t._s(this.row["upstream job"]))]),n("b-col",{staticClass:"text-center"},[t._v(t._s(this.row["user id"]))]),this.row["Platforms2"].split(",").length>1?n("b-col",{staticClass:"text-center"},[t._l(t.row["Platforms2"].split(","),(function(r,o){return n("div",{key:"Platform"+o},[n("p",{staticClass:"text-center"},[n("span",[t._v(t._s(r+": "+t.getAppVersion(r)))])])])})),n("b-col",{staticClass:"text-center"},[t._v(t._s(t.row["Ott_Version_"+t.row["Platforms2"]]))])],2):n("b-col",{staticClass:"text-center"},[n("p",{staticClass:"text-center"},[n("span",[t._v(t._s(t.getAppVersion(t.row["Platforms2"])))]),t._v(" "+t._s(t.row["Ott_Version_"+t.row["Platforms2"]])+" ")])]),n("b-col",{staticClass:"text-center"},[n("span",{domProps:{innerHTML:t._s(t.PlatformsWithStatusColor)}})]),n("b-col",{staticClass:"text-center"},[n("b-dropdown",{attrs:{id:"ddown12",size:"sm",text:this.row["HE Version"],variant:"outline-primary"}},t._l(this.HE_Component,(function(r,o){return n("b-dropdown-item",{key:"component"+o},[t._v(" "+t._s(r))])})),1)],1),"Passed"==this.row["Test Results"]?n("b-col",{staticClass:"text-center"},[n("b-button",{staticClass:"btn btn-gradient-success btn-rounded btn-fw"},[n("b-link",{staticClass:"text-white",attrs:{href:this.row["Job Url"],target:"_blank"}},[t._v("Passed")])],1)],1):n("b-col",{staticClass:"text-center"},[n("b-button",{staticClass:"btn btn-gradient-danger btn-rounded btn-fw",attrs:{id:"exPopover1-"+t.placement+this.row.row}},[n("b-link",{staticClass:"text-white",attrs:{href:this.row["Job Url"],target:"_blank"}},[t._v("Failed")])],1)],1),n("b-col",[n("div",{staticClass:"text-center"},[n("parameters-window",{attrs:{row:t.row}})],1)])],1)],1)])])])}),l=[],c=(r("498a"),r("7db0"),r("ac1f"),r("5319"),r("caad"),r("2532"),r("99af"),function(){var t=this,n=t._self._c;return"true"==this.row["test_with_agent"]||"true"==this.row["test_app_mtf"]?n("section",{staticClass:"parametersWindow"},[n("button",{staticClass:"btn btn-outline-primary btn-fw",on:{click:t.showAlert}},[t._v("More info")]),t._v(" "),n("img",{attrs:{src:r("5980"),width:"20",height:"20"}}),n("show-Row-Window",{attrs:{row:t.row}})],1):n("section",{staticClass:"parametersWindow"},[n("button",{staticClass:"btn btn-outline-primary btn-fw",on:{click:t.showAlert}},[t._v("More info")]),n("show-Row-Window",{attrs:{row:t.row}})],1)}),d=[],u=r("74b6"),b={components:{"show-Row-Window":u["a"]},props:["row"],name:"parametersWindow",data:function(){return{appsParameters:"",jobUrls:""}},methods:{adjustParametersForLogs:function(){console.log("adjustParametersForLogs activated"),console.log(this.row),console.log(this.row["testRunnerUrlAndroid"]);var t='<a href="'.concat(this.row["testRunnerUrlAndroid"],'" target="_blank">tests runner log Android  </a><i class="ti-android"></i> \n      <br><br><a href="').concat(this.row["testRunnerUrlAndroid"].replace("console","testReport"),'" target="_blank">test Report  <i class="mdi mdi-library-books"></i></a>');console.log("testRunnerUrlAndroid",t);var n,r='<a href="'.concat(this.row["testRunnerUrlWeb"],'" target="_blank">tests runner log Web </a> <i class="mdi mdi-web"></i> \n      <br><br><a href="').concat(this.row["testRunnerUrlWeb"].replace("console","testReport"),'" target="_blank">test Report <i class="mdi mdi-library-books"></i></a>'),o=this.row["Platforms2"].includes("web"),e=this.row["Platforms2"].includes("android");e&&(t+='<br><hr class="dotted"><br>'),o&&e?n=t+"<br>"+r:o&&!e?n=r:!o&&e&&(n=t),this.jobUrls='\n      <br>\n      <br>\n      <h4>test run information</h4>\n      <br>\n      \n      <table class="table table-bordered">\n       <thead class="thead-dark">\n            <tr>\n              <th scope="col">console log</th>\n              <th scope="col">Test Report</th>\n              <th scope="col">Logs</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              \x3c!--<td><a href="'.concat(this.row["Job Url"].replace("console",""),'" target="_blank">Stage3 Job url</a></td>--\x3e\n              <td><a href="').concat(this.row["Job Url"],'" target="_blank">Stage3 console log</a></td>\n              <td>').concat(n,'</td>\n              <td><a href="').concat(this.row["Job Url"].replace("console",""),'artifact/*zip*/archive.zip\'" target="_blank">Download Logs</a></td>\n              \n              <b-tab > \n              <template slot="title">\n                <i class=\'mdi mdi-home-outline\'></i> All runs\n              </template>\n                <div>\n                  <first-row :sortByElement="sortByElement" :filterByFiled="filterByFiled"></first-row> \n                  <build-all-row2 v-for="row in datajson" :key="row._" :row="row"></build-all-row2>  \n                </div>\n              \n            </b-tab>\n            </tr>\n          </tbody>\n        </table>')},adjustParametersForPlarforms:function(){console.log("adjustParametersForPlarforms activated");var t=this.row["Platforms"].includes("web"),n=this.row["Platforms"].includes("android"),r=this.row["Platforms"].includes("ios"),o="https://artifactory01.engit.synamedia.com/",e="OttGuardTestApp-release.apk",s=o+"artifactory/"+this.row["android_app"]+"/release/"+e,a="OttGuardTestApp-debug.apk",i=o+"artifactory/"+this.row["android_app"]+"/debug/"+a,l=o+"artifactory/"+this.row["ios_app"],c="http://sds-artifactory.il.nds.com:8081/artifactory/webapp/#/artifacts/browse/tree/General/vge-s2-libs-staging-local/com/cisco/spvss/vge/open-platforms/serviceguard_webapp/master/"+this.row["web_app"],d="false"==this.row["runOnDebug_Android"]?"(run on)":"",u="true"==this.row["runOnDebug_Android"]?"(run on)":"";console.log("runOnRelease",d),console.log("runOnDebug",u);var b='<table class="table table-bordered">\n          <thead class="thead-dark">\n            <tr>\n              <th scope="col">Platform</th>\n              <th scope="col">App</th>\n              <th scope="col">App version</th>\n              <th scope="col">Path in manifest</th>\n              <th scope="col">downloads</th>\n            </tr>\n          </thead>',p="</table>",h='\n          <tbody>\n            <tr>\n              <th scope="row">android</th>\n              <td>test app</td>\n              <td>'.concat(this.getAppVersion("android"),"</td>\n              <td>").concat(this.row["android_app"],'</td>\n              <td><a href="').concat(s,'" target="_blank">apk release ').concat(d,'</a>\n              <br>\n              <br>\n              <a href="').concat(i,'" target="_blank">apk debug ').concat(u,"</a>\n              <br>\n              </td>\n            </tr>\n          </tbody>\n      \n              "),f='\n    \n          <tbody>\n            <tr>\n              <th scope="row">ios</th>\n              <td>test app</td>\n              <td>'.concat(this.getAppVersion("ios"),"</td>\n              <td>").concat(this.row["ios_app"],'</td>\n              <td><a href="').concat(l,'/release/" target="_blank">release</a>\n              <br><br>\n              <a href="').concat(l,'/debug/" target="_blank">debug</a>\n              </td>\n              <br>\n              \n              <br>\n              </td>\n            </tr>\n          </tbody>\n        \n              '),m='\n\n          <tbody>\n            <tr>\n              <th scope="row">web</th>\n              <td>web app</td>\n              <td>'.concat(this.getAppVersion("web"),"</td>\n              <td>").concat(this.row["web_app"],'</td>\n              <td><a href="').concat(c,'" target="_blank">download</a></td>\n            </tr>\n          </tbody>\n        \n              ');n&&(this.appsParameters+=h+"<br>"),t&&(this.appsParameters+=m+"<br>"),r&&(this.appsParameters+=f+"<br>"),this.appsParameters=b+this.appsParameters+p},getAppVersion:function(t){t=t.trim(),"26.05.2022 17:50:55"==this.row["date"]&&(console.log("getAppVersion started"),console.log("_platform: "+t));var n="no_path";switch(t){case"ios":n=this.row["ios_app"];break;case"android":n=this.row["android_app"];break;case"web":n=this.row["mdrm_webapp"];break}"26.05.2022 17:50:55"==this.row["date"]&&console.log("appPath: "+n);var r=n.split("/"),o=r[r.length-1].split("-"),e=o[o.length-1];return"26.05.2022 17:50:55"==this.row["date"]&&console.log("version is: "+e),e},showAlert:function(){this.adjustParametersForPlarforms(),this.adjustParametersForLogs(),this.$swal({title:"More information",html:'<div class="card">\n          <div class="card-body">\n        '.concat(this.jobUrls,"\n        <br>\n      <br>\n        <h4>Applications</h4> \n        <br>\n        ").concat(this.appsParameters,'        \n            <br>\n          <div class="list-group">\n          </div>\n          </div>\n          '),showCloseButton:!0,width:1500,height:100})}},mounted:function(){}},p=b,h=r("2877"),f=Object(h["a"])(p,c,d,!1,null,null,null),m=f.exports,g={components:{"parameters-window":m},props:["row","index"],data:function(){return console.log("in data"+this.row),{counter:0,HE_Component:["ksm:  "+this.row["ksm"],"drms:  "+this.row["drms"],"lwst:  "+this.row["lwst"],"cdl:  "+this.row["cdl"],"tgs:  "+this.row["tgs"],"fpls:  "+this.row["fpls"],"prls:  "+this.row["prls"]],placement:"bottom",allParams:"none",PlatformStatusToolTip:"",PlatformsWithStatusColor:""}},methods:{getAppVersion:function(t){t=t.trim(),"26.05.2022 17:50:55"==this.row["date"]&&(console.log("getAppVersion started"),console.log("_platform: "+t));var n="no_path";switch(t){case"ios":n=this.row["ios_app"];break;case"android":n=this.row["android_app"];break;case"web":n=this.row["mdrm_webapp"];break}"26.05.2022 17:50:55"==this.row["date"]&&console.log("appPath: "+n);var r=n.split("/"),o=r[r.length-1].split("-"),e=o[o.length-1];return"26.05.2022 17:50:55"==this.row["date"]&&console.log("version is: "+e),e},adjustPlatformStatusToolTip:function(){var t={android:"Android","android ":"Android",web:"Web","web ":"Web","ios ":"iOS",ios:"iOS"};console.log("adjustPlatformStatusToolTip start",this.index);var n=this.row["testResWeb"],r=this.row["testResAndroid"],o=(this.row["testResAndroidAgent"],this.row["testResiOS"]),e=(this.row["testResiOSAgent"],""),s=this.row["Platforms2"].split(",").map((function(t){return t.toLowerCase().trim()})),a=s.find((function(t){return"web"===t})),i=s.find((function(t){return"android"===t})),l=s.find((function(t){return"ios"===t}));if(this.PlatformsWithStatusColor="",this.row["Platforms2"].split(",").length>1)if("Failed"==this.row["Test Results"]){if(a&&(this.PlatformsWithStatusColor+=n?'<a class="text-dark"href="'.concat(this.row["testRunnerUrlWeb"].replace("console","testReport"),'" target="_blank">web</a><br>'):'<a class="text-danger"href="'.concat(this.row["testRunnerUrlWeb"].replace("console","testReport"),'" target="_blank">web</a><br>')),i){var c="None";null!=this.row["testRunnerUrlAndroid"]&&this.row["testRunnerUrlAndroid"].includes("jenkins-jer.engit.synamedia.com")&&(c=this.row["testRunnerUrlAndroid"].replace("console","testReport")),r?"None"!=c&&(this.PlatformsWithStatusColor+='<a class="text-dark"href="'.concat(c,'" target="_blank">android  </a><br>')):this.PlatformsWithStatusColor+='<a class="text-danger"href="'.concat(c,'" target="_blank">android </a><br>')}if(l){console.log("ios exist");var d="None";null!=this.row["testRunnerUrliOS"]&&this.row["testRunnerUrliOS"].includes("jenkins-jer.engit.synamedia.com")&&(d=this.row["testRunnerUrliOS"].replace("console","testReport")),o?(console.log("ios passed"),"None"!=d&&(this.PlatformsWithStatusColor+='<a class="text-dark"href="'.concat(d,'" target="_blank">ios</a><br>'))):(console.log("ios failed"),this.PlatformsWithStatusColor+='<a class="text-danger"href="'.concat(d,'" target="_blank">ios</a><br>'))}}else for(var u=0;u<this.row["Platforms2"].split(",").length;u++){var b=this.row["Platforms2"].split(",")[u];null!=this.row["MTFRunnerUrl"+t["".concat(b)]]&&this.row["MTFRunnerUrl"+t["".concat(b)]].includes("jenkins-jer.engit.synamedia.com")?this.PlatformsWithStatusColor+='<a class="text-dark" href="'.concat(this.row["MTFRunnerUrl"+t["".concat(b)]].replace("console","artifact/test_results.json"),'" target="_blank">').concat(this.row["Platforms2"].split(",")[u],"</a><br>"):null!=this.row["testRunnerUrl"+t["".concat(b)]]&&this.row["testRunnerUrl"+t["".concat(b)]].includes("jenkins-jer.engit.synamedia.com")?this.PlatformsWithStatusColor+='<a class="text-dark" href="'.concat(this.row["testRunnerUrl"+t["".concat(b)]].replace("console","testReport"),'" target="_blank">').concat(this.row["Platforms2"].split(",")[u],"</a><br>"):"27.04.2022 22:56:52"!=this.row["date"]&&"27.04.2022 22:51:47"!=this.row["date"]||console.log("last else")}else null!=this.row["testRunnerUrl"+t["".concat(this.row["Platforms2"])]]&&this.row["testRunnerUrl"+t["".concat(this.row["Platforms2"])]].includes("jenkins-jer.engit.synamedia.com")?this.PlatformsWithStatusColor='<a class="text-dark" href="'.concat(this.row["testRunnerUrl"+t["".concat(this.row["Platforms2"])]].replace("console","testReport"),'" target="_blank">').concat(this.row["Platforms2"],"</a><br>"):(console.log("else ...."),console.log(this.row["testRunnerUrlWeb"]),console.log("platformUpperMap res for ,",this.row["Platforms2"]),console.log(t["".concat(this.row["Platforms2"])]),console.log("testRunner URL is: "),console.log(this.row["testRunnerUrl"+t["".concat(this.row["Platforms2"])]]));this.PlatformStatusToolTip=e,console.log("this.PlatformStatusToolTip",this.PlatformStatusToolTip),console.log(this.row["Platforms2"])}},mounted:function(){this.adjustPlatformStatusToolTip()},computed:{getVersionBenny:function(){return console.log(item),function(t){return orderby(t.entities,["entity","value"],["asc","asc"])}}}},_=g,w=Object(h["a"])(_,i,l,!1,null,null,null),v=w.exports,C=function(){var t=this,n=t._self._c;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("b-row",[n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("Date")}}},[t._v("Date "),n("i",{staticClass:"fa fa-sort"})])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("job")}}},[t._v("job "),n("i",{staticClass:"fa fa-sort"})]),n("b-dropdown",{attrs:{id:"ddown21",variant:"gradient-secondary"}},[n("template",{slot:"button-content"},[n("i",{staticClass:"ti-filter"})]),n("b-dropdown-item",[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.filterByFiled("upstream job","show_all")}}},[t._v("show all")])]),n("b-dropdown-item",[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.filterByFiled("upstream job","Stage3_job")}}},[t._v("Stage3_job")])]),n("b-dropdown-item",[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.filterByFiled("upstream job","mdrm-build-all")}}},[t._v("mdrm-build-all")])]),n("b-dropdown-item",[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.filterByFiled("upstream job","mdrmMakeRC")}}},[t._v("makeRC")])]),n("b-dropdown-item",[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.filterByFiled("upstream job","HE Artifactory")}}},[t._v("HE Change Monitor")])]),n("b-dropdown-item",[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.filterByFiled("upstream job","Android app git")}}},[t._v("Android testApp Monitor")])])],2)],1)]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("User id")}}},[t._v("User id "),n("i",{staticClass:"fa fa-sort"})])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("version")}}},[t._v("version "),n("i",{staticClass:"fa fa-sort"})])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("Platform")}}},[t._v("Platform "),n("i",{staticClass:"fa fa-sort"})])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("HE Version")}}},[t._v("HE Version "),n("i",{staticClass:"fa fa-sort"})])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"},on:{click:function(n){return t.sortByElement("Test Results")}}},[t._v("Test Results "),n("i",{staticClass:"fa fa-sort"})])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("More")])])])],1),n("hr",{staticClass:"my-3"})],1)])])])},y=[],k={props:{sortByElement:{type:Function},filterByFiled:{type:Function}},methods:{printData:function(){console.log("this.date in row component",this.date),console.log(row),console.log("this.HE_Component"),console.log(this.HE_Component)}},computed:function(){}},R=k,x=Object(h["a"])(R,C,y,!1,null,null,null),P=x.exports,j=function(){var t=this,n=t._self._c;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("b-row",[n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("Date ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("Job ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("User id ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("Version ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("Platform ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("HE Version ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("Test Results ")])])]),n("b-col",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn bg-transparent btn-btn-link",attrs:{type:"button"}},[t._v("More")])])])],1),n("hr",{staticClass:"my-3"})],1)])])])},M=[],A={props:{sortByElement:{type:Function},filterByFiled:{type:Function}},methods:{printData:function(){console.log("this.date in row component",this.date),console.log(row),console.log("this.HE_Component"),console.log(this.HE_Component)}},computed:function(){}},D=A,S=Object(h["a"])(D,j,M,!1,null,null,null),T=S.exports,U={components:{"build-all-row2":v,"first-row":P,"first-row-no-filter":T},data:function(){return{originalJsonMDRM:[],datajsonMDRM:[],originalJson_for_all_run_tab:[],data_json_for_all_runs_tab:[],rowsPerPage:["10","20","50","100","200","300","load all"]}},methods:{pageNumToDisplayForAllRunsTab:function(t){this.rowsPerPageDefVal=t,console.log(t),"load all"==t?(console.log("Num is load all"),this.loadMongoDBCollection_for_all_run_tab("mdrm-build-all/get_data_json_mdrm"),console.log("rowsPerPageDefVal",this.rowsPerPageDefVal)):this.loadMongoDBCollection_for_all_run_tab("mdrm-build-all/get_data_json_latests_mdrm?rowNum="+t)},filterByFiled:function(t,n){if("show_all"==n)console.log("FiledVal ==",n),this.data_json_for_all_runs_tab=this.originalJsonMDRM.map((function(t){return t}));else{this.data_json_for_all_runs_tab=[];var r=this.originalJson_for_all_run_tab.filter((function(r,o){return r[t].toString()===n.toString()}));this.data_json_for_all_runs_tab=r,console.log("this.datajsonMDRM in filterByFiled"),console.log("========!!!!!!!!!==========!!!!!!!!!!!!",this.data_json_for_all_runs_tab)}},ToDateTimeJava:function(t){console.log("function ------------  ToDateTimeJava started");var n=t.split(" ")[0].split(".").reverse().join("-"),r=t.split(" ")[1];return new Date(n+"T"+r)},sortedArrayBy:function(t){if(console.log("function ------------  sortedArrayBy started"),"Date"!=t)return console.log("before sortedData"),console.log(this.datajsonMDRM),this.datajsonMDRM.sort((function(n,r){return n[t]>r[t]?-1:1})),console.log("after sortedData"),console.log(this.datajsonMDRM),this.datajsonMDRM;var n=this.originalJsonMDRM.map((function(t,n){return t}));this.datajsonMDRM=n.slice()},loadMongoDBCollection:function(t){var n=this;return Object(a["a"])(Object(s["a"])().mark((function r(){var o,e;return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("function ------------  loadMongoDBCollection started api is:"+t),r.next=3,fetch("http://127.0.0.1:5000/api/"+t);case 3:return o=r.sent,r.next=6,o.json();case 6:n.originalJsonMDRM=r.sent,n.originalJsonMDRM.reverse(),console.log("before map"),e=n.originalJsonMDRM.map((function(t,n){return t})),n.datajsonMDRM=e.slice(),console.log("loadMongoDBCollection start datajsonMDRM res is:"),console.log(e);case 13:case"end":return r.stop()}}),r)})))()},loadMongoDBCollection_for_all_run_tab:function(t){var n=this;return Object(a["a"])(Object(s["a"])().mark((function r(){var o,e;return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("function ------------  loadMongoDBCollection_for_all_run_tab started"),console.log(t),r.next=4,fetch("http://10.10.230.14/api/"+t);case 4:return o=r.sent,r.next=7,o.json();case 7:n.originalJson_for_all_run_tab=r.sent,n.originalJson_for_all_run_tab.reverse(),e=n.originalJson_for_all_run_tab.map((function(t,n){return t})),n.data_json_for_all_runs_tab=e.slice(),console.log(n.data_json_for_all_runs_tab);case 12:case"end":return r.stop()}}),r)})))()},sortByElement:function(t){console.log("function ------------  sortByElement started"),console.log("sortByElement on click",t),this.sortedArrayBy(t)}},mounted:function(){this.loadMongoDBCollection("mdrm-build-all/get_data_json_latests_mdrm?rowNum=50")},created:function(){var t=this;setTimeout((function(){console.log("wait before load more records")}),5e3),this.loadMongoDBCollection("mdrm-build-all/get_data_json_latests_mdrm?rowNum=200"),this.loadMongoDBCollection_for_all_run_tab("mdrm-build-all/get_data_json_latests_mdrm?rowNum=10"),this.interval=setInterval((function(){t.loadMongoDBCollection("mdrm-build-all/get_data_json_mdrm"),console.log("load db")}),6e5)},computed:{androidClientChange:function(){var t=this.originalJsonMDRM.filter((function(t,n){return"Android Client Artifactory"===t["upstream job"].toString()}));return t},androidAppChange:function(){var t=this.originalJsonMDRM.filter((function(t,n){return"Android app git"===t["upstream job"].toString()}));return t},makeRC:function(){var t=this.originalJsonMDRM.filter((function(t,n){return"mdrmMakeRC"===t["upstream job"].toString()&&"timer"===t["user id"].toString()}));return t},WebChange:function(){var t=this.originalJsonMDRM.filter((function(t,n){return"stage2_web"===t["user id"].toString()}));return t},HEChange:function(){var t=this.originalJsonMDRM.filter((function(t,n){return"HE Artifactory"===t["upstream job"].toString()}));return t},AllTable:function(){var t=this.originalJsonMDRM.map((function(t){return t}));return t}}},B=U,O=(r("9a09"),Object(h["a"])(B,o,e,!1,null,null,null));n["default"]=O.exports},5319:function(t,n,r){"use strict";var o=r("2ba4"),e=r("c65b"),s=r("e330"),a=r("d784"),i=r("d039"),l=r("825a"),c=r("1626"),d=r("7234"),u=r("5926"),b=r("50c4"),p=r("577e"),h=r("1d80"),f=r("8aa5"),m=r("dc4a"),g=r("0cb2"),_=r("14c3"),w=r("b622"),v=w("replace"),C=Math.max,y=Math.min,k=s([].concat),R=s([].push),x=s("".indexOf),P=s("".slice),j=function(t){return void 0===t?t:String(t)},M=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),D=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,n,r){var s=A?"$":"$0";return[function(t,r){var o=h(this),s=d(t)?void 0:m(t,v);return s?e(s,t,o,r):e(n,p(o),t,r)},function(t,e){var a=l(this),i=p(t);if("string"==typeof e&&-1===x(e,s)&&-1===x(e,"$<")){var d=r(n,a,i,e);if(d.done)return d.value}var h=c(e);h||(e=p(e));var m=a.global;if(m){var w=a.unicode;a.lastIndex=0}var v=[];while(1){var M=_(a,i);if(null===M)break;if(R(v,M),!m)break;var A=p(M[0]);""===A&&(a.lastIndex=f(i,b(a.lastIndex),w))}for(var D="",S=0,T=0;T<v.length;T++){M=v[T];for(var U=p(M[0]),B=C(y(u(M.index),i.length),0),O=[],E=1;E<M.length;E++)R(O,j(M[E]));var F=M.groups;if(h){var W=k([U],O,B,i);void 0!==F&&R(W,F);var V=p(o(e,void 0,W))}else V=g(U,i,B,O,F,e);B>=S&&(D+=P(i,S,B)+V,S=B+U.length)}return D+P(i,S)}]}),!D||!M||A)},5980:function(t,n,r){t.exports=r.p+"img/phoenix_xml.118d0b0a.png"},"74b6":function(t,n,r){"use strict";var o=function(){var t=this,n=t._self._c;return n("section",{staticClass:"parametersWindow"},[n("button",{staticStyle:{border:"5px solid white","background-color":"transparent"},on:{click:t.showAlert}})])},e=[],s=(r("b64b"),r("caad"),r("99af"),{props:["row"],name:"parametersWindow",data:function(){return{appsParameters:"",allData:""}},methods:{generateParameters:function(){for(var t='<table class="table table-bordered">\n          <thead class="thead-dark">\n            <tr>\n              <th scope="col">Key</th>\n              <th scope="col">Value</th>\n            </tr>\n          </thead>',n="</table>",r=["android_demo_test_runner","profile","android_agent_app","android_app","ios_sample_app","ios_agent_app","mdrm_webapp","Platforms2","upstream job","user id","Test Results","testResAndroid","testResAndroidAgent","testResiOSAgent","testResWeb","testResiOS","testResTVOSAgent","testResiOSSample","testRessmartTV","HE Version","use_master_HE","Ott_Version_android","Ott_Version_web","Ott_Version_smartTV","build new appOtt_Version_android","Platforms","date","Job Url","testRunnerUrlAndroid","testRunnerUrliOSSample","testRunnerUrlWeb","passedOnDebug_Android","passedOnDebug_Android_agent","runOnDebug_Android","Action","Ott_Version_android_agent","Ott_Version_ios_agent","Ott_Version_tvos_agent","Ott_Version_ios_sample","MTFRunnerUrlAndroid","MTFRunnerUrliOS","MTFRunnerUrlWeb","MTFRunnerUrlWebMac","MTFRunnerUrlWebPC","MTFRunnerUrlsmartTV","test_with_agent","test_app_mtf","tvs"],o="",e=0,s=Object.keys(this.row);e<s.length;e++){var a=s[e];r.includes(a)&&(console.log(a),o+='<tbody>\n            <tr>\n              <th scope="row">'.concat(a,"</th>        \n              <td>").concat(this.row[a],"</td>\n            </tr>\n          </tbody>"))}this.allData=t+o+n},showAlert:function(){this.generateParameters(),this.$swal({title:"More information",html:'<div class="card">\n          <div class="card-body">\n        '.concat(this.allData,"\n        <br>\n          </div>\n          </div>\n          "),showCloseButton:!0,width:1500,height:100})}}}),a=s,i=r("2877"),l=Object(i["a"])(a,o,e,!1,null,null,null);n["a"]=l.exports},"7db0":function(t,n,r){"use strict";var o=r("23e7"),e=r("b727").find,s=r("44d2"),a="find",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),o({target:"Array",proto:!0,forced:i},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),s(a)},"8aa5":function(t,n,r){"use strict";var o=r("6547").charAt;t.exports=function(t,n,r){return n+(r?o(t,n).length:1)}},"9a09":function(t,n,r){"use strict";r("b829")},b829:function(t,n,r){},d784:function(t,n,r){"use strict";r("ac1f");var o=r("4625"),e=r("cb2d"),s=r("9263"),a=r("d039"),i=r("b622"),l=r("9112"),c=i("species"),d=RegExp.prototype;t.exports=function(t,n,r,u){var b=i(t),p=!a((function(){var n={};return n[b]=function(){return 7},7!=""[t](n)})),h=p&&!a((function(){var n=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return n=!0,null},r[b](""),!n}));if(!p||!h||r){var f=o(/./[b]),m=n(b,""[t],(function(t,n,r,e,a){var i=o(t),l=n.exec;return l===s||l===d.exec?p&&!a?{done:!0,value:f(n,r,e)}:{done:!0,value:i(r,n,e)}:{done:!1}}));e(String.prototype,t,m[0]),e(d,b,m[1])}u&&l(d[b],"sham",!0)}}}]);
//# sourceMappingURL=chunk-e8b40b1c.d0550b46.js.map