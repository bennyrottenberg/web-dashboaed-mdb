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
      
      var testRunnerUrlWeb = `<a href="${this.row['testRunnerUrlWeb']}" target="_blank">tests runner log Web </a> <i class="mdi mdi-web"></i> 
      <br><br><a href="${this.row['testRunnerUrlWeb'].replace('console','testReport')}" target="_blank">test Report <i class="mdi mdi-library-books"></i></a>`

      var isWebExist = this.row['Platforms2'].includes("web")
      var isAndroidExist = this.row['Platforms2'].includes("android")

      var testRunnerUrl
      if(isAndroidExist)
      {
        testRunnerUrlAndroid += '<br><hr class="dotted"><br>'
      }
      if(isWebExist && isAndroidExist)
      { 
          testRunnerUrl = testRunnerUrlAndroid+'<br>'+testRunnerUrlWeb

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
      //console.log("test_with_agent",test_with_agent)
      //console.log("isWebExist: "+isWebExist)
      //console.log("isAndroidExist: "+isAndroidExist)
      var artifactoryServerName = "https://artifactory01.engit.synamedia.com/"
      
      var appNameRelease = 'OttGuardTestApp-release.apk'
      var apkUrlRelease = artifactoryServerName+'artifactory/'+this.row['android_app']+'/release/'+appNameRelease
      var appNameDebug = 'OttGuardTestApp-debug.apk'
      var apkUrlDebug = artifactoryServerName+'artifactory/'+this.row['android_app']+'/debug/'+appNameDebug
      var ios_app_path = artifactoryServerName+'artifactory/'+this.row['ios_app']

      var webUrl = 'http://sds-artifactory.il.nds.com:8081/artifactory/webapp/#/artifacts/browse/tree/General/vge-s2-libs-staging-local/com/cisco/spvss/vge/open-platforms/serviceguard_webapp/master/'+this.row['web_app']
      
      var runOnRelease = this.row['runOnDebug_Android'] == 'false' ? '(run on)' : ''
      var runOnDebug = this.row['runOnDebug_Android'] == 'true' ? '(run on)' : ''
      console.log('runOnRelease',runOnRelease)
      console.log('runOnDebug',runOnDebug)
      var openTable = `<table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Platform</th>
              <th scope="col">App</th>
              <th scope="col">App version</th>
              <th scope="col">Path in manifest</th>
              <th scope="col">downloads</th>
            </tr>
          </thead>`
      var colseTable = `</table>`    
      var androidParams = `
          <tbody>
            <tr>
              <th scope="row">android</th>
              <td>test app</td>
              <td>${this.getAppVersion('android')}</td>
              <td>${this.row['android_app']}</td>
              <td><a href="${apkUrlRelease}" target="_blank">apk release ${runOnRelease}</a>
              <br>
              <br>
              <a href="${apkUrlDebug}" target="_blank">apk debug ${runOnDebug}</a>
              <br>
              </td>
            </tr>
          </tbody>
      
              `

              var iosAppParams = `
    
          <tbody>
            <tr>
              <th scope="row">ios</th>
              <td>test app</td>
              <td>${this.getAppVersion('ios')}</td>
              <td>${this.row['ios_app']}</td>
              <td><a href="${ios_app_path}/release/" target="_blank">release</a>
              <br><br>
              <a href="${ios_app_path}/debug/" target="_blank">debug</a>
              </td>
              <br>
              
              <br>
              </td>
            </tr>
          </tbody>
        
              `


             var webParams = `

          <tbody>
            <tr>
              <th scope="row">web</th>
              <td>web app</td>
              <td>${this.getAppVersion('web')}</td>
              <td>${this.row['web_app']}</td>
              <td><a href="${webUrl}" target="_blank">download</a></td>
            </tr>
          </tbody>
        
              `      

    if(isAndroidExist)
    {
      this.appsParameters += androidParams +'<br>'
    }
    if(isWebExist)
    { 
        this.appsParameters += webParams +'<br>'
         
    }
    if(isiOSExist)
    {
      this.appsParameters += iosAppParams +'<br>'
    }
    this.appsParameters = openTable + this.appsParameters + colseTable
    //console.log("this.appsParameters: "+this.appsParameters)
    
    }, 
    getAppVersion(_platform){
      _platform = _platform.trim()
      if(this.row['date']=='26.05.2022 17:50:55')
      {
        console.log("getAppVersion started")
      console.log("_platform: "+_platform)

      }
      
      

      var appPath = "no_path"
      switch (_platform) {
        case "ios":
          appPath = this.row['ios_app'];
        break;
        case "android":
          appPath = this.row['android_app'];
        break;
        case "web":
          appPath = this.row['mdrm_webapp'];
        break;

    }
      if(this.row['date']=='26.05.2022 17:50:55')
      {
    console.log("appPath: "+appPath)
      }

      let x = appPath.split('/')
      let y = x[x.length-1].split('-')
       //console.log("y: "+y)
       let version = y[y.length-1]
         if(this.row['date']=='26.05.2022 17:50:55')
      {
       console.log("version is: "+version)
      }
       return version;


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
            <br>
          <div class="list-group">
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
