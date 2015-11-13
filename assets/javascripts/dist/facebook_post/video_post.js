'use strict';

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;

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
  render: function render() {
    return React.createElement(
      Card,
      { className: this.props.className },
      React.createElement(
        Content,
        null,
        React.createElement(
          Text,
          null,
          'Video Card'
        )
      )
    );
  }
});
