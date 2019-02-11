
var mysqlDB=require('./mysql-db');
mysqlDB.connect();


let query = `select name from test.fbtest where id=${mysqlDB.escape(1172265539576337)}`;

mysqlDB.query(query, function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});
