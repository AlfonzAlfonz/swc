// @strict: true
// @target: ES6
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import regeneratorRuntime from "regenerator-runtime";
var Base = /*#__PURE__*/ function() {
    "use strict";
    function Base() {
        _class_call_check(this, Base);
    }
    var _proto = Base.prototype;
    _proto.method = function method() {};
    return Base;
}();
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived() {
        _class_call_check(this, Derived);
        return _super.apply(this, arguments);
    }
    var _proto = Derived.prototype;
    _proto.method = function method() {
        var ref;
        return (ref = _get(_get_prototype_of(Derived.prototype), "method", this)) === null || ref === void 0 ? void 0 : ref.call(this);
    };
    _proto.asyncMethod = function asyncMethod() {
        var _this = this;
        var _this1 = this, _superprop_get_method = function() {
            return _get(_get_prototype_of(Derived.prototype), "method", _this);
        };
        return _async_to_generator(regeneratorRuntime.mark(function _callee() {
            var ref;
            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        ;
                        return _ctx.abrupt("return", (ref = _superprop_get_method()) === null || ref === void 0 ? void 0 : ref.call(_this1));
                    case 2:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))();
    };
    return Derived;
}(Base);
