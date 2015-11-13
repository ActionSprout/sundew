"use strict";

// TODO: Move to sundew.

var Card = AsLabs.Card;
var Content = AsLabs.Content;
var Text = AsLabs.Text;
var Icon = AsLabs.Icon;
var FBAvatar = require('../avatar');

var PostHeader = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function render() {
    return React.createElement(
      Content,
      null,
      React.createElement(
        "div",
        { className: "right floated meta" },
        "14h"
      ),
      React.createElement(FBAvatar, { fbid: this.props.data.from.id }),
      this.props.data.from.name
    );
  }
});
