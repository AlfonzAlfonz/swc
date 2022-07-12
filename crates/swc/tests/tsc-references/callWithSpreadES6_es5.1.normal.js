// @target: ES6
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var _obj, _obj1, _instance, _instance1;
function foo(x, y) {
    for(var _len = arguments.length, z = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        z[_key - 2] = arguments[_key];
    }
}
var a;
var z;
var obj;
var xa;
foo(1, 2, "abc");
foo.apply(void 0, [
    1,
    2
].concat(_to_consumable_array(a)));
foo.apply(void 0, [
    1,
    2
].concat(_to_consumable_array(a), [
    "abc"
]));
obj.foo(1, 2, "abc");
(_obj = obj).foo.apply(_obj, [
    1,
    2
].concat(_to_consumable_array(a)));
(_obj1 = obj).foo.apply(_obj1, [
    1,
    2
].concat(_to_consumable_array(a), [
    "abc"
]));
obj.foo(1, 2, "abc");
obj.foo.apply(this, [
    1,
    2
].concat(_to_consumable_array(a)));
obj.foo.apply(this, [
    1,
    2
].concat(_to_consumable_array(a), [
    "abc"
]));
xa[1].foo(1, 2, "abc");
(_instance = xa[1]).foo.apply(_instance, [
    1,
    2
].concat(_to_consumable_array(a)));
(_instance1 = xa[1]).foo.apply(_instance1, [
    1,
    2
].concat(_to_consumable_array(a), [
    "abc"
]));
xa[1].foo.apply(this, [
    1,
    2,
    "abc"
]);
var C = /*#__PURE__*/ function() {
    "use strict";
    function C(x, y) {
        for(var _len = arguments.length, z = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            z[_key - 2] = arguments[_key];
        }
        _class_call_check(this, C);
        this.foo(x, y);
        this.foo.apply(this, [
            x,
            y
        ].concat(_to_consumable_array(z)));
    }
    var _proto = C.prototype;
    _proto.foo = function foo(x, y) {
        for(var _len = arguments.length, z = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            z[_key - 2] = arguments[_key];
        }
    };
    return C;
}();
var D = /*#__PURE__*/ function(C) {
    "use strict";
    _inherits(D, C);
    var _super = _create_super(D);
    function D() {
        _class_call_check(this, D);
        return _super.call(this, 1, 2);
        return _super.call.apply(_super, [
            this,
            1,
            2
        ].concat(_to_consumable_array(a)));
    }
    var _proto = D.prototype;
    _proto.foo = function foo() {
        var _instance;
        _get(_get_prototype_of(D.prototype), "foo", this).call(this, 1, 2);
        (_instance = _get(_get_prototype_of(D.prototype), "foo", this)).call.apply(_instance, [
            this,
            1,
            2
        ].concat(_to_consumable_array(a)));
    };
    return D;
}(C);
