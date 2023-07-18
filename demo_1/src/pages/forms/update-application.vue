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
                  What did you do ?
                </p>
                <form class="forms-sample">
                  
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
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'basicFormsElements',
  data () {
    return {
      file: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      GenderSelect: [
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' }
      ],
      Category: [
        { value: 'a', text: 'Category 1' },
        { value: 'b', text: 'Category 2' },
        { value: 'c', text: 'Category 3' },
        { value: 'd', text: 'Category 4' },
        { value: 'e', text: 'Category 5' }
      ],
      countries: [
        { value: 'America', text: 'America' },
        { value: 'Italy', text: 'Italy' },
        { value: 'Russia', text: 'Russia' },
        { value: 'China', text: 'China' },
        { value: 'Britain', text: 'Britain' }
      ]
    }
  }
}
</script>


