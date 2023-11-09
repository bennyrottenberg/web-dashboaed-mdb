<template>
  
  <section class="parametersWindow" v-if ="this.row['test_with_agent'] == 'true' || this.row['test_app_mtf'] == 'true'">
    <button class="btn btn-outline-primary btn-fw" v-on:click="showAlert" >More info</button> <img src="@/assets/images/synamedia/phoenix_xml.png" width="20" height="20"/> 
    
    <show-Row-Window :row="row" ></show-Row-Window>
            
          
  </section>
<section class="parametersWindow" v-else>
    <button class="btn btn-outline-primary btn-fw" v-on:click="showAlert" >More info</button> 
     
     <show-Row-Window :row="row"></show-Row-Window>
            
         
  </section>


</template>

<script>
 import showRowWindow from '@/components/alerts/sweet-alert/showRowWindow.vue'  
 
export default {
  components: {
      "show-Row-Window": showRowWindow
    },
  props: ['row'],
  name: 'parametersWindow',
  data(){
    return{
      commentParameters: ``
      
    }
  },
  methods: {


    parseComments()
   {
    var n = 1
    if (n == 1)
    {
      console.log("parseComments start")
      
      var data = this.row['comments']
      console.log("data is",data )
      const _commentArray = [];

      for (const element of data) {
        const dateKey = Object.keys(element)[0];
        const dateValue = element[dateKey];
        console.log("dateValue is",dateValue )
        const commentKey = Object.keys(element)[1];
        const commentValue = element[commentKey];
        console.log("value2 is",commentValue)

        _commentArray.push({"date": dateValue, "comment": commentValue});


        var comment = 
      `                <li>
                  <h6>Comment</h6>
                  <p>${commentValue}</p>
                  <p class="text-muted">
                    <i class="mdi mdi-clock"></i> ${dateValue}.</p>
                </li>
      `
      this.commentParameters =  this.commentParameters  + comment



}

   }},
    adjustParametersForLogs()
    {
      var comment = 
      `                <li>
                  <h6>User confirmation</h6>
                  <p>Lorem Ipsum is simply dummy text of the comment</p>
                  <p class="text-muted">
                    <i class="mdi mdi-clock"></i> ${this.row['appName']}.</p>
                </li>
      `
      this.commentParameters = comment


      var comment2 = 
      
      `                <li>
                  <h6>User confirmation</h6>
                  <p>Lorem Ipsum is simply dummy text of the comment2</p>
                  <p class="text-muted">
                    <i class="mdi mdi-clock"></i> ${this.row['appName']}.</p>
                </li>
      `
      this.commentParameters = this.commentParameters + comment2
      
    },
    
      showAlert () {
      //this.adjustParametersForPlarforms() 
      this.parseComments() 
      
      
      this.$swal({
        title: 'More information',
        //type: 'info',
        html:
        `   <div">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">${this.row['appName']} log history</h4>
              <ul class="bullet-line-list">
                
               
                ${this.commentParameters}
              </ul>
            </div>
          </div>
        </div>
          `,
        showCloseButton: true,
        width:700,
    height:100,
        //showCancelButton: true,
        //focusConfirm: false,
        //confirmButtonText:
        // '<i class="fa fa-thumbs-up"></i> Great!',
       // confirmButtonAriaLabel: 'Thumbs up, great!',
       // cancelButtonText:
        //'<i class="fa fa-thumbs-down"></i>',
        //cancelButtonAriaLabel: 'Thumbs down'
      })
    }
  },
  mounted() {
    //this.adjustParametersForPlarforms()  


  },
}
</script>
