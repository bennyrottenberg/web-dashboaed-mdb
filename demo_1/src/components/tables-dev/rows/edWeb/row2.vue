<template>
  <div class="row mt-0" :key="this.row._id.$oid">
   <div v-show="IsRowVisible" class="col-sm-12 grid-margin stretch-card">
   
     <div class="card">
       <div class="card-body">

                 
   <b-row>
     <!-- <b-col><div class="text-center">{{this.row.row}}</div></b-col> -->
      <!-- <b-col><div class="text-center">{{this.row._id.$oid}}</div></b-col> -->
      
      <b-col class="text-center">{{this.row.appName}}</b-col>
    
    
       
    

     
     <b-col class="text-center"><span v-html="servers"></span></b-col>
     <b-col class="text-center">{{this.row['developer']}}</b-col>
     <b-col class="text-center">{{this.row.lastUpdate.data}}</b-col>


  
   
     








<!--
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
    
<b-button  variant="primary" v-on:click="updateApplicationComponentisVisible =!updateApplicationComponentisVisible ;changeUpdateAppButtonTxt()" class="btn btn-fw">{{ updateAppButtonTxt }}</b-button>

    
    
   
     </b-col>
   
 

 
  
   

   </b-row>
  

   
   

   <Transition name="slide-fade">
              <div v-show="updateApplicationComponentisVisible" :class="updateApplicationComponentisVisible ? 'updatelicationVisible' : 'updatelicationInvisible'  " class="update-application" >
                <updateAppWindow-Window :updateAplicationReturnValues = "updateAplicationReturnValues" :appName = "this.row.appName"></updateAppWindow-Window>
              </div>

            </Transition>  

  
       </div>
     </div>
   </div>
 
 </div>
 
</template>

<script>
//import updateAppWindow from '@/components/alerts/sweet-alert/updateAppWindow.vue'
import updateAppWindow from '@/pages/forms/update-application.vue' 
  
export default {
components: {
  "updateAppWindow-Window": updateAppWindow
   
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
   allPlatforms: [], //platform that come from ,
   addAppButtonTxt :"Update",
   updateApplicationComponentisVisible: false,
   IsRowVisible : true,
   updateAppButtonTxt :"Update",
   commentArray: [],
   lastUpdate:{
    date: "",
    "comment": ""
   }

 }

 },
 methods: {
  close() {
      this.$emit("close");
    },
   openWndowToUpdate(){
     console.log("openWndowToUpdate started")
     //this.IsRowVisible = false
   },
   onClickUpdateAppButton(){
     console.log("onClickUpdateAppButton started")
     this.updateApplicationComponentisVisible = true
     this.IsRowVisible = false
   },
   changeUpdateNewAppButtonTxt()
   {
     if(this.addAppButtonTxt != "Cancel")
     {
       this.addAppButtonTxt = "Cancel"
     }
     else
     {
       this.addAppButtonTxt = "Add new"
     }
     
   },
   updateAplicationReturnValues(ApplicationName,comment){
        console.log(ApplicationName,comment)
        this.addCommentPrepare(ApplicationName,comment)

        this.updateApplicationComponentisVisible =!this.updateApplicationComponentisVisible //add his at the end
        this.updateAppButtonTxt = "Update"


      },

   editServers()
   {
    console.log("editServers start:" )

    
    
    
   

   
     var _servers = this.row['servers'].split(',')

     for (let i = 0; i < _servers.length; i++) 
       {
         console.log('in loop')
         this.servers += `<a class="text-dark" href="${_servers[i]}" target="_blank">${_servers[i]}</a><br>`;
       }    
   },
   parseComments()
   {
    if (this.row.appName == "ZacCore")
    {
      
      var data = this.row['comments']
      const _commentArray = [];

      for (const element of data) {
        const label = Object.keys(element)[0];
        const value = element[label];

        console.log(label )
        console.log(value )
        _commentArray.push({"date": label, "comment": value});
}
this.commentArray = _commentArray

console.log("commentArray")
console.log(this.commentArray)
console.log("length")
console.log(this.commentArray.length)
var lengthmin1 = this.row['comments'].length -1
console.log(this.commentArray[ lengthmin1]["date"])
console.log(this.commentArray[lengthmin1]["comment"])

this.lastUpdate.date = this.commentArray[ lengthmin1]["date"]
this.lastUpdate.comment = this.commentArray[ lengthmin1]["comment"]

      console.log("data is:" )
      console.log(data )

      var length = this.row['comments'].length
      console.log("length is:" )
      console.log(length )







    } 
   },
   async addComment(mydict)
      {
        const requestOptions = {
        method: "POST",
        body: JSON.stringify(mydict)
      };
        console.log(" call api: http://localhost:5000/api/education/add_comment/ with params benben : ",requestOptions)
        const response = await fetch("http://localhost:5000/api/education/add_comment/"+JSON.stringify(mydict), requestOptions);

       //this.refreshData()

      },
   addCommentPrepare(ApplicationName,comment)
   {var d = new Date()
   let day = d.getDate();
   let month = d.getMonth();
   let year = d.getFullYear();
   let minuts = d.getMinutes();
   let hours = d.getHours() ;
   let sec = d.getSeconds() ;
   console.log(hours)
   var dateVar = `${day}_${month}_${year}_${hours}_${minuts}_${sec}`
   
   console.log(dateVar)
    
    var mydict = 
        { 
          "appName": ApplicationName, 
          "Comment": comment ,
          "_id": this.row['_id']["$oid"],
          "date" : dateVar
        }
        this.addComment(mydict)
   },
  
        
   changeUpdateAppButtonTxt()
      {
        if(this.updateAppButtonTxt != "Cancel")
        {
          this.updateAppButtonTxt = "Cancel"
        }
        else
        {
          this.updateAppButtonTxt = "Update"
        }
      },
      newAplicationReturnValues()
      {
        console.log("newAplicationReturnValues start")
      },
   


 },
 mounted() {
   this.editServers()
   this.parseComments()
 },

}
</script>