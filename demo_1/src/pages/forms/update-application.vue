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
                    <b-form-input type="AppName"  required v-model="appName">
                      <p>
                {{ appName }}
               
              </p>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group label="Comment" >
                    <b-form-input type="Comment"  placeholder="Type your comment" required v-model="Comment"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Comment"  label-for="input2">
                    <b-form-input type="Comment" id="input2" placeholder="Type your comment"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Message"  label-for="input10">
                <b-form-textarea id="input10" placeholder="Message" :rows="3" :max-rows="6"></b-form-textarea>
              </b-form-group>
                  <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
                  <b-button variant="light">Cancel</b-button>
                </form>
              </div>
              <p>
                {{ appName }}
                {{ Comment }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div>
      <updateAppWindow-Window></updateAppWindow-Window>
    </div>
  </section>

</template>

<script lang="js">
import updateAppWindow from '@/components/alerts/sweet-alert/updateAppWindow.vue'  
export default {

  components: {
      "updateAppWindow-Window": updateAppWindow
    },


  name: 'basicFormsElements',
  data () {
    return {
      
      appName:"gfghf",
      Comment:""

    }
  }
}
</script>


