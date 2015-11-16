var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var PostHeader = AsLabs.PostHeader;
var PostEngagement = AsLabs.PostEngagement;
var Image = AsLabs.Image;

window.AsLabs.PhotoPost = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    className: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      className: ''
    }
  },
  attachment: function () {
    var post = this.props.data;
    return post.attachments;
  },
  image: function () {
    var attached = this.attachment();
    if(attached.media) {
      return attached.media.image;
    } else if(attached.subattachements) {
      // TODO: Handle albums/multiple pictures more gracefully.
      var subattachment = attached.subattachments.data[0];
      return subattachment.media;
    }
  },

  render: function () {
    var post = this.props.data;
    var image = this.image();

    return <Card className={this.props.className}>
      <PostHeader data={post} />

      <Content>
        <Image src={image.src} className='fluid'/>
      </Content>

      <Content>
        <Text>{post.message}</Text>
      </Content>

      <PostEngagement data={post}/>

    </Card>
  }
});