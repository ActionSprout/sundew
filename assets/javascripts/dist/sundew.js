(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
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

},{}],2:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
  displayName: "AsLabs::Header",
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

},{}],3:[function(require,module,exports){
'use strict';

var _footer = require('./footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./header.js');

var _header2 = _interopRequireDefault(_header);

var _login_button = require('./login_button.js');

var _login_button2 = _interopRequireDefault(_login_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.AsLabs = {
  Header: _header2.default,
  Footer: _footer2.default,
  Login: _login_button2.default
};

},{"./footer.js":1,"./header.js":2,"./login_button.js":4}],4:[function(require,module,exports){
'use strict';

module.exports = React.createClass({
  displayName: "AsLabs::LoginButton",
  getInitialState: function getInitialState() {
    return {
      loading: typeof FB == 'undefined'
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      label: 'Login with Facebook',
      scope: 'public_profile',
      redirect_url: '/'
    };
  },
  propTypes: {
    label: React.PropTypes.string,
    scope: React.PropTypes.string,
    onLogin: React.PropTypes.func,
    redirect_url: React.PropTypes.string
  },
  handleClick: function handleClick() {
    FB.login(this.props.onLogin, { scope: this.props.scope });
  },
  onLogin: function onLogin(response) {
    var component = this;

    if (this.props.onLogin) {
      this.props.onLogin(response);
    } else {
      if (!response.authResponse) return alert("You did not login correctly.");

      $.post('/auth/facebook/callback', function (user) {
        window.location = component.props.redirect_url;
      });
    }
  },
  componentDidMount: function componentDidMount() {
    var component = this;

    if (this.state.loading) {
      // HACK to find out how to if FB is ready.
      $('#fb-root').on('ready', function () {
        component.setState({ loading: false });
      });
    }
  },
  buttonClassName: function buttonClassName() {
    var str = "ui button facebook";
    if (this.state.loading) str += 'loading';

    return str;
  },
  render: function render() {
    return React.createElement(
      'button',
      { className: this.buttonClassName(), onClick: this.handleClick },
      React.createElement('i', { className: 'ui icon fa fa-facebook' }),
      this.props.label
    );
  }
});

},{}]},{},[3]);
