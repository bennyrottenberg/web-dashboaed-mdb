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

        <b-col class="text-center" v-if ="this.row['Platforms'].split(',').length > 1">
            <div v-for="(Platform, i) in row['Platforms'].split(',')" :key="'Platform'+i">
              <p class="text-center" v-if="row['Ott_Version_'+Platform.trim()+'_agent'] !== undefined && row['Ott_Version_'+Platform.trim()+'_agent'] !==null && row['Ott_Version_'+Platform.trim()+'_agent'] !== '' "  >
                {{Platform +": "+row['Ott_Version_'+Platform.trim()+'_agent']}}<br>
               </p>
                   <p class="text-center" v-else>
                        {{Platform +": "+row['Ott_Version_'+Platform.trim()]}}<br>
                      </p>
            </div>
            <!-- </b-col> -->
             <b-col class="text-center">{{row['Ott_Version_'+row['Platforms']]}}</b-col>  
        </b-col>
        <b-col class="text-center" v-else>
               <p class="text-center" v-if="row['Ott_Version_'+row['Platforms']+'_agent'] !== undefined && row['Ott_Version_'+row['Platforms']+'_agent'] !==null && row['Ott_Version_'+row['Platforms']+'_agent'] !== '' "  >
                {{row['Ott_Version_'+row['Platforms']+'_agent']}}
               </p>
               <p class="text-center" v-else>
                {{row['Ott_Version_'+row['Platforms']]}}
               </p>
          </b-col>  
        

        <b-col class="text-center"><span v-html="PlatformsWithStatusColor"></span></b-col>

<!--
        <b-col class="text-center">
          <b-dropdown id="ddown12" size="sm" :text="this.row['tenant_id']" variant="outline-primary">        
              <b-dropdown-item v-for="(component, i) in this.HE_Component" :key="'component'+i"> {{component}}</b-dropdown-item>
          </b-dropdown>
        </b-col>
  -->
        <b-col class="text-center">{{this.row['tenant_id']}}</b-col>
        <b-col  class="text-center" v-if ="this.row['Test Results'] == 'Passed'"> 
              <b-button class="btn btn-gradient-success btn-rounded btn-fw">
                <b-link class="text-white" :href="this.row['Job Url']" target="_blank">Passed</b-link>
              </b-button>    
        </b-col>
        <b-col class="text-center" v-else>
              <b-button :id="'exPopover1-'+placement+this.row.row" class="btn btn-gradient-danger btn-rounded btn-fw">
                 <b-link class="text-white" :href="this.row['Job Url']" target="_blank">Failed</b-link>
                 <b-popover :target="'exPopover1-'+placement+this.row.row" :placement="placement" title="Some tests failed" triggers="hover focus" :content="
                 `${this.PlatformStatusToolTip}`">
                </b-popover>
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
 import parametersWindow from '@/components/alerts/sweet-alert/parametersWindow.vue'  

  export default {
   components: {
      "parameters-window": parametersWindow
    },
    
    props: ['row','index'], 
    data() {
      
      //console.log("data started " , this.row['date'],this.row);
      
     return {
       counter: 0,
       HE_Component : ["tgs:  "+this.row['tgs'],"ottserviceguard:  "+this.row['ottserviceguard'],"ottgw:  "+this.row['ottgw'],"kps:  "+this.row['kps'],"cpsim:  "+this.row['cpsim'],"srs:  "+this.row['srs']],
       
      placement: 'bottom',
      allParams: 'none',
      PlatformStatusToolTip:'',
      PlatformsWithStatusColor:'',
      allPlatforms: [] //platform that come from 
    }
  
    },
    methods: {

    adjustPlatformStatusToolTip()
    {
      var platformUpperMap = {
        "android": "Android",
        "android ": "Android",
        "web": "Web",
        "web ": "Web",
        "ios ": "iOS",
        "ios": "iOS",
        "tvos": "TVOS",
        "tvos ": "TVOS",
        "smartTV": "smartTV",
        "smartTV ": "smartTV"
      }
      
      //for test failed only
      var _testResWeb = this.row['testResWeb']
      var _testResAndroid = this.row['testResAndroid']
      var _testResAndroidAgent = this.row['testResAndroidAgent']
      var _testResiOS = this.row['testResiOS']
      var _testResiOSAgent = this.row['testResiOSAgent']
      var _testResTVOSAgent = this.row['testResTVOSAgent']
      var _testRessmartTV =  this.row['testRessmartTV']
      //testResTVOSAgent
      var toolTipStr = ""
     // var isWebExist = this.row['Platforms'].includes("web")
      //var isAndroidExist = this.row['Platforms'].includes("android")
     // var isiOSExist = this.row['Platforms'].includes("iOS")

      const platforms = this.row['Platforms'].split(',').map((p) => {
        return p.toLowerCase().trim();
      })
      
      const isWebExist = platforms.find(p => p === 'web');
      const isAndroidExist = platforms.find(p => p === 'android');
      const isiOSExist = platforms.find(p => p === 'ios');
      const isTVOSExist = platforms.find(p => p === 'tvos');

      var isSmartTVLGExist = "NoLGTV"
      var isSmartTizenExist = "NoTizenTV"


      if(this.row['tvs'] != null && this.row['tvs'] != undefined)
      {
        console.log("tvs include: "+this.row['tvs'] )
        isSmartTVLGExist = this.row['tvs'].includes('LG');
        isSmartTizenExist = this.row['tvs'].includes("Tizen");

      }
      else
      {
        console.log("tvs not include: "+this.row['tvs'] )
      }

      this.PlatformsWithStatusColor = ''
      
      if(this.row['Platforms'].split(',').length > 1)
      {
        if(this.row['Test Results'] == 'Failed')
        {
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
              var _MTFRunnerUrlAndroid = 'None'
              var _testRunnerUrlAndroid = 'None'
              if(this.row['MTFRunnerUrlAndroid'] != null && this.row['MTFRunnerUrlAndroid'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _MTFRunnerUrlAndroid = this.row['MTFRunnerUrlAndroid'].replace('console','artifact/test_results.json')
              }
              if(this.row['testRunnerUrlAndroid'] != null && this.row['testRunnerUrlAndroid'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _testRunnerUrlAndroid = this.row['testRunnerUrlAndroid'].replace('console','testReport')
              }
            
            if(!_testResAndroid || !_testResAndroidAgent)
            { 
              if(!_testResAndroidAgent)
                this.PlatformsWithStatusColor += `<a class="text-danger"href="${_MTFRunnerUrlAndroid}" target="_blank">android </a><br>`
              else
                  this.PlatformsWithStatusColor += `<a class="text-danger"href="${_testRunnerUrlAndroid}" target="_blank">android </a><br>`
             // toolTipStr+="tests Failed on Android \n"
              
            }
            else
            {
              if(_MTFRunnerUrlAndroid !='None')
                this.PlatformsWithStatusColor += `<a class="text-dark"href="${_MTFRunnerUrlAndroid}" target="_blank">android  </a><br>`
               else if(_testRunnerUrlAndroid != 'None')
                this.PlatformsWithStatusColor += `<a class="text-dark"href="${_testRunnerUrlAndroid}" target="_blank">android  </a><br>`
              //toolTipStr+="tests passed on Android \n"
            }
          }
          if(isiOSExist)
          {
          
              var _MTFRunnerUrliOS = 'None'
              var _testRunnerUrliOS = 'None'
              if(this.row['MTFRunnerUrliOS'] != null && this.row['MTFRunnerUrliOS'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _MTFRunnerUrliOS = this.row['MTFRunnerUrliOS'].replace('console','artifact/test_results.json')
              }
              if(this.row['testRunnerUrliOS'] != null && this.row['testRunnerUrliOS'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _testRunnerUrliOS = this.row['testRunnerUrliOS'].replace('console','testReport')
              }

            if(!_testResiOS ||!_testResiOSAgent)
            {
              if(!_testResiOSAgent)
              this.PlatformsWithStatusColor +=  `<a class="text-danger"href="${_MTFRunnerUrliOS}" target="_blank">ios</a><br>`
              else if(!_testResiOS)
              {
                this.PlatformsWithStatusColor +=  `<a class="text-danger"href="${_testRunnerUrliOS}" target="_blank">ios</a><br>`
              }
              
            }
            else
            {
              if(_MTFRunnerUrliOS !='None'){
                  this.PlatformsWithStatusColor += `<a class="text-dark"href="${_MTFRunnerUrliOS}" target="_blank">ios</a><br>`

                }
               else if(_testRunnerUrliOS != 'None')
                this.PlatformsWithStatusColor += `<a class="text-dark"href="${_testRunnerUrliOS}" target="_blank">ios</a><br>`

              
              //toolTipStr+="tests passed on iOS \n"
            }
            
          }
          if(isTVOSExist)
          {
              var _MTFRunnerUrlTVOS = 'None'
              //var _testRunnerUrlTVOS = None""
              
              if(this.row['MTFRunnerUrlTVOS'] != null && this.row['MTFRunnerUrlTVOS'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _MTFRunnerUrlTVOS = this.row['MTFRunnerUrlTVOS'].replace('console','artifact/test_results.json')
              }
              //if(this.row['testRunnerUrlTVOS'] != null && this.row['testRunnerUrlTVOS'].includes("jenkins-jer.engit.synamedia.com"))
              //{
              //  _testRunnerUrlTVOS = this.row['testRunnerUrlTVOS'].replace('console','testReport')
              //}
            if(!_testResTVOSAgent)
            {
              this.PlatformsWithStatusColor +=  `<a class="text-danger"href="${_MTFRunnerUrlTVOS}" target="_blank">tvos</a><br>`
              
            }
            else
            {
              this.PlatformsWithStatusColor += `<a class="text-dark"href="${_MTFRunnerUrlTVOS}" target="_blank">tvos</a><br>`

              //toolTipStr+="tests passed on iOS \n"
            }
          }
          if(isSmartTVLGExist && isWebExist)
          {
              var _MTFRunnerUrlsmartTV = 'None'
              
              if(this.row['MTFRunnerUrlsmartTV'] != null && this.row['MTFRunnerUrlsmartTV'].includes("jenkins-jer.engit.synamedia.com"))
              {
                _MTFRunnerUrlsmartTV = this.row['MTFRunnerUrlsmartTV'].replace('console','artifact/test_results.json')
              }
              //if(this.row['testRunnerUrlTVOS'] != null && this.row['testRunnerUrlTVOS'].includes("jenkins-jer.engit.synamedia.com"))
              //{
              //  _testRunnerUrlTVOS = this.row['testRunnerUrlTVOS'].replace('console','testReport')
              //}
            if(!_testRessmartTV)
            {
              this.PlatformsWithStatusColor +=  `<a class="text-danger"href="${_MTFRunnerUrlsmartTV}" target="_blank">smart tv</a><br>`
              
            }
            else
            {
              this.PlatformsWithStatusColor += `<a class="text-dark"href="${_MTFRunnerUrlsmartTV}" target="_blank">smart tv</a><br>`

              //toolTipStr+="tests passed on iOS \n"
            }
          }

        }
        else
        { 
          var _platporms = this.row['Platforms'].split(',');
          console.log("_platporms: "+_platporms)
          if(isSmartTVLGExist && !isWebExist)
          {

            console.log("2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222")
            

            _platporms = _platporms.filter(function(item) {
            return item !== 'smartTV'
          })
            //console.log("_platporms: "+_platporms)
          }
          else
          {

            console.log("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")

            //console.log("_platporms: "+_platporms)
          }
          console.log("platforms: "+_platporms)
          
          for (let i = 0; i < _platporms.length; i++) 
          {
            
            var platform_i = _platporms[i]
            //this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]]
            if(this.row['date'] =='21.09.2022 10:49:31')
            {
              console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

              console.log("platform_i: "+platform_i)
              console.log(this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]])
              console.log(this.row['MTFRunnerUrlsmartTV'])
            }
            
            if(this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]] != null && this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]].includes("jenkins-jer.engit.synamedia.com"))
            {
           
              this.PlatformsWithStatusColor += `<a class="text-dark" href="${this.row['MTFRunnerUrl'+platformUpperMap[`${platform_i}`]].replace('console','artifact/test_results.json')}" target="_blank">${platform_i}</a><br>`;
              
            }            //this.PlatformsWithStatusColor += this.row['Platforms'].split(',')[i]+'\n'
            else if(this.row['testRunnerUrl'+platformUpperMap[`${platform_i}`]] != null && this.row['testRunnerUrl'+platformUpperMap[`${platform_i}`]].includes("jenkins-jer.engit.synamedia.com"))//.includes("web")
            {
              
              this.PlatformsWithStatusColor += `<a class="text-dark" href="${this.row['testRunnerUrl'+platformUpperMap[`${platform_i}`]].replace('console','testReport')}" target="_blank">${platform_i}</a><br>`;
               
            }
            else{
             console.log("last else")
            }
          } 
           
        }
      }
      else
      { 

        if(this.row['MTFRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]] != null && this.row['MTFRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]].includes("jenkins-jer.engit.synamedia.com"))// && this.row['MTFRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]].includes("jenkins-jer.engit.synamedia.com")) 
          this.PlatformsWithStatusColor = `<a class="text-dark" href="${this.row['MTFRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]].replace('console','artifact/test_results.json')}" target="_blank">${this.row['Platforms']}</a><br>`;
        else if(this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]] != null && this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]].includes("jenkins-jer.engit.synamedia.com") )
          this.PlatformsWithStatusColor = `<a class="text-dark" href="${this.row['testRunnerUrl'+platformUpperMap[`${this.row['Platforms']}`]].replace('console','testReport')}" target="_blank">${this.row['Platforms']}</a><br>`;

      }
      this.PlatformStatusToolTip = toolTipStr
    }
    },
    mounted() {
      this.adjustPlatformStatusToolTip()
    },

  }
</script>