"use strict";var N=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=N(function(o,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-kernel-betaincinv/dist');function c(e,r,i,s){return n(e)||n(r)||n(i)?NaN:r<=0||i<=0?NaN:e<0||e>1?NaN:s?t(r,i,1-e,e)[0]:t(r,i,e,1-e)[0]}u.exports=c
});var f=a();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
