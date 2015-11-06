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
  onShare: function onShare(response) {
    if (this.props.onShare) {
      this.props.onShare(response);
    } else {
      alert('Thanks for Sharing');
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
      { className: "faceboook " + this.props.className, onClick: this._shareLink, loading: this.state.loading },
      React.createElement(Icon, { className: 'facebook' }),
      this.props.label
    );
  }
});
