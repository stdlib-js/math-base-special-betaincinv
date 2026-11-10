"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=c(function(q,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-kernel-betaincinv/dist');function v(e,r,i,a){return n(e)||n(r)||n(i)||r<=0||i<=0||e<0||e>1?NaN:a?t(r,i,1-e,e)[0]:t(r,i,e,1-e)[0]}u.exports=v
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
