


var testFolder = '../uploads/1172265539576337';
var fs = require('fs');

/*fs.readdir(testFolder, function(error, filelist){
		console.log("asd:  "+filelist);

})*/



exports.name = function(dir,cb){
	testFolder = '/home/ubuntu/ram/uploads/';
	testFolder =testFolder+dir;

	fs.readdir(testFolder, function(error, filelist){

		cb(filelist);
	})

}
