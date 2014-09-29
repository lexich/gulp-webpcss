var through = require("through2"),
  gutil = require("gulp-util"),
  _ = require('lodash'),
  webpcss = require('webpcss')

var fs = require("fs");

module.exports = function (params) {
  "use strict";

  function webpcss_func(file, enc, callback) {
    /*jshint validthis:true*/

    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {
      this.emit("error",
        new gutil.PluginError("gulp-webpcss", "Stream content is not supported"));
      return callback();
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(webpcss.transform(file.contents, params));
      this.push(file);
    }
    return callback();
  }

  return through.obj(webpcss_func);
};
