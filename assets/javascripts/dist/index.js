'use strict';

var _footer = require('./footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./header.js');

var _header2 = _interopRequireDefault(_header);

var _login_button = require('./login_button.js');

var _login_button2 = _interopRequireDefault(_login_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.AsLabs = {
  Header: _header2.default,
  Footer: _footer2.default,
  Login: _login_button2.default
};
