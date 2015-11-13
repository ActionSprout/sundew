'use strict';

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var LinkPost = AsLabs.LinkPost;
var PhotoPost = AsLabs.PhotoPost;
var VideoPost = AsLabs.VideoPost;

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
  getInitialState: function getInitialState() {
    return {
      loading: true
    };
  },
  componentDidMount: function componentDidMount() {
    var component = this;

    FB.api(this.props.fbid, { fields: 'from,message,created_time,attachments,type,comments.limit(0).summary(true),likes.limit(0).summary(true),shares' }, function (response) {
      component.setState({
        loading: false,
        postData: response
      });
    });
  },
  render: function render() {
    if (this.state.loading) {
      return React.createElement(
        Card,
        { className: this.props.className },
        React.createElement(
          Content,
          null,
          React.createElement(Loader, null)
        )
      );
    }

    var post = this.state.postData;

    if (post.type.match(/link/)) {
      // Share post
      return React.createElement(LinkPost, { data: post, className: this.props.className });
    } else if (post.type.match(/photo/)) {
      // Photo post
      return React.createElement(PhotoPost, { data: post, className: this.props.className });
    } else if (post.type.match(/video/)) {
      // Video post
      return React.createElement(VideoPost, { data: post, className: this.props.className });
    }
  }
});
