"use strict";

module.exports = React.createClass({
  displayName: "AsLabs::AppHeader",
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
});
