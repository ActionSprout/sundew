var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;

window.AsLabs.VideoPost = React.createClass({
  propTypes: {
    fbid: React.PropTypes.string.isRequired,
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
    </Card>
  }
});