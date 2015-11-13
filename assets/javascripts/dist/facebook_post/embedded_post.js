'use strict';

window.AsLabs.FbEbeddedPost = React.createClass({
  propTypes: {
    fbid: React.PropTypes.string.isRequired,
    width: React.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      width: 500
    };
  },
  postHref: function postHref() {
    var post_id = this.props.fbid;
    var page_id = post_id.split('_')[0];
    var object_id = post_id.split('_')[1];
    return 'https://www.facebook.com/' + page_id + '/posts/' + object_id;
  },
  render: function render() {
    return React.createElement('div', { className: 'fb-post', 'data-href': this.postHref(), 'data-width': this.props.width });
  }
});
