(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WCChat = {})));
}(this, (function (exports) { 'use strict';

  var toBinary = function toBinary(policy) {
    return parseInt(policy, 2);
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var _templateObject = taggedTemplateLiteral(['<style>', '</style>'], ['<style>', '</style>']),
      _templateObject2 = taggedTemplateLiteral(['\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n    ']),
      _templateObject3 = taggedTemplateLiteral(['<link href$="', '" rel="stylesheet" type="text/css" />'], ['<link href$="', '" rel="stylesheet" type="text/css" />']);

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var withStyle = function withStyle(html) {
    return function (base) {
      for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
      }

      return function (_base) {
        inherits(_class, _base);

        function _class() {
          classCallCheck(this, _class);
          return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        createClass(_class, [{
          key: '__renderStyles',
          value: function __renderStyles() {
            for (var _len2 = arguments.length, argv = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              argv[_key2] = arguments[_key2];
            }

            // eslint-disable-line class-methods-use-this
            return html(_templateObject, argv.join(' '));
          }
        }, {
          key: '_render',
          value: function _render(props) {
            return html(_templateObject2, this.__renderStyles.apply(this, styles), get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), '_render', this).call(this, props));
          }
        }]);
        return _class;
      }(base);
    };
  };

  var withStyleAfter = function withStyleAfter(html) {
    return function (base) {
      for (var _len3 = arguments.length, styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        styles[_key3 - 1] = arguments[_key3];
      }

      return function (_base2) {
        inherits(_class2, _base2);

        function _class2() {
          classCallCheck(this, _class2);
          return possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
        }

        createClass(_class2, [{
          key: '__renderStyles',
          value: function __renderStyles() {
            for (var _len4 = arguments.length, argv = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              argv[_key4] = arguments[_key4];
            }

            // eslint-disable-line class-methods-use-this
            return html(_templateObject, argv.join(' '));
          }
        }, {
          key: '_render',
          value: function _render(props) {
            return html(_templateObject2, get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), '_render', this).call(this, props), this.__renderStyles.apply(this, styles));
          }
        }]);
        return _class2;
      }(base);
    };
  };

  var withStyleLink = function withStyleLink(html) {
    return function (base) {
      for (var _len5 = arguments.length, links = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        links[_key5 - 1] = arguments[_key5];
      }

      return function (_base3) {
        inherits(_class3, _base3);

        function _class3() {
          classCallCheck(this, _class3);
          return possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
        }

        createClass(_class3, [{
          key: '__renderStyleLink',
          value: function __renderStyleLink() {
            for (var _len6 = arguments.length, argv = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              argv[_key6] = arguments[_key6];
            }

            // eslint-disable-line class-methods-use-this
            return argv.map(function (link) {
              return html(_templateObject3, link);
            });
          }
        }, {
          key: '_render',
          value: function _render(props) {
            return html(_templateObject2, this.__renderStyleLink.apply(this, links), get(_class3.prototype.__proto__ || Object.getPrototypeOf(_class3.prototype), '_render', this).call(this, props));
          }
        }]);
        return _class3;
      }(base);
    };
  };

  var withPermissions = function withPermissions() {
    return function (base) {
      var permissions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00000';
      return function (_base4) {
        inherits(_class4, _base4);

        function _class4() {
          classCallCheck(this, _class4);
          return possibleConstructorReturn(this, (_class4.__proto__ || Object.getPrototypeOf(_class4)).apply(this, arguments));
        }

        createClass(_class4, [{
          key: '_getPermissions',
          value: function _getPermissions() {
            return this.permissions || permissions;
          }
        }, {
          key: '_isAllowed',
          value: function _isAllowed(policy) {
            return toBinary(policy) & toBinary(this._getPermissions()); // eslint-disable-line no-bitwise
          }
        }], [{
          key: 'properties',
          get: function get$$1() {
            return _extends$1({}, get(_class4.__proto__ || Object.getPrototypeOf(_class4), 'properties', this), {
              permissions: String
            });
          }
        }]);
        return _class4;
      }(base);
    };
  };

  var mixins = /*#__PURE__*/Object.freeze({
    withStyle: withStyle,
    withStyleAfter: withStyleAfter,
    withStyleLink: withStyleLink,
    withPermissions: withPermissions
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  window.JSCompiler_renameProperty = function (prop) {
    return prop;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // unique global id for deduping mixins.
  var dedupeId = 0;

  /* eslint-disable valid-jsdoc */
  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */
  var dedupingMixin = function dedupingMixin(mixin) {
    var mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
    }
    // maintain a unique id for each mixin
    var mixinDedupeId = dedupeId++;
    function dedupingMixin(base) {
      var baseSet = /** @type {!MixinFunction} */base.__mixinSet;
      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }
      var map = mixinApplications;
      var extended = map.get(base);
      if (!extended) {
        extended = /** @type {!Function} */mixin(base);
        map.set(base, extended);
      }
      // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.
      var mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
      return extended;
    }

    return dedupingMixin;
  };
  /* eslint-enable valid-jsdoc */

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // Microtask implemented using Mutation Observer
  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

  function microtaskFlush() {
    var len = microtaskCallbacks.length;
    for (var i = 0; i < len; i++) {
      var cb = microtaskCallbacks[i];
      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
    }
    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }

  /**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */
  var timeOut = {
    /**
     * Returns a sub-module with the async interface providing the provided
     * delay.
     *
     * @memberof timeOut
     * @param {number=} delay Time to wait before calling callbacks in ms
     * @return {!AsyncInterface} An async timeout interface
     */
    after: function after(delay) {
      return {
        run: function run(fn) {
          return window.setTimeout(fn, delay);
        },
        cancel: function cancel(handle) {
          window.clearTimeout(handle);
        }
      };
    },

    /**
     * Enqueues a function called in the next task.
     *
     * @memberof timeOut
     * @param {!Function} fn Callback to run
     * @param {number=} delay Delay in milliseconds
     * @return {number} Handle used for canceling task
     */
    run: function run(fn, delay) {
      return window.setTimeout(fn, delay);
    },

    /**
     * Cancels a previously enqueued `timeOut` callback.
     *
     * @memberof timeOut
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.clearTimeout(handle);
    }
  };

  /**
   * Async interface for enqueuing callbacks that run at microtask timing.
   *
   * Note that microtask timing is achieved via a single `MutationObserver`,
   * and thus callbacks enqueued with this API will all run in a single
   * batch, and not interleaved with other microtasks such as promises.
   * Promises are avoided as an implementation choice for the time being
   * due to Safari bugs that cause Promises to lack microtask guarantees.
   *
   * @namespace
   * @summary Async interface for enqueuing callbacks that run at microtask
   *   timing.
   */
  var microTask = {

    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(callback) {
      microtaskNode.textContent = microtaskNodeContent++;
      microtaskCallbacks.push(callback);
      return microtaskCurrHandle++;
    },


    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      var idx = handle - microtaskLastHandle;
      if (idx >= 0) {
        if (!microtaskCallbacks[idx]) {
          throw new Error('invalid async handle: ' + handle);
        }
        microtaskCallbacks[idx] = null;
      }
    }
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @const {!AsyncInterface} */
  var microtask = microTask;

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */
  var PropertiesChanged = dedupingMixin(
  /**
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    var PropertiesChanged = function (_superClass) {
      inherits(PropertiesChanged, _superClass);
      createClass(PropertiesChanged, [{
        key: '_createPropertyAccessor',
        //eslint-disable-line no-unused-vars

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @return {void}
         * @protected
         * @override
         */
        value: function _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);
          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }
          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;
            this._definePropertyAccessor(property, readOnly);
          }
        }

        /**
         * Adds the given `property` to a map matching attribute names
         * to property names, using `attributeNameForProperty`. This map is
         * used when deserializing attribute values to properties.
         *
         * @param {string} property Name of the property
         * @override
         */

      }, {
        key: '_addPropertyToAttributeMap',
        value: function _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty('__dataAttributes')) {
            this.__dataAttributes = Object.assign({}, this.__dataAttributes);
          }
          if (!this.__dataAttributes[property]) {
            var attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
        }

        /**
         * Defines a property accessor for the given property.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         * @return {void}
         * @override
         */

      }, {
        key: '_definePropertyAccessor',
        value: function _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */
            /** @this {PropertiesChanged} */
            get: function get$$1() {
              return this._getProperty(property);
            },

            /** @this {PropertiesChanged} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */
          });
        }
      }], [{
        key: 'createProperties',


        /**
         * Creates property accessors for the given property names.
         * @param {!Object} props Object whose keys are names of accessors.
         * @return {void}
         * @protected
         */
        value: function createProperties(props) {
          var proto = this.prototype;
          for (var prop in props) {
            // don't stomp an existing accessor
            if (!(prop in proto)) {
              proto._createPropertyAccessor(prop);
            }
          }
        }

        /**
         * Returns an attribute name that corresponds to the given property.
         * The attribute name is the lowercased property name. Override to
         * customize this mapping.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: 'attributeNameForProperty',
        value: function attributeNameForProperty(property) {
          return property.toLowerCase();
        }

        /**
         * Override point to provide a type to which to deserialize a value to
         * a given property.
         * @param {string} name Name of property
         *
         * @protected
         */

      }, {
        key: 'typeForProperty',
        value: function typeForProperty(name) {}
      }]);

      function PropertiesChanged() {
        classCallCheck(this, PropertiesChanged);

        var _this = possibleConstructorReturn(this, (PropertiesChanged.__proto__ || Object.getPrototypeOf(PropertiesChanged)).call(this));

        _this.__dataEnabled = false;
        _this.__dataReady = false;
        _this.__dataInvalid = false;
        _this.__data = {};
        _this.__dataPending = null;
        _this.__dataOld = null;
        _this.__dataInstanceProps = null;
        _this.__serializing = false;
        _this._initializeProperties();
        return _this;
      }

      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */


      createClass(PropertiesChanged, [{
        key: 'ready',
        value: function ready() {
          this.__dataReady = true;
          this._flushProperties();
        }

        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_initializeProperties',
        value: function _initializeProperties() {
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (var p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }

        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_initializeInstanceProperties',
        value: function _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }

        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_setProperty',
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }

        /**
         * Returns the value for the given property.
         * @param {string} property Name of property
         * @return {*} Value for the given property
         * @protected
         * @override
         */

      }, {
        key: '_getProperty',
        value: function _getProperty(property) {
          return this.__data[property];
        }

        /* eslint-disable no-unused-vars */
        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} ext Not used here; affordance for closure
         * @return {boolean} Returns true if the property changed
         * @protected
         * @override
         */

      }, {
        key: '_setPendingProperty',
        value: function _setPendingProperty(property, value, ext) {
          var old = this.__data[property];
          var changed = this._shouldPropertyChange(property, value, old);
          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            // Ensure old is captured from the last turn
            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }
            this.__data[property] = value;
            this.__dataPending[property] = value;
          }
          return changed;
        }
        /* eslint-enable */

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_invalidateProperties',
        value: function _invalidateProperties() {
          var _this2 = this;

          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(function () {
              if (_this2.__dataInvalid) {
                _this2.__dataInvalid = false;
                _this2._flushProperties();
              }
            });
          }
        }

        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_enableProperties',
        value: function _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;
            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);
              this.__dataInstanceProps = null;
            }
            this.ready();
          }
        }

        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_flushProperties',
        value: function _flushProperties() {
          var props = this.__data;
          var changedProps = this.__dataPending;
          var old = this.__dataOld;
          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;
            this._propertiesChanged(props, changedProps, old);
          }
        }

        /**
         * Called in `_flushProperties` to determine if `_propertiesChanged`
         * should be called. The default implementation returns true if
         * properties are pending. Override to customize when
         * `_propertiesChanged` is called.
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {boolean} true if changedProps is truthy
         * @override
         */

      }, {
        key: '_shouldPropertiesChange',
        value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
          // eslint-disable-line no-unused-vars
          return Boolean(changedProps);
        }

        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_propertiesChanged',
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` if a strict equality
         * check fails. The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         * @override
         */

      }, {
        key: '_shouldPropertyChange',
        value: function _shouldPropertyChange(property, value, old) {
          return (
            // Strict equality check
            old !== value && (
            // This ensures (old==NaN, value==NaN) always returns false
            old === old || value === value)
          );
        }

        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @suppress {missingProperties} Super may or may not implement the callback
         * @override
         */

      }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }
          if (get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this)) {
            get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this).call(this, name, old, value, namespace);
          }
        }

        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to, defaults to the value
         * returned from `typeForProperty`
         * @return {void}
         * @override
         */

      }, {
        key: '_attributeToProperty',
        value: function _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            var map = this.__dataAttributes;
            var property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
          }
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is an element.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect to.
         * @param {*=} value Property value to refect.
         * @return {void}
         * @override
         */

      }, {
        key: '_propertyToAttribute',
        value: function _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;
          this._valueToNodeAttribute( /** @type {!HTMLElement} */this, value, attribute || this.constructor.attributeNameForProperty(property));
          this.__serializing = false;
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @return {void}
         * @override
         */

      }, {
        key: '_valueToNodeAttribute',
        value: function _valueToNodeAttribute(node, value, attribute) {
          var str = this._serializeValue(value);
          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }

        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called when setting JS property values to
         * HTML attributes.  Users may override this method to provide
         * serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided
         * property  value.
         * @override
         */

      }, {
        key: '_serializeValue',
        value: function _serializeValue(value) {
          switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
            case 'boolean':
              return value ? '' : undefined;
            default:
              return value != null ? value.toString() : undefined;
          }
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called when reading HTML attribute values to
         * JS properties.  Users may override this method to provide
         * deserialization for custom `type`s. Types for `Boolean`, `String`,
         * and `Number` convert attributes to the expected types.
         *
         * @param {?string} value Value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         * @override
         */

      }, {
        key: '_deserializeValue',
        value: function _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;
            case Number:
              return Number(value);
            default:
              return value;
          }
        }
      }]);
      return PropertiesChanged;
    }(superClass);

    return PropertiesChanged;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {Object} props Properties to normalize
   * @return {Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */
  function normalizeProperties(props) {
    var output = {};
    for (var p in props) {
      var o = props[p];
      output[p] = typeof o === 'function' ? { type: o } : o;
    }
    return output;
  }

  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */
  var PropertiesMixin = dedupingMixin(function (superClass) {

    /**
     * @constructor
     * @implements {Polymer_PropertiesChanged}
     * @private
     */
    var base = PropertiesChanged(superClass);

    /**
     * Returns the super class constructor for the given class, if it is an
     * instance of the PropertiesMixin.
     *
     * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {?PropertiesMixinConstructor} Super class constructor
     */
    function superPropertiesClass(constructor) {
      var superCtor = Object.getPrototypeOf(constructor);

      // Note, the `PropertiesMixin` class below only refers to the class
      // generated by this call to the mixin; the instanceof test only works
      // because the mixin is deduped and guaranteed only to apply once, hence
      // all constructors in a proto chain will see the same `PropertiesMixin`
      return superCtor.prototype instanceof PropertiesMixin ?
      /** @type {!PropertiesMixinConstructor} */superCtor : null;
    }

    /**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */
    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
        var props = null;

        if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
          props = normalizeProperties(constructor.properties);
        }

        constructor.__ownProperties = props;
      }
      return constructor.__ownProperties;
    }

    /**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */

    var PropertiesMixin = function (_base) {
      inherits(PropertiesMixin, _base);

      function PropertiesMixin() {
        classCallCheck(this, PropertiesMixin);
        return possibleConstructorReturn(this, (PropertiesMixin.__proto__ || Object.getPrototypeOf(PropertiesMixin)).apply(this, arguments));
      }

      createClass(PropertiesMixin, [{
        key: '_initializeProperties',


        /**
         * Overrides `PropertiesChanged` method and adds a call to
         * `finalize` which lazily configures the element's property accessors.
         * @override
         * @return {void}
         */
        value: function _initializeProperties() {
          this.constructor.finalize();
          get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), '_initializeProperties', this).call(this);
        }

        /**
         * Called when the element is added to a document.
         * Calls `_enableProperties` to turn on property system from
         * `PropertiesChanged`.
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         * @override
         */

      }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
          if (get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this)) {
            get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this).call(this);
          }
          this._enableProperties();
        }

        /**
         * Called when the element is removed from a document
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         * @override
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          if (get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this)) {
            get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this).call(this);
          }
        }
      }], [{
        key: 'finalize',


        /**
         * Finalizes an element definition, including ensuring any super classes
         * are also finalized. This includes ensuring property
         * accessors exist on the element prototype. This method calls
         * `_finalizeClass` to finalize each constructor in the prototype chain.
         * @return {void}
         */
        value: function finalize() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
            var superCtor = superPropertiesClass( /** @type {!PropertiesMixinConstructor} */this);
            if (superCtor) {
              superCtor.finalize();
            }
            this.__finalized = true;
            this._finalizeClass();
          }
        }

        /**
         * Finalize an element class. This includes ensuring property
         * accessors exist on the element prototype. This method is called by
         * `finalize` and finalizes the class constructor.
         *
         * @protected
         */

      }, {
        key: '_finalizeClass',
        value: function _finalizeClass() {
          var props = ownProperties( /** @type {!PropertiesMixinConstructor} */this);
          if (props) {
            this.createProperties(props);
          }
        }

        /**
         * Returns a memoized version of all properties, including those inherited
         * from super classes. Properties not in object format are converted to
         * at least {type}.
         *
         * @return {Object} Object containing properties for this class
         * @protected
         */

      }, {
        key: 'typeForProperty',


        /**
         * Overrides `PropertiesChanged` method to return type specified in the
         * static `properties` object for the given property.
         * @param {string} name Name of property
         * @return {*} Type to which to deserialize attribute
         *
         * @protected
         */
        value: function typeForProperty(name) {
          var info = this._properties[name];
          return info && info.type;
        }
      }, {
        key: 'observedAttributes',


        /**
         * Implements standard custom elements getter to observes the attributes
         * listed in `properties`.
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        get: function get$$1() {
          var _this2 = this;

          var props = this._properties;
          return props ? Object.keys(props).map(function (p) {
            return _this2.attributeNameForProperty(p);
          }) : [];
        }
      }, {
        key: '_properties',
        get: function get$$1() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
            var superCtor = superPropertiesClass( /** @type {!PropertiesMixinConstructor} */this);
            this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties( /** @type {PropertiesMixinConstructor} */this));
          }
          return this.__properties;
        }
      }]);
      return PropertiesMixin;
    }(base);

    return PropertiesMixin;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var caseMap = {};
  var DASH_TO_CAMEL = /-[a-z]/g;
  var CAMEL_TO_DASH = /([A-Z])/g;

  /**
   * @fileoverview Module with utilities for converting between "dash-case" and
   * "camelCase" identifiers.
   */

  /**
   * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
   * (e.g. `fooBarBaz`).
   *
   * @param {string} dash Dash-case identifier
   * @return {string} Camel-case representation of the identifier
   */
  function dashToCamelCase(dash) {
    return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
      return m[1].toUpperCase();
    }));
  }

  /**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */
  function camelToDashCase(camel) {
    return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
  }

  var caseMap$0 = /*#__PURE__*/Object.freeze({
    dashToCamelCase: dashToCamelCase,
    camelToDashCase: camelToDashCase
  });

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // The first argument to JS template tags retain identity across multiple
  // calls to a tag for the same literal, so we can cache work done per literal
  // in a Map.
  var templateCaches = new Map();
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */
  var TemplateResult = function () {
      function TemplateResult(strings, values, type) {
          var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;
          classCallCheck(this, TemplateResult);

          this.strings = strings;
          this.values = values;
          this.type = type;
          this.partCallback = partCallback;
      }
      /**
       * Returns a string of HTML used to create a <template> element.
       */


      createClass(TemplateResult, [{
          key: 'getHTML',
          value: function getHTML() {
              var l = this.strings.length - 1;
              var html = '';
              var isTextBinding = true;
              for (var i = 0; i < l; i++) {
                  var s = this.strings[i];
                  html += s;
                  // We're in a text position if the previous string closed its tags.
                  // If it doesn't have any tags, then we use the previous text position
                  // state.
                  var closing = findTagClose(s);
                  isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
                  html += isTextBinding ? nodeMarker : marker;
              }
              html += this.strings[l];
              return html;
          }
      }, {
          key: 'getTemplateElement',
          value: function getTemplateElement() {
              var template = document.createElement('template');
              template.innerHTML = this.getHTML();
              return template;
          }
      }]);
      return TemplateResult;
  }();
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an <svg> tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the <svg> tag so that
   * clones only container the original fragment.
   */
  var SVGTemplateResult = function (_TemplateResult) {
      inherits(SVGTemplateResult, _TemplateResult);

      function SVGTemplateResult() {
          classCallCheck(this, SVGTemplateResult);
          return possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
      }

      createClass(SVGTemplateResult, [{
          key: 'getHTML',
          value: function getHTML() {
              return '<svg>' + get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
          }
      }, {
          key: 'getTemplateElement',
          value: function getTemplateElement() {
              var template = get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
              var content = template.content;
              var svgElement = content.firstChild;
              content.removeChild(svgElement);
              reparentNodes(content, svgElement.firstChild);
              return template;
          }
      }]);
      return SVGTemplateResult;
  }(TemplateResult);
  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  var marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
  /**
   * An expression marker used text-positions, not attribute positions,
   * in template.
   */
  var nodeMarker = '<!--' + marker + '-->';
  var markerRegex = new RegExp(marker + '|' + nodeMarker);
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#attributes-0
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-character
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */
  var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
  /**
   * Finds the closing index of the last closed HTML tag.
   * This has 3 possible return values:
   *   - `-1`, meaning there is no tag in str.
   *   - `string.length`, meaning the last opened tag is unclosed.
   *   - Some positive number < str.length, meaning the index of the closing '>'.
   */
  function findTagClose(str) {
      var close = str.lastIndexOf('>');
      var open = str.indexOf('<', close + 1);
      return open > -1 ? str.length : close;
  }
  /**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */
  var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
      classCallCheck(this, TemplatePart);

      this.type = type;
      this.index = index;
      this.name = name;
      this.rawName = rawName;
      this.strings = strings;
  };
  var isTemplatePartActive = function isTemplatePartActive(part) {
      return part.index !== -1;
  };
  /**
   * An updateable Template that tracks the location of dynamic parts.
   */
  var Template = function Template(result, element) {
      classCallCheck(this, Template);

      this.parts = [];
      this.element = element;
      var content = this.element.content;
      // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
      var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                          NodeFilter.SHOW_TEXT */, null, false);
      var index = -1;
      var partIndex = 0;
      var nodesToRemove = [];
      // The actual previous node, accounting for removals: if a node is removed
      // it will never be the previousNode.
      var previousNode = void 0;
      // Used to set previousNode at the top of the loop.
      var currentNode = void 0;
      while (walker.nextNode()) {
          index++;
          previousNode = currentNode;
          var node = currentNode = walker.currentNode;
          if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                  if (!node.hasAttributes()) {
                      continue;
                  }
                  var attributes = node.attributes;
                  // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                  // attributes are not guaranteed to be returned in document order. In
                  // particular, Edge/IE can return them out of order, so we cannot assume
                  // a correspondance between part index and attribute index.
                  var count = 0;
                  for (var i = 0; i < attributes.length; i++) {
                      if (attributes[i].value.indexOf(marker) >= 0) {
                          count++;
                      }
                  }
                  while (count-- > 0) {
                      // Get the template literal section leading up to the first
                      // expression in this attribute
                      var stringForPart = result.strings[partIndex];
                      // Find the attribute name
                      var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                      // Find the corresponding attribute
                      // TODO(justinfagnani): remove non-null assertion
                      var attribute = attributes.getNamedItem(attributeNameInPart);
                      var stringsForAttributeValue = attribute.value.split(markerRegex);
                      this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                      node.removeAttribute(attribute.name);
                      partIndex += stringsForAttributeValue.length - 1;
                  }
              } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                  var nodeValue = node.nodeValue;
                  if (nodeValue.indexOf(marker) < 0) {
                      continue;
                  }
                  var parent = node.parentNode;
                  var strings = nodeValue.split(markerRegex);
                  var lastIndex = strings.length - 1;
                  // We have a part for each match found
                  partIndex += lastIndex;
                  // Generate a new text node for each literal section
                  // These nodes are also used as the markers for node parts
                  for (var _i = 0; _i < lastIndex; _i++) {
                      parent.insertBefore(strings[_i] === '' ? document.createComment('') : document.createTextNode(strings[_i]), node);
                      this.parts.push(new TemplatePart('node', index++));
                  }
                  parent.insertBefore(strings[lastIndex] === '' ? document.createComment('') : document.createTextNode(strings[lastIndex]), node);
                  nodesToRemove.push(node);
              } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === marker) {
              var _parent = node.parentNode;
              // Add a new marker node to be the startNode of the Part if any of the
              // following are true:
              //  * We don't have a previousSibling
              //  * previousSibling is being removed (thus it's not the
              //    `previousNode`)
              //  * previousSibling is not a Text node
              //
              // TODO(justinfagnani): We should be able to use the previousNode here
              // as the marker node and reduce the number of extra nodes we add to a
              // template. See https://github.com/PolymerLabs/lit-html/issues/147
              var previousSibling = node.previousSibling;
              if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
                  _parent.insertBefore(document.createComment(''), node);
              } else {
                  index--;
              }
              this.parts.push(new TemplatePart('node', index++));
              nodesToRemove.push(node);
              // If we don't have a nextSibling add a marker node.
              // We don't have to check if the next node is going to be removed,
              // because that node will induce a new marker if so.
              if (node.nextSibling === null) {
                  _parent.insertBefore(document.createComment(''), node);
              } else {
                  index--;
              }
              currentNode = previousNode;
              partIndex++;
          }
      }
      // Remove text binding nodes after the walk to not disturb the TreeWalker
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var n = _step.value;

              n.parentNode.removeChild(n);
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }
  };
  /**
   * Returns a value ready to be inserted into a Part from a user-provided value.
   *
   * If the user value is a directive, this invokes the directive with the given
   * part. If the value is null, it's converted to undefined to work better
   * with certain DOM APIs, like textContent.
   */
  var getValue = function getValue(part, value) {
      // `null` as the value of a Text node will render the string 'null'
      // so we convert it to undefined
      if (isDirective(value)) {
          value = value(part);
          return noChange;
      }
      return value === null ? undefined : value;
  };
  var isDirective = function isDirective(o) {
      return typeof o === 'function' && o.__litDirective === true;
  };
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  var noChange = {};
  var isPrimitiveValue = function isPrimitiveValue(value) {
      return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
  };
  var AttributePart = function () {
      function AttributePart(instance, element, name, strings) {
          classCallCheck(this, AttributePart);

          this.instance = instance;
          this.element = element;
          this.name = name;
          this.strings = strings;
          this.size = strings.length - 1;
          this._previousValues = [];
      }

      createClass(AttributePart, [{
          key: '_interpolate',
          value: function _interpolate(values, startIndex) {
              var strings = this.strings;
              var l = strings.length - 1;
              var text = '';
              for (var i = 0; i < l; i++) {
                  text += strings[i];
                  var v = getValue(this, values[startIndex + i]);
                  if (v && v !== noChange && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                      var _iteratorNormalCompletion2 = true;
                      var _didIteratorError2 = false;
                      var _iteratorError2 = undefined;

                      try {
                          for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                              var t = _step2.value;

                              // TODO: we need to recursively call getValue into iterables...
                              text += t;
                          }
                      } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                      } finally {
                          try {
                              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                  _iterator2.return();
                              }
                          } finally {
                              if (_didIteratorError2) {
                                  throw _iteratorError2;
                              }
                          }
                      }
                  } else {
                      text += v;
                  }
              }
              return text + strings[l];
          }
      }, {
          key: '_equalToPreviousValues',
          value: function _equalToPreviousValues(values, startIndex) {
              for (var i = startIndex; i < startIndex + this.size; i++) {
                  if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
                      return false;
                  }
              }
              return true;
          }
      }, {
          key: 'setValue',
          value: function setValue(values, startIndex) {
              if (this._equalToPreviousValues(values, startIndex)) {
                  return;
              }
              var s = this.strings;
              var value = void 0;
              if (s.length === 2 && s[0] === '' && s[1] === '') {
                  // An expression that occupies the whole attribute value will leave
                  // leading and trailing empty strings.
                  value = getValue(this, values[startIndex]);
                  if (Array.isArray(value)) {
                      value = value.join('');
                  }
              } else {
                  value = this._interpolate(values, startIndex);
              }
              if (value !== noChange) {
                  this.element.setAttribute(this.name, value);
              }
              this._previousValues = values;
          }
      }]);
      return AttributePart;
  }();
  var NodePart = function () {
      function NodePart(instance, startNode, endNode) {
          classCallCheck(this, NodePart);

          this.instance = instance;
          this.startNode = startNode;
          this.endNode = endNode;
          this._previousValue = undefined;
      }

      createClass(NodePart, [{
          key: 'setValue',
          value: function setValue(value) {
              value = getValue(this, value);
              if (value === noChange) {
                  return;
              }
              if (isPrimitiveValue(value)) {
                  // Handle primitive values
                  // If the value didn't change, do nothing
                  if (value === this._previousValue) {
                      return;
                  }
                  this._setText(value);
              } else if (value instanceof TemplateResult) {
                  this._setTemplateResult(value);
              } else if (Array.isArray(value) || value[Symbol.iterator]) {
                  this._setIterable(value);
              } else if (value instanceof Node) {
                  this._setNode(value);
              } else if (value.then !== undefined) {
                  this._setPromise(value);
              } else {
                  // Fallback, will render the string representation
                  this._setText(value);
              }
          }
      }, {
          key: '_insert',
          value: function _insert(node) {
              this.endNode.parentNode.insertBefore(node, this.endNode);
          }
      }, {
          key: '_setNode',
          value: function _setNode(value) {
              if (this._previousValue === value) {
                  return;
              }
              this.clear();
              this._insert(value);
              this._previousValue = value;
          }
      }, {
          key: '_setText',
          value: function _setText(value) {
              var node = this.startNode.nextSibling;
              value = value === undefined ? '' : value;
              if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                  // If we only have a single text node between the markers, we can just
                  // set its value, rather than replacing it.
                  // TODO(justinfagnani): Can we just check if _previousValue is
                  // primitive?
                  node.textContent = value;
              } else {
                  this._setNode(document.createTextNode(value));
              }
              this._previousValue = value;
          }
      }, {
          key: '_setTemplateResult',
          value: function _setTemplateResult(value) {
              var template = this.instance._getTemplate(value);
              var instance = void 0;
              if (this._previousValue && this._previousValue.template === template) {
                  instance = this._previousValue;
              } else {
                  instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
                  this._setNode(instance._clone());
                  this._previousValue = instance;
              }
              instance.update(value.values);
          }
      }, {
          key: '_setIterable',
          value: function _setIterable(value) {
              // For an Iterable, we create a new InstancePart per item, then set its
              // value to the item. This is a little bit of overhead for every item in
              // an Iterable, but it lets us recurse easily and efficiently update Arrays
              // of TemplateResults that will be commonly returned from expressions like:
              // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
              // If _previousValue is an array, then the previous render was of an
              // iterable and _previousValue will contain the NodeParts from the previous
              // render. If _previousValue is not an array, clear this part and make a new
              // array for NodeParts.
              if (!Array.isArray(this._previousValue)) {
                  this.clear();
                  this._previousValue = [];
              }
              // Lets us keep track of how many items we stamped so we can clear leftover
              // items from a previous render
              var itemParts = this._previousValue;
              var partIndex = 0;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var item = _step3.value;

                      // Try to reuse an existing part
                      var itemPart = itemParts[partIndex];
                      // If no existing part, create a new one
                      if (itemPart === undefined) {
                          // If we're creating the first item part, it's startNode should be the
                          // container's startNode
                          var itemStart = this.startNode;
                          // If we're not creating the first part, create a new separator marker
                          // node, and fix up the previous part's endNode to point to it
                          if (partIndex > 0) {
                              var previousPart = itemParts[partIndex - 1];
                              itemStart = previousPart.endNode = document.createTextNode('');
                              this._insert(itemStart);
                          }
                          itemPart = new NodePart(this.instance, itemStart, this.endNode);
                          itemParts.push(itemPart);
                      }
                      itemPart.setValue(item);
                      partIndex++;
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              if (partIndex === 0) {
                  this.clear();
                  this._previousValue = undefined;
              } else if (partIndex < itemParts.length) {
                  var lastPart = itemParts[partIndex - 1];
                  // Truncate the parts array so _previousValue reflects the current state
                  itemParts.length = partIndex;
                  this.clear(lastPart.endNode.previousSibling);
                  lastPart.endNode = this.endNode;
              }
          }
      }, {
          key: '_setPromise',
          value: function _setPromise(value) {
              var _this2 = this;

              this._previousValue = value;
              value.then(function (v) {
                  if (_this2._previousValue === value) {
                      _this2.setValue(v);
                  }
              });
          }
      }, {
          key: 'clear',
          value: function clear() {
              var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

              removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
          }
      }]);
      return NodePart;
  }();
  var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
      if (templatePart.type === 'attribute') {
          return new AttributePart(instance, node, templatePart.name, templatePart.strings);
      } else if (templatePart.type === 'node') {
          return new NodePart(instance, node, node.nextSibling);
      }
      throw new Error('Unknown part type ' + templatePart.type);
  };
  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */
  var TemplateInstance = function () {
      function TemplateInstance(template, partCallback, getTemplate) {
          classCallCheck(this, TemplateInstance);

          this._parts = [];
          this.template = template;
          this._partCallback = partCallback;
          this._getTemplate = getTemplate;
      }

      createClass(TemplateInstance, [{
          key: 'update',
          value: function update(values) {
              var valueIndex = 0;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = this._parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var part = _step4.value;

                      if (!part) {
                          valueIndex++;
                      } else if (part.size === undefined) {
                          part.setValue(values[valueIndex]);
                          valueIndex++;
                      } else {
                          part.setValue(values, valueIndex);
                          valueIndex += part.size;
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }
          }
      }, {
          key: '_clone',
          value: function _clone() {
              // Clone the node, rather than importing it, to keep the fragment in the
              // template's document. This leaves the fragment inert so custom elements
              // won't upgrade until after the main document adopts the node.
              var fragment = this.template.element.content.cloneNode(true);
              var parts = this.template.parts;
              if (parts.length > 0) {
                  // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                  // null
                  var _walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                                        NodeFilter.SHOW_TEXT */, null, false);
                  var _index = -1;
                  for (var i = 0; i < parts.length; i++) {
                      var part = parts[i];
                      var partActive = isTemplatePartActive(part);
                      // An inactive part has no coresponding Template node.
                      if (partActive) {
                          while (_index < part.index) {
                              _index++;
                              _walker.nextNode();
                          }
                      }
                      this._parts.push(partActive ? this._partCallback(this, part, _walker.currentNode) : undefined);
                  }
              }
              return fragment;
          }
      }]);
      return TemplateInstance;
  }();
  /**
   * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), into another container (could be the same container), before
   * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
   * container.
   */
  var reparentNodes = function reparentNodes(container, start) {
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var node = start;
      while (node !== end) {
          var n = node.nextSibling;
          container.insertBefore(node, before);
          node = n;
      }
  };
  /**
   * Removes nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), from `container`.
   */
  var removeNodes = function removeNodes(container, startNode) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var node = startNode;
      while (node !== endNode) {
          var n = node.nextSibling;
          container.removeChild(node);
          node = n;
      }
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
   */
  function removeNodesFromTemplate(template, nodesToRemove) {
      var content = template.element.content,
          parts = template.parts;

      var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
      var partIndex = 0;
      var part = parts[0];
      var nodeIndex = -1;
      var removeCount = 0;
      var nodesToRemoveInTemplate = [];
      var currentRemovingNode = null;
      while (walker.nextNode()) {
          nodeIndex++;
          var node = walker.currentNode;
          // End removal if stepped past the removing node
          if (node.previousSibling === currentRemovingNode) {
              currentRemovingNode = null;
          }
          // A node to remove was found in the template
          if (nodesToRemove.has(node)) {
              nodesToRemoveInTemplate.push(node);
              // Track node we're removing
              if (currentRemovingNode === null) {
                  currentRemovingNode = node;
              }
          }
          // When removing, increment count by which to adjust subsequent part indices
          if (currentRemovingNode !== null) {
              removeCount++;
          }
          while (part !== undefined && part.index === nodeIndex) {
              // If part is in a removed node deactivate it by setting index to -1 or
              // adjust the index as needed.
              part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
              part = parts[++partIndex];
          }
      }
      nodesToRemoveInTemplate.forEach(function (n) {
          return n.parentNode.removeChild(n);
      });
  }
  var countNodes = function countNodes(node) {
      var count = 1;
      var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
      while (walker.nextNode()) {
          count++;
      }
      return count;
  };
  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      for (var i = startIndex + 1; i < parts.length; i++) {
          var part = parts[i];
          if (isTemplatePartActive(part)) {
              return i;
          }
      }
      return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */
  function insertNodeIntoTemplate(template, node) {
      var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var content = template.element.content,
          parts = template.parts;
      // If there's no refNode, then put node at end of template.
      // No part indices need to be shifted in this case.

      if (refNode === null || refNode === undefined) {
          content.appendChild(node);
          return;
      }
      var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
      var partIndex = nextActiveIndexInTemplateParts(parts);
      var insertCount = 0;
      var walkerIndex = -1;
      while (walker.nextNode()) {
          walkerIndex++;
          var walkerNode = walker.currentNode;
          if (walkerNode === refNode) {
              refNode.parentNode.insertBefore(node, refNode);
              insertCount = countNodes(node);
          }
          while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
              // If we've inserted the node, simply adjust all subsequent parts
              if (insertCount > 0) {
                  while (partIndex !== -1) {
                      parts[partIndex].index += insertCount;
                      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                  }
                  return;
              }
              partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }
      }
  }

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // Get a key to lookup in `templateCaches`.
  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
      return type + '--' + scopeName;
  };
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */
  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
      return function (result) {
          var cacheKey = getTemplateCacheKey(result.type, scopeName);
          var templateCache = templateCaches.get(cacheKey);
          if (templateCache === undefined) {
              templateCache = new Map();
              templateCaches.set(cacheKey, templateCache);
          }
          var template = templateCache.get(result.strings);
          if (template === undefined) {
              var element = result.getTemplateElement();
              if (_typeof(window.ShadyCSS) === 'object') {
                  window.ShadyCSS.prepareTemplateDom(element, scopeName);
              }
              template = new Template(result, element);
              templateCache.set(result.strings, template);
          }
          return template;
      };
  };
  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */
  function removeStylesFromLitTemplates(scopeName) {
      TEMPLATE_TYPES.forEach(function (type) {
          var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
          if (templates !== undefined) {
              templates.forEach(function (template) {
                  var content = template.element.content;

                  var styles = content.querySelectorAll('style');
                  removeNodesFromTemplate(template, new Set(Array.from(styles)));
              });
          }
      });
  }
  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered output.
   */
  var ensureStylesScoped = function ensureStylesScoped(fragment, template, scopeName) {
      // only scope element template once per scope name
      if (!shadyRenderSet.has(scopeName)) {
          shadyRenderSet.add(scopeName);
          var styleTemplate = document.createElement('template');
          Array.from(fragment.querySelectorAll('style')).forEach(function (s) {
              styleTemplate.content.appendChild(s);
          });
          window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName);
          // Fix templates: note the expectation here is that the given `fragment`
          // has been generated from the given `template` which contains
          // the set of templates rendered into this scope.
          // It is only from this set of initial templates from which styles
          // will be scoped and removed.
          removeStylesFromLitTemplates(scopeName);
          // ApplyShim case
          if (window.ShadyCSS.nativeShadow) {
              var style = styleTemplate.content.querySelector('style');
              if (style !== null) {
                  // Insert style into rendered fragment
                  fragment.insertBefore(style, fragment.firstChild);
                  // Insert into lit-template (for subsequent renders)
                  insertNodeIntoTemplate(template, style.cloneNode(true), template.element.content.firstChild);
              }
          }
      }
  };
  // NOTE: We're copying code from lit-html's `render` method here.
  // We're doing this explicitly because the API for rendering templates is likely
  // to change in the near term.
  function render$1(result, container, scopeName) {
      var templateFactory = shadyTemplateFactory(scopeName);
      var template = templateFactory(result);
      var instance = container.__templateInstance;
      // Repeat render, just call update()
      if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
          instance.update(result.values);
          return;
      }
      // First render, create a new TemplateInstance and append it
      instance = new TemplateInstance(template, result.partCallback, templateFactory);
      container.__templateInstance = instance;
      var fragment = instance._clone();
      instance.update(result.values);
      var host = container instanceof ShadowRoot ? container.host : undefined;
      // If there's a shadow host, do ShadyCSS scoping...
      if (host !== undefined && _typeof(window.ShadyCSS) === 'object') {
          ensureStylesScoped(fragment, template, scopeName);
          window.ShadyCSS.styleElement(host);
      }
      removeNodes(container, container.firstChild);
      container.appendChild(fragment);
  }

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * Interprets a template literal as a lit-extended HTML template.
   */
  var html$1 = function html$$1(strings) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
      }

      return new TemplateResult(strings, values, 'html', extendedPartCallback);
  };
  /**
   * A PartCallback which allows templates to set properties and declarative
   * event handlers.
   *
   * Properties are set by default, instead of attributes. Attribute names in
   * lit-html templates preserve case, so properties are case sensitive. If an
   * expression takes up an entire attribute value, then the property is set to
   * that value. If an expression is interpolated with a string or other
   * expressions then the property is set to the string result of the
   * interpolation.
   *
   * To set an attribute instead of a property, append a `$` suffix to the
   * attribute name.
   *
   * Example:
   *
   *     html`<button class$="primary">Buy Now</button>`
   *
   * To set an event handler, prefix the attribute name with `on-`:
   *
   * Example:
   *
   *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
   *
   */
  var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
      if (templatePart.type === 'attribute') {
          if (templatePart.rawName.substr(0, 3) === 'on-') {
              var eventName = templatePart.rawName.slice(3);
              return new EventPart(instance, node, eventName);
          }
          var lastChar = templatePart.name.substr(templatePart.name.length - 1);
          if (lastChar === '$') {
              var name = templatePart.name.slice(0, -1);
              return new AttributePart(instance, node, name, templatePart.strings);
          }
          if (lastChar === '?') {
              var _name = templatePart.name.slice(0, -1);
              return new BooleanAttributePart(instance, node, _name, templatePart.strings);
          }
          return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
      }
      return defaultPartCallback(instance, templatePart, node);
  };
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */
  var BooleanAttributePart = function (_AttributePart) {
      inherits(BooleanAttributePart, _AttributePart);

      function BooleanAttributePart() {
          classCallCheck(this, BooleanAttributePart);
          return possibleConstructorReturn(this, (BooleanAttributePart.__proto__ || Object.getPrototypeOf(BooleanAttributePart)).apply(this, arguments));
      }

      createClass(BooleanAttributePart, [{
          key: 'setValue',
          value: function setValue(values, startIndex) {
              var s = this.strings;
              if (s.length === 2 && s[0] === '' && s[1] === '') {
                  var value = getValue(this, values[startIndex]);
                  if (value === noChange) {
                      return;
                  }
                  if (value) {
                      this.element.setAttribute(this.name, '');
                  } else {
                      this.element.removeAttribute(this.name);
                  }
              } else {
                  throw new Error('boolean attributes can only contain a single expression');
              }
          }
      }]);
      return BooleanAttributePart;
  }(AttributePart);
  var PropertyPart = function (_AttributePart2) {
      inherits(PropertyPart, _AttributePart2);

      function PropertyPart() {
          classCallCheck(this, PropertyPart);
          return possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
      }

      createClass(PropertyPart, [{
          key: 'setValue',
          value: function setValue(values, startIndex) {
              var s = this.strings;
              var value = void 0;
              if (this._equalToPreviousValues(values, startIndex)) {
                  return;
              }
              if (s.length === 2 && s[0] === '' && s[1] === '') {
                  // An expression that occupies the whole attribute value will leave
                  // leading and trailing empty strings.
                  value = getValue(this, values[startIndex]);
              } else {
                  // Interpolation, so interpolate
                  value = this._interpolate(values, startIndex);
              }
              if (value !== noChange) {
                  this.element[this.name] = value;
              }
              this._previousValues = values;
          }
      }]);
      return PropertyPart;
  }(AttributePart);
  var EventPart = function () {
      function EventPart(instance, element, eventName) {
          classCallCheck(this, EventPart);

          this.instance = instance;
          this.element = element;
          this.eventName = eventName;
      }

      createClass(EventPart, [{
          key: 'setValue',
          value: function setValue(value) {
              var listener = getValue(this, value);
              if (listener === this._listener) {
                  return;
              }
              if (listener == null) {
                  this.element.removeEventListener(this.eventName, this);
              } else if (this._listener == null) {
                  this.element.addEventListener(this.eventName, this);
              }
              this._listener = listener;
          }
      }, {
          key: 'handleEvent',
          value: function handleEvent(event) {
              if (typeof this._listener === 'function') {
                  this._listener.call(this.element, event);
              } else if (typeof this._listener.handleEvent === 'function') {
                  this._listener.handleEvent(event);
              }
          }
      }]);
      return EventPart;
  }();

  /**
   * Returns a string of css class names formed by taking the properties
   * in the `classInfo` object and appending the property name to the string of
   * class names if the property value is truthy.
   * @param classInfo
   */
  function classString(classInfo) {
      var o = [];
      for (var name in classInfo) {
          var v = classInfo[name];
          if (v) {
              o.push(name);
          }
      }
      return o.join(' ');
  }
  var LitElement = function (_PropertiesMixin) {
      inherits(LitElement, _PropertiesMixin);

      function LitElement() {
          classCallCheck(this, LitElement);

          var _this = possibleConstructorReturn(this, (LitElement.__proto__ || Object.getPrototypeOf(LitElement)).apply(this, arguments));

          _this.__renderComplete = null;
          _this.__resolveRenderComplete = null;
          _this.__isInvalid = false;
          _this.__isChanging = false;
          return _this;
      }
      /**
       * Override which sets up element rendering by calling* `_createRoot`
       * and `_firstRendered`.
       */


      createClass(LitElement, [{
          key: 'ready',
          value: function ready() {
              this._root = this._createRoot();
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'ready', this).call(this);
              this._firstRendered();
          }
      }, {
          key: 'connectedCallback',
          value: function connectedCallback() {
              if (window.ShadyCSS && this._root) {
                  window.ShadyCSS.styleElement(this);
              }
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'connectedCallback', this).call(this);
          }
          /**
           * Called after the element DOM is rendered for the first time.
           * Implement to perform tasks after first rendering like capturing a
           * reference to a static node which must be directly manipulated.
           * This should not be commonly needed. For tasks which should be performed
           * before first render, use the element constructor.
           */

      }, {
          key: '_firstRendered',
          value: function _firstRendered() {}
          /**
           * Implement to customize where the element's template is rendered by
           * returning an element into which to render. By default this creates
           * a shadowRoot for the element. To render into the element's childNodes,
           * return `this`.
           * @returns {Element|DocumentFragment} Returns a node into which to render.
           */

      }, {
          key: '_createRoot',
          value: function _createRoot() {
              return this.attachShadow({ mode: 'open' });
          }
          /**
           * Override which returns the value of `_shouldRender` which users
           * should implement to control rendering. If this method returns false,
           * _propertiesChanged will not be called and no rendering will occur even
           * if property values change or `requestRender` is called.
           * @param _props Current element properties
           * @param _changedProps Changing element properties
           * @param _prevProps Previous element properties
           * @returns {boolean} Default implementation always returns true.
           */

      }, {
          key: '_shouldPropertiesChange',
          value: function _shouldPropertiesChange(_props, _changedProps, _prevProps) {
              var shouldRender = this._shouldRender(_props, _changedProps, _prevProps);
              if (!shouldRender && this.__resolveRenderComplete) {
                  this.__resolveRenderComplete(false);
              }
              return shouldRender;
          }
          /**
           * Implement to control if rendering should occur when property values
           * change or `requestRender` is called. By default, this method always
           * returns true, but this can be customized as an optimization to avoid
           * rendering work when changes occur which should not be rendered.
           * @param _props Current element properties
           * @param _changedProps Changing element properties
           * @param _prevProps Previous element properties
           * @returns {boolean} Default implementation always returns true.
           */

      }, {
          key: '_shouldRender',
          value: function _shouldRender(_props, _changedProps, _prevProps) {
              return true;
          }
          /**
           * Override which performs element rendering by calling
           * `_render`, `_applyRender`, and finally `_didRender`.
           * @param props Current element properties
           * @param changedProps Changing element properties
           * @param prevProps Previous element properties
           */

      }, {
          key: '_propertiesChanged',
          value: function _propertiesChanged(props, changedProps, prevProps) {
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_propertiesChanged', this).call(this, props, changedProps, prevProps);
              var result = this._render(props);
              if (result && this._root !== undefined) {
                  this._applyRender(result, this._root);
              }
              this._didRender(props, changedProps, prevProps);
              if (this.__resolveRenderComplete) {
                  this.__resolveRenderComplete(true);
              }
          }
      }, {
          key: '_flushProperties',
          value: function _flushProperties() {
              this.__isChanging = true;
              this.__isInvalid = false;
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_flushProperties', this).call(this);
              this.__isChanging = false;
          }
          /**
           * Override which warns when a user attempts to change a property during
           * the rendering lifecycle. This is an anti-pattern and should be avoided.
           * @param property {string}
           * @param value {any}
           * @param old {any}
           */
          // tslint:disable-next-line no-any

      }, {
          key: '_shouldPropertyChange',
          value: function _shouldPropertyChange(property, value, old) {
              var change = get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_shouldPropertyChange', this).call(this, property, value, old);
              if (change && this.__isChanging) {
                  console.trace('Setting properties in response to other properties changing ' + ('considered harmful. Setting \'' + property + '\' from ') + ('\'' + this._getProperty(property) + '\' to \'' + value + '\'.'));
              }
              return change;
          }
          /**
           * Implement to describe the DOM which should be rendered in the element.
           * Ideally, the implementation is a pure function using only props to describe
           * the element template. The implementation must return a `lit-html`
           * TemplateResult. By default this template is rendered into the element's
           * shadowRoot. This can be customized by implementing `_createRoot`. This
           * method must be implemented.
           * @param {*} _props Current element properties
           * @returns {TemplateResult} Must return a lit-html TemplateResult.
           */

      }, {
          key: '_render',
          value: function _render(_props) {
              throw new Error('_render() not implemented');
          }
          /**
           * Renders the given lit-html template `result` into the given `node`.
           * Implement to customize the way rendering is applied. This is should not
           * typically be needed and is provided for advanced use cases.
           * @param result {TemplateResult} `lit-html` template result to render
           * @param node {Element|DocumentFragment} node into which to render
           */

      }, {
          key: '_applyRender',
          value: function _applyRender(result, node) {
              render$1(result, node, this.localName);
          }
          /**
           * Called after element DOM has been rendered. Implement to
           * directly control rendered DOM. Typically this is not needed as `lit-html`
           * can be used in the `_render` method to set properties, attributes, and
           * event listeners. However, it is sometimes useful for calling methods on
           * rendered elements, like calling `focus()` on an element to focus it.
           * @param _props Current element properties
           * @param _changedProps Changing element properties
           * @param _prevProps Previous element properties
           */

      }, {
          key: '_didRender',
          value: function _didRender(_props, _changedProps, _prevProps) {}
          /**
           * Call to request the element to asynchronously re-render regardless
           * of whether or not any property changes are pending.
           */

      }, {
          key: 'requestRender',
          value: function requestRender() {
              this._invalidateProperties();
          }
          /**
           * Override which provides tracking of invalidated state.
           */

      }, {
          key: '_invalidateProperties',
          value: function _invalidateProperties() {
              this.__isInvalid = true;
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_invalidateProperties', this).call(this);
          }
          /**
           * Returns a promise which resolves after the element next renders.
           * The promise resolves to `true` if the element rendered and `false` if the
           * element did not render.
           * This is useful when users (e.g. tests) need to react to the rendered state
           * of the element after a change is made.
           * This can also be useful in event handlers if it is desireable to wait
           * to send an event until after rendering. If possible implement the
           * `_didRender` method to directly respond to rendering within the
           * rendering lifecycle.
           */

      }, {
          key: 'renderComplete',
          get: function get$$1() {
              var _this2 = this;

              if (!this.__renderComplete) {
                  this.__renderComplete = new Promise(function (resolve) {
                      _this2.__resolveRenderComplete = function (value) {
                          _this2.__resolveRenderComplete = _this2.__renderComplete = null;
                          resolve(value);
                      };
                  });
                  if (!this.__isInvalid && this.__resolveRenderComplete) {
                      Promise.resolve().then(function () {
                          return _this2.__resolveRenderComplete(false);
                      });
                  }
              }
              return this.__renderComplete;
          }
      }]);
      return LitElement;
  }(PropertiesMixin(HTMLElement));

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function Stream(source) {
    this.source = source;
  }

  Stream.prototype.run = function (sink, scheduler) {
    return this.source.run(sink, scheduler);
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  /**
   * Create a new Disposable which will dispose its underlying resource.
   * @param {function} dispose function
   * @param {*?} data any data to be passed to disposer function
   * @constructor
   */
  function Disposable(dispose, data) {
    this._dispose = dispose;
    this._data = data;
  }

  Disposable.prototype.dispose = function () {
    return this._dispose(this._data);
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function SettableDisposable() {
    this.disposable = void 0;
    this.disposed = false;
    this._resolve = void 0;

    var self = this;
    this.result = new Promise(function (resolve) {
      self._resolve = resolve;
    });
  }

  SettableDisposable.prototype.setDisposable = function (disposable) {
    if (this.disposable !== void 0) {
      throw new Error('setDisposable called more than once');
    }

    this.disposable = disposable;

    if (this.disposed) {
      this._resolve(disposable.dispose());
    }
  };

  SettableDisposable.prototype.dispose = function () {
    if (this.disposed) {
      return this.result;
    }

    this.disposed = true;

    if (this.disposable !== void 0) {
      this.result = this.disposable.dispose();
    }

    return this.result;
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function isPromise(p) {
    return p !== null && (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object' && typeof p.then === 'function';
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  // drop :: Int -> [a] -> [a]
  // drop first n elements
  function drop(n, a) {
    // eslint-disable-line complexity
    if (n < 0) {
      throw new TypeError('n must be >= 0');
    }

    var l = a.length;
    if (n === 0 || l === 0) {
      return a;
    }

    if (n >= l) {
      return [];
    }

    return unsafeDrop(n, a, l - n);
  }

  // unsafeDrop :: Int -> [a] -> Int -> [a]
  // Internal helper for drop
  function unsafeDrop(n, a, l) {
    var b = new Array(l);
    for (var i = 0; i < l; ++i) {
      b[i] = a[n + i];
    }
    return b;
  }

  // tail :: [a] -> [a]
  // drop head element
  function tail(a) {
    return drop(1, a);
  }

  // map :: (a -> b) -> [a] -> [b]
  // transform each element with f
  function map(f, a) {
    var l = a.length;
    var b = new Array(l);
    for (var i = 0; i < l; ++i) {
      b[i] = f(a[i]);
    }
    return b;
  }

  // removeAll :: (a -> boolean) -> [a] -> [a]
  // remove all elements matching a predicate
  // @deprecated
  function removeAll(f, a) {
    var l = a.length;
    var b = new Array(l);
    var j = 0;
    for (var x, i = 0; i < l; ++i) {
      x = a[i];
      if (!f(x)) {
        b[j] = x;
        ++j;
      }
    }

    b.length = j;
    return b;
  }

  // findIndex :: a -> [a] -> Int
  // find index of x in a, from the left
  function findIndex(x, a) {
    for (var i = 0, l = a.length; i < l; ++i) {
      if (x === a[i]) {
        return i;
      }
    }
    return -1;
  }

  // compose :: (b -> c) -> (a -> b) -> (a -> c)
  var compose = function compose(f, g) {
    return function (x) {
      return f(g(x));
    };
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var map$1 = map;

  /**
   * Call disposable.dispose.  If it returns a promise, catch promise
   * error and forward it through the provided sink.
   * @param {number} t time
   * @param {{dispose: function}} disposable
   * @param {{error: function}} sink
   * @return {*} result of disposable.dispose
   */
  function tryDispose(t, disposable, sink) {
    var result = disposeSafely(disposable);
    return isPromise(result) ? result.catch(function (e) {
      sink.error(t, e);
    }) : result;
  }

  /**
   * Create a new Disposable which will dispose its underlying resource
   * at most once.
   * @param {function} dispose function
   * @param {*?} data any data to be passed to disposer function
   * @return {Disposable}
   */
  function create(dispose, data) {
    return once(new Disposable(dispose, data));
  }

  /**
   * Create a disposable that will dispose all input disposables in parallel.
   * @param {Array<Disposable>} disposables
   * @return {Disposable}
   */
  function all(disposables) {
    return create(disposeAll, disposables);
  }

  function disposeAll(disposables) {
    return Promise.all(map$1(disposeSafely, disposables));
  }

  function disposeSafely(disposable) {
    try {
      return disposable.dispose();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * Create a disposable proxy that allows its underlying disposable to
   * be set later.
   * @return {SettableDisposable}
   */
  function settable() {
    return new SettableDisposable();
  }

  /**
   * Wrap an existing disposable (which may not already have been once()d)
   * so that it will only dispose its underlying resource at most once.
   * @param {{ dispose: function() }} disposable
   * @return {Disposable} wrapped disposable
   */
  function once(disposable) {
    return new Disposable(disposeMemoized, memoized(disposable));
  }

  function disposeMemoized(memoized) {
    if (!memoized.disposed) {
      memoized.disposed = true;
      memoized.value = disposeSafely(memoized.disposable);
      memoized.disposable = void 0;
    }

    return memoized.value;
  }

  function memoized(disposable) {
    return { disposed: false, disposable: disposable, value: void 0 };
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function tryEvent(t, x, sink) {
    try {
      sink.event(t, x);
    } catch (e) {
      sink.error(t, e);
    }
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function EventTargetSource(event, source, capture) {
    this.event = event;
    this.source = source;
    this.capture = capture;
  }

  EventTargetSource.prototype.run = function (sink, scheduler) {
    function addEvent(e) {
      tryEvent(scheduler.now(), e, sink);
    }

    this.source.addEventListener(this.event, addEvent, this.capture);

    return create(disposeEventTarget, { target: this, addEvent: addEvent });
  };

  function disposeEventTarget(info) {
    var target = info.target;
    target.source.removeEventListener(target.event, info.addEvent, target.capture);
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function defer(task) {
    return Promise.resolve(task).then(runTask);
  }

  function runTask(task) {
    try {
      return task.run();
    } catch (e) {
      return task.error(e);
    }
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function DeferredSink(sink) {
    this.sink = sink;
    this.events = [];
    this.active = true;
  }

  DeferredSink.prototype.event = function (t, x) {
    if (!this.active) {
      return;
    }

    if (this.events.length === 0) {
      defer(new PropagateAllTask(this.sink, t, this.events));
    }

    this.events.push({ time: t, value: x });
  };

  DeferredSink.prototype.end = function (t, x) {
    if (!this.active) {
      return;
    }

    this._end(new EndTask(t, x, this.sink));
  };

  DeferredSink.prototype.error = function (t, e) {
    this._end(new ErrorTask(t, e, this.sink));
  };

  DeferredSink.prototype._end = function (task) {
    this.active = false;
    defer(task);
  };

  function PropagateAllTask(sink, time, events) {
    this.sink = sink;
    this.events = events;
    this.time = time;
  }

  PropagateAllTask.prototype.run = function () {
    var events = this.events;
    var sink = this.sink;
    var event;

    for (var i = 0, l = events.length; i < l; ++i) {
      event = events[i];
      this.time = event.time;
      sink.event(event.time, event.value);
    }

    events.length = 0;
  };

  PropagateAllTask.prototype.error = function (e) {
    this.sink.error(this.time, e);
  };

  function EndTask(t, x, sink) {
    this.time = t;
    this.value = x;
    this.sink = sink;
  }

  EndTask.prototype.run = function () {
    this.sink.end(this.time, this.value);
  };

  EndTask.prototype.error = function (e) {
    this.sink.error(this.time, e);
  };

  function ErrorTask(t, e, sink) {
    this.time = t;
    this.value = e;
    this.sink = sink;
  }

  ErrorTask.prototype.run = function () {
    this.sink.error(this.time, this.value);
  };

  ErrorTask.prototype.error = function (e) {
    throw e;
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function EventEmitterSource(event, source) {
    this.event = event;
    this.source = source;
  }

  EventEmitterSource.prototype.run = function (sink, scheduler) {
    // NOTE: Because EventEmitter allows events in the same call stack as
    // a listener is added, use a DeferredSink to buffer events
    // until the stack clears, then propagate.  This maintains most.js's
    // invariant that no event will be delivered in the same call stack
    // as an observer begins observing.
    var dsink = new DeferredSink(sink);

    function addEventVariadic(a) {
      var l = arguments.length;
      if (l > 1) {
        var arr = new Array(l);
        for (var i = 0; i < l; ++i) {
          arr[i] = arguments[i];
        }
        tryEvent(scheduler.now(), arr, dsink);
      } else {
        tryEvent(scheduler.now(), a, dsink);
      }
    }

    this.source.addListener(this.event, addEventVariadic);

    return create(disposeEventEmitter, { target: this, addEvent: addEventVariadic });
  };

  function disposeEventEmitter(info) {
    var target = info.target;
    target.source.removeListener(target.event, info.addEvent);
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * Create a stream from an EventTarget, such as a DOM Node, or EventEmitter.
   * @param {String} event event type name, e.g. 'click'
   * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter
   * @param {*?} capture for DOM events, whether to use
   *  capturing--passed as 3rd parameter to addEventListener.
   * @returns {Stream} stream containing all events of the specified type
   * from the source.
   */
  function fromEvent(event, source, capture) {
    // eslint-disable-line complexity
    var s;

    if (typeof source.addEventListener === 'function' && typeof source.removeEventListener === 'function') {
      if (arguments.length < 3) {
        capture = false;
      }

      s = new EventTargetSource(event, source, capture);
    } else if (typeof source.addListener === 'function' && typeof source.removeListener === 'function') {
      s = new EventEmitterSource(event, source);
    } else {
      throw new Error('source must support addEventListener/removeEventListener or addListener/removeListener');
    }

    return new Stream(s);
  }

  function _arity(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
      case 0:
        return function () {
          return fn.apply(this, arguments);
        };
      case 1:
        return function (a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function (a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function (a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function (a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
  }

  function _pipe(f, g) {
    return function () {
      return g.call(this, f.apply(this, arguments));
    };
  }

  function _isPlaceholder(a) {
         return a != null && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a['@@functional/placeholder'] === true;
  }

  /**
   * Optimized internal one-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  /**
   * Optimized internal two-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
            return fn(a, _b);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }

  /**
   * Optimized internal three-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function (_c) {
            return fn(a, b, _c);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function (_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }

  /**
   * Tests whether or not an object is an array.
   *
   * @private
   * @param {*} val The object to test.
   * @return {Boolean} `true` if `val` is an array, `false` otherwise.
   * @example
   *
   *      _isArray([]); //=> true
   *      _isArray(null); //=> false
   *      _isArray({}); //=> false
   */
  var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

  /**
   * Tests whether or not an object is similar to an array.
   *
   * @private
   * @category Type
   * @category List
   * @sig * -> Boolean
   * @param {*} x The object to test.
   * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
   * @example
   *
   *      _isArrayLike([]); //=> true
   *      _isArrayLike(true); //=> false
   *      _isArrayLike({}); //=> false
   *      _isArrayLike({length: 10}); //=> false
   *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
   */
  var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {
      return false;
    }
    if (_isString(x)) {
      return false;
    }
    if (x.nodeType === 1) {
      return !!x.length;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });

  var XWrap = /*#__PURE__*/function () {
    function XWrap(fn) {
      this.f = fn;
    }
    XWrap.prototype['@@transducer/init'] = function () {
      throw new Error('init not implemented on XWrap');
    };
    XWrap.prototype['@@transducer/result'] = function (acc) {
      return acc;
    };
    XWrap.prototype['@@transducer/step'] = function (acc, x) {
      return this.f(acc, x);
    };

    return XWrap;
  }();

  function _xwrap(fn) {
    return new XWrap(fn);
  }

  /**
   * Creates a function that is bound to a context.
   * Note: `R.bind` does not provide the additional argument-binding capabilities of
   * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @category Object
   * @sig (* -> *) -> {*} -> (* -> *)
   * @param {Function} fn The function to bind to context
   * @param {Object} thisObj The context to bind `fn` to
   * @return {Function} A function that will execute in the context of `thisObj`.
   * @see R.partial
   * @example
   *
   *      var log = R.bind(console.log, console);
   *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
   *      // logs {a: 2}
   * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
   */
  var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

  function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  }

  /**
   * Returns a single item by iterating through the list, successively calling
   * the iterator function and passing it an accumulator value and the current
   * value from the array, and then passing the result to the next call.
   *
   * The iterator function receives two values: *(acc, value)*. It may use
   * [`R.reduced`](#reduced) to shortcut the iteration.
   *
   * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
   * is *(value, acc)*.
   *
   * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
   * arrays), unlike the native `Array.prototype.reduce` method. For more details
   * on this behavior, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
   *
   * Dispatches to the `reduce` method of the third argument, if present. When
   * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
   * shortcuting, as this is not implemented by `reduce`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduced, R.addIndex, R.reduceRight
   * @example
   *
   *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
   *      //          -               -10
   *      //         / \              / \
   *      //        -   4           -6   4
   *      //       / \              / \
   *      //      -   3   ==>     -3   3
   *      //     / \              / \
   *      //    -   2           -1   2
   *      //   / \              / \
   *      //  0   1            0   1
   *
   * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
   */
  var reduce$1 = /*#__PURE__*/_curry3(_reduce);

  /**
   * This checks whether a function has a [methodname] function. If it isn't an
   * array it will execute that function otherwise it will default to the ramda
   * implementation.
   *
   * @private
   * @param {Function} fn ramda implemtation
   * @param {String} methodname property to check for a custom implementation
   * @return {Object} Whatever the return value of the method is.
   */
  function _checkForMethod(methodname, fn) {
    return function () {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  /**
   * Returns the elements of the given list or string (or object with a `slice`
   * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
   *
   * Dispatches to the `slice` method of the third argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @sig Number -> Number -> String -> String
   * @param {Number} fromIndex The start index (inclusive).
   * @param {Number} toIndex The end index (exclusive).
   * @param {*} list
   * @return {*}
   * @example
   *
   *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
   *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
   *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
   *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
   *      R.slice(0, 3, 'ramda');                     //=> 'ram'
   */
  var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));

  /**
   * Returns all but the first element of the given list or string (or object
   * with a `tail` method).
   *
   * Dispatches to the `slice` method of the first argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.head, R.init, R.last
   * @example
   *
   *      R.tail([1, 2, 3]);  //=> [2, 3]
   *      R.tail([1, 2]);     //=> [2]
   *      R.tail([1]);        //=> []
   *      R.tail([]);         //=> []
   *
   *      R.tail('abc');  //=> 'bc'
   *      R.tail('ab');   //=> 'b'
   *      R.tail('a');    //=> ''
   *      R.tail('');     //=> ''
   */
  var tail$1 = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));

  /**
   * Performs left-to-right function composition. The leftmost function may have
   * any arity; the remaining functions must be unary.
   *
   * In some libraries this function is named `sequence`.
   *
   * **Note:** The result of pipe is not automatically curried.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function}
   * @see R.compose
   * @example
   *
   *      var f = R.pipe(Math.pow, R.negate, R.inc);
   *
   *      f(3, 4); // -(3^4) + 1
   * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
   */
  function pipe() {
    if (arguments.length === 0) {
      throw new Error('pipe requires at least one argument');
    }
    return _arity(arguments[0].length, reduce$1(_pipe, arguments[0], tail$1(arguments)));
  }

  /**
   * Returns a new list or string with the elements or characters in reverse
   * order.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {Array|String} list
   * @return {Array|String}
   * @example
   *
   *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
   *      R.reverse([1, 2]);     //=> [2, 1]
   *      R.reverse([1]);        //=> [1]
   *      R.reverse([]);         //=> []
   *
   *      R.reverse('abc');      //=> 'cba'
   *      R.reverse('ab');       //=> 'ba'
   *      R.reverse('a');        //=> 'a'
   *      R.reverse('');         //=> ''
   */
  var reverse = /*#__PURE__*/_curry1(function reverse(list) {
    return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
  });

  /**
   * Performs right-to-left function composition. The rightmost function may have
   * any arity; the remaining functions must be unary.
   *
   * **Note:** The result of compose is not automatically curried.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   * @see R.pipe
   * @example
   *
   *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
   *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
   *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
   *
   *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
   *
   * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
   */
  function compose$1() {
    if (arguments.length === 0) {
      throw new Error('compose requires at least one argument');
    }
    return pipe.apply(this, reverse(arguments));
  }

  var entry = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyIDEyKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM0OEExRTYiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMC4yIDguNjQ5bC44NDktLjg0OSA0LjAyNCA0LjAyNC00LjAyNCA0LjAyNUwxMC4yIDE1bDMuMTc2LTMuMTc2eiIvPgogICAgPC9nPgo8L3N2Zz4=';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".enter:disabled {\n  cursor: not-allowed;\n  -webkit-filter: grayscale(100%) !important;\n          filter: grayscale(100%) !important;\n  -webkit-transform: none !important;\n          transform: none !important;\n}\n\n.enter:hover:not(:disabled) {\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n  -webkit-filter: brightness(var(--darken-hover, 95%));\n          filter: brightness(var(--darken-hover, 95%));\n}\n\n.enter:active:not(:disabled) {\n  -webkit-filter: brightness(85%);\n          filter: brightness(85%);\n  -webkit-filter: brightness(var(--darken-active, 85%));\n          filter: brightness(var(--darken-active, 85%));\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n}\n";
  styleInject(css);

  var _templateObject$1 = taggedTemplateLiteral(['\n  <button\n    class=\'enter\'\n    disabled=', '\n  >', '</button>\n'], ['\n  <button\n    class=\'enter\'\n    disabled=', '\n  >', '</button>\n']),
      _templateObject2$1 = taggedTemplateLiteral(['<img src=\'', '\' />'], ['<img src=\'', '\' />']);

  var button = function button(_ref) {
    var disabled = _ref.disabled,
        children = _ref.children;
    return html$1(_templateObject$1, disabled, children || html$1(_templateObject2$1, entry));
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var nativeShadow = !(window['ShadyDOM'] && window['ShadyDOM']['inUse']);
  var nativeCssVariables_ = void 0;

  /**
   * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
   */
  function calcCssVariables(settings) {
    if (settings && settings['shimcssproperties']) {
      nativeCssVariables_ = false;
    } else {
      // chrome 49 has semi-working css vars, check if box-shadow works
      // safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
      // However, shim css custom properties are only supported with ShadyDOM enabled,
      // so fall back on native if we do not detect ShadyDOM
      // Edge 15: custom properties used in ::before and ::after will also be used in the parent element
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
      nativeCssVariables_ = nativeShadow || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'));
    }
  }

  if (window.ShadyCSS && window.ShadyCSS.nativeCss !== undefined) {
    nativeCssVariables_ = window.ShadyCSS.nativeCss;
  } else if (window.ShadyCSS) {
    calcCssVariables(window.ShadyCSS);
    // reset window variable to let ShadyCSS API take its place
    window.ShadyCSS = undefined;
  } else {
    calcCssVariables(window['WebComponents'] && window['WebComponents']['flags']);
  }

  // Hack for type error under new type inference which doesn't like that
  // nativeCssVariables is updated in a function and assigns the type
  // `function(): ?` instead of `boolean`.
  var nativeCssVariables = /** @type {boolean} */nativeCssVariables_;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @unrestricted */

  var StyleNode = function StyleNode() {
    classCallCheck(this, StyleNode);

    /** @type {number} */
    this['start'] = 0;
    /** @type {number} */
    this['end'] = 0;
    /** @type {StyleNode} */
    this['previous'] = null;
    /** @type {StyleNode} */
    this['parent'] = null;
    /** @type {Array<StyleNode>} */
    this['rules'] = null;
    /** @type {string} */
    this['parsedCssText'] = '';
    /** @type {string} */
    this['cssText'] = '';
    /** @type {boolean} */
    this['atRule'] = false;
    /** @type {number} */
    this['type'] = 0;
    /** @type {string} */
    this['keyframesName'] = '';
    /** @type {string} */
    this['selector'] = '';
    /** @type {string} */
    this['parsedSelector'] = '';
  };

  // given a string of css, return a simple rule tree
  /**
   * @param {string} text
   * @return {StyleNode}
   */
  function parse(text) {
    text = clean(text);
    return parseCss(lex(text), text);
  }

  // remove stuff we don't care about that may hinder parsing
  /**
   * @param {string} cssText
   * @return {string}
   */
  function clean(cssText) {
    return cssText.replace(RX.comments, '').replace(RX.port, '');
  }

  // super simple {...} lexer that returns a node tree
  /**
   * @param {string} text
   * @return {StyleNode}
   */
  function lex(text) {
    var root = new StyleNode();
    root['start'] = 0;
    root['end'] = text.length;
    var n = root;
    for (var i = 0, l = text.length; i < l; i++) {
      if (text[i] === OPEN_BRACE) {
        if (!n['rules']) {
          n['rules'] = [];
        }
        var p = n;
        var previous = p['rules'][p['rules'].length - 1] || null;
        n = new StyleNode();
        n['start'] = i + 1;
        n['parent'] = p;
        n['previous'] = previous;
        p['rules'].push(n);
      } else if (text[i] === CLOSE_BRACE) {
        n['end'] = i + 1;
        n = n['parent'] || root;
      }
    }
    return root;
  }

  // add selectors/cssText to node tree
  /**
   * @param {StyleNode} node
   * @param {string} text
   * @return {StyleNode}
   */
  function parseCss(node, text) {
    var t = text.substring(node['start'], node['end'] - 1);
    node['parsedCssText'] = node['cssText'] = t.trim();
    if (node['parent']) {
      var ss = node['previous'] ? node['previous']['end'] : node['parent']['start'];
      t = text.substring(ss, node['start'] - 1);
      t = _expandUnicodeEscapes(t);
      t = t.replace(RX.multipleSpaces, ' ');
      // TODO(sorvell): ad hoc; make selector include only after last ;
      // helps with mixin syntax
      t = t.substring(t.lastIndexOf(';') + 1);
      var s = node['parsedSelector'] = node['selector'] = t.trim();
      node['atRule'] = s.indexOf(AT_START) === 0;
      // note, support a subset of rule types...
      if (node['atRule']) {
        if (s.indexOf(MEDIA_START) === 0) {
          node['type'] = types.MEDIA_RULE;
        } else if (s.match(RX.keyframesRule)) {
          node['type'] = types.KEYFRAMES_RULE;
          node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
        }
      } else {
        if (s.indexOf(VAR_START) === 0) {
          node['type'] = types.MIXIN_RULE;
        } else {
          node['type'] = types.STYLE_RULE;
        }
      }
    }
    var r$ = node['rules'];
    if (r$) {
      for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
        parseCss(r, text);
      }
    }
    return node;
  }

  /**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */
  function _expandUnicodeEscapes(s) {
    return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
      var code = arguments[1],
          repeat = 6 - code.length;
      while (repeat--) {
        code = '0' + code;
      }
      return '\\' + code;
    });
  }

  /**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */
  function stringify(node, preserveProperties) {
    var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    // calc rule cssText
    var cssText = '';
    if (node['cssText'] || node['rules']) {
      var r$ = node['rules'];
      if (r$ && !_hasMixinRules(r$)) {
        for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
          cssText = stringify(r, preserveProperties, cssText);
        }
      } else {
        cssText = preserveProperties ? node['cssText'] : removeCustomProps(node['cssText']);
        cssText = cssText.trim();
        if (cssText) {
          cssText = '  ' + cssText + '\n';
        }
      }
    }
    // emit rule if there is cssText
    if (cssText) {
      if (node['selector']) {
        text += node['selector'] + ' ' + OPEN_BRACE + '\n';
      }
      text += cssText;
      if (node['selector']) {
        text += CLOSE_BRACE + '\n\n';
      }
    }
    return text;
  }

  /**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */
  function _hasMixinRules(rules) {
    var r = rules[0];
    return Boolean(r) && Boolean(r['selector']) && r['selector'].indexOf(VAR_START) === 0;
  }

  /**
   * @param {string} cssText
   * @return {string}
   */
  function removeCustomProps(cssText) {
    cssText = removeCustomPropAssignment(cssText);
    return removeCustomPropApply(cssText);
  }

  /**
   * @param {string} cssText
   * @return {string}
   */
  function removeCustomPropAssignment(cssText) {
    return cssText.replace(RX.customProp, '').replace(RX.mixinProp, '');
  }

  /**
   * @param {string} cssText
   * @return {string}
   */
  function removeCustomPropApply(cssText) {
    return cssText.replace(RX.mixinApply, '').replace(RX.varApply, '');
  }

  /** @enum {number} */
  var types = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7,
    MEDIA_RULE: 4,
    MIXIN_RULE: 1000
  };

  var OPEN_BRACE = '{';
  var CLOSE_BRACE = '}';

  // helper regexp's
  var RX = {
    comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
  };

  var VAR_START = '--';
  var MEDIA_START = '@media';
  var AT_START = '@';

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var VAR_ASSIGN = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
  var MIXIN_MATCH = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
  var MEDIA_MATCH = /@media\s(.*)/;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @type {!Set<string>} */

  var styleTextSet = new Set();

  var scopingAttribute = 'shady-unscoped';

  /**
   * Add a specifically-marked style to the document directly, and only one copy of that style.
   *
   * @param {!HTMLStyleElement} style
   * @return {undefined}
   */
  function processUnscopedStyle(style) {
    var text = style.textContent;
    if (!styleTextSet.has(text)) {
      styleTextSet.add(text);
      var newStyle = style.cloneNode(true);
      document.head.appendChild(newStyle);
    }
  }

  /**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */
  function isUnscopedStyle(style) {
    return style.hasAttribute(scopingAttribute);
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @param {string|StyleNode} rules
   * @param {function(StyleNode)=} callback
   * @return {string}
   */
  function toCssText(rules, callback) {
    if (!rules) {
      return '';
    }
    if (typeof rules === 'string') {
      rules = parse(rules);
    }
    if (callback) {
      forEachRule(rules, callback);
    }
    return stringify(rules, nativeCssVariables);
  }

  /**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */
  function rulesForStyle(style) {
    if (!style['__cssRules'] && style.textContent) {
      style['__cssRules'] = parse(style.textContent);
    }
    return style['__cssRules'] || null;
  }

  /**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */
  function forEachRule(node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
    if (!node) {
      return;
    }
    var skipRules = false;
    var type = node['type'];
    if (onlyActiveRules) {
      if (type === types.MEDIA_RULE) {
        var matchMedia = node['selector'].match(MEDIA_MATCH);
        if (matchMedia) {
          // if rule is a non matching @media rule, skip subrules
          if (!window.matchMedia(matchMedia[1]).matches) {
            skipRules = true;
          }
        }
      }
    }
    if (type === types.STYLE_RULE) {
      styleRuleCallback(node);
    } else if (keyframesRuleCallback && type === types.KEYFRAMES_RULE) {
      keyframesRuleCallback(node);
    } else if (type === types.MIXIN_RULE) {
      skipRules = true;
    }
    var r$ = node['rules'];
    if (r$ && !skipRules) {
      for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
        forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
      }
    }
  }

  /**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */
  function findMatchingParen(text, start) {
    var level = 0;
    for (var i = start, l = text.length; i < l; i++) {
      if (text[i] === '(') {
        level++;
      } else if (text[i] === ')') {
        if (--level === 0) {
          return i;
        }
      }
    }
    return -1;
  }

  /**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */
  function processVariableAndFallback(str, callback) {
    // find 'var('
    var start = str.indexOf('var(');
    if (start === -1) {
      // no var?, everything is prefix
      return callback(str, '', '', '');
    }
    //${prefix}var(${inner})${suffix}
    var end = findMatchingParen(str, start + 3);
    var inner = str.substring(start + 4, end);
    var prefix = str.substring(0, start);
    // suffix may have other variables
    var suffix = processVariableAndFallback(str.substring(end + 1), callback);
    var comma = inner.indexOf(',');
    // value and fallback args should be trimmed to match in property lookup
    if (comma === -1) {
      // variable, no fallback
      return callback(prefix, inner.trim(), '', suffix);
    }
    // var(${value},${fallback})
    var value = inner.substring(0, comma).trim();
    var fallback = inner.substring(comma + 1).trim();
    return callback(prefix, value, fallback, suffix);
  }

  /**
   * @param {Element | {is: string, extends: string}} element
   * @return {{is: string, typeExtension: string}}
   */
  function getIsExtends(element) {
    var localName = element['localName'];
    var is = '',
        typeExtension = '';
    /*
    NOTE: technically, this can be wrong for certain svg elements
    with `-` in the name like `<font-face>`
    */
    if (localName) {
      if (localName.indexOf('-') > -1) {
        is = localName;
      } else {
        typeExtension = localName;
        is = element.getAttribute && element.getAttribute('is') || '';
      }
    } else {
      is = /** @type {?} */element.is;
      typeExtension = /** @type {?} */element.extends;
    }
    return { is: is, typeExtension: typeExtension };
  }

  /**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */
  function gatherStyleText(element) {
    /** @type {!Array<string>} */
    var styleTextParts = [];
    var styles = /** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll('style');
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      if (isUnscopedStyle(style)) {
        if (!nativeShadow) {
          processUnscopedStyle(style);
          style.parentNode.removeChild(style);
        }
      } else {
        styleTextParts.push(style.textContent);
        style.parentNode.removeChild(style);
      }
    }
    return styleTextParts.join('').trim();
  }

  var CSS_BUILD_ATTR = 'css-build';

  /**
   * Return the polymer-css-build "build type" applied to this element
   *
   * @param {!HTMLElement} element
   * @return {string} Can be "", "shady", or "shadow"
   */
  function getCssBuild(element) {
    if (element.__cssBuild === undefined) {
      // try attribute first, as it is the common case
      var attrValue = element.getAttribute(CSS_BUILD_ATTR);
      if (attrValue) {
        element.__cssBuild = attrValue;
      } else {
        var buildComment = getBuildComment(element);
        if (buildComment !== '') {
          // remove build comment so it is not needlessly copied into every element instance
          removeBuildComment(element);
        }
        element.__cssBuild = buildComment;
      }
    }
    return element.__cssBuild || '';
  }

  /**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  function elementHasBuiltCss(element) {
    return getCssBuild(element) !== '';
  }

  /**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */
  function getBuildComment(element) {
    var buildComment = element.localName === 'template' ? element.content.firstChild : element.firstChild;
    if (buildComment instanceof Comment) {
      var commentParts = buildComment.textContent.trim().split(':');
      if (commentParts[0] === CSS_BUILD_ATTR) {
        return commentParts[1];
      }
    }
    return '';
  }

  /**
   * @param {!HTMLElement} element
   */
  function removeBuildComment(element) {
    var buildComment = element.localName === 'template' ? element.content.firstChild : element.firstChild;
    buildComment.parentNode.removeChild(buildComment);
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @param {Element} element
   * @param {Object=} properties
   */
  function updateNativeProperties(element, properties) {
    // remove previous properties
    for (var p in properties) {
      // NOTE: for bc with shim, don't apply null values.
      if (p === null) {
        element.style.removeProperty(p);
      } else {
        element.style.setProperty(p, properties[p]);
      }
    }
  }

  /**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */
  function getComputedStyleValue(element, property) {
    /**
     * @const {string}
     */
    var value = window.getComputedStyle(element).getPropertyValue(property);
    if (!value) {
      return '';
    } else {
      return value.trim();
    }
  }

  /**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */
  function detectMixin(cssText) {
    var has = MIXIN_MATCH.test(cssText) || VAR_ASSIGN.test(cssText);
    // reset state of the regexes
    MIXIN_MATCH.lastIndex = 0;
    VAR_ASSIGN.lastIndex = 0;
    return has;
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var APPLY_NAME_CLEAN = /;\s*/m;
  var INITIAL_INHERIT = /^\s*(initial)|(inherit)\s*$/;
  var IMPORTANT = /\s*!important/;

  // separator used between mixin-name and mixin-property-name when producing properties
  // NOTE: plain '-' may cause collisions in user styles
  var MIXIN_VAR_SEP = '_-_';

  // map of mixin to property names
  // --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}

  var MixinMap = function () {
    function MixinMap() {
      classCallCheck(this, MixinMap);

      /** @type {!Object<string, !MixinMapEntry>} */
      this._map = {};
    }
    /**
     * @param {string} name
     * @param {!PropertyEntry} props
     */


    createClass(MixinMap, [{
      key: 'set',
      value: function set$$1(name, props) {
        name = name.trim();
        this._map[name] = {
          properties: props,
          dependants: {}
        };
      }
      /**
       * @param {string} name
       * @return {MixinMapEntry}
       */

    }, {
      key: 'get',
      value: function get$$1(name) {
        name = name.trim();
        return this._map[name] || null;
      }
    }]);
    return MixinMap;
  }();

  /**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */


  var invalidCallback = null;

  /** @unrestricted */

  var ApplyShim = function () {
    function ApplyShim() {
      classCallCheck(this, ApplyShim);

      /** @type {?string} */
      this._currentElement = null;
      /** @type {HTMLMetaElement} */
      this._measureElement = null;
      this._map = new MixinMap();
    }
    /**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */


    createClass(ApplyShim, [{
      key: 'detectMixin',
      value: function detectMixin$$1(cssText) {
        return detectMixin(cssText);
      }

      /**
       * Gather styles into one style for easier processing
       * @param {!HTMLTemplateElement} template
       * @return {HTMLStyleElement}
       */

    }, {
      key: 'gatherStyles',
      value: function gatherStyles(template) {
        var styleText = gatherStyleText(template.content);
        if (styleText) {
          var style = /** @type {!HTMLStyleElement} */document.createElement('style');
          style.textContent = styleText;
          template.content.insertBefore(style, template.content.firstChild);
          return style;
        }
        return null;
      }
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @return {StyleNode}
       */

    }, {
      key: 'transformTemplate',
      value: function transformTemplate(template, elementName) {
        if (template._gatheredStyle === undefined) {
          template._gatheredStyle = this.gatherStyles(template);
        }
        /** @type {HTMLStyleElement} */
        var style = template._gatheredStyle;
        return style ? this.transformStyle(style, elementName) : null;
      }
      /**
       * @param {!HTMLStyleElement} style
       * @param {string} elementName
       * @return {StyleNode}
       */

    }, {
      key: 'transformStyle',
      value: function transformStyle(style) {
        var elementName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var ast = rulesForStyle(style);
        this.transformRules(ast, elementName);
        style.textContent = toCssText(ast);
        return ast;
      }
      /**
       * @param {!HTMLStyleElement} style
       * @return {StyleNode}
       */

    }, {
      key: 'transformCustomStyle',
      value: function transformCustomStyle(style) {
        var _this = this;

        var ast = rulesForStyle(style);
        forEachRule(ast, function (rule) {
          if (rule['selector'] === ':root') {
            rule['selector'] = 'html';
          }
          _this.transformRule(rule);
        });
        style.textContent = toCssText(ast);
        return ast;
      }
      /**
       * @param {StyleNode} rules
       * @param {string} elementName
       */

    }, {
      key: 'transformRules',
      value: function transformRules(rules, elementName) {
        var _this2 = this;

        this._currentElement = elementName;
        forEachRule(rules, function (r) {
          _this2.transformRule(r);
        });
        this._currentElement = null;
      }
      /**
       * @param {!StyleNode} rule
       */

    }, {
      key: 'transformRule',
      value: function transformRule(rule) {
        rule['cssText'] = this.transformCssText(rule['parsedCssText'], rule);
        // :root was only used for variable assignment in property shim,
        // but generates invalid selectors with real properties.
        // replace with `:host > *`, which serves the same effect
        if (rule['selector'] === ':root') {
          rule['selector'] = ':host > *';
        }
      }
      /**
       * @param {string} cssText
       * @param {!StyleNode} rule
       * @return {string}
       */

    }, {
      key: 'transformCssText',
      value: function transformCssText(cssText, rule) {
        var _this3 = this;

        // produce variables
        cssText = cssText.replace(VAR_ASSIGN, function (matchText, propertyName, valueProperty, valueMixin) {
          return _this3._produceCssProperties(matchText, propertyName, valueProperty, valueMixin, rule);
        });
        // consume mixins
        return this._consumeCssProperties(cssText, rule);
      }
      /**
       * @param {string} property
       * @return {string}
       */

    }, {
      key: '_getInitialValueForProperty',
      value: function _getInitialValueForProperty(property) {
        if (!this._measureElement) {
          this._measureElement = /** @type {HTMLMetaElement} */document.createElement('meta');
          this._measureElement.setAttribute('apply-shim-measure', '');
          this._measureElement.style.all = 'initial';
          document.head.appendChild(this._measureElement);
        }
        return window.getComputedStyle(this._measureElement).getPropertyValue(property);
      }
      /**
       * Walk over all rules before this rule to find fallbacks for mixins
       *
       * @param {!StyleNode} startRule
       * @return {!Object}
       */

    }, {
      key: '_fallbacksFromPreviousRules',
      value: function _fallbacksFromPreviousRules(startRule) {
        var _this4 = this;

        // find the "top" rule
        var topRule = startRule;
        while (topRule['parent']) {
          topRule = topRule['parent'];
        }
        var fallbacks = {};
        var seenStartRule = false;
        forEachRule(topRule, function (r) {
          // stop when we hit the input rule
          seenStartRule = seenStartRule || r === startRule;
          if (seenStartRule) {
            return;
          }
          // NOTE: Only matching selectors are "safe" for this fallback processing
          // It would be prohibitive to run `matchesSelector()` on each selector,
          // so we cheat and only check if the same selector string is used, which
          // guarantees things like specificity matching
          if (r['selector'] === startRule['selector']) {
            Object.assign(fallbacks, _this4._cssTextToMap(r['parsedCssText']));
          }
        });
        return fallbacks;
      }
      /**
       * replace mixin consumption with variable consumption
       * @param {string} text
       * @param {!StyleNode=} rule
       * @return {string}
       */

    }, {
      key: '_consumeCssProperties',
      value: function _consumeCssProperties(text, rule) {
        /** @type {Array} */
        var m = null;
        // loop over text until all mixins with defintions have been applied
        while (m = MIXIN_MATCH.exec(text)) {
          var matchText = m[0];
          var mixinName = m[1];
          var idx = m.index;
          // collect properties before apply to be "defaults" if mixin might override them
          // match includes a "prefix", so find the start and end positions of @apply
          var applyPos = idx + matchText.indexOf('@apply');
          var afterApplyPos = idx + matchText.length;
          // find props defined before this @apply
          var textBeforeApply = text.slice(0, applyPos);
          var textAfterApply = text.slice(afterApplyPos);
          var defaults$$1 = rule ? this._fallbacksFromPreviousRules(rule) : {};
          Object.assign(defaults$$1, this._cssTextToMap(textBeforeApply));
          var replacement = this._atApplyToCssProperties(mixinName, defaults$$1);
          // use regex match position to replace mixin, keep linear processing time
          text = '' + textBeforeApply + replacement + textAfterApply;
          // move regex search to _after_ replacement
          MIXIN_MATCH.lastIndex = idx + replacement.length;
        }
        return text;
      }
      /**
       * produce variable consumption at the site of mixin consumption
       * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
       * Example:
       *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
       *
       * @param {string} mixinName
       * @param {Object} fallbacks
       * @return {string}
       */

    }, {
      key: '_atApplyToCssProperties',
      value: function _atApplyToCssProperties(mixinName, fallbacks) {
        mixinName = mixinName.replace(APPLY_NAME_CLEAN, '');
        var vars = [];
        var mixinEntry = this._map.get(mixinName);
        // if we depend on a mixin before it is created
        // make a sentinel entry in the map to add this element as a dependency for when it is defined.
        if (!mixinEntry) {
          this._map.set(mixinName, {});
          mixinEntry = this._map.get(mixinName);
        }
        if (mixinEntry) {
          if (this._currentElement) {
            mixinEntry.dependants[this._currentElement] = true;
          }
          var p = void 0,
              parts = void 0,
              f = void 0;
          var properties = mixinEntry.properties;
          for (p in properties) {
            f = fallbacks && fallbacks[p];
            parts = [p, ': var(', mixinName, MIXIN_VAR_SEP, p];
            if (f) {
              parts.push(',', f.replace(IMPORTANT, ''));
            }
            parts.push(')');
            if (IMPORTANT.test(properties[p])) {
              parts.push(' !important');
            }
            vars.push(parts.join(''));
          }
        }
        return vars.join('; ');
      }

      /**
       * @param {string} property
       * @param {string} value
       * @return {string}
       */

    }, {
      key: '_replaceInitialOrInherit',
      value: function _replaceInitialOrInherit(property, value) {
        var match = INITIAL_INHERIT.exec(value);
        if (match) {
          if (match[1]) {
            // initial
            // replace `initial` with the concrete initial value for this property
            value = this._getInitialValueForProperty(property);
          } else {
            // inherit
            // with this purposfully illegal value, the variable will be invalid at
            // compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
            // and for inheriting values, will behave similarly
            // we cannot support the same behavior for non inheriting values like 'border'
            value = 'apply-shim-inherit';
          }
        }
        return value;
      }

      /**
       * "parse" a mixin definition into a map of properties and values
       * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
       * @param {string} text
       * @return {!Object<string, string>}
       */

    }, {
      key: '_cssTextToMap',
      value: function _cssTextToMap(text) {
        var props = text.split(';');
        var property = void 0,
            value = void 0;
        var out = {};
        for (var i = 0, p, sp; i < props.length; i++) {
          p = props[i];
          if (p) {
            sp = p.split(':');
            // ignore lines that aren't definitions like @media
            if (sp.length > 1) {
              property = sp[0].trim();
              // some properties may have ':' in the value, like data urls
              value = this._replaceInitialOrInherit(property, sp.slice(1).join(':'));
              out[property] = value;
            }
          }
        }
        return out;
      }

      /**
       * @param {MixinMapEntry} mixinEntry
       */

    }, {
      key: '_invalidateMixinEntry',
      value: function _invalidateMixinEntry(mixinEntry) {
        if (!invalidCallback) {
          return;
        }
        for (var elementName in mixinEntry.dependants) {
          if (elementName !== this._currentElement) {
            invalidCallback(elementName);
          }
        }
      }

      /**
       * @param {string} matchText
       * @param {string} propertyName
       * @param {?string} valueProperty
       * @param {?string} valueMixin
       * @param {!StyleNode} rule
       * @return {string}
       */

    }, {
      key: '_produceCssProperties',
      value: function _produceCssProperties(matchText, propertyName, valueProperty, valueMixin, rule) {
        var _this5 = this;

        // handle case where property value is a mixin
        if (valueProperty) {
          // form: --mixin2: var(--mixin1), where --mixin1 is in the map
          processVariableAndFallback(valueProperty, function (prefix, value) {
            if (value && _this5._map.get(value)) {
              valueMixin = '@apply ' + value + ';';
            }
          });
        }
        if (!valueMixin) {
          return matchText;
        }
        var mixinAsProperties = this._consumeCssProperties('' + valueMixin, rule);
        var prefix = matchText.slice(0, matchText.indexOf('--'));
        var mixinValues = this._cssTextToMap(mixinAsProperties);
        var combinedProps = mixinValues;
        var mixinEntry = this._map.get(propertyName);
        var oldProps = mixinEntry && mixinEntry.properties;
        if (oldProps) {
          // NOTE: since we use mixin, the map of properties is updated here
          // and this is what we want.
          combinedProps = Object.assign(Object.create(oldProps), mixinValues);
        } else {
          this._map.set(propertyName, combinedProps);
        }
        var out = [];
        var p = void 0,
            v = void 0;
        // set variables defined by current mixin
        var needToInvalidate = false;
        for (p in combinedProps) {
          v = mixinValues[p];
          // if property not defined by current mixin, set initial
          if (v === undefined) {
            v = 'initial';
          }
          if (oldProps && !(p in oldProps)) {
            needToInvalidate = true;
          }
          out.push('' + propertyName + MIXIN_VAR_SEP + p + ': ' + v);
        }
        if (needToInvalidate) {
          this._invalidateMixinEntry(mixinEntry);
        }
        if (mixinEntry) {
          mixinEntry.properties = combinedProps;
        }
        // because the mixinMap is global, the mixin might conflict with
        // a different scope's simple variable definition:
        // Example:
        // some style somewhere:
        // --mixin1:{ ... }
        // --mixin2: var(--mixin1);
        // some other element:
        // --mixin1: 10px solid red;
        // --foo: var(--mixin1);
        // In this case, we leave the original variable definition in place.
        if (valueProperty) {
          prefix = matchText + ';' + prefix;
        }
        return '' + prefix + out.join('; ') + ';';
      }
    }]);
    return ApplyShim;
  }();

  /* exports */


  ApplyShim.prototype['detectMixin'] = ApplyShim.prototype.detectMixin;
  ApplyShim.prototype['transformStyle'] = ApplyShim.prototype.transformStyle;
  ApplyShim.prototype['transformCustomStyle'] = ApplyShim.prototype.transformCustomStyle;
  ApplyShim.prototype['transformRules'] = ApplyShim.prototype.transformRules;
  ApplyShim.prototype['transformRule'] = ApplyShim.prototype.transformRule;
  ApplyShim.prototype['transformTemplate'] = ApplyShim.prototype.transformTemplate;
  ApplyShim.prototype['_separator'] = MIXIN_VAR_SEP;
  Object.defineProperty(ApplyShim.prototype, 'invalidCallback', {
    /** @return {?function(string)} */
    get: function get$$1() {
      return invalidCallback;
    },

    /** @param {?function(string)} cb */
    set: function set$$1(cb) {
      invalidCallback = cb;
    }
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @const {!Object<string, !HTMLTemplateElement>}
   */

  var templateMap = {};

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
   * Utilities for handling invalidating apply-shim mixins for a given template.
   *
   * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
   * The template
   */

  /** @const {string} */
  var CURRENT_VERSION = '_applyShimCurrentVersion';

  /** @const {string} */
  var NEXT_VERSION = '_applyShimNextVersion';

  /** @const {string} */
  var VALIDATING_VERSION = '_applyShimValidatingVersion';

  /**
   * @const {Promise<void>}
   */
  var promise = Promise.resolve();

  /**
   * @param {string} elementName
   */
  function invalidate(elementName) {
    var template = templateMap[elementName];
    if (template) {
      invalidateTemplate(template);
    }
  }

  /**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */
  function invalidateTemplate(template) {
    // default the current version to 0
    template[CURRENT_VERSION] = template[CURRENT_VERSION] || 0;
    // ensure the "validating for" flag exists
    template[VALIDATING_VERSION] = template[VALIDATING_VERSION] || 0;
    // increment the next version
    template[NEXT_VERSION] = (template[NEXT_VERSION] || 0) + 1;
  }

  /**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */
  function templateIsValid(template) {
    return template[CURRENT_VERSION] === template[NEXT_VERSION];
  }

  /**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */
  function templateIsValidating(template) {
    return !templateIsValid(template) && template[VALIDATING_VERSION] === template[NEXT_VERSION];
  }

  /**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */
  function startValidatingTemplate(template) {
    // remember that the current "next version" is the reason for this validation cycle
    template[VALIDATING_VERSION] = template[NEXT_VERSION];
    // however, there only needs to be one async task to clear the counters
    if (!template._validating) {
      template._validating = true;
      promise.then(function () {
        // sync the current version to let future invalidations cause a refresh cycle
        template[CURRENT_VERSION] = template[NEXT_VERSION];
        template._validating = false;
      });
    }
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @type {Promise<void>} */

  var readyPromise = null;

  /** @type {?function(?function())} */
  var whenReady = window['HTMLImports'] && window['HTMLImports']['whenReady'] || null;

  /** @type {function()} */
  var resolveFn = void 0;

  /**
   * @param {?function()} callback
   */
  function documentWait(callback) {
    requestAnimationFrame(function () {
      if (whenReady) {
        whenReady(callback);
      } else {
        if (!readyPromise) {
          readyPromise = new Promise(function (resolve) {
            resolveFn = resolve;
          });
          if (document.readyState === 'complete') {
            resolveFn();
          } else {
            document.addEventListener('readystatechange', function () {
              if (document.readyState === 'complete') {
                resolveFn();
              }
            });
          }
        }
        readyPromise.then(function () {
          callback && callback();
        });
      }
    });
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var SEEN_MARKER = '__seenByShadyCSS';
  var CACHED_STYLE = '__shadyCSSCachedStyle';

  /** @type {?function(!HTMLStyleElement)} */
  var transformFn = null;

  /** @type {?function()} */
  var validateFn = null;

  /**
  This interface is provided to add document-level <style> elements to ShadyCSS for processing.
  These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
  In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties

  To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`

  In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
  This function will be called when calculating styles.

  An example usage of the document-level styling api can be found in `examples/document-style-lib.js`

  @unrestricted
  */

  var CustomStyleInterface = function () {
    function CustomStyleInterface() {
      classCallCheck(this, CustomStyleInterface);

      /** @type {!Array<!CustomStyleProvider>} */
      this['customStyles'] = [];
      this['enqueued'] = false;
      // NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
      documentWait(function () {
        if (window['ShadyCSS']['flushCustomStyles']) {
          window['ShadyCSS']['flushCustomStyles']();
        }
      });
    }
    /**
     * Queue a validation for new custom styles to batch style recalculations
     */


    createClass(CustomStyleInterface, [{
      key: 'enqueueDocumentValidation',
      value: function enqueueDocumentValidation() {
        if (this['enqueued'] || !validateFn) {
          return;
        }
        this['enqueued'] = true;
        documentWait(validateFn);
      }
      /**
       * @param {!HTMLStyleElement} style
       */

    }, {
      key: 'addCustomStyle',
      value: function addCustomStyle(style) {
        if (!style[SEEN_MARKER]) {
          style[SEEN_MARKER] = true;
          this['customStyles'].push(style);
          this.enqueueDocumentValidation();
        }
      }
      /**
       * @param {!CustomStyleProvider} customStyle
       * @return {HTMLStyleElement}
       */

    }, {
      key: 'getStyleForCustomStyle',
      value: function getStyleForCustomStyle(customStyle) {
        if (customStyle[CACHED_STYLE]) {
          return customStyle[CACHED_STYLE];
        }
        var style = void 0;
        if (customStyle['getStyle']) {
          style = customStyle['getStyle']();
        } else {
          style = customStyle;
        }
        return style;
      }
      /**
       * @return {!Array<!CustomStyleProvider>}
       */

    }, {
      key: 'processStyles',
      value: function processStyles() {
        var cs = this['customStyles'];
        for (var i = 0; i < cs.length; i++) {
          var customStyle = cs[i];
          if (customStyle[CACHED_STYLE]) {
            continue;
          }
          var style = this.getStyleForCustomStyle(customStyle);
          if (style) {
            // HTMLImports polyfill may have cloned the style into the main document,
            // which is referenced with __appliedElement.
            var styleToTransform = /** @type {!HTMLStyleElement} */style['__appliedElement'] || style;
            if (transformFn) {
              transformFn(styleToTransform);
            }
            customStyle[CACHED_STYLE] = styleToTransform;
          }
        }
        return cs;
      }
    }]);
    return CustomStyleInterface;
  }();


  CustomStyleInterface.prototype['addCustomStyle'] = CustomStyleInterface.prototype.addCustomStyle;
  CustomStyleInterface.prototype['getStyleForCustomStyle'] = CustomStyleInterface.prototype.getStyleForCustomStyle;
  CustomStyleInterface.prototype['processStyles'] = CustomStyleInterface.prototype.processStyles;

  Object.defineProperties(CustomStyleInterface.prototype, {
    'transformCallback': {
      /** @return {?function(!HTMLStyleElement)} */
      get: function get$$1() {
        return transformFn;
      },

      /** @param {?function(!HTMLStyleElement)} fn */
      set: function set$$1(fn) {
        transformFn = fn;
      }
    },
    'validateCallback': {
      /** @return {?function()} */
      get: function get$$1() {
        return validateFn;
      },

      /**
       * @param {?function()} fn
       * @this {CustomStyleInterface}
       */
      set: function set$$1(fn) {
        var needsEnqueue = false;
        if (!validateFn) {
          needsEnqueue = true;
        }
        validateFn = fn;
        if (needsEnqueue) {
          this.enqueueDocumentValidation();
        }
      }
    }
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @const {ApplyShim} */
  var applyShim = new ApplyShim();

  var ApplyShimInterface = function () {
    function ApplyShimInterface() {
      classCallCheck(this, ApplyShimInterface);

      /** @type {?CustomStyleInterfaceInterface} */
      this.customStyleInterface = null;
      applyShim['invalidCallback'] = invalidate;
    }

    createClass(ApplyShimInterface, [{
      key: 'ensure',
      value: function ensure() {
        var _this = this;

        if (this.customStyleInterface) {
          return;
        }
        this.customStyleInterface = window.ShadyCSS.CustomStyleInterface;
        if (this.customStyleInterface) {
          this.customStyleInterface['transformCallback'] = function (style) {
            applyShim.transformCustomStyle(style);
          };
          this.customStyleInterface['validateCallback'] = function () {
            requestAnimationFrame(function () {
              if (_this.customStyleInterface['enqueued']) {
                _this.flushCustomStyles();
              }
            });
          };
        }
      }
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */

    }, {
      key: 'prepareTemplate',
      value: function prepareTemplate(template, elementName) {
        this.ensure();
        if (elementHasBuiltCss(template)) {
          return;
        }
        templateMap[elementName] = template;
        var ast = applyShim.transformTemplate(template, elementName);
        // save original style ast to use for revalidating instances
        template['_styleAst'] = ast;
      }
    }, {
      key: 'flushCustomStyles',
      value: function flushCustomStyles() {
        this.ensure();
        if (!this.customStyleInterface) {
          return;
        }
        var styles = this.customStyleInterface['processStyles']();
        if (!this.customStyleInterface['enqueued']) {
          return;
        }
        for (var i = 0; i < styles.length; i++) {
          var cs = styles[i];
          var style = this.customStyleInterface['getStyleForCustomStyle'](cs);
          if (style) {
            applyShim.transformCustomStyle(style);
          }
        }
        this.customStyleInterface['enqueued'] = false;
      }
      /**
       * @param {HTMLElement} element
       * @param {Object=} properties
       */

    }, {
      key: 'styleSubtree',
      value: function styleSubtree(element, properties) {
        this.ensure();
        if (properties) {
          updateNativeProperties(element, properties);
        }
        if (element.shadowRoot) {
          this.styleElement(element);
          var shadowChildren = element.shadowRoot.children || element.shadowRoot.childNodes;
          for (var i = 0; i < shadowChildren.length; i++) {
            this.styleSubtree( /** @type {HTMLElement} */shadowChildren[i]);
          }
        } else {
          var children = element.children || element.childNodes;
          for (var _i = 0; _i < children.length; _i++) {
            this.styleSubtree( /** @type {HTMLElement} */children[_i]);
          }
        }
      }
      /**
       * @param {HTMLElement} element
       */

    }, {
      key: 'styleElement',
      value: function styleElement(element) {
        this.ensure();

        var _getIsExtends = getIsExtends(element),
            is = _getIsExtends.is;

        var template = templateMap[is];
        if (template && elementHasBuiltCss(template)) {
          return;
        }
        if (template && !templateIsValid(template)) {
          // only revalidate template once
          if (!templateIsValidating(template)) {
            this.prepareTemplate(template, is);
            startValidatingTemplate(template);
          }
          // update this element instance
          var root = element.shadowRoot;
          if (root) {
            var style = /** @type {HTMLStyleElement} */root.querySelector('style');
            if (style) {
              // reuse the template's style ast, it has all the original css text
              style['__cssRules'] = template['_styleAst'];
              style.textContent = toCssText(template['_styleAst']);
            }
          }
        }
      }
      /**
       * @param {Object=} properties
       */

    }, {
      key: 'styleDocument',
      value: function styleDocument(properties) {
        this.ensure();
        this.styleSubtree(document.body, properties);
      }
    }]);
    return ApplyShimInterface;
  }();

  if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var applyShimInterface = new ApplyShimInterface();
    var CustomStyleInterface$1 = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;

    /** @suppress {duplicate} */
    window.ShadyCSS = {
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplate: function prepareTemplate(template, elementName, elementExtends) {
        // eslint-disable-line no-unused-vars
        applyShimInterface.flushCustomStyles();
        applyShimInterface.prepareTemplate(template, elementName);
      },


      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplateStyles: function prepareTemplateStyles(template, elementName, elementExtends) {
        this.prepareTemplate(template, elementName, elementExtends);
      },


      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplateDom: function prepareTemplateDom(template, elementName) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLElement} element
       * @param {Object=} properties
       */
      styleSubtree: function styleSubtree(element, properties) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleSubtree(element, properties);
      },


      /**
       * @param {!HTMLElement} element
       */
      styleElement: function styleElement(element) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleElement(element);
      },


      /**
       * @param {Object=} properties
       */
      styleDocument: function styleDocument(properties) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleDocument(properties);
      },


      /**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */
      getComputedStyleValue: function getComputedStyleValue$$1(element, property) {
        return getComputedStyleValue(element, property);
      },
      flushCustomStyles: function flushCustomStyles() {
        applyShimInterface.flushCustomStyles();
      },


      nativeCss: nativeCssVariables,
      nativeShadow: nativeShadow
    };

    if (CustomStyleInterface$1) {
      window.ShadyCSS.CustomStyleInterface = CustomStyleInterface$1;
    }
  }

  window.ShadyCSS.ApplyShim = applyShim;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var CSS_URL_RX = /(url\()([^)]*)(\))/g;
  var ABS_URL = /(^\/)|(^#)|(^[\w-\d]*:)/;
  var workingURL = void 0;
  var resolveDoc = void 0;
  /**
   * Resolves the given URL against the provided `baseUri'.
   *
   * Note that this function performs no resolution for URLs that start
   * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
   * URL resolution, use `window.URL`.
   *
   * @param {string} url Input URL to resolve
   * @param {?string=} baseURI Base URI to resolve the URL against
   * @return {string} resolved URL
   */
  function resolveUrl(url, baseURI) {
    if (url && ABS_URL.test(url)) {
      return url;
    }
    // Lazy feature detection.
    if (workingURL === undefined) {
      workingURL = false;
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        workingURL = u.href === 'http://a/c%20d';
      } catch (e) {
        // silently fail
      }
    }
    if (!baseURI) {
      baseURI = document.baseURI || window.location.href;
    }
    if (workingURL) {
      return new URL(url, baseURI).href;
    }
    // Fallback to creating an anchor into a disconnected document.
    if (!resolveDoc) {
      resolveDoc = document.implementation.createHTMLDocument('temp');
      resolveDoc.base = resolveDoc.createElement('base');
      resolveDoc.head.appendChild(resolveDoc.base);
      resolveDoc.anchor = resolveDoc.createElement('a');
      resolveDoc.body.appendChild(resolveDoc.anchor);
    }
    resolveDoc.base.href = baseURI;
    resolveDoc.anchor.href = url;
    return resolveDoc.anchor.href || url;
  }

  /**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */
  function resolveCss(cssText, baseURI) {
    return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
      return pre + '\'' + resolveUrl(url.replace(/["']/g, ''), baseURI) + '\'' + post;
    });
  }

  /**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */
  function pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf('/') + 1);
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var useShadow = !window.ShadyDOM;
  var useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
  var useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback;

  /**
   * Globally settable property that is automatically assigned to
   * `ElementMixin` instances, useful for binding in templates to
   * make URL's relative to an application's root.  Defaults to the main
   * document URL, but can be overridden by users.  It may be useful to set
   * `rootPath` to provide a stable application mount path when
   * using client side routing.
   */
  var rootPath = pathFromUrl(document.baseURI || window.location.href);

  /**
   * A global callback used to sanitize any value before inserting it into the DOM. The callback signature is:
   *
   *     Polymer = {
   *       sanitizeDOMValue: function(value, name, type, node) { ... }
   *     }
   *
   * Where:
   *
   * `value` is the value to sanitize.
   * `name` is the name of an attribute or property (for example, href).
   * `type` indicates where the value is being inserted: one of property, attribute, or text.
   * `node` is the node where the value is being inserted.
   *
   * @type {(function(*,string,string,Node):*)|undefined}
   */
  var sanitizeDOMValue = undefined;

  /**
   * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
   * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
   * scrolling performance.
   * Defaults to `false` for backwards compatibility.
   */
  var passiveTouchGestures = false;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
  var INCLUDE_ATTR = 'include';
  var SHADY_UNSCOPED_ATTR = 'shady-unscoped';

  function importModule(moduleId) {
    var /** DomModule */PolymerDomModule = customElements.get('dom-module');
    if (!PolymerDomModule) {
      return null;
    }
    return PolymerDomModule.import(moduleId);
  }

  function styleForImport(importDoc) {
    // NOTE: polyfill affordance.
    // under the HTMLImports polyfill, there will be no 'body',
    // but the import pseudo-doc can be used directly.
    var container = importDoc.body ? importDoc.body : importDoc;
    var importCss = resolveCss(container.textContent, importDoc.baseURI);
    var style = document.createElement('style');
    style.textContent = importCss;
    return style;
  }

  /**
   * Returns a list of <style> elements in a space-separated list of `dom-module`s.
   *
   * @function
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
   * @this {StyleGather}
   */
  function stylesFromModules(moduleIds) {
    var modules = moduleIds.trim().split(/\s+/);
    var styles = [];
    for (var i = 0; i < modules.length; i++) {
      styles.push.apply(styles, toConsumableArray(stylesFromModule(modules[i])));
    }
    return styles;
  }

  /**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   * @this {StyleGather}
   */
  function stylesFromModule(moduleId) {
    var m = importModule(moduleId);

    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
      return [];
    }

    if (m._styles === undefined) {
      var styles = [];
      // module imports: <link rel="import" type="css">
      styles.push.apply(styles, toConsumableArray(_stylesFromModuleImports(m)));
      // include css from the first template in the module
      var template = m.querySelector('template');
      if (template) {
        styles.push.apply(styles, toConsumableArray(stylesFromTemplate(template,
        /** @type {templateWithAssetPath} */m.assetpath)));
      }

      m._styles = styles;
    }

    return m._styles;
  }

  /**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   * @this {StyleGather}
   */
  function stylesFromTemplate(template, baseURI) {
    if (!template._styles) {
      var styles = [];
      // if element is a template, get content from its .content
      var e$ = template.content.querySelectorAll('style');
      for (var i = 0; i < e$.length; i++) {
        var e = e$[i];
        // support style sharing by allowing styles to "include"
        // other dom-modules that contain styling
        var include = e.getAttribute(INCLUDE_ATTR);
        if (include) {
          styles.push.apply(styles, toConsumableArray(stylesFromModules(include).filter(function (item, index, self) {
            return self.indexOf(item) === index;
          })));
        }
        if (baseURI) {
          e.textContent = resolveCss(e.textContent, baseURI);
        }
        styles.push(e);
      }
      template._styles = styles;
    }
    return template._styles;
  }

  /**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   * @this {StyleGather}
   */
  function stylesFromModuleImports(moduleId) {
    var m = importModule(moduleId);
    return m ? _stylesFromModuleImports(m) : [];
  }

  /**
   * @this {StyleGather}
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */
  function _stylesFromModuleImports(module) {
    var styles = [];
    var p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
    for (var i = 0; i < p$.length; i++) {
      var p = p$[i];
      if (p.import) {
        var importDoc = p.import;
        var unscoped = p.hasAttribute(SHADY_UNSCOPED_ATTR);
        if (unscoped && !importDoc._unscopedStyle) {
          var style = styleForImport(importDoc);
          style.setAttribute(SHADY_UNSCOPED_ATTR, '');
          importDoc._unscopedStyle = style;
        } else if (!importDoc._style) {
          importDoc._style = styleForImport(importDoc);
        }
        styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
      }
    }
    return styles;
  }

  /**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   * @this {StyleGather}
   */
  function cssFromModules(moduleIds) {
    var modules = moduleIds.trim().split(/\s+/);
    var cssText = '';
    for (var i = 0; i < modules.length; i++) {
      cssText += cssFromModule(modules[i]);
    }
    return cssText;
  }

  /**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   * @this {StyleGather}
   */
  function cssFromModule(moduleId) {
    var m = importModule(moduleId);
    if (m && m._cssText === undefined) {
      // module imports: <link rel="import" type="css">
      var cssText = _cssFromModuleImports(m);
      // include css from the first template in the module
      var t = m.querySelector('template');
      if (t) {
        cssText += cssFromTemplate(t,
        /** @type {templateWithAssetPath} */m.assetpath);
      }
      m._cssText = cssText || null;
    }
    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
    }
    return m && m._cssText || '';
  }

  /**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   * @this {StyleGather}
   */
  function cssFromTemplate(template, baseURI) {
    var cssText = '';
    var e$ = stylesFromTemplate(template, baseURI);
    // if element is a template, get content from its .content
    for (var i = 0; i < e$.length; i++) {
      var e = e$[i];
      if (e.parentNode) {
        e.parentNode.removeChild(e);
      }
      cssText += e.textContent;
    }
    return cssText;
  }

  /**
   * @deprecated
   * @this {StyleGather}
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */
  function _cssFromModuleImports(module) {
    var cssText = '';
    var styles = _stylesFromModuleImports(module);
    for (var i = 0; i < styles.length; i++) {
      cssText += styles[i].textContent;
    }
    return cssText;
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var modules = {};
  var lcModules = {};
  function findModule(id) {
    return modules[id] || lcModules[id.toLowerCase()];
  }

  function styleOutsideTemplateCheck(inst) {
    if (inst.querySelector('style')) {
      console.warn('dom-module %s has style outside template', inst.id);
    }
  }

  /**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */
  var DomModule = function (_HTMLElement) {
    inherits(DomModule, _HTMLElement);

    function DomModule() {
      classCallCheck(this, DomModule);
      return possibleConstructorReturn(this, (DomModule.__proto__ || Object.getPrototypeOf(DomModule)).apply(this, arguments));
    }

    createClass(DomModule, [{
      key: 'attributeChangedCallback',


      /* eslint-disable no-unused-vars */
      /**
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @override
       */
      value: function attributeChangedCallback(name, old, value, namespace) {
        if (old !== value) {
          this.register();
        }
      }
      /* eslint-enable no-unused-args */

      /**
       * The absolute URL of the original location of this `dom-module`.
       *
       * This value will differ from this element's `ownerDocument` in the
       * following ways:
       * - Takes into account any `assetpath` attribute added during bundling
       *   to indicate the original location relative to the bundled location
       * - Uses the HTMLImports polyfill's `importForElement` API to ensure
       *   the path is relative to the import document's location since
       *   `ownerDocument` is not currently polyfilled
       */

    }, {
      key: 'register',


      /**
       * Registers the dom-module at a given id. This method should only be called
       * when a dom-module is imperatively created. For
       * example, `document.createElement('dom-module').register('foo')`.
       * @param {string=} id The id at which to register the dom-module.
       * @return {void}
       */
      value: function register(id) {
        id = id || this.id;
        if (id) {
          this.id = id;
          // store id separate from lowercased id so that
          // in all cases mixedCase id will stored distinctly
          // and lowercase version is a fallback
          modules[id] = this;
          lcModules[id.toLowerCase()] = this;
          styleOutsideTemplateCheck(this);
        }
      }
    }, {
      key: 'assetpath',
      get: function get$$1() {
        // Don't override existing assetpath.
        if (!this.__assetpath) {
          // note: assetpath set via an attribute must be relative to this
          // element's location; accomodate polyfilled HTMLImports
          var owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;
          var url = resolveUrl(this.getAttribute('assetpath') || '', owner.baseURI);
          this.__assetpath = pathFromUrl(url);
        }
        return this.__assetpath;
      }
    }], [{
      key: 'import',


      /**
       * Retrieves the element specified by the css `selector` in the module
       * registered by `id`. For example, this.import('foo', 'img');
       * @param {string} id The id of the dom-module in which to search.
       * @param {string=} selector The css selector by which to find the element.
       * @return {Element} Returns the element which matches `selector` in the
       * module registered at the specified `id`.
       */
      value: function _import(id, selector) {
        if (id) {
          var m = findModule(id);
          if (m && selector) {
            return m.querySelector(selector);
          }
          return m;
        }
        return null;
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ['id'];
      }
    }]);
    return DomModule;
  }(HTMLElement);

  DomModule.prototype['modules'] = modules;

  customElements.define('dom-module', DomModule);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * Example:
   *
   * ```
   * isPath('foo.bar.baz') // true
   * isPath('foo')         // false
   * ```
   *
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */
  function isPath(path) {
    return path.indexOf('.') >= 0;
  }

  /**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */
  function root(path) {
    var dotIndex = path.indexOf('.');
    if (dotIndex === -1) {
      return path;
    }
    return path.slice(0, dotIndex);
  }

  /**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */
  function isAncestor(base, path) {
    //     base.startsWith(path + '.');
    return base.indexOf(path + '.') === 0;
  }

  /**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */
  function isDescendant(base, path) {
    //     path.startsWith(base + '.');
    return path.indexOf(base + '.') === 0;
  }

  /**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */
  function translate(base, newBase, path) {
    return newBase + path.slice(base.length);
  }

  /**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   * @this {Path}
   */
  function matches(base, path) {
    return base === path || isAncestor(base, path) || isDescendant(base, path);
  }

  /**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */
  function normalize(path) {
    if (Array.isArray(path)) {
      var parts = [];
      for (var i = 0; i < path.length; i++) {
        var args = path[i].toString().split('.');
        for (var j = 0; j < args.length; j++) {
          parts.push(args[j]);
        }
      }
      return parts.join('.');
    } else {
      return path;
    }
  }

  /**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @this {Path}
   * @suppress {checkTypes}
   */
  function split(path) {
    if (Array.isArray(path)) {
      return normalize(path).split('.');
    }
    return path.toString().split('.');
  }

  /**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   * @this {Path}
   */
  function get$1(root, path, info) {
    var prop = root;
    var parts = split(path);
    // Loop over path parts[0..n-1] and dereference
    for (var i = 0; i < parts.length; i++) {
      if (!prop) {
        return;
      }
      var part = parts[i];
      prop = prop[part];
    }
    if (info) {
      info.path = parts.join('.');
    }
    return prop;
  }

  /**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   * @this {Path}
   */
  function set$1(root, path, value) {
    var prop = root;
    var parts = split(path);
    var last = parts[parts.length - 1];
    if (parts.length > 1) {
      // Loop over path parts[0..n-2] and dereference
      for (var i = 0; i < parts.length - 1; i++) {
        var part = parts[i];
        prop = prop[part];
        if (!prop) {
          return;
        }
      }
      // Set value to object at end of path
      prop[last] = value;
    } else {
      // Simple property set
      prop[path] = value;
    }
    return parts.join('.');
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var caseMap$1 = caseMap$0;

  // Save map of native properties; this forms a blacklist or properties
  // that won't have their values "saved" by `saveAccessorValue`, since
  // reading from an HTMLElement accessor from the context of a prototype throws
  var nativeProperties = {};
  var proto = HTMLElement.prototype;
  while (proto) {
    var props = Object.getOwnPropertyNames(proto);
    for (var i = 0; i < props.length; i++) {
      nativeProperties[props[i]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  /**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */
  function saveAccessorValue(model, property) {
    // Don't read/store value for any native properties since they could throw
    if (!nativeProperties[property]) {
      var value = model[property];
      if (value !== undefined) {
        if (model.__data) {
          // Adding accessor to instance; update the property
          // It is the user's responsibility to call _flushProperties
          model._setPendingProperty(property, value);
        } else {
          // Adding accessor to proto; save proto's value for instance-time use
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }
          model.__dataProto[property] = value;
        }
      }
    }
  }

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */
  var PropertyAccessors = dedupingMixin(function (superClass) {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     * @private
     */
    var base = PropertiesChanged(superClass);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends {base}
     * @unrestricted
     */

    var PropertyAccessors = function (_base) {
      inherits(PropertyAccessors, _base);

      function PropertyAccessors() {
        classCallCheck(this, PropertyAccessors);
        return possibleConstructorReturn(this, (PropertyAccessors.__proto__ || Object.getPrototypeOf(PropertyAccessors)).apply(this, arguments));
      }

      createClass(PropertyAccessors, [{
        key: '_initializeProperties',


        /**
         * Overrides PropertiesChanged implementation to initialize values for
         * accessors created for values that already existed on the element
         * prototype.
         *
         * @return {void}
         * @protected
         */
        value: function _initializeProperties() {
          if (this.__dataProto) {
            this._initializeProtoProperties(this.__dataProto);
            this.__dataProto = null;
          }
          get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), '_initializeProperties', this).call(this);
        }

        /**
         * Called at instance time with bag of properties that were overwritten
         * by accessors on the prototype when accessors were created.
         *
         * The default implementation sets these properties back into the
         * setter at instance time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         */

      }, {
        key: '_initializeProtoProperties',
        value: function _initializeProtoProperties(props) {
          for (var p in props) {
            this._setProperty(p, props[p]);
          }
        }

        /**
         * Ensures the element has the given attribute. If it does not,
         * assigns the given value to the attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
         *
         * @param {string} attribute Name of attribute to ensure is set.
         * @param {string} value of the attribute.
         * @return {void}
         */

      }, {
        key: '_ensureAttribute',
        value: function _ensureAttribute(attribute, value) {
          var el = /** @type {!HTMLElement} */this;
          if (!el.hasAttribute(attribute)) {
            this._valueToNodeAttribute(el, value, attribute);
          }
        }

        /**
         * Overrides PropertiesChanged implemention to serialize objects as JSON.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided property value.
         */

      }, {
        key: '_serializeValue',
        value: function _serializeValue(value) {
          /* eslint-disable no-fallthrough */
          switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
            case 'object':
              if (value instanceof Date) {
                return value.toString();
              } else if (value) {
                try {
                  return JSON.stringify(value);
                } catch (x) {
                  return '';
                }
              }

            default:
              return get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), '_serializeValue', this).call(this, value);
          }
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called by Polymer when reading HTML attribute values to
         * JS properties.  Users may override this method on Polymer element
         * prototypes to provide deserialization for custom `type`s.  Note,
         * the `type` argument is the value of the `type` field provided in the
         * `properties` configuration object for a given property, and is
         * by convention the constructor for the type to deserialize.
         *
         *
         * @param {?string} value Attribute value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         */

      }, {
        key: '_deserializeValue',
        value: function _deserializeValue(value, type) {
          /**
           * @type {*}
           */
          var outValue = void 0;
          switch (type) {
            case Object:
              try {
                outValue = JSON.parse( /** @type {string} */value);
              } catch (x) {
                // allow non-JSON literals like Strings and Numbers
                outValue = value;
              }
              break;
            case Array:
              try {
                outValue = JSON.parse( /** @type {string} */value);
              } catch (x) {
                outValue = null;
                console.warn('Polymer::Attributes: couldn\'t decode Array as JSON: ' + value);
              }
              break;
            case Date:
              outValue = isNaN(value) ? String(value) : Number(value);
              outValue = new Date(outValue);
              break;
            default:
              outValue = get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), '_deserializeValue', this).call(this, value, type);
              break;
          }
          return outValue;
        }
        /* eslint-enable no-fallthrough */

        /**
         * Overrides PropertiesChanged implementation to save existing prototype
         * property value so that it can be reset.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         *
         * When calling on a prototype, any overwritten values are saved in
         * `__dataProto`, and it is up to the subclasser to decide how/when
         * to set those properties back into the accessor.  When calling on an
         * instance, the overwritten value is set via `_setPendingProperty`,
         * and the user should call `_invalidateProperties` or `_flushProperties`
         * for the values to take effect.
         * @protected
         * @return {void}
         */

      }, {
        key: '_definePropertyAccessor',
        value: function _definePropertyAccessor(property, readOnly) {
          saveAccessorValue(this, property);
          get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), '_definePropertyAccessor', this).call(this, property, readOnly);
        }

        /**
         * Returns true if this library created an accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if an accessor was created
         */

      }, {
        key: '_hasAccessor',
        value: function _hasAccessor(property) {
          return this.__dataHasAccessor && this.__dataHasAccessor[property];
        }

        /**
         * Returns true if the specified property has a pending change.
         *
         * @param {string} prop Property name
         * @return {boolean} True if property has a pending change
         * @protected
         */

      }, {
        key: '_isPropertyPending',
        value: function _isPropertyPending(prop) {
          return Boolean(this.__dataPending && prop in this.__dataPending);
        }
      }], [{
        key: 'createPropertiesForAttributes',


        /**
         * Generates property accessors for all attributes in the standard
         * static `observedAttributes` array.
         *
         * Attribute names are mapped to property names using the `dash-case` to
         * `camelCase` convention
         *
         * @return {void}
         */
        value: function createPropertiesForAttributes() {
          var a$ = this.observedAttributes;
          for (var _i = 0; _i < a$.length; _i++) {
            this.prototype._createPropertyAccessor(caseMap$1.dashToCamelCase(a$[_i]));
          }
        }

        /**
         * Returns an attribute name that corresponds to the given property.
         * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: 'attributeNameForProperty',
        value: function attributeNameForProperty(property) {
          return caseMap$1.camelToDashCase(property);
        }
      }]);
      return PropertyAccessors;
    }(base);

    return PropertyAccessors;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // 1.x backwards-compatible auto-wrapper for template type extensions
  // This is a clear layering violation and gives favored-nation status to
  // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
  // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
  // b.) to maintain if/repeat capability in parser-constrained elements
  //     (e.g. table, select) in lieu of native CE type extensions without
  //     massive new invention in this space (e.g. directive system)
  var templateExtensions = {
    'dom-if': true,
    'dom-repeat': true
  };
  function wrapTemplateExtension(node) {
    var is = node.getAttribute('is');
    if (is && templateExtensions[is]) {
      var t = node;
      t.removeAttribute('is');
      node = t.ownerDocument.createElement(is);
      t.parentNode.replaceChild(node, t);
      node.appendChild(t);
      while (t.attributes.length) {
        node.setAttribute(t.attributes[0].name, t.attributes[0].value);
        t.removeAttribute(t.attributes[0].name);
      }
    }
    return node;
  }

  function findTemplateNode(root, nodeInfo) {
    // recursively ascend tree until we hit root
    var parent = nodeInfo.parentInfo && findTemplateNode(root, nodeInfo.parentInfo);
    // unwind the stack, returning the indexed node at each level
    if (parent) {
      // note: marginally faster than indexing via childNodes
      // (http://jsperf.com/childnodes-lookup)
      for (var n = parent.firstChild, i = 0; n; n = n.nextSibling) {
        if (nodeInfo.parentIndex === i++) {
          return n;
        }
      }
    } else {
      return root;
    }
  }

  // construct `$` map (from id annotations)
  function applyIdToMap(inst, map, node, nodeInfo) {
    if (nodeInfo.id) {
      map[nodeInfo.id] = node;
    }
  }

  // install event listeners (from event annotations)
  function applyEventListener(inst, node, nodeInfo) {
    if (nodeInfo.events && nodeInfo.events.length) {
      for (var j = 0, e$ = nodeInfo.events, e; j < e$.length && (e = e$[j]); j++) {
        inst._addMethodEventListenerToNode(node, e.name, e.value, inst);
      }
    }
  }

  // push configuration references at configure time
  function applyTemplateContent(inst, node, nodeInfo) {
    if (nodeInfo.templateInfo) {
      node._templateInfo = nodeInfo.templateInfo;
    }
  }

  function createNodeEventHandler(context, eventName, methodName) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    context = context._methodHost || context;
    var handler = function handler(e) {
      if (context[methodName]) {
        context[methodName](e, e.detail);
      } else {
        console.warn('listener method `' + methodName + '` not defined');
      }
    };
    return handler;
  }

  /**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */
  var TemplateStamp = dedupingMixin(
  /**
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_TemplateStamp}
     */
    var TemplateStamp = function (_superClass) {
      inherits(TemplateStamp, _superClass);

      function TemplateStamp() {
        classCallCheck(this, TemplateStamp);
        return possibleConstructorReturn(this, (TemplateStamp.__proto__ || Object.getPrototypeOf(TemplateStamp)).apply(this, arguments));
      }

      createClass(TemplateStamp, [{
        key: '_stampTemplate',


        /**
         * Clones the provided template content and returns a document fragment
         * containing the cloned dom.
         *
         * The template is parsed (once and memoized) using this library's
         * template parsing features, and provides the following value-added
         * features:
         * * Adds declarative event listeners for `on-event="handler"` attributes
         * * Generates an "id map" for all nodes with id's under `$` on returned
         *   document fragment
         * * Passes template info including `content` back to templates as
         *   `_templateInfo` (a performance optimization to avoid deep template
         *   cloning)
         *
         * Note that the memoized template parsing process is destructive to the
         * template: attributes for bindings and declarative event listeners are
         * removed after being noted in notes, and any nested `<template>.content`
         * is removed and stored in notes as well.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         */
        value: function _stampTemplate(template) {
          // Polyfill support: bootstrap the template if it has not already been
          if (template && !template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
            HTMLTemplateElement.decorate(template);
          }
          var templateInfo = this.constructor._parseTemplate(template);
          var nodeInfo = templateInfo.nodeInfoList;
          var content = templateInfo.content || template.content;
          var dom = /** @type {DocumentFragment} */document.importNode(content, true);
          // NOTE: ShadyDom optimization indicating there is an insertion point
          dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
          var nodes = dom.nodeList = new Array(nodeInfo.length);
          dom.$ = {};
          for (var i = 0, l = nodeInfo.length, info; i < l && (info = nodeInfo[i]); i++) {
            var node = nodes[i] = findTemplateNode(dom, info);
            applyIdToMap(this, dom.$, node, info);
            applyTemplateContent(this, node, info);
            applyEventListener(this, node, info);
          }
          dom = /** @type {!StampedTemplate} */dom; // eslint-disable-line no-self-assign
          return dom;
        }

        /**
         * Adds an event listener by method name for the event provided.
         *
         * This method generates a handler function that looks up the method
         * name at handling time.
         *
         * @param {!Node} node Node to add listener on
         * @param {string} eventName Name of event
         * @param {string} methodName Name of method
         * @param {*=} context Context the method will be called on (defaults
         *   to `node`)
         * @return {Function} Generated handler function
         * @override
         */

      }, {
        key: '_addMethodEventListenerToNode',
        value: function _addMethodEventListenerToNode(node, eventName, methodName, context) {
          context = context || node;
          var handler = createNodeEventHandler(context, eventName, methodName);
          this._addEventListenerToNode(node, eventName, handler);
          return handler;
        }

        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!Node} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         * @override
         */

      }, {
        key: '_addEventListenerToNode',
        value: function _addEventListenerToNode(node, eventName, handler) {
          node.addEventListener(eventName, handler);
        }

        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!Node} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         * @override
         */

      }, {
        key: '_removeEventListenerFromNode',
        value: function _removeEventListenerFromNode(node, eventName, handler) {
          node.removeEventListener(eventName, handler);
        }
      }], [{
        key: '_parseTemplate',


        /**
         * Scans a template to produce template metadata.
         *
         * Template-specific metadata are stored in the object returned, and node-
         * specific metadata are stored in objects in its flattened `nodeInfoList`
         * array.  Only nodes in the template that were parsed as nodes of
         * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
         * contains an `index` (`childNodes` index in parent) and optionally
         * `parent`, which points to node info of its parent (including its index).
         *
         * The template metadata object returned from this method has the following
         * structure (many fields optional):
         *
         * ```js
         *   {
         *     // Flattened list of node metadata (for nodes that generated metadata)
         *     nodeInfoList: [
         *       {
         *         // `id` attribute for any nodes with id's for generating `$` map
         *         id: {string},
         *         // `on-event="handler"` metadata
         *         events: [
         *           {
         *             name: {string},   // event name
         *             value: {string},  // handler method name
         *           }, ...
         *         ],
         *         // Notes when the template contained a `<slot>` for shady DOM
         *         // optimization purposes
         *         hasInsertionPoint: {boolean},
         *         // For nested `<template>`` nodes, nested template metadata
         *         templateInfo: {object}, // nested template metadata
         *         // Metadata to allow efficient retrieval of instanced node
         *         // corresponding to this metadata
         *         parentInfo: {number},   // reference to parent nodeInfo>
         *         parentIndex: {number},  // index in parent's `childNodes` collection
         *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
         *       },
         *       ...
         *     ],
         *     // When true, the template had the `strip-whitespace` attribute
         *     // or was nested in a template with that setting
         *     stripWhitespace: {boolean},
         *     // For nested templates, nested template content is moved into
         *     // a document fragment stored here; this is an optimization to
         *     // avoid the cost of nested template cloning
         *     content: {DocumentFragment}
         *   }
         * ```
         *
         * This method kicks off a recursive treewalk as follows:
         *
         * ```
         *    _parseTemplate <---------------------+
         *      _parseTemplateContent              |
         *        _parseTemplateNode  <------------|--+
         *          _parseTemplateNestedTemplate --+  |
         *          _parseTemplateChildNodes ---------+
         *          _parseTemplateNodeAttributes
         *            _parseTemplateNodeAttribute
         *
         * ```
         *
         * These methods may be overridden to add custom metadata about templates
         * to either `templateInfo` or `nodeInfo`.
         *
         * Note that this method may be destructive to the template, in that
         * e.g. event annotations may be removed after being noted in the
         * template metadata.
         *
         * @param {!HTMLTemplateElement} template Template to parse
         * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
         *   template, for parsing nested templates
         * @return {!TemplateInfo} Parsed template metadata
         */
        value: function _parseTemplate(template, outerTemplateInfo) {
          // since a template may be re-used, memo-ize metadata
          if (!template._templateInfo) {
            var templateInfo = template._templateInfo = {};
            templateInfo.nodeInfoList = [];
            templateInfo.stripWhiteSpace = outerTemplateInfo && outerTemplateInfo.stripWhiteSpace || template.hasAttribute('strip-whitespace');
            this._parseTemplateContent(template, templateInfo, { parent: null });
          }
          return template._templateInfo;
        }
      }, {
        key: '_parseTemplateContent',
        value: function _parseTemplateContent(template, templateInfo, nodeInfo) {
          return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
        }

        /**
         * Parses template node and adds template and node metadata based on
         * the current node, and its `childNodes` and `attributes`.
         *
         * This method may be overridden to add custom node or template specific
         * metadata based on this node.
         *
         * @param {Node} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: '_parseTemplateNode',
        value: function _parseTemplateNode(node, templateInfo, nodeInfo) {
          var noted = void 0;
          var element = /** @type {Element} */node;
          if (element.localName == 'template' && !element.hasAttribute('preserve-content')) {
            noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
          } else if (element.localName === 'slot') {
            // For ShadyDom optimization, indicating there is an insertion point
            templateInfo.hasInsertionPoint = true;
          }
          if (element.firstChild) {
            noted = this._parseTemplateChildNodes(element, templateInfo, nodeInfo) || noted;
          }
          if (element.hasAttributes && element.hasAttributes()) {
            noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
          }
          return noted;
        }

        /**
         * Parses template child nodes for the given root node.
         *
         * This method also wraps whitelisted legacy template extensions
         * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
         * wrappers, collapses text nodes, and strips whitespace from the template
         * if the `templateInfo.stripWhitespace` setting was provided.
         *
         * @param {Node} root Root node whose `childNodes` will be parsed
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {void}
         */

      }, {
        key: '_parseTemplateChildNodes',
        value: function _parseTemplateChildNodes(root, templateInfo, nodeInfo) {
          if (root.localName === 'script' || root.localName === 'style') {
            return;
          }
          for (var node = root.firstChild, parentIndex = 0, next; node; node = next) {
            // Wrap templates
            if (node.localName == 'template') {
              node = wrapTemplateExtension(node);
            }
            // collapse adjacent textNodes: fixes an IE issue that can cause
            // text nodes to be inexplicably split =(
            // note that root.normalize() should work but does not so we do this
            // manually.
            next = node.nextSibling;
            if (node.nodeType === Node.TEXT_NODE) {
              var /** Node */n = next;
              while (n && n.nodeType === Node.TEXT_NODE) {
                node.textContent += n.textContent;
                next = n.nextSibling;
                root.removeChild(n);
                n = next;
              }
              // optionally strip whitespace
              if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
                root.removeChild(node);
                continue;
              }
            }
            var childInfo = { parentIndex: parentIndex, parentInfo: nodeInfo };
            if (this._parseTemplateNode(node, templateInfo, childInfo)) {
              childInfo.infoIndex = templateInfo.nodeInfoList.push( /** @type {!NodeInfo} */childInfo) - 1;
            }
            // Increment if not removed
            if (node.parentNode) {
              parentIndex++;
            }
          }
        }

        /**
         * Parses template content for the given nested `<template>`.
         *
         * Nested template info is stored as `templateInfo` in the current node's
         * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
         * It will then be the responsibility of the host to set it back to the
         * template and for users stamping nested templates to use the
         * `_contentForTemplate` method to retrieve the content for this template
         * (an optimization to avoid the cost of cloning nested template content).
         *
         * @param {HTMLTemplateElement} node Node to parse (a <template>)
         * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
         *   that includes the template `node`
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: '_parseTemplateNestedTemplate',
        value: function _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
          var templateInfo = this._parseTemplate(node, outerTemplateInfo);
          var content = templateInfo.content = node.content.ownerDocument.createDocumentFragment();
          content.appendChild(node.content);
          nodeInfo.templateInfo = templateInfo;
          return true;
        }

        /**
         * Parses template node attributes and adds node metadata to `nodeInfo`
         * for nodes of interest.
         *
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: '_parseTemplateNodeAttributes',
        value: function _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
          // Make copy of original attribute list, since the order may change
          // as attributes are added and removed
          var noted = false;
          var attrs = Array.from(node.attributes);
          for (var i = attrs.length - 1, a; a = attrs[i]; i--) {
            noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a.name, a.value) || noted;
          }
          return noted;
        }

        /**
         * Parses a single template node attribute and adds node metadata to
         * `nodeInfo` for attributes of interest.
         *
         * This implementation adds metadata for `on-event="handler"` attributes
         * and `id` attributes.
         *
         * @param {Element} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: '_parseTemplateNodeAttribute',
        value: function _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          // events (on-*)
          if (name.slice(0, 3) === 'on-') {
            node.removeAttribute(name);
            nodeInfo.events = nodeInfo.events || [];
            nodeInfo.events.push({
              name: name.slice(3),
              value: value
            });
            return true;
          }
          // static id
          else if (name === 'id') {
              nodeInfo.id = value;
              return true;
            }
          return false;
        }

        /**
         * Returns the `content` document fragment for a given template.
         *
         * For nested templates, Polymer performs an optimization to cache nested
         * template content to avoid the cost of cloning deeply nested templates.
         * This method retrieves the cached content for a given template.
         *
         * @param {HTMLTemplateElement} template Template to retrieve `content` for
         * @return {DocumentFragment} Content fragment
         */

      }, {
        key: '_contentForTemplate',
        value: function _contentForTemplate(template) {
          var templateInfo = /** @type {HTMLTemplateElementWithInfo} */template._templateInfo;
          return templateInfo && templateInfo.content || template.content;
        }
      }]);
      return TemplateStamp;
    }(superClass);

    return TemplateStamp;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @const {Object} */
  var CaseMap = caseMap$0;

  // Monotonically increasing unique ID used for de-duping effects triggered
  // from multiple properties in the same turn
  var dedupeId$1 = 0;

  /**
   * Property effect types; effects are stored on the prototype using these keys
   * @enum {string}
   */
  var TYPES = {
    COMPUTE: '__computeEffects',
    REFLECT: '__reflectEffects',
    NOTIFY: '__notifyEffects',
    PROPAGATE: '__propagateEffects',
    OBSERVE: '__observeEffects',
    READ_ONLY: '__readOnly'
  };

  /** @const {RegExp} */
  var capitalAttributeRegex = /[A-Z]/;

  /**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @return {Object} The own-property map of effects for the given type
   * @private
   */
  function ensureOwnEffectMap(model, type) {
    var effects = model[type];
    if (!effects) {
      effects = model[type] = {};
    } else if (!model.hasOwnProperty(type)) {
      effects = model[type] = Object.create(model[type]);
      for (var p in effects) {
        var protoFx = effects[p];
        var instFx = effects[p] = Array(protoFx.length);
        for (var i = 0; i < protoFx.length; i++) {
          instFx[i] = protoFx[i];
        }
      }
    }
    return effects;
  }

  // -- effects ----------------------------------------------

  /**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {Object} props Bag of current property changes
   * @param {Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */
  function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
    if (effects) {
      var ran = false;
      var id = dedupeId$1++;
      for (var prop in props) {
        if (runEffectsForProperty(inst, effects, id, prop, props, oldProps, hasPaths, extraArgs)) {
          ran = true;
        }
      }
      return ran;
    }
    return false;
  }

  /**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */
  function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths, extraArgs) {
    var ran = false;
    var rootProperty = hasPaths ? root(prop) : prop;
    var fxs = effects[rootProperty];
    if (fxs) {
      for (var i = 0, l = fxs.length, fx; i < l && (fx = fxs[i]); i++) {
        if ((!fx.info || fx.info.lastRun !== dedupeId) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          if (fx.info) {
            fx.info.lastRun = dedupeId;
          }
          fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
          ran = true;
        }
      }
    }
    return ran;
  }

  /**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */
  function pathMatchesTrigger(path, trigger) {
    if (trigger) {
      var triggerPath = trigger.name;
      return triggerPath == path || trigger.structured && isAncestor(triggerPath, path) || trigger.wildcard && isDescendant(triggerPath, path);
    } else {
      return true;
    }
  }

  /**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runObserverEffect(inst, property, props, oldProps, info) {
    var fn = typeof info.method === "string" ? inst[info.method] : info.method;
    var changedProp = info.property;
    if (fn) {
      fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
    } else if (!info.dynamicFn) {
      console.warn('observer method `' + info.method + '` not defined');
    }
  }

  /**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
    // Notify
    var fxs = inst[TYPES.NOTIFY];
    var notified = void 0;
    var id = dedupeId$1++;
    // Try normal notify effects; if none, fall back to try path notification
    for (var prop in notifyProps) {
      if (notifyProps[prop]) {
        if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
          notified = true;
        } else if (hasPaths && notifyPath(inst, prop, props)) {
          notified = true;
        }
      }
    }
    // Flush host if we actually notified and host was batching
    // And the host has already initialized clients; this prevents
    // an issue with a host observing data changes before clients are ready.
    var host = void 0;
    if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
      host._invalidateProperties();
    }
  }

  /**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */
  function notifyPath(inst, path, props) {
    var rootProperty = root(path);
    if (rootProperty !== path) {
      var eventName = camelToDashCase(rootProperty) + '-changed';
      dispatchNotifyEvent(inst, eventName, props[path], path);
      return true;
    }
    return false;
  }

  /**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */
  function dispatchNotifyEvent(inst, eventName, value, path) {
    var detail = {
      value: value,
      queueProperty: true
    };
    if (path) {
      detail.path = path;
    }
    /** @type {!HTMLElement} */inst.dispatchEvent(new CustomEvent(eventName, { detail: detail }));
  }

  /**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
    var rootProperty = hasPaths ? root(property) : property;
    var path = rootProperty != property ? property : null;
    var value = path ? get$1(inst, path) : inst.__data[property];
    if (path && value === undefined) {
      value = props[property]; // specifically for .splices
    }
    dispatchNotifyEvent(inst, info.eventName, value, path);
  }

  /**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */
  function handleNotification(event, inst, fromProp, toPath, negate) {
    var value = void 0;
    var detail = /** @type {Object} */event.detail;
    var fromPath = detail && detail.path;
    if (fromPath) {
      toPath = translate(fromProp, toPath, fromPath);
      value = detail && detail.value;
    } else {
      value = event.target[fromProp];
    }
    value = negate ? !value : value;
    if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
      if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath)) && (!detail || !detail.queueProperty)) {
        inst._invalidateProperties();
      }
    }
  }

  /**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runReflectEffect(inst, property, props, oldProps, info) {
    var value = inst.__data[property];
    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, info.attrName, 'attribute', /** @type {Node} */inst);
    }
    inst._propertyToAttribute(property, info.attrName, value);
  }

  /**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
    var computeEffects = inst[TYPES.COMPUTE];
    if (computeEffects) {
      var inputProps = changedProps;
      while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
        Object.assign(oldProps, inst.__dataOld);
        Object.assign(changedProps, inst.__dataPending);
        inputProps = inst.__dataPending;
        inst.__dataPending = null;
      }
    }
  }

  /**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runComputedEffect(inst, property, props, oldProps, info) {
    var result = runMethodEffect(inst, property, props, oldProps, info);
    var computedProp = info.methodInfo;
    if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
      inst._setPendingProperty(computedProp, result, true);
    } else {
      inst[computedProp] = result;
    }
  }

  /**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */
  function computeLinkedPaths(inst, path, value) {
    var links = inst.__dataLinkedPaths;
    if (links) {
      var link = void 0;
      for (var a in links) {
        var b = links[a];
        if (isDescendant(a, path)) {
          link = translate(a, b, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        } else if (isDescendant(b, path)) {
          link = translate(b, a, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        }
      }
    }
  }

  // -- bindings ----------------------------------------------

  /**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {NodeInfo} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {!Array<!BindingPart>} parts Array of binding part metadata
   * @param {string=} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @return {void}
   * @private
   */
  function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
    // Create binding metadata and add to nodeInfo
    nodeInfo.bindings = nodeInfo.bindings || [];
    var /** Binding */binding = { kind: kind, target: target, parts: parts, literal: literal, isCompound: parts.length !== 1 };
    nodeInfo.bindings.push(binding);
    // Add listener info to binding metadata
    if (shouldAddListener(binding)) {
      var _binding$parts$ = binding.parts[0],
          event = _binding$parts$.event,
          negate = _binding$parts$.negate;

      binding.listenerEvent = event || CaseMap.camelToDashCase(target) + '-changed';
      binding.listenerNegate = negate;
    }
    // Add "propagate" property effects to templateInfo
    var index = templateInfo.nodeInfoList.length;
    for (var i = 0; i < binding.parts.length; i++) {
      var part = binding.parts[i];
      part.compoundIndex = i;
      addEffectForBindingPart(constructor, templateInfo, binding, part, index);
    }
  }

  /**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */
  function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
    if (!part.literal) {
      if (binding.kind === 'attribute' && binding.target[0] === '-') {
        console.warn('Cannot set attribute ' + binding.target + ' because "-" is not a valid attribute starting character');
      } else {
        var dependencies = part.dependencies;
        var info = { index: index, binding: binding, part: part, evaluator: constructor };
        for (var j = 0; j < dependencies.length; j++) {
          var trigger = dependencies[j];
          if (typeof trigger == 'string') {
            trigger = parseArg(trigger);
            trigger.wildcard = true;
          }
          constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
            fn: runBindingEffect,
            info: info, trigger: trigger
          });
        }
      }
    }
  }

  /**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */
  function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
    var node = nodeList[info.index];
    var binding = info.binding;
    var part = info.part;
    // Subpath notification: transform path and set to client
    // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
    if (hasPaths && part.source && path.length > part.source.length && binding.kind == 'property' && !binding.isCompound && node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
      var value = props[path];
      path = translate(part.source, binding.target, path);
      if (node._setPendingPropertyOrPath(path, value, false, true)) {
        inst._enqueueClient(node);
      }
    } else {
      var _value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths);
      // Propagate value to child
      applyBindingValue(inst, node, binding, part, _value);
    }
  }

  /**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */
  function applyBindingValue(inst, node, binding, part, value) {
    value = computeBindingValue(node, value, binding, part);
    if (sanitizeDOMValue) {
      value = sanitizeDOMValue(value, binding.target, binding.kind, node);
    }
    if (binding.kind == 'attribute') {
      // Attribute binding
      inst._valueToNodeAttribute( /** @type {Element} */node, value, binding.target);
    } else {
      // Property binding
      var prop = binding.target;
      if (node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
        if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
          if (node._setPendingProperty(prop, value)) {
            inst._enqueueClient(node);
          }
        }
      } else {
        inst._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
  }

  /**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */
  function computeBindingValue(node, value, binding, part) {
    if (binding.isCompound) {
      var storage = node.__dataCompoundStorage[binding.target];
      storage[part.compoundIndex] = value;
      value = storage.join('');
    }
    if (binding.kind !== 'attribute') {
      // Some browsers serialize `undefined` to `"undefined"`
      if (binding.target === 'textContent' || binding.target === 'value' && (node.localName === 'input' || node.localName === 'textarea')) {
        value = value == undefined ? '' : value;
      }
    }
    return value;
  }

  /**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */
  function shouldAddListener(binding) {
    return Boolean(binding.target) && binding.kind != 'attribute' && binding.kind != 'text' && !binding.isCompound && binding.parts[0].mode === '{';
  }

  /**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */
  function setupBindings(inst, templateInfo) {
    // Setup compound storage, dataHost, and notify listeners
    var nodeList = templateInfo.nodeList,
        nodeInfoList = templateInfo.nodeInfoList;

    if (nodeInfoList.length) {
      for (var i = 0; i < nodeInfoList.length; i++) {
        var info = nodeInfoList[i];
        var node = nodeList[i];
        var bindings = info.bindings;
        if (bindings) {
          for (var _i = 0; _i < bindings.length; _i++) {
            var binding = bindings[_i];
            setupCompoundStorage(node, binding);
            addNotifyListener(node, inst, binding);
          }
        }
        node.__dataHost = inst;
      }
    }
  }

  /**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */
  function setupCompoundStorage(node, binding) {
    if (binding.isCompound) {
      // Create compound storage map
      var storage = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});
      var parts = binding.parts;
      // Copy literals from parts into storage for this binding
      var literals = new Array(parts.length);
      for (var j = 0; j < parts.length; j++) {
        literals[j] = parts[j].literal;
      }
      var target = binding.target;
      storage[target] = literals;
      // Configure properties with their literal parts
      if (binding.literal && binding.kind == 'property') {
        node[target] = binding.literal;
      }
    }
  }

  /**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */
  function addNotifyListener(node, inst, binding) {
    if (binding.listenerEvent) {
      var part = binding.parts[0];
      node.addEventListener(binding.listenerEvent, function (e) {
        handleNotification(e, inst, binding.target, part.source, part.negate);
      });
    }
  }

  // -- for method-based effects (complexObserver & computed) --------------

  /**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {!MethodSignature} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @return {void}
   * @private
   */
  function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
    dynamicFn = sig.static || dynamicFn && ((typeof dynamicFn === 'undefined' ? 'undefined' : _typeof(dynamicFn)) !== 'object' || dynamicFn[sig.methodName]);
    var info = {
      methodName: sig.methodName,
      args: sig.args,
      methodInfo: methodInfo,
      dynamicFn: dynamicFn
    };
    for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
      if (!arg.literal) {
        model._addPropertyEffect(arg.rootProperty, type, {
          fn: effectFn, info: info, trigger: arg
        });
      }
    }
    if (dynamicFn) {
      model._addPropertyEffect(sig.methodName, type, {
        fn: effectFn, info: info
      });
    }
  }

  /**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */
  function runMethodEffect(inst, property, props, oldProps, info) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    var context = inst._methodHost || inst;
    var fn = context[info.methodName];
    if (fn) {
      var args = marshalArgs(inst.__data, info.args, property, props);
      return fn.apply(context, args);
    } else if (!info.dynamicFn) {
      console.warn('method `' + info.methodName + '` not defined');
    }
  }

  var emptyArray = [];

  // Regular expressions used for binding
  var IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
  var NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
  var SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
  var DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
  var STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
  var ARGUMENT = '(?:(' + IDENT + '|' + NUMBER + '|' + STRING + ')\\s*' + ')';
  var ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
  var ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
  var BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3
  var OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
  var CLOSE_BRACKET = '(?:]]|}})';
  var NEGATE = '(?:(!)\\s*)?'; // Group 2
  var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
  var bindingRegex = new RegExp(EXPRESSION, "g");

  /**
   * Create a string from binding parts of all the literal parts
   *
   * @param {!Array<BindingPart>} parts All parts to stringify
   * @return {string} String made from the literal parts
   */
  function literalFromParts(parts) {
    var s = '';
    for (var i = 0; i < parts.length; i++) {
      var literal = parts[i].literal;
      s += literal || '';
    }
    return s;
  }

  /**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */
  function parseMethod(expression) {
    // tries to match valid javascript property names
    var m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
    if (m) {
      var methodName = m[1];
      var sig = { methodName: methodName, static: true, args: emptyArray };
      if (m[2].trim()) {
        // replace escaped commas with comma entity, split on un-escaped commas
        var args = m[2].replace(/\\,/g, '&comma;').split(',');
        return parseArgs(args, sig);
      } else {
        return sig;
      }
    }
    return null;
  }

  /**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */
  function parseArgs(argList, sig) {
    sig.args = argList.map(function (rawArg) {
      var arg = parseArg(rawArg);
      if (!arg.literal) {
        sig.static = false;
      }
      return arg;
    }, this);
    return sig;
  }

  /**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */
  function parseArg(rawArg) {
    // clean up whitespace
    var arg = rawArg.trim()
    // replace comma entity with comma
    .replace(/&comma;/g, ',')
    // repair extra escape sequences; note only commas strictly need
    // escaping, but we allow any other char to be escaped since its
    // likely users will do this
    .replace(/\\(.)/g, '\$1');
    // basic argument descriptor
    var a = {
      name: arg,
      value: '',
      literal: false
    };
    // detect literal value (must be String or Number)
    var fc = arg[0];
    if (fc === '-') {
      fc = arg[1];
    }
    if (fc >= '0' && fc <= '9') {
      fc = '#';
    }
    switch (fc) {
      case "'":
      case '"':
        a.value = arg.slice(1, -1);
        a.literal = true;
        break;
      case '#':
        a.value = Number(arg);
        a.literal = true;
        break;
    }
    // if not literal, look for structured path
    if (!a.literal) {
      a.rootProperty = root(arg);
      // detect structured path (has dots)
      a.structured = isPath(arg);
      if (a.structured) {
        a.wildcard = arg.slice(-2) == '.*';
        if (a.wildcard) {
          a.name = arg.slice(0, -2);
        }
      }
    }
    return a;
  }

  /**
   * Gather the argument values for a method specified in the provided array
   * of argument metadata.
   *
   * The `path` and `value` arguments are used to fill in wildcard descriptor
   * when the method is being called as a result of a path notification.
   *
   * @param {Object} data Instance data storage object to read properties from
   * @param {!Array<!MethodArg>} args Array of argument metadata
   * @param {string} path Property/path name that triggered the method effect
   * @param {Object} props Bag of current property changes
   * @return {Array<*>} Array of argument values
   * @private
   */
  function marshalArgs(data, args, path, props) {
    var values = [];
    for (var i = 0, l = args.length; i < l; i++) {
      var arg = args[i];
      var name = arg.name;
      var v = void 0;
      if (arg.literal) {
        v = arg.value;
      } else {
        if (arg.structured) {
          v = get$1(data, name);
          // when data is not stored e.g. `splices`
          if (v === undefined) {
            v = props[name];
          }
        } else {
          v = data[name];
        }
      }
      if (arg.wildcard) {
        // Only send the actual path changed info if the change that
        // caused the observer to run matched the wildcard
        var baseChanged = name.indexOf(path + '.') === 0;
        var matches$$1 = path.indexOf(name) === 0 && !baseChanged;
        values[i] = {
          path: matches$$1 ? path : name,
          value: matches$$1 ? props[path] : v,
          base: v
        };
      } else {
        values[i] = v;
      }
    }
    return values;
  }

  // data api

  /**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @return {void}
   * @private
   */
  function _notifySplices(inst, array, path, splices) {
    var splicesPath = path + '.splices';
    inst.notifyPath(splicesPath, { indexSplices: splices });
    inst.notifyPath(path + '.length', array.length);
    // Null here to allow potentially large splice records to be GC'ed.
    inst.__data[splicesPath] = { indexSplices: null };
  }

  /**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */
  function notifySplice(inst, array, path, index, addedCount, removed) {
    _notifySplices(inst, array, path, [{
      index: index,
      addedCount: addedCount,
      removed: removed,
      object: array,
      type: 'splice'
    }]);
  }

  /**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */
  function upper(name) {
    return name[0].toUpperCase() + name.substring(1);
  }

  /**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */
  var PropertyEffects = dedupingMixin(function (superClass) {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     * @unrestricted
     * @private
     */
    var propertyEffectsBase = TemplateStamp(PropertyAccessors(superClass));

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyEffects}
     * @extends {propertyEffectsBase}
     * @unrestricted
     */

    var PropertyEffects = function (_propertyEffectsBase) {
      inherits(PropertyEffects, _propertyEffectsBase);

      function PropertyEffects() {
        classCallCheck(this, PropertyEffects);

        /** @type {boolean} */
        // Used to identify users of this mixin, ala instanceof
        var _this = possibleConstructorReturn(this, (PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects)).call(this));

        _this.__isPropertyEffectsClient = true;
        /** @type {number} */
        // NOTE: used to track re-entrant calls to `_flushProperties`
        // path changes dirty check against `__dataTemp` only during one "turn"
        // and are cleared when `__dataCounter` returns to 0.
        _this.__dataCounter = 0;
        /** @type {boolean} */
        _this.__dataClientsReady;
        /** @type {Array} */
        _this.__dataPendingClients;
        /** @type {Object} */
        _this.__dataToNotify;
        /** @type {Object} */
        _this.__dataLinkedPaths;
        /** @type {boolean} */
        _this.__dataHasPaths;
        /** @type {Object} */
        _this.__dataCompoundStorage;
        /** @type {Polymer_PropertyEffects} */
        _this.__dataHost;
        /** @type {!Object} */
        _this.__dataTemp;
        /** @type {boolean} */
        _this.__dataClientsInitialized;
        /** @type {!Object} */
        _this.__data;
        /** @type {!Object} */
        _this.__dataPending;
        /** @type {!Object} */
        _this.__dataOld;
        /** @type {Object} */
        _this.__computeEffects;
        /** @type {Object} */
        _this.__reflectEffects;
        /** @type {Object} */
        _this.__notifyEffects;
        /** @type {Object} */
        _this.__propagateEffects;
        /** @type {Object} */
        _this.__observeEffects;
        /** @type {Object} */
        _this.__readOnly;
        /** @type {!TemplateInfo} */
        _this.__templateInfo;
        return _this;
      }

      createClass(PropertyEffects, [{
        key: '_initializeProperties',


        /**
         * @return {void}
         */
        value: function _initializeProperties() {
          get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_initializeProperties', this).call(this);
          hostStack.registerHost(this);
          this.__dataClientsReady = false;
          this.__dataPendingClients = null;
          this.__dataToNotify = null;
          this.__dataLinkedPaths = null;
          this.__dataHasPaths = false;
          // May be set on instance prior to upgrade
          this.__dataCompoundStorage = this.__dataCompoundStorage || null;
          this.__dataHost = this.__dataHost || null;
          this.__dataTemp = {};
          this.__dataClientsInitialized = false;
        }

        /**
         * Overrides `PropertyAccessors` implementation to provide a
         * more efficient implementation of initializing properties from
         * the prototype on the instance.
         *
         * @override
         * @param {Object} props Properties to initialize on the prototype
         * @return {void}
         */

      }, {
        key: '_initializeProtoProperties',
        value: function _initializeProtoProperties(props) {
          this.__data = Object.create(props);
          this.__dataPending = Object.create(props);
          this.__dataOld = {};
        }

        /**
         * Overrides `PropertyAccessors` implementation to avoid setting
         * `_setProperty`'s `shouldNotify: true`.
         *
         * @override
         * @param {Object} props Properties to initialize on the instance
         * @return {void}
         */

      }, {
        key: '_initializeInstanceProperties',
        value: function _initializeInstanceProperties(props) {
          var readOnly = this[TYPES.READ_ONLY];
          for (var prop in props) {
            if (!readOnly || !readOnly[prop]) {
              this.__dataPending = this.__dataPending || {};
              this.__dataOld = this.__dataOld || {};
              this.__data[prop] = this.__dataPending[prop] = props[prop];
            }
          }
        }

        // Prototype setup ----------------------------------------

        /**
         * Equivalent to static `addPropertyEffect` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: '_addPropertyEffect',
        value: function _addPropertyEffect(property, type, effect) {
          this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
          // effects are accumulated into arrays per property based on type
          var effects = ensureOwnEffectMap(this, type)[property];
          if (!effects) {
            effects = this[type][property] = [];
          }
          effects.push(effect);
        }

        /**
         * Removes the given property effect.
         *
         * @param {string} property Property the effect was associated with
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object to remove
         * @return {void}
         */

      }, {
        key: '_removePropertyEffect',
        value: function _removePropertyEffect(property, type, effect) {
          var effects = ensureOwnEffectMap(this, type)[property];
          var idx = effects.indexOf(effect);
          if (idx >= 0) {
            effects.splice(idx, 1);
          }
        }

        /**
         * Returns whether the current prototype/instance has a property effect
         * of a certain type.
         *
         * @param {string} property Property name
         * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: '_hasPropertyEffect',
        value: function _hasPropertyEffect(property, type) {
          var effects = this[type];
          return Boolean(effects && effects[property]);
        }

        /**
         * Returns whether the current prototype/instance has a "read only"
         * accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: '_hasReadOnlyEffect',
        value: function _hasReadOnlyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.READ_ONLY);
        }

        /**
         * Returns whether the current prototype/instance has a "notify"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: '_hasNotifyEffect',
        value: function _hasNotifyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.NOTIFY);
        }

        /**
         * Returns whether the current prototype/instance has a "reflect to attribute"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: '_hasReflectEffect',
        value: function _hasReflectEffect(property) {
          return this._hasPropertyEffect(property, TYPES.REFLECT);
        }

        /**
         * Returns whether the current prototype/instance has a "computed"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: '_hasComputedEffect',
        value: function _hasComputedEffect(property) {
          return this._hasPropertyEffect(property, TYPES.COMPUTE);
        }

        // Runtime ----------------------------------------

        /**
         * Sets a pending property or path.  If the root property of the path in
         * question had no accessor, the path is set, otherwise it is enqueued
         * via `_setPendingProperty`.
         *
         * This function isolates relatively expensive functionality necessary
         * for the public API (`set`, `setProperties`, `notifyPath`, and property
         * change listeners via {{...}} bindings), such that it is only done
         * when paths enter the system, and not at every propagation step.  It
         * also sets a `__dataHasPaths` flag on the instance which is used to
         * fast-path slower path-matching code in the property effects host paths.
         *
         * `path` can be a path string or array of path parts as accepted by the
         * public API.
         *
         * @param {string | !Array<number|string>} path Path to set
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify Set to true if this change should
         *  cause a property notification event dispatch
         * @param {boolean=} isPathNotification If the path being set is a path
         *   notification of an already changed value, as opposed to a request
         *   to set and notify the change.  In the latter `false` case, a dirty
         *   check is performed and then the value is set to the path before
         *   enqueuing the pending property change.
         * @return {boolean} Returns true if the property/path was enqueued in
         *   the pending changes bag.
         * @protected
         */

      }, {
        key: '_setPendingPropertyOrPath',
        value: function _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
          if (isPathNotification || root(Array.isArray(path) ? path[0] : path) !== path) {
            // Dirty check changes being set to a path against the actual object,
            // since this is the entry point for paths into the system; from here
            // the only dirty checks are against the `__dataTemp` cache to prevent
            // duplicate work in the same turn only. Note, if this was a notification
            // of a change already set to a path (isPathNotification: true),
            // we always let the change through and skip the `set` since it was
            // already dirty checked at the point of entry and the underlying
            // object has already been updated
            if (!isPathNotification) {
              var old = get$1(this, path);
              path = /** @type {string} */set$1(this, path, value);
              // Use property-accessor's simpler dirty check
              if (!path || !get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_shouldPropertyChange', this).call(this, path, value, old)) {
                return false;
              }
            }
            this.__dataHasPaths = true;
            if (this._setPendingProperty( /**@type{string}*/path, value, shouldNotify)) {
              computeLinkedPaths(this, path, value);
              return true;
            }
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
              return this._setPendingProperty( /**@type{string}*/path, value, shouldNotify);
            } else {
              this[path] = value;
            }
          }
          return false;
        }

        /**
         * Applies a value to a non-Polymer element/node's property.
         *
         * The implementation makes a best-effort at binding interop:
         * Some native element properties have side-effects when
         * re-setting the same value (e.g. setting `<input>.value` resets the
         * cursor position), so we do a dirty-check before setting the value.
         * However, for better interop with non-Polymer custom elements that
         * accept objects, we explicitly re-set object changes coming from the
         * Polymer world (which may include deep object changes without the
         * top reference changing), erring on the side of providing more
         * information.
         *
         * Users may override this method to provide alternate approaches.
         *
         * @param {!Node} node The node to set a property on
         * @param {string} prop The property to set
         * @param {*} value The value to set
         * @return {void}
         * @protected
         */

      }, {
        key: '_setUnmanagedPropertyToNode',
        value: function _setUnmanagedPropertyToNode(node, prop, value) {
          // It is a judgment call that resetting primitives is
          // "bad" and resettings objects is also "good"; alternatively we could
          // implement a whitelist of tag & property values that should never
          // be reset (e.g. <input>.value && <select>.value)
          if (value !== node[prop] || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
            node[prop] = value;
          }
        }

        /**
         * Overrides the `PropertiesChanged` implementation to introduce special
         * dirty check logic depending on the property & value being set:
         *
         * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
         *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
         * 2. Object set to simple property (e.g. 'prop': {...})
         *    Stored in `__dataTemp` and `__data`, dirty checked against
         *    `__dataTemp` by default implementation of `_shouldPropertyChange`
         * 3. Primitive value set to simple property (e.g. 'prop': 42)
         *    Stored in `__data`, dirty checked against `__data`
         *
         * The dirty-check is important to prevent cycles due to two-way
         * notification, but paths and objects are only dirty checked against any
         * previous value set during this turn via a "temporary cache" that is
         * cleared when the last `_propertiesChanged` exits. This is so:
         * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
         *    due to array mutations like shift/unshift/splice; this is fine
         *    since path changes are dirty-checked at user entry points like `set`
         * b. dirty-checking for objects only lasts one turn to allow the user
         *    to mutate the object in-place and re-set it with the same identity
         *    and have all sub-properties re-propagated in a subsequent turn.
         *
         * The temp cache is not necessarily sufficient to prevent invalid array
         * paths, since a splice can happen during the same turn (with pathological
         * user code); we could introduce a "fixup" for temporarily cached array
         * paths if needed: https://github.com/Polymer/polymer/issues/4227
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify True if property should fire notification
         *   event (applies only for `notify: true` properties)
         * @return {boolean} Returns true if the property changed
         */

      }, {
        key: '_setPendingProperty',
        value: function _setPendingProperty(property, value, shouldNotify) {
          var isPath$$1 = this.__dataHasPaths && isPath(property);
          var prevProps = isPath$$1 ? this.__dataTemp : this.__data;
          if (this._shouldPropertyChange(property, value, prevProps[property])) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            // Ensure old is captured from the last turn
            if (!(property in this.__dataOld)) {
              this.__dataOld[property] = this.__data[property];
            }
            // Paths are stored in temporary cache (cleared at end of turn),
            // which is used for dirty-checking, all others stored in __data
            if (isPath$$1) {
              this.__dataTemp[property] = value;
            } else {
              this.__data[property] = value;
            }
            // All changes go into pending property bag, passed to _propertiesChanged
            this.__dataPending[property] = value;
            // Track properties that should notify separately
            if (isPath$$1 || this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property]) {
              this.__dataToNotify = this.__dataToNotify || {};
              this.__dataToNotify[property] = shouldNotify;
            }
            return true;
          }
          return false;
        }

        /**
         * Overrides base implementation to ensure all accessors set `shouldNotify`
         * to true, for per-property notification tracking.
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         */

      }, {
        key: '_setProperty',
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value, true)) {
            this._invalidateProperties();
          }
        }

        /**
         * Overrides `PropertyAccessor`'s default async queuing of
         * `_propertiesChanged`: if `__dataReady` is false (has not yet been
         * manually flushed), the function no-ops; otherwise flushes
         * `_propertiesChanged` synchronously.
         *
         * @override
         * @return {void}
         */

      }, {
        key: '_invalidateProperties',
        value: function _invalidateProperties() {
          if (this.__dataReady) {
            this._flushProperties();
          }
        }

        /**
         * Enqueues the given client on a list of pending clients, whose
         * pending property changes can later be flushed via a call to
         * `_flushClients`.
         *
         * @param {Object} client PropertyEffects client to enqueue
         * @return {void}
         * @protected
         */

      }, {
        key: '_enqueueClient',
        value: function _enqueueClient(client) {
          this.__dataPendingClients = this.__dataPendingClients || [];
          if (client !== this) {
            this.__dataPendingClients.push(client);
          }
        }

        /**
         * Overrides superclass implementation.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: '_flushProperties',
        value: function _flushProperties() {
          this.__dataCounter++;
          get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_flushProperties', this).call(this);
          this.__dataCounter--;
        }

        /**
         * Flushes any clients previously enqueued via `_enqueueClient`, causing
         * their `_flushProperties` method to run.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: '_flushClients',
        value: function _flushClients() {
          if (!this.__dataClientsReady) {
            this.__dataClientsReady = true;
            this._readyClients();
            // Override point where accessors are turned on; importantly,
            // this is after clients have fully readied, providing a guarantee
            // that any property effects occur only after all clients are ready.
            this.__dataReady = true;
          } else {
            this.__enableOrFlushClients();
          }
        }

        // NOTE: We ensure clients either enable or flush as appropriate. This
        // handles two corner cases:
        // (1) clients flush properly when connected/enabled before the host
        // enables; e.g.
        //   (a) Templatize stamps with no properties and does not flush and
        //   (b) the instance is inserted into dom and
        //   (c) then the instance flushes.
        // (2) clients enable properly when not connected/enabled when the host
        // flushes; e.g.
        //   (a) a template is runtime stamped and not yet connected/enabled
        //   (b) a host sets a property, causing stamped dom to flush
        //   (c) the stamped dom enables.

      }, {
        key: '__enableOrFlushClients',
        value: function __enableOrFlushClients() {
          var clients = this.__dataPendingClients;
          if (clients) {
            this.__dataPendingClients = null;
            for (var i = 0; i < clients.length; i++) {
              var client = clients[i];
              if (!client.__dataEnabled) {
                client._enableProperties();
              } else if (client.__dataPending) {
                client._flushProperties();
              }
            }
          }
        }

        /**
         * Perform any initial setup on client dom. Called before the first
         * `_flushProperties` call on client dom and before any element
         * observers are called.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: '_readyClients',
        value: function _readyClients() {
          this.__enableOrFlushClients();
        }

        /**
         * Sets a bag of property changes to this instance, and
         * synchronously processes all effects of the properties as a batch.
         *
         * Property names must be simple properties, not paths.  Batched
         * path propagation is not supported.
         *
         * @param {Object} props Bag of one or more key-value pairs whose key is
         *   a property and value is the new value to set for that property.
         * @param {boolean=} setReadOnly When true, any private values set in
         *   `props` will be set. By default, `setProperties` will not set
         *   `readOnly: true` root properties.
         * @return {void}
         * @public
         */

      }, {
        key: 'setProperties',
        value: function setProperties(props, setReadOnly) {
          for (var path in props) {
            if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
              //TODO(kschaaf): explicitly disallow paths in setProperty?
              // wildcard observers currently only pass the first changed path
              // in the `info` object, and you could do some odd things batching
              // paths, e.g. {'foo.bar': {...}, 'foo': null}
              this._setPendingPropertyOrPath(path, props[path], true);
            }
          }
          this._invalidateProperties();
        }

        /**
         * Overrides `PropertyAccessors` so that property accessor
         * side effects are not enabled until after client dom is fully ready.
         * Also calls `_flushClients` callback to ensure client dom is enabled
         * that was not enabled as a result of flushing properties.
         *
         * @override
         * @return {void}
         */

      }, {
        key: 'ready',
        value: function ready() {
          // It is important that `super.ready()` is not called here as it
          // immediately turns on accessors. Instead, we wait until `readyClients`
          // to enable accessors to provide a guarantee that clients are ready
          // before processing any accessors side effects.
          this._flushProperties();
          // If no data was pending, `_flushProperties` will not `flushClients`
          // so ensure this is done.
          if (!this.__dataClientsReady) {
            this._flushClients();
          }
          // Before ready, client notifications do not trigger _flushProperties.
          // Therefore a flush is necessary here if data has been set.
          if (this.__dataPending) {
            this._flushProperties();
          }
        }

        /**
         * Implements `PropertyAccessors`'s properties changed callback.
         *
         * Runs each class of effects for the batch of changed properties in
         * a specific order (compute, propagate, reflect, observe, notify).
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         */

      }, {
        key: '_propertiesChanged',
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {
          // ----------------------------
          // let c = Object.getOwnPropertyNames(changedProps || {});
          // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
          // if (window.debug) { debugger; }
          // ----------------------------
          var hasPaths = this.__dataHasPaths;
          this.__dataHasPaths = false;
          // Compute properties
          runComputedEffects(this, changedProps, oldProps, hasPaths);
          // Clear notify properties prior to possible reentry (propagate, observe),
          // but after computing effects have a chance to add to them
          var notifyProps = this.__dataToNotify;
          this.__dataToNotify = null;
          // Propagate properties to clients
          this._propagatePropertyChanges(changedProps, oldProps, hasPaths);
          // Flush clients
          this._flushClients();
          // Reflect properties
          runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths);
          // Observe properties
          runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths);
          // Notify properties to host
          if (notifyProps) {
            runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
          }
          // Clear temporary cache at end of turn
          if (this.__dataCounter == 1) {
            this.__dataTemp = {};
          }
          // ----------------------------
          // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
          // ----------------------------
        }

        /**
         * Called to propagate any property changes to stamped template nodes
         * managed by this element.
         *
         * @param {Object} changedProps Bag of changed properties
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {void}
         * @protected
         */

      }, {
        key: '_propagatePropertyChanges',
        value: function _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
          if (this[TYPES.PROPAGATE]) {
            runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
          }
          var templateInfo = this.__templateInfo;
          while (templateInfo) {
            runEffects(this, templateInfo.propertyEffects, changedProps, oldProps, hasPaths, templateInfo.nodeList);
            templateInfo = templateInfo.nextTemplateInfo;
          }
        }

        /**
         * Aliases one data path as another, such that path notifications from one
         * are routed to the other.
         *
         * @param {string | !Array<string|number>} to Target path to link.
         * @param {string | !Array<string|number>} from Source path to link.
         * @return {void}
         * @public
         */

      }, {
        key: 'linkPaths',
        value: function linkPaths(to, from) {
          to = normalize(to);
          from = normalize(from);
          this.__dataLinkedPaths = this.__dataLinkedPaths || {};
          this.__dataLinkedPaths[to] = from;
        }

        /**
         * Removes a data path alias previously established with `_linkPaths`.
         *
         * Note, the path to unlink should be the target (`to`) used when
         * linking the paths.
         *
         * @param {string | !Array<string|number>} path Target path to unlink.
         * @return {void}
         * @public
         */

      }, {
        key: 'unlinkPaths',
        value: function unlinkPaths(path) {
          path = normalize(path);
          if (this.__dataLinkedPaths) {
            delete this.__dataLinkedPaths[path];
          }
        }

        /**
         * Notify that an array has changed.
         *
         * Example:
         *
         *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
         *     ...
         *     this.items.splice(1, 1, {name: 'Sam'});
         *     this.items.push({name: 'Bob'});
         *     this.notifySplices('items', [
         *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
         *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
         *     ]);
         *
         * @param {string} path Path that should be notified.
         * @param {Array} splices Array of splice records indicating ordered
         *   changes that occurred to the array. Each record should have the
         *   following fields:
         *    * index: index at which the change occurred
         *    * removed: array of items that were removed from this index
         *    * addedCount: number of new items added at this index
         *    * object: a reference to the array in question
         *    * type: the string literal 'splice'
         *
         *   Note that splice records _must_ be normalized such that they are
         *   reported in index order (raw results from `Object.observe` are not
         *   ordered and must be normalized/merged before notifying).
         * @return {void}
         * @public
        */

      }, {
        key: 'notifySplices',
        value: function notifySplices(path, splices) {
          var info = { path: '' };
          var array = /** @type {Array} */get$1(this, path, info);
          _notifySplices(this, array, info.path, splices);
        }

        /**
         * Convenience method for reading a value from a path.
         *
         * Note, if any part in the path is undefined, this method returns
         * `undefined` (this method does not throw when dereferencing undefined
         * paths).
         *
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `users.12.name` or `['users', 12, 'name']`).
         * @param {Object=} root Root object from which the path is evaluated.
         * @return {*} Value at the path, or `undefined` if any part of the path
         *   is undefined.
         * @public
         */

      }, {
        key: 'get',
        value: function get$$1(path, root$$1) {
          return get$1(root$$1 || this, path);
        }

        /**
         * Convenience method for setting a value to a path and notifying any
         * elements bound to the same path.
         *
         * Note, if any part in the path except for the last is undefined,
         * this method does nothing (this method does not throw when
         * dereferencing undefined paths).
         *
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
         * @param {*} value Value to set at the specified path.
         * @param {Object=} root Root object from which the path is evaluated.
         *   When specified, no notification will occur.
         * @return {void}
         * @public
        */

      }, {
        key: 'set',
        value: function set$$1(path, value, root$$1) {
          if (root$$1) {
            set$1(root$$1, path, value);
          } else {
            if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][/** @type {string} */path]) {
              if (this._setPendingPropertyOrPath(path, value, true)) {
                this._invalidateProperties();
              }
            }
          }
        }

        /**
         * Adds items onto the end of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to push onto array
         * @return {number} New length of the array.
         * @public
         */

      }, {
        key: 'push',
        value: function push(path) {
          var info = { path: '' };
          var array = /** @type {Array}*/get$1(this, path, info);
          var len = array.length;

          for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            items[_key - 1] = arguments[_key];
          }

          var ret = array.push.apply(array, items);
          if (items.length) {
            notifySplice(this, array, info.path, len, items.length, []);
          }
          return ret;
        }

        /**
         * Removes an item from the end of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */

      }, {
        key: 'pop',
        value: function pop(path) {
          var info = { path: '' };
          var array = /** @type {Array} */get$1(this, path, info);
          var hadLength = Boolean(array.length);
          var ret = array.pop();
          if (hadLength) {
            notifySplice(this, array, info.path, array.length, 0, [ret]);
          }
          return ret;
        }

        /**
         * Starting from the start index specified, removes 0 or more items
         * from the array and inserts 0 or more new items in their place.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.splice`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {number} start Index from which to start removing/inserting.
         * @param {number} deleteCount Number of items to remove.
         * @param {...*} items Items to insert into array.
         * @return {Array} Array of removed items.
         * @public
         */

      }, {
        key: 'splice',
        value: function splice(path, start, deleteCount) {
          for (var _len2 = arguments.length, items = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            items[_key2 - 3] = arguments[_key2];
          }

          var info = { path: '' };
          var array = /** @type {Array} */get$1(this, path, info);
          // Normalize fancy native splice handling of crazy start values
          if (start < 0) {
            start = array.length - Math.floor(-start);
          } else if (start) {
            start = Math.floor(start);
          }
          // array.splice does different things based on the number of arguments
          // you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
          // do different things. In the former, the whole array is cleared. In the
          // latter, no items are removed.
          // This means that we need to detect whether 1. one of the arguments
          // is actually passed in and then 2. determine how many arguments
          // we should pass on to the native array.splice
          //
          var ret = void 0;
          // Omit any additional arguments if they were not passed in
          if (arguments.length === 2) {
            ret = array.splice(start);
            // Either start was undefined and the others were defined, but in this
            // case we can safely pass on all arguments
            //
            // Note: this includes the case where none of the arguments were passed in,
            // e.g. this.splice('array'). However, if both start and deleteCount
            // are undefined, array.splice will not modify the array (as expected)
          } else {
            ret = array.splice.apply(array, [start, deleteCount].concat(items));
          }
          // At the end, check whether any items were passed in (e.g. insertions)
          // or if the return array contains items (e.g. deletions).
          // Only notify if items were added or deleted.
          if (items.length || ret.length) {
            notifySplice(this, array, info.path, start, items.length, ret);
          }
          return ret;
        }

        /**
         * Removes an item from the beginning of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */

      }, {
        key: 'shift',
        value: function shift(path) {
          var info = { path: '' };
          var array = /** @type {Array} */get$1(this, path, info);
          var hadLength = Boolean(array.length);
          var ret = array.shift();
          if (hadLength) {
            notifySplice(this, array, info.path, 0, 0, [ret]);
          }
          return ret;
        }

        /**
         * Adds items onto the beginning of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to insert info array
         * @return {number} New length of the array.
         * @public
         */

      }, {
        key: 'unshift',
        value: function unshift(path) {
          var info = { path: '' };
          var array = /** @type {Array} */get$1(this, path, info);

          for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            items[_key3 - 1] = arguments[_key3];
          }

          var ret = array.unshift.apply(array, items);
          if (items.length) {
            notifySplice(this, array, info.path, 0, items.length, []);
          }
          return ret;
        }

        /**
         * Notify that a path has changed.
         *
         * Example:
         *
         *     this.item.user.name = 'Bob';
         *     this.notifyPath('item.user.name');
         *
         * @param {string} path Path that should be notified.
         * @param {*=} value Value at the path (optional).
         * @return {void}
         * @public
        */

      }, {
        key: 'notifyPath',
        value: function notifyPath(path, value) {
          /** @type {string} */
          var propPath = void 0;
          if (arguments.length == 1) {
            // Get value if not supplied
            var info = { path: '' };
            value = get$1(this, path, info);
            propPath = info.path;
          } else if (Array.isArray(path)) {
            // Normalize path if needed
            propPath = normalize(path);
          } else {
            propPath = /** @type{string} */path;
          }
          if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
            this._invalidateProperties();
          }
        }

        /**
         * Equivalent to static `createReadOnlyProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */

      }, {
        key: '_createReadOnlyProperty',
        value: function _createReadOnlyProperty(property, protectedSetter) {
          this._addPropertyEffect(property, TYPES.READ_ONLY);
          if (protectedSetter) {
            this['_set' + upper(property)] = /** @this {PropertyEffects} */function (value) {
              this._setProperty(property, value);
            };
          }
        }

        /**
         * Equivalent to static `createPropertyObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: '_createPropertyObserver',
        value: function _createPropertyObserver(property, method, dynamicFn) {
          var info = { property: property, method: method, dynamicFn: Boolean(dynamicFn) };
          this._addPropertyEffect(property, TYPES.OBSERVE, {
            fn: runObserverEffect, info: info, trigger: { name: property }
          });
          if (dynamicFn) {
            this._addPropertyEffect( /** @type {string} */method, TYPES.OBSERVE, {
              fn: runObserverEffect, info: info, trigger: { name: method }
            });
          }
        }

        /**
         * Equivalent to static `createMethodObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: '_createMethodObserver',
        value: function _createMethodObserver(expression, dynamicFn) {
          var sig = parseMethod(expression);
          if (!sig) {
            throw new Error("Malformed observer expression '" + expression + "'");
          }
          createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
        }

        /**
         * Equivalent to static `createNotifyingProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: '_createNotifyingProperty',
        value: function _createNotifyingProperty(property) {
          this._addPropertyEffect(property, TYPES.NOTIFY, {
            fn: runNotifyEffect,
            info: {
              eventName: CaseMap.camelToDashCase(property) + '-changed',
              property: property
            }
          });
        }

        /**
         * Equivalent to static `createReflectedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: '_createReflectedProperty',
        value: function _createReflectedProperty(property) {
          var attr = this.constructor.attributeNameForProperty(property);
          if (attr[0] === '-') {
            console.warn('Property ' + property + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
          } else {
            this._addPropertyEffect(property, TYPES.REFLECT, {
              fn: runReflectEffect,
              info: {
                attrName: attr
              }
            });
          }
        }

        /**
         * Equivalent to static `createComputedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: '_createComputedProperty',
        value: function _createComputedProperty(property, expression, dynamicFn) {
          var sig = parseMethod(expression);
          if (!sig) {
            throw new Error("Malformed computed expression '" + expression + "'");
          }
          createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
        }

        // -- static class methods ------------

        /**
         * Ensures an accessor exists for the specified property, and adds
         * to a list of "property effects" that will run when the accessor for
         * the specified property is set.  Effects are grouped by "type", which
         * roughly corresponds to a phase in effect processing.  The effect
         * metadata should be in the following form:
         *
         *     {
         *       fn: effectFunction, // Reference to function to call to perform effect
         *       info: { ... }       // Effect metadata passed to function
         *       trigger: {          // Optional triggering metadata; if not provided
         *         name: string      // the property is treated as a wildcard
         *         structured: boolean
         *         wildcard: boolean
         *       }
         *     }
         *
         * Effects are called from `_propertiesChanged` in the following order by
         * type:
         *
         * 1. COMPUTE
         * 2. PROPAGATE
         * 3. REFLECT
         * 4. OBSERVE
         * 5. NOTIFY
         *
         * Effect functions are called with the following signature:
         *
         *     effectFunction(inst, path, props, oldProps, info, hasPaths)
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: '_bindTemplate',


        // -- binding ----------------------------------------------

        /**
         * Equivalent to static `bindTemplate` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * This method may be called on the prototype (for prototypical template
         * binding, to avoid creating accessors every instance) once per prototype,
         * and will be called with `runtimeBinding: true` by `_stampTemplate` to
         * create and link an instance of the template metadata associated with a
         * particular stamping.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @param {boolean=} instanceBinding When false (default), performs
         *   "prototypical" binding of the template and overwrites any previously
         *   bound template for the class. When true (as passed from
         *   `_stampTemplate`), the template info is instanced and linked into
         *   the list of bound templates.
         * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
         *   this is an instance of the prototypical template info
         * @protected
         */
        value: function _bindTemplate(template, instanceBinding) {
          var templateInfo = this.constructor._parseTemplate(template);
          var wasPreBound = this.__templateInfo == templateInfo;
          // Optimization: since this is called twice for proto-bound templates,
          // don't attempt to recreate accessors if this template was pre-bound
          if (!wasPreBound) {
            for (var prop in templateInfo.propertyEffects) {
              this._createPropertyAccessor(prop);
            }
          }
          if (instanceBinding) {
            // For instance-time binding, create instance of template metadata
            // and link into list of templates if necessary
            templateInfo = /** @type {!TemplateInfo} */Object.create(templateInfo);
            templateInfo.wasPreBound = wasPreBound;
            if (!wasPreBound && this.__templateInfo) {
              var last = this.__templateInfoLast || this.__templateInfo;
              this.__templateInfoLast = last.nextTemplateInfo = templateInfo;
              templateInfo.previousTemplateInfo = last;
              return templateInfo;
            }
          }
          return this.__templateInfo = templateInfo;
        }

        /**
         * Adds a property effect to the given template metadata, which is run
         * at the "propagate" stage of `_propertiesChanged` when the template
         * has been bound to the element via `_bindTemplate`.
         *
         * The `effect` object should match the format in `_addPropertyEffect`.
         *
         * @param {Object} templateInfo Template metadata to add effect to
         * @param {string} prop Property that should trigger the effect
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: '_stampTemplate',


        /**
         * Stamps the provided template and performs instance-time setup for
         * Polymer template features, including data bindings, declarative event
         * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
         * is returned containing the stamped DOM, ready for insertion into the
         * DOM.
         *
         * This method may be called more than once; however note that due to
         * `shadycss` polyfill limitations, only styles from templates prepared
         * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
         * to the shadow root and support CSS custom properties), and note that
         * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
         * any styles required by in runtime-stamped templates must be included
         * in the main element template.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         * @protected
         */
        value: function _stampTemplate(template) {
          // Ensures that created dom is `_enqueueClient`'d to this element so
          // that it can be flushed on next call to `_flushProperties`
          hostStack.beginHosting(this);
          var dom = get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_stampTemplate', this).call(this, template);
          hostStack.endHosting(this);
          var templateInfo = /** @type {!TemplateInfo} */this._bindTemplate(template, true);
          // Add template-instance-specific data to instanced templateInfo
          templateInfo.nodeList = dom.nodeList;
          // Capture child nodes to allow unstamping of non-prototypical templates
          if (!templateInfo.wasPreBound) {
            var nodes = templateInfo.childNodes = [];
            for (var n = dom.firstChild; n; n = n.nextSibling) {
              nodes.push(n);
            }
          }
          dom.templateInfo = templateInfo;
          // Setup compound storage, 2-way listeners, and dataHost for bindings
          setupBindings(this, templateInfo);
          // Flush properties into template nodes if already booted
          if (this.__dataReady) {
            runEffects(this, templateInfo.propertyEffects, this.__data, null, false, templateInfo.nodeList);
          }
          return dom;
        }

        /**
         * Removes and unbinds the nodes previously contained in the provided
         * DocumentFragment returned from `_stampTemplate`.
         *
         * @param {!StampedTemplate} dom DocumentFragment previously returned
         *   from `_stampTemplate` associated with the nodes to be removed
         * @return {void}
         * @protected
         */

      }, {
        key: '_removeBoundDom',
        value: function _removeBoundDom(dom) {
          // Unlink template info
          var templateInfo = dom.templateInfo;
          if (templateInfo.previousTemplateInfo) {
            templateInfo.previousTemplateInfo.nextTemplateInfo = templateInfo.nextTemplateInfo;
          }
          if (templateInfo.nextTemplateInfo) {
            templateInfo.nextTemplateInfo.previousTemplateInfo = templateInfo.previousTemplateInfo;
          }
          if (this.__templateInfoLast == templateInfo) {
            this.__templateInfoLast = templateInfo.previousTemplateInfo;
          }
          templateInfo.previousTemplateInfo = templateInfo.nextTemplateInfo = null;
          // Remove stamped nodes
          var nodes = templateInfo.childNodes;
          for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            node.parentNode.removeChild(node);
          }
        }

        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @override
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: 'PROPERTY_EFFECT_TYPES',
        get: function get$$1() {
          return TYPES;
        }
      }], [{
        key: 'addPropertyEffect',
        value: function addPropertyEffect(property, type, effect) {
          this.prototype._addPropertyEffect(property, type, effect);
        }

        /**
         * Creates a single-property observer for the given property.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: 'createPropertyObserver',
        value: function createPropertyObserver(property, method, dynamicFn) {
          this.prototype._createPropertyObserver(property, method, dynamicFn);
        }

        /**
         * Creates a multi-property "method observer" based on the provided
         * expression, which should be a string in the form of a normal JavaScript
         * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
         * should correspond to a property or path in the context of this
         * prototype (or instance), or may be a literal string or number.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         * @return {void}
         *   whether method names should be included as a dependency to the effect.
         * @protected
         */

      }, {
        key: 'createMethodObserver',
        value: function createMethodObserver(expression, dynamicFn) {
          this.prototype._createMethodObserver(expression, dynamicFn);
        }

        /**
         * Causes the setter for the given property to dispatch `<property>-changed`
         * events to notify of changes to the property.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: 'createNotifyingProperty',
        value: function createNotifyingProperty(property) {
          this.prototype._createNotifyingProperty(property);
        }

        /**
         * Creates a read-only accessor for the given property.
         *
         * To set the property, use the protected `_setProperty` API.
         * To create a custom protected setter (e.g. `_setMyProp()` for
         * property `myProp`), pass `true` for `protectedSetter`.
         *
         * Note, if the property will have other property effects, this method
         * should be called first, before adding other effects.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */

      }, {
        key: 'createReadOnlyProperty',
        value: function createReadOnlyProperty(property, protectedSetter) {
          this.prototype._createReadOnlyProperty(property, protectedSetter);
        }

        /**
         * Causes the setter for the given property to reflect the property value
         * to a (dash-cased) attribute of the same name.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: 'createReflectedProperty',
        value: function createReflectedProperty(property) {
          this.prototype._createReflectedProperty(property);
        }

        /**
         * Creates a computed property whose value is set to the result of the
         * method described by the given `expression` each time one or more
         * arguments to the method changes.  The expression should be a string
         * in the form of a normal JavaScript function signature:
         * `'methodName(arg1, [..., argn])'`
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
         *   method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: 'createComputedProperty',
        value: function createComputedProperty(property, expression, dynamicFn) {
          this.prototype._createComputedProperty(property, expression, dynamicFn);
        }

        /**
         * Parses the provided template to ensure binding effects are created
         * for them, and then ensures property accessors are created for any
         * dependent properties in the template.  Binding effects for bound
         * templates are stored in a linked list on the instance so that
         * templates can be efficiently stamped and unstamped.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @return {!TemplateInfo} Template metadata object
         * @protected
         */

      }, {
        key: 'bindTemplate',
        value: function bindTemplate(template) {
          return this.prototype._bindTemplate(template);
        }
      }, {
        key: '_addTemplatePropertyEffect',
        value: function _addTemplatePropertyEffect(templateInfo, prop, effect) {
          var hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
          hostProps[prop] = true;
          var effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
          var propEffects = effects[prop] = effects[prop] || [];
          propEffects.push(effect);
        }
      }, {
        key: '_parseTemplateNode',
        value: function _parseTemplateNode(node, templateInfo, nodeInfo) {
          var noted = get(PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects), '_parseTemplateNode', this).call(this, node, templateInfo, nodeInfo);
          if (node.nodeType === Node.TEXT_NODE) {
            var parts = this._parseBindings(node.textContent, templateInfo);
            if (parts) {
              // Initialize the textContent with any literal parts
              // NOTE: default to a space here so the textNode remains; some browsers
              // (IE) omit an empty textNode following cloneNode/importNode.
              node.textContent = literalFromParts(parts) || ' ';
              addBinding(this, templateInfo, nodeInfo, 'text', 'textContent', parts);
              noted = true;
            }
          }
          return noted;
        }

        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from attributes.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @override
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: '_parseTemplateNodeAttribute',
        value: function _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          var parts = this._parseBindings(value, templateInfo);
          if (parts) {
            // Attribute or property
            var origName = name;
            var kind = 'property';
            // The only way we see a capital letter here is if the attr has
            // a capital letter in it per spec. In this case, to make sure
            // this binding works, we go ahead and make the binding to the attribute.
            if (capitalAttributeRegex.test(name)) {
              kind = 'attribute';
            } else if (name[name.length - 1] == '$') {
              name = name.slice(0, -1);
              kind = 'attribute';
            }
            // Initialize attribute bindings with any literal parts
            var literal = literalFromParts(parts);
            if (literal && kind == 'attribute') {
              node.setAttribute(name, literal);
            }
            // Clear attribute before removing, since IE won't allow removing
            // `value` attribute if it previously had a value (can't
            // unconditionally set '' before removing since attributes with `$`
            // can't be set using setAttribute)
            if (node.localName === 'input' && origName === 'value') {
              node.setAttribute(origName, '');
            }
            // Remove annotation
            node.removeAttribute(origName);
            // Case hackery: attributes are lower-case, but bind targets
            // (properties) are case sensitive. Gambit is to map dash-case to
            // camel-case: `foo-bar` becomes `fooBar`.
            // Attribute bindings are excepted.
            if (kind === 'property') {
              name = dashToCamelCase(name);
            }
            addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
            return true;
          } else {
            return get(PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects), '_parseTemplateNodeAttribute', this).call(this, node, templateInfo, nodeInfo, name, value);
          }
        }

        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * binding the properties that a nested template depends on to the template
         * as `_host_<property>`.
         *
         * @override
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: '_parseTemplateNestedTemplate',
        value: function _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
          var noted = get(PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects), '_parseTemplateNestedTemplate', this).call(this, node, templateInfo, nodeInfo);
          // Merge host props into outer template and add bindings
          var hostProps = nodeInfo.templateInfo.hostProps;
          var mode = '{';
          for (var source in hostProps) {
            var parts = [{ mode: mode, source: source, dependencies: [source] }];
            addBinding(this, templateInfo, nodeInfo, 'property', '_host_' + source, parts);
          }
          return noted;
        }

        /**
         * Called to parse text in a template (either attribute values or
         * textContent) into binding metadata.
         *
         * Any overrides of this method should return an array of binding part
         * metadata  representing one or more bindings found in the provided text
         * and any "literal" text in between.  Any non-literal parts will be passed
         * to `_evaluateBinding` when any dependencies change.  The only required
         * fields of each "part" in the returned array are as follows:
         *
         * - `dependencies` - Array containing trigger metadata for each property
         *   that should trigger the binding to update
         * - `literal` - String containing text if the part represents a literal;
         *   in this case no `dependencies` are needed
         *
         * Additional metadata for use by `_evaluateBinding` may be provided in
         * each part object as needed.
         *
         * The default implementation handles the following types of bindings
         * (one or more may be intermixed with literal strings):
         * - Property binding: `[[prop]]`
         * - Path binding: `[[object.prop]]`
         * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
         * - Two-way property or path bindings (supports negation):
         *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
         * - Inline computed method (supports negation):
         *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
         *
         * The default implementation uses a regular expression for best
         * performance. However, the regular expression uses a white-list of
         * allowed characters in a data-binding, which causes problems for
         * data-bindings that do use characters not in this white-list.
         *
         * Instead of updating the white-list with all allowed characters,
         * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
         * that uses a state machine instead. This state machine is able to handle
         * all characters. However, it is slightly less performant, therefore we
         * extracted it into a separate optional mixin.
         *
         * @param {string} text Text to parse from attribute or textContent
         * @param {Object} templateInfo Current template metadata
         * @return {Array<!BindingPart>} Array of binding part metadata
         * @protected
         */

      }, {
        key: '_parseBindings',
        value: function _parseBindings(text, templateInfo) {
          var parts = [];
          var lastIndex = 0;
          var m = void 0;
          // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
          // Regex matches:
          //        Iteration 1:  Iteration 2:
          // m[1]: '{{'          '[['
          // m[2]: ''            '!'
          // m[3]: 'prop'        'compute(foo,bar)'
          while ((m = bindingRegex.exec(text)) !== null) {
            // Add literal part
            if (m.index > lastIndex) {
              parts.push({ literal: text.slice(lastIndex, m.index) });
            }
            // Add binding part
            var mode = m[1][0];
            var negate = Boolean(m[2]);
            var source = m[3].trim();
            var customEvent = false,
                notifyEvent = '',
                colon = -1;
            if (mode == '{' && (colon = source.indexOf('::')) > 0) {
              notifyEvent = source.substring(colon + 2);
              source = source.substring(0, colon);
              customEvent = true;
            }
            var signature = parseMethod(source);
            var dependencies = [];
            if (signature) {
              // Inline computed function
              var args = signature.args,
                  methodName = signature.methodName;

              for (var i = 0; i < args.length; i++) {
                var arg = args[i];
                if (!arg.literal) {
                  dependencies.push(arg);
                }
              }
              var dynamicFns = templateInfo.dynamicFns;
              if (dynamicFns && dynamicFns[methodName] || signature.static) {
                dependencies.push(methodName);
                signature.dynamicFn = true;
              }
            } else {
              // Property or path
              dependencies.push(source);
            }
            parts.push({
              source: source, mode: mode, negate: negate, customEvent: customEvent, signature: signature, dependencies: dependencies,
              event: notifyEvent
            });
            lastIndex = bindingRegex.lastIndex;
          }
          // Add a final literal part
          if (lastIndex && lastIndex < text.length) {
            var literal = text.substring(lastIndex);
            if (literal) {
              parts.push({
                literal: literal
              });
            }
          }
          if (parts.length) {
            return parts;
          } else {
            return null;
          }
        }

        /**
         * Called to evaluate a previously parsed binding part based on a set of
         * one or more changed dependencies.
         *
         * @param {this} inst Element that should be used as scope for
         *   binding dependencies
         * @param {BindingPart} part Binding part metadata
         * @param {string} path Property/path that triggered this effect
         * @param {Object} props Bag of current property changes
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {*} Value the binding part evaluated to
         * @protected
         */

      }, {
        key: '_evaluateBinding',
        value: function _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
          var value = void 0;
          if (part.signature) {
            value = runMethodEffect(inst, path, props, oldProps, part.signature);
          } else if (path != part.source) {
            value = get$1(inst, part.source);
          } else {
            if (hasPaths && isPath(path)) {
              value = get$1(inst, path);
            } else {
              value = inst.__data[path];
            }
          }
          if (part.negate) {
            value = !value;
          }
          return value;
        }
      }]);
      return PropertyEffects;
    }(propertyEffectsBase);

    return PropertyEffects;
  });

  /**
   * Helper api for enqueuing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */

  var HostStack = function () {
    function HostStack() {
      classCallCheck(this, HostStack);

      this.stack = [];
    }

    /**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */


    createClass(HostStack, [{
      key: 'registerHost',
      value: function registerHost(inst) {
        if (this.stack.length) {
          var host = this.stack[this.stack.length - 1];
          host._enqueueClient(inst);
        }
      }

      /**
       * @param {*} inst Instance to begin hosting
       * @return {void}
       */

    }, {
      key: 'beginHosting',
      value: function beginHosting(inst) {
        this.stack.push(inst);
      }

      /**
       * @param {*} inst Instance to end hosting
       * @return {void}
       */

    }, {
      key: 'endHosting',
      value: function endHosting(inst) {
        var stackLen = this.stack.length;
        if (stackLen && this.stack[stackLen - 1] == inst) {
          this.stack.pop();
        }
      }
    }]);
    return HostStack;
  }();

  var hostStack = new HostStack();

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Element class mixin that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * Subclassers may provide the following static getters to return metadata
   * used to configure Polymer's features for the class:
   *
   * - `static get is()`: When the template is provided via a `dom-module`,
   *   users should return the `dom-module` id from a static `is` getter.  If
   *   no template is needed or the template is provided directly via the
   *   `template` getter, there is no need to define `is` for the element.
   *
   * - `static get template()`: Users may provide the template directly (as
   *   opposed to via `dom-module`) by implementing a static `template` getter.
   *   The getter must return an `HTMLTemplateElement`.
   *
   * - `static get properties()`: Should return an object describing
   *   property-related metadata used by Polymer features (key: property name
   *   value: object containing property metadata). Valid keys in per-property
   *   metadata include:
   *   - `type` (String|Number|Object|Array|...): Used by
   *     `attributeChangedCallback` to determine how string-based attributes
   *     are deserialized to JavaScript property values.
   *   - `notify` (boolean): Causes a change in the property to fire a
   *     non-bubbling event called `<property>-changed`. Elements that have
   *     enabled two-way binding to the property use this event to observe changes.
   *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *     To set a read-only property, use the private setter method
   *     `_setProperty(property, value)`.
   *   - `observer` (string): Observer method name that will be called when
   *     the property changes. The arguments of the method are
   *     `(value, previousValue)`.
   *   - `computed` (string): String describing method and dependent properties
   *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *     Computed properties are read-only by default and can only be changed
   *     via the return value of the computing method.
   *
   * - `static get observers()`: Array of strings describing multi-property
   *   observer methods and their dependent properties (e.g.
   *   `'observeABC(a, b, c)'`).
   *
   * The base class provides default implementations for the following standard
   * custom element lifecycle callbacks; users may override these, but should
   * call the super method to ensure
   * - `constructor`: Run when the element is created or upgraded
   * - `connectedCallback`: Run each time the element is connected to the
   *   document
   * - `disconnectedCallback`: Run each time the element is disconnected from
   *   the document
   * - `attributeChangedCallback`: Run each time an attribute in
   *   `observedAttributes` is set or removed (note: this element's default
   *   `observedAttributes` implementation will automatically return an array
   *   of dash-cased attributes based on `properties`)
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyEffects
   * @appliesMixin PropertiesMixin
   * @property rootPath {string} Set to the value of `rootPath`,
   *   which defaults to the main document path
   * @property importPath {string} Set to the value of the class's static
   *   `importPath` property, which defaults to the path of this element's
   *   `dom-module` (when `is` is used), but can be overridden for other
   *   import strategies.
   * @summary Element class mixin that provides the core API for Polymer's
   * meta-programming features.
   */
  var ElementMixin = dedupingMixin(function (base) {

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_PropertiesMixin}
     * @private
     */
    var polymerElementBase = PropertiesMixin(PropertyEffects(base));

    /**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `_properties`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {PolymerElementConstructor} constructor Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */
    function propertyDefaults(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults', constructor))) {
        constructor.__propertyDefaults = null;
        var props = constructor._properties;
        for (var p in props) {
          var info = props[p];
          if ('value' in info) {
            constructor.__propertyDefaults = constructor.__propertyDefaults || {};
            constructor.__propertyDefaults[p] = info;
          }
        }
      }
      return constructor.__propertyDefaults;
    }

    /**
     * Returns a memoized version of the the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */
    function ownObservers(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers', constructor))) {
        constructor.__ownObservers = constructor.hasOwnProperty(JSCompiler_renameProperty('observers', constructor)) ?
        /** @type {PolymerElementConstructor} */constructor.observers : null;
      }
      return constructor.__ownObservers;
    }

    /**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should may contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * also automatically is set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */
    function createPropertyFromConfig(proto, name, info, allProps) {
      // computed forces readOnly...
      if (info.computed) {
        info.readOnly = true;
      }
      // Note, since all computed properties are readOnly, this prevents
      // adding additional computed property effects (which leads to a confusing
      // setup where multiple triggers for setting a property)
      // While we do have `hasComputedEffect` this is set on the property's
      // dependencies rather than itself.
      if (info.computed && !proto._hasReadOnlyEffect(name)) {
        proto._createComputedProperty(name, info.computed, allProps);
      }
      if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
        proto._createReadOnlyProperty(name, !info.computed);
      }
      if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
        proto._createReflectedProperty(name);
      }
      if (info.notify && !proto._hasNotifyEffect(name)) {
        proto._createNotifyingProperty(name);
      }
      // always add observer
      if (info.observer) {
        proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
      }
      // always create the mapping from attribute back to property for deserialization.
      proto._addPropertyToAttributeMap(name);
    }

    /**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */
    function processElementStyles(klass, template, is, baseURI) {
      var templateStyles = template.content.querySelectorAll('style');
      var stylesWithImports = stylesFromTemplate(template);
      // insert styles from <link rel="import" type="css"> at the top of the template
      var linkedStyles = stylesFromModuleImports(is);
      var firstTemplateChild = template.content.firstElementChild;
      for (var idx = 0; idx < linkedStyles.length; idx++) {
        var s = linkedStyles[idx];
        s.textContent = klass._processStyleText(s.textContent, baseURI);
        template.content.insertBefore(s, firstTemplateChild);
      }
      // keep track of the last "concrete" style in the template we have encountered
      var templateStyleIndex = 0;
      // ensure all gathered styles are actually in this template.
      for (var i = 0; i < stylesWithImports.length; i++) {
        var _s = stylesWithImports[i];
        var templateStyle = templateStyles[templateStyleIndex];
        // if the style is not in this template, it's been "included" and
        // we put a clone of it in the template before the style that included it
        if (templateStyle !== _s) {
          _s = _s.cloneNode(true);
          templateStyle.parentNode.insertBefore(_s, templateStyle);
        } else {
          templateStyleIndex++;
        }
        _s.textContent = klass._processStyleText(_s.textContent, baseURI);
      }
      if (window.ShadyCSS) {
        window.ShadyCSS.prepareTemplate(template, is);
      }
    }

    /**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */

    var PolymerElement = function (_polymerElementBase) {
      inherits(PolymerElement, _polymerElementBase);
      createClass(PolymerElement, null, [{
        key: '_finalizeClass',


        /**
         * Override of PropertiesMixin _finalizeClass to create observers and
         * find the template.
         * @return {void}
         * @protected
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        value: function _finalizeClass() {
          get(PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement), '_finalizeClass', this).call(this);
          if (this.hasOwnProperty(JSCompiler_renameProperty('is', this)) && this.is) {
            register(this.prototype);
          }
          var observers = ownObservers(this);
          if (observers) {
            this.createObservers(observers, this._properties);
          }
          // note: create "working" template that is finalized at instance time
          var template = /** @type {PolymerElementConstructor} */this.template;
          if (template) {
            if (typeof template === 'string') {
              console.error('template getter must return HTMLTemplateElement');
              template = null;
            } else {
              template = template.cloneNode(true);
            }
          }

          this.prototype._template = template;
        }

        /**
         * Override of PropertiesChanged createProperties to create accessors
         * and property effects for all of the properties.
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: 'createProperties',
        value: function createProperties(props) {
          for (var p in props) {
            createPropertyFromConfig(this.prototype, p, props[p], props);
          }
        }

        /**
         * Creates observers for the given `observers` array.
         * Leverages `PropertyEffects` to create observers.
         * @param {Object} observers Array of observer descriptors for
         *   this class
         * @param {Object} dynamicFns Object containing keys for any properties
         *   that are functions and should trigger the effect when the function
         *   reference is changed
         * @return {void}
         * @protected
         */

      }, {
        key: 'createObservers',
        value: function createObservers(observers, dynamicFns) {
          var proto = this.prototype;
          for (var i = 0; i < observers.length; i++) {
            proto._createMethodObserver(observers[i], dynamicFns);
          }
        }

        /**
         * Returns the template that will be stamped into this element's shadow root.
         *
         * If a `static get is()` getter is defined, the default implementation
         * will return the first `<template>` in a `dom-module` whose `id`
         * matches this element's `is`.
         *
         * Users may override this getter to return an arbitrary template
         * (in which case the `is` getter is unnecessary). The template returned
         * must be an `HTMLTemplateElement`.
         *
         * Note that when subclassing, if the super class overrode the default
         * implementation and the subclass would like to provide an alternate
         * template via a `dom-module`, it should override this getter and
         * return `DomModule.import(this.is, 'template')`.
         *
         * If a subclass would like to modify the super class template, it should
         * clone it rather than modify it in place.  If the getter does expensive
         * work such as cloning/modifying a template, it should memoize the
         * template for maximum performance:
         *
         *   let memoizedTemplate;
         *   class MySubClass extends MySuperClass {
         *     static get template() {
         *       if (!memoizedTemplate) {
         *         memoizedTemplate = super.template.cloneNode(true);
         *         let subContent = document.createElement('div');
         *         subContent.textContent = 'This came from MySubClass';
         *         memoizedTemplate.content.appendChild(subContent);
         *       }
         *       return memoizedTemplate;
         *     }
         *   }
         *
         * @return {HTMLTemplateElement|string} Template to be stamped
         */

      }, {
        key: 'template',
        get: function get$$1() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_template', this))) {
            this._template = DomModule && DomModule.import(
            /** @type {PolymerElementConstructor}*/this.is, 'template') ||
            // note: implemented so a subclass can retrieve the super
            // template; call the super impl this way so that `this` points
            // to the superclass.
            Object.getPrototypeOf( /** @type {PolymerElementConstructor}*/this.prototype).constructor.template;
          }
          return this._template;
        }

        /**
         * Path matching the url from which the element was imported.
         *
         * This path is used to resolve url's in template style cssText.
         * The `importPath` property is also set on element instances and can be
         * used to create bindings relative to the import path.
         *
         * For elements defined in ES modules, users should implement
         * `static get importMeta() { return import.meta; }`, and the default
         * implementation of `importPath` will  return `import.meta.url`'s path.
         * For elements defined in HTML imports, this getter will return the path
         * to the document containing a `dom-module` element matching this
         * element's static `is` property.
         *
         * Note, this path should contain a trailing `/`.
         *
         * @return {string} The import path for this element class
         * @suppress {missingProperties}
         */

      }, {
        key: 'importPath',
        get: function get$$1() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
            var meta = this.importMeta;
            if (meta) {
              this._importPath = pathFromUrl(meta.url);
            } else {
              var module = DomModule && DomModule.import( /** @type {PolymerElementConstructor} */this.is);
              this._importPath = module && module.assetpath || Object.getPrototypeOf( /** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath;
            }
          }
          return this._importPath;
        }
      }]);

      function PolymerElement() {
        classCallCheck(this, PolymerElement);

        /** @type {HTMLTemplateElement} */
        var _this = possibleConstructorReturn(this, (PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement)).call(this));

        _this._template;
        /** @type {string} */
        _this._importPath;
        /** @type {string} */
        _this.rootPath;
        /** @type {string} */
        _this.importPath;
        /** @type {StampedTemplate | HTMLElement | ShadowRoot} */
        _this.root;
        /** @type {!Object<string, !Element>} */
        _this.$;
        return _this;
      }

      /**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */


      createClass(PolymerElement, [{
        key: '_initializeProperties',
        value: function _initializeProperties() {
          this.constructor.finalize();
          // note: finalize template when we have access to `localName` to
          // avoid dependence on `is` for polyfilling styling.
          this.constructor._finalizeTemplate( /** @type {!HTMLElement} */this.localName);
          get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), '_initializeProperties', this).call(this);
          // set path defaults
          this.rootPath = rootPath;
          this.importPath = this.constructor.importPath;
          // apply property defaults...
          var p$ = propertyDefaults(this.constructor);
          if (!p$) {
            return;
          }
          for (var p in p$) {
            var info = p$[p];
            // Don't set default value if there is already an own property, which
            // happens when a `properties` property with default but no effects had
            // a property set (e.g. bound) by its host before upgrade
            if (!this.hasOwnProperty(p)) {
              var value = typeof info.value == 'function' ? info.value.call(this) : info.value;
              // Set via `_setProperty` if there is an accessor, to enable
              // initializing readOnly property defaults
              if (this._hasAccessor(p)) {
                this._setPendingProperty(p, value, true);
              } else {
                this[p] = value;
              }
            }
          }
        }

        /**
         * Gather style text for a style element in the template.
         *
         * @param {string} cssText Text containing styling to process
         * @param {string} baseURI Base URI to rebase CSS paths against
         * @return {string} The processed CSS text
         * @protected
         */

      }, {
        key: 'connectedCallback',


        /**
         * Provides a default implementation of the standard Custom Elements
         * `connectedCallback`.
         *
         * The default implementation enables the property effects system and
         * flushes any pending properties, and updates shimmed CSS properties
         * when using the ShadyCSS scoping/custom properties polyfill.
         *
         * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
         * @return {void}
         */
        value: function connectedCallback() {
          if (window.ShadyCSS && this._template) {
            window.ShadyCSS.styleElement( /** @type {!HTMLElement} */this);
          }
          get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), 'connectedCallback', this).call(this);
        }

        /**
         * Stamps the element template.
         *
         * @return {void}
         * @override
         */

      }, {
        key: 'ready',
        value: function ready() {
          if (this._template) {
            this.root = this._stampTemplate(this._template);
            this.$ = this.root.$;
          }
          get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), 'ready', this).call(this);
        }

        /**
         * Implements `PropertyEffects`'s `_readyClients` call. Attaches
         * element dom by calling `_attachDom` with the dom stamped from the
         * element's template via `_stampTemplate`. Note that this allows
         * client dom to be attached to the element prior to any observers
         * running.
         *
         * @return {void}
         * @override
         */

      }, {
        key: '_readyClients',
        value: function _readyClients() {
          if (this._template) {
            this.root = this._attachDom( /** @type {StampedTemplate} */this.root);
          }
          // The super._readyClients here sets the clients initialized flag.
          // We must wait to do this until after client dom is created/attached
          // so that this flag can be checked to prevent notifications fired
          // during this process from being handled before clients are ready.
          get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), '_readyClients', this).call(this);
        }

        /**
         * Attaches an element's stamped dom to itself. By default,
         * this method creates a `shadowRoot` and adds the dom to it.
         * However, this method may be overridden to allow an element
         * to put its dom in another location.
         *
         * @throws {Error}
         * @suppress {missingReturn}
         * @param {StampedTemplate} dom to attach to the element.
         * @return {ShadowRoot} node to which the dom has been attached.
         */

      }, {
        key: '_attachDom',
        value: function _attachDom(dom) {
          if (this.attachShadow) {
            if (dom) {
              if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
              }
              this.shadowRoot.appendChild(dom);
              return this.shadowRoot;
            }
            return null;
          } else {
            throw new Error('ShadowDOM not available. ' +
            // TODO(sorvell): move to compile-time conditional when supported
            'PolymerElement can create dom as children instead of in ' + 'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
          }
        }

        /**
         * When using the ShadyCSS scoping and custom property shim, causes all
         * shimmed styles in this element (and its subtree) to be updated
         * based on current custom property values.
         *
         * The optional parameter overrides inline custom property styles with an
         * object of properties where the keys are CSS properties, and the values
         * are strings.
         *
         * Example: `this.updateStyles({'--color': 'blue'})`
         *
         * These properties are retained unless a value of `null` is set.
         *
         * Note: This function does not support updating CSS mixins.
         * You can not dynamically change the value of an `@apply`.
         *
         * @param {Object=} properties Bag of custom property key/values to
         *   apply to this element.
         * @return {void}
         * @suppress {invalidCasts}
         */

      }, {
        key: 'updateStyles',
        value: function updateStyles(properties) {
          if (window.ShadyCSS) {
            window.ShadyCSS.styleSubtree( /** @type {!HTMLElement} */this, properties);
          }
        }

        /**
         * Rewrites a given URL relative to a base URL. The base URL defaults to
         * the original location of the document containing the `dom-module` for
         * this element. This method will return the same URL before and after
         * bundling.
         *
         * Note that this function performs no resolution for URLs that start
         * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
         * URL resolution, use `window.URL`.
         *
         * @param {string} url URL to resolve.
         * @param {string=} base Optional base URL to resolve against, defaults
         * to the element's `importPath`
         * @return {string} Rewritten URL relative to base
         */

      }, {
        key: 'resolveUrl',
        value: function resolveUrl$$1(url, base) {
          if (!base && this.importPath) {
            base = resolveUrl(this.importPath);
          }
          return resolveUrl(url, base);
        }

        /**
         * Overrides `PropertyAccessors` to add map of dynamic functions on
         * template info, for consumption by `PropertyEffects` template binding
         * code. This map determines which method templates should have accessors
         * created for them.
         *
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }], [{
        key: '_processStyleText',
        value: function _processStyleText(cssText, baseURI) {
          return resolveCss(cssText, baseURI);
        }

        /**
        * Configures an element `proto` to function with a given `template`.
        * The element name `is` and extends `ext` must be specified for ShadyCSS
        * style scoping.
        *
        * @param {string} is Tag name (or type extension name) for this element
        * @return {void}
        * @protected
        */

      }, {
        key: '_finalizeTemplate',
        value: function _finalizeTemplate(is) {
          /** @const {HTMLTemplateElement} */
          var template = this.prototype._template;
          if (template && !template.__polymerFinalized) {
            template.__polymerFinalized = true;
            var importPath = this.importPath;
            var baseURI = importPath ? resolveUrl(importPath) : '';
            // e.g. support `include="module-name"`, and ShadyCSS
            processElementStyles(this, template, is, baseURI);
            this.prototype._bindTemplate(template);
          }
        }
      }, {
        key: '_parseTemplateContent',
        value: function _parseTemplateContent(template, templateInfo, nodeInfo) {
          templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
          return get(PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement), '_parseTemplateContent', this).call(this, template, templateInfo, nodeInfo);
        }
      }]);
      return PolymerElement;
    }(polymerElementBase);

    return PolymerElement;
  });

  /**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */
  function register(prototype) {
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   */
  var Debouncer = function () {
    function Debouncer() {
      classCallCheck(this, Debouncer);

      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */


    createClass(Debouncer, [{
      key: 'setConfig',
      value: function setConfig(asyncModule, callback) {
        var _this = this;

        this._asyncModule = asyncModule;
        this._callback = callback;
        this._timer = this._asyncModule.run(function () {
          _this._timer = null;
          _this._callback();
        });
      }
      /**
       * Cancels an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */

    }, {
      key: 'cancel',
      value: function cancel() {
        if (this.isActive()) {
          this._asyncModule.cancel(this._timer);
          this._timer = null;
        }
      }
      /**
       * Flushes an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */

    }, {
      key: 'flush',
      value: function flush() {
        if (this.isActive()) {
          this.cancel();
          this._callback();
        }
      }
      /**
       * Returns true if the debouncer is active.
       *
       * @return {boolean} True if active.
       */

    }, {
      key: 'isActive',
      value: function isActive() {
        return this._timer != null;
      }
      /**
       * Creates a debouncer if no debouncer is passed as a parameter
       * or it cancels an active debouncer otherwise. The following
       * example shows how a debouncer can be called multiple times within a
       * microtask and "debounced" such that the provided callback function is
       * called once. Add this method to a custom element:
       *
       * ```js
       * import {microTask} from '@polymer/polymer/lib/utils/async.js';
       * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
       * // ...
       *
       * _debounceWork() {
       *   this._debounceJob = Debouncer.debounce(this._debounceJob,
       *       microTask, () => this._doWork());
       * }
       * ```
       *
       * If the `_debounceWork` method is called multiple times within the same
       * microtask, the `_doWork` function will be called only once at the next
       * microtask checkpoint.
       *
       * Note: In testing it is often convenient to avoid asynchrony. To accomplish
       * this with a debouncer, you can use `enqueueDebouncer` and
       * `flush`. For example, extend the above example by adding
       * `enqueueDebouncer(this._debounceJob)` at the end of the
       * `_debounceWork` method. Then in a test, call `flush` to ensure
       * the debouncer has completed.
       *
       * @param {Debouncer?} debouncer Debouncer object.
       * @param {!AsyncInterface} asyncModule Object with Async interface
       * @param {function()} callback Callback to run.
       * @return {!Debouncer} Returns a debouncer object.
       */

    }], [{
      key: 'debounce',
      value: function debounce(debouncer, asyncModule, callback) {
        if (debouncer instanceof Debouncer) {
          debouncer.cancel();
        } else {
          debouncer = new Debouncer();
        }
        debouncer.setConfig(asyncModule, callback);
        return debouncer;
      }
    }]);
    return Debouncer;
  }();

  // detect native touch action support
  var HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
  var GESTURE_KEY = '__polymerGestures';
  var HANDLED_OBJ = '__polymerGesturesHandled';
  var TOUCH_ACTION = '__polymerGesturesTouchAction';
  // radius for tap and track
  var TAP_DISTANCE = 25;
  var TRACK_DISTANCE = 5;
  // number of last N track positions to keep
  var TRACK_LENGTH = 2;

  // Disabling "mouse" handlers for 2500ms is enough
  var MOUSE_TIMEOUT = 2500;
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'click'];
  // an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
  var MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];
  var MOUSE_HAS_BUTTONS = function () {
    try {
      return new MouseEvent('test', { buttons: 1 }).buttons === 1;
    } catch (e) {
      return false;
    }
  }();

  /**
   * @param {string} name Possible mouse event name
   * @return {boolean} true if mouse event, false if not
   */
  function isMouseEvent(name) {
    return MOUSE_EVENTS.indexOf(name) > -1;
  }

  /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
  // check for passive event listeners
  var SUPPORTS_PASSIVE = false;
  (function () {
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          SUPPORTS_PASSIVE = true;
        }
      });
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}
  })();

  /**
   * Generate settings for event listeners, dependant on `passiveTouchGestures`
   *
   * @param {string} eventName Event name to determine if `{passive}` option is
   *   needed
   * @return {{passive: boolean} | undefined} Options to use for addEventListener
   *   and removeEventListener
   */
  function PASSIVE_TOUCH(eventName) {
    if (isMouseEvent(eventName) || eventName === 'touchend') {
      return;
    }
    if (HAS_NATIVE_TA && SUPPORTS_PASSIVE && passiveTouchGestures) {
      return { passive: true };
    } else {
      return;
    }
  }

  // Check for touch-only devices
  var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);

  // keep track of any labels hit by the mouseCanceller
  /** @type {!Array<!HTMLLabelElement>} */
  var clickedLabels = [];

  /** @type {!Object<boolean>} */
  var labellable = {
    'button': true,
    'input': true,
    'keygen': true,
    'meter': true,
    'output': true,
    'textarea': true,
    'progress': true,
    'select': true
  };

  // Defined at https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
  /** @type {!Object<boolean>} */
  var canBeDisabled = {
    'button': true,
    'command': true,
    'fieldset': true,
    'input': true,
    'keygen': true,
    'optgroup': true,
    'option': true,
    'select': true,
    'textarea': true
  };

  /**
   * @param {HTMLElement} el Element to check labelling status
   * @return {boolean} element can have labels
   */
  function canBeLabelled(el) {
    return labellable[el.localName] || false;
  }

  /**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */
  function matchingLabels(el) {
    var labels = Array.prototype.slice.call( /** @type {HTMLInputElement} */el.labels || []);
    // IE doesn't have `labels` and Safari doesn't populate `labels`
    // if element is in a shadowroot.
    // In this instance, finding the non-ancestor labels is enough,
    // as the mouseCancellor code will handle ancstor labels
    if (!labels.length) {
      labels = [];
      var root = el.getRootNode();
      // if there is an id on `el`, check for all labels with a matching `for` attribute
      if (el.id) {
        var matching = root.querySelectorAll('label[for = ' + el.id + ']');
        for (var i = 0; i < matching.length; i++) {
          labels.push( /** @type {!HTMLLabelElement} */matching[i]);
        }
      }
    }
    return labels;
  }

  // touch will make synthetic mouse events
  // `preventDefault` on touchend will cancel them,
  // but this breaks `<input>` focus and link clicks
  // disable mouse handlers for MOUSE_TIMEOUT ms after
  // a touchend to ignore synthetic mouse events
  var mouseCanceller = function mouseCanceller(mouseEvent) {
    // Check for sourceCapabilities, used to distinguish synthetic events
    // if mouseEvent did not come from a device that fires touch events,
    // it was made by a real mouse and should be counted
    // http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
    var sc = mouseEvent.sourceCapabilities;
    if (sc && !sc.firesTouchEvents) {
      return;
    }
    // skip synthetic mouse events
    mouseEvent[HANDLED_OBJ] = { skip: true };
    // disable "ghost clicks"
    if (mouseEvent.type === 'click') {
      var clickFromLabel = false;
      var path = mouseEvent.composedPath && mouseEvent.composedPath();
      if (path) {
        for (var i = 0; i < path.length; i++) {
          if (path[i].nodeType === Node.ELEMENT_NODE) {
            if (path[i].localName === 'label') {
              clickedLabels.push(path[i]);
            } else if (canBeLabelled(path[i])) {
              var ownerLabels = matchingLabels(path[i]);
              // check if one of the clicked labels is labelling this element
              for (var j = 0; j < ownerLabels.length; j++) {
                clickFromLabel = clickFromLabel || clickedLabels.indexOf(ownerLabels[j]) > -1;
              }
            }
          }
          if (path[i] === POINTERSTATE.mouse.target) {
            return;
          }
        }
      }
      // if one of the clicked labels was labelling the target element,
      // this is not a ghost click
      if (clickFromLabel) {
        return;
      }
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
  };

  /**
   * @param {boolean=} setup True to add, false to remove.
   * @return {void}
   */
  function setupTeardownMouseCanceller(setup) {
    var events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;
    for (var i = 0, en; i < events.length; i++) {
      en = events[i];
      if (setup) {
        // reset clickLabels array
        clickedLabels.length = 0;
        document.addEventListener(en, mouseCanceller, true);
      } else {
        document.removeEventListener(en, mouseCanceller, true);
      }
    }
  }

  function ignoreMouse(e) {
    if (!POINTERSTATE.mouse.mouseIgnoreJob) {
      setupTeardownMouseCanceller(true);
    }
    var unset = function unset() {
      setupTeardownMouseCanceller();
      POINTERSTATE.mouse.target = null;
      POINTERSTATE.mouse.mouseIgnoreJob = null;
    };
    POINTERSTATE.mouse.target = e.composedPath()[0];
    POINTERSTATE.mouse.mouseIgnoreJob = Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob, timeOut.after(MOUSE_TIMEOUT), unset);
  }

  /**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */
  function hasLeftMouseButton(ev) {
    var type = ev.type;
    // exit early if the event is not a mouse event
    if (!isMouseEvent(type)) {
      return false;
    }
    // ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
    // instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
    if (type === 'mousemove') {
      // allow undefined for testing events
      var buttons = ev.buttons === undefined ? 1 : ev.buttons;
      if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
        buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
      }
      // buttons is a bitmask, check that the left button bit is set (1)
      return Boolean(buttons & 1);
    } else {
      // allow undefined for testing events
      var button = ev.button === undefined ? 0 : ev.button;
      // ev.button is 0 in mousedown/mouseup/click for left button activation
      return button === 0;
    }
  }

  function isSyntheticClick(ev) {
    if (ev.type === 'click') {
      // ev.detail is 0 for HTMLElement.click in most browsers
      if (ev.detail === 0) {
        return true;
      }
      // in the worst case, check that the x/y position of the click is within
      // the bounding box of the target of the event
      // Thanks IE 10 >:(
      var t = _findOriginalTarget(ev);
      // make sure the target of the event is an element so we can use getBoundingClientRect,
      // if not, just assume it is a synthetic click
      if (!t.nodeType || /** @type {Element} */t.nodeType !== Node.ELEMENT_NODE) {
        return true;
      }
      var bcr = /** @type {Element} */t.getBoundingClientRect();
      // use page x/y to account for scrolling
      var x = ev.pageX,
          y = ev.pageY;
      // ev is a synthetic click if the position is outside the bounding box of the target
      return !(x >= bcr.left && x <= bcr.right && y >= bcr.top && y <= bcr.bottom);
    }
    return false;
  }

  var POINTERSTATE = {
    mouse: {
      target: null,
      mouseIgnoreJob: null
    },
    touch: {
      x: 0,
      y: 0,
      id: -1,
      scrollDecided: false
    }
  };

  function firstTouchAction(ev) {
    var ta = 'auto';
    var path = ev.composedPath && ev.composedPath();
    if (path) {
      for (var i = 0, n; i < path.length; i++) {
        n = path[i];
        if (n[TOUCH_ACTION]) {
          ta = n[TOUCH_ACTION];
          break;
        }
      }
    }
    return ta;
  }

  function trackDocument(stateObj, movefn, upfn) {
    stateObj.movefn = movefn;
    stateObj.upfn = upfn;
    document.addEventListener('mousemove', movefn);
    document.addEventListener('mouseup', upfn);
  }

  function untrackDocument(stateObj) {
    document.removeEventListener('mousemove', stateObj.movefn);
    document.removeEventListener('mouseup', stateObj.upfn);
    stateObj.movefn = null;
    stateObj.upfn = null;
  }

  // use a document-wide touchend listener to start the ghost-click prevention mechanism
  // Use passive event listeners, if supported, to not affect scrolling performance
  document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? { passive: true } : false);

  var gestures = {};
  var recognizers = [];

  /**
   * Finds the element rendered on the screen at the provided coordinates.
   *
   * Similar to `document.elementFromPoint`, but pierces through
   * shadow roots.
   *
   * @param {number} x Horizontal pixel coordinate
   * @param {number} y Vertical pixel coordinate
   * @return {Element} Returns the deepest shadowRoot inclusive element
   * found at the screen position given.
   */
  function deepTargetFind(x, y) {
    var node = document.elementFromPoint(x, y);
    var next = node;
    // this code path is only taken when native ShadowDOM is used
    // if there is a shadowroot, it may have a node at x/y
    // if there is not a shadowroot, exit the loop
    while (next && next.shadowRoot && !window.ShadyDOM) {
      // if there is a node at x/y in the shadowroot, look deeper
      var oldNext = next;
      next = next.shadowRoot.elementFromPoint(x, y);
      // on Safari, elementFromPoint may return the shadowRoot host
      if (oldNext === next) {
        break;
      }
      if (next) {
        node = next;
      }
    }
    return node;
  }

  /**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */
  function _findOriginalTarget(ev) {
    // shadowdom
    if (ev.composedPath) {
      var targets = /** @type {!Array<!EventTarget>} */ev.composedPath();
      // It shouldn't be, but sometimes targets is empty (window on Safari).
      return targets.length > 0 ? targets[0] : ev.target;
    }
    // shadydom
    return ev.target;
  }

  /**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */
  function _handleNative(ev) {
    var handled = void 0;
    var type = ev.type;
    var node = ev.currentTarget;
    var gobj = node[GESTURE_KEY];
    if (!gobj) {
      return;
    }
    var gs = gobj[type];
    if (!gs) {
      return;
    }
    if (!ev[HANDLED_OBJ]) {
      ev[HANDLED_OBJ] = {};
      if (type.slice(0, 5) === 'touch') {
        ev = /** @type {TouchEvent} */ev; // eslint-disable-line no-self-assign
        var t = ev.changedTouches[0];
        if (type === 'touchstart') {
          // only handle the first finger
          if (ev.touches.length === 1) {
            POINTERSTATE.touch.id = t.identifier;
          }
        }
        if (POINTERSTATE.touch.id !== t.identifier) {
          return;
        }
        if (!HAS_NATIVE_TA) {
          if (type === 'touchstart' || type === 'touchmove') {
            _handleTouchAction(ev);
          }
        }
      }
    }
    handled = ev[HANDLED_OBJ];
    // used to ignore synthetic mouse events
    if (handled.skip) {
      return;
    }
    // reset recognizer state
    for (var i = 0, r; i < recognizers.length; i++) {
      r = recognizers[i];
      if (gs[r.name] && !handled[r.name]) {
        if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
          r.reset();
        }
      }
    }
    // enforce gesture recognizer order
    for (var _i = 0, _r; _i < recognizers.length; _i++) {
      _r = recognizers[_i];
      if (gs[_r.name] && !handled[_r.name]) {
        handled[_r.name] = true;
        _r[type](ev);
      }
    }
  }

  /**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */
  function _handleTouchAction(ev) {
    var t = ev.changedTouches[0];
    var type = ev.type;
    if (type === 'touchstart') {
      POINTERSTATE.touch.x = t.clientX;
      POINTERSTATE.touch.y = t.clientY;
      POINTERSTATE.touch.scrollDecided = false;
    } else if (type === 'touchmove') {
      if (POINTERSTATE.touch.scrollDecided) {
        return;
      }
      POINTERSTATE.touch.scrollDecided = true;
      var ta = firstTouchAction(ev);
      var shouldPrevent = false;
      var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
      var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
      if (!ev.cancelable) ; else if (ta === 'none') {
        shouldPrevent = true;
      } else if (ta === 'pan-x') {
        shouldPrevent = dy > dx;
      } else if (ta === 'pan-y') {
        shouldPrevent = dx > dy;
      }
      if (shouldPrevent) {
        ev.preventDefault();
      } else {
        _prevent('track');
      }
    }
  }

  /**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!Node} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */
  function addListener(node, evType, handler) {
    if (gestures[evType]) {
      _add(node, evType, handler);
      return true;
    }
    return false;
  }

  /**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!Node} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */
  function removeListener(node, evType, handler) {
    if (gestures[evType]) {
      _remove(node, evType, handler);
      return true;
    }
    return false;
  }

  /**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!Node} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */
  function _add(node, evType, handler) {
    var recognizer = gestures[evType];
    var deps = recognizer.deps;
    var name = recognizer.name;
    var gobj = node[GESTURE_KEY];
    if (!gobj) {
      node[GESTURE_KEY] = gobj = {};
    }
    for (var i = 0, dep, gd; i < deps.length; i++) {
      dep = deps[i];
      // don't add mouse handlers on iOS because they cause gray selection overlays
      if (IS_TOUCH_ONLY && isMouseEvent(dep) && dep !== 'click') {
        continue;
      }
      gd = gobj[dep];
      if (!gd) {
        gobj[dep] = gd = { _count: 0 };
      }
      if (gd._count === 0) {
        node.addEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
      }
      gd[name] = (gd[name] || 0) + 1;
      gd._count = (gd._count || 0) + 1;
    }
    node.addEventListener(evType, handler);
    if (recognizer.touchAction) {
      setTouchAction(node, recognizer.touchAction);
    }
  }

  /**
   * automate event listener removal for native events
   *
   * @private
   * @param {!Node} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */
  function _remove(node, evType, handler) {
    var recognizer = gestures[evType];
    var deps = recognizer.deps;
    var name = recognizer.name;
    var gobj = node[GESTURE_KEY];
    if (gobj) {
      for (var i = 0, dep, gd; i < deps.length; i++) {
        dep = deps[i];
        gd = gobj[dep];
        if (gd && gd[name]) {
          gd[name] = (gd[name] || 1) - 1;
          gd._count = (gd._count || 1) - 1;
          if (gd._count === 0) {
            node.removeEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
          }
        }
      }
    }
    node.removeEventListener(evType, handler);
  }

  /**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */
  function register$1(recog) {
    recognizers.push(recog);
    for (var i = 0; i < recog.emits.length; i++) {
      gestures[recog.emits[i]] = recog;
    }
  }

  /**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */
  function _findRecognizerByEvent(evName) {
    for (var i = 0, r; i < recognizers.length; i++) {
      r = recognizers[i];
      for (var j = 0, n; j < r.emits.length; j++) {
        n = r.emits[j];
        if (n === evName) {
          return r;
        }
      }
    }
    return null;
  }

  /**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!Node} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */
  function setTouchAction(node, value) {
    if (HAS_NATIVE_TA) {
      // NOTE: add touchAction async so that events can be added in
      // custom element constructors. Otherwise we run afoul of custom
      // elements restriction against settings attributes (style) in the
      // constructor.
      microTask.run(function () {
        node.style.touchAction = value;
      });
    }
    node[TOUCH_ACTION] = value;
  }

  /**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */
  function _fire(target, type, detail) {
    var ev = new Event(type, { bubbles: true, cancelable: true, composed: true });
    ev.detail = detail;
    target.dispatchEvent(ev);
    // forward `preventDefault` in a clean way
    if (ev.defaultPrevented) {
      var preventer = detail.preventer || detail.sourceEvent;
      if (preventer && preventer.preventDefault) {
        preventer.preventDefault();
      }
    }
  }

  /**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */
  function _prevent(evName) {
    var recognizer = _findRecognizerByEvent(evName);
    if (recognizer.info) {
      recognizer.info.prevent = true;
    }
  }

  /**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */
  function resetMouseCanceller() {
    if (POINTERSTATE.mouse.mouseIgnoreJob) {
      POINTERSTATE.mouse.mouseIgnoreJob.flush();
    }
  }

  /* eslint-disable valid-jsdoc */

  register$1({
    name: 'downup',
    deps: ['mousedown', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['down', 'up'],

    info: {
      movefn: null,
      upfn: null
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function reset() {
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function mousedown(e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }
      var t = _findOriginalTarget(e);
      var self = this;
      var movefn = function movefn(e) {
        if (!hasLeftMouseButton(e)) {
          downupFire('up', t, e);
          untrackDocument(self.info);
        }
      };
      var upfn = function upfn(e) {
        if (hasLeftMouseButton(e)) {
          downupFire('up', t, e);
        }
        untrackDocument(self.info);
      };
      trackDocument(this.info, movefn, upfn);
      downupFire('down', t, e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function touchstart(e) {
      downupFire('down', _findOriginalTarget(e), e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function touchend(e) {
      downupFire('up', _findOriginalTarget(e), e.changedTouches[0], e);
    }
  });

  /**
   * @param {string} type
   * @param {EventTarget} target
   * @param {Event|Touch} event
   * @param {Event=} preventer
   * @return {void}
   */
  function downupFire(type, target, event, preventer) {
    if (!target) {
      return;
    }
    _fire(target, type, {
      x: event.clientX,
      y: event.clientY,
      sourceEvent: event,
      preventer: preventer,
      prevent: function prevent(e) {
        return _prevent(e);
      }
    });
  }

  register$1({
    name: 'track',
    touchAction: 'none',
    deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['track'],

    info: {
      x: 0,
      y: 0,
      state: 'start',
      started: false,
      moves: [],
      /** @this {GestureInfo} */
      addMove: function addMove(move) {
        if (this.moves.length > TRACK_LENGTH) {
          this.moves.shift();
        }
        this.moves.push(move);
      },
      movefn: null,
      upfn: null,
      prevent: false
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function reset() {
      this.info.state = 'start';
      this.info.started = false;
      this.info.moves = [];
      this.info.x = 0;
      this.info.y = 0;
      this.info.prevent = false;
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function mousedown(e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }
      var t = _findOriginalTarget(e);
      var self = this;
      var movefn = function movefn(e) {
        var x = e.clientX,
            y = e.clientY;
        if (trackHasMovedEnough(self.info, x, y)) {
          // first move is 'start', subsequent moves are 'move', mouseup is 'end'
          self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
          if (self.info.state === 'start') {
            // if and only if tracking, always prevent tap
            _prevent('tap');
          }
          self.info.addMove({ x: x, y: y });
          if (!hasLeftMouseButton(e)) {
            // always fire "end"
            self.info.state = 'end';
            untrackDocument(self.info);
          }
          if (t) {
            trackFire(self.info, t, e);
          }
          self.info.started = true;
        }
      };
      var upfn = function upfn(e) {
        if (self.info.started) {
          movefn(e);
        }

        // remove the temporary listeners
        untrackDocument(self.info);
      };
      // add temporary document listeners as mouse retargets
      trackDocument(this.info, movefn, upfn);
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function touchstart(e) {
      var ct = e.changedTouches[0];
      this.info.x = ct.clientX;
      this.info.y = ct.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchmove: function touchmove(e) {
      var t = _findOriginalTarget(e);
      var ct = e.changedTouches[0];
      var x = ct.clientX,
          y = ct.clientY;
      if (trackHasMovedEnough(this.info, x, y)) {
        if (this.info.state === 'start') {
          // if and only if tracking, always prevent tap
          _prevent('tap');
        }
        this.info.addMove({ x: x, y: y });
        trackFire(this.info, t, ct);
        this.info.state = 'track';
        this.info.started = true;
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function touchend(e) {
      var t = _findOriginalTarget(e);
      var ct = e.changedTouches[0];
      // only trackend if track was started and not aborted
      if (this.info.started) {
        // reset started state on up
        this.info.state = 'end';
        this.info.addMove({ x: ct.clientX, y: ct.clientY });
        trackFire(this.info, t, ct);
      }
    }
  });

  /**
   * @param {!GestureInfo} info
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  function trackHasMovedEnough(info, x, y) {
    if (info.prevent) {
      return false;
    }
    if (info.started) {
      return true;
    }
    var dx = Math.abs(info.x - x);
    var dy = Math.abs(info.y - y);
    return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
  }

  /**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */
  function trackFire(info, target, touch) {
    if (!target) {
      return;
    }
    var secondlast = info.moves[info.moves.length - 2];
    var lastmove = info.moves[info.moves.length - 1];
    var dx = lastmove.x - info.x;
    var dy = lastmove.y - info.y;
    var ddx = void 0,
        ddy = 0;
    if (secondlast) {
      ddx = lastmove.x - secondlast.x;
      ddy = lastmove.y - secondlast.y;
    }
    _fire(target, 'track', {
      state: info.state,
      x: touch.clientX,
      y: touch.clientY,
      dx: dx,
      dy: dy,
      ddx: ddx,
      ddy: ddy,
      sourceEvent: touch,
      hover: function hover() {
        return deepTargetFind(touch.clientX, touch.clientY);
      }
    });
  }

  register$1({
    name: 'tap',
    deps: ['mousedown', 'click', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['click', 'touchend']
    },
    emits: ['tap'],
    info: {
      x: NaN,
      y: NaN,
      prevent: false
    },
    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function reset() {
      this.info.x = NaN;
      this.info.y = NaN;
      this.info.prevent = false;
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function mousedown(e) {
      if (hasLeftMouseButton(e)) {
        this.info.x = e.clientX;
        this.info.y = e.clientY;
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    click: function click(e) {
      if (hasLeftMouseButton(e)) {
        trackForward(this.info, e);
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function touchstart(e) {
      var touch = e.changedTouches[0];
      this.info.x = touch.clientX;
      this.info.y = touch.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function touchend(e) {
      trackForward(this.info, e.changedTouches[0], e);
    }
  });

  /**
   * @param {!GestureInfo} info
   * @param {Event | Touch} e
   * @param {Event=} preventer
   * @return {void}
   */
  function trackForward(info, e, preventer) {
    var dx = Math.abs(e.clientX - info.x);
    var dy = Math.abs(e.clientY - info.y);
    // find original target from `preventer` for TouchEvents, or `e` for MouseEvents
    var t = _findOriginalTarget(preventer || e);
    if (!t || canBeDisabled[/** @type {!HTMLElement} */t.localName] && t.hasAttribute('disabled')) {
      return;
    }
    // dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
    if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
      // prevent taps from being generated if an event has canceled them
      if (!info.prevent) {
        _fire(t, 'tap', {
          x: e.clientX,
          y: e.clientY,
          sourceEvent: e,
          preventer: preventer
        });
      }
    }
  }

  /* eslint-enable valid-jsdoc */

  /** @deprecated */
  var findOriginalTarget = _findOriginalTarget;

  /** @deprecated */
  var add = addListener;

  /** @deprecated */
  var remove$1 = removeListener;

  var gestures$0 = /*#__PURE__*/Object.freeze({
    prevent: _prevent,
    gestures: gestures,
    recognizers: recognizers,
    deepTargetFind: deepTargetFind,
    addListener: addListener,
    removeListener: removeListener,
    register: register$1,
    setTouchAction: setTouchAction,
    resetMouseCanceller: resetMouseCanceller,
    findOriginalTarget: findOriginalTarget,
    add: add,
    remove: remove$1
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var gestures$1 = gestures$0;

  /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `TemplateStamp`.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides API for adding Polymer's
   *   cross-platform
   * gesture events to nodes
   */
  var GestureEventListeners = dedupingMixin(
  /**
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_GestureEventListeners}
     */
    var GestureEventListeners = function (_superClass) {
      inherits(GestureEventListeners, _superClass);

      function GestureEventListeners() {
        classCallCheck(this, GestureEventListeners);
        return possibleConstructorReturn(this, (GestureEventListeners.__proto__ || Object.getPrototypeOf(GestureEventListeners)).apply(this, arguments));
      }

      createClass(GestureEventListeners, [{
        key: '_addEventListenerToNode',

        /**
         * Add the event listener to the node if it is a gestures event.
         *
         * @param {!Node} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         * @override
         */
        value: function _addEventListenerToNode(node, eventName, handler) {
          if (!gestures$1.addListener(node, eventName, handler)) {
            get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), '_addEventListenerToNode', this).call(this, node, eventName, handler);
          }
        }

        /**
         * Remove the event listener to the node if it is a gestures event.
         *
         * @param {!Node} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         * @override
         */

      }, {
        key: '_removeEventListenerFromNode',
        value: function _removeEventListenerFromNode(node, eventName, handler) {
          if (!gestures$1.removeListener(node, eventName, handler)) {
            get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), '_removeEventListenerFromNode', this).call(this, node, eventName, handler);
          }
        }
      }]);
      return GestureEventListeners;
    }(superClass);

    return GestureEventListeners;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var HOST_DIR = /:host\(:dir\((ltr|rtl)\)\)/g;
  var HOST_DIR_REPLACMENT = ':host([dir="$1"])';

  var EL_DIR = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;
  var EL_DIR_REPLACMENT = ':host([dir="$2"]) $1';

  /**
   * @type {!Array<!Polymer_DirMixin>}
   */
  var DIR_INSTANCES = [];

  /** @type {MutationObserver} */
  var observer = null;

  var DOCUMENT_DIR = '';

  function getRTL() {
    DOCUMENT_DIR = document.documentElement.getAttribute('dir');
  }

  /**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */
  function setRTL(instance) {
    if (!instance.__autoDirOptOut) {
      var el = /** @type {!HTMLElement} */instance;
      el.setAttribute('dir', DOCUMENT_DIR);
    }
  }

  function updateDirection() {
    getRTL();
    DOCUMENT_DIR = document.documentElement.getAttribute('dir');
    for (var i = 0; i < DIR_INSTANCES.length; i++) {
      setRTL(DIR_INSTANCES[i]);
    }
  }

  function takeRecords() {
    if (observer && observer.takeRecords().length) {
      updateDirection();
    }
  }

  /**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   */
  var DirMixin = dedupingMixin(function (base) {

    if (!observer) {
      getRTL();
      observer = new MutationObserver(updateDirection);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    }

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     * @private
     */
    var elementBase = PropertyAccessors(base);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_DirMixin}
     */

    var Dir = function (_elementBase) {
      inherits(Dir, _elementBase);
      createClass(Dir, null, [{
        key: '_processStyleText',


        /**
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        value: function _processStyleText(cssText, baseURI) {
          cssText = get(Dir.__proto__ || Object.getPrototypeOf(Dir), '_processStyleText', this).call(this, cssText, baseURI);
          cssText = this._replaceDirInCssText(cssText);
          return cssText;
        }

        /**
         * Replace `:dir` in the given CSS text
         *
         * @param {string} text CSS text to replace DIR
         * @return {string} Modified CSS
         */

      }, {
        key: '_replaceDirInCssText',
        value: function _replaceDirInCssText(text) {
          var replacedText = text;
          replacedText = replacedText.replace(HOST_DIR, HOST_DIR_REPLACMENT);
          replacedText = replacedText.replace(EL_DIR, EL_DIR_REPLACMENT);
          if (text !== replacedText) {
            this.__activateDir = true;
          }
          return replacedText;
        }
      }]);

      function Dir() {
        classCallCheck(this, Dir);

        /** @type {boolean} */
        var _this = possibleConstructorReturn(this, (Dir.__proto__ || Object.getPrototypeOf(Dir)).call(this));

        _this.__autoDirOptOut = false;
        return _this;
      }

      /**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */


      createClass(Dir, [{
        key: 'ready',
        value: function ready() {
          get(Dir.prototype.__proto__ || Object.getPrototypeOf(Dir.prototype), 'ready', this).call(this);
          this.__autoDirOptOut = /** @type {!HTMLElement} */this.hasAttribute('dir');
        }

        /**
         * @suppress {missingProperties} If it exists on elementBase, it can be super'd
         * @return {void}
         */

      }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
          if (elementBase.prototype.connectedCallback) {
            get(Dir.prototype.__proto__ || Object.getPrototypeOf(Dir.prototype), 'connectedCallback', this).call(this);
          }
          if (this.constructor.__activateDir) {
            takeRecords();
            DIR_INSTANCES.push(this);
            setRTL(this);
          }
        }

        /**
         * @suppress {missingProperties} If it exists on elementBase, it can be super'd
         * @return {void}
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          if (elementBase.prototype.disconnectedCallback) {
            get(Dir.prototype.__proto__ || Object.getPrototypeOf(Dir.prototype), 'disconnectedCallback', this).call(this);
          }
          if (this.constructor.__activateDir) {
            var idx = DIR_INSTANCES.indexOf(this);
            if (idx > -1) {
              DIR_INSTANCES.splice(idx, 1);
            }
          }
        }
      }]);
      return Dir;
    }(elementBase);

    Dir.__activateDir = false;

    return Dir;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  function resolve() {
    document.body.removeAttribute('unresolved');
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    resolve();
  } else {
    window.addEventListener('DOMContentLoaded', resolve);
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }

  var EDIT_LEAVE = 0;
  var EDIT_UPDATE = 1;
  var EDIT_ADD = 2;
  var EDIT_DELETE = 3;

  // Note: This function is *based* on the computation of the Levenshtein
  // "edit" distance. The one change is that "updates" are treated as two
  // edits - not one. With Array splices, an update is really a delete
  // followed by an add. By retaining this, we optimize for "keeping" the
  // maximum array items in the original array. For example:
  //
  //   'xxxx123' -> '123yyyy'
  //
  // With 1-edit updates, the shortest path would be just to update all seven
  // characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
  // leaves the substring '123' intact.
  function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    var rowCount = oldEnd - oldStart + 1;
    var columnCount = currentEnd - currentStart + 1;
    var distances = new Array(rowCount);

    // "Addition" rows. Initialize null column.
    for (var i = 0; i < rowCount; i++) {
      distances[i] = new Array(columnCount);
      distances[i][0] = i;
    }

    // Initialize null row
    for (var j = 0; j < columnCount; j++) {
      distances[0][j] = j;
    }for (var _i = 1; _i < rowCount; _i++) {
      for (var _j = 1; _j < columnCount; _j++) {
        if (equals(current[currentStart + _j - 1], old[oldStart + _i - 1])) distances[_i][_j] = distances[_i - 1][_j - 1];else {
          var north = distances[_i - 1][_j] + 1;
          var west = distances[_i][_j - 1] + 1;
          distances[_i][_j] = north < west ? north : west;
        }
      }
    }

    return distances;
  }

  // This starts at the final weight, and walks "backward" by finding
  // the minimum previous weight recursively until the origin of the weight
  // matrix.
  function spliceOperationsFromEditDistances(distances) {
    var i = distances.length - 1;
    var j = distances[0].length - 1;
    var current = distances[i][j];
    var edits = [];
    while (i > 0 || j > 0) {
      if (i == 0) {
        edits.push(EDIT_ADD);
        j--;
        continue;
      }
      if (j == 0) {
        edits.push(EDIT_DELETE);
        i--;
        continue;
      }
      var northWest = distances[i - 1][j - 1];
      var west = distances[i - 1][j];
      var north = distances[i][j - 1];

      var min = void 0;
      if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;

      if (min == northWest) {
        if (northWest == current) {
          edits.push(EDIT_LEAVE);
        } else {
          edits.push(EDIT_UPDATE);
          current = northWest;
        }
        i--;
        j--;
      } else if (min == west) {
        edits.push(EDIT_DELETE);
        i--;
        current = west;
      } else {
        edits.push(EDIT_ADD);
        j--;
        current = north;
      }
    }

    edits.reverse();
    return edits;
  }

  /**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */

  /**
   * Lacking individual splice mutation information, the minimal set of
   * splices can be synthesized given the previous state and final state of an
   * array. The basic approach is to calculate the edit distance matrix and
   * choose the shortest path through it.
   *
   * Complexity: O(l * p)
   *   l: The length of the current array
   *   p: The length of the old array
   *
   * @param {!Array} current The current "changed" array for which to
   * calculate splices.
   * @param {number} currentStart Starting index in the `current` array for
   * which splices are calculated.
   * @param {number} currentEnd Ending index in the `current` array for
   * which splices are calculated.
   * @param {!Array} old The original "unchanged" array to compare `current`
   * against to determine splices.
   * @param {number} oldStart Starting index in the `old` array for
   * which splices are calculated.
   * @param {number} oldEnd Ending index in the `old` array for
   * which splices are calculated.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */
  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    var prefixCount = 0;
    var suffixCount = 0;
    var splice = void 0;

    var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart == 0 && oldStart == 0) prefixCount = sharedPrefix(current, old, minLength);

    if (currentEnd == current.length && oldEnd == old.length) suffixCount = sharedSuffix(current, old, minLength - prefixCount);

    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;

    if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];

    if (currentStart == currentEnd) {
      splice = newSplice(currentStart, [], 0);
      while (oldStart < oldEnd) {
        splice.removed.push(old[oldStart++]);
      }return [splice];
    } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];

    var ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

    splice = undefined;
    var splices = [];
    var index = currentStart;
    var oldIndex = oldStart;
    for (var i = 0; i < ops.length; i++) {
      switch (ops[i]) {
        case EDIT_LEAVE:
          if (splice) {
            splices.push(splice);
            splice = undefined;
          }

          index++;
          oldIndex++;
          break;
        case EDIT_UPDATE:
          if (!splice) splice = newSplice(index, [], 0);

          splice.addedCount++;
          index++;

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
        case EDIT_ADD:
          if (!splice) splice = newSplice(index, [], 0);

          splice.addedCount++;
          index++;
          break;
        case EDIT_DELETE:
          if (!splice) splice = newSplice(index, [], 0);

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
      }
    }

    if (splice) {
      splices.push(splice);
    }
    return splices;
  }

  function sharedPrefix(current, old, searchLength) {
    for (var i = 0; i < searchLength; i++) {
      if (!equals(current[i], old[i])) return i;
    }return searchLength;
  }

  function sharedSuffix(current, old, searchLength) {
    var index1 = current.length;
    var index2 = old.length;
    var count = 0;
    while (count < searchLength && equals(current[--index1], old[--index2])) {
      count++;
    }return count;
  }

  /**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */
  function calculateSplices(current, previous) {
    return calcSplices(current, 0, current.length, previous, 0, previous.length);
  }

  function equals(currentValue, previousValue) {
    return currentValue === previousValue;
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Returns true if `node` is a slot element
   * @param {Node} node Node to test.
   * @return {boolean} Returns true if the given `node` is a slot
   * @private
   */
  function isSlot(node) {
    return node.localName === 'slot';
  }

  /**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */
  var FlattenedNodesObserver = function () {
    createClass(FlattenedNodesObserver, null, [{
      key: 'getFlattenedNodes',


      /**
       * Returns the list of flattened nodes for the given `node`.
       * This list consists of a node's children and, for any children
       * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
       * For example, if the observed node has children `<a></a><slot></slot><b></b>`
       * and the `<slot>` has one `<div>` assigned to it, then the flattened
       * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
       * `<slot>` elements assigned to it, these are flattened as well.
       *
       * @param {HTMLElement|HTMLSlotElement} node The node for which to return the list of flattened nodes.
       * @return {Array} The list of flattened nodes for the given `node`.
      */
      value: function getFlattenedNodes(node) {
        if (isSlot(node)) {
          node = /** @type {HTMLSlotElement} */node; // eslint-disable-line no-self-assign
          return node.assignedNodes({ flatten: true });
        } else {
          return Array.from(node.childNodes).map(function (node) {
            if (isSlot(node)) {
              node = /** @type {HTMLSlotElement} */node; // eslint-disable-line no-self-assign
              return node.assignedNodes({ flatten: true });
            } else {
              return [node];
            }
          }).reduce(function (a, b) {
            return a.concat(b);
          }, []);
        }
      }

      /**
       * @param {Element} target Node on which to listen for changes.
       * @param {?function(!Element, { target: !Element, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
       * or removals from the target's list of flattened nodes.
      */

    }]);

    function FlattenedNodesObserver(target, callback) {
      var _this = this;

      classCallCheck(this, FlattenedNodesObserver);

      /**
       * @type {MutationObserver}
       * @private
       */
      this._shadyChildrenObserver = null;
      /**
       * @type {MutationObserver}
       * @private
       */
      this._nativeChildrenObserver = null;
      this._connected = false;
      /**
       * @type {Element}
       * @private
       */
      this._target = target;
      this.callback = callback;
      this._effectiveNodes = [];
      this._observer = null;
      this._scheduled = false;
      /**
       * @type {function()}
       * @private
       */
      this._boundSchedule = function () {
        _this._schedule();
      };
      this.connect();
      this._schedule();
    }

    /**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */


    createClass(FlattenedNodesObserver, [{
      key: 'connect',
      value: function connect() {
        var _this2 = this;

        if (isSlot(this._target)) {
          this._listenSlots([this._target]);
        } else if (this._target.children) {
          this._listenSlots(this._target.children);
          if (window.ShadyDOM) {
            this._shadyChildrenObserver = ShadyDOM.observeChildren(this._target, function (mutations) {
              _this2._processMutations(mutations);
            });
          } else {
            this._nativeChildrenObserver = new MutationObserver(function (mutations) {
              _this2._processMutations(mutations);
            });
            this._nativeChildrenObserver.observe(this._target, { childList: true });
          }
        }
        this._connected = true;
      }

      /**
       * Deactivates the flattened nodes observer. After calling this method
       * the observer callback will not be called when changes to flattened nodes
       * occur. The `connect` method may be subsequently called to reactivate
       * the observer.
       *
       * @return {void}
       */

    }, {
      key: 'disconnect',
      value: function disconnect() {
        if (isSlot(this._target)) {
          this._unlistenSlots([this._target]);
        } else if (this._target.children) {
          this._unlistenSlots(this._target.children);
          if (window.ShadyDOM && this._shadyChildrenObserver) {
            ShadyDOM.unobserveChildren(this._shadyChildrenObserver);
            this._shadyChildrenObserver = null;
          } else if (this._nativeChildrenObserver) {
            this._nativeChildrenObserver.disconnect();
            this._nativeChildrenObserver = null;
          }
        }
        this._connected = false;
      }

      /**
       * @return {void}
       * @private
       */

    }, {
      key: '_schedule',
      value: function _schedule() {
        var _this3 = this;

        if (!this._scheduled) {
          this._scheduled = true;
          microTask.run(function () {
            return _this3.flush();
          });
        }
      }

      /**
       * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
       * @return {void}
       * @private
       */

    }, {
      key: '_processMutations',
      value: function _processMutations(mutations) {
        this._processSlotMutations(mutations);
        this.flush();
      }

      /**
       * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
       * @return {void}
       * @private
       */

    }, {
      key: '_processSlotMutations',
      value: function _processSlotMutations(mutations) {
        if (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];
            if (mutation.addedNodes) {
              this._listenSlots(mutation.addedNodes);
            }
            if (mutation.removedNodes) {
              this._unlistenSlots(mutation.removedNodes);
            }
          }
        }
      }

      /**
       * Flushes the observer causing any pending changes to be immediately
       * delivered the observer callback. By default these changes are delivered
       * asynchronously at the next microtask checkpoint.
       *
       * @return {boolean} Returns true if any pending changes caused the observer
       * callback to run.
       */

    }, {
      key: 'flush',
      value: function flush() {
        if (!this._connected) {
          return false;
        }
        if (window.ShadyDOM) {
          ShadyDOM.flush();
        }
        if (this._nativeChildrenObserver) {
          this._processSlotMutations(this._nativeChildrenObserver.takeRecords());
        } else if (this._shadyChildrenObserver) {
          this._processSlotMutations(this._shadyChildrenObserver.takeRecords());
        }
        this._scheduled = false;
        var info = {
          target: this._target,
          addedNodes: [],
          removedNodes: []
        };
        var newNodes = this.constructor.getFlattenedNodes(this._target);
        var splices = calculateSplices(newNodes, this._effectiveNodes);
        // process removals
        for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
          for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
            info.removedNodes.push(n);
          }
        }
        // process adds
        for (var _i = 0, _s; _i < splices.length && (_s = splices[_i]); _i++) {
          for (var _j = _s.index; _j < _s.index + _s.addedCount; _j++) {
            info.addedNodes.push(newNodes[_j]);
          }
        }
        // update cache
        this._effectiveNodes = newNodes;
        var didFlush = false;
        if (info.addedNodes.length || info.removedNodes.length) {
          didFlush = true;
          this.callback.call(this._target, info);
        }
        return didFlush;
      }

      /**
       * @param {!Array<Element|Node>|!NodeList<Node>} nodeList Nodes that could change
       * @return {void}
       * @private
       */

    }, {
      key: '_listenSlots',
      value: function _listenSlots(nodeList) {
        for (var i = 0; i < nodeList.length; i++) {
          var n = nodeList[i];
          if (isSlot(n)) {
            n.addEventListener('slotchange', this._boundSchedule);
          }
        }
      }

      /**
       * @param {!Array<Element|Node>|!NodeList<Node>} nodeList Nodes that could change
       * @return {void}
       * @private
       */

    }, {
      key: '_unlistenSlots',
      value: function _unlistenSlots(nodeList) {
        for (var i = 0; i < nodeList.length; i++) {
          var n = nodeList[i];
          if (isSlot(n)) {
            n.removeEventListener('slotchange', this._boundSchedule);
          }
        }
      }
    }]);
    return FlattenedNodesObserver;
  }();

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var debouncerQueue = [];

  /**
   * Adds a `Debouncer` to a list of globally flushable tasks.
   *
   * @param {!Debouncer} debouncer Debouncer to enqueue
   * @return {void}
   */
  var enqueueDebouncer = function enqueueDebouncer(debouncer) {
    debouncerQueue.push(debouncer);
  };

  function flushDebouncers() {
    var didFlush = Boolean(debouncerQueue.length);
    while (debouncerQueue.length) {
      try {
        debouncerQueue.shift().flush();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    return didFlush;
  }

  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */
  var flush$1 = function flush() {
    var shadyDOM = void 0,
        debouncers = void 0;
    do {
      shadyDOM = window.ShadyDOM && ShadyDOM.flush();
      if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
        window.ShadyCSS.ScopingShim.flush();
      }
      debouncers = flushDebouncers();
    } while (shadyDOM || debouncers);
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var p = Element.prototype;
  /**
   * @const {function(this:Node, string): boolean}
   */
  var normalizedMatchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;

  /**
   * Cross-platform `element.matches` shim.
   *
   * @function matchesSelector
   * @param {!Node} node Node to check selector against
   * @param {string} selector Selector to match
   * @return {boolean} True if node matched selector
   */
  var matchesSelector = function matchesSelector(node, selector) {
    return normalizedMatchesSelector.call(node, selector);
  };

  /**
   * Node API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is a `Node`.
   *
   */
  var DomApi = function () {

    /**
     * @param {Node} node Node for which to create a Polymer.dom helper object.
     */
    function DomApi(node) {
      classCallCheck(this, DomApi);

      this.node = node;
    }

    /**
     * Returns an instance of `Polymer.FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(!Element, { target: !Element, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!FlattenedNodesObserver} Observer instance
     */


    createClass(DomApi, [{
      key: 'observeNodes',
      value: function observeNodes(callback) {
        return new FlattenedNodesObserver(this.node, callback);
      }

      /**
       * Disconnects an observer previously created via `observeNodes`
       *
       * @param {!FlattenedNodesObserver} observerHandle Observer instance
       *   to disconnect.
       * @return {void}
       */

    }, {
      key: 'unobserveNodes',
      value: function unobserveNodes(observerHandle) {
        observerHandle.disconnect();
      }

      /**
       * Provided as a backwards-compatible API only.  This method does nothing.
       * @return {void}
       */

    }, {
      key: 'notifyObserver',
      value: function notifyObserver() {}

      /**
       * Returns true if the provided node is contained with this element's
       * light-DOM children or shadow root, including any nested shadow roots
       * of children therein.
       *
       * @param {Node} node Node to test
       * @return {boolean} Returns true if the given `node` is contained within
       *   this element's light or shadow DOM.
       */

    }, {
      key: 'deepContains',
      value: function deepContains(node) {
        if (this.node.contains(node)) {
          return true;
        }
        var n = node;
        var doc = node.ownerDocument;
        // walk from node to `this` or `document`
        while (n && n !== doc && n !== this.node) {
          // use logical parentnode, or native ShadowRoot host
          n = n.parentNode || n.host;
        }
        return n === this.node;
      }

      /**
       * Returns the root node of this node.  Equivalent to `getRootNode()`.
       *
       * @return {Node} Top most element in the dom tree in which the node
       * exists. If the node is connected to a document this is either a
       * shadowRoot or the document; otherwise, it may be the node
       * itself or a node or document fragment containing it.
       */

    }, {
      key: 'getOwnerRoot',
      value: function getOwnerRoot() {
        return this.node.getRootNode();
      }

      /**
       * For slot elements, returns the nodes assigned to the slot; otherwise
       * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
       *
       * @return {!Array<!Node>} Array of assigned nodes
       */

    }, {
      key: 'getDistributedNodes',
      value: function getDistributedNodes() {
        return this.node.localName === 'slot' ? this.node.assignedNodes({ flatten: true }) : [];
      }

      /**
       * Returns an array of all slots this element was distributed to.
       *
       * @return {!Array<!HTMLSlotElement>} Description
       */

    }, {
      key: 'getDestinationInsertionPoints',
      value: function getDestinationInsertionPoints() {
        var ip$ = [];
        var n = this.node.assignedSlot;
        while (n) {
          ip$.push(n);
          n = n.assignedSlot;
        }
        return ip$;
      }

      /**
       * Calls `importNode` on the `ownerDocument` for this node.
       *
       * @param {!Node} node Node to import
       * @param {boolean} deep True if the node should be cloned deeply during
       *   import
       * @return {Node} Clone of given node imported to this owner document
       */

    }, {
      key: 'importNode',
      value: function importNode(node, deep) {
        var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
        return doc.importNode(node, deep);
      }

      /**
       * @return {!Array<!Node>} Returns a flattened list of all child nodes and
       * nodes assigned to child slots.
       */

    }, {
      key: 'getEffectiveChildNodes',
      value: function getEffectiveChildNodes() {
        return FlattenedNodesObserver.getFlattenedNodes(this.node);
      }

      /**
       * Returns a filtered list of flattened child elements for this element based
       * on the given selector.
       *
       * @param {string} selector Selector to filter nodes against
       * @return {!Array<!HTMLElement>} List of flattened child elements
       */

    }, {
      key: 'queryDistributedElements',
      value: function queryDistributedElements(selector) {
        var c$ = this.getEffectiveChildNodes();
        var list = [];
        for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
          if (c.nodeType === Node.ELEMENT_NODE && matchesSelector(c, selector)) {
            list.push(c);
          }
        }
        return list;
      }

      /**
       * For shadow roots, returns the currently focused element within this
       * shadow root.
       *
       * @return {Node|undefined} Currently focused element
       */

    }, {
      key: 'activeElement',
      get: function get$$1() {
        var node = this.node;
        return node._activeElement !== undefined ? node._activeElement : node.activeElement;
      }
    }]);
    return DomApi;
  }();

  function forwardMethods(proto, methods) {
    var _loop = function _loop(i) {
      var method = methods[i];
      /* eslint-disable valid-jsdoc */
      proto[method] = /** @this {DomApi} */function () {
        return this.node[method].apply(this.node, arguments);
      };
      /* eslint-enable */
    };

    for (var i = 0; i < methods.length; i++) {
      _loop(i);
    }
  }

  function forwardReadOnlyProperties(proto, properties) {
    var _loop2 = function _loop2(i) {
      var name = properties[i];
      Object.defineProperty(proto, name, {
        get: function get$$1() {
          var domApi = /** @type {DomApi} */this;
          return domApi.node[name];
        },
        configurable: true
      });
    };

    for (var i = 0; i < properties.length; i++) {
      _loop2(i);
    }
  }

  function forwardProperties(proto, properties) {
    var _loop3 = function _loop3(i) {
      var name = properties[i];
      Object.defineProperty(proto, name, {
        get: function get$$1() {
          var domApi = /** @type {DomApi} */this;
          return domApi.node[name];
        },
        set: function set$$1(value) {
          /** @type {DomApi} */this.node[name] = value;
        },
        configurable: true
      });
    };

    for (var i = 0; i < properties.length; i++) {
      _loop3(i);
    }
  }

  /**
   * Event API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is an `Event`.
   */

  var EventApi = function () {
    function EventApi(event) {
      classCallCheck(this, EventApi);

      this.event = event;
    }

    /**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */


    createClass(EventApi, [{
      key: 'rootTarget',
      get: function get$$1() {
        return this.event.composedPath()[0];
      }

      /**
       * Returns the local (re-targeted) target for this event.
       *
       * @return {!EventTarget} The local (re-targeted) target for this event.
       */

    }, {
      key: 'localTarget',
      get: function get$$1() {
        return this.event.target;
      }

      /**
       * Returns the `composedPath` for this event.
       * @return {!Array<!EventTarget>} The nodes this event propagated through
       */

    }, {
      key: 'path',
      get: function get$$1() {
        return this.event.composedPath();
      }
    }]);
    return EventApi;
  }();

  forwardMethods(DomApi.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll']);

  forwardReadOnlyProperties(DomApi.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']);

  forwardProperties(DomApi.prototype, ['textContent', 'innerHTML']);

  /**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   *
   * @summary Legacy DOM and Event manipulation API wrapper factory used to
   * abstract differences between native Shadow DOM and "Shady DOM."
   * @param {(Node|Event)=} obj Node or event to operate on
   * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
   */
  var dom = function dom(obj) {
    obj = obj || document;
    if (!obj.__domApi) {
      var helper = void 0;
      if (obj instanceof Event) {
        helper = new EventApi(obj);
      } else {
        helper = new DomApi(obj);
      }
      obj.__domApi = helper;
    }
    return obj.__domApi;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var styleInterface = window.ShadyCSS;

  /**
   * Element class mixin that provides Polymer's "legacy" API intended to be
   * backward-compatible to the greatest extent possible with the API
   * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
   * defined using the `Polymer({...})` function.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin ElementMixin
   * @appliesMixin GestureEventListeners
   * @property isAttached {boolean} Set to `true` in this element's
   *   `connectedCallback` and `false` in `disconnectedCallback`
   * @summary Element class mixin that provides Polymer's "legacy" API
   */
  var LegacyElementMixin = dedupingMixin(function (base) {

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_ElementMixin}
     * @implements {Polymer_GestureEventListeners}
     * @implements {Polymer_DirMixin}
     * @private
     */
    var legacyElementBase = DirMixin(GestureEventListeners(ElementMixin(base)));

    /**
     * Map of simple names to touch action names
     * @dict
     */
    var DIRECTION_MAP = {
      'x': 'pan-x',
      'y': 'pan-y',
      'none': 'none',
      'all': 'auto'
    };

    /**
     * @polymer
     * @mixinClass
     * @extends {legacyElementBase}
     * @implements {Polymer_LegacyElementMixin}
     * @unrestricted
     */

    var LegacyElement = function (_legacyElementBase) {
      inherits(LegacyElement, _legacyElementBase);

      function LegacyElement() {
        classCallCheck(this, LegacyElement);

        /** @type {boolean} */
        var _this = possibleConstructorReturn(this, (LegacyElement.__proto__ || Object.getPrototypeOf(LegacyElement)).call(this));

        _this.isAttached;
        /** @type {WeakMap<!Element, !Object<string, !Function>>} */
        _this.__boundListeners;
        /** @type {Object<string, Function>} */
        _this._debouncers;
        // Ensure listeners are applied immediately so that they are
        // added before declarative event listeners. This allows an element to
        // decorate itself via an event prior to any declarative listeners
        // seeing the event. Note, this ensures compatibility with 1.x ordering.
        _this._applyListeners();
        return _this;
      }

      /**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       */


      createClass(LegacyElement, [{
        key: 'created',


        /**
         * Legacy callback called during the `constructor`, for overriding
         * by the user.
         * @return {void}
         */
        value: function created() {}

        /**
         * Provides an implementation of `connectedCallback`
         * which adds Polymer legacy API's `attached` method.
         * @return {void}
         * @override
         */

      }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
          get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'connectedCallback', this).call(this);
          this.isAttached = true;
          this.attached();
        }

        /**
         * Legacy callback called during `connectedCallback`, for overriding
         * by the user.
         * @return {void}
         */

      }, {
        key: 'attached',
        value: function attached() {}

        /**
         * Provides an implementation of `disconnectedCallback`
         * which adds Polymer legacy API's `detached` method.
         * @return {void}
         * @override
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'disconnectedCallback', this).call(this);
          this.isAttached = false;
          this.detached();
        }

        /**
         * Legacy callback called during `disconnectedCallback`, for overriding
         * by the user.
         * @return {void}
         */

      }, {
        key: 'detached',
        value: function detached() {}

        /**
         * Provides an override implementation of `attributeChangedCallback`
         * which adds the Polymer legacy API's `attributeChanged` method.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @override
         */

      }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'attributeChangedCallback', this).call(this, name, old, value, namespace);
            this.attributeChanged(name, old, value);
          }
        }

        /**
         * Legacy callback called during `attributeChangedChallback`, for overriding
         * by the user.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @return {void}
         */

      }, {
        key: 'attributeChanged',
        value: function attributeChanged(name, old, value) {} // eslint-disable-line no-unused-vars

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for class initialization via the `_registered` callback.
         * This is called only when the first instance of the element is created.
         *
         * @return {void}
         * @override
         * @suppress {invalidCasts}
         */

      }, {
        key: '_initializeProperties',
        value: function _initializeProperties() {
          var proto = Object.getPrototypeOf(this);
          if (!proto.hasOwnProperty('__hasRegisterFinished')) {
            proto.__hasRegisterFinished = true;
            this._registered();
          }
          get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), '_initializeProperties', this).call(this);
          this.root = /** @type {HTMLElement} */this;
          this.created();
        }

        /**
         * Called automatically when an element is initializing.
         * Users may override this method to perform class registration time
         * work. The implementation should ensure the work is performed
         * only once for the class.
         * @protected
         * @return {void}
         */

      }, {
        key: '_registered',
        value: function _registered() {}

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for installing `hostAttributes` and `listeners`.
         *
         * @return {void}
         * @override
         */

      }, {
        key: 'ready',
        value: function ready() {
          this._ensureAttributes();
          get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), 'ready', this).call(this);
        }

        /**
         * Ensures an element has required attributes. Called when the element
         * is being readied via `ready`. Users should override to set the
         * element's required attributes. The implementation should be sure
         * to check and not override existing attributes added by
         * the user of the element. Typically, setting attributes should be left
         * to the element user and not done here; reasonable exceptions include
         * setting aria roles and focusability.
         * @protected
         * @return {void}
         */

      }, {
        key: '_ensureAttributes',
        value: function _ensureAttributes() {}

        /**
         * Adds element event listeners. Called when the element
         * is being readied via `ready`. Users should override to
         * add any required element event listeners.
         * In performance critical elements, the work done here should be kept
         * to a minimum since it is done before the element is rendered. In
         * these elements, consider adding listeners asynchronously so as not to
         * block render.
         * @protected
         * @return {void}
         */

      }, {
        key: '_applyListeners',
        value: function _applyListeners() {}

        /**
         * Converts a typed JavaScript value to a string.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features. To customize
         * how properties are serialized to attributes for attribute bindings and
         * `reflectToAttribute: true` properties as well as this method, override
         * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
         *
         * @param {*} value Value to deserialize
         * @return {string | undefined} Serialized value
         */

      }, {
        key: 'serialize',
        value: function serialize(value) {
          return this._serializeValue(value);
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.  To customize
         * how attributes are deserialized to properties for in
         * `attributeChangedCallback`, override `_deserializeValue` method
         * provided by `Polymer.PropertyAccessors`.
         *
         * @param {string} value String to deserialize
         * @param {*} type Type to deserialize the string to
         * @return {*} Returns the deserialized value in the `type` given.
         */

      }, {
        key: 'deserialize',
        value: function deserialize(value, type) {
          return this._deserializeValue(value, type);
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect.
         * @param {*=} value Property value to reflect.
         * @return {void}
         */

      }, {
        key: 'reflectPropertyToAttribute',
        value: function reflectPropertyToAttribute(property, attribute, value) {
          this._propertyToAttribute(property, attribute, value);
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @param {Element} node Element to set attribute to.
         * @return {void}
         */

      }, {
        key: 'serializeValueToAttribute',
        value: function serializeValueToAttribute(value, attribute, node) {
          this._valueToNodeAttribute( /** @type {Element} */node || this, value, attribute);
        }

        /**
         * Copies own properties (including accessor descriptors) from a source
         * object to a target object.
         *
         * @param {Object} prototype Target object to copy properties to.
         * @param {Object} api Source object to copy properties from.
         * @return {Object} prototype object that was passed as first argument.
         */

      }, {
        key: 'extend',
        value: function extend(prototype, api) {
          if (!(prototype && api)) {
            return prototype || api;
          }
          var n$ = Object.getOwnPropertyNames(api);
          for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
            var pd = Object.getOwnPropertyDescriptor(api, n);
            if (pd) {
              Object.defineProperty(prototype, n, pd);
            }
          }
          return prototype;
        }

        /**
         * Copies props from a source object to a target object.
         *
         * Note, this method uses a simple `for...in` strategy for enumerating
         * properties.  To ensure only `ownProperties` are copied from source
         * to target and that accessor implementations are copied, use `extend`.
         *
         * @param {!Object} target Target object to copy properties to.
         * @param {!Object} source Source object to copy properties from.
         * @return {!Object} Target object that was passed as first argument.
         */

      }, {
        key: 'mixin',
        value: function mixin(target, source) {
          for (var i in source) {
            target[i] = source[i];
          }
          return target;
        }

        /**
         * Sets the prototype of an object.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         * @param {Object} object The object on which to set the prototype.
         * @param {Object} prototype The prototype that will be set on the given
         * `object`.
         * @return {Object} Returns the given `object` with its prototype set
         * to the given `prototype` object.
         */

      }, {
        key: 'chainObject',
        value: function chainObject(object, prototype) {
          if (object && prototype && object !== prototype) {
            object.__proto__ = prototype;
          }
          return object;
        }

        /* **** Begin Template **** */

        /**
         * Calls `importNode` on the `content` of the `template` specified and
         * returns a document fragment containing the imported content.
         *
         * @param {HTMLTemplateElement} template HTML template element to instance.
         * @return {!DocumentFragment} Document fragment containing the imported
         *   template content.
        */

      }, {
        key: 'instanceTemplate',
        value: function instanceTemplate(template) {
          var content = this.constructor._contentForTemplate(template);
          var dom$$1 = /** @type {!DocumentFragment} */
          document.importNode(content, true);
          return dom$$1;
        }

        /* **** Begin Events **** */

        /**
         * Dispatches a custom event with an optional detail value.
         *
         * @param {string} type Name of event type.
         * @param {*=} detail Detail value containing event-specific
         *   payload.
         * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
         *  options Object specifying options.  These may include:
         *  `bubbles` (boolean, defaults to `true`),
         *  `cancelable` (boolean, defaults to false), and
         *  `node` on which to fire the event (HTMLElement, defaults to `this`).
         * @return {!Event} The new event that was fired.
         */

      }, {
        key: 'fire',
        value: function fire(type, detail, options) {
          options = options || {};
          detail = detail === null || detail === undefined ? {} : detail;
          var event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true : options.composed
          });
          event.detail = detail;
          var node = options.node || this;
          node.dispatchEvent(event);
          return event;
        }

        /**
         * Convenience method to add an event listener on a given element,
         * late bound to a named method on this element.
         *
         * @param {Element} node Element to add event listener to.
         * @param {string} eventName Name of event to listen for.
         * @param {string} methodName Name of handler method on `this` to call.
         * @return {void}
         */

      }, {
        key: 'listen',
        value: function listen(node, eventName, methodName) {
          node = /** @type {!Element} */node || this;
          var hbl = this.__boundListeners || (this.__boundListeners = new WeakMap());
          var bl = hbl.get(node);
          if (!bl) {
            bl = {};
            hbl.set(node, bl);
          }
          var key = eventName + methodName;
          if (!bl[key]) {
            bl[key] = this._addMethodEventListenerToNode(node, eventName, methodName, this);
          }
        }

        /**
         * Convenience method to remove an event listener from a given element,
         * late bound to a named method on this element.
         *
         * @param {Element} node Element to remove event listener from.
         * @param {string} eventName Name of event to stop listening to.
         * @param {string} methodName Name of handler method on `this` to not call
         anymore.
         * @return {void}
         */

      }, {
        key: 'unlisten',
        value: function unlisten(node, eventName, methodName) {
          node = /** @type {!Element} */node || this;
          var bl = this.__boundListeners && this.__boundListeners.get(node);
          var key = eventName + methodName;
          var handler = bl && bl[key];
          if (handler) {
            this._removeEventListenerFromNode(node, eventName, handler);
            bl[key] = null;
          }
        }

        /**
         * Override scrolling behavior to all direction, one direction, or none.
         *
         * Valid scroll directions:
         *   - 'all': scroll in any direction
         *   - 'x': scroll only in the 'x' direction
         *   - 'y': scroll only in the 'y' direction
         *   - 'none': disable scrolling for this node
         *
         * @param {string=} direction Direction to allow scrolling
         * Defaults to `all`.
         * @param {Element=} node Element to apply scroll direction setting.
         * Defaults to `this`.
         * @return {void}
         */

      }, {
        key: 'setScrollDirection',
        value: function setScrollDirection(direction, node) {
          setTouchAction( /** @type {Element} */node || this, DIRECTION_MAP[direction] || 'auto');
        }
        /* **** End Events **** */

        /**
         * Convenience method to run `querySelector` on this local DOM scope.
         *
         * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
         *
         * @param {string} slctr Selector to run on this local DOM scope
         * @return {Element} Element found by the selector, or null if not found.
         */

      }, {
        key: '$$',
        value: function $$(slctr) {
          return this.root.querySelector(slctr);
        }

        /**
         * Return the element whose local dom within which this element
         * is contained. This is a shorthand for
         * `this.getRootNode().host`.
         * @this {Element}
         */

      }, {
        key: 'distributeContent',


        /**
         * Force this element to distribute its children to its local dom.
         * This should not be necessary as of Polymer 2.0.2 and is provided only
         * for backwards compatibility.
         * @return {void}
         */
        value: function distributeContent() {
          if (window.ShadyDOM && this.shadowRoot) {
            ShadyDOM.flush();
          }
        }

        /**
         * Returns a list of nodes that are the effective childNodes. The effective
         * childNodes list is the same as the element's childNodes except that
         * any `<content>` elements are replaced with the list of nodes distributed
         * to the `<content>`, the result of its `getDistributedNodes` method.
         * @return {!Array<!Node>} List of effective child nodes.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: 'getEffectiveChildNodes',
        value: function getEffectiveChildNodes() {
          var thisEl = /** @type {Element} */this;
          var domApi = /** @type {DomApi} */dom(thisEl);
          return domApi.getEffectiveChildNodes();
        }

        /**
         * Returns a list of nodes distributed within this element that match
         * `selector`. These can be dom children or elements distributed to
         * children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {!Array<!Node>} List of distributed elements that match selector.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: 'queryDistributedElements',
        value: function queryDistributedElements(selector) {
          var thisEl = /** @type {Element} */this;
          var domApi = /** @type {DomApi} */dom(thisEl);
          return domApi.queryDistributedElements(selector);
        }

        /**
         * Returns a list of elements that are the effective children. The effective
         * children list is the same as the element's children except that
         * any `<content>` elements are replaced with the list of elements
         * distributed to the `<content>`.
         *
         * @return {!Array<!Node>} List of effective children.
         */

      }, {
        key: 'getEffectiveChildren',
        value: function getEffectiveChildren() {
          var list = this.getEffectiveChildNodes();
          return list.filter(function ( /** @type {!Node} */n) {
            return n.nodeType === Node.ELEMENT_NODE;
          });
        }

        /**
         * Returns a string of text content that is the concatenation of the
         * text content's of the element's effective childNodes (the elements
         * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
         *
         * @return {string} List of effective children.
         */

      }, {
        key: 'getEffectiveTextContent',
        value: function getEffectiveTextContent() {
          var cn = this.getEffectiveChildNodes();
          var tc = [];
          for (var i = 0, c; c = cn[i]; i++) {
            if (c.nodeType !== Node.COMMENT_NODE) {
              tc.push(c.textContent);
            }
          }
          return tc.join('');
        }

        /**
         * Returns the first effective childNode within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {Node} First effective child node that matches selector.
         */

      }, {
        key: 'queryEffectiveChildren',
        value: function queryEffectiveChildren(selector) {
          var e$ = this.queryDistributedElements(selector);
          return e$ && e$[0];
        }

        /**
         * Returns a list of effective childNodes within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {!Array<!Node>} List of effective child nodes that match selector.
         */

      }, {
        key: 'queryAllEffectiveChildren',
        value: function queryAllEffectiveChildren(selector) {
          return this.queryDistributedElements(selector);
        }

        /**
         * Returns a list of nodes distributed to this element's `<slot>`.
         *
         * If this element contains more than one `<slot>` in its local DOM,
         * an optional selector may be passed to choose the desired content.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<slot>`.  Defaults to `content`.
         * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
         */

      }, {
        key: 'getContentChildNodes',
        value: function getContentChildNodes(slctr) {
          var content = this.root.querySelector(slctr || 'slot');
          return content ? /** @type {DomApi} */dom(content).getDistributedNodes() : [];
        }

        /**
         * Returns a list of element children distributed to this element's
         * `<slot>`.
         *
         * If this element contains more than one `<slot>` in its
         * local DOM, an optional selector may be passed to choose the desired
         * content.  This method differs from `getContentChildNodes` in that only
         * elements are returned.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<content>`.  Defaults to `content`.
         * @return {!Array<!HTMLElement>} List of distributed nodes for the
         *   `<slot>`.
         * @suppress {invalidCasts}
         */

      }, {
        key: 'getContentChildren',
        value: function getContentChildren(slctr) {
          var children = /** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
          });
          return children;
        }

        /**
         * Checks whether an element is in this element's light DOM tree.
         *
         * @param {?Node} node The element to be checked.
         * @return {boolean} true if node is in this element's light DOM tree.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: 'isLightDescendant',
        value: function isLightDescendant(node) {
          var thisNode = /** @type {Node} */this;
          return thisNode !== node && thisNode.contains(node) && thisNode.getRootNode() === node.getRootNode();
        }

        /**
         * Checks whether an element is in this element's local DOM tree.
         *
         * @param {!Element} node The element to be checked.
         * @return {boolean} true if node is in this element's local DOM tree.
         */

      }, {
        key: 'isLocalDescendant',
        value: function isLocalDescendant(node) {
          return this.root === node.getRootNode();
        }

        /**
         * No-op for backwards compatibility. This should now be handled by
         * ShadyCss library.
         * @param  {*} container Unused
         * @param  {*} shouldObserve Unused
         * @return {void}
         */

      }, {
        key: 'scopeSubtree',
        value: function scopeSubtree(container, shouldObserve) {} // eslint-disable-line no-unused-vars


        /**
         * Returns the computed style value for the given property.
         * @param {string} property The css property name.
         * @return {string} Returns the computed css property value for the given
         * `property`.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: 'getComputedStyleValue',
        value: function getComputedStyleValue(property) {
          return styleInterface.getComputedStyleValue( /** @type {!Element} */this, property);
        }

        // debounce

        /**
         * Call `debounce` to collapse multiple requests for a named task into
         * one invocation which is made after the wait time has elapsed with
         * no new request.  If no wait time is given, the callback will be called
         * at microtask timing (guaranteed before paint).
         *
         *     debouncedClickAction(e) {
         *       // will not call `processClick` more than once per 100ms
         *       this.debounce('click', function() {
         *        this.processClick();
         *       } 100);
         *     }
         *
         * @param {string} jobName String to identify the debounce job.
         * @param {function():void} callback Function that is called (with `this`
         *   context) when the wait time elapses.
         * @param {number} wait Optional wait time in milliseconds (ms) after the
         *   last signal that must elapse before invoking `callback`
         * @return {!Object} Returns a debouncer object on which exists the
         * following methods: `isActive()` returns true if the debouncer is
         * active; `cancel()` cancels the debouncer if it is active;
         * `flush()` immediately invokes the debounced callback if the debouncer
         * is active.
         */

      }, {
        key: 'debounce',
        value: function debounce(jobName, callback, wait) {
          this._debouncers = this._debouncers || {};
          return this._debouncers[jobName] = Debouncer.debounce(this._debouncers[jobName], wait > 0 ? timeOut.after(wait) : microTask, callback.bind(this));
        }

        /**
         * Returns whether a named debouncer is active.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {boolean} Whether the debouncer is active (has not yet fired).
         */

      }, {
        key: 'isDebouncerActive',
        value: function isDebouncerActive(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          return !!(debouncer && debouncer.isActive());
        }

        /**
         * Immediately calls the debouncer `callback` and inactivates it.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {void}
         */

      }, {
        key: 'flushDebouncer',
        value: function flushDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          if (debouncer) {
            debouncer.flush();
          }
        }

        /**
         * Cancels an active debouncer.  The `callback` will not be called.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {void}
         */

      }, {
        key: 'cancelDebouncer',
        value: function cancelDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          if (debouncer) {
            debouncer.cancel();
          }
        }

        /**
         * Runs a callback function asynchronously.
         *
         * By default (if no waitTime is specified), async callbacks are run at
         * microtask timing, which will occur before paint.
         *
         * @param {!Function} callback The callback function to run, bound to `this`.
         * @param {number=} waitTime Time to wait before calling the
         *   `callback`.  If unspecified or 0, the callback will be run at microtask
         *   timing (before paint).
         * @return {number} Handle that may be used to cancel the async job.
         */

      }, {
        key: 'async',
        value: function async(callback, waitTime) {
          return waitTime > 0 ? timeOut.run(callback.bind(this), waitTime) : ~microTask.run(callback.bind(this));
        }

        /**
         * Cancels an async operation started with `async`.
         *
         * @param {number} handle Handle returned from original `async` call to
         *   cancel.
         * @return {void}
         */

      }, {
        key: 'cancelAsync',
        value: function cancelAsync(handle) {
          handle < 0 ? microTask.cancel(~handle) : timeOut.cancel(handle);
        }

        // other

        /**
         * Convenience method for creating an element and configuring it.
         *
         * @param {string} tag HTML element tag to create.
         * @param {Object=} props Object of properties to configure on the
         *    instance.
         * @return {!Element} Newly created and configured element.
         */

      }, {
        key: 'create',
        value: function create(tag, props) {
          var elt = document.createElement(tag);
          if (props) {
            if (elt.setProperties) {
              elt.setProperties(props);
            } else {
              for (var n in props) {
                elt[n] = props[n];
              }
            }
          }
          return elt;
        }

        /**
         * Polyfill for Element.prototype.matches, which is sometimes still
         * prefixed.
         *
         * @param {string} selector Selector to test.
         * @param {!Element=} node Element to test the selector against.
         * @return {boolean} Whether the element matches the selector.
         */

      }, {
        key: 'elementMatches',
        value: function elementMatches(selector, node) {
          return matchesSelector(node || this, selector);
        }

        /**
         * Toggles an HTML attribute on or off.
         *
         * @param {string} name HTML attribute name
         * @param {boolean=} bool Boolean to force the attribute on or off.
         *    When unspecified, the state of the attribute will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         * @return {void}
         */

      }, {
        key: 'toggleAttribute',
        value: function toggleAttribute(name, bool, node) {
          node = /** @type {Element} */node || this;
          if (arguments.length == 1) {
            bool = !node.hasAttribute(name);
          }
          if (bool) {
            node.setAttribute(name, '');
          } else {
            node.removeAttribute(name);
          }
        }

        /**
         * Toggles a CSS class on or off.
         *
         * @param {string} name CSS class name
         * @param {boolean=} bool Boolean to force the class on or off.
         *    When unspecified, the state of the class will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         * @return {void}
         */

      }, {
        key: 'toggleClass',
        value: function toggleClass(name, bool, node) {
          node = /** @type {Element} */node || this;
          if (arguments.length == 1) {
            bool = !node.classList.contains(name);
          }
          if (bool) {
            node.classList.add(name);
          } else {
            node.classList.remove(name);
          }
        }

        /**
         * Cross-platform helper for setting an element's CSS `transform` property.
         *
         * @param {string} transformText Transform setting.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`
         * @return {void}
         */

      }, {
        key: 'transform',
        value: function transform(transformText, node) {
          node = /** @type {Element} */node || this;
          node.style.webkitTransform = transformText;
          node.style.transform = transformText;
        }

        /**
         * Cross-platform helper for setting an element's CSS `translate3d`
         * property.
         *
         * @param {number} x X offset.
         * @param {number} y Y offset.
         * @param {number} z Z offset.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`.
         * @return {void}
         */

      }, {
        key: 'translate3d',
        value: function translate3d(x, y, z, node) {
          node = /** @type {Element} */node || this;
          this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
        }

        /**
         * Removes an item from an array, if it exists.
         *
         * If the array is specified by path, a change notification is
         * generated, so that observers, data bindings and computed
         * properties watching that path can update.
         *
         * If the array is passed directly, **no change
         * notification is generated**.
         *
         * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
         *   (or the array itself).
         * @param {*} item Item to remove.
         * @return {Array} Array containing item removed.
         */

      }, {
        key: 'arrayDelete',
        value: function arrayDelete(arrayOrPath, item) {
          var index = void 0;
          if (Array.isArray(arrayOrPath)) {
            index = arrayOrPath.indexOf(item);
            if (index >= 0) {
              return arrayOrPath.splice(index, 1);
            }
          } else {
            var arr = get$1(this, arrayOrPath);
            index = arr.indexOf(item);
            if (index >= 0) {
              return this.splice(arrayOrPath, index, 1);
            }
          }
          return null;
        }

        // logging

        /**
         * Facades `console.log`/`warn`/`error` as override point.
         *
         * @param {string} level One of 'log', 'warn', 'error'
         * @param {Array} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: '_logger',
        value: function _logger(level, args) {
          var _console;

          // accept ['foo', 'bar'] and [['foo', 'bar']]
          if (Array.isArray(args) && args.length === 1 && Array.isArray(args[0])) {
            args = args[0];
          }
          switch (level) {
            case 'log':
            case 'warn':
            case 'error':
              (_console = console)[level].apply(_console, toConsumableArray(args));
          }
        }

        /**
         * Facades `console.log` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: '_log',
        value: function _log() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._logger('log', args);
        }

        /**
         * Facades `console.warn` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: '_warn',
        value: function _warn() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          this._logger('warn', args);
        }

        /**
         * Facades `console.error` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: '_error',
        value: function _error() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          this._logger('error', args);
        }

        /**
         * Formats a message using the element type an a method name.
         *
         * @param {string} methodName Method name to associate with message
         * @param {...*} args Array of strings or objects to log
         * @return {Array} Array with formatting information for `console`
         *   logging.
         */

      }, {
        key: '_logf',
        value: function _logf(methodName) {
          for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          return ['[%s::%s]', this.is, methodName].concat(args);
        }
      }, {
        key: 'domHost',
        get: function get$$1() {
          var root$$1 = this.getRootNode();
          return root$$1 instanceof DocumentFragment ? /** @type {ShadowRoot} */root$$1.host : root$$1;
        }
      }], [{
        key: 'importMeta',
        get: function get$$1() {
          return this.prototype.importMeta;
        }
      }]);
      return LegacyElement;
    }(legacyElementBase);

    LegacyElement.prototype.is = '';

    return LegacyElement;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var metaProps = {
    attached: true,
    detached: true,
    ready: true,
    created: true,
    beforeRegister: true,
    registered: true,
    attributeChanged: true,
    // meta objects
    behaviors: true
  };

  /**
   * Applies a "legacy" behavior or array of behaviors to the provided class.
   *
   * Note: this method will automatically also apply the `LegacyElementMixin`
   * to ensure that any legacy behaviors can rely on legacy Polymer API on
   * the underlying element.
   *
   * @function
   * @template T
   * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
   * @param {function(new:T)} klass Element class.
   * @return {function(new:T)} Returns a new Element class extended by the
   * passed in `behaviors` and also by `LegacyElementMixin`.
   * @suppress {invalidCasts, checkTypes}
   */
  function mixinBehaviors(behaviors, klass) {
    if (!behaviors) {
      klass = /** @type {HTMLElement} */klass; // eslint-disable-line no-self-assign
      return klass;
    }
    // NOTE: ensure the behavior is extending a class with
    // legacy element api. This is necessary since behaviors expect to be able
    // to access 1.x legacy api.
    klass = LegacyElementMixin(klass);
    if (!Array.isArray(behaviors)) {
      behaviors = [behaviors];
    }
    var superBehaviors = klass.prototype.behaviors;
    // get flattened, deduped list of behaviors *not* already on super class
    behaviors = flattenBehaviors(behaviors, null, superBehaviors);
    // mixin new behaviors
    klass = _mixinBehaviors(behaviors, klass);
    if (superBehaviors) {
      behaviors = superBehaviors.concat(behaviors);
    }
    // Set behaviors on prototype for BC...
    klass.prototype.behaviors = behaviors;
    return klass;
  }

  // NOTE:
  // 1.x
  // Behaviors were mixed in *in reverse order* and de-duped on the fly.
  // The rule was that behavior properties were copied onto the element
  // prototype if and only if the property did not already exist.
  // Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
  // (1), B, (2), A, (3) C. This means prototype properties win over
  // B properties win over A win over C. This mirrors what would happen
  // with inheritance if element extended B extended A extended C.
  //
  // Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
  // `behaviors` array was [C, A, B].
  // Behavior lifecycle methods were called in behavior array order
  // followed by the element, e.g. (1) C.created, (2) A.created,
  // (3) B.created, (4) element.created. There was no support for
  // super, and "super-behavior" methods were callable only by name).
  //
  // 2.x
  // Behaviors are made into proper mixins which live in the
  // element's prototype chain. Behaviors are placed in the element prototype
  // eldest to youngest and de-duped youngest to oldest:
  // So, first [A, B, C, A, B] becomes [C, A, B] then,
  // the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
  // (3) class(A), (4) class(B), (5) class(Polymer({...})).
  // Result:
  // This means element properties win over B properties win over A win
  // over C. (same as 1.x)
  // If lifecycle is called (super then me), order is
  // (1) C.created, (2) A.created, (3) B.created, (4) element.created
  // (again same as 1.x)
  function _mixinBehaviors(behaviors, klass) {
    for (var i = 0; i < behaviors.length; i++) {
      var b = behaviors[i];
      if (b) {
        klass = Array.isArray(b) ? _mixinBehaviors(b, klass) : GenerateClassFromInfo(b, klass);
      }
    }
    return klass;
  }

  /**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */
  function flattenBehaviors(behaviors, list, exclude) {
    list = list || [];
    for (var i = behaviors.length - 1; i >= 0; i--) {
      var b = behaviors[i];
      if (b) {
        if (Array.isArray(b)) {
          flattenBehaviors(b, list);
        } else {
          // dedup
          if (list.indexOf(b) < 0 && (!exclude || exclude.indexOf(b) < 0)) {
            list.unshift(b);
          }
        }
      } else {
        console.warn('behavior is null, check for missing or 404 import');
      }
    }
    return list;
  }

  /**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */
  function GenerateClassFromInfo(info, Base) {

    /** @private */
    var PolymerGenerated = function (_Base) {
      inherits(PolymerGenerated, _Base);

      function PolymerGenerated() {
        classCallCheck(this, PolymerGenerated);
        return possibleConstructorReturn(this, (PolymerGenerated.__proto__ || Object.getPrototypeOf(PolymerGenerated)).apply(this, arguments));
      }

      createClass(PolymerGenerated, [{
        key: 'created',


        /**
         * @return {void}
         */
        value: function created() {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'created', this).call(this);
          if (info.created) {
            info.created.call(this);
          }
        }

        /**
         * @return {void}
         */

      }, {
        key: '_registered',
        value: function _registered() {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), '_registered', this).call(this);
          /* NOTE: `beforeRegister` is called here for bc, but the behavior
           is different than in 1.x. In 1.0, the method was called *after*
           mixing prototypes together but *before* processing of meta-objects.
           However, dynamic effects can still be set here and can be done either
           in `beforeRegister` or `registered`. It is no longer possible to set
           `is` in `beforeRegister` as you could in 1.x.
          */
          if (info.beforeRegister) {
            info.beforeRegister.call(Object.getPrototypeOf(this));
          }
          if (info.registered) {
            info.registered.call(Object.getPrototypeOf(this));
          }
        }

        /**
         * @return {void}
         */

      }, {
        key: '_applyListeners',
        value: function _applyListeners() {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), '_applyListeners', this).call(this);
          if (info.listeners) {
            for (var l in info.listeners) {
              this._addMethodEventListenerToNode(this, l, info.listeners[l]);
            }
          }
        }

        // note: exception to "super then me" rule;
        // do work before calling super so that super attributes
        // only apply if not already set.
        /**
         * @return {void}
         */

      }, {
        key: '_ensureAttributes',
        value: function _ensureAttributes() {
          if (info.hostAttributes) {
            for (var a in info.hostAttributes) {
              this._ensureAttribute(a, info.hostAttributes[a]);
            }
          }
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), '_ensureAttributes', this).call(this);
        }

        /**
         * @return {void}
         */

      }, {
        key: 'ready',
        value: function ready() {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'ready', this).call(this);
          if (info.ready) {
            info.ready.call(this);
          }
        }

        /**
         * @return {void}
         */

      }, {
        key: 'attached',
        value: function attached() {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'attached', this).call(this);
          if (info.attached) {
            info.attached.call(this);
          }
        }

        /**
         * @return {void}
         */

      }, {
        key: 'detached',
        value: function detached() {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'detached', this).call(this);
          if (info.detached) {
            info.detached.call(this);
          }
        }

        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @return {void}
         */

      }, {
        key: 'attributeChanged',
        value: function attributeChanged(name, old, value) {
          get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), 'attributeChanged', this).call(this, name, old, value);
          if (info.attributeChanged) {
            info.attributeChanged.call(this, name, old, value);
          }
        }
      }], [{
        key: 'properties',
        get: function get$$1() {
          return info.properties;
        }
      }, {
        key: 'observers',
        get: function get$$1() {
          return info.observers;
        }

        /**
         * @return {HTMLTemplateElement} template for this class
         */

      }, {
        key: 'template',
        get: function get$$1() {
          // get template first from any imperative set in `info._template`
          return info._template ||
          // next look in dom-module associated with this element's is.
          DomModule && DomModule.import(this.is, 'template') ||
          // next look for superclass template (note: use superclass symbol
          // to ensure correct `this.is`)
          Base.template ||
          // finally fall back to `_template` in element's prototype.
          this.prototype._template || null;
        }
      }]);
      return PolymerGenerated;
    }(Base);

    PolymerGenerated.generatedFrom = info;

    for (var p in info) {
      // NOTE: cannot copy `metaProps` methods onto prototype at least because
      // `super.ready` must be called and is not included in the user fn.
      if (!(p in metaProps)) {
        var pd = Object.getOwnPropertyDescriptor(info, p);
        if (pd) {
          Object.defineProperty(PolymerGenerated.prototype, p, pd);
        }
      }
    }

    return PolymerGenerated;
  }

  /**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new:HTMLElement)} Generated class
   */
  var Class = function Class(info) {
    if (!info) {
      console.warn('Polymer\'s Class function requires `info` argument');
    }
    var klass = GenerateClassFromInfo(info, info.behaviors ?
    // note: mixinBehaviors ensures `LegacyElementMixin`.
    mixinBehaviors(info.behaviors, HTMLElement) : LegacyElementMixin(HTMLElement));
    // decorate klass with registration info
    klass.is = info.is;
    return klass;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Legacy class factory and registration helper for defining Polymer
   * elements.
   *
   * This method is equivalent to
   *
   *     import {Class} from '@polymer/polymer/lib/legacy/class.js';
   *     customElements.define(info.is, Class(info));
   *
   * See `Class` for details on valid legacy metadata format for `info`.
   *
   * @global
   * @override
   * @function
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new: HTMLElement)} Generated class
   * @suppress {duplicate, invalidCasts, checkTypes}
   */
  var Polymer = function Polymer(info) {
    // if input is a `class` (aka a function with a prototype), use the prototype
    // remember that the `constructor` will never be called
    var klass = void 0;
    if (typeof info === 'function') {
      klass = info;
    } else {
      klass = Polymer.Class(info);
    }
    customElements.define(klass.is, /** @type {!HTMLElement} */klass);
    return klass;
  };

  Polymer.Class = Class;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // Common implementation for mixin & behavior
  function mutablePropertyChange(inst, property, value, old, mutableData) {
    var isObject = void 0;
    if (mutableData) {
      isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
      // Pull `old` for Objects from temp cache, but treat `null` as a primitive
      if (isObject) {
        old = inst.__dataTemp[property];
      }
    }
    // Strict equality check, but return false for NaN===NaN
    var shouldChange = old !== value && (old === old || value === value);
    // Objects are stored in temporary cache (cleared at end of
    // turn), which is used for dirty-checking
    if (isObject && shouldChange) {
      inst.__dataTemp[property] = value;
    }
    return shouldChange;
  }

  /**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */
  var MutableData = dedupingMixin(function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_MutableData}
     */
    var MutableData = function (_superClass) {
      inherits(MutableData, _superClass);

      function MutableData() {
        classCallCheck(this, MutableData);
        return possibleConstructorReturn(this, (MutableData.__proto__ || Object.getPrototypeOf(MutableData)).apply(this, arguments));
      }

      createClass(MutableData, [{
        key: '_shouldPropertyChange',

        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * This method pulls the value to dirty check against from the `__dataTemp`
         * cache (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, true);
        }
      }]);
      return MutableData;
    }(superClass);

    return MutableData;
  });

  /**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this mixin or apply the
   * `MutableData` mixin.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */
  var OptionalMutableData = dedupingMixin(function (superClass) {

    /**
     * @mixinClass
     * @polymer
     * @implements {Polymer_OptionalMutableData}
     */
    var OptionalMutableData = function (_superClass2) {
      inherits(OptionalMutableData, _superClass2);

      function OptionalMutableData() {
        classCallCheck(this, OptionalMutableData);
        return possibleConstructorReturn(this, (OptionalMutableData.__proto__ || Object.getPrototypeOf(OptionalMutableData)).apply(this, arguments));
      }

      createClass(OptionalMutableData, [{
        key: '_shouldPropertyChange',


        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * When `this.mutableData` is true on this instance, this method
         * pulls the value to dirty check against from the `__dataTemp` cache
         * (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, this.mutableData);
        }
      }], [{
        key: 'properties',
        get: function get$$1() {
          return {
            /**
             * Instance-level flag for configuring the dirty-checking strategy
             * for this element.  When true, Objects and Arrays will skip dirty
             * checking, otherwise strict equality checking will be used.
             */
            mutableData: Boolean
          };
        }
      }]);
      return OptionalMutableData;
    }(superClass);

    return OptionalMutableData;
  });

  // Export for use by legacy behavior
  MutableData._mutablePropertyChange = mutablePropertyChange;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // Base class for HTMLTemplateElement extension that has property effects
  // machinery for propagating host properties to children. This is an ES5
  // class only because Babel (incorrectly) requires super() in the class
  // constructor even though no `this` is used and it returns an instance.
  var newInstance = null;

  /**
   * @constructor
   * @extends {HTMLTemplateElement}
   * @private
   */
  function HTMLTemplateElementExtension() {
    return newInstance;
  }
  HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
      value: HTMLTemplateElementExtension,
      writable: true
    }
  });

  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @extends {HTMLTemplateElementExtension}
   * @private
   */
  var DataTemplate = PropertyEffects(HTMLTemplateElementExtension);

  /**
   * @constructor
   * @implements {Polymer_MutableData}
   * @extends {DataTemplate}
   * @private
   */
  var MutableDataTemplate = MutableData(DataTemplate);

  // Applies a DataTemplate subclass to a <template> instance
  function upgradeTemplate(template, constructor) {
    newInstance = template;
    Object.setPrototypeOf(template, constructor.prototype);
    new constructor();
    newInstance = null;
  }

  /**
   * Base class for TemplateInstance.
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @private
   */
  var base = PropertyEffects(function () {
    function _class() {
      classCallCheck(this, _class);
    }

    return _class;
  }());

  /**
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @unrestricted
   */

  var TemplateInstanceBase = function (_base) {
    inherits(TemplateInstanceBase, _base);

    function TemplateInstanceBase(props) {
      classCallCheck(this, TemplateInstanceBase);

      var _this = possibleConstructorReturn(this, (TemplateInstanceBase.__proto__ || Object.getPrototypeOf(TemplateInstanceBase)).call(this));

      _this._configureProperties(props);
      _this.root = _this._stampTemplate(_this.__dataHost);
      // Save list of stamped children
      var children = _this.children = [];
      for (var n = _this.root.firstChild; n; n = n.nextSibling) {
        children.push(n);
        n.__templatizeInstance = _this;
      }
      if (_this.__templatizeOwner && _this.__templatizeOwner.__hideTemplateChildren__) {
        _this._showHideChildren(true);
      }
      // Flush props only when props are passed if instance props exist
      // or when there isn't instance props.
      var options = _this.__templatizeOptions;
      if (props && options.instanceProps || !options.instanceProps) {
        _this._enableProperties();
      }
      return _this;
    }
    /**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */


    createClass(TemplateInstanceBase, [{
      key: '_configureProperties',
      value: function _configureProperties(props) {
        var options = this.__templatizeOptions;
        if (options.forwardHostProp) {
          for (var hprop in this.__hostProps) {
            this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
          }
        }
        // Any instance props passed in the constructor will overwrite host props;
        // normally this would be a user error but we don't specifically filter them
        for (var iprop in props) {
          this._setPendingProperty(iprop, props[iprop]);
        }
      }
      /**
       * Forwards a host property to this instance.  This method should be
       * called on instances from the `options.forwardHostProp` callback
       * to propagate changes of host properties to each instance.
       *
       * Note this method enqueues the change, which are flushed as a batch.
       *
       * @param {string} prop Property or path name
       * @param {*} value Value of the property to forward
       * @return {void}
       */

    }, {
      key: 'forwardHostProp',
      value: function forwardHostProp(prop, value) {
        if (this._setPendingPropertyOrPath(prop, value, false, true)) {
          this.__dataHost._enqueueClient(this);
        }
      }

      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       */

    }, {
      key: '_addEventListenerToNode',
      value: function _addEventListenerToNode(node, eventName, handler) {
        var _this2 = this;

        if (this._methodHost && this.__templatizeOptions.parentModel) {
          // If this instance should be considered a parent model, decorate
          // events this template instance as `model`
          this._methodHost._addEventListenerToNode(node, eventName, function (e) {
            e.model = _this2;
            handler(e);
          });
        } else {
          // Otherwise delegate to the template's host (which could be)
          // another template instance
          var templateHost = this.__dataHost.__dataHost;
          if (templateHost) {
            templateHost._addEventListenerToNode(node, eventName, handler);
          }
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hide Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */

    }, {
      key: '_showHideChildren',
      value: function _showHideChildren(hide) {
        var c = this.children;
        for (var i = 0; i < c.length; i++) {
          var n = c[i];
          // Ignore non-changes
          if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
            if (n.nodeType === Node.TEXT_NODE) {
              if (hide) {
                n.__polymerTextContent__ = n.textContent;
                n.textContent = '';
              } else {
                n.textContent = n.__polymerTextContent__;
              }
              // remove and replace slot
            } else if (n.localName === 'slot') {
              if (hide) {
                n.__polymerReplaced__ = document.createComment('hidden-slot');
                n.parentNode.replaceChild(n.__polymerReplaced__, n);
              } else {
                var replace = n.__polymerReplaced__;
                if (replace) {
                  replace.parentNode.replaceChild(n, replace);
                }
              }
            } else if (n.style) {
              if (hide) {
                n.__polymerDisplay__ = n.style.display;
                n.style.display = 'none';
              } else {
                n.style.display = n.__polymerDisplay__;
              }
            }
          }
          n.__hideTemplateChildren__ = hide;
          if (n._showHideChildren) {
            n._showHideChildren(hide);
          }
        }
      }
      /**
       * Overrides default property-effects implementation to intercept
       * textContent bindings while children are "hidden" and cache in
       * private storage for later retrieval.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */

    }, {
      key: '_setUnmanagedPropertyToNode',
      value: function _setUnmanagedPropertyToNode(node, prop, value) {
        if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
          node.__polymerTextContent__ = value;
        } else {
          get(TemplateInstanceBase.prototype.__proto__ || Object.getPrototypeOf(TemplateInstanceBase.prototype), '_setUnmanagedPropertyToNode', this).call(this, node, prop, value);
        }
      }
      /**
       * Find the parent model of this template instance.  The parent model
       * is either another templatize instance that had option `parentModel: true`,
       * or else the host element.
       *
       * @return {!Polymer_PropertyEffects} The parent model of this instance
       */

    }, {
      key: 'dispatchEvent',


      /**
       * Stub of HTMLElement's `dispatchEvent`, so that effects that may
       * dispatch events safely no-op.
       *
       * @param {Event} event Event to dispatch
       * @return {boolean} Always true.
       */
      value: function dispatchEvent(event) {
        // eslint-disable-line no-unused-vars
        return true;
      }
    }, {
      key: 'parentModel',
      get: function get$$1() {
        var model = this.__parentModel;
        if (!model) {
          var options = void 0;
          model = this;
          do {
            // A template instance's `__dataHost` is a <template>
            // `model.__dataHost.__dataHost` is the template's host
            model = model.__dataHost.__dataHost;
          } while ((options = model.__templatizeOptions) && !options.parentModel);
          this.__parentModel = model;
        }
        return model;
      }
    }]);
    return TemplateInstanceBase;
  }(base);

  /**
   * @constructor
   * @extends {TemplateInstanceBase}
   * @implements {Polymer_MutableData}
   * @private
   */
  var MutableTemplateInstanceBase = MutableData(TemplateInstanceBase);

  function findMethodHost(template) {
    // Technically this should be the owner of the outermost template.
    // In shadow dom, this is always getRootNode().host, but we can
    // approximate this via cooperation with our dataHost always setting
    // `_methodHost` as long as there were bindings (or id's) on this
    // instance causing it to get a dataHost.
    var templateHost = template.__dataHost;
    return templateHost && templateHost._methodHost || templateHost;
  }

  /* eslint-disable valid-jsdoc */
  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */
  function createTemplatizerClass(template, templateInfo, options) {
    // Anonymous class created by the templatize
    var base = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
    /**
     * @constructor
     * @extends {base}
     * @private
     */
    var klass = function (_base2) {
      inherits(klass, _base2);

      function klass() {
        classCallCheck(this, klass);
        return possibleConstructorReturn(this, (klass.__proto__ || Object.getPrototypeOf(klass)).apply(this, arguments));
      }

      return klass;
    }(base);
    klass.prototype.__templatizeOptions = options;
    klass.prototype._bindTemplate(template);
    addNotifyEffects(klass, template, templateInfo, options);
    return klass;
  }

  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */
  function addPropagateEffects(template, templateInfo, options) {
    var userForwardHostProp = options.forwardHostProp;
    if (userForwardHostProp) {
      // Provide data API and property effects on memoized template class
      var klass = templateInfo.templatizeTemplateClass;
      if (!klass) {
        var _base3 = options.mutableData ? MutableDataTemplate : DataTemplate;
        /** @private */
        klass = templateInfo.templatizeTemplateClass = function (_base4) {
          inherits(TemplatizedTemplate, _base4);

          function TemplatizedTemplate() {
            classCallCheck(this, TemplatizedTemplate);
            return possibleConstructorReturn(this, (TemplatizedTemplate.__proto__ || Object.getPrototypeOf(TemplatizedTemplate)).apply(this, arguments));
          }

          return TemplatizedTemplate;
        }(_base3);
        // Add template - >instances effects
        // and host <- template effects
        var hostProps = templateInfo.hostProps;
        for (var prop in hostProps) {
          klass.prototype._addPropertyEffect('_host_' + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: createForwardHostPropEffect(prop, userForwardHostProp) });
          klass.prototype._createNotifyingProperty('_host_' + prop);
        }
      }
      upgradeTemplate(template, klass);
      // Mix any pre-bound data into __data; no need to flush this to
      // instances since they pull from the template at instance-time
      if (template.__dataProto) {
        // Note, generally `__dataProto` could be chained, but it's guaranteed
        // to not be since this is a vanilla template we just added effects to
        Object.assign(template.__data, template.__dataProto);
      }
      // Clear any pending data for performance
      template.__dataTemp = {};
      template.__dataPending = null;
      template.__dataOld = null;
      template._enableProperties();
    }
  }
  /* eslint-enable valid-jsdoc */

  function createForwardHostPropEffect(hostProp, userForwardHostProp) {
    return function forwardHostProp(template, prop, props) {
      userForwardHostProp.call(template.__templatizeOwner, prop.substring('_host_'.length), props[prop]);
    };
  }

  function addNotifyEffects(klass, template, templateInfo, options) {
    var hostProps = templateInfo.hostProps || {};
    for (var iprop in options.instanceProps) {
      delete hostProps[iprop];
      var userNotifyInstanceProp = options.notifyInstanceProp;
      if (userNotifyInstanceProp) {
        klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp) });
      }
    }
    if (options.forwardHostProp && template.__dataHost) {
      for (var hprop in hostProps) {
        klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyHostPropEffect() });
      }
    }
  }

  function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
    return function notifyInstanceProp(inst, prop, props) {
      userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
    };
  }

  function createNotifyHostPropEffect() {
    return function notifyHostProp(inst, prop, props) {
      inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
    };
  }

  /**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */
  function templatize(template, owner, options) {
    options = /** @type {!TemplatizeOptions} */options || {};
    if (template.__templatizeOwner) {
      throw new Error('A <template> can only be templatized once');
    }
    template.__templatizeOwner = owner;
    var ctor = owner ? owner.constructor : TemplateInstanceBase;
    var templateInfo = ctor._parseTemplate(template);
    // Get memoized base class for the prototypical template, which
    // includes property effects for binding template & forwarding
    var baseClass = templateInfo.templatizeInstanceClass;
    if (!baseClass) {
      baseClass = createTemplatizerClass(template, templateInfo, options);
      templateInfo.templatizeInstanceClass = baseClass;
    }
    // Host property forwarding must be installed onto template instance
    addPropagateEffects(template, templateInfo, options);
    // Subclass base class and add reference for this specific template
    /** @private */
    var klass = function (_baseClass) {
      inherits(TemplateInstance, _baseClass);

      function TemplateInstance() {
        classCallCheck(this, TemplateInstance);
        return possibleConstructorReturn(this, (TemplateInstance.__proto__ || Object.getPrototypeOf(TemplateInstance)).apply(this, arguments));
      }

      return TemplateInstance;
    }(baseClass);
    klass.prototype._methodHost = findMethodHost(template);
    klass.prototype.__dataHost = template;
    klass.prototype.__templatizeOwner = owner;
    klass.prototype.__hostProps = templateInfo.hostProps;
    klass = /** @type {function(new:TemplateInstanceBase)} */klass; //eslint-disable-line no-self-assign
    return klass;
  }

  /**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */
  function modelForElement(template, node) {
    var model = void 0;
    while (node) {
      // An element with a __templatizeInstance marks the top boundary
      // of a scope; walk up until we find one, and then ensure that
      // its __dataHost matches `this`, meaning this dom-repeat stamped it
      if (model = node.__templatizeInstance) {
        // Found an element stamped by another template; keep walking up
        // from its __dataHost
        if (model.__dataHost != template) {
          node = model.__dataHost;
        } else {
          return model;
        }
      } else {
        // Still in a template scope, keep going up until
        // a __templatizeInstance is found
        node = node.parentNode;
      }
    }
    return null;
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_OptionalMutableData}
   * @implements {Polymer_GestureEventListeners}
   * @private
   */
  var domBindBase = GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));

  /**
   * Custom element to allow using Polymer's template features (data binding,
   * declarative event listeners, etc.) in the main document without defining
   * a new custom element.
   *
   * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
   * element, which will immediately stamp the wrapped template into the main
   * document and bind elements to the `dom-bind` element itself as the
   * binding scope.
   *
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @appliesMixin OptionalMutableData
   * @appliesMixin GestureEventListeners
   * @extends {domBindBase}
   * @summary Custom element to allow using Polymer's template features (data
   *   binding, declarative event listeners, etc.) in the main document.
   */
  var DomBind = function (_domBindBase) {
    inherits(DomBind, _domBindBase);
    createClass(DomBind, null, [{
      key: 'observedAttributes',
      get: function get$$1() {
        return ['mutable-data'];
      }
    }]);

    function DomBind() {
      classCallCheck(this, DomBind);

      var _this = possibleConstructorReturn(this, (DomBind.__proto__ || Object.getPrototypeOf(DomBind)).call(this));

      _this.root = null;
      _this.$ = null;
      _this.__children = null;
      return _this;
    }

    /** @return {void} */


    createClass(DomBind, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback() {
        // assumes only one observed attribute
        this.mutableData = true;
      }

      /** @return {void} */

    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        this.style.display = 'none';
        this.render();
      }

      /** @return {void} */

    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.__removeChildren();
      }
    }, {
      key: '__insertChildren',
      value: function __insertChildren() {
        this.parentNode.insertBefore(this.root, this);
      }
    }, {
      key: '__removeChildren',
      value: function __removeChildren() {
        if (this.__children) {
          for (var i = 0; i < this.__children.length; i++) {
            this.root.appendChild(this.__children[i]);
          }
        }
      }

      /**
       * Forces the element to render its content. This is typically only
       * necessary to call if HTMLImports with the async attribute are used.
       * @return {void}
       */

    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var template = void 0;
        if (!this.__children) {
          template = /** @type {HTMLTemplateElement} */template || this.querySelector('template');
          if (!template) {
            // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              template = /** @type {HTMLTemplateElement} */_this2.querySelector('template');
              if (template) {
                observer.disconnect();
                _this2.render();
              } else {
                throw new Error('dom-bind requires a <template> child');
              }
            });
            observer.observe(this, { childList: true });
            return;
          }
          this.root = this._stampTemplate(template);
          this.$ = this.root.$;
          this.__children = [];
          for (var n = this.root.firstChild; n; n = n.nextSibling) {
            this.__children[this.__children.length] = n;
          }
          this._enableProperties();
        }
        this.__insertChildren();
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
      }
    }]);
    return DomBind;
  }(domBindBase);

  customElements.define('dom-bind', DomBind);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Class representing a static string value which can be used to filter
   * strings by asseting that they have been created via this class. The
   * `value` property returns the string passed to the constructor.
   */

  var LiteralString = function () {
    function LiteralString(string) {
      classCallCheck(this, LiteralString);

      /** @type {string} */
      this.value = string.toString();
    }
    /**
     * @return {string} LiteralString string value
     * @override
     */


    createClass(LiteralString, [{
      key: 'toString',
      value: function toString() {
        return this.value;
      }
    }]);
    return LiteralString;
  }();

  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */


  function literalValue(value) {
    if (value instanceof LiteralString) {
      return (/** @type {!LiteralString} */value.value
      );
    } else {
      throw new Error('non-literal value passed to Polymer\'s htmlLiteral function: ' + value);
    }
  }

  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */
  function htmlValue(value) {
    if (value instanceof HTMLTemplateElement) {
      return (/** @type {!HTMLTemplateElement } */value.innerHTML
      );
    } else if (value instanceof LiteralString) {
      return literalValue(value);
    } else {
      throw new Error('non-template value passed to Polymer\'s html function: ' + value);
    }
  }

  /**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */
  var html$2 = function html(strings) {
    var template = /** @type {!HTMLTemplateElement} */document.createElement('template');

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    template.innerHTML = values.reduce(function (acc, v, idx) {
      return acc + htmlValue(v) + strings[idx + 1];
    }, strings[0]);
    return template;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @customElement
   * @polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @appliesMixin ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */
  var PolymerElement = ElementMixin(HTMLElement);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @constructor
   * @implements {Polymer_OptionalMutableData}
   * @extends {PolymerElement}
   * @private
   */
  var domRepeatBase = OptionalMutableData(PolymerElement);

  /**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <dom-repeat items="{{employees}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *       </template>
   *     </dom-repeat>
   *
   *   </template>
   *
   * </dom-module>
   * ```
   *
   * With the following custom element definition:
   *
   * ```js
   * class EmployeeList extends PolymerElement {
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   * }
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should be made using the Array
   * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
   * `shift`, `unshift`), and template instances will be kept in sync with the
   * data in the array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model should be used to manipulate data on the
   * instance, for example `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer(item) {
   *   return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @customElement
   * @polymer
   * @extends {domRepeatBase}
   * @appliesMixin OptionalMutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */
  var DomRepeat = function (_domRepeatBase) {
    inherits(DomRepeat, _domRepeatBase);
    createClass(DomRepeat, null, [{
      key: 'is',


      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get$$1() {
        return 'dom-repeat';
      }
    }, {
      key: 'template',
      get: function get$$1() {
        return null;
      }
    }, {
      key: 'properties',
      get: function get$$1() {

        /**
         * Fired whenever DOM is added or removed by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */
        return {

          /**
           * An array containing items determining how many instances of the template
           * to stamp and that that each template instance should bind to.
           */
          items: {
            type: Array
          },

          /**
           * The name of the variable to add to the binding scope for the array
           * element associated with a given template instance.
           */
          as: {
            type: String,
            value: 'item'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the sorted and filtered list of rendered items.
           * Note, for the index in the `this.items` array, use the value of the
           * `itemsIndexAs` property.
           */
          indexAs: {
            type: String,
            value: 'index'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the `this.items` array. Note, for the index of
           * this instance in the sorted and filtered list of rendered items,
           * use the value of the `indexAs` property.
           */
          itemsIndexAs: {
            type: String,
            value: 'itemsIndex'
          },

          /**
           * A function that should determine the sort order of the items.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.sort`.
           * Using a sort function has no effect on the underlying `items` array.
           */
          sort: {
            type: Function,
            observer: '__sortChanged'
          },

          /**
           * A function that can be used to filter items out of the view.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.filter`.
           * Using a filter function has no effect on the underlying `items` array.
           */
          filter: {
            type: Function,
            observer: '__filterChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `observe` property
           * should be set to a space-separated list of the names of item
           * sub-fields that should trigger a re-sort or re-filter when changed.
           * These should generally be fields of `item` that the sort or filter
           * function depends on.
           */
          observe: {
            type: String,
            observer: '__observeChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `delay` property
           * determines a debounce time in ms after a change to observed item
           * properties that must pass before the filter or sort is re-run.
           * This is useful in rate-limiting shuffling of the view when
           * item changes may be frequent.
           */
          delay: Number,

          /**
           * Count of currently rendered items after `filter` (if any) has been applied.
           * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
           * set of template instances is rendered.
           *
           */
          renderedItemCount: {
            type: Number,
            notify: true,
            readOnly: true
          },

          /**
           * Defines an initial count of template instances to render after setting
           * the `items` array, before the next paint, and puts the `dom-repeat`
           * into "chunking mode".  The remaining items will be created and rendered
           * incrementally at each animation frame therof until all instances have
           * been rendered.
           */
          initialCount: {
            type: Number,
            observer: '__initializeChunking'
          },

          /**
           * When `initialCount` is used, this property defines a frame rate (in
           * fps) to target by throttling the number of instances rendered each
           * frame to not exceed the budget for the target frame rate.  The
           * framerate is effectively the number of `requestAnimationFrame`s that
           * it tries to allow to actually fire in a given second. It does this
           * by measuring the time between `rAF`s and continuously adjusting the
           * number of items created each `rAF` to maintain the target framerate.
           * Setting this to a higher number allows lower latency and higher
           * throughput for event handlers and other tasks, but results in a
           * longer time for the remaining items to complete rendering.
           */
          targetFramerate: {
            type: Number,
            value: 20
          },

          _targetFrameTime: {
            type: Number,
            computed: '__computeFrameTime(targetFramerate)'
          }

        };
      }
    }, {
      key: 'observers',
      get: function get$$1() {
        return ['__itemsChanged(items.*)'];
      }
    }]);

    function DomRepeat() {
      classCallCheck(this, DomRepeat);

      var _this = possibleConstructorReturn(this, (DomRepeat.__proto__ || Object.getPrototypeOf(DomRepeat)).call(this));

      _this.__instances = [];
      _this.__limit = Infinity;
      _this.__pool = [];
      _this.__renderDebouncer = null;
      _this.__itemsIdxToInstIdx = {};
      _this.__chunkCount = null;
      _this.__lastChunkTime = null;
      _this.__sortFn = null;
      _this.__filterFn = null;
      _this.__observePaths = null;
      _this.__ctor = null;
      _this.__isDetached = true;
      _this.template = null;
      return _this;
    }

    /**
     * @return {void}
     */


    createClass(DomRepeat, [{
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), 'disconnectedCallback', this).call(this);
        this.__isDetached = true;
        for (var i = 0; i < this.__instances.length; i++) {
          this.__detachInstance(i);
        }
      }

      /**
       * @return {void}
       */

    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), 'connectedCallback', this).call(this);
        this.style.display = 'none';
        // only perform attachment if the element was previously detached.
        if (this.__isDetached) {
          this.__isDetached = false;
          var parent = this.parentNode;
          for (var i = 0; i < this.__instances.length; i++) {
            this.__attachInstance(i, parent);
          }
        }
      }
    }, {
      key: '__ensureTemplatized',
      value: function __ensureTemplatized() {
        var _this2 = this;

        // Templatizing (generating the instance constructor) needs to wait
        // until ready, since won't have its template content handed back to
        // it until then
        if (!this.__ctor) {
          var template = this.template = /** @type {HTMLTemplateElement} */this.querySelector('template');
          if (!template) {
            // // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              if (_this2.querySelector('template')) {
                observer.disconnect();
                _this2.__render();
              } else {
                throw new Error('dom-repeat requires a <template> child');
              }
            });
            observer.observe(this, { childList: true });
            return false;
          }
          // Template instance props that should be excluded from forwarding
          var instanceProps = {};
          instanceProps[this.as] = true;
          instanceProps[this.indexAs] = true;
          instanceProps[this.itemsIndexAs] = true;
          this.__ctor = templatize(template, this, {
            mutableData: this.mutableData,
            parentModel: true,
            instanceProps: instanceProps,
            /**
             * @this {this}
             * @param {string} prop Property to set
             * @param {*} value Value to set property to
             */
            forwardHostProp: function forwardHostProp(prop, value) {
              var i$ = this.__instances;
              for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
                inst.forwardHostProp(prop, value);
              }
            },
            /**
             * @this {this}
             * @param {Object} inst Instance to notify
             * @param {string} prop Property to notify
             * @param {*} value Value to notify
             */
            notifyInstanceProp: function notifyInstanceProp(inst, prop, value) {
              if (matches(this.as, prop)) {
                var idx = inst[this.itemsIndexAs];
                if (prop == this.as) {
                  this.items[idx] = value;
                }
                var path = translate(this.as, 'items.' + idx, prop);
                this.notifyPath(path, value);
              }
            }
          });
        }
        return true;
      }
    }, {
      key: '__getMethodHost',
      value: function __getMethodHost() {
        // Technically this should be the owner of the outermost template.
        // In shadow dom, this is always getRootNode().host, but we can
        // approximate this via cooperation with our dataHost always setting
        // `_methodHost` as long as there were bindings (or id's) on this
        // instance causing it to get a dataHost.
        return this.__dataHost._methodHost || this.__dataHost;
      }
    }, {
      key: '__functionFromPropertyValue',
      value: function __functionFromPropertyValue(functionOrMethodName) {
        if (typeof functionOrMethodName === 'string') {
          var methodName = functionOrMethodName;
          var obj = this.__getMethodHost();
          return function () {
            return obj[methodName].apply(obj, arguments);
          };
        }

        return functionOrMethodName;
      }
    }, {
      key: '__sortChanged',
      value: function __sortChanged(sort) {
        this.__sortFn = this.__functionFromPropertyValue(sort);
        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: '__filterChanged',
      value: function __filterChanged(filter) {
        this.__filterFn = this.__functionFromPropertyValue(filter);
        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: '__computeFrameTime',
      value: function __computeFrameTime(rate) {
        return Math.ceil(1000 / rate);
      }
    }, {
      key: '__initializeChunking',
      value: function __initializeChunking() {
        if (this.initialCount) {
          this.__limit = this.initialCount;
          this.__chunkCount = this.initialCount;
          this.__lastChunkTime = performance.now();
        }
      }
    }, {
      key: '__tryRenderChunk',
      value: function __tryRenderChunk() {
        // Debounced so that multiple calls through `_render` between animation
        // frames only queue one new rAF (e.g. array mutation & chunked render)
        if (this.items && this.__limit < this.items.length) {
          this.__debounceRender(this.__requestRenderChunk);
        }
      }
    }, {
      key: '__requestRenderChunk',
      value: function __requestRenderChunk() {
        var _this3 = this;

        requestAnimationFrame(function () {
          return _this3.__renderChunk();
        });
      }
    }, {
      key: '__renderChunk',
      value: function __renderChunk() {
        // Simple auto chunkSize throttling algorithm based on feedback loop:
        // measure actual time between frames and scale chunk count by ratio
        // of target/actual frame time
        var currChunkTime = performance.now();
        var ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
        this.__limit += this.__chunkCount;
        this.__lastChunkTime = currChunkTime;
        this.__debounceRender(this.__render);
      }
    }, {
      key: '__observeChanged',
      value: function __observeChanged() {
        this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
      }
    }, {
      key: '__itemsChanged',
      value: function __itemsChanged(change) {
        if (this.items && !Array.isArray(this.items)) {
          console.warn('dom-repeat expected array for `items`, found', this.items);
        }
        // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
        // path to that instance synchronously (returns false for non-item paths)
        if (!this.__handleItemPath(change.path, change.value)) {
          // Otherwise, the array was reset ('items') or spliced ('items.splices'),
          // so queue a full refresh
          this.__initializeChunking();
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: '__handleObservedPaths',
      value: function __handleObservedPaths(path) {
        // Handle cases where path changes should cause a re-sort/filter
        if (this.__sortFn || this.__filterFn) {
          if (!path) {
            // Always re-render if the item itself changed
            this.__debounceRender(this.__render, this.delay);
          } else if (this.__observePaths) {
            // Otherwise, re-render if the path changed matches an observed path
            var paths = this.__observePaths;
            for (var i = 0; i < paths.length; i++) {
              if (path.indexOf(paths[i]) === 0) {
                this.__debounceRender(this.__render, this.delay);
              }
            }
          }
        }
      }

      /**
       * @param {function(this:DomRepeat)} fn Function to debounce.
       * @param {number=} delay Delay in ms to debounce by.
       */

    }, {
      key: '__debounceRender',
      value: function __debounceRender(fn) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        this.__renderDebouncer = Debouncer.debounce(this.__renderDebouncer, delay > 0 ? timeOut.after(delay) : microTask, fn.bind(this));
        enqueueDebouncer(this.__renderDebouncer);
      }

      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */

    }, {
      key: 'render',
      value: function render() {
        // Queue this repeater, then flush all in order
        this.__debounceRender(this.__render);
        flush$1();
      }
    }, {
      key: '__render',
      value: function __render() {
        if (!this.__ensureTemplatized()) {
          // No template found yet
          return;
        }
        this.__applyFullRefresh();
        // Reset the pool
        // TODO(kschaaf): Reuse pool across turns and nested templates
        // Now that objects/arrays are re-evaluated when set, we can safely
        // reuse pooled instances across turns, however we still need to decide
        // semantics regarding how long to hold, how many to hold, etc.
        this.__pool.length = 0;
        // Set rendered item count
        this._setRenderedItemCount(this.__instances.length);
        // Notify users
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
        // Check to see if we need to render more items
        this.__tryRenderChunk();
      }
    }, {
      key: '__applyFullRefresh',
      value: function __applyFullRefresh() {
        var _this4 = this;

        var items = this.items || [];
        var isntIdxToItemsIdx = new Array(items.length);
        for (var i = 0; i < items.length; i++) {
          isntIdxToItemsIdx[i] = i;
        }
        // Apply user filter
        if (this.__filterFn) {
          isntIdxToItemsIdx = isntIdxToItemsIdx.filter(function (i, idx, array) {
            return _this4.__filterFn(items[i], idx, array);
          });
        }
        // Apply user sort
        if (this.__sortFn) {
          isntIdxToItemsIdx.sort(function (a, b) {
            return _this4.__sortFn(items[a], items[b]);
          });
        }
        // items->inst map kept for item path forwarding
        var itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
        var instIdx = 0;
        // Generate instances and assign items
        var limit = Math.min(isntIdxToItemsIdx.length, this.__limit);
        for (; instIdx < limit; instIdx++) {
          var inst = this.__instances[instIdx];
          var itemIdx = isntIdxToItemsIdx[instIdx];
          var item = items[itemIdx];
          itemsIdxToInstIdx[itemIdx] = instIdx;
          if (inst) {
            inst._setPendingProperty(this.as, item);
            inst._setPendingProperty(this.indexAs, instIdx);
            inst._setPendingProperty(this.itemsIndexAs, itemIdx);
            inst._flushProperties();
          } else {
            this.__insertInstance(item, instIdx, itemIdx);
          }
        }
        // Remove any extra instances from previous state
        for (var _i = this.__instances.length - 1; _i >= instIdx; _i--) {
          this.__detachAndRemoveInstance(_i);
        }
      }
    }, {
      key: '__detachInstance',
      value: function __detachInstance(idx) {
        var inst = this.__instances[idx];
        for (var i = 0; i < inst.children.length; i++) {
          var el = inst.children[i];
          inst.root.appendChild(el);
        }
        return inst;
      }
    }, {
      key: '__attachInstance',
      value: function __attachInstance(idx, parent) {
        var inst = this.__instances[idx];
        parent.insertBefore(inst.root, this);
      }
    }, {
      key: '__detachAndRemoveInstance',
      value: function __detachAndRemoveInstance(idx) {
        var inst = this.__detachInstance(idx);
        if (inst) {
          this.__pool.push(inst);
        }
        this.__instances.splice(idx, 1);
      }
    }, {
      key: '__stampInstance',
      value: function __stampInstance(item, instIdx, itemIdx) {
        var model = {};
        model[this.as] = item;
        model[this.indexAs] = instIdx;
        model[this.itemsIndexAs] = itemIdx;
        return new this.__ctor(model);
      }
    }, {
      key: '__insertInstance',
      value: function __insertInstance(item, instIdx, itemIdx) {
        var inst = this.__pool.pop();
        if (inst) {
          // TODO(kschaaf): If the pool is shared across turns, hostProps
          // need to be re-set to reused instances in addition to item
          inst._setPendingProperty(this.as, item);
          inst._setPendingProperty(this.indexAs, instIdx);
          inst._setPendingProperty(this.itemsIndexAs, itemIdx);
          inst._flushProperties();
        } else {
          inst = this.__stampInstance(item, instIdx, itemIdx);
        }
        var beforeRow = this.__instances[instIdx + 1];
        var beforeNode = beforeRow ? beforeRow.children[0] : this;
        this.parentNode.insertBefore(inst.root, beforeNode);
        this.__instances[instIdx] = inst;
        return inst;
      }

      // Implements extension point from Templatize mixin
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hidden Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */

    }, {
      key: '_showHideChildren',
      value: function _showHideChildren(hidden) {
        for (var i = 0; i < this.__instances.length; i++) {
          this.__instances[i]._showHideChildren(hidden);
        }
      }

      // Called as a side effect of a host items.<key>.<path> path change,
      // responsible for notifying item.<path> changes to inst for key

    }, {
      key: '__handleItemPath',
      value: function __handleItemPath(path, value) {
        var itemsPath = path.slice(6); // 'items.'.length == 6
        var dot = itemsPath.indexOf('.');
        var itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot);
        // If path was index into array...
        if (itemsIdx == parseInt(itemsIdx, 10)) {
          var itemSubPath = dot < 0 ? '' : itemsPath.substring(dot + 1);
          // If the path is observed, it will trigger a full refresh
          this.__handleObservedPaths(itemSubPath);
          // Note, even if a rull refresh is triggered, always do the path
          // notification because unless mutableData is used for dom-repeat
          // and all elements in the instance subtree, a full refresh may
          // not trigger the proper update.
          var instIdx = this.__itemsIdxToInstIdx[itemsIdx];
          var inst = this.__instances[instIdx];
          if (inst) {
            var itemPath = this.as + (itemSubPath ? '.' + itemSubPath : '');
            // This is effectively `notifyPath`, but avoids some of the overhead
            // of the public API
            inst._setPendingPropertyOrPath(itemPath, value, false, true);
            inst._flushProperties();
          }
          return true;
        }
      }

      /**
       * Returns the item associated with a given element stamped by
       * this `dom-repeat`.
       *
       * Note, to modify sub-properties of the item,
       * `modelForElement(el).set('item.<sub-prop>', value)`
       * should be used.
       *
       * @param {!HTMLElement} el Element for which to return the item.
       * @return {*} Item associated with the element.
       */

    }, {
      key: 'itemForElement',
      value: function itemForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.as];
      }

      /**
       * Returns the inst index for a given element stamped by this `dom-repeat`.
       * If `sort` is provided, the index will reflect the sorted order (rather
       * than the original array order).
       *
       * @param {!HTMLElement} el Element for which to return the index.
       * @return {?number} Row index associated with the element (note this may
       *   not correspond to the array index if a user `sort` is applied).
       */

    }, {
      key: 'indexForElement',
      value: function indexForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.indexAs];
      }

      /**
       * Returns the template "model" associated with a given element, which
       * serves as the binding scope for the template instance the element is
       * contained in. A template model
       * should be used to manipulate data associated with this template instance.
       *
       * Example:
       *
       *   let model = modelForElement(el);
       *   if (model.index < 10) {
       *     model.set('item.checked', true);
       *   }
       *
       * @param {!HTMLElement} el Element for which to return a template model.
       * @return {TemplateInstanceBase} Model representing the binding scope for
       *   the element.
       */

    }, {
      key: 'modelForElement',
      value: function modelForElement$$1(el) {
        return modelForElement(this.template, el);
      }
    }]);
    return DomRepeat;
  }(domRepeatBase);

  customElements.define(DomRepeat.is, DomRepeat);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * The `<dom-if>` element will stamp a light-dom `<template>` child when
   * the `if` property becomes truthy, and the template can use Polymer
   * data-binding and declarative event features when used in the context of
   * a Polymer element's template.
   *
   * When `if` becomes falsy, the stamped content is hidden but not
   * removed from dom. When `if` subsequently becomes truthy again, the content
   * is simply re-shown. This approach is used due to its favorable performance
   * characteristics: the expense of creating template content is paid only
   * once and lazily.
   *
   * Set the `restamp` property to true to force the stamped content to be
   * created / destroyed when the `if` condition changes.
   *
   * @customElement
   * @polymer
   * @extends PolymerElement
   * @summary Custom element that conditionally stamps and hides or removes
   *   template content based on a boolean flag.
   */
  var DomIf = function (_PolymerElement) {
    inherits(DomIf, _PolymerElement);
    createClass(DomIf, null, [{
      key: 'is',


      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get$$1() {
        return 'dom-if';
      }
    }, {
      key: 'template',
      get: function get$$1() {
        return null;
      }
    }, {
      key: 'properties',
      get: function get$$1() {

        return {

          /**
           * Fired whenever DOM is added or removed/hidden by this template (by
           * default, rendering occurs lazily).  To force immediate rendering, call
           * `render`.
           *
           * @event dom-change
           */

          /**
           * A boolean indicating whether this template should stamp.
           */
          if: {
            type: Boolean,
            observer: '__debounceRender'
          },

          /**
           * When true, elements will be removed from DOM and discarded when `if`
           * becomes false and re-created and added back to the DOM when `if`
           * becomes true.  By default, stamped elements will be hidden but left
           * in the DOM when `if` becomes false, which is generally results
           * in better performance.
           */
          restamp: {
            type: Boolean,
            observer: '__debounceRender'
          }

        };
      }
    }]);

    function DomIf() {
      classCallCheck(this, DomIf);

      var _this = possibleConstructorReturn(this, (DomIf.__proto__ || Object.getPrototypeOf(DomIf)).call(this));

      _this.__renderDebouncer = null;
      _this.__invalidProps = null;
      _this.__instance = null;
      _this._lastIf = false;
      _this.__ctor = null;
      return _this;
    }

    createClass(DomIf, [{
      key: '__debounceRender',
      value: function __debounceRender() {
        var _this2 = this;

        // Render is async for 2 reasons:
        // 1. To eliminate dom creation trashing if user code thrashes `if` in the
        //    same turn. This was more common in 1.x where a compound computed
        //    property could result in the result changing multiple times, but is
        //    mitigated to a large extent by batched property processing in 2.x.
        // 2. To avoid double object propagation when a bag including values bound
        //    to the `if` property as well as one or more hostProps could enqueue
        //    the <dom-if> to flush before the <template>'s host property
        //    forwarding. In that scenario creating an instance would result in
        //    the host props being set once, and then the enqueued changes on the
        //    template would set properties a second time, potentially causing an
        //    object to be set to an instance more than once.  Creating the
        //    instance async from flushing data ensures this doesn't happen. If
        //    we wanted a sync option in the future, simply having <dom-if> flush
        //    (or clear) its template's pending host properties before creating
        //    the instance would also avoid the problem.
        this.__renderDebouncer = Debouncer.debounce(this.__renderDebouncer, microTask, function () {
          return _this2.__render();
        });
        enqueueDebouncer(this.__renderDebouncer);
      }

      /**
       * @return {void}
       */

    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), 'disconnectedCallback', this).call(this);
        if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && !this.parentNode.host) {
          this.__teardownInstance();
        }
      }

      /**
       * @return {void}
       */

    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), 'connectedCallback', this).call(this);
        this.style.display = 'none';
        if (this.if) {
          this.__debounceRender();
        }
      }

      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */

    }, {
      key: 'render',
      value: function render() {
        flush$1();
      }
    }, {
      key: '__render',
      value: function __render() {
        if (this.if) {
          if (!this.__ensureInstance()) {
            // No template found yet
            return;
          }
          this._showHideChildren();
        } else if (this.restamp) {
          this.__teardownInstance();
        }
        if (!this.restamp && this.__instance) {
          this._showHideChildren();
        }
        if (this.if != this._lastIf) {
          this.dispatchEvent(new CustomEvent('dom-change', {
            bubbles: true,
            composed: true
          }));
          this._lastIf = this.if;
        }
      }
    }, {
      key: '__ensureInstance',
      value: function __ensureInstance() {
        var _this3 = this;

        var parentNode = this.parentNode;
        // Guard against element being detached while render was queued
        if (parentNode) {
          if (!this.__ctor) {
            var template = /** @type {HTMLTemplateElement} */this.querySelector('template');
            if (!template) {
              // Wait until childList changes and template should be there by then
              var observer = new MutationObserver(function () {
                if (_this3.querySelector('template')) {
                  observer.disconnect();
                  _this3.__render();
                } else {
                  throw new Error('dom-if requires a <template> child');
                }
              });
              observer.observe(this, { childList: true });
              return false;
            }
            this.__ctor = templatize(template, this, {
              // dom-if templatizer instances require `mutable: true`, as
              // `__syncHostProperties` relies on that behavior to sync objects
              mutableData: true,
              /**
               * @param {string} prop Property to forward
               * @param {*} value Value of property
               * @this {this}
               */
              forwardHostProp: function forwardHostProp(prop, value) {
                if (this.__instance) {
                  if (this.if) {
                    this.__instance.forwardHostProp(prop, value);
                  } else {
                    // If we have an instance but are squelching host property
                    // forwarding due to if being false, note the invalidated
                    // properties so `__syncHostProperties` can sync them the next
                    // time `if` becomes true
                    this.__invalidProps = this.__invalidProps || Object.create(null);
                    this.__invalidProps[root(prop)] = true;
                  }
                }
              }
            });
          }
          if (!this.__instance) {
            this.__instance = new this.__ctor();
            parentNode.insertBefore(this.__instance.root, this);
          } else {
            this.__syncHostProperties();
            var c$ = this.__instance.children;
            if (c$ && c$.length) {
              // Detect case where dom-if was re-attached in new position
              var lastChild = this.previousSibling;
              if (lastChild !== c$[c$.length - 1]) {
                for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
                  parentNode.insertBefore(n, this);
                }
              }
            }
          }
        }
        return true;
      }
    }, {
      key: '__syncHostProperties',
      value: function __syncHostProperties() {
        var props = this.__invalidProps;
        if (props) {
          for (var prop in props) {
            this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
          }
          this.__invalidProps = null;
          this.__instance._flushProperties();
        }
      }
    }, {
      key: '__teardownInstance',
      value: function __teardownInstance() {
        if (this.__instance) {
          var c$ = this.__instance.children;
          if (c$ && c$.length) {
            // use first child parent, for case when dom-if may have been detached
            var parent = c$[0].parentNode;
            for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
              parent.removeChild(n);
            }
          }
          this.__instance = null;
          this.__invalidProps = null;
        }
      }

      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @return {void}
       * @protected
       */

    }, {
      key: '_showHideChildren',
      value: function _showHideChildren() {
        var hidden = this.__hideTemplateChildren__ || !this.if;
        if (this.__instance) {
          this.__instance._showHideChildren(hidden);
        }
      }
    }]);
    return DomIf;
  }(PolymerElement);

  customElements.define(DomIf.is, DomIf);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array such that path changes to the
   * master array (at the host) element or elsewhere via data-binding) are
   * correctly propagated to items in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * @polymer
   * @mixinFunction
   * @appliesMixin ElementMixin
   * @summary Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array
   */
  var ArraySelectorMixin = dedupingMixin(function (superClass) {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_ElementMixin}
     * @private
     */
    var elementBase = ElementMixin(superClass);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_ArraySelectorMixin}
     * @unrestricted
     */

    var ArraySelectorMixin = function (_elementBase) {
      inherits(ArraySelectorMixin, _elementBase);
      createClass(ArraySelectorMixin, null, [{
        key: 'properties',
        get: function get$$1() {

          return {

            /**
             * An array containing items from which selection will be made.
             */
            items: {
              type: Array
            },

            /**
             * When `true`, multiple items may be selected at once (in this case,
             * `selected` is an array of currently selected items).  When `false`,
             * only one item may be selected at a time.
             */
            multi: {
              type: Boolean,
              value: false
            },

            /**
             * When `multi` is true, this is an array that contains any selected.
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?(Object|Array<!Object>)}
             */
            selected: {
              type: Object,
              notify: true
            },

            /**
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?Object}
             */
            selectedItem: {
              type: Object,
              notify: true
            },

            /**
             * When `true`, calling `select` on an item that is already selected
             * will deselect the item.
             */
            toggle: {
              type: Boolean,
              value: false
            }

          };
        }
      }, {
        key: 'observers',
        get: function get$$1() {
          return ['__updateSelection(multi, items.*)'];
        }
      }]);

      function ArraySelectorMixin() {
        classCallCheck(this, ArraySelectorMixin);

        var _this = possibleConstructorReturn(this, (ArraySelectorMixin.__proto__ || Object.getPrototypeOf(ArraySelectorMixin)).call(this));

        _this.__lastItems = null;
        _this.__lastMulti = null;
        _this.__selectedMap = null;
        return _this;
      }

      createClass(ArraySelectorMixin, [{
        key: '__updateSelection',
        value: function __updateSelection(multi, itemsInfo) {
          var path = itemsInfo.path;
          if (path == 'items') {
            // Case 1 - items array changed, so diff against previous array and
            // deselect any removed items and adjust selected indices
            var newItems = itemsInfo.base || [];
            var lastItems = this.__lastItems;
            var lastMulti = this.__lastMulti;
            if (multi !== lastMulti) {
              this.clearSelection();
            }
            if (lastItems) {
              var splices = calculateSplices(newItems, lastItems);
              this.__applySplices(splices);
            }
            this.__lastItems = newItems;
            this.__lastMulti = multi;
          } else if (itemsInfo.path == 'items.splices') {
            // Case 2 - got specific splice information describing the array mutation:
            // deselect any removed items and adjust selected indices
            this.__applySplices(itemsInfo.value.indexSplices);
          } else {
            // Case 3 - an array element was changed, so deselect the previous
            // item for that index if it was previously selected
            var part = path.slice('items.'.length);
            var idx = parseInt(part, 10);
            if (part.indexOf('.') < 0 && part == idx) {
              this.__deselectChangedIdx(idx);
            }
          }
        }
      }, {
        key: '__applySplices',
        value: function __applySplices(splices) {
          var _this2 = this;

          var selected = this.__selectedMap;
          // Adjust selected indices and mark removals

          var _loop = function _loop(i) {
            var s = splices[i];
            selected.forEach(function (idx, item) {
              if (idx < s.index) ; else if (idx >= s.index + s.removed.length) {
                // adjust index
                selected.set(item, idx + s.addedCount - s.removed.length);
              } else {
                // remove index
                selected.set(item, -1);
              }
            });
            for (var j = 0; j < s.addedCount; j++) {
              var idx = s.index + j;
              if (selected.has(_this2.items[idx])) {
                selected.set(_this2.items[idx], idx);
              }
            }
          };

          for (var i = 0; i < splices.length; i++) {
            _loop(i);
          }
          // Update linked paths
          this.__updateLinks();
          // Remove selected items that were removed from the items array
          var sidx = 0;
          selected.forEach(function (idx, item) {
            if (idx < 0) {
              if (_this2.multi) {
                _this2.splice('selected', sidx, 1);
              } else {
                _this2.selected = _this2.selectedItem = null;
              }
              selected.delete(item);
            } else {
              sidx++;
            }
          });
        }
      }, {
        key: '__updateLinks',
        value: function __updateLinks() {
          var _this3 = this;

          this.__dataLinkedPaths = {};
          if (this.multi) {
            var sidx = 0;
            this.__selectedMap.forEach(function (idx) {
              if (idx >= 0) {
                _this3.linkPaths('items.' + idx, 'selected.' + sidx++);
              }
            });
          } else {
            this.__selectedMap.forEach(function (idx) {
              _this3.linkPaths('selected', 'items.' + idx);
              _this3.linkPaths('selectedItem', 'items.' + idx);
            });
          }
        }

        /**
         * Clears the selection state.
         * @return {void}
         */

      }, {
        key: 'clearSelection',
        value: function clearSelection() {
          // Unbind previous selection
          this.__dataLinkedPaths = {};
          // The selected map stores 3 pieces of information:
          // key: items array object
          // value: items array index
          // order: selected array index
          this.__selectedMap = new Map();
          // Initialize selection
          this.selected = this.multi ? [] : null;
          this.selectedItem = null;
        }

        /**
         * Returns whether the item is currently selected.
         *
         * @param {*} item Item from `items` array to test
         * @return {boolean} Whether the item is selected
         */

      }, {
        key: 'isSelected',
        value: function isSelected(item) {
          return this.__selectedMap.has(item);
        }

        /**
         * Returns whether the item is currently selected.
         *
         * @param {number} idx Index from `items` array to test
         * @return {boolean} Whether the item is selected
         */

      }, {
        key: 'isIndexSelected',
        value: function isIndexSelected(idx) {
          return this.isSelected(this.items[idx]);
        }
      }, {
        key: '__deselectChangedIdx',
        value: function __deselectChangedIdx(idx) {
          var _this4 = this;

          var sidx = this.__selectedIndexForItemIndex(idx);
          if (sidx >= 0) {
            var i = 0;
            this.__selectedMap.forEach(function (idx, item) {
              if (sidx == i++) {
                _this4.deselect(item);
              }
            });
          }
        }
      }, {
        key: '__selectedIndexForItemIndex',
        value: function __selectedIndexForItemIndex(idx) {
          var selected = this.__dataLinkedPaths['items.' + idx];
          if (selected) {
            return parseInt(selected.slice('selected.'.length), 10);
          }
        }

        /**
         * Deselects the given item if it is already selected.
         *
         * @param {*} item Item from `items` array to deselect
         * @return {void}
         */

      }, {
        key: 'deselect',
        value: function deselect(item) {
          var idx = this.__selectedMap.get(item);
          if (idx >= 0) {
            this.__selectedMap.delete(item);
            var sidx = void 0;
            if (this.multi) {
              sidx = this.__selectedIndexForItemIndex(idx);
            }
            this.__updateLinks();
            if (this.multi) {
              this.splice('selected', sidx, 1);
            } else {
              this.selected = this.selectedItem = null;
            }
          }
        }

        /**
         * Deselects the given index if it is already selected.
         *
         * @param {number} idx Index from `items` array to deselect
         * @return {void}
         */

      }, {
        key: 'deselectIndex',
        value: function deselectIndex(idx) {
          this.deselect(this.items[idx]);
        }

        /**
         * Selects the given item.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @param {*} item Item from `items` array to select
         * @return {void}
         */

      }, {
        key: 'select',
        value: function select(item) {
          this.selectIndex(this.items.indexOf(item));
        }

        /**
         * Selects the given index.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @param {number} idx Index from `items` array to select
         * @return {void}
         */

      }, {
        key: 'selectIndex',
        value: function selectIndex(idx) {
          var item = this.items[idx];
          if (!this.isSelected(item)) {
            if (!this.multi) {
              this.__selectedMap.clear();
            }
            this.__selectedMap.set(item, idx);
            this.__updateLinks();
            if (this.multi) {
              this.push('selected', item);
            } else {
              this.selected = this.selectedItem = item;
            }
          } else if (this.toggle) {
            this.deselectIndex(idx);
          }
        }
      }]);
      return ArraySelectorMixin;
    }(elementBase);

    return ArraySelectorMixin;
  });

  /**
   * @constructor
   * @extends {PolymerElement}
   * @implements {Polymer_ArraySelectorMixin}
   * @private
   */
  var baseArraySelector = ArraySelectorMixin(PolymerElement);

  /**
   * Element implementing the `ArraySelector` mixin, which records
   * dynamic associations between item paths in a master `items` array and a
   * `selected` array such that path changes to the master array (at the host)
   * element or elsewhere via data-binding) are correctly propagated to items
   * in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * Example:
   *
   * ```js
   * import {PolymerElement} from '@polymer/polymer';
   * import '@polymer/polymer/lib/elements/array-selector.js';
   *
   * class EmployeeList extends PolymerElement {
   *   static get _template() {
   *     return html`
   *         <div> Employee list: </div>
   *         <dom-repeat id="employeeList" items="{{employees}}">
   *           <template>
   *             <div>First name: <span>{{item.first}}</span></div>
   *               <div>Last name: <span>{{item.last}}</span></div>
   *               <button on-click="toggleSelection">Select</button>
   *           </template>
   *         </dom-repeat>
   *
   *         <array-selector id="selector"
   *                         items="{{employees}}"
   *                         selected="{{selected}}"
   *                         multi toggle></array-selector>
   *
   *         <div> Selected employees: </div>
   *         <dom-repeat items="{{selected}}">
   *           <template>
   *             <div>First name: <span>{{item.first}}</span></div>
   *             <div>Last name: <span>{{item.last}}</span></div>
   *           </template>
   *         </dom-repeat>`;
   *   }
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   *   toggleSelection(e) {
   *     const item = this.$.employeeList.itemForElement(e.target);
   *     this.$.selector.select(item);
   *   }
   * }
   * ```
   *
   * @polymer
   * @customElement
   * @extends {baseArraySelector}
   * @appliesMixin ArraySelectorMixin
   * @summary Custom element that links paths between an input `items` array and
   *   an output `selected` item or array based on calls to its selection API.
   */

  var ArraySelector = function (_baseArraySelector) {
    inherits(ArraySelector, _baseArraySelector);

    function ArraySelector() {
      classCallCheck(this, ArraySelector);
      return possibleConstructorReturn(this, (ArraySelector.__proto__ || Object.getPrototypeOf(ArraySelector)).apply(this, arguments));
    }

    createClass(ArraySelector, null, [{
      key: 'is',

      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get$$1() {
        return 'array-selector';
      }
    }]);
    return ArraySelector;
  }(baseArraySelector);

  customElements.define(ArraySelector.is, ArraySelector);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var customStyleInterface = new CustomStyleInterface();

  if (!window.ShadyCSS) {
    window.ShadyCSS = {
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplate: function prepareTemplate(template, elementName, elementExtends) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplateDom: function prepareTemplateDom(template, elementName) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplateStyles: function prepareTemplateStyles(template, elementName, elementExtends) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {Element} element
       * @param {Object=} properties
       */
      styleSubtree: function styleSubtree(element, properties) {
        customStyleInterface.processStyles();
        updateNativeProperties(element, properties);
      },


      /**
       * @param {Element} element
       */
      styleElement: function styleElement(element) {
        // eslint-disable-line no-unused-vars
        customStyleInterface.processStyles();
      },


      /**
       * @param {Object=} properties
       */
      styleDocument: function styleDocument(properties) {
        customStyleInterface.processStyles();
        updateNativeProperties(document.body, properties);
      },


      /**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */
      getComputedStyleValue: function getComputedStyleValue$$1(element, property) {
        return getComputedStyleValue(element, property);
      },
      flushCustomStyles: function flushCustomStyles() {},

      nativeCss: nativeCssVariables,
      nativeShadow: nativeShadow
    };
  }

  window.ShadyCSS.CustomStyleInterface = customStyleInterface;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var attr = 'include';

  var CustomStyleInterface$2 = window.ShadyCSS.CustomStyleInterface;

  /**
   * Custom element for defining styles in the main document that can take
   * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
   * for style encapsulation, custom properties, and custom mixins.
   *
   * - Document styles defined in a `<custom-style>` are shimmed to ensure they
   *   do not leak into local DOM when running on browsers without native
   *   Shadow DOM.
   * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
   *   to define custom properties that apply to all custom elements.
   * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
   *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
   *   (`shadycss/apply-shim.html`).
   *
   * To use:
   *
   * - Import `custom-style.html`.
   * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
   *   contains the CSS rules you want to shim.
   *
   * For example:
   *
   * ```html
   * <!-- import apply shim--only required if using mixins -->
   * <link rel="import" href="bower_components/shadycss/apply-shim.html">
   * <!-- import custom-style element -->
   * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
   *
   * <custom-style>
   *   <style>
   *     html {
   *       --custom-color: blue;
   *       --custom-mixin: {
   *         font-weight: bold;
   *         color: red;
   *       };
   *     }
   *   </style>
   * </custom-style>
   * ```
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element for defining styles in the main document that can
   *   take advantage of Polymer's style scoping and custom properties shims.
   */
  var CustomStyle = function (_HTMLElement) {
    inherits(CustomStyle, _HTMLElement);

    function CustomStyle() {
      classCallCheck(this, CustomStyle);

      var _this = possibleConstructorReturn(this, (CustomStyle.__proto__ || Object.getPrototypeOf(CustomStyle)).call(this));

      _this._style = null;
      CustomStyleInterface$2.addCustomStyle(_this);
      return _this;
    }
    /**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */


    createClass(CustomStyle, [{
      key: 'getStyle',
      value: function getStyle() {
        if (this._style) {
          return this._style;
        }
        var style = /** @type {HTMLStyleElement} */this.querySelector('style');
        if (!style) {
          return null;
        }
        this._style = style;
        var include = style.getAttribute(attr);
        if (include) {
          style.removeAttribute(attr);
          style.textContent = cssFromModules(include) + style.textContent;
        }
        /*
        HTML Imports styling the main document are deprecated in Chrome
        https://crbug.com/523952
         If this element is not in the main document, then it must be in an HTML Import document.
        In that case, move the custom style to the main document.
         The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
        cases of ordering w.r.t the main document styles.
        */
        if (this.ownerDocument !== window.document) {
          window.document.head.appendChild(this);
        }
        return this._style;
      }
    }]);
    return CustomStyle;
  }(HTMLElement);

  window.customElements.define('custom-style', CustomStyle);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var mutablePropertyChange$1 = void 0;
  /** @suppress {missingProperties} */
  (function () {
    mutablePropertyChange$1 = MutableData._mutablePropertyChange;
  })();

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // bc
  var Base = LegacyElementMixin(HTMLElement).prototype;

  var _templateObject$2 = taggedTemplateLiteral(['\n<custom-style>\n  <style is="custom-style">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>'], ['\n<custom-style>\n  <style is="custom-style">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>']);

  /**
  The `<iron-flex-layout>` component provides simple ways to use
  [CSS flexible box
  layout](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes),
  also known as flexbox. Note that this is an old element, that was written
  before all modern browsers had non-prefixed flex styles. As such, nowadays you
  don't really need to use this element anymore, and can use CSS flex styles
  directly in your code.

  This component provides two different ways to use flexbox:

  1. [Layout
  classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
  The layout class stylesheet provides a simple set of class-based flexbox rules,
  that let you specify layout properties directly in markup. You must include this
  file in every element that needs to use them.

      Sample use:

      ```
      <custom-element-demo>
        <template>
          <script src="../webcomponentsjs/webcomponents-lite.js"></script>
          <next-code-block></next-code-block>
        </template>
      </custom-element-demo>
      ```

      ```js
      import {html} from '@polymer/polymer/lib/utils/html-tag.js';
      import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

      const template = html`
        <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
        <style>
          .test { width: 100px; }
        </style>
        <div class="layout horizontal center-center">
          <div class="test">horizontal layout center alignment</div>
        </div>
      `;
      document.body.appendChild(template.content);
      ```

  2. [Custom CSS
  mixins](https://github.com/PolymerElements/iron-flex-layout/blob/master/iron-flex-layout.html).
  The mixin stylesheet includes custom CSS mixins that can be applied inside a CSS
  rule using the `@apply` function.

  Please note that the old [/deep/ layout
  classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/classes)
  are deprecated, and should not be used. To continue using layout properties
  directly in markup, please switch to using the new `dom-module`-based
  [layout
  classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
  Please note that the new version does not use `/deep/`, and therefore requires
  you to import the `dom-modules` in every element that needs to use them.

  @group Iron Elements
  @pseudoElement iron-flex-layout
  @demo demo/index.html
  */
  var template = html$2(_templateObject$2);

  template.setAttribute('style', 'display: none;');
  document.head.appendChild(template.content);

  var style = document.createElement('style');
  style.textContent = '[hidden] { display: none !important; }';
  document.head.appendChild(style);

  /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @demo demo/index.html
   * @polymerBehavior
   */
  var IronControlState = {

    properties: {

      /**
       * If true, the element currently has focus.
       */
      focused: {
        type: Boolean,
        value: false,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },

      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_disabledChanged',
        reflectToAttribute: true
      },

      /**
       * Value of the `tabindex` attribute before `disabled` was activated.
       * `null` means the attribute was not present.
       * @type {?string|undefined}
       */
      _oldTabIndex: { type: String },

      _boundFocusBlurHandler: {
        type: Function,
        value: function value() {
          return this._focusBlurHandler.bind(this);
        }
      }
    },

    observers: ['_changedControlState(focused, disabled)'],

    /**
     * @return {void}
     */
    ready: function ready() {
      this.addEventListener('focus', this._boundFocusBlurHandler, true);
      this.addEventListener('blur', this._boundFocusBlurHandler, true);
    },

    _focusBlurHandler: function _focusBlurHandler(event) {
      // Polymer takes care of retargeting events.
      this._setFocused(event.type === 'focus');
      return;
    },

    _disabledChanged: function _disabledChanged(disabled, old) {
      this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
      this.style.pointerEvents = disabled ? 'none' : '';
      if (disabled) {
        // Read the `tabindex` attribute instead of the `tabIndex` property.
        // The property returns `-1` if there is no `tabindex` attribute.
        // This distinction is important when restoring the value because
        // leaving `-1` hides shadow root children from the tab order.
        this._oldTabIndex = this.getAttribute('tabindex');
        this._setFocused(false);
        this.tabIndex = -1;
        this.blur();
      } else if (this._oldTabIndex !== undefined) {
        if (this._oldTabIndex === null) {
          this.removeAttribute('tabindex');
        } else {
          this.setAttribute('tabindex', this._oldTabIndex);
        }
      }
    },

    _changedControlState: function _changedControlState() {
      // _controlStateChanged is abstract, follow-on behaviors may implement it
      if (this._controlStateChanged) {
        this._controlStateChanged();
      }
    }

  };

  /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */

  var IronMeta = function () {
    /**
     * @param {{
     *   type: (string|null|undefined),
     *   key: (string|null|undefined),
     *   value: *,
     * }=} options
     */
    function IronMeta(options) {
      classCallCheck(this, IronMeta);

      IronMeta[' '](options);

      /** @type {string} */
      this.type = options && options.type || 'default';
      /** @type {string|null|undefined} */
      this.key = options && options.key;
      if (options && 'value' in options) {
        /** @type {*} */
        this.value = options.value;
      }
    }

    /** @return {*} */


    createClass(IronMeta, [{
      key: 'byKey',


      /**
       * @param {string} key
       * @return {*}
       */
      value: function byKey(key) {
        this.key = key;
        return this.value;
      }
    }, {
      key: 'value',
      get: function get$$1() {
        var type = this.type;
        var key = this.key;

        if (type && key) {
          return IronMeta.types[type] && IronMeta.types[type][key];
        }
      }

      /** @param {*} value */
      ,
      set: function set$$1(value) {
        var type = this.type;
        var key = this.key;

        if (type && key) {
          type = IronMeta.types[type] = IronMeta.types[type] || {};
          if (value == null) {
            delete type[key];
          } else {
            type[key] = value;
          }
        }
      }

      /** @return {!Array<*>} */

    }, {
      key: 'list',
      get: function get$$1() {
        var type = this.type;

        if (type) {
          var items = IronMeta.types[this.type];
          if (!items) {
            return [];
          }

          return Object.keys(items).map(function (key) {
            return metaDatas[this.type][key];
          }, this);
        }
      }
    }]);
    return IronMeta;
  }();
  // This function is used to convince Closure not to remove constructor calls
  // for instances that are not held anywhere. For example, when
  // `new IronMeta({...})` is used only for the side effect of adding a value.
  IronMeta[' '] = function () {};

  IronMeta.types = {};

  var metaDatas = IronMeta.types;

  /**
  `iron-meta` is a generic element you can use for sharing information across the
  DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
  such that any instance of iron-meta has access to the shared information. You
  can use `iron-meta` to share whatever you want (or create an extension [like
  x-meta] for enhancements).

  The `iron-meta` instances containing your actual data can be loaded in an
  import, or constructed in any way you see fit. The only requirement is that you
  create them before you try to access them.

  Examples:

  If I create an instance like this:

      <iron-meta key="info" value="foo/bar"></iron-meta>

  Note that value="foo/bar" is the metadata I've defined. I could define more
  attributes or use child nodes to define additional metadata.

  Now I can access that element (and it's metadata) from any iron-meta instance
  via the byKey method, e.g.

      meta.byKey('info');

  Pure imperative form would be like:

      document.createElement('iron-meta').byKey('info');

  Or, in a Polymer element, you can include a meta in your template:

      <iron-meta id="meta"></iron-meta>
      ...
      this.$.meta.byKey('info');

  @group Iron Elements
  @demo demo/index.html
  @element iron-meta
  */
  Polymer({

    is: 'iron-meta',

    properties: {

      /**
       * The type of meta-data.  All meta-data of the same type is stored
       * together.
       * @type {string}
       */
      type: {
        type: String,
        value: 'default'
      },

      /**
       * The key used to store `value` under the `type` namespace.
       * @type {?string}
       */
      key: {
        type: String
      },

      /**
       * The meta-data to store or retrieve.
       * @type {*}
       */
      value: {
        type: String,
        notify: true
      },

      /**
       * If true, `value` is set to the iron-meta instance itself.
       */
      self: { type: Boolean, observer: '_selfChanged' },

      __meta: { type: Boolean, computed: '__computeMeta(type, key, value)' }
    },

    hostAttributes: { hidden: true },

    __computeMeta: function __computeMeta(type, key, value) {
      var meta = new IronMeta({ type: type, key: key });

      if (value !== undefined && value !== meta.value) {
        meta.value = value;
      } else if (this.value !== meta.value) {
        this.value = meta.value;
      }

      return meta;
    },

    get list() {
      return this.__meta && this.__meta.list;
    },

    _selfChanged: function _selfChanged(self) {
      if (self) {
        this.value = this;
      }
    },

    /**
     * Retrieves meta data value by key.
     *
     * @method byKey
     * @param {string} key The key of the meta-data to be returned.
     * @return {*}
     */
    byKey: function byKey(key) {
      return new IronMeta({ type: this.type, key: key }).value;
    }
  });

  /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Singleton IronMeta instance.
   */
  var IronValidatableBehaviorMeta = null;

  /**
   * `Use IronValidatableBehavior` to implement an element that validates
   * user input. Use the related `IronValidatorBehavior` to add custom
   * validation logic to an iron-input.
   *
   * By default, an `<iron-form>` element validates its fields when the user
   * presses the submit button. To validate a form imperatively, call the form's
   * `validate()` method, which in turn will call `validate()` on all its
   * children. By using `IronValidatableBehavior`, your custom element
   * will get a public `validate()`, which will return the validity of the
   * element, and a corresponding `invalid` attribute, which can be used for
   * styling.
   *
   * To implement the custom validation logic of your element, you must override
   * the protected `_getValidity()` method of this behaviour, rather than
   * `validate()`. See
   * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
   * for an example.
   *
   * ### Accessibility
   *
   * Changing the `invalid` property, either manually or by calling `validate()`
   * will update the `aria-invalid` attribute.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */
  var IronValidatableBehavior = {

    properties: {
      /**
       * Name of the validator to use.
       */
      validator: { type: String },

      /**
       * True if the last call to `validate` is invalid.
       */
      invalid: {
        notify: true,
        reflectToAttribute: true,
        type: Boolean,
        value: false,
        observer: '_invalidChanged'
      }
    },

    registered: function registered() {
      IronValidatableBehaviorMeta = new IronMeta({ type: 'validator' });
    },

    _invalidChanged: function _invalidChanged() {
      if (this.invalid) {
        this.setAttribute('aria-invalid', 'true');
      } else {
        this.removeAttribute('aria-invalid');
      }
    },

    /* Recompute this every time it's needed, because we don't know if the
     * underlying IronValidatableBehaviorMeta has changed. */
    get _validator() {
      return IronValidatableBehaviorMeta && IronValidatableBehaviorMeta.byKey(this.validator);
    },

    /**
     * @return {boolean} True if the validator `validator` exists.
     */
    hasValidator: function hasValidator() {
      return this._validator != null;
    },

    /**
     * Returns true if the `value` is valid, and updates `invalid`. If you want
     * your element to have custom validation logic, do not override this method;
     * override `_getValidity(value)` instead.
      * @param {Object} value Deprecated: The value to be validated. By default,
     * it is passed to the validator's `validate()` function, if a validator is
     set.
     * If this argument is not specified, then the element's `value` property
     * is used, if it exists.
     * @return {boolean} True if `value` is valid.
     */
    validate: function validate(value) {
      // If this is an element that also has a value property, and there was
      // no explicit value argument passed, use the element's property instead.
      if (value === undefined && this.value !== undefined) this.invalid = !this._getValidity(this.value);else this.invalid = !this._getValidity(value);
      return !this.invalid;
    },

    /**
     * Returns true if `value` is valid.  By default, it is passed
     * to the validator's `validate()` function, if a validator is set. You
     * should override this method if you want to implement custom validity
     * logic for your element.
     *
     * @param {Object} value The value to be validated.
     * @return {boolean} True if `value` is valid.
     */

    _getValidity: function _getValidity(value) {
      if (this.hasValidator()) {
        return this._validator.validate(value);
      }
      return true;
    }
  };

  var _templateObject$3 = taggedTemplateLiteral(['\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    <!-- the mirror sizes the input/textarea so it grows with typing -->\n    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->\n    <div class="textarea-container fit">\n      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>\n    </div>\n'], ['\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    <!-- the mirror sizes the input/textarea so it grows with typing -->\n    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->\n    <div class="textarea-container fit">\n      <textarea id="textarea" name\\$="[[name]]" aria-label\\$="[[label]]" autocomplete\\$="[[autocomplete]]" autofocus\\$="[[autofocus]]" inputmode\\$="[[inputmode]]" placeholder\\$="[[placeholder]]" readonly\\$="[[readonly]]" required\\$="[[required]]" disabled\\$="[[disabled]]" rows\\$="[[rows]]" minlength\\$="[[minlength]]" maxlength\\$="[[maxlength]]"></textarea>\n    </div>\n']);

  /**
  `iron-autogrow-textarea` is an element containing a textarea that grows in
  height as more lines of input are entered. Unless an explicit height or the
  `maxRows` property is set, it will never scroll.

  Example:

      <iron-autogrow-textarea></iron-autogrow-textarea>

  ### Styling

  The following custom properties and mixins are available for styling:

  Custom property | Description | Default
  ----------------|-------------|----------
  `--iron-autogrow-textarea` | Mixin applied to the textarea | `{}`
  `--iron-autogrow-textarea-placeholder` | Mixin applied to the textarea placeholder | `{}`

  @group Iron Elements
  @hero hero.svg
  @demo demo/index.html
  */
  Polymer({
    _template: html$2(_templateObject$3),

    is: 'iron-autogrow-textarea',
    behaviors: [IronValidatableBehavior, IronControlState],

    properties: {
      /**
       * Use this property instead of `bind-value` for two-way data binding.
       * @type {string|number}
       */
      value: { observer: '_valueChanged', type: String, notify: true },

      /**
       * This property is deprecated, and just mirrors `value`. Use `value`
       * instead.
       * @type {string|number}
       */
      bindValue: { observer: '_bindValueChanged', type: String, notify: true },

      /**
       * The initial number of rows.
       *
       * @attribute rows
       * @type number
       * @default 1
       */
      rows: { type: Number, value: 1, observer: '_updateCached' },

      /**
       * The maximum number of rows this element can grow to until it
       * scrolls. 0 means no maximum.
       *
       * @attribute maxRows
       * @type number
       * @default 0
       */
      maxRows: { type: Number, value: 0, observer: '_updateCached' },

      /**
       * Bound to the textarea's `autocomplete` attribute.
       */
      autocomplete: { type: String, value: 'off' },

      /**
       * Bound to the textarea's `autofocus` attribute.
       */
      autofocus: { type: Boolean, value: false },

      /**
       * Bound to the textarea's `inputmode` attribute.
       */
      inputmode: { type: String },

      /**
       * Bound to the textarea's `placeholder` attribute.
       */
      placeholder: { type: String },

      /**
       * Bound to the textarea's `readonly` attribute.
       */
      readonly: { type: String },

      /**
       * Set to true to mark the textarea as required.
       */
      required: { type: Boolean },

      /**
       * The minimum length of the input value.
       */
      minlength: { type: Number },

      /**
       * The maximum length of the input value.
       */
      maxlength: { type: Number },

      /**
       * Bound to the textarea's `aria-label` attribute.
       */
      label: { type: String }

    },

    listeners: { 'input': '_onInput' },

    /**
     * Returns the underlying textarea.
     * @return {!HTMLTextAreaElement}
     */
    get textarea() {
      return this.$.textarea;
    },

    /**
     * Returns textarea's selection start.
     * @return {number}
     */
    get selectionStart() {
      return this.$.textarea.selectionStart;
    },

    /**
     * Returns textarea's selection end.
     * @return {number}
     */
    get selectionEnd() {
      return this.$.textarea.selectionEnd;
    },

    /**
     * Sets the textarea's selection start.
     */
    set selectionStart(value) {
      this.$.textarea.selectionStart = value;
    },

    /**
     * Sets the textarea's selection end.
     */
    set selectionEnd(value) {
      this.$.textarea.selectionEnd = value;
    },

    attached: function attached() {
      /* iOS has an arbitrary left margin of 3px that isn't present
       * in any other browser, and means that the paper-textarea's cursor
       * overlaps the label.
       * See https://github.com/PolymerElements/paper-input/issues/468.
       */
      var IS_IOS = navigator.userAgent.match(/iP(?:[oa]d|hone)/);
      if (IS_IOS) {
        this.$.textarea.style.marginLeft = '-3px';
      }
    },

    /**
     * Returns true if `value` is valid. The validator provided in `validator`
     * will be used first, if it exists; otherwise, the `textarea`'s validity
     * is used.
     * @return {boolean} True if the value is valid.
     */
    validate: function validate() {
      // Use the nested input's native validity.
      var valid = this.$.textarea.validity.valid;

      // Only do extra checking if the browser thought this was valid.
      if (valid) {
        // Empty, required input is invalid
        if (this.required && this.value === '') {
          valid = false;
        } else if (this.hasValidator()) {
          valid = IronValidatableBehavior.validate.call(this, this.value);
        }
      }

      this.invalid = !valid;
      this.fire('iron-input-validate');
      return valid;
    },

    _bindValueChanged: function _bindValueChanged(bindValue) {
      this.value = bindValue;
    },

    _valueChanged: function _valueChanged(value) {
      var textarea = this.textarea;
      if (!textarea) {
        return;
      }

      // If the bindValue changed manually, then we need to also update
      // the underlying textarea's value. Otherwise this change was probably
      // generated from the _onInput handler, and the two values are already
      // the same.
      if (textarea.value !== value) {
        textarea.value = !(value || value === 0) ? '' : value;
      }

      this.bindValue = value;
      this.$.mirror.innerHTML = this._valueForMirror();

      // Manually notify because we don't want to notify until after setting
      // value.
      this.fire('bind-value-changed', { value: this.bindValue });
    },

    _onInput: function _onInput(event) {
      var eventPath = dom(event).path;
      this.value = eventPath ? eventPath[0].value : event.target.value;
    },

    _constrain: function _constrain(tokens) {
      var _tokens;
      tokens = tokens || [''];
      // Enforce the min and max heights for a multiline input to avoid
      // measurement
      if (this.maxRows > 0 && tokens.length > this.maxRows) {
        _tokens = tokens.slice(0, this.maxRows);
      } else {
        _tokens = tokens.slice(0);
      }
      while (this.rows > 0 && _tokens.length < this.rows) {
        _tokens.push('');
      }
      // Use &#160; instead &nbsp; of to allow this element to be used in XHTML.
      return _tokens.join('<br/>') + '&#160;';
    },

    _valueForMirror: function _valueForMirror() {
      var input = this.textarea;
      if (!input) {
        return;
      }
      this.tokens = input && input.value ? input.value.replace(/&/gm, '&amp;').replace(/"/gm, '&quot;').replace(/'/gm, '&#39;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;').split('\n') : [''];
      return this._constrain(this.tokens);
    },

    _updateCached: function _updateCached() {
      this.$.mirror.innerHTML = this._constrain(this.tokens);
    }
  });

  var css$1 = "/* stylelint-disable selector-type-no-unknown */\niron-autogrow-textarea {\n  -webkit-appearance: none;\n  background: #fff;\n  background: var(--bg-color, var(--theme-color-white, #fff));\n  border: 1px solid #d4d4d4;\n  border: 1px solid var(--border-color, var(--theme-color-alto, #d4d4d4));\n  border-radius: 5px;\n  box-sizing: border-box;\n  caret-color: #48a1e6;\n  caret-color: var(--caret-color, var(--theme-color-pictonblue, #48a1e6));\n  font-size: 16px;\n  font-size: var(--font-size, var(--theme-font-size, 16px));\n  height: inherit;\n  line-height: 1.2em;\n  min-height: 52px;\n  outline: none;\n  width: 100%;\n\n  --iron-autogrow-textarea: {\n    box-sizing: border-box;\n    padding: 16px 70px 14px 20px;\n  };\n\n  --iron-autogrow-textarea-placeholder: {\n    color: #d4d4d4;\n    color: var(--ph-color, var(--theme-color-alto, #d4d4d4));\n  };\n}\niron-autogrow-textarea:hover {\n  border-color: #b8b8b8;\n  border-color: var(--border-color-hover, var(--theme-color-silver, #b8b8b8));\n}\niron-autogrow-textarea[focus-within] {\n  border-color: #48a1e6;\n  border-color: var(--border-color-focus, var(--theme-color-pictonblue, #48a1e6));\n}\niron-autogrow-textarea:focus-within {\n  border-color: #48a1e6;\n  border-color: var(--border-color-focus, var(--theme-color-pictonblue, #48a1e6));\n}\n";
  styleInject(css$1);

  var _templateObject$4 = taggedTemplateLiteral(['\n  <iron-autogrow-textarea\n    disabled=\'', '\'\n    id=\'', '\'\n    maxRows=\'', '\'\n    on-input=\'', '\'\n    on-keypress=\'', '\'\n    placeholder=\'', '\'\n    value=\'', '\'\n  />\n'], ['\n  <iron-autogrow-textarea\n    disabled=\'', '\'\n    id=\'', '\'\n    maxRows=\'', '\'\n    on-input=\'', '\'\n    on-keypress=\'', '\'\n    placeholder=\'', '\'\n    value=\'', '\'\n  />\n']);

  var _placeholder = 'Just type something...';

  var textarea = function textarea(_ref) {
    var disabled = _ref.disabled,
        id = _ref.id,
        maxRows = _ref.maxRows,
        onInput = _ref.onInput,
        onKeyPress = _ref.onKeyPress,
        placeholder = _ref.placeholder,
        value = _ref.value;
    return html$1(_templateObject$4, disabled, id, maxRows, function oninput(e) {
      onInput(e, this.textarea);
    }, onKeyPress, placeholder || _placeholder, value);
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  /**
   * A sink mixin that simply forwards event, end, and error to
   * another sink.
   * @param sink
   * @constructor
   */
  function Pipe(sink) {
    this.sink = sink;
  }

  Pipe.prototype.event = function (t, x) {
    return this.sink.event(t, x);
  };

  Pipe.prototype.end = function (t, x) {
    return this.sink.end(t, x);
  };

  Pipe.prototype.error = function (t, e) {
    return this.sink.error(t, e);
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function Filter(p, source) {
    this.p = p;
    this.source = source;
  }

  /**
   * Create a filtered source, fusing adjacent filter.filter if possible
   * @param {function(x:*):boolean} p filtering predicate
   * @param {{run:function}} source source to filter
   * @returns {Filter} filtered source
   */
  Filter.create = function createFilter(p, source) {
    if (source instanceof Filter) {
      return new Filter(and(source.p, p), source.source);
    }

    return new Filter(p, source);
  };

  Filter.prototype.run = function (sink, scheduler) {
    return this.source.run(new FilterSink(this.p, sink), scheduler);
  };

  function FilterSink(p, sink) {
    this.p = p;
    this.sink = sink;
  }

  FilterSink.prototype.end = Pipe.prototype.end;
  FilterSink.prototype.error = Pipe.prototype.error;

  FilterSink.prototype.event = function (t, x) {
    var p = this.p;
    p(x) && this.sink.event(t, x);
  };

  function and(p, q) {
    return function (x) {
      return p(x) && q(x);
    };
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function FilterMap(p, f, source) {
    this.p = p;
    this.f = f;
    this.source = source;
  }

  FilterMap.prototype.run = function (sink, scheduler) {
    return this.source.run(new FilterMapSink(this.p, this.f, sink), scheduler);
  };

  function FilterMapSink(p, f, sink) {
    this.p = p;
    this.f = f;
    this.sink = sink;
  }

  FilterMapSink.prototype.event = function (t, x) {
    var f = this.f;
    var p = this.p;
    p(x) && this.sink.event(t, f(x));
  };

  FilterMapSink.prototype.end = Pipe.prototype.end;
  FilterMapSink.prototype.error = Pipe.prototype.error;

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function Map$1(f, source) {
    this.f = f;
    this.source = source;
  }

  /**
   * Create a mapped source, fusing adjacent map.map, filter.map,
   * and filter.map.map if possible
   * @param {function(*):*} f mapping function
   * @param {{run:function}} source source to map
   * @returns {Map|FilterMap} mapped source, possibly fused
   */
  Map$1.create = function createMap(f, source) {
    if (source instanceof Map$1) {
      return new Map$1(compose(f, source.f), source.source);
    }

    if (source instanceof Filter) {
      return new FilterMap(source.p, f, source.source);
    }

    return new Map$1(f, source);
  };

  Map$1.prototype.run = function (sink, scheduler) {
    // eslint-disable-line no-extend-native
    return this.source.run(new MapSink(this.f, sink), scheduler);
  };

  function MapSink(f, sink) {
    this.f = f;
    this.sink = sink;
  }

  MapSink.prototype.end = Pipe.prototype.end;
  MapSink.prototype.error = Pipe.prototype.error;

  MapSink.prototype.event = function (t, x) {
    var f = this.f;
    this.sink.event(t, f(x));
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * Transform each value in the stream by applying f to each
   * @param {function(*):*} f mapping function
   * @param {Stream} stream stream to map
   * @returns {Stream} stream containing items transformed by f
   */
  function map$2(f, stream) {
    return new Stream(Map$1.create(f, stream.source));
  }

  /**
  * Perform a side effect for each item in the stream
  * @param {function(x:*):*} f side effect to execute for each item. The
  *  return value will be discarded.
  * @param {Stream} stream stream to tap
  * @returns {Stream} new stream containing the same items as this stream
  */
  function tap(f, stream) {
    return new Stream(new Tap(f, stream.source));
  }

  function Tap(f, source) {
    this.source = source;
    this.f = f;
  }

  Tap.prototype.run = function (sink, scheduler) {
    return this.source.run(new TapSink(this.f, sink), scheduler);
  };

  function TapSink(f, sink) {
    this.sink = sink;
    this.f = f;
  }

  TapSink.prototype.end = Pipe.prototype.end;
  TapSink.prototype.error = Pipe.prototype.error;

  TapSink.prototype.event = function (t, x) {
    var f = this.f;
    f(x);
    this.sink.event(t, x);
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function fatalError(e) {
    setTimeout(function () {
      throw e;
    }, 0);
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function PropagateTask(run, value, sink) {
    this._run = run;
    this.value = value;
    this.sink = sink;
    this.active = true;
  }

  PropagateTask.event = function (value, sink) {
    return new PropagateTask(emit, value, sink);
  };

  PropagateTask.end = function (value, sink) {
    return new PropagateTask(end, value, sink);
  };

  PropagateTask.error = function (value, sink) {
    return new PropagateTask(error, value, sink);
  };

  PropagateTask.prototype.dispose = function () {
    this.active = false;
  };

  PropagateTask.prototype.run = function (t) {
    if (!this.active) {
      return;
    }
    this._run(t, this.value, this.sink);
  };

  PropagateTask.prototype.error = function (t, e) {
    if (!this.active) {
      return fatalError(e);
    }
    this.sink.error(t, e);
  };

  function error(t, e, sink) {
    sink.error(t, e);
  }

  function emit(t, x, sink) {
    sink.event(t, x);
  }

  function end(t, x, sink) {
    sink.end(t, x);
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * Stream containing no events and ends immediately
   * @returns {Stream}
   */
  function empty$1() {
    return EMPTY;
  }

  function EmptySource() {}

  EmptySource.prototype.run = function (sink, scheduler) {
    var task = PropagateTask.end(void 0, sink);
    scheduler.asap(task);

    return create(disposeEmpty, task);
  };

  function disposeEmpty(task) {
    return task.dispose();
  }

  var EMPTY = new Stream(new EmptySource());

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function IndexSink(i, sink) {
    this.sink = sink;
    this.index = i;
    this.active = true;
    this.value = void 0;
  }

  IndexSink.prototype.event = function (t, x) {
    if (!this.active) {
      return;
    }
    this.value = x;
    this.sink.event(t, this);
  };

  IndexSink.prototype.end = function (t, x) {
    if (!this.active) {
      return;
    }
    this.active = false;
    this.sink.end(t, { index: this.index, value: x });
  };

  IndexSink.prototype.error = Pipe.prototype.error;

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function invoke(f, args) {
    /* eslint complexity: [2,7] */
    switch (args.length) {
      case 0:
        return f();
      case 1:
        return f(args[0]);
      case 2:
        return f(args[0], args[1]);
      case 3:
        return f(args[0], args[1], args[2]);
      case 4:
        return f(args[0], args[1], args[2], args[3]);
      case 5:
        return f(args[0], args[1], args[2], args[3], args[4]);
      default:
        return f.apply(void 0, args);
    }
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var map$3 = map;
  var tail$2 = tail;

  /**
   * Combine latest events from all input streams
   * @param {function(...events):*} f function to combine most recent events
   * @returns {Stream} stream containing the result of applying f to the most recent
   *  event of each input stream, whenever a new event arrives on any stream.
   */
  function combine(f /*, ...streams */) {
    return combineArray(f, tail$2(arguments));
  }

  /**
  * Combine latest events from all input streams
  * @param {function(...events):*} f function to combine most recent events
  * @param {[Stream]} streams most recent events
  * @returns {Stream} stream containing the result of applying f to the most recent
  *  event of each input stream, whenever a new event arrives on any stream.
  */
  function combineArray(f, streams) {
    var l = streams.length;
    return l === 0 ? empty$1() : l === 1 ? map$2(f, streams[0]) : new Stream(combineSources(f, streams));
  }

  function combineSources(f, streams) {
    return new Combine(f, map$3(getSource, streams));
  }

  function getSource(stream) {
    return stream.source;
  }

  function Combine(f, sources) {
    this.f = f;
    this.sources = sources;
  }

  Combine.prototype.run = function (sink, scheduler) {
    var l = this.sources.length;
    var disposables = new Array(l);
    var sinks = new Array(l);

    var mergeSink = new CombineSink(disposables, sinks, sink, this.f);

    for (var indexSink, i = 0; i < l; ++i) {
      indexSink = sinks[i] = new IndexSink(i, mergeSink);
      disposables[i] = this.sources[i].run(indexSink, scheduler);
    }

    return all(disposables);
  };

  function CombineSink(disposables, sinks, sink, f) {
    this.sink = sink;
    this.disposables = disposables;
    this.sinks = sinks;
    this.f = f;

    var l = sinks.length;
    this.awaiting = l;
    this.values = new Array(l);
    this.hasValue = new Array(l);
    for (var i = 0; i < l; ++i) {
      this.hasValue[i] = false;
    }

    this.activeCount = sinks.length;
  }

  CombineSink.prototype.error = Pipe.prototype.error;

  CombineSink.prototype.event = function (t, indexedValue) {
    var i = indexedValue.index;
    var awaiting = this._updateReady(i);

    this.values[i] = indexedValue.value;
    if (awaiting === 0) {
      this.sink.event(t, invoke(this.f, this.values));
    }
  };

  CombineSink.prototype._updateReady = function (index) {
    if (this.awaiting > 0) {
      if (!this.hasValue[index]) {
        this.hasValue[index] = true;
        this.awaiting -= 1;
      }
    }
    return this.awaiting;
  };

  CombineSink.prototype.end = function (t, indexedValue) {
    tryDispose(t, this.disposables[indexedValue.index], this.sink);
    if (--this.activeCount === 0) {
      this.sink.end(t, indexedValue.value);
    }
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * Limit the rate of events by suppressing events that occur too often
   * @param {Number} period time to suppress events
   * @param {Stream} stream
   * @returns {Stream}
   */
  function throttle(period, stream) {
    return new Stream(throttleSource(period, stream.source));
  }

  function throttleSource(period, source) {
    return source instanceof Map$1 ? commuteMapThrottle(period, source) : source instanceof Throttle ? fuseThrottle(period, source) : new Throttle(period, source);
  }

  function commuteMapThrottle(period, source) {
    return Map$1.create(source.f, throttleSource(period, source.source));
  }

  function fuseThrottle(period, source) {
    return new Throttle(Math.max(period, source.period), source.source);
  }

  function Throttle(period, source) {
    this.period = period;
    this.source = source;
  }

  Throttle.prototype.run = function (sink, scheduler) {
    return this.source.run(new ThrottleSink(this.period, sink), scheduler);
  };

  function ThrottleSink(period, sink) {
    this.time = 0;
    this.period = period;
    this.sink = sink;
  }

  ThrottleSink.prototype.event = function (t, x) {
    if (t >= this.time) {
      this.time = t + this.period;
      this.sink.event(t, x);
    }
  };

  ThrottleSink.prototype.end = Pipe.prototype.end;

  ThrottleSink.prototype.error = Pipe.prototype.error;

  /**
   * Wait for a burst of events to subside and emit only the last event in the burst
   * @param {Number} period events occuring more frequently than this
   *  will be suppressed
   * @param {Stream} stream stream to debounce
   * @returns {Stream} new debounced stream
   */
  function debounce(period, stream) {
    return new Stream(new Debounce(period, stream.source));
  }

  function Debounce(dt, source) {
    this.dt = dt;
    this.source = source;
  }

  Debounce.prototype.run = function (sink, scheduler) {
    return new DebounceSink(this.dt, this.source, sink, scheduler);
  };

  function DebounceSink(dt, source, sink, scheduler) {
    this.dt = dt;
    this.sink = sink;
    this.scheduler = scheduler;
    this.value = void 0;
    this.timer = null;
    this.disposable = source.run(this, scheduler);
  }

  DebounceSink.prototype.event = function (t, x) {
    this._clearTimer();
    this.value = x;
    this.timer = this.scheduler.delay(this.dt, new DebounceTask(this, x));
  };

  DebounceSink.prototype._event = function (t, x) {
    this._clearTimer();
    this.sink.event(t, x);
  };

  DebounceSink.prototype.end = function (t, x) {
    if (this._clearTimer()) {
      this.sink.event(t, this.value);
      this.value = void 0;
    }
    this.sink.end(t, x);
  };

  DebounceSink.prototype.error = function (t, x) {
    this._clearTimer();
    this.sink.error(t, x);
  };

  DebounceSink.prototype.dispose = function () {
    this._clearTimer();
    return this.disposable.dispose();
  };

  DebounceSink.prototype._clearTimer = function () {
    if (this.timer === null) {
      return false;
    }
    this.timer.dispose();
    this.timer = null;
    return true;
  };

  function DebounceTask(debounce, value) {
    this.debounce = debounce;
    this.value = value;
  }

  DebounceTask.prototype.run = function (t) {
    this.debounce._event(t, this.value);
  };

  DebounceTask.prototype.error = function (t, e) {
    this.debounce.error(t, e);
  };

  DebounceTask.prototype.dispose = function () {};

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * @param {Number} delayTime milliseconds to delay each item
   * @param {Stream} stream
   * @returns {Stream} new stream containing the same items, but delayed by ms
   */
  function delay(delayTime, stream) {
    return delayTime <= 0 ? stream : new Stream(new Delay(delayTime, stream.source));
  }

  function Delay(dt, source) {
    this.dt = dt;
    this.source = source;
  }

  Delay.prototype.run = function (sink, scheduler) {
    var delaySink = new DelaySink(this.dt, sink, scheduler);
    return all([delaySink, this.source.run(delaySink, scheduler)]);
  };

  function DelaySink(dt, sink, scheduler) {
    this.dt = dt;
    this.sink = sink;
    this.scheduler = scheduler;
  }

  DelaySink.prototype.dispose = function () {
    var self = this;
    this.scheduler.cancelAll(function (scheduledTask) {
      return scheduledTask.task.sink === self.sink;
    });
  };

  DelaySink.prototype.event = function (t, x) {
    this.scheduler.delay(this.dt, PropagateTask.event(x, this.sink));
  };

  DelaySink.prototype.end = function (t, x) {
    this.scheduler.delay(this.dt, PropagateTask.end(x, this.sink));
  };

  DelaySink.prototype.error = Pipe.prototype.error;

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * Retain only items matching a predicate
   * @param {function(x:*):boolean} p filtering predicate called for each item
   * @param {Stream} stream stream to filter
   * @returns {Stream} stream containing only items for which predicate returns truthy
   */
  function filter(p, stream) {
    return new Stream(Filter.create(p, stream.source));
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */
  /** @author Brian Cavalier */
  /** @author John Hann */

  function ScheduledTask(delay, period, task, scheduler) {
    this.time = delay;
    this.period = period;
    this.task = task;
    this.scheduler = scheduler;
    this.active = true;
  }

  ScheduledTask.prototype.run = function () {
    return this.task.run(this.time);
  };

  ScheduledTask.prototype.error = function (e) {
    return this.task.error(this.time, e);
  };

  ScheduledTask.prototype.dispose = function () {
    this.scheduler.cancel(this);
    return this.task.dispose();
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function Scheduler(timer, timeline) {
    this.timer = timer;
    this.timeline = timeline;

    this._timer = null;
    this._nextArrival = Infinity;

    var self = this;
    this._runReadyTasksBound = function () {
      self._runReadyTasks(self.now());
    };
  }

  Scheduler.prototype.now = function () {
    return this.timer.now();
  };

  Scheduler.prototype.asap = function (task) {
    return this.schedule(0, -1, task);
  };

  Scheduler.prototype.delay = function (delay, task) {
    return this.schedule(delay, -1, task);
  };

  Scheduler.prototype.periodic = function (period, task) {
    return this.schedule(0, period, task);
  };

  Scheduler.prototype.schedule = function (delay, period, task) {
    var now = this.now();
    var st = new ScheduledTask(now + Math.max(0, delay), period, task, this);

    this.timeline.add(st);
    this._scheduleNextRun(now);
    return st;
  };

  Scheduler.prototype.cancel = function (task) {
    task.active = false;
    if (this.timeline.remove(task)) {
      this._reschedule();
    }
  };

  Scheduler.prototype.cancelAll = function (f) {
    this.timeline.removeAll(f);
    this._reschedule();
  };

  Scheduler.prototype._reschedule = function () {
    if (this.timeline.isEmpty()) {
      this._unschedule();
    } else {
      this._scheduleNextRun(this.now());
    }
  };

  Scheduler.prototype._unschedule = function () {
    this.timer.clearTimer(this._timer);
    this._timer = null;
  };

  Scheduler.prototype._scheduleNextRun = function (now) {
    // eslint-disable-line complexity
    if (this.timeline.isEmpty()) {
      return;
    }

    var nextArrival = this.timeline.nextArrival();

    if (this._timer === null) {
      this._scheduleNextArrival(nextArrival, now);
    } else if (nextArrival < this._nextArrival) {
      this._unschedule();
      this._scheduleNextArrival(nextArrival, now);
    }
  };

  Scheduler.prototype._scheduleNextArrival = function (nextArrival, now) {
    this._nextArrival = nextArrival;
    var delay = Math.max(0, nextArrival - now);
    this._timer = this.timer.setTimer(this._runReadyTasksBound, delay);
  };

  Scheduler.prototype._runReadyTasks = function (now) {
    this._timer = null;
    this.timeline.runTasks(now, runTask);
    this._scheduleNextRun(this.now());
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /* global setTimeout, clearTimeout */

  function ClockTimer() {}

  ClockTimer.prototype.now = Date.now;

  ClockTimer.prototype.setTimer = function (f, dt) {
    return dt <= 0 ? runAsap(f) : setTimeout(f, dt);
  };

  ClockTimer.prototype.clearTimer = function (t) {
    return t instanceof Asap ? t.cancel() : clearTimeout(t);
  };

  function Asap(f) {
    this.f = f;
    this.active = true;
  }

  Asap.prototype.run = function () {
    return this.active && this.f();
  };

  Asap.prototype.error = function (e) {
    throw e;
  };

  Asap.prototype.cancel = function () {
    this.active = false;
  };

  function runAsap(f) {
    var task = new Asap(f);
    defer(task);
    return task;
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function Timeline() {
    this.tasks = [];
  }

  Timeline.prototype.nextArrival = function () {
    return this.isEmpty() ? Infinity : this.tasks[0].time;
  };

  Timeline.prototype.isEmpty = function () {
    return this.tasks.length === 0;
  };

  Timeline.prototype.add = function (st) {
    insertByTime(st, this.tasks);
  };

  Timeline.prototype.remove = function (st) {
    var i = binarySearch(st.time, this.tasks);

    if (i >= 0 && i < this.tasks.length) {
      var at = findIndex(st, this.tasks[i].events);
      if (at >= 0) {
        this.tasks[i].events.splice(at, 1);
        return true;
      }
    }

    return false;
  };

  Timeline.prototype.removeAll = function (f) {
    for (var i = 0, l = this.tasks.length; i < l; ++i) {
      removeAllFrom(f, this.tasks[i]);
    }
  };

  Timeline.prototype.runTasks = function (t, runTask) {
    var tasks = this.tasks;
    var l = tasks.length;
    var i = 0;

    while (i < l && tasks[i].time <= t) {
      ++i;
    }

    this.tasks = tasks.slice(i);

    // Run all ready tasks
    for (var j = 0; j < i; ++j) {
      this.tasks = runTasks(runTask, tasks[j], this.tasks);
    }
  };

  function runTasks(runTask, timeslot, tasks) {
    // eslint-disable-line complexity
    var events = timeslot.events;
    for (var i = 0; i < events.length; ++i) {
      var task = events[i];

      if (task.active) {
        runTask(task);

        // Reschedule periodic repeating tasks
        // Check active again, since a task may have canceled itself
        if (task.period >= 0 && task.active) {
          task.time = task.time + task.period;
          insertByTime(task, tasks);
        }
      }
    }

    return tasks;
  }

  function insertByTime(task, timeslots) {
    // eslint-disable-line complexity
    var l = timeslots.length;

    if (l === 0) {
      timeslots.push(newTimeslot(task.time, [task]));
      return;
    }

    var i = binarySearch(task.time, timeslots);

    if (i >= l) {
      timeslots.push(newTimeslot(task.time, [task]));
    } else if (task.time === timeslots[i].time) {
      timeslots[i].events.push(task);
    } else {
      timeslots.splice(i, 0, newTimeslot(task.time, [task]));
    }
  }

  function removeAllFrom(f, timeslot) {
    timeslot.events = removeAll(f, timeslot.events);
  }

  function binarySearch(t, sortedArray) {
    // eslint-disable-line complexity
    var lo = 0;
    var hi = sortedArray.length;
    var mid, y;

    while (lo < hi) {
      mid = Math.floor((lo + hi) / 2);
      y = sortedArray[mid];

      if (t === y.time) {
        return mid;
      } else if (t < y.time) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return hi;
  }

  function newTimeslot(t, events) {
    return { time: t, events: events };
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var defaultScheduler = new Scheduler(new ClockTimer(), new Timeline());

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function withDefaultScheduler(source) {
    return withScheduler(source, defaultScheduler);
  }

  function withScheduler(source, scheduler) {
    return new Promise(function (resolve, reject) {
      runSource(source, scheduler, resolve, reject);
    });
  }

  function runSource(source, scheduler, resolve, reject) {
    var disposable = settable();
    var observer = new Drain(resolve, reject, disposable);

    disposable.setDisposable(source.run(observer, scheduler));
  }

  function Drain(end, error, disposable) {
    this._end = end;
    this._error = error;
    this._disposable = disposable;
    this.active = true;
  }

  Drain.prototype.event = function (t, x) {};

  Drain.prototype.end = function (t, x) {
    if (!this.active) {
      return;
    }
    this.active = false;
    disposeThen(this._end, this._error, this._disposable, x);
  };

  Drain.prototype.error = function (t, e) {
    this.active = false;
    disposeThen(this._error, this._error, this._disposable, e);
  };

  function disposeThen(end, error, disposable, x) {
    Promise.resolve(disposable.dispose()).then(function () {
      end(x);
    }, error);
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  /**
   * Observe all the event values in the stream in time order. The
   * provided function `f` will be called for each event value
   * @param {function(x:T):*} f function to call with each event value
   * @param {Stream<T>} stream stream to observe
   * @return {Promise} promise that fulfills after the stream ends without
   *  an error, or rejects if the stream ends with an error.
   */
  function observe(f, stream) {
    return drain(tap(f, stream));
  }

  /**
   * "Run" a stream by creating demand and consuming all events
   * @param {Stream<T>} stream stream to drain
   * @return {Promise} promise that fulfills after the stream ends without
   *  an error, or rejects if the stream ends with an error.
   */
  function drain(stream) {
    return withDefaultScheduler(stream.source);
  }

  /**
   * Internal curryN function.
   *
   * @private
   * @category Function
   * @param {Number} length The arity of the curried function.
   * @param {Array} received An array of arguments received thus far.
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
  function _curryN(length, received, fn) {
    return function () {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }

  /**
   * Returns a curried equivalent of the provided function, with the specified
   * arity. The curried function has two unusual capabilities. First, its
   * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
   * following are equivalent:
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
   * "gaps", allowing partial application of any combination of arguments,
   * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
   * the following are equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.5.0
   * @category Function
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} length The arity for the returned function.
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curry
   * @example
   *
   *      var sumArgs = (...args) => R.sum(args);
   *
   *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
   *      var f = curriedAddFourNumbers(1, 2);
   *      var g = f(3);
   *      g(4); //=> 10
   */
  var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });

  /**
   * Returns a curried equivalent of the provided function. The curried function
   * has two unusual capabilities. First, its arguments needn't be provided one
   * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
   * following are equivalent:
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
   * "gaps", allowing partial application of any combination of arguments,
   * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
   * the following are equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (* -> a) -> (* -> a)
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curryN
   * @example
   *
   *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
   *
   *      var curriedAddFourNumbers = R.curry(addFourNumbers);
   *      var f = curriedAddFourNumbers(1, 2);
   *      var g = f(3);
   *      g(4); //=> 10
   */
  var curry = /*#__PURE__*/_curry1(function curry(fn) {
    return curryN(fn.length, fn);
  });

  var combineC = curry(combine);

  var debounceC = curry(debounce);

  var delayC = curry(delay);

  var filterC = curry(filter);

  var mapC = curry(map$2);

  var observeC = curry(observe);

  var throttleC = curry(throttle);

  var css$2 = "/* :root, */\n:host {\n  bottom: initial;\n  bottom: var(--chat-input-bottom, initial);\n  display: block;\n  position: relative;\n  position: var(--chat-input-position, relative);\n  width: 100%;\n  z-index: initial;\n  z-index: var(--chat-input-z-index, initial);\n}\n.input {\n  background: #f8f8f8;\n  background: var(--alabaster, #f8f8f8);\n  bottom: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n  padding: 0 20px 20px;\n  width: 100%;\n}\n.input.disabled {\n  color: #b8b8b8;\n  color: var(--silver, #b8b8b8);\n}\n.input > * {\n  line-height: 0;\n  position: relative;\n}\n.enter {\n  background: no-repeat center center;\n  border: none;\n  bottom: 14px;\n  cursor: pointer;\n  height: 24px;\n  outline: none;\n  padding: 0;\n  position: absolute;\n  right: 18px;\n}\n.enter:active:not(:disabled) {\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n}\n";
  styleInject(css$2);

  var _templateObject$5 = taggedTemplateLiteral(['\n      <section class$=\'', '\'>\n        <form on-submit=\'', '\'>\n          ', '\n          ', '\n        <form>\n      </section>\n    '], ['\n      <section class$=\'', '\'>\n        <form on-submit=\'', '\'>\n          ', '\n          ', '\n        <form>\n      </section>\n    ']);

  var isKeyCode = function isKeyCode(keyCode, code) {
    return keyCode === code;
  };

  var isMetaBtn = function isMetaBtn(_ref) {
    var keyCode = _ref.keyCode;
    return isKeyCode(keyCode, 91);
  };
  var isEnterBtn = function isEnterBtn(_ref2) {
    var keyCode = _ref2.keyCode;
    return isKeyCode(keyCode, 13);
  };
  var isControlBtn = function isControlBtn(_ref3) {
    var keyCode = _ref3.keyCode;
    return isKeyCode(keyCode, 17);
  };
  var isShiftBtn = function isShiftBtn(_ref4) {
    var keyCode = _ref4.keyCode;
    return isKeyCode(keyCode, 16);
  };

  var MessageInput = function (_LitElement) {
    inherits(MessageInput, _LitElement);
    createClass(MessageInput, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          disabled: Boolean,
          maxrows: Number,
          placeholder: String,
          placeholderdisabled: String,
          value: String,
          delay: Number
        };
      }
    }]);

    function MessageInput(props) {
      classCallCheck(this, MessageInput);

      var _this = possibleConstructorReturn(this, (MessageInput.__proto__ || Object.getPrototypeOf(MessageInput)).call(this, props));

      _this._boundValueChange = _this._onValueChanged.bind(_this);
      _this._boundKeyPress = _this._onKeyPress.bind(_this);
      _this._boundOnInput = _this._onInput.bind(_this);
      _this._underlyingTextarea = null;
      _this.__pre = null;
      _this.__post = null;
      return _this;
    }

    createClass(MessageInput, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(MessageInput.prototype.__proto__ || Object.getPrototypeOf(MessageInput.prototype), 'connectedCallback', this).call(this);

        this.addEventListener('bind-value-changed', this._boundValueChange);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        get(MessageInput.prototype.__proto__ || Object.getPrototypeOf(MessageInput.prototype), 'disconnectedCallback', this).call(this);

        this._underlyingTextarea = null;
        this.__pre = null;
        this.__post = null;

        this.removeEventListener('bind-value-changed', this._boundValueChange);
      }
    }, {
      key: 'changeValue',
      value: function changeValue() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        this.value = value;
      }
    }, {
      key: '_onValueChanged',
      value: function _onValueChanged(e) {
        this.value = e.detail.value;

        if (this._underlyingTextarea && this.__pre && this.__post) {
          this._underlyingTextarea.setSelectionRange(this.__pre, this.__post);
          this.__pre = null;
          this.__post = null;
        }
      }
    }, {
      key: '_onFormActivate',
      value: function _onFormActivate(currentTarget) {
        var _this2 = this;

        // eslint-disable-line class-methods-use-this
        var keyup$ = fromEvent('keyup', currentTarget);
        var keydown$ = fromEvent('keydown', currentTarget);
        var enter$ = filterC(isEnterBtn, keydown$);

        var special = {
          shift: false, meta: false, control: false
        };
        var isSpecialPressed = function isSpecialPressed() {
          return special.shift || special.meta || special.control;
        };

        compose$1(observeC(this._handleSubmit.bind(this)), throttleC(this.delay || 0), filterC(function () {
          return !isSpecialPressed();
        }))(enter$);

        observeC(function (e) {
          isEnterBtn(e) && isSpecialPressed() && _this2._insertLinebreak();
        }, keydown$);

        compose$1(observeC(function (_ref5) {
          var key = _ref5.key;
          special[key.toLowerCase()] = true;
        }), filterC(function (e) {
          return isShiftBtn(e) || isControlBtn(e) || isMetaBtn(e);
        }))(keydown$);

        compose$1(observeC(function (_ref6) {
          var key = _ref6.key;
          special[key.toLowerCase()] = false;
        }), filterC(function (e) {
          return isShiftBtn(e) || isControlBtn(e) || isMetaBtn(e);
        }))(keyup$);
      }
    }, {
      key: '_onKeyPress',
      value: function _onKeyPress(e) {
        // eslint-disable-line class-methods-use-this
        isEnterBtn(e) && e.preventDefault();
        // prevent native textarea's enter event
      }
    }, {
      key: '_onInput',
      value: function _onInput(e, textarea$$1) {
        if (!this._underlyingTextarea) this._underlyingTextarea = textarea$$1;
      }
    }, {
      key: '_insertLinebreak',
      value: function _insertLinebreak() {
        if (!this._underlyingTextarea) {
          this.changeValue((this.value || '') + '\n');

          return;
        }
        var _underlyingTextarea = this._underlyingTextarea,
            pre = _underlyingTextarea.selectionStart,
            post = _underlyingTextarea.selectionEnd;


        this.__pre = pre + 1;
        this.__post = pre + 1;

        this.changeValue(this.value.slice(0, pre) + '\n' + this.value.slice(post));
      }
    }, {
      key: '_handleSubmit',
      value: function _handleSubmit(e) {
        e && e.preventDefault();
        var message = this._processMessage(this.value);

        if (message) {
          this.dispatchEvent(new CustomEvent('message-submit', { detail: { message: message } }));
          this.changeValue('');
        }
      }
    }, {
      key: '_processMessage',
      value: function _processMessage(value) {
        // eslint-disable-line class-methods-use-this
        return value && value.trim ? value.trim() : value;
      }
    }, {
      key: '_firstRendered',
      value: function _firstRendered() {
        this._onFormActivate(this.shadowRoot.querySelector('form'));
      }
    }, {
      key: '_render',
      value: function _render(props) {
        var _this3 = this;

        var disabled = props.disabled,
            placeholder = props.placeholder,
            placeholderdisabled = props.placeholderdisabled,
            value = props.value,
            maxrows = props.maxrows;


        var button$$1 = button({
          disabled: !this._processMessage(value) || disabled,
          type: 'submit'
        });

        var textarea$$1 = textarea({
          disabled: disabled,
          maxRows: maxrows || 5,
          onKeyPress: this._boundKeyPress,
          onInput: this._boundOnInput,
          placeholder: disabled ? placeholderdisabled : placeholder,
          value: value
        });

        return html$1(_templateObject$5, classString({ input: true, disabled: disabled }), function (e) {
          return _this3._handleSubmit(e);
        }, textarea$$1, button$$1);
      }
    }]);
    return MessageInput;
  }(LitElement);

  var Input = withStyle(html$1)(MessageInput, css$2, css, css$1);

  var css$3 = ".actions {\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  line-height: 18px;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  right: 14px;\n  text-align: center;\n  top: -10px;\n  -webkit-transform: translateX(89%);\n          transform: translateX(89%);\n  transition: all ease-out 0.7s;\n  z-index: 100;\n}\n\n.action-group {\n  border-color: #b8b8b8;\n  color: #b8b8b8;\n  position: relative;\n  text-align: left;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.action-group:hover {\n  border-color: #48a1e6;\n  border-color: var(--action-group-border-color-hover, var(--theme-color-pictonblue, #48a1e6));\n  color: #48a1e6;\n  color: var(--action-group-color-hover, var(--theme-color-pictonblue, #48a1e6));\n}\n\n.action-group > span {\n  background-color: #fff;\n  background-color: var(--bg-color, var(--theme-color-white, #fff));\n  border: 1px solid #b8b8b8;\n  border-radius: 5px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 15px;\n  height: 24px;\n  letter-spacing: 0.1px;\n  line-height: 17px;\n  text-align: center;\n  width: 22px;\n}\n\n.action-subgroup {\n  cursor: pointer;\n  margin-left: -1px;\n  opacity: 0;\n  padding-top: 1px;\n  transition: all ease-out 0.5s;\n}\n\n.action-group:hover .action-subgroup {\n  opacity: 1;\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px);\n  z-index: 300;\n}\n\n.action-subgroup-inner {\n  background: no-repeat center center #fff;\n  background: no-repeat center center var(--bg-color, var(--theme-color-white, #fff));\n  border: 1px solid #c6e6ff;\n  border-radius: 5px;\n  box-sizing: content-box;\n  display: flex;\n  flex-direction: row;\n}\n\n.action-subgroup-item {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  height: 39px;\n  margin: 1px;\n  outline: none;\n  padding: 0;\n  width: 39px;\n}\n\n.action-subgroup-item:disabled {\n  cursor: not-allowed;\n}\n\n.action-subgroup-item #delete {\n  padding: 12px;\n}\n\n.action-subgroup-item #warning {\n  padding: 13px;\n}\n\n.action-subgroup-item > svg {\n  padding: 10px;\n}\n\n.action-subgroup-item > svg path {\n  display: inline-block;\n  fill: #b8b8b8;\n  fill: var(--subgroup-fill-color, var(--theme-color-silver, #b8b8b8));\n}\n\n.action-subgroup-item:hover > svg path {\n  fill: #48a1e6;\n  fill: var(--subgroup-fill-color-hover, var(--theme-color-pictonblue, #48a1e6));\n}\n\n/* client styles */\n\n.action-group-reactions,\n.action-group-reactions:hover {\n  border-color: #b8b8b8 !important;\n  color: #b8b8b8 !important;\n}\n\n.action-group > * {\n  left: -1px;\n  position: relative;\n  z-index: 0;\n}\n\n.action-group *:hover {\n  z-index: 100 !important;\n}\n\n.action-group:first-child > * {\n  left: 0 !important;\n}\n\n.action-group > *:hover {\n  border-color: #1682d7;\n  border-color: var(--action-group-border-color-hover, var(--theme-color-pictonblue, #1682d7));\n  color: #1682d7;\n  color: var(--action-group-color-hover, var(--theme-color-pictonblue, #1682d7));\n}\n\n.action-group:nth-child(2) span {\n  border-radius: 0 5px 5px 0;\n}\n\n.action-group:nth-child(2):hover span {\n  border-color: inherit;\n  border-radius: 0 5px 5px 0;\n  color: inherit;\n}\n\n.message:hover .actions {\n  opacity: 1;\n  -webkit-transform: translateX(90%);\n          transform: translateX(90%);\n}\n\n.reaction-add {\n  background: center center no-repeat;\n  background-color: #fff;\n  border: 1px solid;\n  border-color: inherit;\n  border-radius: 5px 0 0 5px;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  display: block;\n  height: 24px;\n  line-height: 17px;\n  outline: none;\n  padding: 0;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 32px;\n}\n\n.reaction-add.disabled {\n  border-color: #b8b8b8;\n  color: #b8b8b8;\n  cursor: not-allowed;\n}\n\n.reaction-add.standalone {\n  border-radius: 5px;\n}\n\n.reaction-add:hover:not(.disabled) svg path {\n  fill: #1682d7;\n  fill: var(--action-group-color-hover, var(--theme-color-pictonblue, #1682d7));\n}\n\n.reaction-add svg {\n  height: inherit;\n  position: relative;\n  top: -1px;\n}\n";
  styleInject(css$3);

  var _templateObject$6 = taggedTemplateLiteral(['\n  <div class=\'action-group action-group-reactions\'>\n    ', '\n  </div>\n'], ['\n  <div class=\'action-group action-group-reactions\'>\n    ', '\n  </div>\n']),
      _templateObject2$2 = taggedTemplateLiteral(['\n  <div class=\'action-group action-group-actions\'>\n    <span>...</span>\n    <div class=\'action-subgroup\'>\n      <div class=\'action-subgroup-inner\'>\n        ', '\n      </div>\n    </div>\n  </div>\n'], ['\n  <div class=\'action-group action-group-actions\'>\n    <span>...</span>\n    <div class=\'action-subgroup\'>\n      <div class=\'action-subgroup-inner\'>\n        ', '\n      </div>\n    </div>\n  </div>\n']),
      _templateObject3$1 = taggedTemplateLiteral(['\n  <div class=\'actions\'>\n    ', '\n    ', '\n  </div>\n'], ['\n  <div class=\'actions\'>\n    ', '\n    ', '\n  </div>\n']);

  var _reactions = function _reactions(props) {
    return html$1(_templateObject$6, props.children);
  };

  var _actions = function _actions(props) {
    return html$1(_templateObject2$2, props.children);
  };

  var actions = function actions(props) {
    return html$1(_templateObject3$1, props.reactions.length ? _reactions({ children: props.reactions }) : null, props.children.length ? _actions(props) : null);
  };

  var css$4 = "wc-chat-reactions { /* stylelint-disable selector-type-no-unknown */\n  --reaction-count-left: 0;\n}\n\n.avatar {\n  background: no-repeat center center;\n  background-color: transparent;\n  background-color: var(--message-avatar-color-moderator, transparent);\n  background-size: contain;\n  border-radius: 100%;\n  display: inline-block;\n  height: 32px;\n  margin-right: 8px;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: top;\n  width: 32px;\n}\n\n.avatar.moderator {\n  background-color: transparent;\n  background-color: var(--message-avatar-color, transparent);\n}\n\n.message {\n  background-color: #fff;\n  border-radius: 5px;\n  display: inline-block;\n  margin-bottom: 16px;\n  max-width: 80%;\n  max-width: 55% !important;\n  padding: 8px 22px 8px 14px;\n  position: relative;\n  text-align: left;\n}\n\n.message-block.deleted .message {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.message-block.deleted .avatar,\n.message-block.deleted .message {\n  -webkit-filter: grayscale(75%);\n          filter: grayscale(75%);\n}\n\n.message-meta {\n  margin-bottom: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.message-line {\n  line-height: 1.25em;\n  margin: 0;\n  margin-bottom: 12px;\n}\n\n.message-line:last-child {\n  margin-bottom: 0;\n}\n\n.message-status {\n  margin-bottom: 3px;\n}\n\n.message-stamp,\n.message-status {\n  color: #b8b8b8;\n  color: var(--message-status-color, var(--silver, #b8b8b8));\n  font-size: 0.75em;\n}\n\n.message-author {\n  font-weight: bold;\n  margin-right: 8px;\n}\n\n.message.moderator {\n  background-color: rgba(255, 114, 86, 0.08);\n}\n\n.message.me {\n  background-color: rgba(72, 161, 230, 0.08);\n}\n";
  styleInject(css$4);

  var _templateObject$7 = taggedTemplateLiteral(['<p class=\'message-line\'>', '</p>'], ['<p class=\'message-line\'>', '</p>']),
      _templateObject2$3 = taggedTemplateLiteral(['\n    <div class$=\'', '\'>\n      <div\n        class$=\'', '\'\n        style$=\'background-image: url(', ');\'\n      ></div>\n      <section class$=\'', '\'>\n        <div class=\'message-meta\'>\n          <span class=\'message-author\'>', '</span>\n          <span class=\'message-status\'>', '</span>\n        </div>\n        <div>', '</div>\n        ', '\n      </section>\n    </div>\n  '], ['\n    <div class$=\'', '\'>\n      <div\n        class$=\'', '\'\n        style$=\'background-image: url(', ');\'\n      ></div>\n      <section class$=\'', '\'>\n        <div class=\'message-meta\'>\n          <span class=\'message-author\'>', '</span>\n          <span class=\'message-status\'>', '</span>\n        </div>\n        <div>', '</div>\n        ', '\n      </section>\n    </div>\n  ']);

  var stampToDate = function stampToDate(stamp) {
    return new Date(stamp * 1e3);
  };

  var formatDate = function formatDate(date) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /\d{2}:\d{2}/;
    return date.toTimeString().match(pattern);
  };

  var text = function text() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return message.split('\n').map(function (it) {
      return html$1(_templateObject$7, it);
    });
  };

  var _templateObject$8 = taggedTemplateLiteral(['\n    <div class$=\'', '\'>\n      <div\n        class$=\'', '\'\n        style$=\'', '\'\n      ></div>\n      <section class$=\'', '\'>\n        <div class=\'message-meta\'>\n          <span class=\'message-author\'>', '</span>\n          <span class=\'message-stamp\'>', '</span>\n          <div class=\'message-status\'>', '</div>\n        </div>\n        <div>', '</div>\n        <wc-chat-reactions config=', ' showcount></wc-chat-reactions>\n        ', '\n      </section>\n    </div>\n  '], ['\n    <div class$=\'', '\'>\n      <div\n        class$=\'', '\'\n        style$=\'', '\'\n      ></div>\n      <section class$=\'', '\'>\n        <div class=\'message-meta\'>\n          <span class=\'message-author\'>', '</span>\n          <span class=\'message-stamp\'>', '</span>\n          <div class=\'message-status\'>', '</div>\n        </div>\n        <div>', '</div>\n        <wc-chat-reactions config=', ' showcount></wc-chat-reactions>\n        ', '\n      </section>\n    </div>\n  ']);

  var cn$1 = function cn() {
    for (var _len = arguments.length, argv = Array(_len), _key = 0; _key < _len; _key++) {
      argv[_key] = arguments[_key];
    }

    return argv.join(' ').trim();
  };

  var messageExtended = function messageExtended(props) {
    var message = props.message;


    var config = new Map([['thumbsup', { name: ':thumbsup', count: message.rating }]]);

    return html$1(_templateObject$8, classString({ 'message-block': true, deleted: props.deleted }), cn$1(message.user_role, 'avatar'), !message.avatar ? '' : 'background-image: url(' + message.avatar + ');', cn$1(message.user_role, 'message'), message.user_name, formatDate(stampToDate(message.timestamp)), message.status, text(message.body), config, props.children);
  };

  var css$5 = ":host {\n  display: block;\n  height: inherit;\n  height: var(--chat-messages-height, inherit);\n}\n\n.messages {\n  box-sizing: border-box;\n  font-size: inherit;\n  font-size: var(--messages-font-size, inherit);\n  height: 87%;\n  overflow-y: auto !important;\n  padding-left: 20px;\n  padding-top: 20px;\n  width: 93%;\n}\n\n.action-subgroup-item.lock.disabled {\n  cursor: not-allowed;\n}\n\n.action-subgroup-item.lock.allowed {\n  cursor: pointer !important;\n}\n\n.action-subgroup-item.lock svg {\n  padding: 10px 12px;\n}\n\n.action-subgroup-item.lock svg path {\n  fill: #b8b8b8;\n}\n\n.action-subgroup-item.lock:hover svg path,\n.action-subgroup-item.lock.disabled svg path {\n  fill: #48a1e6;\n}\n\n.reactions {\n  margin-top: 10px;\n}\n";
  styleInject(css$5);

  var _templateObject$9 = taggedTemplateLiteral(['<div class=\'messages\'></div>'], ['<div class=\'messages\'></div>']),
      _templateObject2$4 = taggedTemplateLiteral(['\n      <div class=\'messages\'>\n        <div class=\'messages-inner\'>\n          ', '\n        </div>\n      </div>\n    '], ['\n      <div class=\'messages\'>\n        <div class=\'messages-inner\'>\n          ', '\n        </div>\n      </div>\n    ']);

  var MessagesElement = function (_LitElement) {
    inherits(MessagesElement, _LitElement);

    function MessagesElement() {
      classCallCheck(this, MessagesElement);
      return possibleConstructorReturn(this, (MessagesElement.__proto__ || Object.getPrototypeOf(MessagesElement)).apply(this, arguments));
    }

    createClass(MessagesElement, [{
      key: '__renderMessage',
      value: function __renderMessage(message) {
        // eslint-disable-line class-methods-use-this
        return messageExtended({ message: message });
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var _this2 = this;

        var _ref$list = _ref.list,
            list = _ref$list === undefined ? [] : _ref$list;

        if (!list.length) return html$1(_templateObject$9);

        return html$1(_templateObject2$4, list.map(function (it) {
          return _this2.__renderMessage(it);
        }));
      }
    }, {
      key: '_didRender',
      value: function _didRender() {
        this.dispatchEvent(new CustomEvent(this.invoke));
      }
    }], [{
      key: 'properties',
      get: function get$$1() {
        return {
          invoke: String,
          list: Array,
          user: Number,
          users: Array
        };
      }
    }]);
    return MessagesElement;
  }(LitElement);

  withStyle(html$1)(MessagesElement, css$5, css$4, css$3);

  var _templateObject$a = taggedTemplateLiteral(['<svg id="warninig" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <g fill-rule="evenodd">\n    <path fill-rule="nonzero" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 2A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>\n    <path d="M9 9H7V4h2zM9 12H7v-2h2z"/>\n  </g>\n</svg>'], ['<svg id="warninig" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <g fill-rule="evenodd">\n    <path fill-rule="nonzero" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 2A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>\n    <path d="M9 9H7V4h2zM9 12H7v-2h2z"/>\n  </g>\n</svg>']),
      _templateObject2$5 = taggedTemplateLiteral(['<svg id="delete" xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">\n  <g fill-rule="evenodd">\n    <path fill-rule="nonzero" d="M9 7h2v7H9zM5 7h2v7H5z"/>\n    <path fill-rule="nonzero" d="M3 5v11h10V5H3zM1 3h14v15H1V3z"/>\n    <path d="M4 0h8v5H4V0zm2 2v1h4V2H6z"/>\n    <path fill-rule="nonzero" d="M0 5h16V3H0z"/>\n  </g>\n</svg>'], ['<svg id="delete" xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">\n  <g fill-rule="evenodd">\n    <path fill-rule="nonzero" d="M9 7h2v7H9zM5 7h2v7H5z"/>\n    <path fill-rule="nonzero" d="M3 5v11h10V5H3zM1 3h14v15H1V3z"/>\n    <path d="M4 0h8v5H4V0zm2 2v1h4V2H6z"/>\n    <path fill-rule="nonzero" d="M0 5h16V3H0z"/>\n  </g>\n</svg>']),
      _templateObject3$2 = taggedTemplateLiteral(['<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23859 0 0 2.23859 0 5V8H10V5C10 2.23859 7.76147 0 5 0ZM5 2C3.34314 2 2 3.34314 2 5V6H8V5C8 3.34314 6.65686 2 5 2Z" transform="translate(3)" fill="#B8B8B8"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0909 0H2.90912C1.30243 0 0 1.30243 0 2.90912V10.1818C0 13.3951 2.60486 16 5.81818 16H10.1818C13.3951 16 16 13.3951 16 10.1818V2.90912C16 1.30243 14.6975 0 13.0909 0ZM2 2.90912C2 2.40704 2.40704 2 2.90912 2H13.0909C13.593 2 14 2.40704 14 2.90912V10.1818C14 12.2905 12.2905 14 10.1818 14H5.81818C3.70947 14 2 12.2905 2 10.1818V2.90912Z" transform="translate(0 6)" fill="#B8B8B8"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.18188 2.64374C2.61658 2.3988 2.90906 1.94104 2.90906 1.41669C2.90906 0.634277 2.25781 0 1.45459 0C0.651245 0 0 0.634277 0 1.41669C0 1.94104 0.29248 2.39886 0.727295 2.6438V3.52277C0.727295 3.92444 1.05286 4.25 1.45459 4.25C1.8562 4.25 2.18188 3.92444 2.18188 3.52277V2.64374Z" transform="translate(6.54541 11.375)" fill="#B8B8B8"/>\n</svg>'], ['<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23859 0 0 2.23859 0 5V8H10V5C10 2.23859 7.76147 0 5 0ZM5 2C3.34314 2 2 3.34314 2 5V6H8V5C8 3.34314 6.65686 2 5 2Z" transform="translate(3)" fill="#B8B8B8"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0909 0H2.90912C1.30243 0 0 1.30243 0 2.90912V10.1818C0 13.3951 2.60486 16 5.81818 16H10.1818C13.3951 16 16 13.3951 16 10.1818V2.90912C16 1.30243 14.6975 0 13.0909 0ZM2 2.90912C2 2.40704 2.40704 2 2.90912 2H13.0909C13.593 2 14 2.40704 14 2.90912V10.1818C14 12.2905 12.2905 14 10.1818 14H5.81818C3.70947 14 2 12.2905 2 10.1818V2.90912Z" transform="translate(0 6)" fill="#B8B8B8"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.18188 2.64374C2.61658 2.3988 2.90906 1.94104 2.90906 1.41669C2.90906 0.634277 2.25781 0 1.45459 0C0.651245 0 0 0.634277 0 1.41669C0 1.94104 0.29248 2.39886 0.727295 2.6438V3.52277C0.727295 3.92444 1.05286 4.25 1.45459 4.25C1.8562 4.25 2.18188 3.92444 2.18188 3.52277V2.64374Z" transform="translate(6.54541 11.375)" fill="#B8B8B8"/>\n</svg>']),
      _templateObject4 = taggedTemplateLiteral(['<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23853 0 0 2.23859 0 5V8H10V5C10 2.23859 7.76147 0 5 0ZM5 2C3.34314 2 2 3.34314 2 5V6H8V5C8 3.34314 6.65686 2 5 2Z" transform="translate(3)" fill="#48A1E6"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0909 0H2.90906C1.30249 0 0 1.30243 0 2.90912V10.1818C0 13.3951 2.60486 16 5.81824 16H10.1818C13.3951 16 16 13.3951 16 10.1818V2.90912C16 1.30243 14.6975 0 13.0909 0ZM9.45447 6.79169C9.45447 7.31604 9.16199 7.7738 8.72729 8.01874V8.89777C8.72729 9.29944 8.40161 9.625 8 9.625C7.59827 9.625 7.27271 9.29944 7.27271 8.89777V8.0188C6.83789 7.77386 6.54541 7.31604 6.54541 6.79169C6.54541 6.00928 7.19666 5.375 8 5.375C8.80322 5.375 9.45447 6.00928 9.45447 6.79169Z" transform="translate(0 6)" fill="#48A1E6"/>\n</svg>'], ['<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23853 0 0 2.23859 0 5V8H10V5C10 2.23859 7.76147 0 5 0ZM5 2C3.34314 2 2 3.34314 2 5V6H8V5C8 3.34314 6.65686 2 5 2Z" transform="translate(3)" fill="#48A1E6"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0909 0H2.90906C1.30249 0 0 1.30243 0 2.90912V10.1818C0 13.3951 2.60486 16 5.81824 16H10.1818C13.3951 16 16 13.3951 16 10.1818V2.90912C16 1.30243 14.6975 0 13.0909 0ZM9.45447 6.79169C9.45447 7.31604 9.16199 7.7738 8.72729 8.01874V8.89777C8.72729 9.29944 8.40161 9.625 8 9.625C7.59827 9.625 7.27271 9.29944 7.27271 8.89777V8.0188C6.83789 7.77386 6.54541 7.31604 6.54541 6.79169C6.54541 6.00928 7.19666 5.375 8 5.375C8.80322 5.375 9.45447 6.00928 9.45447 6.79169Z" transform="translate(0 6)" fill="#48A1E6"/>\n</svg>']),
      _templateObject5 = taggedTemplateLiteral(['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="15" viewBox="0 0 16 15">\n  <defs>\n    <path id="a" d="M0 0h16v16H0z"/>\n  </defs>\n  <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">\n    <mask id="b" fill="#fff">\n      <use xlink:href="#a"/>\n    </mask>\n    <path fill="#B8B8B8" fill-rule="nonzero" d="M6.121 2.485v12.172l1 1 1-1V2.485h-2zm-2-2h6v15l-3 3-3-3v-15z" mask="url(#b)" transform="rotate(45 7.121 9.485)"/>\n    <path fill="#B8B8B8" fill-rule="nonzero" d="M9 16v-2h7v2z" mask="url(#b)"/>\n  </g>\n</svg>'], ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="15" viewBox="0 0 16 15">\n  <defs>\n    <path id="a" d="M0 0h16v16H0z"/>\n  </defs>\n  <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">\n    <mask id="b" fill="#fff">\n      <use xlink:href="#a"/>\n    </mask>\n    <path fill="#B8B8B8" fill-rule="nonzero" d="M6.121 2.485v12.172l1 1 1-1V2.485h-2zm-2-2h6v15l-3 3-3-3v-15z" mask="url(#b)" transform="rotate(45 7.121 9.485)"/>\n    <path fill="#B8B8B8" fill-rule="nonzero" d="M9 16v-2h7v2z" mask="url(#b)"/>\n  </g>\n</svg>']),
      _templateObject6 = taggedTemplateLiteral(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <g fill="none" fill-rule="evenodd" transform="rotate(-90 12 12)">\n    <circle cx="12" cy="12" r="12" fill="#48A1E6"/>\n    <path fill="#FFF" fill-rule="nonzero" d="M10.2 8.649l.849-.849 4.024 4.024-4.024 4.025L10.2 15l3.176-3.176z"/>\n  </g>\n</svg>'], ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <g fill="none" fill-rule="evenodd" transform="rotate(-90 12 12)">\n    <circle cx="12" cy="12" r="12" fill="#48A1E6"/>\n    <path fill="#FFF" fill-rule="nonzero" d="M10.2 8.649l.849-.849 4.024 4.024-4.024 4.025L10.2 15l3.176-3.176z"/>\n  </g>\n</svg>']),
      _templateObject7 = taggedTemplateLiteral(['<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 12.4182 3.58167 16 8 16C12.4183 16 16 12.4182 16 8C16 3.58179 12.4183 0 8 0C3.58167 0 0 3.58179 0 8ZM15 8C15 11.866 11.866 15 8 15C4.13403 15 1 11.866 1 8C1 4.13403 4.13403 1 8 1C11.866 1 15 4.13403 15 8Z" fill="#B8B8B8"/>\n<path d="M0.0684113 0.760408C-0.0678355 0.522532 0.00581659 0.213915 0.232567 0.0713954C0.458845 -0.0708268 0.752265 0.00601634 0.888225 0.243391C1.18372 0.759298 1.53889 0.996346 2 0.996346C2.46111 0.996346 2.81628 0.759298 3.11177 0.243391C3.24773 0.00601634 3.54116 -0.0708268 3.76743 0.0713954C3.99418 0.213915 4.06784 0.522532 3.93159 0.760408C3.46598 1.57332 2.8061 2 2 2C1.1939 2 0.534021 1.57332 0.0684113 0.760408Z" transform="translate(6 9)" fill="#B8B8B8"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z" transform="translate(4 6)" fill="#B8B8B8"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z" transform="translate(10 6)" fill="#B8B8B8"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0H3.5V3.5H0V4.5H3.5V8H4.5V4.5H8V3.5H4.5V0Z" transform="translate(18 4)" fill="#B8B8B8"/>\n</svg>\n'], ['<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 12.4182 3.58167 16 8 16C12.4183 16 16 12.4182 16 8C16 3.58179 12.4183 0 8 0C3.58167 0 0 3.58179 0 8ZM15 8C15 11.866 11.866 15 8 15C4.13403 15 1 11.866 1 8C1 4.13403 4.13403 1 8 1C11.866 1 15 4.13403 15 8Z" fill="#B8B8B8"/>\n<path d="M0.0684113 0.760408C-0.0678355 0.522532 0.00581659 0.213915 0.232567 0.0713954C0.458845 -0.0708268 0.752265 0.00601634 0.888225 0.243391C1.18372 0.759298 1.53889 0.996346 2 0.996346C2.46111 0.996346 2.81628 0.759298 3.11177 0.243391C3.24773 0.00601634 3.54116 -0.0708268 3.76743 0.0713954C3.99418 0.213915 4.06784 0.522532 3.93159 0.760408C3.46598 1.57332 2.8061 2 2 2C1.1939 2 0.534021 1.57332 0.0684113 0.760408Z" transform="translate(6 9)" fill="#B8B8B8"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z" transform="translate(4 6)" fill="#B8B8B8"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z" transform="translate(10 6)" fill="#B8B8B8"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0H3.5V3.5H0V4.5H3.5V8H4.5V4.5H8V3.5H4.5V0Z" transform="translate(18 4)" fill="#B8B8B8"/>\n</svg>\n']);

  var warning = html$1(_templateObject$a);

  var del = html$1(_templateObject2$5);

  var lock = html$1(_templateObject3$2);

  var locked = html$1(_templateObject4);

  var amend = html$1(_templateObject5);

  var entry$1 = html$1(_templateObject6);

  var smile = html$1(_templateObject7);

  var _templateObject$b = taggedTemplateLiteral(['\n    <button\n      class$=\'', '\'\n      on-click=\'', '\'\n    >', '</button>\n  '], ['\n    <button\n      class$=\'', '\'\n      on-click=\'', '\'\n    >', '</button>\n  ']),
      _templateObject2$6 = taggedTemplateLiteral(['\n    <button\n      class$=\'', '\'\n      disabled=\'', '\'\n      on-click=\'', '\'\n    >', '</button>\n'], ['\n    <button\n      class$=\'', '\'\n      disabled=\'', '\'\n      on-click=\'', '\'\n    >', '</button>\n']);

  var actionImages = new Map([['message-delete', del], ['user-disable', lock], ['message-react', null]]);

  var action = function action(_ref) {
    var allowed = _ref.allowed,
        children = _ref.children,
        classname = _ref.classname,
        disabled = _ref.disabled,
        handler = _ref.handler,
        message = _ref.message,
        name = _ref.name;

    var cls = classString(Object.assign({ 'action-subgroup-item': true }, name ? defineProperty({}, name, true) : {}, classname ? defineProperty({}, classname, true) : {}, disabled ? { disabled: true } : {}, allowed ? { allowed: true } : {}));

    if (!allowed) return null;

    return html$1(_templateObject$b, cls, function (e) {
      return handler && handler(e, message);
    }, children);
  };

  var reaction = function reaction(_ref4) {
    var disabled = _ref4.disabled,
        handler = _ref4.handler,
        message = _ref4.message,
        standalone = _ref4.standalone;

    var cls = classString({
      'reaction-add': true,
      disabled: disabled,
      standalone: standalone
    });

    return html$1(_templateObject2$6, cls, disabled, function (e) {
      return handler && handler(e, { message: message });
    }, smile);
  };

  var XMessagesElement = function (_MessagesElement) {
    inherits(XMessagesElement, _MessagesElement);

    function XMessagesElement() {
      classCallCheck(this, XMessagesElement);
      return possibleConstructorReturn(this, (XMessagesElement.__proto__ || Object.getPrototypeOf(XMessagesElement)).apply(this, arguments));
    }

    createClass(XMessagesElement, [{
      key: '__renderMessage',
      value: function __renderMessage(message) {
        return messageExtended({ message: message, children: this.__renderActions(_extends({}, message)) });
      }
    }, {
      key: '__renderActions',
      value: function __renderActions(data) {
        var _this2 = this;

        var children = [];
        var reactions = [];

        var isAllowed = function isAllowed(action$$1, d) {
          return d.current_user_id !== d.user_id || d.current_user_id === d.user_id && action$$1.self;
        };

        var hasOnlyReactions = this.actionsallowed.filter(function (key) {
          return key !== 'message-reaction';
        }).filter(function (key) {
          return isAllowed(_this2._actions.get(key) || {}, data);
        });

        this.actionsallowed.forEach(function (key) {
          var _action = _this2._actions.get(key) || {};

          if (key === 'message-reaction') {
            reactions = reactions.concat(reaction({
              message: data,
              allowed: isAllowed(_action, data) || undefined,
              children: actionImages.get(key),
              standalone: hasOnlyReactions.length === 0,
              handler: function handler(e, detail) {
                _this2.dispatchEvent(new CustomEvent(key, { detail: detail }));
              }
            }));
          } else {
            children = children.concat(action({
              message: data,
              allowed: isAllowed(_action, data) || undefined,
              children: actionImages.get(key),
              handler: function handler(e, detail) {
                _this2.dispatchEvent(new CustomEvent(key, { detail: detail }));
              }
            }));
          }
        });

        return actions({ children: children, reactions: reactions });
      }
    }, {
      key: '_actions',
      get: function get$$1() {
        return new Map(this.actions);
      }
    }], [{
      key: 'properties',
      get: function get$$1() {
        return _extends({}, get(XMessagesElement.__proto__ || Object.getPrototypeOf(XMessagesElement), 'properties', this), {
          actions: Array,
          actionsallowed: Array
        });
      }
    }]);
    return XMessagesElement;
  }(MessagesElement);

  var Messages = withStyle(html$1)(XMessagesElement, css$5, css$4, css$3);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant = function invariant(condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  var _ = function _(ns) {
    return function (cond) {
      for (var _len = arguments.length, argv = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        argv[_key - 1] = arguments[_key];
      }

      return invariant_1.apply(undefined, [cond].concat(argv));
    };
  }; // eslint-disable-line no-unused-vars

  var registerCustomElement = function registerCustomElement(key, value) {
    if (!key || !value) throw new Error('CustomElement is not specified');
    !window.customElements.get(key) && window.customElements.define(key, value);
  };

  var Debug = function Debug(namespace) {
    var debug = _(namespace);

    return function () {
      for (var _len2 = arguments.length, argv = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        argv[_key2] = arguments[_key2];
      }

      return debug.apply(undefined, ['development' === 'production'].concat(argv));
    };
  };

  var css$6 = ":host {\n  box-sizing: content-box;\n  box-sizing: var(--chat-scrollable-box-sizing, content-box);\n  display: block;\n  display: var(--chat-scrollable-display, block);\n  height: 100%;\n  height: var(--chat-scrollable-height, 100%);\n  padding: 0;\n  padding: var(--chat-scrollable-padding, 0);\n}\n\n.scrollable {\n  height: 100%;\n  overflow-y: scroll;\n}\n";
  styleInject(css$6);

  var _templateObject$c = taggedTemplateLiteral(['\n      <div class=\'scrollable\' on-scroll=\'', '\'>\n        ', '\n      </div>\n    '], ['\n      <div class=\'scrollable\' on-scroll=\'', '\'>\n        ', '\n      </div>\n    ']);

  var debug = Debug('wc:scrollable');

  var isNumber = function isNumber(it) {
    return typeof it === 'number';
  };

  var Scrollable = function (_LitElement) {
    inherits(Scrollable, _LitElement);
    createClass(Scrollable, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          scrolltarget: String,
          scrollgap: Number,
          listen: String,
          reverse: Boolean,
          debounce: Number
        };
      }
    }]);

    function Scrollable(props) {
      classCallCheck(this, Scrollable);

      var _this = possibleConstructorReturn(this, (Scrollable.__proto__ || Object.getPrototypeOf(Scrollable)).call(this, props));

      _this._height = 0;
      _this._width = 0;
      _this._left = 0;
      _this._top = 0;
      _this._x = 0;
      _this._y = 0;

      _this.__boundScrollHandler = _this._onScrollHandler.bind(_this);
      return _this;
    }

    createClass(Scrollable, [{
      key: 'scrollTo',
      value: function scrollTo(x, y) {
        var el = void 0;
        if (!isNumber(x) || !isNumber(y)) el = this._scrollable;

        var _x = 0;
        var _y = this.reverse ? 0 : el.scrollHeight;

        this._scrollTo(x || _x, y || _y);
      }
    }, {
      key: '_firstRendered',
      value: function _firstRendered() {
        var _this2 = this;

        // eslint-disable-next-line padding-line-between-statements
        if (!this._isTarget) {
          debug('Target is not valid HTMLElement');return;
        }

        this.listen && compose$1(observeC(function (e) {
          return _this2._onChildrenUpdate(e);
        }), throttleC(this.debounce || 50))(fromEvent(this.listen, this._scrollable, true));
      }
    }, {
      key: '_onScrollHandler',
      value: function _onScrollHandler(e) {
        var _e$currentTarget = e.currentTarget,
            scrollTop = _e$currentTarget.scrollTop,
            scrollLeft = _e$currentTarget.scrollLeft,
            scrollHeight = _e$currentTarget.scrollHeight,
            scrollWidth = _e$currentTarget.scrollWidth;


        this._top = scrollTop;
        this._left = scrollLeft;
        this._width = scrollWidth;
        this._height = scrollHeight;
        this._y = scrollTop;
        this._x = scrollLeft;
      }
    }, {
      key: '_onChildrenUpdate',
      value: function _onChildrenUpdate(e) {
        this._shouldScrollTo(e);
      }
    }, {
      key: '_yScroll',
      value: function _yScroll(el) {
        var top = el.scrollTop,
            height = el.scrollHeight;


        return {
          current: this._y || top,
          height: height,
          tail: this._height - this._y,
          top: top
        };
      }
    }, {
      key: '_xScroll',
      value: function _xScroll(el) {
        var left = el.scrollLeft,
            width = el.scrollWidth;


        return {
          current: this._x || left,
          left: left,
          width: width
        };
      }
    }, {
      key: '_shouldScrollTo',
      value: function _shouldScrollTo(e) {
        // eslint-disable-line no-unused-vars
        var X = this._xScroll(this._scrollable);
        var Y = this._yScroll(this._scrollable);

        if (Y.top === Y.height) return;
        // skip scrolling on empty children (initial render might has 0/0)

        var y = this._y;
        var offsetHeight = this._scrollable.offsetHeight;


        var scrollTo = this.reverse ? y === 0 ? y : Y.height - Y.tail : y + offsetHeight < this._height ? null : Y.height;

        scrollTo && this._scrollTo(X.current, scrollTo);
      }
    }, {
      key: '_scrollTo',
      value: function _scrollTo(x, y) {
        var el = this._scrollable;

        // eslint-disable-next-line padding-line-between-statements
        if (!isNumber(x) || !isNumber(y)) {
          debug('Wrong coordinate type');return;
        }

        if (!el.scrollTo) {
          el.scrollLeft = x;
          el.scrollTop = y;
        } else {
          el.scrollTo(x, y);
        }
      }
    }, {
      key: '_render',
      value: function _render() {
        return html$1(_templateObject$c, this.__boundScrollHandler, this.children);
      }
    }, {
      key: '_rootElement',
      get: function get$$1() {
        return !this.shadowRoot ? undefined : this.shadowRoot;
      }
    }, {
      key: '_scrollable',
      get: function get$$1() {
        return this._rootElement ? this._rootElement.querySelector('' + (this.scrolltarget || '.scrollable')) : this._rootElement;
      }
    }, {
      key: '_isTarget',
      get: function get$$1() {
        return this._scrollable instanceof HTMLElement;
      }
    }]);
    return Scrollable;
  }(LitElement);

  var Scroll = withStyle(html$1)(Scrollable, css$6);

  var _templateObject$d = taggedTemplateLiteral(['<style>', '</style>'], ['<style>', '</style>']),
      _templateObject2$7 = taggedTemplateLiteral(['\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n    ']);

  var withStyle$1 = function withStyle(base) {
    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      styles[_key - 1] = arguments[_key];
    }

    return function (_base) {
      inherits(_class, _base);

      function _class() {
        classCallCheck(this, _class);
        return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      createClass(_class, [{
        key: '_renderStyles',
        value: function _renderStyles() {
          for (var _len2 = arguments.length, argv = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            argv[_key2] = arguments[_key2];
          }

          // eslint-disable-line class-methods-use-this
          return html$1(_templateObject$d, argv.join(' '));
        }
      }, {
        key: '_render',
        value: function _render(props) {
          return html$1(_templateObject2$7, this._renderStyles.apply(this, styles), get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), '_render', this).call(this, props));
        }
      }]);
      return _class;
    }(base);
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var dataViewTag = '[object DataView]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
      rsComboSymbolsRange = '\\u20d0-\\u20f0',
      rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral = '[' + rsAstralRange + ']',
      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal || freeSelf || Function('return this')();

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function (key) {
      return object[key];
    });
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set$$1) {
    var index = -1,
        result = Array(set$$1.size);

    set$$1.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root$1['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /** Built-in value references. */
  var _Symbol = root$1.Symbol,
      iteratorSymbol = _Symbol ? _Symbol.iterator : undefined,
      propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root$1, 'DataView'),
      Map$2 = getNative(root$1, 'Map'),
      Promise$1 = getNative(root$1, 'Promise'),
      Set$1 = getNative(root$1, 'Set'),
      WeakMap$1 = getNative(root$1, 'WeakMap');

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$2),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set$1),
      weakMapCtorString = toSource(WeakMap$1);

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `getTag`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    return objectToString.call(value);
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue$1(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11,
  // for data views in Edge < 14, and promises in Node.js.
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
    getTag = function getTag(value) {
      var result = objectToString.call(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : undefined;

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

    return value === proto;
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$1(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike$1(value);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
  }

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
  }

  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */
  function toArray$1(value) {
    if (!value) {
      return [];
    }
    if (isArrayLike$1(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (iteratorSymbol && value[iteratorSymbol]) {
      return iteratorToArray(value[iteratorSymbol]());
    }
    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;

    return func(value);
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values(object) {
    return object ? baseValues(object, keys(object)) : [];
  }

  var lodash_toarray = toArray$1;

  var interrobang = "⁉️";
  var tm = "™️";
  var information_source = "ℹ️";
  var left_right_arrow = "↔️";
  var arrow_up_down = "↕️";
  var arrow_upper_left = "↖️";
  var arrow_upper_right = "↗️";
  var arrow_lower_right = "↘️";
  var arrow_lower_left = "↙️";
  var keyboard = "⌨";
  var sunny = "☀️";
  var cloud = "☁️";
  var umbrella = "☔️";
  var showman = "☃";
  var comet = "☄";
  var ballot_box_with_check = "☑️";
  var coffee = "☕️";
  var shamrock = "☘";
  var skull_and_crossbones = "☠";
  var radioactive_sign = "☢";
  var biohazard_sign = "☣";
  var orthodox_cross = "☦";
  var wheel_of_dharma = "☸";
  var white_frowning_face = "☹";
  var aries = "♈️";
  var taurus = "♉️";
  var sagittarius = "♐️";
  var capricorn = "♑️";
  var aquarius = "♒️";
  var pisces = "♓️";
  var spades = "♠️";
  var clubs = "♣️";
  var hearts = "♥️";
  var diamonds = "♦️";
  var hotsprings = "♨️";
  var hammer_and_pick = "⚒";
  var anchor = "⚓️";
  var crossed_swords = "⚔";
  var scales = "⚖";
  var alembic = "⚗";
  var gear = "⚙";
  var scissors = "✂️";
  var white_check_mark = "✅";
  var airplane = "✈️";
  var email = "✉️";
  var envelope = "✉️";
  var black_nib = "✒️";
  var heavy_check_mark = "✔️";
  var heavy_multiplication_x = "✖️";
  var star_of_david = "✡";
  var sparkles = "✨";
  var eight_spoked_asterisk = "✳️";
  var eight_pointed_black_star = "✴️";
  var snowflake = "❄️";
  var sparkle = "❇️";
  var question = "❓";
  var grey_question = "❔";
  var grey_exclamation = "❕";
  var exclamation = "❗️";
  var heavy_exclamation_mark = "❗️";
  var heavy_heart_exclamation_mark_ornament = "❣";
  var heart = "❤️";
  var heavy_plus_sign = "➕";
  var heavy_minus_sign = "➖";
  var heavy_division_sign = "➗";
  var arrow_heading_up = "⤴️";
  var arrow_heading_down = "⤵️";
  var wavy_dash = "〰️";
  var congratulations = "㊗️";
  var secret = "㊙️";
  var copyright = "©️";
  var registered = "®️";
  var bangbang = "‼️";
  var leftwards_arrow_with_hook = "↩️";
  var arrow_right_hook = "↪️";
  var watch = "⌚️";
  var hourglass = "⌛️";
  var fast_forward = "⏩";
  var rewind = "⏪";
  var arrow_double_up = "⏫";
  var arrow_double_down = "⏬";
  var black_right_pointing_double_triangle_with_vertical_bar = "⏭";
  var black_left_pointing_double_triangle_with_vertical_bar = "⏮";
  var black_right_pointing_triangle_with_double_vertical_bar = "⏯";
  var alarm_clock = "⏰";
  var stopwatch = "⏱";
  var timer_clock = "⏲";
  var hourglass_flowing_sand = "⏳";
  var double_vertical_bar = "⏸";
  var black_square_for_stop = "⏹";
  var black_circle_for_record = "⏺";
  var m = "Ⓜ️";
  var black_small_square = "▪️";
  var white_small_square = "▫️";
  var arrow_forward = "▶️";
  var arrow_backward = "◀️";
  var white_medium_square = "◻️";
  var black_medium_square = "◼️";
  var white_medium_small_square = "◽️";
  var black_medium_small_square = "◾️";
  var phone = "☎️";
  var telephone = "☎️";
  var point_up = "☝️";
  var star_and_crescent = "☪";
  var peace_symbol = "☮";
  var yin_yang = "☯";
  var relaxed = "☺️";
  var gemini = "♊️";
  var cancer = "♋️";
  var leo = "♌️";
  var virgo = "♍️";
  var libra = "♎️";
  var scorpius = "♏️";
  var recycle = "♻️";
  var wheelchair = "♿️";
  var atom_symbol = "⚛";
  var fleur_de_lis = "⚜";
  var warning$1 = "⚠️";
  var zap = "⚡️";
  var white_circle = "⚪️";
  var black_circle = "⚫️";
  var coffin = "⚰";
  var funeral_urn = "⚱";
  var soccer = "⚽️";
  var baseball = "⚾️";
  var snowman = "⛄️";
  var partly_sunny = "⛅️";
  var thunder_cloud_and_rain = "⛈";
  var ophiuchus = "⛎";
  var pick = "⛏";
  var helmet_with_white_cross = "⛑";
  var chains = "⛓";
  var no_entry = "⛔️";
  var shinto_shrine = "⛩";
  var church = "⛪️";
  var mountain = "⛰";
  var umbrella_on_ground = "⛱";
  var fountain = "⛲️";
  var golf = "⛳️";
  var ferry = "⛴";
  var boat = "⛵️";
  var sailboat = "⛵️";
  var skier = "⛷";
  var ice_skate = "⛸";
  var person_with_ball = "⛹";
  var tent = "⛺️";
  var fuelpump = "⛽️";
  var fist = "✊";
  var hand = "✋";
  var raised_hand = "✋";
  var v = "✌️";
  var writing_hand = "✍";
  var pencil2 = "✏️";
  var latin_cross = "✝";
  var x = "❌";
  var negative_squared_cross_mark = "❎";
  var arrow_right = "➡️";
  var curly_loop = "➰";
  var loop = "➿";
  var arrow_left = "⬅️";
  var arrow_up = "⬆️";
  var arrow_down = "⬇️";
  var black_large_square = "⬛️";
  var white_large_square = "⬜️";
  var star = "⭐️";
  var o = "⭕️";
  var part_alternation_mark = "〽️";
  var mahjong = "🀄️";
  var black_joker = "🃏";
  var a = "🅰️";
  var b = "🅱️";
  var o2 = "🅾️";
  var parking = "🅿️";
  var ab = "🆎";
  var cl = "🆑";
  var cool = "🆒";
  var free = "🆓";
  var id$1 = "🆔";
  var ng = "🆖";
  var ok = "🆗";
  var sos = "🆘";
  var up = "🆙";
  var vs = "🆚";
  var koko = "🈁";
  var sa = "🈂️";
  var u7121 = "🈚️";
  var u6307 = "🈯️";
  var u7981 = "🈲";
  var u7a7a = "🈳";
  var u5408 = "🈴";
  var u6e80 = "🈵";
  var u6709 = "🈶";
  var u6708 = "🈷️";
  var u7533 = "🈸";
  var u5272 = "🈹";
  var u55b6 = "🈺";
  var ideograph_advantage = "🉐";
  var accept = "🉑";
  var cyclone = "🌀";
  var foggy = "🌁";
  var closed_umbrella = "🌂";
  var night_with_stars = "🌃";
  var sunrise_over_mountains = "🌄";
  var sunrise = "🌅";
  var city_sunset = "🌆";
  var city_sunrise = "🌇";
  var rainbow = "🌈";
  var bridge_at_night = "🌉";
  var ocean = "🌊";
  var volcano = "🌋";
  var milky_way = "🌌";
  var earth_africa = "🌍";
  var earth_americas = "🌎";
  var earth_asia = "🌏";
  var globe_with_meridians = "🌐";
  var new_moon = "🌑";
  var waxing_crescent_moon = "🌒";
  var first_quarter_moon = "🌓";
  var moon = "🌔";
  var waxing_gibbous_moon = "🌔";
  var full_moon = "🌕";
  var waning_gibbous_moon = "🌖";
  var last_quarter_moon = "🌗";
  var waning_crescent_moon = "🌘";
  var crescent_moon = "🌙";
  var new_moon_with_face = "🌚";
  var first_quarter_moon_with_face = "🌛";
  var last_quarter_moon_with_face = "🌜";
  var full_moon_with_face = "🌝";
  var sun_with_face = "🌞";
  var star2 = "🌟";
  var stars = "🌠";
  var thermometer = "🌡";
  var mostly_sunny = "🌤";
  var sun_small_cloud = "🌤";
  var barely_sunny = "🌥";
  var sun_behind_cloud = "🌥";
  var partly_sunny_rain = "🌦";
  var sun_behind_rain_cloud = "🌦";
  var rain_cloud = "🌧";
  var snow_cloud = "🌨";
  var lightning = "🌩";
  var lightning_cloud = "🌩";
  var tornado = "🌪";
  var tornado_cloud = "🌪";
  var fog = "🌫";
  var wind_blowing_face = "🌬";
  var hotdog = "🌭";
  var taco = "🌮";
  var burrito = "🌯";
  var chestnut = "🌰";
  var seedling = "🌱";
  var evergreen_tree = "🌲";
  var deciduous_tree = "🌳";
  var palm_tree = "🌴";
  var cactus = "🌵";
  var hot_pepper = "🌶";
  var tulip = "🌷";
  var cherry_blossom = "🌸";
  var rose = "🌹";
  var hibiscus = "🌺";
  var sunflower = "🌻";
  var blossom = "🌼";
  var corn = "🌽";
  var ear_of_rice = "🌾";
  var herb = "🌿";
  var four_leaf_clover = "🍀";
  var maple_leaf = "🍁";
  var fallen_leaf = "🍂";
  var leaves = "🍃";
  var mushroom = "🍄";
  var tomato = "🍅";
  var eggplant = "🍆";
  var grapes = "🍇";
  var melon = "🍈";
  var watermelon = "🍉";
  var tangerine = "🍊";
  var lemon = "🍋";
  var banana = "🍌";
  var pineapple = "🍍";
  var apple = "🍎";
  var green_apple = "🍏";
  var pear = "🍐";
  var peach = "🍑";
  var cherries = "🍒";
  var strawberry = "🍓";
  var hamburger = "🍔";
  var pizza = "🍕";
  var meat_on_bone = "🍖";
  var poultry_leg = "🍗";
  var rice_cracker = "🍘";
  var rice_ball = "🍙";
  var rice = "🍚";
  var curry$1 = "🍛";
  var ramen = "🍜";
  var spaghetti = "🍝";
  var bread = "🍞";
  var fries = "🍟";
  var sweet_potato = "🍠";
  var dango = "🍡";
  var oden = "🍢";
  var sushi = "🍣";
  var fried_shrimp = "🍤";
  var fish_cake = "🍥";
  var icecream = "🍦";
  var shaved_ice = "🍧";
  var ice_cream = "🍨";
  var doughnut = "🍩";
  var cookie = "🍪";
  var chocolate_bar = "🍫";
  var candy = "🍬";
  var lollipop = "🍭";
  var custard = "🍮";
  var honey_pot = "🍯";
  var cake = "🍰";
  var bento = "🍱";
  var stew = "🍲";
  var egg = "🍳";
  var fork_and_knife = "🍴";
  var tea = "🍵";
  var sake = "🍶";
  var wine_glass = "🍷";
  var cocktail = "🍸";
  var tropical_drink = "🍹";
  var beer = "🍺";
  var beers = "🍻";
  var baby_bottle = "🍼";
  var knife_fork_plate = "🍽";
  var champagne = "🍾";
  var popcorn = "🍿";
  var ribbon = "🎀";
  var gift = "🎁";
  var birthday = "🎂";
  var jack_o_lantern = "🎃";
  var christmas_tree = "🎄";
  var santa = "🎅";
  var fireworks = "🎆";
  var sparkler = "🎇";
  var balloon = "🎈";
  var tada = "🎉";
  var confetti_ball = "🎊";
  var tanabata_tree = "🎋";
  var crossed_flags = "🎌";
  var bamboo = "🎍";
  var dolls = "🎎";
  var flags = "🎏";
  var wind_chime = "🎐";
  var rice_scene = "🎑";
  var school_satchel = "🎒";
  var mortar_board = "🎓";
  var medal = "🎖";
  var reminder_ribbon = "🎗";
  var studio_microphone = "🎙";
  var level_slider = "🎚";
  var control_knobs = "🎛";
  var film_frames = "🎞";
  var admission_tickets = "🎟";
  var carousel_horse = "🎠";
  var ferris_wheel = "🎡";
  var roller_coaster = "🎢";
  var fishing_pole_and_fish = "🎣";
  var microphone = "🎤";
  var movie_camera = "🎥";
  var cinema = "🎦";
  var headphones = "🎧";
  var art = "🎨";
  var tophat = "🎩";
  var circus_tent = "🎪";
  var ticket = "🎫";
  var clapper = "🎬";
  var performing_arts = "🎭";
  var video_game = "🎮";
  var dart = "🎯";
  var slot_machine = "🎰";
  var game_die = "🎲";
  var bowling = "🎳";
  var flower_playing_cards = "🎴";
  var musical_note = "🎵";
  var notes = "🎶";
  var saxophone = "🎷";
  var guitar = "🎸";
  var musical_keyboard = "🎹";
  var trumpet = "🎺";
  var violin = "🎻";
  var musical_score = "🎼";
  var running_shirt_with_sash = "🎽";
  var tennis = "🎾";
  var ski = "🎿";
  var basketball = "🏀";
  var checkered_flag = "🏁";
  var snowboarder = "🏂";
  var runner = "🏃";
  var running = "🏃";
  var surfer = "🏄";
  var sports_medal = "🏅";
  var trophy = "🏆";
  var horse_racing = "🏇";
  var football = "🏈";
  var rugby_football = "🏉";
  var swimmer = "🏊";
  var weight_lifter = "🏋";
  var golfer = "🏌";
  var racing_motorcycle = "🏍";
  var racing_car = "🏎";
  var cricket_bat_and_ball = "🏏";
  var volleyball = "🏐";
  var field_hockey_stick_and_ball = "🏑";
  var ice_hockey_stick_and_puck = "🏒";
  var table_tennis_paddle_and_ball = "🏓";
  var snow_capped_mountain = "🏔";
  var camping = "🏕";
  var beach_with_umbrella = "🏖";
  var building_construction = "🏗";
  var house_buildings = "🏘";
  var cityscape = "🏙";
  var derelict_house_building = "🏚";
  var classical_building = "🏛";
  var desert = "🏜";
  var desert_island = "🏝";
  var national_park = "🏞";
  var stadium = "🏟";
  var house = "🏠";
  var house_with_garden = "🏡";
  var office = "🏢";
  var post_office = "🏣";
  var european_post_office = "🏤";
  var hospital = "🏥";
  var bank = "🏦";
  var atm = "🏧";
  var hotel = "🏨";
  var love_hotel = "🏩";
  var convenience_store = "🏪";
  var school = "🏫";
  var department_store = "🏬";
  var factory = "🏭";
  var izakaya_lantern = "🏮";
  var lantern = "🏮";
  var japanese_castle = "🏯";
  var european_castle = "🏰";
  var waving_white_flag = "🏳";
  var waving_black_flag = "🏴";
  var rosette = "🏵";
  var label = "🏷";
  var badminton_racquet_and_shuttlecock = "🏸";
  var bow_and_arrow = "🏹";
  var amphora = "🏺";
  var rat = "🐀";
  var mouse2 = "🐁";
  var ox = "🐂";
  var water_buffalo = "🐃";
  var cow2 = "🐄";
  var tiger2 = "🐅";
  var leopard = "🐆";
  var rabbit2 = "🐇";
  var cat2 = "🐈";
  var dragon = "🐉";
  var crocodile = "🐊";
  var whale2 = "🐋";
  var snail = "🐌";
  var snake = "🐍";
  var racehorse = "🐎";
  var ram = "🐏";
  var goat = "🐐";
  var sheep = "🐑";
  var monkey = "🐒";
  var rooster = "🐓";
  var chicken = "🐔";
  var dog2 = "🐕";
  var pig2 = "🐖";
  var boar = "🐗";
  var elephant = "🐘";
  var octopus = "🐙";
  var shell = "🐚";
  var bug = "🐛";
  var ant = "🐜";
  var bee = "🐝";
  var honeybee = "🐝";
  var beetle = "🐞";
  var fish = "🐟";
  var tropical_fish = "🐠";
  var blowfish = "🐡";
  var turtle = "🐢";
  var hatching_chick = "🐣";
  var baby_chick = "🐤";
  var hatched_chick = "🐥";
  var bird = "🐦";
  var penguin = "🐧";
  var koala = "🐨";
  var poodle = "🐩";
  var dromedary_camel = "🐪";
  var camel = "🐫";
  var dolphin = "🐬";
  var flipper = "🐬";
  var mouse = "🐭";
  var cow = "🐮";
  var tiger = "🐯";
  var rabbit = "🐰";
  var cat = "🐱";
  var dragon_face = "🐲";
  var whale = "🐳";
  var horse = "🐴";
  var monkey_face = "🐵";
  var dog = "🐶";
  var pig = "🐷";
  var frog = "🐸";
  var hamster = "🐹";
  var wolf = "🐺";
  var bear = "🐻";
  var panda_face = "🐼";
  var pig_nose = "🐽";
  var feet = "🐾";
  var paw_prints = "🐾";
  var chipmunk = "🐿";
  var eyes = "👀";
  var eye = "👁";
  var ear = "👂";
  var nose = "👃";
  var lips = "👄";
  var tongue = "👅";
  var point_up_2 = "👆";
  var point_down = "👇";
  var point_left = "👈";
  var point_right = "👉";
  var facepunch = "👊";
  var punch = "👊";
  var wave = "👋";
  var ok_hand = "👌";
  var thumbsup = "👍";
  var thumbsdown = "👎";
  var clap = "👏";
  var open_hands = "👐";
  var crown = "👑";
  var womans_hat = "👒";
  var eyeglasses = "👓";
  var necktie = "👔";
  var shirt = "👕";
  var tshirt = "👕";
  var jeans = "👖";
  var dress = "👗";
  var kimono = "👘";
  var bikini = "👙";
  var womans_clothes = "👚";
  var purse = "👛";
  var handbag = "👜";
  var pouch = "👝";
  var mans_shoe = "👞";
  var shoe = "👞";
  var athletic_shoe = "👟";
  var high_heel = "👠";
  var sandal = "👡";
  var boot = "👢";
  var footprints = "👣";
  var bust_in_silhouette = "👤";
  var busts_in_silhouette = "👥";
  var boy = "👦";
  var girl = "👧";
  var man = "👨";
  var woman = "👩";
  var family = "👨‍👩‍👦";
  var couple = "👫";
  var man_and_woman_holding_hands = "👫";
  var two_men_holding_hands = "👬";
  var two_women_holding_hands = "👭";
  var cop = "👮";
  var dancers = "👯";
  var bride_with_veil = "👰";
  var person_with_blond_hair = "👱";
  var man_with_gua_pi_mao = "👲";
  var man_with_turban = "👳";
  var older_man = "👴";
  var older_woman = "👵";
  var baby = "👶";
  var construction_worker = "👷";
  var princess = "👸";
  var japanese_ogre = "👹";
  var japanese_goblin = "👺";
  var ghost = "👻";
  var angel = "👼";
  var alien = "👽";
  var space_invader = "👾";
  var imp = "👿";
  var skull = "💀";
  var information_desk_person = "💁";
  var guardsman = "💂";
  var dancer = "💃";
  var lipstick = "💄";
  var nail_care = "💅";
  var massage = "💆";
  var haircut = "💇";
  var barber = "💈";
  var syringe = "💉";
  var pill = "💊";
  var kiss = "💋";
  var love_letter = "💌";
  var ring = "💍";
  var gem = "💎";
  var couplekiss = "💏";
  var bouquet = "💐";
  var couple_with_heart = "💑";
  var wedding = "💒";
  var heartbeat = "💓";
  var broken_heart = "💔";
  var two_hearts = "💕";
  var sparkling_heart = "💖";
  var heartpulse = "💗";
  var cupid = "💘";
  var blue_heart = "💙";
  var green_heart = "💚";
  var yellow_heart = "💛";
  var purple_heart = "💜";
  var gift_heart = "💝";
  var revolving_hearts = "💞";
  var heart_decoration = "💟";
  var diamond_shape_with_a_dot_inside = "💠";
  var bulb = "💡";
  var anger = "💢";
  var bomb = "💣";
  var zzz = "💤";
  var boom = "💥";
  var collision = "💥";
  var sweat_drops = "💦";
  var droplet = "💧";
  var dash = "💨";
  var hankey = "💩";
  var poop = "💩";
  var shit = "💩";
  var muscle = "💪";
  var dizzy = "💫";
  var speech_balloon = "💬";
  var thought_balloon = "💭";
  var white_flower = "💮";
  var moneybag = "💰";
  var currency_exchange = "💱";
  var heavy_dollar_sign = "💲";
  var credit_card = "💳";
  var yen = "💴";
  var dollar = "💵";
  var euro = "💶";
  var pound = "💷";
  var money_with_wings = "💸";
  var chart = "💹";
  var seat = "💺";
  var computer = "💻";
  var briefcase = "💼";
  var minidisc = "💽";
  var floppy_disk = "💾";
  var cd = "💿";
  var dvd = "📀";
  var file_folder = "📁";
  var open_file_folder = "📂";
  var page_with_curl = "📃";
  var page_facing_up = "📄";
  var date = "📅";
  var calendar = "📆";
  var card_index = "📇";
  var chart_with_upwards_trend = "📈";
  var chart_with_downwards_trend = "📉";
  var bar_chart = "📊";
  var clipboard = "📋";
  var pushpin = "📌";
  var round_pushpin = "📍";
  var paperclip = "📎";
  var straight_ruler = "📏";
  var triangular_ruler = "📐";
  var bookmark_tabs = "📑";
  var ledger = "📒";
  var notebook = "📓";
  var notebook_with_decorative_cover = "📔";
  var closed_book = "📕";
  var book = "📖";
  var open_book = "📖";
  var green_book = "📗";
  var blue_book = "📘";
  var orange_book = "📙";
  var books = "📚";
  var name_badge = "📛";
  var scroll = "📜";
  var memo = "📝";
  var pencil = "📝";
  var telephone_receiver = "📞";
  var pager = "📟";
  var fax = "📠";
  var satellite = "🛰";
  var loudspeaker = "📢";
  var mega = "📣";
  var outbox_tray = "📤";
  var inbox_tray = "📥";
  var incoming_envelope = "📨";
  var envelope_with_arrow = "📩";
  var mailbox_closed = "📪";
  var mailbox = "📫";
  var mailbox_with_mail = "📬";
  var mailbox_with_no_mail = "📭";
  var postbox = "📮";
  var postal_horn = "📯";
  var newspaper = "📰";
  var iphone = "📱";
  var calling = "📲";
  var vibration_mode = "📳";
  var mobile_phone_off = "📴";
  var no_mobile_phones = "📵";
  var signal_strength = "📶";
  var camera = "📷";
  var camera_with_flash = "📸";
  var video_camera = "📹";
  var tv = "📺";
  var radio = "📻";
  var vhs = "📼";
  var film_projector = "📽";
  var prayer_beads = "📿";
  var twisted_rightwards_arrows = "🔀";
  var repeat = "🔁";
  var repeat_one = "🔂";
  var arrows_clockwise = "🔃";
  var arrows_counterclockwise = "🔄";
  var low_brightness = "🔅";
  var high_brightness = "🔆";
  var mute = "🔇";
  var speaker = "🔈";
  var sound = "🔉";
  var loud_sound = "🔊";
  var battery = "🔋";
  var electric_plug = "🔌";
  var mag = "🔍";
  var mag_right = "🔎";
  var lock_with_ink_pen = "🔏";
  var closed_lock_with_key = "🔐";
  var key = "🔑";
  var lock$1 = "🔒";
  var unlock = "🔓";
  var bell = "🔔";
  var no_bell = "🔕";
  var bookmark = "🔖";
  var link = "🔗";
  var radio_button = "🔘";
  var back = "🔙";
  var end$1 = "🔚";
  var on = "🔛";
  var soon = "🔜";
  var top = "🔝";
  var underage = "🔞";
  var keycap_ten = "🔟";
  var capital_abcd = "🔠";
  var abcd = "🔡";
  var symbols = "🔣";
  var abc = "🔤";
  var fire = "🔥";
  var flashlight = "🔦";
  var wrench = "🔧";
  var hammer = "🔨";
  var nut_and_bolt = "🔩";
  var hocho = "🔪";
  var knife = "🔪";
  var gun = "🔫";
  var microscope = "🔬";
  var telescope = "🔭";
  var crystal_ball = "🔮";
  var six_pointed_star = "🔯";
  var beginner = "🔰";
  var trident = "🔱";
  var black_square_button = "🔲";
  var white_square_button = "🔳";
  var red_circle = "🔴";
  var large_blue_circle = "🔵";
  var large_orange_diamond = "🔶";
  var large_blue_diamond = "🔷";
  var small_orange_diamond = "🔸";
  var small_blue_diamond = "🔹";
  var small_red_triangle = "🔺";
  var small_red_triangle_down = "🔻";
  var arrow_up_small = "🔼";
  var arrow_down_small = "🔽";
  var om_symbol = "🕉";
  var dove_of_peace = "🕊";
  var kaaba = "🕋";
  var mosque = "🕌";
  var synagogue = "🕍";
  var menorah_with_nine_branches = "🕎";
  var clock1 = "🕐";
  var clock2 = "🕑";
  var clock3 = "🕒";
  var clock4 = "🕓";
  var clock5 = "🕔";
  var clock6 = "🕕";
  var clock7 = "🕖";
  var clock8 = "🕗";
  var clock9 = "🕘";
  var clock10 = "🕙";
  var clock11 = "🕚";
  var clock12 = "🕛";
  var clock130 = "🕜";
  var clock230 = "🕝";
  var clock330 = "🕞";
  var clock430 = "🕟";
  var clock530 = "🕠";
  var clock630 = "🕡";
  var clock730 = "🕢";
  var clock830 = "🕣";
  var clock930 = "🕤";
  var clock1030 = "🕥";
  var clock1130 = "🕦";
  var clock1230 = "🕧";
  var candle = "🕯";
  var mantelpiece_clock = "🕰";
  var hole = "🕳";
  var man_in_business_suit_levitating = "🕴";
  var sleuth_or_spy = "🕵";
  var dark_sunglasses = "🕶";
  var spider = "🕷";
  var spider_web = "🕸";
  var joystick = "🕹";
  var linked_paperclips = "🖇";
  var lower_left_ballpoint_pen = "🖊";
  var lower_left_fountain_pen = "🖋";
  var lower_left_paintbrush = "🖌";
  var lower_left_crayon = "🖍";
  var raised_hand_with_fingers_splayed = "🖐";
  var middle_finger = "🖕";
  var reversed_hand_with_middle_finger_extended = "🖕";
  var desktop_computer = "🖥";
  var printer = "🖨";
  var three_button_mouse = "🖱";
  var trackball = "🖲";
  var frame_with_picture = "🖼";
  var card_index_dividers = "🗂";
  var card_file_box = "🗃";
  var file_cabinet = "🗄";
  var wastebasket = "🗑";
  var spiral_note_pad = "🗒";
  var spiral_calendar_pad = "🗓";
  var compression = "🗜";
  var old_key = "🗝";
  var rolled_up_newspaper = "🗞";
  var dagger_knife = "🗡";
  var speaking_head_in_silhouette = "🗣";
  var left_speech_bubble = "🗨";
  var right_anger_bubble = "🗯";
  var ballot_box_with_ballot = "🗳";
  var world_map = "🗺";
  var mount_fuji = "🗻";
  var tokyo_tower = "🗼";
  var statue_of_liberty = "🗽";
  var japan = "🗾";
  var moyai = "🗿";
  var grinning = "😀";
  var grin = "😁";
  var joy = "😂";
  var smiley = "😃";
  var smile$1 = "😄";
  var sweat_smile = "😅";
  var laughing = "😆";
  var satisfied = "😆";
  var innocent = "😇";
  var smiling_imp = "😈";
  var wink = "😉";
  var blush = "😊";
  var yum = "😋";
  var relieved = "😌";
  var heart_eyes = "😍";
  var sunglasses = "😎";
  var smirk = "😏";
  var neutral_face = "😐";
  var expressionless = "😑";
  var unamused = "😒";
  var sweat = "😓";
  var pensive = "😔";
  var confused = "😕";
  var confounded = "😖";
  var kissing = "😗";
  var kissing_heart = "😘";
  var kissing_smiling_eyes = "😙";
  var kissing_closed_eyes = "😚";
  var stuck_out_tongue = "😛";
  var stuck_out_tongue_winking_eye = "😜";
  var stuck_out_tongue_closed_eyes = "😝";
  var disappointed = "😞";
  var worried = "😟";
  var angry = "😠";
  var rage = "😡";
  var cry = "😢";
  var persevere = "😣";
  var triumph = "😤";
  var disappointed_relieved = "😥";
  var frowning = "😦";
  var anguished = "😧";
  var fearful = "😨";
  var weary = "😩";
  var sleepy = "😪";
  var tired_face = "😫";
  var grimacing = "😬";
  var sob = "😭";
  var open_mouth = "😮";
  var hushed = "😯";
  var cold_sweat = "😰";
  var scream = "😱";
  var astonished = "😲";
  var flushed = "😳";
  var sleeping = "😴";
  var dizzy_face = "😵";
  var no_mouth = "😶";
  var mask = "😷";
  var smile_cat = "😸";
  var joy_cat = "😹";
  var smiley_cat = "😺";
  var heart_eyes_cat = "😻";
  var smirk_cat = "😼";
  var kissing_cat = "😽";
  var pouting_cat = "😾";
  var crying_cat_face = "😿";
  var scream_cat = "🙀";
  var slightly_frowning_face = "🙁";
  var slightly_smiling_face = "🙂";
  var upside_down_face = "🙃";
  var face_with_rolling_eyes = "🙄";
  var no_good = "🙅";
  var ok_woman = "🙆";
  var bow = "🙇";
  var see_no_evil = "🙈";
  var hear_no_evil = "🙉";
  var speak_no_evil = "🙊";
  var raising_hand = "🙋";
  var raised_hands = "🙌";
  var person_frowning = "🙍";
  var person_with_pouting_face = "🙎";
  var pray = "🙏";
  var rocket = "🚀";
  var helicopter = "🚁";
  var steam_locomotive = "🚂";
  var railway_car = "🚃";
  var bullettrain_side = "🚄";
  var bullettrain_front = "🚅";
  var train2 = "🚆";
  var metro = "🚇";
  var light_rail = "🚈";
  var station = "🚉";
  var tram = "🚊";
  var train = "🚋";
  var bus = "🚌";
  var oncoming_bus = "🚍";
  var trolleybus = "🚎";
  var busstop = "🚏";
  var minibus = "🚐";
  var ambulance = "🚑";
  var fire_engine = "🚒";
  var police_car = "🚓";
  var oncoming_police_car = "🚔";
  var taxi = "🚕";
  var oncoming_taxi = "🚖";
  var car = "🚗";
  var red_car = "🚗";
  var oncoming_automobile = "🚘";
  var blue_car = "🚙";
  var truck = "🚚";
  var articulated_lorry = "🚛";
  var tractor = "🚜";
  var monorail = "🚝";
  var mountain_railway = "🚞";
  var suspension_railway = "🚟";
  var mountain_cableway = "🚠";
  var aerial_tramway = "🚡";
  var ship = "🚢";
  var rowboat = "🚣";
  var speedboat = "🚤";
  var traffic_light = "🚥";
  var vertical_traffic_light = "🚦";
  var construction = "🚧";
  var rotating_light = "🚨";
  var triangular_flag_on_post = "🚩";
  var door = "🚪";
  var no_entry_sign = "🚫";
  var smoking = "🚬";
  var no_smoking = "🚭";
  var put_litter_in_its_place = "🚮";
  var do_not_litter = "🚯";
  var potable_water = "🚰";
  var bike = "🚲";
  var no_bicycles = "🚳";
  var bicyclist = "🚴";
  var mountain_bicyclist = "🚵";
  var walking = "🚶";
  var no_pedestrians = "🚷";
  var children_crossing = "🚸";
  var mens = "🚹";
  var womens = "🚺";
  var restroom = "🚻";
  var baby_symbol = "🚼";
  var toilet = "🚽";
  var wc = "🚾";
  var shower = "🚿";
  var bath = "🛀";
  var bathtub = "🛁";
  var passport_control = "🛂";
  var customs = "🛃";
  var baggage_claim = "🛄";
  var left_luggage = "🛅";
  var couch_and_lamp = "🛋";
  var sleeping_accommodation = "🛌";
  var shopping_bags = "🛍";
  var bellhop_bell = "🛎";
  var bed = "🛏";
  var place_of_worship = "🛐";
  var hammer_and_wrench = "🛠";
  var shield = "🛡";
  var oil_drum = "🛢";
  var motorway = "🛣";
  var railway_track = "🛤";
  var motor_boat = "🛥";
  var small_airplane = "🛩";
  var airplane_departure = "🛫";
  var airplane_arriving = "🛬";
  var passenger_ship = "🛳";
  var zipper_mouth_face = "🤐";
  var money_mouth_face = "🤑";
  var face_with_thermometer = "🤒";
  var nerd_face = "🤓";
  var thinking_face = "🤔";
  var face_with_head_bandage = "🤕";
  var robot_face = "🤖";
  var hugging_face = "🤗";
  var the_horns = "🤘";
  var sign_of_the_horns = "🤘";
  var crab = "🦀";
  var lion_face = "🦁";
  var scorpion = "🦂";
  var turkey = "🦃";
  var unicorn_face = "🦄";
  var cheese_wedge = "🧀";
  var hash = "#️⃣";
  var keycap_star = "*⃣";
  var zero = "0️⃣";
  var one = "1️⃣";
  var two = "2️⃣";
  var three = "3️⃣";
  var four = "4️⃣";
  var five = "5️⃣";
  var six = "6️⃣";
  var seven = "7️⃣";
  var eight = "8️⃣";
  var nine = "9️⃣";
  var cn$2 = "🇨🇳";
  var de = "🇩🇪";
  var es = "🇪🇸";
  var fr = "🇫🇷";
  var gb = "🇬🇧";
  var uk = "🇬🇧";
  var it = "🇮🇹";
  var jp = "🇯🇵";
  var kr = "🇰🇷";
  var ru = "🇷🇺";
  var us = "🇺🇸";
  var emoji = {
  	"100": "💯",
  	"1234": "🔢",
  	interrobang: interrobang,
  	tm: tm,
  	information_source: information_source,
  	left_right_arrow: left_right_arrow,
  	arrow_up_down: arrow_up_down,
  	arrow_upper_left: arrow_upper_left,
  	arrow_upper_right: arrow_upper_right,
  	arrow_lower_right: arrow_lower_right,
  	arrow_lower_left: arrow_lower_left,
  	keyboard: keyboard,
  	sunny: sunny,
  	cloud: cloud,
  	umbrella: umbrella,
  	showman: showman,
  	comet: comet,
  	ballot_box_with_check: ballot_box_with_check,
  	coffee: coffee,
  	shamrock: shamrock,
  	skull_and_crossbones: skull_and_crossbones,
  	radioactive_sign: radioactive_sign,
  	biohazard_sign: biohazard_sign,
  	orthodox_cross: orthodox_cross,
  	wheel_of_dharma: wheel_of_dharma,
  	white_frowning_face: white_frowning_face,
  	aries: aries,
  	taurus: taurus,
  	sagittarius: sagittarius,
  	capricorn: capricorn,
  	aquarius: aquarius,
  	pisces: pisces,
  	spades: spades,
  	clubs: clubs,
  	hearts: hearts,
  	diamonds: diamonds,
  	hotsprings: hotsprings,
  	hammer_and_pick: hammer_and_pick,
  	anchor: anchor,
  	crossed_swords: crossed_swords,
  	scales: scales,
  	alembic: alembic,
  	gear: gear,
  	scissors: scissors,
  	white_check_mark: white_check_mark,
  	airplane: airplane,
  	email: email,
  	envelope: envelope,
  	black_nib: black_nib,
  	heavy_check_mark: heavy_check_mark,
  	heavy_multiplication_x: heavy_multiplication_x,
  	star_of_david: star_of_david,
  	sparkles: sparkles,
  	eight_spoked_asterisk: eight_spoked_asterisk,
  	eight_pointed_black_star: eight_pointed_black_star,
  	snowflake: snowflake,
  	sparkle: sparkle,
  	question: question,
  	grey_question: grey_question,
  	grey_exclamation: grey_exclamation,
  	exclamation: exclamation,
  	heavy_exclamation_mark: heavy_exclamation_mark,
  	heavy_heart_exclamation_mark_ornament: heavy_heart_exclamation_mark_ornament,
  	heart: heart,
  	heavy_plus_sign: heavy_plus_sign,
  	heavy_minus_sign: heavy_minus_sign,
  	heavy_division_sign: heavy_division_sign,
  	arrow_heading_up: arrow_heading_up,
  	arrow_heading_down: arrow_heading_down,
  	wavy_dash: wavy_dash,
  	congratulations: congratulations,
  	secret: secret,
  	copyright: copyright,
  	registered: registered,
  	bangbang: bangbang,
  	leftwards_arrow_with_hook: leftwards_arrow_with_hook,
  	arrow_right_hook: arrow_right_hook,
  	watch: watch,
  	hourglass: hourglass,
  	fast_forward: fast_forward,
  	rewind: rewind,
  	arrow_double_up: arrow_double_up,
  	arrow_double_down: arrow_double_down,
  	black_right_pointing_double_triangle_with_vertical_bar: black_right_pointing_double_triangle_with_vertical_bar,
  	black_left_pointing_double_triangle_with_vertical_bar: black_left_pointing_double_triangle_with_vertical_bar,
  	black_right_pointing_triangle_with_double_vertical_bar: black_right_pointing_triangle_with_double_vertical_bar,
  	alarm_clock: alarm_clock,
  	stopwatch: stopwatch,
  	timer_clock: timer_clock,
  	hourglass_flowing_sand: hourglass_flowing_sand,
  	double_vertical_bar: double_vertical_bar,
  	black_square_for_stop: black_square_for_stop,
  	black_circle_for_record: black_circle_for_record,
  	m: m,
  	black_small_square: black_small_square,
  	white_small_square: white_small_square,
  	arrow_forward: arrow_forward,
  	arrow_backward: arrow_backward,
  	white_medium_square: white_medium_square,
  	black_medium_square: black_medium_square,
  	white_medium_small_square: white_medium_small_square,
  	black_medium_small_square: black_medium_small_square,
  	phone: phone,
  	telephone: telephone,
  	point_up: point_up,
  	star_and_crescent: star_and_crescent,
  	peace_symbol: peace_symbol,
  	yin_yang: yin_yang,
  	relaxed: relaxed,
  	gemini: gemini,
  	cancer: cancer,
  	leo: leo,
  	virgo: virgo,
  	libra: libra,
  	scorpius: scorpius,
  	recycle: recycle,
  	wheelchair: wheelchair,
  	atom_symbol: atom_symbol,
  	fleur_de_lis: fleur_de_lis,
  	warning: warning$1,
  	zap: zap,
  	white_circle: white_circle,
  	black_circle: black_circle,
  	coffin: coffin,
  	funeral_urn: funeral_urn,
  	soccer: soccer,
  	baseball: baseball,
  	snowman: snowman,
  	partly_sunny: partly_sunny,
  	thunder_cloud_and_rain: thunder_cloud_and_rain,
  	ophiuchus: ophiuchus,
  	pick: pick,
  	helmet_with_white_cross: helmet_with_white_cross,
  	chains: chains,
  	no_entry: no_entry,
  	shinto_shrine: shinto_shrine,
  	church: church,
  	mountain: mountain,
  	umbrella_on_ground: umbrella_on_ground,
  	fountain: fountain,
  	golf: golf,
  	ferry: ferry,
  	boat: boat,
  	sailboat: sailboat,
  	skier: skier,
  	ice_skate: ice_skate,
  	person_with_ball: person_with_ball,
  	tent: tent,
  	fuelpump: fuelpump,
  	fist: fist,
  	hand: hand,
  	raised_hand: raised_hand,
  	v: v,
  	writing_hand: writing_hand,
  	pencil2: pencil2,
  	latin_cross: latin_cross,
  	x: x,
  	negative_squared_cross_mark: negative_squared_cross_mark,
  	arrow_right: arrow_right,
  	curly_loop: curly_loop,
  	loop: loop,
  	arrow_left: arrow_left,
  	arrow_up: arrow_up,
  	arrow_down: arrow_down,
  	black_large_square: black_large_square,
  	white_large_square: white_large_square,
  	star: star,
  	o: o,
  	part_alternation_mark: part_alternation_mark,
  	mahjong: mahjong,
  	black_joker: black_joker,
  	a: a,
  	b: b,
  	o2: o2,
  	parking: parking,
  	ab: ab,
  	cl: cl,
  	cool: cool,
  	free: free,
  	id: id$1,
  	"new": "🆕",
  	ng: ng,
  	ok: ok,
  	sos: sos,
  	up: up,
  	vs: vs,
  	koko: koko,
  	sa: sa,
  	u7121: u7121,
  	u6307: u6307,
  	u7981: u7981,
  	u7a7a: u7a7a,
  	u5408: u5408,
  	u6e80: u6e80,
  	u6709: u6709,
  	u6708: u6708,
  	u7533: u7533,
  	u5272: u5272,
  	u55b6: u55b6,
  	ideograph_advantage: ideograph_advantage,
  	accept: accept,
  	cyclone: cyclone,
  	foggy: foggy,
  	closed_umbrella: closed_umbrella,
  	night_with_stars: night_with_stars,
  	sunrise_over_mountains: sunrise_over_mountains,
  	sunrise: sunrise,
  	city_sunset: city_sunset,
  	city_sunrise: city_sunrise,
  	rainbow: rainbow,
  	bridge_at_night: bridge_at_night,
  	ocean: ocean,
  	volcano: volcano,
  	milky_way: milky_way,
  	earth_africa: earth_africa,
  	earth_americas: earth_americas,
  	earth_asia: earth_asia,
  	globe_with_meridians: globe_with_meridians,
  	new_moon: new_moon,
  	waxing_crescent_moon: waxing_crescent_moon,
  	first_quarter_moon: first_quarter_moon,
  	moon: moon,
  	waxing_gibbous_moon: waxing_gibbous_moon,
  	full_moon: full_moon,
  	waning_gibbous_moon: waning_gibbous_moon,
  	last_quarter_moon: last_quarter_moon,
  	waning_crescent_moon: waning_crescent_moon,
  	crescent_moon: crescent_moon,
  	new_moon_with_face: new_moon_with_face,
  	first_quarter_moon_with_face: first_quarter_moon_with_face,
  	last_quarter_moon_with_face: last_quarter_moon_with_face,
  	full_moon_with_face: full_moon_with_face,
  	sun_with_face: sun_with_face,
  	star2: star2,
  	stars: stars,
  	thermometer: thermometer,
  	mostly_sunny: mostly_sunny,
  	sun_small_cloud: sun_small_cloud,
  	barely_sunny: barely_sunny,
  	sun_behind_cloud: sun_behind_cloud,
  	partly_sunny_rain: partly_sunny_rain,
  	sun_behind_rain_cloud: sun_behind_rain_cloud,
  	rain_cloud: rain_cloud,
  	snow_cloud: snow_cloud,
  	lightning: lightning,
  	lightning_cloud: lightning_cloud,
  	tornado: tornado,
  	tornado_cloud: tornado_cloud,
  	fog: fog,
  	wind_blowing_face: wind_blowing_face,
  	hotdog: hotdog,
  	taco: taco,
  	burrito: burrito,
  	chestnut: chestnut,
  	seedling: seedling,
  	evergreen_tree: evergreen_tree,
  	deciduous_tree: deciduous_tree,
  	palm_tree: palm_tree,
  	cactus: cactus,
  	hot_pepper: hot_pepper,
  	tulip: tulip,
  	cherry_blossom: cherry_blossom,
  	rose: rose,
  	hibiscus: hibiscus,
  	sunflower: sunflower,
  	blossom: blossom,
  	corn: corn,
  	ear_of_rice: ear_of_rice,
  	herb: herb,
  	four_leaf_clover: four_leaf_clover,
  	maple_leaf: maple_leaf,
  	fallen_leaf: fallen_leaf,
  	leaves: leaves,
  	mushroom: mushroom,
  	tomato: tomato,
  	eggplant: eggplant,
  	grapes: grapes,
  	melon: melon,
  	watermelon: watermelon,
  	tangerine: tangerine,
  	lemon: lemon,
  	banana: banana,
  	pineapple: pineapple,
  	apple: apple,
  	green_apple: green_apple,
  	pear: pear,
  	peach: peach,
  	cherries: cherries,
  	strawberry: strawberry,
  	hamburger: hamburger,
  	pizza: pizza,
  	meat_on_bone: meat_on_bone,
  	poultry_leg: poultry_leg,
  	rice_cracker: rice_cracker,
  	rice_ball: rice_ball,
  	rice: rice,
  	curry: curry$1,
  	ramen: ramen,
  	spaghetti: spaghetti,
  	bread: bread,
  	fries: fries,
  	sweet_potato: sweet_potato,
  	dango: dango,
  	oden: oden,
  	sushi: sushi,
  	fried_shrimp: fried_shrimp,
  	fish_cake: fish_cake,
  	icecream: icecream,
  	shaved_ice: shaved_ice,
  	ice_cream: ice_cream,
  	doughnut: doughnut,
  	cookie: cookie,
  	chocolate_bar: chocolate_bar,
  	candy: candy,
  	lollipop: lollipop,
  	custard: custard,
  	honey_pot: honey_pot,
  	cake: cake,
  	bento: bento,
  	stew: stew,
  	egg: egg,
  	fork_and_knife: fork_and_knife,
  	tea: tea,
  	sake: sake,
  	wine_glass: wine_glass,
  	cocktail: cocktail,
  	tropical_drink: tropical_drink,
  	beer: beer,
  	beers: beers,
  	baby_bottle: baby_bottle,
  	knife_fork_plate: knife_fork_plate,
  	champagne: champagne,
  	popcorn: popcorn,
  	ribbon: ribbon,
  	gift: gift,
  	birthday: birthday,
  	jack_o_lantern: jack_o_lantern,
  	christmas_tree: christmas_tree,
  	santa: santa,
  	fireworks: fireworks,
  	sparkler: sparkler,
  	balloon: balloon,
  	tada: tada,
  	confetti_ball: confetti_ball,
  	tanabata_tree: tanabata_tree,
  	crossed_flags: crossed_flags,
  	bamboo: bamboo,
  	dolls: dolls,
  	flags: flags,
  	wind_chime: wind_chime,
  	rice_scene: rice_scene,
  	school_satchel: school_satchel,
  	mortar_board: mortar_board,
  	medal: medal,
  	reminder_ribbon: reminder_ribbon,
  	studio_microphone: studio_microphone,
  	level_slider: level_slider,
  	control_knobs: control_knobs,
  	film_frames: film_frames,
  	admission_tickets: admission_tickets,
  	carousel_horse: carousel_horse,
  	ferris_wheel: ferris_wheel,
  	roller_coaster: roller_coaster,
  	fishing_pole_and_fish: fishing_pole_and_fish,
  	microphone: microphone,
  	movie_camera: movie_camera,
  	cinema: cinema,
  	headphones: headphones,
  	art: art,
  	tophat: tophat,
  	circus_tent: circus_tent,
  	ticket: ticket,
  	clapper: clapper,
  	performing_arts: performing_arts,
  	video_game: video_game,
  	dart: dart,
  	slot_machine: slot_machine,
  	"8ball": "🎱",
  	game_die: game_die,
  	bowling: bowling,
  	flower_playing_cards: flower_playing_cards,
  	musical_note: musical_note,
  	notes: notes,
  	saxophone: saxophone,
  	guitar: guitar,
  	musical_keyboard: musical_keyboard,
  	trumpet: trumpet,
  	violin: violin,
  	musical_score: musical_score,
  	running_shirt_with_sash: running_shirt_with_sash,
  	tennis: tennis,
  	ski: ski,
  	basketball: basketball,
  	checkered_flag: checkered_flag,
  	snowboarder: snowboarder,
  	runner: runner,
  	running: running,
  	surfer: surfer,
  	sports_medal: sports_medal,
  	trophy: trophy,
  	horse_racing: horse_racing,
  	football: football,
  	rugby_football: rugby_football,
  	swimmer: swimmer,
  	weight_lifter: weight_lifter,
  	golfer: golfer,
  	racing_motorcycle: racing_motorcycle,
  	racing_car: racing_car,
  	cricket_bat_and_ball: cricket_bat_and_ball,
  	volleyball: volleyball,
  	field_hockey_stick_and_ball: field_hockey_stick_and_ball,
  	ice_hockey_stick_and_puck: ice_hockey_stick_and_puck,
  	table_tennis_paddle_and_ball: table_tennis_paddle_and_ball,
  	snow_capped_mountain: snow_capped_mountain,
  	camping: camping,
  	beach_with_umbrella: beach_with_umbrella,
  	building_construction: building_construction,
  	house_buildings: house_buildings,
  	cityscape: cityscape,
  	derelict_house_building: derelict_house_building,
  	classical_building: classical_building,
  	desert: desert,
  	desert_island: desert_island,
  	national_park: national_park,
  	stadium: stadium,
  	house: house,
  	house_with_garden: house_with_garden,
  	office: office,
  	post_office: post_office,
  	european_post_office: european_post_office,
  	hospital: hospital,
  	bank: bank,
  	atm: atm,
  	hotel: hotel,
  	love_hotel: love_hotel,
  	convenience_store: convenience_store,
  	school: school,
  	department_store: department_store,
  	factory: factory,
  	izakaya_lantern: izakaya_lantern,
  	lantern: lantern,
  	japanese_castle: japanese_castle,
  	european_castle: european_castle,
  	waving_white_flag: waving_white_flag,
  	waving_black_flag: waving_black_flag,
  	rosette: rosette,
  	label: label,
  	badminton_racquet_and_shuttlecock: badminton_racquet_and_shuttlecock,
  	bow_and_arrow: bow_and_arrow,
  	amphora: amphora,
  	"skin-tone-2": "🏻",
  	"skin-tone-3": "🏼",
  	"skin-tone-4": "🏽",
  	"skin-tone-5": "🏾",
  	"skin-tone-6": "🏿",
  	rat: rat,
  	mouse2: mouse2,
  	ox: ox,
  	water_buffalo: water_buffalo,
  	cow2: cow2,
  	tiger2: tiger2,
  	leopard: leopard,
  	rabbit2: rabbit2,
  	cat2: cat2,
  	dragon: dragon,
  	crocodile: crocodile,
  	whale2: whale2,
  	snail: snail,
  	snake: snake,
  	racehorse: racehorse,
  	ram: ram,
  	goat: goat,
  	sheep: sheep,
  	monkey: monkey,
  	rooster: rooster,
  	chicken: chicken,
  	dog2: dog2,
  	pig2: pig2,
  	boar: boar,
  	elephant: elephant,
  	octopus: octopus,
  	shell: shell,
  	bug: bug,
  	ant: ant,
  	bee: bee,
  	honeybee: honeybee,
  	beetle: beetle,
  	fish: fish,
  	tropical_fish: tropical_fish,
  	blowfish: blowfish,
  	turtle: turtle,
  	hatching_chick: hatching_chick,
  	baby_chick: baby_chick,
  	hatched_chick: hatched_chick,
  	bird: bird,
  	penguin: penguin,
  	koala: koala,
  	poodle: poodle,
  	dromedary_camel: dromedary_camel,
  	camel: camel,
  	dolphin: dolphin,
  	flipper: flipper,
  	mouse: mouse,
  	cow: cow,
  	tiger: tiger,
  	rabbit: rabbit,
  	cat: cat,
  	dragon_face: dragon_face,
  	whale: whale,
  	horse: horse,
  	monkey_face: monkey_face,
  	dog: dog,
  	pig: pig,
  	frog: frog,
  	hamster: hamster,
  	wolf: wolf,
  	bear: bear,
  	panda_face: panda_face,
  	pig_nose: pig_nose,
  	feet: feet,
  	paw_prints: paw_prints,
  	chipmunk: chipmunk,
  	eyes: eyes,
  	eye: eye,
  	ear: ear,
  	nose: nose,
  	lips: lips,
  	tongue: tongue,
  	point_up_2: point_up_2,
  	point_down: point_down,
  	point_left: point_left,
  	point_right: point_right,
  	facepunch: facepunch,
  	punch: punch,
  	wave: wave,
  	ok_hand: ok_hand,
  	"+1": "👍",
  	thumbsup: thumbsup,
  	"-1": "👎",
  	thumbsdown: thumbsdown,
  	clap: clap,
  	open_hands: open_hands,
  	crown: crown,
  	womans_hat: womans_hat,
  	eyeglasses: eyeglasses,
  	necktie: necktie,
  	shirt: shirt,
  	tshirt: tshirt,
  	jeans: jeans,
  	dress: dress,
  	kimono: kimono,
  	bikini: bikini,
  	womans_clothes: womans_clothes,
  	purse: purse,
  	handbag: handbag,
  	pouch: pouch,
  	mans_shoe: mans_shoe,
  	shoe: shoe,
  	athletic_shoe: athletic_shoe,
  	high_heel: high_heel,
  	sandal: sandal,
  	boot: boot,
  	footprints: footprints,
  	bust_in_silhouette: bust_in_silhouette,
  	busts_in_silhouette: busts_in_silhouette,
  	boy: boy,
  	girl: girl,
  	man: man,
  	woman: woman,
  	family: family,
  	"man-woman-boy": "👨‍👩‍👦",
  	couple: couple,
  	man_and_woman_holding_hands: man_and_woman_holding_hands,
  	two_men_holding_hands: two_men_holding_hands,
  	two_women_holding_hands: two_women_holding_hands,
  	cop: cop,
  	dancers: dancers,
  	bride_with_veil: bride_with_veil,
  	person_with_blond_hair: person_with_blond_hair,
  	man_with_gua_pi_mao: man_with_gua_pi_mao,
  	man_with_turban: man_with_turban,
  	older_man: older_man,
  	older_woman: older_woman,
  	baby: baby,
  	construction_worker: construction_worker,
  	princess: princess,
  	japanese_ogre: japanese_ogre,
  	japanese_goblin: japanese_goblin,
  	ghost: ghost,
  	angel: angel,
  	alien: alien,
  	space_invader: space_invader,
  	imp: imp,
  	skull: skull,
  	information_desk_person: information_desk_person,
  	guardsman: guardsman,
  	dancer: dancer,
  	lipstick: lipstick,
  	nail_care: nail_care,
  	massage: massage,
  	haircut: haircut,
  	barber: barber,
  	syringe: syringe,
  	pill: pill,
  	kiss: kiss,
  	love_letter: love_letter,
  	ring: ring,
  	gem: gem,
  	couplekiss: couplekiss,
  	bouquet: bouquet,
  	couple_with_heart: couple_with_heart,
  	wedding: wedding,
  	heartbeat: heartbeat,
  	broken_heart: broken_heart,
  	two_hearts: two_hearts,
  	sparkling_heart: sparkling_heart,
  	heartpulse: heartpulse,
  	cupid: cupid,
  	blue_heart: blue_heart,
  	green_heart: green_heart,
  	yellow_heart: yellow_heart,
  	purple_heart: purple_heart,
  	gift_heart: gift_heart,
  	revolving_hearts: revolving_hearts,
  	heart_decoration: heart_decoration,
  	diamond_shape_with_a_dot_inside: diamond_shape_with_a_dot_inside,
  	bulb: bulb,
  	anger: anger,
  	bomb: bomb,
  	zzz: zzz,
  	boom: boom,
  	collision: collision,
  	sweat_drops: sweat_drops,
  	droplet: droplet,
  	dash: dash,
  	hankey: hankey,
  	poop: poop,
  	shit: shit,
  	muscle: muscle,
  	dizzy: dizzy,
  	speech_balloon: speech_balloon,
  	thought_balloon: thought_balloon,
  	white_flower: white_flower,
  	moneybag: moneybag,
  	currency_exchange: currency_exchange,
  	heavy_dollar_sign: heavy_dollar_sign,
  	credit_card: credit_card,
  	yen: yen,
  	dollar: dollar,
  	euro: euro,
  	pound: pound,
  	money_with_wings: money_with_wings,
  	chart: chart,
  	seat: seat,
  	computer: computer,
  	briefcase: briefcase,
  	minidisc: minidisc,
  	floppy_disk: floppy_disk,
  	cd: cd,
  	dvd: dvd,
  	file_folder: file_folder,
  	open_file_folder: open_file_folder,
  	page_with_curl: page_with_curl,
  	page_facing_up: page_facing_up,
  	date: date,
  	calendar: calendar,
  	card_index: card_index,
  	chart_with_upwards_trend: chart_with_upwards_trend,
  	chart_with_downwards_trend: chart_with_downwards_trend,
  	bar_chart: bar_chart,
  	clipboard: clipboard,
  	pushpin: pushpin,
  	round_pushpin: round_pushpin,
  	paperclip: paperclip,
  	straight_ruler: straight_ruler,
  	triangular_ruler: triangular_ruler,
  	bookmark_tabs: bookmark_tabs,
  	ledger: ledger,
  	notebook: notebook,
  	notebook_with_decorative_cover: notebook_with_decorative_cover,
  	closed_book: closed_book,
  	book: book,
  	open_book: open_book,
  	green_book: green_book,
  	blue_book: blue_book,
  	orange_book: orange_book,
  	books: books,
  	name_badge: name_badge,
  	scroll: scroll,
  	memo: memo,
  	pencil: pencil,
  	telephone_receiver: telephone_receiver,
  	pager: pager,
  	fax: fax,
  	satellite: satellite,
  	loudspeaker: loudspeaker,
  	mega: mega,
  	outbox_tray: outbox_tray,
  	inbox_tray: inbox_tray,
  	"package": "📦",
  	"e-mail": "📧",
  	incoming_envelope: incoming_envelope,
  	envelope_with_arrow: envelope_with_arrow,
  	mailbox_closed: mailbox_closed,
  	mailbox: mailbox,
  	mailbox_with_mail: mailbox_with_mail,
  	mailbox_with_no_mail: mailbox_with_no_mail,
  	postbox: postbox,
  	postal_horn: postal_horn,
  	newspaper: newspaper,
  	iphone: iphone,
  	calling: calling,
  	vibration_mode: vibration_mode,
  	mobile_phone_off: mobile_phone_off,
  	no_mobile_phones: no_mobile_phones,
  	signal_strength: signal_strength,
  	camera: camera,
  	camera_with_flash: camera_with_flash,
  	video_camera: video_camera,
  	tv: tv,
  	radio: radio,
  	vhs: vhs,
  	film_projector: film_projector,
  	prayer_beads: prayer_beads,
  	twisted_rightwards_arrows: twisted_rightwards_arrows,
  	repeat: repeat,
  	repeat_one: repeat_one,
  	arrows_clockwise: arrows_clockwise,
  	arrows_counterclockwise: arrows_counterclockwise,
  	low_brightness: low_brightness,
  	high_brightness: high_brightness,
  	mute: mute,
  	speaker: speaker,
  	sound: sound,
  	loud_sound: loud_sound,
  	battery: battery,
  	electric_plug: electric_plug,
  	mag: mag,
  	mag_right: mag_right,
  	lock_with_ink_pen: lock_with_ink_pen,
  	closed_lock_with_key: closed_lock_with_key,
  	key: key,
  	lock: lock$1,
  	unlock: unlock,
  	bell: bell,
  	no_bell: no_bell,
  	bookmark: bookmark,
  	link: link,
  	radio_button: radio_button,
  	back: back,
  	end: end$1,
  	on: on,
  	soon: soon,
  	top: top,
  	underage: underage,
  	keycap_ten: keycap_ten,
  	capital_abcd: capital_abcd,
  	abcd: abcd,
  	symbols: symbols,
  	abc: abc,
  	fire: fire,
  	flashlight: flashlight,
  	wrench: wrench,
  	hammer: hammer,
  	nut_and_bolt: nut_and_bolt,
  	hocho: hocho,
  	knife: knife,
  	gun: gun,
  	microscope: microscope,
  	telescope: telescope,
  	crystal_ball: crystal_ball,
  	six_pointed_star: six_pointed_star,
  	beginner: beginner,
  	trident: trident,
  	black_square_button: black_square_button,
  	white_square_button: white_square_button,
  	red_circle: red_circle,
  	large_blue_circle: large_blue_circle,
  	large_orange_diamond: large_orange_diamond,
  	large_blue_diamond: large_blue_diamond,
  	small_orange_diamond: small_orange_diamond,
  	small_blue_diamond: small_blue_diamond,
  	small_red_triangle: small_red_triangle,
  	small_red_triangle_down: small_red_triangle_down,
  	arrow_up_small: arrow_up_small,
  	arrow_down_small: arrow_down_small,
  	om_symbol: om_symbol,
  	dove_of_peace: dove_of_peace,
  	kaaba: kaaba,
  	mosque: mosque,
  	synagogue: synagogue,
  	menorah_with_nine_branches: menorah_with_nine_branches,
  	clock1: clock1,
  	clock2: clock2,
  	clock3: clock3,
  	clock4: clock4,
  	clock5: clock5,
  	clock6: clock6,
  	clock7: clock7,
  	clock8: clock8,
  	clock9: clock9,
  	clock10: clock10,
  	clock11: clock11,
  	clock12: clock12,
  	clock130: clock130,
  	clock230: clock230,
  	clock330: clock330,
  	clock430: clock430,
  	clock530: clock530,
  	clock630: clock630,
  	clock730: clock730,
  	clock830: clock830,
  	clock930: clock930,
  	clock1030: clock1030,
  	clock1130: clock1130,
  	clock1230: clock1230,
  	candle: candle,
  	mantelpiece_clock: mantelpiece_clock,
  	hole: hole,
  	man_in_business_suit_levitating: man_in_business_suit_levitating,
  	sleuth_or_spy: sleuth_or_spy,
  	dark_sunglasses: dark_sunglasses,
  	spider: spider,
  	spider_web: spider_web,
  	joystick: joystick,
  	linked_paperclips: linked_paperclips,
  	lower_left_ballpoint_pen: lower_left_ballpoint_pen,
  	lower_left_fountain_pen: lower_left_fountain_pen,
  	lower_left_paintbrush: lower_left_paintbrush,
  	lower_left_crayon: lower_left_crayon,
  	raised_hand_with_fingers_splayed: raised_hand_with_fingers_splayed,
  	middle_finger: middle_finger,
  	reversed_hand_with_middle_finger_extended: reversed_hand_with_middle_finger_extended,
  	"spock-hand": "🖖",
  	desktop_computer: desktop_computer,
  	printer: printer,
  	three_button_mouse: three_button_mouse,
  	trackball: trackball,
  	frame_with_picture: frame_with_picture,
  	card_index_dividers: card_index_dividers,
  	card_file_box: card_file_box,
  	file_cabinet: file_cabinet,
  	wastebasket: wastebasket,
  	spiral_note_pad: spiral_note_pad,
  	spiral_calendar_pad: spiral_calendar_pad,
  	compression: compression,
  	old_key: old_key,
  	rolled_up_newspaper: rolled_up_newspaper,
  	dagger_knife: dagger_knife,
  	speaking_head_in_silhouette: speaking_head_in_silhouette,
  	left_speech_bubble: left_speech_bubble,
  	right_anger_bubble: right_anger_bubble,
  	ballot_box_with_ballot: ballot_box_with_ballot,
  	world_map: world_map,
  	mount_fuji: mount_fuji,
  	tokyo_tower: tokyo_tower,
  	statue_of_liberty: statue_of_liberty,
  	japan: japan,
  	moyai: moyai,
  	grinning: grinning,
  	grin: grin,
  	joy: joy,
  	smiley: smiley,
  	smile: smile$1,
  	sweat_smile: sweat_smile,
  	laughing: laughing,
  	satisfied: satisfied,
  	innocent: innocent,
  	smiling_imp: smiling_imp,
  	wink: wink,
  	blush: blush,
  	yum: yum,
  	relieved: relieved,
  	heart_eyes: heart_eyes,
  	sunglasses: sunglasses,
  	smirk: smirk,
  	neutral_face: neutral_face,
  	expressionless: expressionless,
  	unamused: unamused,
  	sweat: sweat,
  	pensive: pensive,
  	confused: confused,
  	confounded: confounded,
  	kissing: kissing,
  	kissing_heart: kissing_heart,
  	kissing_smiling_eyes: kissing_smiling_eyes,
  	kissing_closed_eyes: kissing_closed_eyes,
  	stuck_out_tongue: stuck_out_tongue,
  	stuck_out_tongue_winking_eye: stuck_out_tongue_winking_eye,
  	stuck_out_tongue_closed_eyes: stuck_out_tongue_closed_eyes,
  	disappointed: disappointed,
  	worried: worried,
  	angry: angry,
  	rage: rage,
  	cry: cry,
  	persevere: persevere,
  	triumph: triumph,
  	disappointed_relieved: disappointed_relieved,
  	frowning: frowning,
  	anguished: anguished,
  	fearful: fearful,
  	weary: weary,
  	sleepy: sleepy,
  	tired_face: tired_face,
  	grimacing: grimacing,
  	sob: sob,
  	open_mouth: open_mouth,
  	hushed: hushed,
  	cold_sweat: cold_sweat,
  	scream: scream,
  	astonished: astonished,
  	flushed: flushed,
  	sleeping: sleeping,
  	dizzy_face: dizzy_face,
  	no_mouth: no_mouth,
  	mask: mask,
  	smile_cat: smile_cat,
  	joy_cat: joy_cat,
  	smiley_cat: smiley_cat,
  	heart_eyes_cat: heart_eyes_cat,
  	smirk_cat: smirk_cat,
  	kissing_cat: kissing_cat,
  	pouting_cat: pouting_cat,
  	crying_cat_face: crying_cat_face,
  	scream_cat: scream_cat,
  	slightly_frowning_face: slightly_frowning_face,
  	slightly_smiling_face: slightly_smiling_face,
  	upside_down_face: upside_down_face,
  	face_with_rolling_eyes: face_with_rolling_eyes,
  	no_good: no_good,
  	ok_woman: ok_woman,
  	bow: bow,
  	see_no_evil: see_no_evil,
  	hear_no_evil: hear_no_evil,
  	speak_no_evil: speak_no_evil,
  	raising_hand: raising_hand,
  	raised_hands: raised_hands,
  	person_frowning: person_frowning,
  	person_with_pouting_face: person_with_pouting_face,
  	pray: pray,
  	rocket: rocket,
  	helicopter: helicopter,
  	steam_locomotive: steam_locomotive,
  	railway_car: railway_car,
  	bullettrain_side: bullettrain_side,
  	bullettrain_front: bullettrain_front,
  	train2: train2,
  	metro: metro,
  	light_rail: light_rail,
  	station: station,
  	tram: tram,
  	train: train,
  	bus: bus,
  	oncoming_bus: oncoming_bus,
  	trolleybus: trolleybus,
  	busstop: busstop,
  	minibus: minibus,
  	ambulance: ambulance,
  	fire_engine: fire_engine,
  	police_car: police_car,
  	oncoming_police_car: oncoming_police_car,
  	taxi: taxi,
  	oncoming_taxi: oncoming_taxi,
  	car: car,
  	red_car: red_car,
  	oncoming_automobile: oncoming_automobile,
  	blue_car: blue_car,
  	truck: truck,
  	articulated_lorry: articulated_lorry,
  	tractor: tractor,
  	monorail: monorail,
  	mountain_railway: mountain_railway,
  	suspension_railway: suspension_railway,
  	mountain_cableway: mountain_cableway,
  	aerial_tramway: aerial_tramway,
  	ship: ship,
  	rowboat: rowboat,
  	speedboat: speedboat,
  	traffic_light: traffic_light,
  	vertical_traffic_light: vertical_traffic_light,
  	construction: construction,
  	rotating_light: rotating_light,
  	triangular_flag_on_post: triangular_flag_on_post,
  	door: door,
  	no_entry_sign: no_entry_sign,
  	smoking: smoking,
  	no_smoking: no_smoking,
  	put_litter_in_its_place: put_litter_in_its_place,
  	do_not_litter: do_not_litter,
  	potable_water: potable_water,
  	"non-potable_water": "🚱",
  	bike: bike,
  	no_bicycles: no_bicycles,
  	bicyclist: bicyclist,
  	mountain_bicyclist: mountain_bicyclist,
  	walking: walking,
  	no_pedestrians: no_pedestrians,
  	children_crossing: children_crossing,
  	mens: mens,
  	womens: womens,
  	restroom: restroom,
  	baby_symbol: baby_symbol,
  	toilet: toilet,
  	wc: wc,
  	shower: shower,
  	bath: bath,
  	bathtub: bathtub,
  	passport_control: passport_control,
  	customs: customs,
  	baggage_claim: baggage_claim,
  	left_luggage: left_luggage,
  	couch_and_lamp: couch_and_lamp,
  	sleeping_accommodation: sleeping_accommodation,
  	shopping_bags: shopping_bags,
  	bellhop_bell: bellhop_bell,
  	bed: bed,
  	place_of_worship: place_of_worship,
  	hammer_and_wrench: hammer_and_wrench,
  	shield: shield,
  	oil_drum: oil_drum,
  	motorway: motorway,
  	railway_track: railway_track,
  	motor_boat: motor_boat,
  	small_airplane: small_airplane,
  	airplane_departure: airplane_departure,
  	airplane_arriving: airplane_arriving,
  	passenger_ship: passenger_ship,
  	zipper_mouth_face: zipper_mouth_face,
  	money_mouth_face: money_mouth_face,
  	face_with_thermometer: face_with_thermometer,
  	nerd_face: nerd_face,
  	thinking_face: thinking_face,
  	face_with_head_bandage: face_with_head_bandage,
  	robot_face: robot_face,
  	hugging_face: hugging_face,
  	the_horns: the_horns,
  	sign_of_the_horns: sign_of_the_horns,
  	crab: crab,
  	lion_face: lion_face,
  	scorpion: scorpion,
  	turkey: turkey,
  	unicorn_face: unicorn_face,
  	cheese_wedge: cheese_wedge,
  	hash: hash,
  	keycap_star: keycap_star,
  	zero: zero,
  	one: one,
  	two: two,
  	three: three,
  	four: four,
  	five: five,
  	six: six,
  	seven: seven,
  	eight: eight,
  	nine: nine,
  	"flag-ac": "🇦🇨",
  	"flag-ad": "🇦🇩",
  	"flag-ae": "🇦🇪",
  	"flag-af": "🇦🇫",
  	"flag-ag": "🇦🇬",
  	"flag-ai": "🇦🇮",
  	"flag-al": "🇦🇱",
  	"flag-am": "🇦🇲",
  	"flag-ao": "🇦🇴",
  	"flag-aq": "🇦🇶",
  	"flag-ar": "🇦🇷",
  	"flag-as": "🇦🇸",
  	"flag-at": "🇦🇹",
  	"flag-au": "🇦🇺",
  	"flag-aw": "🇦🇼",
  	"flag-ax": "🇦🇽",
  	"flag-az": "🇦🇿",
  	"flag-ba": "🇧🇦",
  	"flag-bb": "🇧🇧",
  	"flag-bd": "🇧🇩",
  	"flag-be": "🇧🇪",
  	"flag-bf": "🇧🇫",
  	"flag-bg": "🇧🇬",
  	"flag-bh": "🇧🇭",
  	"flag-bi": "🇧🇮",
  	"flag-bj": "🇧🇯",
  	"flag-bl": "🇧🇱",
  	"flag-bm": "🇧🇲",
  	"flag-bn": "🇧🇳",
  	"flag-bo": "🇧🇴",
  	"flag-bq": "🇧🇶",
  	"flag-br": "🇧🇷",
  	"flag-bs": "🇧🇸",
  	"flag-bt": "🇧🇹",
  	"flag-bv": "🇧🇻",
  	"flag-bw": "🇧🇼",
  	"flag-by": "🇧🇾",
  	"flag-bz": "🇧🇿",
  	"flag-ca": "🇨🇦",
  	"flag-cc": "🇨🇨",
  	"flag-cd": "🇨🇩",
  	"flag-cf": "🇨🇫",
  	"flag-cg": "🇨🇬",
  	"flag-ch": "🇨🇭",
  	"flag-ci": "🇨🇮",
  	"flag-ck": "🇨🇰",
  	"flag-cl": "🇨🇱",
  	"flag-cm": "🇨🇲",
  	"flag-cn": "🇨🇳",
  	cn: cn$2,
  	"flag-co": "🇨🇴",
  	"flag-cp": "🇨🇵",
  	"flag-cr": "🇨🇷",
  	"flag-cu": "🇨🇺",
  	"flag-cv": "🇨🇻",
  	"flag-cw": "🇨🇼",
  	"flag-cx": "🇨🇽",
  	"flag-cy": "🇨🇾",
  	"flag-cz": "🇨🇿",
  	"flag-de": "🇩🇪",
  	de: de,
  	"flag-dg": "🇩🇬",
  	"flag-dj": "🇩🇯",
  	"flag-dk": "🇩🇰",
  	"flag-dm": "🇩🇲",
  	"flag-do": "🇩🇴",
  	"flag-dz": "🇩🇿",
  	"flag-ea": "🇪🇦",
  	"flag-ec": "🇪🇨",
  	"flag-ee": "🇪🇪",
  	"flag-eg": "🇪🇬",
  	"flag-eh": "🇪🇭",
  	"flag-er": "🇪🇷",
  	"flag-es": "🇪🇸",
  	es: es,
  	"flag-et": "🇪🇹",
  	"flag-eu": "🇪🇺",
  	"flag-fi": "🇫🇮",
  	"flag-fj": "🇫🇯",
  	"flag-fk": "🇫🇰",
  	"flag-fm": "🇫🇲",
  	"flag-fo": "🇫🇴",
  	"flag-fr": "🇫🇷",
  	fr: fr,
  	"flag-ga": "🇬🇦",
  	"flag-gb": "🇬🇧",
  	gb: gb,
  	uk: uk,
  	"flag-gd": "🇬🇩",
  	"flag-ge": "🇬🇪",
  	"flag-gf": "🇬🇫",
  	"flag-gg": "🇬🇬",
  	"flag-gh": "🇬🇭",
  	"flag-gi": "🇬🇮",
  	"flag-gl": "🇬🇱",
  	"flag-gm": "🇬🇲",
  	"flag-gn": "🇬🇳",
  	"flag-gp": "🇬🇵",
  	"flag-gq": "🇬🇶",
  	"flag-gr": "🇬🇷",
  	"flag-gs": "🇬🇸",
  	"flag-gt": "🇬🇹",
  	"flag-gu": "🇬🇺",
  	"flag-gw": "🇬🇼",
  	"flag-gy": "🇬🇾",
  	"flag-hk": "🇭🇰",
  	"flag-hm": "🇭🇲",
  	"flag-hn": "🇭🇳",
  	"flag-hr": "🇭🇷",
  	"flag-ht": "🇭🇹",
  	"flag-hu": "🇭🇺",
  	"flag-ic": "🇮🇨",
  	"flag-id": "🇮🇩",
  	"flag-ie": "🇮🇪",
  	"flag-il": "🇮🇱",
  	"flag-im": "🇮🇲",
  	"flag-in": "🇮🇳",
  	"flag-io": "🇮🇴",
  	"flag-iq": "🇮🇶",
  	"flag-ir": "🇮🇷",
  	"flag-is": "🇮🇸",
  	"flag-it": "🇮🇹",
  	it: it,
  	"flag-je": "🇯🇪",
  	"flag-jm": "🇯🇲",
  	"flag-jo": "🇯🇴",
  	"flag-jp": "🇯🇵",
  	jp: jp,
  	"flag-ke": "🇰🇪",
  	"flag-kg": "🇰🇬",
  	"flag-kh": "🇰🇭",
  	"flag-ki": "🇰🇮",
  	"flag-km": "🇰🇲",
  	"flag-kn": "🇰🇳",
  	"flag-kp": "🇰🇵",
  	"flag-kr": "🇰🇷",
  	kr: kr,
  	"flag-kw": "🇰🇼",
  	"flag-ky": "🇰🇾",
  	"flag-kz": "🇰🇿",
  	"flag-la": "🇱🇦",
  	"flag-lb": "🇱🇧",
  	"flag-lc": "🇱🇨",
  	"flag-li": "🇱🇮",
  	"flag-lk": "🇱🇰",
  	"flag-lr": "🇱🇷",
  	"flag-ls": "🇱🇸",
  	"flag-lt": "🇱🇹",
  	"flag-lu": "🇱🇺",
  	"flag-lv": "🇱🇻",
  	"flag-ly": "🇱🇾",
  	"flag-ma": "🇲🇦",
  	"flag-mc": "🇲🇨",
  	"flag-md": "🇲🇩",
  	"flag-me": "🇲🇪",
  	"flag-mf": "🇲🇫",
  	"flag-mg": "🇲🇬",
  	"flag-mh": "🇲🇭",
  	"flag-mk": "🇲🇰",
  	"flag-ml": "🇲🇱",
  	"flag-mm": "🇲🇲",
  	"flag-mn": "🇲🇳",
  	"flag-mo": "🇲🇴",
  	"flag-mp": "🇲🇵",
  	"flag-mq": "🇲🇶",
  	"flag-mr": "🇲🇷",
  	"flag-ms": "🇲🇸",
  	"flag-mt": "🇲🇹",
  	"flag-mu": "🇲🇺",
  	"flag-mv": "🇲🇻",
  	"flag-mw": "🇲🇼",
  	"flag-mx": "🇲🇽",
  	"flag-my": "🇲🇾",
  	"flag-mz": "🇲🇿",
  	"flag-na": "🇳🇦",
  	"flag-nc": "🇳🇨",
  	"flag-ne": "🇳🇪",
  	"flag-nf": "🇳🇫",
  	"flag-ng": "🇳🇬",
  	"flag-ni": "🇳🇮",
  	"flag-nl": "🇳🇱",
  	"flag-no": "🇳🇴",
  	"flag-np": "🇳🇵",
  	"flag-nr": "🇳🇷",
  	"flag-nu": "🇳🇺",
  	"flag-nz": "🇳🇿",
  	"flag-om": "🇴🇲",
  	"flag-pa": "🇵🇦",
  	"flag-pe": "🇵🇪",
  	"flag-pf": "🇵🇫",
  	"flag-pg": "🇵🇬",
  	"flag-ph": "🇵🇭",
  	"flag-pk": "🇵🇰",
  	"flag-pl": "🇵🇱",
  	"flag-pm": "🇵🇲",
  	"flag-pn": "🇵🇳",
  	"flag-pr": "🇵🇷",
  	"flag-ps": "🇵🇸",
  	"flag-pt": "🇵🇹",
  	"flag-pw": "🇵🇼",
  	"flag-py": "🇵🇾",
  	"flag-qa": "🇶🇦",
  	"flag-re": "🇷🇪",
  	"flag-ro": "🇷🇴",
  	"flag-rs": "🇷🇸",
  	"flag-ru": "🇷🇺",
  	ru: ru,
  	"flag-rw": "🇷🇼",
  	"flag-sa": "🇸🇦",
  	"flag-sb": "🇸🇧",
  	"flag-sc": "🇸🇨",
  	"flag-sd": "🇸🇩",
  	"flag-se": "🇸🇪",
  	"flag-sg": "🇸🇬",
  	"flag-sh": "🇸🇭",
  	"flag-si": "🇸🇮",
  	"flag-sj": "🇸🇯",
  	"flag-sk": "🇸🇰",
  	"flag-sl": "🇸🇱",
  	"flag-sm": "🇸🇲",
  	"flag-sn": "🇸🇳",
  	"flag-so": "🇸🇴",
  	"flag-sr": "🇸🇷",
  	"flag-ss": "🇸🇸",
  	"flag-st": "🇸🇹",
  	"flag-sv": "🇸🇻",
  	"flag-sx": "🇸🇽",
  	"flag-sy": "🇸🇾",
  	"flag-sz": "🇸🇿",
  	"flag-ta": "🇹🇦",
  	"flag-tc": "🇹🇨",
  	"flag-td": "🇹🇩",
  	"flag-tf": "🇹🇫",
  	"flag-tg": "🇹🇬",
  	"flag-th": "🇹🇭",
  	"flag-tj": "🇹🇯",
  	"flag-tk": "🇹🇰",
  	"flag-tl": "🇹🇱",
  	"flag-tm": "🇹🇲",
  	"flag-tn": "🇹🇳",
  	"flag-to": "🇹🇴",
  	"flag-tr": "🇹🇷",
  	"flag-tt": "🇹🇹",
  	"flag-tv": "🇹🇻",
  	"flag-tw": "🇹🇼",
  	"flag-tz": "🇹🇿",
  	"flag-ua": "🇺🇦",
  	"flag-ug": "🇺🇬",
  	"flag-um": "🇺🇲",
  	"flag-us": "🇺🇸",
  	us: us,
  	"flag-uy": "🇺🇾",
  	"flag-uz": "🇺🇿",
  	"flag-va": "🇻🇦",
  	"flag-vc": "🇻🇨",
  	"flag-ve": "🇻🇪",
  	"flag-vg": "🇻🇬",
  	"flag-vi": "🇻🇮",
  	"flag-vn": "🇻🇳",
  	"flag-vu": "🇻🇺",
  	"flag-wf": "🇼🇫",
  	"flag-ws": "🇼🇸",
  	"flag-xk": "🇽🇰",
  	"flag-ye": "🇾🇪",
  	"flag-yt": "🇾🇹",
  	"flag-za": "🇿🇦",
  	"flag-zm": "🇿🇲",
  	"flag-zw": "🇿🇼",
  	"man-man-boy": "👨‍👨‍👦",
  	"man-man-boy-boy": "👨‍👨‍👦‍👦",
  	"man-man-girl": "👨‍👨‍👧",
  	"man-man-girl-boy": "👨‍👨‍👧‍👦",
  	"man-man-girl-girl": "👨‍👨‍👧‍👧",
  	"man-woman-boy-boy": "👨‍👩‍👦‍👦",
  	"man-woman-girl": "👨‍👩‍👧",
  	"man-woman-girl-boy": "👨‍👩‍👧‍👦",
  	"man-woman-girl-girl": "👨‍👩‍👧‍👧",
  	"man-heart-man": "👨‍❤️‍👨",
  	"man-kiss-man": "👨‍❤️‍💋‍👨",
  	"woman-woman-boy": "👩‍👩‍👦",
  	"woman-woman-boy-boy": "👩‍👩‍👦‍👦",
  	"woman-woman-girl": "👩‍👩‍👧",
  	"woman-woman-girl-boy": "👩‍👩‍👧‍👦",
  	"woman-woman-girl-girl": "👩‍👩‍👧‍👧",
  	"woman-heart-woman": "👩‍❤️‍👩",
  	"woman-kiss-woman": "👩‍❤️‍💋‍👩"
  };

  var emoji$1 = /*#__PURE__*/Object.freeze({
    interrobang: interrobang,
    tm: tm,
    information_source: information_source,
    left_right_arrow: left_right_arrow,
    arrow_up_down: arrow_up_down,
    arrow_upper_left: arrow_upper_left,
    arrow_upper_right: arrow_upper_right,
    arrow_lower_right: arrow_lower_right,
    arrow_lower_left: arrow_lower_left,
    keyboard: keyboard,
    sunny: sunny,
    cloud: cloud,
    umbrella: umbrella,
    showman: showman,
    comet: comet,
    ballot_box_with_check: ballot_box_with_check,
    coffee: coffee,
    shamrock: shamrock,
    skull_and_crossbones: skull_and_crossbones,
    radioactive_sign: radioactive_sign,
    biohazard_sign: biohazard_sign,
    orthodox_cross: orthodox_cross,
    wheel_of_dharma: wheel_of_dharma,
    white_frowning_face: white_frowning_face,
    aries: aries,
    taurus: taurus,
    sagittarius: sagittarius,
    capricorn: capricorn,
    aquarius: aquarius,
    pisces: pisces,
    spades: spades,
    clubs: clubs,
    hearts: hearts,
    diamonds: diamonds,
    hotsprings: hotsprings,
    hammer_and_pick: hammer_and_pick,
    anchor: anchor,
    crossed_swords: crossed_swords,
    scales: scales,
    alembic: alembic,
    gear: gear,
    scissors: scissors,
    white_check_mark: white_check_mark,
    airplane: airplane,
    email: email,
    envelope: envelope,
    black_nib: black_nib,
    heavy_check_mark: heavy_check_mark,
    heavy_multiplication_x: heavy_multiplication_x,
    star_of_david: star_of_david,
    sparkles: sparkles,
    eight_spoked_asterisk: eight_spoked_asterisk,
    eight_pointed_black_star: eight_pointed_black_star,
    snowflake: snowflake,
    sparkle: sparkle,
    question: question,
    grey_question: grey_question,
    grey_exclamation: grey_exclamation,
    exclamation: exclamation,
    heavy_exclamation_mark: heavy_exclamation_mark,
    heavy_heart_exclamation_mark_ornament: heavy_heart_exclamation_mark_ornament,
    heart: heart,
    heavy_plus_sign: heavy_plus_sign,
    heavy_minus_sign: heavy_minus_sign,
    heavy_division_sign: heavy_division_sign,
    arrow_heading_up: arrow_heading_up,
    arrow_heading_down: arrow_heading_down,
    wavy_dash: wavy_dash,
    congratulations: congratulations,
    secret: secret,
    copyright: copyright,
    registered: registered,
    bangbang: bangbang,
    leftwards_arrow_with_hook: leftwards_arrow_with_hook,
    arrow_right_hook: arrow_right_hook,
    watch: watch,
    hourglass: hourglass,
    fast_forward: fast_forward,
    rewind: rewind,
    arrow_double_up: arrow_double_up,
    arrow_double_down: arrow_double_down,
    black_right_pointing_double_triangle_with_vertical_bar: black_right_pointing_double_triangle_with_vertical_bar,
    black_left_pointing_double_triangle_with_vertical_bar: black_left_pointing_double_triangle_with_vertical_bar,
    black_right_pointing_triangle_with_double_vertical_bar: black_right_pointing_triangle_with_double_vertical_bar,
    alarm_clock: alarm_clock,
    stopwatch: stopwatch,
    timer_clock: timer_clock,
    hourglass_flowing_sand: hourglass_flowing_sand,
    double_vertical_bar: double_vertical_bar,
    black_square_for_stop: black_square_for_stop,
    black_circle_for_record: black_circle_for_record,
    m: m,
    black_small_square: black_small_square,
    white_small_square: white_small_square,
    arrow_forward: arrow_forward,
    arrow_backward: arrow_backward,
    white_medium_square: white_medium_square,
    black_medium_square: black_medium_square,
    white_medium_small_square: white_medium_small_square,
    black_medium_small_square: black_medium_small_square,
    phone: phone,
    telephone: telephone,
    point_up: point_up,
    star_and_crescent: star_and_crescent,
    peace_symbol: peace_symbol,
    yin_yang: yin_yang,
    relaxed: relaxed,
    gemini: gemini,
    cancer: cancer,
    leo: leo,
    virgo: virgo,
    libra: libra,
    scorpius: scorpius,
    recycle: recycle,
    wheelchair: wheelchair,
    atom_symbol: atom_symbol,
    fleur_de_lis: fleur_de_lis,
    warning: warning$1,
    zap: zap,
    white_circle: white_circle,
    black_circle: black_circle,
    coffin: coffin,
    funeral_urn: funeral_urn,
    soccer: soccer,
    baseball: baseball,
    snowman: snowman,
    partly_sunny: partly_sunny,
    thunder_cloud_and_rain: thunder_cloud_and_rain,
    ophiuchus: ophiuchus,
    pick: pick,
    helmet_with_white_cross: helmet_with_white_cross,
    chains: chains,
    no_entry: no_entry,
    shinto_shrine: shinto_shrine,
    church: church,
    mountain: mountain,
    umbrella_on_ground: umbrella_on_ground,
    fountain: fountain,
    golf: golf,
    ferry: ferry,
    boat: boat,
    sailboat: sailboat,
    skier: skier,
    ice_skate: ice_skate,
    person_with_ball: person_with_ball,
    tent: tent,
    fuelpump: fuelpump,
    fist: fist,
    hand: hand,
    raised_hand: raised_hand,
    v: v,
    writing_hand: writing_hand,
    pencil2: pencil2,
    latin_cross: latin_cross,
    x: x,
    negative_squared_cross_mark: negative_squared_cross_mark,
    arrow_right: arrow_right,
    curly_loop: curly_loop,
    loop: loop,
    arrow_left: arrow_left,
    arrow_up: arrow_up,
    arrow_down: arrow_down,
    black_large_square: black_large_square,
    white_large_square: white_large_square,
    star: star,
    o: o,
    part_alternation_mark: part_alternation_mark,
    mahjong: mahjong,
    black_joker: black_joker,
    a: a,
    b: b,
    o2: o2,
    parking: parking,
    ab: ab,
    cl: cl,
    cool: cool,
    free: free,
    id: id$1,
    ng: ng,
    ok: ok,
    sos: sos,
    up: up,
    vs: vs,
    koko: koko,
    sa: sa,
    u7121: u7121,
    u6307: u6307,
    u7981: u7981,
    u7a7a: u7a7a,
    u5408: u5408,
    u6e80: u6e80,
    u6709: u6709,
    u6708: u6708,
    u7533: u7533,
    u5272: u5272,
    u55b6: u55b6,
    ideograph_advantage: ideograph_advantage,
    accept: accept,
    cyclone: cyclone,
    foggy: foggy,
    closed_umbrella: closed_umbrella,
    night_with_stars: night_with_stars,
    sunrise_over_mountains: sunrise_over_mountains,
    sunrise: sunrise,
    city_sunset: city_sunset,
    city_sunrise: city_sunrise,
    rainbow: rainbow,
    bridge_at_night: bridge_at_night,
    ocean: ocean,
    volcano: volcano,
    milky_way: milky_way,
    earth_africa: earth_africa,
    earth_americas: earth_americas,
    earth_asia: earth_asia,
    globe_with_meridians: globe_with_meridians,
    new_moon: new_moon,
    waxing_crescent_moon: waxing_crescent_moon,
    first_quarter_moon: first_quarter_moon,
    moon: moon,
    waxing_gibbous_moon: waxing_gibbous_moon,
    full_moon: full_moon,
    waning_gibbous_moon: waning_gibbous_moon,
    last_quarter_moon: last_quarter_moon,
    waning_crescent_moon: waning_crescent_moon,
    crescent_moon: crescent_moon,
    new_moon_with_face: new_moon_with_face,
    first_quarter_moon_with_face: first_quarter_moon_with_face,
    last_quarter_moon_with_face: last_quarter_moon_with_face,
    full_moon_with_face: full_moon_with_face,
    sun_with_face: sun_with_face,
    star2: star2,
    stars: stars,
    thermometer: thermometer,
    mostly_sunny: mostly_sunny,
    sun_small_cloud: sun_small_cloud,
    barely_sunny: barely_sunny,
    sun_behind_cloud: sun_behind_cloud,
    partly_sunny_rain: partly_sunny_rain,
    sun_behind_rain_cloud: sun_behind_rain_cloud,
    rain_cloud: rain_cloud,
    snow_cloud: snow_cloud,
    lightning: lightning,
    lightning_cloud: lightning_cloud,
    tornado: tornado,
    tornado_cloud: tornado_cloud,
    fog: fog,
    wind_blowing_face: wind_blowing_face,
    hotdog: hotdog,
    taco: taco,
    burrito: burrito,
    chestnut: chestnut,
    seedling: seedling,
    evergreen_tree: evergreen_tree,
    deciduous_tree: deciduous_tree,
    palm_tree: palm_tree,
    cactus: cactus,
    hot_pepper: hot_pepper,
    tulip: tulip,
    cherry_blossom: cherry_blossom,
    rose: rose,
    hibiscus: hibiscus,
    sunflower: sunflower,
    blossom: blossom,
    corn: corn,
    ear_of_rice: ear_of_rice,
    herb: herb,
    four_leaf_clover: four_leaf_clover,
    maple_leaf: maple_leaf,
    fallen_leaf: fallen_leaf,
    leaves: leaves,
    mushroom: mushroom,
    tomato: tomato,
    eggplant: eggplant,
    grapes: grapes,
    melon: melon,
    watermelon: watermelon,
    tangerine: tangerine,
    lemon: lemon,
    banana: banana,
    pineapple: pineapple,
    apple: apple,
    green_apple: green_apple,
    pear: pear,
    peach: peach,
    cherries: cherries,
    strawberry: strawberry,
    hamburger: hamburger,
    pizza: pizza,
    meat_on_bone: meat_on_bone,
    poultry_leg: poultry_leg,
    rice_cracker: rice_cracker,
    rice_ball: rice_ball,
    rice: rice,
    curry: curry$1,
    ramen: ramen,
    spaghetti: spaghetti,
    bread: bread,
    fries: fries,
    sweet_potato: sweet_potato,
    dango: dango,
    oden: oden,
    sushi: sushi,
    fried_shrimp: fried_shrimp,
    fish_cake: fish_cake,
    icecream: icecream,
    shaved_ice: shaved_ice,
    ice_cream: ice_cream,
    doughnut: doughnut,
    cookie: cookie,
    chocolate_bar: chocolate_bar,
    candy: candy,
    lollipop: lollipop,
    custard: custard,
    honey_pot: honey_pot,
    cake: cake,
    bento: bento,
    stew: stew,
    egg: egg,
    fork_and_knife: fork_and_knife,
    tea: tea,
    sake: sake,
    wine_glass: wine_glass,
    cocktail: cocktail,
    tropical_drink: tropical_drink,
    beer: beer,
    beers: beers,
    baby_bottle: baby_bottle,
    knife_fork_plate: knife_fork_plate,
    champagne: champagne,
    popcorn: popcorn,
    ribbon: ribbon,
    gift: gift,
    birthday: birthday,
    jack_o_lantern: jack_o_lantern,
    christmas_tree: christmas_tree,
    santa: santa,
    fireworks: fireworks,
    sparkler: sparkler,
    balloon: balloon,
    tada: tada,
    confetti_ball: confetti_ball,
    tanabata_tree: tanabata_tree,
    crossed_flags: crossed_flags,
    bamboo: bamboo,
    dolls: dolls,
    flags: flags,
    wind_chime: wind_chime,
    rice_scene: rice_scene,
    school_satchel: school_satchel,
    mortar_board: mortar_board,
    medal: medal,
    reminder_ribbon: reminder_ribbon,
    studio_microphone: studio_microphone,
    level_slider: level_slider,
    control_knobs: control_knobs,
    film_frames: film_frames,
    admission_tickets: admission_tickets,
    carousel_horse: carousel_horse,
    ferris_wheel: ferris_wheel,
    roller_coaster: roller_coaster,
    fishing_pole_and_fish: fishing_pole_and_fish,
    microphone: microphone,
    movie_camera: movie_camera,
    cinema: cinema,
    headphones: headphones,
    art: art,
    tophat: tophat,
    circus_tent: circus_tent,
    ticket: ticket,
    clapper: clapper,
    performing_arts: performing_arts,
    video_game: video_game,
    dart: dart,
    slot_machine: slot_machine,
    game_die: game_die,
    bowling: bowling,
    flower_playing_cards: flower_playing_cards,
    musical_note: musical_note,
    notes: notes,
    saxophone: saxophone,
    guitar: guitar,
    musical_keyboard: musical_keyboard,
    trumpet: trumpet,
    violin: violin,
    musical_score: musical_score,
    running_shirt_with_sash: running_shirt_with_sash,
    tennis: tennis,
    ski: ski,
    basketball: basketball,
    checkered_flag: checkered_flag,
    snowboarder: snowboarder,
    runner: runner,
    running: running,
    surfer: surfer,
    sports_medal: sports_medal,
    trophy: trophy,
    horse_racing: horse_racing,
    football: football,
    rugby_football: rugby_football,
    swimmer: swimmer,
    weight_lifter: weight_lifter,
    golfer: golfer,
    racing_motorcycle: racing_motorcycle,
    racing_car: racing_car,
    cricket_bat_and_ball: cricket_bat_and_ball,
    volleyball: volleyball,
    field_hockey_stick_and_ball: field_hockey_stick_and_ball,
    ice_hockey_stick_and_puck: ice_hockey_stick_and_puck,
    table_tennis_paddle_and_ball: table_tennis_paddle_and_ball,
    snow_capped_mountain: snow_capped_mountain,
    camping: camping,
    beach_with_umbrella: beach_with_umbrella,
    building_construction: building_construction,
    house_buildings: house_buildings,
    cityscape: cityscape,
    derelict_house_building: derelict_house_building,
    classical_building: classical_building,
    desert: desert,
    desert_island: desert_island,
    national_park: national_park,
    stadium: stadium,
    house: house,
    house_with_garden: house_with_garden,
    office: office,
    post_office: post_office,
    european_post_office: european_post_office,
    hospital: hospital,
    bank: bank,
    atm: atm,
    hotel: hotel,
    love_hotel: love_hotel,
    convenience_store: convenience_store,
    school: school,
    department_store: department_store,
    factory: factory,
    izakaya_lantern: izakaya_lantern,
    lantern: lantern,
    japanese_castle: japanese_castle,
    european_castle: european_castle,
    waving_white_flag: waving_white_flag,
    waving_black_flag: waving_black_flag,
    rosette: rosette,
    label: label,
    badminton_racquet_and_shuttlecock: badminton_racquet_and_shuttlecock,
    bow_and_arrow: bow_and_arrow,
    amphora: amphora,
    rat: rat,
    mouse2: mouse2,
    ox: ox,
    water_buffalo: water_buffalo,
    cow2: cow2,
    tiger2: tiger2,
    leopard: leopard,
    rabbit2: rabbit2,
    cat2: cat2,
    dragon: dragon,
    crocodile: crocodile,
    whale2: whale2,
    snail: snail,
    snake: snake,
    racehorse: racehorse,
    ram: ram,
    goat: goat,
    sheep: sheep,
    monkey: monkey,
    rooster: rooster,
    chicken: chicken,
    dog2: dog2,
    pig2: pig2,
    boar: boar,
    elephant: elephant,
    octopus: octopus,
    shell: shell,
    bug: bug,
    ant: ant,
    bee: bee,
    honeybee: honeybee,
    beetle: beetle,
    fish: fish,
    tropical_fish: tropical_fish,
    blowfish: blowfish,
    turtle: turtle,
    hatching_chick: hatching_chick,
    baby_chick: baby_chick,
    hatched_chick: hatched_chick,
    bird: bird,
    penguin: penguin,
    koala: koala,
    poodle: poodle,
    dromedary_camel: dromedary_camel,
    camel: camel,
    dolphin: dolphin,
    flipper: flipper,
    mouse: mouse,
    cow: cow,
    tiger: tiger,
    rabbit: rabbit,
    cat: cat,
    dragon_face: dragon_face,
    whale: whale,
    horse: horse,
    monkey_face: monkey_face,
    dog: dog,
    pig: pig,
    frog: frog,
    hamster: hamster,
    wolf: wolf,
    bear: bear,
    panda_face: panda_face,
    pig_nose: pig_nose,
    feet: feet,
    paw_prints: paw_prints,
    chipmunk: chipmunk,
    eyes: eyes,
    eye: eye,
    ear: ear,
    nose: nose,
    lips: lips,
    tongue: tongue,
    point_up_2: point_up_2,
    point_down: point_down,
    point_left: point_left,
    point_right: point_right,
    facepunch: facepunch,
    punch: punch,
    wave: wave,
    ok_hand: ok_hand,
    thumbsup: thumbsup,
    thumbsdown: thumbsdown,
    clap: clap,
    open_hands: open_hands,
    crown: crown,
    womans_hat: womans_hat,
    eyeglasses: eyeglasses,
    necktie: necktie,
    shirt: shirt,
    tshirt: tshirt,
    jeans: jeans,
    dress: dress,
    kimono: kimono,
    bikini: bikini,
    womans_clothes: womans_clothes,
    purse: purse,
    handbag: handbag,
    pouch: pouch,
    mans_shoe: mans_shoe,
    shoe: shoe,
    athletic_shoe: athletic_shoe,
    high_heel: high_heel,
    sandal: sandal,
    boot: boot,
    footprints: footprints,
    bust_in_silhouette: bust_in_silhouette,
    busts_in_silhouette: busts_in_silhouette,
    boy: boy,
    girl: girl,
    man: man,
    woman: woman,
    family: family,
    couple: couple,
    man_and_woman_holding_hands: man_and_woman_holding_hands,
    two_men_holding_hands: two_men_holding_hands,
    two_women_holding_hands: two_women_holding_hands,
    cop: cop,
    dancers: dancers,
    bride_with_veil: bride_with_veil,
    person_with_blond_hair: person_with_blond_hair,
    man_with_gua_pi_mao: man_with_gua_pi_mao,
    man_with_turban: man_with_turban,
    older_man: older_man,
    older_woman: older_woman,
    baby: baby,
    construction_worker: construction_worker,
    princess: princess,
    japanese_ogre: japanese_ogre,
    japanese_goblin: japanese_goblin,
    ghost: ghost,
    angel: angel,
    alien: alien,
    space_invader: space_invader,
    imp: imp,
    skull: skull,
    information_desk_person: information_desk_person,
    guardsman: guardsman,
    dancer: dancer,
    lipstick: lipstick,
    nail_care: nail_care,
    massage: massage,
    haircut: haircut,
    barber: barber,
    syringe: syringe,
    pill: pill,
    kiss: kiss,
    love_letter: love_letter,
    ring: ring,
    gem: gem,
    couplekiss: couplekiss,
    bouquet: bouquet,
    couple_with_heart: couple_with_heart,
    wedding: wedding,
    heartbeat: heartbeat,
    broken_heart: broken_heart,
    two_hearts: two_hearts,
    sparkling_heart: sparkling_heart,
    heartpulse: heartpulse,
    cupid: cupid,
    blue_heart: blue_heart,
    green_heart: green_heart,
    yellow_heart: yellow_heart,
    purple_heart: purple_heart,
    gift_heart: gift_heart,
    revolving_hearts: revolving_hearts,
    heart_decoration: heart_decoration,
    diamond_shape_with_a_dot_inside: diamond_shape_with_a_dot_inside,
    bulb: bulb,
    anger: anger,
    bomb: bomb,
    zzz: zzz,
    boom: boom,
    collision: collision,
    sweat_drops: sweat_drops,
    droplet: droplet,
    dash: dash,
    hankey: hankey,
    poop: poop,
    shit: shit,
    muscle: muscle,
    dizzy: dizzy,
    speech_balloon: speech_balloon,
    thought_balloon: thought_balloon,
    white_flower: white_flower,
    moneybag: moneybag,
    currency_exchange: currency_exchange,
    heavy_dollar_sign: heavy_dollar_sign,
    credit_card: credit_card,
    yen: yen,
    dollar: dollar,
    euro: euro,
    pound: pound,
    money_with_wings: money_with_wings,
    chart: chart,
    seat: seat,
    computer: computer,
    briefcase: briefcase,
    minidisc: minidisc,
    floppy_disk: floppy_disk,
    cd: cd,
    dvd: dvd,
    file_folder: file_folder,
    open_file_folder: open_file_folder,
    page_with_curl: page_with_curl,
    page_facing_up: page_facing_up,
    date: date,
    calendar: calendar,
    card_index: card_index,
    chart_with_upwards_trend: chart_with_upwards_trend,
    chart_with_downwards_trend: chart_with_downwards_trend,
    bar_chart: bar_chart,
    clipboard: clipboard,
    pushpin: pushpin,
    round_pushpin: round_pushpin,
    paperclip: paperclip,
    straight_ruler: straight_ruler,
    triangular_ruler: triangular_ruler,
    bookmark_tabs: bookmark_tabs,
    ledger: ledger,
    notebook: notebook,
    notebook_with_decorative_cover: notebook_with_decorative_cover,
    closed_book: closed_book,
    book: book,
    open_book: open_book,
    green_book: green_book,
    blue_book: blue_book,
    orange_book: orange_book,
    books: books,
    name_badge: name_badge,
    scroll: scroll,
    memo: memo,
    pencil: pencil,
    telephone_receiver: telephone_receiver,
    pager: pager,
    fax: fax,
    satellite: satellite,
    loudspeaker: loudspeaker,
    mega: mega,
    outbox_tray: outbox_tray,
    inbox_tray: inbox_tray,
    incoming_envelope: incoming_envelope,
    envelope_with_arrow: envelope_with_arrow,
    mailbox_closed: mailbox_closed,
    mailbox: mailbox,
    mailbox_with_mail: mailbox_with_mail,
    mailbox_with_no_mail: mailbox_with_no_mail,
    postbox: postbox,
    postal_horn: postal_horn,
    newspaper: newspaper,
    iphone: iphone,
    calling: calling,
    vibration_mode: vibration_mode,
    mobile_phone_off: mobile_phone_off,
    no_mobile_phones: no_mobile_phones,
    signal_strength: signal_strength,
    camera: camera,
    camera_with_flash: camera_with_flash,
    video_camera: video_camera,
    tv: tv,
    radio: radio,
    vhs: vhs,
    film_projector: film_projector,
    prayer_beads: prayer_beads,
    twisted_rightwards_arrows: twisted_rightwards_arrows,
    repeat: repeat,
    repeat_one: repeat_one,
    arrows_clockwise: arrows_clockwise,
    arrows_counterclockwise: arrows_counterclockwise,
    low_brightness: low_brightness,
    high_brightness: high_brightness,
    mute: mute,
    speaker: speaker,
    sound: sound,
    loud_sound: loud_sound,
    battery: battery,
    electric_plug: electric_plug,
    mag: mag,
    mag_right: mag_right,
    lock_with_ink_pen: lock_with_ink_pen,
    closed_lock_with_key: closed_lock_with_key,
    key: key,
    lock: lock$1,
    unlock: unlock,
    bell: bell,
    no_bell: no_bell,
    bookmark: bookmark,
    link: link,
    radio_button: radio_button,
    back: back,
    end: end$1,
    on: on,
    soon: soon,
    top: top,
    underage: underage,
    keycap_ten: keycap_ten,
    capital_abcd: capital_abcd,
    abcd: abcd,
    symbols: symbols,
    abc: abc,
    fire: fire,
    flashlight: flashlight,
    wrench: wrench,
    hammer: hammer,
    nut_and_bolt: nut_and_bolt,
    hocho: hocho,
    knife: knife,
    gun: gun,
    microscope: microscope,
    telescope: telescope,
    crystal_ball: crystal_ball,
    six_pointed_star: six_pointed_star,
    beginner: beginner,
    trident: trident,
    black_square_button: black_square_button,
    white_square_button: white_square_button,
    red_circle: red_circle,
    large_blue_circle: large_blue_circle,
    large_orange_diamond: large_orange_diamond,
    large_blue_diamond: large_blue_diamond,
    small_orange_diamond: small_orange_diamond,
    small_blue_diamond: small_blue_diamond,
    small_red_triangle: small_red_triangle,
    small_red_triangle_down: small_red_triangle_down,
    arrow_up_small: arrow_up_small,
    arrow_down_small: arrow_down_small,
    om_symbol: om_symbol,
    dove_of_peace: dove_of_peace,
    kaaba: kaaba,
    mosque: mosque,
    synagogue: synagogue,
    menorah_with_nine_branches: menorah_with_nine_branches,
    clock1: clock1,
    clock2: clock2,
    clock3: clock3,
    clock4: clock4,
    clock5: clock5,
    clock6: clock6,
    clock7: clock7,
    clock8: clock8,
    clock9: clock9,
    clock10: clock10,
    clock11: clock11,
    clock12: clock12,
    clock130: clock130,
    clock230: clock230,
    clock330: clock330,
    clock430: clock430,
    clock530: clock530,
    clock630: clock630,
    clock730: clock730,
    clock830: clock830,
    clock930: clock930,
    clock1030: clock1030,
    clock1130: clock1130,
    clock1230: clock1230,
    candle: candle,
    mantelpiece_clock: mantelpiece_clock,
    hole: hole,
    man_in_business_suit_levitating: man_in_business_suit_levitating,
    sleuth_or_spy: sleuth_or_spy,
    dark_sunglasses: dark_sunglasses,
    spider: spider,
    spider_web: spider_web,
    joystick: joystick,
    linked_paperclips: linked_paperclips,
    lower_left_ballpoint_pen: lower_left_ballpoint_pen,
    lower_left_fountain_pen: lower_left_fountain_pen,
    lower_left_paintbrush: lower_left_paintbrush,
    lower_left_crayon: lower_left_crayon,
    raised_hand_with_fingers_splayed: raised_hand_with_fingers_splayed,
    middle_finger: middle_finger,
    reversed_hand_with_middle_finger_extended: reversed_hand_with_middle_finger_extended,
    desktop_computer: desktop_computer,
    printer: printer,
    three_button_mouse: three_button_mouse,
    trackball: trackball,
    frame_with_picture: frame_with_picture,
    card_index_dividers: card_index_dividers,
    card_file_box: card_file_box,
    file_cabinet: file_cabinet,
    wastebasket: wastebasket,
    spiral_note_pad: spiral_note_pad,
    spiral_calendar_pad: spiral_calendar_pad,
    compression: compression,
    old_key: old_key,
    rolled_up_newspaper: rolled_up_newspaper,
    dagger_knife: dagger_knife,
    speaking_head_in_silhouette: speaking_head_in_silhouette,
    left_speech_bubble: left_speech_bubble,
    right_anger_bubble: right_anger_bubble,
    ballot_box_with_ballot: ballot_box_with_ballot,
    world_map: world_map,
    mount_fuji: mount_fuji,
    tokyo_tower: tokyo_tower,
    statue_of_liberty: statue_of_liberty,
    japan: japan,
    moyai: moyai,
    grinning: grinning,
    grin: grin,
    joy: joy,
    smiley: smiley,
    smile: smile$1,
    sweat_smile: sweat_smile,
    laughing: laughing,
    satisfied: satisfied,
    innocent: innocent,
    smiling_imp: smiling_imp,
    wink: wink,
    blush: blush,
    yum: yum,
    relieved: relieved,
    heart_eyes: heart_eyes,
    sunglasses: sunglasses,
    smirk: smirk,
    neutral_face: neutral_face,
    expressionless: expressionless,
    unamused: unamused,
    sweat: sweat,
    pensive: pensive,
    confused: confused,
    confounded: confounded,
    kissing: kissing,
    kissing_heart: kissing_heart,
    kissing_smiling_eyes: kissing_smiling_eyes,
    kissing_closed_eyes: kissing_closed_eyes,
    stuck_out_tongue: stuck_out_tongue,
    stuck_out_tongue_winking_eye: stuck_out_tongue_winking_eye,
    stuck_out_tongue_closed_eyes: stuck_out_tongue_closed_eyes,
    disappointed: disappointed,
    worried: worried,
    angry: angry,
    rage: rage,
    cry: cry,
    persevere: persevere,
    triumph: triumph,
    disappointed_relieved: disappointed_relieved,
    frowning: frowning,
    anguished: anguished,
    fearful: fearful,
    weary: weary,
    sleepy: sleepy,
    tired_face: tired_face,
    grimacing: grimacing,
    sob: sob,
    open_mouth: open_mouth,
    hushed: hushed,
    cold_sweat: cold_sweat,
    scream: scream,
    astonished: astonished,
    flushed: flushed,
    sleeping: sleeping,
    dizzy_face: dizzy_face,
    no_mouth: no_mouth,
    mask: mask,
    smile_cat: smile_cat,
    joy_cat: joy_cat,
    smiley_cat: smiley_cat,
    heart_eyes_cat: heart_eyes_cat,
    smirk_cat: smirk_cat,
    kissing_cat: kissing_cat,
    pouting_cat: pouting_cat,
    crying_cat_face: crying_cat_face,
    scream_cat: scream_cat,
    slightly_frowning_face: slightly_frowning_face,
    slightly_smiling_face: slightly_smiling_face,
    upside_down_face: upside_down_face,
    face_with_rolling_eyes: face_with_rolling_eyes,
    no_good: no_good,
    ok_woman: ok_woman,
    bow: bow,
    see_no_evil: see_no_evil,
    hear_no_evil: hear_no_evil,
    speak_no_evil: speak_no_evil,
    raising_hand: raising_hand,
    raised_hands: raised_hands,
    person_frowning: person_frowning,
    person_with_pouting_face: person_with_pouting_face,
    pray: pray,
    rocket: rocket,
    helicopter: helicopter,
    steam_locomotive: steam_locomotive,
    railway_car: railway_car,
    bullettrain_side: bullettrain_side,
    bullettrain_front: bullettrain_front,
    train2: train2,
    metro: metro,
    light_rail: light_rail,
    station: station,
    tram: tram,
    train: train,
    bus: bus,
    oncoming_bus: oncoming_bus,
    trolleybus: trolleybus,
    busstop: busstop,
    minibus: minibus,
    ambulance: ambulance,
    fire_engine: fire_engine,
    police_car: police_car,
    oncoming_police_car: oncoming_police_car,
    taxi: taxi,
    oncoming_taxi: oncoming_taxi,
    car: car,
    red_car: red_car,
    oncoming_automobile: oncoming_automobile,
    blue_car: blue_car,
    truck: truck,
    articulated_lorry: articulated_lorry,
    tractor: tractor,
    monorail: monorail,
    mountain_railway: mountain_railway,
    suspension_railway: suspension_railway,
    mountain_cableway: mountain_cableway,
    aerial_tramway: aerial_tramway,
    ship: ship,
    rowboat: rowboat,
    speedboat: speedboat,
    traffic_light: traffic_light,
    vertical_traffic_light: vertical_traffic_light,
    construction: construction,
    rotating_light: rotating_light,
    triangular_flag_on_post: triangular_flag_on_post,
    door: door,
    no_entry_sign: no_entry_sign,
    smoking: smoking,
    no_smoking: no_smoking,
    put_litter_in_its_place: put_litter_in_its_place,
    do_not_litter: do_not_litter,
    potable_water: potable_water,
    bike: bike,
    no_bicycles: no_bicycles,
    bicyclist: bicyclist,
    mountain_bicyclist: mountain_bicyclist,
    walking: walking,
    no_pedestrians: no_pedestrians,
    children_crossing: children_crossing,
    mens: mens,
    womens: womens,
    restroom: restroom,
    baby_symbol: baby_symbol,
    toilet: toilet,
    wc: wc,
    shower: shower,
    bath: bath,
    bathtub: bathtub,
    passport_control: passport_control,
    customs: customs,
    baggage_claim: baggage_claim,
    left_luggage: left_luggage,
    couch_and_lamp: couch_and_lamp,
    sleeping_accommodation: sleeping_accommodation,
    shopping_bags: shopping_bags,
    bellhop_bell: bellhop_bell,
    bed: bed,
    place_of_worship: place_of_worship,
    hammer_and_wrench: hammer_and_wrench,
    shield: shield,
    oil_drum: oil_drum,
    motorway: motorway,
    railway_track: railway_track,
    motor_boat: motor_boat,
    small_airplane: small_airplane,
    airplane_departure: airplane_departure,
    airplane_arriving: airplane_arriving,
    passenger_ship: passenger_ship,
    zipper_mouth_face: zipper_mouth_face,
    money_mouth_face: money_mouth_face,
    face_with_thermometer: face_with_thermometer,
    nerd_face: nerd_face,
    thinking_face: thinking_face,
    face_with_head_bandage: face_with_head_bandage,
    robot_face: robot_face,
    hugging_face: hugging_face,
    the_horns: the_horns,
    sign_of_the_horns: sign_of_the_horns,
    crab: crab,
    lion_face: lion_face,
    scorpion: scorpion,
    turkey: turkey,
    unicorn_face: unicorn_face,
    cheese_wedge: cheese_wedge,
    hash: hash,
    keycap_star: keycap_star,
    zero: zero,
    one: one,
    two: two,
    three: three,
    four: four,
    five: five,
    six: six,
    seven: seven,
    eight: eight,
    nine: nine,
    cn: cn$2,
    de: de,
    es: es,
    fr: fr,
    gb: gb,
    uk: uk,
    it: it,
    jp: jp,
    kr: kr,
    ru: ru,
    us: us,
    default: emoji
  });

  var emojiByName = ( emoji$1 && emoji ) || emoji$1;

  /**
   * regex to parse emoji in a string - finds emoji, e.g. :coffee:
   */
  var emojiNameRegex = /:([a-zA-Z0-9_\-\+]+):/g;

  /**
   * regex to trim whitespace
   * use instead of String.prototype.trim() for IE8 supprt
   */
  var trimSpaceRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  /**
   * Removes colons on either side
   * of the string if present
   * @param  {string} str
   * @return {string}
   */
  function stripColons(str) {
    var colonIndex = str.indexOf(':');
    if (colonIndex > -1) {
      // :emoji: (http://www.emoji-cheat-sheet.com/)
      if (colonIndex === str.length - 1) {
        str = str.substring(0, colonIndex);
        return stripColons(str);
      } else {
        str = str.substr(colonIndex + 1);
        return stripColons(str);
      }
    }

    return str;
  }

  /**
   * Adds colons to either side
   * of the string
   * @param {string} str
   * @return {string}
   */
  function wrapColons(str) {
    return typeof str === 'string' && str.length > 0 ? ':' + str + ':' : str;
  }

  /**
   * Ensure that the word is wrapped in colons
   * by only adding them, if they are not there.
   * @param {string} str
   * @return {string}
   */
  function ensureColons(str) {
    return typeof str === 'string' && str[0] !== ':' ? wrapColons(str) : str;
  }

  // Non spacing mark, some emoticons have them. It's the 'Variant Form',
  // which provides more information so that emoticons can be rendered as
  // more colorful graphics. FE0E is a unicode text version, where as FE0F
  // should be rendered as a graphical version. The code gracefully degrades.
  var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
  var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g');

  // Remove the non-spacing-mark from the code, never send a stripped version
  // to the client, as it kills graphical emoticons.
  function stripNSB(code) {
    return code.replace(nonSpacingRegex, '');
  }
  // Reversed hash table, where as emojiByName contains a { heart: '❤' }
  // dictionary emojiByCode contains { ❤: 'heart' }. The codes are normalized
  // to the text version.
  var emojiByCode = Object.keys(emojiByName).reduce(function (h, k) {
    h[stripNSB(emojiByName[k])] = k;
    return h;
  }, {});

  /**
   * Emoji namespace
   */
  var Emoji = {
    emoji: emojiByName
  };

  /**
   * get emoji code from name
   * @param  {string} emoji
   * @return {string}
   */
  Emoji._get = function _get(emoji) {
    if (emojiByName.hasOwnProperty(emoji)) {
      return emojiByName[emoji];
    }

    return ensureColons(emoji);
  };

  /**
   * get emoji code from :emoji: string or name
   * @param  {string} emoji
   * @return {string}
   */
  Emoji.get = function get(emoji) {
    emoji = stripColons(emoji);

    return Emoji._get(emoji);
  };

  /**
   * find the emoji by either code or name
   * @param {string} nameOrCode The emoji to find, either `coffee`, `:coffee:` or `☕`;
   * @return {object}
   */
  Emoji.find = function find(nameOrCode) {
    return Emoji.findByName(nameOrCode) || Emoji.findByCode(nameOrCode);
  };

  /**
   * find the emoji by name
   * @param {string} name The emoji to find either `coffee` or `:coffee:`;
   * @return {object}
   */
  Emoji.findByName = function findByName(name) {
    var stripped = stripColons(name);
    var emoji = emojiByName[stripped];

    return emoji ? { emoji: emoji, key: stripped } : undefined;
  };

  /**
   * find the emoji by code (emoji)
   * @param {string} code The emoji to find; for example `☕` or `☔`
   * @return {object}
   */
  Emoji.findByCode = function findByCode(code) {
    var stripped = stripNSB(code);
    var name = emojiByCode[stripped];

    // lookup emoji to ensure the Variant Form is returned
    return name ? { emoji: emojiByName[name], key: name } : undefined;
  };

  /**
   * Check if an emoji is known by this library
   * @param {string} nameOrCode The emoji to validate, either `coffee`, `:coffee:` or `☕`;
   * @return {object}
   */
  Emoji.hasEmoji = function hasEmoji(nameOrCode) {
    return Emoji.hasEmojiByName(nameOrCode) || Emoji.hasEmojiByCode(nameOrCode);
  };

  /**
   * Check if an emoji with given name is known by this library
   * @param {string} name The emoji to validate either `coffee` or `:coffee:`;
   * @return {object}
   */
  Emoji.hasEmojiByName = function hasEmojiByName(name) {
    var result = Emoji.findByName(name);
    return !!result && result.key === stripColons(name);
  };

  /**
   * Check if a given emoji is known by this library
   * @param {string} code The emoji to validate; for example `☕` or `☔`
   * @return {object}
   */
  Emoji.hasEmojiByCode = function hasEmojiByCode(code) {
    var result = Emoji.findByCode(code);
    return !!result && stripNSB(result.emoji) === stripNSB(code);
  };

  /**
   * get emoji name from code
   * @param  {string} emoji
   * @param  {boolean} includeColons should the result include the ::
   * @return {string}
   */
  Emoji.which = function which(emoji_code, includeColons) {
    var code = stripNSB(emoji_code);
    var word = emojiByCode[code];

    return includeColons ? wrapColons(word) : word;
  };

  /**
   * emojify a string (replace :emoji: with an emoji)
   * @param  {string} str
   * @param  {function} on_missing (gets emoji name without :: and returns a proper emoji if no emoji was found)
   * @param  {function} format (wrap the returned emoji in a custom element)
   * @return {string}
   */
  Emoji.emojify = function emojify(str, on_missing, format) {
    if (!str) return '';

    return str.split(emojiNameRegex) // parse emoji via regex
    .map(function parseEmoji(s, i) {
      // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
      if (i % 2 === 0) return s;
      var emoji = Emoji._get(s);
      var isMissing = emoji.indexOf(':') > -1;

      if (isMissing && typeof on_missing === 'function') {
        return on_missing(s);
      }

      if (!isMissing && typeof format === 'function') {
        return format(emoji, s);
      }

      return emoji;
    }).join('') // convert back to string
    ;
  };

  /**
   * return a random emoji
   * @return {string}
   */
  Emoji.random = function random() {
    var emojiKeys = Object.keys(emojiByName);
    var randomIndex = Math.floor(Math.random() * emojiKeys.length);
    var key = emojiKeys[randomIndex];
    var emoji = Emoji._get(key);
    return { key: key, emoji: emoji };
  };

  /**
   *  return an collection of potential emoji matches
   *  @param {string} str
   *  @return {Array.<Object>}
   */
  Emoji.search = function search(str) {
    var emojiKeys = Object.keys(emojiByName);
    var matcher = stripColons(str);
    var matchingKeys = emojiKeys.filter(function (key) {
      return key.toString().indexOf(matcher) === 0;
    });
    return matchingKeys.map(function (key) {
      return {
        key: key,
        emoji: Emoji._get(key)
      };
    });
  };

  /**
   * unemojify a string (replace emoji with :emoji:)
   * @param  {string} str
   * @return {string}
   */
  Emoji.unemojify = function unemojify(str) {
    if (!str) return '';
    var words = lodash_toarray(str);

    return words.map(function (word) {
      return Emoji.which(word, true) || word;
    }).join('');
  };

  /**
   * replace emojis with replacement value
   * @param {string} str
   * @param {function|string} the string or callback function to replace the emoji with
   * @param {boolean} should trailing whitespaces be cleaned? Defaults false
   * @return {string}
   */
  Emoji.replace = function replace(str, replacement, cleanSpaces) {
    if (!str) return '';

    var replace = typeof replacement === 'function' ? replacement : function () {
      return replacement;
    };
    var words = lodash_toarray(str);

    var replaced = words.map(function (word, idx) {
      var emoji = Emoji.findByCode(word);

      if (emoji && cleanSpaces && words[idx + 1] === ' ') {
        words[idx + 1] = '';
      }

      return emoji ? replace(emoji) : word;
    }).join('');

    return cleanSpaces ? replaced.replace(trimSpaceRegex, '') : replaced;
  };

  /**
   * remove all emojis from a string
   * @param {string} str
   * @return {string}
   */
  Emoji.strip = function strip(str) {
    return Emoji.replace(str, '', true);
  };

  var emoji$2 = Emoji;

  var css$7 = ".icons {\n  display: flex;\n  flex-direction: row;\n}\n\n.icons.vertical {\n  flex-direction: column;\n}\n\n.icon {\n  cursor: pointer;\n  line-height: normal;\n  line-height: var(--reaction-icon-line-height, normal);\n  margin-right: 5px;\n  position: relative;\n}\n\n.count {\n  left: -5px;\n  left: var(--reaction-count-left, -5px);\n  position: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n";
  styleInject(css$7);

  var _templateObject$e = taggedTemplateLiteral(['<img src="', '" />'], ['<img src="', '" />']),
      _templateObject2$8 = taggedTemplateLiteral(['\n        <div class="icon" name=', ' on-click=', '>\n          <span>', '</span>\n          ', '\n        </div>\n      '], ['\n        <div class="icon" name=', ' on-click=', '>\n          <span>', '</span>\n          ', '\n        </div>\n      ']),
      _templateObject3$3 = taggedTemplateLiteral(['<span class="count">', '</span>'], ['<span class="count">', '</span>']),
      _templateObject4$1 = taggedTemplateLiteral(['\n      <div class$=', '>\n        ', '\n      </div>\n    '], ['\n      <div class$=', '>\n        ', '\n      </div>\n    ']);

  var Reactions = function (_LitElement) {
    inherits(Reactions, _LitElement);
    createClass(Reactions, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          config: Object,
          direction: String,
          displayname: String,
          showcount: Boolean,
          showall: Boolean
        };
      }
    }]);

    function Reactions(props) {
      classCallCheck(this, Reactions);

      var _this = possibleConstructorReturn(this, (Reactions.__proto__ || Object.getPrototypeOf(Reactions)).call(this, props));

      _this.emoji = emoji$2;

      _this._boundedClick = _this._handleClick.bind(_this);
      _this.config = new Map();
      _this.displayname = 'reactions';
      _this.showall = false;
      _this.showcount = false;
      return _this;
    }

    createClass(Reactions, [{
      key: '_renderIcon',
      value: function _renderIcon(data) {
        return data.icon ? html$1(_templateObject$e, data.icon) : this.emoji.get(data.name);
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        this.dispatchEvent(new CustomEvent(this.displayname + '-toggle', { detail: { reaction: e.currentTarget.name } }));
      }
    }, {
      key: '_renderActions',
      value: function _renderActions() {
        var _this2 = this;

        return this.config.toJSON().map(function () {
          return _this2._renderReaction.apply(_this2, arguments);
        });
      }
    }, {
      key: '_renderReaction',
      value: function _renderReaction(_ref) {
        var _ref2 = slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        var count = Number(v.count || 0);
        var shouldRender = count || this.showall;
        var shouldCount = count > 0 && this.showcount;

        return !shouldRender ? null : html$1(_templateObject2$8, k, this._boundedClick, this._renderIcon(v), shouldCount ? html$1(_templateObject3$3, count) : null);
      }
    }, {
      key: '_configure',
      value: function _configure(config) {
        if (!(config instanceof Map)) throw new TypeError('Wrong configuration');
        var data = new Map(config);

        if (config !== data) this.config = data;
      }
    }, {
      key: '_render',
      value: function _render(props) {
        var _props$direction = props.direction,
            direction = _props$direction === undefined ? 'row' : _props$direction;


        return html$1(_templateObject4$1, classString({ icons: true, vertical: direction === 'column' }), this._renderActions());
      }
    }]);
    return Reactions;
  }(LitElement);
  var ReactionList = withStyle$1(Reactions, css$7);

  var css$8 = "/* :root, */\n:host {\n  display: block;\n}\n.icons {\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n}\n.icons.vertical {\n  flex-direction: column;\n}\n.icon {\n  cursor: default;\n  margin-right: 5px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.icon span {\n  height: 21px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: top;\n  width: 14px;\n}\n";
  styleInject(css$8);

  var Reactions$1 = withStyle(html$1)(Reactions, css$8);

  var css$9 = ":host {\n  background-color: #f8f8f8;\n  background-color: var(--chat-background-color, #f8f8f8);\n  display: block;\n  font-size: inherit;\n  font-size: var(--chat-font-size, inherit);\n  height: 100%;\n  height: var(--chat-height, 100%);\n  min-height: 400px;\n  min-height: var(--chat-min-height, 400px);\n  min-width: 330px;\n  min-width: var(--chat-min-width, 330px);\n}\n";
  styleInject(css$9);

  var _templateObject$f = taggedTemplateLiteral(['\n        <wc-chat-input\n          delay=\'', '\'\n          maxrows=\'', '\'\n          disabled=\'', '\'\n          on-message-submit=\'', '\'\n          placeholder=\'', '\'\n          placeholderdisabled=\'', '\'\n          value=\'', '\'\n        />\n      '], ['\n        <wc-chat-input\n          delay=\'', '\'\n          maxrows=\'', '\'\n          disabled=\'', '\'\n          on-message-submit=\'', '\'\n          placeholder=\'', '\'\n          placeholderdisabled=\'', '\'\n          value=\'', '\'\n        />\n      ']),
      _templateObject2$9 = taggedTemplateLiteral(['\n      <wc-chat-scrollable\n        reverse=\'', '\'\n        listen=\'', '\'\n      >\n        <div>\n          <wc-chat-messages\n            actions=\'', '\'\n            actionsallowed=\'', '\'\n            invoke=\'', '\'\n            list=\'', '\'\n            on-message-delete=\'', '\'\n            on-message-reaction=\'', '\'\n            on-user-disable=\'', '\'\n            user=\'', '\'\n            users=\'', '\'\n          />\n        </div>\n      </wc-chat-scrollable>\n      ', '\n    '], ['\n      <wc-chat-scrollable\n        reverse=\'', '\'\n        listen=\'', '\'\n      >\n        <div>\n          <wc-chat-messages\n            actions=\'', '\'\n            actionsallowed=\'', '\'\n            invoke=\'', '\'\n            list=\'', '\'\n            on-message-delete=\'', '\'\n            on-message-reaction=\'', '\'\n            on-user-disable=\'', '\'\n            user=\'', '\'\n            users=\'', '\'\n          />\n        </div>\n      </wc-chat-scrollable>\n      ', '\n    ']);

  var EVENT = 'did-update';

  var Chat = function (_LitElement) {
    inherits(Chat, _LitElement);
    createClass(Chat, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          actions: Array,
          actionsallowed: Array,
          delay: Number,
          disabled: Boolean,
          list: Array,
          maxrows: Number,
          message: String,
          noinput: Boolean,
          placeholder: String,
          placeholderdisabled: String,
          reverse: Boolean,
          user: Number,
          users: Array
        };
      }
    }]);

    function Chat(props) {
      classCallCheck(this, Chat);

      var _this = possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

      _this.boundedMessageSubmit = _this._handleSubmit.bind(_this);
      _this.boundedMessageDelete = _this._handleDelete.bind(_this);
      _this.boundedUserDisable = _this._handleUserDisable.bind(_this);
      _this.boundedMessageReaction = _this._handleMessageReaction.bind(_this);

      registerCustomElement('wc-chat-scrollable', Scroll);
      registerCustomElement('wc-chat-input', Input);
      registerCustomElement('wc-chat-messages', Messages);
      registerCustomElement('wc-chat-reactions', Reactions$1);

      _this._scrollable = null;
      return _this;
    }

    createClass(Chat, [{
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.boundedMessageSubmit = null;
        this.boundedMessageDelete = null;
        this.boundedUserDisable = null;
        this.boundedMessageReaction = null;
      }
    }, {
      key: 'scrollTo',
      value: function scrollTo() {
        this._scrollable.scrollTo && this._scrollable.scrollTo();
      }
    }, {
      key: '_firstRendered',
      value: function _firstRendered() {
        if (this.shadowRoot) this._scrollable = this.shadowRoot.querySelector('wc-chat-scrollable');
      }
    }, {
      key: '_handleSubmit',
      value: function _handleSubmit(e) {
        this.dispatchEvent(new CustomEvent('chat-message-submit', { detail: e.detail }));
      }
    }, {
      key: '_handleDelete',
      value: function _handleDelete(e) {
        this.dispatchEvent(new CustomEvent('chat-message-delete', { detail: e.detail }));
      }
    }, {
      key: '_handleUserDisable',
      value: function _handleUserDisable(e) {
        this.dispatchEvent(new CustomEvent('chat-user-disable', { detail: e.detail }));
      }
    }, {
      key: '_handleMessageReaction',
      value: function _handleMessageReaction(e) {
        this.dispatchEvent(new CustomEvent('chat-message-reaction', { detail: e.detail }));
      }
    }, {
      key: '_render',
      value: function _render(props) {
        var input = props.noinput ? null : html$1(_templateObject$f, props.delay || 0, props.maxrows || 10, props.disabled, this.boundedMessageSubmit, props.placeholder, props.placeholderdisabled, props.message);

        return html$1(_templateObject2$9, props.reverse, EVENT, props.actions, props.actionsallowed, EVENT, props.list, this.boundedMessageDelete, this.boundedMessageReaction, this.boundedUserDisable, props.user, props.users, input);
      }
    }]);
    return Chat;
  }(LitElement);

  var chat = withStyle(html$1)(Chat, css$9);

  var chat$1 = /*#__PURE__*/Object.freeze({
    Chat: Chat,
    default: chat
  });

  exports.chat = chat$1;
  exports.mixins = mixins;

  Object.defineProperty(exports, '__esModule', { value: true });

})));