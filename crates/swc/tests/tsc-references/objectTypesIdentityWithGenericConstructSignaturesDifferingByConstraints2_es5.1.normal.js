// Two call or construct signatures are considered identical when they have the same number of type parameters and, considering those 
// parameters pairwise identical, have identical type parameter constraints, identical number of parameters with identical kind(required, 
// optional or rest) and types, and identical return types.
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var B = function B(x, y) {
    "use strict";
    _class_call_check(this, B);
    return null;
};
var C = function C(x, y) {
    "use strict";
    _class_call_check(this, C);
    return null;
};
var D = function D(x, y) {
    "use strict";
    _class_call_check(this, D);
    return null;
};
var a;
var b = {
    new: function _new(x, y) {
        return "";
    }
}; // not a construct signature, function called new
function foo1b(x) {}
function foo1c(x) {}
function foo2(x) {}
function foo3(x) {}
function foo4(x) {}
function foo5c(x) {}
function foo6c(x) {}
function foo8(x) {}
function foo9(x) {}
function foo10(x) {}
function foo11(x) {}
function foo12(x) {}
function foo12b(x) {}
function foo13(x) {}
function foo14(x) {}
