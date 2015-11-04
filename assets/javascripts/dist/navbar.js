"use strict";

module.exports = {
  Footer: React.createClass({
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
  }),
  Header: React.createClass({
    logo: function logo() {
      return React.createElement("img", { src: this.props.app_logo });
    },
    render: function render() {
      return React.createElement(
        "section",
        { id: "header" },
        React.createElement(
          "section",
          { className: "container" },
          React.createElement(
            "div",
            { className: "ui floated left" },
            React.createElement(
              "h1",
              null,
              React.createElement(
                "a",
                { href: "/" },
                this.props.app_logo ? this.logo() : '',
                this.props.app_name || "ActionSprout Labs"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "ui floated right" },
            React.createElement(
              "p",
              null,
              "Powered by"
            ),
            React.createElement(
              "a",
              { href: this.props.logo_link },
              React.createElement("img", { src: this.props.horizontal_logo_src, className: "logo" })
            )
          )
        )
      );
    }
  })
};
