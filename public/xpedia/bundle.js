
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
var app = (function (JSZip) {
    'use strict';

    JSZip = JSZip && JSZip.hasOwnProperty('default') ? JSZip['default'] : JSZip;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var fuse = createCommonjsModule(function (module, exports) {
    /*!
     * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)};},function(e,t,n){function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t);}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return {tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return {weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name;}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});}return {weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]));}L&&(k+=1);}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m);}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]));}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f});}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l);}t[n].score=1===s?a:s,this._log(t[n]);}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn);}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t);}return t})),n=null;}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a);}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score;});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c);}else t.push(s.item);}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments);}}])&&o(t.prototype,n),e}();e.exports=c;},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern));}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return {isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),e}();e.exports=s;},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1]);}return {score:a?.5:1,isMatch:a,matchedIndices:s}};},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m);}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O);}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k);}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T;}return {isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}};},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l};},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1);}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n};},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t};},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString());}else o.push(t);return o}(e,t,[])};}])});
    });

    var Fuse = unwrapExports(fuse);
    var fuse_1 = fuse.Fuse;

    function isNothing(subject) {
      return (typeof subject === 'undefined') || (subject === null);
    }


    function isObject(subject) {
      return (typeof subject === 'object') && (subject !== null);
    }


    function toArray(sequence) {
      if (Array.isArray(sequence)) return sequence;
      else if (isNothing(sequence)) return [];

      return [ sequence ];
    }


    function extend(target, source) {
      var index, length, key, sourceKeys;

      if (source) {
        sourceKeys = Object.keys(source);

        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }

      return target;
    }


    function repeat(string, count) {
      var result = '', cycle;

      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }

      return result;
    }


    function isNegativeZero(number) {
      return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
    }


    var isNothing_1      = isNothing;
    var isObject_1       = isObject;
    var toArray_1        = toArray;
    var repeat_1         = repeat;
    var isNegativeZero_1 = isNegativeZero;
    var extend_1         = extend;

    var common = {
    	isNothing: isNothing_1,
    	isObject: isObject_1,
    	toArray: toArray_1,
    	repeat: repeat_1,
    	isNegativeZero: isNegativeZero_1,
    	extend: extend_1
    };

    // YAML error class. http://stackoverflow.com/questions/8458984

    function YAMLException(reason, mark) {
      // Super constructor
      Error.call(this);

      this.name = 'YAMLException';
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

      // Include stack trace in error object
      if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor);
      } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = (new Error()).stack || '';
      }
    }


    // Inherit from Error
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;


    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ': ';

      result += this.reason || '(unknown reason)';

      if (!compact && this.mark) {
        result += ' ' + this.mark.toString();
      }

      return result;
    };


    var exception = YAMLException;

    function Mark(name, buffer, position, line, column) {
      this.name     = name;
      this.buffer   = buffer;
      this.position = position;
      this.line     = line;
      this.column   = column;
    }


    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;

      if (!this.buffer) return null;

      indent = indent || 4;
      maxLength = maxLength || 75;

      head = '';
      start = this.position;

      while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > (maxLength / 2 - 1)) {
          head = ' ... ';
          start += 5;
          break;
        }
      }

      tail = '';
      end = this.position;

      while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > (maxLength / 2 - 1)) {
          tail = ' ... ';
          end -= 5;
          break;
        }
      }

      snippet = this.buffer.slice(start, end);

      return common.repeat(' ', indent) + head + snippet + tail + '\n' +
             common.repeat(' ', indent + this.position - start + head.length) + '^';
    };


    Mark.prototype.toString = function toString(compact) {
      var snippet, where = '';

      if (this.name) {
        where += 'in "' + this.name + '" ';
      }

      where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

      if (!compact) {
        snippet = this.getSnippet();

        if (snippet) {
          where += ':\n' + snippet;
        }
      }

      return where;
    };


    var mark = Mark;

    var TYPE_CONSTRUCTOR_OPTIONS = [
      'kind',
      'resolve',
      'construct',
      'instanceOf',
      'predicate',
      'represent',
      'defaultStyle',
      'styleAliases'
    ];

    var YAML_NODE_KINDS = [
      'scalar',
      'sequence',
      'mapping'
    ];

    function compileStyleAliases(map) {
      var result = {};

      if (map !== null) {
        Object.keys(map).forEach(function (style) {
          map[style].forEach(function (alias) {
            result[String(alias)] = style;
          });
        });
      }

      return result;
    }

    function Type(tag, options) {
      options = options || {};

      Object.keys(options).forEach(function (name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });

      // TODO: Add tag format check.
      this.tag          = tag;
      this.kind         = options['kind']         || null;
      this.resolve      = options['resolve']      || function () { return true; };
      this.construct    = options['construct']    || function (data) { return data; };
      this.instanceOf   = options['instanceOf']   || null;
      this.predicate    = options['predicate']    || null;
      this.represent    = options['represent']    || null;
      this.defaultStyle = options['defaultStyle'] || null;
      this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }

    var type = Type;

    /*eslint-disable max-len*/






    function compileList(schema, name, result) {
      var exclude = [];

      schema.include.forEach(function (includedSchema) {
        result = compileList(includedSchema, name, result);
      });

      schema[name].forEach(function (currentType) {
        result.forEach(function (previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });

        result.push(currentType);
      });

      return result.filter(function (type, index) {
        return exclude.indexOf(index) === -1;
      });
    }


    function compileMap(/* lists... */) {
      var result = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {}
          }, index, length;

      function collectType(type) {
        result[type.kind][type.tag] = result['fallback'][type.tag] = type;
      }

      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }


    function Schema(definition) {
      this.include  = definition.include  || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];

      this.implicit.forEach(function (type) {
        if (type.loadKind && type.loadKind !== 'scalar') {
          throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
        }
      });

      this.compiledImplicit = compileList(this, 'implicit', []);
      this.compiledExplicit = compileList(this, 'explicit', []);
      this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
    }


    Schema.DEFAULT = null;


    Schema.create = function createSchema() {
      var schemas, types;

      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;

        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;

        default:
          throw new exception('Wrong number of arguments for Schema.create function');
      }

      schemas = common.toArray(schemas);
      types = common.toArray(types);

      if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
        throw new exception('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
      }

      if (!types.every(function (type$1) { return type$1 instanceof type; })) {
        throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
      }

      return new Schema({
        include: schemas,
        explicit: types
      });
    };


    var schema = Schema;

    var str = new type('tag:yaml.org,2002:str', {
      kind: 'scalar',
      construct: function (data) { return data !== null ? data : ''; }
    });

    var seq = new type('tag:yaml.org,2002:seq', {
      kind: 'sequence',
      construct: function (data) { return data !== null ? data : []; }
    });

    var map = new type('tag:yaml.org,2002:map', {
      kind: 'mapping',
      construct: function (data) { return data !== null ? data : {}; }
    });

    var failsafe = new schema({
      explicit: [
        str,
        seq,
        map
      ]
    });

    function resolveYamlNull(data) {
      if (data === null) return true;

      var max = data.length;

      return (max === 1 && data === '~') ||
             (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
    }

    function constructYamlNull() {
      return null;
    }

    function isNull(object) {
      return object === null;
    }

    var _null = new type('tag:yaml.org,2002:null', {
      kind: 'scalar',
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function () { return '~';    },
        lowercase: function () { return 'null'; },
        uppercase: function () { return 'NULL'; },
        camelcase: function () { return 'Null'; }
      },
      defaultStyle: 'lowercase'
    });

    function resolveYamlBoolean(data) {
      if (data === null) return false;

      var max = data.length;

      return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
             (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
    }

    function constructYamlBoolean(data) {
      return data === 'true' ||
             data === 'True' ||
             data === 'TRUE';
    }

    function isBoolean(object) {
      return Object.prototype.toString.call(object) === '[object Boolean]';
    }

    var bool = new type('tag:yaml.org,2002:bool', {
      kind: 'scalar',
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function (object) { return object ? 'true' : 'false'; },
        uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
        camelcase: function (object) { return object ? 'True' : 'False'; }
      },
      defaultStyle: 'lowercase'
    });

    function isHexCode(c) {
      return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
             ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
             ((0x61/* a */ <= c) && (c <= 0x66/* f */));
    }

    function isOctCode(c) {
      return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
    }

    function isDecCode(c) {
      return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
    }

    function resolveYamlInteger(data) {
      if (data === null) return false;

      var max = data.length,
          index = 0,
          hasDigits = false,
          ch;

      if (!max) return false;

      ch = data[index];

      // sign
      if (ch === '-' || ch === '+') {
        ch = data[++index];
      }

      if (ch === '0') {
        // 0
        if (index + 1 === max) return true;
        ch = data[++index];

        // base 2, base 8, base 16

        if (ch === 'b') {
          // base 2
          index++;

          for (; index < max; index++) {
            ch = data[index];
            if (ch === '_') continue;
            if (ch !== '0' && ch !== '1') return false;
            hasDigits = true;
          }
          return hasDigits && ch !== '_';
        }


        if (ch === 'x') {
          // base 16
          index++;

          for (; index < max; index++) {
            ch = data[index];
            if (ch === '_') continue;
            if (!isHexCode(data.charCodeAt(index))) return false;
            hasDigits = true;
          }
          return hasDigits && ch !== '_';
        }

        // base 8
        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_') continue;
          if (!isOctCode(data.charCodeAt(index))) return false;
          hasDigits = true;
        }
        return hasDigits && ch !== '_';
      }

      // base 10 (except 0) or base 60

      // value should not start with `_`;
      if (ch === '_') return false;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch === ':') break;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }

      // Should have digits and should not end with `_`
      if (!hasDigits || ch === '_') return false;

      // if !base60 - done;
      if (ch !== ':') return true;

      // base60 almost not used, no needs to optimize
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
    }

    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base, digits = [];

      if (value.indexOf('_') !== -1) {
        value = value.replace(/_/g, '');
      }

      ch = value[0];

      if (ch === '-' || ch === '+') {
        if (ch === '-') sign = -1;
        value = value.slice(1);
        ch = value[0];
      }

      if (value === '0') return 0;

      if (ch === '0') {
        if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
        if (value[1] === 'x') return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }

      if (value.indexOf(':') !== -1) {
        value.split(':').forEach(function (v) {
          digits.unshift(parseInt(v, 10));
        });

        value = 0;
        base = 1;

        digits.forEach(function (d) {
          value += (d * base);
          base *= 60;
        });

        return sign * value;

      }

      return sign * parseInt(value, 10);
    }

    function isInteger(object) {
      return (Object.prototype.toString.call(object)) === '[object Number]' &&
             (object % 1 === 0 && !common.isNegativeZero(object));
    }

    var int_1 = new type('tag:yaml.org,2002:int', {
      kind: 'scalar',
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
        octal:       function (obj) { return obj >= 0 ? '0'  + obj.toString(8) : '-0'  + obj.toString(8).slice(1); },
        decimal:     function (obj) { return obj.toString(10); },
        /* eslint-disable max-len */
        hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
      },
      defaultStyle: 'decimal',
      styleAliases: {
        binary:      [ 2,  'bin' ],
        octal:       [ 8,  'oct' ],
        decimal:     [ 10, 'dec' ],
        hexadecimal: [ 16, 'hex' ]
      }
    });

    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
      // .2e4, .2
      // special case, seems not from spec
      '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
      // 20:59
      '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
      // .inf
      '|[-+]?\\.(?:inf|Inf|INF)' +
      // .nan
      '|\\.(?:nan|NaN|NAN))$');

    function resolveYamlFloat(data) {
      if (data === null) return false;

      if (!YAML_FLOAT_PATTERN.test(data) ||
          // Quick hack to not allow integers end with `_`
          // Probably should update regexp & check speed
          data[data.length - 1] === '_') {
        return false;
      }

      return true;
    }

    function constructYamlFloat(data) {
      var value, sign, base, digits;

      value  = data.replace(/_/g, '').toLowerCase();
      sign   = value[0] === '-' ? -1 : 1;
      digits = [];

      if ('+-'.indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }

      if (value === '.inf') {
        return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

      } else if (value === '.nan') {
        return NaN;

      } else if (value.indexOf(':') >= 0) {
        value.split(':').forEach(function (v) {
          digits.unshift(parseFloat(v, 10));
        });

        value = 0.0;
        base = 1;

        digits.forEach(function (d) {
          value += d * base;
          base *= 60;
        });

        return sign * value;

      }
      return sign * parseFloat(value, 10);
    }


    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

    function representYamlFloat(object, style) {
      var res;

      if (isNaN(object)) {
        switch (style) {
          case 'lowercase': return '.nan';
          case 'uppercase': return '.NAN';
          case 'camelcase': return '.NaN';
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case 'lowercase': return '.inf';
          case 'uppercase': return '.INF';
          case 'camelcase': return '.Inf';
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case 'lowercase': return '-.inf';
          case 'uppercase': return '-.INF';
          case 'camelcase': return '-.Inf';
        }
      } else if (common.isNegativeZero(object)) {
        return '-0.0';
      }

      res = object.toString(10);

      // JS stringifier can build scientific format without dots: 5e-100,
      // while YAML requres dot: 5.e-100. Fix it with simple hack

      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
    }

    function isFloat(object) {
      return (Object.prototype.toString.call(object) === '[object Number]') &&
             (object % 1 !== 0 || common.isNegativeZero(object));
    }

    var float_1 = new type('tag:yaml.org,2002:float', {
      kind: 'scalar',
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: 'lowercase'
    });

    var json = new schema({
      include: [
        failsafe
      ],
      implicit: [
        _null,
        bool,
        int_1,
        float_1
      ]
    });

    var core = new schema({
      include: [
        json
      ]
    });

    var YAML_DATE_REGEXP = new RegExp(
      '^([0-9][0-9][0-9][0-9])'          + // [1] year
      '-([0-9][0-9])'                    + // [2] month
      '-([0-9][0-9])$');                   // [3] day

    var YAML_TIMESTAMP_REGEXP = new RegExp(
      '^([0-9][0-9][0-9][0-9])'          + // [1] year
      '-([0-9][0-9]?)'                   + // [2] month
      '-([0-9][0-9]?)'                   + // [3] day
      '(?:[Tt]|[ \\t]+)'                 + // ...
      '([0-9][0-9]?)'                    + // [4] hour
      ':([0-9][0-9])'                    + // [5] minute
      ':([0-9][0-9])'                    + // [6] second
      '(?:\\.([0-9]*))?'                 + // [7] fraction
      '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
      '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

    function resolveYamlTimestamp(data) {
      if (data === null) return false;
      if (YAML_DATE_REGEXP.exec(data) !== null) return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
      return false;
    }

    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0,
          delta = null, tz_hour, tz_minute, date;

      match = YAML_DATE_REGEXP.exec(data);
      if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

      if (match === null) throw new Error('Date resolve error');

      // match: [1] year [2] month [3] day

      year = +(match[1]);
      month = +(match[2]) - 1; // JS month starts with 0
      day = +(match[3]);

      if (!match[4]) { // no hour
        return new Date(Date.UTC(year, month, day));
      }

      // match: [4] hour [5] minute [6] second [7] fraction

      hour = +(match[4]);
      minute = +(match[5]);
      second = +(match[6]);

      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) { // milli-seconds
          fraction += '0';
        }
        fraction = +fraction;
      }

      // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

      if (match[9]) {
        tz_hour = +(match[10]);
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
        if (match[9] === '-') delta = -delta;
      }

      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

      if (delta) date.setTime(date.getTime() - delta);

      return date;
    }

    function representYamlTimestamp(object /*, style*/) {
      return object.toISOString();
    }

    var timestamp = new type('tag:yaml.org,2002:timestamp', {
      kind: 'scalar',
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });

    function resolveYamlMerge(data) {
      return data === '<<' || data === null;
    }

    var merge = new type('tag:yaml.org,2002:merge', {
      kind: 'scalar',
      resolve: resolveYamlMerge
    });

    /*eslint-disable no-bitwise*/

    var NodeBuffer;

    try {
      // A trick for browserified version, to not include `Buffer` shim
      var _require = commonjsRequire;
      NodeBuffer = _require('buffer').Buffer;
    } catch (__) {}




    // [ 64, 65, 66 ] -> [ padding, CR, LF ]
    var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


    function resolveYamlBinary(data) {
      if (data === null) return false;

      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

      // Convert one by one.
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));

        // Skip CR/LF
        if (code > 64) continue;

        // Fail on illegal characters
        if (code < 0) return false;

        bitlen += 6;
      }

      // If there are any bits left, source was corrupted
      return (bitlen % 8) === 0;
    }

    function constructYamlBinary(data) {
      var idx, tailbits,
          input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
          max = input.length,
          map = BASE64_MAP,
          bits = 0,
          result = [];

      // Collect by 6*4 bits (3 bytes)

      for (idx = 0; idx < max; idx++) {
        if ((idx % 4 === 0) && idx) {
          result.push((bits >> 16) & 0xFF);
          result.push((bits >> 8) & 0xFF);
          result.push(bits & 0xFF);
        }

        bits = (bits << 6) | map.indexOf(input.charAt(idx));
      }

      // Dump tail

      tailbits = (max % 4) * 6;

      if (tailbits === 0) {
        result.push((bits >> 16) & 0xFF);
        result.push((bits >> 8) & 0xFF);
        result.push(bits & 0xFF);
      } else if (tailbits === 18) {
        result.push((bits >> 10) & 0xFF);
        result.push((bits >> 2) & 0xFF);
      } else if (tailbits === 12) {
        result.push((bits >> 4) & 0xFF);
      }

      // Wrap into Buffer for NodeJS and leave Array for browser
      if (NodeBuffer) {
        // Support node 6.+ Buffer API when available
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
      }

      return result;
    }

    function representYamlBinary(object /*, style*/) {
      var result = '', bits = 0, idx, tail,
          max = object.length,
          map = BASE64_MAP;

      // Convert every three bytes to 4 ASCII characters.

      for (idx = 0; idx < max; idx++) {
        if ((idx % 3 === 0) && idx) {
          result += map[(bits >> 18) & 0x3F];
          result += map[(bits >> 12) & 0x3F];
          result += map[(bits >> 6) & 0x3F];
          result += map[bits & 0x3F];
        }

        bits = (bits << 8) + object[idx];
      }

      // Dump tail

      tail = max % 3;

      if (tail === 0) {
        result += map[(bits >> 18) & 0x3F];
        result += map[(bits >> 12) & 0x3F];
        result += map[(bits >> 6) & 0x3F];
        result += map[bits & 0x3F];
      } else if (tail === 2) {
        result += map[(bits >> 10) & 0x3F];
        result += map[(bits >> 4) & 0x3F];
        result += map[(bits << 2) & 0x3F];
        result += map[64];
      } else if (tail === 1) {
        result += map[(bits >> 2) & 0x3F];
        result += map[(bits << 4) & 0x3F];
        result += map[64];
        result += map[64];
      }

      return result;
    }

    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object);
    }

    var binary = new type('tag:yaml.org,2002:binary', {
      kind: 'scalar',
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });

    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString       = Object.prototype.toString;

    function resolveYamlOmap(data) {
      if (data === null) return true;

      var objectKeys = [], index, length, pair, pairKey, pairHasKey,
          object = data;

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;

        if (_toString.call(pair) !== '[object Object]') return false;

        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true;
            else return false;
          }
        }

        if (!pairHasKey) return false;

        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
      }

      return true;
    }

    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }

    var omap = new type('tag:yaml.org,2002:omap', {
      kind: 'sequence',
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });

    var _toString$1 = Object.prototype.toString;

    function resolveYamlPairs(data) {
      if (data === null) return true;

      var index, length, pair, keys, result,
          object = data;

      result = new Array(object.length);

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];

        if (_toString$1.call(pair) !== '[object Object]') return false;

        keys = Object.keys(pair);

        if (keys.length !== 1) return false;

        result[index] = [ keys[0], pair[keys[0]] ];
      }

      return true;
    }

    function constructYamlPairs(data) {
      if (data === null) return [];

      var index, length, pair, keys, result,
          object = data;

      result = new Array(object.length);

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];

        keys = Object.keys(pair);

        result[index] = [ keys[0], pair[keys[0]] ];
      }

      return result;
    }

    var pairs = new type('tag:yaml.org,2002:pairs', {
      kind: 'sequence',
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });

    var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;

    function resolveYamlSet(data) {
      if (data === null) return true;

      var key, object = data;

      for (key in object) {
        if (_hasOwnProperty$1.call(object, key)) {
          if (object[key] !== null) return false;
        }
      }

      return true;
    }

    function constructYamlSet(data) {
      return data !== null ? data : {};
    }

    var set = new type('tag:yaml.org,2002:set', {
      kind: 'mapping',
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });

    var default_safe = new schema({
      include: [
        core
      ],
      implicit: [
        timestamp,
        merge
      ],
      explicit: [
        binary,
        omap,
        pairs,
        set
      ]
    });

    function resolveJavascriptUndefined() {
      return true;
    }

    function constructJavascriptUndefined() {
      /*eslint-disable no-undefined*/
      return undefined;
    }

    function representJavascriptUndefined() {
      return '';
    }

    function isUndefined(object) {
      return typeof object === 'undefined';
    }

    var _undefined = new type('tag:yaml.org,2002:js/undefined', {
      kind: 'scalar',
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });

    function resolveJavascriptRegExp(data) {
      if (data === null) return false;
      if (data.length === 0) return false;

      var regexp = data,
          tail   = /\/([gim]*)$/.exec(data),
          modifiers = '';

      // if regexp starts with '/' it can have modifiers and must be properly closed
      // `/foo/gim` - modifiers tail can be maximum 3 chars
      if (regexp[0] === '/') {
        if (tail) modifiers = tail[1];

        if (modifiers.length > 3) return false;
        // if expression starts with /, is should be properly terminated
        if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
      }

      return true;
    }

    function constructJavascriptRegExp(data) {
      var regexp = data,
          tail   = /\/([gim]*)$/.exec(data),
          modifiers = '';

      // `/foo/gim` - tail can be maximum 4 chars
      if (regexp[0] === '/') {
        if (tail) modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }

      return new RegExp(regexp, modifiers);
    }

    function representJavascriptRegExp(object /*, style*/) {
      var result = '/' + object.source + '/';

      if (object.global) result += 'g';
      if (object.multiline) result += 'm';
      if (object.ignoreCase) result += 'i';

      return result;
    }

    function isRegExp(object) {
      return Object.prototype.toString.call(object) === '[object RegExp]';
    }

    var regexp = new type('tag:yaml.org,2002:js/regexp', {
      kind: 'scalar',
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });

    var esprima;

    // Browserified version does not have esprima
    //
    // 1. For node.js just require module as deps
    // 2. For browser try to require mudule via external AMD system.
    //    If not found - try to fallback to window.esprima. If not
    //    found too - then fail to parse.
    //
    try {
      // workaround to exclude package from browserify list.
      var _require$1 = commonjsRequire;
      esprima = _require$1('esprima');
    } catch (_) {
      /*global window */
      if (typeof window !== 'undefined') esprima = window.esprima;
    }



    function resolveJavascriptFunction(data) {
      if (data === null) return false;

      try {
        var source = '(' + data + ')',
            ast    = esprima.parse(source, { range: true });

        if (ast.type                    !== 'Program'             ||
            ast.body.length             !== 1                     ||
            ast.body[0].type            !== 'ExpressionStatement' ||
            (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
              ast.body[0].expression.type !== 'FunctionExpression')) {
          return false;
        }

        return true;
      } catch (err) {
        return false;
      }
    }

    function constructJavascriptFunction(data) {
      /*jslint evil:true*/

      var source = '(' + data + ')',
          ast    = esprima.parse(source, { range: true }),
          params = [],
          body;

      if (ast.type                    !== 'Program'             ||
          ast.body.length             !== 1                     ||
          ast.body[0].type            !== 'ExpressionStatement' ||
          (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
            ast.body[0].expression.type !== 'FunctionExpression')) {
        throw new Error('Failed to resolve function');
      }

      ast.body[0].expression.params.forEach(function (param) {
        params.push(param.name);
      });

      body = ast.body[0].expression.body.range;

      // Esprima's ranges include the first '{' and the last '}' characters on
      // function expressions. So cut them out.
      if (ast.body[0].expression.body.type === 'BlockStatement') {
        /*eslint-disable no-new-func*/
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      // ES6 arrow functions can omit the BlockStatement. In that case, just return
      // the body.
      /*eslint-disable no-new-func*/
      return new Function(params, 'return ' + source.slice(body[0], body[1]));
    }

    function representJavascriptFunction(object /*, style*/) {
      return object.toString();
    }

    function isFunction(object) {
      return Object.prototype.toString.call(object) === '[object Function]';
    }

    var _function = new type('tag:yaml.org,2002:js/function', {
      kind: 'scalar',
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });

    var default_full = schema.DEFAULT = new schema({
      include: [
        default_safe
      ],
      explicit: [
        _undefined,
        regexp,
        _function
      ]
    });

    /*eslint-disable max-len,no-use-before-define*/








    var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;


    var CONTEXT_FLOW_IN   = 1;
    var CONTEXT_FLOW_OUT  = 2;
    var CONTEXT_BLOCK_IN  = 3;
    var CONTEXT_BLOCK_OUT = 4;


    var CHOMPING_CLIP  = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP  = 3;


    var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


    function _class(obj) { return Object.prototype.toString.call(obj); }

    function is_EOL(c) {
      return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
    }

    function is_WHITE_SPACE(c) {
      return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
    }

    function is_WS_OR_EOL(c) {
      return (c === 0x09/* Tab */) ||
             (c === 0x20/* Space */) ||
             (c === 0x0A/* LF */) ||
             (c === 0x0D/* CR */);
    }

    function is_FLOW_INDICATOR(c) {
      return c === 0x2C/* , */ ||
             c === 0x5B/* [ */ ||
             c === 0x5D/* ] */ ||
             c === 0x7B/* { */ ||
             c === 0x7D/* } */;
    }

    function fromHexCode(c) {
      var lc;

      if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
        return c - 0x30;
      }

      /*eslint-disable no-bitwise*/
      lc = c | 0x20;

      if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
        return lc - 0x61 + 10;
      }

      return -1;
    }

    function escapedHexLen(c) {
      if (c === 0x78/* x */) { return 2; }
      if (c === 0x75/* u */) { return 4; }
      if (c === 0x55/* U */) { return 8; }
      return 0;
    }

    function fromDecimalCode(c) {
      if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
        return c - 0x30;
      }

      return -1;
    }

    function simpleEscapeSequence(c) {
      /* eslint-disable indent */
      return (c === 0x30/* 0 */) ? '\x00' :
            (c === 0x61/* a */) ? '\x07' :
            (c === 0x62/* b */) ? '\x08' :
            (c === 0x74/* t */) ? '\x09' :
            (c === 0x09/* Tab */) ? '\x09' :
            (c === 0x6E/* n */) ? '\x0A' :
            (c === 0x76/* v */) ? '\x0B' :
            (c === 0x66/* f */) ? '\x0C' :
            (c === 0x72/* r */) ? '\x0D' :
            (c === 0x65/* e */) ? '\x1B' :
            (c === 0x20/* Space */) ? ' ' :
            (c === 0x22/* " */) ? '\x22' :
            (c === 0x2F/* / */) ? '/' :
            (c === 0x5C/* \ */) ? '\x5C' :
            (c === 0x4E/* N */) ? '\x85' :
            (c === 0x5F/* _ */) ? '\xA0' :
            (c === 0x4C/* L */) ? '\u2028' :
            (c === 0x50/* P */) ? '\u2029' : '';
    }

    function charFromCodepoint(c) {
      if (c <= 0xFFFF) {
        return String.fromCharCode(c);
      }
      // Encode UTF-16 surrogate pair
      // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
      return String.fromCharCode(
        ((c - 0x010000) >> 10) + 0xD800,
        ((c - 0x010000) & 0x03FF) + 0xDC00
      );
    }

    var simpleEscapeCheck = new Array(256); // integer, for fast access
    var simpleEscapeMap = new Array(256);
    for (var i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }


    function State(input, options) {
      this.input = input;

      this.filename  = options['filename']  || null;
      this.schema    = options['schema']    || default_full;
      this.onWarning = options['onWarning'] || null;
      this.legacy    = options['legacy']    || false;
      this.json      = options['json']      || false;
      this.listener  = options['listener']  || null;

      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap       = this.schema.compiledTypeMap;

      this.length     = input.length;
      this.position   = 0;
      this.line       = 0;
      this.lineStart  = 0;
      this.lineIndent = 0;

      this.documents = [];

      /*
      this.version;
      this.checkLineBreaks;
      this.tagMap;
      this.anchorMap;
      this.tag;
      this.anchor;
      this.kind;
      this.result;*/

    }


    function generateError(state, message) {
      return new exception(
        message,
        new mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
    }

    function throwError(state, message) {
      throw generateError(state, message);
    }

    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }


    var directiveHandlers = {

      YAML: function handleYamlDirective(state, name, args) {

        var match, major, minor;

        if (state.version !== null) {
          throwError(state, 'duplication of %YAML directive');
        }

        if (args.length !== 1) {
          throwError(state, 'YAML directive accepts exactly one argument');
        }

        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

        if (match === null) {
          throwError(state, 'ill-formed argument of the YAML directive');
        }

        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);

        if (major !== 1) {
          throwError(state, 'unacceptable YAML version of the document');
        }

        state.version = args[0];
        state.checkLineBreaks = (minor < 2);

        if (minor !== 1 && minor !== 2) {
          throwWarning(state, 'unsupported YAML version of the document');
        }
      },

      TAG: function handleTagDirective(state, name, args) {

        var handle, prefix;

        if (args.length !== 2) {
          throwError(state, 'TAG directive accepts exactly two arguments');
        }

        handle = args[0];
        prefix = args[1];

        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
        }

        if (_hasOwnProperty$2.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }

        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
        }

        state.tagMap[handle] = prefix;
      }
    };


    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;

      if (start < end) {
        _result = state.input.slice(start, end);

        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 0x09 ||
                  (0x20 <= _character && _character <= 0x10FFFF))) {
              throwError(state, 'expected valid JSON character');
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, 'the stream contains non-printable characters');
        }

        state.result += _result;
      }
    }

    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;

      if (!common.isObject(source)) {
        throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
      }

      sourceKeys = Object.keys(source);

      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];

        if (!_hasOwnProperty$2.call(destination, key)) {
          destination[key] = source[key];
          overridableKeys[key] = true;
        }
      }
    }

    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index, quantity;

      // The output is a plain object here, so keys can only be strings.
      // We need to convert keyNode to a string, but doing so can hang the process
      // (deeply nested arrays that explode exponentially using aliases).
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);

        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, 'nested arrays are not supported inside keys');
          }

          if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
            keyNode[index] = '[object Object]';
          }
        }
      }

      // Avoid code execution in load() via toString property
      // (still use its own toString for arrays, timestamps,
      // and whatever user schema extensions happen to have @@toStringTag)
      if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
        keyNode = '[object Object]';
      }


      keyNode = String(keyNode);

      if (_result === null) {
        _result = {};
      }

      if (keyTag === 'tag:yaml.org,2002:merge') {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json &&
            !_hasOwnProperty$2.call(overridableKeys, keyNode) &&
            _hasOwnProperty$2.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.position = startPos || state.position;
          throwError(state, 'duplicated mapping key');
        }
        _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
      }

      return _result;
    }

    function readLineBreak(state) {
      var ch;

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x0A/* LF */) {
        state.position++;
      } else if (ch === 0x0D/* CR */) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
          state.position++;
        }
      } else {
        throwError(state, 'a line break is expected');
      }

      state.line += 1;
      state.lineStart = state.position;
    }

    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0,
          ch = state.input.charCodeAt(state.position);

      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (allowComments && ch === 0x23/* # */) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
        }

        if (is_EOL(ch)) {
          readLineBreak(state);

          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;

          while (ch === 0x20/* Space */) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }

      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, 'deficient indentation');
      }

      return lineBreaks;
    }

    function testDocumentSeparator(state) {
      var _position = state.position,
          ch;

      ch = state.input.charCodeAt(_position);

      // Condition state.position === state.lineStart is tested
      // in parent on each call, for efficiency. No needs to test here again.
      if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
          ch === state.input.charCodeAt(_position + 1) &&
          ch === state.input.charCodeAt(_position + 2)) {

        _position += 3;

        ch = state.input.charCodeAt(_position);

        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }

      return false;
    }

    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += ' ';
      } else if (count > 1) {
        state.result += common.repeat('\n', count - 1);
      }
    }


    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding,
          following,
          captureStart,
          captureEnd,
          hasPendingContent,
          _line,
          _lineStart,
          _lineIndent,
          _kind = state.kind,
          _result = state.result,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (is_WS_OR_EOL(ch)      ||
          is_FLOW_INDICATOR(ch) ||
          ch === 0x23/* # */    ||
          ch === 0x26/* & */    ||
          ch === 0x2A/* * */    ||
          ch === 0x21/* ! */    ||
          ch === 0x7C/* | */    ||
          ch === 0x3E/* > */    ||
          ch === 0x27/* ' */    ||
          ch === 0x22/* " */    ||
          ch === 0x25/* % */    ||
          ch === 0x40/* @ */    ||
          ch === 0x60/* ` */) {
        return false;
      }

      if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following) ||
            withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }

      state.kind = 'scalar';
      state.result = '';
      captureStart = captureEnd = state.position;
      hasPendingContent = false;

      while (ch !== 0) {
        if (ch === 0x3A/* : */) {
          following = state.input.charCodeAt(state.position + 1);

          if (is_WS_OR_EOL(following) ||
              withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }

        } else if (ch === 0x23/* # */) {
          preceding = state.input.charCodeAt(state.position - 1);

          if (is_WS_OR_EOL(preceding)) {
            break;
          }

        } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
                   withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;

        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);

          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }

        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }

        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }

        ch = state.input.charCodeAt(++state.position);
      }

      captureSegment(state, captureStart, captureEnd, false);

      if (state.result) {
        return true;
      }

      state.kind = _kind;
      state.result = _result;
      return false;
    }

    function readSingleQuotedScalar(state, nodeIndent) {
      var ch,
          captureStart, captureEnd;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x27/* ' */) {
        return false;
      }

      state.kind = 'scalar';
      state.result = '';
      state.position++;
      captureStart = captureEnd = state.position;

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x27/* ' */) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);

          if (ch === 0x27/* ' */) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }

        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;

        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, 'unexpected end of the document within a single quoted scalar');

        } else {
          state.position++;
          captureEnd = state.position;
        }
      }

      throwError(state, 'unexpected end of the stream within a single quoted scalar');
    }

    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart,
          captureEnd,
          hexLength,
          hexResult,
          tmp,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x22/* " */) {
        return false;
      }

      state.kind = 'scalar';
      state.result = '';
      state.position++;
      captureStart = captureEnd = state.position;

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x22/* " */) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;

        } else if (ch === 0x5C/* \ */) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);

          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);

            // TODO: rework to inline fn with no type cast?
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;

          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;

            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);

              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;

              } else {
                throwError(state, 'expected hexadecimal character');
              }
            }

            state.result += charFromCodepoint(hexResult);

            state.position++;

          } else {
            throwError(state, 'unknown escape sequence');
          }

          captureStart = captureEnd = state.position;

        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;

        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, 'unexpected end of the document within a double quoted scalar');

        } else {
          state.position++;
          captureEnd = state.position;
        }
      }

      throwError(state, 'unexpected end of the stream within a double quoted scalar');
    }

    function readFlowCollection(state, nodeIndent) {
      var readNext = true,
          _line,
          _tag     = state.tag,
          _result,
          _anchor  = state.anchor,
          following,
          terminator,
          isPair,
          isExplicitPair,
          isMapping,
          overridableKeys = {},
          keyNode,
          keyTag,
          valueNode,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x5B/* [ */) {
        terminator = 0x5D;/* ] */
        isMapping = false;
        _result = [];
      } else if (ch === 0x7B/* { */) {
        terminator = 0x7D;/* } */
        isMapping = true;
        _result = {};
      } else {
        return false;
      }

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }

      ch = state.input.charCodeAt(++state.position);

      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);

        ch = state.input.charCodeAt(state.position);

        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? 'mapping' : 'sequence';
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, 'missed comma between flow collection entries');
        }

        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;

        if (ch === 0x3F/* ? */) {
          following = state.input.charCodeAt(state.position + 1);

          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }

        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);

        ch = state.input.charCodeAt(state.position);

        if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }

        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }

        skipSeparationSpace(state, true, nodeIndent);

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x2C/* , */) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }

      throwError(state, 'unexpected end of the stream within a flow collection');
    }

    function readBlockScalar(state, nodeIndent) {
      var captureStart,
          folding,
          chomping       = CHOMPING_CLIP,
          didReadContent = false,
          detectedIndent = false,
          textIndent     = nodeIndent,
          emptyLines     = 0,
          atMoreIndented = false,
          tmp,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x7C/* | */) {
        folding = false;
      } else if (ch === 0x3E/* > */) {
        folding = true;
      } else {
        return false;
      }

      state.kind = 'scalar';
      state.result = '';

      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
          if (CHOMPING_CLIP === chomping) {
            chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, 'repeat of a chomping mode identifier');
          }

        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, 'repeat of an indentation width identifier');
          }

        } else {
          break;
        }
      }

      if (is_WHITE_SPACE(ch)) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (is_WHITE_SPACE(ch));

        if (ch === 0x23/* # */) {
          do { ch = state.input.charCodeAt(++state.position); }
          while (!is_EOL(ch) && (ch !== 0));
        }
      }

      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;

        ch = state.input.charCodeAt(state.position);

        while ((!detectedIndent || state.lineIndent < textIndent) &&
               (ch === 0x20/* Space */)) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }

        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }

        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }

        // End of the scalar.
        if (state.lineIndent < textIndent) {

          // Perform the chomping.
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) { // i.e. only if the scalar is not empty.
              state.result += '\n';
            }
          }

          // Break this `while` cycle and go to the funciton's epilogue.
          break;
        }

        // Folded style: use fancy rules to handle line breaks.
        if (folding) {

          // Lines starting with white space characters (more-indented lines) are not folded.
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            // except for the first content line (cf. Example 8.1)
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

          // End of more-indented block.
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat('\n', emptyLines + 1);

          // Just one line break - perceive as the same line.
          } else if (emptyLines === 0) {
            if (didReadContent) { // i.e. only if we have already read some scalar content.
              state.result += ' ';
            }

          // Several line breaks - perceive as different lines.
          } else {
            state.result += common.repeat('\n', emptyLines);
          }

        // Literal style: just add exact number of line breaks between content lines.
        } else {
          // Keep all line breaks except the header line break.
          state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
        }

        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;

        while (!is_EOL(ch) && (ch !== 0)) {
          ch = state.input.charCodeAt(++state.position);
        }

        captureSegment(state, captureStart, state.position, false);
      }

      return true;
    }

    function readBlockSequence(state, nodeIndent) {
      var _line,
          _tag      = state.tag,
          _anchor   = state.anchor,
          _result   = [],
          following,
          detected  = false,
          ch;

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }

      ch = state.input.charCodeAt(state.position);

      while (ch !== 0) {

        if (ch !== 0x2D/* - */) {
          break;
        }

        following = state.input.charCodeAt(state.position + 1);

        if (!is_WS_OR_EOL(following)) {
          break;
        }

        detected = true;
        state.position++;

        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }

        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);

        ch = state.input.charCodeAt(state.position);

        if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
          throwError(state, 'bad indentation of a sequence entry');
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }

      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'sequence';
        state.result = _result;
        return true;
      }
      return false;
    }

    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following,
          allowCompact,
          _line,
          _pos,
          _tag          = state.tag,
          _anchor       = state.anchor,
          _result       = {},
          overridableKeys = {},
          keyTag        = null,
          keyNode       = null,
          valueNode     = null,
          atExplicitKey = false,
          detected      = false,
          ch;

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }

      ch = state.input.charCodeAt(state.position);

      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; // Save the current line.
        _pos = state.position;

        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

          if (ch === 0x3F/* ? */) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }

            detected = true;
            atExplicitKey = true;
            allowCompact = true;

          } else if (atExplicitKey) {
            // i.e. 0x3A/* : */ === character after the explicit key.
            atExplicitKey = false;
            allowCompact = true;

          } else {
            throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
          }

          state.position += 1;
          ch = following;

        //
        // Implicit notation case. Flow-style node as the key first, then ":", and the value.
        //
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);

            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }

            if (ch === 0x3A/* : */) {
              ch = state.input.charCodeAt(++state.position);

              if (!is_WS_OR_EOL(ch)) {
                throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
              }

              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }

              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;

            } else if (detected) {
              throwError(state, 'can not read an implicit mapping pair; a colon is missed');

            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true; // Keep the result of `composeNode`.
            }

          } else if (detected) {
            throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true; // Keep the result of `composeNode`.
          }

        } else {
          break; // Reading is done. Go to the epilogue.
        }

        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }

          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }

          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }

        if (state.lineIndent > nodeIndent && (ch !== 0)) {
          throwError(state, 'bad indentation of a mapping entry');
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }

      //
      // Epilogue.
      //

      // Special case: last mapping's node contains only the key in explicit notation.
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
      }

      // Expose the resulting mapping.
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'mapping';
        state.result = _result;
      }

      return detected;
    }

    function readTagProperty(state) {
      var _position,
          isVerbatim = false,
          isNamed    = false,
          tagHandle,
          tagName,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x21/* ! */) return false;

      if (state.tag !== null) {
        throwError(state, 'duplication of a tag property');
      }

      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x3C/* < */) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);

      } else if (ch === 0x21/* ! */) {
        isNamed = true;
        tagHandle = '!!';
        ch = state.input.charCodeAt(++state.position);

      } else {
        tagHandle = '!';
      }

      _position = state.position;

      if (isVerbatim) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && ch !== 0x3E/* > */);

        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, 'unexpected end of the stream within a verbatim tag');
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {

          if (ch === 0x21/* ! */) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);

              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, 'named tag handle cannot contain such characters');
              }

              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, 'tag suffix cannot contain exclamation marks');
            }
          }

          ch = state.input.charCodeAt(++state.position);
        }

        tagName = state.input.slice(_position, state.position);

        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, 'tag suffix cannot contain flow indicator characters');
        }
      }

      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, 'tag name cannot contain such characters: ' + tagName);
      }

      if (isVerbatim) {
        state.tag = tagName;

      } else if (_hasOwnProperty$2.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;

      } else if (tagHandle === '!') {
        state.tag = '!' + tagName;

      } else if (tagHandle === '!!') {
        state.tag = 'tag:yaml.org,2002:' + tagName;

      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }

      return true;
    }

    function readAnchorProperty(state) {
      var _position,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x26/* & */) return false;

      if (state.anchor !== null) {
        throwError(state, 'duplication of an anchor property');
      }

      ch = state.input.charCodeAt(++state.position);
      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (state.position === _position) {
        throwError(state, 'name of an anchor node must contain at least one character');
      }

      state.anchor = state.input.slice(_position, state.position);
      return true;
    }

    function readAlias(state) {
      var _position, alias,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x2A/* * */) return false;

      ch = state.input.charCodeAt(++state.position);
      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (state.position === _position) {
        throwError(state, 'name of an alias node must contain at least one character');
      }

      alias = state.input.slice(_position, state.position);

      if (!state.anchorMap.hasOwnProperty(alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }

      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }

    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles,
          allowBlockScalars,
          allowBlockCollections,
          indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
          atNewLine  = false,
          hasContent = false,
          typeIndex,
          typeQuantity,
          type,
          flowIndent,
          blockIndent;

      if (state.listener !== null) {
        state.listener('open', state);
      }

      state.tag    = null;
      state.anchor = null;
      state.kind   = null;
      state.result = null;

      allowBlockStyles = allowBlockScalars = allowBlockCollections =
        CONTEXT_BLOCK_OUT === nodeContext ||
        CONTEXT_BLOCK_IN  === nodeContext;

      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;

          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }

      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;

            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }

      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }

      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }

        blockIndent = state.position - state.lineStart;

        if (indentStatus === 1) {
          if (allowBlockCollections &&
              (readBlockSequence(state, blockIndent) ||
               readBlockMapping(state, blockIndent, flowIndent)) ||
              readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
                readSingleQuotedScalar(state, flowIndent) ||
                readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;

            } else if (readAlias(state)) {
              hasContent = true;

              if (state.tag !== null || state.anchor !== null) {
                throwError(state, 'alias node should not have any properties');
              }

            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;

              if (state.tag === null) {
                state.tag = '?';
              }
            }

            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          // Special case: block sequences are allowed to have same indentation level as the parent.
          // http://www.yaml.org/spec/1.2/spec.html#id2799784
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }

      if (state.tag !== null && state.tag !== '!') {
        if (state.tag === '?') {
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state.implicitTypes[typeIndex];

            // Implicit resolving is not allowed for non-scalar types, and '?'
            // non-specific tag is only assigned to plain scalars. So, it isn't
            // needed to check for 'kind' conformity.

            if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
              state.result = type.construct(state.result);
              state.tag = type.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty$2.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
          type = state.typeMap[state.kind || 'fallback'][state.tag];

          if (state.result !== null && type.kind !== state.kind) {
            throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
          }

          if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
            throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
          } else {
            state.result = type.construct(state.result);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else {
          throwError(state, 'unknown tag !<' + state.tag + '>');
        }
      }

      if (state.listener !== null) {
        state.listener('close', state);
      }
      return state.tag !== null ||  state.anchor !== null || hasContent;
    }

    function readDocument(state) {
      var documentStart = state.position,
          _position,
          directiveName,
          directiveArgs,
          hasDirectives = false,
          ch;

      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = {};
      state.anchorMap = {};

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);

        ch = state.input.charCodeAt(state.position);

        if (state.lineIndent > 0 || ch !== 0x25/* % */) {
          break;
        }

        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];

        if (directiveName.length < 1) {
          throwError(state, 'directive name must not be less than one character in length');
        }

        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          if (ch === 0x23/* # */) {
            do { ch = state.input.charCodeAt(++state.position); }
            while (ch !== 0 && !is_EOL(ch));
            break;
          }

          if (is_EOL(ch)) break;

          _position = state.position;

          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          directiveArgs.push(state.input.slice(_position, state.position));
        }

        if (ch !== 0) readLineBreak(state);

        if (_hasOwnProperty$2.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }

      skipSeparationSpace(state, true, -1);

      if (state.lineIndent === 0 &&
          state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
          state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
          state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);

      } else if (hasDirectives) {
        throwError(state, 'directives end mark is expected');
      }

      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);

      if (state.checkLineBreaks &&
          PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, 'non-ASCII line breaks are interpreted as content');
      }

      state.documents.push(state.result);

      if (state.position === state.lineStart && testDocumentSeparator(state)) {

        if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }

      if (state.position < (state.length - 1)) {
        throwError(state, 'end of the stream or a document separator is expected');
      } else {
        return;
      }
    }


    function loadDocuments(input, options) {
      input = String(input);
      options = options || {};

      if (input.length !== 0) {

        // Add tailing `\n` if not exists
        if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
            input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
          input += '\n';
        }

        // Strip BOM
        if (input.charCodeAt(0) === 0xFEFF) {
          input = input.slice(1);
        }
      }

      var state = new State(input, options);

      // Use 0 as string terminator. That significantly simplifies bounds check.
      state.input += '\0';

      while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
        state.lineIndent += 1;
        state.position += 1;
      }

      while (state.position < (state.length - 1)) {
        readDocument(state);
      }

      return state.documents;
    }


    function loadAll(input, iterator, options) {
      var documents = loadDocuments(input, options), index, length;

      if (typeof iterator !== 'function') {
        return documents;
      }

      for (index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }


    function load(input, options) {
      var documents = loadDocuments(input, options);

      if (documents.length === 0) {
        /*eslint-disable no-undefined*/
        return undefined;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new exception('expected a single document in the stream, but found more');
    }


    function safeLoadAll(input, output, options) {
      if (typeof output === 'function') {
        loadAll(input, output, common.extend({ schema: default_safe }, options));
      } else {
        return loadAll(input, common.extend({ schema: default_safe }, options));
      }
    }


    function safeLoad(input, options) {
      return load(input, common.extend({ schema: default_safe }, options));
    }


    var loadAll_1     = loadAll;
    var load_1        = load;
    var safeLoadAll_1 = safeLoadAll;
    var safeLoad_1    = safeLoad;

    var loader = {
    	loadAll: loadAll_1,
    	load: load_1,
    	safeLoadAll: safeLoadAll_1,
    	safeLoad: safeLoad_1
    };

    /*eslint-disable no-use-before-define*/






    var _toString$2       = Object.prototype.toString;
    var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;

    var CHAR_TAB                  = 0x09; /* Tab */
    var CHAR_LINE_FEED            = 0x0A; /* LF */
    var CHAR_SPACE                = 0x20; /* Space */
    var CHAR_EXCLAMATION          = 0x21; /* ! */
    var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
    var CHAR_SHARP                = 0x23; /* # */
    var CHAR_PERCENT              = 0x25; /* % */
    var CHAR_AMPERSAND            = 0x26; /* & */
    var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
    var CHAR_ASTERISK             = 0x2A; /* * */
    var CHAR_COMMA                = 0x2C; /* , */
    var CHAR_MINUS                = 0x2D; /* - */
    var CHAR_COLON                = 0x3A; /* : */
    var CHAR_GREATER_THAN         = 0x3E; /* > */
    var CHAR_QUESTION             = 0x3F; /* ? */
    var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
    var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
    var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
    var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
    var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
    var CHAR_VERTICAL_LINE        = 0x7C; /* | */
    var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

    var ESCAPE_SEQUENCES = {};

    ESCAPE_SEQUENCES[0x00]   = '\\0';
    ESCAPE_SEQUENCES[0x07]   = '\\a';
    ESCAPE_SEQUENCES[0x08]   = '\\b';
    ESCAPE_SEQUENCES[0x09]   = '\\t';
    ESCAPE_SEQUENCES[0x0A]   = '\\n';
    ESCAPE_SEQUENCES[0x0B]   = '\\v';
    ESCAPE_SEQUENCES[0x0C]   = '\\f';
    ESCAPE_SEQUENCES[0x0D]   = '\\r';
    ESCAPE_SEQUENCES[0x1B]   = '\\e';
    ESCAPE_SEQUENCES[0x22]   = '\\"';
    ESCAPE_SEQUENCES[0x5C]   = '\\\\';
    ESCAPE_SEQUENCES[0x85]   = '\\N';
    ESCAPE_SEQUENCES[0xA0]   = '\\_';
    ESCAPE_SEQUENCES[0x2028] = '\\L';
    ESCAPE_SEQUENCES[0x2029] = '\\P';

    var DEPRECATED_BOOLEANS_SYNTAX = [
      'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
      'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
    ];

    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;

      if (map === null) return {};

      result = {};
      keys = Object.keys(map);

      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);

        if (tag.slice(0, 2) === '!!') {
          tag = 'tag:yaml.org,2002:' + tag.slice(2);
        }
        type = schema.compiledTypeMap['fallback'][tag];

        if (type && _hasOwnProperty$3.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }

        result[tag] = style;
      }

      return result;
    }

    function encodeHex(character) {
      var string, handle, length;

      string = character.toString(16).toUpperCase();

      if (character <= 0xFF) {
        handle = 'x';
        length = 2;
      } else if (character <= 0xFFFF) {
        handle = 'u';
        length = 4;
      } else if (character <= 0xFFFFFFFF) {
        handle = 'U';
        length = 8;
      } else {
        throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
      }

      return '\\' + handle + common.repeat('0', length - string.length) + string;
    }

    function State$1(options) {
      this.schema        = options['schema'] || default_full;
      this.indent        = Math.max(1, (options['indent'] || 2));
      this.noArrayIndent = options['noArrayIndent'] || false;
      this.skipInvalid   = options['skipInvalid'] || false;
      this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
      this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
      this.sortKeys      = options['sortKeys'] || false;
      this.lineWidth     = options['lineWidth'] || 80;
      this.noRefs        = options['noRefs'] || false;
      this.noCompatMode  = options['noCompatMode'] || false;
      this.condenseFlow  = options['condenseFlow'] || false;

      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;

      this.tag = null;
      this.result = '';

      this.duplicates = [];
      this.usedDuplicates = null;
    }

    // Indents every line in a string. Empty lines (\n only) are not indented.
    function indentString(string, spaces) {
      var ind = common.repeat(' ', spaces),
          position = 0,
          next = -1,
          result = '',
          line,
          length = string.length;

      while (position < length) {
        next = string.indexOf('\n', position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }

        if (line.length && line !== '\n') result += ind;

        result += line;
      }

      return result;
    }

    function generateNextLine(state, level) {
      return '\n' + common.repeat(' ', state.indent * level);
    }

    function testImplicitResolving(state, str) {
      var index, length, type;

      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];

        if (type.resolve(str)) {
          return true;
        }
      }

      return false;
    }

    // [33] s-white ::= s-space | s-tab
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }

    // Returns true if the character can be printed without escaping.
    // From YAML 1.2: "any allowed characters known to be non-printable
    // should also be escaped. [However,] This isn’t mandatory"
    // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
    function isPrintable(c) {
      return  (0x00020 <= c && c <= 0x00007E)
          || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
          || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
          ||  (0x10000 <= c && c <= 0x10FFFF);
    }

    // Simplified test for values allowed after the first character in plain style.
    function isPlainSafe(c) {
      // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
      // where nb-char ::= c-printable - b-char - c-byte-order-mark.
      return isPrintable(c) && c !== 0xFEFF
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
        // - ":" - "#"
        && c !== CHAR_COLON
        && c !== CHAR_SHARP;
    }

    // Simplified test for values allowed as the first character in plain style.
    function isPlainSafeFirst(c) {
      // Uses a subset of ns-char - c-indicator
      // where ns-char = nb-char - s-white.
      return isPrintable(c) && c !== 0xFEFF
        && !isWhitespace(c) // - s-white
        // - (c-indicator ::=
        // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
        && c !== CHAR_MINUS
        && c !== CHAR_QUESTION
        && c !== CHAR_COLON
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
        // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
        && c !== CHAR_SHARP
        && c !== CHAR_AMPERSAND
        && c !== CHAR_ASTERISK
        && c !== CHAR_EXCLAMATION
        && c !== CHAR_VERTICAL_LINE
        && c !== CHAR_GREATER_THAN
        && c !== CHAR_SINGLE_QUOTE
        && c !== CHAR_DOUBLE_QUOTE
        // | “%” | “@” | “`”)
        && c !== CHAR_PERCENT
        && c !== CHAR_COMMERCIAL_AT
        && c !== CHAR_GRAVE_ACCENT;
    }

    // Determines whether block indentation indicator is required.
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }

    var STYLE_PLAIN   = 1,
        STYLE_SINGLE  = 2,
        STYLE_LITERAL = 3,
        STYLE_FOLDED  = 4,
        STYLE_DOUBLE  = 5;

    // Determines which scalar styles are possible and returns the preferred style.
    // lineWidth = -1 => no limit.
    // Pre-conditions: str.length > 0.
    // Post-conditions:
    //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
    //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
    //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char;
      var hasLineBreak = false;
      var hasFoldableLine = false; // only checked if shouldTrackWidth
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1; // count the first line correctly
      var plain = isPlainSafeFirst(string.charCodeAt(0))
              && !isWhitespace(string.charCodeAt(string.length - 1));

      if (singleLineOnly) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          plain = plain && isPlainSafe(char);
        }
      } else {
        // Case: block styles permitted.
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            // Check if any line can be folded.
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine ||
                // Foldable line = too long, and not more-indented.
                (i - previousLineBreak - 1 > lineWidth &&
                 string[previousLineBreak + 1] !== ' ');
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          plain = plain && isPlainSafe(char);
        }
        // in case the end is missing a \n
        hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
          (i - previousLineBreak - 1 > lineWidth &&
           string[previousLineBreak + 1] !== ' '));
      }
      // Although every style can represent \n without escaping, prefer block styles
      // for multiline, since they're more readable and they don't add empty lines.
      // Also prefer folding a super-long line.
      if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        return plain && !testAmbiguousType(string)
          ? STYLE_PLAIN : STYLE_SINGLE;
      }
      // Edge case: block indentation indicator can only have one digit.
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      // At this point we know block styles are valid.
      // Prefer literal style unless we want to fold.
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }

    // Note: line breaking/folding is implemented for only the folded style.
    // NB. We drop the last trailing newline (if any) of a returned block scalar
    //  since the dumper adds its own newline. This always works:
    //    • No ending newline => unaffected; already using strip "-" chomping.
    //    • Ending newline    => removed then restored.
    //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
    function writeScalar(state, string, level, iskey) {
      state.dump = (function () {
        if (string.length === 0) {
          return "''";
        }
        if (!state.noCompatMode &&
            DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
          return "'" + string + "'";
        }

        var indent = state.indent * Math.max(1, level); // no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth = state.lineWidth === -1
          ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        var singleLineOnly = iskey
          // No block styles in flow mode.
          || (state.flowLevel > -1 && level >= state.flowLevel);
        function testAmbiguity(string) {
          return testImplicitResolving(state, string);
        }

        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return '|' + blockHeader(string, state.indent)
              + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return '>' + blockHeader(string, state.indent)
              + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string) + '"';
          default:
            throw new exception('impossible error: invalid scalar style');
        }
      }());
    }

    // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

      // note the special case: the string '\n' counts as a "trailing" empty line.
      var clip =          string[string.length - 1] === '\n';
      var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
      var chomp = keep ? '+' : (clip ? '' : '-');

      return indentIndicator + chomp + '\n';
    }

    // (See the note for writeScalar.)
    function dropEndingNewline(string) {
      return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
    }

    // Note: a long line without a suitable break point will exceed the width limit.
    // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
    function foldString(string, width) {
      // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
      // unless they're before or after a more-indented line, or at the very
      // beginning or end, in which case $k$ maps to $k$.
      // Therefore, parse each chunk as newline(s) followed by a content line.
      var lineRe = /(\n+)([^\n]*)/g;

      // first line (possibly an empty line)
      var result = (function () {
        var nextLF = string.indexOf('\n');
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      }());
      // If we haven't reached the first content line yet, don't add an extra \n.
      var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
      var moreIndented;

      // rest of the lines
      var match;
      while ((match = lineRe.exec(string))) {
        var prefix = match[1], line = match[2];
        moreIndented = (line[0] === ' ');
        result += prefix
          + (!prevMoreIndented && !moreIndented && line !== ''
            ? '\n' : '')
          + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }

      return result;
    }

    // Greedy line breaking.
    // Picks the longest line under the limit each time,
    // otherwise settles for the shortest line over the limit.
    // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
    function foldLine(line, width) {
      if (line === '' || line[0] === ' ') return line;

      // Since a more-indented line adds a \n, breaks can't be followed by a space.
      var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
      var match;
      // start is an inclusive index. end, curr, and next are exclusive.
      var start = 0, end, curr = 0, next = 0;
      var result = '';

      // Invariants: 0 <= start <= length-1.
      //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
      // Inside the loop:
      //   A match implies length >= 2, so curr and next are <= length-2.
      while ((match = breakRe.exec(line))) {
        next = match.index;
        // maintain invariant: curr - start <= width
        if (next - start > width) {
          end = (curr > start) ? curr : next; // derive end <= length-2
          result += '\n' + line.slice(start, end);
          // skip the space that was output as \n
          start = end + 1;                    // derive start <= length-1
        }
        curr = next;
      }

      // By the invariants, start <= length-1, so there is something left over.
      // It is either the whole string or a part starting from non-whitespace.
      result += '\n';
      // Insert a break if the remainder is too long and there is a break available.
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }

      return result.slice(1); // drop extra \n joiner
    }

    // Escapes a double-quoted string.
    function escapeString(string) {
      var result = '';
      var char, nextChar;
      var escapeSeq;

      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
        if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
          nextChar = string.charCodeAt(i + 1);
          if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
            // Combine the surrogate pair and store it escaped.
            result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
            // Advance index one extra since we already used that char here.
            i++; continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char)
          ? string[i]
          : escapeSeq || encodeHex(char);
      }

      return result;
    }

    function writeFlowSequence(state, level, object) {
      var _result = '',
          _tag    = state.tag,
          index,
          length;

      for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level, object[index], false, false)) {
          if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
          _result += state.dump;
        }
      }

      state.tag = _tag;
      state.dump = '[' + _result + ']';
    }

    function writeBlockSequence(state, level, object, compact) {
      var _result = '',
          _tag    = state.tag,
          index,
          length;

      for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level + 1, object[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state, level);
          }

          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += '-';
          } else {
            _result += '- ';
          }

          _result += state.dump;
        }
      }

      state.tag = _tag;
      state.dump = _result || '[]'; // Empty sequence if no valid values.
    }

    function writeFlowMapping(state, level, object) {
      var _result       = '',
          _tag          = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          pairBuffer;

      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = state.condenseFlow ? '"' : '';

        if (index !== 0) pairBuffer += ', ';

        objectKey = objectKeyList[index];
        objectValue = object[objectKey];

        if (!writeNode(state, level, objectKey, false, false)) {
          continue; // Skip this pair because of invalid key;
        }

        if (state.dump.length > 1024) pairBuffer += '? ';

        pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

        if (!writeNode(state, level, objectValue, false, false)) {
          continue; // Skip this pair because of invalid value.
        }

        pairBuffer += state.dump;

        // Both key and value are valid.
        _result += pairBuffer;
      }

      state.tag = _tag;
      state.dump = '{' + _result + '}';
    }

    function writeBlockMapping(state, level, object, compact) {
      var _result       = '',
          _tag          = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          explicitPair,
          pairBuffer;

      // Allow sorting keys so that the output file is deterministic
      if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort();
      } else if (typeof state.sortKeys === 'function') {
        // Custom sort function
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        // Something is wrong
        throw new exception('sortKeys must be a boolean or a function');
      }

      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = '';

        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state, level);
        }

        objectKey = objectKeyList[index];
        objectValue = object[objectKey];

        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue; // Skip this pair because of invalid key.
        }

        explicitPair = (state.tag !== null && state.tag !== '?') ||
                       (state.dump && state.dump.length > 1024);

        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += '?';
          } else {
            pairBuffer += '? ';
          }
        }

        pairBuffer += state.dump;

        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }

        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue; // Skip this pair because of invalid value.
        }

        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ':';
        } else {
          pairBuffer += ': ';
        }

        pairBuffer += state.dump;

        // Both key and value are valid.
        _result += pairBuffer;
      }

      state.tag = _tag;
      state.dump = _result || '{}'; // Empty mapping if no valid pairs.
    }

    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;

      typeList = explicit ? state.explicitTypes : state.implicitTypes;

      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];

        if ((type.instanceOf  || type.predicate) &&
            (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
            (!type.predicate  || type.predicate(object))) {

          state.tag = explicit ? type.tag : '?';

          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;

            if (_toString$2.call(type.represent) === '[object Function]') {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty$3.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
            }

            state.dump = _result;
          }

          return true;
        }
      }

      return false;
    }

    // Serializes `object` and writes it to global `result`.
    // Returns true on success, or false on invalid object.
    //
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null;
      state.dump = object;

      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }

      var type = _toString$2.call(state.dump);

      if (block) {
        block = (state.flowLevel < 0 || state.flowLevel > level);
      }

      var objectOrArray = type === '[object Object]' || type === '[object Array]',
          duplicateIndex,
          duplicate;

      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }

      if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
        compact = false;
      }

      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = '*ref_' + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === '[object Object]') {
          if (block && (Object.keys(state.dump).length !== 0)) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
            }
          }
        } else if (type === '[object Array]') {
          var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
          if (block && (state.dump.length !== 0)) {
            writeBlockSequence(state, arrayLevel, state.dump, compact);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
            }
          }
        } else if (type === '[object String]') {
          if (state.tag !== '?') {
            writeScalar(state, state.dump, level, iskey);
          }
        } else {
          if (state.skipInvalid) return false;
          throw new exception('unacceptable kind of an object to dump ' + type);
        }

        if (state.tag !== null && state.tag !== '?') {
          state.dump = '!<' + state.tag + '> ' + state.dump;
        }
      }

      return true;
    }

    function getDuplicateReferences(object, state) {
      var objects = [],
          duplicatesIndexes = [],
          index,
          length;

      inspectNode(object, objects, duplicatesIndexes);

      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }

    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList,
          index,
          length;

      if (object !== null && typeof object === 'object') {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);

          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);

            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }

    function dump(input, options) {
      options = options || {};

      var state = new State$1(options);

      if (!state.noRefs) getDuplicateReferences(input, state);

      if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

      return '';
    }

    function safeDump(input, options) {
      return dump(input, common.extend({ schema: default_safe }, options));
    }

    var dump_1     = dump;
    var safeDump_1 = safeDump;

    var dumper = {
    	dump: dump_1,
    	safeDump: safeDump_1
    };

    function deprecated(name) {
      return function () {
        throw new Error('Function ' + name + ' is deprecated and cannot be used.');
      };
    }


    var Type$1                = type;
    var Schema$1              = schema;
    var FAILSAFE_SCHEMA     = failsafe;
    var JSON_SCHEMA         = json;
    var CORE_SCHEMA         = core;
    var DEFAULT_SAFE_SCHEMA = default_safe;
    var DEFAULT_FULL_SCHEMA = default_full;
    var load$1                = loader.load;
    var loadAll$1             = loader.loadAll;
    var safeLoad$1            = loader.safeLoad;
    var safeLoadAll$1         = loader.safeLoadAll;
    var dump$1                = dumper.dump;
    var safeDump$1            = dumper.safeDump;
    var YAMLException$1       = exception;

    // Deprecated schema names from JS-YAML 2.0.x
    var MINIMAL_SCHEMA = failsafe;
    var SAFE_SCHEMA    = default_safe;
    var DEFAULT_SCHEMA = default_full;

    // Deprecated functions from JS-YAML 1.x.x
    var scan           = deprecated('scan');
    var parse          = deprecated('parse');
    var compose        = deprecated('compose');
    var addConstructor = deprecated('addConstructor');

    var jsYaml = {
    	Type: Type$1,
    	Schema: Schema$1,
    	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
    	JSON_SCHEMA: JSON_SCHEMA,
    	CORE_SCHEMA: CORE_SCHEMA,
    	DEFAULT_SAFE_SCHEMA: DEFAULT_SAFE_SCHEMA,
    	DEFAULT_FULL_SCHEMA: DEFAULT_FULL_SCHEMA,
    	load: load$1,
    	loadAll: loadAll$1,
    	safeLoad: safeLoad$1,
    	safeLoadAll: safeLoadAll$1,
    	dump: dump$1,
    	safeDump: safeDump$1,
    	YAMLException: YAMLException$1,
    	MINIMAL_SCHEMA: MINIMAL_SCHEMA,
    	SAFE_SCHEMA: SAFE_SCHEMA,
    	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
    	scan: scan,
    	parse: parse,
    	compose: compose,
    	addConstructor: addConstructor
    };

    var jsYaml$1 = jsYaml;

    var rul;
    function backLink(id, list, to, field) {
        if (!list)
            return;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var key = list_1[_i];
            var back = to[key];
            back[field] = back[field] || [];
            back[field].push(id);
        }
    }
    function parseYaml(text) {
        var data = [];
        var reg = /^FILE: (.+)\n/gm;
        var matches = [];
        var match;
        while ((match = reg.exec(text)))
            matches.push(match);
        for (var i = 0; i < matches.length; i++) {
            var title = matches[i][1];
            var file = void 0;
            if (i < matches.length - 1) {
                file = text.substr(matches[i].index + 7 + title.length, matches[i + 1].index - matches[i].index - 7 - title.length);
            }
            else
                file = text.substr(matches[i].index + 7 + title.length);
            if (file.substr(1, 3) == "п»ї")
                file = file.substr(4);
            var parsed = void 0;
            try {
                parsed = jsYaml$1.load(file, { json: true, filename: title });
            }
            catch (e) {
                console.log(e.message);
            }
            if (parsed)
                data.push(parsed);
        }
        return data;
    }
    var Search = /** @class */ (function () {
        function Search() {
            this.articles = new Fuse(rul.articlesOrder, {
                keys: ["id", "type", "title", "text"],
                tokenize: true,
                matchAllTokens: true,
                distance: 10,
                threshold: 0.1
            });
        }
        Search.prototype.findArticles = function (query) {
            return this.articles.search(query);
        };
        return Search;
    }());
    var Manufacture = /** @class */ (function () {
        function Manufacture(raw) {
            Object.assign(this, raw);
            rul.manufacture[this.name] = this;
            if (this.requires) {
                for (var _i = 0, _a = this.requires; _i < _a.length; _i++) {
                    var resName = _a[_i];
                    var res = rul.research[resName];
                    if (!res.manufacture)
                        res.manufacture = [];
                    res.manufacture.push(this.name);
                }
            }
            if (this.producedItems) {
                for (var _b = 0, _c = Object.keys(this.producedItems); _b < _c.length; _b++) {
                    var itemName = _c[_b];
                    var item = rul.items[itemName];
                    if (!item)
                        continue;
                    if (!item.manufacture)
                        item.manufacture = {};
                    item.manufacture[this.name] = this.producedItems[itemName];
                }
            }
            if (this.requiredItems) {
                for (var _d = 0, _e = Object.keys(this.requiredItems); _d < _e.length; _d++) {
                    var itemName = _e[_d];
                    var item = rul.items[itemName];
                    if (!item)
                        continue;
                    if (!item.componentOf)
                        item.componentOf = {};
                    item.componentOf[this.name] = this.requiredItems[itemName];
                }
            }
            if (this.randomProducedItems) {
                this.chanceSum = 0;
                for (var _f = 0, _g = this.randomProducedItems; _f < _g.length; _f++) {
                    var chance = _g[_f];
                    this.chanceSum += chance[0];
                }
            }
            Service.add("allowsManufacture", this.name, this.requiresBaseFunc);
            Article.create({
                id: this.name,
                section: "MANUFACTURE",
                type_id: "MANUFACTURE"
            });
        }
        return Manufacture;
    }());
    var Research = /** @class */ (function () {
        function Research(raw) {
            Object.assign(this, raw);
            rul.research[this.name] = this;
            Service.add("allowsResearching", this.name, this.requiresBaseFunc);
            Article.create({
                id: this.name,
                section: "RESEARCH",
                type_id: "RESEARCH"
            });
        }
        return Research;
    }());
    var Service = /** @class */ (function () {
        function Service(id) {
            this.id = id;
            Article.create({
                id: id,
                type_id: "SERVICES",
                section: "SERVICES"
            });
        }
        Service.add = function (prop, id, entries) {
            if (entries) {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var s = entries_1[_i];
                    if (!(s in rul.baseServices))
                        rul.baseServices[s] = new Service(s);
                    if (!(prop in rul.baseServices[s]))
                        rul.baseServices[s][prop] = [];
                    rul.baseServices[s][prop].push(id);
                }
            }
        };
        return Service;
    }());
    var AlienDeployment = /** @class */ (function () {
        function AlienDeployment(raw) {
            Object.assign(this, raw);
            rul.alienDeployments[this.type] = this;
            var condition = rul.startingConditions[this.startingCondition];
            if (condition)
                condition.deployments.push(this.type);
        }
        return AlienDeployment;
    }());
    var CraftWeapon = /** @class */ (function () {
        function CraftWeapon(raw) {
            Object.assign(this, raw);
            rul.craftWeapons[this.type] = this;
            Service.add("canBuy", this.type, this.requiresBuyBaseFunc);
        }
        return CraftWeapon;
    }());
    var Craft = /** @class */ (function () {
        function Craft(raw) {
            this.startingConditions = [];
            Object.assign(this, raw);
            rul.crafts[this.type] = this;
        }
        return Craft;
    }());
    var Ufo = /** @class */ (function () {
        function Ufo(raw) {
            Object.assign(this, raw);
            rul.ufos[this.type] = this;
        }
        return Ufo;
    }());
    var Facility = /** @class */ (function () {
        function Facility(raw) {
            Object.assign(this, raw);
            rul.facilities[this.type] = this;
            Service.add("providedBy", this.type, this.provideBaseFunc);
            Service.add("allowsBuilding", this.type, this.requiresBaseFunc);
            Service.add("forbidsBuilding", this.type, this.forbiddenBaseFunc);
        }
        return Facility;
    }());
    var StartingConditions = /** @class */ (function () {
        function StartingConditions(raw) {
            this.allowedCraft = [];
            this.allowedItemCategories = [];
            this.allowedArmors = [];
            this.allowedVehicles = [];
            this.deployments = [];
            Object.assign(this, raw);
            rul.startingConditions[this.type] = this;
            rul.lang[this.type] = rul.decamelize(this.type.substr(11));
            for (var _i = 0, _a = this.allowedCraft; _i < _a.length; _i++) {
                var craft = _a[_i];
                rul.crafts[craft].startingConditions.push(this.type);
            }
            Article.create({
                id: this.type,
                section: "CONDITIONS",
                type_id: "CONDITIONS"
            });
        }
        return StartingConditions;
    }());
    var Unit = /** @class */ (function () {
        function Unit(raw) {
            Object.assign(this, raw);
            rul.units[this.type] = this;
            var armor = rul.armors[raw.armor];
            if (armor) {
                armor.users = armor.users || [];
                armor.users.push(this.type);
            }
        }
        return Unit;
    }());
    var Attack = /** @class */ (function () {
        function Attack(item, mode) {
            this.mode = mode;
            this.possible = false;
            this.flatTime = false;
            this.shots = 1;
            this.pellets = 1;
            var capMode = mode.charAt(0).toUpperCase() + mode.substr(1);
            var isDefaultAttack = (mode == "ammo" && item.battleType == 2) ||
                (mode == "melee" && item.battleType == 3) ||
                (mode == "psi" && item.battleType == 9) ||
                (mode == "throw" && [4, 5].includes(item.battleType));
            var exists = item["accuracy" + capMode] || isDefaultAttack;
            if (!exists)
                return null;
            if (mode == "melee" && item.battleType != 3) {
                this.damage = item.meleePower;
                this.damageBonus = item.meleeBonus;
                this.damageType = item.meleeType;
            }
            else if (!item.compatibleAmmo) {
                this.damage = item.power;
                this.damageBonus = item.damageBonus;
                this.damageType = item.damageType;
            }
            this.pellets = item.shotgunPellets || 1;
            this.shots = mode == "auto" ? item.autoShots || 3 : 1;
            this.name = mode.substr(0, 1).toUpperCase() + mode.substr(1);
            var confId = "conf" + this.name;
            if (confId in item) {
                var conf = item[confId];
                if (conf.name)
                    this.name = rul.str(conf.name);
                if (conf.shots)
                    this.shots = conf.shots;
                delete item[confId];
            }
            if (item[mode + "AttackName"])
                this.name = rul.str(item[mode + "AttackName"]);
            if (mode == "melee")
                this.alter = item.meleeAlter;
            if (item.battleType == 3 || mode != "melee")
                this.alter = item.damageAlter;
            if (mode != "ammo") {
                if (((mode == "melee" && item.battleType == 3) || mode != "melee") &&
                    item.flatRate)
                    this.flatTime = item.flatRate;
                if (item["flat" + capMode] && item["flat" + capMode].time)
                    this.flatTime = true;
                if (capMode == "Psi")
                    capMode = "Use";
                this.cost = this.cost = item["cost" + capMode] || {
                    time: item["tu" + capMode],
                    energy: 0
                };
                this.accuracy = item["accuracy" + capMode] || 100;
                var accuracyMultiplier = mode == "throw"
                    ? item.throwMultiplier
                    : mode == "melee"
                        ? item.meleeMultiplier
                        : item.accuracyMultiplier;
                if (!accuracyMultiplier) {
                    var defaultAccuracyStat = mode == "throw" ? "throwing" : mode == "melee" ? "melee" : "firing";
                    accuracyMultiplier = {};
                    accuracyMultiplier[defaultAccuracyStat] = 1;
                }
                this.accuracyMultiplier = accuracyMultiplier;
            }
            if (this.alter && this.alter.ResistType) {
                this.damageType = this.alter.ResistType;
            }
            if (mode + "Range" in item) {
                this.alter = this.alter || {};
                this.alter.range = item[mode + "Range"];
            }
            this.possible = true;
        }
        return Attack;
    }());
    var Article = /** @class */ (function () {
        function Article(raw) {
            this.id = raw.id;
            this.title = raw.title || rul.str(raw.id);
            rul.lang[this.id] = this.title;
            this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
            this.image_id = raw.image_id;
            this.type_id = raw.type_id || "-1";
            rul.articles[this.id] = this;
            var id = raw.id;
            rul.articles[id] = this;
            if (raw.section) {
                rul.addToSection(this, raw.section);
            }
        }
        Article.create = function (raw) {
            if (raw.id in rul.articles) {
                var article = rul.articles[raw.id];
                if (raw.section && article.section != raw.section) {
                    rul.sections[raw.section].add(article);
                }
                return article;
            }
            return new Article(raw);
        };
        return Article;
    }());
    var Section = /** @class */ (function () {
        function Section(id, type_id) {
            if (type_id === void 0) { type_id = "PEDIA"; }
            this.id = id;
            this.type_id = type_id;
            this._articles = [];
            rul.sections[id] = this;
            if (this.isType()) {
                rul.typeSectionsOrder.push(this);
            }
            else {
                rul.sectionsOrder.push(this);
            }
            this.title = rul.str(id);
            Article.create({ id: id, section: id, type_id: type_id });
        }
        Object.defineProperty(Section.prototype, "articles", {
            get: function () {
                return this._articles;
            },
            enumerable: true,
            configurable: true
        });
        Section.prototype.isType = function () {
            return this.type_id == "TYPE";
        };
        Section.prototype.add = function (article) {
            if (!this._articles.includes(article))
                this._articles.push(article);
            if (!article.section)
                article.section = this;
        };
        return Section;
    }());
    var Sprite = /** @class */ (function () {
        function Sprite(raw) {
            this.id = raw.type || raw.typeSingle;
            if (raw.files) {
                this.path = raw.files[0];
                this.extra = raw.files;
            }
            if (raw.fileSingle)
                this.path = raw.fileSingle;
        }
        return Sprite;
    }());
    var Armor = /** @class */ (function () {
        function Armor(raw) {
            this.dollSprites = {};
            this.armor = {};
            Object.assign(this, raw);
            rul.armors[raw.type] = this;
            if (this.layersDefinition) {
                var prefix = this.layersDefaultPrefix;
                for (var body in this.layersDefinition) {
                    var layersDef = this.layersDefinition[body];
                    var layers = [];
                    for (var layer in layersDef) {
                        var name_1 = layersDef[layer];
                        if (name_1 && name_1.length) {
                            var id = prefix + "__" + layer + "__" + name_1;
                            layers.push(rul.sprite(id));
                        }
                    }
                    this.dollSprites[body] = layers;
                }
            }
            else if (this.spriteInv) {
                var name_2 = this.spriteInv;
                var l = name_2.length;
                if (this.spriteInv + ".SPK" in rul.sprites) {
                    this.dollSprites = {
                        0: [rul.path + rul.sprites[this.spriteInv + ".SPK"].path]
                    };
                }
                else {
                    for (var s in rul.sprites) {
                        if (s.substr(0, l) == name_2) {
                            this.dollSprites[s.substr(l, s.length - l - 4)] = [
                                rul.path + rul.sprites[s].path
                            ];
                        }
                    }
                }
            }
            this.armor = {
                Front: this.frontArmor,
                Side: this.sideArmor,
                Rear: this.rearArmor,
                Under: this.underArmor
            };
            if (this.storeItem && rul.items[this.storeItem]) {
                var item = rul.items[this.storeItem];
                if (!item.armors)
                    item.armors = [];
                item.armors.push(this.type);
            }
        }
        return Armor;
    }());
    var Item = /** @class */ (function () {
        function Item(raw) {
            this.invWidth = 1;
            this.invHeight = 1;
            Object.assign(this, raw);
            rul.items[raw.type] = this;
            this.sprite = rul.bigSprite[this.bigSprite];
            var t = this;
            if ("flatThrow" in t) {
                t.flatThrowTime = t.flatThrow.time;
                delete t.flatThrow;
            }
            Service.add("canBuyItem", this.type, this.requiresBuyBaseFunc);
            if (this.categories) {
                for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
                    var cat = _a[_i];
                    this.addCategory(cat);
                }
            }
            Article.create({
                id: this.type,
                type_id: "ITEMS",
                section: "ITEMS"
            });
        }
        Item.prototype.attacks = function () {
            if (!this._attacks) {
                this._attacks = [];
                for (var _i = 0, _a = [
                    "ammo",
                    "melee",
                    "snap",
                    "aimed",
                    "auto",
                    "throw",
                    "psi"
                ]; _i < _a.length; _i++) {
                    var mode = _a[_i];
                    var attack = new Attack(this, mode);
                    if (attack.possible) {
                        this._attacks.push(attack);
                        if (!isNaN(+attack.damageType))
                            this.addCategory("dmg=" + rul.damageTypes[attack.damageType]);
                        if (attack.damageBonus) {
                            for (var k in attack.damageBonus)
                                this.addCategory("dmg*" + k);
                            for (var k in attack.accuracyMultiplier)
                                this.addCategory("acc*" + k);
                        }
                    }
                }
            }
            return this._attacks;
        };
        Item.prototype.addCategory = function (catName) {
            var cat = rul.categories[catName] || [];
            if (!cat.includes(this))
                cat.push(this);
            rul.categories[catName] = cat;
        };
        return Item;
    }());
    var Ruleset = /** @class */ (function () {
        function Ruleset() {
            this.articles = {};
            this.articlesOrder = [];
            this.sections = {};
            this.sectionsOrder = [];
            this.typeSectionsOrder = [];
            this.sprites = {};
            this.raw = {};
            this.items = {};
            this.categories = {};
            this.armors = {};
            this.units = {};
            this.crafts = {};
            this.ufos = {};
            this.facilities = {};
            this.craftWeapons = {};
            this.alienDeployments = {};
            this.research = {};
            this.manufacture = {};
            this.startingConditions = {};
            this.bigSprite = [];
            this.floorSprite = [];
            this.handSprite = [];
            this.baseSprite = [];
            this.sounds = [];
            this.baseServices = {};
            this.redirect = {};
            this.lang = {};
            this.damageTypes = [
                "STR_DAMAGE_NONE",
                "STR_DAMAGE_ARMOR_PIERCING",
                "STR_DAMAGE_INCENDIARY",
                "STR_DAMAGE_HIGH_EXPLOSIVE",
                "STR_DAMAGE_LASER_BEAM",
                "STR_DAMAGE_PLASMA_BEAM",
                "STR_DAMAGE_STUN",
                "STR_DAMAGE_MELEE",
                "STR_DAMAGE_ACID",
                "STR_DAMAGE_SMOKE",
                "STR_DAMAGE_10",
                "STR_DAMAGE_11",
                "STR_DAMAGE_12",
                "STR_DAMAGE_13",
                "STR_DAMAGE_14",
                "STR_DAMAGE_15",
                "STR_DAMAGE_16",
                "STR_DAMAGE_17",
                "STR_DAMAGE_18",
                "STR_DAMAGE_19",
                "STR_DAMAGE_20",
                "STR_DAMAGE_21",
                "STR_DAMAGE_22",
                "STR_MANA",
            ];
            this.battleTypes = [
                "None (Geoscape-only item)",
                "Firearm",
                "Ammo",
                "Melee",
                "Grenade",
                "Proximity Grenade",
                "Medi-Kit",
                "Motion Scanner",
                "Mind Probe",
                "Psi-Amp",
                "Electro-flare",
                "Corpse"
            ];
            rul = this;
        }
        Ruleset.prototype.damageTypeName = function (type) {
            return this.lang[this.damageTypes[type]];
        };
        Ruleset.prototype.sound = function (id) {
            return this.path + this.sounds[id];
        };
        Ruleset.prototype.str = function (id) {
            return this.lang[id] || id;
        };
        Ruleset.prototype.specialSprite = function (type, num) {
            return num in this[type] ? this.path + this[type][num] : "xpedia/0.png";
        };
        Ruleset.prototype.parse = function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var file = data_1[_i];
                for (var key in file) {
                    if (key.substr(0, 4) == "lang") {
                        Object.assign(this.lang, file[key]);
                    }
                    if (!(key in this.raw)) {
                        this.raw[key] = file[key];
                    }
                    else {
                        var old = this.raw[key];
                        var adding = file[key];
                        if (old.concat) {
                            this.raw[key] = old.concat(adding);
                        }
                        else {
                            for (var _a = 0, adding_1 = adding; _a < adding_1.length; _a++) {
                                var k = adding_1[_a];
                                if (k in old)
                                    Object.assign(old[k], adding[k]);
                                else
                                    old[k] = adding[k];
                            }
                        }
                    }
                }
            }
            var articleTypes = [
                "ITEMS",
                "CONDITIONS",
                "CATEGORIES",
                "RESEARCH",
                "MANUFACTURE",
                "SERVICE"
            ];
            for (var _b = 0, articleTypes_1 = articleTypes; _b < articleTypes_1.length; _b++) {
                var type = articleTypes_1[_b];
                new Section(type, "TYPE");
            }
            for (var _c = 0, _d = [
                "items",
                "armors",
                "ufopaedia",
                "manufacture",
                "units",
                "alienDeployments",
                "research"
            ]; _c < _d.length; _c++) {
                var category = _d[_c];
                var merged = {};
                for (var _e = 0, _f = this.raw[category]; _e < _f.length; _e++) {
                    var data_2 = _f[_e];
                    var id = data_2.type || data_2.id || data_2.name || data_2.delete;
                    if ("delete" in data_2) {
                        delete merged[id];
                    }
                    else {
                        if (id && id in merged) {
                            Object.assign(merged[id], data_2);
                        }
                        else {
                            merged[id] = data_2;
                        }
                    }
                }
                this.raw[category] = Object.values(merged);
            }
            this.modName = this.raw.modName;
            this.path = "user/mods/" + rul.modName + "/";
            for (var k in this.lang) {
                var text = this.lang[k];
                if (typeof text === "string") {
                    text = text.replace(/^({NEWLINE})+/, "");
                    text = text.replace(/{NEWLINE}/g, "<br/>");
                    this.lang[k] = text;
                }
            }
            for (var _g = 0, _h = rul.damageTypes; _g < _h.length; _g++) {
                var damage = _h[_g];
                rul.categories["dmg=" + damage] = [];
                this.redirect[damage] = "dmg=" + damage;
                this.lang["dmg=" + damage] = this.lang[damage];
            }
            this.parsePedia(this.raw.ufopaedia);
            this.parseSprites(this.raw.extraSprites);
            if (this.sprites["BIGOBS.PCK"])
                this.bigSprite = this.sprites["BIGOBS.PCK"].extra;
            if (this.sprites["FLOOROB.PCK"])
                this.floorSprite = this.sprites["FLOOROB.PCK"].extra;
            if (this.sprites["HANDOB.PCK"])
                this.handSprite = this.sprites["HANDOB.PCK"].extra;
            if (this.sprites["BASEBITS.PCK"])
                this.baseSprite = this.sprites["BASEBITS.PCK"].extra;
            if (this.raw.extraSounds && this.raw.extraSounds[0])
                this.sounds = this.raw.extraSounds[0].files;
            for (var _j = 0, _k = this.raw.items; _j < _k.length; _j++) {
                var data_3 = _k[_j];
                new Item(data_3);
            }
            for (var _l = 0, _m = this.raw.armors; _l < _m.length; _l++) {
                var data_4 = _m[_l];
                new Armor(data_4);
            }
            for (var _o = 0, _p = this.raw.units; _o < _p.length; _o++) {
                var data_5 = _p[_o];
                new Unit(data_5);
            }
            for (var _q = 0, _r = this.raw.crafts; _q < _r.length; _q++) {
                var data_6 = _r[_q];
                new Craft(data_6);
            }
            for (var _s = 0, _t = this.raw.craftWeapons; _s < _t.length; _s++) {
                var data_7 = _t[_s];
                new CraftWeapon(data_7);
            }
            for (var _u = 0, _v = this.raw.ufos; _u < _v.length; _u++) {
                var data_8 = _v[_u];
                new Ufo(data_8);
            }
            for (var _w = 0, _x = this.raw.facilities; _w < _x.length; _w++) {
                var data_9 = _x[_w];
                new Facility(data_9);
            }
            if (this.raw.startingConditions)
                for (var _y = 0, _z = this.raw.startingConditions; _y < _z.length; _y++) {
                    var data_10 = _z[_y];
                    new StartingConditions(data_10);
                }
            for (var _0 = 0, _1 = this.raw.alienDeployments; _0 < _1.length; _0++) {
                var data_11 = _1[_0];
                new AlienDeployment(data_11);
            }
            for (var _2 = 0, _3 = this.raw.research; _2 < _3.length; _2++) {
                var data_12 = _3[_2];
                new Research(data_12);
            }
            for (var _4 = 0, _5 = this.raw.manufacture; _4 < _5.length; _4++) {
                var data_13 = _5[_4];
                new Manufacture(data_13);
            }
            for (var _6 = 0, _7 = Object.values(this.facilities); _6 < _7.length; _6++) {
                var facility = _7[_6];
                if (facility.buildCostItems) {
                    for (var _8 = 0, _9 = Object.keys(facility.buildCostItems); _8 < _9.length; _8++) {
                        var itemName = _9[_8];
                        var item = rul.items[itemName];
                        if (!item)
                            continue;
                        if (!item.componentOf)
                            item.componentOf = {};
                        item.componentOf[facility.type] =
                            facility.buildCostItems[itemName].build;
                        if (!item.manufacture)
                            item.manufacture = {};
                        item.manufacture[facility.type] =
                            facility.buildCostItems[itemName].refund;
                    }
                }
            }
            for (var _10 = 0, _11 = Object.values(this.items); _10 < _11.length; _10++) {
                var item = _11[_10];
                item.attacks();
                if (item.compatibleAmmo) {
                    for (var _12 = 0, _13 = item.compatibleAmmo; _12 < _13.length; _12++) {
                        var ammoId = _13[_12];
                        var ammo = this.items[ammoId];
                        if (ammo) {
                            ammo.compatibleWeapons = ammo.compatibleWeapons || [];
                            ammo.compatibleWeapons.push(item.type);
                        }
                    }
                }
            }
            for (var _14 = 0, _15 = Object.values(this.research); _14 < _15.length; _14++) {
                var research = _15[_14];
                backLink(research.name, research.dependencies, rul.research, "leadsTo");
                backLink(research.name, research.getOneFree, rul.research, "freeFrom");
                if (research.lookup && research.name == research.lookup) {
                    console.warn(research.lookup + " lookup is to itself");
                }
                if (research.lookup && research.name != research.lookup) {
                    var lookup = this.research[research.lookup];
                    lookup.seeAlso = lookup.seeAlso || [];
                    lookup.seeAlso.push(research.name);
                    var lookUpArticle = this.article(research.lookup);
                    var article = this.article(research.name);
                    if (!rul.lang[article.id])
                        article.title = lookUpArticle.title;
                    article.text = lookUpArticle.text;
                    article.image_id = lookUpArticle.image_id;
                }
                if (research.spawnedItem) {
                    var item = rul.items[research.spawnedItem];
                    item.spawnedBy = item.spawnedBy || [];
                    item.spawnedBy.push(research.name);
                }
            }
            this.ourArmors = Object.values(this.armors)
                .filter(function (a) { return a.units; })
                .map(function (a) { return a.type; });
            for (var _16 = 0, articleTypes_2 = articleTypes; _16 < articleTypes_2.length; _16++) {
                var type = articleTypes_2[_16];
                rul.sections[type]._articles = rul.sections[type].articles.sort(function (a, b) {
                    return a.title < b.title ? -1 : 1;
                });
            }
            Article.create({
                id: "BASE_FUNC",
                title: "Base Services",
                type_id: "OTHER",
                section: "OTHER"
            });
            for (var _17 = 0, _18 = Object.keys(this.categories); _17 < _18.length; _17++) {
                var cat = _18[_17];
                console.log(cat);
                Article.create({
                    id: cat,
                    title: rul.str(cat),
                    type_id: "CATEGORIES",
                    section: "CATEGORIES"
                });
            }
            console.log(this);
            this.search = new Search();
        };
        Ruleset.prototype.parsePedia = function (data) {
            for (var _i = 0, data_14 = data; _i < data_14.length; _i++) {
                var articleData = data_14[_i];
                if (articleData.id) {
                    var article = new Article(articleData);
                    this.articlesOrder.push(article);
                    this.articles[article.id] = article;
                }
            }
        };
        Ruleset.prototype.parseSprites = function (data) {
            for (var _i = 0, data_15 = data; _i < data_15.length; _i++) {
                var spriteData = data_15[_i];
                var sprite = new Sprite(spriteData);
                this.sprites[sprite.id] = sprite;
            }
        };
        Ruleset.prototype.findNextArticle = function (current, delta) {
            if (!current)
                return null;
            var section = current.section;
            var list = section ? section.articles : this.articlesOrder;
            var index = list.findIndex(function (a) { return a.id == current.id; });
            if (index != undefined) {
                var nextIndex = index + delta;
                var nextArticle = list[nextIndex];
                return nextArticle;
            }
        };
        Ruleset.prototype.decamelize = function (str, separ) {
            if (separ === void 0) { separ = " "; }
            if (typeof str === "string") {
                if (str.includes("_") && str.search(/[a-z]/) == -1)
                    str = str.replace(/_/g, " ");
                else
                    str = str.replace(/([^A-Z])([A-Z])/g, "$1" + separ + "$2");
                str = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
            }
            return str;
        };
        Ruleset.prototype.sprite = function (id) {
            if (id in this.sprites)
                return this.path + this.sprites[id].path;
            return this.path + id;
        };
        Ruleset.prototype.load = function (text) {
            return __awaiter(this, void 0, void 0, function () {
                var zip, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            text = text.trim();
                            if (!(text.substr(0, 6) == "base64")) return [3 /*break*/, 3];
                            text = text.substr(6);
                            zip = new JSZip();
                            return [4 /*yield*/, zip.loadAsync(text, { base64: true })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, zip.file("xpedia").async("text")];
                        case 2:
                            text = _a.sent();
                            _a.label = 3;
                        case 3:
                            data = parseYaml(text);
                            try {
                                this.parse(data);
                            }
                            catch (e) {
                                console.error(e);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        Ruleset.prototype.addToSection = function (article, sectionId) {
            var section;
            if (sectionId in rul.sections)
                section = rul.sections[sectionId];
            else
                section = rul.sections[sectionId] = new Section(sectionId);
            if (article.id != section.id)
                section.add(article);
            article.section = section;
            return section;
        };
        Ruleset.prototype.linksByType = function (type) {
            switch (type) {
                case "CONDITIONS":
                    return Object.keys(this.startingConditions).map(function (a) { return "CONDITIONS_" + a; });
            }
            return [];
        };
        Ruleset.prototype.bodiesCompare = function (strs) {
            for (var i in strs) {
                if (strs[i].length == 2)
                    strs[i] =
                        (strs[i].charAt(0) == "M" ? "A" : "B") + "0" + strs[i].substr(1);
            }
            return strs[0] > strs[1] ? 1 : -1;
        };
        Ruleset.prototype.article = function (id) {
            var a = this.articles[this.redirect[id] || id];
            return a;
        };
        return Ruleset;
    }());

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        if (value != null || input.value) {
            input.value = value;
        }
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }
    class HtmlTag {
        constructor(html, anchor = null) {
            this.e = element('div');
            this.a = anchor;
            this.u(html);
        }
        m(target, anchor = null) {
            for (let i = 0; i < this.n.length; i += 1) {
                insert(target, this.n[i], anchor);
            }
            this.t = target;
        }
        u(html) {
            this.e.innerHTML = html;
            this.n = Array.from(this.e.childNodes);
        }
        p(html) {
            this.d();
            this.u(html);
            this.m(this.t, this.a);
        }
        d() {
            this.n.forEach(detach);
        }
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function afterUpdate(fn) {
        get_current_component().$$.after_update.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function tick() {
        schedule_update();
        return resolved_promise;
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function flush() {
        const seen_callbacks = new Set();
        do {
            // first, call beforeUpdate functions
            // and update components
            while (dirty_components.length) {
                const component = dirty_components.shift();
                set_current_component(component);
                update(component.$$);
            }
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    callback();
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
    }
    function update($$) {
        if ($$.fragment) {
            $$.update($$.dirty);
            run_all($$.before_update);
            $$.fragment.p($$.dirty, $$.ctx);
            $$.dirty = null;
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = key && { [key]: value };
            const child_ctx = assign(assign({}, info.ctx), info.resolved);
            const block = type && (info.current = type)(child_ctx);
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                info.blocks[i] = null;
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                flush();
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = { [info.value]: promise };
        }
    }

    const globals = (typeof window !== 'undefined' ? window : global);
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        if (component.$$.fragment) {
            run_all(component.$$.on_destroy);
            component.$$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            component.$$.on_destroy = component.$$.fragment = null;
            component.$$.ctx = {};
        }
    }
    function make_dirty(component, key) {
        if (!component.$$.dirty) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty = blank_object();
        }
        component.$$.dirty[key] = true;
    }
    function init(component, options, instance, create_fragment, not_equal, prop_names) {
        const parent_component = current_component;
        set_current_component(component);
        const props = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props: prop_names,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty: null
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, props, (key, ret, value = ret) => {
                if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
                    if ($$.bound[key])
                        $$.bound[key](value);
                    if (ready)
                        make_dirty(component, key);
                }
                return ret;
            })
            : props;
        $$.update();
        ready = true;
        run_all($$.before_update);
        $$.fragment = create_fragment($$.ctx);
        if (options.target) {
            if (options.hydrate) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, detail));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
    }

    /* src\Link.svelte generated by Svelte v3.12.1 */

    const file = "src\\Link.svelte";

    // (13:0) {:else}
    function create_else_block(ctx) {
    	var t_value = rul.str(ctx.href) + "", t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.href) && t_value !== (t_value = rul.str(ctx.href) + "")) {
    				set_data_dev(t, t_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block.name, type: "else", source: "(13:0) {:else}", ctx });
    	return block;
    }

    // (11:0) {#if rul.article(href)}
    function create_if_block(ctx) {
    	var a, t_value = rul.str(ctx.href) + "", t, a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = '#' + ctx.href);
    			add_location(a, file, 11, 2, 172);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.href) && t_value !== (t_value = rul.str(ctx.href) + "")) {
    				set_data_dev(t, t_value);
    			}

    			if ((changed.href) && a_href_value !== (a_href_value = '#' + ctx.href)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(11:0) {#if rul.article(href)}", ctx });
    	return block;
    }

    function create_fragment(ctx) {
    	var show_if, if_block_anchor;

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.href) show_if = !!(rul.article(ctx.href));
    		if (show_if) return create_if_block;
    		return create_else_block;
    	}

    	var current_block_type = select_block_type(null, ctx);
    	var if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (current_block_type === (current_block_type = select_block_type(changed, ctx)) && if_block) {
    				if_block.p(changed, ctx);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);
    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { href } = $$props;

    	const writable_props = ['href'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Link> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('href' in $$props) $$invalidate('href', href = $$props.href);
    	};

    	$$self.$capture_state = () => {
    		return { href };
    	};

    	$$self.$inject_state = $$props => {
    		if ('href' in $$props) $$invalidate('href', href = $$props.href);
    	};

    	$$self.$$.update = ($$dirty = { href: 1 }) => {
    		if ($$dirty.href) { {
            if(href && href.type)
              $$invalidate('href', href = href.type);
          } }
    	};

    	return { href };
    }

    class Link extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, ["href"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Link", options, id: create_fragment.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.href === undefined && !('href' in props)) {
    			console.warn("<Link> was created without expected prop 'href'");
    		}
    	}

    	get href() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\LinksPage.svelte generated by Svelte v3.12.1 */

    const file$1 = "src\\LinksPage.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.option = list[i];
    	return child_ctx;
    }

    // (13:0) {#if links && links.length > 0}
    function create_if_block$1(ctx) {
    	var t0, div1, t1, div0, ol, current;

    	var if_block0 = (!ctx.title) && create_if_block_2(ctx);

    	var if_block1 = (ctx.title) && create_if_block_1(ctx);

    	let each_value = ctx.sortedList;

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t0 = space();
    			div1 = element("div");
    			if (if_block1) if_block1.c();
    			t1 = space();
    			div0 = element("div");
    			ol = element("ol");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			add_location(ol, file$1, 23, 6, 625);
    			attr_dev(div0, "class", "cols");
    			add_location(div0, file$1, 22, 4, 597);
    			attr_dev(div1, "class", "links-page");
    			add_location(div1, file$1, 18, 2, 485);
    		},

    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			if (if_block1) if_block1.m(div1, null);
    			append_dev(div1, t1);
    			append_dev(div1, div0);
    			append_dev(div0, ol);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ol, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (!ctx.title) {
    				if (if_block0) {
    					if_block0.p(changed, ctx);
    				} else {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					if_block0.m(t0.parentNode, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (ctx.title) {
    				if (if_block1) {
    					if_block1.p(changed, ctx);
    				} else {
    					if_block1 = create_if_block_1(ctx);
    					if_block1.c();
    					if_block1.m(div1, t1);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (changed.sortedList) {
    				each_value = ctx.sortedList;

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(ol, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);

    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(div1);
    			}

    			if (if_block1) if_block1.d();

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$1.name, type: "if", source: "(13:0) {#if links && links.length > 0}", ctx });
    	return block;
    }

    // (14:2) {#if !title}
    function create_if_block_2(ctx) {
    	var div, button, t, button_style_value, dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			button = element("button");
    			t = text("A-Z");
    			attr_dev(button, "style", button_style_value = ctx.sorted?"":"text-decoration:line-through");
    			add_location(button, file$1, 15, 6, 358);
    			attr_dev(div, "class", "links-page-button");
    			add_location(div, file$1, 14, 4, 319);
    			dispose = listen_dev(button, "click", ctx.click_handler);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, button);
    			append_dev(button, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.sorted) && button_style_value !== (button_style_value = ctx.sorted?"":"text-decoration:line-through")) {
    				attr_dev(button, "style", button_style_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}

    			dispose();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2.name, type: "if", source: "(14:2) {#if !title}", ctx });
    	return block;
    }

    // (20:4) {#if title}
    function create_if_block_1(ctx) {
    	var div, t;

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = text(ctx.title);
    			attr_dev(div, "class", "links-page-header");
    			add_location(div, file$1, 20, 6, 534);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t);
    		},

    		p: function update(changed, ctx) {
    			if (changed.title) {
    				set_data_dev(t, ctx.title);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1.name, type: "if", source: "(20:4) {#if title}", ctx });
    	return block;
    }

    // (25:8) {#each sortedList as option}
    function create_each_block(ctx) {
    	var li, t, current;

    	var link = new Link({
    		props: { href: ctx.option },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			li = element("li");
    			link.$$.fragment.c();
    			t = space();
    			add_location(li, file$1, 25, 10, 679);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			mount_component(link, li, null);
    			append_dev(li, t);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.sortedList) link_changes.href = ctx.option;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(li);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(25:8) {#each sortedList as option}", ctx });
    	return block;
    }

    function create_fragment$1(ctx) {
    	var if_block_anchor, current;

    	var if_block = (ctx.links && ctx.links.length > 0) && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (ctx.links && ctx.links.length > 0) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$1.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	

      let { links, title = null } = $$props;  
      let sorted = false;

    	const writable_props = ['links', 'title'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<LinksPage> was created with unknown prop '${key}'`);
    	});

    	const click_handler = (e) => $$invalidate('sorted', sorted = !sorted);

    	$$self.$set = $$props => {
    		if ('links' in $$props) $$invalidate('links', links = $$props.links);
    		if ('title' in $$props) $$invalidate('title', title = $$props.title);
    	};

    	$$self.$capture_state = () => {
    		return { links, title, sorted, sortedList };
    	};

    	$$self.$inject_state = $$props => {
    		if ('links' in $$props) $$invalidate('links', links = $$props.links);
    		if ('title' in $$props) $$invalidate('title', title = $$props.title);
    		if ('sorted' in $$props) $$invalidate('sorted', sorted = $$props.sorted);
    		if ('sortedList' in $$props) $$invalidate('sortedList', sortedList = $$props.sortedList);
    	};

    	let sortedList;

    	$$self.$$.update = ($$dirty = { sorted: 1, links: 1 }) => {
    		if ($$dirty.sorted || $$dirty.links) { $$invalidate('sortedList', sortedList = sorted?links.slice().sort((a,b) => rul.str(a) > rul.str(b)?1:-1):links); }
    	};

    	return {
    		links,
    		title,
    		sorted,
    		sortedList,
    		click_handler
    	};
    }

    class LinksPage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["links", "title"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "LinksPage", options, id: create_fragment$1.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.links === undefined && !('links' in props)) {
    			console.warn("<LinksPage> was created without expected prop 'links'");
    		}
    	}

    	get links() {
    		throw new Error("<LinksPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set links(value) {
    		throw new Error("<LinksPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<LinksPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<LinksPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Intro.svelte generated by Svelte v3.12.1 */

    const file$2 = "src\\Intro.svelte";

    function create_fragment$2(ctx) {
    	var div10, div7, h10, t1, t2_value = rul.str("Welcome to The X-COM Files mod to OpenXcom website.") + "", t2, t3, br0, t4, h40, t6, br1, t7, br2, t8, br3, t9, br4, t10, br5, t11, a0, t13, a1, t15, a2, br6, t17, br7, t18, h41, t20, div0, t21_value = rul.str("Changelog") + "", t21, t22, ul0, li0, t24, li1, t26, li2, t28, li3, t30, li4, t32, li5, t34, li6, t36, li7, t38, li8, t40, li9, t42, h11, t44, h42, t46, div6, div1, t47, br8, t48, t49, div2, t51, div3, t52_value = rul.str("Main additions") + "", t52, t53, ul1, li10, t55, li11, t57, li12, t59, li13, t61, li14, t63, li15, t64, a3, t66, div4, iframe0, t67, div5, iframe1, t68, br9, t69, br10, t70, a4, t72, t73, div9, button, t74_value = rul.str("Download") + "", t74, t75, div8, img0, t76, img1, t77, img2, t78, img3, t79, img4;

    	const block = {
    		c: function create() {
    			div10 = element("div");
    			div7 = element("div");
    			h10 = element("h1");
    			h10.textContent = "The X-COM Files";
    			t1 = space();
    			t2 = text(t2_value);
    			t3 = space();
    			br0 = element("br");
    			t4 = space();
    			h40 = element("h4");
    			h40.textContent = "What is XCF?";
    			t6 = text("\r\n      This megamod is a global conversion to OpenXcom (clone of the classic UFO:Enemy Unknown 1994), preserving the original setting.");
    			br1 = element("br");
    			t7 = space();
    			br2 = element("br");
    			t8 = text("\r\n      With this mod the game starts in 1996. The player gets control over the newly formed organization X-Com - a project of the UN, designed to investigate abnormal events on our planet. The style of the series X-Files (where the name comes from) is surprisingly clear. In the beginning, no fighters, dozens of scientists, millions of dollars in budgets. You only have two special agents and they travel by public transport! Investigate mysterious incidents, tie the evidence together to shed light on extraterrestrial activities, develop X-COM and prepare for an alien invasion from Cydonia!");
    			br3 = element("br");
    			t9 = text("\r\n      This mod contains many, many additions, like new mission types, enemies, equipment and story arcs (including the entirety of my previous project, the Final Mod Pack). It also places the game a bit more firmly in the 90's conspiracy genre and its clichés.");
    			br4 = element("br");
    			t10 = space();
    			br5 = element("br");
    			t11 = space();
    			a0 = element("a");
    			a0.textContent = "Download mod";
    			t13 = text(", join our community with ");
    			a1 = element("a");
    			a1.textContent = "Discord server";
    			t15 = text(" and ");
    			a2 = element("a");
    			a2.textContent = "forum!";
    			br6 = element("br");
    			t17 = space();
    			br7 = element("br");
    			t18 = space();
    			h41 = element("h4");
    			h41.textContent = "Current mod version is 1.0.2";
    			t20 = space();
    			div0 = element("div");
    			t21 = text(t21_value);
    			t22 = text(":\r\n        ");
    			ul0 = element("ul");
    			li0 = element("li");
    			li0.textContent = "New Alien Base, Farm, Forest and City mapblocks (by Civilian).";
    			t24 = space();
    			li1 = element("li");
    			li1.textContent = "Cybermites are now invisible on the minimap.";
    			t26 = space();
    			li2 = element("li");
    			li2.textContent = "New FN FAL handob (by Civilian).";
    			t28 = space();
    			li3 = element("li");
    			li3.textContent = "Lowered the Melee requirement for Martial Arts to 65.";
    			t30 = space();
    			li4 = element("li");
    			li4.textContent = "Fixed a crash on Marine Base Defense mission popping up.";
    			t32 = space();
    			li5 = element("li");
    			li5.textContent = "Fixed the Night Owl commendation.";
    			t34 = space();
    			li6 = element("li");
    			li6.textContent = "Fixed energy regeneration on Heavy Suit (both variants).";
    			t36 = space();
    			li7 = element("li");
    			li7.textContent = "Fixed Psi-Amp handob.";
    			t38 = space();
    			li8 = element("li");
    			li8.textContent = "Fixed one Battleship map.";
    			t40 = space();
    			li9 = element("li");
    			li9.textContent = "Minor terrain fixes.";
    			t42 = space();
    			h11 = element("h1");
    			h11.textContent = "Latest News";
    			t44 = space();
    			h42 = element("h4");
    			h42.textContent = "Version 1.0 released!";
    			t46 = space();
    			div6 = element("div");
    			div1 = element("div");
    			t47 = text("\"Now, this doesn't at all mean that this is the end. I will continue releasing new versions just like before, at least for the foreseeable future... ");
    			br8 = element("br");
    			t48 = text("\r\n          The 1.0 only means that I am satisfied with how the mod works now and consider it \"done\" enough to say so.\"");
    			t49 = space();
    			div2 = element("div");
    			div2.textContent = "– Solarius Scorch, mod author, lead designer";
    			t51 = space();
    			div3 = element("div");
    			t52 = text(t52_value);
    			t53 = text(":\r\n          ");
    			ul1 = element("ul");
    			li10 = element("li");
    			li10.textContent = "Updated to OXCE 6.1.1";
    			t55 = space();
    			li11 = element("li");
    			li11.textContent = "New features: random events, commendations (with bonuses), enhancement treatments; basic agent stats lowered for balance.";
    			t57 = space();
    			li12 = element("li");
    			li12.textContent = "New stat: Readiness, and associated exhaustion mechanics.";
    			t59 = space();
    			li13 = element("li");
    			li13.textContent = "New alien race: Chaser.";
    			t61 = space();
    			li14 = element("li");
    			li14.textContent = "Overhaul of agent advancement mechanics.";
    			t63 = space();
    			li15 = element("li");
    			t64 = text("New missions, units, items, balance fixes and musch more! For detail info see ");
    			a3 = element("a");
    			a3.textContent = "full changelog";
    			t66 = space();
    			div4 = element("div");
    			iframe0 = element("iframe");
    			t67 = space();
    			div5 = element("div");
    			iframe1 = element("iframe");
    			t68 = space();
    			br9 = element("br");
    			t69 = space();
    			br10 = element("br");
    			t70 = text("\r\n\r\n    Wiki is powered by ");
    			a4 = element("a");
    			a4.textContent = "Baturinsky's XPedia";
    			t72 = text(".");
    			t73 = space();
    			div9 = element("div");
    			button = element("button");
    			t74 = text(t74_value);
    			t75 = space();
    			div8 = element("div");
    			img0 = element("img");
    			t76 = space();
    			img1 = element("img");
    			t77 = space();
    			img2 = element("img");
    			t78 = space();
    			img3 = element("img");
    			t79 = space();
    			img4 = element("img");
    			add_location(h10, file$2, 7, 4, 185);
    			add_location(br0, file$2, 9, 4, 287);
    			add_location(h40, file$2, 10, 4, 298);
    			add_location(br1, file$2, 11, 133, 454);
    			add_location(br2, file$2, 12, 6, 468);
    			add_location(br3, file$2, 13, 593, 1068);
    			add_location(br4, file$2, 14, 260, 1335);
    			add_location(br5, file$2, 15, 6, 1348);
    			attr_dev(a0, "href", "https://openxcom.mod.io/the-x-com-files");
    			add_location(a0, file$2, 16, 6, 1361);
    			attr_dev(a1, "href", "https://discord.gg/XrQQTPg");
    			add_location(a1, file$2, 16, 98, 1453);
    			attr_dev(a2, "href", "https://openxcom.org/forum/index.php/board,21.0.html");
    			add_location(a2, file$2, 16, 158, 1513);
    			add_location(br6, file$2, 16, 231, 1586);
    			add_location(br7, file$2, 17, 6, 1599);
    			add_location(h41, file$2, 18, 4, 1610);
    			add_location(li0, file$2, 22, 10, 1753);
    			add_location(li1, file$2, 23, 10, 1836);
    			add_location(li2, file$2, 24, 10, 1901);
    			add_location(li3, file$2, 25, 10, 1954);
    			add_location(li4, file$2, 26, 10, 2028);
    			add_location(li5, file$2, 27, 10, 2105);
    			add_location(li6, file$2, 28, 10, 2159);
    			add_location(li7, file$2, 29, 10, 2236);
    			add_location(li8, file$2, 30, 10, 2278);
    			add_location(li9, file$2, 31, 10, 2324);
    			attr_dev(ul0, "class", "changelog");
    			add_location(ul0, file$2, 21, 8, 1719);
    			attr_dev(div0, "class", "changelog");
    			add_location(div0, file$2, 19, 6, 1655);
    			add_location(h11, file$2, 34, 4, 2389);
    			add_location(h42, file$2, 35, 4, 2415);
    			add_location(br8, file$2, 38, 159, 2648);
    			attr_dev(div1, "class", "quote");
    			add_location(div1, file$2, 37, 8, 2468);
    			attr_dev(div2, "class", "qsign");
    			add_location(div2, file$2, 41, 8, 2798);
    			add_location(li10, file$2, 47, 12, 3008);
    			add_location(li11, file$2, 48, 12, 3052);
    			add_location(li12, file$2, 49, 12, 3196);
    			add_location(li13, file$2, 50, 12, 3276);
    			add_location(li14, file$2, 51, 12, 3322);
    			attr_dev(a3, "href", "https://openxcom.org/forum/index.php/topic,5427.0.html");
    			add_location(a3, file$2, 52, 94, 3467);
    			add_location(li15, file$2, 52, 12, 3385);
    			attr_dev(ul1, "class", "changelog");
    			add_location(ul1, file$2, 46, 10, 2972);
    			attr_dev(div3, "class", "changelog");
    			add_location(div3, file$2, 44, 8, 2899);
    			attr_dev(iframe0, "width", "560");
    			attr_dev(iframe0, "height", "315");
    			attr_dev(iframe0, "src", "https://www.youtube.com/embed/hFKEFMyEcQU");
    			attr_dev(iframe0, "frameborder", "0");
    			attr_dev(iframe0, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    			iframe0.allowFullscreen = true;
    			add_location(iframe0, file$2, 56, 10, 3647);
    			attr_dev(div4, "class", "video is-hidden-mobile");
    			add_location(div4, file$2, 55, 8, 3598);
    			attr_dev(iframe1, "width", "296");
    			attr_dev(iframe1, "height", "170");
    			attr_dev(iframe1, "src", "https://www.youtube.com/embed/hFKEFMyEcQU");
    			attr_dev(iframe1, "frameborder", "0");
    			attr_dev(iframe1, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    			iframe1.allowFullscreen = true;
    			add_location(iframe1, file$2, 61, 10, 4068);
    			attr_dev(div5, "class", "video is-hidden-tablet");
    			add_location(div5, file$2, 60, 8, 4020);
    			add_location(div6, file$2, 36, 6, 2453);
    			add_location(br9, file$2, 66, 4, 4427);
    			add_location(br10, file$2, 67, 4, 4438);
    			attr_dev(a4, "href", "https://github.com/baturinsky/xpedia/");
    			add_location(a4, file$2, 69, 23, 4470);
    			attr_dev(div7, "class", "column is-full-touch is-9-desktop");
    			add_location(div7, file$2, 6, 2, 132);
    			attr_dev(button, "title", "Download");
    			attr_dev(button, "class", "downloadbtn");
    			attr_dev(button, "onclick", " window.open('https://openxcom.mod.io/the-x-com-files', '_blank'); return false;");
    			add_location(button, file$2, 73, 4, 4613);
    			attr_dev(img0, "class", "imgbox");
    			attr_dev(img0, "src", "https://thumb.mod.io/mods/0640/158/thumb_1020x2000/osprey.1.png");
    			attr_dev(img0, "alt", "osprey.1.png");
    			add_location(img0, file$2, 75, 6, 4813);
    			attr_dev(img1, "class", "imgbox");
    			attr_dev(img1, "src", "https://thumb.mod.io/mods/0640/158/thumb_1020x2000/screen072.1.png");
    			attr_dev(img1, "alt", "screen072.1.png");
    			add_location(img1, file$2, 76, 6, 4930);
    			attr_dev(img2, "class", "imgbox");
    			attr_dev(img2, "src", "https://thumb.mod.io/mods/0640/158/thumb_1020x2000/callofcoding.1.png");
    			attr_dev(img2, "alt", "callofcoding.1.png");
    			add_location(img2, file$2, 77, 6, 5053);
    			attr_dev(img3, "class", "imgbox");
    			attr_dev(img3, "src", "https://thumb.mod.io/mods/0640/158/thumb_1020x2000/screen070.png");
    			attr_dev(img3, "alt", "screen070.png");
    			add_location(img3, file$2, 78, 6, 5182);
    			attr_dev(img4, "class", "imgbox");
    			attr_dev(img4, "src", "https://thumb.mod.io/mods/0640/158/thumb_1020x2000/village01.png");
    			attr_dev(img4, "alt", "village01.png");
    			add_location(img4, file$2, 79, 6, 5301);
    			attr_dev(div8, "class", "imgcol");
    			add_location(div8, file$2, 74, 4, 4785);
    			attr_dev(div9, "class", "column is-hidden-touch is-3-desktop");
    			add_location(div9, file$2, 72, 2, 4558);
    			attr_dev(div10, "class", "columns");
    			add_location(div10, file$2, 5, 0, 107);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div10, anchor);
    			append_dev(div10, div7);
    			append_dev(div7, h10);
    			append_dev(div7, t1);
    			append_dev(div7, t2);
    			append_dev(div7, t3);
    			append_dev(div7, br0);
    			append_dev(div7, t4);
    			append_dev(div7, h40);
    			append_dev(div7, t6);
    			append_dev(div7, br1);
    			append_dev(div7, t7);
    			append_dev(div7, br2);
    			append_dev(div7, t8);
    			append_dev(div7, br3);
    			append_dev(div7, t9);
    			append_dev(div7, br4);
    			append_dev(div7, t10);
    			append_dev(div7, br5);
    			append_dev(div7, t11);
    			append_dev(div7, a0);
    			append_dev(div7, t13);
    			append_dev(div7, a1);
    			append_dev(div7, t15);
    			append_dev(div7, a2);
    			append_dev(div7, br6);
    			append_dev(div7, t17);
    			append_dev(div7, br7);
    			append_dev(div7, t18);
    			append_dev(div7, h41);
    			append_dev(div7, t20);
    			append_dev(div7, div0);
    			append_dev(div0, t21);
    			append_dev(div0, t22);
    			append_dev(div0, ul0);
    			append_dev(ul0, li0);
    			append_dev(ul0, t24);
    			append_dev(ul0, li1);
    			append_dev(ul0, t26);
    			append_dev(ul0, li2);
    			append_dev(ul0, t28);
    			append_dev(ul0, li3);
    			append_dev(ul0, t30);
    			append_dev(ul0, li4);
    			append_dev(ul0, t32);
    			append_dev(ul0, li5);
    			append_dev(ul0, t34);
    			append_dev(ul0, li6);
    			append_dev(ul0, t36);
    			append_dev(ul0, li7);
    			append_dev(ul0, t38);
    			append_dev(ul0, li8);
    			append_dev(ul0, t40);
    			append_dev(ul0, li9);
    			append_dev(div7, t42);
    			append_dev(div7, h11);
    			append_dev(div7, t44);
    			append_dev(div7, h42);
    			append_dev(div7, t46);
    			append_dev(div7, div6);
    			append_dev(div6, div1);
    			append_dev(div1, t47);
    			append_dev(div1, br8);
    			append_dev(div1, t48);
    			append_dev(div6, t49);
    			append_dev(div6, div2);
    			append_dev(div6, t51);
    			append_dev(div6, div3);
    			append_dev(div3, t52);
    			append_dev(div3, t53);
    			append_dev(div3, ul1);
    			append_dev(ul1, li10);
    			append_dev(ul1, t55);
    			append_dev(ul1, li11);
    			append_dev(ul1, t57);
    			append_dev(ul1, li12);
    			append_dev(ul1, t59);
    			append_dev(ul1, li13);
    			append_dev(ul1, t61);
    			append_dev(ul1, li14);
    			append_dev(ul1, t63);
    			append_dev(ul1, li15);
    			append_dev(li15, t64);
    			append_dev(li15, a3);
    			append_dev(div6, t66);
    			append_dev(div6, div4);
    			append_dev(div4, iframe0);
    			append_dev(div6, t67);
    			append_dev(div6, div5);
    			append_dev(div5, iframe1);
    			append_dev(div7, t68);
    			append_dev(div7, br9);
    			append_dev(div7, t69);
    			append_dev(div7, br10);
    			append_dev(div7, t70);
    			append_dev(div7, a4);
    			append_dev(div7, t72);
    			append_dev(div10, t73);
    			append_dev(div10, div9);
    			append_dev(div9, button);
    			append_dev(button, t74);
    			append_dev(div9, t75);
    			append_dev(div9, div8);
    			append_dev(div8, img0);
    			append_dev(div8, t76);
    			append_dev(div8, img1);
    			append_dev(div8, t77);
    			append_dev(div8, img2);
    			append_dev(div8, t78);
    			append_dev(div8, img3);
    			append_dev(div8, t79);
    			append_dev(div8, img4);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div10);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$2.name, type: "component", source: "", ctx });
    	return block;
    }

    class Intro extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$2, safe_not_equal, []);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Intro", options, id: create_fragment$2.name });
    	}
    }

    /* src\LinksList.svelte generated by Svelte v3.12.1 */

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.item = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    // (9:0) {#each items as item, i}
    function create_each_block$1(ctx) {
    	var html_tag, raw_value = ctx.i==0?"":(ctx.vertical?"</br>":", ") + "", t, current;

    	var link = new Link({
    		props: { href: ctx.item },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			t = space();
    			link.$$.fragment.c();
    			html_tag = new HtmlTag(raw_value, t);
    		},

    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.vertical) && raw_value !== (raw_value = ctx.i==0?"":(ctx.vertical?"</br>":", ") + "")) {
    				html_tag.p(raw_value);
    			}

    			var link_changes = {};
    			if (changed.items) link_changes.href = ctx.item;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				html_tag.d();
    				detach_dev(t);
    			}

    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$1.name, type: "each", source: "(9:0) {#each items as item, i}", ctx });
    	return block;
    }

    function create_fragment$3(ctx) {
    	var each_1_anchor, current;

    	let each_value = ctx.items;

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.items || changed.vertical) {
    				each_value = ctx.items;

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$3.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	
      
      let { items, vertical=false } = $$props;

    	const writable_props = ['items', 'vertical'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<LinksList> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('items' in $$props) $$invalidate('items', items = $$props.items);
    		if ('vertical' in $$props) $$invalidate('vertical', vertical = $$props.vertical);
    	};

    	$$self.$capture_state = () => {
    		return { items, vertical };
    	};

    	$$self.$inject_state = $$props => {
    		if ('items' in $$props) $$invalidate('items', items = $$props.items);
    		if ('vertical' in $$props) $$invalidate('vertical', vertical = $$props.vertical);
    	};

    	return { items, vertical };
    }

    class LinksList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$3, safe_not_equal, ["items", "vertical"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "LinksList", options, id: create_fragment$3.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.items === undefined && !('items' in props)) {
    			console.warn("<LinksList> was created without expected prop 'items'");
    		}
    	}

    	get items() {
    		throw new Error("<LinksList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<LinksList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get vertical() {
    		throw new Error("<LinksList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set vertical(value) {
    		throw new Error("<LinksList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Value.svelte generated by Svelte v3.12.1 */

    const file$3 = "src\\Value.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    // (28:0) {:else}
    function create_else_block$1(ctx) {
    	var current;

    	var link = new Link({
    		props: { href: ctx.val },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			link.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.val) link_changes.href = ctx.val;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$1.name, type: "else", source: "(28:0) {:else}", ctx });
    	return block;
    }

    // (26:23) 
    function create_if_block_3(ctx) {
    	var em, t_value = ctx.val.toLocaleString() + "", t;

    	const block = {
    		c: function create() {
    			em = element("em");
    			t = text(t_value);
    			attr_dev(em, "class", "num");
    			add_location(em, file$3, 26, 2, 691);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, em, anchor);
    			append_dev(em, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.val) && t_value !== (t_value = ctx.val.toLocaleString() + "")) {
    				set_data_dev(t, t_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(em);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3.name, type: "if", source: "(26:23) ", ctx });
    	return block;
    }

    // (24:37) 
    function create_if_block_2$1(ctx) {
    	var span, t;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t = text(ctx.val);
    			set_style(span, "color", (ctx.val?'lime':'red'));
    			add_location(span, file$3, 24, 2, 611);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t);
    		},

    		p: function update(changed, ctx) {
    			if (changed.val) {
    				set_data_dev(t, ctx.val);
    				set_style(span, "color", (ctx.val?'lime':'red'));
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(span);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$1.name, type: "if", source: "(24:37) ", ctx });
    	return block;
    }

    // (11:32) 
    function create_if_block_1$1(ctx) {
    	var table, current;

    	let each_value = Object.keys(ctx.val).sort();

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "number-table");
    			add_location(table, file$3, 11, 2, 283);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.val || changed.rul) {
    				each_value = Object.keys(ctx.val).sort();

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$1.name, type: "if", source: "(11:32) ", ctx });
    	return block;
    }

    // (9:0) {#if Array.isArray(val)}
    function create_if_block$2(ctx) {
    	var current;

    	var linkslist = new LinksList({
    		props: {
    		items: ctx.val,
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			linkslist.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(linkslist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkslist_changes = {};
    			if (changed.val) linkslist_changes.items = ctx.val;
    			linkslist.$set(linkslist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(linkslist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$2.name, type: "if", source: "(9:0) {#if Array.isArray(val)}", ctx });
    	return block;
    }

    // (13:4) {#each Object.keys(val).sort() as field, i}
    function create_each_block$2(ctx) {
    	var tr, td0, nobr, raw_value = rul.decamelize(ctx.field) + "", t0, td1, em, t1, current;

    	var link = new Link({
    		props: { href: ctx.val[ctx.field] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			nobr = element("nobr");
    			t0 = space();
    			td1 = element("td");
    			em = element("em");
    			link.$$.fragment.c();
    			t1 = space();
    			add_location(nobr, file$3, 15, 10, 398);
    			add_location(td0, file$3, 14, 8, 382);
    			add_location(em, file$3, 18, 10, 481);
    			add_location(td1, file$3, 17, 8, 465);
    			add_location(tr, file$3, 13, 6, 368);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, nobr);
    			nobr.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			append_dev(td1, em);
    			mount_component(link, em, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.val) && raw_value !== (raw_value = rul.decamelize(ctx.field) + "")) {
    				nobr.innerHTML = raw_value;
    			}

    			var link_changes = {};
    			if (changed.val) link_changes.href = ctx.val[ctx.field];
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$2.name, type: "each", source: "(13:4) {#each Object.keys(val).sort() as field, i}", ctx });
    	return block;
    }

    function create_fragment$4(ctx) {
    	var show_if, show_if_1, current_block_type_index, if_block, if_block_anchor, current;

    	var if_block_creators = [
    		create_if_block$2,
    		create_if_block_1$1,
    		create_if_block_2$1,
    		create_if_block_3,
    		create_else_block$1
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.val) show_if = !!(Array.isArray(ctx.val));
    		if (show_if) return 0;
    		if (ctx.val instanceof Object) return 1;
    		if (ctx.val===true || ctx.val ===false) return 2;
    		if ((show_if_1 == null) || changed.val) show_if_1 = !!(!isNaN(+ctx.val));
    		if (show_if_1) return 3;
    		return 4;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$4.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	

      let { val } = $$props;

    	const writable_props = ['val'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Value> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('val' in $$props) $$invalidate('val', val = $$props.val);
    	};

    	$$self.$capture_state = () => {
    		return { val };
    	};

    	$$self.$inject_state = $$props => {
    		if ('val' in $$props) $$invalidate('val', val = $$props.val);
    	};

    	return { val };
    }

    class Value extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$4, safe_not_equal, ["val"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Value", options, id: create_fragment$4.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.val === undefined && !('val' in props)) {
    			console.warn("<Value> was created without expected prop 'val'");
    		}
    	}

    	get val() {
    		throw new Error("<Value>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set val(value) {
    		throw new Error("<Value>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\BaseServiceList.svelte generated by Svelte v3.12.1 */

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.item = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    // (9:0) {#each items as item, i}
    function create_each_block$3(ctx) {
    	var html_tag, raw_value = ctx.i==0?"":(ctx.vertical?"</br>":", ") + "", t, current;

    	var link = new Link({
    		props: { href: ctx.item },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			t = space();
    			link.$$.fragment.c();
    			html_tag = new HtmlTag(raw_value, t);
    		},

    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.vertical) && raw_value !== (raw_value = ctx.i==0?"":(ctx.vertical?"</br>":", ") + "")) {
    				html_tag.p(raw_value);
    			}

    			var link_changes = {};
    			if (changed.items) link_changes.href = ctx.item;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				html_tag.d();
    				detach_dev(t);
    			}

    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$3.name, type: "each", source: "(9:0) {#each items as item, i}", ctx });
    	return block;
    }

    function create_fragment$5(ctx) {
    	var each_1_anchor, current;

    	let each_value = ctx.items;

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.items || changed.vertical) {
    				each_value = ctx.items;

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$3(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$5.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	
      
      let { items, vertical=false } = $$props;

    	const writable_props = ['items', 'vertical'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<BaseServiceList> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('items' in $$props) $$invalidate('items', items = $$props.items);
    		if ('vertical' in $$props) $$invalidate('vertical', vertical = $$props.vertical);
    	};

    	$$self.$capture_state = () => {
    		return { items, vertical };
    	};

    	$$self.$inject_state = $$props => {
    		if ('items' in $$props) $$invalidate('items', items = $$props.items);
    		if ('vertical' in $$props) $$invalidate('vertical', vertical = $$props.vertical);
    	};

    	return { items, vertical };
    }

    class BaseServiceList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$5, safe_not_equal, ["items", "vertical"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "BaseServiceList", options, id: create_fragment$5.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.items === undefined && !('items' in props)) {
    			console.warn("<BaseServiceList> was created without expected prop 'items'");
    		}
    	}

    	get items() {
    		throw new Error("<BaseServiceList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<BaseServiceList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get vertical() {
    		throw new Error("<BaseServiceList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set vertical(value) {
    		throw new Error("<BaseServiceList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Illustration.svelte generated by Svelte v3.12.1 */
    const { console: console_1 } = globals;

    const file$4 = "src\\Illustration.svelte";

    // (30:0) {#if id && rul.sprite(id)}
    function create_if_block$3(ctx) {
    	var div, img, img_style_value, img_alt_value, img_src_value, dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			attr_dev(img, "class", "pedia-image svelte-3txty7");
    			attr_dev(img, "style", img_style_value = ctx.style + (ctx.left?"float:left":""));
    			attr_dev(img, "alt", img_alt_value = ctx.id || '');
    			attr_dev(img, "src", img_src_value = rul.sprite(ctx.id));
    			add_location(img, file$4, 31, 4, 632);
    			add_location(div, file$4, 30, 2, 621);
    			dispose = listen_dev(img, "load", ctx.load_handler);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.style || changed.left) && img_style_value !== (img_style_value = ctx.style + (ctx.left?"float:left":""))) {
    				attr_dev(img, "style", img_style_value);
    			}

    			if ((changed.id) && img_alt_value !== (img_alt_value = ctx.id || '')) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if ((changed.id) && img_src_value !== (img_src_value = rul.sprite(ctx.id))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}

    			dispose();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$3.name, type: "if", source: "(30:0) {#if id && rul.sprite(id)}", ctx });
    	return block;
    }

    function create_fragment$6(ctx) {
    	var show_if = ctx.id && rul.sprite(ctx.id), if_block_anchor;

    	var if_block = (show_if) && create_if_block$3(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (changed.id) show_if = ctx.id && rul.sprite(ctx.id);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    				} else {
    					if_block = create_if_block$3(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$6.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { id, left = false, maxWidth = 640, maxZoom = 4, style = "" } = $$props;

      function loaded(img) {
        console.info(img);
        let zoom = Math.min(maxZoom, Math.max(1, Math.floor(maxWidth / img.naturalWidth)));
        img.width = img.naturalWidth * zoom;
        img.height = img.naturalHeight * zoom;
      }

      console.log(id);

    	const writable_props = ['id', 'left', 'maxWidth', 'maxZoom', 'style'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1.warn(`<Illustration> was created with unknown prop '${key}'`);
    	});

    	const load_handler = (e) => loaded(e.target);

    	$$self.$set = $$props => {
    		if ('id' in $$props) $$invalidate('id', id = $$props.id);
    		if ('left' in $$props) $$invalidate('left', left = $$props.left);
    		if ('maxWidth' in $$props) $$invalidate('maxWidth', maxWidth = $$props.maxWidth);
    		if ('maxZoom' in $$props) $$invalidate('maxZoom', maxZoom = $$props.maxZoom);
    		if ('style' in $$props) $$invalidate('style', style = $$props.style);
    	};

    	$$self.$capture_state = () => {
    		return { id, left, maxWidth, maxZoom, style };
    	};

    	$$self.$inject_state = $$props => {
    		if ('id' in $$props) $$invalidate('id', id = $$props.id);
    		if ('left' in $$props) $$invalidate('left', left = $$props.left);
    		if ('maxWidth' in $$props) $$invalidate('maxWidth', maxWidth = $$props.maxWidth);
    		if ('maxZoom' in $$props) $$invalidate('maxZoom', maxZoom = $$props.maxZoom);
    		if ('style' in $$props) $$invalidate('style', style = $$props.style);
    	};

    	return {
    		id,
    		left,
    		maxWidth,
    		maxZoom,
    		style,
    		loaded,
    		load_handler
    	};
    }

    class Illustration extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$6, safe_not_equal, ["id", "left", "maxWidth", "maxZoom", "style"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Illustration", options, id: create_fragment$6.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.id === undefined && !('id' in props)) {
    			console_1.warn("<Illustration> was created without expected prop 'id'");
    		}
    	}

    	get id() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get left() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set left(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxWidth() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxWidth(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxZoom() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxZoom(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\SpecialBonus.svelte generated by Svelte v3.12.1 */
    const { Object: Object_1 } = globals;

    function get_each_context$4(ctx, list, i) {
    	const child_ctx = Object_1.create(ctx);
    	child_ctx.b = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    // (37:0) {#if flat.length>0 && plus}
    function create_if_block_2$2(ctx) {
    	var t;

    	const block = {
    		c: function create() {
    			t = text("+");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$2.name, type: "if", source: "(37:0) {#if flat.length>0 && plus}", ctx });
    	return block;
    }

    // (39:2) {#if i != 0}
    function create_if_block_1$2(ctx) {
    	var t;

    	const block = {
    		c: function create() {
    			t = text(" +");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$2.name, type: "if", source: "(39:2) {#if i != 0}", ctx });
    	return block;
    }

    // (42:2) {:else}
    function create_else_block$2(ctx) {
    	var html_tag, raw_value = ctx.b[0] + (ctx.b[1] != 1 ? '×<em>' + ctx.b[1] + '</em>' : '') + "";

    	const block = {
    		c: function create() {
    			html_tag = new HtmlTag(raw_value, null);
    		},

    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.flat) && raw_value !== (raw_value = ctx.b[0] + (ctx.b[1] != 1 ? '×<em>' + ctx.b[1] + '</em>' : '') + "")) {
    				html_tag.p(raw_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				html_tag.d();
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$2.name, type: "else", source: "(42:2) {:else}", ctx });
    	return block;
    }

    // (40:2) {#if b[0] == 'flatHundred'}
    function create_if_block$4(ctx) {
    	var html_tag, raw_value = ctx.b[1] * 100 + "";

    	const block = {
    		c: function create() {
    			html_tag = new HtmlTag(raw_value, null);
    		},

    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.flat) && raw_value !== (raw_value = ctx.b[1] * 100 + "")) {
    				html_tag.p(raw_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				html_tag.d();
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$4.name, type: "if", source: "(40:2) {#if b[0] == 'flatHundred'}", ctx });
    	return block;
    }

    // (38:0) {#each flat as b, i}
    function create_each_block$4(ctx) {
    	var t, if_block1_anchor;

    	var if_block0 = (ctx.i != 0) && create_if_block_1$2(ctx);

    	function select_block_type(changed, ctx) {
    		if (ctx.b[0] == 'flatHundred') return create_if_block$4;
    		return create_else_block$2;
    	}

    	var current_block_type = select_block_type(null, ctx);
    	var if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t = space();
    			if_block1.c();
    			if_block1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t, anchor);
    			if_block1.m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (current_block_type === (current_block_type = select_block_type(changed, ctx)) && if_block1) {
    				if_block1.p(changed, ctx);
    			} else {
    				if_block1.d(1);
    				if_block1 = current_block_type(ctx);
    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    				}
    			}
    		},

    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);

    			if (detaching) {
    				detach_dev(t);
    			}

    			if_block1.d(detaching);

    			if (detaching) {
    				detach_dev(if_block1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$4.name, type: "each", source: "(38:0) {#each flat as b, i}", ctx });
    	return block;
    }

    function create_fragment$7(ctx) {
    	var t, each_1_anchor;

    	var if_block = (ctx.flat.length>0 && ctx.plus) && create_if_block_2$2(ctx);

    	let each_value = ctx.flat;

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (ctx.flat.length>0 && ctx.plus) {
    				if (!if_block) {
    					if_block = create_if_block_2$2(ctx);
    					if_block.c();
    					if_block.m(t.parentNode, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (changed.flat) {
    				each_value = ctx.flat;

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$4(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block$4(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value.length;
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$7.name, type: "component", source: "", ctx });
    	return block;
    }

    function f(bonus) {
      if(!bonus)
        return [];
      let flat = [];
      for (let type of Object.keys(bonus)) {
        if (bonus[type].length) {
          for (let power in bonus[type]) {
            let b = bonus[type][power];
            if (b != 0) {
              power = power * 1 + 1;
              flat.push([
                type + (power == 1 ? "" : "<sup>" + power + "</sup>"),
                b
              ]);
            }
          }
        } else {
          if (bonus[type] != 0) flat.push([type, bonus[type]]);
        }
      }
      flat = flat.sort((a,b) => (a[0] == 'flatHundred' || a[0] < b[0])?-1:1);
      return flat;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { bonus, plus = false } = $$props;

      let flat;

    	const writable_props = ['bonus', 'plus'];
    	Object_1.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<SpecialBonus> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('bonus' in $$props) $$invalidate('bonus', bonus = $$props.bonus);
    		if ('plus' in $$props) $$invalidate('plus', plus = $$props.plus);
    	};

    	$$self.$capture_state = () => {
    		return { bonus, plus, flat };
    	};

    	$$self.$inject_state = $$props => {
    		if ('bonus' in $$props) $$invalidate('bonus', bonus = $$props.bonus);
    		if ('plus' in $$props) $$invalidate('plus', plus = $$props.plus);
    		if ('flat' in $$props) $$invalidate('flat', flat = $$props.flat);
    	};

    	$$self.$$.update = ($$dirty = { bonus: 1 }) => {
    		if ($$dirty.bonus) { {
            $$invalidate('flat', flat = f (bonus));
          } }
    	};

    	return { bonus, plus, flat };
    }

    class SpecialBonus extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$7, safe_not_equal, ["bonus", "plus"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "SpecialBonus", options, id: create_fragment$7.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.bonus === undefined && !('bonus' in props)) {
    			console.warn("<SpecialBonus> was created without expected prop 'bonus'");
    		}
    	}

    	get bonus() {
    		throw new Error("<SpecialBonus>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bonus(value) {
    		throw new Error("<SpecialBonus>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get plus() {
    		throw new Error("<SpecialBonus>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set plus(value) {
    		throw new Error("<SpecialBonus>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\CanvasImage.svelte generated by Svelte v3.12.1 */

    const file$5 = "src\\CanvasImage.svelte";

    function create_fragment$8(ctx) {
    	var a, canvas_1, prepareCanvas_action;

    	const block = {
    		c: function create() {
    			a = element("a");
    			canvas_1 = element("canvas");
    			attr_dev(canvas_1, "class", "pixelated");
    			set_style(canvas_1, "display", (ctx.loaded?'inline':'none'));
    			add_location(canvas_1, file$5, 38, 0, 880);
    			attr_dev(a, "href", ctx.src);
    			add_location(a, file$5, 37, 0, 864);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, canvas_1);
    			ctx.canvas_1_binding(canvas_1);
    			prepareCanvas_action = ctx.prepareCanvas.call(null, canvas_1) || {};
    		},

    		p: function update(changed, ctx) {
    			if (changed.loaded) {
    				set_style(canvas_1, "display", (ctx.loaded?'inline':'none'));
    			}

    			if (changed.src) {
    				attr_dev(a, "href", ctx.src);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}

    			ctx.canvas_1_binding(null);
    			if (prepareCanvas_action && typeof prepareCanvas_action.destroy === 'function') prepareCanvas_action.destroy();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$8.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { src, maxWidth = 1e6, maxHeight = 1e6, zoom = 1 } = $$props;

      let canvas;
      let ctx;
      let img = null;
      let loaded = false;

      function updateImage() {
        $$invalidate('canvas', canvas.width = Math.min(maxWidth, img.naturalWidth * zoom), canvas);
        $$invalidate('canvas', canvas.height = Math.min(maxHeight, img.naturalHeight * zoom), canvas);
        ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, img.naturalWidth * zoom, img.naturalHeight * zoom);
        $$invalidate('loaded', loaded = true);
      }

      function prepareCanvas(node) {
        $$invalidate('canvas', canvas = node);
        ctx = canvas.getContext("2d");
        $$invalidate('img', img = new Image());
        $$invalidate('img', img.onload = updateImage, img);
        $$invalidate('img', img.src = src, img);
      }

    	const writable_props = ['src', 'maxWidth', 'maxHeight', 'zoom'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<CanvasImage> was created with unknown prop '${key}'`);
    	});

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			$$invalidate('canvas', canvas = $$value);
    		});
    	}

    	$$self.$set = $$props => {
    		if ('src' in $$props) $$invalidate('src', src = $$props.src);
    		if ('maxWidth' in $$props) $$invalidate('maxWidth', maxWidth = $$props.maxWidth);
    		if ('maxHeight' in $$props) $$invalidate('maxHeight', maxHeight = $$props.maxHeight);
    		if ('zoom' in $$props) $$invalidate('zoom', zoom = $$props.zoom);
    	};

    	$$self.$capture_state = () => {
    		return { src, maxWidth, maxHeight, zoom, canvas, ctx, img, loaded };
    	};

    	$$self.$inject_state = $$props => {
    		if ('src' in $$props) $$invalidate('src', src = $$props.src);
    		if ('maxWidth' in $$props) $$invalidate('maxWidth', maxWidth = $$props.maxWidth);
    		if ('maxHeight' in $$props) $$invalidate('maxHeight', maxHeight = $$props.maxHeight);
    		if ('zoom' in $$props) $$invalidate('zoom', zoom = $$props.zoom);
    		if ('canvas' in $$props) $$invalidate('canvas', canvas = $$props.canvas);
    		if ('ctx' in $$props) ctx = $$props.ctx;
    		if ('img' in $$props) $$invalidate('img', img = $$props.img);
    		if ('loaded' in $$props) $$invalidate('loaded', loaded = $$props.loaded);
    	};

    	$$self.$$.update = ($$dirty = { src: 1, img: 1 }) => {
    		if ($$dirty.src || $$dirty.img) { {
            if (src && img) {      
              $$invalidate('loaded', loaded = false);
              $$invalidate('img', img.src = src, img);
            }
          } }
    	};

    	return {
    		src,
    		maxWidth,
    		maxHeight,
    		zoom,
    		canvas,
    		loaded,
    		prepareCanvas,
    		canvas_1_binding
    	};
    }

    class CanvasImage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$8, safe_not_equal, ["src", "maxWidth", "maxHeight", "zoom"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "CanvasImage", options, id: create_fragment$8.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.src === undefined && !('src' in props)) {
    			console.warn("<CanvasImage> was created without expected prop 'src'");
    		}
    	}

    	get src() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set src(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxWidth() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxWidth(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxHeight() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxHeight(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get zoom() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set zoom(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Item.svelte generated by Svelte v3.12.1 */
    const { console: console_1$1 } = globals;

    const file$6 = "src\\Item.svelte";

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.sound = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$5(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    function get_each_context_4(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context_5(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.res = list[i];
    	return child_ctx;
    }

    function get_each_context_3(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.attack = list[i];
    	return child_ctx;
    }

    // (64:2) {#if (item.sprite && item.sprite != "Resources/Blanks/Blank.png") ||attacks.length > 0}
    function create_if_block_8(ctx) {
    	var tr, td, div, t, current;

    	var canvasimage = new CanvasImage({
    		props: {
    		src: rul.sprite(ctx.item.sprite),
    		maxWidth: 32*ctx.item.invWidth,
    		maxHeight: 32*ctx.item.invHeight,
    		zoom: "2"
    	},
    		$$inline: true
    	});

    	var if_block = (ctx.attacks.length > 0) && create_if_block_9(ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			div = element("div");
    			canvasimage.$$.fragment.c();
    			t = space();
    			if (if_block) if_block.c();
    			set_style(div, "display", "flex");
    			set_style(div, "align-items", "flex-start");
    			set_style(div, "margin", "5px 3px");
    			add_location(div, file$6, 65, 6, 1547);
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "svelte-yer6ww");
    			add_location(td, file$6, 64, 9, 1523);
    			add_location(tr, file$6, 64, 4, 1518);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, div);
    			mount_component(canvasimage, div, null);
    			append_dev(div, t);
    			if (if_block) if_block.m(div, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var canvasimage_changes = {};
    			if (changed.item) canvasimage_changes.src = rul.sprite(ctx.item.sprite);
    			if (changed.item) canvasimage_changes.maxWidth = 32*ctx.item.invWidth;
    			if (changed.item) canvasimage_changes.maxHeight = 32*ctx.item.invHeight;
    			canvasimage.$set(canvasimage_changes);

    			if (ctx.attacks.length > 0) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_9(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(canvasimage.$$.fragment, local);

    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(canvasimage.$$.fragment, local);
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(canvasimage);

    			if (if_block) if_block.d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_8.name, type: "if", source: "(64:2) {#if (item.sprite && item.sprite != \"Resources/Blanks/Blank.png\") ||attacks.length > 0}", ctx });
    	return block;
    }

    // (68:6) {#if attacks.length > 0}
    function create_if_block_9(ctx) {
    	var table, thead, t0, td, t2, current;

    	var if_block = (ctx.item.battleType != 2) && create_if_block_15(ctx);

    	let each_value_3 = ctx.attacks;

    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			thead = element("thead");
    			if (if_block) if_block.c();
    			t0 = space();
    			td = element("td");
    			td.textContent = "damage";
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td, "class", "svelte-yer6ww");
    			add_location(td, file$6, 75, 12, 1990);
    			add_location(thead, file$6, 69, 10, 1819);
    			attr_dev(table, "class", "attacks-table");
    			add_location(table, file$6, 68, 8, 1778);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			if (if_block) if_block.m(thead, null);
    			append_dev(thead, t0);
    			append_dev(thead, td);
    			append_dev(table, t2);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (ctx.item.battleType != 2) {
    				if (!if_block) {
    					if_block = create_if_block_15(ctx);
    					if_block.c();
    					if_block.m(thead, t0);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (changed.attacks || changed.rul || changed.item) {
    				each_value_3 = ctx.attacks;

    				let i;
    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_3.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			if (if_block) if_block.d();

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_9.name, type: "if", source: "(68:6) {#if attacks.length > 0}", ctx });
    	return block;
    }

    // (71:12) {#if item.battleType != 2}
    function create_if_block_15(ctx) {
    	var td0, t1, td1, t3, td2;

    	const block = {
    		c: function create() {
    			td0 = element("td");
    			td0.textContent = "mode";
    			t1 = space();
    			td1 = element("td");
    			td1.textContent = "accuracy";
    			t3 = space();
    			td2 = element("td");
    			td2.textContent = "cost";
    			attr_dev(td0, "class", "svelte-yer6ww");
    			add_location(td0, file$6, 71, 14, 1882);
    			attr_dev(td1, "class", "svelte-yer6ww");
    			add_location(td1, file$6, 72, 14, 1911);
    			attr_dev(td2, "class", "svelte-yer6ww");
    			add_location(td2, file$6, 73, 14, 1944);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, td0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, td1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, td2, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(td0);
    				detach_dev(t1);
    				detach_dev(td1);
    				detach_dev(t3);
    				detach_dev(td2);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_15.name, type: "if", source: "(71:12) {#if item.battleType != 2}", ctx });
    	return block;
    }

    // (90:14) {:else}
    function create_else_block_1(ctx) {
    	var td0, t0_value = ctx.attack.name + "", t0, t1_value = ctx.attack.shots==1?"":"×" + ctx.attack.shots + "", t1, t2, td1, nobr, em0, t3_value = ctx.attack.accuracy + "", t3, small0, t4, br, t5, td2, em1, t6_value = ctx.attack.cost.time + (ctx.attack.flatTime?"":"%") + "", t6, t7, small1, t9, current;

    	var specialbonus = new SpecialBonus({
    		props: { bonus: ctx.attack.accuracyMultiplier },
    		$$inline: true
    	});

    	let each_value_5 = Object.keys(ctx.attack.cost);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_5.length; i += 1) {
    		each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = text(t1_value);
    			t2 = space();
    			td1 = element("td");
    			nobr = element("nobr");
    			em0 = element("em");
    			t3 = text(t3_value);
    			small0 = element("small");
    			t4 = text("%");
    			br = element("br");
    			specialbonus.$$.fragment.c();
    			t5 = space();
    			td2 = element("td");
    			em1 = element("em");
    			t6 = text(t6_value);
    			t7 = space();
    			small1 = element("small");
    			small1.textContent = "TU";
    			t9 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td0, "rowspan", "2");
    			attr_dev(td0, "class", "svelte-yer6ww");
    			add_location(td0, file$6, 90, 16, 2819);
    			add_location(em0, file$6, 91, 26, 2921);
    			add_location(br, file$6, 91, 60, 2955);
    			add_location(small0, file$6, 91, 52, 2947);
    			add_location(nobr, file$6, 91, 20, 2915);
    			attr_dev(td1, "class", "svelte-yer6ww");
    			add_location(td1, file$6, 91, 16, 2911);
    			add_location(em1, file$6, 93, 16, 3069);
    			add_location(small1, file$6, 93, 71, 3124);
    			attr_dev(td2, "class", "svelte-yer6ww");
    			add_location(td2, file$6, 92, 16, 3047);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, td0, anchor);
    			append_dev(td0, t0);
    			append_dev(td0, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, td1, anchor);
    			append_dev(td1, nobr);
    			append_dev(nobr, em0);
    			append_dev(em0, t3);
    			append_dev(nobr, small0);
    			append_dev(small0, t4);
    			append_dev(small0, br);
    			mount_component(specialbonus, small0, null);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, td2, anchor);
    			append_dev(td2, em1);
    			append_dev(em1, t6);
    			append_dev(td2, t7);
    			append_dev(td2, small1);
    			append_dev(td2, t9);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(td2, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.attacks) && t0_value !== (t0_value = ctx.attack.name + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if ((!current || changed.attacks) && t1_value !== (t1_value = ctx.attack.shots==1?"":"×" + ctx.attack.shots + "")) {
    				set_data_dev(t1, t1_value);
    			}

    			if ((!current || changed.attacks) && t3_value !== (t3_value = ctx.attack.accuracy + "")) {
    				set_data_dev(t3, t3_value);
    			}

    			var specialbonus_changes = {};
    			if (changed.attacks) specialbonus_changes.bonus = ctx.attack.accuracyMultiplier;
    			specialbonus.$set(specialbonus_changes);

    			if ((!current || changed.attacks) && t6_value !== (t6_value = ctx.attack.cost.time + (ctx.attack.flatTime?"":"%") + "")) {
    				set_data_dev(t6, t6_value);
    			}

    			if (changed.attacks) {
    				each_value_5 = Object.keys(ctx.attack.cost);

    				let i;
    				for (i = 0; i < each_value_5.length; i += 1) {
    					const child_ctx = get_each_context_5(ctx, each_value_5, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(td2, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_5.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(specialbonus.$$.fragment, local);

    			for (let i = 0; i < each_value_5.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(specialbonus.$$.fragment, local);

    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(td0);
    				detach_dev(t2);
    				detach_dev(td1);
    			}

    			destroy_component(specialbonus);

    			if (detaching) {
    				detach_dev(t5);
    				detach_dev(td2);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block_1.name, type: "else", source: "(90:14) {:else}", ctx });
    	return block;
    }

    // (80:14) {#if attack.mode == "ammo"}
    function create_if_block_12(ctx) {
    	var if_block_anchor, current;

    	var if_block = (ctx.item.battleType != 2) && create_if_block_13(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (ctx.item.battleType != 2) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_13(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_12.name, type: "if", source: "(80:14) {#if attack.mode == \"ammo\"}", ctx });
    	return block;
    }

    // (96:18) {#if res != 'time' && attack.cost[res] != 0}
    function create_if_block_14(ctx) {
    	var br, t0, small, t1_value = ctx.res + "", t1, current;

    	var value = new Value({
    		props: { val: ctx.attack.cost[ctx.res] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			br = element("br");
    			value.$$.fragment.c();
    			t0 = text(" ");
    			small = element("small");
    			t1 = text(t1_value);
    			add_location(br, file$6, 95, 62, 3278);
    			add_location(small, file$6, 95, 104, 3320);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			mount_component(value, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, small, anchor);
    			append_dev(small, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.attacks) value_changes.val = ctx.attack.cost[ctx.res];
    			value.$set(value_changes);

    			if ((!current || changed.attacks) && t1_value !== (t1_value = ctx.res + "")) {
    				set_data_dev(t1, t1_value);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(br);
    			}

    			destroy_component(value, detaching);

    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(small);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_14.name, type: "if", source: "(96:18) {#if res != 'time' && attack.cost[res] != 0}", ctx });
    	return block;
    }

    // (95:16) {#each Object.keys(attack.cost) as res}
    function create_each_block_5(ctx) {
    	var if_block_anchor, current;

    	var if_block = (ctx.res != 'time' && ctx.attack.cost[ctx.res] != 0) && create_if_block_14(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (ctx.res != 'time' && ctx.attack.cost[ctx.res] != 0) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_14(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_5.name, type: "each", source: "(95:16) {#each Object.keys(attack.cost) as res}", ctx });
    	return block;
    }

    // (81:16) {#if item.battleType != 2}
    function create_if_block_13(ctx) {
    	var td0, t0, td1, br, small, t1, t2_value = ctx.attack.item.clipSize + "", t2, t3, t4_value = ctx.attack.item.weight + "", t4, current;

    	var canvasimage = new CanvasImage({
    		props: {
    		src: rul.sprite(ctx.attack.item.sprite),
    		maxWidth: 32*ctx.attack.item.invWidth,
    		maxHeight: 32*ctx.attack.item.invHeight,
    		zoom: "2"
    	},
    		$$inline: true
    	});

    	var link = new Link({
    		props: { href: ctx.attack.item.type },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			td0 = element("td");
    			canvasimage.$$.fragment.c();
    			t0 = space();
    			td1 = element("td");
    			link.$$.fragment.c();
    			br = element("br");
    			small = element("small");
    			t1 = text("Clip: ");
    			t2 = text(t2_value);
    			t3 = text(" Wgt: ");
    			t4 = text(t4_value);
    			attr_dev(td0, "rowspan", "2");
    			attr_dev(td0, "class", "ammo-img svelte-yer6ww");
    			add_location(td0, file$6, 81, 18, 2187);
    			add_location(br, file$6, 86, 51, 2646);
    			add_location(small, file$6, 86, 56, 2651);
    			attr_dev(td1, "colspan", "2");
    			attr_dev(td1, "class", "svelte-yer6ww");
    			add_location(td1, file$6, 85, 18, 2577);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, td0, anchor);
    			mount_component(canvasimage, td0, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, td1, anchor);
    			mount_component(link, td1, null);
    			append_dev(td1, br);
    			append_dev(td1, small);
    			append_dev(small, t1);
    			append_dev(small, t2);
    			append_dev(small, t3);
    			append_dev(small, t4);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var canvasimage_changes = {};
    			if (changed.attacks) canvasimage_changes.src = rul.sprite(ctx.attack.item.sprite);
    			if (changed.attacks) canvasimage_changes.maxWidth = 32*ctx.attack.item.invWidth;
    			if (changed.attacks) canvasimage_changes.maxHeight = 32*ctx.attack.item.invHeight;
    			canvasimage.$set(canvasimage_changes);

    			var link_changes = {};
    			if (changed.attacks) link_changes.href = ctx.attack.item.type;
    			link.$set(link_changes);

    			if ((!current || changed.attacks) && t2_value !== (t2_value = ctx.attack.item.clipSize + "")) {
    				set_data_dev(t2, t2_value);
    			}

    			if ((!current || changed.attacks) && t4_value !== (t4_value = ctx.attack.item.weight + "")) {
    				set_data_dev(t4, t4_value);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(canvasimage.$$.fragment, local);

    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(canvasimage.$$.fragment, local);
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(td0);
    			}

    			destroy_component(canvasimage);

    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(td1);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_13.name, type: "if", source: "(81:16) {#if item.battleType != 2}", ctx });
    	return block;
    }

    // (100:18) {#if 'damage' in attack || 'damageType' in attack}
    function create_if_block_11(ctx) {
    	var nobr, t0_value = ctx.attack.pellets>1 && ctx.attack.damageBonus?"(":"" + "", t0, em, t1_value = ctx.attack.damage || 0 + "", t1, t2, small, t3_value = ctx.attack.pellets>1 && ctx.attack.damageBonus?")":"" + "", t3, t4, t5_value = ctx.attack.pellets>1?" ×" + ctx.attack.pellets:"" + "", t5, t6, br, current;

    	var specialbonus = new SpecialBonus({
    		props: {
    		plus: true,
    		bonus: ctx.attack.damageBonus
    	},
    		$$inline: true
    	});

    	var link = new Link({
    		props: { href: rul.damageTypes[ctx.attack.damageType] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			nobr = element("nobr");
    			t0 = text(t0_value);
    			em = element("em");
    			t1 = text(t1_value);
    			t2 = space();
    			small = element("small");
    			specialbonus.$$.fragment.c();
    			t3 = text(t3_value);
    			t4 = space();
    			t5 = text(t5_value);
    			t6 = space();
    			br = element("br");
    			link.$$.fragment.c();
    			add_location(em, file$6, 100, 69, 3581);
    			add_location(small, file$6, 101, 16, 3628);
    			add_location(nobr, file$6, 100, 16, 3528);
    			add_location(br, file$6, 106, 16, 3886);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, nobr, anchor);
    			append_dev(nobr, t0);
    			append_dev(nobr, em);
    			append_dev(em, t1);
    			append_dev(nobr, t2);
    			append_dev(nobr, small);
    			mount_component(specialbonus, small, null);
    			append_dev(small, t3);
    			append_dev(nobr, t4);
    			append_dev(nobr, t5);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, br, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.attacks) && t0_value !== (t0_value = ctx.attack.pellets>1 && ctx.attack.damageBonus?"(":"" + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if ((!current || changed.attacks) && t1_value !== (t1_value = ctx.attack.damage || 0 + "")) {
    				set_data_dev(t1, t1_value);
    			}

    			var specialbonus_changes = {};
    			if (changed.attacks) specialbonus_changes.bonus = ctx.attack.damageBonus;
    			specialbonus.$set(specialbonus_changes);

    			if ((!current || changed.attacks) && t3_value !== (t3_value = ctx.attack.pellets>1 && ctx.attack.damageBonus?")":"" + "")) {
    				set_data_dev(t3, t3_value);
    			}

    			if ((!current || changed.attacks) && t5_value !== (t5_value = ctx.attack.pellets>1?" ×" + ctx.attack.pellets:"" + "")) {
    				set_data_dev(t5, t5_value);
    			}

    			var link_changes = {};
    			if (changed.attacks) link_changes.href = rul.damageTypes[ctx.attack.damageType];
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(specialbonus.$$.fragment, local);

    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(specialbonus.$$.fragment, local);
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(nobr);
    			}

    			destroy_component(specialbonus);

    			if (detaching) {
    				detach_dev(t6);
    				detach_dev(br);
    			}

    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_11.name, type: "if", source: "(100:18) {#if 'damage' in attack || 'damageType' in attack}", ctx });
    	return block;
    }

    // (114:16) {#if attack.alter}
    function create_if_block_10(ctx) {
    	var each_1_anchor, current;

    	let each_value_4 = Object.keys(ctx.attack.alter).sort();

    	let each_blocks = [];

    	for (let i = 0; i < each_value_4.length; i += 1) {
    		each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.attacks) {
    				each_value_4 = Object.keys(ctx.attack.alter).sort();

    				let i;
    				for (i = 0; i < each_value_4.length; i += 1) {
    					const child_ctx = get_each_context_4(ctx, each_value_4, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_4(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value_4.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_4.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_10.name, type: "if", source: "(114:16) {#if attack.alter}", ctx });
    	return block;
    }

    // (115:18) {#each Object.keys(attack.alter).sort() as field, i}
    function create_each_block_4(ctx) {
    	var t0_value = ctx.field + "", t0, t1, br, current;

    	var value = new Value({
    		props: { val: ctx.attack.alter[ctx.field] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = text(": ");
    			value.$$.fragment.c();
    			br = element("br");
    			add_location(br, file$6, 115, 68, 4290);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(value, target, anchor);
    			insert_dev(target, br, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.attacks) && t0_value !== (t0_value = ctx.field + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			var value_changes = {};
    			if (changed.attacks) value_changes.val = ctx.attack.alter[ctx.field];
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(t1);
    			}

    			destroy_component(value, detaching);

    			if (detaching) {
    				detach_dev(br);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_4.name, type: "each", source: "(115:18) {#each Object.keys(attack.alter).sort() as field, i}", ctx });
    	return block;
    }

    // (78:10) {#each attacks as attack}
    function create_each_block_3(ctx) {
    	var tr0, current_block_type_index, if_block0, t0, td0, t1, tr1, td1, small, t2, current;

    	var if_block_creators = [
    		create_if_block_12,
    		create_else_block_1
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if (ctx.attack.mode == "ammo") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	var if_block1 = ('damage' in ctx.attack || 'damageType' in ctx.attack) && create_if_block_11(ctx);

    	var if_block2 = (ctx.attack.alter) && create_if_block_10(ctx);

    	const block = {
    		c: function create() {
    			tr0 = element("tr");
    			if_block0.c();
    			t0 = space();
    			td0 = element("td");
    			if (if_block1) if_block1.c();
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			small = element("small");
    			if (if_block2) if_block2.c();
    			t2 = space();
    			attr_dev(td0, "class", "svelte-yer6ww");
    			add_location(td0, file$6, 99, 14, 3456);
    			add_location(tr0, file$6, 78, 12, 2076);
    			add_location(small, file$6, 112, 16, 4093);
    			attr_dev(td1, "colspan", "3");
    			set_style(td1, "columns", "2");
    			attr_dev(td1, "class", "svelte-yer6ww");
    			add_location(td1, file$6, 111, 14, 4039);
    			add_location(tr1, file$6, 110, 14, 4019);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr0, anchor);
    			if_blocks[current_block_type_index].m(tr0, null);
    			append_dev(tr0, t0);
    			append_dev(tr0, td0);
    			if (if_block1) if_block1.m(td0, null);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, tr1, anchor);
    			append_dev(tr1, td1);
    			append_dev(td1, small);
    			if (if_block2) if_block2.m(small, null);
    			append_dev(tr1, t2);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block0 = if_blocks[current_block_type_index];
    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				}
    				transition_in(if_block0, 1);
    				if_block0.m(tr0, t0);
    			}

    			if ('damage' in ctx.attack || 'damageType' in ctx.attack) {
    				if (if_block1) {
    					if_block1.p(changed, ctx);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block_11(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(td0, null);
    				}
    			} else if (if_block1) {
    				group_outros();
    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});
    				check_outros();
    			}

    			if (ctx.attack.alter) {
    				if (if_block2) {
    					if_block2.p(changed, ctx);
    					transition_in(if_block2, 1);
    				} else {
    					if_block2 = create_if_block_10(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(small, null);
    				}
    			} else if (if_block2) {
    				group_outros();
    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(if_block2);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(if_block2);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr0);
    			}

    			if_blocks[current_block_type_index].d();
    			if (if_block1) if_block1.d();

    			if (detaching) {
    				detach_dev(t1);
    				detach_dev(tr1);
    			}

    			if (if_block2) if_block2.d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_3.name, type: "each", source: "(78:10) {#each attacks as attack}", ctx });
    	return block;
    }

    // (132:4) {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(key)}
    function create_if_block$5(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, show_if, show_if_1, show_if_2, show_if_3, show_if_4, show_if_5, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$3,
    		create_if_block_2$3,
    		create_if_block_3$1,
    		create_if_block_4,
    		create_if_block_5,
    		create_if_block_6,
    		create_if_block_7,
    		create_else_block$3
    	];

    	var if_blocks = [];

    	function select_block_type_1(changed, ctx) {
    		if ((show_if == null) || changed.item) show_if = !!(['requiresBuyBaseFunc' ].includes(ctx.key));
    		if (show_if) return 0;
    		if ((show_if_1 == null) || changed.item) show_if_1 = !!(['manufacture', 'componentOf'].includes(ctx.key));
    		if (show_if_1) return 1;
    		if ((show_if_2 == null) || changed.item) show_if_2 = !!(['damageBonus', 'meleeBonus', 'accuracyMultiplier', 'meleeMultiplier', 'closeQuartersMultiplier'].includes(ctx.key));
    		if (show_if_2) return 2;
    		if ((show_if_3 == null) || changed.item) show_if_3 = !!(['damageType', 'meleeType'].includes(ctx.key));
    		if (show_if_3) return 3;
    		if (ctx.key == 'battleType') return 4;
    		if ((show_if_4 == null) || changed.item) show_if_4 = !!(ctx.key.includes("Sound"));
    		if (show_if_4) return 5;
    		if ((show_if_5 == null) || changed.item) show_if_5 = !!(['floorSprite', 'handSprite'].includes(ctx.key));
    		if (show_if_5) return 6;
    		return 7;
    	}

    	current_block_type_index = select_block_type_1(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "svelte-yer6ww");
    			add_location(td0, file$6, 133, 8, 4689);
    			attr_dev(td1, "class", "right-column svelte-yer6ww");
    			add_location(td1, file$6, 134, 8, 4735);
    			add_location(tr, file$6, 132, 6, 4675);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.item) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$5.name, type: "if", source: "(132:4) {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(key)}", ctx });
    	return block;
    }

    // (158:8) {:else}
    function create_else_block$3(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.item) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$3.name, type: "else", source: "(158:8) {:else}", ctx });
    	return block;
    }

    // (155:62) 
    function create_if_block_7(ctx) {
    	var a, t0_value = ctx.prop + "", t0, a_href_value, t1, img, img_alt_value, img_src_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			img = element("img");
    			set_style(a, "vertical-align", "top");
    			attr_dev(a, "href", a_href_value = rul.specialSprite(ctx.key, ctx.prop));
    			add_location(a, file$6, 155, 10, 5798);
    			attr_dev(img, "class", "sprite svelte-yer6ww");
    			attr_dev(img, "alt", img_alt_value = ctx.prop);
    			attr_dev(img, "src", img_src_value = rul.specialSprite(ctx.key, ctx.prop));
    			add_location(img, file$6, 156, 10, 5887);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, img, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.item) && t0_value !== (t0_value = ctx.prop + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if ((changed.item) && a_href_value !== (a_href_value = rul.specialSprite(ctx.key, ctx.prop))) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if ((changed.item) && img_alt_value !== (img_alt_value = ctx.prop)) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if ((changed.item) && img_src_value !== (img_src_value = rul.specialSprite(ctx.key, ctx.prop))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    				detach_dev(t1);
    				detach_dev(img);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_7.name, type: "if", source: "(155:62) ", ctx });
    	return block;
    }

    // (150:40) 
    function create_if_block_6(ctx) {
    	var each_1_anchor;

    	let each_value_2 = soundsFrom(ctx.prop);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (changed.soundsFrom || changed.item) {
    				each_value_2 = soundsFrom(ctx.prop);

    				let i;
    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_2.length;
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_6.name, type: "if", source: "(150:40) ", ctx });
    	return block;
    }

    // (148:38) 
    function create_if_block_5(ctx) {
    	var t0_value = ctx.prop + "", t0, t1, t2_value = rul.battleTypes[ctx.prop] + "", t2;

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = text(": ");
    			t2 = text(t2_value);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, t2, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.item) && t0_value !== (t0_value = ctx.prop + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if ((changed.item) && t2_value !== (t2_value = rul.battleTypes[ctx.prop] + "")) {
    				set_data_dev(t2, t2_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(t1);
    				detach_dev(t2);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_5.name, type: "if", source: "(148:38) ", ctx });
    	return block;
    }

    // (146:60) 
    function create_if_block_4(ctx) {
    	var t_value = rul.damageTypeName(ctx.prop) + "", t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.item) && t_value !== (t_value = rul.damageTypeName(ctx.prop) + "")) {
    				set_data_dev(t, t_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_4.name, type: "if", source: "(146:60) ", ctx });
    	return block;
    }

    // (144:130) 
    function create_if_block_3$1(ctx) {
    	var current;

    	var specialbonus = new SpecialBonus({
    		props: { bonus: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			specialbonus.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(specialbonus, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var specialbonus_changes = {};
    			if (changed.item) specialbonus_changes.bonus = ctx.prop;
    			specialbonus.$set(specialbonus_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(specialbonus.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(specialbonus.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(specialbonus, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$1.name, type: "if", source: "(144:130) ", ctx });
    	return block;
    }

    // (138:63) 
    function create_if_block_2$3(ctx) {
    	var table, current;

    	let each_value_1 = Object.keys(ctx.prop);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "number-table");
    			add_location(table, file$6, 138, 10, 4952);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.item) {
    				each_value_1 = Object.keys(ctx.prop);

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$3.name, type: "if", source: "(138:63) ", ctx });
    	return block;
    }

    // (136:8) {#if ['requiresBuyBaseFunc' ].includes(key)}
    function create_if_block_1$3(ctx) {
    	var current;

    	var baseservicelist = new BaseServiceList({
    		props: {
    		items: ctx.prop,
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			baseservicelist.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var baseservicelist_changes = {};
    			if (changed.item) baseservicelist_changes.items = ctx.prop;
    			baseservicelist.$set(baseservicelist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$3.name, type: "if", source: "(136:8) {#if ['requiresBuyBaseFunc' ].includes(key)}", ctx });
    	return block;
    }

    // (151:10) {#each soundsFrom(prop) as sound, i}
    function create_each_block_2(ctx) {
    	var html_tag, raw_value = ctx.i>0?"<br/>":"" + "", t0, audio, t1, audio_src_value;

    	const block = {
    		c: function create() {
    			t0 = space();
    			audio = element("audio");
    			t1 = text("Audio tag not working");
    			html_tag = new HtmlTag(raw_value, t0);
    			audio.controls = true;
    			attr_dev(audio, "src", audio_src_value = ctx.sound);
    			add_location(audio, file$6, 152, 12, 5646);
    		},

    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, audio, anchor);
    			append_dev(audio, t1);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.item) && audio_src_value !== (audio_src_value = ctx.sound)) {
    				attr_dev(audio, "src", audio_src_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				html_tag.d();
    				detach_dev(t0);
    				detach_dev(audio);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2.name, type: "each", source: "(151:10) {#each soundsFrom(prop) as sound, i}", ctx });
    	return block;
    }

    // (140:10) {#each Object.keys(prop) as field, i}
    function create_each_block_1(ctx) {
    	var tr, td0, em, t_value = ctx.prop[ctx.field] + "", t, td1, current;

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			em = element("em");
    			t = text(t_value);
    			td1 = element("td");
    			link.$$.fragment.c();
    			add_location(em, file$6, 140, 20, 5051);
    			attr_dev(td0, "class", "svelte-yer6ww");
    			add_location(td0, file$6, 140, 16, 5047);
    			attr_dev(td1, "class", "svelte-yer6ww");
    			add_location(td1, file$6, 140, 47, 5078);
    			add_location(tr, file$6, 140, 12, 5043);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, em);
    			append_dev(em, t);
    			append_dev(tr, td1);
    			mount_component(link, td1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.item) && t_value !== (t_value = ctx.prop[ctx.field] + "")) {
    				set_data_dev(t, t_value);
    			}

    			var link_changes = {};
    			if (changed.item) link_changes.href = ctx.field;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1.name, type: "each", source: "(140:10) {#each Object.keys(prop) as field, i}", ctx });
    	return block;
    }

    // (131:2) {#each Object.entries(item).sort((a,b) => a[0]>b[0]?1:-1) as [key, prop]}
    function create_each_block$5(ctx) {
    	var show_if = !['sprite', 'type', '_attacks', 'damageAlter'].includes(ctx.key), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$5(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.item) show_if = !['sprite', 'type', '_attacks', 'damageAlter'].includes(ctx.key);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$5(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$5.name, type: "each", source: "(131:2) {#each Object.entries(item).sort((a,b) => a[0]>b[0]?1:-1) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$9(ctx) {
    	var tr, td, t0, t1, t2, each_1_anchor, current;

    	var if_block = ((ctx.item.sprite && ctx.item.sprite != "Resources/Blanks/Blank.png") ||ctx.attacks.length > 0) && create_if_block_8(ctx);

    	let each_value = Object.entries(ctx.item).sort(func);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(ctx.title);
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header svelte-yer6ww");
    			add_location(td, file$6, 62, 7, 1366);
    			add_location(tr, file$6, 62, 2, 1361);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t2, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (!current || changed.title) {
    				set_data_dev(t0, ctx.title);
    			}

    			if ((ctx.item.sprite && ctx.item.sprite != "Resources/Blanks/Blank.png") ||ctx.attacks.length > 0) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_8(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(t2.parentNode, t2);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}

    			if (changed.item || changed.rul || changed.soundsFrom) {
    				each_value = Object.entries(ctx.item).sort(func);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$5(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);

    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    				detach_dev(t1);
    			}

    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t2);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$9.name, type: "component", source: "", ctx });
    	return block;
    }

    function soundsFrom(sounds){
      if(!sounds)
        return []
      if(!sounds.length)
        sounds = [sounds];
      return sounds.map(s => rul.path + rul.sounds[s]).filter(s => s)
    }

    const func = (a,b) => a[0]>b[0]?1:-1;

    function instance$8($$self, $$props, $$invalidate) {
    	  

      let { item, title = "Item" } = $$props;
      let attacks;

      console.info(item);

    	const writable_props = ['item', 'title'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$1.warn(`<Item> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('item' in $$props) $$invalidate('item', item = $$props.item);
    		if ('title' in $$props) $$invalidate('title', title = $$props.title);
    	};

    	$$self.$capture_state = () => {
    		return { item, title, attacks };
    	};

    	$$self.$inject_state = $$props => {
    		if ('item' in $$props) $$invalidate('item', item = $$props.item);
    		if ('title' in $$props) $$invalidate('title', title = $$props.title);
    		if ('attacks' in $$props) $$invalidate('attacks', attacks = $$props.attacks);
    	};

    	$$self.$$.update = ($$dirty = { item: 1, attacks: 1 }) => {
    		if ($$dirty.item || $$dirty.attacks) { { 
              $$invalidate('attacks', attacks = item.attacks().slice());
              if(item.compatibleAmmo)
                for(let ammoId of item.compatibleAmmo){
                  let ammo = rul.items[ammoId];
                  let ammoAttack = ammo.attacks()[0];
                  ammoAttack.item = ammo;
                  attacks.push(ammoAttack);
                }
        
              console.info(attacks);
            } }
    	};

    	return { item, title, attacks };
    }

    class Item$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$9, safe_not_equal, ["item", "title"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Item", options, id: create_fragment$9.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.item === undefined && !('item' in props)) {
    			console_1$1.warn("<Item> was created without expected prop 'item'");
    		}
    	}

    	get item() {
    		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set item(value) {
    		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Armor.svelte generated by Svelte v3.12.1 */
    const { console: console_1$2 } = globals;

    const file$7 = "src\\Armor.svelte";

    function get_each_context_2$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context_1$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.res = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$6(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    function get_each_context_5$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.subfield = list[i];
    	child_ctx.j = i;
    	return child_ctx;
    }

    function get_each_context_4$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.val = list[i][1];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context_3$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.prop = list[i];
    	return child_ctx;
    }

    function get_each_context_7(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.url = list[i];
    	child_ctx.j = i;
    	return child_ctx;
    }

    function get_each_context_6(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.body = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    // (39:6) {#if seeAlso.length > 0}
    function create_if_block_14$1(ctx) {
    	var span, t_1, current;

    	var linkslist = new LinksList({
    		props: { items: ctx.seeAlso },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "- see also";
    			t_1 = space();
    			linkslist.$$.fragment.c();
    			set_style(span, "color", "white");
    			add_location(span, file$7, 39, 8, 851);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			insert_dev(target, t_1, anchor);
    			mount_component(linkslist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkslist_changes = {};
    			if (changed.seeAlso) linkslist_changes.items = ctx.seeAlso;
    			linkslist.$set(linkslist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(span);
    				detach_dev(t_1);
    			}

    			destroy_component(linkslist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_14$1.name, type: "if", source: "(39:6) {#if seeAlso.length > 0}", ctx });
    	return block;
    }

    // (48:8) {#if Object.keys(armor.dollSprites).length > 1}
    function create_if_block_13$1(ctx) {
    	var p, button, t0_value = ctx.seeAllVariants ? 'Hide' : 'See' + "", t0, t1, dispose;

    	const block = {
    		c: function create() {
    			p = element("p");
    			button = element("button");
    			t0 = text(t0_value);
    			t1 = text(" all variants");
    			attr_dev(button, "class", "btn-hover-effect btn-hover-effect--effect-1");
    			add_location(button, file$7, 49, 12, 1110);
    			add_location(p, file$7, 48, 10, 1093);
    			dispose = listen_dev(button, "click", ctx.click_handler);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, button);
    			append_dev(button, t0);
    			append_dev(button, t1);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.seeAllVariants) && t0_value !== (t0_value = ctx.seeAllVariants ? 'Hide' : 'See' + "")) {
    				set_data_dev(t0, t0_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(p);
    			}

    			dispose();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_13$1.name, type: "if", source: "(48:8) {#if Object.keys(armor.dollSprites).length > 1}", ctx });
    	return block;
    }

    // (58:8) {#if armor.dollSprites}
    function create_if_block_10$1(ctx) {
    	var t, div, div_style_value;

    	let each_value_6 = Object.keys(ctx.armor.dollSprites).sort(ctx.func
              );

    	let each_blocks = [];

    	for (let i = 0; i < each_value_6.length; i += 1) {
    		each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t = space();
    			div = element("div");
    			attr_dev(div, "style", div_style_value = 'height:' + (ctx.seeAllVariants ? (Math.floor(Object.keys(ctx.armor.dollSprites).length / dollColumns) + 1) * 120 : 120) + 'px');
    			add_location(div, file$7, 74, 10, 2071);
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, t, anchor);
    			insert_dev(target, div, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (changed.seeAllVariants || changed.dollColumns || changed.armor || changed.rul) {
    				each_value_6 = Object.keys(ctx.armor.dollSprites).sort(ctx.func
              );

    				let i;
    				for (i = 0; i < each_value_6.length; i += 1) {
    					const child_ctx = get_each_context_6(ctx, each_value_6, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_6(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(t.parentNode, t);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_6.length;
    			}

    			if ((changed.seeAllVariants || changed.armor) && div_style_value !== (div_style_value = 'height:' + (ctx.seeAllVariants ? (Math.floor(Object.keys(ctx.armor.dollSprites).length / dollColumns) + 1) * 120 : 120) + 'px')) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(t);
    				detach_dev(div);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_10$1.name, type: "if", source: "(58:8) {#if armor.dollSprites}", ctx });
    	return block;
    }

    // (62:12) {#if seeAllVariants || i == 0}
    function create_if_block_11$1(ctx) {
    	var div, t;

    	var if_block = (ctx.seeAllVariants) && create_if_block_12$1(ctx);

    	let each_value_7 = ctx.armor.dollSprites[ctx.body];

    	let each_blocks = [];

    	for (let i = 0; i < each_value_7.length; i += 1) {
    		each_blocks[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(div, "class", "armor");
    			set_style(div, "left", "" + (ctx.i % dollColumns) * 80 + "px");
    			set_style(div, "top", "" + Math.floor(ctx.i / dollColumns) * 120 + "px");
    			add_location(div, file$7, 62, 14, 1590);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			append_dev(div, t);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},

    		p: function update(changed, ctx) {
    			if (ctx.seeAllVariants) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    				} else {
    					if_block = create_if_block_12$1(ctx);
    					if_block.c();
    					if_block.m(div, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (changed.armor || changed.rul) {
    				each_value_7 = ctx.armor.dollSprites[ctx.body];

    				let i;
    				for (i = 0; i < each_value_7.length; i += 1) {
    					const child_ctx = get_each_context_7(ctx, each_value_7, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_7(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_7.length;
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}

    			if (if_block) if_block.d();

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_11$1.name, type: "if", source: "(62:12) {#if seeAllVariants || i == 0}", ctx });
    	return block;
    }

    // (66:16) {#if seeAllVariants}
    function create_if_block_12$1(ctx) {
    	var div, t_value = ctx.body + "", t;

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = text(t_value);
    			attr_dev(div, "class", "armor-variant");
    			add_location(div, file$7, 66, 18, 1785);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && t_value !== (t_value = ctx.body + "")) {
    				set_data_dev(t, t_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_12$1.name, type: "if", source: "(66:16) {#if seeAllVariants}", ctx });
    	return block;
    }

    // (69:16) {#each armor.dollSprites[body] as url, j}
    function create_each_block_7(ctx) {
    	var img, img_src_value, img_alt_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "src", img_src_value = ctx.url);
    			attr_dev(img, "alt", img_alt_value = ctx.body);
    			attr_dev(img, "class", "armor-layer");
    			add_location(img, file$7, 69, 18, 1926);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && img_src_value !== (img_src_value = ctx.url)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if ((changed.armor) && img_alt_value !== (img_alt_value = ctx.body)) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(img);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_7.name, type: "each", source: "(69:16) {#each armor.dollSprites[body] as url, j}", ctx });
    	return block;
    }

    // (59:10) {#each Object.keys(armor.dollSprites).sort((a, b) =>              rul.bodiesCompare([a, b])            ) as body, i}
    function create_each_block_6(ctx) {
    	var if_block_anchor;

    	var if_block = (ctx.seeAllVariants || ctx.i == 0) && create_if_block_11$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (ctx.seeAllVariants || ctx.i == 0) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    				} else {
    					if_block = create_if_block_11$1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_6.name, type: "each", source: "(59:10) {#each Object.keys(armor.dollSprites).sort((a, b) =>              rul.bodiesCompare([a, b])            ) as body, i}", ctx });
    	return block;
    }

    // (85:10) {#if armor[prop]}
    function create_if_block_6$1(ctx) {
    	var table, thead, tr, td, raw_value = rul.decamelize(ctx.prop) + "", t0, t1, current;

    	let each_value_4 = Object.entries(ctx.armor[ctx.prop]).sort(ctx.func_1
                  );

    	let each_blocks = [];

    	for (let i = 0; i < each_value_4.length; i += 1) {
    		each_blocks[i] = create_each_block_4$1(get_each_context_4$1(ctx, each_value_4, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			thead = element("thead");
    			tr = element("tr");
    			td = element("td");
    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "number-table-header");
    			set_style(td, "text-align", "center");
    			add_location(td, file$7, 88, 18, 2558);
    			add_location(tr, file$7, 87, 16, 2534);
    			add_location(thead, file$7, 86, 14, 2509);
    			attr_dev(table, "class", "number-table armor-column");
    			add_location(table, file$7, 85, 12, 2452);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr);
    			append_dev(tr, td);
    			td.innerHTML = raw_value;
    			append_dev(table, t0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			append_dev(table, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.armor || changed.rul) {
    				each_value_4 = Object.entries(ctx.armor[ctx.prop]).sort(ctx.func_1
                  );

    				let i;
    				for (i = 0; i < each_value_4.length; i += 1) {
    					const child_ctx = get_each_context_4$1(ctx, each_value_4, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_4$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, t1);
    					}
    				}

    				group_outros();
    				for (i = each_value_4.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_4.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_6$1.name, type: "if", source: "(85:10) {#if armor[prop]}", ctx });
    	return block;
    }

    // (104:20) {:else}
    function create_else_block_2(ctx) {
    	var nobr, t_value = rul.decamelize(ctx.key) + "", t;

    	const block = {
    		c: function create() {
    			nobr = element("nobr");
    			t = text(t_value);
    			add_location(nobr, file$7, 104, 22, 3181);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, nobr, anchor);
    			append_dev(nobr, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && t_value !== (t_value = rul.decamelize(ctx.key) + "")) {
    				set_data_dev(t, t_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(nobr);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block_2.name, type: "else", source: "(104:20) {:else}", ctx });
    	return block;
    }

    // (102:20) {#if prop == 'damageModifier'}
    function create_if_block_9$1(ctx) {
    	var current;

    	var link = new Link({
    		props: { href: rul.damageTypes[ctx.key] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			link.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.armor) link_changes.href = rul.damageTypes[ctx.key];
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_9$1.name, type: "if", source: "(102:20) {#if prop == 'damageModifier'}", ctx });
    	return block;
    }

    // (120:20) {:else}
    function create_else_block_1$1(ctx) {
    	var em, raw_value = ctx.prop == 'damageModifier' ? Math.floor(ctx.val * 100) : rul.decamelize(ctx.val) + "";

    	const block = {
    		c: function create() {
    			em = element("em");
    			add_location(em, file$7, 120, 22, 3798);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, em, anchor);
    			em.innerHTML = raw_value;
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && raw_value !== (raw_value = ctx.prop == 'damageModifier' ? Math.floor(ctx.val * 100) : rul.decamelize(ctx.val) + "")) {
    				em.innerHTML = raw_value;
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(em);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block_1$1.name, type: "else", source: "(120:20) {:else}", ctx });
    	return block;
    }

    // (109:20) {#if 'recovery' == prop}
    function create_if_block_7$1(ctx) {
    	var each_1_anchor;

    	let each_value_5 = Object.keys(ctx.val);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_5.length; i += 1) {
    		each_blocks[i] = create_each_block_5$1(get_each_context_5$1(ctx, each_value_5, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (changed.rul || changed.armor) {
    				each_value_5 = Object.keys(ctx.val);

    				let i;
    				for (i = 0; i < each_value_5.length; i += 1) {
    					const child_ctx = get_each_context_5$1(ctx, each_value_5, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_5$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_5.length;
    			}
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_7$1.name, type: "if", source: "(109:20) {#if 'recovery' == prop}", ctx });
    	return block;
    }

    // (111:24) {#if j != 0}
    function create_if_block_8$1(ctx) {
    	var br;

    	const block = {
    		c: function create() {
    			br = element("br");
    			add_location(br, file$7, 111, 26, 3466);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(br);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_8$1.name, type: "if", source: "(111:24) {#if j != 0}", ctx });
    	return block;
    }

    // (110:22) {#each Object.keys(val) as subfield, j}
    function create_each_block_5$1(ctx) {
    	var t0, html_tag, raw0_value = rul.decamelize(ctx.subfield) + "", t1, em, raw1_value = rul.decamelize(ctx.val[ctx.subfield]) + "";

    	var if_block = (ctx.j != 0) && create_if_block_8$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();
    			t1 = text("\r\n                        :\r\n                        ");
    			em = element("em");
    			html_tag = new HtmlTag(raw0_value, t1);
    			add_location(em, file$7, 115, 24, 3614);
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			html_tag.m(target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, em, anchor);
    			em.innerHTML = raw1_value;
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && raw0_value !== (raw0_value = rul.decamelize(ctx.subfield) + "")) {
    				html_tag.p(raw0_value);
    			}

    			if ((changed.armor) && raw1_value !== (raw1_value = rul.decamelize(ctx.val[ctx.subfield]) + "")) {
    				em.innerHTML = raw1_value;
    			}
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t0);
    				html_tag.d();
    				detach_dev(t1);
    				detach_dev(em);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_5$1.name, type: "each", source: "(110:22) {#each Object.keys(val) as subfield, j}", ctx });
    	return block;
    }

    // (97:14) {#each Object.entries(armor[prop]).sort((a, b) =>                  rul.str(a[0]) > rul.str(b[0]) ? 1 : -1                ) as [key, val], i}
    function create_each_block_4$1(ctx) {
    	var tr, td0, current_block_type_index, if_block0, t, td1, current;

    	var if_block_creators = [
    		create_if_block_9$1,
    		create_else_block_2
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if (ctx.prop == 'damageModifier') return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	function select_block_type_1(changed, ctx) {
    		if ('recovery' == ctx.prop) return create_if_block_7$1;
    		return create_else_block_1$1;
    	}

    	var current_block_type = select_block_type_1(null, ctx);
    	var if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			if_block0.c();
    			t = space();
    			td1 = element("td");
    			if_block1.c();
    			add_location(td0, file$7, 100, 18, 3012);
    			add_location(td1, file$7, 107, 18, 3287);
    			add_location(tr, file$7, 99, 16, 2988);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			if_blocks[current_block_type_index].m(td0, null);
    			append_dev(tr, t);
    			append_dev(tr, td1);
    			if_block1.m(td1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if_block0.p(changed, ctx);
    			if_block1.p(changed, ctx);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block0);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    			if_block1.d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_4$1.name, type: "each", source: "(97:14) {#each Object.entries(armor[prop]).sort((a, b) =>                  rul.str(a[0]) > rul.str(b[0]) ? 1 : -1                ) as [key, val], i}", ctx });
    	return block;
    }

    // (84:8) {#each ['armor', 'damageModifier', 'stats', 'recovery'] as prop}
    function create_each_block_3$1(ctx) {
    	var if_block_anchor, current;

    	var if_block = (ctx.armor[ctx.prop]) && create_if_block_6$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (ctx.armor[ctx.prop]) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_6$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_3$1.name, type: "each", source: "(84:8) {#each ['armor', 'damageModifier', 'stats', 'recovery'] as prop}", ctx });
    	return block;
    }

    // (138:4) {#if !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(key)}
    function create_if_block$6(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, show_if, show_if_1, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$4,
    		create_if_block_2$4,
    		create_if_block_3$2,
    		create_if_block_4$1,
    		create_else_block$4
    	];

    	var if_blocks = [];

    	function select_block_type_2(changed, ctx) {
    		if (ctx.key == 'damageModifier') return 0;
    		if ((show_if == null) || changed.armor) show_if = !!(['corpseBattle'].includes(ctx.key));
    		if (show_if) return 1;
    		if ('spriteSheet' == ctx.key) return 2;
    		if ((show_if_1 == null) || changed.armor) show_if_1 = !!(['builtInWeapons', 'users', 'units'].includes(ctx.key));
    		if (show_if_1) return 3;
    		return 4;
    	}

    	current_block_type_index = select_block_type_2(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			add_location(td0, file$7, 139, 8, 4603);
    			add_location(td1, file$7, 142, 8, 4671);
    			add_location(tr, file$7, 138, 6, 4589);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.armor) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$6.name, type: "if", source: "(138:4) {#if !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(key)}", ctx });
    	return block;
    }

    // (166:10) {:else}
    function create_else_block$4(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.armor) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$4.name, type: "else", source: "(166:10) {:else}", ctx });
    	return block;
    }

    // (161:71) 
    function create_if_block_4$1(ctx) {
    	var each_1_anchor, current;

    	let each_value_2 = ctx.prop.filter(func_3);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.armor) {
    				each_value_2 = ctx.prop.filter(func_3);

    				let i;
    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$1(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_4$1.name, type: "if", source: "(161:71) ", ctx });
    	return block;
    }

    // (159:41) 
    function create_if_block_3$2(ctx) {
    	var a, t_value = ctx.prop + "", t, a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = rul.sprite(ctx.prop));
    			add_location(a, file$7, 159, 12, 5290);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && t_value !== (t_value = ctx.prop + "")) {
    				set_data_dev(t, t_value);
    			}

    			if ((changed.armor) && a_href_value !== (a_href_value = rul.sprite(ctx.prop))) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$2.name, type: "if", source: "(159:41) ", ctx });
    	return block;
    }

    // (157:51) 
    function create_if_block_2$4(ctx) {
    	var current;

    	var link = new Link({
    		props: { href: ctx.prop[0] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			link.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.armor) link_changes.href = ctx.prop[0];
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$4.name, type: "if", source: "(157:51) ", ctx });
    	return block;
    }

    // (144:10) {#if key == 'damageModifier'}
    function create_if_block_1$4(ctx) {
    	var table;

    	let each_value_1 = ctx.prop;

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "number-table");
    			add_location(table, file$7, 144, 12, 4730);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}
    		},

    		p: function update(changed, ctx) {
    			if (changed.armor || changed.rul) {
    				each_value_1 = ctx.prop;

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_1$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(table, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_1.length;
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$4.name, type: "if", source: "(144:10) {#if key == 'damageModifier'}", ctx });
    	return block;
    }

    // (163:14) {#if i != 0}
    function create_if_block_5$1(ctx) {
    	var t;

    	const block = {
    		c: function create() {
    			t = text(",");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_5$1.name, type: "if", source: "(163:14) {#if i != 0}", ctx });
    	return block;
    }

    // (162:12) {#each prop.filter(s => s.substr(0, 8) != 'INV_NULL') as field, i}
    function create_each_block_2$1(ctx) {
    	var t, current;

    	var if_block = (ctx.i != 0) && create_if_block_5$1(ctx);

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();
    			link.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.armor) link_changes.href = ctx.field;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t);
    			}

    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$1.name, type: "each", source: "(162:12) {#each prop.filter(s => s.substr(0, 8) != 'INV_NULL') as field, i}", ctx });
    	return block;
    }

    // (146:14) {#each prop as res, i}
    function create_each_block_1$1(ctx) {
    	var tr, td0, t0_value = rul.damageTypeName(ctx.i) + "", t0, t1, td1, t2_value = Math.round(ctx.res * 100) + "", t2, t3, t4;

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			td1 = element("td");
    			t2 = text(t2_value);
    			t3 = text("%");
    			t4 = space();
    			attr_dev(td0, "width", "50%");
    			attr_dev(td0, "class", "number-table1");
    			add_location(td0, file$7, 147, 18, 4838);
    			attr_dev(td1, "width", "50%");
    			attr_dev(td1, "class", "number-table2");
    			add_location(td1, file$7, 150, 18, 4966);
    			add_location(tr, file$7, 146, 16, 4814);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(tr, t1);
    			append_dev(tr, td1);
    			append_dev(td1, t2);
    			append_dev(td1, t3);
    			append_dev(tr, t4);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.armor) && t2_value !== (t2_value = Math.round(ctx.res * 100) + "")) {
    				set_data_dev(t2, t2_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$1.name, type: "each", source: "(146:14) {#each prop as res, i}", ctx });
    	return block;
    }

    // (135:2) {#each Object.entries(armor).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as [key, prop]}
    function create_each_block$6(ctx) {
    	var show_if = !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(ctx.key), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$6(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.armor) show_if = !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(ctx.key);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$6.name, type: "each", source: "(135:2) {#each Object.entries(armor).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$a(ctx) {
    	var table, tr0, td0, t0_value = rul.str("Armor") + "", t0, t1, t2, tr1, td1, div0, show_if = Object.keys(ctx.armor.dollSprites).length > 1, t3, t4, tr2, td2, div1, t5, current;

    	var if_block0 = (ctx.seeAlso.length > 0) && create_if_block_14$1(ctx);

    	var if_block1 = (show_if) && create_if_block_13$1(ctx);

    	var if_block2 = (ctx.armor.dollSprites) && create_if_block_10$1(ctx);

    	let each_value_3 = ['armor', 'damageModifier', 'stats', 'recovery'];

    	let each_blocks_1 = [];

    	for (let i = 0; i < 4; i += 1) {
    		each_blocks_1[i] = create_each_block_3$1(get_each_context_3$1(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
    		each_blocks_1[i] = null;
    	});

    	let each_value = Object.entries(ctx.armor).sort(func_2
      );

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
    	}

    	const out_1 = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr0 = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			div0 = element("div");
    			if (if_block1) if_block1.c();
    			t3 = space();
    			if (if_block2) if_block2.c();
    			t4 = space();
    			tr2 = element("tr");
    			td2 = element("td");
    			div1 = element("div");

    			for (let i = 0; i < 4; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t5 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-header");
    			add_location(td0, file$7, 36, 4, 746);
    			add_location(tr0, file$7, 35, 2, 736);
    			attr_dev(div0, "class", "armors");
    			add_location(div0, file$7, 46, 6, 1004);
    			attr_dev(td1, "colspan", "2");
    			add_location(td1, file$7, 45, 4, 980);
    			add_location(tr1, file$7, 44, 2, 970);
    			attr_dev(div1, "class", "flex-horisontal");
    			add_location(div1, file$7, 82, 6, 2306);
    			attr_dev(td2, "colspan", "2");
    			add_location(td2, file$7, 81, 4, 2282);
    			add_location(tr2, file$7, 80, 2, 2272);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$7, 34, 0, 706);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr0);
    			append_dev(tr0, td0);
    			append_dev(td0, t0);
    			append_dev(td0, t1);
    			if (if_block0) if_block0.m(td0, null);
    			append_dev(table, t2);
    			append_dev(table, tr1);
    			append_dev(tr1, td1);
    			append_dev(td1, div0);
    			if (if_block1) if_block1.m(div0, null);
    			append_dev(div0, t3);
    			if (if_block2) if_block2.m(div0, null);
    			append_dev(table, t4);
    			append_dev(table, tr2);
    			append_dev(tr2, td2);
    			append_dev(td2, div1);

    			for (let i = 0; i < 4; i += 1) {
    				each_blocks_1[i].m(div1, null);
    			}

    			append_dev(table, t5);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (ctx.seeAlso.length > 0) {
    				if (if_block0) {
    					if_block0.p(changed, ctx);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_14$1(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(td0, null);
    				}
    			} else if (if_block0) {
    				group_outros();
    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});
    				check_outros();
    			}

    			if (changed.armor) show_if = Object.keys(ctx.armor.dollSprites).length > 1;

    			if (show_if) {
    				if (if_block1) {
    					if_block1.p(changed, ctx);
    				} else {
    					if_block1 = create_if_block_13$1(ctx);
    					if_block1.c();
    					if_block1.m(div0, t3);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (ctx.armor.dollSprites) {
    				if (if_block2) {
    					if_block2.p(changed, ctx);
    				} else {
    					if_block2 = create_if_block_10$1(ctx);
    					if_block2.c();
    					if_block2.m(div0, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}

    			if (changed.armor || changed.rul) {
    				each_value_3 = ['armor', 'damageModifier', 'stats', 'recovery'];

    				let i;
    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$1(ctx, each_value_3, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(changed, child_ctx);
    						transition_in(each_blocks_1[i], 1);
    					} else {
    						each_blocks_1[i] = create_each_block_3$1(child_ctx);
    						each_blocks_1[i].c();
    						transition_in(each_blocks_1[i], 1);
    						each_blocks_1[i].m(div1, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_3.length; i < 4; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}

    			if (changed.armor || changed.rul) {
    				each_value = Object.entries(ctx.armor).sort(func_2
      );

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$6(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$6(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out_1(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			for (let i = 0; i < 4; i += 1) {
    				transition_in(each_blocks_1[i]);
    			}

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block0);

    			each_blocks_1 = each_blocks_1.filter(Boolean);
    			for (let i = 0; i < 4; i += 1) {
    				transition_out(each_blocks_1[i]);
    			}

    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();

    			destroy_each(each_blocks_1, detaching);

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$a.name, type: "component", source: "", ctx });
    	return block;
    }

    let dollColumns = 6;

    let zoom = 1;

    const func_2 = (a, b) => a[0] > b[0] ? 1 : -1;

    const func_3 = (s) => s.substr(0, 8) != 'INV_NULL';

    function instance$9($$self, $$props, $$invalidate) {
    	

      let { armor } = $$props;
      let seeAllVariants = false;
      let seeAlso = [];

    	const writable_props = ['armor'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$2.warn(`<Armor> was created with unknown prop '${key}'`);
    	});

    	const click_handler = (e) => ($$invalidate('seeAllVariants', seeAllVariants = !seeAllVariants));

    	const func = (a, b) => rul.bodiesCompare([a, b]);

    	const func_1 = (a, b) => rul.str(a[0]) > rul.str(b[0]) ? 1 : -1;

    	$$self.$set = $$props => {
    		if ('armor' in $$props) $$invalidate('armor', armor = $$props.armor);
    	};

    	$$self.$capture_state = () => {
    		return { armor, dollColumns, seeAllVariants, zoom, seeAlso };
    	};

    	$$self.$inject_state = $$props => {
    		if ('armor' in $$props) $$invalidate('armor', armor = $$props.armor);
    		if ('dollColumns' in $$props) $$invalidate('dollColumns', dollColumns = $$props.dollColumns);
    		if ('seeAllVariants' in $$props) $$invalidate('seeAllVariants', seeAllVariants = $$props.seeAllVariants);
    		if ('zoom' in $$props) zoom = $$props.zoom;
    		if ('seeAlso' in $$props) $$invalidate('seeAlso', seeAlso = $$props.seeAlso);
    	};

    	$$self.$$.update = ($$dirty = { armor: 1, seeAlso: 1 }) => {
    		if ($$dirty.armor || $$dirty.seeAlso) { {
            console.log(armor);
        
            $$invalidate('seeAlso', seeAlso = []);
            if ("storeItem" in armor && armor.storeItem != "STR_NONE") {
              seeAlso.push(armor.storeItem);
            }
            if ("users" in armor) {
              for (let item of armor.users.filter(
                s =>
                  s.substr(0, 8) != "INV_NULL" &&
                  s != armor.type &&
                  "#" + s != window.location.hash
              )) {
                seeAlso.push(item);
              }
            }
          } }
    	};

    	return {
    		armor,
    		seeAllVariants,
    		seeAlso,
    		click_handler,
    		func,
    		func_1
    	};
    }

    class Armor$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$a, safe_not_equal, ["armor"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Armor", options, id: create_fragment$a.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.armor === undefined && !('armor' in props)) {
    			console_1$2.warn("<Armor> was created without expected prop 'armor'");
    		}
    	}

    	get armor() {
    		throw new Error("<Armor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set armor(value) {
    		throw new Error("<Armor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Craft.svelte generated by Svelte v3.12.1 */
    const { console: console_1$3 } = globals;

    const file$8 = "src\\Craft.svelte";

    function get_each_context$7(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    // (15:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
    function create_if_block$7(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, show_if, show_if_1, show_if_2, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$5,
    		create_if_block_2$5,
    		create_if_block_3$3,
    		create_else_block$5
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.craft) show_if = !!(['weaponStrings'].includes(ctx.key));
    		if (show_if) return 0;
    		if ((show_if_1 == null) || changed.craft) show_if_1 = !!(['sprite'].includes(ctx.key));
    		if (show_if_1) return 1;
    		if ((show_if_2 == null) || changed.craft) show_if_2 = !!(['requiresBaseFunc' ].includes(ctx.key));
    		if (show_if_2) return 2;
    		return 3;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$8, 16, 8, 533);
    			add_location(td1, file$8, 17, 8, 601);
    			add_location(tr, file$8, 15, 6, 519);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.craft) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$7.name, type: "if", source: "(15:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}", ctx });
    	return block;
    }

    // (25:10) {:else}
    function create_else_block$5(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.craft) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$5.name, type: "else", source: "(25:10) {:else}", ctx });
    	return block;
    }

    // (23:56) 
    function create_if_block_3$3(ctx) {
    	var current;

    	var baseservicelist = new BaseServiceList({
    		props: {
    		items: ctx.prop,
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			baseservicelist.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var baseservicelist_changes = {};
    			if (changed.craft) baseservicelist_changes.items = ctx.prop;
    			baseservicelist.$set(baseservicelist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$3.name, type: "if", source: "(23:56) ", ctx });
    	return block;
    }

    // (21:45) 
    function create_if_block_2$5(ctx) {
    	var img, img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "sprite");
    			attr_dev(img, "alt", "X");
    			attr_dev(img, "src", img_src_value = rul.specialSprite("baseSprite", ctx.prop*1 + 33));
    			add_location(img, file$8, 21, 12, 799);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.craft) && img_src_value !== (img_src_value = rul.specialSprite("baseSprite", ctx.prop*1 + 33))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(img);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$5.name, type: "if", source: "(21:45) ", ctx });
    	return block;
    }

    // (19:10) {#if ['weaponStrings'].includes(key)}
    function create_if_block_1$5(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop.map(ctx.func_1) },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.craft) value_changes.val = ctx.prop.map(ctx.func_1);
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$5.name, type: "if", source: "(19:10) {#if ['weaponStrings'].includes(key)}", ctx });
    	return block;
    }

    // (14:2) {#each Object.entries(craft).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$7(ctx) {
    	var show_if = !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(ctx.key), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$7(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.craft) show_if = !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(ctx.key);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$7(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$7.name, type: "each", source: "(14:2) {#each Object.entries(craft).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$b(ctx) {
    	var table, tr, td, t_1, current;

    	let each_value = Object.entries(ctx.craft).sort(func$1);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "Craft";
    			t_1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$8, 12, 7, 274);
    			add_location(tr, file$8, 12, 2, 269);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$8, 11, 0, 239);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr);
    			append_dev(tr, td);
    			append_dev(table, t_1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.craft || changed.rul) {
    				each_value = Object.entries(ctx.craft).sort(func$1);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$7(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$7(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$b.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$1 = (a, b) => (a[0] > b[0] ? 1 : -1);

    function instance$a($$self, $$props, $$invalidate) {
    	
      
      let { craft } = $$props;

    	const writable_props = ['craft'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$3.warn(`<Craft> was created with unknown prop '${key}'`);
    	});

    	const func_1 = (slot) => rul.str(slot).replace(">{ALT}{0}","");

    	$$self.$set = $$props => {
    		if ('craft' in $$props) $$invalidate('craft', craft = $$props.craft);
    	};

    	$$self.$capture_state = () => {
    		return { craft };
    	};

    	$$self.$inject_state = $$props => {
    		if ('craft' in $$props) $$invalidate('craft', craft = $$props.craft);
    	};

    	$$self.$$.update = ($$dirty = { craft: 1 }) => {
    		if ($$dirty.craft) { {console.info(craft);} }
    	};

    	return { craft, func_1 };
    }

    class Craft$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$b, safe_not_equal, ["craft"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Craft", options, id: create_fragment$b.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.craft === undefined && !('craft' in props)) {
    			console_1$3.warn("<Craft> was created without expected prop 'craft'");
    		}
    	}

    	get craft() {
    		throw new Error("<Craft>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set craft(value) {
    		throw new Error("<Craft>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\CraftWeapon.svelte generated by Svelte v3.12.1 */
    const { console: console_1$4 } = globals;

    const file$9 = "src\\CraftWeapon.svelte";

    function get_each_context$8(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.prop = list[i];
    	return child_ctx;
    }

    // (30:10) {#if !['type'].includes(prop[0])}
    function create_if_block_2$6(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.prop[0]) + "", t0, td1, t1, current;

    	var value = new Value({
    		props: { val: ctx.prop[1] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			value.$$.fragment.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right svelte-8df2j8");
    			add_location(td0, file$9, 31, 14, 674);
    			attr_dev(td1, "class", "svelte-8df2j8");
    			add_location(td1, file$9, 34, 14, 786);
    			add_location(tr, file$9, 30, 12, 654);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			mount_component(value, td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.weapon) && raw_value !== (raw_value = rul.decamelize(ctx.prop[0]) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var value_changes = {};
    			if (changed.weapon) value_changes.val = ctx.prop[1];
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(value);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$6.name, type: "if", source: "(30:10) {#if !['type'].includes(prop[0])}", ctx });
    	return block;
    }

    // (27:8) {#each Object.entries(weapon).sort((a, b) =>            a[0] > b[0] ? 1 : -1          ) as prop}
    function create_each_block$8(ctx) {
    	var show_if = !['type'].includes(ctx.prop[0]), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block_2$6(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.weapon) show_if = !['type'].includes(ctx.prop[0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_2$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$8.name, type: "each", source: "(27:8) {#each Object.entries(weapon).sort((a, b) =>            a[0] > b[0] ? 1 : -1          ) as prop}", ctx });
    	return block;
    }

    // (45:4) {#if weapon.launcher}
    function create_if_block_1$6(ctx) {
    	var current;

    	var item = new Item$1({
    		props: {
    		item: rul.items[ctx.weapon.launcher],
    		title: "Launcher: " + rul.str(ctx.weapon.launcher)
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			item.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(item, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var item_changes = {};
    			if (changed.weapon) item_changes.item = rul.items[ctx.weapon.launcher];
    			if (changed.weapon) item_changes.title = "Launcher: " + rul.str(ctx.weapon.launcher);
    			item.$set(item_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(item.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(item.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(item, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$6.name, type: "if", source: "(45:4) {#if weapon.launcher}", ctx });
    	return block;
    }

    // (48:4) {#if weapon.clip}
    function create_if_block$8(ctx) {
    	var current;

    	var item = new Item$1({
    		props: {
    		item: rul.items[ctx.weapon.clip],
    		title: "Clip: " + rul.str(ctx.weapon.clip)
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			item.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(item, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var item_changes = {};
    			if (changed.weapon) item_changes.item = rul.items[ctx.weapon.clip];
    			if (changed.weapon) item_changes.title = "Clip: " + rul.str(ctx.weapon.clip);
    			item.$set(item_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(item.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(item.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(item, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$8.name, type: "if", source: "(48:4) {#if weapon.clip}", ctx });
    	return block;
    }

    function create_fragment$c(ctx) {
    	var table2, tr1, td1, table0, tr0, td0, t0_value = rul.str("Weapon") + "", t0, t1, t2, td2, table1, t3, current;

    	let each_value = Object.entries(ctx.weapon).sort(func$2
            );

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	var if_block0 = (ctx.weapon.launcher) && create_if_block_1$6(ctx);

    	var if_block1 = (ctx.weapon.clip) && create_if_block$8(ctx);

    	const block = {
    		c: function create() {
    			table2 = element("table");
    			tr1 = element("tr");
    			td1 = element("td");
    			table0 = element("table");
    			tr0 = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			td2 = element("td");
    			table1 = element("table");
    			if (if_block0) if_block0.c();
    			t3 = space();
    			if (if_block1) if_block1.c();
    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-header svelte-8df2j8");
    			add_location(td0, file$9, 24, 10, 413);
    			add_location(tr0, file$9, 23, 8, 397);
    			attr_dev(table0, "class", "main-table");
    			add_location(table0, file$9, 22, 6, 361);
    			attr_dev(td1, "class", "svelte-8df2j8");
    			add_location(td1, file$9, 21, 4, 349);
    			attr_dev(table1, "class", "main-table");
    			add_location(table1, file$9, 43, 4, 948);
    			attr_dev(td2, "class", "svelte-8df2j8");
    			add_location(td2, file$9, 42, 4, 938);
    			add_location(tr1, file$9, 20, 2, 339);
    			attr_dev(table2, "class", "panels3 svelte-8df2j8");
    			add_location(table2, file$9, 19, 0, 312);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table2, anchor);
    			append_dev(table2, tr1);
    			append_dev(tr1, td1);
    			append_dev(td1, table0);
    			append_dev(table0, tr0);
    			append_dev(tr0, td0);
    			append_dev(td0, t0);
    			append_dev(table0, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table0, null);
    			}

    			append_dev(tr1, t2);
    			append_dev(tr1, td2);
    			append_dev(td2, table1);
    			if (if_block0) if_block0.m(table1, null);
    			append_dev(table1, t3);
    			if (if_block1) if_block1.m(table1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.weapon || changed.rul) {
    				each_value = Object.entries(ctx.weapon).sort(func$2
            );

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$8(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$8(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table0, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}

    			if (ctx.weapon.launcher) {
    				if (if_block0) {
    					if_block0.p(changed, ctx);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_1$6(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(table1, t3);
    				}
    			} else if (if_block0) {
    				group_outros();
    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});
    				check_outros();
    			}

    			if (ctx.weapon.clip) {
    				if (if_block1) {
    					if_block1.p(changed, ctx);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block$8(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(table1, null);
    				}
    			} else if (if_block1) {
    				group_outros();
    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(if_block0);
    			transition_in(if_block1);
    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(if_block0);
    			transition_out(if_block1);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table2);
    			}

    			destroy_each(each_blocks, detaching);

    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$c.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$2 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$b($$self, $$props, $$invalidate) {
    	

      let { weapon } = $$props;

    	const writable_props = ['weapon'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$4.warn(`<CraftWeapon> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('weapon' in $$props) $$invalidate('weapon', weapon = $$props.weapon);
    	};

    	$$self.$capture_state = () => {
    		return { weapon };
    	};

    	$$self.$inject_state = $$props => {
    		if ('weapon' in $$props) $$invalidate('weapon', weapon = $$props.weapon);
    	};

    	$$self.$$.update = ($$dirty = { weapon: 1 }) => {
    		if ($$dirty.weapon) { {
            console.log(weapon);
          } }
    	};

    	return { weapon };
    }

    class CraftWeapon$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$c, safe_not_equal, ["weapon"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "CraftWeapon", options, id: create_fragment$c.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.weapon === undefined && !('weapon' in props)) {
    			console_1$4.warn("<CraftWeapon> was created without expected prop 'weapon'");
    		}
    	}

    	get weapon() {
    		throw new Error("<CraftWeapon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set weapon(value) {
    		throw new Error("<CraftWeapon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Unit.svelte generated by Svelte v3.12.1 */
    const { console: console_1$5 } = globals;

    const file$a = "src\\Unit.svelte";

    function get_each_context_2$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.j = i;
    	return child_ctx;
    }

    function get_each_context_1$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.set = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$9(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    // (16:4) {#if !['type', 'deathSound', 'scripts'].includes(key)}
    function create_if_block$9(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, show_if, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$7,
    		create_else_block$6
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.unit) show_if = !!(['builtInWeaponSets'].includes(ctx.prop[0]));
    		if (show_if) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$a, 17, 8, 448);
    			add_location(td1, file$a, 18, 8, 516);
    			add_location(tr, file$a, 16, 6, 434);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.unit) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$9.name, type: "if", source: "(16:4) {#if !['type', 'deathSound', 'scripts'].includes(key)}", ctx });
    	return block;
    }

    // (28:10) {:else}
    function create_else_block$6(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.unit) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$6.name, type: "else", source: "(28:10) {:else}", ctx });
    	return block;
    }

    // (20:10) {#if ['builtInWeaponSets'].includes(prop[0])}
    function create_if_block_1$7(ctx) {
    	var each_1_anchor, current;

    	let each_value_1 = Object.values(ctx.prop);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$2(get_each_context_1$2(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.unit) {
    				each_value_1 = Object.values(ctx.prop);

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$2(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$7.name, type: "if", source: "(20:10) {#if ['builtInWeaponSets'].includes(prop[0])}", ctx });
    	return block;
    }

    // (22:14) {#if i != 0}
    function create_if_block_3$4(ctx) {
    	var br;

    	const block = {
    		c: function create() {
    			br = element("br");
    			add_location(br, file$a, 21, 26, 656);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(br);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$4.name, type: "if", source: "(22:14) {#if i != 0}", ctx });
    	return block;
    }

    // (24:16) {#if j != 0}
    function create_if_block_2$7(ctx) {
    	var t;

    	const block = {
    		c: function create() {
    			t = text(",");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$7.name, type: "if", source: "(24:16) {#if j != 0}", ctx });
    	return block;
    }

    // (23:14) {#each set as field, j}
    function create_each_block_2$2(ctx) {
    	var t, current;

    	var if_block = (ctx.j != 0) && create_if_block_2$7(ctx);

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();
    			link.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.unit) link_changes.href = ctx.field;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t);
    			}

    			destroy_component(link, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$2.name, type: "each", source: "(23:14) {#each set as field, j}", ctx });
    	return block;
    }

    // (21:12) {#each Object.values(prop) as set, i}
    function create_each_block_1$2(ctx) {
    	var t, each_1_anchor, current;

    	var if_block = (ctx.i != 0) && create_if_block_3$4(ctx);

    	let each_value_2 = ctx.set;

    	let each_blocks = [];

    	for (let i_1 = 0; i_1 < each_value_2.length; i_1 += 1) {
    		each_blocks[i_1] = create_each_block_2$2(get_each_context_2$2(ctx, each_value_2, i_1));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();

    			for (let i_1 = 0; i_1 < each_blocks.length; i_1 += 1) {
    				each_blocks[i_1].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);

    			for (let i_1 = 0; i_1 < each_blocks.length; i_1 += 1) {
    				each_blocks[i_1].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.unit) {
    				each_value_2 = ctx.set;

    				let i_1;
    				for (i_1 = 0; i_1 < each_value_2.length; i_1 += 1) {
    					const child_ctx = get_each_context_2$2(ctx, each_value_2, i_1);

    					if (each_blocks[i_1]) {
    						each_blocks[i_1].p(changed, child_ctx);
    						transition_in(each_blocks[i_1], 1);
    					} else {
    						each_blocks[i_1] = create_each_block_2$2(child_ctx);
    						each_blocks[i_1].c();
    						transition_in(each_blocks[i_1], 1);
    						each_blocks[i_1].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i_1 = each_value_2.length; i_1 < each_blocks.length; i_1 += 1) {
    					out(i_1);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i_1 = 0; i_1 < each_value_2.length; i_1 += 1) {
    				transition_in(each_blocks[i_1]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i_1 = 0; i_1 < each_blocks.length; i_1 += 1) {
    				transition_out(each_blocks[i_1]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$2.name, type: "each", source: "(21:12) {#each Object.values(prop) as set, i}", ctx });
    	return block;
    }

    // (15:2) {#each Object.entries(unit).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$9(ctx) {
    	var show_if = !['type', 'deathSound', 'scripts'].includes(ctx.key), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$9(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.unit) show_if = !['type', 'deathSound', 'scripts'].includes(ctx.key);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$9(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$9.name, type: "each", source: "(15:2) {#each Object.entries(unit).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$d(ctx) {
    	var tr, td, t_1, each_1_anchor, current;

    	let each_value = Object.entries(ctx.unit).sort(func$3);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "Unit";
    			t_1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$a, 13, 7, 228);
    			add_location(tr, file$a, 13, 2, 223);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			insert_dev(target, t_1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.unit || changed.rul) {
    				each_value = Object.entries(ctx.unit).sort(func$3);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$9(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$9(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    				detach_dev(t_1);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$d.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$3 = (a, b) => (a[0] > b[0] ? 1 : -1);

    function instance$c($$self, $$props, $$invalidate) {
    	
      

      let { unit } = $$props;

    	const writable_props = ['unit'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$5.warn(`<Unit> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('unit' in $$props) $$invalidate('unit', unit = $$props.unit);
    	};

    	$$self.$capture_state = () => {
    		return { unit };
    	};

    	$$self.$inject_state = $$props => {
    		if ('unit' in $$props) $$invalidate('unit', unit = $$props.unit);
    	};

    	$$self.$$.update = ($$dirty = { unit: 1 }) => {
    		if ($$dirty.unit) { {console.log(unit);} }
    	};

    	return { unit };
    }

    class Unit$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$d, safe_not_equal, ["unit"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Unit", options, id: create_fragment$d.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.unit === undefined && !('unit' in props)) {
    			console_1$5.warn("<Unit> was created without expected prop 'unit'");
    		}
    	}

    	get unit() {
    		throw new Error("<Unit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set unit(value) {
    		throw new Error("<Unit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Research.svelte generated by Svelte v3.12.1 */
    const { console: console_1$6 } = globals;

    const file$b = "src\\Research.svelte";

    function get_each_context_2$3(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i];
    	return child_ctx;
    }

    function get_each_context_1$3(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$a(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    // (39:6) {#if !['name'].includes(key)}
    function create_if_block_3$5(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, t1, current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			value.$$.fragment.c();
    			t1 = space();
    			add_location(td0, file$b, 40, 12, 1462);
    			add_location(td1, file$b, 43, 12, 1542);
    			add_location(tr, file$b, 39, 8, 1436);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			mount_component(value, td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.research) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var value_changes = {};
    			if (changed.research) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(value);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$5.name, type: "if", source: "(39:6) {#if !['name'].includes(key)}", ctx });
    	return block;
    }

    // (33:43) 
    function create_if_block_2$8(ctx) {
    	var tr, td, t0_value = rul.decamelize(ctx.key) + "", t0, t1, each_1_anchor, current;

    	let each_value_2 = Object.keys(ctx.prop);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$3(get_each_context_2$3(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(t0_value);
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-subheader");
    			add_location(td, file$b, 33, 10, 1167);
    			add_location(tr, file$b, 33, 6, 1163);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.research) && t0_value !== (t0_value = rul.decamelize(ctx.key) + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if (changed.research || changed.longLists) {
    				each_value_2 = Object.keys(ctx.prop);

    				let i;
    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$3(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    				detach_dev(t1);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$8.name, type: "if", source: "(33:43) ", ctx });
    	return block;
    }

    // (31:50) 
    function create_if_block_1$8(ctx) {
    	var current;

    	var baseservicelist = new BaseServiceList({
    		props: {
    		items: ctx.prop,
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			baseservicelist.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var baseservicelist_changes = {};
    			if (changed.research) baseservicelist_changes.items = ctx.prop;
    			baseservicelist.$set(baseservicelist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$8.name, type: "if", source: "(31:50) ", ctx });
    	return block;
    }

    // (22:4) {#if longLists.includes(key) && prop && prop.length>0}
    function create_if_block$a(ctx) {
    	var tr0, td0, t0_value = rul.decamelize(ctx.key) + "", t0, t1, tr1, td1, ul, t2, current;

    	let each_value_1 = ctx.prop;

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$3(get_each_context_1$3(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr0 = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-subheader");
    			add_location(td0, file$b, 22, 10, 703);
    			add_location(tr0, file$b, 22, 6, 699);
    			attr_dev(ul, "class", "research-links");
    			add_location(ul, file$b, 24, 8, 844);
    			attr_dev(td1, "colspan", "2");
    			attr_dev(td1, "class", "cols");
    			set_style(td1, "columns", "2");
    			add_location(td1, file$b, 23, 10, 786);
    			add_location(tr1, file$b, 23, 6, 782);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr0, anchor);
    			append_dev(tr0, td0);
    			append_dev(td0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, tr1, anchor);
    			append_dev(tr1, td1);
    			append_dev(td1, ul);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			append_dev(td1, t2);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.research) && t0_value !== (t0_value = rul.decamelize(ctx.key) + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if (changed.research || changed.longLists) {
    				each_value_1 = ctx.prop;

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$3(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(ul, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr0);
    				detach_dev(t1);
    				detach_dev(tr1);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$a.name, type: "if", source: "(22:4) {#if longLists.includes(key) && prop && prop.length>0}", ctx });
    	return block;
    }

    // (35:6) {#each Object.keys(prop) as key}
    function create_each_block_2$3(ctx) {
    	var tr, td0, td1, current;

    	var link = new Link({
    		props: { href: ctx.key },
    		$$inline: true
    	});

    	var linkslist = new LinksList({
    		props: { items: ctx.prop[ctx.key] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			link.$$.fragment.c();
    			td1 = element("td");
    			linkslist.$$.fragment.c();
    			add_location(td0, file$b, 35, 10, 1290);
    			add_location(td1, file$b, 35, 37, 1317);
    			add_location(tr, file$b, 35, 6, 1286);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			mount_component(link, td0, null);
    			append_dev(tr, td1);
    			mount_component(linkslist, td1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.research) link_changes.href = ctx.key;
    			link.$set(link_changes);

    			var linkslist_changes = {};
    			if (changed.research) linkslist_changes.items = ctx.prop[ctx.key];
    			linkslist.$set(linkslist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			transition_in(linkslist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(link);

    			destroy_component(linkslist);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$3.name, type: "each", source: "(35:6) {#each Object.keys(prop) as key}", ctx });
    	return block;
    }

    // (26:10) {#each prop as field, i}
    function create_each_block_1$3(ctx) {
    	var li, current;

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			li = element("li");
    			link.$$.fragment.c();
    			add_location(li, file$b, 26, 12, 921);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			mount_component(link, li, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.research) link_changes.href = ctx.field;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(li);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$3.name, type: "each", source: "(26:10) {#each prop as field, i}", ctx });
    	return block;
    }

    // (21:2) {#each Object.entries(research).sort((a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$a(ctx) {
    	var show_if, show_if_1, show_if_2, current_block_type_index, if_block, if_block_anchor, current;

    	var if_block_creators = [
    		create_if_block$a,
    		create_if_block_1$8,
    		create_if_block_2$8,
    		create_if_block_3$5
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.research) show_if = !!(ctx.longLists.includes(ctx.key) && ctx.prop && ctx.prop.length>0);
    		if (show_if) return 0;
    		if ((show_if_1 == null) || changed.research) show_if_1 = !!(['requiresBaseFunc' ].includes(ctx.key));
    		if (show_if_1) return 1;
    		if (ctx.key == 'getOneFreeProtected') return 2;
    		if ((show_if_2 == null) || changed.research) show_if_2 = !!(!['name'].includes(ctx.key));
    		if (show_if_2) return 3;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(null, ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (~current_block_type_index) if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				if (if_block) {
    					group_outros();
    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});
    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];
    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					}
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				} else {
    					if_block = null;
    				}
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (~current_block_type_index) if_blocks[current_block_type_index].d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$a.name, type: "each", source: "(21:2) {#each Object.entries(research).sort((a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1)) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$e(ctx) {
    	var tr, td, t0_value = rul.str("Research") + "", t0, t1, each_1_anchor, current;

    	let each_value = Object.entries(ctx.research).sort(ctx.func);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$a(get_each_context$a(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(t0_value);
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$b, 18, 4, 433);
    			add_location(tr, file$b, 17, 2, 423);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.longLists || changed.research || changed.rul) {
    				each_value = Object.entries(ctx.research).sort(ctx.func);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$a(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$a(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    				detach_dev(t1);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$e.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	

      
      let { research, title = "Research" } = $$props;
      let longLists = ['seeAlso', 'requiresBaseFunc', 'manufacture', 'getOneFree', 'freeFrom', 'unlocks', 'dependencies', 'leadsTo', 'disables'];

    	const writable_props = ['research', 'title'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$6.warn(`<Research> was created with unknown prop '${key}'`);
    	});

    	const func = (a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1);

    	$$self.$set = $$props => {
    		if ('research' in $$props) $$invalidate('research', research = $$props.research);
    		if ('title' in $$props) $$invalidate('title', title = $$props.title);
    	};

    	$$self.$capture_state = () => {
    		return { research, title, longLists };
    	};

    	$$self.$inject_state = $$props => {
    		if ('research' in $$props) $$invalidate('research', research = $$props.research);
    		if ('title' in $$props) $$invalidate('title', title = $$props.title);
    		if ('longLists' in $$props) $$invalidate('longLists', longLists = $$props.longLists);
    	};

    	$$self.$$.update = ($$dirty = { research: 1 }) => {
    		if ($$dirty.research) { {
            console.log(research);
          } }
    	};

    	return { research, title, longLists, func };
    }

    class Research$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$e, safe_not_equal, ["research", "title"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Research", options, id: create_fragment$e.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.research === undefined && !('research' in props)) {
    			console_1$6.warn("<Research> was created without expected prop 'research'");
    		}
    	}

    	get research() {
    		throw new Error("<Research>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set research(value) {
    		throw new Error("<Research>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<Research>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Research>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Manufacture.svelte generated by Svelte v3.12.1 */
    const { console: console_1$7 } = globals;

    const file$c = "src\\Manufacture.svelte";

    function get_each_context_1$4(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$b(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.prop = list[i];
    	return child_ctx;
    }

    function get_each_context_3$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context_2$4(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.chance = list[i];
    	return child_ctx;
    }

    // (20:2) {#if 'randomProducedItems' in manufacture}
    function create_if_block_3$6(ctx) {
    	var tr0, td0, t0_value = rul.decamelize('randomProducedItems') + "", t0, t1, tr1, td1, table, current;

    	let each_value_2 = ctx.manufacture.randomProducedItems;

    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$4(get_each_context_2$4(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr0 = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-subheader");
    			add_location(td0, file$c, 20, 8, 425);
    			add_location(tr0, file$c, 20, 4, 421);
    			attr_dev(table, "class", "number-table");
    			attr_dev(table, "width", "100%");
    			set_style(table, "margin", "0px");
    			add_location(table, file$c, 22, 6, 548);
    			attr_dev(td1, "colspan", "2");
    			add_location(td1, file$c, 21, 8, 524);
    			add_location(tr1, file$c, 21, 4, 520);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr0, anchor);
    			append_dev(tr0, td0);
    			append_dev(td0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, tr1, anchor);
    			append_dev(tr1, td1);
    			append_dev(td1, table);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.manufacture) {
    				each_value_2 = ctx.manufacture.randomProducedItems;

    				let i;
    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$4(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$4(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr0);
    				detach_dev(t1);
    				detach_dev(tr1);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$6.name, type: "if", source: "(20:2) {#if 'randomProducedItems' in manufacture}", ctx });
    	return block;
    }

    // (25:8) {#if Object.keys(chance[1]).length == 0}
    function create_if_block_4$2(ctx) {
    	var tr, td;

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "NOTHING";
    			attr_dev(td, "colspan", "2");
    			set_style(td, "text-align", "center");
    			add_location(td, file$c, 25, 14, 731);
    			add_location(tr, file$c, 25, 10, 727);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_4$2.name, type: "if", source: "(25:8) {#if Object.keys(chance[1]).length == 0}", ctx });
    	return block;
    }

    // (28:8) {#each Object.keys(chance[1]).sort() as field, i}
    function create_each_block_3$2(ctx) {
    	var tr, td0, t_value = ctx.chance[1][ctx.field] + "", t, td1, current;

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t = text(t_value);
    			td1 = element("td");
    			link.$$.fragment.c();
    			add_location(td0, file$c, 28, 14, 881);
    			add_location(td1, file$c, 28, 41, 908);
    			add_location(tr, file$c, 28, 10, 877);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t);
    			append_dev(tr, td1);
    			mount_component(link, td1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.manufacture) && t_value !== (t_value = ctx.chance[1][ctx.field] + "")) {
    				set_data_dev(t, t_value);
    			}

    			var link_changes = {};
    			if (changed.manufacture) link_changes.href = ctx.field;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_3$2.name, type: "each", source: "(28:8) {#each Object.keys(chance[1]).sort() as field, i}", ctx });
    	return block;
    }

    // (24:6) {#each manufacture.randomProducedItems as chance}
    function create_each_block_2$4(ctx) {
    	var show_if = Object.keys(ctx.chance[1]).length == 0, t0, t1, tr, td, t2, t3_value = ctx.chance[0] + "", t3, t4, t5_value = (ctx.chance[0]/ctx.manufacture.chanceSum*100).toFixed(3) + "", t5, t6, current;

    	var if_block = (show_if) && create_if_block_4$2(ctx);

    	let each_value_3 = Object.keys(ctx.chance[1]).sort();

    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3$2(get_each_context_3$2(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			tr = element("tr");
    			td = element("td");
    			t2 = text("×");
    			t3 = text(t3_value);
    			t4 = text(" / ");
    			t5 = text(t5_value);
    			t6 = text("%");
    			attr_dev(td, "colspan", "2");
    			set_style(td, "text-align", "center");
    			set_style(td, "border-bottom", "solid 0.3px #382C44");
    			add_location(td, file$c, 30, 12, 973);
    			add_location(tr, file$c, 30, 8, 969);
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, t1, anchor);
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t2);
    			append_dev(td, t3);
    			append_dev(td, t4);
    			append_dev(td, t5);
    			append_dev(td, t6);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.manufacture) show_if = Object.keys(ctx.chance[1]).length == 0;

    			if (show_if) {
    				if (!if_block) {
    					if_block = create_if_block_4$2(ctx);
    					if_block.c();
    					if_block.m(t0.parentNode, t0);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (changed.manufacture) {
    				each_value_3 = Object.keys(ctx.chance[1]).sort();

    				let i;
    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$2(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_3$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(t1.parentNode, t1);
    					}
    				}

    				group_outros();
    				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}

    			if ((!current || changed.manufacture) && t3_value !== (t3_value = ctx.chance[0] + "")) {
    				set_data_dev(t3, t3_value);
    			}

    			if ((!current || changed.manufacture) && t5_value !== (t5_value = (ctx.chance[0]/ctx.manufacture.chanceSum*100).toFixed(3) + "")) {
    				set_data_dev(t5, t5_value);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_3.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t0);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(t1);
    				detach_dev(tr);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$4.name, type: "each", source: "(24:6) {#each manufacture.randomProducedItems as chance}", ctx });
    	return block;
    }

    // (40:4) {#if !['name', 'randomProducedItems'].includes(prop[0])}
    function create_if_block$b(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.prop[0]) + "", t0, td1, show_if, show_if_1, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$9,
    		create_if_block_2$9,
    		create_else_block$7
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.manufacture) show_if = !!(['requiresBaseFunc' ].includes(ctx.prop[0]));
    		if (show_if) return 0;
    		if ((show_if_1 == null) || changed.manufacture) show_if_1 = !!(['producedItems', 'requiredItems'].includes(ctx.prop[0]));
    		if (show_if_1) return 1;
    		return 2;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$c, 41, 8, 1363);
    			add_location(td1, file$c, 44, 8, 1457);
    			add_location(tr, file$c, 40, 6, 1349);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.manufacture) && raw_value !== (raw_value = rul.decamelize(ctx.prop[0]) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$b.name, type: "if", source: "(40:4) {#if !['name', 'randomProducedItems'].includes(prop[0])}", ctx });
    	return block;
    }

    // (54:10) {:else}
    function create_else_block$7(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop[1] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.manufacture) value_changes.val = ctx.prop[1];
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$7.name, type: "else", source: "(54:10) {:else}", ctx });
    	return block;
    }

    // (48:73) 
    function create_if_block_2$9(ctx) {
    	var table, current;

    	let each_value_1 = Object.keys(ctx.prop[1]).sort();

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$4(get_each_context_1$4(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "number-table");
    			add_location(table, file$c, 48, 12, 1671);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.manufacture) {
    				each_value_1 = Object.keys(ctx.prop[1]).sort();

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$4(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$4(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$9.name, type: "if", source: "(48:73) ", ctx });
    	return block;
    }

    // (46:10) {#if ['requiresBaseFunc' ].includes(prop[0])}
    function create_if_block_1$9(ctx) {
    	var current;

    	var baseservicelist = new BaseServiceList({
    		props: {
    		items: ctx.prop[1],
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			baseservicelist.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var baseservicelist_changes = {};
    			if (changed.manufacture) baseservicelist_changes.items = ctx.prop[1];
    			baseservicelist.$set(baseservicelist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$9.name, type: "if", source: "(46:10) {#if ['requiresBaseFunc' ].includes(prop[0])}", ctx });
    	return block;
    }

    // (50:12) {#each Object.keys(prop[1]).sort() as field, i}
    function create_each_block_1$4(ctx) {
    	var tr, td0, t_value = ctx.prop[1][ctx.field] + "", t, td1, current;

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t = text(t_value);
    			td1 = element("td");
    			link.$$.fragment.c();
    			add_location(td0, file$c, 50, 18, 1780);
    			add_location(td1, file$c, 50, 43, 1805);
    			add_location(tr, file$c, 50, 14, 1776);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t);
    			append_dev(tr, td1);
    			mount_component(link, td1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.manufacture) && t_value !== (t_value = ctx.prop[1][ctx.field] + "")) {
    				set_data_dev(t, t_value);
    			}

    			var link_changes = {};
    			if (changed.manufacture) link_changes.href = ctx.field;
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(link);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$4.name, type: "each", source: "(50:12) {#each Object.keys(prop[1]).sort() as field, i}", ctx });
    	return block;
    }

    // (37:2) {#each Object.entries(manufacture).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as prop}
    function create_each_block$b(ctx) {
    	var show_if = !['name', 'randomProducedItems'].includes(ctx.prop[0]), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$b(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.manufacture) show_if = !['name', 'randomProducedItems'].includes(ctx.prop[0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$b(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$b.name, type: "each", source: "(37:2) {#each Object.entries(manufacture).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as prop}", ctx });
    	return block;
    }

    function create_fragment$f(ctx) {
    	var tr, td, t0_value = rul.str("Manufacture") + "", t0, t1, t2, each_1_anchor, current;

    	var if_block = ('randomProducedItems' in ctx.manufacture) && create_if_block_3$6(ctx);

    	let each_value = Object.entries(ctx.manufacture).sort(func$4
      );

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$b(get_each_context$b(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$c, 16, 4, 292);
    			add_location(tr, file$c, 15, 2, 282);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t2, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ('randomProducedItems' in ctx.manufacture) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_3$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(t2.parentNode, t2);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}

    			if (changed.manufacture || changed.rul) {
    				each_value = Object.entries(ctx.manufacture).sort(func$4
      );

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$b(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$b(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);

    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    				detach_dev(t1);
    			}

    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t2);
    			}

    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$f.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$4 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$e($$self, $$props, $$invalidate) {
    	
      
      let { manufacture } = $$props;

    	const writable_props = ['manufacture'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$7.warn(`<Manufacture> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('manufacture' in $$props) $$invalidate('manufacture', manufacture = $$props.manufacture);
    	};

    	$$self.$capture_state = () => {
    		return { manufacture };
    	};

    	$$self.$inject_state = $$props => {
    		if ('manufacture' in $$props) $$invalidate('manufacture', manufacture = $$props.manufacture);
    	};

    	$$self.$$.update = ($$dirty = { manufacture: 1 }) => {
    		if ($$dirty.manufacture) { {
            console.log(manufacture);
          } }
    	};

    	return { manufacture };
    }

    class Manufacture$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$f, safe_not_equal, ["manufacture"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Manufacture", options, id: create_fragment$f.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.manufacture === undefined && !('manufacture' in props)) {
    			console_1$7.warn("<Manufacture> was created without expected prop 'manufacture'");
    		}
    	}

    	get manufacture() {
    		throw new Error("<Manufacture>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set manufacture(value) {
    		throw new Error("<Manufacture>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Conditions.svelte generated by Svelte v3.12.1 */

    function create_fragment$g(ctx) {
    	var t0, t1, t2, t3, current;

    	var linkspage0 = new LinksPage({
    		props: { links: ctx.conditions.allowedCraft, title: rul.str("Allowed Craft") },
    		$$inline: true
    	});

    	var linkspage1 = new LinksPage({
    		props: { links: ctx.conditions.allowedItemCategories, title: rul.str("Allowed Item Categories") },
    		$$inline: true
    	});

    	var linkspage2 = new LinksPage({
    		props: { links: ctx.conditions.allowedArmors, title: rul.str("Allowed Armors") },
    		$$inline: true
    	});

    	var linkspage3 = new LinksPage({
    		props: { links: ctx.conditions.allowedVehicles, title: rul.str("Allowed Vehicles") },
    		$$inline: true
    	});

    	var linkspage4 = new LinksPage({
    		props: { links: ctx.conditions.deployments, title: rul.str("Deployments") },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			linkspage0.$$.fragment.c();
    			t0 = space();
    			linkspage1.$$.fragment.c();
    			t1 = space();
    			linkspage2.$$.fragment.c();
    			t2 = space();
    			linkspage3.$$.fragment.c();
    			t3 = space();
    			linkspage4.$$.fragment.c();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			mount_component(linkspage0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(linkspage1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(linkspage2, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(linkspage3, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(linkspage4, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkspage0_changes = {};
    			if (changed.conditions) linkspage0_changes.links = ctx.conditions.allowedCraft;
    			linkspage0.$set(linkspage0_changes);

    			var linkspage1_changes = {};
    			if (changed.conditions) linkspage1_changes.links = ctx.conditions.allowedItemCategories;
    			linkspage1.$set(linkspage1_changes);

    			var linkspage2_changes = {};
    			if (changed.conditions) linkspage2_changes.links = ctx.conditions.allowedArmors;
    			linkspage2.$set(linkspage2_changes);

    			var linkspage3_changes = {};
    			if (changed.conditions) linkspage3_changes.links = ctx.conditions.allowedVehicles;
    			linkspage3.$set(linkspage3_changes);

    			var linkspage4_changes = {};
    			if (changed.conditions) linkspage4_changes.links = ctx.conditions.deployments;
    			linkspage4.$set(linkspage4_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage0.$$.fragment, local);

    			transition_in(linkspage1.$$.fragment, local);

    			transition_in(linkspage2.$$.fragment, local);

    			transition_in(linkspage3.$$.fragment, local);

    			transition_in(linkspage4.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkspage0.$$.fragment, local);
    			transition_out(linkspage1.$$.fragment, local);
    			transition_out(linkspage2.$$.fragment, local);
    			transition_out(linkspage3.$$.fragment, local);
    			transition_out(linkspage4.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(linkspage0, detaching);

    			if (detaching) {
    				detach_dev(t0);
    			}

    			destroy_component(linkspage1, detaching);

    			if (detaching) {
    				detach_dev(t1);
    			}

    			destroy_component(linkspage2, detaching);

    			if (detaching) {
    				detach_dev(t2);
    			}

    			destroy_component(linkspage3, detaching);

    			if (detaching) {
    				detach_dev(t3);
    			}

    			destroy_component(linkspage4, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$g.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
    	  

      let { conditions } = $$props;

    	const writable_props = ['conditions'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Conditions> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('conditions' in $$props) $$invalidate('conditions', conditions = $$props.conditions);
    	};

    	$$self.$capture_state = () => {
    		return { conditions };
    	};

    	$$self.$inject_state = $$props => {
    		if ('conditions' in $$props) $$invalidate('conditions', conditions = $$props.conditions);
    	};

    	return { conditions };
    }

    class Conditions extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$f, create_fragment$g, safe_not_equal, ["conditions"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Conditions", options, id: create_fragment$g.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.conditions === undefined && !('conditions' in props)) {
    			console.warn("<Conditions> was created without expected prop 'conditions'");
    		}
    	}

    	get conditions() {
    		throw new Error("<Conditions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set conditions(value) {
    		throw new Error("<Conditions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Ufo.svelte generated by Svelte v3.12.1 */
    const { console: console_1$8 } = globals;

    const file$d = "src\\Ufo.svelte";

    function get_each_context_2$5(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field2 = list[i];
    	child_ctx.i2 = i;
    	return child_ctx;
    }

    function get_each_context_1$5(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$c(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    // (16:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
    function create_if_block$c(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, show_if, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$a,
    		create_if_block_2$a,
    		create_else_block$8
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.ufo) show_if = !!(['modSprite'].includes(ctx.key));
    		if (show_if) return 0;
    		if (ctx.key == "raceBonus") return 1;
    		return 2;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$d, 17, 8, 521);
    			add_location(td1, file$d, 18, 8, 589);
    			add_location(tr, file$d, 16, 6, 507);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.ufo) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$c.name, type: "if", source: "(16:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}", ctx });
    	return block;
    }

    // (32:10) {:else}
    function create_else_block$8(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.ufo) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$8.name, type: "else", source: "(32:10) {:else}", ctx });
    	return block;
    }

    // (22:39) 
    function create_if_block_2$a(ctx) {
    	var table, current;

    	let each_value_1 = Object.keys(ctx.prop).sort();

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$5(get_each_context_1$5(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "number-table");
    			add_location(table, file$d, 22, 12, 759);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.ufo || changed.rul) {
    				each_value_1 = Object.keys(ctx.prop).sort();

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$5(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$a.name, type: "if", source: "(22:39) ", ctx });
    	return block;
    }

    // (20:10) {#if ['modSprite'].includes(key)}
    function create_if_block_1$a(ctx) {
    	var img, img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "sprite");
    			attr_dev(img, "alt", "X");
    			attr_dev(img, "src", img_src_value = rul.sprite(ctx.prop));
    			add_location(img, file$d, 20, 12, 652);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.ufo) && img_src_value !== (img_src_value = rul.sprite(ctx.prop))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(img);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$a.name, type: "if", source: "(20:10) {#if ['modSprite'].includes(key)}", ctx });
    	return block;
    }

    // (26:16) {#each Object.keys(prop[field]).sort() as field2, i2}
    function create_each_block_2$5(ctx) {
    	var t0_value = ctx.field2 + "", t0, t1, em, br, current;

    	var link = new Link({
    		props: { href: ctx.prop[ctx.field][ctx.field2] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = text(": ");
    			em = element("em");
    			link.$$.fragment.c();
    			br = element("br");
    			add_location(em, file$d, 26, 33, 1000);
    			add_location(br, file$d, 26, 76, 1043);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, em, anchor);
    			mount_component(link, em, null);
    			insert_dev(target, br, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.ufo) && t0_value !== (t0_value = ctx.field2 + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			var link_changes = {};
    			if (changed.ufo) link_changes.href = ctx.prop[ctx.field][ctx.field2];
    			link.$set(link_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(t1);
    				detach_dev(em);
    			}

    			destroy_component(link);

    			if (detaching) {
    				detach_dev(br);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$5.name, type: "each", source: "(26:16) {#each Object.keys(prop[field]).sort() as field2, i2}", ctx });
    	return block;
    }

    // (24:12) {#each Object.keys(prop).sort() as field, i}
    function create_each_block_1$5(ctx) {
    	var tr, td0, t0_value = rul.str(ctx.field) + "", t0, td1, t1, current;

    	let each_value_2 = Object.keys(ctx.prop[ctx.field]).sort();

    	let each_blocks = [];

    	for (let i_1 = 0; i_1 < each_value_2.length; i_1 += 1) {
    		each_blocks[i_1] = create_each_block_2$5(get_each_context_2$5(ctx, each_value_2, i_1));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			td1 = element("td");

    			for (let i_1 = 0; i_1 < each_blocks.length; i_1 += 1) {
    				each_blocks[i_1].c();
    			}

    			t1 = space();
    			add_location(td0, file$d, 24, 18, 865);
    			add_location(td1, file$d, 24, 43, 890);
    			add_location(tr, file$d, 24, 14, 861);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(tr, td1);

    			for (let i_1 = 0; i_1 < each_blocks.length; i_1 += 1) {
    				each_blocks[i_1].m(td1, null);
    			}

    			append_dev(td1, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.ufo) && t0_value !== (t0_value = rul.str(ctx.field) + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if (changed.ufo) {
    				each_value_2 = Object.keys(ctx.prop[ctx.field]).sort();

    				let i_1;
    				for (i_1 = 0; i_1 < each_value_2.length; i_1 += 1) {
    					const child_ctx = get_each_context_2$5(ctx, each_value_2, i_1);

    					if (each_blocks[i_1]) {
    						each_blocks[i_1].p(changed, child_ctx);
    						transition_in(each_blocks[i_1], 1);
    					} else {
    						each_blocks[i_1] = create_each_block_2$5(child_ctx);
    						each_blocks[i_1].c();
    						transition_in(each_blocks[i_1], 1);
    						each_blocks[i_1].m(td1, t1);
    					}
    				}

    				group_outros();
    				for (i_1 = each_value_2.length; i_1 < each_blocks.length; i_1 += 1) {
    					out(i_1);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i_1 = 0; i_1 < each_value_2.length; i_1 += 1) {
    				transition_in(each_blocks[i_1]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i_1 = 0; i_1 < each_blocks.length; i_1 += 1) {
    				transition_out(each_blocks[i_1]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$5.name, type: "each", source: "(24:12) {#each Object.keys(prop).sort() as field, i}", ctx });
    	return block;
    }

    // (15:2) {#each Object.entries(ufo).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$c(ctx) {
    	var show_if = !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(ctx.key), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$c(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.ufo) show_if = !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(ctx.key);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$c(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$c.name, type: "each", source: "(15:2) {#each Object.entries(ufo).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$h(ctx) {
    	var table, tr, td, t_1, current;

    	let each_value = Object.entries(ctx.ufo).sort(func$5);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$c(get_each_context$c(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "Craft";
    			t_1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$d, 13, 7, 264);
    			add_location(tr, file$d, 13, 2, 259);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$d, 12, 0, 229);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr);
    			append_dev(tr, td);
    			append_dev(table, t_1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.ufo || changed.rul) {
    				each_value = Object.entries(ctx.ufo).sort(func$5);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$c(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$c(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$h.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$5 = (a, b) => (a[0] > b[0] ? 1 : -1);

    function instance$g($$self, $$props, $$invalidate) {
    	

      let { ufo } = $$props;

    	const writable_props = ['ufo'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$8.warn(`<Ufo> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('ufo' in $$props) $$invalidate('ufo', ufo = $$props.ufo);
    	};

    	$$self.$capture_state = () => {
    		return { ufo };
    	};

    	$$self.$inject_state = $$props => {
    		if ('ufo' in $$props) $$invalidate('ufo', ufo = $$props.ufo);
    	};

    	$$self.$$.update = ($$dirty = { ufo: 1 }) => {
    		if ($$dirty.ufo) { {console.info(ufo);} }
    	};

    	return { ufo };
    }

    class Ufo$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$h, safe_not_equal, ["ufo"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Ufo", options, id: create_fragment$h.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.ufo === undefined && !('ufo' in props)) {
    			console_1$8.warn("<Ufo> was created without expected prop 'ufo'");
    		}
    	}

    	get ufo() {
    		throw new Error("<Ufo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ufo(value) {
    		throw new Error("<Ufo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Facility.svelte generated by Svelte v3.12.1 */
    const { console: console_1$9 } = globals;

    const file$e = "src\\Facility.svelte";

    function get_each_context_3$3(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx._ = list[i];
    	child_ctx.x = i;
    	return child_ctx;
    }

    function get_each_context_2$6(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx._ = list[i];
    	child_ctx.y = i;
    	return child_ctx;
    }

    function get_each_context_1$6(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.field = list[i];
    	child_ctx.i = i;
    	return child_ctx;
    }

    function get_each_context$d(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.key = list[i][0];
    	child_ctx.prop = list[i][1];
    	return child_ctx;
    }

    // (32:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
    function create_if_block$d(ctx) {
    	var tr, td0, raw_value = rul.decamelize(ctx.key) + "", t0, td1, show_if, show_if_1, show_if_2, show_if_3, current_block_type_index, if_block, t1, current;

    	var if_block_creators = [
    		create_if_block_1$b,
    		create_if_block_3$7,
    		create_if_block_4$3,
    		create_if_block_5$2,
    		create_else_block$9
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if ((show_if == null) || changed.facility) show_if = !!(['buildCostItems'].includes(ctx.key));
    		if (show_if) return 0;
    		if ((show_if_1 == null) || changed.facility) show_if_1 = !!(['storageTiles'].includes(ctx.key));
    		if (show_if_1) return 1;
    		if ((show_if_2 == null) || changed.facility) show_if_2 = !!(['provideBaseFunc', 'requiresBaseFunc', 'forbiddenBaseFunc'].includes(ctx.key));
    		if (show_if_2) return 2;
    		if ((show_if_3 == null) || changed.facility) show_if_3 = !!(['spriteFacility', 'spriteShape'].includes(ctx.key));
    		if (show_if_3) return 3;
    		return 4;
    	}

    	current_block_type_index = select_block_type(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$e, 33, 8, 822);
    			add_location(td1, file$e, 36, 8, 912);
    			add_location(tr, file$e, 32, 6, 808);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.facility) && raw_value !== (raw_value = rul.decamelize(ctx.key) + "")) {
    				td0.innerHTML = raw_value;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			if_blocks[current_block_type_index].d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$d.name, type: "if", source: "(32:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}", ctx });
    	return block;
    }

    // (75:10) {:else}
    function create_else_block$9(ctx) {
    	var current;

    	var value = new Value({
    		props: { val: ctx.prop },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			value.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var value_changes = {};
    			if (changed.facility) value_changes.val = ctx.prop;
    			value.$set(value_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$9.name, type: "else", source: "(75:10) {:else}", ctx });
    	return block;
    }

    // (64:68) 
    function create_if_block_5$2(ctx) {
    	var div;

    	let each_value_2 = { length: ctx.size };

    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$6(get_each_context_2$6(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(div, "class", "tight");
    			set_style(div, "columns", ctx.size);
    			set_style(div, "width", "" + 32 * ctx.size + "px");
    			add_location(div, file$e, 64, 12, 2100);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},

    		p: function update(changed, ctx) {
    			if (changed.size || changed.rul || changed.facility) {
    				each_value_2 = { length: ctx.size };

    				let i;
    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$6(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_2$6(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_2.length;
    			}

    			if (changed.size) {
    				set_style(div, "columns", ctx.size);
    				set_style(div, "width", "" + 32 * ctx.size + "px");
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_5$2.name, type: "if", source: "(64:68) ", ctx });
    	return block;
    }

    // (62:95) 
    function create_if_block_4$3(ctx) {
    	var current;

    	var baseservicelist = new BaseServiceList({
    		props: {
    		items: ctx.prop,
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			baseservicelist.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var baseservicelist_changes = {};
    			if (changed.facility) baseservicelist_changes.items = ctx.prop;
    			baseservicelist.$set(baseservicelist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_4$3.name, type: "if", source: "(62:95) ", ctx });
    	return block;
    }

    // (46:51) 
    function create_if_block_3$7(ctx) {
    	var div3, div0, button, t_1, div2, div1, current;

    	var linkslist = new LinksList({
    		props: {
    		items: ctx.prop,
    		vertical: true
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			div0 = element("div");
    			button = element("button");
    			button.textContent = "Expand";
    			t_1 = space();
    			div2 = element("div");
    			div1 = element("div");
    			linkslist.$$.fragment.c();
    			attr_dev(button, "class", "button");
    			attr_dev(button, "aria-haspopup", "true");
    			attr_dev(button, "aria-controls", "dropdown-tiles");
    			add_location(button, file$e, 48, 16, 1381);
    			attr_dev(div0, "class", "dropdown-trigger");
    			add_location(div0, file$e, 47, 14, 1333);
    			attr_dev(div1, "class", "dropdown-content svelte-fh4l44");
    			set_style(div1, "columns", "6");
    			add_location(div1, file$e, 56, 16, 1681);
    			attr_dev(div2, "class", "dropdown-menu");
    			attr_dev(div2, "id", "dropdown-tiles");
    			attr_dev(div2, "role", "menu");
    			add_location(div2, file$e, 55, 14, 1604);
    			attr_dev(div3, "class", "dropdown is-hoverable");
    			add_location(div3, file$e, 46, 12, 1282);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div0, button);
    			append_dev(div3, t_1);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			mount_component(linkslist, div1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkslist_changes = {};
    			if (changed.facility) linkslist_changes.items = ctx.prop;
    			linkslist.$set(linkslist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div3);
    			}

    			destroy_component(linkslist);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$7.name, type: "if", source: "(46:51) ", ctx });
    	return block;
    }

    // (38:10) {#if ['buildCostItems'].includes(key)}
    function create_if_block_1$b(ctx) {
    	var each_1_anchor, current;

    	let each_value_1 = Object.keys(ctx.prop).sort();

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$6(get_each_context_1$6(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.facility) {
    				each_value_1 = Object.keys(ctx.prop).sort();

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$6(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$6(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();
    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$b.name, type: "if", source: "(38:10) {#if ['buildCostItems'].includes(key)}", ctx });
    	return block;
    }

    // (67:16) {#each { length: size } as _, x}
    function create_each_block_3$3(ctx) {
    	var img, img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "sprite");
    			attr_dev(img, "alt", "X");
    			attr_dev(img, "src", img_src_value = rul.specialSprite('baseSprite', ctx.prop * 1 + ctx.x * ctx.size + ctx.y));
    			add_location(img, file$e, 67, 18, 2281);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.facility || changed.size) && img_src_value !== (img_src_value = rul.specialSprite('baseSprite', ctx.prop * 1 + ctx.x * ctx.size + ctx.y))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(img);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_3$3.name, type: "each", source: "(67:16) {#each { length: size } as _, x}", ctx });
    	return block;
    }

    // (66:14) {#each { length: size } as _, y}
    function create_each_block_2$6(ctx) {
    	var each_1_anchor;

    	let each_value_3 = { length: ctx.size };

    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3$3(get_each_context_3$3(ctx, each_value_3, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (changed.rul || changed.facility || changed.size) {
    				each_value_3 = { length: ctx.size };

    				let i;
    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$3(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_3$3(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_3.length;
    			}
    		},

    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);

    			if (detaching) {
    				detach_dev(each_1_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$6.name, type: "each", source: "(66:14) {#each { length: size } as _, y}", ctx });
    	return block;
    }

    // (40:14) {#if i != 0}
    function create_if_block_2$b(ctx) {
    	var br;

    	const block = {
    		c: function create() {
    			br = element("br");
    			add_location(br, file$e, 40, 16, 1070);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(br);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$b.name, type: "if", source: "(40:14) {#if i != 0}", ctx });
    	return block;
    }

    // (39:12) {#each Object.keys(prop).sort() as field, i}
    function create_each_block_1$6(ctx) {
    	var t0, t1, t2_value = ctx.prop[ctx.field].build + "", t2, t3, t4_value = ctx.prop[ctx.field].refund + "", t4, current;

    	var if_block = (ctx.i != 0) && create_if_block_2$b(ctx);

    	var link = new Link({
    		props: { href: ctx.field },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();
    			link.$$.fragment.c();
    			t1 = text("\r\n              : ");
    			t2 = text(t2_value);
    			t3 = text(" / ");
    			t4 = text(t4_value);
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(link, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, t4, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var link_changes = {};
    			if (changed.facility) link_changes.href = ctx.field;
    			link.$set(link_changes);

    			if ((!current || changed.facility) && t2_value !== (t2_value = ctx.prop[ctx.field].build + "")) {
    				set_data_dev(t2, t2_value);
    			}

    			if ((!current || changed.facility) && t4_value !== (t4_value = ctx.prop[ctx.field].refund + "")) {
    				set_data_dev(t4, t4_value);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(t0);
    			}

    			destroy_component(link, detaching);

    			if (detaching) {
    				detach_dev(t1);
    				detach_dev(t2);
    				detach_dev(t3);
    				detach_dev(t4);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$6.name, type: "each", source: "(39:12) {#each Object.keys(prop).sort() as field, i}", ctx });
    	return block;
    }

    // (29:2) {#each Object.entries(facility).sort((a, b) =>      a[0] > b[0] && a[0] != 'storageTiles' ? 1 : -1    ) as [key, prop]}
    function create_each_block$d(ctx) {
    	var show_if = !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(ctx.key), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$d(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.facility) show_if = !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(ctx.key);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$d(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$d.name, type: "each", source: "(29:2) {#each Object.entries(facility).sort((a, b) =>      a[0] > b[0] && a[0] != 'storageTiles' ? 1 : -1    ) as [key, prop]}", ctx });
    	return block;
    }

    function create_fragment$i(ctx) {
    	var table, tr, td, t_1, current;

    	let each_value = Object.entries(ctx.facility).sort(func$6
      );

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$d(get_each_context$d(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "Craft";
    			t_1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$e, 26, 4, 524);
    			add_location(tr, file$e, 25, 2, 514);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$e, 24, 0, 484);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr);
    			append_dev(tr, td);
    			append_dev(table, t_1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.facility || changed.size || changed.rul) {
    				each_value = Object.entries(ctx.facility).sort(func$6
      );

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$d(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$d(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$i.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$6 = (a, b) => a[0] > b[0] && a[0] != 'storageTiles' ? 1 : -1;

    function instance$h($$self, $$props, $$invalidate) {
    	

      let { facility } = $$props;
      let size = 1;

    	const writable_props = ['facility'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$9.warn(`<Facility> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('facility' in $$props) $$invalidate('facility', facility = $$props.facility);
    	};

    	$$self.$capture_state = () => {
    		return { facility, size };
    	};

    	$$self.$inject_state = $$props => {
    		if ('facility' in $$props) $$invalidate('facility', facility = $$props.facility);
    		if ('size' in $$props) $$invalidate('size', size = $$props.size);
    	};

    	$$self.$$.update = ($$dirty = { facility: 1, size: 1 }) => {
    		if ($$dirty.facility || $$dirty.size) { {
            $$invalidate('size', size = facility.size || 1);
            console.log(size);
            console.info(facility);
          } }
    	};

    	return { facility, size };
    }

    class Facility$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$h, create_fragment$i, safe_not_equal, ["facility"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Facility", options, id: create_fragment$i.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.facility === undefined && !('facility' in props)) {
    			console_1$9.warn("<Facility> was created without expected prop 'facility'");
    		}
    	}

    	get facility() {
    		throw new Error("<Facility>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set facility(value) {
    		throw new Error("<Facility>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\BaseService.svelte generated by Svelte v3.12.1 */

    const file$f = "src\\BaseService.svelte";

    function get_each_context$e(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.prop = list[i];
    	return child_ctx;
    }

    // (15:4) {#if !['id'].includes(prop[0])}
    function create_if_block$e(ctx) {
    	var tr, td0, t0_value = rul.decamelize(ctx.prop[0]) + "", t0, t1, td1, current;

    	var linkslist = new LinksList({
    		props: { items: ctx.prop[1] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			td1 = element("td");
    			linkslist.$$.fragment.c();
    			add_location(td0, file$f, 15, 10, 371);
    			add_location(td1, file$f, 16, 6, 413);
    			add_location(tr, file$f, 15, 6, 367);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(tr, t1);
    			append_dev(tr, td1);
    			mount_component(linkslist, td1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.service) && t0_value !== (t0_value = rul.decamelize(ctx.prop[0]) + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			var linkslist_changes = {};
    			if (changed.service) linkslist_changes.items = ctx.prop[1];
    			linkslist.$set(linkslist_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(linkslist);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$e.name, type: "if", source: "(15:4) {#if !['id'].includes(prop[0])}", ctx });
    	return block;
    }

    // (14:2) {#each Object.entries(service).sort((a, b) => (a[0]=="providedBy"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}
    function create_each_block$e(ctx) {
    	var show_if = !['id'].includes(ctx.prop[0]), if_block_anchor, current;

    	var if_block = (show_if) && create_if_block$e(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.service) show_if = !['id'].includes(ctx.prop[0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$e(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();
    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$e.name, type: "each", source: "(14:2) {#each Object.entries(service).sort((a, b) => (a[0]==\"providedBy\"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}", ctx });
    	return block;
    }

    function create_fragment$j(ctx) {
    	var table, current;

    	let each_value = Object.entries(ctx.service).sort(func$7);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$e(get_each_context$e(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$f, 11, 0, 182);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.service || changed.rul) {
    				each_value = Object.entries(ctx.service).sort(func$7);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$e(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$e(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$j.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$7 = (a, b) => (a[0]=="providedBy"?-10:10) + (a[0] > b[0] ? 1 : -1);

    function instance$i($$self, $$props, $$invalidate) {
    	

      let { service } = $$props;

    	const writable_props = ['service'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<BaseService> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('service' in $$props) $$invalidate('service', service = $$props.service);
    	};

    	$$self.$capture_state = () => {
    		return { service };
    	};

    	$$self.$inject_state = $$props => {
    		if ('service' in $$props) $$invalidate('service', service = $$props.service);
    	};

    	return { service };
    }

    class BaseService extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$j, safe_not_equal, ["service"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "BaseService", options, id: create_fragment$j.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.service === undefined && !('service' in props)) {
    			console.warn("<BaseService> was created without expected prop 'service'");
    		}
    	}

    	get service() {
    		throw new Error("<BaseService>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set service(value) {
    		throw new Error("<BaseService>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\BaseServices.svelte generated by Svelte v3.12.1 */
    const { console: console_1$a } = globals;

    const file$g = "src\\BaseServices.svelte";

    function get_each_context$f(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.service = list[i];
    	return child_ctx;
    }

    // (21:2) {#each Object.entries(rul.baseServices) as service}
    function create_each_block$f(ctx) {
    	var tr, td0, a, raw_value = rul.str(ctx.service[0]) + "", t0, td1, t1, tr_class_value, current;

    	var linkslist = new LinksList({
    		props: { items: ctx.service[1].providedBy },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			a = element("a");
    			t0 = space();
    			td1 = element("td");
    			linkslist.$$.fragment.c();
    			t1 = space();
    			attr_dev(a, "color", "cyan");
    			attr_dev(a, "href", '#' + ctx.service[0]);
    			attr_dev(a, "class", "svelte-edz6kn");
    			add_location(a, file$g, 22, 10, 423);
    			attr_dev(td0, "class", "svelte-edz6kn");
    			add_location(td0, file$g, 22, 6, 419);
    			attr_dev(td1, "class", "svelte-edz6kn");
    			add_location(td1, file$g, 23, 6, 505);
    			attr_dev(tr, "class", tr_class_value = "" + null_to_empty((ctx.service[0] == ctx.query?"highlight":"")) + " svelte-edz6kn");
    			add_location(tr, file$g, 21, 4, 364);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, a);
    			a.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			mount_component(linkslist, td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.query) && tr_class_value !== (tr_class_value = "" + null_to_empty((ctx.service[0] == ctx.query?"highlight":"")) + " svelte-edz6kn")) {
    				attr_dev(tr, "class", tr_class_value);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(tr);
    			}

    			destroy_component(linkslist);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$f.name, type: "each", source: "(21:2) {#each Object.entries(rul.baseServices) as service}", ctx });
    	return block;
    }

    function create_fragment$k(ctx) {
    	var table, current;

    	let each_value = Object.entries(rul.baseServices);

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$f(get_each_context$f(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$g, 18, 0, 275);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.rul || changed.query) {
    				each_value = Object.entries(rul.baseServices);

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$f(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$f(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();
    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},

    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(table);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$k.name, type: "component", source: "", ctx });
    	return block;
    }

    function instance$j($$self, $$props, $$invalidate) {
    	

      let { query = null } = $$props;

      console.log(query);

    	const writable_props = ['query'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$a.warn(`<BaseServices> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('query' in $$props) $$invalidate('query', query = $$props.query);
    	};

    	$$self.$capture_state = () => {
    		return { query };
    	};

    	$$self.$inject_state = $$props => {
    		if ('query' in $$props) $$invalidate('query', query = $$props.query);
    	};

    	return { query };
    }

    class BaseServices extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$k, safe_not_equal, ["query"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "BaseServices", options, id: create_fragment$k.name });
    	}

    	get query() {
    		throw new Error("<BaseServices>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set query(value) {
    		throw new Error("<BaseServices>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Article.svelte generated by Svelte v3.12.1 */

    const file$h = "src\\Article.svelte";

    // (50:0) {#if !(article.id in rul.units)}
    function create_if_block_15$1(ctx) {
    	var current;

    	var illustration = new Illustration({
    		props: { id: ctx.article.image_id },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			illustration.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(illustration, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var illustration_changes = {};
    			if (changed.article) illustration_changes.id = ctx.article.image_id;
    			illustration.$set(illustration_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(illustration.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(illustration.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(illustration, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_15$1.name, type: "if", source: "(50:0) {#if !(article.id in rul.units)}", ctx });
    	return block;
    }

    // (64:66) 
    function create_if_block_14$2(ctx) {
    	var current;

    	var linkspage = new LinksPage({
    		props: { links: rul.sections[ctx.article.id].articles.map(func$8) },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			linkspage.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(linkspage, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkspage_changes = {};
    			if (changed.article) linkspage_changes.links = rul.sections[ctx.article.id].articles.map(func$8);
    			linkspage.$set(linkspage_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkspage.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(linkspage, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_14$2.name, type: "if", source: "(64:66) ", ctx });
    	return block;
    }

    // (62:42) 
    function create_if_block_13$2(ctx) {
    	var current;

    	var linkspage = new LinksPage({
    		props: { links: rul.categories[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			linkspage.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(linkspage, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkspage_changes = {};
    			if (changed.article) linkspage_changes.links = rul.categories[ctx.article.id];
    			linkspage.$set(linkspage_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkspage.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(linkspage, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_13$2.name, type: "if", source: "(62:42) ", ctx });
    	return block;
    }

    // (60:42) 
    function create_if_block_12$2(ctx) {
    	var current;

    	var conditions = new Conditions({
    		props: { conditions: rul.startingConditions[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			conditions.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(conditions, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var conditions_changes = {};
    			if (changed.article) conditions_changes.conditions = rul.startingConditions[ctx.article.id];
    			conditions.$set(conditions_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(conditions.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(conditions.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(conditions, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_12$2.name, type: "if", source: "(60:42) ", ctx });
    	return block;
    }

    // (58:0) {#if article.id == 'SERVICES'}
    function create_if_block_11$2(ctx) {
    	var current;

    	var baseservices = new BaseServices({ $$inline: true });

    	const block = {
    		c: function create() {
    			baseservices.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservices, target, anchor);
    			current = true;
    		},

    		p: noop,

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservices.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservices.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservices, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_11$2.name, type: "if", source: "(58:0) {#if article.id == 'SERVICES'}", ctx });
    	return block;
    }

    // (73:4) {#if article.id in rul.units}
    function create_if_block_10$2(ctx) {
    	var current;

    	var unit = new Unit$1({
    		props: { unit: rul.units[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			unit.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(unit, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var unit_changes = {};
    			if (changed.article) unit_changes.unit = rul.units[ctx.article.id];
    			unit.$set(unit_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(unit.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(unit.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(unit, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_10$2.name, type: "if", source: "(73:4) {#if article.id in rul.units}", ctx });
    	return block;
    }

    // (77:4) {#if article.id in rul.items}
    function create_if_block_9$2(ctx) {
    	var current;

    	var item = new Item$1({
    		props: { item: rul.items[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			item.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(item, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var item_changes = {};
    			if (changed.article) item_changes.item = rul.items[ctx.article.id];
    			item.$set(item_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(item.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(item.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(item, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_9$2.name, type: "if", source: "(77:4) {#if article.id in rul.items}", ctx });
    	return block;
    }

    // (85:67) 
    function create_if_block_8$2(ctx) {
    	var current;

    	var armor = new Armor$1({
    		props: { armor: rul.armors[rul.units[ctx.article.id].armor] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			armor.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(armor, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var armor_changes = {};
    			if (changed.article) armor_changes.armor = rul.armors[rul.units[ctx.article.id].armor];
    			armor.$set(armor_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(armor.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(armor.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(armor, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_8$2.name, type: "if", source: "(85:67) ", ctx });
    	return block;
    }

    // (83:2) {#if article.id in rul.armors}
    function create_if_block_7$2(ctx) {
    	var current;

    	var armor = new Armor$1({
    		props: { armor: rul.armors[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			armor.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(armor, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var armor_changes = {};
    			if (changed.article) armor_changes.armor = rul.armors[ctx.article.id];
    			armor.$set(armor_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(armor.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(armor.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(armor, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_7$2.name, type: "if", source: "(83:2) {#if article.id in rul.armors}", ctx });
    	return block;
    }

    // (89:2) {#if article.id in rul.baseServices}
    function create_if_block_6$2(ctx) {
    	var current;

    	var baseservice = new BaseService({
    		props: { service: rul.baseServices[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			baseservice.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(baseservice, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var baseservice_changes = {};
    			if (changed.article) baseservice_changes.service = rul.baseServices[ctx.article.id];
    			baseservice.$set(baseservice_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservice.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(baseservice.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(baseservice, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_6$2.name, type: "if", source: "(89:2) {#if article.id in rul.baseServices}", ctx });
    	return block;
    }

    // (93:2) {#if article.id in rul.crafts}
    function create_if_block_5$3(ctx) {
    	var current;

    	var craft = new Craft$1({
    		props: { craft: rul.crafts[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			craft.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(craft, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var craft_changes = {};
    			if (changed.article) craft_changes.craft = rul.crafts[ctx.article.id];
    			craft.$set(craft_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(craft.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(craft.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(craft, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_5$3.name, type: "if", source: "(93:2) {#if article.id in rul.crafts}", ctx });
    	return block;
    }

    // (97:2) {#if article.id in rul.craftWeapons}
    function create_if_block_4$4(ctx) {
    	var current;

    	var craftweapon = new CraftWeapon$1({
    		props: { weapon: rul.craftWeapons[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			craftweapon.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(craftweapon, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var craftweapon_changes = {};
    			if (changed.article) craftweapon_changes.weapon = rul.craftWeapons[ctx.article.id];
    			craftweapon.$set(craftweapon_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(craftweapon.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(craftweapon.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(craftweapon, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_4$4.name, type: "if", source: "(97:2) {#if article.id in rul.craftWeapons}", ctx });
    	return block;
    }

    // (101:2) {#if article.id in rul.ufos}
    function create_if_block_3$8(ctx) {
    	var current;

    	var ufo = new Ufo$1({
    		props: { ufo: rul.ufos[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			ufo.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(ufo, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var ufo_changes = {};
    			if (changed.article) ufo_changes.ufo = rul.ufos[ctx.article.id];
    			ufo.$set(ufo_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(ufo.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(ufo.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(ufo, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$8.name, type: "if", source: "(101:2) {#if article.id in rul.ufos}", ctx });
    	return block;
    }

    // (105:2) {#if article.id in rul.facilities}
    function create_if_block_2$c(ctx) {
    	var current;

    	var facility = new Facility$1({
    		props: { facility: rul.facilities[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			facility.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(facility, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var facility_changes = {};
    			if (changed.article) facility_changes.facility = rul.facilities[ctx.article.id];
    			facility.$set(facility_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(facility.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(facility.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(facility, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$c.name, type: "if", source: "(105:2) {#if article.id in rul.facilities}", ctx });
    	return block;
    }

    // (111:6) {#if article.id in rul.manufacture}
    function create_if_block_1$c(ctx) {
    	var current;

    	var manufacture = new Manufacture$1({
    		props: { manufacture: rul.manufacture[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			manufacture.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(manufacture, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var manufacture_changes = {};
    			if (changed.article) manufacture_changes.manufacture = rul.manufacture[ctx.article.id];
    			manufacture.$set(manufacture_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(manufacture.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(manufacture.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(manufacture, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$c.name, type: "if", source: "(111:6) {#if article.id in rul.manufacture}", ctx });
    	return block;
    }

    // (115:6) {#if article.id in rul.research}
    function create_if_block$f(ctx) {
    	var current;

    	var research = new Research$1({
    		props: { research: rul.research[ctx.article.id] },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			research.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(research, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var research_changes = {};
    			if (changed.article) research_changes.research = rul.research[ctx.article.id];
    			research.$set(research_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(research.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(research.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(research, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$f.name, type: "if", source: "(115:6) {#if article.id in rul.research}", ctx });
    	return block;
    }

    function create_fragment$l(ctx) {
    	var title_value, t0, h1, t1_value = ctx.article.title || ctx.article.id + "", t1, t2, t3, div0, t4, current_block_type_index, if_block1, t5, div3, t6, div1, table0, t7, t8, current_block_type_index_1, if_block4, t9, t10, t11, t12, t13, t14, div2, table1, t15, current;

    	document.title = title_value = ctx.article.title || 'XPedia';

    	var if_block0 = (!(ctx.article.id in rul.units)) && create_if_block_15$1(ctx);

    	var if_block_creators = [
    		create_if_block_11$2,
    		create_if_block_12$2,
    		create_if_block_13$2,
    		create_if_block_14$2
    	];

    	var if_blocks = [];

    	function select_block_type(changed, ctx) {
    		if (ctx.article.id == 'SERVICES') return 0;
    		if (ctx.article.type_id == 'CONDITIONS') return 1;
    		if (ctx.article.type_id == 'CATEGORIES') return 2;
    		if (ctx.article.type_id == 'PEDIA' || ctx.article.type_id == 'TYPE') return 3;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(null, ctx))) {
    		if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	var switch_value = ctx.other;

    	function switch_props(ctx) {
    		return {
    			props: { query: ctx.query },
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		var switch_instance = new switch_value(switch_props(ctx));
    	}

    	var if_block2 = (ctx.article.id in rul.units) && create_if_block_10$2(ctx);

    	var if_block3 = (ctx.article.id in rul.items) && create_if_block_9$2(ctx);

    	var if_block_creators_1 = [
    		create_if_block_7$2,
    		create_if_block_8$2
    	];

    	var if_blocks_1 = [];

    	function select_block_type_1(changed, ctx) {
    		if (ctx.article.id in rul.armors) return 0;
    		if (ctx.article.id in rul.units && rul.units[ctx.article.id].armor) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index_1 = select_block_type_1(null, ctx))) {
    		if_block4 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    	}

    	var if_block5 = (ctx.article.id in rul.baseServices) && create_if_block_6$2(ctx);

    	var if_block6 = (ctx.article.id in rul.crafts) && create_if_block_5$3(ctx);

    	var if_block7 = (ctx.article.id in rul.craftWeapons) && create_if_block_4$4(ctx);

    	var if_block8 = (ctx.article.id in rul.ufos) && create_if_block_3$8(ctx);

    	var if_block9 = (ctx.article.id in rul.facilities) && create_if_block_2$c(ctx);

    	var if_block10 = (ctx.article.id in rul.manufacture) && create_if_block_1$c(ctx);

    	var if_block11 = (ctx.article.id in rul.research) && create_if_block$f(ctx);

    	const block = {
    		c: function create() {
    			t0 = space();
    			h1 = element("h1");
    			t1 = text(t1_value);
    			t2 = space();
    			if (if_block0) if_block0.c();
    			t3 = space();
    			div0 = element("div");
    			t4 = space();
    			if (if_block1) if_block1.c();
    			t5 = space();
    			div3 = element("div");
    			if (switch_instance) switch_instance.$$.fragment.c();
    			t6 = space();
    			div1 = element("div");
    			table0 = element("table");
    			if (if_block2) if_block2.c();
    			t7 = space();
    			if (if_block3) if_block3.c();
    			t8 = space();
    			if (if_block4) if_block4.c();
    			t9 = space();
    			if (if_block5) if_block5.c();
    			t10 = space();
    			if (if_block6) if_block6.c();
    			t11 = space();
    			if (if_block7) if_block7.c();
    			t12 = space();
    			if (if_block8) if_block8.c();
    			t13 = space();
    			if (if_block9) if_block9.c();
    			t14 = space();
    			div2 = element("div");
    			table1 = element("table");
    			if (if_block10) if_block10.c();
    			t15 = space();
    			if (if_block11) if_block11.c();
    			add_location(h1, file$h, 47, 0, 1313);
    			attr_dev(div0, "class", "article-text");
    			add_location(div0, file$h, 53, 0, 1440);
    			attr_dev(table0, "class", "main-table");
    			add_location(table0, file$h, 71, 2, 2027);
    			attr_dev(div1, "class", "flex-vertical");
    			add_location(div1, file$h, 70, 2, 1996);
    			attr_dev(table1, "class", "main-table");
    			add_location(table1, file$h, 109, 4, 3023);
    			attr_dev(div2, "class", "flex-vertical");
    			add_location(div2, file$h, 108, 2, 2990);
    			attr_dev(div3, "class", "flex-horisontal");
    			add_location(div3, file$h, 67, 0, 1917);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, h1, anchor);
    			append_dev(h1, t1);
    			insert_dev(target, t2, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div0, anchor);
    			div0.innerHTML = ctx.textwithHighlights;
    			insert_dev(target, t4, anchor);
    			if (~current_block_type_index) if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div3, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, div3, null);
    			}

    			append_dev(div3, t6);
    			append_dev(div3, div1);
    			append_dev(div1, table0);
    			if (if_block2) if_block2.m(table0, null);
    			append_dev(table0, t7);
    			if (if_block3) if_block3.m(table0, null);
    			append_dev(div3, t8);
    			if (~current_block_type_index_1) if_blocks_1[current_block_type_index_1].m(div3, null);
    			append_dev(div3, t9);
    			if (if_block5) if_block5.m(div3, null);
    			append_dev(div3, t10);
    			if (if_block6) if_block6.m(div3, null);
    			append_dev(div3, t11);
    			if (if_block7) if_block7.m(div3, null);
    			append_dev(div3, t12);
    			if (if_block8) if_block8.m(div3, null);
    			append_dev(div3, t13);
    			if (if_block9) if_block9.m(div3, null);
    			append_dev(div3, t14);
    			append_dev(div3, div2);
    			append_dev(div2, table1);
    			if (if_block10) if_block10.m(table1, null);
    			append_dev(table1, t15);
    			if (if_block11) if_block11.m(table1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if ((!current || changed.article) && title_value !== (title_value = ctx.article.title || 'XPedia')) {
    				document.title = title_value;
    			}

    			if ((!current || changed.article) && t1_value !== (t1_value = ctx.article.title || ctx.article.id + "")) {
    				set_data_dev(t1, t1_value);
    			}

    			if (!(ctx.article.id in rul.units)) {
    				if (if_block0) {
    					if_block0.p(changed, ctx);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_15$1(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t3.parentNode, t3);
    				}
    			} else if (if_block0) {
    				group_outros();
    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});
    				check_outros();
    			}

    			if (!current || changed.textwithHighlights) {
    				div0.innerHTML = ctx.textwithHighlights;
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				if (if_block1) {
    					group_outros();
    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});
    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block1 = if_blocks[current_block_type_index];
    					if (!if_block1) {
    						if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block1.c();
    					}
    					transition_in(if_block1, 1);
    					if_block1.m(t5.parentNode, t5);
    				} else {
    					if_block1 = null;
    				}
    			}

    			var switch_instance_changes = {};
    			if (changed.query) switch_instance_changes.query = ctx.query;

    			if (switch_value !== (switch_value = ctx.other)) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;
    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});
    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));

    					switch_instance.$$.fragment.c();
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, div3, t6);
    				} else {
    					switch_instance = null;
    				}
    			}

    			else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}

    			if (ctx.article.id in rul.units) {
    				if (if_block2) {
    					if_block2.p(changed, ctx);
    					transition_in(if_block2, 1);
    				} else {
    					if_block2 = create_if_block_10$2(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(table0, t7);
    				}
    			} else if (if_block2) {
    				group_outros();
    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.items) {
    				if (if_block3) {
    					if_block3.p(changed, ctx);
    					transition_in(if_block3, 1);
    				} else {
    					if_block3 = create_if_block_9$2(ctx);
    					if_block3.c();
    					transition_in(if_block3, 1);
    					if_block3.m(table0, null);
    				}
    			} else if (if_block3) {
    				group_outros();
    				transition_out(if_block3, 1, 1, () => {
    					if_block3 = null;
    				});
    				check_outros();
    			}

    			var previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(changed, ctx);
    			if (current_block_type_index_1 === previous_block_index_1) {
    				if (~current_block_type_index_1) if_blocks_1[current_block_type_index_1].p(changed, ctx);
    			} else {
    				if (if_block4) {
    					group_outros();
    					transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    						if_blocks_1[previous_block_index_1] = null;
    					});
    					check_outros();
    				}

    				if (~current_block_type_index_1) {
    					if_block4 = if_blocks_1[current_block_type_index_1];
    					if (!if_block4) {
    						if_block4 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    						if_block4.c();
    					}
    					transition_in(if_block4, 1);
    					if_block4.m(div3, t9);
    				} else {
    					if_block4 = null;
    				}
    			}

    			if (ctx.article.id in rul.baseServices) {
    				if (if_block5) {
    					if_block5.p(changed, ctx);
    					transition_in(if_block5, 1);
    				} else {
    					if_block5 = create_if_block_6$2(ctx);
    					if_block5.c();
    					transition_in(if_block5, 1);
    					if_block5.m(div3, t10);
    				}
    			} else if (if_block5) {
    				group_outros();
    				transition_out(if_block5, 1, 1, () => {
    					if_block5 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.crafts) {
    				if (if_block6) {
    					if_block6.p(changed, ctx);
    					transition_in(if_block6, 1);
    				} else {
    					if_block6 = create_if_block_5$3(ctx);
    					if_block6.c();
    					transition_in(if_block6, 1);
    					if_block6.m(div3, t11);
    				}
    			} else if (if_block6) {
    				group_outros();
    				transition_out(if_block6, 1, 1, () => {
    					if_block6 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.craftWeapons) {
    				if (if_block7) {
    					if_block7.p(changed, ctx);
    					transition_in(if_block7, 1);
    				} else {
    					if_block7 = create_if_block_4$4(ctx);
    					if_block7.c();
    					transition_in(if_block7, 1);
    					if_block7.m(div3, t12);
    				}
    			} else if (if_block7) {
    				group_outros();
    				transition_out(if_block7, 1, 1, () => {
    					if_block7 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.ufos) {
    				if (if_block8) {
    					if_block8.p(changed, ctx);
    					transition_in(if_block8, 1);
    				} else {
    					if_block8 = create_if_block_3$8(ctx);
    					if_block8.c();
    					transition_in(if_block8, 1);
    					if_block8.m(div3, t13);
    				}
    			} else if (if_block8) {
    				group_outros();
    				transition_out(if_block8, 1, 1, () => {
    					if_block8 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.facilities) {
    				if (if_block9) {
    					if_block9.p(changed, ctx);
    					transition_in(if_block9, 1);
    				} else {
    					if_block9 = create_if_block_2$c(ctx);
    					if_block9.c();
    					transition_in(if_block9, 1);
    					if_block9.m(div3, t14);
    				}
    			} else if (if_block9) {
    				group_outros();
    				transition_out(if_block9, 1, 1, () => {
    					if_block9 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.manufacture) {
    				if (if_block10) {
    					if_block10.p(changed, ctx);
    					transition_in(if_block10, 1);
    				} else {
    					if_block10 = create_if_block_1$c(ctx);
    					if_block10.c();
    					transition_in(if_block10, 1);
    					if_block10.m(table1, t15);
    				}
    			} else if (if_block10) {
    				group_outros();
    				transition_out(if_block10, 1, 1, () => {
    					if_block10 = null;
    				});
    				check_outros();
    			}

    			if (ctx.article.id in rul.research) {
    				if (if_block11) {
    					if_block11.p(changed, ctx);
    					transition_in(if_block11, 1);
    				} else {
    					if_block11 = create_if_block$f(ctx);
    					if_block11.c();
    					transition_in(if_block11, 1);
    					if_block11.m(table1, null);
    				}
    			} else if (if_block11) {
    				group_outros();
    				transition_out(if_block11, 1, 1, () => {
    					if_block11 = null;
    				});
    				check_outros();
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);

    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);

    			transition_in(if_block2);
    			transition_in(if_block3);
    			transition_in(if_block4);
    			transition_in(if_block5);
    			transition_in(if_block6);
    			transition_in(if_block7);
    			transition_in(if_block8);
    			transition_in(if_block9);
    			transition_in(if_block10);
    			transition_in(if_block11);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			transition_out(if_block2);
    			transition_out(if_block3);
    			transition_out(if_block4);
    			transition_out(if_block5);
    			transition_out(if_block6);
    			transition_out(if_block7);
    			transition_out(if_block8);
    			transition_out(if_block9);
    			transition_out(if_block10);
    			transition_out(if_block11);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(h1);
    				detach_dev(t2);
    			}

    			if (if_block0) if_block0.d(detaching);

    			if (detaching) {
    				detach_dev(t3);
    				detach_dev(div0);
    				detach_dev(t4);
    			}

    			if (~current_block_type_index) if_blocks[current_block_type_index].d(detaching);

    			if (detaching) {
    				detach_dev(t5);
    				detach_dev(div3);
    			}

    			if (switch_instance) destroy_component(switch_instance);
    			if (if_block2) if_block2.d();
    			if (if_block3) if_block3.d();
    			if (~current_block_type_index_1) if_blocks_1[current_block_type_index_1].d();
    			if (if_block5) if_block5.d();
    			if (if_block6) if_block6.d();
    			if (if_block7) if_block7.d();
    			if (if_block8) if_block8.d();
    			if (if_block9) if_block9.d();
    			if (if_block10) if_block10.d();
    			if (if_block11) if_block11.d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$l.name, type: "component", source: "", ctx });
    	return block;
    }

    const func$8 = (a) => a.id;

    function instance$k($$self, $$props, $$invalidate) {
    	


      let { article, query } = $$props;
      let textwithHighlights;
      let other = false;

    	const writable_props = ['article', 'query'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Article> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('article' in $$props) $$invalidate('article', article = $$props.article);
    		if ('query' in $$props) $$invalidate('query', query = $$props.query);
    	};

    	$$self.$capture_state = () => {
    		return { article, query, textwithHighlights, other };
    	};

    	$$self.$inject_state = $$props => {
    		if ('article' in $$props) $$invalidate('article', article = $$props.article);
    		if ('query' in $$props) $$invalidate('query', query = $$props.query);
    		if ('textwithHighlights' in $$props) $$invalidate('textwithHighlights', textwithHighlights = $$props.textwithHighlights);
    		if ('other' in $$props) $$invalidate('other', other = $$props.other);
    	};

    	$$self.$$.update = ($$dirty = { article: 1, query: 1, textwithHighlights: 1 }) => {
    		if ($$dirty.article || $$dirty.query || $$dirty.textwithHighlights) { {
            $$invalidate('textwithHighlights', textwithHighlights = article.text || "");
        
            $$invalidate('other', other = article.type_id == "OTHER" ? {BaseServices}[article.id] : false);
        
            if (query) {
              for (let word of query.split()) {
                let regEx = new RegExp(word, "ig");
                $$invalidate('textwithHighlights', textwithHighlights = textwithHighlights.replace(
                  regEx,
                  "<span class='queried'>$&</span>"
                ));
              }
            }
          } }
    	};

    	return {
    		article,
    		query,
    		textwithHighlights,
    		other
    	};
    }

    class Article$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$l, safe_not_equal, ["article", "query"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Article", options, id: create_fragment$l.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.article === undefined && !('article' in props)) {
    			console.warn("<Article> was created without expected prop 'article'");
    		}
    		if (ctx.query === undefined && !('query' in props)) {
    			console.warn("<Article> was created without expected prop 'query'");
    		}
    	}

    	get article() {
    		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set article(value) {
    		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get query() {
    		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set query(value) {
    		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\App.svelte generated by Svelte v3.12.1 */
    const { console: console_1$b, document: document_1 } = globals;

    const file$i = "src\\App.svelte";

    function get_each_context_1$7(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.option = list[i];
    	return child_ctx;
    }

    function get_each_context$g(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.section = list[i];
    	return child_ctx;
    }

    function get_each_context_2$7(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.section = list[i];
    	return child_ctx;
    }

    function get_each_context_3$4(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.section = list[i];
    	return child_ctx;
    }

    function get_each_context_4$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.section = list[i];
    	return child_ctx;
    }

    function get_each_context_5$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.section = list[i];
    	return child_ctx;
    }

    // (143:2) {#if !article}
    function create_if_block_9$3(ctx) {
    	const block = {
    		c: function create() {
    			document_1.title = "XPedia";
    		},

    		m: noop,
    		d: noop
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_9$3.name, type: "if", source: "(143:2) {#if !article}", ctx });
    	return block;
    }

    // (1:0) <script>    import { tick, afterUpdate }
    function create_catch_block(ctx) {
    	const block = {
    		c: noop,
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_catch_block.name, type: "catch", source: "(1:0) <script>    import { tick, afterUpdate }", ctx });
    	return block;
    }

    // (150:0) {:then}
    function create_then_block(ctx) {
    	var nav0, div6, div4, a0, img, t0, t1_value = rul.modName + "", t1, t2, t3, div3, div2, div0, t4, div1, t5, div5, a1, t6_value = ctx.currentSection ? ctx.currentSection.title : '' + "", t6, a1_href_value, t7, show_if = ctx.article && !['TYPE', 'PEDIA'].includes(ctx.article.type_id), t8, div12, div9, div8, button0, t9_value = rul.str("Language") + "", t9, t10, div7, a2, t12, a3, t14, a4, t16, div11, div10, p0, input0, t17, nav1, div16, button1, t18_value = rul.modName + "", t18, t19, div15, div13, a5, t20_value = rul.str("HOME") + "", t20, t21, t22, hr, t23, div14, t24, div21, div18, button2, t25_value = rul.str("Lang") + "", t25, t26, div17, a6, t28, a7, t30, a8, t32, div20, div19, p1, input1, t33, div26, div23, button3, t34_value = rul.str("Language") + "", t34, t35, div22, a9, t37, a10, t39, a11, t41, div25, div24, p2, input2, t42, div31, div27, t43, div28, t44, div29, button4, t45, button4_style_value, t46, div30, current_block_type_index, if_block1, current, dispose;

    	let each_value_5 = rul.sectionsOrder;

    	let each_blocks_4 = [];

    	for (let i = 0; i < each_value_5.length; i += 1) {
    		each_blocks_4[i] = create_each_block_5$2(get_each_context_5$2(ctx, each_value_5, i));
    	}

    	let each_value_4 = rul.typeSectionsOrder;

    	let each_blocks_3 = [];

    	for (let i = 0; i < each_value_4.length; i += 1) {
    		each_blocks_3[i] = create_each_block_4$2(get_each_context_4$2(ctx, each_value_4, i));
    	}

    	var if_block0 = (show_if) && create_if_block_8$3(ctx);

    	let each_value_3 = rul.sectionsOrder;

    	let each_blocks_2 = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks_2[i] = create_each_block_3$4(get_each_context_3$4(ctx, each_value_3, i));
    	}

    	let each_value_2 = rul.typeSectionsOrder;

    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks_1[i] = create_each_block_2$7(get_each_context_2$7(ctx, each_value_2, i));
    	}

    	let each_value = ctx.article && ctx.article.section && ctx.article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder;

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$g(get_each_context$g(ctx, each_value, i));
    	}

    	var if_block_creators = [
    		create_if_block$g,
    		create_if_block_1$d,
    		create_if_block_5$4
    	];

    	var if_blocks = [];

    	function select_block_type_1(changed, ctx) {
    		if (ctx.article) return 0;
    		if (ctx.query) return 1;
    		if (!ctx.query) return 2;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type_1(null, ctx))) {
    		if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			nav0 = element("nav");
    			div6 = element("div");
    			div4 = element("div");
    			a0 = element("a");
    			img = element("img");
    			t0 = space();
    			t1 = text(t1_value);
    			t2 = text(" XPedia");
    			t3 = space();
    			div3 = element("div");
    			div2 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks_4.length; i += 1) {
    				each_blocks_4[i].c();
    			}

    			t4 = space();
    			div1 = element("div");

    			for (let i = 0; i < each_blocks_3.length; i += 1) {
    				each_blocks_3[i].c();
    			}

    			t5 = space();
    			div5 = element("div");
    			a1 = element("a");
    			t6 = text(t6_value);
    			t7 = space();
    			if (if_block0) if_block0.c();
    			t8 = space();
    			div12 = element("div");
    			div9 = element("div");
    			div8 = element("div");
    			button0 = element("button");
    			t9 = text(t9_value);
    			t10 = space();
    			div7 = element("div");
    			a2 = element("a");
    			a2.textContent = "English";
    			t12 = space();
    			a3 = element("a");
    			a3.textContent = "Русский";
    			t14 = space();
    			a4 = element("a");
    			a4.textContent = "Polski";
    			t16 = space();
    			div11 = element("div");
    			div10 = element("div");
    			p0 = element("p");
    			input0 = element("input");
    			t17 = space();
    			nav1 = element("nav");
    			div16 = element("div");
    			button1 = element("button");
    			t18 = text(t18_value);
    			t19 = space();
    			div15 = element("div");
    			div13 = element("div");
    			a5 = element("a");
    			t20 = text(t20_value);
    			t21 = space();

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].c();
    			}

    			t22 = space();
    			hr = element("hr");
    			t23 = space();
    			div14 = element("div");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t24 = space();
    			div21 = element("div");
    			div18 = element("div");
    			button2 = element("button");
    			t25 = text(t25_value);
    			t26 = space();
    			div17 = element("div");
    			a6 = element("a");
    			a6.textContent = "Eng";
    			t28 = space();
    			a7 = element("a");
    			a7.textContent = "Рус";
    			t30 = space();
    			a8 = element("a");
    			a8.textContent = "Pol";
    			t32 = space();
    			div20 = element("div");
    			div19 = element("div");
    			p1 = element("p");
    			input1 = element("input");
    			t33 = space();
    			div26 = element("div");
    			div23 = element("div");
    			button3 = element("button");
    			t34 = text(t34_value);
    			t35 = space();
    			div22 = element("div");
    			a9 = element("a");
    			a9.textContent = "English";
    			t37 = space();
    			a10 = element("a");
    			a10.textContent = "Русский";
    			t39 = space();
    			a11 = element("a");
    			a11.textContent = "Polski";
    			t41 = space();
    			div25 = element("div");
    			div24 = element("div");
    			p2 = element("p");
    			input2 = element("input");
    			t42 = space();
    			div31 = element("div");
    			div27 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t43 = space();
    			div28 = element("div");
    			t44 = space();
    			div29 = element("div");
    			button4 = element("button");
    			t45 = text("A-Z");
    			t46 = space();
    			div30 = element("div");
    			if (if_block1) if_block1.c();
    			attr_dev(img, "src", "xpedia/favicon.png");
    			attr_dev(img, "alt", "favicon");
    			add_location(img, file$i, 159, 10, 3644);
    			attr_dev(a0, "href", "#MAIN");
    			attr_dev(a0, "class", "navbar-link");
    			add_location(a0, file$i, 158, 8, 3596);
    			add_location(div0, file$i, 164, 12, 3827);
    			add_location(div1, file$i, 171, 12, 4063);
    			set_style(div2, "display", "flex");
    			add_location(div2, file$i, 163, 10, 3787);
    			attr_dev(div3, "class", "navbar-dropdown");
    			add_location(div3, file$i, 162, 8, 3746);
    			attr_dev(div4, "class", "navbar-item has-dropdown is-hoverable ");
    			add_location(div4, file$i, 157, 6, 3534);
    			set_style(a1, "color", "white");
    			attr_dev(a1, "href", a1_href_value = '#' + (ctx.currentSection ? ctx.currentSection.id : 'MAIN'));
    			add_location(a1, file$i, 183, 8, 4382);
    			attr_dev(div5, "class", "navbar-item");
    			add_location(div5, file$i, 182, 6, 4347);
    			attr_dev(div6, "class", "navbar-brand ");
    			add_location(div6, file$i, 156, 4, 3499);
    			attr_dev(button0, "class", "dropbtn navbar-link");
    			add_location(button0, file$i, 205, 10, 5023);
    			attr_dev(a2, "href", "index.html");
    			add_location(a2, file$i, 207, 12, 5145);
    			attr_dev(a3, "href", "xpedia_ru.html");
    			add_location(a3, file$i, 208, 12, 5191);
    			attr_dev(a4, "href", "xpedia_pl.html");
    			add_location(a4, file$i, 209, 12, 5241);
    			attr_dev(div7, "class", "dropdown-content");
    			add_location(div7, file$i, 206, 10, 5101);
    			attr_dev(div8, "class", "dropdown");
    			add_location(div8, file$i, 204, 8, 4989);
    			attr_dev(div9, "class", "navbar-item is-paddingless");
    			add_location(div9, file$i, 203, 6, 4938);
    			attr_dev(input0, "class", "input");
    			attr_dev(input0, "type", "text");
    			attr_dev(input0, "placeholder", rul.str("Search..."));
    			add_location(input0, file$i, 216, 12, 5442);
    			attr_dev(p0, "class", "control");
    			add_location(p0, file$i, 215, 10, 5409);
    			attr_dev(div10, "class", "field has-addons");
    			add_location(div10, file$i, 214, 8, 5367);
    			attr_dev(div11, "class", "navbar-item");
    			add_location(div11, file$i, 213, 6, 5332);
    			attr_dev(div12, "class", "navbar-end");
    			add_location(div12, file$i, 202, 4, 4906);
    			attr_dev(nav0, "class", "navbar is-fixed-top is-hidden-touch");
    			attr_dev(nav0, "role", "navigation");
    			attr_dev(nav0, "aria-label", "main navigation");
    			add_location(nav0, file$i, 151, 2, 3379);
    			attr_dev(button1, "class", "dropbtn navbar-link");
    			add_location(button1, file$i, 235, 6, 5960);
    			attr_dev(a5, "href", "#MAIN");
    			add_location(a5, file$i, 240, 10, 6144);
    			add_location(div13, file$i, 239, 8, 6127);
    			attr_dev(hr, "class", "dropdown-divider");
    			add_location(hr, file$i, 247, 8, 6364);
    			add_location(div14, file$i, 248, 8, 6403);
    			attr_dev(div15, "class", "dropdown-content");
    			set_style(div15, "height", "300px");
    			set_style(div15, "overflow-y", "scroll");
    			add_location(div15, file$i, 238, 6, 6044);
    			attr_dev(div16, "class", "dropdown is-inline-block");
    			add_location(div16, file$i, 234, 4, 5914);
    			attr_dev(button2, "class", "dropbtn navbar-link");
    			add_location(button2, file$i, 260, 8, 6759);
    			attr_dev(a6, "href", "index.html");
    			add_location(a6, file$i, 264, 10, 6895);
    			attr_dev(a7, "href", "xpedia_ru.html");
    			add_location(a7, file$i, 265, 10, 6935);
    			attr_dev(a8, "href", "xpedia_pl.html");
    			add_location(a8, file$i, 266, 10, 6979);
    			attr_dev(div17, "class", "dropdown-content");
    			add_location(div17, file$i, 263, 8, 6853);
    			attr_dev(div18, "class", "dropdown is-inline-block");
    			add_location(div18, file$i, 259, 6, 6711);
    			attr_dev(input1, "class", "input");
    			attr_dev(input1, "type", "text");
    			attr_dev(input1, "placeholder", rul.str("Search..."));
    			add_location(input1, file$i, 273, 12, 7246);
    			attr_dev(p1, "class", "control");
    			add_location(p1, file$i, 272, 10, 7213);
    			attr_dev(div19, "class", "field has-addons");
    			add_location(div19, file$i, 271, 8, 7171);
    			attr_dev(div20, "class", "navbar-item  is-inline-block");
    			set_style(div20, "width", "100px");
    			set_style(div20, "padding-left", "0px");
    			set_style(div20, "padding-right", "8px");
    			add_location(div20, file$i, 269, 6, 7049);
    			attr_dev(div21, "class", "is-pulled-right is-hidden-tablet is-inline-block");
    			add_location(div21, file$i, 258, 4, 6641);
    			attr_dev(button3, "class", "dropbtn navbar-link");
    			add_location(button3, file$i, 286, 8, 7638);
    			attr_dev(a9, "href", "index.html");
    			add_location(a9, file$i, 290, 10, 7778);
    			attr_dev(a10, "href", "xpedia_ru.html");
    			add_location(a10, file$i, 291, 10, 7822);
    			attr_dev(a11, "href", "xpedia_pl.html");
    			add_location(a11, file$i, 292, 10, 7870);
    			attr_dev(div22, "class", "dropdown-content");
    			add_location(div22, file$i, 289, 8, 7736);
    			attr_dev(div23, "class", "dropdown is-inline-block");
    			add_location(div23, file$i, 285, 6, 7590);
    			attr_dev(input2, "class", "input");
    			attr_dev(input2, "type", "text");
    			attr_dev(input2, "placeholder", rul.str("Search..."));
    			add_location(input2, file$i, 298, 12, 8070);
    			attr_dev(p2, "class", "control");
    			add_location(p2, file$i, 297, 10, 8037);
    			attr_dev(div24, "class", "field has-addons");
    			add_location(div24, file$i, 296, 8, 7995);
    			attr_dev(div25, "class", "navbar-item  is-inline-block");
    			add_location(div25, file$i, 295, 6, 7943);
    			attr_dev(div26, "class", "is-pulled-right is-hidden-mobile is-inline-block");
    			add_location(div26, file$i, 284, 4, 7520);
    			attr_dev(nav1, "class", "navbar is-fixed-top is-hidden-desktop");
    			attr_dev(nav1, "role", "navigation");
    			attr_dev(nav1, "aria-label", "main navigation");
    			set_style(nav1, "border-left-width", "0px");
    			set_style(nav1, "border-right-width", "0px");
    			add_location(nav1, file$i, 229, 2, 5729);
    			attr_dev(div27, "class", "column is-2 is-sidebar-menu is-hidden-touch sidebar svelte-uwb6wb");
    			add_location(div27, file$i, 312, 4, 8394);
    			attr_dev(div28, "class", "column is-2 is-hidden-touch");
    			add_location(div28, file$i, 341, 4, 9462);
    			attr_dev(button4, "class", "is-hidden-touch");
    			attr_dev(button4, "style", button4_style_value = ctx.sortArticles?"":"text-decoration:line-through");
    			add_location(button4, file$i, 343, 6, 9549);
    			attr_dev(div29, "class", "side-sort-button");
    			add_location(div29, file$i, 342, 4, 9511);
    			attr_dev(div30, "class", "column is-main-content main");
    			set_style(div30, "padding-top", "0px");
    			add_location(div30, file$i, 346, 4, 9713);
    			attr_dev(div31, "class", "columns is-fullheight is-marginless");
    			add_location(div31, file$i, 310, 2, 8333);

    			dispose = [
    				listen_dev(input0, "input", ctx.input0_input_handler),
    				listen_dev(input0, "keyup", ctx.searchKeyUp),
    				listen_dev(input1, "input", ctx.input1_input_handler),
    				listen_dev(input1, "keyup", ctx.searchKeyUp),
    				listen_dev(input2, "input", ctx.input2_input_handler),
    				listen_dev(input2, "keyup", ctx.searchKeyUp),
    				listen_dev(button4, "click", ctx.click_handler_2)
    			];
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, nav0, anchor);
    			append_dev(nav0, div6);
    			append_dev(div6, div4);
    			append_dev(div4, a0);
    			append_dev(a0, img);
    			append_dev(a0, t0);
    			append_dev(a0, t1);
    			append_dev(a0, t2);
    			append_dev(div4, t3);
    			append_dev(div4, div3);
    			append_dev(div3, div2);
    			append_dev(div2, div0);

    			for (let i = 0; i < each_blocks_4.length; i += 1) {
    				each_blocks_4[i].m(div0, null);
    			}

    			append_dev(div2, t4);
    			append_dev(div2, div1);

    			for (let i = 0; i < each_blocks_3.length; i += 1) {
    				each_blocks_3[i].m(div1, null);
    			}

    			append_dev(div6, t5);
    			append_dev(div6, div5);
    			append_dev(div5, a1);
    			append_dev(a1, t6);
    			append_dev(div6, t7);
    			if (if_block0) if_block0.m(div6, null);
    			append_dev(nav0, t8);
    			append_dev(nav0, div12);
    			append_dev(div12, div9);
    			append_dev(div9, div8);
    			append_dev(div8, button0);
    			append_dev(button0, t9);
    			append_dev(div8, t10);
    			append_dev(div8, div7);
    			append_dev(div7, a2);
    			append_dev(div7, t12);
    			append_dev(div7, a3);
    			append_dev(div7, t14);
    			append_dev(div7, a4);
    			append_dev(div12, t16);
    			append_dev(div12, div11);
    			append_dev(div11, div10);
    			append_dev(div10, p0);
    			append_dev(p0, input0);

    			set_input_value(input0, ctx.query);

    			insert_dev(target, t17, anchor);
    			insert_dev(target, nav1, anchor);
    			append_dev(nav1, div16);
    			append_dev(div16, button1);
    			append_dev(button1, t18);
    			append_dev(div16, t19);
    			append_dev(div16, div15);
    			append_dev(div15, div13);
    			append_dev(div13, a5);
    			append_dev(a5, t20);
    			append_dev(div13, t21);

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].m(div13, null);
    			}

    			append_dev(div15, t22);
    			append_dev(div15, hr);
    			append_dev(div15, t23);
    			append_dev(div15, div14);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div14, null);
    			}

    			append_dev(nav1, t24);
    			append_dev(nav1, div21);
    			append_dev(div21, div18);
    			append_dev(div18, button2);
    			append_dev(button2, t25);
    			append_dev(div18, t26);
    			append_dev(div18, div17);
    			append_dev(div17, a6);
    			append_dev(div17, t28);
    			append_dev(div17, a7);
    			append_dev(div17, t30);
    			append_dev(div17, a8);
    			append_dev(div21, t32);
    			append_dev(div21, div20);
    			append_dev(div20, div19);
    			append_dev(div19, p1);
    			append_dev(p1, input1);

    			set_input_value(input1, ctx.query);

    			append_dev(nav1, t33);
    			append_dev(nav1, div26);
    			append_dev(div26, div23);
    			append_dev(div23, button3);
    			append_dev(button3, t34);
    			append_dev(div23, t35);
    			append_dev(div23, div22);
    			append_dev(div22, a9);
    			append_dev(div22, t37);
    			append_dev(div22, a10);
    			append_dev(div22, t39);
    			append_dev(div22, a11);
    			append_dev(div26, t41);
    			append_dev(div26, div25);
    			append_dev(div25, div24);
    			append_dev(div24, p2);
    			append_dev(p2, input2);

    			set_input_value(input2, ctx.query);

    			insert_dev(target, t42, anchor);
    			insert_dev(target, div31, anchor);
    			append_dev(div31, div27);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div27, null);
    			}

    			append_dev(div31, t43);
    			append_dev(div31, div28);
    			append_dev(div31, t44);
    			append_dev(div31, div29);
    			append_dev(div29, button4);
    			append_dev(button4, t45);
    			append_dev(div31, t46);
    			append_dev(div31, div30);
    			if (~current_block_type_index) if_blocks[current_block_type_index].m(div30, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (changed.rul) {
    				each_value_5 = rul.sectionsOrder;

    				let i;
    				for (i = 0; i < each_value_5.length; i += 1) {
    					const child_ctx = get_each_context_5$2(ctx, each_value_5, i);

    					if (each_blocks_4[i]) {
    						each_blocks_4[i].p(changed, child_ctx);
    					} else {
    						each_blocks_4[i] = create_each_block_5$2(child_ctx);
    						each_blocks_4[i].c();
    						each_blocks_4[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks_4.length; i += 1) {
    					each_blocks_4[i].d(1);
    				}
    				each_blocks_4.length = each_value_5.length;
    			}

    			if (changed.rul) {
    				each_value_4 = rul.typeSectionsOrder;

    				let i;
    				for (i = 0; i < each_value_4.length; i += 1) {
    					const child_ctx = get_each_context_4$2(ctx, each_value_4, i);

    					if (each_blocks_3[i]) {
    						each_blocks_3[i].p(changed, child_ctx);
    					} else {
    						each_blocks_3[i] = create_each_block_4$2(child_ctx);
    						each_blocks_3[i].c();
    						each_blocks_3[i].m(div1, null);
    					}
    				}

    				for (; i < each_blocks_3.length; i += 1) {
    					each_blocks_3[i].d(1);
    				}
    				each_blocks_3.length = each_value_4.length;
    			}

    			if ((!current || changed.currentSection) && t6_value !== (t6_value = ctx.currentSection ? ctx.currentSection.title : '' + "")) {
    				set_data_dev(t6, t6_value);
    			}

    			if ((!current || changed.currentSection) && a1_href_value !== (a1_href_value = '#' + (ctx.currentSection ? ctx.currentSection.id : 'MAIN'))) {
    				attr_dev(a1, "href", a1_href_value);
    			}

    			if (changed.article) show_if = ctx.article && !['TYPE', 'PEDIA'].includes(ctx.article.type_id);

    			if (show_if) {
    				if (if_block0) {
    					if_block0.p(changed, ctx);
    				} else {
    					if_block0 = create_if_block_8$3(ctx);
    					if_block0.c();
    					if_block0.m(div6, null);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (changed.query && (input0.value !== ctx.query)) set_input_value(input0, ctx.query);

    			if (changed.rul) {
    				each_value_3 = rul.sectionsOrder;

    				let i;
    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$4(ctx, each_value_3, i);

    					if (each_blocks_2[i]) {
    						each_blocks_2[i].p(changed, child_ctx);
    					} else {
    						each_blocks_2[i] = create_each_block_3$4(child_ctx);
    						each_blocks_2[i].c();
    						each_blocks_2[i].m(div13, null);
    					}
    				}

    				for (; i < each_blocks_2.length; i += 1) {
    					each_blocks_2[i].d(1);
    				}
    				each_blocks_2.length = each_value_3.length;
    			}

    			if (changed.rul) {
    				each_value_2 = rul.typeSectionsOrder;

    				let i;
    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$7(ctx, each_value_2, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(changed, child_ctx);
    					} else {
    						each_blocks_1[i] = create_each_block_2$7(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(div14, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}
    				each_blocks_1.length = each_value_2.length;
    			}

    			if (changed.query && (input1.value !== ctx.query)) set_input_value(input1, ctx.query);
    			if (changed.query && (input2.value !== ctx.query)) set_input_value(input2, ctx.query);

    			if (changed.currentSection || changed.article || changed.rul || changed.sortedArticles || changed.activeOption) {
    				each_value = ctx.article && ctx.article.section && ctx.article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder;

    				let i;
    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$g(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block$g(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div27, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value.length;
    			}

    			if ((!current || changed.sortArticles) && button4_style_value !== (button4_style_value = ctx.sortArticles?"":"text-decoration:line-through")) {
    				attr_dev(button4, "style", button4_style_value);
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				if (if_block1) {
    					group_outros();
    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});
    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block1 = if_blocks[current_block_type_index];
    					if (!if_block1) {
    						if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block1.c();
    					}
    					transition_in(if_block1, 1);
    					if_block1.m(div30, null);
    				} else {
    					if_block1 = null;
    				}
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block1);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block1);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(nav0);
    			}

    			destroy_each(each_blocks_4, detaching);

    			destroy_each(each_blocks_3, detaching);

    			if (if_block0) if_block0.d();

    			if (detaching) {
    				detach_dev(t17);
    				detach_dev(nav1);
    			}

    			destroy_each(each_blocks_2, detaching);

    			destroy_each(each_blocks_1, detaching);

    			if (detaching) {
    				detach_dev(t42);
    				detach_dev(div31);
    			}

    			destroy_each(each_blocks, detaching);

    			if (~current_block_type_index) if_blocks[current_block_type_index].d();
    			run_all(dispose);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_then_block.name, type: "then", source: "(150:0) {:then}", ctx });
    	return block;
    }

    // (166:14) {#each rul.sectionsOrder as section}
    function create_each_block_5$2(ctx) {
    	var a, t0_value = ctx.section.title + "", t0, t1;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(a, "class", "navbar-item");
    			attr_dev(a, "href", '#' + ctx.section.id);
    			add_location(a, file$i, 166, 16, 3902);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);
    		},

    		p: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_5$2.name, type: "each", source: "(166:14) {#each rul.sectionsOrder as section}", ctx });
    	return block;
    }

    // (173:14) {#each rul.typeSectionsOrder as section}
    function create_each_block_4$2(ctx) {
    	var a, t0_value = ctx.section.title + "", t0, t1;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(a, "class", "navbar-item");
    			attr_dev(a, "href", '#' + ctx.section.id);
    			add_location(a, file$i, 173, 16, 4142);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);
    		},

    		p: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_4$2.name, type: "each", source: "(173:14) {#each rul.typeSectionsOrder as section}", ctx });
    	return block;
    }

    // (190:6) {#if article && !['TYPE', 'PEDIA'].includes(article.type_id)}
    function create_if_block_8$3(ctx) {
    	var div, a, t_value = ctx.article.title + "", t, a_href_value, dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			a = element("a");
    			t = text(t_value);
    			set_style(a, "color", "white");
    			attr_dev(a, "href", a_href_value = '#' + ctx.article.id);
    			add_location(a, file$i, 191, 10, 4686);
    			attr_dev(div, "class", "navbar-item");
    			add_location(div, file$i, 190, 8, 4649);
    			dispose = listen_dev(a, "click", ctx.click_handler);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, a);
    			append_dev(a, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.article) && t_value !== (t_value = ctx.article.title + "")) {
    				set_data_dev(t, t_value);
    			}

    			if ((changed.article) && a_href_value !== (a_href_value = '#' + ctx.article.id)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(div);
    			}

    			dispose();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_8$3.name, type: "if", source: "(190:6) {#if article && !['TYPE', 'PEDIA'].includes(article.type_id)}", ctx });
    	return block;
    }

    // (242:10) {#each rul.sectionsOrder as section}
    function create_each_block_3$4(ctx) {
    	var a, t0_value = ctx.section.title + "", t0, t1;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(a, "href", '#' + ctx.section.id);
    			add_location(a, file$i, 242, 12, 6243);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);
    		},

    		p: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_3$4.name, type: "each", source: "(242:10) {#each rul.sectionsOrder as section}", ctx });
    	return block;
    }

    // (250:10) {#each rul.typeSectionsOrder as section}
    function create_each_block_2$7(ctx) {
    	var a, t0_value = ctx.section.title + "", t0, t1;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(a, "href", '#' + ctx.section.id);
    			add_location(a, file$i, 250, 12, 6474);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);
    		},

    		p: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_2$7.name, type: "each", source: "(250:10) {#each rul.typeSectionsOrder as section}", ctx });
    	return block;
    }

    // (317:8) {#if !currentSection || section.id == currentSection.id}
    function create_if_block_6$3(ctx) {
    	var p, t0_value = ctx.section.title + "", t0, t1, ul, t2;

    	let each_value_1 = ctx.sortedArticles(ctx.section.articles);

    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$7(get_each_context_1$7(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			p = element("p");
    			t0 = text(t0_value);
    			t1 = space();
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			attr_dev(p, "class", "menu-label");
    			add_location(p, file$i, 317, 10, 8671);
    			attr_dev(ul, "class", "menu-list");
    			add_location(ul, file$i, 318, 10, 8724);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, ul, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			append_dev(ul, t2);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.article) && t0_value !== (t0_value = ctx.section.title + "")) {
    				set_data_dev(t0, t0_value);
    			}

    			if (changed.article || changed.sortedArticles || changed.rul || changed.activeOption) {
    				each_value_1 = ctx.sortedArticles(ctx.section.articles);

    				let i;
    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$7(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block_1$7(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ul, t2);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value_1.length;
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(p);
    				detach_dev(t1);
    				detach_dev(ul);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_6$3.name, type: "if", source: "(317:8) {#if !currentSection || section.id == currentSection.id}", ctx });
    	return block;
    }

    // (329:16) {:else}
    function create_else_block_1$2(ctx) {
    	var a, t_value = ctx.option.title + "", t, a_href_value, dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = '#' + ctx.option.id);
    			add_location(a, file$i, 329, 18, 9157);
    			dispose = listen_dev(a, "click", ctx.click_handler_1);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.sortedArticles || changed.article) && t_value !== (t_value = ctx.option.title + "")) {
    				set_data_dev(t, t_value);
    			}

    			if ((changed.sortedArticles || changed.article) && a_href_value !== (a_href_value = '#' + ctx.option.id)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}

    			dispose();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block_1$2.name, type: "else", source: "(329:16) {:else}", ctx });
    	return block;
    }

    // (322:16) {#if article && article.id == option.id}
    function create_if_block_7$3(ctx) {
    	var a, t_value = ctx.option.title + "", t, a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = '#' + ctx.option.id);
    			attr_dev(a, "class", "active-article-option svelte-uwb6wb");
    			add_location(a, file$i, 322, 18, 8908);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    			ctx.a_binding(a);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.sortedArticles || changed.article) && t_value !== (t_value = ctx.option.title + "")) {
    				set_data_dev(t, t_value);
    			}

    			if ((changed.sortedArticles || changed.article) && a_href_value !== (a_href_value = '#' + ctx.option.id)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(a);
    			}

    			ctx.a_binding(null);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_7$3.name, type: "if", source: "(322:16) {#if article && article.id == option.id}", ctx });
    	return block;
    }

    // (320:12) {#each sortedArticles(section.articles) as option}
    function create_each_block_1$7(ctx) {
    	var li;

    	function select_block_type(changed, ctx) {
    		if (ctx.article && ctx.article.id == ctx.option.id) return create_if_block_7$3;
    		return create_else_block_1$2;
    	}

    	var current_block_type = select_block_type(null, ctx);
    	var if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			li = element("li");
    			if_block.c();
    			add_location(li, file$i, 320, 14, 8826);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			if_block.m(li, null);
    		},

    		p: function update(changed, ctx) {
    			if (current_block_type === (current_block_type = select_block_type(changed, ctx)) && if_block) {
    				if_block.p(changed, ctx);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);
    				if (if_block) {
    					if_block.c();
    					if_block.m(li, null);
    				}
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(li);
    			}

    			if_block.d();
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block_1$7.name, type: "each", source: "(320:12) {#each sortedArticles(section.articles) as option}", ctx });
    	return block;
    }

    // (316:6) {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}
    function create_each_block$g(ctx) {
    	var if_block_anchor;

    	var if_block = (!ctx.currentSection || ctx.section.id == ctx.currentSection.id) && create_if_block_6$3(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (!ctx.currentSection || ctx.section.id == ctx.currentSection.id) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    				} else {
    					if_block = create_if_block_6$3(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$g.name, type: "each", source: "(316:6) {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}", ctx });
    	return block;
    }

    // (365:23) 
    function create_if_block_5$4(ctx) {
    	var current;

    	var intro = new Intro({ $$inline: true });

    	const block = {
    		c: function create() {
    			intro.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(intro, target, anchor);
    			current = true;
    		},

    		p: noop,

    		i: function intro_1(local) {
    			if (current) return;
    			transition_in(intro.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(intro.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(intro, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_5$4.name, type: "if", source: "(365:23) ", ctx });
    	return block;
    }

    // (351:22) 
    function create_if_block_1$d(ctx) {
    	var t0, em, t1, t2, br, t3, current_block_type_index, if_block, if_block_anchor, current;

    	var if_block_creators = [
    		create_if_block_2$d,
    		create_if_block_3$9,
    		create_if_block_4$5,
    		create_else_block$a
    	];

    	var if_blocks = [];

    	function select_block_type_2(changed, ctx) {
    		if (ctx.found && ctx.found.length > 0) return 0;
    		if (ctx.query.length < 2) return 1;
    		if (ctx.searchDelayHandle) return 2;
    		return 3;
    	}

    	current_block_type_index = select_block_type_2(null, ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			t0 = text("Searching \"\r\n        ");
    			em = element("em");
    			t1 = text(ctx.query);
    			t2 = text("\r\n        \":\r\n        ");
    			br = element("br");
    			t3 = space();
    			if_block.c();
    			if_block_anchor = empty();
    			add_location(em, file$i, 352, 8, 9897);
    			add_location(br, file$i, 354, 8, 9935);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, em, anchor);
    			append_dev(em, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, br, anchor);
    			insert_dev(target, t3, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (!current || changed.query) {
    				set_data_dev(t1, ctx.query);
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(changed, ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t0);
    				detach_dev(em);
    				detach_dev(t2);
    				detach_dev(br);
    				detach_dev(t3);
    			}

    			if_blocks[current_block_type_index].d(detaching);

    			if (detaching) {
    				detach_dev(if_block_anchor);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1$d.name, type: "if", source: "(351:22) ", ctx });
    	return block;
    }

    // (349:6) {#if article}
    function create_if_block$g(ctx) {
    	var current;

    	var article_1 = new Article$1({
    		props: {
    		article: ctx.article,
    		query: ctx.query
    	},
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			article_1.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(article_1, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var article_1_changes = {};
    			if (changed.article) article_1_changes.article = ctx.article;
    			if (changed.query) article_1_changes.query = ctx.query;
    			article_1.$set(article_1_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(article_1.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(article_1.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(article_1, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$g.name, type: "if", source: "(349:6) {#if article}", ctx });
    	return block;
    }

    // (362:8) {:else}
    function create_else_block$a(ctx) {
    	var i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			i.textContent = "Nothing found";
    			add_location(i, file$i, 362, 10, 10174);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(i);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$a.name, type: "else", source: "(362:8) {:else}", ctx });
    	return block;
    }

    // (360:36) 
    function create_if_block_4$5(ctx) {
    	var t;

    	const block = {
    		c: function create() {
    			t = text("...");
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(t);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_4$5.name, type: "if", source: "(360:36) ", ctx });
    	return block;
    }

    // (358:35) 
    function create_if_block_3$9(ctx) {
    	var i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			i.textContent = "Query too short";
    			add_location(i, file$i, 358, 10, 10070);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(i);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_3$9.name, type: "if", source: "(358:35) ", ctx });
    	return block;
    }

    // (356:8) {#if found && found.length > 0}
    function create_if_block_2$d(ctx) {
    	var current;

    	var linkspage = new LinksPage({
    		props: { links: ctx.found },
    		$$inline: true
    	});

    	const block = {
    		c: function create() {
    			linkspage.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(linkspage, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var linkspage_changes = {};
    			if (changed.found) linkspage_changes.links = ctx.found;
    			linkspage.$set(linkspage_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage.$$.fragment, local);

    			current = true;
    		},

    		o: function outro(local) {
    			transition_out(linkspage.$$.fragment, local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			destroy_component(linkspage, detaching);
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_2$d.name, type: "if", source: "(356:8) {#if found && found.length > 0}", ctx });
    	return block;
    }

    // (148:20)     <img class="centered" alt="Loading rules..." src="xpedia/spinner.svg" />  {:then}
    function create_pending_block(ctx) {
    	var img;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "centered svelte-uwb6wb");
    			attr_dev(img, "alt", "Loading rules...");
    			attr_dev(img, "src", "xpedia/spinner.svg");
    			add_location(img, file$i, 148, 2, 3270);
    		},

    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach_dev(img);
    			}
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_pending_block.name, type: "pending", source: "(148:20)     <img class=\"centered\" alt=\"Loading rules...\" src=\"xpedia/spinner.svg\" />  {:then}", ctx });
    	return block;
    }

    function create_fragment$m(ctx) {
    	var if_block_anchor, t, await_block_anchor, promise, current;

    	var if_block = (!ctx.article) && create_if_block_9$3(ctx);

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		value: 'null',
    		error: 'null',
    		blocks: [,,,]
    	};

    	handle_promise(promise = ctx.rulesLoaded, info);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			t = space();
    			await_block_anchor = empty();

    			info.block.c();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(document_1.head, null);
    			append_dev(document_1.head, if_block_anchor);
    			insert_dev(target, t, anchor);
    			insert_dev(target, await_block_anchor, anchor);

    			info.block.m(target, info.anchor = anchor);
    			info.mount = () => await_block_anchor.parentNode;
    			info.anchor = await_block_anchor;

    			current = true;
    		},

    		p: function update(changed, new_ctx) {
    			ctx = new_ctx;
    			if (!ctx.article) {
    				if (!if_block) {
    					if_block = create_if_block_9$3(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			info.block.p(changed, assign(assign({}, ctx), info.resolved));
    		},

    		i: function intro(local) {
    			if (current) return;
    			transition_in(info.block);
    			current = true;
    		},

    		o: function outro(local) {
    			for (let i = 0; i < 3; i += 1) {
    				const block = info.blocks[i];
    				transition_out(block);
    			}

    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			detach_dev(if_block_anchor);

    			if (detaching) {
    				detach_dev(t);
    				detach_dev(await_block_anchor);
    			}

    			info.block.d(detaching);
    			info.token = null;
    			info = null;
    		}
    	};
    	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$m.name, type: "component", source: "", ctx });
    	return block;
    }

    function goTo(id) {
      window.location.hash = "#" + id;
    }

    function instance$l($$self, $$props, $$invalidate) {
    	

      let { source } = $$props;

      let article = null;
      let found = null;
      let query = "";
      let currentSection = null;
      let activeOption;
      let ignoreNextAutoscroll = false;
      let id = "";
      let searchDelayHandle = null;

      async function loadRules() {
        await rul.load(source);
      }

      let rulesLoaded = loadRules();

      function checkHash() {
        let hash = decodeURI(document.location.hash);
        if (hash) {
          let dd = hash.indexOf("::");
          if (dd != -1) {
            id = hash.substr(1, dd - 1);
            $$invalidate('query', query = hash.substr(dd + 2));
          } else {
            id = hash.substr(1);
          }

          if (id == "SEARCH") {
            if (query.length >= 2)
              $$invalidate('found', found = rul.search.findArticles(query).map(a => a.id));
            else $$invalidate('found', found = 0);
            $$invalidate('article', article = null);
          } else {
            $$invalidate('found', found = null);
            if (!article || article.id != id) $$invalidate('article', article = rul.article(id));
          }

          console.log(id);
          console.log(article);
        }

        if (article) {
          if (article.section && currentSection != article.section)
            $$invalidate('currentSection', currentSection = article.section);
        } else {
          $$invalidate('currentSection', currentSection = null);
        }
      }

      function nextArticle(delta) {
        let nextArticle = rul.findNextArticle(article, delta);
        if (nextArticle) {
          goTo(nextArticle.id);
        }
      }

      document.addEventListener("keydown", event => {
        const keyName = event.key;
        if (keyName == "ArrowRight") nextArticle(1);
        if (keyName == "ArrowLeft") nextArticle(-1);
      });

      function searchKeyUp(e) {
        if (searchDelayHandle) clearTimeout(searchDelayHandle);

        $$invalidate('searchDelayHandle', searchDelayHandle = setTimeout(
          () => {
            goTo("SEARCH::" + e.target.value);
            $$invalidate('searchDelayHandle', searchDelayHandle = null);
          },
          e.key == "Enter" ? 10 : 1000
        ));
      }

      window.onhashchange = checkHash;

      rulesLoaded.then(checkHash);

      afterUpdate(() => {
        if (activeOption) {
          tick().then(() =>
            activeOption.scrollIntoView({ behavior: "auto", block: "center" })
          );
        }
      });

      let sortArticles = false;

    	const writable_props = ['source'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1$b.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	const click_handler = (e) => window.scrollTo(0, 0);

    	function input0_input_handler() {
    		query = this.value;
    		$$invalidate('query', query);
    	}

    	function input1_input_handler() {
    		query = this.value;
    		$$invalidate('query', query);
    	}

    	function input2_input_handler() {
    		query = this.value;
    		$$invalidate('query', query);
    	}

    	function a_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			$$invalidate('activeOption', activeOption = $$value);
    		});
    	}

    	const click_handler_1 = () => ($$invalidate('ignoreNextAutoscroll', ignoreNextAutoscroll = true));

    	const click_handler_2 = (e) => $$invalidate('sortArticles', sortArticles = !sortArticles);

    	$$self.$set = $$props => {
    		if ('source' in $$props) $$invalidate('source', source = $$props.source);
    	};

    	$$self.$capture_state = () => {
    		return { source, article, found, query, currentSection, activeOption, ignoreNextAutoscroll, id, searchDelayHandle, rulesLoaded, sortArticles, sortedArticles };
    	};

    	$$self.$inject_state = $$props => {
    		if ('source' in $$props) $$invalidate('source', source = $$props.source);
    		if ('article' in $$props) $$invalidate('article', article = $$props.article);
    		if ('found' in $$props) $$invalidate('found', found = $$props.found);
    		if ('query' in $$props) $$invalidate('query', query = $$props.query);
    		if ('currentSection' in $$props) $$invalidate('currentSection', currentSection = $$props.currentSection);
    		if ('activeOption' in $$props) $$invalidate('activeOption', activeOption = $$props.activeOption);
    		if ('ignoreNextAutoscroll' in $$props) $$invalidate('ignoreNextAutoscroll', ignoreNextAutoscroll = $$props.ignoreNextAutoscroll);
    		if ('id' in $$props) id = $$props.id;
    		if ('searchDelayHandle' in $$props) $$invalidate('searchDelayHandle', searchDelayHandle = $$props.searchDelayHandle);
    		if ('rulesLoaded' in $$props) $$invalidate('rulesLoaded', rulesLoaded = $$props.rulesLoaded);
    		if ('sortArticles' in $$props) $$invalidate('sortArticles', sortArticles = $$props.sortArticles);
    		if ('sortedArticles' in $$props) $$invalidate('sortedArticles', sortedArticles = $$props.sortedArticles);
    	};

    	let sortedArticles;

    	$$self.$$.update = ($$dirty = { article: 1, sortArticles: 1 }) => {
    		if ($$dirty.article) { {
            console.info(article || "no article");
          } }
    		if ($$dirty.sortArticles) { $$invalidate('sortedArticles', sortedArticles = (articles) => sortArticles?articles.slice().sort((a,b) => a.title > b.title?1:-1):articles); }
    	};

    	return {
    		source,
    		article,
    		found,
    		query,
    		currentSection,
    		activeOption,
    		ignoreNextAutoscroll,
    		searchDelayHandle,
    		rulesLoaded,
    		searchKeyUp,
    		sortArticles,
    		window,
    		sortedArticles,
    		click_handler,
    		input0_input_handler,
    		input1_input_handler,
    		input2_input_handler,
    		a_binding,
    		click_handler_1,
    		click_handler_2
    	};
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$l, create_fragment$m, safe_not_equal, ["source"]);
    		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "App", options, id: create_fragment$m.name });

    		const { ctx } = this.$$;
    		const props = options.props || {};
    		if (ctx.source === undefined && !('source' in props)) {
    			console_1$b.warn("<App> was created without expected prop 'source'");
    		}
    	}

    	get source() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set source(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    window.onload = function(){

      let rulesText = document.body.textContent;
      document.body.innerHTML = "";
      document.body.style.display = "block";

      new Ruleset();
      app = new App({
        props: {source: rulesText},
        target: document.body
      });
        
    };

    return app;

}(JSZip));
