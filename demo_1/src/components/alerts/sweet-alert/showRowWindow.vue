<template>
  
  
<section class="parametersWindow">
    <button style="border:5px solid white; background-color: transparent;" v-on:click="showAlert"></button>   
</section>

</template>

<script>
 //import QRCodeWindow from '@/components/alerts/sweet-alert/QRCodeWindow.vue' 
export default {
  //components: {
    //  "QR-Code-Window": QRCodeWindow
    //},
  props: ['row'],
  name: 'parametersWindow',
  data(){
    return{
      appsParameters: ``,
      allData:''
    }
  },
  methods: {   
    generateParameters(){

 var openTable = `<table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Value</th>
            </tr>
          </thead>`
      var colseTable = `</table>` 

var keys  = [
"android_demo_test_runner",
"profile",
"android_agent_app",
"android_app",
"ios_sample_app",
"ios_agent_app",
"mdrm_webapp",
"Platforms2",
"upstream job",
"user id",
"Test Results",
"testResAndroid",
"testResAndroidAgent",
"testResiOSAgent",
"testResWeb",
"testResiOS",
"testResTVOSAgent",
"testResiOSSample",
"testRessmartTV",
"HE Version",
"use_master_HE",
"Ott_Version_android",
"Ott_Version_web",
"Ott_Version_smartTV",
"build new appOtt_Version_android",
"Platforms",
"date",
"Job Url",
"testRunnerUrlAndroid",
"testRunnerUrliOSSample",
"testRunnerUrlWeb",
"passedOnDebug_Android",
"passedOnDebug_Android_agent",
"runOnDebug_Android",
"Action",
"Ott_Version_android_agent",
"Ott_Version_ios_agent",
"Ott_Version_tvos_agent",
"Ott_Version_ios_sample",
"MTFRunnerUrlAndroid",
"MTFRunnerUrliOS",
"MTFRunnerUrlWeb",
"MTFRunnerUrlWebMac",
"MTFRunnerUrlWebPC",
"MTFRunnerUrlsmartTV",
"test_with_agent",
"test_app_mtf",
"tvs"
//"test_results_json_android_agent"
] 



              
var DataTemp = ``
for (var key of Object.keys(this.row)) {
    if(keys.includes(key)){
    console.log(key)
    DataTemp = DataTemp +`<tbody>
            <tr>
              <th scope="row">${key}</th>        
              <td>${this.row[key]}</td>
            </tr>
          </tbody>` 
    } 
}
this.allData = openTable +DataTemp+colseTable
      
    },
      showAlert () {
        this.generateParameters()
      this.$swal({
        title: 'More information',
        //type: 'info',
        html:
        `<div class="card">
          <div class="card-body">
        ${this.allData}
        <br>
          </div>
          </div>
          `,
        showCloseButton: true,
        width:1500,
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
  }
}
</script>
