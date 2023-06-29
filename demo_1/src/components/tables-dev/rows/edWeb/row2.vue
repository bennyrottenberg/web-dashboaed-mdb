<template>
     <div class="row mt-0" :key="this.row._id.$oid">
      <div class="col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
                    
      <b-row>
        <!-- <b-col><div class="text-center">{{this.row.row}}</div></b-col> -->
         <!-- <b-col><div class="text-center">{{this.row._id.$oid}}</div></b-col> -->
        <b-col class="text-center">{{this.row.appName}}</b-col>
        
        <b-col class="text-center"><span v-html="servers"></span></b-col>
        <b-col class="text-center">{{this.row['developer']}}</b-col>
        <b-col class="text-center">{{this.row['manager']}}</b-col>






<!--
        <b-col class="text-center">
          <b-dropdown id="ddown12" size="sm" :text="this.row['tenant_id']" variant="outline-primary">        
              <b-dropdown-item v-for="(component, i) in this.HE_Component" :key="'component'+i"> {{component}}</b-dropdown-item>
          </b-dropdown>
        </b-col>
  
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
      -->
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
      servers : '',
      placement: 'bottom',
      allParams: 'none',
      PlatformStatusToolTip:'',
      PlatformsWithStatusColor:'',
      allPlatforms: [] //platform that come from 
    }
  
    },
    methods: {

      editServers()
      {
        var _servers = this.row['servers'].split(',')

        for (let i = 0; i < _servers.length; i++) 
          {
            console.log('in loop')
            this.servers += `<a class="text-dark" href="${_servers[i]}" target="_blank">${_servers[i]}</a><br>`;
          }

        
      }


    },
    mounted() {
      this.editServers()
    },

  }
</script>