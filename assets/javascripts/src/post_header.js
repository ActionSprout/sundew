// TODO: Move to sundew.

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var Avatar = AsLabs.Avatar;

window.AsLabs.PostHeader = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  timeAgo: function () {
    var post = this.props.data;
    var timestamp = post.created_time;

    return moment(timestamp).fromNow();
  },
  render: function () {
    return <Content>
      <div className="right floated meta">
        {this.timeAgo()}
      </div>

      <Avatar fbid={this.props.data.from.id} />

    {this.props.data.from.name}
    </Content>
  }
});