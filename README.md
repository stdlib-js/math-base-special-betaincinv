<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# betaincinv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Inverse of the [incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import betaincinv from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaincinv@esm/index.mjs';
```

#### betaincinv( p, a, b\[, upper] )

Inverts the regularized [incomplete beta function][incomplete-beta-function]. Contrary to the more commonly used definition, in this implementation the first parameter is the probability `p` and the second and third parameter are `a` and `b`. By default, the function inverts the _lower_ regularized [incomplete beta function][incomplete-beta-function]. To invert the _upper_ function instead, set the `upper` argument to `true`.

```javascript
var y = betaincinv( 0.2, 3.0, 3.0 );
// returns ~0.327

y = betaincinv( 0.4, 3.0, 3.0 );
// returns ~0.446

y = betaincinv( 0.4, 3.0, 3.0, true );
// returns ~0.554

y = betaincinv( 0.4, 1.0, 6.0 );
// returns ~0.082

y = betaincinv( 0.8, 1.0, 6.0 );
// returns ~0.235
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = betaincinv( NaN, 1.0, 1.0 );
// returns NaN

y = betaincinv( 0.5, NaN, 1.0 );
// returns NaN

y = betaincinv( 0.5, 1.0, NaN );
// returns NaN
```

If provided a value outside `[0,1]` for `p`, the function returns `NaN`.

```javascript
var y = betaincinv( 1.2, 1.0, 1.0 );
// returns NaN

y = betaincinv( -0.5, 1.0, 1.0 );
// returns NaN
```

If provided a nonpositive `a`, the function returns `NaN`.

```javascript
var y = betaincinv( 0.5, -2.0, 2.0 );
// returns NaN

y = betaincinv( 0.5, 0.0, 2.0 );
// returns NaN
```

If provided a nonpositive `b`, the function returns `NaN`.

```javascript
var y = betaincinv( 0.5, 2.0, -2.0 );
// returns NaN

y = betaincinv( 0.5, 2.0, 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import betaincinv from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaincinv@esm/index.mjs';

var i;
var p;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    console.log( 'p: %d, \t a: %d, \t b: %d, \t f(p,a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), betaincinv( p, a, b ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/beta`][@stdlib/math/base/special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betainc`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaln`][@stdlib/math/base/special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-betaincinv.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-betaincinv

[test-image]: https://github.com/stdlib-js/math-base-special-betaincinv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-betaincinv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-betaincinv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-betaincinv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-betaincinv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-betaincinv/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-betaincinv/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-betaincinv/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-betaincinv/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-betaincinv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-betaincinv/main/LICENSE

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta/tree/esm

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc/tree/esm

[@stdlib/math/base/special/betaln]: https://github.com/stdlib-js/math-base-special-betaln/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
