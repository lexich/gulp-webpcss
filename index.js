var through = require("through2"),
	gutil = require("gulp-util"),
	_ = require('lodash'),
	webpcss_transform = require('webpcss-transform');

module.exports = function (param) {
	"use strict";

	var options = _.defaults(param || {}, {
		baseClass:'.webp',
		replace_from:/\.(png|jpg|jpeg)/,
		replace_to:'.webp'
	});

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function webpcss(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-webpcss", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			file.contents = new Buffer( webpcss_transform(file.contents, options));
			this.push(file);

		}
		return callback();
	}

	return through.obj(webpcss);
};
