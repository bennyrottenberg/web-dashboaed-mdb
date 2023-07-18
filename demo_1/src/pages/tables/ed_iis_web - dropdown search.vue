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
                <button type="button" class="btn bg-transparent btn-btn-link" v-on:click="sortByElement('Date')">Application <i class="fa fa-sort"></i></button>
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" v-on:click="sortByElement('job')">Servers <i class="fa fa-sort"></i></button>
                <!--<button><i class="ti-filter" v-on:click="filterByFiled('1','2')"></i>  </button>-->
                

                <multiselect
  :options="list"
  v-model="selected"
></multiselect>

<div @keyup.enter="addColor($event)">
  <multiselect
    :options="list"
    v-model="selected"
    @search-change="typed = $event"
  ></multiselect>
</div>

<select class="form-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>



                <input v-model="searchQuery" type="text" placeholder="filter app">
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
              </div>


              <div class="dropdown hierarchy-select" id="example">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="example-two-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
    <div class="dropdown-menu" aria-labelledby="example-two-button">
        <div class="hs-searchbox">
            <input type="text" class="form-control" autocomplete="off">
        </div>
        <div class="hs-menu-inner">
            <a class="dropdown-item" data-value="" data-default-selected="" href="#">All colors</a>
            <a class="dropdown-item" data-value="1" href="#">Red</a>
            <a class="dropdown-item" data-value="2" href="#">Orange</a>
            <a class="dropdown-item" data-value="3" href="#">Yellow</a>
            <a class="dropdown-item" data-value="4" href="#">Green</a>
            <a class="dropdown-item" data-value="5" href="#">Blue</a>
            <a class="dropdown-item" data-value="6" href="#">Purple</a>
            <a class="dropdown-item" data-value="7" href="#">Pink</a>
            <a class="dropdown-item" data-value="8" href="#">Brown</a>
            <a class="dropdown-item" data-value="9" href="#">Black</a>
            <a class="dropdown-item" data-value="10" href="#">Grey</a>
            <a class="dropdown-item" data-value="11" href="#">White</a>
        </div>
    </div>
    <input class="d-none" name="example_two" readonly="readonly" aria-hidden="true" type="text"/>
</div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" v-on:click="sortByElement('User id')">developer <i class="fa fa-sort"></i></button>
                
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" v-on:click="sortByElement('ott version')">maneger <i class="fa fa-sort"></i></button>
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >More</button>
              </div>
            </b-col>
        
          </b-row>
          <hr class="my-3"/>
          </div>
        </div>
      </div>
    </div>  
</template>

<script >
  
  export default {
    
    props: {
      sortByElement : {type: Function},
      filterByFiled: {type: Function}
    },
    data() {
      return {
        list:['Red', 'Yellow', 'Green'],
      selected: '',
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
<!-- Hierarchy Select CSS -->
<link rel="stylesheet" href="css/hierarchy-select.min.css">

<!-- Hierarchy Select Js -->
<script src="js/hierarchy-select.min.js"></script>

$(document).ready(function(){
    $('#example').hierarchySelect({
    hierarchy: false,
    width: 'auto'
   });
});
