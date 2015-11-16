var Card = AsLabs.Card;
var Content = AsLabs.Content;
var LinkPost = AsLabs.LinkPost;
var PhotoPost = AsLabs.PhotoPost;
var VideoPost = AsLabs.VideoPost;
var Loader = AsLabs.Loader;

window.AsLabs.FacebookPost = React.createClass({
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
  fetchPosts: function () {
    var component = this;

    FB.api(this.props.fbid, {fields: 'from,message,created_time,attachments,type,comments.limit(0).summary(true),likes.limit(0).summary(true),shares'}, function (response) {
      component.setState({
        loading: false,
        postData: response
      })
    })
  },
  componentDidMount: function () {
    if(typeof(FB) == 'undefined') {
      $('#fb-root').on('ready', this.fetchPosts)
    } else {
      this.fetchPosts()
    }
  },
  render: function () {
    if (this.state.loading) {
      return <Card className={this.props.className}>
        <Content>
          <Loader active={this.state.loading}/>
        </Content>
      </Card>
    }

    var post = this.state.postData;

    if (post.type.match(/link/)) {
      // Share post
      return <LinkPost data={post} className={this.props.className}>
        {this.props.children}
      </LinkPost>
    } else if (post.type.match(/photo/)) {
      // Photo post
      return <PhotoPost data={post} className={this.props.className}>
        {this.props.children}
      </PhotoPost>
    } else if (post.type.match(/video/)) {
      // Video post
      return <VideoPost data={post} className={this.props.className}>
        {this.props.children}
      </VideoPost>
    }
  }
});