// @noEmit: true
// @allowJs: true
// @checkJs: true
// @Filename: a.js
// mixed prototype-assignment+class declaration
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
    this.p = 1;
};
// Property assignment does nothing.
// You have to use Object.defineProperty(C, "prototype", { q: 2 })
// and that only works on classes with no superclass.
// (Object.defineProperty isn't recognised as a JS special assignment right now.)
C.prototype = {
    q: 2
};
var c = new C();
c.p;
c.q;
