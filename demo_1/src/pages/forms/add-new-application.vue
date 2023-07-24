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
                <h4 class="card-title">Add new Aplication</h4>
                <!--
                  <p class="card-description">
                  What did you do ? 
                </p>

                -->
                <form class="forms-sample">
                  <b-form-group label="Application Name"  label-for="input1">
                    <b-form-input placeholder="" required v-model="ApplicationName"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Servers"  label-for="input2">
                    <b-form-input  placeholder="iprod20121,iprod20122" required v-model="Servers"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Developer"  label-for="input3">
                    <b-form-input  placeholder="" required v-model="Developer" ></b-form-input>
                  </b-form-group>
                  <b-form-group label="manager"  label-for="input4">
                    <b-form-input placeholder="" required v-model="manager"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Enviroment"  label-for="input5">
                    <b-form-input  placeholder="test,dev,prod" required v-model="Enviroment"></b-form-input>
                  </b-form-group>

                  <b-button  variant="success" class="mr-2" v-on:click="newAplicationReturnValues(ApplicationName,Servers,Developer,manager,Enviroment)" >Submit</b-button>
                  <!--<b-button variant="light">Cancel</b-button>-->
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  //name: 'basicFormsElements',
  props: {
      newAplicationReturnValues: {type: Function}
      },
  data () {
    return {
      ApplicationName : '',
      Servers : '',
      Developer : '',
      manager : '',
      Enviroment : ''
     
    }
  },
  methods :{
    printForm(){
      console.log("start")
      console.log(this.ApplicationName)
    }
  }
}
</script>


