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
      appsParameters: ``,
      jobUrls:''
    }
  },
  methods: {
    adjustParametersForLogs()
    {
      console.log("adjustParametersForLogs activated")
      console.log(this.row)
      console.log(this.row['testRunnerUrlAndroid'])
      var testRunnerUrlAndroid = `<a href="${this.row['testRunnerUrlAndroid']}" target="_blank">tests runner log Android  </a><i class="ti-android"></i> 
      <br><br><a href="${this.row['testRunnerUrlAndroid'].replace('console','testReport')}" target="_blank">test Report  <i class="mdi mdi-library-books"></i></a>`
      console.log("testRunnerUrlAndroid",testRunnerUrlAndroid)
      if(this.row['MTFRunnerUrlAndroid'] != null)
      {
      var testRunnerUrlAndroidAgent = `<a href="${this.row['MTFRunnerUrlAndroid']}" target="_blank">MTF Runner log Android  </a><i class="ti-android"></i> 
      <br><br><a href="${this.row['MTFRunnerUrlAndroid'].replace('console','artifact/test_results.json')}" target="_blank">test Report  <i class="mdi mdi-library-books"></i></a>`
      }
      var testRunnerUrlWeb = `<a href="${this.row['testRunnerUrlWeb']}" target="_blank">tests runner log Web </a> <i class="mdi mdi-web"></i> 
      <br><br><a href="${this.row['testRunnerUrlWeb'].replace('console','testReport')}" target="_blank">test Report <i class="mdi mdi-library-books"></i></a>`

      var isWebExist = this.row['Platforms2'].includes("web")
      var isAndroidExist = this.row['Platforms2'].includes("android")

      var testRunnerUrl
      var test_app_mtf = this.row['test_app_mtf'] == "true" ? true : false
      if(isAndroidExist &&test_app_mtf)
      {
        testRunnerUrlAndroid += '<br><hr class="dotted"><br>'+testRunnerUrlAndroidAgent
      }
      if(isWebExist && isAndroidExist)
      { 
          testRunnerUrl = testRunnerUrlAndroid+'<br><hr class="dotted"><br>'+testRunnerUrlWeb

      }
      else if (isWebExist && !isAndroidExist)
      {
        testRunnerUrl = testRunnerUrlWeb
      }
      else if(!isWebExist && isAndroidExist)
      {
            testRunnerUrl = testRunnerUrlAndroid
       
      }

      this.jobUrls = `
      <br>
      <br>
      <h4>test run information</h4>
      <br>
      
      <table class="table table-bordered">
       <thead class="thead-dark">
            <tr>
              <th scope="col">console log</th>
              <th scope="col">Test Report</th>
              <th scope="col">Logs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!--<td><a href="${this.row['Job Url'].replace('console','')}" target="_blank">Stage3 Job url</a></td>-->
              <td><a href="${this.row['Job Url']}" target="_blank">Stage3 console log</a></td>
              <td>${testRunnerUrl}</td>
              <td><a href="${this.row['Job Url'].replace('console','')}artifact/*zip*/archive.zip'" target="_blank">Download Logs</a></td>
              
              <b-tab > 
              <template slot="title">
                <i class='mdi mdi-home-outline'></i> All runs
              </template>
                <div>
                  <first-row :sortByElement="sortByElement" :filterByFiled="filterByFiled"></first-row> 
                  <build-all-row2 v-for="row in datajson" :key="row._" :row="row"></build-all-row2>  
                </div>
              
            </b-tab>
            </tr>
          </tbody>
        </table>`

    },
    adjustParametersForPlarforms()
    {
      console.log("adjustParametersForPlarforms activated")
      var isWebExist = this.row['Platforms'].includes("web")
      var isAndroidExist = this.row['Platforms'].includes("android")
      var isiOSExist = this.row['Platforms'].includes("ios")
      var isTVOSExist = this.row['Platforms'].includes("tvos")
      var test_app_mtf = this.row['test_app_mtf'] == "true" ? true : false
      //console.log("test_app_mtf",test_app_mtf)
      //console.log("isWebExist: "+isWebExist)
      //console.log("isAndroidExist: "+isAndroidExist)
      var artifactoryServerName = "https://artifactory01.engit.synamedia.com/"
      
      var apkUrlReleaseDemo = artifactoryServerName+'artifactory/'+this.row['android_demo_app']+'/release/'
      //var apkUrlDebugDemo = artifactoryServerName+'artifactory/'+this.row['android_demo_app']+'/debug/'
      var aarUrlReleaseDemo  = artifactoryServerName+'artifactory/'+this.row['ott_guard_android_demo']+'/release/OTTServiceGuard-release.aar '
      //var aarUrlDebugDemo  = artifactoryServerName+'artifactory/'+this.row['ott_guard_android_demo']+'/debug/OTTServiceGuard-debug.aar'

      
      var apkUrlRelease_agent = artifactoryServerName+'artifactory/'+this.row['android_agent_app']+'/release/app-release.apk'
      var appNameDebug_agent = 'OttGuardTestApp-debug.apk'
      var apkUrlDebug_agent = artifactoryServerName+'artifactory/'+this.row['android_agent_app']+'/debug/app-debug.apk'
      var aarUrlRelease_agent  = artifactoryServerName+'artifactory/'+this.row['ott_guard_android_demo']+'/release/OTTServiceGuard-release.aar '
      var aarUrlDebug_agent  = artifactoryServerName+'artifactory/'+this.row['ott_guard_android_agent']+'/debug/OTTServiceGuard-debug.aar'
      

      var webUrl = 'http://sds-artifactory.il.nds.com:8081/artifactory/webapp/#/artifacts/browse/tree/General/vge-s2-libs-staging-local/com/cisco/spvss/vge/open-platforms/serviceguard_webapp/master/'+this.row['web_app']
      
      var runOnRelease = this.row['runOnDebug_Android'] == 'false' ? '(run on)' : ''
      var runOnDebug = this.row['runOnDebug_Android'] == 'true' ? '(run on)' : ''
      console.log('runOnRelease',runOnRelease)
      console.log('runOnDebug',runOnDebug)


      var ios_agent_app_full_path = artifactoryServerName+'artifactory/'+this.row['ios_agent_app']+'/release/'
      var openTable = `<table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Platform</th>
              <th scope="col">App</th>
              <th scope="col">OTTServiceGuard</th>
              <th scope="col">Path in manifest</th>
              <th scope="col">downloads</th>
            </tr>
          </thead>`
      var colseTable = `</table>`    
      var androidParams = `
          <tbody>
            <tr>
              <th scope="row">android</th>
              <td>Demo app</td>
              <td>${this.row['Ott_Version_android']}</td>
              <td>${this.row['android_demo_app']}</td>
              <td><a href="${apkUrlReleaseDemo}" target="_blank">apk release ${runOnRelease}</a>
              <br>
              <a href="${aarUrlReleaseDemo}" target="_blank">aar release</a>
              <br>
              </td>
            </tr>
          </tbody>
      
              `
      var androidAgentParams = `
    
          <tbody>
            <tr>
              <th scope="row">android</th>
              <td>android agent</td>
              <td>${this.row['Ott_Version_android_agent']}</td>
              <td>${this.row['android_agent_app']}</td>
              <td><a href="${apkUrlRelease_agent}" target="_blank">apk release agent ${runOnRelease}</a>
              <br>
              <br>
              <a href="${appNameDebug_agent}" target="_blank">apk debug agent ${runOnDebug}</a>
              <br>
              <br>
              <a href="${aarUrlRelease_agent}" target="_blank">aar release agent</a>
              <br>
              <br>
              <a href="${aarUrlDebug_agent}" target="_blank">aar debug agent</a>
              </td>
            </tr>
          </tbody>
        
              `
             var webParams = `

          <tbody>
            <tr>
              <th scope="row">web</th>
              <td>web app</td>
              <td>${this.row['Ott_Version_web']}</td>
              <td>${this.row['ottguard_web']}</td>
              <td><a href="${webUrl}" target="_blank">download</a></td>
            </tr>
          </tbody>
        
              `      

              var iosParams = `

          <tbody>
            <tr>
              <th scope="row">ios</th>
              <td>ios MTF agent</td>
              <td>${this.row['Ott_Version_ios_agent']}</td>
              <td>${this.row['ios_agent_app']}</td>
              <td><a href="${ios_agent_app_full_path}" target="_blank">download</a></td>
            </tr>
          </tbody>
        
              `      

              var TVOSsParams = `

          <tbody>
            <tr>
              <th scope="row">tvos</th>
              <td>tvos MTF agent</td>
              <td>${this.row['Ott_Version_ios_agent']}</td>
              <td>${this.row['ios_agent_app']}</td>
              <td><a href="${ios_agent_app_full_path}" target="_blank">download</a></td>
            </tr>
          </tbody>
        
              `      



    if(isAndroidExist&&test_app_mtf)
    {
      console.log("!!!??? im here isAndroidExist&&test_app_mtf")
      androidParams += '<br>'+ androidAgentParams
      this.appsParameters = androidParams +'<br>'
    }
    else if(isAndroidExist)
    {
      console.log("!!!??? im here isAndroidExist")
      this.appsParameters = androidParams +'<br>'
    }
    if(isWebExist)
    { 
        this.appsParameters += webParams +'<br>'
         
    } 
    if(isiOSExist)
    {
      this.appsParameters += iosParams +'<br>'
    }
    if(isTVOSExist)
    {
      this.appsParameters += TVOSsParams +'<br>'
    }
    this.appsParameters = openTable + this.appsParameters + colseTable
    //console.log("this.appsParameters: "+this.appsParameters)
    
    },    
      showAlert () {
      this.adjustParametersForPlarforms() 
      this.adjustParametersForLogs() 
      //console.log("showAlert activated")
       // console.log(this.appsParameters)
      
      this.$swal({
        title: 'More information',
        //type: 'info',
        html:
        `<div class="card">
          <div class="card-body">
        ${this.jobUrls}
        <br>
      <br>
        <h4>Applications</h4> 
        
        <br>
        ${this.appsParameters}        
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
  },
  mounted() {
    //this.adjustParametersForPlarforms()  
  },
}
</script>
