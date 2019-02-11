/*var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
//var app=express();
//var template = require();





var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      //url = '/index.html';
      url='/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});


app.listen(3000);
*/

//--------------------------------------custom

var express = require('express');
var app = express();

var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var fs = require('fs');
var bodyParser = require('body-parser')

app.set('views', __dirname );

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname ));

//app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var router = require('./router/main')(app);
console.log(__dirname);
/*
var multer = require('multer'); // multer모듈 적용 (for 파일업로드)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
var upload = multer({ storage: storage })
*/

/*
app.post("/dbtest",function(req,res){
  console.log("app post section");
  console.log(req.data);
  var data="test";
  //res.send({result:data});
  res.send({data});
})

*/

//app.use(express.static(__dirname +'/views'));

//app.use('/views',express.static(__dirname+'/views'))


var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

/*app.post('/ajaxtest',function(res,res){
	var data =req.body.data;
	console.log("post router");
	console.log(rows);
	res.send(rows);
})*/
