// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-betaincinv@esm/index.mjs";var t=s,n=e;var a=function(s,e,a,i){return t(s)||t(e)||t(a)||e<=0||a<=0||s<0||s>1?NaN:i?n(e,a,1-s,s)[0]:n(e,a,s,1-s)[0]};export{a as default};
//# sourceMappingURL=index.mjs.map
