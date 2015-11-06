'use strict';

var Button = window.AsLabs.Button;
var Icon = window.AsLabs.Icon;

window.AsLabs.ShareButton = React.createClass({
  displayName: "AsLabs::ShareButton",
  getInitialState: function getInitialState() {
    return {
      // TODO: This is now duplicated, figure out how to put me in a Mixin.
      loading: typeof FB == 'undefined'
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      label: 'Share on Facebook',
      className: 'huge',
      href: window.location.href
    };
  },
  propTypes: {
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    onShare: React.PropTypes.func,
    href: React.PropTypes.string
  },
  onShare: function onShare(response) {
    if (this.props.onShare) {
      this.props.onShare(response);
    } else {
      alert('Thanks for Sharing');
    }
  },
  componentDidMount: function componentDidMount() {
    var component = this;

    if (this.state.loading) {
      // TODO: This is now duplicated, figure out how to put me in a Mixin.
      // HACK to find out how to if FB is ready.
      $('#fb-root').on('ready', function () {
        component.fbInitialized();
      });
    } else {
      component.fbInitialized();
    }
  },
  _shareLink: function _shareLink() {
    FB.ui({
      method: 'share',
      href: this.props.href
    }, this.onShare);
  },
  render: function render() {
    return React.createElement(
      Button,
      { className: "facebook " + this.props.className, onClick: this._shareLink, loading: this.state.loading },
      React.createElement(Icon, { className: 'facebook' }),
      this.props.label
    );
  }
});
