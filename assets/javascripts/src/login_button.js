module.exports = React.createClass({
  getInitialState: function () {
    return {
      loading: (typeof(FB) == 'undefined')
    }
  },
  getDefaultProps: function() {
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
    handleClick: React.PropTypes.func
  },
  handleClick: function () {
    FB.login(this.props.onLogin, {scope: this.props.scope})
  },
  onLogin: function (response) {
    console.log('You Clicked the button!!!', response)
  },
  componentDidMount: function () {
    var component = this;

    if(this.state.loading) {
      // HACK to find out how to if FB is ready.
      $('#fb-root').on('ready', function () {
        component.setState({loading: false})
      })
    }
  },
  render: function () {
    return <button className="ui button facebook" onClick={this.props.handleClick}>
        <i className="ui icon fa fa-facebook"></i>

        {this.props.label}
    </button>
  }
});