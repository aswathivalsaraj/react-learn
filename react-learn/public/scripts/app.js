"use strict";

console.log("App is running");
var template = React.createElement(
  "header",
  null,
  React.createElement(
    "h1",
    null,
    "This is JSX from src/app.js "
  ),
  React.createElement(
    "p",
    null,
    "Again a paragraph"
  ),
  " "
);
var appRoot = document.getElementById("test");
ReactDOM.render(template, appRoot);
