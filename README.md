Grunt analog: [grunt-webpcss](https://github.com/lexich/grunt-webpcss)

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

gulp.src("./src/*.css")
	.pipe(webpcss({}))
	.pipe(gulp.dest("./dist"));
```

## API

### webpcss(options)

#### options.baseClass
Type: `String`
Default value: `'.webp'`

Class which prepend selector. For expample:  
before
```css
.test { background-image:url('test.png'); }
```

after
```css
.test { background-image:url('test.png'); }
.webp .test { background-image:url('test.webp'); }
```

.webp class indicate webp browser support. Reccomends to use [Modernizr](https://modernizr.com/‎)

#### options.replace_from
Type: `RegExp`
Default value: `/\.(png|jpg|jpeg)/,`

RegExp pattern for replace

#### options.replace_to
Type: `String`
Default value: `.webp`

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. 
Css transforms from
```css
.test { background-image:url('test.png'); }
```
to
```css
.test { background-image:url('test.png'); }
.webp .test { background-image:url('test.webp'); }
```


```js
var webpcss = require("gulp-webpcss");

gulp.src("./src/*.css")
	.pipe(webpcss({}))
	.pipe(gulp.dest("./dist"));
```

#### Custom Options
In this example, the default options are used to do something with whatever. 
Css transforms from
```css
.test { background-image:url('test.png'); }
```
to
```css
.test { background-image:url('test.png'); }
.webp1 .test { background-image:url('test.webp'); }
```


```js
var webpcss = require("gulp-webpcss");

gulp.src("./src/default_options.css")
	.pipe(webpcss({
	  baseClass:'.webp1',
      replace_from:/\.(png|jpg|jpeg)/,
      replace_to:'.webp',
	}))
	.pipe(gulp.dest("./dist"));
```

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
