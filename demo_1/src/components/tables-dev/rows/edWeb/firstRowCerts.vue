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
                <button type="button" class="btn bg-transparent btn-btn-link">Server Name </button>
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >Cert Name</button>
              </div>
            </b-col>
            <b-col>
               <div class="text-center">
                <button type="button" class="btn bg-transparent btn-btn-link" >Expire Date </button>
                
              </div>
            </b-col>
     
        
          </b-row>
          <hr class="my-3"/>
          </div>
        </div>
      </div>
    </div>  
</template>

<script>
 
  export default {
   
    
    props: {
      sortByElement : {type: Function},
      filterByFiled: {type: Function}
    },
    //data() {
    //  return {row: []}
    //},
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