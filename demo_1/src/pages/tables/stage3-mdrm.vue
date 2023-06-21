<template>
  <div>
    <h4 class="text-dark">MDRM allente Stage 3 pipeline</h4>
    <div class="col-sm-12 grid-margin stretch-card" >
      <div class="card-card" style="width: 150rem; ">
        <div class="card-body">
          <b-tabs class="tab-solid tab-solid-primary">
            <b-tab>
              <template slot="title">
                <i class="mdi mdi-weather-night"></i> Nightly
              </template>
                <div>
                  <first-row-no-filter> </first-row-no-filter> 
                  <build-all-row2 v-for="(row,i) in makeRC" :key="'row'+i" :row="row" :index="i"></build-all-row2>  
                </div>
            </b-tab>
            
            <b-tab > 
               Numbers of runs
               <b-dropdown id="mdrm_all_runs_dd" size="sm" :text=this.data_json_for_all_runs_tab.length.toString() variant="outline-primary">        
              <b-dropdown-item v-for="(component, i) in this.rowsPerPage" :key="'component'+i"> 
                <button type="button" class="btn bg-transparent btn-btn-link" v-on:click="pageNumToDisplayForAllRunsTab(component)" >{{component}}</button>
                </b-dropdown-item>
              </b-dropdown>     
              <template slot="title">
                <i class='mdi mdi-home-outline'></i> All runs
              </template>
                <div>
                  <first-row :sortByElement="sortByElement" :filterByFiled="filterByFiled"></first-row> 
                  <build-all-row2 v-for="row in data_json_for_all_runs_tab" :key="row._id.$oid" :row="row"></build-all-row2>  
                </div>                
              
            </b-tab>
            
            <b-tab>
              <template slot="title">
                <i class="mdi mdi-android-studio"></i>  Android App change
              </template>
              <div>
                  <first-row-no-filter> </first-row-no-filter> 
                  <build-all-row2 v-for="(row,i) in androidAppChange" :key="'row'+i" :row="row" :index="i"></build-all-row2>  
                </div>
             
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="ti-world"></i>  Web App change
              </template>
              <div>
                  <first-row-no-filter> </first-row-no-filter>  
                  <build-all-row2 v-for="(row,i) in WebChange" :key="'row'+i" :row="row" :index="i"></build-all-row2>  
                </div>
             
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="fa fa-reorder"></i> HE change
              </template>
              <div>
                  <first-row-no-filter> </first-row-no-filter> 
                  <build-all-row2 v-for="(row,i) in HEChange" :key="'row'+i" :row="row" :index="i"></build-all-row2>  
                </div>
              
            </b-tab>

          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import row2 from '../../components/tables-dev/rows/mdrmAlente/row2.vue'
import firstRow from '../../components/tables-dev/rows/mdrmAlente/firstRow.vue'
import firstRowNoFilter from '../../components/tables-dev/rows/mdrmAlente/firstRowNoFilter.vue'

  export default {
    components: {
      "build-all-row2": row2,
      "first-row": firstRow,
      "first-row-no-filter": firstRowNoFilter
    },
    data() {
      return {
       originalJsonMDRM: [],
       datajsonMDRM: [],
       originalJson_for_all_run_tab:[],
       data_json_for_all_runs_tab:[],
       rowsPerPage: ['10','20','50','100','200','300','load all'],       
      }
    },
    methods: {
      pageNumToDisplayForAllRunsTab(Num)
      {
        this.rowsPerPageDefVal = Num
        console.log(Num)
        if(Num =='load all')
          {
            console.log("Num is load all")
            this.loadMongoDBCollection_for_all_run_tab('mdrm-build-all/get_data_json_mdrm')
            //this.rowsPerPageDefVal = this.data_json_for_all_runs_tab.length.toString()
            console.log("rowsPerPageDefVal",this.rowsPerPageDefVal)
            
          }

        else
          this.loadMongoDBCollection_for_all_run_tab('mdrm-build-all/get_data_json_latests_mdrm?rowNum='+Num)
        

      },
      filterByFiled(filterBy,FiledVal)
      {
        //console.log("function ------------  filterByFiled started, FiledVal: ",FiledVal)

        if(FiledVal=='show_all')
        {
          console.log("FiledVal ==",FiledVal)
          this.data_json_for_all_runs_tab = this.originalJsonMDRM.map((item) => {
          return item;
        });
        }
        else
        {
         
         this.data_json_for_all_runs_tab = []
          const a  = this.originalJson_for_all_run_tab.filter((item,index) => {        
          return (item[filterBy].toString() === FiledVal.toString())

        });

        this.data_json_for_all_runs_tab = a
        console.log("this.datajsonMDRM in filterByFiled")
        //this.datajsonMDRM.reverse()
        console.log('========!!!!!!!!!==========!!!!!!!!!!!!',this.data_json_for_all_runs_tab)
        }

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
        {  const a = this.originalJsonMDRM.map((item,index) => {
          //item['row'] = index
          return item;
          })
          this.datajsonMDRM = a.slice()
        }
        else
        {
          console.log("before sortedData")
          console.log(this.datajsonMDRM)
          this.datajsonMDRM.sort((t1,t2) => t1[sortBy] > t2[sortBy] ? -1 : 1);
          console.log("after sortedData")
          console.log(this.datajsonMDRM)
          return this.datajsonMDRM
        }  
      },
       async loadMongoDBCollection(api_name) 
      {
        console.log("function ------------  loadMongoDBCollection started api is:"+api_name)
        
        const response = await fetch("http://127.0.0.1:5000/api/"+api_name);
        this.originalJsonMDRM = await response.json();
        this.originalJsonMDRM.reverse()
        console.log("before map")
        const a = this.originalJsonMDRM.map((item,index) => {
          //item['row'] = index
          return item;
        })
        this.datajsonMDRM=a.slice(); 
        
        console.log("loadMongoDBCollection start datajsonMDRM res is:");
        console.log(a)
        //setTimeout(() => {  console.log("World!"); var theRemovedElement = this.datajson.shift(); console.log(this.datajsonMDRM)}, 8000);
        
      },
      async loadMongoDBCollection_for_all_run_tab(api_name) 
      {
        console.log("function ------------  loadMongoDBCollection_for_all_run_tab started")
        console.log(api_name)
        //api_name = "mdrm-build-all/get_data_json_latests"
        const response = await fetch("http://10.10.230.14/api/"+api_name);
        this.originalJson_for_all_run_tab = await response.json();
        this.originalJson_for_all_run_tab.reverse()
        
        const a = this.originalJson_for_all_run_tab.map((item,index) => {
          //item['row'] = index
          return item;
        })
        this.data_json_for_all_runs_tab=a.slice(); 
        //console.log("loadMongoDBCollection start datajson res is:");
        //console.log(this.datajson)

        console.log(this.data_json_for_all_runs_tab)

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
   
   this.loadMongoDBCollection('mdrm-build-all/get_data_json_latests_mdrm?rowNum=50')
},
created() {
  setTimeout(() => { console.log("wait before load more records"); }, 5000);
  this.loadMongoDBCollection('mdrm-build-all/get_data_json_latests_mdrm?rowNum=200')
  this.loadMongoDBCollection_for_all_run_tab('mdrm-build-all/get_data_json_latests_mdrm?rowNum=10')
  this.interval = setInterval(() => {this.loadMongoDBCollection('mdrm-build-all/get_data_json_mdrm');console.log("load db");}, 600000);
},

computed: {
      androidClientChange: function()
      {
        const a  = this.originalJsonMDRM.filter((item,index) => {
          return (item['upstream job'].toString() === 'Android Client Artifactory')
        });
        return a
      },
      androidAppChange: function()
      {
        const a  = this.originalJsonMDRM.filter((item,index) => {
          return (item['upstream job'].toString() === 'Android app git')
        });
        return a
      },
      makeRC: function()
      {
        const a  = this.originalJsonMDRM.filter((item,index) => {
          return (item['upstream job'].toString() === 'mdrmMakeRC' && item['user id'].toString() === 'timer')
        });
        return a
      },
      WebChange: function()
      {
        const a  = this.originalJsonMDRM.filter((item,index) => {
          return (item['user id'].toString() === 'stage2_web')
        });
        return a
      },
      HEChange: function()
      {
        const a  = this.originalJsonMDRM.filter((item,index) => {
          return (item['upstream job'].toString() === 'HE Artifactory')
        });
        return a
      },
      AllTable: function()
      {
        const a  = this.originalJsonMDRM.map((item) => {
          return item;
        });
        return a
      }

      

    }
  }
</script>
<style>
    #mdrm_all_runs_dd{
        margin : 20px !important;
        
    }
</style>