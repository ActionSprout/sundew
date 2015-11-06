"use strict";

window.Footer = React.createClass({
  displayName: "AsLabs::Footer",
  render: function render() {
    return React.createElement(
      "footer",
      { id: "footer" },
      React.createElement(
        "section",
        { className: "container" },
        React.createElement(
          "div",
          { className: "left" },
          React.createElement(
            "a",
            { href: "http://actionsprout.com/labs", className: "logo" },
            React.createElement("img", { src: this.props.lab_logo_src, alt: "actionsprout labs" })
          )
        ),
        React.createElement(
          "div",
          { className: "right" },
          React.createElement(
            "a",
            { href: this.props.sign_up_href, className: "ui button tiny" },
            "Sign Up"
          ),
          React.createElement(
            "p",
            { className: "more" },
            "Try ActionSprout for Free"
          )
        )
      )
    );
  }
});
