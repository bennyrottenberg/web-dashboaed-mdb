<template>
  <section class="tables">
    <div class="page-header">
      <h3 class="page-title">
        Dynamic Table
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
            <h4 class="card-title">Dynamic Table</h4>
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
      <div class="col-sm-6">
               <!--<h5 class="card-subtitle">JSON Mode</h5>
             <aceEditorJson :ott_guard_all_datajson="this.datajson"></aceEditorJson>-->
            </div>
    <!--T <div>
     <div v-for="item in sortedArray" :key="item.date">
        <h1>{{item.date}}"-------"{{item['ott version']}}"-------"{{item['PLATFORMS']}}</h1></div>
    </div>-->
  </section>
  
</template>
<script>
import Vue from "vue";
import SortedTablePlugin from "vue-sorted-table";
//import aceEditorJson from '../../components/forms/aceEditorJson'


Vue.use(SortedTablePlugin, {
  ascIcon: '<i class="mdi mdi-arrow-down"></i>',
  descIcon: '<i class="mdi mdi-arrow-up"></i>'
});

export default {
  components: {
    //aceEditorJson
    
  },
  data: function() {
    return {
      sortBy: 'name',
      perPage: 40,
        currentPage: 1, 
        sortDesc: false,
        sortByFormatted: true,
        filterByFormatted: true,
        sortable: true,
        fields: [
          { key: 'date', sortable: true },
          { key: 'PLATFORMS', sortable: true },
          { key: 'Ott_Version_web', sortable: true },
           { key: 'Ott_Version_android', sortable: true },
          { key: 'HE component', sortable: true },
          { key: 'Test results', sortable: true },          
          { key: 'status', sortable: true }
        ],
        items: [],
        items2: [],
        datajson:[]
       
          
        
    };
  },
  methods: {
      async loadMongoDBCollection(api_name) 
      {
        console.log("function ------------  loadMongoDBCollection started")
        
        const response = await fetch("http://10.10.230.14:/api/"+api_name);
        this.originalJson = await response.json();
        this.originalJson.reverse()
        console.log("before map")
        const a = this.originalJson.map((item,index) => {
          //item['row'] = index
          return item;
        })
        this.datajson=a.slice();
        console.log("loadMongoDBCollection start datajson res is:");
        //setTimeout(() => {  console.log("World!"); var theRemovedElement = this.datajson.shift(); console.log(this.datajson)}, 8000);
        this.items = this.datajson
      }
    
    
  },
  mounted(){
    this.loadMongoDBCollection('mdrm-build-all/get_data_json')

  },
  computed: {
    rows() {
      return this.items.length
    },


  }
}
</script>
