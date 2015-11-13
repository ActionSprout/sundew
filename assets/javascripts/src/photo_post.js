var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var PostHeader = AsLabs.PostHeader;
var PostEngagement = AsLabs.PostEngagement;

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
  attachment: function () {
    return this.props.data.attachments.data[0]
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