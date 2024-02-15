"use strict";var N=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=N(function(o,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-kernel-betaincinv/dist');function c(r,e,i,s){return n(r)||n(e)||n(i)?NaN:e<=0||i<=0?NaN:r<0||r>1?NaN:s?t(e,i,1-r,r)[0]:t(e,i,r,1-r)[0]}u.exports=c
});var f=a();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
