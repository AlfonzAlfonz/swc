// @allowJs: true
// @checkJs: true
// @emitDeclarationOnly: true
// @strict: true
// @target: es6
// @declaration: true
// @filename: lateBoundClassMemberAssignmentJS2.js
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var _sym = "my-fake-sym";
export var MyClass = /*#__PURE__*/ function() {
    "use strict";
    function MyClass() {
        _class_call_check(this, MyClass);
        this[_sym] = "ok";
    }
    var _proto = MyClass.prototype;
    _proto.method = function method() {
        this[_sym] = "yep";
        var x = this[_sym];
    };
    return MyClass;
}();
