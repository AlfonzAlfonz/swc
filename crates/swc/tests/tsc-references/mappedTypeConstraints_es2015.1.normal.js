// @strict: true
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
function f0(obj) {
    obj.b;
}
function f1(obj) {
    obj.b;
}
function f2(obj) {
    obj.b;
}
function f3(obj) {
    obj.a;
    obj.b;
    obj.c;
}
function f4(obj) {
    obj.a;
    obj.c;
}
const modifier = (targetProps)=>{
    let { bar  } = targetProps, rest = _object_without_properties(targetProps, [
        "bar"
    ]);
    rest.foo;
};
