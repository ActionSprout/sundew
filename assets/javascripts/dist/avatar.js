"use strict";

var Image = AsLabs.Image;

window.AsLabs.FBAvatar = React.createClass({
  displayName: "AsLabs::FBAvatar",
  propTypes: {
    fbid: React.PropTypes.string.isRequired,
    size: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      size: 'large'
    };
  },
  avatarUrl: function avatarUrl() {
    return "http://graph.facebook.com/" + this.props.fbid + '/picture?type=' + this.props.size;
  },
  render: function render() {
    return React.createElement(Image, { className: "avatar", src: this.avatarUrl() });
  }
});
