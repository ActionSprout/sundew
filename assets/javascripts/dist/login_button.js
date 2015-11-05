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
      handleClick: this.handleClick,
      onLogin: this.onLogin,
      scope: 'public_profile'
    };
  },
  propTypes: {
    label: React.PropTypes.string,
    scope: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    onLogin: React.PropTypes.func
  },
  handleClick: function handleClick() {
    FB.login(this.props.onLogin, { scope: this.props.scope });
  },
  onLogin: function onLogin(response) {
    console.log('You Clicked the button!!!', response);
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
      { className: this.buttonClassName(), onClick: this.props.handleClick },
      React.createElement('i', { className: 'ui icon fa fa-facebook' }),
      this.props.label
    );
  }
});
