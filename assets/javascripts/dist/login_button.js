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
