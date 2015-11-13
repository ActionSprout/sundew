// TODO: Move To Sundew.

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var LinkPost = require('./facebook_post/link_post');
var PhotoPost = require('./facebook_post/photo_post');
var VideoPost = require('./facebook_post/video_post');

module.exports = React.createClass({
  propTypes: {
    fbid: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      className: ''
    }
  },
  getInitialState: function () {
    return {
      loading: true
    }
  },
  componentDidMount: function () {
    var component = this;

    FB.api(this.props.fbid, {fields: 'from,message,created_time,attachments,type,comments.limit(0).summary(true),likes.limit(0).summary(true),shares'}, function (response) {
      component.setState({
        loading: false,
        postData: response
      })
    })
  },
  render: function () {
    if (this.state.loading) {
      return <Card className={this.props.className}>
        <Content>
          <Loader />
        </Content>
      </Card>
    }

    var post = this.state.postData;

    if (post.type.match(/link/)) {
      // Share post
      return <LinkPost data={post} className={this.props.className} />
    } else if (post.type.match(/photo/)) {
      // Photo post
      return <PhotoPost data={post} className={this.props.className} />
    } else if (post.type.match(/video/)) {
      // Video post
      return <VideoPost data={post} className={this.props.className} />
    }
  }
});