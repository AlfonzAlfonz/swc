//@target: ES6
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import regeneratorRuntime from "regenerator-runtime";
var _marked = regeneratorRuntime.mark(g);
function g() {
    var C;
    return regeneratorRuntime.wrap(function g$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.t0 = function(_superClass) {
                    "use strict";
                    _inherits(C, _superClass);
                    var _super = _create_super(C);
                    function C() {
                        _class_call_check(this, C);
                        return _super.apply(this, arguments);
                    }
                    return C;
                };
                _ctx.next = 3;
                return 0;
            case 3:
                _ctx.t1 = _ctx.sent;
                C = /*#__PURE__*/ (0, _ctx.t0)(_ctx.t1);
            case 5:
            case "end":
                return _ctx.stop();
        }
    }, _marked);
}
