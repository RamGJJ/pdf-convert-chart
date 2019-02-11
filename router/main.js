 var up = require('../models/upload_file.js');
 var directory = require("../fs_test.js");

const fs = require('fs');
module.exports = function(app)
{


 // 'get' : {
 //    'home' : ,
 //    'chart' : ,
 // },
 // 'post' : {

 // }
   app.get('/',function(req,res){
    res.render('views/index.html')
});

   app.get('/charts',function(req,res){
    res.render('views/charts.html');
});

 app.get('/tables',function(req,res){
    res.render('views/tables.html');
});

   app.get('/blank',function(req,res){
    res.render('views/blank.html');
});

 app.get('/tests',function(req,res){
    res.render('views/tests.html');
});

  app.post("/get_json",function(req,res){


    var json_data = require('../format.js');

    console.log("router url:"+req.body.url);
    console.log(typeof(req.body.url));
    // res.send(data.return_data());
    json_data.get_table_data(req.body.url,(data)=>{

        //console.log("main json:"+data);
        res.send(data);
    });

});


   app.post("/dbtest",function(req,res){

    console.log("req data:"+req.body.data);

    var str = require('../models/dbtest.js');
   // console.log("result="+str.data);
    //var haram = str.name('1172265539576337');


    str.name('1172265539576337', (err, data) =>{
        if(!err) console.log(data);
        else{
            console.log('an error ocurrs in name');
            console.log(err);
        }
        var usernames = JSON.parse(JSON.stringify(data));

        res.send(usernames[0].name);
    });

   // res.send(str.name('1172265539576337'));
});

/*     var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
var upload = multer({ dest: 'uploads/' })
*/
    var file_paths="uploads/";
    var multer = require('multer'); // multer모듈 적용 (for 파일업로드)
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        console.log("req:"+req.body.id);
    cb(null, file_paths) // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
    })
    var upload = multer({ storage: storage });
//    var storage = multer.memoryStorage()
// upload.single('userfile'),



//    app.post("/upload", upload.single('userfile'), function(req,res){
         app.post("/upload", upload.single('userfile'), function(req,res){
        console.log(req.body);
          console.log("id:"+req.body.id);
          file_paths="uploads/";
          if(req.body.id){
          file_paths+=req.body.id+"/";
          res.json("suc");
          }
          //console.log("name: "+req.files.userfile.name);
         // console.log(req.file.buffer);

        //up_dir.dir(`/home/ubuntu/ram/uploads/${req.body.id}/`, req.file.buffer);
        //fs.writeFileSync(`/home/ubuntu/ram/uploads/${req.body.id}/${req.file.originalname}`, req.file.buffer);
        //console.log(req.file);
        res.json("suc");
      //res.json(`/home/ubuntu/ram/uploads/${req.body.id}/${req.file.originalname}`);
        //console.log(req);
        //console.log(req.file);
        //console.log(req.f_id);
    });




  app.post("/dir", function(req,res){
        directory.dir(req.body.id);

        res.send(req.body.id+"success");

    });


app.post("/recent_file",function(req,res){

    console.log("req data:"+req.body.data);

    var str = require('../models/recent_file.js');
   // console.log("result="+str.data);
    //var haram = str.name('1172265539576337');


    str.name(req.body.data, (err, data) =>{
        if(!err) console.log(data);
        else{
            console.log('an error ocurrs in name');
            console.log(err);
        }
        var usernames = JSON.parse(JSON.stringify(data));
        console.log(usernames[0].recent);
        res.send(usernames[0].recent);
    });

   // res.send(str.name('1172265539576337'));
});


app.post("/select_dir_file",function(req,res){

    var str = require('../models/read_dir.js');

    str.name(req.body.data,(data) =>{
        console.log("data: "+data);
        res.json(data);
    });

});

app.post("/update_recent_file",function(req,res){

    var str = require('../models/update_recent_file.js');

    str.name(req.body.id,req.body.filename,(data) =>{
        console.log("data: "+data);
        res.json(data);
    });

});

app.post("/show_table",function(req,res){

    var str = require('../models/update_recent_file.js');

    str.name(req.body.id,req.body.filename,(data) =>{
        console.log("data: "+data);
        res.json(data);
    });

});
//-------------------------------------------


 }
