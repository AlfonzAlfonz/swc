//@filename: file.tsx
//@jsx: preserve
// OK
/*#__PURE__*/ React.createElement("div", {
    n: "x"
});
// Error
/*#__PURE__*/ React.createElement("span", {
    w: "err"
});
