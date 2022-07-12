// @target: es6
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
var D = function D() {
    "use strict";
    _class_call_check(this, D);
};
var _x = /*#__PURE__*/ new WeakMap();
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
        _class_private_field_init(this, _x, {
            writable: true,
            value: void 0
        });
    }
    var _proto = C.prototype;
    _proto.foo = function foo() {
        var c = new C();
        _class_private_field_get(c, _x); // OK
        var d = new C();
        _class_private_field_get(d, _x); // Error
    };
    return C;
}();
