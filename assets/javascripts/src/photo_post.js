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
    // TODO: Handle albums/multiple pictures more gracefully.
    var post = this.props.data;
    return (post.attachments || post.subattachements).data[0]
  },
  image: function () {
    var attached = this.attachment();
    return attached.media.image
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