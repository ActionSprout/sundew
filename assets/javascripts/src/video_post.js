var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Image = AsLabs.Image;

window.AsLabs.VideoPost = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    className: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      className: ''
    }
  },
  render: function () {
    return <Card className={this.props.className}>
      <Content>
        <Text>
        Video Card
        </Text>
      </Content>

      {this.props.children}
    </Card>
  }
});