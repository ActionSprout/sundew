var Image = AsLabs.Image;

window.AsLabs.FBAvatar = React.createClass({
  displayName: "AsLabs::FBAvatar",
  propTypes: {
    fbid: React.PropTypes.string.isRequired,
    size: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      size: 'large'
    }
  },
  avatarUrl: function () {
    return "http://graph.facebook.com/" + this.props.fbid + '/picture?type=' + this.props.size
  },
  render: function () {
    return <Image className="avatar" src={this.avatarUrl()}></Image>
  }
});