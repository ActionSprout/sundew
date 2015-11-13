'use strict';

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var PostHeader = require('./post_header');
var PostEngagement = require('./post_engagement');

module.exports = React.createClass({
  propTypes: {
    fbid: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },
  attachment: function attachment() {
    return this.props.data.attachments.data[0];
  },
  image: function image() {
    var attached = this.attachment();
    return attached.media.image;
  },

  render: function render() {
    var post = this.props.data;
    var image = this.image();

    return React.createElement(
      Card,
      { className: this.props.className },
      React.createElement(PostHeader, { data: post }),
      React.createElement(
        Content,
        null,
        React.createElement(Image, { src: image.src, className: 'fluid' })
      ),
      React.createElement(
        Content,
        null,
        React.createElement(
          Text,
          null,
          post.message
        )
      ),
      React.createElement(PostEngagement, { data: post })
    );
  }
});
