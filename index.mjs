// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betaincinv@esm/index.mjs";function t(t,n,i,a){return s(t)||s(n)||s(i)||n<=0||i<=0||t<0||t>1?NaN:a?e(n,i,1-t,t)[0]:e(n,i,t,1-t)[0]}export{t as default};
//# sourceMappingURL=index.mjs.map
