var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var Divider = AsLabs.Divider;
var PostHeader = AsLabs.PostHeader;
var PostEngagement = AsLabs.PostEngagement;

window.AsLabs.LinkPost = React.createClass({
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
    var attachment = this.attachment();

    return <Card className={this.props.className}>
      <PostHeader data={post} />

      <Content>
        <Image src={image.src} className='fluid'/>
        <Divider />
        <Text>
          <a href={attachment.url} target="_blank">
            <h3>
            {attachment.title}
            </h3>
          </a>
        </Text>

        <Text>
          {attachment.description}
        </Text>
      </Content>

      <PostEngagement data={post}/>
    </Card>
  }
});