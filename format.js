var pdf_table_extractor = require("pdf-table-extractor");
 
//PDF parsed

//function test(pdf_filename)
var list = new Array();
var arr = new Array();
//  {State:'AL',freq:{low:4786, mid:1319, high:249}}
/*exports.return_data = function(){
*/

var len;

exports.get_table_data = function(url,cb){
function success(result)
{
  arr = new Array();
  list= new Array();
  len=result.pageTables[0].width*1;
  //console.log(len);
  
  // console.log(result.pageTables.length);
  
  var origin = JSON.stringify(result);

   var data = new Object();
   var freq = new Object();

   var name ;
   for(var p =0; p<result.pageTables.length; p++){
    len=result.pageTables[p].width*1;
    console.log("name find  "+result.pageTables[0].tables[0]);
    
    name = new Array();
    list = new Array();
    data = new Object();
    freq = new Object();

    name.push(result.pageTables[p].tables[0]);
    for(var i =1; i<result.pageTables[p].height; i++){
      data.State= result.pageTables[p].tables[i][0];



      for(var j =1; j<result.pageTables[p].width; j++){

        if(j==1)
         freq.col1=result.pageTables[p].tables[i][j]*1;
       else if(j==2)
         freq.col2=result.pageTables[p].tables[i][j]*1;
       else if(j==3)
         freq.col3=result.pageTables[p].tables[i][j]*1;
       else if(j==4)
         freq.col4=result.pageTables[p].tables[i][j]*1;
       else if(j==5)
         freq.col5=result.pageTables[p].tables[i][j]*1;
       else if(j==6)
         freq.col6=result.pageTables[p].tables[i][j]*1;
       else if(j==7)
         freq.col7=result.pageTables[p].tables[i][j]*1;
       else if(j==8)
         freq.col8=result.pageTables[p].tables[i][j]*1;
       else if(j==9)
         freq.col9=result.pageTables[p].tables[i][j]*1;
       else if(j==10)
         freq.col10=result.pageTables[p].tables[i][j]*1;


       data.freq=freq;
     }
     list.push(data);
     data = new Object();
     freq = new Object();
   }//for
   arr.push(len);
   arr.push(name);
  arr.push(list);   
 }//p for 


  // console.log(list);
 // arr.push(list);
  //arr.push(len);
  console.log(arr);
  cb(arr);
  //console.log(arr);


}

//Error
function error(err)
{
	console.error('Error: ' + err);
}

//pdf_table_extractor("uploads/tablegogo.pdf",success,error);
pdf_table_extractor(url,success,error);

/*exports.len=len;

exports.list=list;*/
//return list;
}
//}