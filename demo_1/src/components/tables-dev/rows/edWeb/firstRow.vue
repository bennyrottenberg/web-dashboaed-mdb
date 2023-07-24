<template>
     <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">        
          <b-row>
             <!--
              <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link">row <i class="fa fa-sort"></i></button>
              </div>
            </b-col>
            -->

            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link">App Name </button>
                <DropdownMenu-search :filterByApp="filterByApp"></DropdownMenu-search>
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >Servers</button>
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >Developer </button>
                
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >Maneger </button>
              </div>
            </b-col>

            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >More</button>
              </div>
            </b-col>
            
                <!--<button><i class="ti-filter" v-on:click="filterByFiled('1','2')"></i>  </button>-->
                


             <!-- <b-dropdown id="ddown21" variant="gradient-secondary">
                <input v-model="searchQuery" type="text">
                <template slot="button-content">
                  <i class="ti-filter"></i>
                </template>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','makeRC')">makeRC</button></b-dropdown-item>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('user id','R_D_pipeline')" >R&D</button></b-dropdown-item>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','show_all')" >show all</button></b-dropdown-item>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','SmartTV_to_dashboard')" >SmartTV_to_dashboard</button></b-dropdown-item>

                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','stage3_pipeline')" >stage3 pipeline</button></b-dropdown-item>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','HE Artifactory')">HE Change Monitor</button></b-dropdown-item>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','Android Client Artifactory')">Android Client Monitor</button></b-dropdown-item>
                <b-dropdown-item><button type="button" class="btn bg-transparent btn-btn-link" v-on:click="filterByFiled('upstream job','Android app git')" >Android testApp Monitor</button></b-dropdown-item>
              </b-dropdown>
            -->
              
            
            
        
          </b-row>
          <hr class="my-3"/>
          </div>
        </div>
      </div>
    </div>  
</template>

<script >
  
  import DropdownMenu from '../../../../pages/tables/dropdownMenu.vue'
  export default {

    components: {
      "DropdownMenu-search": DropdownMenu
    },

    
    
    props: {
      filterByApp: {type: Function}
    },
    data() {
      return {

        searchQuery:"",
        selectedUtem:null,
        options: [
              { name: 'Delhi', id: '1' },
              { name: 'Bhopal', id: '2' },
              { name: 'Patna', id: '3' },
              { name: 'Ranchi', id: '4' },
              { name: 'Noida', id: '5' }                         
     ],    


      }
    },
    methods: {
      printData() {
        
        console.log("this.date in row component",this.date)
        console.log(row)
        
        console.log("this.HE_Component")
        console.log(this.HE_Component)
      }
    },

    computed(){
      
    }
  }
</script>