//@target: ES6
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var StringIterator = /*#__PURE__*/ function() {
    "use strict";
    function StringIterator() {
        _class_call_check(this, StringIterator);
    }
    var _proto = StringIterator.prototype;
    _proto.next = function next() {
        return "";
    };
    _proto[Symbol.iterator] = function() {
        return this;
    };
    return StringIterator;
}();
var v;
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator = (new StringIterator)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        v = _step.value;
    } // Should fail
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
