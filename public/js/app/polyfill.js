//polyfill String.includes
String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)});
//polyfill Array.filter
Array.prototype.filter||(Array.prototype.filter=function(r){"use strict";if(null==this)throw new TypeError;var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError;for(var o=[],i=arguments.length>=2?arguments[1]:void 0,n=0;n<e;n++)if(n in t){var f=t[n];r.call(i,f,n,t)&&o.push(f)}return o});
//pollyfill Array.fill();
Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(t){if(null==this)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,i=arguments[1]>>0,n=i<0?Math.max(e+i,0):Math.min(i,e),o=arguments[2],a=void 0===o?e:o>>0,l=a<0?Math.max(e+a,0):Math.min(a,e);n<l;)r[n]=t,n++;return r}});
//pollyfill String.repeat();
String.prototype.repeat||(String.prototype.repeat=function(t){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var r=""+this;if((t=+t)!=t&&(t=0),t<0)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==r.length||0==t)return"";if(r.length*t>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var e=r.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)r+=r,t--;return r+=r.substring(0,e-r.length)});
