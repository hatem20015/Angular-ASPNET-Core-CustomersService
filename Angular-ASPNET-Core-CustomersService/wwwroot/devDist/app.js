webpackJsonp([1],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return REQUIRED_VALIDATOR; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license Angular v4.0.0-rc.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */

var AbstractControlDirective = function () {
    function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
    }

    _createClass(AbstractControlDirective, [{
        key: 'reset',

        /**
         * @param {?=} value
         * @return {?}
         */
        value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            if (this.control) this.control.reset(value);
        }
        /**
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */

    }, {
        key: 'hasError',
        value: function hasError(errorCode) {
            var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return this.control ? this.control.hasError(errorCode, path) : false;
        }
        /**
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */

    }, {
        key: 'getError',
        value: function getError(errorCode) {
            var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return this.control ? this.control.getError(errorCode, path) : null;
        }
    }, {
        key: 'control',

        /**
         * @return {?}
         */
        get: function get() {
            throw new Error('unimplemented');
        }
        /**
         * @return {?}
         */

    }, {
        key: 'value',
        get: function get() {
            return this.control ? this.control.value : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'valid',
        get: function get() {
            return this.control ? this.control.valid : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'invalid',
        get: function get() {
            return this.control ? this.control.invalid : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'pending',
        get: function get() {
            return this.control ? this.control.pending : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'errors',
        get: function get() {
            return this.control ? this.control.errors : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'pristine',
        get: function get() {
            return this.control ? this.control.pristine : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'dirty',
        get: function get() {
            return this.control ? this.control.dirty : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'touched',
        get: function get() {
            return this.control ? this.control.touched : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'untouched',
        get: function get() {
            return this.control ? this.control.untouched : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'disabled',
        get: function get() {
            return this.control ? this.control.disabled : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'enabled',
        get: function get() {
            return this.control ? this.control.enabled : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'statusChanges',
        get: function get() {
            return this.control ? this.control.statusChanges : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'valueChanges',
        get: function get() {
            return this.control ? this.control.valueChanges : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return null;
        }
    }]);

    return AbstractControlDirective;
}();

/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 */


var ControlContainer = function (_AbstractControlDirec) {
    _inherits(ControlContainer, _AbstractControlDirec);

    function ControlContainer() {
        _classCallCheck(this, ControlContainer);

        return _possibleConstructorReturn(this, (ControlContainer.__proto__ || Object.getPrototypeOf(ControlContainer)).apply(this, arguments));
    }

    _createClass(ControlContainer, [{
        key: 'formDirective',

        /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        get: function get() {
            return null;
        }
        /**
         * Get the path to this container.
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return null;
        }
    }]);

    return ControlContainer;
}(AbstractControlDirective);

/**
 * @param {?} obj
 * @return {?}
 */


function isPresent(obj) {
    return obj != null;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isBlank(obj) {
    return obj == null;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
/**
 * @param {?} o
 * @return {?}
 */
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object');
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPrimitive(obj) {
    return !isJsObject(obj);
}

/**
 * Wraps Javascript Objects
 */

var StringMapWrapper = function () {
    function StringMapWrapper() {
        _classCallCheck(this, StringMapWrapper);
    }

    _createClass(StringMapWrapper, null, [{
        key: 'merge',

        /**
         * @param {?} m1
         * @param {?} m2
         * @return {?}
         */
        value: function merge(m1, m2) {
            var /** @type {?} */m = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(m1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var k = _step.value;

                    m[k] = m1[k];
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

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(m2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _k = _step2.value;

                    m[_k] = m2[_k];
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

            return m;
        }
        /**
         * @param {?} m1
         * @param {?} m2
         * @return {?}
         */

    }, {
        key: 'equals',
        value: function equals(m1, m2) {
            var /** @type {?} */k1 = Object.keys(m1);
            var /** @type {?} */k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            for (var /** @type {?} */i = 0; i < k1.length; i++) {
                var /** @type {?} */key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        }
    }]);

    return StringMapWrapper;
}();

var ListWrapper = function () {
    function ListWrapper() {
        _classCallCheck(this, ListWrapper);
    }

    _createClass(ListWrapper, null, [{
        key: 'findLast',

        /**
         * @param {?} arr
         * @param {?} condition
         * @return {?}
         */
        value: function findLast(arr, condition) {
            for (var /** @type {?} */i = arr.length - 1; i >= 0; i--) {
                if (condition(arr[i])) {
                    return arr[i];
                }
            }
            return null;
        }
        /**
         * @param {?} list
         * @param {?} items
         * @return {?}
         */

    }, {
        key: 'removeAll',
        value: function removeAll(list, items) {
            for (var /** @type {?} */i = 0; i < items.length; ++i) {
                var /** @type {?} */index = list.indexOf(items[i]);
                if (index > -1) {
                    list.splice(index, 1);
                }
            }
        }
        /**
         * @param {?} list
         * @param {?} el
         * @return {?}
         */

    }, {
        key: 'remove',
        value: function remove(list, el) {
            var /** @type {?} */index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        }
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */

    }, {
        key: 'equals',
        value: function equals(a, b) {
            if (a.length != b.length) return false;
            for (var /** @type {?} */i = 0; i < a.length; ++i) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }
        /**
         * @param {?} list
         * @return {?}
         */

    }, {
        key: 'flatten',
        value: function flatten(list) {
            return list.reduce(function (flat, item) {
                var /** @type {?} */flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
                return flat.concat(flatItem);
            }, []);
        }
    }]);

    return ListWrapper;
}();

/**
 * @param {?} value
 * @return {?}
 */


function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
 * @stable
 */
var /** @type {?} */NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {@link NG_VALIDATORS} for more details.
 *
 * @stable
 */
var /** @type {?} */NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgAsyncValidators');
var /** @type {?} */EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */

var Validators = function () {
    function Validators() {
        _classCallCheck(this, Validators);
    }

    _createClass(Validators, null, [{
        key: 'equalsTo',

        /**
         * Validator that compares the value of the given FormControls
         * @param {...?} fieldPaths
         * @return {?}
         */
        value: function equalsTo() {
            for (var _len = arguments.length, fieldPaths = Array(_len), _key = 0; _key < _len; _key++) {
                fieldPaths[_key] = arguments[_key];
            }

            return function (control) {
                if (fieldPaths.length < 1) {
                    throw new Error('You must compare to at least 1 other field');
                }
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = fieldPaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var fieldName = _step3.value;

                        var /** @type {?} */field = control.parent.get(fieldName);
                        if (!field) {
                            throw new Error('Field: ' + fieldName + ' undefined, are you sure that ' + fieldName + ' exists in the group');
                        }
                        if (field.value !== control.value) {
                            return { 'equalsTo': { 'unequalField': fieldName } };
                        }
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

                return null;
            };
        }
        /**
         * Validator that requires controls to have a non-empty value.
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'required',
        value: function required(control) {
            return isEmptyInputValue(control.value) ? { 'required': true } : null;
        }
        /**
         * Validator that requires control value to be true.
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'requiredTrue',
        value: function requiredTrue(control) {
            return control.value === true ? null : { 'required': true };
        }
        /**
         * Validator that performs email validation.
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'email',
        value: function email(control) {
            return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
        }
        /**
         * Validator that requires controls to have a value of a minimum length.
         * @param {?} minLength
         * @return {?}
         */

    }, {
        key: 'minLength',
        value: function minLength(_minLength) {
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */length = control.value ? control.value.length : 0;
                return length < _minLength ? { 'minlength': { 'requiredLength': _minLength, 'actualLength': length } } : null;
            };
        }
        /**
         * Validator that requires controls to have a value of a maximum length.
         * @param {?} maxLength
         * @return {?}
         */

    }, {
        key: 'maxLength',
        value: function maxLength(_maxLength) {
            return function (control) {
                var /** @type {?} */length = control.value ? control.value.length : 0;
                return length > _maxLength ? { 'maxlength': { 'requiredLength': _maxLength, 'actualLength': length } } : null;
            };
        }
        /**
         * Validator that requires a control to match a regex to its value.
         * @param {?} pattern
         * @return {?}
         */

    }, {
        key: 'pattern',
        value: function pattern(_pattern) {
            if (!_pattern) return Validators.nullValidator;
            var /** @type {?} */regex = void 0;
            var /** @type {?} */regexStr = void 0;
            if (typeof _pattern === 'string') {
                regexStr = '^' + _pattern + '$';
                regex = new RegExp(regexStr);
            } else {
                regexStr = _pattern.toString();
                regex = _pattern;
            }
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */value = control.value;
                return regex.test(value) ? null : { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
            };
        }
        /**
         * No-op validator.
         * @param {?} c
         * @return {?}
         */

    }, {
        key: 'nullValidator',
        value: function nullValidator(c) {
            return null;
        }
        /**
         * Compose multiple validators into a single function that returns the union
         * of the individual error maps.
         * @param {?} validators
         * @return {?}
         */

    }, {
        key: 'compose',
        value: function compose(validators) {
            if (!validators) return null;
            var /** @type {?} */presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        }
        /**
         * @param {?} validators
         * @return {?}
         */

    }, {
        key: 'composeAsync',
        value: function composeAsync(validators) {
            if (!validators) return null;
            var /** @type {?} */presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
                var /** @type {?} */promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
                return Promise.all(promises).then(_mergeErrors);
            };
        }
    }]);

    return Validators;
}();
/**
 * @param {?} obj
 * @return {?}
 */


function _convertToPromise(obj) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(obj) ? obj : __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_toPromise__["toPromise"].call(obj);
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) {
        return v(control);
    });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) {
        return v(control);
    });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */res = arrayOfErrors.reduce(function (res, errors) {
        return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * Used to provide a {@link ControlValueAccessor} for form controls.
 *
 * See {@link DefaultValueAccessor} for how to implement one.
 * @stable
 */
var /** @type {?} */NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValueAccessor');

var /** @type {?} */CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return CheckboxControlValueAccessor;
    }),
    multi: true
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */

var CheckboxControlValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }
    /**
     * @param {?} value
     * @return {?}
     */


    _createClass(CheckboxControlValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
    }]);

    return CheckboxControlValueAccessor;
}();

CheckboxControlValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
        providers: [CHECKBOX_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
CheckboxControlValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }];
};

var /** @type {?} */DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return DefaultValueAccessor;
    }),
    multi: true
};
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */

var DefaultValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function DefaultValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }
    /**
     * @param {?} value
     * @return {?}
     */


    _createClass(DefaultValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            var /** @type {?} */normalizedValue = value == null ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
    }]);

    return DefaultValueAccessor;
}();

DefaultValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngControl],[ngModel],[ngFormControl]',
        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
        providers: [DEFAULT_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
DefaultValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }];
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (validator.validate) {
        return function (c) {
            return validator.validate(c);
        };
    } else {
        return validator;
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (validator.validate) {
        return function (c) {
            return validator.validate(c);
        };
    } else {
        return validator;
    }
}

var /** @type {?} */NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return NumberValueAccessor;
    }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */

var NumberValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }
    /**
     * @param {?} value
     * @return {?}
     */


    _createClass(NumberValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var /** @type {?} */normalizedValue = value == null ? '' : value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this.onChange = function (value) {
                fn(value == '' ? null : parseFloat(value));
            };
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
    }]);

    return NumberValueAccessor;
}();

NumberValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
        host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
        },
        providers: [NUMBER_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
NumberValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }];
};

/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */

var NgControl = function (_AbstractControlDirec2) {
    _inherits(NgControl, _AbstractControlDirec2);

    function NgControl() {
        _classCallCheck(this, NgControl);

        /** @internal */
        var _this2 = _possibleConstructorReturn(this, (NgControl.__proto__ || Object.getPrototypeOf(NgControl)).apply(this, arguments));

        _this2._parent = null;
        _this2.name = null;
        _this2.valueAccessor = null;
        /** @internal */
        _this2._rawValidators = [];
        /** @internal */
        _this2._rawAsyncValidators = [];
        return _this2;
    }
    /**
     * @return {?}
     */


    _createClass(NgControl, [{
        key: 'viewToModelUpdate',

        /**
         * @abstract
         * @param {?} newValue
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {}
    }, {
        key: 'validator',
        get: function get() {
            return unimplemented();
        }
        /**
         * @return {?}
         */

    }, {
        key: 'asyncValidator',
        get: function get() {
            return unimplemented();
        }
    }]);

    return NgControl;
}(AbstractControlDirective);

var /** @type {?} */RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return RadioControlValueAccessor;
    }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */

var RadioControlRegistry = function () {
    function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */


    _createClass(RadioControlRegistry, [{
        key: 'add',
        value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
        }
        /**
         * @param {?} accessor
         * @return {?}
         */

    }, {
        key: 'remove',
        value: function remove(accessor) {
            for (var /** @type {?} */i = this._accessors.length - 1; i >= 0; --i) {
                if (this._accessors[i][1] === accessor) {
                    this._accessors.splice(i, 1);
                    return;
                }
            }
        }
        /**
         * @param {?} accessor
         * @return {?}
         */

    }, {
        key: 'select',
        value: function select(accessor) {
            var _this3 = this;

            this._accessors.forEach(function (c) {
                if (_this3._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        }
        /**
         * @param {?} controlPair
         * @param {?} accessor
         * @return {?}
         */

    }, {
        key: '_isSameGroup',
        value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
        }
    }]);

    return RadioControlRegistry;
}();

RadioControlRegistry.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] }];
/** @nocollapse */
RadioControlRegistry.ctorParameters = function () {
    return [];
};
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */

var RadioControlValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () {};
        this.onTouched = function () {};
    }
    /**
     * @return {?}
     */


    _createClass(RadioControlValueAccessor, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            this._control = this._injector.get(NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            this._registry.remove(this);
        }
        /**
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'writeValue',
        value: function writeValue(value) {
            this._state = value === this.value;
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            var _this4 = this;

            this._fn = fn;
            this.onChange = function () {
                fn(_this4.value);
                _this4._registry.select(_this4);
            };
        }
        /**
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'fireUncheck',
        value: function fireUncheck(value) {
            this.writeValue(value);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkName',
        value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName) this.name = this.formControlName;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_throwNameError',
        value: function _throwNameError() {
            throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ');
        }
    }]);

    return RadioControlValueAccessor;
}();

RadioControlValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
        providers: [RADIO_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
RadioControlValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }, { type: RadioControlRegistry }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] }];
};
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};

var /** @type {?} */RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return RangeValueAccessor;
    }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */

var RangeValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function RangeValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, RangeValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }
    /**
     * @param {?} value
     * @return {?}
     */


    _createClass(RangeValueAccessor, [{
        key: 'writeValue',
        value: function writeValue(value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this.onChange = function (value) {
                fn(value == '' ? null : parseFloat(value));
            };
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
    }]);

    return RangeValueAccessor;
}();

RangeValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
        host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()'
        },
        providers: [RANGE_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
RangeValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }];
};

var /** @type {?} */SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return SelectControlValueAccessor;
    }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null) return '' + value;
    if (!isPrimitive(value)) value = 'Object';
    return (id + ': ' + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */

var SelectControlValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) {};
        this.onTouched = function () {};
        this._compareWith = looseIdentical;
    }
    /**
     * @param {?} fn
     * @return {?}
     */


    _createClass(SelectControlValueAccessor, [{
        key: 'writeValue',

        /**
         * @param {?} value
         * @return {?}
         */
        value: function writeValue(value) {
            this.value = value;
            var /** @type {?} */id = this._getOptionId(value);
            if (id == null) {
                this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }
            var /** @type {?} */valueString = _buildValueString(id, value);
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            var _this5 = this;

            this.onChange = function (valueString) {
                _this5.value = valueString;
                fn(_this5._getOptionValue(valueString));
            };
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_registerOption',
        value: function _registerOption() {
            return (this._idCounter++).toString();
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

    }, {
        key: '_getOptionId',
        value: function _getOptionId(value) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Array.from(this._optionMap.keys())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var id = _step4.value;

                    if (this._compareWith(this._optionMap.get(id), value)) return id;
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

            return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

    }, {
        key: '_getOptionValue',
        value: function _getOptionValue(valueString) {
            var /** @type {?} */id = _extractId(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        }
    }, {
        key: 'compareWith',
        set: function set(fn) {
            if (typeof fn !== 'function') {
                throw new Error('compareWith must be a function, but received ' + JSON.stringify(fn));
            }
            this._compareWith = fn;
        }
    }]);

    return SelectControlValueAccessor;
}();

SelectControlValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
        providers: [SELECT_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
SelectControlValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }];
};
SelectControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */

var NgSelectOption = function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
    }
    /**
     * @param {?} value
     * @return {?}
     */


    _createClass(NgSelectOption, [{
        key: '_setElementValue',

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        }
    }, {
        key: 'ngValue',
        set: function set(value) {
            if (this._select == null) return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'value',
        set: function set(value) {
            this._setElementValue(value);
            if (this._select) this._select.writeValue(this._select.value);
        }
    }]);

    return NgSelectOption;
}();

NgSelectOption.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' }] }];
/** @nocollapse */
NgSelectOption.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }] }];
};
NgSelectOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue'] }],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value'] }]
};

var /** @type {?} */SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return SelectMultipleControlValueAccessor;
    }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null) return '' + value;
    if (typeof value === 'string') value = '\'' + value + '\'';
    if (!isPrimitive(value)) value = 'Object';
    return (id + ': ' + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */

var SelectMultipleControlValueAccessor = function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) {};
        this.onTouched = function () {};
        this._compareWith = looseIdentical;
    }
    /**
     * @param {?} fn
     * @return {?}
     */


    _createClass(SelectMultipleControlValueAccessor, [{
        key: 'writeValue',

        /**
         * @param {?} value
         * @return {?}
         */
        value: function writeValue(value) {
            var _this6 = this;

            this.value = value;
            var /** @type {?} */optionSelectedStateSetter = void 0;
            if (Array.isArray(value)) {
                // convert values to ids
                var /** @type {?} */ids = value.map(function (v) {
                    return _this6._getOptionId(v);
                });
                optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                    opt._setSelected(ids.indexOf(o.toString()) > -1);
                };
            } else {
                optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                    opt._setSelected(false);
                };
            }
            this._optionMap.forEach(optionSelectedStateSetter);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            var _this7 = this;

            this.onChange = function (_) {
                var /** @type {?} */selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var /** @type {?} */options = _.selectedOptions;
                    for (var /** @type {?} */i = 0; i < options.length; i++) {
                        var /** @type {?} */opt = options.item(i);
                        var /** @type {?} */val = _this7._getOptionValue(opt.value);
                        selected.push(val);
                    }
                } else {
                    var /** @type {?} */_options = _.options;
                    for (var /** @type {?} */_i = 0; _i < _options.length; _i++) {
                        var /** @type {?} */_opt = _options.item(_i);
                        if (_opt.selected) {
                            var /** @type {?} */_val = _this7._getOptionValue(_opt.value);
                            selected.push(_val);
                        }
                    }
                }
                _this7.value = selected;
                fn(selected);
            };
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnTouched',
        value: function registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

    }, {
        key: 'setDisabledState',
        value: function setDisabledState(isDisabled) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

    }, {
        key: '_registerOption',
        value: function _registerOption(value) {
            var /** @type {?} */id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

    }, {
        key: '_getOptionId',
        value: function _getOptionId(value) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = Array.from(this._optionMap.keys())[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var id = _step5.value;

                    if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

    }, {
        key: '_getOptionValue',
        value: function _getOptionValue(valueString) {
            var /** @type {?} */id = _extractId$1(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
        }
    }, {
        key: 'compareWith',
        set: function set(fn) {
            if (typeof fn !== 'function') {
                throw new Error('compareWith must be a function, but received ' + JSON.stringify(fn));
            }
            this._compareWith = fn;
        }
    }]);

    return SelectMultipleControlValueAccessor;
}();

SelectMultipleControlValueAccessor.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }] }];
/** @nocollapse */
SelectMultipleControlValueAccessor.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }];
};
SelectMultipleControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */

var NgSelectMultipleOption = function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */


    _createClass(NgSelectMultipleOption, [{
        key: '_setElementValue',

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@internal
         * @param {?} selected
         * @return {?}
         */

    }, {
        key: '_setSelected',
        value: function _setSelected(selected) {
            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        }
    }, {
        key: 'ngValue',
        set: function set(value) {
            if (this._select == null) return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'value',
        set: function set(value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            } else {
                this._setElementValue(value);
            }
        }
    }]);

    return NgSelectMultipleOption;
}();

NgSelectMultipleOption.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' }] }];
/** @nocollapse */
NgSelectMultipleOption.ctorParameters = function () {
    return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] }, { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }] }];
};
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue'] }],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value'] }]
};

/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return [].concat(_toConsumableArray(parent.path), [name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control) _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    // view -> model
    dir.valueAccessor.registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.markAsDirty();
        control.setValue(newValue, { emitModelToViewChange: false });
    });
    // touched
    dir.valueAccessor.registerOnTouched(function () {
        return control.markAsTouched();
    });
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent) dir.viewToModelUpdate(newValue);
    });
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) {
            dir.valueAccessor.setDisabledState(isDisabled);
        });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
            return control.updateValueAndValidity();
        });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
            return control.updateValueAndValidity();
        });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () {
        return _noControlError(dir);
    });
    dir.valueAccessor.registerOnTouched(function () {
        return _noControlError(dir);
    });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control) control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (isBlank(control)) _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */messageEnd = void 0;
    if (dir.path.length > 1) {
        messageEnd = 'path: \'' + dir.path.join(' -> ') + '\'';
    } else if (dir.path[0]) {
        messageEnd = 'name: \'' + dir.path + '\'';
    } else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + ' ' + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model')) return false;
    var /** @type {?} */change = changes['model'];
    if (change.isFirstChange()) return true;
    return !looseIdentical(viewModel, change.currentValue);
}
var /** @type {?} */BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) {
        return valueAccessor.constructor === a;
    });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors) return null;
    var /** @type {?} */defaultAccessor = void 0;
    var /** @type {?} */builtinAccessor = void 0;
    var /** @type {?} */customAccessor = void 0;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        } else if (isBuiltInAccessor(v)) {
            if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        } else {
            if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor) return customAccessor;
    if (builtinAccessor) return builtinAccessor;
    if (defaultAccessor) return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}

/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */

var AbstractFormGroupDirective = function (_ControlContainer) {
    _inherits(AbstractFormGroupDirective, _ControlContainer);

    function AbstractFormGroupDirective() {
        _classCallCheck(this, AbstractFormGroupDirective);

        return _possibleConstructorReturn(this, (AbstractFormGroupDirective.__proto__ || Object.getPrototypeOf(AbstractFormGroupDirective)).apply(this, arguments));
    }

    _createClass(AbstractFormGroupDirective, [{
        key: 'ngOnInit',

        /**
         * @return {?}
         */
        value: function ngOnInit() {
            this._checkParentType();
            this.formDirective.addFormGroup(this);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if (this.formDirective) {
                this.formDirective.removeFormGroup(this);
            }
        }
        /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */

    }, {
        key: '_checkParentType',

        /**
         * \@internal
         * @return {?}
         */
        value: function _checkParentType() {}
    }, {
        key: 'control',
        get: function get() {
            return this.formDirective.getFormGroup(this);
        }
        /**
         * Get the path to this control group.
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return controlPath(this.name, this._parent);
        }
        /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */

    }, {
        key: 'formDirective',
        get: function get() {
            return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'validator',
        get: function get() {
            return composeValidators(this._validators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'asyncValidator',
        get: function get() {
            return composeAsyncValidators(this._asyncValidators);
        }
    }]);

    return AbstractFormGroupDirective;
}(ControlContainer);

var AbstractControlStatus = function () {
    /**
     * @param {?} cd
     */
    function AbstractControlStatus(cd) {
        _classCallCheck(this, AbstractControlStatus);

        this._cd = cd;
    }
    /**
     * @return {?}
     */


    _createClass(AbstractControlStatus, [{
        key: 'ngClassUntouched',
        get: function get() {
            return this._cd.control ? this._cd.control.untouched : false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngClassTouched',
        get: function get() {
            return this._cd.control ? this._cd.control.touched : false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngClassPristine',
        get: function get() {
            return this._cd.control ? this._cd.control.pristine : false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngClassDirty',
        get: function get() {
            return this._cd.control ? this._cd.control.dirty : false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngClassValid',
        get: function get() {
            return this._cd.control ? this._cd.control.valid : false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngClassInvalid',
        get: function get() {
            return this._cd.control ? this._cd.control.invalid : false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngClassPending',
        get: function get() {
            return this._cd.control ? this._cd.control.pending : false;
        }
    }]);

    return AbstractControlStatus;
}();

var /** @type {?} */ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending'
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */

var NgControlStatus = function (_AbstractControlStatu) {
    _inherits(NgControlStatus, _AbstractControlStatu);

    /**
     * @param {?} cd
     */
    function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        return _possibleConstructorReturn(this, (NgControlStatus.__proto__ || Object.getPrototypeOf(NgControlStatus)).call(this, cd));
    }

    return NgControlStatus;
}(AbstractControlStatus);

NgControlStatus.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }] }];
/** @nocollapse */
NgControlStatus.ctorParameters = function () {
    return [{ type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }] }];
};
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */

var NgControlStatusGroup = function (_AbstractControlStatu2) {
    _inherits(NgControlStatusGroup, _AbstractControlStatu2);

    /**
     * @param {?} cd
     */
    function NgControlStatusGroup(cd) {
        _classCallCheck(this, NgControlStatusGroup);

        return _possibleConstructorReturn(this, (NgControlStatusGroup.__proto__ || Object.getPrototypeOf(NgControlStatusGroup)).call(this, cd));
    }

    return NgControlStatusGroup;
}(AbstractControlStatus);

NgControlStatusGroup.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
        host: ngControlStatusHost
    }] }];
/** @nocollapse */
NgControlStatusGroup.ctorParameters = function () {
    return [{ type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }] }];
};

/**
 * Use by directives and components to emit custom Events.
 *
 * ### Examples
 *
 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
 * title gets clicked:
 *
 * ```
 * \@Component({
 *   selector: 'zippy',
 *   template: `
 *   <div class="zippy">
 *     <div (click)="toggle()">Toggle</div>
 *     <div [hidden]="!visible">
 *       <ng-content></ng-content>
 *     </div>
 *  </div>`})
 * export class Zippy {
 *   visible: boolean = true;
 *   \@Output() open: EventEmitter<any> = new EventEmitter();
 *   \@Output() close: EventEmitter<any> = new EventEmitter();
 *
 *   toggle() {
 *     this.visible = !this.visible;
 *     if (this.visible) {
 *       this.open.emit(null);
 *     } else {
 *       this.close.emit(null);
 *     }
 *   }
 * }
 * ```
 *
 * The events payload can be accessed by the parameter `$event` on the components output event
 * handler:
 *
 * ```
 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
 * ```
 *
 * Uses Rx.Observable but provides an adapter to make it work as specified here:
 * https://github.com/jhusain/observable-spec
 *
 * Once a reference implementation of the spec is available, switch to it.
 * \@stable
 */

var EventEmitter = function (_Subject) {
    _inherits(EventEmitter, _Subject);

    /**
     * Creates an instance of [EventEmitter], which depending on [isAsync],
     * delivers events synchronously or asynchronously.
     * @param {?=} isAsync
     */
    function EventEmitter() {
        var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, EventEmitter);

        var _this11 = _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

        _this11.__isAsync = isAsync;
        return _this11;
    }
    /**
     * @param {?=} value
     * @return {?}
     */


    _createClass(EventEmitter, [{
        key: 'emit',
        value: function emit(value) {
            _get(EventEmitter.prototype.__proto__ || Object.getPrototypeOf(EventEmitter.prototype), 'next', this).call(this, value);
        }
        /**
         * @param {?=} generatorOrNext
         * @param {?=} error
         * @param {?=} complete
         * @return {?}
         */

    }, {
        key: 'subscribe',
        value: function subscribe(generatorOrNext, error, complete) {
            var /** @type {?} */schedulerFn = void 0;
            var /** @type {?} */errorFn = function errorFn(err) {
                return null;
            };
            var /** @type {?} */completeFn = function completeFn() {
                return null;
            };
            if (generatorOrNext && (typeof generatorOrNext === 'undefined' ? 'undefined' : _typeof(generatorOrNext)) === 'object') {
                schedulerFn = this.__isAsync ? function (value) {
                    setTimeout(function () {
                        return generatorOrNext.next(value);
                    });
                } : function (value) {
                    generatorOrNext.next(value);
                };
                if (generatorOrNext.error) {
                    errorFn = this.__isAsync ? function (err) {
                        setTimeout(function () {
                            return generatorOrNext.error(err);
                        });
                    } : function (err) {
                        generatorOrNext.error(err);
                    };
                }
                if (generatorOrNext.complete) {
                    completeFn = this.__isAsync ? function () {
                        setTimeout(function () {
                            return generatorOrNext.complete();
                        });
                    } : function () {
                        generatorOrNext.complete();
                    };
                }
            } else {
                schedulerFn = this.__isAsync ? function (value) {
                    setTimeout(function () {
                        return generatorOrNext(value);
                    });
                } : function (value) {
                    generatorOrNext(value);
                };
                if (error) {
                    errorFn = this.__isAsync ? function (err) {
                        setTimeout(function () {
                            return error(err);
                        });
                    } : function (err) {
                        error(err);
                    };
                }
                if (complete) {
                    completeFn = this.__isAsync ? function () {
                        setTimeout(function () {
                            return complete();
                        });
                    } : function () {
                        complete();
                    };
                }
            }
            return _get(EventEmitter.prototype.__proto__ || Object.getPrototypeOf(EventEmitter.prototype), 'subscribe', this).call(this, schedulerFn, errorFn, completeFn);
        }
    }]);

    return EventEmitter;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]);

/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */


var /** @type {?} */VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var /** @type {?} */INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var /** @type {?} */PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var /** @type {?} */DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null) return null;
    if (!(path instanceof Array)) {
        path = path.split(delimiter);
    }
    if (path instanceof Array && path.length === 0) return null;
    return path.reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at( /** @type {?} */name) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(r) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
}
/**
 * @param {?} validator
 * @return {?}
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator;
}
/**
 * @param {?} asyncValidator
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */

var AbstractControl = function () {
    /**
     * @param {?} validator
     * @param {?} asyncValidator
     */
    function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */
        this._onCollectionChange = function () {};
        this._pristine = true;
        this._touched = false;
        /** @internal */
        this._onDisabledChange = [];
    }
    /**
     * The value of the control.
     * @return {?}
     */


    _createClass(AbstractControl, [{
        key: 'setValidators',

        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this will overwrite any existing sync validators.
         * @param {?} newValidator
         * @return {?}
         */
        value: function setValidators(newValidator) {
            this.validator = coerceToValidator(newValidator);
        }
        /**
         * Sets the async validators that are active on this control. Calling this
         * will overwrite any existing async validators.
         * @param {?} newValidator
         * @return {?}
         */

    }, {
        key: 'setAsyncValidators',
        value: function setAsyncValidators(newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
        /**
         * Empties out the sync validator list.
         * @return {?}
         */

    }, {
        key: 'clearValidators',
        value: function clearValidators() {
            this.validator = null;
        }
        /**
         * Empties out the async validator list.
         * @return {?}
         */

    }, {
        key: 'clearAsyncValidators',
        value: function clearAsyncValidators() {
            this.asyncValidator = null;
        }
        /**
         * Marks the control as `touched`.
         *
         * This will also mark all direct ancestors as `touched` to maintain
         * the model.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'markAsTouched',
        value: function markAsTouched() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref.onlySelf;

            this._touched = true;
            if (this._parent && !onlySelf) {
                this._parent.markAsTouched({ onlySelf: onlySelf });
            }
        }
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, it will also mark all children as `untouched`
         * to maintain the model, and re-calculate the `touched` status of all parent
         * controls.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'markAsUntouched',
        value: function markAsUntouched() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref2.onlySelf;

            this._touched = false;
            this._forEachChild(function (control) {
                control.markAsUntouched({ onlySelf: true });
            });
            if (this._parent && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        }
        /**
         * Marks the control as `dirty`.
         *
         * This will also mark all direct ancestors as `dirty` to maintain
         * the model.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'markAsDirty',
        value: function markAsDirty() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref3.onlySelf;

            this._pristine = false;
            if (this._parent && !onlySelf) {
                this._parent.markAsDirty({ onlySelf: onlySelf });
            }
        }
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, it will also mark all children as `pristine`
         * to maintain the model, and re-calculate the `pristine` status of all parent
         * controls.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'markAsPristine',
        value: function markAsPristine() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref4.onlySelf;

            this._pristine = true;
            this._forEachChild(function (control) {
                control.markAsPristine({ onlySelf: true });
            });
            if (this._parent && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        }
        /**
         * Marks the control as `pending`.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'markAsPending',
        value: function markAsPending() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref5.onlySelf;

            this._status = PENDING;
            if (this._parent && !onlySelf) {
                this._parent.markAsPending({ onlySelf: onlySelf });
            }
        }
        /**
         * Disables the control. This means the control will be exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children will be disabled to maintain the model.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'disable',
        value: function disable() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref6.onlySelf,
                emitEvent = _ref6.emitEvent;

            this._status = DISABLED;
            this._errors = null;
            this._forEachChild(function (control) {
                control.disable({ onlySelf: true });
            });
            this._updateValue();
            if (emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) {
                return changeFn(true);
            });
        }
        /**
         * Enables the control. This means the control will be included in validation checks and
         * the aggregate value of its parent. Its status is re-calculated based on its value and
         * its validators.
         *
         * If the control has children, all children will be enabled.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'enable',
        value: function enable() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref7.onlySelf,
                emitEvent = _ref7.emitEvent;

            this._status = VALID;
            this._forEachChild(function (control) {
                control.enable({ onlySelf: true });
            });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
            this._updateAncestors(onlySelf);
            this._onDisabledChange.forEach(function (changeFn) {
                return changeFn(false);
            });
        }
        /**
         * @param {?} onlySelf
         * @return {?}
         */

    }, {
        key: '_updateAncestors',
        value: function _updateAncestors(onlySelf) {
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity();
                this._parent._updatePristine();
                this._parent._updateTouched();
            }
        }
        /**
         * @param {?} parent
         * @return {?}
         */

    }, {
        key: 'setParent',
        value: function setParent(parent) {
            this._parent = parent;
        }
        /**
         * Sets the value of the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */

    }, {
        key: 'setValue',
        value: function setValue(value, options) {}
        /**
         * Patches the value of the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */

    }, {
        key: 'patchValue',
        value: function patchValue(value, options) {}
        /**
         * Resets the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?=} value
         * @param {?=} options
         * @return {?}
         */

    }, {
        key: 'reset',
        value: function reset(value, options) {}
        /**
         * Re-calculates the value and validation status of the control.
         *
         * By default, it will also update the value and validity of its ancestors.
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: 'updateValueAndValidity',
        value: function updateValueAndValidity() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref8.onlySelf,
                emitEvent = _ref8.emitEvent;

            this._setInitialStatus();
            this._updateValue();
            if (this.enabled) {
                this._cancelExistingSubscription();
                this._errors = this._runValidator();
                this._status = this._calculateStatus();
                if (this._status === VALID || this._status === PENDING) {
                    this._runAsyncValidator(emitEvent);
                }
            }
            if (emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            }
        }
        /**
         * \@internal
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: '_updateTreeValidity',
        value: function _updateTreeValidity() {
            var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { emitEvent: true },
                emitEvent = _ref9.emitEvent;

            this._forEachChild(function (ctrl) {
                return ctrl._updateTreeValidity({ emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        }
        /**
         * @return {?}
         */

    }, {
        key: '_setInitialStatus',
        value: function _setInitialStatus() {
            this._status = this._allControlsDisabled() ? DISABLED : VALID;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_runValidator',
        value: function _runValidator() {
            return this.validator ? this.validator(this) : null;
        }
        /**
         * @param {?} emitEvent
         * @return {?}
         */

    }, {
        key: '_runAsyncValidator',
        value: function _runAsyncValidator(emitEvent) {
            var _this12 = this;

            if (this.asyncValidator) {
                this._status = PENDING;
                var /** @type {?} */obs = toObservable(this.asyncValidator(this));
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obs)) {
                    throw new Error('expected the following validator to return Promise or Observable: ' + this.asyncValidator + '. If you are using FormBuilder; did you forget to brace your validators in an array?');
                }
                this._asyncValidationSubscription = obs.subscribe({ next: function next(res) {
                        return _this12.setErrors(res, { emitEvent: emitEvent });
                    } });
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: '_cancelExistingSubscription',
        value: function _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
            }
        }
        /**
         * Sets errors on a form control.
         *
         * This is used when validations are run manually by the user, rather than automatically.
         *
         * Calling `setErrors` will also update the validity of the parent control.
         *
         * ### Example
         *
         * ```
         * const login = new FormControl("someLogin");
         * login.setErrors({
         *   "notUnique": true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({"notUnique": true});
         *
         * login.setValue("someOtherLogin");
         *
         * expect(login.valid).toEqual(true);
         * ```
         * @param {?} errors
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'setErrors',
        value: function setErrors(errors) {
            var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                emitEvent = _ref10.emitEvent;

            this._errors = errors;
            this._updateControlsErrors(emitEvent !== false);
        }
        /**
         * Retrieves a child control given the control's name or path.
         *
         * Paths can be passed in as an array or a string delimited by a dot.
         *
         * To get a control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         * @param {?} path
         * @return {?}
         */

    }, {
        key: 'get',
        value: function get(path) {
            return _find(this, path, '.');
        }
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns null or undefined.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */

    }, {
        key: 'getError',
        value: function getError(errorCode) {
            var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var /** @type {?} */control = path ? this.get(path) : this;
            return control && control._errors ? control._errors[errorCode] : null;
        }
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns false.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */

    }, {
        key: 'hasError',
        value: function hasError(errorCode) {
            var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            return !!this.getError(errorCode, path);
        }
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */

    }, {
        key: '_updateControlsErrors',

        /**
         * \@internal
         * @param {?} emitEvent
         * @return {?}
         */
        value: function _updateControlsErrors(emitEvent) {
            this._status = this._calculateStatus();
            if (emitEvent) {
                this._statusChanges.emit(this._status);
            }
            if (this._parent) {
                this._parent._updateControlsErrors(emitEvent);
            }
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_initObservables',
        value: function _initObservables() {
            this._valueChanges = new EventEmitter();
            this._statusChanges = new EventEmitter();
        }
        /**
         * @return {?}
         */

    }, {
        key: '_calculateStatus',
        value: function _calculateStatus() {
            if (this._allControlsDisabled()) return DISABLED;
            if (this._errors) return INVALID;
            if (this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
        }
        /**
         * \@internal
         * @abstract
         * @return {?}
         */

    }, {
        key: '_updateValue',
        value: function _updateValue() {}
        /**
         * \@internal
         * @abstract
         * @param {?} cb
         * @return {?}
         */

    }, {
        key: '_forEachChild',
        value: function _forEachChild(cb) {}
        /**
         * \@internal
         * @abstract
         * @param {?} condition
         * @return {?}
         */

    }, {
        key: '_anyControls',
        value: function _anyControls(condition) {}
        /**
         * \@internal
         * @abstract
         * @return {?}
         */

    }, {
        key: '_allControlsDisabled',
        value: function _allControlsDisabled() {}
        /**
         * \@internal
         * @param {?} status
         * @return {?}
         */

    }, {
        key: '_anyControlsHaveStatus',
        value: function _anyControlsHaveStatus(status) {
            return this._anyControls(function (control) {
                return control.status === status;
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_anyControlsDirty',
        value: function _anyControlsDirty() {
            return this._anyControls(function (control) {
                return control.dirty;
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_anyControlsTouched',
        value: function _anyControlsTouched() {
            return this._anyControls(function (control) {
                return control.touched;
            });
        }
        /**
         * \@internal
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: '_updatePristine',
        value: function _updatePristine() {
            var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref11.onlySelf;

            this._pristine = !this._anyControlsDirty();
            if (this._parent && !onlySelf) {
                this._parent._updatePristine({ onlySelf: onlySelf });
            }
        }
        /**
         * \@internal
         * @param {?=} __0
         * @return {?}
         */

    }, {
        key: '_updateTouched',
        value: function _updateTouched() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                onlySelf = _ref12.onlySelf;

            this._touched = this._anyControlsTouched();
            if (this._parent && !onlySelf) {
                this._parent._updateTouched({ onlySelf: onlySelf });
            }
        }
        /**
         * \@internal
         * @param {?} formState
         * @return {?}
         */

    }, {
        key: '_isBoxedValue',
        value: function _isBoxedValue(formState) {
            return (typeof formState === 'undefined' ? 'undefined' : _typeof(formState)) === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: '_registerOnCollectionChange',
        value: function _registerOnCollectionChange(fn) {
            this._onCollectionChange = fn;
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        }
        /**
         * The parent control.
         * @return {?}
         */

    }, {
        key: 'parent',
        get: function get() {
            return this._parent;
        }
        /**
         * The validation status of the control. There are four possible
         * validation statuses:
         *
         * * **VALID**:  control has passed all validation checks
         * * **INVALID**: control has failed at least one validation check
         * * **PENDING**: control is in the midst of conducting a validation check
         * * **DISABLED**: control is exempt from validation checks
         *
         * These statuses are mutually exclusive, so a control cannot be
         * both valid AND invalid or invalid AND disabled.
         * @return {?}
         */

    }, {
        key: 'status',
        get: function get() {
            return this._status;
        }
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */

    }, {
        key: 'valid',
        get: function get() {
            return this._status === VALID;
        }
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */

    }, {
        key: 'invalid',
        get: function get() {
            return this._status === INVALID;
        }
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */

    }, {
        key: 'pending',
        get: function get() {
            return this._status == PENDING;
        }
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */

    }, {
        key: 'disabled',
        get: function get() {
            return this._status === DISABLED;
        }
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */

    }, {
        key: 'enabled',
        get: function get() {
            return this._status !== DISABLED;
        }
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */

    }, {
        key: 'errors',
        get: function get() {
            return this._errors;
        }
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */

    }, {
        key: 'pristine',
        get: function get() {
            return this._pristine;
        }
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */

    }, {
        key: 'dirty',
        get: function get() {
            return !this.pristine;
        }
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */

    }, {
        key: 'touched',
        get: function get() {
            return this._touched;
        }
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */

    }, {
        key: 'untouched',
        get: function get() {
            return !this._touched;
        }
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */

    }, {
        key: 'valueChanges',
        get: function get() {
            return this._valueChanges;
        }
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */

    }, {
        key: 'statusChanges',
        get: function get() {
            return this._statusChanges;
        }
    }, {
        key: 'root',
        get: function get() {
            var /** @type {?} */x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        }
    }]);

    return AbstractControl;
}();
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */


var FormControl = function (_AbstractControl) {
    _inherits(FormControl, _AbstractControl);

    /**
     * @param {?=} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormControl() {
        var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, FormControl);

        /** @internal */
        var _this13 = _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)));

        _this13._onChange = [];
        _this13._applyFormState(formState);
        _this13.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this13._initObservables();
        return _this13;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */


    _createClass(FormControl, [{
        key: 'setValue',
        value: function setValue(value) {
            var _this14 = this;

            var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref13.onlySelf,
                emitEvent = _ref13.emitEvent,
                emitModelToViewChange = _ref13.emitModelToViewChange,
                emitViewToModelChange = _ref13.emitViewToModelChange;

            this._value = value;
            if (this._onChange.length && emitModelToViewChange !== false) {
                this._onChange.forEach(function (changeFn) {
                    return changeFn(_this14._value, emitViewToModelChange !== false);
                });
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {\@link FormControl.setValue} at this level.
         * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
         * where it does behave differently.
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */

    }, {
        key: 'patchValue',
        value: function patchValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.setValue(value, options);
        }
        /**
         * Resets the form control. This means by default:
         *
         * * it is marked as `pristine`
         * * it is marked as `untouched`
         * * value is set to null
         *
         * You can also reset to a specific form state by passing through a standalone
         * value or a form state object that contains both a value and a disabled state
         * (these are the only two properties that cannot be calculated).
         *
         * Ex:
         *
         * ```ts
         * this.control.reset('Nancy');
         *
         * console.log(this.control.value);  // 'Nancy'
         * ```
         *
         * OR
         *
         * ```
         * this.control.reset({value: 'Nancy', disabled: true});
         *
         * console.log(this.control.value);  // 'Nancy'
         * console.log(this.control.status);  // 'DISABLED'
         * ```
         * @param {?=} formState
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'reset',
        value: function reset() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref14.onlySelf,
                emitEvent = _ref14.emitEvent;

            this._applyFormState(formState);
            this.markAsPristine({ onlySelf: onlySelf });
            this.markAsUntouched({ onlySelf: onlySelf });
            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_updateValue',
        value: function _updateValue() {}
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

    }, {
        key: '_anyControls',
        value: function _anyControls(condition) {
            return false;
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_allControlsDisabled',
        value: function _allControlsDisabled() {
            return this.disabled;
        }
        /**
         * Register a listener for change events.
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnChange',
        value: function registerOnChange(fn) {
            this._onChange.push(fn);
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_clearChangeFns',
        value: function _clearChangeFns() {
            this._onChange = [];
            this._onDisabledChange = [];
            this._onCollectionChange = function () {};
        }
        /**
         * Register a listener for disabled events.
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnDisabledChange',
        value: function registerOnDisabledChange(fn) {
            this._onDisabledChange.push(fn);
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

    }, {
        key: '_forEachChild',
        value: function _forEachChild(cb) {}
        /**
         * @param {?} formState
         * @return {?}
         */

    }, {
        key: '_applyFormState',
        value: function _applyFormState(formState) {
            if (this._isBoxedValue(formState)) {
                this._value = formState.value;
                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) : this.enable({ onlySelf: true, emitEvent: false });
            } else {
                this._value = formState;
            }
        }
    }]);

    return FormControl;
}(AbstractControl);
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */


var FormGroup = function (_AbstractControl2) {
    _inherits(FormGroup, _AbstractControl2);

    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormGroup(controls) {
        var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, FormGroup);

        var _this15 = _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).call(this, validator, asyncValidator));

        _this15.controls = controls;
        _this15._initObservables();
        _this15._setUpControls();
        _this15.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this15;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {\@link FormGroup.addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */


    _createClass(FormGroup, [{
        key: 'registerControl',
        value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
            return control;
        }
        /**
         * Add a control to this group.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'addControl',
        value: function addControl(name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Remove a control from this group.
         * @param {?} name
         * @return {?}
         */

    }, {
        key: 'removeControl',
        value: function removeControl(name) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'setControl',
        value: function setControl(name, control) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            if (control) this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * It will return false for disabled controls. If you'd like to check for
         * existence in the group only, use {\@link AbstractControl.get} instead.
         * @param {?} controlName
         * @return {?}
         */

    }, {
        key: 'contains',
        value: function contains(controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        }
        /**
         *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
         *  the structure of the group, with control names as keys.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.setValue({first: 'Nancy', last: 'Drew'});
         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         *
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'setValue',
        value: function setValue(value) {
            var _this16 = this;

            var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref15.onlySelf,
                emitEvent = _ref15.emitEvent;

            this._checkAllValuesPresent(value);
            Object.keys(value).forEach(function (name) {
                _this16._throwIfControlMissing(name);
                _this16.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         *  Patches the value of the {\@link FormGroup}. It accepts an object with control
         *  names as keys, and will do its best to match the values to the correct controls
         *  in the group.
         *
         *  It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.patchValue({first: 'Nancy'});
         *  console.log(form.value);   // {first: 'Nancy', last: null}
         *
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'patchValue',
        value: function patchValue(value) {
            var _this17 = this;

            var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref16.onlySelf,
                emitEvent = _ref16.emitEvent;

            Object.keys(value).forEach(function (name) {
                if (_this17.controls[name]) {
                    _this17.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         * Resets the {\@link FormGroup}. This means by default:
         *
         * * The group and all descendants are marked `pristine`
         * * The group and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * can be a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * ### Example
         *
         * ```ts
         * this.form.reset({first: 'name', last: 'last name'});
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * - OR -
         *
         * ```
         * this.form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         * @param {?=} value
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'reset',
        value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref17.onlySelf,
                emitEvent = _ref17.emitEvent;

            this._forEachChild(function (control, name) {
                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        }
        /**
         * The aggregate value of the {\@link FormGroup}, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the group.
         * @return {?}
         */

    }, {
        key: 'getRawValue',
        value: function getRawValue() {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
                return acc;
            });
        }
        /**
         * \@internal
         * @param {?} name
         * @return {?}
         */

    }, {
        key: '_throwIfControlMissing',
        value: function _throwIfControlMissing(name) {
            if (!Object.keys(this.controls).length) {
                throw new Error('\n        There are no form controls registered with this group yet.  If you\'re using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ');
            }
            if (!this.controls[name]) {
                throw new Error('Cannot find form control with name: ' + name + '.');
            }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

    }, {
        key: '_forEachChild',
        value: function _forEachChild(cb) {
            var _this18 = this;

            Object.keys(this.controls).forEach(function (k) {
                return cb(_this18.controls[k], k);
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_setUpControls',
        value: function _setUpControls() {
            var _this19 = this;

            this._forEachChild(function (control) {
                control.setParent(_this19);
                control._registerOnCollectionChange(_this19._onCollectionChange);
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_updateValue',
        value: function _updateValue() {
            this._value = this._reduceValue();
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

    }, {
        key: '_anyControls',
        value: function _anyControls(condition) {
            var _this20 = this;

            var /** @type {?} */res = false;
            this._forEachChild(function (control, name) {
                res = res || _this20.contains(name) && condition(control);
            });
            return res;
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_reduceValue',
        value: function _reduceValue() {
            var _this21 = this;

            return this._reduceChildren({}, function (acc, control, name) {
                if (control.enabled || _this21.disabled) {
                    acc[name] = control.value;
                }
                return acc;
            });
        }
        /**
         * \@internal
         * @param {?} initValue
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: '_reduceChildren',
        value: function _reduceChildren(initValue, fn) {
            var /** @type {?} */res = initValue;
            this._forEachChild(function (control, name) {
                res = fn(res, control, name);
            });
            return res;
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_allControlsDisabled',
        value: function _allControlsDisabled() {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = Object.keys(this.controls)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var controlName = _step6.value;

                    if (this.controls[controlName].enabled) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return Object.keys(this.controls).length > 0 || this.disabled;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

    }, {
        key: '_checkAllValuesPresent',
        value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, name) {
                if (value[name] === undefined) {
                    throw new Error('Must supply a value for form control with name: \'' + name + '\'.');
                }
            });
        }
    }]);

    return FormGroup;
}(AbstractControl);
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */


var FormArray = function (_AbstractControl3) {
    _inherits(FormArray, _AbstractControl3);

    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormArray(controls) {
        var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, FormArray);

        var _this22 = _possibleConstructorReturn(this, (FormArray.__proto__ || Object.getPrototypeOf(FormArray)).call(this, validator, asyncValidator));

        _this22.controls = controls;
        _this22._initObservables();
        _this22._setUpControls();
        _this22.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this22;
    }
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */


    _createClass(FormArray, [{
        key: 'at',
        value: function at(index) {
            return this.controls[index];
        }
        /**
         * Insert a new {\@link AbstractControl} at the end of the array.
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'push',
        value: function push(control) {
            this.controls.push(control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Insert a new {\@link AbstractControl} at the given `index` in the array.
         * @param {?} index
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'insert',
        value: function insert(index, control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Remove the control at the given `index` in the array.
         * @param {?} index
         * @return {?}
         */

    }, {
        key: 'removeAt',
        value: function removeAt(index) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         * @param {?} index
         * @param {?} control
         * @return {?}
         */

    }, {
        key: 'setControl',
        value: function setControl(index, control) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            if (control) {
                this.controls.splice(index, 0, control);
                this._registerControl(control);
            }
            this.updateValueAndValidity();
            this._onCollectionChange();
        }
        /**
         * Length of the control array.
         * @return {?}
         */

    }, {
        key: 'setValue',

        /**
         *  Sets the value of the {\@link FormArray}. It accepts an array that matches
         *  the structure of the control.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.setValue(['Nancy', 'Drew']);
         *  console.log(arr.value);   // ['Nancy', 'Drew']
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */
        value: function setValue(value) {
            var _this23 = this;

            var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref18.onlySelf,
                emitEvent = _ref18.emitEvent;

            this._checkAllValuesPresent(value);
            value.forEach(function (newValue, index) {
                _this23._throwIfControlMissing(index);
                _this23.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
         *  structure of the control, and will do its best to match the values to the correct
         *  controls in the group.
         *
         *  It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.patchValue(['Nancy']);
         *  console.log(arr.value);   // ['Nancy', null]
         *  ```
         * @param {?} value
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'patchValue',
        value: function patchValue(value) {
            var _this24 = this;

            var _ref19 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref19.onlySelf,
                emitEvent = _ref19.emitEvent;

            value.forEach(function (newValue, index) {
                if (_this24.at(index)) {
                    _this24.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
                }
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
        /**
         * Resets the {\@link FormArray}. This means by default:
         *
         * * The array and all descendants are marked `pristine`
         * * The array and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state can be a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * ### Example
         *
         * ```ts
         * this.arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * - OR -
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         * @param {?=} value
         * @param {?=} __1
         * @return {?}
         */

    }, {
        key: 'reset',
        value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var _ref20 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                onlySelf = _ref20.onlySelf,
                emitEvent = _ref20.emitEvent;

            this._forEachChild(function (control, index) {
                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
            });
            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
            this._updatePristine({ onlySelf: onlySelf });
            this._updateTouched({ onlySelf: onlySelf });
        }
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the array.
         * @return {?}
         */

    }, {
        key: 'getRawValue',
        value: function getRawValue() {
            return this.controls.map(function (control) {
                return control instanceof FormControl ? control.value : control.getRawValue();
            });
        }
        /**
         * \@internal
         * @param {?} index
         * @return {?}
         */

    }, {
        key: '_throwIfControlMissing',
        value: function _throwIfControlMissing(index) {
            if (!this.controls.length) {
                throw new Error('\n        There are no form controls registered with this array yet.  If you\'re using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ');
            }
            if (!this.at(index)) {
                throw new Error('Cannot find form control at index ' + index);
            }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

    }, {
        key: '_forEachChild',
        value: function _forEachChild(cb) {
            this.controls.forEach(function (control, index) {
                cb(control, index);
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_updateValue',
        value: function _updateValue() {
            var _this25 = this;

            this._value = this.controls.filter(function (control) {
                return control.enabled || _this25.disabled;
            }).map(function (control) {
                return control.value;
            });
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

    }, {
        key: '_anyControls',
        value: function _anyControls(condition) {
            return this.controls.some(function (control) {
                return control.enabled && condition(control);
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_setUpControls',
        value: function _setUpControls() {
            var _this26 = this;

            this._forEachChild(function (control) {
                return _this26._registerControl(control);
            });
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

    }, {
        key: '_checkAllValuesPresent',
        value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, i) {
                if (value[i] === undefined) {
                    throw new Error('Must supply a value for form control at index: ' + i + '.');
                }
            });
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_allControlsDisabled',
        value: function _allControlsDisabled() {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this.controls[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var control = _step7.value;

                    if (control.enabled) return false;
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            return this.controls.length > 0 || this.disabled;
        }
        /**
         * @param {?} control
         * @return {?}
         */

    }, {
        key: '_registerControl',
        value: function _registerControl(control) {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        }
    }, {
        key: 'length',
        get: function get() {
            return this.controls.length;
        }
    }]);

    return FormArray;
}(AbstractControl);

var /** @type {?} */formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return NgForm;
    })
};
var /** @type {?} */resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */

var NgForm = function (_ControlContainer2) {
    _inherits(NgForm, _ControlContainer2);

    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgForm(validators, asyncValidators) {
        _classCallCheck(this, NgForm);

        var _this27 = _possibleConstructorReturn(this, (NgForm.__proto__ || Object.getPrototypeOf(NgForm)).call(this));

        _this27._submitted = false;
        _this27.ngSubmit = new EventEmitter();
        _this27.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this27;
    }
    /**
     * @return {?}
     */


    _createClass(NgForm, [{
        key: 'addControl',

        /**
         * @param {?} dir
         * @return {?}
         */
        value: function addControl(dir) {
            var _this28 = this;

            resolvedPromise.then(function () {
                var /** @type {?} */container = _this28._findContainer(dir.path);
                dir._control = container.registerControl(dir.name, dir.control);
                setUpControl(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
            });
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'getControl',
        value: function getControl(dir) {
            return this.form.get(dir.path);
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'removeControl',
        value: function removeControl(dir) {
            var _this29 = this;

            resolvedPromise.then(function () {
                var /** @type {?} */container = _this29._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'addFormGroup',
        value: function addFormGroup(dir) {
            var _this30 = this;

            resolvedPromise.then(function () {
                var /** @type {?} */container = _this30._findContainer(dir.path);
                var /** @type {?} */group = new FormGroup({});
                setUpFormContainer(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'removeFormGroup',
        value: function removeFormGroup(dir) {
            var _this31 = this;

            resolvedPromise.then(function () {
                var /** @type {?} */container = _this31._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'getFormGroup',
        value: function getFormGroup(dir) {
            return this.form.get(dir.path);
        }
        /**
         * @param {?} dir
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'updateModel',
        value: function updateModel(dir, value) {
            var _this32 = this;

            resolvedPromise.then(function () {
                var /** @type {?} */ctrl = _this32.form.get(dir.path);
                ctrl.setValue(value);
            });
        }
        /**
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.control.setValue(value);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

    }, {
        key: 'onSubmit',
        value: function onSubmit($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'onReset',
        value: function onReset() {
            this.resetForm();
        }
        /**
         * @param {?=} value
         * @return {?}
         */

    }, {
        key: 'resetForm',
        value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this.form.reset(value);
            this._submitted = false;
        }
        /**
         * \@internal
         * @param {?} path
         * @return {?}
         */

    }, {
        key: '_findContainer',
        value: function _findContainer(path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
        }
    }, {
        key: 'submitted',
        get: function get() {
            return this._submitted;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'formDirective',
        get: function get() {
            return this;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'control',
        get: function get() {
            return this.form;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return [];
        }
        /**
         * @return {?}
         */

    }, {
        key: 'controls',
        get: function get() {
            return this.form.controls;
        }
    }]);

    return NgForm;
}(ControlContainer);

NgForm.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
        providers: [formDirectiveProvider],
        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
        outputs: ['ngSubmit'],
        exportAs: 'ngForm'
    }] }];
/** @nocollapse */
NgForm.ctorParameters = function () {
    return [{ type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }];
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var /** @type {?} */Examples = {
    formControlName: '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
    formGroupName: '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
    formArrayName: '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; let i=index">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
    ngModelGroup: '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
    ngModelWithFormGroup: '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
};

var TemplateDrivenErrors = function () {
    function TemplateDrivenErrors() {
        _classCallCheck(this, TemplateDrivenErrors);
    }

    _createClass(TemplateDrivenErrors, null, [{
        key: 'modelParentException',

        /**
         * @return {?}
         */
        value: function modelParentException() {
            throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' + Examples.formControlName + '\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      ' + Examples.ngModelWithFormGroup);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'formGroupNameException',
        value: function formGroupNameException() {
            throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ' + Examples.formGroupName + '\n\n      Option 2:  Update ngModel\'s parent be ngModelGroup (template-driven strategy):\n\n      ' + Examples.ngModelGroup);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'missingNameException',
        value: function missingNameException() {
            throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">');
        }
        /**
         * @return {?}
         */

    }, {
        key: 'modelGroupParentException',
        value: function modelGroupParentException() {
            throw new Error('\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ' + Examples.formGroupName + '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ' + Examples.ngModelGroup);
        }
    }]);

    return TemplateDrivenErrors;
}();

var /** @type {?} */modelGroupProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return NgModelGroup;
    })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */

var NgModelGroup = function (_AbstractFormGroupDir) {
    _inherits(NgModelGroup, _AbstractFormGroupDir);

    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgModelGroup(parent, validators, asyncValidators) {
        _classCallCheck(this, NgModelGroup);

        var _this33 = _possibleConstructorReturn(this, (NgModelGroup.__proto__ || Object.getPrototypeOf(NgModelGroup)).call(this));

        _this33._parent = parent;
        _this33._validators = validators;
        _this33._asyncValidators = asyncValidators;
        return _this33;
    }
    /**
     * \@internal
     * @return {?}
     */


    _createClass(NgModelGroup, [{
        key: '_checkParentType',
        value: function _checkParentType() {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelGroupParentException();
            }
        }
    }]);

    return NgModelGroup;
}(AbstractFormGroupDirective);

NgModelGroup.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }] }];
/** @nocollapse */
NgModelGroup.ctorParameters = function () {
    return [{ type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }];
};
NgModelGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelGroup'] }]
};

var /** @type {?} */formControlBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return NgModel;
    })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var /** @type {?} */resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */

var NgModel = function (_NgControl) {
    _inherits(NgModel, _NgControl);

    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        _classCallCheck(this, NgModel);

        /** @internal */
        var _this34 = _possibleConstructorReturn(this, (NgModel.__proto__ || Object.getPrototypeOf(NgModel)).call(this));

        _this34._control = new FormControl();
        /** @internal */
        _this34._registered = false;
        _this34._composing = false;
        _this34.update = new EventEmitter();
        _this34._parent = parent;
        _this34._rawValidators = validators || [];
        _this34._rawAsyncValidators = asyncValidators || [];
        _this34.valueAccessor = selectValueAccessor(_this34, valueAccessors);
        return _this34;
    }
    /**
     * @return {?}
     */


    _createClass(NgModel, [{
        key: 'compositionStart',
        value: function compositionStart() {
            this._composing = true;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'compositionEnd',
        value: function compositionEnd() {
            this._composing = false;
            this.update.emit(this.viewModel);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

    }, {
        key: 'ngOnChanges',
        value: function ngOnChanges(changes) {
            this._checkForErrors();
            if (!this._registered) this._setUpControl();
            if ('isDisabled' in changes) {
                this._updateDisabled(changes);
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'viewToModelUpdate',

        /**
         * @param {?} newValue
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            !this._composing && this.update.emit(newValue);
        }
        /**
         * @return {?}
         */

    }, {
        key: '_setUpControl',
        value: function _setUpControl() {
            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_isStandalone',
        value: function _isStandalone() {
            return !this._parent || this.options && this.options.standalone;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_setUpStandalone',
        value: function _setUpStandalone() {
            setUpControl(this._control, this);
            this._control.updateValueAndValidity({ emitEvent: false });
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkForErrors',
        value: function _checkForErrors() {
            if (!this._isStandalone()) {
                this._checkParentType();
            }
            this._checkName();
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkParentType',
        value: function _checkParentType() {
            if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
            } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkName',
        value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                TemplateDrivenErrors.missingNameException();
            }
        }
        /**
         * @param {?} value
         * @return {?}
         */

    }, {
        key: '_updateValue',
        value: function _updateValue(value) {
            var _this35 = this;

            resolvedPromise$1.then(function () {
                _this35.control.setValue(value, { emitViewToModelChange: false });
            });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

    }, {
        key: '_updateDisabled',
        value: function _updateDisabled(changes) {
            var _this36 = this;

            var /** @type {?} */disabledValue = changes['isDisabled'].currentValue;
            var /** @type {?} */isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
            resolvedPromise$1.then(function () {
                if (isDisabled && !_this36.control.disabled) {
                    _this36.control.disable();
                } else if (!isDisabled && _this36.control.disabled) {
                    _this36.control.enable();
                }
            });
        }
    }, {
        key: 'control',
        get: function get() {
            return this._control;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        }
        /**
         * @return {?}
         */

    }, {
        key: 'formDirective',
        get: function get() {
            return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'validator',
        get: function get() {
            return composeValidators(this._rawValidators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'asyncValidator',
        get: function get() {
            return composeAsyncValidators(this._rawAsyncValidators);
        }
    }]);

    return NgModel;
}(NgControl);

NgModel.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[ngModel]:not([formControlName]):not([formControl])',
        providers: [formControlBinding],
        exportAs: 'ngModel'
    }] }];
/** @nocollapse */
NgModel.ctorParameters = function () {
    return [{ type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR] }] }];
};
NgModel.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled'] }],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel'] }],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelOptions'] }],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange'] }],
    'compositionStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['compositionstart'] }],
    'compositionEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['compositionend'] }]
};

var ReactiveErrors = function () {
    function ReactiveErrors() {
        _classCallCheck(this, ReactiveErrors);
    }

    _createClass(ReactiveErrors, null, [{
        key: 'controlParentException',

        /**
         * @return {?}
         */
        value: function controlParentException() {
            throw new Error('formControlName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ' + Examples.formControlName);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngModelGroupException',
        value: function ngModelGroupException() {
            throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' + Examples.formGroupName + '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ' + Examples.ngModelGroup);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'missingFormException',
        value: function missingFormException() {
            throw new Error('formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' + Examples.formControlName);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'groupParentException',
        value: function groupParentException() {
            throw new Error('formGroupName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ' + Examples.formGroupName);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'arrayParentException',
        value: function arrayParentException() {
            throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ' + Examples.formArrayName);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'disabledAttrWarning',
        value: function disabledAttrWarning() {
            console.warn('\n      It looks like you\'re using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid \'changed after checked\' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: \'Nancy\', disabled: true}, Validators.required),\n        last: new FormControl(\'Drew\', Validators.required)\n      });\n    ');
        }
    }]);

    return ReactiveErrors;
}();

var /** @type {?} */formControlBinding$1 = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return FormControlDirective;
    })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl.setValue} or
 * {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */

var FormControlDirective = function (_NgControl2) {
    _inherits(FormControlDirective, _NgControl2);

    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        _classCallCheck(this, FormControlDirective);

        var _this37 = _possibleConstructorReturn(this, (FormControlDirective.__proto__ || Object.getPrototypeOf(FormControlDirective)).call(this));

        _this37.update = new EventEmitter();
        _this37._rawValidators = validators || [];
        _this37._rawAsyncValidators = asyncValidators || [];
        _this37.valueAccessor = selectValueAccessor(_this37, valueAccessors);
        return _this37;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */


    _createClass(FormControlDirective, [{
        key: 'ngOnChanges',

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
                setUpControl(this.form, this);
                if (this.control.disabled && this.valueAccessor.setDisabledState) {
                    this.valueAccessor.setDisabledState(true);
                }
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.form.setValue(this.model);
                this.viewModel = this.model;
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: 'viewToModelUpdate',

        /**
         * @param {?} newValue
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

    }, {
        key: '_isControlChanged',
        value: function _isControlChanged(changes) {
            return changes.hasOwnProperty('form');
        }
    }, {
        key: 'isDisabled',
        set: function set(isDisabled) {
            ReactiveErrors.disabledAttrWarning();
        }
    }, {
        key: 'path',
        get: function get() {
            return [];
        }
        /**
         * @return {?}
         */

    }, {
        key: 'validator',
        get: function get() {
            return composeValidators(this._rawValidators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'asyncValidator',
        get: function get() {
            return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'control',
        get: function get() {
            return this.form;
        }
    }]);

    return FormControlDirective;
}(NgControl);

FormControlDirective.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' }] }];
/** @nocollapse */
FormControlDirective.ctorParameters = function () {
    return [{ type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR] }] }];
};
FormControlDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControl'] }],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel'] }],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange'] }],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled'] }]
};

var /** @type {?} */formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return FormGroupDirective;
    })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
 * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
 * re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */

var FormGroupDirective = function (_ControlContainer3) {
    _inherits(FormGroupDirective, _ControlContainer3);

    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    function FormGroupDirective(_validators, _asyncValidators) {
        _classCallCheck(this, FormGroupDirective);

        var _this38 = _possibleConstructorReturn(this, (FormGroupDirective.__proto__ || Object.getPrototypeOf(FormGroupDirective)).call(this));

        _this38._validators = _validators;
        _this38._asyncValidators = _asyncValidators;
        _this38._submitted = false;
        _this38.directives = [];
        _this38.form = null;
        _this38.ngSubmit = new EventEmitter();
        return _this38;
    }
    /**
     * @param {?} changes
     * @return {?}
     */


    _createClass(FormGroupDirective, [{
        key: 'ngOnChanges',
        value: function ngOnChanges(changes) {
            this._checkFormPresent();
            if (changes.hasOwnProperty('form')) {
                this._updateValidators();
                this._updateDomValue();
                this._updateRegistrations();
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: 'addControl',

        /**
         * @param {?} dir
         * @return {?}
         */
        value: function addControl(dir) {
            var /** @type {?} */ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
            return ctrl;
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'getControl',
        value: function getControl(dir) {
            return this.form.get(dir.path);
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'removeControl',
        value: function removeControl(dir) {
            ListWrapper.remove(this.directives, dir);
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'addFormGroup',
        value: function addFormGroup(dir) {
            var /** @type {?} */ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'removeFormGroup',
        value: function removeFormGroup(dir) {}
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'getFormGroup',
        value: function getFormGroup(dir) {
            return this.form.get(dir.path);
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'addFormArray',
        value: function addFormArray(dir) {
            var /** @type {?} */ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        }
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'removeFormArray',
        value: function removeFormArray(dir) {}
        /**
         * @param {?} dir
         * @return {?}
         */

    }, {
        key: 'getFormArray',
        value: function getFormArray(dir) {
            return this.form.get(dir.path);
        }
        /**
         * @param {?} dir
         * @param {?} value
         * @return {?}
         */

    }, {
        key: 'updateModel',
        value: function updateModel(dir, value) {
            var /** @type {?} */ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

    }, {
        key: 'onSubmit',
        value: function onSubmit($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'onReset',
        value: function onReset() {
            this.resetForm();
        }
        /**
         * @param {?=} value
         * @return {?}
         */

    }, {
        key: 'resetForm',
        value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this.form.reset(value);
            this._submitted = false;
        }
        /**
         * \@internal
         * @return {?}
         */

    }, {
        key: '_updateDomValue',
        value: function _updateDomValue() {
            var _this39 = this;

            this.directives.forEach(function (dir) {
                var /** @type {?} */newCtrl = _this39.form.get(dir.path);
                if (dir._control !== newCtrl) {
                    cleanUpControl(dir._control, dir);
                    if (newCtrl) setUpControl(newCtrl, dir);
                    dir._control = newCtrl;
                }
            });
            this.form._updateTreeValidity({ emitEvent: false });
        }
        /**
         * @return {?}
         */

    }, {
        key: '_updateRegistrations',
        value: function _updateRegistrations() {
            var _this40 = this;

            this.form._registerOnCollectionChange(function () {
                return _this40._updateDomValue();
            });
            if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
            this._oldForm = this.form;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_updateValidators',
        value: function _updateValidators() {
            var /** @type {?} */sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([this.form.validator, sync]);
            var /** @type {?} */async = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkFormPresent',
        value: function _checkFormPresent() {
            if (!this.form) {
                ReactiveErrors.missingFormException();
            }
        }
    }, {
        key: 'submitted',
        get: function get() {
            return this._submitted;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'formDirective',
        get: function get() {
            return this;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'control',
        get: function get() {
            return this.form;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return [];
        }
    }]);

    return FormGroupDirective;
}(ControlContainer);

FormGroupDirective.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[formGroup]',
        providers: [formDirectiveProvider$1],
        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
        exportAs: 'ngForm'
    }] }];
/** @nocollapse */
FormGroupDirective.ctorParameters = function () {
    return [{ type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }];
};
FormGroupDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroup'] }],
    'ngSubmit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] }]
};

var /** @type {?} */formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return FormGroupName;
    })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */

var FormGroupName = function (_AbstractFormGroupDir2) {
    _inherits(FormGroupName, _AbstractFormGroupDir2);

    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormGroupName(parent, validators, asyncValidators) {
        _classCallCheck(this, FormGroupName);

        var _this41 = _possibleConstructorReturn(this, (FormGroupName.__proto__ || Object.getPrototypeOf(FormGroupName)).call(this));

        _this41._parent = parent;
        _this41._validators = validators;
        _this41._asyncValidators = asyncValidators;
        return _this41;
    }
    /**
     * \@internal
     * @return {?}
     */


    _createClass(FormGroupName, [{
        key: '_checkParentType',
        value: function _checkParentType() {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.groupParentException();
            }
        }
    }]);

    return FormGroupName;
}(AbstractFormGroupDirective);

FormGroupName.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] }] }];
/** @nocollapse */
FormGroupName.ctorParameters = function () {
    return [{ type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }];
};
FormGroupName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroupName'] }]
};
var /** @type {?} */formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return FormArrayName;
    })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
 * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
 * status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
 * calling its {\@link FormArray.push} method.
 *  Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */

var FormArrayName = function (_ControlContainer4) {
    _inherits(FormArrayName, _ControlContainer4);

    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormArrayName(parent, validators, asyncValidators) {
        _classCallCheck(this, FormArrayName);

        var _this42 = _possibleConstructorReturn(this, (FormArrayName.__proto__ || Object.getPrototypeOf(FormArrayName)).call(this));

        _this42._parent = parent;
        _this42._validators = validators;
        _this42._asyncValidators = asyncValidators;
        return _this42;
    }
    /**
     * @return {?}
     */


    _createClass(FormArrayName, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            this._checkParentType();
            this.formDirective.addFormArray(this);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if (this.formDirective) {
                this.formDirective.removeFormArray(this);
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkParentType',

        /**
         * @return {?}
         */
        value: function _checkParentType() {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.arrayParentException();
            }
        }
    }, {
        key: 'control',
        get: function get() {
            return this.formDirective.getFormArray(this);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'formDirective',
        get: function get() {
            return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'path',
        get: function get() {
            return controlPath(this.name, this._parent);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'validator',
        get: function get() {
            return composeValidators(this._validators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'asyncValidator',
        get: function get() {
            return composeAsyncValidators(this._asyncValidators);
        }
    }]);

    return FormArrayName;
}(ControlContainer);

FormArrayName.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] }] }];
/** @nocollapse */
FormArrayName.ctorParameters = function () {
    return [{ type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }];
};
FormArrayName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formArrayName'] }]
};
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}

var /** @type {?} */controlNameBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return FormControlName;
    })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl.get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */

var FormControlName = function (_NgControl3) {
    _inherits(FormControlName, _NgControl3);

    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        _classCallCheck(this, FormControlName);

        var _this43 = _possibleConstructorReturn(this, (FormControlName.__proto__ || Object.getPrototypeOf(FormControlName)).call(this));

        _this43._added = false;
        _this43.update = new EventEmitter();
        _this43._parent = parent;
        _this43._rawValidators = validators || [];
        _this43._rawAsyncValidators = asyncValidators || [];
        _this43.valueAccessor = selectValueAccessor(_this43, valueAccessors);
        return _this43;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */


    _createClass(FormControlName, [{
        key: 'ngOnChanges',

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
            if (!this._added) this._setUpControl();
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: 'ngOnDestroy',
        value: function ngOnDestroy() {
            if (this.formDirective) {
                this.formDirective.removeControl(this);
            }
        }
        /**
         * @param {?} newValue
         * @return {?}
         */

    }, {
        key: 'viewToModelUpdate',
        value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        }
        /**
         * @return {?}
         */

    }, {
        key: '_checkParentType',

        /**
         * @return {?}
         */
        value: function _checkParentType() {
            if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
            } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
            }
        }
        /**
         * @return {?}
         */

    }, {
        key: '_setUpControl',
        value: function _setUpControl() {
            this._checkParentType();
            this._control = this.formDirective.addControl(this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this._added = true;
        }
    }, {
        key: 'isDisabled',
        set: function set(isDisabled) {
            ReactiveErrors.disabledAttrWarning();
        }
    }, {
        key: 'path',
        get: function get() {
            return controlPath(this.name, this._parent);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'formDirective',
        get: function get() {
            return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @return {?}
         */

    }, {
        key: 'validator',
        get: function get() {
            return composeValidators(this._rawValidators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'asyncValidator',
        get: function get() {
            return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * @return {?}
         */

    }, {
        key: 'control',
        get: function get() {
            return this._control;
        }
    }]);

    return FormControlName;
}(NgControl);

FormControlName.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] }] }];
/** @nocollapse */
FormControlName.ctorParameters = function () {
    return [{ type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS] }] }, { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR] }] }];
};
FormControlName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControlName'] }],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel'] }],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange'] }],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled'] }]
};

var /** @type {?} */REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return RequiredValidator;
    }),
    multi: true
};
var /** @type {?} */CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return CheckboxRequiredValidator;
    }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */

var RequiredValidator = function () {
    function RequiredValidator() {
        _classCallCheck(this, RequiredValidator);
    }

    _createClass(RequiredValidator, [{
        key: 'validate',

        /**
         * @param {?} c
         * @return {?}
         */
        value: function validate(c) {
            return this.required ? Validators.required(c) : null;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnValidatorChange',
        value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
        }
    }, {
        key: 'required',

        /**
         * @return {?}
         */
        get: function get() {
            return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
            this._required = value != null && value !== false && '' + value !== 'false';
            if (this._onChange) this._onChange();
        }
    }]);

    return RequiredValidator;
}();

RequiredValidator.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
        providers: [REQUIRED_VALIDATOR],
        host: { '[attr.required]': 'required ? "" : null' }
    }] }];
/** @nocollapse */
RequiredValidator.ctorParameters = function () {
    return [];
};
RequiredValidator.propDecorators = {
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */

var CheckboxRequiredValidator = function (_RequiredValidator) {
    _inherits(CheckboxRequiredValidator, _RequiredValidator);

    function CheckboxRequiredValidator() {
        _classCallCheck(this, CheckboxRequiredValidator);

        return _possibleConstructorReturn(this, (CheckboxRequiredValidator.__proto__ || Object.getPrototypeOf(CheckboxRequiredValidator)).apply(this, arguments));
    }

    _createClass(CheckboxRequiredValidator, [{
        key: 'validate',

        /**
         * @param {?} c
         * @return {?}
         */
        value: function validate(c) {
            return this.required ? Validators.requiredTrue(c) : null;
        }
    }]);

    return CheckboxRequiredValidator;
}(RequiredValidator);

CheckboxRequiredValidator.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: { '[attr.required]': 'required ? "" : null' }
    }] }];
/** @nocollapse */
CheckboxRequiredValidator.ctorParameters = function () {
    return [];
};
/**
 * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
 */
var /** @type {?} */EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return EmailValidator;
    }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */

var EmailValidator = function () {
    function EmailValidator() {
        _classCallCheck(this, EmailValidator);
    }

    _createClass(EmailValidator, [{
        key: 'validate',

        /**
         * @param {?} c
         * @return {?}
         */
        value: function validate(c) {
            return this._enabled ? Validators.email(c) : null;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnValidatorChange',
        value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
        }
    }, {
        key: 'email',

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange) this._onChange();
        }
    }]);

    return EmailValidator;
}();

EmailValidator.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [EMAIL_VALIDATOR]
    }] }];
/** @nocollapse */
EmailValidator.ctorParameters = function () {
    return [];
};
EmailValidator.propDecorators = {
    'email': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};
/**
 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var /** @type {?} */MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return MinLengthValidator;
    }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */

var MinLengthValidator = function () {
    function MinLengthValidator() {
        _classCallCheck(this, MinLengthValidator);
    }

    _createClass(MinLengthValidator, [{
        key: 'ngOnChanges',

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
            if ('minlength' in changes) {
                this._createValidator();
                if (this._onChange) this._onChange();
            }
        }
        /**
         * @param {?} c
         * @return {?}
         */

    }, {
        key: 'validate',
        value: function validate(c) {
            return this.minlength == null ? null : this._validator(c);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnValidatorChange',
        value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_createValidator',
        value: function _createValidator() {
            this._validator = Validators.minLength(parseInt(this.minlength, 10));
        }
    }]);

    return MinLengthValidator;
}();

MinLengthValidator.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
        providers: [MIN_LENGTH_VALIDATOR],
        host: { '[attr.minlength]': 'minlength ? minlength : null' }
    }] }];
/** @nocollapse */
MinLengthValidator.ctorParameters = function () {
    return [];
};
MinLengthValidator.propDecorators = {
    'minlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};
/**
 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var /** @type {?} */MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return MaxLengthValidator;
    }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */

var MaxLengthValidator = function () {
    function MaxLengthValidator() {
        _classCallCheck(this, MaxLengthValidator);
    }

    _createClass(MaxLengthValidator, [{
        key: 'ngOnChanges',

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
            if ('maxlength' in changes) {
                this._createValidator();
                if (this._onChange) this._onChange();
            }
        }
        /**
         * @param {?} c
         * @return {?}
         */

    }, {
        key: 'validate',
        value: function validate(c) {
            return this.maxlength != null ? this._validator(c) : null;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnValidatorChange',
        value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_createValidator',
        value: function _createValidator() {
            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        }
    }]);

    return MaxLengthValidator;
}();

MaxLengthValidator.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
        providers: [MAX_LENGTH_VALIDATOR],
        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
    }] }];
/** @nocollapse */
MaxLengthValidator.ctorParameters = function () {
    return [];
};
MaxLengthValidator.propDecorators = {
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};
var /** @type {?} */PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () {
        return PatternValidator;
    }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */

var PatternValidator = function () {
    function PatternValidator() {
        _classCallCheck(this, PatternValidator);
    }

    _createClass(PatternValidator, [{
        key: 'ngOnChanges',

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
            if ('pattern' in changes) {
                this._createValidator();
                if (this._onChange) this._onChange();
            }
        }
        /**
         * @param {?} c
         * @return {?}
         */

    }, {
        key: 'validate',
        value: function validate(c) {
            return this._validator(c);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

    }, {
        key: 'registerOnValidatorChange',
        value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
        }
        /**
         * @return {?}
         */

    }, {
        key: '_createValidator',
        value: function _createValidator() {
            this._validator = Validators.pattern(this.pattern);
        }
    }]);

    return PatternValidator;
}();

PatternValidator.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
        providers: [PATTERN_VALIDATOR],
        host: { '[attr.pattern]': 'pattern ? pattern : null' }
    }] }];
/** @nocollapse */
PatternValidator.ctorParameters = function () {
    return [];
};
PatternValidator.propDecorators = {
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }]
};

/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */

var FormBuilder = function () {
    function FormBuilder() {
        _classCallCheck(this, FormBuilder);
    }

    _createClass(FormBuilder, [{
        key: 'group',

        /**
         * Construct a new {\@link FormGroup} with the given map of configuration.
         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
         *
         * See the {\@link FormGroup} constructor for more details.
         * @param {?} controlsConfig
         * @param {?=} extra
         * @return {?}
         */
        value: function group(controlsConfig) {
            var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var /** @type {?} */controls = this._reduceControls(controlsConfig);
            var /** @type {?} */validator = isPresent(extra) ? extra['validator'] : null;
            var /** @type {?} */asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
            return new FormGroup(controls, validator, asyncValidator);
        }
        /**
         * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
         * `asyncValidator`.
         *
         * `formState` can either be a standalone value for the form control or an object
         * that contains both a value and a disabled status.
         *
         * @param {?} formState
         * @param {?=} validator
         * @param {?=} asyncValidator
         * @return {?}
         */

    }, {
        key: 'control',
        value: function control(formState) {
            var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return new FormControl(formState, validator, asyncValidator);
        }
        /**
         * Construct a {\@link FormArray} from the given `controlsConfig` array of
         * configuration, with the given optional `validator` and `asyncValidator`.
         * @param {?} controlsConfig
         * @param {?=} validator
         * @param {?=} asyncValidator
         * @return {?}
         */

    }, {
        key: 'array',
        value: function array(controlsConfig) {
            var _this45 = this;

            var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var asyncValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var /** @type {?} */controls = controlsConfig.map(function (c) {
                return _this45._createControl(c);
            });
            return new FormArray(controls, validator, asyncValidator);
        }
        /**
         * \@internal
         * @param {?} controlsConfig
         * @return {?}
         */

    }, {
        key: '_reduceControls',
        value: function _reduceControls(controlsConfig) {
            var _this46 = this;

            var /** @type {?} */controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
                controls[controlName] = _this46._createControl(controlsConfig[controlName]);
            });
            return controls;
        }
        /**
         * \@internal
         * @param {?} controlConfig
         * @return {?}
         */

    }, {
        key: '_createControl',
        value: function _createControl(controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
                return controlConfig;
            } else if (Array.isArray(controlConfig)) {
                var /** @type {?} */value = controlConfig[0];
                var /** @type {?} */validator = controlConfig.length > 1 ? controlConfig[1] : null;
                var /** @type {?} */asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                return this.control(value, validator, asyncValidator);
            } else {
                return this.control(controlConfig);
            }
        }
    }]);

    return FormBuilder;
}();

FormBuilder.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] }];
/** @nocollapse */
FormBuilder.ctorParameters = function () {
    return [];
};

/**
 * @stable
 */
var /** @type {?} */VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.0.0-rc.2');

/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */

var NgNoValidate = function NgNoValidate() {
    _classCallCheck(this, NgNoValidate);
};

NgNoValidate.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
        selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
        host: { 'novalidate': '' }
    }] }];
/** @nocollapse */
NgNoValidate.ctorParameters = function () {
    return [];
};

var /** @type {?} */SHARED_FORM_DIRECTIVES = [NgNoValidate, NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
var /** @type {?} */TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var /** @type {?} */REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */

var InternalFormsSharedModule = function InternalFormsSharedModule() {
    _classCallCheck(this, InternalFormsSharedModule);
};

InternalFormsSharedModule.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
    }] }];
/** @nocollapse */
InternalFormsSharedModule.ctorParameters = function () {
    return [];
};

/**
 * The ng module for forms.
 * \@stable
 */

var FormsModule = function FormsModule() {
    _classCallCheck(this, FormsModule);
};

FormsModule.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        providers: [RadioControlRegistry],
        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }] }];
/** @nocollapse */
FormsModule.ctorParameters = function () {
    return [];
};
/**
 * The ng module for reactive forms.
 * \@stable
 */

var ReactiveFormsModule = function ReactiveFormsModule() {
    _classCallCheck(this, ReactiveFormsModule);
};

ReactiveFormsModule.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        providers: [FormBuilder, RadioControlRegistry],
        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }] }];
/** @nocollapse */
ReactiveFormsModule.ctorParameters = function () {
    return [];
};




/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var property_resolver_1 = __webpack_require__(130);
var DataFilterService = (function () {
    function DataFilterService() {
    }
    DataFilterService.prototype.filter = function (datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            var filtered = datasource.filter(function (item) {
                var match = false;
                for (var _i = 0, filterProperties_1 = filterProperties; _i < filterProperties_1.length; _i++) {
                    var prop = filterProperties_1[_i];
                    var propVal = '';
                    //Account for nested properties like 'state.name'
                    if (prop.indexOf('.') > -1) {
                        propVal = property_resolver_1.propertyResolver.resolve(prop, item);
                        if (propVal) {
                            propVal = propVal.toString().toUpperCase();
                        }
                    }
                    else {
                        if (item[prop]) {
                            propVal = item[prop].toString().toUpperCase();
                        }
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    };
    return DataFilterService;
}());
DataFilterService = __decorate([
    core_1.Injectable()
], DataFilterService);
exports.DataFilterService = DataFilterService;


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var property_resolver_1 = __webpack_require__(130);
var Sorter = (function () {
    function Sorter() {
        this.property = null;
        this.direction = 1;
    }
    Sorter.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = property_resolver_1.propertyResolver.resolve(prop, a);
                bVal = property_resolver_1.propertyResolver.resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (_this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (_this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    Sorter.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    return Sorter;
}());
Sorter = __decorate([
    core_1.Injectable()
], Sorter);
exports.Sorter = Sorter;


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var TrackByService = (function () {
    function TrackByService() {
    }
    TrackByService.prototype.customer = function (index, customer) {
        return customer.id;
    };
    return TrackByService;
}());
TrackByService = __decorate([
    core_1.Injectable()
], TrackByService);
exports.TrackByService = TrackByService;


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var propertyResolver = (function () {
    function propertyResolver() {
    }
    propertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return propertyResolver;
}());
exports.propertyResolver = propertyResolver;


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var platform_browser_1 = __webpack_require__(59);
var app_component_1 = __webpack_require__(209);
var app_routing_1 = __webpack_require__(210);
var core_module_1 = __webpack_require__(211);
var shared_module_1 = __webpack_require__(221);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.appRouting.routes,
            core_module_1.CoreModule,
            shared_module_1.SharedModule //Shared (multi-instance) objects
        ],
        declarations: [app_component_1.AppComponent, app_routing_1.appRouting.components],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.i,
        selector: 'app-container',
        template: "<router-outlet></router-outlet>"
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(60);
var customers_component_1 = __webpack_require__(215);
var customers_grid_component_1 = __webpack_require__(214);
var customer_edit_component_1 = __webpack_require__(213);
var customer_edit_reactive_component_1 = __webpack_require__(212);
var routes = [
    { path: 'customers', component: customers_component_1.CustomersComponent },
    { path: 'customers/:id', component: customer_edit_component_1.CustomerEditComponent },
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [customers_component_1.CustomersComponent, customer_edit_component_1.CustomerEditComponent, customer_edit_reactive_component_1.CustomerEditReactiveComponent, customers_grid_component_1.CustomersGridComponent]
};


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var http_1 = __webpack_require__(91);
var data_service_1 = __webpack_require__(72);
var data_filter_service_1 = __webpack_require__(127);
var sorter_1 = __webpack_require__(128);
var trackby_service_1 = __webpack_require__(129);
var ensureModuleLoadedOnceGuard_1 = __webpack_require__(216);
var CoreModule = (function (_super) {
    __extends(CoreModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    return CoreModule;
}(ensureModuleLoadedOnceGuard_1.EnsureModuleLoadedOnceGuard));
CoreModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        providers: [
            //Default XSRF provider setup (change cookie or header name if needed): 
            //{ provide: XSRFStrategy, useValue: new CookieXSRFStrategy('XSRF-TOKEN', 'X-XSRF-TOKEN') },
            data_service_1.DataService, data_filter_service_1.DataFilterService, sorter_1.Sorter, trackby_service_1.TrackByService
        ] // these should be singleton
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var router_1 = __webpack_require__(60);
var forms_1 = __webpack_require__(126);
var data_service_1 = __webpack_require__(72);
var validation_service_1 = __webpack_require__(222);
var CustomerEditReactiveComponent = (function () {
    function CustomerEditReactiveComponent(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.customer = {
            id: '',
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            stateId: 0,
            zip: 0
        };
        this.operationText = 'Insert';
    }
    CustomerEditReactiveComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
        this.buildForm();
    };
    CustomerEditReactiveComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id)
            .subscribe(function (customer) {
            //Quick and dirty clone used in case user cancels out of form
            var cust = JSON.stringify(customer);
            _this.customer = JSON.parse(cust);
            _this.buildForm();
        }, function (err) { return console.log(err); });
    };
    CustomerEditReactiveComponent.prototype.buildForm = function () {
        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, forms_1.Validators.required],
            lastName: [this.customer.lastName, forms_1.Validators.required],
            gender: [this.customer.gender, forms_1.Validators.required],
            email: [this.customer.email, [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            address: [this.customer.address, forms_1.Validators.required],
            city: [this.customer.city, forms_1.Validators.required],
            stateId: [this.customer.stateId, forms_1.Validators.required]
        });
    };
    CustomerEditReactiveComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditReactiveComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value.id = this.customer.id;
        value.zip = this.customer.zip || 0;
        // var customer: ICustomer = {
        //   id: this.customer.id,
        // };
        if (value.id) {
            this.dataService.updateCustomer(value)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to save customer';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertCustomer(value)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to add customer';
                }
            }, function (err) { return console.log(err); });
        }
    };
    CustomerEditReactiveComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/customers']);
    };
    CustomerEditReactiveComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return console.log(err); });
    };
    return CustomerEditReactiveComponent;
}());
CustomerEditReactiveComponent = __decorate([
    core_1.Component({
        moduleId: module.i,
        selector: 'customer-edit-reactive',
        template: __webpack_require__(375)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        data_service_1.DataService,
        forms_1.FormBuilder])
], CustomerEditReactiveComponent);
exports.CustomerEditReactiveComponent = CustomerEditReactiveComponent;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var router_1 = __webpack_require__(60);
var data_service_1 = __webpack_require__(72);
var CustomerEditComponent = (function () {
    function CustomerEditComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
    };
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id)
            .subscribe(function (customer) {
            //Quick and dirty clone used in case user cancels out of form
            var cust = JSON.stringify(customer);
            _this.customer = JSON.parse(cust);
        }, function (err) { return console.log(err); });
    };
    CustomerEditComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.customer.id) {
            this.dataService.updateCustomer(this.customer)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to save customer';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertCustomer(this.customer)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to add customer';
                }
            }, function (err) { return console.log(err); });
        }
    };
    CustomerEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    CustomerEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return console.log(err); });
    };
    return CustomerEditComponent;
}());
CustomerEditComponent = __decorate([
    core_1.Component({
        moduleId: module.i,
        selector: 'customer-edit',
        template: __webpack_require__(376)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        data_service_1.DataService])
], CustomerEditComponent);
exports.CustomerEditComponent = CustomerEditComponent;


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var sorter_1 = __webpack_require__(128);
var trackby_service_1 = __webpack_require__(129);
var CustomersGridComponent = (function () {
    function CustomersGridComponent(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.customers = [];
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorter.sort(this.customers, prop);
    };
    return CustomersGridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = __decorate([
    core_1.Component({
        moduleId: module.i,
        selector: 'customers-grid',
        template: __webpack_require__(377),
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [sorter_1.Sorter, trackby_service_1.TrackByService])
], CustomersGridComponent);
exports.CustomersGridComponent = CustomersGridComponent;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var router_1 = __webpack_require__(60);
var data_filter_service_1 = __webpack_require__(127);
var data_service_1 = __webpack_require__(72);
var CustomersComponent = (function () {
    function CustomersComponent(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.customers = [];
        this.filteredCustomers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
        this.getCustomersPage(1);
    };
    CustomersComponent.prototype.filterChanged = function (filterText) {
        if (filterText && this.customers) {
            var props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
            this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    CustomersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.customers = _this.filteredCustomers = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getCustomersPage() retrieved customers'); });
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        moduleId: module.i,
        selector: 'customers',
        template: __webpack_require__(378)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        data_service_1.DataService,
        data_filter_service_1.DataFilterService])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EnsureModuleLoadedOnceGuard = (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    return EnsureModuleLoadedOnceGuard;
}());
exports.EnsureModuleLoadedOnceGuard = EnsureModuleLoadedOnceGuard;


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var FilterTextboxComponent = (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new core_1.EventEmitter();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    };
    return FilterTextboxComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FilterTextboxComponent.prototype, "changed", void 0);
FilterTextboxComponent = __decorate([
    core_1.Component({
        selector: 'filter-textbox',
        template: "\n    <form>\n         Filter:\n         <input type=\"text\" name=\"filter\"\n                [(ngModel)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  "
    })
], FilterTextboxComponent);
exports.FilterTextboxComponent = FilterTextboxComponent;


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this.pagerPageSize;
        },
        set: function (size) {
            this.pagerPageSize = size;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: function () {
            return this.pagerTotalItems;
        },
        set: function (itemCount) {
            this.pagerTotalItems = itemCount;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.update = function () {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (var i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    };
    PaginationComponent.prototype.previousNext = function (direction, event) {
        var page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    };
    PaginationComponent.prototype.changePage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "pageSize", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "totalItems", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        moduleId: module.i,
        selector: 'pagination',
        template: __webpack_require__(379),
        styles: [__webpack_require__(640)]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var TrimPipe = (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.trim();
    };
    return TrimPipe;
}());
TrimPipe = __decorate([
    core_1.Pipe({ name: 'trim' })
], TrimPipe);
exports.TrimPipe = TrimPipe;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var common_1 = __webpack_require__(58);
var forms_1 = __webpack_require__(126);
var pagination_component_1 = __webpack_require__(218);
var capitalize_pipe_1 = __webpack_require__(219);
var trim_pipe_1 = __webpack_require__(220);
var filter_textbox_component_1 = __webpack_require__(217);
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe, filter_textbox_component_1.FilterTextboxComponent, pagination_component_1.PaginationComponent],
        exports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe, filter_textbox_component_1.FilterTextboxComponent, pagination_component_1.PaginationComponent]
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(374)();
// imports


// module
exports.push([module.i, ".pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\n  background-color: #027FF4;\n  border-color: #027FF4;\n}\n\n.pagination a {\n    cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ 374:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<div>\n  <header>\n      <h3>\n          <span class=\"glyphicon glyphicon-user\"></span>\n          {{ customer.firstName }} {{ customer.lastName }}\n      </h3>\n  </header>\n  <br />\n  <form [formGroup]=\"customerForm\" (ngSubmit)=\"submit(customerForm)\" class=\"editForm\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.firstName.untouched || customerForm.controls.firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.lastName.untouched || customerForm.controls.lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <br />\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Male\" />\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Female\"  /> \n          Female\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.email.untouched || customerForm.controls.email.valid\">Email is required and must be valid</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.address.untouched || customerForm.controls.address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"city\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.city.untouched || customerForm.controls.city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\" formControlName=\"stateId\">\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\n      </select>\n    </div>\n    <br />\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer.id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer.id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n\n  </form>\n</div>"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div>\n  <header>\n      <h3>\n          <span class=\"glyphicon glyphicon-user\"></span>\n          {{ customer.firstName }} {{ customer.lastName }}\n      </h3>\n  </header>\n  <br />\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.untouched || firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.untouched || lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <br />\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Male\" required />\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Female\" required /> \n          Female\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" />\n      <div class=\"alert alert-danger\" [hidden]=\"email.untouched || email.valid\">Email is required and must be valid</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"address.untouched || address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"city.untouched || city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\" \n              [(ngModel)]=\"customer.stateId\"\n              name=\"state\" \n              required>\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\n      </select>\n    </div>\n    <br />\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer.id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer.id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n\n  </form>\n</div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row grid-container\">\n        <div class=\"col-md-10\">\n            <div class=\"table\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>&nbsp;</th>\n                            <th (click)=\"sort('firstName')\">First Name</th>\n                            <th (click)=\"sort('lastName')\">Last Name</th>\n                            <th (click)=\"sort('address')\">Address</th>\n                            <th (click)=\"sort('city')\">City</th>\n                            <th (click)=\"sort('state.name')\">State</th>\n                            <th (click)=\"sort('orderTotal')\">Order Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let customer of customers;trackBy:trackby.customer\">\n                            <td><img src=\"images/{{ customer.gender | lowercase }}.png\"\n                                    class=\"card-image\" alt=\"Customer Image\" /></td>\n                            <td><a [routerLink]=\"['/customers',customer.id]\">{{ customer.firstName | capitalize }}</a></td>\n                            <td>{{ customer.lastName | capitalize }}</td>\n                            <td>{{ customer.address }}</td>\n                            <td>{{ customer.city | trim }}</td>\n                            <td>{{ customer.state.name }}</td>\n                            <td>{{ customer.orderTotal | currency:'USD':true }}</td>\n                        </tr>\n                        <tr *ngIf=\"!customers.length\">\n                            <td>&nbsp;</td>\n                            <td colspan=\"6\">No Records Found</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-user\"></span>\n                {{ title }}\n            </h3>\n        </header>\n        <br />\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"navbar\">\n                    <filter-textbox (changed)=\"filterChanged($event)\"></filter-textbox>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <a class=\"btn btn-default\" [routerLink]=\"['/customers', '0']\">Add New Customer</a>\n            </div>\n        </div>\n    \n        <customers-grid [customers]=\"filteredCustomers\"></customers-grid>\n\n        <pagination [totalItems]=\"totalRecords\" \n            [pageSize]=\"pageSize\" \n            (pageChanged)=\"pageChanged($event)\"></pagination>\n          \n    </div>\n</div>\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"!isVisible\">\n  <ul class=\"pagination\">\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\n      <a aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\n      <a>{{ page }}</a>\n    </li>\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\n      <a aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(373);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(93);
var app_module_1 = __webpack_require__(202);
//enableProdMode(); //Uncomment for production
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log('App bootstrapped'); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(8);
var http_1 = __webpack_require__(91);
//Grab everything with import 'rxjs/Rx';
var Observable_1 = __webpack_require__(0);
__webpack_require__(163);
__webpack_require__(165);
__webpack_require__(164);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = '/api/customers';
        this.baseStatesUrl = '/api/states';
    }
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get(this.baseUrl)
            .map(function (res) {
            var customers = res.json();
            _this.calculateCustomersOrderTotal(customers);
            return customers;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomersPage = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.baseUrl + "/page/" + page + "/" + pageSize)
            .map(function (res) {
            var totalRecords = +res.headers.get('x-inlinecount');
            var customers = res.json();
            _this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomer = function (id) {
        return this.http.get(this.baseUrl + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.insertCustomer = function (customer) {
        return this.http.post(this.baseUrl, customer)
            .map(function (res) {
            var data = res.json();
            console.log('insertCustomer status: ' + data.status);
            return data.customer;
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.baseUrl + '/' + customer.id, customer)
            .map(function (res) {
            var data = res.json();
            console.log('updateCustomer status: ' + data.status);
            return data.customer;
        })
            .catch(this.handleError);
    };
    DataService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.baseUrl + '/' + id)
            .map(function (res) { return res.json().status; })
            .catch(this.handleError);
    };
    //Not used but could be called to pass "options" (3rd parameter) to 
    //appropriate POST/PUT/DELETE calls made with http
    DataService.prototype.getRequestOptions = function () {
        var csrfToken = ''; //would retrieve from cookie or from page
        var options = new http_1.RequestOptions({
            headers: new http_1.Headers({ 'x-xsrf-token': csrfToken })
        });
        return options;
    };
    DataService.prototype.getStates = function () {
        return this.http.get(this.baseStatesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.calculateCustomersOrderTotal = function (customers) {
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var customer = customers_1[_i];
            if (customer && customer.orders) {
                var total = 0;
                for (var _a = 0, _b = customer.orders; _a < _b.length; _a++) {
                    var order = _b[_a];
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;


/***/ })

},[643]);
//# sourceMappingURL=app.map