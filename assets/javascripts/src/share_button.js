var Button = window.AsLabs.Button;
var Icon = window.AsLabs.Icon;

window.AsLabs.ShareButton = React.createClass({
  displayName: "AsLabs::ShareButton",
  getInitialState: function () {
    return {
      // TODO: This is now duplicated, figure out how to put me in a Mixin.
      loading: (typeof(FB) == 'undefined')
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Share on Facebook',
      className: 'huge',
      href: window.location.href
    };
  },
  propTypes: {
    label: React.PropTypes.string,
    scope: React.PropTypes.string,
    onShare: React.PropTypes.func,
    redirect_url: React.PropTypes.string
  },
  onShare: function (response) {
    if(this.props.onShare) {
      this.props.onShare(response);
    } else {
      alert('Thanks for Sharing')
    }
  },
  componentDidMount: function () {
    var component = this;

    if(this.state.loading) {
      // TODO: This is now duplicated, figure out how to put me in a Mixin.
      // HACK to find out how to if FB is ready.
      $('#fb-root').on('ready', function () {
        component.fbInitialized()
      })
    } else {
      component.fbInitialized()
    }
  },
  _shareLink: function () {
    FB.ui({
      method: 'share',
      href: this.props.href
    }, this.onShare);
  },
  render: function () {
    return <Button className={"facebook "+this.props.className} onClick={this._shareLink} loading={this.state.loading}>
      <Icon className='facebook'></Icon>

    {this.props.label}
    </Button>
  }
});