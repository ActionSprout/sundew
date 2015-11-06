var React = require('react');
var components = require('react-semantify');

import Footer from './footer.js'
import Header from './header.js'
import LoginButton from './login_button.js'

components['Footer'] = Footer;
components['Header'] = Header;
components['LoginButton'] = LoginButton;

window.AsLabs = components;