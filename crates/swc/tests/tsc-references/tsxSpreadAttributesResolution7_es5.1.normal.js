// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _extends from "@swc/helpers/src/_extends.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var React = require("react");
var TextComponent = /*#__PURE__*/ function(_Component) {
    "use strict";
    _inherits(TextComponent, _Component);
    var _super = _create_super(TextComponent);
    function TextComponent() {
        _class_call_check(this, TextComponent);
        return _super.apply(this, arguments);
    }
    var _proto = TextComponent.prototype;
    _proto.render = function render() {
        return /*#__PURE__*/ React.createElement("span", null, "Some Text..");
    };
    return TextComponent;
}(React.Component);
// OK
var textPropsFalse = {
    editable: false
};
var y1 = /*#__PURE__*/ React.createElement(TextComponent, _extends({}, textPropsFalse));
var textPropsTrue = {
    editable: true,
    onEdit: function() {}
};
var y2 = /*#__PURE__*/ React.createElement(TextComponent, _extends({}, textPropsTrue));
export { };
