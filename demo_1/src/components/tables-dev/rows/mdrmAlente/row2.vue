<template>
     <div class="row mt-0" :key="this.row._id.$oid">
      <div class="col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
                    
      <b-row>
        <!-- <b-col><div class="text-center">{{this.row.row}}</div></b-col> -->
         <!-- <b-col><div class="text-center">{{this.row._id.$oid}}</div></b-col> -->
        <b-col class="text-center">{{this.row.date}}</b-col>
        <b-col class="text-center">{{this.row['upstream job']}}</b-col>
        <b-col class="text-center">{{this.row['user id']}}</b-col>

        <b-col class="text-center" v-if ="this.row['Platforms2'].split(',').length > 1">
            <!--<b-col class="text-center" v-if ="this.row['test_with_agent'] == 'true'"> -->

            <div v-for="(Platform, i) in row['Platforms2'].split(',')" :key="'Platform'+i">
              
              <p class="text-center">
                <span>{{ Platform+": "+getAppVersion(Platform) }}</span>
               </p>
               

            </div>

            
            <!-- </b-col> -->
             <b-col class="text-center">{{row['Ott_Version_'+row['Platforms2']]}}</b-col>  
        </b-col>
        <b-col class="text-center" v-else>
               <p class="text-center">
                 <span>{{ getAppVersion(row['Platforms2']) }}</span>
                {{row['Ott_Version_'+row['Platforms2']]}}
               </p>
          </b-col>  
        

        <b-col class="text-center"><span v-html="PlatformsWithStatusColor"></span></b-col>

        <b-col class="text-center">
          <b-dropdown id="ddown12" size="sm" :text="this.row['HE Version']" variant="outline-primary">        
              <b-dropdown-item v-for="(component, i) in this.HE_Component" :key="'component'+i"> {{component}}</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col  class="text-center" v-if ="this.row['Test Results'] == 'Passed'"> 
              <b-button class="btn btn-gradient-success btn-rounded btn-fw">
                <b-link class="text-white" :href="this.row['Job Url']" target="_blank">Passed</b-link>
              </b-button>    
        </b-col>
        <b-col class="text-center" v-else>
              <b-button :id="'exPopover1-'+placement+this.row.row" class="btn btn-gradient-danger btn-rounded btn-fw">
                 <b-link class="text-white" :href="this.row['Job Url']" target="_blank">Failed</b-link>
                 <!--<b-popover :target="'exPopover1-'+placement+this.row.row" :placement="placement" title="Some tests failed" triggers="hover focus" :content="
                 `${this.PlatformStatusToolTip}`"> 
                </b-popover> -->
              </b-button>
        </b-col>
        <b-col>
          <div class="text-center">
          <parameters-window :row="row"></parameters-window>
            
          </div>
        </b-col>
      </b-row>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
//alertWithImage.vue
 import parametersWindow from '@/components/alerts/sweet-alert/parametersWindowMDRM.vue'  

  export default {
   components: {
      "parameters-window": parametersWindow
    },
    
    props: ['row','index'], 
    data() {
      console.log("in data"+this.row)
      
      //console.log("data started " , this.row['date'],this.row);
      
     return {
       counter: 0,
       HE_Component : ["ksm:  "+this.row['ksm'],"drms:  "+this.row['drms'],"lwst:  "+this.row['lwst'],"cdl:  "+this.row['cdl'],"tgs:  "+this.row['tgs'],"fpls:  "+this.row['fpls'],"prls:  "+this.row['prls']],
       
      placement: 'bottom',
      allParams: 'none',
      PlatformStatusToolTip:'',
      PlatformsWithStatusColor:''      
    }
  
    },
    methods: {


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



    adjustPlatformStatusToolTip()
    {
      
      
      var platformUpperMap = {
        "android": "Android",
        "android ": "Android",
        "web": "Web",
        "web ": "Web",
        "ios ": "iOS",
        "ios": "iOS"
      }
      console.log("adjustPlatformStatusToolTip start" ,this.index)
      //for test failed only
      var _testResWeb = this.row['testResWeb']
      var _testResAndroid = this.row['testResAndroid']
      var _testResAndroidAgent = this.row['testResAndroidAgent']
      var _testResiOS = this.row['testResiOS']
      var _testResiOSAgent = this.row['testResiOSAgent']
      var toolTipStr = ""
     // var isWebExist = this.row['Platforms2'].includes("web")
      //var isAndroidExist = this.row['Platforms2'].includes("android")
     // var isiOSExist = this.row['Platforms2'].includes("iOS")

      const platforms = this.row['Platforms2'].split(',').map((p) => {
        return p.toLowerCase().trim();
      })
      
      const isWebExist = platforms.find(p => p === 'web');
      const isAndroidExist = platforms.find(p => p === 'android');
      const isiOSExist = platforms.find(p => p === 'ios');
      this.PlatformsWithStatusColor = ''
      
      if(this.row['Platforms2'].split(',').length > 1)
      {
        if(this.row['Test Results'] == 'Failed')
        {
          
          //console.log("adjustPlatformStatusToolTip start")
          
          if(isWebExist)
          { 
            if(!_testResWeb)
            {
              this.PlatformsWithStatusColor +=  `<a class="text-danger"href="${this.row['testRunnerUrlWeb'].replace('console','testReport')}" target="_blank">web</a><br>`

              //toolTipStr+="tests Failed on Web \n"
              
            }
            else
            {
              this.PlatformsWithStatusColor +=  `<a class="text-dark"href="${this.row['testRunnerUrlWeb'].replace('console','testReport')}" target="_blank">web</a><br>`
              //toolTipStr+="tests passed on Web \n"

            }
            
          }
          if(isAndroidExist)
          {//
              var _testRunnerUrlAndroid = 'None'
              if(this.row['testRunnerUrlAndroid'] != null && this.row['testRunnerUrlAndroid'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _testRunnerUrlAndroid = this.row['testRunnerUrlAndroid'].replace('console','testReport')
              }
            
            if(!_testResAndroid)
            { 
              this.PlatformsWithStatusColor += `<a class="text-danger"href="${_testRunnerUrlAndroid}" target="_blank">android </a><br>`
             // toolTipStr+="tests Failed on Android \n"
            }
            else
            {
              if(_testRunnerUrlAndroid != 'None')
                this.PlatformsWithStatusColor += `<a class="text-dark"href="${_testRunnerUrlAndroid}" target="_blank">android  </a><br>`
              //toolTipStr+="tests passed on Android \n"
            }
          }
          if(isiOSExist)
          {
            console.log("ios exist")
              var _testRunnerUrliOS = 'None'
              if(this.row['testRunnerUrliOS'] != null && this.row['testRunnerUrliOS'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _testRunnerUrliOS = this.row['testRunnerUrliOS'].replace('console','testReport')
              }

            
            if(!_testResiOS)
            {
              console.log("ios failed")
              this.PlatformsWithStatusColor +=  `<a class="text-danger"href="${_testRunnerUrliOS}" target="_blank">ios</a><br>`
              
            }
            else
            {
              console.log("ios passed")
              if(_testRunnerUrliOS != 'None')
              this.PlatformsWithStatusColor += `<a class="text-dark"href="${_testRunnerUrliOS}" target="_blank">ios</a><br>`
              //toolTipStr+="tests passed on iOS \n"
            }
          }

        }
        else
        {
          for (let i = 0; i < this.row['Platforms2'].split(',').length; i++) 
          {
            
              
            var platform_i = this.row['Platforms2'].split(',')[i]
            
            
            if(this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]] != null && this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]].includes("jenkins-jer.engit.synamedia.com"))
            {
           
              this.PlatformsWithStatusColor += `<a class="text-dark" href="${this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]].replace('console','artifact/test_results.json')}" target="_blank">${this.row['Platforms2'].split(',')[i]}</a><br>`;
              
            }            //this.PlatformsWithStatusColor += this.row['Platforms2'].split(',')[i]+'\n'
            else if(this.row['testRunnerUrl'+platformUpperMap[`${platform_i}`]] != null && this.row['testRunnerUrl'+platformUpperMap[`${platform_i}`]].includes("jenkins-jer.engit.synamedia.com"))//.includes("web")
            {
              
              this.PlatformsWithStatusColor += `<a class="text-dark" href="${this.row['testRunnerUrl'+platformUpperMap[`${platform_i}`]].replace('console','testReport')}" target="_blank">${this.row['Platforms2'].split(',')[i]}</a><br>`;
               
            }
            else{
               if(this.row['date'] == '27.04.2022 22:56:52'  || this.row['date'] == '27.04.2022 22:51:47')
              {
                 console.log("last else")
              }
            }
            
             
            
          } 
           
        }
      }
      else
      { 
        if(this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms2']}`]] != null && this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms2']}`]].includes("jenkins-jer.engit.synamedia.com") )
          this.PlatformsWithStatusColor = `<a class="text-dark" href="${this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms2']}`]].replace('console','testReport')}" target="_blank">${this.row['Platforms2']}</a><br>`;
        else
        {
          console.log("else ....")
          console.log(this.row['testRunnerUrlWeb'])
          console.log("platformUpperMap res for ,",this.row['Platforms2'])
             console.log(platformUpperMap[`${this.row['Platforms2']}`])
             console.log("testRunner URL is: ")
             console.log(this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms2']}`]])

        }  

      }

      
      
      //console.log("toolTipStr",toolTipStr)
      this.PlatformStatusToolTip = toolTipStr
      console.log("this.PlatformStatusToolTip",this.PlatformStatusToolTip)
      console.log(this.row['Platforms2'])

    }
    },
    mounted() {
      this.adjustPlatformStatusToolTip()
    },
    computed: {
      getVersionBenny: function () {
        console.log(item)
      return (item) =>
      orderby(item.entities, ['entity', 'value'], ['asc', 'asc']);
      
   }
      

    }


  }
</script>