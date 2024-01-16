<template>
      <section class="forms">
   
<div class="addApplicationForm">
        
        <!--
          <button @click="close">&times;</button>
      -->
        <div class="row">
    <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Update Aplication</h4>
                <p class="card-description">
                  What did you do ? 
                </p>
                <form class="forms-sample">
                  
                  <b-form-group label="Comment"  label-for="input2">
                    <b-form-input type="Comment" id="input2" placeholder="Type your comment"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Message"  label-for="input10">
                <b-form-textarea id="input10" placeholder="Message" :rows="3" :max-rows="6"></b-form-textarea>
              </b-form-group>

              
                  <b-button variant="success" class="mr-2" >Submit</b-button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
</div>
    </div>

      </section>

  </template>

<script>
export default {  
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.addApplicationForm{
    
  width: 100%;
  
}
.modal {
  position: absolute;
  top: 10;
  left: 10;
  width: 100%;
  height: 100%;
  display: flex;
 
  background-color: lightseagreen;
}
.modal-inner {  
  background-color: white;
  top: 10;
  left: 10;
  width: 70%;
  border-radius: 0.9em;
  padding: 2em;
  margin: auto;
}
</style>