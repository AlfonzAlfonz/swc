// @jsx: react,react-jsx
// @target: es2015,es5
import _extends from "@swc/helpers/src/_extends.mjs";
function Todo(prop) {
    return /*#__PURE__*/ React.createElement("div", null, prop.key.toString() + prop.todo);
}
function TodoList({ todos  }) {
    return /*#__PURE__*/ React.createElement("div", null);
}
function TodoListNoError({ todos  }) {
    // any is not checked
    return /*#__PURE__*/ React.createElement("div", null);
}
let x;
/*#__PURE__*/ React.createElement(TodoList, _extends({}, x));
