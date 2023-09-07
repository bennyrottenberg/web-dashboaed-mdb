<template>

  <section class="forms">
    <div class="page-header">
      <nav aria-label="breadcrumb">
      </nav>
    </div>
    <div class="row">
      <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Update Aplication</h4>
                <p class="card-description">
                  What did you do ? asdasdasdasdasdasdasdasd
                </p>
                <form class="forms-sample">
                  
                  <b-form-group label="AppName" >
                    <b-form-input  required v-model="appName">
                      <p>
                {{ appName }}
               
              </p>
                    </b-form-input>
                  </b-form-group>
   
    
                  <b-form-group label="Comment"  label-for="input10">
                <b-form-textarea id="input10" placeholder="Message" :rows="3" :max-rows="6" required v-model="Comment"></b-form-textarea>
              </b-form-group>
                  <b-button variant="success" class="mr-2" v-on:click="updateAplicationReturnValues(appName,Comment)">Submit</b-button>
                  <!--<b-button variant="light">Cancel</b-button>-->
                </form>
              </div>
              <p>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div>
    <!--<updateAppWindow-Window></updateAppWindow-Window>-->  
    </div>
  </section>

</template>

<script lang="js">
//import updateAppWindow from '@/components/alerts/sweet-alert/updateAppWindow.vue'  
export default {

  //components: {
  //    "updateAppWindow-Window": updateAppWindow
    //},


  name: 'basicFormsElements',
  

  props: {
    updateAplicationReturnValues: {type: Function},
    appName : {type : String}
      
    },
 
  data () {
    return {
      
      
      Comment:""

    }
  }
  
}
</script>


