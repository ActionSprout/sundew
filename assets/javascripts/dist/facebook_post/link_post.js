'use strict';

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var Divider = AsLabs.Divider;
var PostHeader = require('./post_header');
var PostEngagement = require('./post_engagement');

window.AsLabs.LinkPost = React.createClass({
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
    var attachment = this.attachment();

    return React.createElement(
      Card,
      { className: this.props.className },
      React.createElement(PostHeader, { data: post }),
      React.createElement(
        Content,
        null,
        React.createElement(Image, { src: image.src, className: 'fluid' }),
        React.createElement(Divider, null),
        React.createElement(
          Text,
          null,
          React.createElement(
            'a',
            { href: attachment.url, target: '_blank' },
            React.createElement(
              'h3',
              null,
              attachment.title
            )
          )
        ),
        React.createElement(
          Text,
          null,
          attachment.description
        )
      ),
      React.createElement(PostEngagement, { data: post })
    );
  }
});
