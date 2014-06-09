
var path   = require('path');
var fs     = require('fs');
var mkdirp = require('mkdirp');
var http   = require('http');

var prefix  = 'temp_files';
var counter = 1;

function fuid(){
  if(counter++ > 900000000)counter = 0;
  var random = Math.floor(100000000 + Math.random() * 900000000);
  return [ Date.now(), counter, random ].join('-');
}

function normalize(path) {
  if (process.platform !== "win32") {
    if (path[path.length - 1] === '/') {
      return path;
    }
  }
  // In windows consecutive slashes are tolerated
  return path + '/';
}

function getTemp(name){
  if(!name){
    name = process[prefix] || (process[prefix] = fuid());
  }

  var temp = process.env.TMPDIR
      || process.env.TMP
      || process.env.TEMP
      || (process.platform === "win32" ? "c:\\windows\\temp\\" : "/tmp/")
  
  return path.join(normalize(temp), prefix, name)+'.tmp';
}

function download(url, file, done){
  var stream = fs.createWriteStream(file);
  http.get(url, function(response) {
    response.pipe(stream);
    stream.on('finish', function() {
      stream.close(done);
    });
  });
}

function read(filepath, basepath, done){
  if(/^https?:\/\//.test(filepath)){
    var file = getTemp(fuid());
    mkdirp(path.dirname(file), function(err) { 
      if(err)done(err);
      download(filepath, file, function(err){
        if(err)done(err);
        read(file ,"", done);
      });
    });
  }else{
    fs.readFile(path.resolve(basepath, filepath), 'utf8', done);
  }
}

module.exports = {
  counter: function(callback){
    var count = 0;
     return function(wrapped){
      if(typeof wrapped !== "function"){
        return count<=0 ? callback() : null;
      }
      count++;
      return function(){
        var result = wrapped.apply(this, arguments);
        count--;
        if(count<=0)callback();
        return result;
      }
    }
  },
  setPrefix: function(id){
    prefix = id;
  },
  fuid: fuid,
  getTemp: getTemp,
  read: read,
  write: function(filepath, content, done){
    mkdirp(path.dirname(filepath), function(err) { 
      if(err)done(err);
      fs.writeFile(filepath, content, done);
    });
  },
  makeDataUrl: function(mimetype, content){
    content = new Buffer(content).toString('base64');
    return "data:"+mimetype+";base64,"+content;
  }
};