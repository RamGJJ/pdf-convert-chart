  var multer= require('multer');
  var Q = require('q');

  exports.upload = function (req, res) {
    var deferred = Q.defer().then(()=>{
      res.send('resolved!');
    });
    var storage = multer.diskStorage({
    // 서버에 저장할 폴더
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },

    // 서버에 저장할 파일 명
    filename: function (req, file, cb) {
      cb(null,file.originalname);
    }
  });

    var upload = multer({ storage: storage }).single('userfile');

    upload(req, res, function (err) {
      if (err) deferred.reject();
      else deferred.resolve(req.file.uploadedFile);
    });
    return deferred.promise;
  };
