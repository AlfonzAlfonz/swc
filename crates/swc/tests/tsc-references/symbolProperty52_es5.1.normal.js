//@target: ES6
import _define_property from "@swc/helpers/src/_define_property.mjs";
var obj = _define_property({}, Symbol.nonsense, 0);
obj = {};
obj[Symbol.nonsense];
