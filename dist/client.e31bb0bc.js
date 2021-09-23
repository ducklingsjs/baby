// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"camera.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadVideo = loadVideo;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _setupCamera() {
  return _setupCamera2.apply(this, arguments);
}

function _setupCamera2() {
  _setupCamera2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var video, stream;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            video = document.getElementById("camera");
            video.width = 300;
            video.height = 300;
            _context.next = 5;
            return navigator.mediaDevices.getUserMedia({
              audio: false,
              video: {
                facingMode: "user",
                width: 300,
                height: 300
              }
            });

          case 5:
            stream = _context.sent;
            video.srcObject = stream;
            return _context.abrupt("return", new Promise(function (resolve) {
              video.onloadedmetadata = function () {
                resolve(video);
              };
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setupCamera2.apply(this, arguments);
}

function loadVideo() {
  return _loadVideo.apply(this, arguments);
}

function _loadVideo() {
  _loadVideo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var video;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _setupCamera();

          case 2:
            video = _context2.sent;
            video.play();
            return _context2.abrupt("return", video);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadVideo.apply(this, arguments);
}
},{}],"renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRenderer = setupRenderer;

function setupRenderer(containerId) {
  var width = 1280;
  var height = 967;
  var scene = new THREE.Scene();
  var camera = new THREE.OrthographicCamera(0, width, 0, height, 0.1, 1000);
  camera.position.z = 500;
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  var container = document.getElementById(containerId);
  container.appendChild(renderer.domElement);
  var hemiLight = new THREE.HemisphereLight("#EFF6EE", "#EFF6EE", 1);
  hemiLight.position.set(0, 0, 0);
  scene.add(hemiLight);
  return {
    renderer: renderer,
    scene: scene,
    camera: camera
  };
}
},{}],"entity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = Entity;
var X_OFFSET = 700;
var Y_OFFSET = 400;

function Entity(group, name) {
  this.position = new THREE.Vector3();
  var geometry;
  var material;

  if (name === "nose") {
    var textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("*");
    var texture = textureLoader.load("brad_pitt2.94ce350a.png");
    texture.center.set(0.67, 0.5);
    texture.repeat.set(2, 1.2);
    texture.rotation = Math.PI;
    material = new THREE.MeshStandardMaterial({
      map: texture
    });
    geometry = new THREE.SphereGeometry(35, 30, 10);
  } else {
    material = new THREE.MeshLambertMaterial({
      color: "white"
    });
    geometry = new THREE.SphereGeometry(15, 7, 7);
  }

  var sphere = new THREE.Mesh(geometry, material);
  group.add(sphere);

  this.initialise = function () {
    this.position.x = X_OFFSET;
    this.position.y = Y_OFFSET;
    this.position.z = 0;
  };

  this.update = function (x, y, z) {
    this.position.x = X_OFFSET + x;
    this.position.y = Y_OFFSET + y + (name === "nose" ? -20 : 0);
    this.position.z = z;
  };

  this.display = function () {
    sphere.position.x = this.position.x;
    sphere.position.y = this.position.y;
    sphere.position.z = this.position.z;
  };
}
},{}],"../init_pose.json":[function(require,module,exports) {
module.exports = {
  "nose": {
    "x": 153.74737453831773,
    "y": 80.38843949017358
  },
  "leftShoulder": {
    "x": 182.57633313130776,
    "y": 122.59830222519456
  },
  "rightShoulder": {
    "x": 112.43237744045629,
    "y": 121.39704663465923
  },
  "leftElbow": {
    "x": 206.03540324051556,
    "y": 177.68850363646038
  },
  "rightElbow": {
    "x": 91.94506634070252,
    "y": 178.27901877317913
  },
  "leftWrist": {
    "x": 179.3344401199994,
    "y": 210.93295798691332
  },
  "rightWrist": {
    "x": 89.60033669082108,
    "y": 221.2291672999757
  },
  "leftHip": {
    "x": 172.31724364284412,
    "y": 235.65967723089435
  },
  "rightHip": {
    "x": 124.68208877029123,
    "y": 233.72739799291708
  },
  "leftKnee": {
    "x": 201.01856276218996,
    "y": 248.88685649471063
  },
  "rightKnee": {
    "x": 122.32447227151478,
    "y": 300.5203900170234
  },
  "leftAnkle": {
    "x": 263.3188091827274,
    "y": 287.3314349103995
  },
  "rightAnkle": {
    "x": 127.30199316596243,
    "y": 308.7169958923578
  }
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _camera = require("./camera");

var _renderer = require("./renderer");

var _entity = require("./entity");

var _init_pose = _interopRequireDefault(require("../init_pose.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _camera.loadVideo)();

var _setupRenderer = (0, _renderer.setupRenderer)("threeContainer"),
    renderer = _setupRenderer.renderer,
    scene = _setupRenderer.scene,
    camera = _setupRenderer.camera;

var bodyParts = ["nose", "leftShoulder", "rightShoulder", "leftElbow", "rightElbow", "leftWrist", "rightWrist", "leftHip", "rightHip", "leftKnee", "rightKnee", "leftAnkle", "rightAnkle"];
var group = new THREE.Group();
scene.add(group);
var trackers2 = {
  nose: {},
  leftShoulder: {},
  rightShoulder: {},
  leftElbow: {},
  rightElbow: {},
  leftWrist: {},
  rightWrist: {},
  leftHip: {},
  rightHip: {},
  leftKnee: {},
  rightKnee: {},
  leftAnkle: {},
  rightAnkle: {}
};
bodyParts.forEach(function (item) {
  var tracker = new _entity.Entity(group, item);
  tracker.initialise();
  tracker.update(_init_pose.default[item].x, _init_pose.default[item].y, 0);
  tracker.display();
  trackers2[item] = tracker;
}); // main render loop

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var net, video, poses;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return posenet.load();

          case 2:
            net = _context.sent;
            _context.next = 5;
            return (0, _camera.loadVideo)();

          case 5:
            video = _context.sent;
            _context.next = 8;
            return net.estimateSinglePose(video);

          case 8:
            poses = _context.sent;

            if (poses.score > 0.8) {
              poses.keypoints.filter(function (item) {
                return bodyParts.includes(item.part);
              }).forEach(function (d, i) {
                trackers2[d.part].update(d.position.x * 1, d.position.y * 1, 0);
                trackers2[d.part].display();
              });
            }

            renderer.render(scene, camera);
            requestAnimationFrame(main);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

function changeClass(newClass) {
  console.log(newClass);
}

main();
},{"./camera":"camera.js","./renderer":"renderer.js","./entity":"entity.js","../init_pose.json":"../init_pose.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58890" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/client.e31bb0bc.js.map