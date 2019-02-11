
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gkfka0422',
  port     : 3306,
  database : 'test'
});


var resultArray ="default";
var str="default";

connection.connect();

connection.query('select name from test.fbtest where id=1172265539576337', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);

  resultArray = Object.values(JSON.parse(JSON.stringify(rows)));

  //console.log("res="+resultArray[0]['name']);
  str=resultArray[0]['name'];
  console.log(str);

  console.log(typeof(str));


  exports.data=str;
  //exports.data=resultArray[0]['name'];
});

connection.end();


*/
//--------------------------
exports.name = function(n,filename, cb){


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gkfka0422',
  port     : 3306,
  database : 'test'
});


var resultArray ="default";
var str="default";


  connection.connect();
  let query = `update test.pdfcache set recent=${connection.escape(filename)} where id=${connection.escape(n)}`;

  connection.query(query, function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.', err);

    // resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
    //str=resultArray[0]['name'];
    str=rows;
    cb(err, str);

  });

}

//exports.data= res;


/*var router = require('router');

router.get('/getajax',function(req,res,next){
	res.render("main/ajax");
})

router.post('/ajax',function(req,res,next){
	console.log("post call server side");

	res.send(rows);
})*/
