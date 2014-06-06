
var path = require('path');
var fs   = require('fs');

function normalize(path) {
  var last = path[path.length - 1];
  
  if (process.platform !== "win32") {
    if (last !== '/') {
      path += '/';
    }
  } else {
    //See: http://stackoverflow.com/questions/4158597/extra-slashes-in-path-variable-of-file-copy-or-directory-createdirectory-met
    path += '/';
  }
  return path;
}

module.exports = function(prefix, name) {
  if(!name){
    name = Date.now() + '-' + Math.floor(100000000 + Math.random() * 900000000);
    name = process[prefix] || (process[prefix] = name);
  }

  var temp = process.env.TMPDIR
      || process.env.TMP
      || process.env.TEMP
      || (process.platform === "win32" ? "c:\\windows\\temp\\" : "/tmp/")
  
  return path.join(normalize(temp), prefix, name);
};

