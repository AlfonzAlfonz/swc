// @target: esnext,es2016
// @noTypesAndSymbols: true
// https://github.com/microsoft/TypeScript/issues/34952#issuecomment-552025027
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    var _proto = C.prototype;
    // ? should be removed in emit
    _proto.method = function method() {};
    return C;
}();
