"use strict";

// TODO: Move to sundew.

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  engagement: function engagement() {
    var post = this.props.data;
    return {
      likes: post.likes.summary.total_count,
      comments: post.comments.summary.total_count,
      shares: post.shares.count
    };
  },
  render: function render() {
    var engagement = this.engagement();

    return React.createElement(
      Content,
      null,
      React.createElement(
        "span",
        { className: "left floated" },
        React.createElement(Icon, { className: "thumbs up" }),
        engagement.likes
      ),
      React.createElement(
        "span",
        { className: "centered floated" },
        React.createElement(Icon, { className: "comment" }),
        engagement.comments
      ),
      React.createElement(
        "span",
        { className: "right floated" },
        React.createElement(Icon, { className: "share" }),
        engagement.shares
      )
    );
  }
});
