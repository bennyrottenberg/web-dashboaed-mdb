<template>
  <div class="row mt-0" :key="this.row._id.$oid">
   <div v-show="IsRowVisible" class="col-sm-12 grid-margin stretch-card">
   
     <div class="card">
       <div class="card-body">

                 
   <b-row>
     <!-- <b-col><div class="text-center">{{this.row.row}}</div></b-col> -->
      <!-- <b-col><div class="text-center">{{this.row._id.$oid}}</div></b-col> -->
      
      <b-col class="text-center">{{this.row['serverName']}}</b-col>
    
    
       
    

     
      <b-col class="text-center">{{this.row['subject']}}</b-col>
     
     
      
     <b-col class="text-center"><span v-html="dateColored"></span></b-col>





    
    <!--<b-col class="text-center">Date:&nbsp;&nbsp;&nbsp;{{this.lastUpdate.date}}<br>comment:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.lastUpdate.comment}}</b-col>-->
     
    <!-- <b-col 
     class="text-center"><b-button  variant="primary" v-on:click="updateApplicationComponentisVisible =!updateApplicationComponentisVisible ;changeUpdateAppButtonTxt()" class="btn btn-fw">{{ updateAppButtonTxt }}</b-button>
     <br>
     <br>
     <comments-window :row="row"></comments-window>
    </b-col>
  -->
     
     
     
     


   </b-row>





  

   
   

   <Transition name="slide-fade">
              <div v-show="updateApplicationComponentisVisible" :class="updateApplicationComponentisVisible ? 'updatelicationVisible' : 'updatelicationInvisible'  " class="update-application" >
                <updateAppWindow-Window :addNewComment = "addNewComment" :editRowData = "editRowData" :rowData = "this.row"></updateAppWindow-Window>
              </div>

            </Transition>  

  
       </div>
     </div>
   </div>
 
 </div>
 
</template>

<script>

//import updateAppWindow from '@/pages/forms/update-application.vue' 
//import commentsWindow from '@/components/alerts/sweet-alert/commentsWindow.vue' 
export default {
  
  components: {
  //"updateAppWindow-Window": updateAppWindow,
  //"comments-window": commentsWindow
   
 },
 
 props: {

  refreshData: {type: Function},
  row : {type : Object },
  index : {type : Number}

  
}, 
 data() {
   
   //console.log("data started " , this.row);
   
  return {
   counter: 0,
   HE_Component : ["tgs:  "+this.row['tgs'],"ottserviceguard:  "+this.row['ottserviceguard'],"ottgw:  "+this.row['ottgw'],"kps:  "+this.row['kps'],"cpsim:  "+this.row['cpsim'],"srs:  "+this.row['srs']],
   servers : '',
   placement: 'bottom',
   allParams: 'none',
   PlatformStatusToolTip:'',
   dateColored:'',
   allPlatforms: [], //platform that come from ,
   addAppButtonTxt :"Update",
   updateApplicationComponentisVisible: false,
   IsRowVisible : true,
   updateAppButtonTxt :"Update",
   commentArray: [], // not in use now
   lastUpdate:{  // not in use now
    date: "benny", // not in use now
    "comment": "benny" // not in use now
   },  // not in use now
   

 }

 },
 methods: {
  close() {
      this.$emit("close");
    },
    dateWithColor()
    {//var d = new Date(2011,10,30);
      var dateSplited = this.row['expDate'].split('.')
      var day = dateSplited[1]
      var month = dateSplited[0] -1
      var year = dateSplited[2]
      var dateData = new Date(year,month,day);
      var now = new Date();
      //console.log("now: ",now)
      //console.log("Date: ",dateData)
      var difference = now - dateData;

      var numDaysBetween = function(d1, d2) {
  var diff = (d1.getTime() - d2.getTime());
  return diff / (1000 * 60 * 60 * 24);
};
this.dateColored = ""


      //console.log("difference: ",difference)
      if(numDaysBetween(dateData,now) > 0)
        {
          if( this.row['serverName']=="benny")
          {
              console.log("=======benny==benny==benny=benny=")


              console.log("dateSplited",dateSplited)
              console.log("day",day)
              console.log("month",month)
              console.log("year",month)
              console.log(dateData)

              



              console.log("now: ",now)



              console.log("dateData: ",dateData)
              
              console.log("dateData.getTime()")
              console.log(dateData.getTime())
              console.log("now.getTime()")
              console.log(now.getTime())
              console.log(numDaysBetween(now, dateData))
              
          }
          if (numDaysBetween(dateData,now) >30)
          {
            //console.log("d > 30")
              //console.log(numDaysBetween(now, dateData))
              
              this.dateColored = `<p class="text-success" ><b>${this.row['expDate']}</b></p>`
          }
          else
         {  

          console.log("dateSplited",dateSplited)
              console.log("day",day)
              console.log("month",month)
              console.log("year",month)
              console.log(dateData)
          console.log("d < 30")
          console.log(now, dateData)
              console.log(numDaysBetween(now, dateData))
          this.dateColored = ` <p class="text-warning" ><b>${this.row['expDate']}</b></p>`
          
         }
          
        }
        else
        {
          this.dateColored = `<p class="text-danger"><b>${this.row['expDate']}</b></p>`
        }

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
   editRowData(RowData){

    console.log("editRowData start ==========================================================================")
    console.log(RowData)
    var mydict = {
      "_id": RowData['_id']["$oid"],
      "appName":RowData["appName"],
      "servers":RowData["servers"],
      "developer":RowData["developer"],
      "manager":RowData["manager"],
      "enviroment":RowData["enviroment"]
        
    }
    this.editRowDataApi(mydict)

    this.updateApplicationComponentisVisible =!this.updateApplicationComponentisVisible //add his at the end
    this.updateAppButtonTxt = "Update"


  },

   addNewComment(ApplicationName,comment){

    console.log("addNewComment start ==========================================================================")
        console.log(ApplicationName,comment)
        this.addCommentPrepare(ApplicationName,comment)

        this.updateApplicationComponentisVisible =!this.updateApplicationComponentisVisible //add his at the end
        this.updateAppButtonTxt = "Update"


      },

   editServers()
   {
    //console.log("editServers start:" )

    var servers_urls = 
    {
      "iprod20121":"iprod2012lb",
      "iprod20122":"iprod2012lb",
      "iprod2012":"iprod2012lb",
      "iprod20165":"iprod2016lb",
      "itest20121":"itest20121",
      "iprod2016":"iprod2016lb",
      "iprod20166":"iprod2016ld",
      "iproddmz20165":"apps4.education.gov.il",
      "iproddmz2016":"apps4.education.gov.il",
      "iproddmz1" : "apps4.education.gov.il",
      "iproddmz2" : "apps4.education.gov.il",
      "iproddmz" : "apps4.education.gov.il",

      "idev2012" :"idev2012" ,
      "idev20121" :"idev20121" ,
      "idev2016" :"idev20161" ,
      "idev20161" :"idev20161" ,

  
   
    }
    
    //console.log(servers_urls['iprod20165'])
    //console.log(servers_urls['iproddmz20165'])
   

   
     var _servers = this.row['servers'].split(',')

     for (let i = 0; i < _servers.length; i++) 
       {
         //console.log('in loop')
         this.servers += `<a class="text-dark" href="http://${servers_urls[_servers[i].trim()]}/${this.row['appName']}" target="_blank">${_servers[i]}</a><br>`;
       }    
   },
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
}
this.commentArray = _commentArray

console.log("commentArray")
console.log(this.commentArray)
console.log("length bla")
console.log(this.commentArray.length)

if(this.commentArray.length > 0)
{
  console.log("in if this.commentArray.length")
  var lengthmin1 = this.row['comments'].length -1
console.log("lengthmin1")
console.log(lengthmin1)
console.log(this.commentArray[lengthmin1]["date"])
console.log(this.commentArray[lengthmin1]["comment"])

this.lastUpdate.date = this.commentArray[ lengthmin1]["date"].split(" ")[0]  //12.9.2023 10:43:0  -- > 12.9.2023
this.lastUpdate.comment = this.commentArray[ lengthmin1]["comment"]

      console.log("date is:" )
      console.log(this.lastUpdate.date )

      console.log("comment is:" )
      console.log(this.lastUpdate.comment  )


      var length = this.row['comments'].length
      console.log("length is:" )
      console.log(length )






}





    } 
   },
   ///api/education/add_comment/
   async addComment(mydict)
      {

        const requestOptions = {
        method: "POST",
        body: JSON.stringify(mydict)
      };
        console.log(" call api: http://localhost:5000/api/education/add_comment/ with params benben : ",requestOptions)
        const response = await fetch("http://localhost:5000/api/education/add_comment/"+JSON.stringify(mydict), requestOptions);

      

      },

      async editRowDataApi(mydict)
      {

        const requestOptions = {
        method: "POST",  
        body: JSON.stringify(mydict)
      };
        console.log(" call api: http://localhost:5000/api/education/edit_document/ with params benben : ",requestOptions)
        const response = await fetch("http://localhost:5000/api/education/edit_document/"+JSON.stringify(mydict), requestOptions);

      

      },


   addCommentPrepare(ApplicationName,comment)
   {
      var d = new Date()
      let day = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let minuts = d.getMinutes();
      let hours = d.getHours() ;
      let sec = d.getSeconds() ;
      //console.log(hours)
      var dateVar = `${day}.${month}.${year} ${hours}:${minuts}:${sec}`

      //console.log("dateVar")
      //console.log(dateVar)
    
      var mydict = 
        { 
          "appName": ApplicationName, 
          "Comment": comment ,
          "_id": this.row['_id']["$oid"],
          "date" : dateVar
        }
        this.addComment(mydict)
        //this.refreshData("row2")
        
        this.$router.go(0);
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
   this.dateWithColor()
  // this.parseComments()
 },
 
 computed: {

  getLastCommentValue: function()
      {
      
      console.log("getLastCommentValue in computed section start")
      var _data = this.row['comments']
      console.log("data is",_data )
      const _commentArray = [];

      for (const element of _data) {
        const dateKey = Object.keys(element)[0];
        const dateValue = element[dateKey];
        console.log("dateValue is",dateValue )
        const commentKey = Object.keys(element)[1];
        const commentValue = element[commentKey];
        console.log("value2 is",commentValue)

        _commentArray.push({"date": dateValue, "comment": commentValue});
}

        //this.commentArray = _commentArray
        console.log("_commentArray")
        console.log(_commentArray)
        console.log("length ")
        console.log(_commentArray.length)
        var lengthmin1 = this.row['comments'].length -1
        console.log("_lengthmin1")
        console.log(lengthmin1)
        console.log(_commentArray[lengthmin1]["date"])
        console.log(_commentArray[lengthmin1]["comment"])

        const a  = _commentArray[lengthmin1]["comment"]
        return a
      },
      getLastCommentDate: function()
      {
        console.log("getLastCommentValue in computed section start")
      var _data = this.row['comments']
      console.log("data is",_data )
      const _commentArray = [];

      for (const element of _data) {
        const dateKey = Object.keys(element)[0];
        const dateValue = element[dateKey];
        console.log("dateValue is",dateValue )
        const commentKey = Object.keys(element)[1];
        const commentValue = element[commentKey];
        console.log("value2 is",commentValue)

        _commentArray.push({"date": dateValue, "comment": commentValue});
}

        //this.commentArray = _commentArray
        console.log("_commentArray")
        console.log(_commentArray)
        console.log("length ")
        console.log(_commentArray.length)
        var lengthmin1 = this.row['comments'].length -1
        console.log("_lengthmin1")
        console.log(lengthmin1)
        console.log(_commentArray[lengthmin1]["date"])
        console.log(_commentArray[lengthmin1]["comment"])

        const a  = _commentArray[lengthmin1]["date"]
        return a
      },
 }

}
</script>