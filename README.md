(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-webpcss
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> webpcss plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-webpcss` as a development dependency:

```shell
npm install --save-dev gulp-webpcss
```

Then, add it to your `gulpfile.js`:

```javascript
var webpcss = require("gulp-webpcss");

gulp.src("./src/*.ext")
	.pipe(webpcss({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### webpcss(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-webpcss
[npm-image]: https://badge.fury.io/js/gulp-webpcss.png

[travis-url]: http://travis-ci.org/lexich/gulp-webpcss
[travis-image]: https://secure.travis-ci.org/lexich/gulp-webpcss.png?branch=master

[coveralls-url]: https://coveralls.io/r/lexich/gulp-webpcss
[coveralls-image]: https://coveralls.io/repos/lexich/gulp-webpcss/badge.png

[depstat-url]: https://david-dm.org/lexich/gulp-webpcss
[depstat-image]: https://david-dm.org/lexich/gulp-webpcss.png
