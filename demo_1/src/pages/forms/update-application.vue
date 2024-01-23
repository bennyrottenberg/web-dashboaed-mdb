<template>

  <section class="forms">
    <div class="page-header">
      <nav aria-label="breadcrumb">
      </nav>
    </div>

    <div class="card-body" >    
          <b-tabs class="tab-solid tab-solid-primary">
            
            <b-tab>
              <template slot="title">
                <i class="mdi mdi-wechat"></i> Comments
              </template>
                <div>
                  <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="p-3 mb-2 bg-light text-dark">
              <div class="card">
              <div class="card-body">
                <h4 class="card-title">Write you comment</h4>
                <p class="card-description">
                  What did you do ?
                </p>
                <form class="forms-sample">
                  
                  <b-form-group label=" appName" >
                    <b-form-input  required v-model=" rowData.appName">
                      <p>
                {{ rowData['appName'] }}
               
                  </p>
                        </b-form-input>
                      </b-form-group>
                    
                    
                      <b-form-group label="Comment"  label-for="input10">
                    <b-form-textarea id="input10" placeholder="Message" :rows="3" :max-rows="6" required v-model="Comment"></b-form-textarea>
                  </b-form-group>
                  <b-button variant="success" class="mr-2" v-on:click="addNewComment( rowData['appName'],Comment)">Submit comment</b-button>
                  <!--<b-button variant="light">Cancel</b-button>-->
                </form>
              </div>
            </div>
              <p>
              </p>
            </div>
          </div>

          


          
        </div>
      </div>
                </div>
            </b-tab>
            <b-tab>
              <template slot="title">
                <i class="icon-pencil"></i> Edit application
              </template>
              <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="p-3 mb-2 bg-light text-dark">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Edit Aplication</h4>
                <p class="card-description">
                  ben ben
                </p>
                <form class="forms-sample">
                  
                  <b-form-group label=" appName" >
                    <b-form-input  required v-model=" rowData.appName">
                      <p>
                {{ rowData['appName'] }}
               
                  </p>
                        </b-form-input>
                      </b-form-group>

                      <b-form-group label=" servers" >
                    <b-form-input  required v-model=" rowData.servers">
                      <p>
                {{ rowData['appName'] }}
               
                  </p>
                        </b-form-input>
                      </b-form-group>
                      
                      
                      <b-form-group label=" developer" >
                    <b-form-input  required v-model=" rowData.developer">
                      <p>
                {{ rowData['appName'] }}
               
                  </p>
                        </b-form-input>
                      </b-form-group>
                      
                      <b-form-group label=" manager" >
                    <b-form-input  required v-model=" rowData.manager">
                      <p>
                {{ rowData['appName'] }}
               
                  </p>
                        </b-form-input>
                      </b-form-group>    
                      
                      
                      <b-form-group label=" Enviroment" >
                    <b-form-input  required v-model=" rowData.Enviroment">
                      <p>
                {{ rowData['appName'] }}
               
                  </p>
                        </b-form-input>
                      </b-form-group>      

                  <b-button variant="success" class="mr-2" v-on:click="editRowData(rowData,Comment)">Submit changes</b-button>
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
      </b-tab>
            
      </b-tabs>  
        </div>



    <div class="row">





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
    addNewComment: {type: Function},
    editRowData: {type: Function},
    rowData : {type : Object}
      
    },
 
  data () {
    return {
      
      
      Comment:""

    }
  }
  
}
</script>


