parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SbO4":[function(require,module,exports) {
"use strict";function e(e,t,r,n,i,u,a){try{var o=e[u](a),c=o.value}catch(s){return void r(s)}o.done?t(c):Promise.resolve(c).then(n,i)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(i,u){var a=t.apply(r,n);function o(t){e(a,i,u,o,c,"next",t)}function c(t){e(a,i,u,o,c,"throw",t)}o(void 0)})}}function r(){return n.apply(this,arguments)}function n(){return(n=t(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("camera")).width=300,t.height=300,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:300,height:300}});case 5:return r=e.sent,t.srcObject=r,e.abrupt("return",new Promise(function(e){t.onloadedmetadata=function(){e(t)}}));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function i(){return u.apply(this,arguments)}function u(){return(u=t(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return(t=e.sent).play(),e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadVideo=i;
},{}],"b7LN":[function(require,module,exports) {
"use strict";function e(e){var t=new THREE.Scene,r=new THREE.OrthographicCamera(0,1280,0,967,.1,1e3);r.position.z=500;var n=new THREE.WebGLRenderer({antialias:!0,alpha:!0});n.setPixelRatio(window.devicePixelRatio),n.setSize(1280,967),document.getElementById(e).appendChild(n.domElement);var i=new THREE.HemisphereLight("#EFF6EE","#EFF6EE",0);return i.position.set(0,0,0),t.add(i),{renderer:n,scene:t,camera:r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupRenderer=e;
},{}],"R3JY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Person=o;var i=700,t=400;function o(o){this.position=new THREE.Vector3;var s=new THREE.SphereGeometry(10,7,7),e=new THREE.MeshToonMaterial({color:"blue",opacity:.5,emissive:15726318,emissiveIntensity:1}),n=new THREE.Mesh(s,e);o.add(n),this.initialise=function(){this.position.x=i,this.position.y=t,this.position.z=0},this.update=function(o,s,e){this.position.x=i+o,this.position.y=t+s,this.position.z=e},this.display=function(){n.position.x=this.position.x,n.position.y=this.position.y,n.position.z=this.position.z}}
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./camera"),r=require("./renderer"),n=require("./person");function t(e,r,n,t,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?r(u):Promise.resolve(u).then(t,i)}function i(e){return function(){var r=this,n=arguments;return new Promise(function(i,o){var a=e.apply(r,n);function s(e){t(a,i,o,s,u,"next",e)}function u(e){t(a,i,o,s,u,"throw",e)}s(void 0)})}}(0,e.loadVideo)();var o=(0,r.setupRenderer)("threeContainer"),a=o.renderer,s=o.scene,u=o.camera,c=new THREE.Group;s.add(c);for(var p=[],d=0;d<17;d++){var f=new n.Person(c);f.initialise(),f.display(),p.push(f)}function v(){return l.apply(this,arguments)}function l(){return(l=i(regeneratorRuntime.mark(function r(){var n,t,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,posenet.load();case 2:return n=r.sent,r.next=5,(0,e.loadVideo)();case 5:return t=r.sent,r.next=8,n.estimateSinglePose(t);case 8:(i=r.sent).score>.8&&i.keypoints.forEach(function(e,r){p[r].update(1*e.position.x,1*e.position.y,0),p[r].display()}),a.render(s,u),requestAnimationFrame(v);case 12:case"end":return r.stop()}},r)}))).apply(this,arguments)}
},{"./camera":"SbO4","./renderer":"b7LN","./person":"R3JY"}]},{},["Focm"], null)
//# sourceMappingURL=/client.55f776ab.js.map