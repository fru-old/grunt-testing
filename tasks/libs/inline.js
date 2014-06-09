
var utils   = require('./utils.js');
var cheerio = require('cheerio');
var rework  = require('rework');
var path 	= require('path');

module.exports = function(filepath, sources, done){
	var basepath = path.dirname(filepath);
	utils.read(filepath, "", function(err, content){
		if(err)done(err);
		$ = cheerio.load(content, {
			decodeEntities: false
		});
		wrapScripts($, basepath, function(err){
			if(err)done(err);
			wrapStyles($, basepath, function(err){
				if(err)done(err);
				for(var source in sources){
					source = '<script>'+getPlaceholder(sources[source])+'</script>';
					$('body').append(source);
				}
				done(null, removeAllPlaceholder($.html()));
			});
		});
	});
}


// Because cheerio is to slow to handle large texts
var indexHolder = 0;
var mapHolder   = {};
function getPlaceholder(content){
	var holder = 'replace_later_'+(indexHolder++);
	mapHolder[holder] = content;
	return holder;
}
function removeAllPlaceholder(content){
	for(var holder in mapHolder){
		content = content.replace(holder, mapHolder[holder]);
	}
	return content;
}

function wrapScripts($, basepath, done){
	var asynch = utils.counter(done);
	$('script[src]').each(function(){
		var self = $(this);
		var src  = self.attr('src');
		if(!/^data:/.test(src)){
			utils.read(src, basepath, asynch(function(err, content){
				if(err)done(err);
				content = getPlaceholder(content);
				self.replaceWith('<script>'+content+'</script>');
			}));
		}
	});
	asynch();
}

function wrapStyles($, basepath, done){
	var asynch = utils.counter(done);
	$('link[rel="stylesheet"][href]').each(function(){
		var self = $(this);
		var href  = self.attr('href');
		if(!/^data:/.test(href)){
			utils.read(href, basepath, asynch(function(err, content){
				if(err)done(err);
				content = getPlaceholder(content);
				self.replaceWith('<style><!--'+content+'--></style>');
			}));
		}
	});
	asynch();
}

