//// [privateNameSetterNoGetter.ts]
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
import _write_only_error from "@swc/helpers/src/_write_only_error.mjs";
var _x, _class;
const C = (_x = /*#__PURE__*/ new WeakMap(), _class = class {
    m() {
        _class_private_field_set(this, _x, (this, _write_only_error("#x")) + 2); // Error
    }
    constructor(){
        _class_private_field_init(this, _x, {
            get: void 0,
            set: set_x
        });
    }
}, _class);
console.log(new C().m());
function set_x(x) {}
