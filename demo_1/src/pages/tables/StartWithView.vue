<template>
  <section class="tables">
    <div class="page-header">
      <h3 class="page-title">
        OttGuard
      </h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);">Table</a></li>
          <li class="breadcrumb-item active" aria-current="page">Advanced Table</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <b-table :items="items" id="table-list" responsive :per-page="perPage" :current-page="currentPage" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
              <template v-slot:cell(status)="data">
                <span v-html="data.value"></span>
              </template>
              <template v-slot:cell(action)="data">
                <span v-html="data.value"></span>
              </template>
            </b-table>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="table-list"
              align="right">
            </b-pagination>
          </div>
        </div>
      </div>
      </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>  
    </section>
  
</template>
<script >
import Vue from "vue";
import SortedTablePlugin from "vue-sorted-table";




Vue.use(SortedTablePlugin, {
  ascIcon: '<i class="mdi mdi-arrow-down"></i>',
  descIcon: '<i class="mdi mdi-arrow-up"></i>'
});

  
console.log('before export default')
export default {
    name: 'notifications',
    bbuttons: 'buttons',
  components: {
    //alertError

  },
  data: function() {
    
    console.log('start fun name function')    
    return {
      sortBy: 'Date',
      perPage: 10,
        currentPage: 1, 
        sortDesc: false,
        sortByFormatted: true,
        filterByFormatted: true,
        sortable: true,
        HTMLDDcontent: "null",
        fields: [
          { key: 'date', sortable: true },
          { key: 'Triggered By', sortable: true },
          { key: 'Ott Version', sortable: true },
          { key: 'HE Version', sortable: true },
          { key: 'Test Results', sortable: true },          
          { key: 'Status', sortable: true },
          { key: 'Action', sortable: true },
          { key: 'Job Url', sortable: true }
          
        ],
        
        items: []
   
    };
  },
  
  methods: {
    
    printParam(param) {
        console.log("param is: ",param)
      },
      async loadMongoDBCollection(api_name) {
        console.log("loadMongoDBCollection start create param is: ",api_name);
        const response = await fetch("http://10.10.230.14:/api/"+api_name);
        this.items = await response.json();
        //console.log(this.items[0]['Status'])
        
        
       
},


  
    
},
mounted(){

  this.loadMongoDBCollection('mdrm-build-all/get_data_json')
  console.log("loadMongoDBCollection mounted")
  console.log(this.items['Status'])
  
},
updated() {
  console.log("this.items")
         //console.log(this.items[0]['Status']," ",this.items[0]['Action'])
         console.log(this.items[1]['Job Url']," ",this.items[1]['Action'])
         //console.log(this.items[2]['Status']," ",this.items[2]['Action'])
         //console.log(this.items[3]['Status']," ",this.items[3]['Action'])
         console.log(this.items[0]['Date'])
         console.log(this.items[0]['Triggered By'])
         //this.items[0]['Triggered By'] ='benny'
         //this.items[0]['Status'] ='bennyStatus'
         //this.items[0]['Ott Version'] ='bennyOtt Version' //
         var urltmp = this.items[0]['Job Url']
         console.log(urltmp)
         //this.items[0]['Job Url'] ="<buttons type=\"buttons\" class=\"btn btn-link btn-fw\">Li</buttons>"
          //this.items[0]['Triggered By'] ='bennyTriggered By' 
          //this.items[0]['Test Results'] ='bennyTest Results' 
         //this.items[0]['HE Version'] ='bennyHE Version'

         console.log(this.items[0]['Date'])
         console.log(this.items[0]['Status'])
         console.log(this.items[0]['Ott Version'])
         console.log(this.items[14]['Triggered By'])
         console.log(this.items[0]['Test Results'])
         console.log(this.items[0]['HE Version'])
         console.log(this.items.length)
          console.log(this.items[0])
         this.items.forEach(element => { //this function shows only items that different from eachother
           console.log(element['Job Url'])
         });
           
},

watch:{
  items(to, from){
    console.log('from: ',from ,' to: ',to)
     console.log(this.items[0]['Status'])

  },
    $route(to, from) {
     this.items;
    }
},
  computed: {
    rows() {
      return this.items.length
    }
  }

}
</script>
