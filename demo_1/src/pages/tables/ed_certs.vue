<template>
  <div class="main-div">
    <h4 class="text-dark">ED IIS Web application</h4>
    <div class="col-sm-12 grid-margin stretch-card" >
      <div class="card-card" style="width: 150rem; ">
        <div class="card-body">    
          <b-tabs class="tab-solid tab-solid-primary">
            
            <b-tab > 

              
              <!--<b-button variant="primary" @click="addApplicationComponentisVisible =!addApplicationComponentisVisible " class="btn btn-fw">Primary</b-button>
              <div :class="addApplicationComponentisVisible ? 'addApplicationVisible' : 'addApplicationInvisible'  " class="add-new-application" >
                <add-new-application></add-new-application>
              </div>
            -->
            <div style="padding-bottom:10px" >
              <b-button  variant="primary" v-on:click="addApplicationComponentisVisible =!addApplicationComponentisVisible ;changeAddNewAppButtonTxt()" class="btn btn-fw">{{ addAppButtonTxt }}</b-button>
            </div>
            
            
            <Transition name="slide-fade">
              <div v-show="addApplicationComponentisVisible" :class="addApplicationComponentisVisible ? 'addApplicationVisible' : 'addApplicationInvisible'  " class="add-new-application" >
                <add-new-application :newAplicationReturnValues = "newAplicationReturnValues"></add-new-application>
              </div>

            </Transition>  




              <!--Numbers of runs 
               <b-dropdown id="ottsg_all_runs_dd" size="sm" :text=this.data_json_for_all_runs_tab.length.toString() variant="outline-primary">        
              <b-dropdown-item v-for="(component, i) in this.rowsPerPage" :key="'component'+i"> 
                <button type="button" class="btn bg-transparent btn-btn-link" v-on:click="pageNumToDisplayForAllRunsTab(component)" >{{component}}</button>
                </b-dropdown-item>
              </b-dropdown>
            -->

              
              <template slot="title">
                <i class='mdi mdi-home-outline'></i> All apps
                
              </template>
              <first-row-certs :filterByApp="filterByApp"></first-row-certs> 
                <div>
                  <!--<first-row-certs :sortByElement="sortByElement" :filterByFiled="filterByFiled"></first-row-certs> -->
              <row-certs v-for="row in data_json_for_all_runs_tab" :key="row._id.$oid" :row="row" :refreshData = "refreshData"></row-certs>
                </div>   
                      
              
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="mdi mdi-weather-night"></i> 2012
              </template>
              <b-tabs>
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> All
              </template>  
              <div>
                <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandTwelveApps" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
              </b-tab>
              
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> Test
              </template> 
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandTwelveAppsTest" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div> 
              </b-tab>
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> Prod
              </template> 
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandTwelveAppsProd" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div> 
              </b-tab>
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> Dev
              </template> 
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandTwelveAppsDev" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div> 
              </b-tab>
            </b-tabs>
                
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="mdi mdi-weather-night"></i> 2016
              </template>
              <b-tabs>
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> All
              </template>  
              <div>
                <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandSixteenApps" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
              </b-tab>
              
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> Test
              </template> 
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandSixteenAppsTest" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div> 
              </b-tab>
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> Prod
              </template> 
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandSixteenProd" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div> 
              </b-tab>
              <b-tab>
                <template slot="title">
                <i class="mdi mdi-weather-night"></i> Dev
              </template> 
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandSixteenDev" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div> 
              </b-tab>
            </b-tabs>
                
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-settings "></i> Dev
              </template>
                <div>
                  <first-row-certs :filterByApp="filterByApp"></first-row-certs> 
                  <row-certs v-for="(row,i) in devApps" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
            </b-tab>

            <b-tab>
              <template slot="title">
                <i class="icon-settings "></i> Net
              </template>
                <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in netApps" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
            </b-tab>

            <b-tab>
              <template slot="title">
                 <i class="ti-android"></i>2022
              </template>
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in twoThousandTwentyTwoApps" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
              
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="mdi mdi-android-studio"></i>  Batch
              </template>
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in androidAppChange" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
             
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="ti-world"></i>  Stage
              </template>
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter>  
                  <row-certs v-for="(row,i) in WebChange" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
             
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="fa fa-reorder"></i> Crm
              </template>
              <div>
                  <first-row-cerst-no-filter> </first-row-cerst-no-filter> 
                  <row-certs v-for="(row,i) in HEChange" :key="'row'+i" :row="row" :index="i"></row-certs>  
                </div>
              
            </b-tab>

          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rowCerts from '../../components/tables-dev/rows/edWeb/rowCerts.vue'
import firstRowCerts from '../../components/tables-dev/rows/edWeb/firstRowCerts.vue'
import firstRowCertNoFilter from '../../components/tables-dev/rows/edWeb/firstRowCertsNoFilter.vue'
import addNewApplication from '@/pages/forms/add-new-application.vue' 
//import updateAppWindow from '@/components/alerts/sweet-alert/updateAppWindow.vue'
//import updateAppWindow from '@/pages/forms/update-application.vue' 



  export default {
    components: {
      "row-certs": rowCerts,
      "first-row-certs": firstRowCerts,
      "first-row-cerst-no-filter": firstRowCertNoFilter,
      "add-new-application": addNewApplication,
     // "updateAppWindow-Window": updateAppWindow
    },
    data() {
      return {
        rowsPerPage: ['10','20','50','100','200','300','load all'],
        rowsPerPageDefVal: '100',
        originalJson: [],
       datajson: [],
       originalJson_for_all_run_tab: [],
       data_json_for_all_runs_tab: [],
       addAppButtonTxt :"Add new", 
       updateAppButtonTxt :"Update",

       addApplicationComponentisVisible: false,
       updateApplicationComponentisVisible: false,
       
      }
    },
    methods: {


      async insertApplication(mydict)
      {
        const requestOptions = {
        method: "POST",
       //headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(mydict)
      };
        console.log(" call api: http://localhost:5000/api/education/insert_app/ with params: ",requestOptions)
        const response = await fetch("http://localhost:5000/api/education/insert_app/"+JSON.stringify(mydict), requestOptions);
       this.refreshData("mainPage")
      },


      refreshData(caller)
      {
        console.log("refreshData start from :",caller)
        this.loadMongoDBCollection_for_all_run_tab('education/get_all_apps_data?rowNum=50')
        this.$forceUpdate();
        //this.$router.go(0);
      },
      newAplicationReturnValues(ApplicationName,Servers,Developer,manager,enviroment){
        console.log(ApplicationName,Servers,Developer,manager,enviroment)
        this.editDataBeforeInsertsToDB(ApplicationName,Servers,Developer,manager,enviroment)

        this.addApplicationComponentisVisible =!this.addApplicationComponentisVisible //add his at the end
        this.addAppButtonTxt = "Add new"


      },
      addNewComment(ApplicationName,comment){
        console.log(ApplicationName,comment)
        //this.editDataBeforeInsertsToDB(ApplicationName,Servers,Developer,manager,enviroment)

        //this.addApplicationComponentisVisible =!this.addApplicationComponentisVisible //add his at the end
        //this.addAppButtonTxt = "Add new"


      },
      editDataBeforeInsertsToDB(ApplicationName,Servers,Developer,manager,enviroment)
      {
        console.log(ApplicationName,Servers,Developer,manager,enviroment)

        var d = new Date()
      let day = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let minuts = d.getMinutes();
      let hours = d.getHours() ;
      let sec = d.getSeconds() ;
      console.log(hours)
      var dateVar = `${day}.${month}.${year} ${hours}:${minuts}:${sec}`
      console.log("dateVar")
      var _dateVar = dateVar.toString
      //console.log(dateVar)

        var mydict = 
        { 
          
          "serverName": ApplicationName, 
          "servers": Servers ,
          "developer" : Developer,
          "manager" : manager,
          "enviroment": enviroment,
          "comments" : [
          {
            "date" : dateVar,
            "comment" : "created"
            
          },
          ]
        }
        this.insertApplication(mydict)

      },
      changeAddNewAppButtonTxt()
      {
        if(this.addAppButtonTxt != "Cancel")
        {
          this.addAppButtonTxt = "Cancel"
        }
        else
        {
          this.addAppButtonTxt = "Add new"
        }
        
      },
      changeUpdateAppButtonTxt()
      {
        if(this.updateAppButtonTxt != "Cancel")
        {
          this.updateAppButtonTxt = "Cancel"
        }
        else
        {
          this.updateAppButtonTxt = "Update"
        }
      },
      pageNumToDisplayForAllRunsTab(Num)
      {
        this.rowsPerPageDefVal = Num
        console.log(Num)
        if(Num =='load all')
          {
            console.log("Num is load all")
            this.loadMongoDBCollection_for_all_run_tab('mdrm-build-all/get_data_json')
            //this.rowsPerPageDefVal = this.data_json_for_all_runs_tab.length.toString()
            console.log("rowsPerPageDefVal",this.rowsPerPageDefVal)
            
          }

        else
          this.loadMongoDBCollection_for_all_run_tab('mdrm-build-all/get_data_json_latests_ottguard?rowNum='+Num)
        

      },
      filterByFiled(FilterBy,FiledVal)
      {
        if(FiledVal=='show_all')
        {
          this.loadMongoDBCollection('mdrm-build-all/get_data_json')
          this.loadMongoDBCollection_for_all_run_tab('mdrm-build-all/get_data_json')
        
        }           
        else
        {
         this.data_json_for_all_runs_tab = []
          const a  = this.originalJson_for_all_run_tab.filter((item,index) => { 
          return ( (item[FilterBy].toString()).includes(FiledVal.toString()) )

        });
        this.data_json_for_all_runs_tab = a
        }

      },
      filterByApp(FilterBy,FiledVal)
      {
        console.log("function ------------  filterByFiled started")
          console.log("FilterBy: "+FilterBy)
          console.log("FiledVal: "+FiledVal)
        console.log("hello benben")
        console.log(FiledVal.serverName)
        
        console.log(this.data_json_for_all_runs_tab)

        const a  = this.originalJson_for_all_run_tab.filter((item,index) => { 
          return ( (item["serverName"].toString()).includes(FiledVal.serverName.toString()) )

        });
        this.data_json_for_all_runs_tab = a

        

        

      },
      ToDateTimeJava(dateTime)
      {
        console.log("function ------------  ToDateTimeJava started")
          var myDate = dateTime.split(' ')[0].split('.').reverse().join('-')
          var myTime = dateTime.split(" ")[1]          
          return new Date(myDate+'T'+myTime);
      },
      sortedArrayBy(sortBy) 
      {
        console.log("function ------------  sortedArrayBy started")
        if(sortBy == 'Date')
        {  const a = this.originalJson.map((item,index) => {
          //item['row'] = index
          return item;
          })
          this.datajson = a.slice()
        }
        else
        {
          console.log("before sortedData")
          console.log(this.datajson)
          this.datajson.sort((t1,t2) => t1[sortBy] > t2[sortBy] ? -1 : 1);
          console.log("after sortedData")
          console.log(this.datajson)
          return this.datajson
        }  
      },
      printData()
      {
        console.log("printData started")

        console.log("length: ",this.datajson.length)
//console.log(this.datajson[1]['HE Version'])
        
        this.datajson.forEach(function(entry) {
            console.log(entry['HE Version']);
        });


      },
       async loadMongoDBCollection(api_name) 
      {
        console.log("function ------------  loadMongoDBCollection started")
        console.log(api_name)
        //api_name = "mdrm-build-all/get_data_json_latests"
        const response = await fetch("http://10.10.230.14/api/"+api_name);
        this.originalJson = await response.json();
        this.originalJson.reverse()
        
        const a = this.originalJson.map((item,index) => {
          //item['row'] = index
          return item;
        })
        this.datajson=a.slice(); 
        console.log(this.datajson)
        this.loadMongoDBCollection_callback();
        

        //this.data_json_for_all_runs_tab=a.slice()
        //setTimeout(() => {  console.log("World!"); var theRemovedElement = this.datajson.shift(); console.log(this.datajson)}, 8000);
        
      },
      loadMongoDBCollection_callback()
      {
        console.log("loadMongoDBCollection finished now")
        this.printData();
      },
      async loadMongoDBCollection_for_all_run_tab(api_name) 
      {
        console.log("function ------------  loadMongoDBCollection_for_all_run_tab started")
        console.log(api_name)
        //api_name = "mdrm-build-all/get_data_json_latests"
        const response = await fetch("http://127.0.0.1:5000/api/"+api_name);
        this.originalJson_for_all_run_tab = await response.json();
        this.originalJson_for_all_run_tab.reverse()
        
        const a = this.originalJson_for_all_run_tab.map((item,index) => {
          //item['row'] = index
          return item;
        })
        console.log("a before slice")
        console.log(a)


        this.data_json_for_all_runs_tab=a.slice(); 

        console.log("a  () after slice        this.data_json_for_all_runs_tab=a.slice();      ")
        console.log( this.data_json_for_all_runs_tab)

        //console.log("loadMongoDBCollection start datajson res is:");
        //console.log(this.datajson)
   

        //console.log("loadMongoDBCollection start originalJson res is:");
        //console.log(this.originalJson)
        
      },
        sortByElement(a) 
        {
        console.log("function ------------  sortByElement started")
        console.log("sortByElement on click",a);
        this.sortedArrayBy(a)
      }

    },
mounted(){
//this.loadMongoDBCollection('education/get_all_apps_data?rowNum=50')
},
created() {
  
  //this.loadMongoDBCollection('education/get_all_apps_data?rowNum=50',this.loadMongoDBCollection_callback())
  
  this.loadMongoDBCollection_for_all_run_tab('education/get_all_apps_data_certs?rowNum=5')
  setTimeout(() => { console.log("wait before load more records"); }, 20000);
  this.loadMongoDBCollection_for_all_run_tab('education/get_all_apps_data_certs?rowNum=5')
  //this.interval = setInterval(() => {this.loadMongoDBCollection('education/get_all_apps_data?rowNum=50');console.log("load db");}, 600000);
  //this.interval = setInterval(() => {this.loadMongoDBCollection_for_all_run_tab('education/get_all_apps_data?rowNum=2000');console.log("load education mongodb");}, 1200000);
},

computed: {
      androidClientChange: function()
      {
        const a  = this.originalJson.filter((item,index) => {
          return (item['upstream job'].toString() === 'Android Client Artifactory')
        });
        return a
      },
      androidAppChange: function()
      {
        const a  = this.originalJson.filter((item,index) => {
          return (item['upstream job'].toString() === 'Android app git')
        });
        return a
      },
      makeRC: function()
      {
        const a  = this.originalJson.filter((item,index) => {
          return ('1' === '1')
        });
        return a
      },
      WebChange: function()
      {
        const a  = this.originalJson.filter((item,index) => {
          return (item['user id'].toString() === 'stage2_web')
        });
        return a
      },
      netApps: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("Net"))
        });
        return a
      },
      twoThousandTwelveApps: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("2012"))
        });
        return a
      },
      twoThousandTwelveAppsTest: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("ITESTDMZ1") || item['serverName'].toString().includes("ITEST20121"))
        });
        return a
      },
      twoThousandTwelveAppsProd: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("IPRODDMZ") ||item['serverName'].toString().includes("iprod2012"))
        });
        return a
      },
      twoThousandTwelveAppsDev: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("idev2012"))
        });
        return a
      },
      twoThousandTwentyTwoApps: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("2022"))
        });
        return a
      },
      twoThousandSixteenApps: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("2022"))
        });
        return a
      },
      twoThousandSixteenAppsProd: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("2022"))
        });
        return a
      },
      twoThousandSixteenAppsTest: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("2022"))
        });
        return a
      },
      twoThousandSixteenAppsDev: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("2022"))
        });
        return a
      },
      devApps: function()
      {
        const a  = this.originalJson_for_all_run_tab.filter((item,index) => {
          return (item['serverName'].toString().includes("dev"))
        });
        return a
      },
      
      RAndD: function()
      {
        const a  = this.originalJson.filter((item,index) => {
          return (item['user id'].toString() === 'R_D_pipeline')
        });
        return a
      },
      HEChange: function()
      {
        const a  = this.originalJson.filter((item,index) => {
          return (item['upstream job'].toString() === 'HE Artifactory')
        });
        return a
      },
      AllTable: function()
      {
        const a  = this.originalJson.map((item) => {
          return item;
        });
        return a
      }

      

    }
  }
</script>
<style>
    #ottsg_all_runs_dd{
        margin : 20px !important;
        
    }
    .add-new-application
    {
   



      transition: all 0.5s ease;
      
      overflow: hidden ;
    
      

      
   

     
      
    }
    .update-application
    {
   



      transition: all 0.5s ease;
      
      overflow: hidden ;
    
      

      
   

     
      
    }

    .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}  
    
</style>