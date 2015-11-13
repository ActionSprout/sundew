// TODO: Move to sundew.

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  engagement: function () {
    var post = this.props.data;
    return {
      likes: post.likes.summary.total_count,
      comments: post.comments.summary.total_count,
      shares: post.shares.count
    }
  },
  render: function () {
    var engagement = this.engagement();

    return <Content>
      <span className="left floated">
        <Icon className="thumbs up"/>
          {engagement.likes}
      </span>


      <span className="centered floated">
        <Icon className="comment" />
        {engagement.comments}
      </span>

      <span className="right floated">
        <Icon className="share" />
          {engagement.shares}
      </span>
    </Content>
  }
});