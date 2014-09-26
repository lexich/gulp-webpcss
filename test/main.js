/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	webpcss = require("../");

describe("gulp-webpcss", function () {

	var expectedFile = new gutil.File({
		path: "test/expected/default_options.css",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/default_options.css")
	});

	var expectedFile2 = new gutil.File({
		path: "test/expected/custom_options.css",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/custom_options.css")
	});

	it("should produce expected file via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/testing.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/testing.css")
		});

		var stream = webpcss();

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			String(newFile.contents).should.equal(String(expectedFile.contents));
			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it("should produce expected file 2 via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/testing.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/testing.css")
		});

		var stream = webpcss({
			baseClass:'.webp1',
          	replace_to:'.webp'
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			String(newFile.contents).should.equal(String(expectedFile2.contents));
			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it("should error on stream", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/testing.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.createReadStream("test/fixtures/testing.css")
		});

		var stream = webpcss();

		stream.on("error", function(err) {
			should.exist(err);
			done();
		});

		stream.on("data", function (newFile) {
			newFile.contents.pipe(es.wait(function(err, data) {
				done(err);
			}));
		});

		stream.write(srcFile);
		stream.end();
	});

	/*
	it("should produce expected file via stream", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/testing.css",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.createReadStream("test/fixtures/testing.css")
		});

		var stream = webpcss("World");

		stream.on("error", function(err) {
			should.exist(err);
			done();
		});

		stream.on("data", function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			newFile.contents.pipe(es.wait(function(err, data) {
				should.not.exist(err);
				data.should.equal(String(expectedFile.contents));
				done();
			}));
		});

		stream.write(srcFile);
		stream.end();
	});
	*/
});
