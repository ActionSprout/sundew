'use strict';

var Button = window.AsLabs.Button;
var Icon = window.AsLabs.Icon;

window.AsLabs.LoginButton = React.createClass({
  displayName: "AsLabs::LoginButton",
  getInitialState: function getInitialState() {
    return {
      loading: typeof FB == 'undefined'
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      label: 'Login with Facebook',
      scope: 'public_profile,email',
      redirect_url: '/',
      className: 'facebook massive'
    };
  },
  propTypes: {
    label: React.PropTypes.string,
    scope: React.PropTypes.string,
    onLogin: React.PropTypes.func,
    redirect_url: React.PropTypes.string,
    className: React.PropTypes.string
  },

  handleClick: function handleClick() {
    FB.login(this.onLogin, { scope: this.props.scope });
  },
  onLogin: function onLogin(response) {
    var component = this;

    if (this.props.onLogin) {
      this.props.onLogin(response);
    } else {
      if (!response.authResponse) return alert("You did not login correctly.");

      $.get('/auth/facebook/callback', function (user) {
        window.location = component.props.redirect_url;
      });
    }
  },
  fbInitialized: function fbInitialized() {
    var component = this;

    FB.getLoginStatus(function () {
      component.setState({ loading: false });
    });
  },
  componentDidMount: function componentDidMount() {
    var component = this;

    if (this.state.loading) {
      // HACK to find out how to if FB is ready.
      $('#fb-root').on('ready', function () {
        component.fbInitialized();
      });
    } else {
      component.fbInitialized();
    }
  },
  render: function render() {
    return React.createElement(
      Button,
      { className: this.props.className, loading: this.state.loading, onClick: this.handleClick },
      React.createElement(Icon, { className: 'facebook' }),
      this.props.label
    );
  }
});
